import { createServer, Model } from 'miragejs';

createServer({
    models: {
        movie: Model
    },
    //seeds(server) {
      //  server.create("movie", {
        //    movieName: "Meu Malvado Favorito 2"
        //});
        //server.create("movie", {
          //  movieName: "Mr. Robot"
       // })
    //},

    routes() {
        this.namespace = 'api';

        this.get('/movies', (schema) =>{
            return schema.all("movie")
        });

        this.get("/movies/:id", (schema, request) => {
            return schema.find("movie", request.params.id);
        });

        this.post("/movies", (schema, request) => {
            const data = JSON.parse(request.requestBody);
            return schema.create("movie", data)
        })

        this.put("/movies/:id", (schema, request) => {
            const data = JSON.parse(request.requestBody);
            const movie = schema.find("movie", request.params.id);
            movie?.update(data);
            return movie;
        })

        this.delete("/movies/:id", (schema, request) => {
            const movie  = schema.find("movie", request.params.id);
            movie?.destroy()
            return {};
        })
    },
})