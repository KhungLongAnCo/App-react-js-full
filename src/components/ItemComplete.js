import React, { Component } from 'react';


class ItemCompleted extends Component {

    removeWorks = (id) => {
        this.props.removeWork(id)
    }

    render() {
        let { work } = this.props;
        return (
            <tr>
                <td>{this.props.index + 1}</td>
                <td>{work.name}</td>
                <td>{work.note}</td>
                <td>
                    <button type="button" className="btn btn-danger" onClick={() => this.removeWorks(work.id)} >Delete</button>
                </td>
                <td>
                    <button type="button" className="btn btn-success"
                    >Complete</button>
                </td>
            </tr>
        )
    }
}

export default ItemCompleted;

