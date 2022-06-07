import "./FoodObject.css"

const FoodObject = (props) => {
    return(

        <div className="foodContainer">
            <div className="foodImage"><img src={"images/" + props.title + ".jpg"} alt={props.title}/></div>
            <div className="foodTitle"><h2>{props.title}</h2></div>
            <div className="foodCount">{props.calCount}</div>
            <div className="foodOptions"><button>View</button><button>Delete</button></div>
        </div>
    );
}

export default FoodObject;

// Something to do when I get more structure built up is to break these comps down
// Into smaller ones!