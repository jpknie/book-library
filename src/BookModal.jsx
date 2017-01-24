import React from 'react';

export default class BookModal {
  constructor(props) {
    this.state = props;
  }

  componentWillReceiveProps(nextProps) {
    console.log("boookmodal receive props");
    this.setState({modalShown: nextProps.modalShown})
  }

  showModal() {
    this.setState({modalShown: true});
  }
  
  hideModal() {
    this.setState({modalShown: false})
  }

  render() {
    if(this.state.modalShown) {
      return(
      <div className="bsComponent">
        <div className="modal" style={{display: "block"}}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button className="close" data-dismiss="modal" onClick={this.hideModal.bind(this)}>×</button> 
                <h4 className="modal-title"> "Add or edit book"</h4>
                <div className="modal-body">
                  This is modal body
                </div>
             </div>
          </div>
        </div>
        </div>
      </div>);
    } else {
      return(<div></div>);
    }
  }
}