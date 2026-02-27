import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../layouts/AppLayout";
import RecordList from "../components/RecordList";
import Record from "../components/Record";

export const router = createBrowserRouter([
  {
    path: "/", // A parent route
    element: <AppLayout />, // A layout component
    // <Outlet /> inside AppLayout where the children render
    children: [
      { index: true, element: <RecordList /> }, // A default child route
      // Nested child routes (create, edit/:id)
      { path: "create", element: <Record /> },
      { path: "edit/:id", element: <Record /> },
    ],
  },
]);
