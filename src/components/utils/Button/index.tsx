import {MdSave,MdDelete,MdOutlineAddCircle,MdEditDocument} from "react-icons/md";

interface IButton {
    onClick?:any;
}

export const SaveButton = ({onClick}:IButton) => {
    return (
        <div onClick={onClick} className="cursor-pointer hover:text-gray-500 flex items-center gap-0">
            <MdSave size={24}  />
            <span className="text-sm">Save</span>
        </div> 
    )
}

export const DeleteButton = ({onClick}:IButton) => {
   return (
        <div onClick={onClick} className="cursor-pointer hover:text-gray-500 flex items-center gap-0">
            <MdDelete size={24}  />
            <span className="text-sm">Delete</span>
        </div>
   )
}

export const AddButton = ({onClick}:IButton) => {
    return (
         <div onClick={onClick} className="cursor-pointer hover:text-gray-500 flex items-center gap-0">
             <MdOutlineAddCircle size={24}  />
             <span className="text-sm">Add</span>
         </div>
    )
}

export const EditButton = ({onClick}:IButton) => {
    return (
         <div onClick={onClick} className="cursor-pointer hover:text-gray-500 flex items-center gap-0">
             <MdEditDocument size={24}  />
             <span className="text-sm">Edit</span>
         </div>
    )
}

export const GroupButtons = ({children}:any) => {
    return (
        <div className="flex items-center justify-start p-1 m- 1 gap-1 w-full">
            {children}
        </div>
    )
}