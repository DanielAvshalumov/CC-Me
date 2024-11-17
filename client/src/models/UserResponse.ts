export interface UserResponse {
    id: number,
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    isContractor: boolean,
    roles: Role
}

export enum Role {
    USER = "USER",
    ADMIN = "ADMIN"
}