import React from 'react'
import '../css/listdone-items.css'

export default function ListDoneItems(props) {
    const data = props.item

    return (
        <div className="listdone-group">
            <li className="done-item">{data.text}</li>
            <div className="actions">
                <button className="refresh-button" onClick={() => props.changeStatus(data.id)}>&#8635;</button>
                <button className="delete-button" onClick={() => props.removeItem()}>X</button>
            </div>
        </div>
    )
}
