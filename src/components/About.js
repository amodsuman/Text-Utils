import React from 'react'

export default function About(props) {

    let myStyle = {
        color: props.mode === 'dark' ? 'white' : 'black',
        backgroundColor: props.mode === 'dark' ? '#212121' : 'white'
    }
        
  return (
    <div className="container my-4 py-2" style={myStyle}>
        <h1>About Us</h1>
        <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{color: props.mode === 'dark' ? 'white' : 'black', backgroundColor: props.mode === 'dark' ? '#212529' : 'white'}}>
                    <strong>Analyze Your Text</strong>
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    Textutils give you a way to analyze your text quickly and efficiently. Be it word count, character count, etc. 
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{color: props.mode === 'dark' ? 'white' : 'black', backgroundColor: props.mode === 'dark' ? '#212529' : 'white'}}>
                    <strong>Free To Use</strong>
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    Textutils is a free character counter tool that provides instant character count and word count statistics for a given text. Textutils reports the number of words and characters. Thus it is suitable for writing text with word/character limit.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{color: props.mode === 'dark' ? 'white' : 'black', backgroundColor: props.mode === 'dark' ? '#212529' : 'white'}}>
                    <strong>Browser Compatible</strong>
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    This word app works in any web browsers such as Chrome, Firefox, Edge, etc. It isuits to count characters in facebook, blog, excel document, pdf document, essay, etc.
                </div>
                </div>
            </div>
        </div>
    </div>                    
  )
}
