import './App.css';
import { useRef, useState } from 'react';

function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}


function App() {
  const [color, setColor] = useState("#000000");
  const [titleColor, setTitleColor] = useState("rgba(0,0,0)");
  const colorInputRef = useRef();
  const colotTitleRef = useRef();
  const body = useRef();
  const colorInputState = ()=>{
    let value = colorInputRef.current.value;
    if(value.length < 8)
      setColor(value);
    if(/^#[0-9A-F]{6}$/i.test(color.toUpperCase())){
      let result = hexToRgb(color.toUpperCase());
      let resultInput = `rgb(${result.r},${result.g},${result.b})`;
      //console.log(result);
      body.current.style.background = resultInput;
      colotTitleRef.current.style.color = `rgb(${255-result.r},${255-result.g},${255-result.b})`
      setTitleColor(resultInput);
    }
  }
  return (
    <div className="App" ref={body}>
      <div className='conteiner__color-input'>
        <input value={color} id="color-input" type="text" onInput={colorInputState} ref={colorInputRef}/>
        <label id="label-color-input" htmlFor="color-input" ref={colotTitleRef}>{titleColor}</label>
      </div>
    </div>
  );
}

export default App;
