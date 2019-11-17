import React from 'react';
import './home.css';
class Home extends React.Component {
    render() {
        return (
            <div className="page">
                {/* prd-wrap start */}
                <div className="prd-bast-wrap">
                    <div className="list">
                        <div className="item1">
                            <div>작품 1</div>
                        </div>

                        <div className="item2">
                            <div>작품 2</div>
                        </div>

                        <div className="item3">
                            <div>작품 3</div>
                        </div>

                        <div className="item4">
                            <div>작품 4</div>
                        </div>
                    </div>
                </div>
                {/* prd-wrap end */}

                {/* prd-wrap start */}
                <div className="prd-wrap">
                    <div className="list">
                        <div className="item">
                            <div>작품 1</div>
                        </div>

                        <div className="item">
                            <div>작품 2</div>
                        </div>

                        <div className="item">
                            <div>작품 3</div>
                        </div>

                        <div className="item">
                            <div>작품 4</div>
                        </div>

                        <div className="item">
                            <div>작품 5</div>
                        </div>
                        <div className="item">
                            <div>작품 6</div>
                        </div>
                        <div className="item">
                            <div>작품 7</div>
                        </div>
                        <div className="item">
                            <div>작품 8</div>
                        </div>
                        <div className="item">
                            <div>작품 9</div>
                        </div>
                    </div>
                </div>
                  {/* prd-wrap end */}
            </div>
        )
    }
}

export default Home;