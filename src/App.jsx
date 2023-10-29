import LoginComponent from "./components/Authentication/LoginComponent";
import LandingPage from "./components/LandingPage/LandingPage";
import SidebarComponent from "./components/Sidebar&Navbar/SidebarComponent";
import TestComponent from "./components/Test/TestComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminDashboard from "./components/Admins/Dashboard/AdminDashboard";
import UserRegister from "./components/Admins/UserRegistered/UserRegister";
import SetReferenceForRequest from "./components/Admins/CertificateManagement/SetReferenceForRequest";
import CreateTemplate from "./components/Admins/CertificateManagement/CreateTemplate";
import TinyEditor from "./components/Admins/CertificateManagement/TinyEditor";
import TableCreateTemplate from "./components/Admins/CertificateManagement/TableCreateTemplate";
import CertificateRequest from "./components/Admins/CertificateRequest/CertificateRequest";
import ImagePreview from "./components/Admins/CertificateManagement/ImagePreview";
import UserCertificate from "./components/Admins/UserCertificate/UserCertificate";
import SideAndNavBarComponent from "./components/Users/Sidebar&NavbarUser/SideAndNavBarComponent";
import UserDashboard from "./components/Users/Dashboard/UserDashboard";
import VerifiedCertificate from "./components/Users/Dashboard/ViewAsList";
import TotalCertificate from "./components/Users/Dashboard/TotalCertificate";
import RegisterAdmin from "./components/Admins/RegisterNewAdmin/RegisterAdmin";
import Setting from "./components/ProfileSetting/Setting";
import ForgotPassword from "./components/Authentication/ForgotPassword/ForgotPassword";
import ResetPassword from "./components/Authentication/ForgotPassword/ResetPassword";
import VerifyCode from "./components/Authentication/ForgotPassword/VerifyCode";
import Page404NotFound from "./components/Pages/Page404NotFound";
import UserCertificateRequest from "./components/Users/CertificateRequest/UserCertificateRequest";
import ListAllCardCertificateProgress from "./components/Users/CertificateRequest/ListAllCardCertificateProgress";
import ListRequestingCertificate from "./components/Users/CertificateRequest/ListRequestingCertificate";
import ListRejectedCertificate from "./components/Users/CertificateRequest/ListRejectedCertificate";
import ListVerifiedCertificate from "./components/Users/CertificateRequest/ListVerifiedCertificate";
import ListApprovedCertificate from "./components/Users/CertificateRequest/ListApprovedCertificate";
import NotificationModule from "./components/Notification/NotificationModule";
import Test1Component from "./components/Test/Test1Component";
import RequestMoreCert from "./components/Users/Dashboard/RequestMore";
import FullWidthTabs from "./components/Users/Dashboard/RequestMore";
import RequestMore from "./components/Users/Dashboard/RequestMore";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <VerifyCode /> */}
        {/* <Page404NotFound /> */}
        <Routes>
          <Route path="test1" element={<Test1Component />} />
          <Route path="test" element={<TestComponent />} />
          <Route path="authentication" element={<LoginComponent />} />
          {/* <Route path="register" element={<RegisterComponent />} /> */}
          <Route path="" element={<LandingPage />} />
          <Route path="admin" element={<SidebarComponent />}>
            <Route path="" element={<AdminDashboard />} />
            <Route path="user-register" element={<UserRegister />} />
            <Route
              path="certificate-manage/set-reference"
              element={<SetReferenceForRequest />}
            />
            <Route
              path="certificate-manage/create-template"
              element={<CreateTemplate />}
            >
              <Route path="" element={<TableCreateTemplate />} />
              <Route path="design" element={<TinyEditor />} />
            </Route>
            <Route
              path="certificate-request"
              element={<CertificateRequest />}
            />
            <Route path="user-certificate" element={<UserCertificate />} />
            <Route path="register-admin" element={<RegisterAdmin />} />
            <Route path="setting" element={<Setting />} />
          </Route>
          <Route path="user" element={<SideAndNavBarComponent />}>
            <Route path="" element={<UserDashboard />}>
              <Route path="" element={<TotalCertificate />} />
              <Route path="cert-list" element={<VerifiedCertificate />} />
              <Route path="request-certificate" element={<RequestMore />} />
            </Route>
            {/* <Route path="overview" element={<TestComponent />} /> */}
            <Route
              path="certificate-request"
              element={<UserCertificateRequest />}
            >
              <Route path="all" element={<ListAllCardCertificateProgress />} />
              <Route
                path="requesting"
                element={<ListRequestingCertificate />}
              />
              <Route path="rejected" element={<ListRejectedCertificate />} />
              <Route path="verified" element={<ListVerifiedCertificate />} />
              <Route path="approved" element={<ListApprovedCertificate />} />
            </Route>
            <Route path="profile" element={<TestComponent />} />
            <Route path="setting" element={<TestComponent />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
