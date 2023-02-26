import React from 'react';
import { Card } from 'react-bootstrap';
import Playlist from "../../components/playList";

const PlaylistView = () => {
    return (<div className="p-3">
        <Card>
            <h1 className='p-5'>Playlist</h1>
        </Card>
        <Playlist />
    </div>)
}

export default PlaylistView;