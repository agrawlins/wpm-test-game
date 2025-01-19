import { useEffect, useState } from 'react'
import './Key.css'

export const Key = (props) => {
    const {letter, display} = props
    let [keyPressed, setKeyPressed] = useState(false)

      useEffect(() => {
        // Add event listeners for keydown and keyup
        document.addEventListener('keydown', handleKeyDown, true);
        document.addEventListener('keyup', handleKeyUp, true);

        return () => {
            // Cleanup event listeners on component unmount
            document.removeEventListener('keydown', handleKeyDown, true);
            document.removeEventListener('keyup', handleKeyUp, true);
        };
    }, []);

    const handleKeyDown = (e) => {
        if (e.key.toUpperCase() === letter || e.key.includes(letter)) {
            setKeyPressed(true);
        }
    };

    const handleKeyUp = (e) => {
        if (e.key.toUpperCase() === letter || e.key.includes(letter)) {
            setKeyPressed(false); // Reset state when the key is released
        }
    };
    

    return (
        <button className={keyPressed ? "singleKeyPressed" : "singleKey"}>
            {display}
        </button>
    )
}