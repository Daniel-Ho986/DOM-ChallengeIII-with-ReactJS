import React, {Component} from 'react';

//Create cell
class TableCell extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <td 
                className="tableCell"
                onClick = {this.props.onClick}
                >
            </td>
         )
    }
}
export default TableCell;