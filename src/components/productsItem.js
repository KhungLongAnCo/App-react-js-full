import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class ProductItem extends Component {
    removeWorks = (id) => {
        this.props.removeWork(id)
    }
    CompleteWork = (product) => {
        this.props.CompleteWork(product);
    }
    render() {
        let { product } = this.props;
        return (
            <tr>
                <td>{this.props.index + 1}</td>
                <td>{product.name}</td>
                <td>{product.note}</td>
                <td>
                    <NavLink to={`/${product.id}/ActionPage`} className="btn btn-warning">Modify</NavLink>
                </td>
                <td>
                    <button type="button" className="btn btn-danger" onClick={() => this.removeWorks(product.id)} >Delete</button>
                </td>
                <td>
                    <button type="button" className="btn btn-success"
                        onClick={() => this.CompleteWork(product)}
                    >Processing...</button>
                </td>
            </tr>
        )
    }
}

export default ProductItem;

