interface ITodoItem {
    id: string;
    title: string;
    complete: boolean;
    onComplete: (id: string) => void;
    onDelete: (id: string) => void;
}

export const TodoItem = ({
     id,
     title,
     complete,
     onComplete,
     onDelete
    }: ITodoItem) => {

    const handleComplete = () =>{
        onComplete(id)
    }

    const handleDelete = () =>{
        onDelete(id)
    }

    return (
        <li key={id}>
            {title}
            {complete ? 'Concluído' : ''}

            <button onClick={handleComplete}>Concluído</button>
            <button onClick={handleDelete}>Remover</button>
          </li>
    )
}