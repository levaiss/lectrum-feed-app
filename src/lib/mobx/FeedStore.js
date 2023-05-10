// Core
import { makeAutoObservable } from 'mobx';

class FeedStore {
    activePostId = null;
    constructor() {
        makeAutoObservable(this, { rootStore: false }, {
            autoBind: true,
        });
    }

    setActivePostId(payload) {
        this.activePostId = payload;
    }
}

export { FeedStore };
