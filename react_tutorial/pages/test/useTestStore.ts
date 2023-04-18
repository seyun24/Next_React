import {create} from "zustand";

interface listRequest {
    filter? : string
}

interface testResponse {
    name? : string;
    id? : number;
}

