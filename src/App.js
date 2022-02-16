import './App.css';
import {useEffect, useState} from "react";

function App() {

    const [rangeValue, setRangeValue] = useState(0)
    const [printRangeValue, setPrintRangeValue] = useState(false)

    useEffect( ()=> {
        setPrintRangeValue(false)
    }, [rangeValue])


    let inputValue = 0


  return (
    <div className="App">
      <input type="range" className="colorRange" min={0} max={100} step={1} value={rangeValue} onChange={ e => setRangeValue(e.target.valueAsNumber) } style={ {background: `linear-gradient(to right, hsl(${rangeValue}, 50%, 50%) ${rangeValue}%, transparent ${rangeValue}%)`} }/>
        <button onClick={()=>setRangeValue(0)}>Clear</button>
        <button onClick={()=>setRangeValue(100)}>Full</button>
        <button onClick={()=>setPrintRangeValue(!printRangeValue)}>Get value</button>
        <br/>
        <input type="number" min={0} max={100} onChange={(e)=>inputValue = Math.floor(e.target.value)}/>
        <button onClick={()=>setRangeValue(inputValue)}>Apply</button>
        <br/>
        <button onClick={()=>setRangeValue(prevValue=>prevValue>=100?100:prevValue+1)}>Increase</button>
        <button onClick={()=>setRangeValue(prevValue=>prevValue<=0?0:prevValue-1)}>Decrease</button>
        <p>{printRangeValue?rangeValue:""}</p>
        <p>{ (rangeValue == 100)?'Range is full':'' }</p>
    </div>
  );
}
export default App;
