import React from 'react';
import './home.css';
import { Link } from "react-router-dom";
class Home extends React.Component {
    render() {
        return (
            <div>
                <div className="prd-list">
                    <div className="prd-item">
                        <div className="prd-img">
                            <div className="prd-content">
                                <div className="prd-title"><h1>제목</h1></div>
                                <div className="prd-discription"><Link to="/product/detail">Spider Man</Link></div>
                                <div className="prd-cnt"> 1000 viewer</div>
                            </div>
                        </div>
                    </div>
                    <div className="prd-item">
                        <div className="prd-img">
                            <div className="prd-content">
                                <div className="prd-title"><h1>제목</h1></div>
                                <div className="prd-discription">설명</div>
                                <div className="prd-cnt"> 1000 viewer</div>
                            </div>
                        </div>
                    </div>
                    <div className="prd-item">
                        <div className="prd-img">
                            <div className="prd-content">
                                <div className="prd-title"><h1>제목</h1></div>
                                <div className="prd-discription">설명</div>
                                <div className="prd-cnt"> 1000 viewer</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;