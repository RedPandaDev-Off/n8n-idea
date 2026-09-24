import { useState, useEffect } from 'react'
import './App.css'

function App() {
  // 1. L'état qui contient la liste des idées
  const [idees, setIdees] = useState([])

  // 2. Au chargement de la page, on récupère les idées
  useEffect(() => {
    fetch('/api/idees')
      .then((reponse) => reponse.json())
      .then((donnees) => {
        setIdees(donnees);
      })
  }, [])

  // 3. L'affichage
  return (
    <div className="grille">
      <h1>App Idea</h1>
      {idees.map((idee) => (
        <div className="carte" key={idee.id}>
          
          <p>{idee.resume}</p>
          <p className="score">Score : {idee.score}</p>
          <p>Categorie: {idee.categorie}</p>
          <a href={idee.lien} target="_blank" rel="noopener noreferrer">Lien</a><br></br>
          {idee.faisable_solo && <p>Oui faisable en solo</p>} 
          <p>source : {idee.source}</p>
        </div>
      ))}
    </div>
  )
}

export default App