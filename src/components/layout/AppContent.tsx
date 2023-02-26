import React, { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../custom/Spinner";
import routes from "../../routes";
import RequireAuth from "./RequireAuth";
import { RoutesType } from "../../interface/routesType";
import { getPlaylistApi } from "../../services";

const AppContent: () => JSX.Element = () => {
  useQuery(['playlist'], getPlaylistApi);
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col">
          <Suspense fallback={<Spinner />}>
            <Routes>
              {routes.map((route: RoutesType, idx: number) => {
                return (
                  route.element && (
                    <Route
                      key={idx}
                      path={route.path}
                      element={
                        <RequireAuth>
                          <route.element />
                        </RequireAuth>
                      }
                    />
                  )
                );
              })}
              <Route path="/" element={<Navigate to="home" replace />} />
            </Routes>
          </Suspense>
        </div>
      </div>
    </div>
  );
};


export default React.memo(AppContent);