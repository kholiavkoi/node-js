import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [person, setPerson] = useState();
  useEffect(() => {
    fetch("http://127.0.0.1:5001")
      .then((res) => res.json())
      .then((data) => setPerson(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      {person && (
        <>
          <h1>{person.name}</h1>
          <h2>{person.isProgrammer ? "Is Programmer" : "Is not Programmer"}</h2>
        </>
      )}
    </div>
  );
}

export default App;
