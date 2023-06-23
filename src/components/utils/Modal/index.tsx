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
    className?:string;
}


const Modal = ({
    title,
    children,
    visible=false,
    onClose,
    icon,
    onMinimize,
    className,
}:IModal) => {

    if(!visible) {
        return null;
    }

    return (
        <div className={`h-screen w-full fixed flex justify-center items-center content-center ${className}`}>

          <div className="w-full h-full bg-white shadow">

            <div className="flex justify-between  border-b-2 bg-blue-400 py-1">
                
                <div className="flex items-center justify-start ms-2 gap-1">
                    <img src={icon} className="w-5"/>
                    <h1 className="text-sm text-white hidden md:block">{title}</h1>
                </div>

                <div className="flex items-center justify-end gap-2 me-2">
                    
                        <ModalIcon
                            icon={<MdOutlineHorizontalRule size={10}/>}
                            onClick={onMinimize}
                        />
     
                        <ModalIcon
                            type="close"
                            onClick={onClose} 
                            icon={<MdOutlineClose size={10}/>}
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