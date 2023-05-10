import create from "zustand";
import { StoreActions } from "@test/pages/test/types";
import { subscribeWithSelector } from "zustand/middleware";
import {TestService} from "@test/pages/test/index";
import {User} from "@test/service/TestRepositoryInterface";


interface SearchParams {
    email?: string;
    password?: string;
}
interface DtoItem extends User {};


interface State {
    listData: DtoItem[];
}

interface Actions {
    callListApi: () => Promise<void>;
}

const initialState: State = {
    listData: [],
};

const actions: StoreActions<State & Actions, Actions> = (set) => ({
    callListApi: async () => {
        const response = await TestService.get();
        // const response = {
        //     res: [
        //         {
        //             email: "qkrwhdasd28@gmail.com",
        //             password: "aa192837",
        //         },
        //         {
        //             email: "seyun298@gmail.com",
        //             password: "aa192837",
        //         },
        //     ],
        // };
        set({ listData: response.rs });
    },
});

export type TestStore = State & Actions;

export const useTestStore = create(
    subscribeWithSelector<TestStore>((set, get) => ({
        ...initialState,
        ...actions(set, get),
    }))
);
