export interface AuthenticatedContentProps {
    username: string;
    onLogout: () => void;
}

export interface LoginFormProps {
    onLogin: (email: string, password: string) => void;
    onRegisterClick?: () => void
}

export interface RegisterFormProps{
    onRegister: (email: string, password: string) => void;
    onLoginClick?: () => void
}

export interface ModalAuthProps{
    onClose: () => void;
}