export interface createPlaylistPropsType {
    title: string;
    cover: File;
}

export interface PlaylistType {
    id: number;
    title: string;
    cover: string;  
}

export interface AddToPlaylistModalPropsType {
    show: boolean;
    onHide: () => void;
    songid: string;
}

