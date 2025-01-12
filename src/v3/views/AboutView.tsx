import { Profile } from '../components/Profile/Profile';

export const AboutView = (): JSX.Element => {
    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100vh' }}>
                <Profile />
            </div>
        </>
    );
};