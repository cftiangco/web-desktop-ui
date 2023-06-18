interface IContainer {
    children?:any;
}


const Container = ({children}:IContainer) => {
    return (
        <div className={`h-screen w-screen`}>
            {children}
        </div>
    )
}

export default Container