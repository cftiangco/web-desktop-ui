
interface IActiveIcon {
    label:string;
    icon:any;
    status:number;
    onClick:any;
    code:string;
}


const ActiveIcon = ({label,icon,status,onClick,code}:IActiveIcon) => {
    return (
        <div
            onClick={() => onClick(code)} 
            className={`cursor-pointer flex items-center gap-1 pe-1 ${status === 1 ? "border-green-500 border-b-2":""}`}>
            <img src={icon} alt="icon" className="w-4"/>
            <small className="p-0 m-0 hidden md:block text-gray-200 font-semibold hover:text-blue-300">{label}</small>
        </div>
    )
}

export default ActiveIcon;