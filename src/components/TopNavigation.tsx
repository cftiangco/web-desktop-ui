import SmallIcon from "./SmallIcon";
import { MdDashboard } from "react-icons/md";
import { MdAccountCircle } from "react-icons/md";

const TopNavigation = () => {
    return (
        <div className="h-6 w-full bg-white/75 shadow-lg">
            <div className="flex justify-between mx-1 items-center h-full">
                <div className="border-r-2 border-white mx px-2">
                    <div>
                        <div className="flex items-center gap-2">
                            <SmallIcon icon={<MdDashboard size={20} />}/>
                        </div>
                    </div>
                    <div></div>
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