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
            status: false,
            error:''
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
        if (work.nameWork !== '' && work.detailWork !== '') {
            if (this.props.match) {
                let id = this.props.match.params.id;
                this.props.FixWork({
                    id: id,
                    name: work.nameWork,
                    note: work.detailWork,
                    status: work.status
                });
            } else {
                this.props.CreateNewWork({
                    name: work.nameWork,
                    note: work.detailWork,
                    status: work.status
                })
            }
            if (work.status === true) {
                this.props.history.push('/WorkCompleted');
            } else {
                this.props.history.push('/ListProducts');
            }
            this.setState({
                error:''
            })
        }
        if(work.nameWork === '' || work.detailWork === ''){
            this.setState({
                error:'Not let form emty !!!'
            })
        }
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
                <legend>{this.props.match ? 'Modify work ' : 'Create new Work'}</legend>

                <div>
                   {this.state.error ?  <div className="alert alert-warning">
                        <button type="button" className="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                        <strong>warning</strong> {this.state.error}
                    </div> : null }
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
        FixWork: work => {
            dispatch(FixWork(work));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PageActionForm);