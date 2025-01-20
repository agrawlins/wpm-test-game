import { useState } from 'react'
import './App.css'
import { Key } from './components/keys/Key'

function App() {
  const [text, setText] = useState([])
  const [count, setCount] = useState(0)
  const [backspacecount, setBackspaceCount] = useState(0)

  const keyboardLayout = [
    [
        { display: '`\n~', value: '`' }, { display: '1\n!', value: '1' }, { display: '2\n@', value: '2' },
        { display: '3\n#', value: '3' }, { display: '4\n$', value: '4' }, { display: '5\n%', value: '5' },
        { display: '6\n^', value: '6' }, { display: '7\n&', value: '7' }, { display: '8\n*', value: '8' },
        { display: '9\n(', value: '9' }, { display: '0\n)', value: '0' }, { display: '-\n_', value: '-' },
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

 

  return (
    <div>
      <input className='' type='textbox'></input>
      <div className='keyboard'>
        {mappedKeys()}
      </div>
    </div>
  )
}

export default App
