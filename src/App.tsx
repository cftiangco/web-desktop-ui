import React,{useState} from 'react'
import './App.css'
import Screen from './components/Screen'
import Iconx from './components/Iconx'
import iconUserManagement from "./assets/icons/user-management.png"
import iconBookingfrom from "./assets/icons/booking.png"
import iconInventory from "./assets/icons/inventory.png"
import Modal from "./components/utils/Modal"

function App() {

  const [apps,setApps] = useState<any>([
    {code:'INV',label:'Inventory', icon:iconInventory,status:0},
    {code:'BKM',label:'Booking Management', icon:iconBookingfrom,status:0},
    {code:'USM',label:'User Management', icon:iconUserManagement,status:0},
  ])


  const handleClickIcons = (value:any) => {
    const selected = apps.map((obj:any) => {
      if(obj.code === value.code) {
        return {...obj,status:1}
      }
      return obj;
    });
    setApps(selected);
  }
  
  const handleOnCloseModals = (value:any) => {
    const selected = apps.map((obj:any) => {
      if(obj.code === value.code) {
        return {...obj,status:0}
      }
      return obj;
    });
    setApps(selected);
  }

  const handleOnMinimizeModals = (value:any) => {
    const selected = apps.map((obj:any) => {
      if(obj.code === value.code) {
        return {...obj,status:2}
      }
      return obj;
    });
    setApps(selected);
  }

  const handleOnclickActive = (code:string) => {
    const selected = apps.map((obj:any) => {
      if(obj.code === code) {
        return {...obj,status:1}
      }
      return obj.status === 1 ? {...obj,status:2} : obj;
    });
    setApps(selected);
  }

  const Renderer = (obj:any,idx:number) => {
    if(obj.status === 1) {
      switch(obj.code) {
        case "INV":
          return (
            <Modal title={obj.label} key={idx} visible={true} onClose={() => handleOnCloseModals(obj)} icon={obj.icon} onMinimize={() => handleOnMinimizeModals(obj)}>
                <p>{obj.label}</p>
            </Modal>
          )
        case "BKM":
          return (
            <Modal title={obj.label} key={idx} visible={true} onClose={() => handleOnCloseModals(obj)} icon={obj.icon} onMinimize={() => handleOnMinimizeModals(obj)}>
                <p>{obj.label}</p>
            </Modal>
          )
        case "USM":
          return (
            <Modal title={obj.label} key={idx} visible={true} onClose={() => handleOnCloseModals(obj)} icon={obj.icon} onMinimize={() => handleOnMinimizeModals(obj)}>
                <p>{obj.label}</p>
            </Modal>
          )
      }
    }
  }

  return (
    <Screen actives={apps} onClickActive={handleOnclickActive}>

        {apps.map((obj:any,idx:number) => (
            (Renderer(obj,idx)) 
        ))}

        <div className="m-5">
            <div className="grid grid-rows-5 grid-flow-col gap-4 w-32 min-w-32 max-w-full">
                
                {apps.map((app:any,idx:number) => (
                    <Iconx
                      key={idx} 
                      label={app.label} 
                      image={app.icon}
                      onClick={() => handleClickIcons(app)}
                    /> 
                ))}

            </div>
        </div>
    </Screen>
  )
}

export default App
