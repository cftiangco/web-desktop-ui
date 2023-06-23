import {useState} from 'react'
import './App.css'
import Screen from './components/Screen'
import Iconx from './components/Iconx'

import iconUserManagement from "./assets/icons/user-management.png"
import iconBookingfrom from "./assets/icons/booking.png"
import iconInventory from "./assets/icons/inventory.png"
import iconRoomManagement from "./assets/icons/room-management.png"

import Modal from "./components/utils/Modal"
import OptionModal,{OptionModalContainer,OptionModalItem} from './components/utils/OptionModal'
import Inventory from './components/contents/Inventory'

function App() {

  const [apps,setApps] = useState<any>([
    {code:'INV',label:'Inventory', icon:iconInventory,status:0},
    {code:'BKM',label:'Booking Management', icon:iconBookingfrom,status:0},
    {code:'USM',label:'User Management', icon:iconUserManagement,status:0},
    {code:'RMM',label:'Room Management', icon:iconRoomManagement,status:0},
  ])

  const [modalUserOpen,setModalUserOpen] = useState<boolean>(false);

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
        return obj.status === 1 ? {...obj,status:2} : {...obj,status:1}
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
                <Inventory />
            </Modal>
          )
        case "BKM":
          return (
            <Modal title={obj.label} key={idx} visible={true} onClose={() => handleOnCloseModals(obj)} icon={obj.icon} onMinimize={() => handleOnMinimizeModals(obj)}>
                <div>Hello World</div>
            </Modal>
          )
        case "USM":
          return (
            <Modal title={obj.label} key={idx} visible={true} onClose={() => handleOnCloseModals(obj)} icon={obj.icon} onMinimize={() => handleOnMinimizeModals(obj)}>
                <div>Hello World</div>
            </Modal>
          )
        case "RMM":
          return (
            <Modal title={obj.label} key={idx} visible={true} onClose={() => handleOnCloseModals(obj)} icon={obj.icon} onMinimize={() => handleOnMinimizeModals(obj)}>
                <div>Hello World</div>
            </Modal>
          )
      }
    }
  }

  return (
    <>

      <OptionModal visible={modalUserOpen} label={'Crimson'} onClose={() => setModalUserOpen(false)}>
        <OptionModalContainer>
          <OptionModalItem label={'My Account'} />
          <OptionModalItem label={'Settings'} />
          <OptionModalItem label={'Logout'} />
        </OptionModalContainer>
      </OptionModal>

      <Screen actives={apps} onClickActive={handleOnclickActive} onClickUserIcon={() => setModalUserOpen(true)}>

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
                        status={app.status}
                      /> 
                  ))}

              </div>
          </div>
      </Screen>
    </>
  )
}

export default App
