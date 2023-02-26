import React from "react";
import { RoutesType } from "../interface/routesType";

const Home = React.lazy(() => import("../views/Home"));
const Playlist = React.lazy(() => import("../views/Playlist")); 
const PlaylistDetail = React.lazy(() => import("../components/playList/playlistDetail")); 

const routes : RoutesType[] = [
  { path: "/", exact: true, name: "Home", element: Home },
  { path: "/home", exact: false, name: "Home", element: Home },
  { path: "/playlist", exact: false, name: "Playlist", element: Playlist},
  { path: "/playlist/:playlistId", exact: false, name: "PlaylistDetail", element: PlaylistDetail},
];

export default routes;