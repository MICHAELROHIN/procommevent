import CountdownClock from '../components/CountdownClock/CountdownClock';
import Navbar from '../components/Layout/Navbar';

const Home = () => {
    return (
        <div style={{
            padding: '0.1rem 0.1rem',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center'
        }}>
            <Navbar />
            
            {/* Logo Section */}
            <div style={{ marginTop: '2rem', width: '100%', maxWidth: '500px' }}>
                <img 
                    src="/src/assets/Literix.png" 
                    alt="Stranger Things Logo" 
                    style={{
                        width: '100%',
                        height: 'auto',
                        filter: 'drop-shadow(0 0 10px rgba(255, 0, 0, 0.5))', // Adds a subtle red glow
                        display: 'block',
                        margin: '0 auto'
                    }} 
                />
            </div>

            <p style={{ marginTop: '2rem', fontSize: '1.5rem', fontFamily: 'var(--font-stranger)' }}>
                Welcome to the Upside Down.
            </p>

            <div style={{ marginTop: '3rem' }}>
                <CountdownClock />
            </div>
        </div>
    );
};

export default Home;