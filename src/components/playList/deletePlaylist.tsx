import React, { useEffect } from 'react';
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button, Spinner } from 'react-bootstrap';
import { deletePlaylistApi } from "../../services";
import { TextError } from '../custom/TextError';

const DeletePlaylist = ({ playlistId }: any) => {
    const queryClient = useQueryClient();
    const { mutate: mutateDelete,
        isLoading: isLoadingDelete,
        data: dataDelete,
        isSuccess: isSuccessDelete,
        isError,
        error } = useMutation(deletePlaylistApi);

    const deletePlaylist = () => {
        mutateDelete(playlistId);
    }

    function arrayRemove(arr: any[], value: number) {

        return arr.filter(function (ele: { id: number; }) {
            return ele.id != value;
        });
    }
    useEffect(() => {
        if (isSuccessDelete) {
            queryClient.setQueryData(['playlist'], (oldData: any) => {
                const items = arrayRemove(oldData.items, dataDelete.playlistId);
                return { ...oldData, items };
            });
        }
    }, [isSuccessDelete]);
    if (isLoadingDelete) return <Spinner />;

    return (
        <div>
            {(isError && error instanceof Error) && <TextError>Error: {error.message}</TextError>}
            <Button
                onClick={() => deletePlaylist()}
                className="btn btn-danger">
                Delete playlist
            </Button>

        </div>
    )
}
export default DeletePlaylist;