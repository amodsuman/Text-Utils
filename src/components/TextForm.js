import React, {useState} from 'react'


export default function TextForm(props) {
    // On Click
    const handleUpClick = () => {
        setText(text.toUpperCase());
        props.showAlert("Converted to uppercase.", "success");
    }
    const handleLowClick = () => {
        setText(text.toLowerCase());
        props.showAlert("Converted to lowercase.", "success");
    }
    const handleClearClick = () => {
        setText('');
        props.showAlert("Text cleared.", "success");
    }
    const handleCopy = () => {
        var ctext = document.getElementById('myBox');
        ctext.select();
        navigator.clipboard.writeText(ctext.value);
        props.showAlert("Text copied to clipboard.", "success");
    }
    const handleExtraSpaces = () => {
        let stext = text.split(/[ ]+/);
        setText(stext.join(" "));
        props.showAlert("Extra spaces removed.", "success");
    }

    // On Change
    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState('');

    return (
        <>
            <div className="container my-4" style={{color: props.mode === 'light' ? 'black' : 'white'}}>
                <h1>{props.heading}</h1>
                <div className="">
                    <textarea className="form-control mb-2" id="myBox" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'light' ? 'white' : 'grey', color: props.mode === 'light' ? 'black' : 'white'}}></textarea>
                    <button className="btn btn-primary mb-2 mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
                    <button className="btn btn-primary mb-2 mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
                    <button className="btn btn-primary mb-2 mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                    <button className="btn btn-primary mb-2 mx-2" onClick={handleCopy}>Copy Text</button>
                    <button className="btn btn-primary mb-2 mx-2" onClick={handleClearClick}>Clear Text</button>
                </div>
            </div>
            <div className="container my-2" style={{color: props.mode === 'light' ? 'black' : 'white'}}>
                <h2>Your text summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} minutes to read.</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : 'Enter text to preview.'}</p>
            </div>
        </>
    )
}
