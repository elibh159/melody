import React, { useEffect } from 'react';
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addSongApi } from "../../services";
import { PlayListType } from '../../interface/playlistType';
import { Button, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import DeletePlaylist from './deletePlaylist';


const PlayList = ({ songid }: any = { songid: undefined }) => {
    const queryClient = useQueryClient();
    const data: any = queryClient.getQueryData(['playList']);
    const { mutate: mutateAddSong, isLoading: isLoadingAddSong, isSuccess: isSuccessAddSong, data: dataAddSong } = useMutation(addSongApi);//isError
   
    const addSongToPlayList = (playlistId: number) => {
        mutateAddSong({ songid, playlistId });
    }

  
    useEffect(() => {
        if (isSuccessAddSong) {
            queryClient.setQueryData(['playList'], (oldData: any) => {
                const index = oldData.items.findIndex((item: any) => item.id === dataAddSong.id);
                if (index != -1) {
                    oldData.items[index].song = dataAddSong.songs;
                }
                return oldData;
            });
        }
    }, [isSuccessAddSong]);

    return (
        <div>
             {isLoadingAddSong && <Spinner />}
            <ul>
                {data?.items.map(({ id, title, cover }: PlayListType) => (
                    <li key={id} className="d-flex flex-row align-items-center m-2 justify-content-between">
                        <Link to={`/playList/${id}`} >
                            <img src={cover} alt={title} width={50} height={50} ></img>
                            <p className='p-1  '>{title}</p>
                        </Link>
                        {songid &&
                            <Button
                                onClick={() => addSongToPlayList(id)}
                                className="btn btn-success ms-auto m-1" >
                                ➕ Add to playlist
                            </Button>}
                        <DeletePlaylist playlistId={id} />
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default PlayList;