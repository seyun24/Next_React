export interface User {
    name?: string,
    email?: string,
    id?: string
}

export interface GetUserResponse {
    rs: User[];
}

export abstract class TestRepositoryInterface {
    abstract get(): Promise<GetUserResponse>;
}