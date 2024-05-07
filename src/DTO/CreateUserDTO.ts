export interface ICreateUserDTO{
    nome: string;
    email: string;
    password: string;
    cpf?: string | null;
    role?: number | null;
}