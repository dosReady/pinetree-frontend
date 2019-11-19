import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import ProdList from '../page/ProdList';
import ProdDetail from '../page/ProdDetail';

class RenderTemplate extends React.Component {
    render() {
        return (
            <Router>
            <div className="page-container">
                <Switch>
                    <Route exact path="/" component={ProdList} />
                    <Route exact path="/product/detail" component={ProdDetail} />
                </Switch>  
            </div>
            </Router>
        )
    }
}

export default RenderTemplate;