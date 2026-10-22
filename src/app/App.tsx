import { RouterProvider } from "react-router";
import { router } from "./routes";
import { ResumeModalProvider } from "./context/ResumeModalContext";
import InteractiveBackground from "./components/InteractiveBackground";

export default function App() {
  return (
    <ResumeModalProvider>
      <InteractiveBackground />
      <RouterProvider router={router} />
    </ResumeModalProvider>
  );
}