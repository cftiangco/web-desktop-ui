interface IIconx {
    label:string;
    image:string;
    onClick?:any;
    status?:any;
}

const Iconx = ({label,image,onClick,status}:IIconx) => {
    if(status<0) {
        return;
    }
    return (
        <div 
            className="w-18 h-18 text-center cursor-pointer flex items-center flex-col p-1 hover:bg-white/25 hover:rounded"
            onClick={onClick}>
            <div className="flex items-center flex-col">
                <img src={image} className="w-auto h-16"/>
            </div>
            <p className="text-center text-white text-xs">{label}</p>
        </div>
    )
}

export default Iconx;