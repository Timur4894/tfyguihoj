import React, {useEffect, useState} from "react";

const SupportForm = () => {
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const name = localStorage.getItem('nicknameUser');
    const emailUser = localStorage.getItem('emailUser');


    const handleSubmit = async (e) => {
        e.preventDefault();


        const botToken = process.env.REACT_APP_TELEGRAM_BOT_TOKEN;
        const chatId = process.env.REACT_APP_TELEGRAM_CHAT_ID;

        const telegramMessage = `
📩 *Новое обращение в поддержку*:
- 📝 *Тема:* ${subject}
- 💬 *Сообщение:* ${message}
-  *Почта юзера:* ${emailUser}
-  *Ник юзера:* ${name}
        `;

        try {
            const response = await fetch(
                `https://api.telegram.org/bot${botToken}/sendMessage`,
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json", 'ngrok-skip-browser-warning': 'true', },
                    body: JSON.stringify({
                        chat_id: chatId,
                        text: telegramMessage,
                        parse_mode: "Markdown",
                    }),
                }
            );

            if (response.ok) {
                alert("Обращение успешно отправлено!");
                setSubject("");
                setMessage("");
            } else {
                alert("Ошибка при отправке обращения. Попробуйте позже.");
            }
        } catch (error) {
            console.error("Ошибка отправки:", error);
            alert("Сбой при подключении к Telegram. Повторите попытку.");
        }
    };

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 768px)");
        setIsMobile(mediaQuery.matches);

        const handleResize = () => {
            setIsMobile(mediaQuery.matches);
        };

        mediaQuery.addEventListener("change", handleResize);
        return () => {
            mediaQuery.removeEventListener("change", handleResize);
        };
    }, []);

    return (
        <div style={{ padding: "24px", fontFamily: "Arial, sans-serif", color: "#111", marginTop: -40 , ...(isMobile && {paddingLeft: "0px",}),}}>
            <h2 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "16px" }}>
                Техническая поддержка
            </h2>

            <div
                style={{
                    border: "1px solid #000",
                    padding: "16px",
                    marginBottom: "24px",
                    // width: "100%",
                    backgroundColor: "#fefefe",
                    ...(isMobile && {width: "100%"}),
                }}
            >
                <p style={{ fontSize: "14px", lineHeight: "1.6", color: "#222", textAlign: "center" }}>
                    Добро пожаловать в поддержку платформы! Если у вас возникли вопросы, проблемы, идеи или пожелания,
                    пожалуйста, обратитесь к нашей команде поддержки. Чтобы создать новый диалог, заполните форму ниже,
                    указав тему обращения, и как можно подробнее опишите вашу ситуацию в поле 'Ваше сообщение'!
                    Мы постараемся помочь вам в кратчайшие сроки!
                </p>
            </div>

            <form
                onSubmit={handleSubmit}
                style={{
                    backgroundColor: "#fff",
                    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
                    padding: "24px",
                    display: "flex",
                    flexDirection: "column",
                    maxWidth: "100%",
                    ...(isMobile && {width: "96%"}),
                }}
            >
                <div style={{ marginBottom: "16px" }}>
                    <label
                        htmlFor="subject"
                        style={{ display: "block",color:'gray', marginBottom: "8px", fontSize: "14px", fontWeight: "600" }}
                    >
                        Тема обращения
                    </label>
                    <input
                        id="subject"
                        type="text"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        style={{
                            width: "90%",
                            padding: "12px",
                            borderRadius: "4px",
                            border: "1px solid #ccc",
                            fontSize: "14px",
                        }}
                        required
                    />
                </div>

                <div style={{ marginBottom: "24px" }}>
                    <label
                        htmlFor="message"
                        style={{ display: "block", color:'gray', marginBottom: "8px", fontSize: "14px", fontWeight: "600" }}
                    >
                        Ваше сообщение
                    </label>
                    <textarea
                        id="message"
                        rows="4"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        style={{
                            width: "90%",
                            padding: "12px",
                            borderRadius: "4px",
                            border: "1px solid #ccc",
                            fontSize: "14px",
                            resize: "vertical",
                        }}
                        required
                    />
                </div>

                <button
                    type="submit"
                    style={{
                        backgroundColor: "#f4a524",
                        border: "none",
                        padding: "10px 24px",
                        borderRadius: "4px",
                        color: "#000",
                        fontWeight: "bold",
                        fontSize: "14px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        cursor: "pointer",
                        gap: 4,
                    }}
                >
                    Создать обращение <ion-icon name="mail-outline"></ion-icon>
                </button>
            </form>
        </div>
    );
};

export default SupportForm;
