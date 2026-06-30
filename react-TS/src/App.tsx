import { useState, useEffect } from "react";
import { InputAdd } from "./components/InputAdd";
import { TodoItem } from "./components/TodoItem";
import { List } from "./components/List";
import './mocks/server';
import axios from "axios";

interface IMovie {
  id: string;
  label: string;
  complete: boolean;
}

export function App() {
  const [list, setList] = useState<IMovie[]>([]);

  async function loadMovies() {
    try {
      const response = await axios.get("/api/movies");
      setList(response.data.movies); 
    } catch (error) {
      console.error("Erro ao buscar filmes:", error);
    }
  }

  useEffect(() => {
    loadMovies();
  }, []);

  const handleAdd = async (value: string) => {
    if (!value.trim()) return;
    
    await axios.post("/api/movies", {
      label: value
    });
    
    await loadMovies();
  }

  const handleComplete = async (id: string) => {
    const movieToUpdate = list.find(item => item.id === id);
    if (!movieToUpdate) return;

    await axios.put(`/api/movies/${id}`, {
      complete: !movieToUpdate.complete
    });

    await loadMovies();
  }

  // Deletar Filme
  const handleDelete = async (id: string) => {
    await axios.delete(`/api/movies/${id}`);
    await loadMovies();
  }

  return (
    <>
      <h1>Minha Lista de Filmes</h1>
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
  );
}