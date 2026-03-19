import type { ReactNode } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import VideoBackground from '../Background3D/Background3D';

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            zIndex: 1
        }}>
            <VideoBackground />
            <Navbar />
            <main style={{ flex: 1, position: 'relative' }}>
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
