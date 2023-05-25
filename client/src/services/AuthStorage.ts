type IStorage = typeof localStorage | typeof sessionStorage;

interface IAuthStorage {
    saveToken: (token: string) => void;
    getToken: () => void;
    removeToken: () => void;
}

class AuthStorage implements IAuthStorage {
    private AUTH_NAME = "a-t";
    private storage: IStorage;

    constructor(storage: IStorage) {
        this.storage = storage;
    }

    saveToken(token: string) {
        this.storage.setItem(this.AUTH_NAME, token);
    }

    getToken() {
        return this.storage.getItem(this.AUTH_NAME);
    }

    removeToken() {
        return this.storage.removeItem(this.AUTH_NAME);
    }
}

export default AuthStorage;
