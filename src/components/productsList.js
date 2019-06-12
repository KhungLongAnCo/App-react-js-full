import React, { Component } from 'react';


class ProductList extends Component {
    render() {
        let ListItem = this.props.children;
        return (   
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" >
                <table className="container table table-hover">
                    <thead>
                        <tr>
                            <th>Stt</th>
                            <th>Name</th>
                            <th>Note</th>
                            <th>Modify</th>
                            <th>Delete</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ListItem}
                    </tbody>
                </table>
            </div >
        )
    }
}

export default ProductList;

