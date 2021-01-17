import TableRow from './TableRow';
import React, {Component} from 'react';

class Table extends Component{
    constructor(props){
        super(props);

        this.state = {
            rows: 0,
            columns: 0,
            color: "",
            coloring: false

        }

        this.AddColumn = this.AddColumn.bind(this);
        this.AddRow = this.AddRow.bind(this);
        this.ChangeColor = this.ChangeColor.bind(this);
    }

    AddRow(){
        this.setState({rows: this.state.rows + 1})
    }

    AddColumn(){
        this.setState({columns: this.state.columns + 1})
    }

    ChangeColor(event){
        this.setState({color: event.target.value})
    }


    render (){
        let tableRow = [];
        for (let i = 0; i < this.state.row; i++){
            tableRow.push(
                <TableRow
                    key = {i}
                    columns = {this.state.columns}
                />
            );
        }
        return(
            <div className="selection">
                <button className="button" onClick={this.AddRow}> Add Row </button>
                <button className="button" onClick={this.AddColumn}> Add Column </button>
                <select onChange={this.ChangeColor}>
                    <option value="red"> Red </option>
                    <option value="brown"> Brown </option>
                    <option value="gray"> Gray </option>
                    <option value="yellow"> Yellow </option>
                </select>
            <table className="Grid">
                <tbody> 
                {tableRow} 
                </tbody>
            </table>
            </div>   
        )
    }
}

export default Table;