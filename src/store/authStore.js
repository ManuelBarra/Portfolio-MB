// src/store/authStore.js
import { create } from 'zustand';

const useAuthStore = create((set) => ({
    isAuthenticated: false,
    user: null,
    login: (username, password) => {
        // En un futuro, aquí llamarías a tu API real.
        // Por ahora, usamos credenciales "hardcodeadas".
        if (username === 'admin' && password === 'password') {
            const userData = { username: 'admin' };
            set({ isAuthenticated: true, user: userData });
            return true; // Éxito en el login
        }
        return false; // Fallo en el login
    },
    logout: () => set({ isAuthenticated: false, user: null }),
}));

export default useAuthStore;
