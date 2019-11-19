import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import ProdList from '../page/prod/ProdList';
import ProdDetail from '../page/prod/ProdDetail';
import ProdMng from '../page/prod/ProdMng';

class RenderTemplate extends React.Component {
    render() {
        return (
            <Router>
            <div className="page-container">
                <Switch>
                    <Route exact path="/" component={ProdList} />
                    <Route exact path="/product/detail" component={ProdDetail} />
                    <Route exact path="/product/insert" component={ProdMng} />
                </Switch>  
            </div>
            </Router>
        )
    }
}

export default RenderTemplate;