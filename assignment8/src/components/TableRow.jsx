import React, {Component}from 'react';
import TableCell from './TableCell';

//Create row
class TableRow extends Component {
    constructor(props){
        super(props);
    }    

    render(){
        return(
            <tr className="tableRow">
                {this.props.cells}
            </tr>
        )
    }

}
export default TableRow;