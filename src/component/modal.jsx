import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function AppModal(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.header}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>{props.subHeader}</h4>
        <p>
          {props.message}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Confirm</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AppModal;