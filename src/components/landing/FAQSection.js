import React, { useState } from "react";

const faqData = [
    { question: "What is your platform?", answer: "Our platform is a powerful tool with which each partner of the company can use our unique software and advanced technologies to create a stable income. Thanks to the platform, users gain access to innovative solutions based on artificial intelligence, which open up opportunities for growth and profitable investment." },
    { question: "What benefits can I get from the affiliate program?", answer: "Our three-level affiliate program allows you to earn from the income of invited participants: 5% from the first level, 3% from the second and 2% from the third. In addition, we offer a matching bonus, thanks to which you will earn money every time your referral receives income. You can find out more at Affiliate program page ." },
    { question: "How does your artificial intelligence work and what does it do?", answer: "Our artificial intelligence analyzes the market, tracks trends and provides accurate forecasts for various assets. But most importantly, our AI is constantly learning and improving to provide even higher accuracy. Additionally, an experienced team of specialists works on its training in order to maximize the efficiency of the algorithms." },
    { question: "Who is your investment proposal suitable for?", answer: "Our investment packages are suitable for both private investors and professional brokers and funds. We offer a variety of tariffs, from basic to cumulative, with flexible terms and conditions, so that every client can find a suitable option." },
    { question: "How can I join the platform and start earning money?", answer: "\n" +
            "You can register on our platform to choose a suitable investment package or take advantage of the affiliate program. Once registered, you will have access to unique AI-powered investing tools that will help you maximize your profits and strengthen your position in the market." },
    { question: "How is profit withdrawn and are there any restrictions?", answer: "Withdrawals are possible at any time after reaching the minimum amount of $5 equivalent. We guarantee strict compliance with all regulations and secure transfers to the account you specify." },
];

const styles = {
    section: {
        padding: "100px 20px",
        maxWidth: "900px",
        margin: "0 auto",
        textAlign: "center",
    },
    subtitle: {
        color: "#6B7280",
        fontSize: "16px",
        marginBottom: "8px",
        fontFamily: "Ubuntu",
    },
    title: {
        fontSize: "48px",
        fontWeight: "700",
        fontFamily: "Ubuntu",
        marginBottom: "40px",
    },
    item: {
        background: "#ffffff",
        boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
        marginBottom: "16px",
        overflow: "hidden",
        transition: "0.3s ease",
        textAlign: "left",
    },
    question: {
        padding: "20px 24px",
        fontSize: "20px",
        fontWeight: "700",
        fontFamily: "Ubuntu",
        cursor: "pointer",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    answer: {
        padding: "0 24px 20px 24px",
        fontSize: "16px",
        color: "#000",
        lineHeight: "1.6",
        fontFamily: "Ubuntu",
    },
    arrow: {
        transition: "transform 0.3s ease",
    },
    rotated: {
        transform: "rotate(180deg)",
    },
};

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section style={styles.section}>
            <div style={styles.subtitle}>Answers to important questions about the platform and partnership</div>
            <div style={styles.title}>F.A.Q.</div>
            {faqData.map((item, index) => (
                <div key={index} style={styles.item}>
                    <div style={{width: "100%", height: 1, backgroundColor: '#000'}} />
                        <div style={styles.question} onClick={() => toggle(index)}>
                            {item.question}
                            <span style={{...styles.arrow, ...(openIndex === index ? styles.rotated : {})}}>↓</span>
                        </div>
                        {openIndex === index && (
                            <div style={styles.answer}>
                                {item.answer}
                            </div>
                        )}
                    </div>
                    ))}
                </section>
            );
            }
