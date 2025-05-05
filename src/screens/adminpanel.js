import React, { useState } from 'react';
import axios from 'axios';
import mainUrl from "../constants";

const AdminPanel = () => {
    const [password, setPassword] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [error, setError] = useState('');
    const [newWallet, setNewWallet] = useState('');
    const [selectedDate, setSelectedDate] = useState("");

    const [confirmData, setConfirmData] = useState({
        username: '',
        packageName: '',
        depositAmount: '',
        system: 'USDT TRC20'
    });
    const [deleteData, setDeleteData] = useState({
        username: '',
        packageName: ''
    });

    const correctPassword = 'wqfqwfyguhijo'; // Простой пароль, можно заменить

    const handleLogin = () => {
        if (password === correctPassword) {
            setIsAuthenticated(true);
            setError('');
        } else {
            setError('Неверный пароль');
        }
    };

    const handleConfirmInvestment = async () => {
        console.log(confirmData)
        try {
            const res = await axios.post(`${mainUrl}/api/v1/admin/confirmInvestment`, confirmData);
            alert('Инвестиция подтверждена успешно!');
        } catch (err) {
            alert(`Ошибка подтверждения: ${err.response?.data?.message || err.message}`);
        }
    };

    const [userInvestments, setUserInvestments] = useState([]);

    const fetchUserInvestments = async () => {
        try {
            const res = await axios.get(`${mainUrl}/api/v1/admin/investments?username=${deleteData.username}`);
            setUserInvestments(res.data.data || []);
        } catch (err) {
            alert(`Ошибка получения инвестиций: ${err.response?.data?.message || err.message}`);
            setUserInvestments([]);
        }
    };

    const handleDeleteInvestmentById = async (id) => {
        if (!id) return alert("ID инвестиции не найден");

        try {
            await axios.delete(`${mainUrl}/api/v1/admin/deleteInvestment/${id}`);
            alert('Инвестиция удалена успешно!');
            // Обновим список
            fetchUserInvestments();
        } catch (err) {
            alert(`Ошибка удаления: ${err.response?.data?.message || err.message}`);
        }
    };

    const handleWalletUpdate = async () => {
        try {
            await axios.put(`${mainUrl}/api/v1/admin/wallet-to-pay`, {
                trc20: newWallet,
            });
            alert('Кошелек TRC20 успешно обновлён!');
            setNewWallet('');
        } catch (err) {
            alert(`Ошибка при обновлении кошелька: ${err.response?.data?.message || err.message}`);
        }
    };

    const updateInvestmentDate = async (investmentId, newDateISO) => {
        try {
            const response = await axios.patch(`${mainUrl}/api/v1/admin/investments/${investmentId}`, {
                dateOfCreation: newDateISO,
            }, {
                headers: {
                    "Content-Type": "application/json",
                    // "Authorization": `Bearer ${token}` // если нужно
                },
            });

            console.log("Успешно обновлено:", response.data);
        } catch (error) {
            console.error("Ошибка при обновлении:", error.response?.data || error.message);
        }
    };



    if (!isAuthenticated) {
        return (
            <div style={styles.loginContainer}>
                <h2>Вход в админ-панель</h2>
                <input
                    type="password"
                    placeholder="Введите пароль"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={styles.input}
                />
                <button onClick={handleLogin} style={styles.button}>Войти</button>
                {error && <p style={styles.error}>{error}</p>}
            </div>
        );
    }

    return (
        <div style={styles.panel}>
            <h2>Админ-панель</h2>

            {/* Confirm Investment */}
            <div style={styles.block}>
                <h3>✅ Подтвердить инвестицию</h3>
                <input
                    type="text"
                    placeholder="Логин пользователя"
                    value={confirmData.username}
                    onChange={(e) => setConfirmData({...confirmData, username: e.target.value})}
                    style={styles.input}
                />
                <input
                    type="text"
                    placeholder="Пакет (например: 1)"
                    value={confirmData.packageName}
                    onChange={(e) => setConfirmData({...confirmData, packageName: e.target.value})}
                    style={styles.input}
                />
                <input
                    type="number"
                    placeholder="Сумма депозита"
                    value={confirmData.depositAmount}
                    onChange={(e) => setConfirmData({...confirmData, depositAmount: e.target.value})}
                    style={styles.input}
                />
                <select
                    value={confirmData.system}
                    onChange={(e) => setConfirmData({...confirmData, system: e.target.value})}
                    style={styles.input}
                >
                    <option>USDT TRC20</option>

                </select>
                <button onClick={handleConfirmInvestment} style={styles.button}>Подтвердить</button>
            </div>

            <div style={styles.block}>
                <h3>❌ Удалить инвестицию / Обновить дату пакета</h3>
                <input
                    type="text"
                    placeholder="Логин пользователя"
                    value={deleteData.username}
                    onChange={(e) => {
                        setDeleteData({...deleteData, username: e.target.value});
                        setUserInvestments([]); // Сброс списка при новом логине
                    }}
                    style={styles.input}
                />
                <button onClick={fetchUserInvestments} style={styles.button}>Показать инвестиции</button>

                {userInvestments.length > 0 ? (
                    <div style={{marginTop: 15}}>
                        <h4>Инвестиции пользователя:</h4>
                        <ul style={{paddingLeft: 20}}>
                            {userInvestments.map((inv) => (
                                <li key={inv._id} style={{marginBottom: 10}}>
                                    <strong>ID:</strong> {inv._id} <br/>
                                    <strong>Пакет:</strong> {inv.packageName}, <strong>Сумма:</strong> {inv.depositAmount}$ <br/>

                                    <input
                                        type="datetime-local"
                                        value={selectedDate}
                                        onChange={(e) => setSelectedDate(e.target.value)}
                                        style={{marginTop: 8, marginBottom: 8}}
                                    />
                                    <br/>
                                    <button
                                        onClick={() => {
                                            if (!selectedDate) return alert("Выберите дату!");
                                            const isoDate = new Date(selectedDate).toISOString();
                                            updateInvestmentDate(inv._id, isoDate);
                                        }}
                                        style={{...styles.button, backgroundColor: "#10b981", marginRight: 10}}
                                    >
                                        Обновить дату
                                    </button>

                                    <button
                                        onClick={() => handleDeleteInvestmentById(inv._id)}
                                        style={{...styles.button, backgroundColor: '#dc2626'}}
                                    >
                                        Удалить
                                    </button>

                                </li>
                            ))}
                        </ul>
                    </div>
                ) : (
                    deleteData.username &&
                    <p style={{marginTop: 10, color: '#999'}}>Нет инвестиций или ещё не загружены.</p>
                )}
            </div>

            <div style={styles.block}>
                <h3>💼 Обновить TRC20 кошелёк</h3>
                <input
                    type="text"
                    placeholder="Новый TRC20 кошелёк"
                    value={newWallet}
                    onChange={(e) => setNewWallet(e.target.value)}
                    style={styles.input}
                />
                <button onClick={handleWalletUpdate} style={styles.button}>
                    Обновить кошелёк
                </button>
            </div>


        </div>
    );
};

const styles = {
    loginContainer: {
        maxWidth: 400,
        margin: '100px auto',
        padding: 20,
        borderRadius: 8,
        boxShadow: '0 0 10px rgba(0,0,0,0.2)',
        backgroundColor: '#fff',
        textAlign: 'center',
    },
    panel: {
        maxWidth: 600,
        margin: '40px auto',
        padding: 20,
        backgroundColor: '#f9f9f9',
        borderRadius: 10,
        boxShadow: '0 0 15px rgba(0,0,0,0.1)',
    },
    block: {
        marginBottom: 30,
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 6,
        boxShadow: '0 0 5px rgba(0,0,0,0.05)',
    },
    input: {
        width: '100%',
        padding: 10,
        margin: '8px 0',
        borderRadius: 4,
        border: '1px solid #ccc',
    },
    button: {
        padding: '10px 20px',
        borderRadius: 4,
        border: 'none',
        backgroundColor: '#2563eb',
        color: '#fff',
        cursor: 'pointer',
        marginTop: 10,
    },
    error: {
        color: 'red',
        marginTop: 10,
    },
};

export default AdminPanel;
