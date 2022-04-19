import React from 'react'
import Card from './Card.js'
function CardList(props) {
    //console.log(props.robots)
    let robo = props.robots 
    const arr = robo.map(item => {
        return <Card name={item.name}
            email={item.email}
            id={item.id}
            key={item.id}
        />
    })
    return (
        <div>
            {arr}
            </div>
        )
}

export { CardList }