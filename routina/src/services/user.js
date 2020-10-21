import { Api } from './api.js';

export { UserApi, Credentials };

class UserApi {
    static get url() {
        return `${Api.baseUrl}/user`;
    }

    static async login(credentials, controller) {
        const result = await Api.post(`${UserApi.url}/login`, false, credentials, controller);
        Api.token = result.token;
        return result;
    }

    static async logout(controller) {
        await Api.post(`${UserApi.url}/logout`, true, controller);
        Api.token = undefined;
    }

    static async getCurrentUser(controller){
        return await Api.get(`${UserApi.url}/current`,true,controller);
        
    }
}

class Credentials {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
}