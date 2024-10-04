import './App.css'
import Button from './components/Button'

function App() {


  return (
    <>
      <Button 
        color= '#e9dbd7'
        label= 'home'
        callback={() => console.log('click')} /> 
    </>
  )
}

export default App
