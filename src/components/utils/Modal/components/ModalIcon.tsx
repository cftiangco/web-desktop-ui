
interface IModalIcon {
    icon?:any;
    onClick?:any;
    className?:string;
    type?:string;
}

const ModalIcon = ({icon,onClick,className,type=""}:IModalIcon) => {
    return (
        <div className={`${type === 'close' ? 'bg-red-500 hover:bg-red-400':'bg-green-500 hover:bg-green-400'} text-white rounded-full p-1 shadow`}>
            <span onClick={onClick} className={`cursor-pointer ${className}`}>
                {icon}
            </span>
        </div>
    )
}

export default ModalIcon;