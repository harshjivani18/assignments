import * as ActionType from "./action-types";

export const getProviderList = () => ({
    type: ActionType.GET_PROVIDER_LIST,
    payload: {
        request: {
            url: "https://api.apis.guru/v2/providers.json",
            method: "get",
        }
    }
})

export const getProvider = (provider_name) => ({
    type: ActionType.GET_PROVIDER,
    payload: {
        request: {
            url: `https://api.apis.guru/v2/${provider_name}.json`,
            method: "get"
        }
    }
})

