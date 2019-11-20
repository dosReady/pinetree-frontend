import React from 'react';
import marked from 'marked';
class MarkDownPreviewRender extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.rawMarkup = this.rawMarkup.bind(this);
    }

    rawMarkup = () => {
        let rawMarkup = marked("# hi");
        console.log(rawMarkup)
        return { __html: rawMarkup};
    }

    render = () => {
        return (
            <div className="preview-block" dangerouslySetInnerHTML={this.rawMarkup()}>
            </div>
        )
    }
}

export default MarkDownPreviewRender;