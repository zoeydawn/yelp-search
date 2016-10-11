import React, { Component } from 'react'
import { browserHistory } from 'react-router'

import YelpStore from '../stores/YelpStore'

export default class SearchResults extends Component {
  constructor() {
    super();
    this.state = {
      results: YelpStore.getAll()
    }

    this._onChange = this._onChange.bind(this);
  }

  componentWillMount() {
    // let { id } = this.props.params;
    YelpStore.startListening(this._onChange);
  }

  componentWillUnmount() {
    YelpStore.stopListening(this._onChange);
  }

  _onChange() {
    this.setState({
      results: YelpStore.getAll()
    })
  }

  render() {
    let businesses = [];
    let resultsList = '';
    if(this.state.results) {
      businesses = this.state.results.businesses;
      resultsList = businesses.map(bus => {
        return (
          <tr>
            <td>{bus.name}</td>

            <td>{bus.location.city}, {bus.location.state_code}</td>
          </tr>
        )
      })
    }
    // let businesses = this.state.results.business || [];
    console.log("this.state", this.state);
    console.log("businesses[0]", businesses[0]);

    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            {resultsList}
          </tbody>
        </table>
      </div>
    )
  }

}