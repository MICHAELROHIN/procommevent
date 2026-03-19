import { useNavigate } from 'react-router-dom';

type CommitteeMember = {
    id: string;
    name: string;
    role: string;
    subtitle: string;
    photo: string;
};

type CommitteeSection = {
    id: string;
    title: string;
    members: CommitteeMember[];
};

const committeeSections: CommitteeSection[] = [
    {
        id: 'faculty',
        title: 'Faculty Coordinators',
        members: [
            {
                id: 'f1',
                name: 'Dr Nithya M',
                role: 'Head of Department',
                subtitle: 'Department Mentor',
                photo: 'https://i.pravatar.cc/320?img=32'
            },
            {
                id: 'f2',
                name: 'Ms Shiny A',
                role: 'Staff Coordinator',
                subtitle: 'Operations Lead',
                photo: 'https://i.pravatar.cc/320?img=47'
            },
            {
                id: 'f3',
                name: 'Mr Yuvaraj G',
                role: 'Staff Coordinator',
                subtitle: 'Technical Mentor',
                photo: 'https://i.pravatar.cc/320?img=12'
            }
        ]
    },
    {
        id: 'student',
        title: 'Student Coordinators',
        members: [
            {
                id: 's1',
                name: 'Akash R',
                role: 'President',
                subtitle: 'IEEE ProComm',
                photo: 'https://i.pravatar.cc/320?img=15'
            },
            {
                id: 's2',
                name: 'Nivetha K',
                role: 'Vice President',
                subtitle: 'Event Strategy',
                photo: 'https://i.pravatar.cc/320?img=48'
            },
            {
                id: 's3',
                name: 'Pradeep S',
                role: 'Secretary',
                subtitle: 'Communication',
                photo: 'https://i.pravatar.cc/320?img=55'
            },
            {
                id: 's4',
                name: 'Harini T',
                role: 'Treasurer',
                subtitle: 'Logistics and Budget',
                photo: 'https://i.pravatar.cc/320?img=25'
            }
        ]
    },
    {
        id: 'web',
        title: 'Website Team',
        members: [
            {
                id: 'w1',
                name: 'Ragul H',
                role: 'Frontend Developer',
                subtitle: 'UI and Animations',
                photo: 'https://i.pravatar.cc/320?img=68'
            },
            {
                id: 'w2',
                name: 'Kavin P',
                role: 'Backend Developer',
                subtitle: 'API and Data',
                photo: 'https://i.pravatar.cc/320?img=6'
            },
            {
                id: 'w3',
                name: 'Shreya M',
                role: 'UI Designer',
                subtitle: 'Visual Direction',
                photo: 'https://i.pravatar.cc/320?img=49'
            },
            {
                id: 'w4',
                name: 'Vignesh A',
                role: 'QA and Support',
                subtitle: 'Testing and Reviews',
                photo: 'https://i.pravatar.cc/320?img=11'
            }
        ]
    }
];

const getFallbackAvatar = (name: string) => {
    const encodedName = encodeURIComponent(name);
    return `https://ui-avatars.com/api/?name=${encodedName}&background=0d0d0d&color=eec77d&size=256&bold=true`;
};

