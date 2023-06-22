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
        <div className="bg-black/25 h-screen w-full fixed flex justify-center items-center content-center">
             <div className="w-1/4 h-fit bg-white shadow">
                <div className="border-b-2 w-full h-8 flex justify-between items-center bg-blue-400">
                    <h4 className="self-center ms-2 text-white text-sm">Logged In: {label}</h4>
                    <ModalIcon
                        className="me-2 text-white"
                        onClick={onClose} 
                        icon={<MdOutlineClose/>}
                    />
                </div>
                <div>
                    {children}
                </div>
             </div>
        </div>
    )
}

export default OptionModal;