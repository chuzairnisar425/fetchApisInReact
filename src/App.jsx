import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [cards, setCards] = useState([]);

  const fetchData = async () => {
    let a = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await a.json();
    setCards(data);
    console.log(data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <h1>Fetching Api's</h1>
      <div className="container">
        {cards.map((cards) => {
          return (
            <div key={cards.id} className="cards">
              <h3>{cards.userId}</h3>
              <h1>{cards.title}</h1>
              <h4>{cards.body}</h4>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
