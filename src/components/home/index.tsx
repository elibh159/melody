import React, { useState } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { songApi } from '../../services';
import SearchBar from './SearchBar';
import SongList from './SongList';
import { Container } from 'react-bootstrap';

const Home: () => JSX.Element = () => {
    const [search, setSearch] = useState("");
    const [perPage,] = useState(20);
    const {
        status: getSongListStatus,
        data: songListData,
        error,
        isFetching,
        isFetchingNextPage,
        isFetchingPreviousPage,
        fetchNextPage,
        fetchPreviousPage,
        hasNextPage,
        hasPreviousPage,
    } = useInfiniteQuery(
        ['songs', search, perPage],
        songApi,
        {
            getNextPageParam: (lastPage) => lastPage._links.next ?? undefined,
        },
    );



    return (<Container className="p-3">
        <SearchBar
            search={search}
            setSearch={setSearch} />
        <SongList
            status={getSongListStatus}
            error={error as Error}
            data={songListData}
            isFetching={isFetching}
            isFetchingNextPage={isFetchingNextPage}
            isFetchingPreviousPage={isFetchingPreviousPage}
            fetchPreviousPage={fetchPreviousPage}
            hasNextPage={hasNextPage}
            hasPreviousPage={hasPreviousPage}
            fetchNextPage={fetchNextPage}
        />
    </Container>)
}

export default Home;