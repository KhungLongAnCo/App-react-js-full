import React, { Component } from 'react';
import ProductsList from '../components/productsList';
import ProductItem from '../components/productsItem';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import DeleteWork from '../actions/DeleteWork';
import CompleteWork from '../actions/addWorkCompleted';
import SortByName from '../components/SortByName';
import Searching from '../components/Searching';

class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            works: []
        }
    }

    removeWork = (id) => {
        if (window.confirm('Do you want remove this work ? ')) {
            this.props.DeleteWork(id);
        }
    }
    CompleteWork = (work) => {
        this.props.CompleteWork(work);
    }
    Searching = (works) => {
        this.setState({
            works
        });
    }
    Sort = (works) => {
        this.setState({
            works
        })
    }
    componentWillMount() {
        let works = this.props.AllWorks;
        this.setState({
            works
        })
    }
    render() {
        let works = this.state.works;
        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <h2>List Works To Day</h2>
                <br />
                <NavLink to='/ActionPage' className="btn btn-info">Add new work</NavLink>
                <br />
                <br />
                <Searching Searching={this.Searching} works={this.props.AllWorks} />
                <SortByName Sort={this.Sort} works={works} />
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
                    removeWork={this.removeWork}
                    index={index}
                    key={product.id}
                    product={product}
                    CompleteWork={this.CompleteWork}
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
        DeleteWork: (id) => {
            dispatch(DeleteWork(id));
        },
        CompleteWork: (work) => {
            dispatch(CompleteWork(work));
        }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(ProductList);

