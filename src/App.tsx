import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import SoftwareDeveloper from "./SoftwareDeveloper";
import Artist from "./Artist";



export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/developer" element={<SoftwareDeveloper />} />
                <Route path="/artist" element={<Artist />} />
                <Route path="/artist" element={<Artist />} />


            </Routes>
        </BrowserRouter>
    );
}