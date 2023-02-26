import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { AddToPlaylistModalPropsType } from '../../interface/playlistType';
import PlaylistTabs from './playlistTabs';

//TODO: songid should be save in stateManagement
const AddToPlaylistModal = (props:AddToPlaylistModalPropsType) => {
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
        <PlaylistTabs songid={props.songid}/>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddToPlaylistModal;