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
        props.showAlert("Cleared.", "success");
    }
    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to clipboard.", "success");
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
                    <textarea className="form-control mb-2" id="myBox" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'light' ? 'white' : '#212529', color: props.mode === 'light' ? 'black' : 'white'}}></textarea>
                    <button disabled={text.length === 0} className="btn btn-primary my-1 mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
                    <button disabled={text.length === 0} className="btn btn-primary my-1 mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
                    <button disabled={text.length === 0} className="btn btn-primary my-1 mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                    <button disabled={text.length === 0} className="btn btn-primary my-1 mx-1" onClick={handleCopy}>Copy</button>
                    <button disabled={text.length === 0} className="btn btn-primary my-1 mx-1" onClick={handleClearClick}>Clear</button>
                </div>
            </div>
            <div className="container my-2" style={{color: props.mode === 'light' ? 'black' : 'white'}}>
                <h2>Your text summary</h2>
                <p>{text.split(/\s+/).filter((element) => {return element.length !== 0}).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(/\s+/).filter((element) => {return element.length !== 0}).length} minutes to read.</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : 'Nothing to preview.'}</p>
            </div>
        </>
    )
}
