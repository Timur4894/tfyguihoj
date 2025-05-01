import React, {useEffect, useState} from "react";
import BTC from '../../assets/img/btc.png'
import ETH from '../../assets/img/eth.png'
import LTC from '../../assets/img/ltc.png'
import TRX from '../../assets/img/trx.png'
import USDT from '../../assets/img/usdt.png'
import axios from "axios";
import mainUrl from "../../constants";

const WalletSettings = () => {
    const [wallets, setWallets] = useState({
        BTC: '',
        ETH: '',
        LTC: '',
        TRX: '',
        USDT: '',
    });

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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

    const token = localStorage.getItem('authToken');

    useEffect(() => {
        const fetchWallets = async () => {
            try {
                const response = await axios.get(`${mainUrl}/api/v1/user/wallets`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'ngrok-skip-browser-warning': 'true',
                    },
                });
                console.log(response);
                // Заполняем state данными с бэка
                setWallets({
                    BTC: response.data.data.btc || '',
                    ETH: response.data.data.eth || '',
                    LTC: response.data.data.ltc || '',
                    TRX: response.data.data.trx || '',
                    USDT: response.data.data.usdt || '',
                });
            } catch (err) {
                console.error('Ошибка загрузки кошельков:', err);
                if (err.response) {
                    setError(`Error ${err.response.status}: ${err.response.data.message || 'Что-то пошло не так'}`);
                } else {
                    setError('Ошибка сети');
                }
            } finally {
                setLoading(false);
            }
        };

        if (token) {
            fetchWallets();
        } else {
            setError('Токен авторизации отсутствует');
            setLoading(false);
        }
    }, [token]);

    const handleChange = (e, coin) => {
        setWallets({ ...wallets, [coin]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.patch(`${mainUrl}/api/v1/user/update-wallets`, {
                btc: wallets.BTC,
                eth: wallets.ETH,
                ltc: wallets.LTC,
                trx: wallets.TRX,
                usdt: wallets.USDT,
            }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                    'ngrok-skip-browser-warning': 'true',
                },
            });

            alert('Реквизиты успешно обновлены!');
            console.log('Ответ сервера:', response.data);
        } catch (err) {
            console.error('Ошибка при обновлении кошельков:', err);
            if (err.response) {
                alert(`Ошибка ${err.response.status}: ${err.response.data.message || 'Не удалось обновить данные'}`);
            } else {
                alert('Ошибка сети при обновлении кошельков');
            }
        }
    };


    const inputStyle = {
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        border: '1px solid #ddd',
        borderRadius: '6px',
        padding: '10px 12px',
        fontSize: '14px',
        marginBottom: '16px',
        backgroundColor: '#fff',
    };

    const renderInput = (coin, icon, label) => (
        <div style={{ marginBottom: '12px' }} key={coin}>
            <label style={{ fontWeight: '600', fontSize: '14px', marginBottom: '6px', display: 'block' }}>
                Кошелек {label}
            </label>
            <div style={inputStyle}>
                <img src={icon} alt={coin} style={{ width: '24px', height: '24px' }} />
                <input
                    type="text"
                    value={wallets[coin]}
                    onChange={(e) => handleChange(e, coin)}
                    placeholder={`Кошелек ${label}`}
                    style={{
                        border: 'none',
                        outline: 'none',
                        width: '100%',
                        fontSize: '14px',
                    }}
                />
            </div>
        </div>
    );

    if (loading) return <div>Загрузка кошельков...</div>;
    if (error) return <div style={{ color: 'red' }}>{error}</div>;

    return (
        <div style={{ display: 'flex', gap: '24px', padding: '24px', fontFamily: 'Arial, sans-serif', marginTop: -40, ...(isMobile && {flexDirection: 'column'}) }}>
            <div style={{ flex: 1 }}>
                <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '16px' }}>Мои кошельки</h2>
                <div
                    style={{
                        backgroundColor: '#fff',
                        padding: '24px',
                        boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
                    }}
                >
                    <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>Сохранить реквизиты</h3>
                    <p style={{ fontSize: '14px', marginBottom: '20px' }}>
                        Пожалуйста, укажите ваши кошельки для получения выплаты с платформы!
                    </p>

                    {renderInput('BTC', BTC, 'BTC')}
                    {renderInput('ETH', ETH, 'ETH')}
                    {renderInput('LTC', LTC, 'LTC')}
                    {renderInput('TRX', TRX, 'TRX')}
                    {renderInput('USDT', USDT, 'USDT TRC20')}

                    <button
                        onClick={handleSubmit}
                        style={{
                            backgroundColor: '#f4a524',
                            border: 'none',
                            padding: '10px 18px',
                            borderRadius: '4px',
                            fontWeight: 'bold',
                            fontSize: '14px',
                            color: '#000',
                            cursor: 'pointer',
                            marginTop: '16px',
                        }}
                    >
                        Продолжить
                    </button>
                </div>
            </div>

            <div
                style={{
                    width: '360px',
                    backgroundColor: '#fff',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
                    marginTop: 55,
                    padding: '24px',
                    alignSelf: 'start',
                }}
            >
                <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>Форма смены пароля</h3>
                <p style={{ fontSize: '14px' }}>
                    Для смены пароля воспользуйтесь формой смены пароля:{" "}
                    <a href="/changepassword" style={{ color: '#3b82f6', textDecoration: 'none' }}>
                        сменить пароль
                    </a>
                </p>
            </div>
        </div>
    );
};

export default WalletSettings;
