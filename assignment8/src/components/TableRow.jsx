import React, {Component}from 'react';

//Create row
class TableRow extends Component {
    constructor(props){
        super(props);
    }    

    render(){
        return(
            <tr>
                {this.props.tablerows}
            </tr>
        )
    }

}
export default TableRow;