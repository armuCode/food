const chai = require("chai");
const { expect } = chai;
const session = require("supertest-session");
const app = require("../../src/App.js");

let agent = null;

//chai.use(require("chai-uuid"));

describe("Recipe routes", () => {
  beforeEach(() => {
    agent = session(app);
  });

  describe('GET /recipes/search/:name', () => {
    it('should get 200', () =>
      agent.get('/recipes/search/rice').expect(200)
    );
  });

  describe("/recipe/:idReceta", () => {
    it("deberia devolver un 200 y id, titulo y descripcion en la respuesta", async () => {
      await agent
        .get("/recipe/716426")
        .expect("Content-Type", /json/)
        .expect(200)
        .then((res) => {
          expect(res.body).to.have.property("id");
            expect(res.body).to.have.property("name");
            expect(res.body).to.have.property("summary");
        });
    });
  });

  describe("/recipe/create", () => {
    it("deberia devolver la receta creada con un id en formato UUID", async () => {
      const response = await agent
        .post("/recipe/create")
        .send({ 
          name: "Test back End",
          image: "https://i.blogs.es/87930e/comidas-ricas/840_560.jpg",
          summary: "esto es una prueba",
          healthyScore: 87,
          Diets: ["gluten free", "vegetarian", "vegan", "no la tengo"],
          dishTypes: ["side dish"],
          steps: [{}]
        });
      expect(response.status).to.eql(201);
    });
  });

});

