---List---
    Listas no react normalmente são trabalhadas com .map do JS. Podemos criar um hook ou variavel que tenha uma lista e podemos exibir essa lista com .map
    Ex:
            const [list, setList] = useState([
                {id: '1', label: 'Fazer café'},
                {id: '2', label: 'Fazer café'},
                {id: '3', label: 'Fazer almoço'},
                {id: '4', label: 'Fazer janta'}
            ]);

            return(
                <ol>
                    {list.map((listItem) => (
                    <li key={listItem.id}>
                        {listItem.label}
                    </li>
                    ))}
                </ol>
            )
        
        No entanto temos um problema. O React não sabe diferenciar cada item por isso transformamos ele em objeto para podermos indentificar cada objeto pelo id, como demostrado no exemplo em cima.
        OBS: Podemos indentificar o objeto por apenas listItem, mas dessa forma o React levara em conta apenas o nome de cada item da lista, então, se tiver nomes repetido ele dara um pequeno erro no console

    Em um exemplo que podemos adicionar tarefas a essa lista podemos seguir o exemplo a seguir:

    Ex:
        <input 
            type="text"
            placeholder="Digite algo..." 
            value={value}
            onChange={(e) => setValue(e.target.value)}
        />
        <button
            onClick={() => {
            setList([
                ...list,
                {id: (list.length + 1).toString(), label:value},
            ])
            setValue('');
            }}
        >
            Enviar
        </button>

        Podemos criar um input o qual terá um onChange colocamos um (e) que quando o valor do input for mudado ira atualizar o hook Value para o propio evento, estara sempre atualizando seu proprio valor a cada letra digitada

        O onClick no button terá um setList que fara com que a lista seja atualizada quando o botão de enviar for acionado. Ele tem um spread que fara com que pegue toda informação da lista anterior e adicione o novo valor que foi passado. Por fim, ele atualizara o Value com setValue para ('') para limpar o input 


            