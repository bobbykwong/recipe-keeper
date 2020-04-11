const React = require('react');

class Singlerecipe extends React.Component{
    render(){
        // CSS things
        const title = {"textAlign" : "center"};

        const image = {"textAlign" : "center"};

        const foodImage = {
                        "maxHeight" : "200px",
                        "maxWidth" : "400px",
                        "margin" : "20px"
                        };

        const mainContainer = {"margin" : "30px auto"}

        const leftContainer = {"textAlign" : "center"};

        const rightContainer = {"textAlign" : "center"};

        const editRecipe = {"textAlign" : "center"};


        // Javascript things
        const recipeObject = this.props.data[0].singleRecipe

        const id = this.props.data[1].id;

        const recipeImage = <img src={recipeObject.img} style={foodImage}></img>

        const recipeIngredients = recipeObject.ingredients.map(el => {
            return <li>{el}</li>
        })

        const recipeInstructions = <p>{recipeObject.instructions}</p>

        return(
            <html>
                <head>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous"></link>
                </head>
                <body>
                    <div>
                        <h1 style={title}>{recipeObject.title}</h1>
                    </div>
                    <div style={image}>
                        {recipeImage}
                    </div>
                    <div className="container" style={mainContainer}>
                        <div className="row">
                            <div className="col-md-6" style={leftContainer}>
                                <h2>Recipe Ingredients</h2>
                                <ol>
                                    {recipeIngredients}
                                </ol>
                            </div>
                            <div className="col-md-6" style={rightContainer}>
                                <h2>Instructions</h2>
                                {recipeInstructions}
                            </div>
                        </div>
                    </div>
                    <div style={editRecipe}>
                        <a href={`/editrecipe/${id}`}>Edit This Recipe</a>
                    </div>
                </body>
            </html>
        )

    }
}

module.exports = Singlerecipe;