import React from 'react';
import CodeMirrorRender from '../../component/CodeMirrorRender';
import MarkDownPreviewRender from '../../component/MarkDownPreviewRender';
class ProdMng extends React.Component {
    constructor() {
        super()

        this.editor = React.createRef();
    }

    render() {
        return (
            <div>
                <CodeMirrorRender ref={this.editor}/>
                <MarkDownPreviewRender value="#test"/>
            </div>
        )
    }
}

export default ProdMng;