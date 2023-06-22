import SmallIcon from "./SmallIcon";
import { MdDashboard } from "react-icons/md";
import { MdAccountCircle } from "react-icons/md";
import ActiveIcon from "./utils/ActiveIcon";

interface ITopnavigation {
    actives?:any;
    onClickActive:any;
}

const TopNavigation = ({actives,onClickActive}:ITopnavigation) => {
    return (
        <div className="h-6 w-full bg-white/75 shadow-lg">
            <div className="flex justify-between mx-1 items-center h-full">
                <div className="mx px-2 flex items-center gap-2">
                    <div className="border-r-2 border-white pe-2">
                        <div className="flex items-center gap-2">
                            <SmallIcon icon={<MdDashboard size={20} />}/>
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
                            <SmallIcon icon={<MdAccountCircle size={22} />}/>
                        </div>
                    </div>
                    <div></div>
                </div>

            </div>
        </div>
    )
}

export default TopNavigation;