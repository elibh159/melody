import { FetchNextPageOptions, FetchPreviousPageOptions, InfiniteData, InfiniteQueryObserverResult } from "@tanstack/react-query";

export interface SongParamsType {
    queryKey: (string | number)[];
    pageParam: number;
}
export interface SongCardType {
    id: string;
    albumName: string;
    artistName: string;
    duration: number;
    title: string;
    year: number;
    file: number;
    format: number;
}
export interface SongResoponseType {
    id: string;
    album_name: string;
    artist_name: string;
    duration: number;
    title: string;
    year: number;
    file: number;
    format: number;
}


export interface songListPropsType{
    status: string;
    data: InfiniteData<any> | undefined;
    error: Error;
    isFetching: boolean;
    isFetchingNextPage: boolean;
    isFetchingPreviousPage: boolean;
    fetchPreviousPage: (options?: FetchPreviousPageOptions | undefined) => Promise<InfiniteQueryObserverResult<any, unknown>>;
    hasNextPage: boolean | undefined;
    hasPreviousPage: boolean | undefined;
    fetchNextPage: (options?: FetchNextPageOptions | undefined) => Promise<InfiniteQueryObserverResult<any, unknown>>;
}

export interface SearchBarPropsType{
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
}