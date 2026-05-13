import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import SoftwareDeveloper from "./pages/SoftwareDeveloper";
import Artist from "./pages/BeyondTheCode";
import HowTheyConnect from "./pages/HowTheyConnect"
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Skills from "./pages/Skills";
import Education from "./pages/Education";
import BeyondCode from "./pages/BeyondTheCode";
import WhyILoveSD from "./pages/WhyILoveSD";
import Carades from "./pages/Carades";
import ReadForSpeed from "./pages/ReadForSpeed";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/projects/carades" element={<Carades />} />
                <Route path="/projects/read-for-speed" element={<ReadForSpeed />} />

                <Route path="/" element={<MainPage />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/education" element={<Education />} />
                <Route path="/beyondcode" element={<BeyondCode />} />
                <Route path="/whyilovesd" element={<WhyILoveSD />} />

                <Route path="/developer" element={<SoftwareDeveloper />} />
                <Route path="/artist" element={<Artist />} />
                <Route path="/howtheyconnect" element={<HowTheyConnect />} />


            </Routes>
        </BrowserRouter>
    );
}