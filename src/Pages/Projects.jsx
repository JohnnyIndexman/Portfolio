import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { motion as m } from 'framer-motion'



function Projects() {
 
  const [data, setData] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('index.json')
      .then((res) =>{
      if(!res.ok){
        throw new Error ('could not fetch data')
      }
      return res.json()
    })
      .then((jsonData) => setData(jsonData))
      .catch(err =>{
        console.log(err)
         setError('An error occured while trying to fetch the data')
        })
  }, [data, error]);
  

  return (
    <m.div
    initial={{y: '100%'}}
    animate={{ y: '0%' }}
    transition={{ duration: 1, ease: 'easeOut' }}
    exit={{opacity: 1}}
    className='projects'>
      {error && <div>{error}</div>}
      {data && data.map(d => (
        <Link to={d.link} key={d.id}>
          <div className="class1" key={d.id}>
            <img src={d.image} alt="images" />
            <h3>{d.title}</h3>
          </div>
        </Link>
      ))}
    </m.div>
  )
}

export default Projects