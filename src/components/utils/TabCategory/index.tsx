
interface ITabCategory {
    label:string;
    onClick?:any;
    active?:boolean;
}

const TabCategory = ({label,onClick,active=false}:ITabCategory) => {
    return (
        <div className={`w-full cursor-pointer hover:bg-gray-300/75 py-1 ${active ? 'g-gray-300/75':''}`}>
            <h2 onClick={onClick} className="ms-3 text-sm">{label}</h2>
        </div>
    )
}

export default TabCategory;