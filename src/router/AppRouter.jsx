import { Route, Routes } from "react-router-dom";
import Navbar from "../Navbar";
import {
  HomePage,
  DashboardPage,
  LoginPage,
  RegisterPage,
  CreatorPage,
  PerfilPage,
  LikesPage,
} from "../pages";
import { PrivateRoute } from "./PrivateRoute";
import ContactPage from "../pages/ContactPage";
import NewsPage from "../pages/NewsPage";
import DatesPage from "../pages/DatesPage";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="news" element={<NewsPage />} />
          <Route path="creator" element={<CreatorPage />} />

          <Route
            path="dashboard"
            element={
              <PrivateRoute>
                <DashboardPage />
              </PrivateRoute>
            }
          />
        </Route>
        <Route
          path="perfil"
          element={
            <PrivateRoute>
              <PerfilPage />
            </PrivateRoute>
          }
        />
        <Route
          path="dates"
          element={
            <PrivateRoute>
              <DatesPage />
            </PrivateRoute>
          }
        />
        <Route
          path="likes"
          element={
            <PrivateRoute>
              <LikesPage />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
};

export default AppRouter;
