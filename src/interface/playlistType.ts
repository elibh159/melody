export interface createPlaylistPropsType {
    title: string;
    cover: File;
}

export interface PlayListType {
    id: number;
    title: string;
    cover: string;
    // createAt: string;
    // updateAt: string;    
}

export interface AddToPlayListModalPropsType {
    show: boolean;
    onHide: () => void;
    songid: string;
}

