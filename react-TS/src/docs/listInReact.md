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

    -----------------------------------------------------------

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

    -----------------------------------------------------------

    Para podermos remoever ou marcar como concluido uma tarefa basta vermos este exemplo:
    
    Ex:
        <button onClick={() => setList([...list.map(item => (
              {...item, complete: item.id === listItem.id ? true 
                : item.complete
              }
              ))])}>
              Concluir
            </button>

            <button onClick={() => setList([...list.filter(item => item.id !== listItem.id)])}>
              Remover
            </button>

            Para o botão de marcar como concluido podemos usar parte da lógica usada anteriormente. Usamos o setList com map para selecionar toda a lista e seus objetos, com isso usamos uma lógica de que ira selecionar o item inteiro e se o id do item for igual ao listItem id ele vai classificar como true e senão o  React classificaria o item como concluido

            Para a função de remover iremos filtrar o id do item selecionado e ele verifica atraves de .map se o id existe na lista, se ele existir ele ira renderizar todos os componentes menos o objeto com o id que foi verificado
            