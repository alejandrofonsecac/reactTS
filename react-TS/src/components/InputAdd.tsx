import { useState } from "react"

interface IInputAddProps{
    onAdd(value:string): void
}

export const InputAdd = (props: IInputAddProps) => {
    const [value, setValue] = useState('')

    return(
        <>
            <div>
                <input 
                    type="text"
                    placeholder="Digite algo..." 
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />

                <button
                    onClick={() => { props.onAdd(value); setValue('')}}
                >
                    Enviar
                </button>
            </div>
        </>
    )
    
}