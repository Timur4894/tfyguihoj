import { motion } from "framer-motion";

const roadmapItems = [
    {
        quarter: "Q4 2024",
        title: "Старт и активное развитие",
        description:
            "В этом квартале мы расширили команду, запустили платформу для привлечения инвестиций и работы с частными инвесторами, а также начали плановые маркетинговые активности. Создали партнёрские программы и усилили меры безопасности для надёжной работы.",
    },
    {
        quarter: "Q1 2025",
        title: "Оптимизация и развитие функционала",
        description:
            "На первом плане — улучшение интерфейса и добавление аналитических инструментов для инвесторов. Планируем расширить систему поддержки и FAQ, а также усилить партнёрскую программу для привлечения новых пользователей.",
    },
    {
        quarter: "Q2 2025",
        title: "Расширение рынка и новые партнёрства",
        description:
            "В этом квартале планируем выход на новые рынки и заключение стратегических партнёрств. Запустим локализованные версии платформы, а также международные рекламные кампании и обучающие мероприятия для инвесторов.",
    },
    {
        quarter: "Q3 2025",
        title: "Внедрение новых технологий и масштабирование",
        description:
            "Основной фокус — внедрение AI-решений для анализа рынка, запуск автоматизированных инвестиционных решений и увеличение серверных мощностей для стабильной работы с растущим числом пользователей.",
    },
];

export default function RoadMap() {
    return (
        <section style={{ padding: '80px 24px', background: 'white' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <h2 style={{ color: '#6b7280', textTransform: 'uppercase', fontSize: '14px', marginBottom: '6px' }}>
                    Наши планы и цели
                </h2>
                <h1 style={{ fontSize: '50px', fontWeight: '400', marginBottom: '48px', fontFamily: 'Ubuntu', marginTop: '6px' }}>
                    Дорожная карта
                </h1>

                <div style={{ position: 'relative', borderLeft: '2px solid #d1d5db', paddingLeft: '32px', display: 'flex', flexDirection: 'column', gap: '80px' }}>
                    {roadmapItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            style={{ position: 'relative' }}
                        >
                            {/* Кружок с номером */}
                            {/*<div*/}
                            {/*    style={{*/}
                            {/*        position: 'absolute',*/}
                            {/*        left: '-24px',*/}
                            {/*        top: '-10px',*/}
                            {/*        backgroundColor: 'black',*/}
                            {/*        color: 'white',*/}
                            {/*        width: '32px',*/}
                            {/*        height: '32px',*/}
                            {/*        display: 'flex',*/}
                            {/*        alignItems: 'center',*/}
                            {/*        justifyContent: 'center',*/}
                            {/*        // borderRadius: '50%',*/}
                            {/*        fontSize: '14px',*/}
                            {/*        fontWeight: 'bold'*/}
                            {/*    }}*/}
                            {/*>*/}
                            {/*    {String(index + 1).padStart(2, '0')}*/}
                            {/*</div>*/}

                            {/* Карточка с текстом */}
                            <div style={{
                                // backgroundColor: '#f3f4f6',
                                // padding: '24px',
                                borderRadius: '12px',
                                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)'
                            }}>
                                <h3 style={{ fontSize: '50px', fontWeight: 'bold', marginBottom: '18px' }}>{item.quarter}</h3>
                                <h4 style={{ fontSize: '40px', fontWeight: '500', marginBottom: '12px', marginTop:0 }}>{item.title}</h4>
                                <p style={{ color: '#4b5563', fontSize: '16px', lineHeight: '1.6' }}>{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
