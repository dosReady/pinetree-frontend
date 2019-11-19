import React from 'react';
import CodeMirror from 'react-codemirror';
import 'codemirror/mode/markdown/markdown';
import 'codemirror/lib/codemirror.css'
class ProdMng extends React.Component {
   
    constructor() {
        super();
        this.state = {
            code: '# Heading\n\nSome **bold** and _italic_ text\nBy [Jed Watson](https://github.com/JedWatson)',
            readOnly: false,
            mode: 'markdown'
        } 

        this.updateCode = this.updateCode.bind(this);

       
    }
    updateCode = (newCode) => {
        this.setState({
            code: newCode
        });
    }

    render() {
        let options = {
            lineNumbers: true,
			//readOnly: this.state.readOnly,
			mode: this.state.mode
        }
        return (
            <div>
                <CodeMirror ref="editor" value={this.state.code} onChange={this.updateCode} options={options} />    
            </div>
        )
    }
}

export default ProdMng;