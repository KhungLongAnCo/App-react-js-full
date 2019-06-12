import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

class ProductItem extends Component {
    render() {
        let { product } = this.props;
        return (
            <tr>
                <td>{this.props.index + 1}</td>
                <td>{product.name}</td>
                <td>{product.note}</td>
                <td>{product.status}</td>
                <td>
                    <NavLink to={`/${product.id}/ActionPage`} className="btn btn-warning">Modify</NavLink>
                </td>
                <td>
                    <button type="button" className="btn btn-danger">Delete</button>
                </td>
                <td>
                    <button type="button" className="btn btn-success">complete</button>
                </td>
            </tr>
        )
    }
}

export default ProductItem;

