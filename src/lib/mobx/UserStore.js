// Core
import { makeAutoObservable } from 'mobx';

class UserStore {
    user = null;
    constructor() {
        makeAutoObservable(this, { rootStore: false }, {
            autoBind: true,
        });
    }

    setUser(payload) {
        this.user = payload;
    }
}

export { UserStore };
