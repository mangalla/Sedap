import React, { Suspense } from "react"; // Tambahkan Suspense jika ingin lazy loading berjalan
import { Route, Routes } from "react-router-dom";
import "./assets/tailwind.css";
import MainLayout from "./layouts/MainLayout";
import AuthLayouts from "./layouts/AuthLayouts";
import Loading from "./components/Loading";

const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Customers = React.lazy(() => import("./pages/Customers"));
const Orders = React.lazy(() => import("./pages/Orders"));
const ErrorPage = React.lazy(() => import("./components/ErrorPage")); 

const Login = React.lazy(() => import("./pages/auth/Login"));
const Register = React.lazy(() => import("./pages/auth/Register"));
const Forgot = React.lazy(() => import("./pages/auth/Forgot"));

function App() {
  const errorContent = {
    400: {
      title: "Bad Request",
      description: "Permintaan tidak dapat dipahami oleh server karena sintaksis yang salah.",
      image: "https://illustrations.popsy.co/gray/crashed-error.svg"
    },
    401: {
      title: "Unauthorized",
      description: "Maaf, Anda memerlukan autentikasi untuk mengakses halaman ini.",
      image: "https://illustrations.popsy.co/gray/lock.svg"
    },
    403: {
      title: "Forbidden",
      description: "Anda tidak memiliki izin untuk mengakses direktori atau halaman ini.",
      image: "https://illustrations.popsy.co/gray/shaking-hands.svg"
    },
    404: {
      title: "Page Not Found",
      description: "Halaman yang Anda cari tidak tersedia di sistem kami.",
      image: "https://illustrations.popsy.co/gray/falling-guy.svg"
    }
  };

  return (
    // PENTING: Bungkus dengan Suspense karena menggunakan React.lazy
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route element={<AuthLayouts />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
        </Route>

        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/customers" element={<Customers />} />

          {/* Sekarang ErrorPage sudah terdefinisi dengan benar */}
          <Route path="/error-400" element={<ErrorPage errorCode="400" {...errorContent[400]} />} />
          <Route path="/error-401" element={<ErrorPage errorCode="401" {...errorContent[401]} />} />
          <Route path="/error-403" element={<ErrorPage errorCode="403" {...errorContent[403]} />} />
          <Route path="*" element={<ErrorPage errorCode="404" {...errorContent[404]} />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;