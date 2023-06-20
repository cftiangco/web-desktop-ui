

interface ISmallIcon {
    onClick?:any;
    icon?:any;
}

const SmallIcon = ({onClick,icon}:ISmallIcon) => {
    return (
        <span onClick={onClick} className="cursor-pointer">{icon}</span>
    );
}

export default SmallIcon;