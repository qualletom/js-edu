import './App.css'
import {splitByWords} from "./01-hello-tests/01.ts";

function App() {
  const sentence = 'Hello my friends!';
  const result = splitByWords(sentence);
  console.log(result);
  return (
    <>

    </>
  )
}

export default App
