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
            