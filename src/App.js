import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import {
  HomePage,
  PageNotFound,
  AboutPage,
  ProfilePage,
  TasksListPage,
  TaskDetailPage,
} from "./pages";

import LoginPage from "./pages/auth/LoginPage";

import PrivateRoutes from "./utils/PrivateRoutes";
import RedirectIfAuth from "./utils/RedirectIfAuth";
import DashBoard from "./pages/dashboard/DashBoard";
import RegisterPage from "./pages/auth/RegisterPage";

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route element={<RedirectIfAuth />}>
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/register" element={<RegisterPage />} />
        </Route>

        <Route element={<PrivateRoutes />}>
          <Route exact path="/profile" element={<ProfilePage />} />
          <Route exact path="/" element={<DashBoard />} />
          <Route exact path="/about" element={<AboutPage />} />
          <Route exact path="/tasks" element={<TasksListPage />} />
          <Route exact path="/tasks/:id" element={<TaskDetailPage />} />
          <Route exact path="*" element={<PageNotFound />} />
        </Route>

      </Routes>

    </BrowserRouter >
  );
}

export default App;
