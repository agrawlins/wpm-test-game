import { useEffect, useState } from 'react'
import './Key.css'

export const Key = (props) => {
    const {letter, text} = props
    let [keyPressed, setKeyPressed] = useState(false)

    useEffect(() => {  
        document.addEventListener('keydown', detectKeyDown, true);  
      
        return () => {
          // Cleanup: Remove the event listener when the component unmounts
          document.removeEventListener('keydown', detectKeyDown, true);
        };
      }, []);

    //   const handleChange = (e) => {
    //     console.log(e);
        
    //   };
    
      const detectKeyDown = (e) => {
        if (e.key.toUpperCase() === letter) {
            setKeyPressed(true)
            // handleChange(e.key)
        } else if (e.key === letter) {    
            setKeyPressed(true)
            // handleChange(e.key)
        } else {
            setKeyPressed(false)
        }
      }

    return (
        <button className={keyPressed ? "singleKeyPressed" : "singleKey"}>
            {letter}
        </button>
    )
}