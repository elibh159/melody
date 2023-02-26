import React, { useState } from 'react';
import Playlist from '.';
import CreatePlaylist from './createPlaylist';
import { Tabs, Tab } from 'react-bootstrap';

const PlaylistTabs = ({ songid }: any) => {
    const [key, setKey] = useState('playlist');
    return (
        <Tabs
            defaultActiveKey="playlist"
            id="justify-tab-example"
            className="mb-3"
            justify
            activeKey={key}
            onSelect={(k: any) => setKey(k)}
        >
            <Tab eventKey="playlist" title="Playlist">
                <Playlist songid={songid} />
            </Tab>
            <Tab eventKey="createPlaylist" title="CreatePlaylist">
                <CreatePlaylist />
            </Tab>
        </Tabs>
    )
}
export default PlaylistTabs;