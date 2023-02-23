import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { AppContent, AppFooter, AppHeader } from "../components/layout";
import { getPlaylistApi } from '../services';

const DefaultLayout: () => JSX.Element = () => {
  useQuery(['playList'], getPlaylistApi);//, error 
  return (
    <div>
      <div>
        <AppHeader />
        <div>  
          <AppContent />
        </div>
        <AppFooter />
      </div>
    </div>
  );
};

export default DefaultLayout;