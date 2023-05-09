// Core
import { makeAutoObservable } from 'mobx';

class UiStore {
    errorMessage = null;
    constructor() {
        makeAutoObservable(this, { rootStore: false }, {
            autoBind: true,
        });
    }

    setErrorMessage(payload) {
        this.errorMessage = payload;
    }
}

export { UiStore };
