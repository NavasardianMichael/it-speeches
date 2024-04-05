import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [conferences, setConferences] = useState([])

  useEffect(() => {
    if(conferences.length) return
    const getConferences = async () => {
      const response = await fetch('http://localhost:5000/conference')
      const result = await response.json()  
      setConferences(result);
    }
    getConferences()
  }, [conferences])

  const saveConference = () => {
    fetch('http://localhost:5000/conference', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: "Web Technologies",
        location: "Street:  Rua C 885 City:  Colatina State/province/area:   Espírito Santo Phone number:  (27) 6837-6334 Zip code:  29701-140 Country calling code:  +55 Country:  Brazil",
        dates: {
          start: "Tue Dec 19 2023",
          end: "Friday Dec 22 2023"
        },
        speechIds: []
      })
    })  
  }
  
  return (
    <>
      <button onClick={saveConference}>Send</button>
      {
        conferences.map(conference => {
          return <p key={conference._id}>{conference.title}</p>
        })
      }
    </>
  )
}

export default App
