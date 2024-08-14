import React,{useState} from 'react'


export default function TextForm(props) {
    const HandleUpClick = ()=>{
        //console.log("uppercasewasscliced"); 
         let newtext = text.toUpperCase();
        setText(newtext);
        props.showAlert("Converted to uppercase","success")
    }
    const HandleLowerClick = ()=>{
      //console.log("uppercasewasscliced"); 
       let newtext = text.toLowerCase();
      setText(newtext);
      props.showAlert("Converted to Lowercase","success")
  }
  const Clicktoclrar = ()=>{
    //console.log("uppercasewasscliced"); 
     let newtext = "";
    setText(newtext);
    props.showAlert(" You cleard the box","success")
}
    const handleonchange = (event) =>{
        // console.log("onchange"); 
        setText(event.target.value);  
    }


    const handlcopy = () =>{
             console.log("I am copy"); 
var text=document.getElementById("mybox");
text.select();
navigator.clipboard.writeText(text.value);
props.showAlert("Coppied to clipboard","success")

  }
  const RemoveExtraspace = () =>{
  let newtext = text.split(/[ ]+/)
 setText(newtext.join(" "))
 props.showAlert("Extra spaces are removed","success")

}

    const [text, setText] = useState('')
    // text = "New Text";// Wrong way to change the state 
    // setText=("text") // correct way to change the state 
  return (
    <>
    {/* NOTE===> <div className="container" style={{ backgroundColor : props.mode ==='dark' ? 'white' : 'black'}} >  see vedios no 12 herry to change bg color here is somethinfg mistake with bg color */} 
    <div className="container">

        <h2 style={{color: props.mode==='dark'?'white':'black'}}>{props.headings}</h2>
        <div className="mb-3 my-5">
            <textarea className="form-control"  value={text} onChange={handleonchange} style={{backgroundColor: props.mode ==='dark'?'gray':'white', color: props.mode==='dark'?'white':'black'}}  id="mybox" rows="8"></textarea>
        </div>
        <button className="btn btn-outline-primary mx-2"  onClick={HandleUpClick}  >Convert To Uppercase</button>
        <button className="btn btn-outline-danger mx-2"  onClick={HandleLowerClick}  >Convert To lowercase</button>
         <button className="btn btn-outline-success mx-2"  onClick={Clicktoclrar}  >Clear Text</button>
        <button className="btn btn-outline-warning mx-2"  onClick={handlcopy}  >Copy Text</button>
        <button className="btn btn-outline-dark mx-2"  onClick={RemoveExtraspace}  >Remove Extra space</button>

    </div>
     <div className="container my-5" style={{color: props.mode==='dark'?'white':'black'}}>
       <h2 >Text Preview Summary</h2>
      <p>* You Hits : {text.length} characters And {text.split(" ").length} Words </p>
      <p style={{color: props.mode==='dark'?'white':'black'}}>* {0.008 * text.split(" ").length} minut you read this article </p>
      {/* <p>* {text.split(" ").length * 0.48} minut you read this article </p> */}

       <h2>!!--Preview Text--!!</h2>
       <p>{text.length>0 ? text : "WRITE SOMETHING IN ABOVE BOX TO PREVIEW HERE"} </p>
    </div> 
    </>
    
  )
}
 

