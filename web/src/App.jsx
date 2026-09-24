import { useState, useEffect } from 'react'

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
    <div>
      <h1>App Idea</h1>
      {idees.map((idee) => (
        <div key={idee.id}>
          <p>Score : {idee.score}</p>
          <p>{idee.resume}</p>
        </div>
      ))}
    </div>
  )
}

export default App