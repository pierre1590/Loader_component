import React, { useState, useEffect } from "react";
import Loader from "./Components/Loader/Loader";
import "./App.css";

/*
Creare un componente Loader che parte con uno stato loading che è true.
1) Mentre loading è true visualizzare la scritta "Caricamento", altrimenti un messaggio a vostro piacimento.
2) Quando il componente viene montato fate in modo che dopo due secondi lo stato di loading venga impostato a false
3) Se il componente viene smontato prima che i 2 secondi finiscono, cancellate il timeout
4) Per testare il funzionamento, nel vostro componente App mettete un bottone che mostra/nasconde il componente Loader
*/

const App = () => {
  const [loading, setLoading] = useState(true);

  
 
// 2) Quando il componente viene montato fate in modo che dopo due secondi lo stato di loading venga impostato a false

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);  
    }, 2000);
  }, []);



  // 3) Smontare il componente quando il componente viene smontato prima che i 2 secondi finiscono 

  useEffect(() => {
    return () => {
      clearTimeout();
    };
  }, []);
      


  return (
    <div className="App">
    
      {/* 1) Mentre loading è true visualizzare la scritta "Caricamento", altrimenti un messaggio a vostro piacimento.*/}
      {loading ? ( <Loader />) : (<p className="title" style={{fontSize:"4rem"}}>Benvenuto !!!</p>)}
      {/* 4) Per testare il funzionamento, nel vostro componente App mettete un bottone che mostra/nasconde il componente Loader */}
      <button onClick={() => setLoading(!loading)} className="active-loader">{loading ? "Nascondi":"Mostra"}</button>


              

    </div>
  );
};

export default App;
