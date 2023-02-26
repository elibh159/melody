import React, { useState } from 'react';
import { Row, Col, Button, Card } from 'react-bootstrap';
import { SongCardType } from '../../interface/songType';
import AddToPlaylistModal from '../playList/addToPlaylistModal';
import "./styles/songCard.scss";

const SongCard = (songInfo: SongCardType) => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <Row>
      <Col>
        <Card className="m-1">
          <Card.Body>
            <div className="d-flex flex-row  flex-wrap flex-fill">

              <div className="p-2">
                <div className="fw-bold">Title </div>
                {songInfo.title}
              </div>

              <div className="p-2">
                <div className="fw-bold">Album Name</div>
                {songInfo.albumName}
              </div>
              <div className="p-2">
                <div className="fw-bold">Artist Name</div>
                {songInfo.artistName}
              </div>
              <div className="p-2">
                <div className="fw-bold">Duration</div>
                {songInfo.duration}
              </div>
              <div className="p-2 me-auto">
                <div className="fw-bold">Year</div>
                {songInfo.year}
              </div>
              <div className="p-2">
                <a className="btn btn-info" href={`${songInfo.file}.${songInfo.format}`} download>download</a>
              </div>
              <div className="p-2">
                <Button variant="primary" onClick={() => setModalShow(true)}>
                  Add to Playlist
                </Button>
              </div>
              <AddToPlaylistModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                songid={songInfo.id}
              />
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>)
}

export default SongCard;