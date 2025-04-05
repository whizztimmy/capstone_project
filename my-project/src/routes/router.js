import { createBrowserRouter } from "react-router";
  import Form from "../pages/Form";
  import ticket from "../pages/ticket";

  
const router = createBrowserRouter([
    {
      path: "/",
      Component: Form
    },
    {
      path: "/ticket",
      Component: ticket
    }
  ]);

  export default router;