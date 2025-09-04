import { BrowserRouter, Routes, Route } from "react-router-dom";


import Home from "../pages/home/home";
import Film from "../pages/Film/film";


import Header from "../components/Header/header";

function RoutesApp () {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={ <Home/> }/>
                <Route path="/film/:id" element={ <Film/> }/>
            </Routes>
        </BrowserRouter>
    );
};


export default RoutesApp;