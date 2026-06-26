import { useState } from 'react'



export function App() {
  const [count, setCount] = useState(0)
  const [hide, setHide] = useState(false)

  return (
    <>
      {hide && <h1>Hello1</h1>}
      {!hide && <h1>Hello2</h1>}

      {hide
        ? <p>Teste1</p>
        : <p>Teste2</p>
      }

      <button onClick={() => setCount(count + 1)}>
        {count}
      </button>

      <button onClick={() => setHide(!hide)}>
        Toggle
      </button>
    </>
  )
}