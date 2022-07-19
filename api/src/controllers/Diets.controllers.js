const axios = require("axios");
const { Diet } = require("../db");

const url = 'https://api.spoonacular.com/recipes/complexSearch?apiKey='
const { API_KEY1, API_KEY2, API_KEY3, API_KEY4, API_KEY5, API_KEY6, API_KEY7 } = process.env;
const queryUrl = '&addRecipeInformation=true&number='
const nR = 4

const getDiets = async (req, res) => { 
  try { 
    const dietas = await axios.get(
      `${url}${API_KEY1}${queryUrl}${nR}`
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
  } catch(error) {
    console.error("\x1b[43m", '---Error during getDiets---', error.response.data);
    throw new Error ('Failed to get diets at Backend');
  }
};

const getAlldiets = async (req, res) => {

    const dietsInBase = await Diet.findAll();
    const base = dietsInBase.map(r => r.name);
    const dietsApi = await getDiets();
    const api = dietsApi.map(r => r.name);
    const finded = base.length ? base : api
    return finded;

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