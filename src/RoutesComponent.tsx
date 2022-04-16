import React from "react";
import {Route, Routes} from "react-router-dom";
import {Titles} from "./components/titles/Titles";
import {Main} from "./components/main/Main";
import {Category} from "./components/category/Category";
import {Poster} from "./components/poster/Poster";


const RoutesComponent = () => {

    const routes = [{
        path: '/',
        component: <Main/>,
    }, {
        path: '/main',
        component: <Main/>,
    }, {
        path: '/titles/:filmName',
        component: <Titles/>,
    }, {
        path: '/category/:movieName',
        component: <Category/>,
    }, {
        path: '/poster',
        component: <Poster/>,
    }
    ];

    const routeComponents = routes.map(({path, component}, key) => <Route path={path} element={component} key={key} />);
    console.log(routeComponents);
    return (
        <Routes>
            {routeComponents}
        </Routes>
    );
};

export default RoutesComponent;
