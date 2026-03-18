import CountdownClock from '../components/CountdownClock/CountdownClock';
import Navbar from '../components/Layout/Navbar';

const Home = () => {
    return (
        <div style={{
            padding: '4rem 2rem',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center'
        }}>
            <Navbar />
            <h1 className="stranger-title" style={{ marginTop: '1rem' }}>Stranger Things</h1>
            <p style={{ marginTop: '2rem', fontSize: '1.5rem' }}>Welcome to the Upside Down.</p>

            <div style={{ marginTop: '3rem' }}>
                <CountdownClock />
            </div>
        </div>
    );
};

export default Home;