import TableRow from './TableRow';
import React, {Component} from 'react';
import TableCell from './TableCell';

class Table extends Component{
    constructor(props){
        super(props);

        this.state = {
            rows: 1,
            columns: 1,
            color: "",

        }

        this.AddColumn = this.AddColumn.bind(this);
        this.AddRow = this.AddRow.bind(this);
        this.ChangeColor = this.ChangeColor.bind(this);
        this.setColor = this.setColor.bind(this);
        this.Grid = this.Grid.bind(this);
    }

    AddRow(){
        this.setState({
            rows: this.state.rows + 1
        })
    }

    AddColumn(){
        this.setState({
            columns: this.state.columns + 1
        })
    }

    ChangeColor(event){
        event.preventDefault();       
        this.setState({
            color: event.target.value
        })
    }

    setColor(event){
        event.preventDefault();
        event.target.style.backgroundColor = this.state.color;
    }

    Grid(){
        let table = []
        for(let i = 0; i < this.state.rows; i++){
            let row = []
            for(let j = 0; j < this.state.columns; j++)
                row.push(
                    <TableCell 
                        onClick = {this.color}
                    />
                )
            table.push(
                <TableRow 
                tablerows={row}
                />
            )
        }
        return table;
    }


    render (){
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
             
                <table className="table"> 
                    {this.Grid()} 
                </table>
            </div>  
        )
    }
}

export default Table;