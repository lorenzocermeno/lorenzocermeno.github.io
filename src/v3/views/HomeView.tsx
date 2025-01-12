import React from 'react';
import NavigationBar from '../components/NavigationBar/NavigationBar';
import { Profile } from '../components/Profile/Profile';
import { PortfolioView } from './PortfolioView';

export const HomeView = (): JSX.Element => {
    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100vh' }}>
                <Profile />
            </div>
        </>
    );
};