// Core
import { makeAutoObservable } from 'mobx';

// Stores
import { AuthStore } from './AuthStore';
import { UserStore } from './UserStore';
import { FeedStore } from './FeedStore';

export class RootStore {
    authStore = null;
    userStore = null;
    feedStore = null;
    constructor() {
        makeAutoObservable(this);
        this.authStore = new AuthStore(this);
        this.userStore = new UserStore(this);
        this.feedStore = new FeedStore(this);
    }
}
