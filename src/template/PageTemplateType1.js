import React from 'react';
import './PageTemplateType1.css'
class PageTemplateType1 extends React.Component {
    render() {
        return (
            <div className="page-template-type1">
                <div className="header-wrap">
                    <div className="title">PINETREE</div>
                </div>
                {this.props.children}
            </div>
        )
    }
}

export default PageTemplateType1;