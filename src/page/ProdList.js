import React from 'react';
import PageTemplateType1 from '../template/PageTemplateType1';
import './Prod.css';
class ProdList extends React.Component {
    render() {
        return (
            <PageTemplateType1>
                <div className="prod-list-wrap">목록</div>
            </PageTemplateType1>
        )
    }
}

export default ProdList;