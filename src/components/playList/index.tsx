import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button, Card, Col, Container, Row, Spinner } from 'react-bootstrap';
import CreatePlaylist from './createPlaylist';
import DeletePlaylist from './deletePlaylist';
import { addSongApi } from '../../services';
import { PlaylistType } from '../../interface/playlistType';
import { TextSuccess } from '../custom/TextSuccess';
import { TextError } from '../custom/TextError';
import "./style/style.scss";

const Playlist = ({ songid }: any = { songid: undefined }) => {
    const [songTitle, setSongTitle] = useState<string>("");
    const queryClient = useQueryClient();
    const data: any = queryClient.getQueryData(['playlist']);
    const { mutate: mutateAddSong,
        isLoading: isLoadingAddSong,
        isSuccess: isSuccessAddSong,
        data: dataAddSong,
        isError: isErrorAddSong,
        error: errorAddSong } = useMutation(addSongApi);

    const addSongToPlaylist = (playlistId: number) => {
        mutateAddSong({ songid, playlistId });
    }

    useEffect(() => {
        if (isSuccessAddSong) {
            const title = dataAddSong.songs.filter((m: any) => m.id === songid)[0].title;
            setSongTitle(title);

            queryClient.setQueryData(['playlist'], (oldData: any) => {
                const index = oldData.items.findIndex((item: any) => item.id === dataAddSong.id);
                if (index != -1) {
                    oldData.items[index].songs = dataAddSong.songs;
                }
                return oldData;
            });
        }
    }, [isSuccessAddSong, setSongTitle]);

    if (!songid && (!data || data.items.length === 0))
        return (
            <Container className="p-3 text-center cover">
                <Row className="d-flex justify-content-center">
                    <Col lg={6} md={6}>
                        <Card>
                            <CreatePlaylist />
                        </Card>
                    </Col>
                </Row>
            </Container>);

    return (
        <Container className="p-3 text-center">
            {isLoadingAddSong && <Spinner />}
            {isErrorAddSong && errorAddSong instanceof Error && <TextError> {errorAddSong.message}</TextError>}
            {isSuccessAddSong &&
                <TextSuccess>
                    The song <i>{songTitle}</i> Added to playlist <i>{dataAddSong.title}</i> !
                </TextSuccess>
            }
            {!data || data.items.length === 0 && <TextError>There is no playlist! Creating a new one is easy!</TextError>}
            <ul>
                {data?.items.map(({ id, title, cover }: PlaylistType) => (
                    <li key={id} className="d-flex flex-row align-items-center m-2 justify-content-between">
                        <Link to={`/playlist/${id}`} className="d-flex" >
                            <img src={cover} alt={title} width={50} height={50} ></img>
                            <p className='p-1'>{title}</p>
                        </Link>
                        {songid &&
                            <Button
                                onClick={() => addSongToPlaylist(id)}
                                className="btn btn-success ms-auto" >
                                Add to playlist
                            </Button>}
                        {!songid &&
                            <DeletePlaylist playlistId={id} />}
                    </li>
                ))}
            </ul>
        </Container>
    )
}
export default Playlist;