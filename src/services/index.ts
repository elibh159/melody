/* eslint-disable @typescript-eslint/no-explicit-any */
import { getAxiosClient } from "../helpers/api";
import { RegisterType, LoginType } from "../interface/userType";

export const loginApi = async (loginInfo: LoginType) => {
    try {
        const axiosClient = getAxiosClient();
        const response = await axiosClient.post('site/login', loginInfo);
        const data = response.data;
        return { username: loginInfo.username, ...data };

    } catch (e: any) {
        if (e.response) {
            const data = e.response.data;
            return {
                ok: data.ok,
                result: {
                    status: data.status,
                    message: data.result[0].message
                }
            };
        }
        return {
            ok: false,
            result: {
                message: e.message
            }
        }
    }
}

export const registerApi = async (userinfo: RegisterType) => {
    try {
        const axiosClient = getAxiosClient();
        const response = await axiosClient.post('site/register', userinfo);
        const data = response.data;
        return data;
    } catch (e: any) {
        if (e.response) {
            const data = e.response.data;
            throw new Error(data.result[0].message);
        }
        throw new Error(e.message);
    }
};

//TODO: find type of SongParamsType and remove any
export const songApi = async ({ queryKey, pageParam = 1 }: any) => {
    try {
        const search = queryKey[1];
        const perPage = queryKey[2];
        const params = {
            'filter[title][like]': search,
            'per-page': perPage,
            page: pageParam
        };

        const axiosClient = getAxiosClient();
        const response = await axiosClient.get('song', { params });
        const data = response.data.result;
        
        return data;
    } catch (e: any) {
        if (e.response) {
            const data = e.response.data;
            throw new Error(data.result[0].message);
        }
        throw new Error(e.message);
    }
};

