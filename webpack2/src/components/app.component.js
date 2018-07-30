import React from 'react';

import Row from './row.compoent';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      data: [],
      search: ''
    }
  }
  componentDidMount() {
    fetch('https://swapi.co/api/people/?format=json', {
      method: "GET",
      headers: { "Accept": "application/json" }
    })
      .then((Response) => Response.json())
      .then((data) => {
        this.setState({ data: data.results })
      })
  }
 
  updateSearch(event) {
    this.setState({ search: event.target.value })
  }
  render() {
    return (
      <div className='container wrapper'>
        <div className='col-md-10 col-md-offset-1'>
          <div className='box'>
            <div className='col-md-12 box-heading'>
              <div className='col-md-8'>
                <p> Data List </p>
              </div>
              <div className='col-md-4'>
                <input type='text'
                  value={this.state.search}
                  onChange={this.updateSearch.bind(this)}
                  placeholder='search'
                  className='form-control' />
              </div>

            </div>
            <div className='box-container'>
              <table className="table table-bordered">
                <tbody>
                  <tr>
                    <th>Name</th>
                    <th>Height</th>
                    <th>Mass</th>
                    <th>Created</th>
                    <th>Edited</th>
                    <th>Planet</th>
                  </tr>
                  {
                    this.state.data.map((row, i) =>
                      <Row key={row.created} data={row} />
                    )
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;