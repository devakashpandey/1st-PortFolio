import React from 'react'
import "./Portcard.css"
import expenseTracker from "../assets/portfolio/expensetracker.png"
import filterGallery from "../assets/portfolio/filtgal.png"
import tictactoe from "../assets/portfolio/tictactoe.png"
import todoList from "../assets/portfolio/todo.png"
import weatherApp from "../assets/portfolio/weather.png"


const PortCard = () => {

 const portCards = [
    {
      id: 1,
      src: expenseTracker,
      myimg: expenseTracker
    },
    {
      id: 2,
      src: filterGallery,
      myimg: filterGallery
    },
    {
      id: 3,
      src: tictactoe,
      myimg:tictactoe
     },
    {
      id: 4,
      src:todoList,
      myimg:todoList
    },
    {
      id: 5,
      src:weatherApp,
      link:"https://github.com/devakashpandey/Weather-App",
      myimg:weatherApp
      
    }
 ]

  return (
     <>
       {/* portfolio card start !!*/}

      <div className='grid sm:grid-cols-2 md:grid-cols-3 sm:px-0 gap-8 px-12 '>
      
      {
        portCards.map(({id, src, link, myimg}) =>{
            return (
                      <div key={id} className='port-card h-full'>
                         <img src={src} alt=" expenseTracker" className='port-img duration-300'></img>
                      
                         <div className='buttons'>
                           <a href={myimg}><button>Demo</button></a>
                           <a href={link} target="_blank"><button>Get Code </button></a>
                         </div>
                      </div>
            )
        })
      }
    
      </div>

    {/* portfolio card end !!!*/}
     </>
  )
}

export default PortCard;
