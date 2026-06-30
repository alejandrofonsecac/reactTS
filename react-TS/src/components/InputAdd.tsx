import axios from "axios"
import { useState } from "react"

interface IInputAddProps{
    onAdd(value:string): void
}

export const InputAdd = ({ onAdd }: IInputAddProps) => {
    const [value, setValue] = useState('')

    function handlerClick(){
        onAdd(value);
        setValue("");
    }

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
                    onClick={handlerClick}
                >
                    Enviar
                </button>
            </div>
        </>
    )
    
}