import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { dataContext } from './Context'

function Results(props) {
    const {currentData, setCurrentData} = useContext(dataContext)

  return (
    <div>
        <ul>
            {
                props.gameResults.map(game => (
                    <li key={game.id}>

                        <Link to="/gamedisplay" onClick={() => {
                            setCurrentData(game)
                            console.log(currentData)
                        }}>
                        

                        <h3>{game.name}</h3>
                        <img src={game.background_image} alt="game" />
                        </Link>

                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default Results