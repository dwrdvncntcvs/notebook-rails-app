import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context";
import { NotebookProvider } from "./context/Notebook.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <BrowserRouter>
        <AuthProvider>
            <NotebookProvider>
                <App />
            </NotebookProvider>
        </AuthProvider>
    </BrowserRouter>
);
