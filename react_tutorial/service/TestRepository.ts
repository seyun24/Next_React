import axios, {AxiosInstance} from "axios";
import {GetUserResponse, TestRepositoryInterface} from "@test/service/TestRepositoryInterface";



export class TestRepository implements TestRepositoryInterface{
    private api: AxiosInstance;

    constructor() {
        this.api = axios.create({
            baseURL: "http://localhost:9000/app",
        });
    }
    async get(): Promise<GetUserResponse> {
        try {
            const response = await this.api.get("/users/test/t");
            return response.data;
        } catch (error) {
            console.error("Error fetching user list:", error);
            throw error;
        }
    }

}

