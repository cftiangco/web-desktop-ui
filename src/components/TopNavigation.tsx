import SmallIcon from "./SmallIcon";
import { MdDashboard,MdNotifications,MdAccountCircle } from "react-icons/md";
import ActiveIcon from "./utils/ActiveIcon";

interface ITopnavigation {
    actives?:any;
    onClickActive:any;
    onClickUserIcon:any;
}

const TopNavigation = ({actives,onClickActive,onClickUserIcon}:ITopnavigation) => {
    return (
        <div className="h-8 w-full bg-white/25 shadow-lg">
            <div className="flex justify-between mx-1 items-center h-full">
                <div className="mx px-2 flex items-center gap-2">
                    <div className="border-r border-gray-100 pe-2">
                        <div className="flex items-center gap-2">
                            <SmallIcon icon={<MdDashboard size={20} className="text-gray-200 hover:text-blue-300"/>}/>
                        </div>
                    </div>
                    <div className="flex items-center gap-1">
                            {actives.map((obj:any,idx:number) => (
                                ((obj.status === 2 || obj.status===1) && (
                                   <ActiveIcon 
                                        icon={obj.icon}
                                        label={obj.label}
                                        key={idx}
                                        status={obj.status}
                                        onClick={onClickActive}
                                        code={obj.code}
                                   />
                                ))
        
                            ))}
                    </div>
                </div>
                <div className="px-2">
                    <div>
                        <div className="flex items-center gap-2">
                            <SmallIcon icon={<MdNotifications size={22} className="text-gray-200 hover:text-blue-300"/>}/>
                            <div className="flex items-center gap-1 cursor-pointer group" onClick={onClickUserIcon}>
                                <SmallIcon icon={<MdAccountCircle size={22} className="text-gray-200 group-hover:text-blue-300"/>}/>
                                <small className="font-semibold text-gray-200 group-hover:text-blue-300">Crimson Tiangco</small>
                            </div>
                        </div>
                    </div>
                    <div></div>
                </div>

            </div>
        </div>
    )
}

export default TopNavigation;