import { useState } from 'react'
import './App.css'
import { Key } from './components/keys/Key'

function App() {
  const [text, setText] = useState([])
  const [count, setCount] = useState(0)
  const [backspacecount, setBackspaceCount] = useState(0)
  // const keyboardLayout = [
  //   ["~\n`", "!\n1", "@\n2", "#\n3", "$\n4", "%\n5", "^\n6", "&\n7", "*\n8", "(\n9", ")\n0", "_\n-", "+\n=", "\u232B"],
  //   ["Tab", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "[\n{", "]\n}", "| \\"],
  //   ["Caps\nLock","A", "S", "D", "F", "G", "H", "J", "K", "L", ";\n:", `"\n'`, "\u21B5"],
  //   ["Shift", "Z", "X", "C", "V", "B", "N", "M", "<\n,", ">\n.", "?\n/", "Shift"],
  //   ["Ctrl", "\u2756", "Alt", " ", "Alt", "fn", "\u2756", "Ctrl",]
  // ]

  const keyboardLayout = [
    [
        { display: '~\n`', value: '`' }, { display: '!\n1', value: '1' }, { display: '@\n2', value: '2' },
        { display: '#\n3', value: '3' }, { display: '$\n4', value: '4' }, { display: '%\n5', value: '5' },
        { display: '^\n6', value: '6' }, { display: '&\n7', value: '7' }, { display: '*\n8', value: '8' },
        { display: '(\n9', value: '9' }, { display: ')\n0', value: '0' }, { display: '_\n-', value: '-' },
        { display: '+\n=', value: '=' }, { display: "\u232B", value: 'Backspace' }
    ],
    [
        { display: 'Tab', value: 'Tab' }, { display: 'Q', value: 'Q' }, { display: 'W', value: 'W' },
        { display: 'E', value: 'E' }, { display: 'R', value: 'R' }, { display: 'T', value: 'T' },
        { display: 'Y', value: 'Y' }, { display: 'U', value: 'U' }, { display: 'I', value: 'I' },
        { display: 'O', value: 'O' }, { display: 'P', value: 'P' }, { display: '[\n{', value: '[' },
        { display: ']\n}', value: ']' }, { display: '| \\', value: '\\' }
    ],
    [
        { display: 'Caps\nLock', value: 'CapsLock' }, { display: 'A', value: 'A' }, { display: 'S', value: 'S' },
        { display: 'D', value: 'D' }, { display: 'F', value: 'F' }, { display: 'G', value: 'G' },
        { display: 'H', value: 'H' }, { display: 'J', value: 'J' }, { display: 'K', value: 'K' },
        { display: 'L', value: 'L' }, { display: ';\n:', value: ';' }, { display: '"\n\'', value: '\'' },
        { display: '\u21B5', value: 'Enter' }
    ],
    [
        { display: 'Shift', value: 'Shift' }, { display: 'Z', value: 'Z' }, { display: 'X', value: 'X' },
        { display: 'C', value: 'C' }, { display: 'V', value: 'V' }, { display: 'B', value: 'B' },
        { display: 'N', value: 'N' }, { display: 'M', value: 'M' }, { display: '<\n,', value: ',' },
        { display: '>\n.', value: '.' }, { display: '?\n/', value: '/' }, { display: 'Shift', value: 'Shift' }
    ],
    [
        { display: 'Ctrl', value: 'Control' }, { display: '\u2756', value: 'Meta' }, { display: 'Alt', value: 'Alt' },
        { display: ' ', value: ' ' }, { display: 'Alt', value: 'Alt' }, { display: 'fn', value: 'Fn' },
        { display: '\u2756', value: 'Meta' }, { display: 'Ctrl', value: 'Control' }
    ]
];

const mappedKeys = () =>
  keyboardLayout.map((row, rowIndex) =>
      row.map((key, columnIndex) => (
          <Key key={rowIndex + '-' + columnIndex} letter={key.value} display={key.display} />
      ))
  );

  // const mappedKeys = () => {
  //   return keyboardLayout.map(row =>
  //     row.map((key, columnIndex) => (
  //       <Key 
  //         key={columnIndex} 
  //         letter={key}
  //         text={text}
  //       />
  //     ))
  //   );
  // }

 

  return (
    <div>
      <h1>{text}</h1>
      <div className='keyboard'>
        {mappedKeys()}
      </div>
    </div>
  )
}

export default App
