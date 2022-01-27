import React from "react";
import {Route, Routes} from "react-router-dom";
import {Titles} from "./components/titles/Titles";
import {Main} from "./components/main/Main";
import {Category} from "./components/category/Category";
import {Pagination} from "./components/pagination/Pagination";
import {Poster} from "./components/poster/Poster";


const RoutesComponent = () => {


    return (
        <Routes>

            <Route path={"/"} element={<Main/>}/>
            <Route path={"/main"} element={<Main/>}/>
            <Route path={"/titles/:filmName"} element={<Titles/>}/>
            {/*<Route path={"/titles/:filmName"} element={<Pagination/>}/>*/}
            <Route path={"/category/:movieName"} element={<Category/>}/>

            <Route path={"/poster"} element={<Poster/>}/>

            {/*<Route path={"/searchType"} element={<SearchType />} />*/}

        </Routes>
    );
};

export default RoutesComponent;
