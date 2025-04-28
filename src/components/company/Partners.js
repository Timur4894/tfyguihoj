import logo1 from '../../assets/img/0001.png'
import logo2 from '../../assets/img/0002.png'
import logo3 from '../../assets/img/0003.png'
import logo4 from '../../assets/img/0004.png'
import logo5 from '../../assets/img/0005.png'
import logo6 from '../../assets/img/0006.png'
import bg from '../../assets/img/map.png'

export default function Partners() {
    const partners = [
        { name: "Vanguard", logo: logo1 },
        { name: "State Street", logo: logo2 },
        { name: "BlackRock", logo: logo3 },
        { name: "BNY Mellon", logo: logo4 },
        { name: "JP Morgan Chase", logo: logo5 },
        { name: "Wellington Management", logo: logo6 },
    ];

    return (
        <section style={{ padding: '80px 24px', background: 'white' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', position: 'relative' }}>
                <h2 style={{ fontSize: '4vw', width: '40%', fontWeight: '600', marginBottom: '48px', color: '#1f2937', position: 'absolute', top: '-20px', right: '0' }}>
                    Партнёры, которыми мы гордимся
                </h2>
                <img src={bg} style={{ width: '70%', height: '70%', position: 'absolute', top: '-20px', right: '0px' }}/>

                <div
                    style={{
                        width: '50%',
                        jus: 'column',
                        display: 'grid',
                        gridTemplateColumns: 'repeat(2, 1fr)',
                        borderTop: '1px solid #e5e7eb',
                        borderLeft: '1px solid #e5e7eb',
                    }}
                >
                    {partners.slice(0, 2).map((partner, index) => (
                        <div
                            key={index}
                            style={{
                                borderRight: '1px solid #e5e7eb',
                                borderBottom: '1px solid #e5e7eb',
                                padding: '32px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                height: '180px',
                                backgroundColor: 'white'
                            }}
                        >
                            <img
                                src={partner.logo}
                                alt={partner.name}
                                style={{ maxWidth: '100%', maxHeight: '60px', objectFit: 'contain' }}
                            />
                        </div>
                    ))}
                </div>

                {/* Вторая линия (4 партнера) */}
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(4, 1fr)',
                        borderLeft: '1px solid #e5e7eb',
                    }}
                >
                    {partners.slice(2).map((partner, index) => (
                        <div
                            key={index + 2}
                            style={{
                                borderRight: '1px solid #e5e7eb',
                                borderBottom: '1px solid #e5e7eb',
                                padding: '32px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                height: '150px',
                                backgroundColor: 'white'
                            }}
                        >
                            <img
                                src={partner.logo}
                                alt={partner.name}
                                style={{ maxWidth: '100%', maxHeight: '60px', objectFit: 'contain' }}
                            />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
