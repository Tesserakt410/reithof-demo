import { createContext, useContext, useState } from 'react';
import Toast from '../components/common/Toast';

const ToastContext = createContext();

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within ToastProvider');
  }
  return context;
}

export function ToastProvider({ children }) {
  const [toast, setToast] = useState({ message: '', isVisible: false });

  const showToast = (message, duration = 4000) => {
    setToast({ message, isVisible: true });

    setTimeout(() => {
      setToast({ message: '', isVisible: false });
    }, duration);
  };

  const hideToast = () => {
    setToast({ message: '', isVisible: false });
  };

  return (
    <ToastContext.Provider value={{ showToast, hideToast }}>
      {children}
      <Toast
        message={toast.message}
        isVisible={toast.isVisible}
        onClose={hideToast}
      />
    </ToastContext.Provider>
  );
}
