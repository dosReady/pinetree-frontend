import React from 'react';
import PageTemplateType1 from '../../template/PageTemplateType1';
import './Prod.css';
class ProdList extends React.Component {

    constructor() {
        super()
        this.prodItemOnclik = this.prodItemOnclik.bind(this);
    }

    prodItemOnclik() {
        this.props.history.push("/product/detail");
    }

    renderProdItem() {
        const items = [];

        for(let i = 0; i < 16; i++) {
            items.push(
                <div className="prod-item" key={i} onClick={this.prodItemOnclik}>
                    <div className="prod-img"></div>
                    <div className="prod-content">내용</div>
                </div>
            )
        }
        return items;
    }
    render() {


        return (
            <PageTemplateType1>
                <div className="prod-list-wrap">
                    <div className="prod-list">
                        {this.renderProdItem()}
                    </div>
                </div>
            </PageTemplateType1>
        )
    }
}

export default ProdList;