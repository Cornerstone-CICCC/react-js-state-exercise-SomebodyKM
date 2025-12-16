import { useState } from 'react';
import LightToggle from './components/LightToggle';
import LottoNumbers from './components/LottoNumbers';
import ClickCounter from './components/ClickCounter';

const App = () => {
  /* Your states here */
  const [isLightOn, setIsLightOn] = useState<boolean>(true)
  const [lottoNumbers, setLottoNumbers] = useState<number[]>([])
  const [count, setCount] = useState<number>(0)

  const handleToggleLight = () => {
    setIsLightOn(curr => !curr)
  }

  const generateLottoNumbers = () => {
    const numbers: number[] = []
    for (let i = 0; i < 7 ; i++) {
      const randomNum = Math.floor(Math.random() * 50) + 1
      numbers.push(randomNum)
    }

    setLottoNumbers(numbers)
  }

  const handleIncrement = () => {
    setCount((curr) => curr + 1)
  }

  return (
    <div>
      <h2>Light Toggle</h2>
      <LightToggle toggleLights={handleToggleLight}/>
      <div style={{
        backgroundColor: isLightOn ? "white" : "black",
        color: isLightOn ? "black" : "white"
      }}>Change this background color using the style attribute</div>

      <h2>Lotto Numbers</h2>
      <LottoNumbers generateNum={generateLottoNumbers}/>
      <div className="output">{lottoNumbers.join(', ')}</div>

      <h2>Click Counter</h2>
      <ClickCounter count={handleIncrement}/>
      <div className="output">{count}</div>
    </div>
  );
};

export default App;