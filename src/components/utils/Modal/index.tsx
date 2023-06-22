import { MdOutlineClose } from "react-icons/md";
import { MdOutlineHorizontalRule } from "react-icons/md";
import ModalIcon from "./components/ModalIcon";

interface IModal {
    title?:string;
    children?:any;
    visible?:boolean;
    onClose?:any;
}


const Modal = ({
    title,
    children,
    visible=false,
    onClose,
}:IModal) => {

    if(!visible) {
        return null;
    }

    return (
        <div className="h-screen w-full fixed flex justify-center items-center content-center">

          <div className="w-1/2 h-1/2 bg-white rounded">

            <div className="flex justify-between  border-b-2 bg-blue-400 rounded-t py-1">
                
                <div className="flex items-center justify-start ms-2">
                    <h1 className="text-sm">{title}</h1>
                </div>

                <div className="flex items-center justify-end gap-3 me-2">
                    <ModalIcon 
                        icon={<MdOutlineHorizontalRule/>}
                    />
                    <ModalIcon
                        onClick={onClose} 
                        icon={<MdOutlineClose/>}
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

export default Modal;