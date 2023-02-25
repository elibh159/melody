import React, { useEffect } from 'react';
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deletePlaylistApi } from "../../services";
import { Button, Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const DeletePlaylist = ({ playlistId }: any ) => {
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const { mutate: mutateDelete, isLoading: isLoadingDelete, data: dataDelete, isSuccess: isSuccessDelete } = useMutation(deletePlaylistApi);



    const deletePlayList = () => {
        mutateDelete(playlistId);
    }

    useEffect(() => {
        if (isSuccessDelete) {

            queryClient.setQueryData(['playList'], (oldData: any) => {
                const items = oldData.items.filter((item: any) => item.id !== dataDelete.playlistId);
                return { ...oldData, items };
            });
            navigate('/playList');
        }
    }, [isSuccessDelete]);



    return (
        <div>
            {isLoadingDelete && <Spinner />}

            <Button
                onClick={() => deletePlayList()}
                className="btn btn-danger m-1">
                Delete playlist
            </Button>

        </div>
    )
}
export default DeletePlaylist;