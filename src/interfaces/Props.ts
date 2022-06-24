export interface Props {
    isLoggedIn: boolean;
    changeState(): void;
    logout(): void; 
}