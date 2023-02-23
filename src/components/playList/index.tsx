import React, { useEffect } from 'react';
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addSongApi, deletePlaylistApi } from "../../services";
import { PlayListType } from '../../interface/playlistType';
import { Button, Spinner } from 'react-bootstrap';


const PlayList = ({ songId }: any = { songId: undefined }) => {
    const queryClient = useQueryClient();
    const data: any = queryClient.getQueryData(['playList']);
    const { mutate: mutateAddSong, isLoading: isLoadingAddSong } = useMutation(addSongApi);//isError , data: dataAddSong, isSuccess: isSuccessAddSong
    const { mutate: mutateDelete, isLoading: isLoadingDelete, data: dataDelete, isSuccess: isSuccessDelete } = useMutation(deletePlaylistApi);

    const addSongToPlayList = (playlistId: number) => {
        mutateAddSong({ songId, playlistId });
    }

    const deletePlayList = (playlistId: number) => {
        mutateDelete(playlistId);

    }

    useEffect(() => {
        if (isSuccessDelete) {

            queryClient.setQueryData(['playList'], (oldData: any) => {
                const items = oldData.items.filter((item: any) => item.id !== dataDelete.playlistId);
                return { ...oldData, items };
            });
        }
    }, [isSuccessDelete]);



    return (
        <div>
            <ul>
                {data?.items.map(({ id, title, cover }: PlayListType) => (
                    <li key={id} className="d-flex flex-row align-items-center m-2 justify-content-between">
                        <img src={cover} alt={title} width={50} height={50} ></img>
                        <p className='p-1  '>{title}</p>
                        {(isLoadingAddSong || isLoadingDelete) && <Spinner />}
                        {songId &&
                            <Button
                                onClick={() => addSongToPlayList(id)}
                                className="btn btn-success ms-auto m-1" >
                                ➕ Add to playlist
                            </Button>}
                        <Button
                            onClick={() => deletePlayList(id)}
                            className="btn btn-danger m-1">
                            Delete playlist
                        </Button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default PlayList;