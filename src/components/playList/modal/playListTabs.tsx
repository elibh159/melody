import React, { useState } from 'react';
import PlayList from '..';
import CreatePlayList from './createPlayList';
import { Tabs, Tab } from 'react-bootstrap';

const PlayListTabs = ({ songid }: any) => {
    const [key, setKey] = useState('playList');
    return (
        <Tabs
            defaultActiveKey="playList"
            id="justify-tab-example"
            className="mb-3"
            justify
            activeKey={key}
            onSelect={(k: any) => setKey(k)}
        >
            <Tab eventKey="playList" title="PlayList">
                <PlayList songid={songid} />
            </Tab>
            <Tab eventKey="createPlayList" title="CreatePlayList">
                <CreatePlayList />
            </Tab>
        </Tabs>
    )
}
export default PlayListTabs;