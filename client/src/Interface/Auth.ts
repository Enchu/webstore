export interface AuthenticatedContentProps {
    username: string;
    onLogout: () => void;
}

export interface LoginFormProps {
    onLogin: () => void;
    onRegisterClick?: () => void
}

export interface RegisterFormProps{
    onRegister: () => void;
    onLoginClick?: () => void
}

export interface ModalAuthProps{
    onClose: () => void;
}