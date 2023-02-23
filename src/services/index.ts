import { getAxiosClient } from "../helpers/api";
import { RegisterType, LoginType } from "../interface/userType";
const axiosClient = getAxiosClient();

export const loginApi = async (loginInfo: LoginType) => {
    try {
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

export const createPlayListApi = async (values: FormData) => {
    try {
        const response = await axiosClient.post('playlist', values);
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

export const getPlaylistApi = async () => {
    try {
        const response = await axiosClient.get('playlist');
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

export const deletePlaylistApi = async (playlistId: number) => {
    try {
        await axiosClient.delete('playlist/' + playlistId);
        return { playlistId };
    } catch (e: any) {
        if (e.response) {
            const data = e.response.data;
            throw new Error(data.result[0].message);
        }
        throw new Error(e.message);
    }
};

export const putPlayListApi = async (values: FormData, playlistId: number) => {
    try {
        const response = await axiosClient.put('playlist/' + playlistId, values);
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

export const patchPlayListApi = async (values: FormData, playlistId: number) => {
    try {
        const response = await axiosClient.patch('playlist/' + playlistId, values);
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

export const addSongApi = async ({ songId, playlistId }: any) => {
    try {
        const response = await axiosClient.post('playlist/add-song/' + playlistId, { "song_id": +songId });
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