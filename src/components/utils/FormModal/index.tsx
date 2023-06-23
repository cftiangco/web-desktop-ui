import { MdOutlineClose } from "react-icons/md";
import { MdOutlineHorizontalRule } from "react-icons/md";
import ModalIcon from "../Modal/components/ModalIcon";

interface IFormModal {
    title?:string;
    children?:any;
    visible?:boolean;
    onClose?:any;
    icon?:any;
    onMinimize?:any;
    className?:string;
}


const FormModal = ({
    title,
    children,
    visible=false,
    onClose,
    className,
}:IFormModal) => {

    if(!visible) {
        return null;
    }

    return (
        <div className={`bg-black/25 h-full w-full fixed flex justify-center items-center content-center ${className}`}>

          <div className="w-3/5 h-3/5 min-w-1/2 min-h-1/2 bg-white shadow border-b-4">

            <div className="flex justify-between  border-b-2 bg-blue-400 py-1">
                
                <div className="flex items-center justify-start ms-2 gap-1">
                    <h1 className="text-sm text-white hidden md:block">{title}</h1>
                </div>

                <div className="flex items-center justify-end gap-2 me-2">
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

export default FormModal;