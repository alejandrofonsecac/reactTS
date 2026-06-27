---ComponentsIterface---
    Para podermos deixar o código mais limpo podemos reutilizar componentes, podemos ver no código a seguir:

    Ex:
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

        APP: 

            <InputAdd 
                onAdd={(value) => {
                setList([
                    ...list, 
                    { id: (list.length + 1).toString(), complete: false, label: value }
                ])
                }}
            />

        No exemplo anterior podemos que que criamos um componente InputAdd, e podemos passar ele para o app e definir as "configurações" dele. Dessa forma podemos usar states e manipula-los por componentes e props.

        Neste como não temos o state setList no componente *InputAdd* devemos passar o componente para o APP e usar o state List lá.
