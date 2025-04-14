import { ISecurityQuestionsModel } from "./securityQuestionsModel";

export interface IUserModel {
    Id: number;
    Username: string,
    Email: string,
    Password: string,
    EmailConfirmed: boolean;
    SecurityQuestions: ISecurityQuestionsModel,
}