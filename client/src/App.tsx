import { Routes, Route } from "react-router-dom";
import { NotebookPage, PortalPage, SignInPage, SignUpPage } from "./pages";

function App() {
    return (
        <Routes>
            <Route element={<PortalPage />}>
                <Route path="/sign-in" element={<SignInPage />} />
                <Route path="/sign-up" element={<SignUpPage />} />
            </Route>
            <Route path="/" element={<NotebookPage />}></Route>
        </Routes>
    );
}

export default App;
