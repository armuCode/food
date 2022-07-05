const axios = require("axios");
const { Diet } = require("../db");
const { API_KEY } = process.env; 

const getDiets = async (req, res) => { 
  try { 
    const dietas = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=30`
    );
  
    const types = await dietas.data.results.map((t) => t.diets);  
    const diets = types.flat();
    const typeDiets = [...new Set(diets),"vegetarian"]; 
    typeDiets.forEach(async di => {
      await Diet.findOrCreate({ 
        where: { 
          name: di 
        }, 
      });
    });
    return typeDiets;
  } catch (error) {
    console.log(error); 
  }
};

const getAlldiets = async (req, res) => {
  try {
    const dietsInBase = await Diet.findAll();
    const base = dietsInBase.map(r => r.name);
    const dietsApi = await getDiets();
    const api = dietsApi.map(r => r.name);
    const finded = base.length ? base : api
    console.log(finded);
    return finded;
  } catch (e) {
   console.log(e);
  }
}; 

module.exports = {
  getAlldiets,
};


/* 

-- Table: public.Genres

-- DROP TABLE IF EXISTS public."Genres";

CREATE TABLE IF NOT EXISTS public."Genres"
(
    id integer NOT NULL DEFAULT nextval('"Genres_id_seq"'::regclass),
    name character varying(255) COLLATE pg_catalog."default" NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    CONSTRAINT "Genres_pkey" PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."Genres"
    OWNER to postgres; 
    
*/