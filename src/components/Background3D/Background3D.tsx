import ieeeBgVideo from '../../assets/IEEE Bg.mp4';

const VideoBackground = () => {
    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: -1,
            backgroundColor: '#050505',
            overflow: 'hidden'
        }}>
            {/* The Video Element */}
            <video
                autoPlay
                loop
                muted
                playsInline
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transform: 'translate(-50%, -50%)',
                    opacity: 0.8, // Slight transparency to blend with dark bg
                }}
            >
                <source src={ieeeBgVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Cinematic Overlay (Vignette & Color Wash) */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.4) 50%, #000000 95%)',
                pointerEvents: 'none'
            }} />
        </div>
    );
};

export default VideoBackground;