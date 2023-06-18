import './App.css'
import Screen from './components/Screen'
import Iconx from './components/Iconx'

function App() {
  return (
    <Screen>
        <div className="m-5">
            <div className="grid grid-rows-6 grid-flow-col gap-4 w-32 min-w-32 max-w-full">
                <Iconx label={'Inventory'}/>
                <Iconx label={'Booking'}/>
                <Iconx label={'Users'}/>
                <Iconx label={'Setting'}/>
                <Iconx label={'History'}/>
            </div>
        </div>
    </Screen>
  )
}

export default App
