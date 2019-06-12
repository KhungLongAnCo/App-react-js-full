import React, { Component } from 'react';
import { CreateNewWorks } from '../actions/AtcCreateNewWork';
import { EditWork } from '../actions/editWork';
import FixWork from '../actions/FixWork';
import { connect } from 'react-redux';

class PageActionForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nameWork: '',
            detailWork: '',
            status: false
        }
    }
    onChange = (event) => {
        let target = event.target;
        let { name } = target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        })
    }
    onSubmit = (event) => {
        event.preventDefault();
        let work = this.state;
        if(this.props.match){
        let id = this.props.match.params.id;
        this.props.FixWork({
            id: id,
            name: work.nameWork,
            note: work.detailWork,
            status: work.status
        });
        }else{
        this.props.CreateNewWork({
            name: work.nameWork,
            note: work.detailWork,
            status: work.status
        })
        }
        this.props.history.goBack();

    }
    componentWillMount() {
        let match = this.props.match;
        if (match) {
            let id = match.params.id;
            this.props.EditWork(id);
        }
    }
    componentWillReceiveProps(nextProps) {

        if (nextProps && nextProps.WorkEdit) {
            let { WorkEdit } = nextProps;
            this.setState({
                nameWork: WorkEdit.name,
                detailWork: WorkEdit.note,
                status: WorkEdit.status
            })
        }
    }
    render() {
        let work = this.state;
        return (
            <form onSubmit={this.onSubmit} className="form-group col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <legend>Create new Work</legend>

                <div>
                    <label>Name</label>
                    <input type="text"
                        onChange={this.onChange}
                        className="form-control"
                        name="nameWork"
                        value={work.nameWork}
                        placeholder="Name work"

                    />
                    <label>Detail Work</label>
                    <input type="text"
                        onChange={this.onChange}
                        value={work.detailWork}
                        className="form-control"
                        name="detailWork"
                        placeholder="Detail work" />
                    <br />
                    <div className="grid-container">
                        <input type="checkbox"
                            className="form-control"
                            checked={work.status}
                            name="status"
                            onChange={this.onChange}
                            id="checkboxForm" />
                        <label className=" grid-item" id="labelCheckbox">Complete</label>
                    </div>
                </div>
                <br />
                <button className="btn btn-primary">Create Work</button>
            </form>

        )
    }
}

const mapStateToProps = state => {
    return {
        WorkEdit: state.EditWork
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        CreateNewWork: (work) => {
            dispatch(CreateNewWorks(work))
        },
        EditWork: (id) => {
            dispatch(EditWork(id));
        },
        FixWork : work =>{
            dispatch(FixWork(work));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PageActionForm);