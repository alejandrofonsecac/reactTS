import axios, { create } from "axios";

export interface IMovie {
    id: string;
    title: string;
    watched: boolean;
}

const api = axios.create({
    baseURL: "/api"
})

export const TodoAPI = {
    getAll: async (): Promise<IMovie[]> => {
        const response = await api.get("/movies");
        return response.data.movies;
    },

    create: async (title: string): Promise<IMovie[]> => {
        const response = await api.post("/movies", { title });
        return response.data.movie;
    },

    updateWatched: async (id: string, watched: boolean): Promise<IMovie[]> => {
        const response = await api.put(`/movies/${id}`, {watched})
        return response.data.movie;
    },

    deleteById: async (id: string): Promise<void> => {
        await api.delete(`/movies/${id}`);
    }
}