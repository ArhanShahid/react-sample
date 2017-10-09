import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { Button } from 'react-bootstrap';

const customStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.75)'
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    width: '30%',
    transform: 'translate(-50%, -50%)'
  }
};

class Row extends React.Component {
  constructor() {
    super()
    this.state = {
      modalIsOpen: false,
      modalData: ''
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  openModal() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {
    fetch(this.props.data.homeworld, {
      method: "GET",
      headers: { "Accept": "application/json" }
    })
      .then((Response) => Response.json())
      .then((res_data) => {
        this.setState({ modalData: res_data })
      })
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }
  render() {
    return (
      <tr key={this.props.data.created}>
        <td>{this.props.data.name}</td>
        <td>{this.props.data.height}</td>
        <td>{this.props.data.mass}</td>
        <td>{this.props.data.created}</td>
        <td>{this.props.data.edited}</td>
        <td>
          <Button onClick={this.openModal}>
            Home World
        </Button>
          <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel="Home World"
          >
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <th>Name</th>
                  <td>{this.state.modalData.name}</td>
                </tr>
                <tr>
                  <th>Diameter</th>
                  <td>{this.state.modalData.diameter}</td>
                </tr>
                <tr>
                  <th>Climate</th>
                  <td>{this.state.modalData.climate}</td>
                </tr>
                <tr>
                  <th>Population</th>
                  <td>{this.state.modalData.population}</td>
                </tr>
              </tbody>
            </table>

            <Button onClick={this.closeModal}>close</Button>
          </Modal>
        </td>
      </tr>
    )
  }
}

export default Row;