import { useState,useEffect } from 'react'
import "prismjs/themes/prism-tomorrow.css"
import prism from "prismjs"
import Editor from "react-simple-code-editor"
import './App.css'

function App() {
  
  const [code,setCode]=useState(`function sum(){
    return 1+1}`)
  
  
  useEffect(()=>{
    prism.highlightAll();
  })




  return (
    <>
    <main>
      <div className="left">
        <div className="code">
        
            <Editor
              value={code}
              onValueChange={code => setCode(code)}
              highlight={code => prism.highlight(code, prism.languages.javascript, "javascript")}
              padding={10}
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 16,
                border: "1px solid #ddd",
                borderRadius: "2px",
                height: "100%",
                width: "100%"
              }}
            />
          </div>
        <div className="review">Review</div>
      </div>
      <div className="right"></div>
    </main>
    </>
  )
}



export default App
