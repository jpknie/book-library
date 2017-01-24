import React, { Component }                             from 'react';
import logo                                             from './logo.svg';
import { getRequest, postRequest, deleteRequest }       from './api-calls';
import BookList                                         from './BookList.jsx';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor() {
    super();
    this.state = {booklist:[]}
  }

  componentWillMount() {
    getRequest("http://NsdBooksTrainingApi.azurewebsites.net/Api/Books", (err, res) => { 
      this.setState({booklist: res.body});
    })
  }
  
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <BookList bookList={this.state.booklist} />
      </div>
    );
  }
}

export default App;
