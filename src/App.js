import './App.css';
import FoodObject from './comps/FoodObject';

function App() {

  const food = [
    {
      title: "pasta with meat sauce",
      summary: "Quick meal that leads to heart burn",
      calCount: 400,
    },
    {
      title: "tacos",
      summary: "Wife Favs",
      calCount: 600,
    },
    {
      title: "Pizza and wings",
      summary: "pre-diabetes",
      calCount: 1400,
    },
  ];
  console.log(food[0]);
  console.log(food[1]);
  return (
    <div>
      <FoodObject title={food[0].title} summary={food[0].summary} calCount={food[0].calCount}></FoodObject>
      <FoodObject title={food[1].title} summary={food[1].summary} calCount={food[1].calCount}></FoodObject>
      <FoodObject title={food[2].title} summary={food[2].summary} calCount={food[2].calCount}></FoodObject>

    </div>
  );
}

export default App;
