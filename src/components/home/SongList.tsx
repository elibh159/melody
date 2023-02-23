import React from 'react';
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { songListPropsType, SongResoponseType } from '../../interface/songType';
import SongCard from './SongCard';
import { useInView } from 'react-intersection-observer';
import { Button, Spinner } from 'react-bootstrap';

const SongList = ({
    status,
    data,
    //error,
    isFetching,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage
}: songListPropsType
) => {

    const { ref, inView } = useInView();
    React.useEffect(() => {
        if (inView) {
            fetchNextPage()
        }
    }, [inView])
    return (
        <div>
            {status === 'loading' ? (
                <Spinner></Spinner>
            ) : status === 'error' ? (
                <p className="text-danger">Error</p>// {error.message}
            ) : (
                <>
                    {data?.pages.map((page: { items: SongResoponseType[]; }, i: React.Key | null | undefined) => (
                        <React.Fragment key={i}>
                            {page.items.map((song: SongResoponseType) => (
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
                        </React.Fragment>
                    ))}
                    <div>
                        <Button
                            className='info'
                            ref={ref}
                            onClick={() => fetchNextPage()}
                            disabled={!hasNextPage || isFetchingNextPage}
                        >
                            {isFetchingNextPage
                                ? 'Loading more...'
                                : hasNextPage
                                    ? 'Load Newer'
                                    : 'Nothing more to load'}
                        </Button>
                    </div>
                    <div>
                        {isFetching && !isFetchingNextPage
                            ? 'Background Updating...'
                            : null}
                    </div>
                </>
            )}
            <ReactQueryDevtools initialIsOpen={false} />
        </div>
    )
}

export default SongList;





