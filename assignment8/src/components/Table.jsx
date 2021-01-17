import { Component } from 'react';
import TableRow from './TableRow';
import React, {Component} from 'react';

class Table extends Component{
    constructor(props){
        super(props);

        this.state = {
            row: 0,
            col: 0,
            color: ''

        }

        this.AddColumn = this.AddColumn.bind(this);
        this.AddRow = this.AddRow.bind(this);
        this.ChangeColor = this.ChangeColor.bind(this);
    }

    AddRow(){
        this.setState({row: this.state.row + 1})
    }

    AddColumn(){
        this.setState({col: this.state.col + 1})
    }

    ChangeColor(event){
        this.setState({color: event.target.value})
    }

    render (){
        return(
            <div className="Table">
                <button className="button" onClick={this.AddRow}> Add Row </button>
                <button className="button" onClick={this.AddColumn}> Add Column </button>
                <select onChange={this.ChangeColor}>
                    <option value="red"> Red </option>
                    <option value="brown"> Brown </option>
                    <option value="gray"> Gray </option>
                    <option value="yellow"> Yellow </option>
                </select>
            </div>
        )
    }
}

export default Table;