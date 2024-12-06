import React from "react";
import App from "./App";
import { createBrowserRouter } from "react-router-dom";
import Admin from "./components/Admin/Admin";
import User from "./components/User/User";
import ErrorPage from "./components/Error/ErrorPage";
import HomePage from "./components/Home/HomePage";
import ManageUser from "./components/Admin/Content/ManageUser";
import Dashboard from "./components/Admin/Content/Dashboard";
import Login from "./components/Auth/Login";
import { RouterProvider } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Register from "./components/Auth/Register";
import ListQuiz from "./components/User/ListQuiz";
import DetailQuiz from "./components/User/DetailQuiz";
import ManageQuiz from "./components/Admin/Content/Quiz/ManageQuiz";
import ManageQuestions from "./components/Admin/Content/Question/ManageQuestions";
import PrivateRoute from "./routes/PrivateRoute";

const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },

      {
        path: "user",
        element: (
          <PrivateRoute>
            <ListQuiz />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "quiz/:id",
    element: <DetailQuiz />,
  },
  {
    path: "/admin",
    element: (
      <PrivateRoute>
        <Admin />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "manage-user",
        element: <ManageUser />,
      },
      {
        path: "manage-quizzes",
        element: <ManageQuiz />,
      },
      {
        path: "manage-questions",
        element: <ManageQuestions />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

const Layout = () => {
  return (
    <>
      <RouterProvider router={route} />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default Layout;
