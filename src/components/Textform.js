import React, {useState} from 'react';
import PropTypes from 'prop-types'


export default function Textform(props) {
    const handleUPclick = ()=>{
        // console.log("Upper handle clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UPPER Text.", "success");
    }
    const handlelowclick = ()=>{
        // console.log("Upper handle clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lower Text.", "success");
    }
    const handlecleartext =()=>{
        let newText = "";
        setText(newText);
        props.showAlert("Text Cleared.", "success");
    }
    const handleOnChange=(event)=>{
        // console.log("Handle On Change");
        setText(event.target.value);
    }
    const [text, setText] = useState('Enter Text Here.');
    // setText("new data");
    return (
        <>
        <div className="container my-5" style={{color: props.Mode==='dark'? 'white':'black'}}>
            <h1>{props.Heading}</h1>
            <div className="mb-3">
                <label html-for="myBox" className="form-label">Enter text in this textarea</label>
                <textarea className="form-control" style={{backgroundColor: props.Mode==='dark'?'gray':'white', color: props.Mode==='dark'?'white':'black'}} value ={text} onChange={handleOnChange} id="myBox" rows="3"></textarea>
            </div>
            <button className="btn btn-primary my-2 mx-3" onClick={handleUPclick}>Convert Too Uppercase</button>
            <button className="btn btn-primary my-2 mx-3" onClick={handlelowclick}>Convert Too Lowercase</button>
            <button className="btn btn-primary my-2 mx-3" onClick={handlecleartext}>Reset</button>
        </div>

      <i class="fa-solid fa-palette fa-xl mx-2 float-end"></i>
        <div className="container" style={{color: props.Mode==='dark'? 'white':'black'}}>
            <h2>Summay of Text</h2>
            <p>{text.split(" ").length} words and {text.length} charecters.</p>
            <p>{0.08 * text.split(" ").length} - Time to Read for Normal Human.</p>
            <h2>Preview</h2>
            <p style={{width:'100%'}}>{text.length>0?text:'Enter Text to Preview.'}</p>
        </div>
        </>
    )

}
Textform.propTypes = {Heading:PropTypes.string}