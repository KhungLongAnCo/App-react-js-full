import React, { Component } from 'react';

class Searching extends Component {
    Searching = (event) => {
        let { value } = event.target;
        let works = this.props.works;
        console.log(works);
        works = works.filter((work) => {
            return work.name.toLowerCase().indexOf(value.toLowerCase()) !== -1;
        })
        console.log(works);
        this.props.Searching(works);
    }
    render() {
        return (
            <input
                onChange={this.Searching}
                type="text"
                id="form-search"
                placeholder="Searching by name. . ."
                className="form-control " />
        )
    }

}


export default Searching;

