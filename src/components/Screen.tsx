import TopNavigation from "./TopNavigation";
import BottomNavigation from "./BottomNavigation";
import Container from "./Container"
import cover from "../assets/images/bg3.jpg"

interface IScreen {
    children?:any;
    actives?:any;
    onClickActive:any;
    onClickUserIcon:any;
}

const Screen = ({children,actives,onClickActive,onClickUserIcon}:IScreen) => {
    return (
        <div className="h-screen w-full flex flex-col bg-no-repeat bg-cover bg-top" style={{ backgroundImage: `url('${cover}')` }}>
            <TopNavigation 
                actives={actives} 
                onClickActive={onClickActive}
                onClickUserIcon={onClickUserIcon}
            />
                <Container>
                    {children}
                </Container>
            {/* <BottomNavigation /> */}
        </div>
    )
}

export default Screen;