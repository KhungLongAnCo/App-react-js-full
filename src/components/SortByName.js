import React, { Component } from 'react';

class Sort extends Component {
    onChange = (event) => {
        let value = event.target.value;
        let works = this.props.works;
        if (value === '1') {
            works.sort(function (a, b) {
                if (a.name < b.name) { return -1; }
                if (a.name > b.name) { return 1; }
                return 0;
            })
        }
        if (value === '2') {
            works.sort(function (a, b) {
                if (a.name < b.name) { return 1; }
                if (a.name > b.name) { return -1; }
                return 0;
            })
        }
        this.props.Sort(works);
    }
    render() {
        return (

            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <select required="required" onChange={this.onChange}>
                    <option>Sort By</option>
                    <option value="1">A->Z</option>
                    <option value="2">Z->A</option>
                </select>
            </div>

        )
    }

}


export default Sort;

