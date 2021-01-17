import React, {Component}from 'react';
import TableCell from './TableCell';

//Create row
class TableRow extends Component {
    constructor(props){
        super(props);
    }    

    render(){
        let tableColumn = [];
        for (let i = 0; i < this.props.columns + 1; i++){
            tableColumn.push(
                <TableCell
                    key = {i}
                />
            );
        }
        return(
            <tr>
                {tableColumn}
            </tr>
        )
    }

}
export default TableRow;