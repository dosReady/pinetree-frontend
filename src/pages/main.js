import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom"
import Home from './home';
import Detail from './detail';
import List from './list';

import "./main.css";
class Main extends React.Component {
    render() {
        return (
            <Router>
            <div className="page-container">
                <header>
                    <h1>PINE TREE</h1>
                    <div className="menu-wrap">
                        <Link to="/product">작품사진</Link>
                        <Link to="/contact">연락하기</Link>
                    </div>
                </header>
                <section className="content">
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/product" component={List} />
                            <Route exact path="/product/detail" component={Detail} />
                        </Switch>   
                </section>
            </div>
            </Router>
        )
    }
}

export default Main;