import { useState } from "react";
import "./upload.css"
const Upload=()=>{
  
  const [inpValues, setInpV]=useState({
    fieldOne:"",
    fieldTwo:"",
    expDate:"",
    hyperLink:"",
    scopeHyperLink:""
  })
const [file,setFile]=useState("")
                          
  const [btnValue,setBtnVal]=useState(true)
  const handleInput=(e)=>{
    // handle file and enable or disable uplaod button
    if(e.target.name=="file"){
        
        setFile(URL.createObjectURL(e.target.files[0]));
      // when file select enable upload button

setBtnVal(false)
    }
    setInpV((prev)=> ({...prev,[e.target.name]:e.target.value}))
  }
  const handleUpload= async ()=>{
    let settings={
      method:"post",
      Headers:{
        'Content-Type':'Multipart/form-data'
      },
      body:file
    }
    const res=await fetch("http://localhost:5000/upload",settings)
    const result= await res.text()
    console.log(result)

  }
  
  return(
    <>
    <div className="formBox">
      <div className="inputs">
<input type="text" onChange={handleInput} name="fieldOne" placeholder="Accelration text" />
<input type="text" onChange={handleInput} name="fieldTwo" placeholder="Accelration text" />
<input type="date" onChange={handleInput} name="expDate" placeholder="Accelration text" />
<input type="text" onChange={handleInput} name="hyperLink" placeholder="Accelration text" />
<input type="text" onChange={handleInput} name="scopeHyperLink" placeholder="Accelration text" />

<label className="switch">
 
  <input type="checkbox" />
  <span className="slider round"></span>
</label>

      </div>
      <div className="imagePreview">
      <div className="imageBox">
<img src={file} alt="" srcset=""  height="200" width="200"/>
      </div>
    </div>
    </div>
    <div className="selectDocument">
      <div className="uploadSection">
      <p>Documents</p>
      <button onClick={handleUpload} disabled={btnValue}>UPLOAD</button>
      </div>
      <div className="select">
        <input type="file"  onChange={handleInput} name="file" accept="image/png, image/gif, image/jpeg"/>
      </div>
    </div>
    </>

  )
}
export default Upload;