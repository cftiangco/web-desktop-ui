
interface IIconx {
    label:string;
}

const Iconx = ({label}:IIconx) => {
    return (
        <div className="w-16 h-20 text-center">
            <div className="bg-red-500 h-16 w-16 rounded cursor-pointer"></div>
            <small className="text-center text-white">{label}</small>
        </div>
    )
}

export default Iconx;