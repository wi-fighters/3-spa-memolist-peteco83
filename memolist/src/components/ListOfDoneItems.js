import React from 'react'
import ListDoneItems from './ListDoneItems'

export default function ListOfDoneItems(props) {

    /* store props in variable*/

    const dones = props.items


    const donesItems = dones.map((el) => {
        return ( 
            
              <ListDoneItems item={el} key={el.text} changeStatus={props.changeStatus} removeItem={props.removeItem}/>
        )
    })

    return (
        <div style={{
            width: "400px"
        }}>
            
            <ul>{donesItems}</ul>
            
        </div>
    )
}
