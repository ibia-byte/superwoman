import React, { Component } from 'react'

export class AddMovie extends Component {
    render() {
        return (
            <form style= {{display:"flex"}}>
                <input 
                type="text" 
                name="title" 
                style={{flex:'10',padding:'5px'}}
                placeholder="Add Movie"
                />
                <input type="button"
                value="Add"
                className="btn"
                style={{flex:1}}
                />
            </form>
        )
    }
}

export default AddMovie
