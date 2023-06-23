import { MdOutlineClose } from "react-icons/md";
import ModalIcon from "../Modal/components/ModalIcon";

interface IModal {
    label?:string;
    visible?:boolean;
    children?:any;
    onClose?:any;
}

const OptionModal = ({label,visible=false,children,onClose}:IModal) => {
    if(!visible) return null;
    return (
        <div className="bg-black/25 h-screen w-full fixed flex justify-center items-center content-center z-20">
             <div className="w-1/4 h-fit bg-white shadow">
                <div className="border-b-2 w-full h-8 flex justify-between items-center bg-blue-400">
                    <h4 className="self-center ms-2 text-white text-sm">Logged In: {label}</h4>
                    <div className="me-1">
                        <ModalIcon
                            className="flex items-center"
                            onClick={onClose}
                            type={'close'} 
                            icon={<MdOutlineClose size={10}/>}
                        />
                    </div>
                </div>
                <div>
                    {children}
                </div>
             </div>
        </div>
    )
}

export default OptionModal;

/* ====== content ====== */
interface IOptionModalContainer {
    children?:any
}

interface IOptionModalItem {
    label:string;
    onClick?:any;
}

export const OptionModalContainer = ({children}:IOptionModalContainer) => {
    return(
        <ul className="flex flex-col items-center">
            {children}
        </ul>
    )
}



export const OptionModalItem = ({label,onClick}:IOptionModalItem) => {
    return(
        <li onClick={onClick} className="border-b-2 py-2 cursor-pointer w-full text-center hover:bg-gray-300/75">{label}</li>
    )
}
