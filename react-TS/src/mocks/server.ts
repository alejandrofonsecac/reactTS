// src/mocks/server.ts
import { createServer, Model } from 'miragejs';

createServer({
    models: {
        movie: Model
    },
    
    seeds(server) {
        server.create("movie", { id: "1", label: "Meu Malvado Favorito 2", complete: false });
        server.create("movie", { id: "2", label: "Mr. Robot", complete: true });
    },

    routes() {
        this.namespace = 'api';

        this.get('/movies', (schema) => {
            return schema.all("movie");
        });

        this.post("/movies", (schema, request) => {
            const data = JSON.parse(request.requestBody);
            return schema.create("movie", { ...data, complete: false });
        });

        this.put("/movies/:id", (schema, request) => {
            const id = request.params.id;
            const data = JSON.parse(request.requestBody);
            const movie = schema.find("movie", id);
            movie?.update(data);
            return movie;
        });

        this.delete("/movies/:id", (schema, request) => {
            const movie = schema.find("movie", request.params.id);
            movie?.destroy();
            return {};
        });
    },
});