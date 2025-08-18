// src/components/ui/Modal/Modal.jsx
import React from 'react';
import styles from './Modal.module.scss'; // Importamos los estilos

const Modal = ({ children, onClose }) => {
    return (
        // Usamos los nombres de clase del objeto 'styles'
        <div className={styles.modalBackdrop} onClick={onClose}>
            <div
                className={styles.modalContent}
                onClick={(e) => e.stopPropagation()}
            >
                <button className={styles.closeButton} onClick={onClose}>
                    &times;
                </button>
                {children}
            </div>
        </div>
    );
};

export default Modal;
