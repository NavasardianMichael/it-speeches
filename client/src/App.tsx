// import { useEffect, useState } from 'react'
// import './App.css'

// function App() {
//   const [conferences, setConferences] = useState([])

//   useEffect(() => {
//     if(conferences.length) return
//     const getConferences = async () => {
//       const response = await fetch('http://localhost:5000/conference')
//       const result = await response.json()  
//       setConferences(result);
//     }
//     getConferences()
//   }, [conferences])

//   const saveConference = () => {
//     fetch('http://localhost:5000/conference', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         title: "Web Technologies",
//         location: "Street:  Rua C 885 City:  Colatina State/province/area:   Espírito Santo Phone number:  (27) 6837-6334 Zip code:  29701-140 Country calling code:  +55 Country:  Brazil",
//         dates: {
//           start: "Tue Dec 19 2023",
//           end: "Friday Dec 22 2023"
//         },
//         speechIds: []
//       })
//     })  
//   }
  
//   return (
//     <>
//       <button onClick={saveConference}>Send</button>
//       {
//         conferences.map(conference => {
//           return <p key={conference._id}>{conference.title}</p>
//         })
//       }
//     </>
//   )
// }

// export default App


import React, { useEffect } from 'react';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import { getConferencesAsync } from './store/conference/thunks';
import { useAppDispatch } from './hooks/useAppDispatch';

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps['items'] = [
  {
    key: '1',
    label: 'Conferences',
    children: 'Content of Tab Pane 1',
  },
  {
    key: '2',
    label: 'Speeches',
    children: 'Content of Tab Pane 2',
  },
  {
    key: '3',
    label: 'Speakers',
    children: 'Content of Tab Pane 3',
  },
];

const App: React.FC = () => {

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getConferencesAsync())
  }, [dispatch])

  return <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
};

export default App;