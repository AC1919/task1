import React,{useState} from "react";
export default function TextForm(props)
{
    
    const handleOnChange = (event) =>{
        setText(event.target.value);
    }
    const [text, setText]=useState('');
    return(
        <div>
            <h1>{props.heading}</h1>
            <div className='box'>
                <textarea className='text-area' value={text} onChange={handleOnChange}  placeholder='enter text here' id='textarea'></textarea>
            </div>
            <div className='para'>
                <p>Words : {text.split(" ").length-1}</p>
            </div>
        </div>
    )
}