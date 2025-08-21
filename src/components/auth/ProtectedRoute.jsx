// src/components/auth/ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuthStore from '../../store/authStore';

const ProtectedRoute = ({ children }) => {
    const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

    if (!isAuthenticated) {
        // Si el usuario no está autenticado, lo redirigimos a la página de login.
        return <Navigate to="/login" />;
    }

    // Si está autenticado, mostramos el componente que se le pasó (en este caso, DashboardPage).
    return children;
};

export default ProtectedRoute;
