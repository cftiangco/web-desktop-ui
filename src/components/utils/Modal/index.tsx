import { MdOutlineClose } from "react-icons/md";
import { MdOutlineHorizontalRule } from "react-icons/md";
import ModalIcon from "./components/ModalIcon";

interface IModal {
    title?:string;
    children?:any;
    visible?:boolean;
    onClose?:any;
    icon?:any;
    onMinimize?:any;
}


const Modal = ({
    title,
    children,
    visible=false,
    onClose,
    icon,
    onMinimize,
}:IModal) => {

    if(!visible) {
        return null;
    }

    return (
        <div className="h-screen w-full fixed flex justify-center items-center content-center">

          <div className="w-full h-full bg-white shadow">

            <div className="flex justify-between  border-b-2 bg-blue-400 py-1">
                
                <div className="flex items-center justify-start ms-2 gap-1">
                    <img src={icon} className="w-5"/>
                    <h1 className="text-sm text-white hidden md:block">{title}</h1>
                </div>

                <div className="flex items-center justify-end gap-3 me-2">
                    <ModalIcon 
                        icon={<MdOutlineHorizontalRule/>}
                        onClick={onMinimize}
                    />
                    <ModalIcon
                        onClick={onClose} 
                        icon={<MdOutlineClose/>}
                    />
                </div>
            </div>


            <div className="">
                {children}
            </div>

          </div>

        </div>
    )
}

export default Modal;