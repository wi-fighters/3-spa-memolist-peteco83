import React, { Component } from 'react'
import '../css/listitem.css'

export default class ListItem extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            edit: false,
            editValue: this.props.item.text
        }
    }

    editItem = (i, value) => {
        this.setState({
            edit: !this.state.edit
        }, () => {
            this.props.editItem(i, value )
        })

    }

    render() {
        const data = this.props.item

    return (
        <div className="list-group">
            {this.state.edit ? <input onChange={(e) => this.setState({
                editValue: e.target.value
            })}type="text" value={this.state.editValue}/> : <li>{data.text}</li>}
            <div className="actions">
                <button className="ok-btn" onClick={() => this.props.changeStatus(data.id)}>&#10004;</button>
                <button className="delete-button" onClick={() => this.props.removeItem()}>X</button>
                <button onClick={() => this.editItem(data.id, this.state.editValue)}>{this.state.edit ? "Save": "Edit"}</button>
            </div>
        </div>
    )
}
}

    
