// src/pages/LoginPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuthStore from '../store/authStore';
import styles from './LoginPage.module.scss'; // Importar estilos

const LoginPage = () => {
    // ... (lógica sin cambios)
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const login = useAuthStore((state) => state.login);

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        const isLoggedIn = login(username, password);
        if (isLoggedIn) {
            navigate('/dashboard');
        } else {
            setError('Usuario o contraseña incorrectos.');
        }
    };

    return (
        <div className={`container ${styles.loginPage}`}>
            <h2>Acceso al Panel</h2>
            <div className={styles.credentials}>
                <p>Para acceder, utiliza las siguientes credenciales:</p>
                <p>
                    <strong>Usuario:</strong> admin <br />
                    <strong>Contraseña:</strong> password
                </p>
            </div>

            <form onSubmit={handleSubmit} className={styles.loginForm}>
                <div className={styles.formGroup}>
                    <label htmlFor="username">Usuario:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="password">Contraseña:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                {error && <p className={styles.errorMessage}>{error}</p>}
                <button type="submit" className={styles.submitButton}>
                    Entrar
                </button>
            </form>
        </div>
    );
};

export default LoginPage;
