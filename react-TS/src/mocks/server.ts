import { createServer, Model } from 'miragejs';

createServer({
    models: {
        movie: Model
    },
    
    seeds(server) {
        const moviesAsString = localStorage.getItem("MOCK_MOVIES");
        if(moviesAsString === null) return;
        const movies = JSON.parse(moviesAsString);
        console.log(movies);
        movies.models.forEach((movie: {} )=> server.schema.create('movie', movie));
    },

    routes() {
        this.namespace = 'api';

        this.get('/movies', (schema) => {
            return schema.all("movie");
        });

        this.post("/movies", (schema, request) => {
            const data = JSON.parse(request.requestBody);
            const movie = schema.create("movie", {
                ...data,
                watched: false
            })
            const movies = schema.all('movie');
            localStorage.setItem("MOCK_MOVIES", JSON.stringify(movies));
            return movie;
        });

        this.put(`/movies/:id`, (schema, request) => {
            const id = request.params.id;
            const data = JSON.parse(request.requestBody);
            const movie = schema.find("movie", id);
            movie?.update(data);
            const movies = schema.all('movie');
            localStorage.setItem("MOCK_MOVIES", JSON.stringify(movies));

            return movie;
        });

        this.delete("/movies/:id", (schema, request) => {
            const movie = schema.find("movie", request.params.id);
            movie?.destroy();
            const movies = schema.all('movie');
            localStorage.setItem("MOCK_MOVIES", JSON.stringify(movies));
            return {};
        });
    },
});