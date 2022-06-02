const FoodObject = (prop) => {
    return(
        <div className="foodContainer">
            <h2 className="display-4 text-light">{prop.title}</h2>
            <div>
                <div className="text-light">{prop.summary}</div>
                <div className="text-light">{prop.calCount}</div>
            </div>
        </div>
    );
}

export default FoodObject;

// Something to do when I get more structure built up is to break these comps down
// Into smaller ones!