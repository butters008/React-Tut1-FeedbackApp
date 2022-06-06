import "./FoodObject.css"

const FoodObject = (props) => {
    return(

        <div className="foodContainer">
            {/* <img src={"./"+prop.title + ".jpg"} alt={prop.title}/> */}
            {/* <img src="images/tacos.jpg" alt={prop.title}/> */}

            <img className="foodImage" src={"images/" + props.title + ".jpg"} alt={props.title}/>
            <h2 className="foodTitle"></h2>
            <div>
                <div className="foodCount">{props.calCount}</div>
                <div className="foodImage"><buttton>View</buttton><buttton>Delete</buttton></div>
            </div>
        </div>
    );
}

export default FoodObject;

// Something to do when I get more structure built up is to break these comps down
// Into smaller ones!