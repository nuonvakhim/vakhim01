import React from "react";
import qr from "/src/assets/Icons/gg_qr.svg";
import bubblever from "/src/assets/Icons/uil_comment-verify.svg";
import camera from "/src/assets/Icons/fluent_scan-camera-28-filled.svg";
const Landing3 = () => {
  return (
    <div className="bg-white bg-opacity-0 h-[990px] px-[100px]">
      {" "}
      <div class=" py-6 sm:py-8 lg:py-12">
        <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div class="mb-10 md:mb-16 flex flex-col place-items-center justify-center gap-5 pt-[101px]">
            <div className="flex flex-col w-fit ">
              <h2 class="mb-4 text-center text-2xl font-bold text-myText md:mb-6 lg:text-3xl">
                How it works
              </h2>
              <div className="h-[5px] rounded-[20px] self-stretch bg-secondary "></div>
            </div>

            <p class="  mx-auto max-w-screen-md text-center text-myText md:text-lg">
              This is a section of some simple filler text, also known as
              placeholder text. It shares some characteristics of a real written
              text but is random or otherwise generated.
            </p>
          </div>

          <div class="grid gap-12 sm:grid-cols-2 xl:grid-cols-3 xl:gap-16">
            <div class="flex flex-col items-center">
              <div class="mb-2 flex h-[83px] w-[83px] items-center pb-[14px] pt-[13px] pl-[14px] pr-[13px] justify-center bg-primary rounded-full sm:mb-4 md:h-14 md:w-14">
                <img
                  src={qr}
                  alt=""
                  className="w-[56px] h-[56px] flex-shrink-0 object-contain"
                />
              </div>

              <h3 class="mb-2 text-center text-lg font-semibold md:text-xl">
                Scan QR Code
              </h3>
              <p class="mb-2 text-center text-[14.4px] text-myText ">
                Using any smartphone simply scan the QR code from the CertLock
                secured certificate.
              </p>
            </div>
            <div class="flex flex-col items-center">
              <div class="mb-2 flex h-[83px] w-[83px] items-center pb-[14px] pt-[13px] pl-[14px] pr-[13px] justify-center bg-primary rounded-full sm:mb-4 md:h-14 md:w-14">
                <img
                  src={bubblever}
                  alt=""
                  className="w-[56px] h-[56px] flex-shrink-0 object-contain"
                />
              </div>

              <h3 class="mb-2 text-center text-lg font-semibold md:text-xl">
                Verify on Blockchain
              </h3>
              <p class="mb-2 text-center text-[14.4px] text-myText ">
                The display page shows the hash value and the blockchain
                transaction ID. Click on the “Verify on Blockchain” button to
                double-check that these documents are indeed verified on the
                blockchain.
              </p>
            </div>
            <div class="flex flex-col items-center">
              <div class="mb-2 flex h-[83px] w-[83px] items-center pb-[14px] pt-[13px] pl-[14px] pr-[13px] justify-center bg-primary rounded-full sm:mb-4 md:h-14 md:w-14">
                <img
                  src={camera}
                  alt=""
                  className="w-[56px] h-[56px] flex-shrink-0 object-contain"
                />
              </div>

              <h3 class="mb-2 text-center text-lg font-semibold md:text-xl">
                Scanning App
              </h3>
              <p class="mb-2 text-center text-[14.4px] text-myText ">
                The camera app of iPhones, some of the android phones and any QR
                reader app can be used to scan the CertLock certificate.
              </p>
            </div>
            <div class="flex flex-col items-center">
              <div class="mb-2 flex h-[83px] w-[83px] items-center pb-[14px] pt-[13px] pl-[14px] pr-[13px] justify-center bg-primary rounded-full sm:mb-4 md:h-14 md:w-14">
                <img
                  src={qr}
                  alt=""
                  className="w-[56px] h-[56px] flex-shrink-0 object-contain"
                />
              </div>

              <h3 class="mb-2 text-center text-lg font-semibold md:text-xl">
                Scan QR Code
              </h3>
              <p class="mb-2 text-center text-[14.4px] text-myText ">
                Using any smartphone simply scan the QR code from the CertLock
                secured certificate.
              </p>
            </div>
            <div class="flex flex-col items-center">
              <div class="mb-2 flex h-[83px] w-[83px] items-center pb-[14px] pt-[13px] pl-[14px] pr-[13px] justify-center bg-primary rounded-full sm:mb-4 md:h-14 md:w-14">
                <img
                  src={bubblever}
                  alt=""
                  className="w-[56px] h-[56px] flex-shrink-0 object-contain"
                />
              </div>

              <h3 class="mb-2 text-center text-lg font-semibold md:text-xl">
                Verify on Blockchain
              </h3>
              <p class="mb-2 text-center text-[14.4px] text-myText ">
                The display page shows the hash value and the blockchain
                transaction ID. Click on the “Verify on Blockchain” button to
                double-check that these documents are indeed verified on the
                blockchain.
              </p>
            </div>
            <div class="flex flex-col items-center">
              <div class="mb-2 flex h-[83px] w-[83px] items-center pb-[14px] pt-[13px] pl-[14px] pr-[13px] justify-center bg-primary rounded-full sm:mb-4 md:h-14 md:w-14">
                <img
                  src={camera}
                  alt=""
                  className="w-[56px] h-[56px] flex-shrink-0 object-contain"
                />
              </div>

              <h3 class="mb-2 text-center text-lg font-semibold md:text-xl">
                Scanning App
              </h3>
              <p class="mb-2 text-center text-[14.4px] text-myText ">
                The camera app of iPhones, some of the android phones and any QR
                reader app can be used to scan the CertLock certificate.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing3;
