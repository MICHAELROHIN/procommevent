import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();

    const getLinkStyle = (path: string) => ({
        color: location.pathname === path ? 'var(--color-primary)' : 'rgba(255, 255, 255, 0.7)',
        textDecoration: 'none',
        transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        padding: '0.8rem 1.5rem',
        letterSpacing: '3px',
        fontWeight: 'bold' as const,
        fontSize: '1rem',
        textShadow: location.pathname === path ? '0 0 15px var(--color-primary), 0 0 30px var(--color-primary)' : 'none',
    });

    return (
        <nav style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '1.5rem 0',
            textTransform: 'uppercase',
            fontFamily: 'var(--font-stranger)',
            zIndex: 1000,
            position: 'relative',
            marginBottom: '2rem',
            width: '100%',
            maxWidth: '800px',
            margin: '0 auto 2rem auto'
        }}>
            <style>
                {`
                .nav-container::before, .nav-container::after {
                    content: '';
                    position: absolute;
                    left: 0;
                    width: 100%;
                    height: 1px;
                    background: linear-gradient(90deg, transparent, var(--color-primary), transparent);
                    box-shadow: 0 0 10px var(--color-primary);
                }
                .nav-container::before { top: 0; }
                .nav-container::after { bottom: 0; }

                .nav-link {
                    position: relative;
                    transition: all 0.3s ease;
                }
                .nav-link:hover {
                    color: #fff !important;
                    text-shadow: 0 0 20px #fff, 0 0 40px var(--color-primary) !important;
                    transform: scale(1.1);
                }
                .nav-link.active::before {
                    content: '> ';
                    position: absolute;
                    left: -5px;
                    color: var(--color-primary);
                    animation: blink 1s infinite;
                }
                @keyframes blink {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0; }
                }
                `}
            </style>
            <div className="nav-container" style={{
                display: 'flex',
                gap: '1rem',
                position: 'relative',
                padding: '1rem 0'
            }}>
                <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} style={getLinkStyle('/')}>Home</Link>
                <Link to="/events" className={`nav-link ${location.pathname === '/events' ? 'active' : ''}`} style={getLinkStyle('/events')}>Events</Link>
                {/* <Link to="/timeline" className={`nav-link ${location.pathname === '/timeline' ? 'active' : ''}`} style={getLinkStyle('/timeline')}>Timeline</Link> */}
                <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} style={getLinkStyle('/about')}>About</Link>
                <Link to="/commitee" className={`nav-link ${location.pathname === '/commitee' ? 'active' : ''}`} style={getLinkStyle('/commitee')}>Committee</Link>
            </div>
        </nav>
    );
};

export default Navbar;