import { fetchUser } from "../util/fetchLocalStorageData";

export const initialState = {
    user:fetchUser(),
};