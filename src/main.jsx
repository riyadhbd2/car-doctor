import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import "./index.css";
import AuthProvider from "./providers/AuthProvider.jsx";
import router from "./routes/Routes.jsx";

createRoot(document.getElementById("root")).render(
  <div className="container mx-auto">
    <StrictMode>
      <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
      </AuthProvider>
    </StrictMode>
    ,
  </div>
);
