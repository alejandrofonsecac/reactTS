import { useState } from "react";
import { InputAdd } from "./components/InputAdd";
import { TodoItem } from "./components/TodoItem";
import { List } from "./components/List";
import './mocks/server'
import axios from "axios";


export function App() {

  
  const [list, setList] = useState([
    {id: '1', label: 'Fazer café', complete: false},
    {id: '2', label: 'Fazer café', complete: false},
    {id: '3', label: 'Fazer almoço', complete: false},
    {id: '4', label: 'Fazer janta', complete: false}
  ]);

  async function loadMovies() {
    const response = await axios.get("/api/movies")
    console.log(response.data)
  }

  const handleAdd = async (value:string) => {
    await axios.post("/api/movies", {
      title: value
    });
    await loadMovies();
  }

  const handleComplete = (id:string) =>{
    setList(
    list.map(item =>
      item.id === id
        ? { ...item, complete: !item.complete }
        : item
    )
  );
  }

  const handleDelete= (id:string) =>{
    setList([
      ...list.filter((item) => item.id !== id)
    ])
  }

  return (
    <>
      <InputAdd onAdd={handleAdd}/>
      
      <List>
        {list.map((listItem) => (
          <TodoItem
            key={listItem.id}

            id={listItem.id}
            label={listItem.label}
            complete={listItem.complete}
            onComplete={handleComplete}
            onDelete={handleDelete}
          />
        ))}
      </List>
    </>
  )
}