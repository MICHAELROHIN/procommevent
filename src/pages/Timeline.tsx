import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { eventsData, type EventCategory } from '../data/eventsData';

const Timeline = () => {
    const [activeCategory, setActiveCategory] = useState<EventCategory>('technical');

    const technicalEvents = eventsData.filter((event) => event.category === 'technical');
    const nonTechnicalEvents = eventsData.filter((event) => event.category === 'non-technical');

    const eventsToDisplay = activeCategory === 'technical' ? technicalEvents : nonTechnicalEvents;

    return (
        <div style={{
            position: 'relative',
            padding: '0',
            width: '100%',
            maxWidth: '1000px',
            margin: '0 auto'
        }}>
            <h2 className="stranger-title" style={{ margin: '1rem 0 3rem 0', textAlign: 'center' }}>
                Event Timeline
            </h2>

            {/* Category Selector Tabs */}
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '2rem',
                marginBottom: '4rem',
                position: 'relative',
                paddingLeft: '55px',
                zIndex: 2
            }}>
                <button
                    type="button"
                    onClick={() => setActiveCategory('technical')}
                    style={{
                        background: activeCategory === 'technical' ? 'var(--color-primary)' : 'transparent',
                        border: '2px solid var(--color-primary)',
                        color: activeCategory === 'technical' ? 'black' : 'var(--color-primary)',
                        padding: '0.8rem 2.5rem',
                        fontFamily: 'var(--font-stranger)',
                        fontSize: '1.2rem',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        textTransform: 'uppercase',
                        letterSpacing: '2px',
                        boxShadow: activeCategory === 'technical' ? '0 0 20px var(--color-primary)' : 'none',
                        borderRadius: '4px'
                    }}
                >
                    Technical Events
                </button>
                <button
                    type="button"
                    onClick={() => setActiveCategory('non-technical')}
                    style={{
                        background: activeCategory === 'non-technical' ? 'var(--color-primary)' : 'transparent',
                        border: '2px solid var(--color-primary)',
                        color: activeCategory === 'non-technical' ? 'black' : 'var(--color-primary)',
                        padding: '0.8rem 2.5rem',
                        fontFamily: 'var(--font-stranger)',
                        fontSize: '1.2rem',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        textTransform: 'uppercase',
                        letterSpacing: '2px',
                        boxShadow: activeCategory === 'non-technical' ? '0 0 20px var(--color-primary)' : 'none',
                        borderRadius: '4px'
                    }}
                >
                    Non-Technical Events
                </button>
            </div>

            {/* Central Line */}
            <div style={{
                position: 'absolute',
                left: '50%',
                top: '200px',
                bottom: '50px',
                width: '4px',
                backgroundColor: 'var(--color-primary)',
                transform: 'translateX(-50%)',
                boxShadow: '0 0 10px var(--color-primary), 0 0 20px var(--color-primary)',
                opacity: 0.6,
                zIndex: 0
            }} className="flicker-line" />

            <div style={{ position: 'relative', zIndex: 1, minHeight: '600px' }}>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeCategory}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                    >
                        {eventsToDisplay.map((event, index) => (
                            <motion.div
                                key={event.id}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                style={{
                                    display: 'flex',
                                    justifyContent: index % 2 === 0 ? 'flex-end' : 'flex-start',
                                    paddingRight: index % 2 === 0 ? '50%' : '0',
                                    paddingLeft: index % 2 === 0 ? '0' : '50%',
                                    marginBottom: '4rem',
                                    position: 'relative'
                                }}
                            >
                                {/* Dot on Line */}
                                <div style={{
                                    position: 'absolute',
                                    left: '50%',
                                    top: '20px',
                                    width: '20px',
                                    height: '20px',
                                    backgroundColor: 'black',
                                    border: '3px solid var(--color-primary)',
                                    borderRadius: '50%',
                                    transform: 'translateX(-50%)',
                                    boxShadow: '0 0 10px var(--color-primary)',
                                    zIndex: 2
                                }} />

                                {/* Content Card */}
                                <motion.div
                                    className="hawkins-container event-card"
                                    whileHover={{
                                        scale: 1.05,
                                        y: -10,
                                        boxShadow: "0 0 30px var(--color-primary)"
                                    }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                    style={{
                                        width: '90%',
                                        textAlign: index % 2 === 0 ? 'right' : 'left',
                                        margin: index % 2 === 0 ? '0 2rem 0 0' : '0 0 0 2rem',
                                        cursor: 'pointer'
                                    }}
                                >
                                    <span style={{
                                        color: 'var(--color-primary)',
                                        fontWeight: 'bold',
                                        fontFamily: 'var(--font-digital)',
                                        textShadow: '0 0 5px var(--color-primary)'
                                    }}>
                                        {event.date}
                                    </span>
                                    <h3 style={{
                                        margin: '0.5rem 0',
                                        color: 'white',
                                        fontSize: '1.4rem',
                                        transition: 'all 0.3s ease'
                                    }}>
                                        {event.title}
                                    </h3>
                                    <p className="stranger-text" style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                                        {event.location}
                                    </p>
                                    <p className="stranger-text" style={{ fontSize: '0.8rem', opacity: 0.8 }}>
                                        {event.description}
                                    </p>
                                </motion.div>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>

            <style>{`
                .flicker-line {
                    animation: flicker 5s infinite alternate;
                }
                @media (max-width: 768px) {
                    .flicker-line {
                        left: 20px !important;
                        top: 200px !important;
                        transform: none !important;
                    }
                    div[style*="paddingRight: 50%"], div[style*="paddingLeft: 50%"] {
                        padding-left: 50px !important;
                        padding-right: 0 !important;
                        justify-content: flex-start !important;
                    }
                    div[style*="left: 50%"] {
                        left: 20px !important;
                    }
                    div[style*="margin: 0 2rem 0 0"] {
                        margin: 0 0 0 1rem !important;
                        text-align: left !important;
                    }
                    div[style*="margin: 0 0 0 2rem"] {
                        margin: 0 0 0 1rem !important;
                    }
                    div[style*="textAlign: right"] {
                        text-align: left !important;
                    }
                }
            `}</style>
        </div>
    );
};

export default Timeline;