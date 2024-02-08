import { useState } from 'react'
import './App.css'
import { Key } from './components/keys/Key'

function App() {
  const [text, setText] = useState([])
  const [count, setCount] = useState(0)
  const [backspacecount, setBackspaceCount] = useState(0)
  const keyboardLayout = [
    ["~\n`", "!\n1", "@\n2", "#\n3", "$\n4", "%\n5", "^\n6", "&\n7", "*\n8", "(\n9", ")\n0", "_\n-", "+\n=", "\u232B"],
    ["Tab", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "[\n{", "]\n}", "| \\"],
    ["Caps\nLock","A", "S", "D", "F", "G", "H", "J", "K", "L", ":\n;", `"\n'`, "\u21B5"],
    ["Shift", "Z", "X", "C", "V", "B", "N", "M", "<\n,", ">\n.", "?\n/", "Shift"],
    ["Ctrl", "\u2756", "Alt", " ", "Alt", "fn", "\u2756", "Ctrl",]
  ]

  const mappedKeys = () => {
    return keyboardLayout.map(row =>
      row.map((key, columnIndex) => (
        <Key 
          key={columnIndex} 
          letter={key}
          text={text}
        />
      ))
    );
  }

 

  return (
    <div>
      {text}
      <div className='keyboard'>
        {mappedKeys()}
      </div>
    </div>
  )
}

export default App
