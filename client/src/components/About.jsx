import './CSS/About.css'

export default function About (){


  return (

          <div class="cardA">
            <div class="content">
                <div class="front">
                    <h3 class="title">
                      👋🏼 Hi everyone!
                      I want to share with you today this project I made for Henry's Bootcamp.
                    </h3>
                    <p class="subtitle">
                      It's an app about recipes. It uses an API
                      API data.
                    </p>
                </div>

                <div class="back">
                    <p class="description">
                      In this app, you can find many of the most popular recipes, 
                      see detail about every recipe (name, description, diet, dysh type, healthy score, summary, ingredients, steps, etc.),
                      create your own recipe, filter all recipe by diet and origin (user created or coming from API).
                      <br></br>
                    This app was made with REACT, REDUX, and CSS for the client-side and
                    NODE.JS - EXPRESS - SEQUELIZE - POSTGRESQL for the server-side.
                    </p>
                </div>
            </div>
        </div>

  )
}