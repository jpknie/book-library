import React from 'react';

export default class BootItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = props;
  }
  
  componentWillReceiveProps(nextProps) {

  }

  render() {
    return(
    <tr>
      <td>{this.props.id}</td>
      <td>{this.props.name}</td>
      <td>{this.props.author}</td>
      <td>{this.props.descriptions}</td>
      <td><span
            className="glyphicon glyphicon-remove">&nbsp;
          </span>
          <span className="glyphicon glyphicon-edit">
          </span>
      </td>
    </tr>)
  }
}