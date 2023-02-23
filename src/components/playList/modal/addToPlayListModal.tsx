import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { AddToPlayListModalPropsType } from '../../../interface/playlistType';
import PlayListTabs from './playListTabs';

//TODO: SongID should be save in stateManagement
const AddToPlayListModal = (props:AddToPlayListModalPropsType) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add to playlist
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <PlayListTabs songId={props.songId}/>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddToPlayListModal;