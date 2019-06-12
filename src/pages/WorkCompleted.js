import React, { Component } from 'react';
import { connect } from 'react-redux';
import ItemCompleted from '../components/ItemComplete';
import DeleteWork from '../actions/DeleteWork';
import getWorksComplete from '../actions/getWorksComplete';

class WorkCompleted extends Component {
    constructor(props) {
        super(props);
        this.state = {
            works: []
        }
    }
    componentWillMount() {
        this.props.getWorksComplete();
    }
    removeWork = (id) => {
        if (window.confirm('Do you want delete this work ?')) {
            this.props.DeleteWork(id);
        }
    }
    render() {
        // let { works } = this.props;
        let works = JSON.parse(localStorage.getItem('worksCompleted'));
        works = works ? works : [];
        return (

            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">

                <h2>List works completed !</h2>
                <br />
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>index</th>
                            <th>Name</th>
                            <th>Note</th>
                            <th>Delete</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.showWorks(works)}
                    </tbody>
                </table>

            </div>
        )
    }
    showWorks(works) {
        let result = null;
        if (works.length > 0) {
            result = works.map((work, index) => {
                return <ItemCompleted
                    removeWork={this.removeWork}
                    index={index}
                    key={work.id}
                    work={work}
                />
            })
        }
        return result;
    }
}

const mapStateToprops = (state) => {
    return {
        works: state.WorkCompleted
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        DeleteWork: (id) => {
            dispatch(DeleteWork(id));
        },
        getWorksComplete: () => {
            dispatch(getWorksComplete());
        }
    }
}

export default connect(mapStateToprops, mapDispatchToProps)(WorkCompleted);