import PostList from './components/PostList';
import './tailwind.css'
import { useState } from 'react';

function App() {

  const [texts, setTexts] = useState([])
  const [id, setId] = useState(0)
  const [text, setText] = useState('')
  console.log(texts)

  function handleText( event ) {
    setText(event.target.value)
  }

  function paylaş() {
    setId(id => id +1)
    setTexts((pre) => {
      const myText = text; 
      setText(text => '')
      return [...pre, {id, myText}]
    })
  }

  

  return (
    <div className="w-1/3 min-h-screen mx-auto p-5 py-8 border-black shadow-md shadow-black flex flex-col gap-4">
      <h1 className='text-xl font-bold my-3'>Paylaşım yap</h1>
      <p>Bir metin giriniz...</p>
      <textarea className='w-full h-20 bg-gray-100 p-4 focus:outline-none focus:shadow-sm focus:shadow-gray-400' value={text} onChange={handleText}/>
      <button 
      id='paylas-btn'
      className='text-white font-bold p-4 bg-blue-600 hover:bg-blue-700 rounded-3xl'
      onClick={paylaş}
      >
        Paylaş
      </button>
      <PostList texts={texts} setTexts={setTexts} text={text} setText={setText}/>
    </div> 
  );
}

export default App;