const Committee = () => {
    const navigate = useNavigate();

    return (
        <div style={{ padding: '4rem 1.2rem', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ width: '100%', maxWidth: '1200px', marginBottom: '2.2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem', flexWrap: 'wrap' }}>
                    <button
                        type="button"
                        onClick={() => navigate(-1)}
                        style={{
                            width: '3rem',
                            height: '3rem',
                            borderRadius: '50%',
                            border: '2px solid rgba(238, 199, 125, 0.95)',
                            color: '#fff',
                            background: 'rgba(0, 0, 0, 0.45)',
                            fontSize: '1.5rem',
                            cursor: 'pointer',
                            boxShadow: '0 0 14px rgba(238, 199, 125, 0.35)',
                            transition: 'all 0.25s ease'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateX(-2px)';
                            e.currentTarget.style.boxShadow = '0 0 18px rgba(238, 199, 125, 0.55)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateX(0)';
                            e.currentTarget.style.boxShadow = '0 0 14px rgba(238, 199, 125, 0.35)';
                        }}
                    >
                        ←
                    </button>

                    <div>
                        <h1 style={{
                            fontFamily: 'var(--font-heading)',
                            fontSize: 'clamp(2rem, 4vw, 3.2rem)',
                            color: '#f0cb87',
                            letterSpacing: '1px',
                            textShadow: '0 0 18px rgba(238, 199, 125, 0.25)'
                        }}>
                            The Legends
                        </h1>
                        <p style={{
                            marginTop: '0.2rem',
                            color: '#e8dbbd',
                            fontFamily: 'var(--font-digital)',
                            fontSize: '0.85rem',
                            letterSpacing: '1px',
                            opacity: 0.85
                        }}>
                            IEEE PROCOMM - COMMITTEE PROFILES
                        </p>
                    </div>
                </div>
            </div>

            <div style={{ width: '100%', maxWidth: '1200px', display: 'grid', gap: '1.6rem' }}>
                {committeeSections.map((section) => (
                    <section key={section.id} className="committee-section-card">
                        <h2 className="committee-section-title">{section.title}</h2>

                        <div className="committee-members-grid">
                            {section.members.map((member) => (
                                <article key={member.id} className="committee-member-card">
                                    <div className="star-badge-wrap">
                                        <div className="star-badge" />
                                        <div className="member-photo-wrap">
                                            <img
                                                src={member.photo}
                                                alt={member.name}
                                                loading="lazy"
                                                onError={(e) => {
                                                    const target = e.currentTarget;
                                                    target.onerror = null;
                                                    target.src = getFallbackAvatar(member.name);
                                                }}
                                            />
                                        </div>
                                    </div>

                                    <h3 className="member-name">{member.name}</h3>
                                    <p className="member-role">{member.role}</p>
                                    <p className="member-subtitle">{member.subtitle}</p>
                                </article>
                            ))}
                        </div>
                    </section>
                ))}
            </div>

            <style>{`
                .committee-section-card {
                    background: linear-gradient(180deg, rgba(18, 18, 18, 0.84), rgba(10, 10, 10, 0.84));
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 20px;
                    box-shadow: 0 18px 40px rgba(0, 0, 0, 0.45), inset 0 0 24px rgba(255, 199, 128, 0.07);
                    padding: 1.8rem;
                    backdrop-filter: blur(5px);
                }

                .committee-section-title {
                    text-align: center;
                    color: #f5e8c8;
                    font-family: var(--font-heading);
                    font-size: clamp(1.7rem, 3vw, 2.5rem);
                    letter-spacing: 1px;
                    margin-bottom: 1.4rem;
                    text-shadow: 0 0 12px rgba(238, 199, 125, 0.28);
                }

                .committee-members-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    gap: 1.4rem;
                }

                .committee-member-card {
                    text-align: center;
                    padding: 0.8rem 0.6rem 0.6rem;
                    border-radius: 14px;
                    background: linear-gradient(180deg, rgba(255, 255, 255, 0.03), rgba(255, 255, 255, 0.01));
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    transition: transform 0.28s ease, box-shadow 0.28s ease;
                }

                .committee-member-card:hover {
                    transform: translateY(-6px);
                    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
                }

                .star-badge-wrap {
                    position: relative;
                    width: 145px;
                    height: 145px;
                    margin: 0 auto 1rem;
                    filter: drop-shadow(0 0 10px rgba(238, 199, 125, 0.26));
                }

                .star-badge {
                    position: absolute;
                    inset: 0;
                    clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
                    background: linear-gradient(145deg, #f5dc9c 0%, #d3a857 48%, #8a6628 100%);
                }

                .star-badge::after {
                    content: '';
                    position: absolute;
                    inset: 10px;
                    clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
                    background: linear-gradient(145deg, rgba(45, 32, 12, 0.9), rgba(87, 65, 29, 0.9));
                }

                .member-photo-wrap {
                    position: absolute;
                    inset: 30px;
                    border-radius: 50%;
                    overflow: hidden;
                    border: 3px solid rgba(252, 236, 194, 0.8);
                    z-index: 2;
                    background: #161616;
                }

                .member-photo-wrap img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

                .member-name {
                    font-family: var(--font-heading);
                    font-size: 1.25rem;
                    color: #f3e9d1;
                    letter-spacing: 0.2px;
                    margin-bottom: 0.25rem;
                }

                .member-role {
                    font-family: var(--font-digital);
                    color: #f2ca85;
                    font-size: 0.82rem;
                    letter-spacing: 0.8px;
                    text-transform: uppercase;
                    margin-bottom: 0.22rem;
                }

                .member-subtitle {
                    font-family: var(--font-body);
                    font-size: 0.86rem;
                    color: rgba(240, 236, 224, 0.9);
                }

                @media (max-width: 640px) {
                    .committee-section-card {
                        padding: 1.3rem 1rem;
                    }

                    .committee-members-grid {
                        grid-template-columns: repeat(auto-fit, minmax(155px, 1fr));
                        gap: 1rem;
                    }

                    .star-badge-wrap {
                        width: 120px;
                        height: 120px;
                    }

                    .member-photo-wrap {
                        inset: 26px;
                    }

                    .member-name {
                        font-size: 1.08rem;
                    }
                }
            `}</style>
        </div>
    );
};

export default Committee;