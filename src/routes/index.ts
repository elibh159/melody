import React from "react";
import { RoutesType } from "../interface/routesType";

const Home = React.lazy(() => import("../views/Home"));
const PlayList = React.lazy(() => import("../views/PlayList")); 
const PlaylistDetail = React.lazy(() => import("../components/playList/playListDetail")); 

const routes : RoutesType[] = [
  { path: "/", exact: true, name: "Home", element: Home },
  { path: "/home", exact: false, name: "Home", element: Home },
  { path: "/playList", exact: false, name: "PlayList", element: PlayList},
  { path: "/playList/:playListId", exact: false, name: "PlayListDetail", element: PlaylistDetail},
];

export default routes;