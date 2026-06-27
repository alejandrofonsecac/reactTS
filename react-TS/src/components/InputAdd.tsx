import { useState } from "react"

interface IInputAddProps{
    onAdd(value:string): void
}

export const InputAdd = (props: IInputAddProps) => {
    const [value, setValue] = useState('')
    
    const handleAdd = () => {
        props.onAdd(value); 
        setValue('');
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
                    onClick={handleAdd}
                >
                    Enviar
                </button>
            </div>
        </>
    )
    
}