import React                                  from 'react';
import BookItem                               from './BookItem.jsx'
import _                                      from 'underscore'
import { Table }                              from 'react-bootstrap';
//import { BookModal }                          from './BookModal.jsx';

export default class BookList extends React.Component {
  constructor(props) {
    super(props);
    this.state = props;
  }

  componentWillReceiveProps(nextProps) {

  }

  /*deleteCallback(err, res) {
    _.reject(this.state, (book) =>
      if(book.id == res.body.id) return true;
    )
  }*/

  showBookModal() {
    this.setState({showBookModal: true});
  }
 
  render() {
    return(
      <div>
        <Table striped bordered hover>
          <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Author</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
          </thead>
          <tbody>
          {_.map(this.props.bookList, (book) => {
                return <BookItem key={book.id} id={book.id} name={book.name} author={book.author} />})}
          </tbody>
          </Table>
        <button className="btn btn-lg btn-primary" onClick={this.showBookModal.bind(this)}>Add new book</button>
      </div>
    )
  }
}
