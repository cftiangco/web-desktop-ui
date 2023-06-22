
interface IModalIcon {
    icon?:any;
    onClick?:any;
}

const ModalIcon = ({icon,onClick}:IModalIcon) => {
    return (
        <span onClick={onClick} className="cursor-pointer">
           {icon}
        </span>
    )
}

export default ModalIcon;