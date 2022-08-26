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

import Login from "./components/pure/Login";
import LoginFormik from "./components/pure/forms/LoginFormik";
import TodosContainer from "./components/containers/TodoContainer";
import TodoFormContainer from "./components/containers/TodoFormContainer";
import FilterOptions from "./components/pure/FilterOptions";

function App() {
  return (
    <div style={{ height: '100%' }}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<>
            <TodosContainer />
            <TodoFormContainer />
            <FilterOptions />
          </>} />
        </Routes>
        {/* <Routes>
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
      </Routes> */}

      </BrowserRouter >
    </div>
  );
}

export default App;
