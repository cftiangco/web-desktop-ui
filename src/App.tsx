import './App.css'
import Screen from './components/Screen'
import Iconx from './components/Iconx'
import iconUserManagement from "./assets/icons/user-management.png"
import iconBookingfrom from "./assets/icons/booking.png"
import iconInventory from "./assets/icons/inventory.png"


function App() {

  const handleOnclickBookingIcon = () => {
    console.log(`clicked`);
  }

  return (
    <Screen>
        {/* <div className="h-screen w-full">
          <div className="w-1/2 h-1/2 bg-white">
          
          </div>
        </div> */}

        <div className="m-5">
            <div className="grid grid-rows-5 grid-flow-col gap-4 w-32 min-w-32 max-w-full">
                <Iconx 
                  label={'Booking Management'} 
                  image={iconBookingfrom}
                  onClick={handleOnclickBookingIcon}
                />
                <Iconx label={'Inventory'} image={iconInventory}/>
                <Iconx label={'Users Management'} image={iconUserManagement}/>
            </div>
        </div>
    </Screen>
  )
}

export default App
