import { useState, useEffect } from "react";
import { InputAdd } from "./components/InputAdd";
import { TodoItem } from "./components/TodoItem";
import { List } from "./components/List";
import './mocks/server';
import axios from "axios";
import { TodoAPI } from "./shared/service/TodoAPI";

interface IMovie {
  id: string;
  title: string;
  watched: boolean;
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
  }, [
    //Neste [] fica as dependencias do useEffect, se deixada em branco o useEffect vai ser executado quando uma fução que tiver dentro dele for chamada
  ]);

  const handleCreateMovie = async (value: string) => {
    if(!value.trim()) return;
    
    try{
      await TodoAPI.create(value);
      await loadMovies();
    } catch (error){
      console.error("Erro ao adicionar filme: ", error);
    }
  }

  const handleWatched = async (id: string) => {
    const movieToUpdate = list.find(item => item.id === id);
    if (!movieToUpdate) return;

    try{
      await TodoAPI.updateWatched(id, !movieToUpdate.watched);
      await loadMovies();
    } catch (error){
      console.error("Erro ao atualizar filme: ", error)
    }
  }

  const handleDelete = async (id: string) => {
    try{
      await TodoAPI.deleteById(id);
      await loadMovies();
    }catch (error){
      console.error("Erro ao deletar um filme: ", error);
    }
  }

  return (
    <>
      <h1>Minha Lista de Filmes</h1>
      <InputAdd onAdd={handleCreateMovie}/>
      
      <List>
        {list.map((listItem) => (
          <TodoItem
            key={listItem.id}
            id={listItem.id}
            title={listItem.title}
            watched={listItem.watched}
            onComplete={handleWatched}
            onDelete={handleDelete}
          />
        ))}
      </List>
    </>
  );
}