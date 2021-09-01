import React, { Component } from 'react'

export default class Calculation extends Component {

    render() {
        let data = this.props.data;
        let title = this.props.title;
        let changeDate = this.props.changeDate;
        return (
            <div>
                <fieldset>
                    <legend>{title}</legend>
                    <input type="text" value={data} onChange={changeDate} />
                </fieldset>

            </div>
        )
    }
}
