import React from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { Card, Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { SongResoponseType } from '../../interface/songType';
import SongCard from '../home/SongCard';
import "./style/style.scss";
import DeletePlaylist from './deletePlaylist';

const PlaylistDetail = () => {
    const { playListId = 0 } = useParams();
    const queryClient = useQueryClient();
    const data: any = queryClient.getQueryData(['playList']);

    const detailData = data.items.filter((item: any) => item.id === +playListId)[0];

    return (<div>
        <div className='cover'>
            <Card>
                <div className="d-flex flex-row align-items-center m-2" >
                    <img src={detailData.cover} />
                    <h1 className='m-3  mx-auto'>{detailData.title}</h1>
                    <DeletePlaylist playlistId={(+playListId)} />
                </div>
            </Card >
        </div>
        <Container>
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