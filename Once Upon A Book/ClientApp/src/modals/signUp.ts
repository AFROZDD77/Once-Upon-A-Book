import { ISecurityQuestionsModal } from "./securityQuestions";

export interface ISignUpModal {
    Username: string,
    Email: string,
    Password: string,
    ConfirmPassword: string,
    SecurityQuestions: ISecurityQuestionsModal,
}