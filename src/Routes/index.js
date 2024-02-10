import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

//Pages
import { Home, ProductPage, AddProducts } from '../Pages/UserPages'

const MainRoutes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/ProductPage">
                    <ProductPage />
                </Route>
                <Route path="/AddProducts">
                    <AddProducts />
                </Route>
            </Switch>
        </Router>
    )
}

export default MainRoutes