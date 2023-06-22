
interface IModalIcon {
    icon?:any;
    onClick?:any;
    className?:string;
}

const ModalIcon = ({icon,onClick,className}:IModalIcon) => {
    return (
        <span onClick={onClick} className={`cursor-pointer ${className}`}>
           {icon}
        </span>
    )
}

export default ModalIcon;