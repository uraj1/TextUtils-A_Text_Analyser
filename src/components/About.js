import React from "react";

export default function About(props) {
 let myStyle = {
  color: props.mode === 'dark'? 'white':'#042743',
  backgroundColor : props.mode === 'dark'? 'rgb(36 74 104)': 'white'
 }
  return (
    <>
  
    <div className="container" style ={ {color: props.mode === 'dark'? 'white': '#042743'}}> 
    <h1 className="container my-3">About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button style ={myStyle}
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong>Analyse your text</strong>
              
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style ={myStyle}>
             TextUtils gives you a way to analyze text quickly
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button style ={myStyle}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
             <strong>Free To Use</strong> 
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style ={myStyle}>
            TextUtil is a free character counter tool that provides instant charCter count and word count statistics
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button style ={myStyle}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
             <strong>Browser Compatible</strong> 
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style ={myStyle}>
             This woud counter software works n any web browser like chrome, firefox, opera etc.
            </div>
          </div>
        </div>
      </div>
    </div>
  </>

  );
}
