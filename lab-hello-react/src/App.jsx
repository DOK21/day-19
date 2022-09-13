
//import reactLogo from './assets/react.svg'
import  {useState} from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
function App() {
  const[count, setCount] = useState(0)
 return (
    <div className="App"> 
    <header className='App-header'>
    <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/ironhack-logo-xs.png" style={{height: 50}}/>
    <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/menu-top-xs.png"/>
    <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon1.png"/>
    <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon2.png"/>
    <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon3.png"/>
    <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon4.png"/>
    </header>
  </div>
  )
}
export default App
