import { useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const containerRef = useRef(null);
  const textRef = useRef(null);


  function resizeText() {
    const container = containerRef.current;
    const text = textRef.current;

    const containerWidth = container.offsetWidth;
    let min = 1;
    let max = 2000;

    while (min <= max) {
      const mid = Math.floor((min + max) / 2);
      text.style.fontSize = mid + "px";

      if (text.offsetWidth <= containerWidth) {
        min = mid + 1;
      } else {
        max = mid - 1;
      }
      console.log("I am running");
    }
    text.style.fontSize = max + "px";
    console.log(max);
  }

  useEffect(() => {
    resizeText();

    window.addEventListener("resize", resizeText);

    return () => {
      window.removeEventListener("resize", resizeText);
    };
  }, []);


  return (
    <div ref={containerRef} className='flex h-screen w-full items-center overflow-hidden bg-slate-950'>
      <div className='absolute top-5 flex gap-5 w-full'  ref={textRef} >
        <a href="https://developer-nahid.web.app/" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://developer-nahid.web.app/" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <span ref={textRef} className='absolute left-0 mx-auto my-auto whitespace-nowrap text-center font-bold uppercase text-slate-700'>I Fit Myself Here</span>
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </div>
  )
}

export default App
