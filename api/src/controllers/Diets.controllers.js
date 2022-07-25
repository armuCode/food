const { Diet } = require("../db");

const { dbRecipes } = require('../../dbRecipes')

let getDiets = async (req, res) => { 
  try { 

    let dietsApi = await dbRecipes
    
    let types = dietsApi.map((t) => t.Diets);  
    let diets = types.flat();
    let typeDiets = [...new Set(diets),"vegetarian"]; 
    typeDiets.forEach(async di => {
      await Diet.findOrCreate({ 
        where: { 
          name: di 
        }, 
      });
    });  
    return typeDiets;
  } catch(error) {
    console.error("\x1b[43m", '---Error during getDiets---', error);
    throw new Error (error);
  }
};

const getAlldiets = async () => {

  let dietsInBase = await Diet.findAll();
  if(dietsInBase.length === 0) return getDiets()
  else {
    let baseD = dietsInBase.map(r => r.name);
    return baseD;
  }
}; 

module.exports = {
getAlldiets,
};

module.exports = {
  getDiets,
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