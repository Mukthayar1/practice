import React from "react";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, } from "react-router-dom";

//Pages
import { Home, ProductPage, AddProducts } from '../Pages/UserPages'

const MainRoutes = () => {

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" ErrorBoundary={() => <h1>error found</h1>}>
                <Route path="" element={<Home />} />
                <Route path="ProductPage" element={<ProductPage />} />
                <Route path="AddProducts" element={<AddProducts />} />
            </Route>
        )
    );


    return (
        <RouterProvider router={router} />
    )
}

export default MainRoutes