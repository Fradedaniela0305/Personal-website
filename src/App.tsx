import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import SoftwareDeveloper from "./SoftwareDeveloper";
import Artist from "./Artist";
import HowTheyConnect from "./HowTheyConnect"



export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/developer" element={<SoftwareDeveloper />} />
                <Route path="/artist" element={<Artist />} />
                <Route path="/howtheyconnect" element={<HowTheyConnect />} />


            </Routes>
        </BrowserRouter>
    );
}