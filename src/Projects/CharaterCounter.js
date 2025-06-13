import {useState} from "react"

export default function CharacterCounter () {
    let [textLength, setTextLength] = useState(0)
    function handleChange(e) { setTextLength(textLength = e.target.value.length)}
    return (
        <>
            <textarea id="cooltext" maxLength="100" onChange={handleChange}/>
            
            <p>{textLength}/100</p>    
        </>
    )
}