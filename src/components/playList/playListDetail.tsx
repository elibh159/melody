import React from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { Card, Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { SongResoponseType } from '../../interface/songType';
import SongCard from '../home/SongCard';
import "./style/style.scss";
import { TextError } from '../custom/TextError';

const PlaylistDetail = () => {
    const { playlistId = 0 } = useParams();
    const queryClient = useQueryClient();
    const data: any = queryClient.getQueryData(['playlist']);

    const detailData = data.items.filter((item: any) => item.id === +playlistId)[0];

    return (<div>
        <div className='cover p-3'>
            <Card>
                <div className="d-flex flex-row align-items-center m-2" >
                    <img src={detailData.cover} />
                    <h1 className='m-3'>{detailData.title}</h1>
                </div>
            </Card >
        </div>
        <Container className="p-3">
            {detailData.songs.length === 0 && <TextError>Playlist is empty!</TextError>}

            {detailData.songs.map((song: SongResoponseType) => (
                <SongCard
                    key={song.id}
                    id={song.id}
                    albumName={song.album_name}
                    artistName={song.artist_name}
                    duration={song.duration}
                    file={song.file}
                    format={song.format}
                    title={song.title}
                    year={song.year}
                ></SongCard>
            ))}
        </Container>

    </div >);
}

export default PlaylistDetail;