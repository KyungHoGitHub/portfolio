import './App.css'
import DashBoard from "./component/DashBoard.jsx";
import SignupForm from "./component/SignupForm.jsx";
import UploadComponent from "./component/UploadComponent.jsx";
import {Route, Router, Routes} from "react-router-dom";
import {Layout} from "antd";
import SignUpPage from "./pages/SignUpPage.jsx";
import ProjectPage from "./pages/ProjectPage.jsx";

function App() {


    return (
        <Routes>
            <Route path="/signup" element={<SignUpPage/>}/>
            <Route path="/" element={<DashBoard/>}/>
            <Route path="/project" element={<ProjectPage/>}/>
            <>test</>
        </Routes>
    )
}

export default App
