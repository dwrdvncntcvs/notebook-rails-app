import { Routes, Route } from "react-router-dom";
import {
    CreateNotebookPage,
    NotebookPage,
    PortalPage,
    SignInPage,
    SignUpPage,
} from "./pages";
import { AuthGuard } from "./routes";
import Persistent from "./routes/Persistent";

function App() {
    return (
        <Routes>
            <Route element={<PortalPage />}>
                <Route path="/sign-in" element={<SignInPage />} />
                <Route path="/sign-up" element={<SignUpPage />} />
            </Route>
            <Route path="" element={<Persistent />}>
                <Route element={<AuthGuard />}>
                    <Route path="/" element={<NotebookPage />}>
                        <Route path="create" element={<CreateNotebookPage />} />
                    </Route>
                </Route>
            </Route>
        </Routes>
    );
}

export default App;
