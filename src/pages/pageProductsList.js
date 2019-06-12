import React, { Component } from 'react';
import ProductsList from '../components/productsList';
import ProductItem from '../components/productsItem';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

class ProductList extends Component {
    Constructor(props) {
    }
    render() {
        let works = this.props.AllWorks;
        return (
            <div>
                <NavLink to='/ActionPage' className="btn btn-info">Add new work</NavLink>
                <br />
                <br />
                <ProductsList>
                    {this.showProductsItem(works)}
                </ProductsList>
            </div>
        )
    }
    showProductsItem = (works) => {
        let result = null;
        if (works) {
            result = works.map((product, index) => {
                return <ProductItem
                    index={index}
                    key={product.id}
                    product={product}
                />
            })
        }
        return result;
    }

}
const mapStateToProps = state => {
    return {
        AllWorks: state.Works
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(ProductList);

