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
                // onMouseUp = {this.props.mouseUp}
                // onMouseDown = {this.props.mouseDown}
                // onMouseEnter = {this.props.mouseEnter}
                // onClick = {this.props.onClick}
                > 
            </td>
         )
    }
}
export default TableCell;