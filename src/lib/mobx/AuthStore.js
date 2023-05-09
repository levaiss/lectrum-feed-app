// Core
import { makeAutoObservable } from 'mobx';

import { FETCH_STATUS } from '../../constants/fetch-status';

class AuthStore {
    token = null;
    tokenCheckStatus = 'idle';

    constructor() {
        makeAutoObservable(this, { rootStore: false }, {
            autoBind: true,
        });
    }

    setToken(payload) {
        this.token = payload;
    }

    setTokenCheckStatus(payload) {
        if (!Object.values(FETCH_STATUS)
            .includes(payload)) {
            throw new Error(`[AuthStore/setTokenCheckStatus] ${payload} non correct status.`);
        }

        this.tokenCheckStatus = payload;
    }

    get isAuth() {
        return !!this.token;
    }
}

export { AuthStore };
