import React, { useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Button, TextField } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import ClearIcon from "@mui/icons-material/Clear";
import ExplicitIcon from "@mui/icons-material/Explicit";
import FolderIcon from "@mui/icons-material/Folder";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ListFiles from "./ListFiles";
import { NavLink } from "react-router-dom";

export default function TinyEditor() {
  const editorRef = useRef();
  const [showModule, setModule] = useState(false);

  const handleImageUpload = (blobInfo) => {
    return new Promise((resolve, reject) => {
      // const file = new File([blobInfo.blob()],"sokreach");
      const file = blobInfo.blob();
      // Perform the API call to upload the image
      // Replace 'uploadUrl' with the actual endpoint for uploading images
      const formData = new FormData();
      formData.append("image", file, "filename.jpg");

      fetch(`${BASE_URL1}/api/v1/images/Files`, {
        method: "POST",
        body: formData,
        // headers: {
        //   "Content-Type": "multipart/form-data"
        // },
        onUploadProgress: (event) => {
          const progressPercentage = Math.round(
            (event.loaded * 100) / event.total
          );
          // You can update the progress if needed
        },
      })
        .then((response) => response.json())
        .then((result) => {
          resolve(
            `${BASE_URL1}/api/v1/images/PROFILE?fileName=` + result.payload
          ); // Resolve the Promise with the image URL
        })
        .catch((error) => {
          // resolve(URL.createObjectURL(file)); // Reject the Promise with an error message
        });
    });
  };

  return (
    <div>
      {/* header */}
      <div className="flex relative justify-between items-center self-stretch w-full bg-white shadow-myshadow rounded-myrounded py-6 px-6 mb-4">
        <div className="flex items-center justify-center gap-5">
          <p className="text-primary text-[16px] leading-normal text-center">
            Template name: <span className="text-secondary">*</span>
          </p>
          <TextField
            className=" shadow-myshadow"
            label="Your template name"
            style={{
              color: "#004461",
              width: "37rem",
              border: "0px solid #F5F5F5",
            }}
            id="fullWidth"
          />
          <Button
            style={{
              backgroundColor: "#004461",
            }}
            variant="contained"
            startIcon={<SaveIcon className=" text-white" />}
          >
            Save
          </Button>
          <NavLink to="/admin/certificate-manage/create-template">
            <Button
              variant="outlined"
              style={{ color: "#004461", border: "1px solid #004461" }}
              startIcon={<ClearIcon className=" text-secondary" />}
            >
              Cancel
            </Button>
          </NavLink>
        </div>
      </div>
      <div className="w-auto h-auto shadow-myshadow">
        <div className=" w-fit p-2 bg-primary flex gap-5 rounded-myrounded mb-4">
          <Button
            style={{
              width: "8rem",
              backgroundColor: `${showModule ? "#004461" : "white"}`,
              color: `${showModule ? "white" : "#004461"}`,
            }}
            variant="contained"
            startIcon={
              <ExplicitIcon
                className={`${showModule ? "text-white" : "text-primary"}`}
              />
            }
          >
            Content
          </Button>
          <Button
            variant="contained"
            style={{
              backgroundColor: `${showModule ? "white" : "#004461"}`,
              color: `${showModule ? "#004461" : "white"}`,
              width: "8rem",
            }}
            startIcon={
              <FolderIcon
                className={`${showModule ? "text-primary" : "text-white"}`}
              />
            }
            onClick={() => setModule(!showModule)}
          >
            File
          </Button>
        </div>

        <Editor
          apiKey="fo6mbz4uz1n1jhnhuols7ar2n13xg9cktwxuf7zb23fojgzq"
          onInit={(evt, editor) => (editorRef.current = editor)}
          // initialValue={form}
          init={{
            height: 800,
            menubar: true,
            plugins: [
              "advlist",
              "autolink",
              "lists",
              "link",
              "image",
              "charmap",
              "preview",
              "anchor",
              "searchreplace",
              "visualblocks",
              "fullscreen",
              "insertdatetime",
              "media",
              "table",
              "help",
              "wordcount",
              "image",
            ],
            toolbar:
              "undo redo | casechange blocks | bold italic backcolor | " +
              "alignleft aligncenter alignright alignjustify | " +
              "bullist numlist checklist outdent indent | removeformat | a11ycheck code table help | image",
            images_upload_handler: handleImageUpload,
            content_style:
              "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
          }}
        />
      </div>
      {showModule ? <ListFiles setModule={setModule} /> : null}
    </div>
  );
}
