import { SaveButton,DeleteButton,GroupButtons } from "../Button"

export const FormContainer = ({children}:any) => {
    return (
        <div className="h-3/5">
            <div className="h-8 w-full mb-2 shadow border-bottom">
                <GroupButtons>
                    <SaveButton/>
                    <DeleteButton/>
                </GroupButtons>
            </div>
            <form className="mx-1 justify-between h-80 overflow-y-scroll">
                {children}
            </form>
        </div>
    )
}

export const TextBox = ({label,subLabel}:any) => {
    return (
        <div className="flex flex-col gap-1 w-full">
            <label htmlFor="" className="text-sm text-gray-800">{label}</label>
            <input 
                type="text" 
                className="outline-none border p-1 w-full bg-gray-200 active:bg-white focus:bg-white hover:bg-white"
            />
            {subLabel && <small className="text-xs text-gray-500 align-self-right">{subLabel}</small>}
        </div>
    )
}

export const FullField = ({children}:any) => {
    return (
        <div className="flex items-center justify-center">
            {children}
        </div>
    )
}

export const RowFields = ({children}:any) => {
    return (
        <div className="flex flex-col md:flex-row gap-1 justify-center items-center">
            {children}
        </div>
    )
}