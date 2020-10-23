import { Api } from './api.js';
import {Cookies} from './cookies.js';

export { UserApi, Credentials,FullUser,User };

class UserApi {


    static get url() {
        return `${Api.baseUrl}/user`;
    }

    static async createUser(user,controller){
        const result = await Api.post(`${UserApi.url}/login`, false, user, controller);
        return result;
    }

    static async login(credentials, controller) {
        const result = await Api.post(`${UserApi.url}/login`, false, credentials, controller);
        Api.token = result.token;
        Cookies.createCookie("token",result.token);
        return result;
    }

    static async logout(controller) {
        await Api.post(`${UserApi.url}/logout`, true, controller);
        Api.token = undefined;
        Cookies.deleteCookie("token");
    }
    static async getUser(id,controller){
        return await Api.get(`${UserApi.url}/${id}`,true,controller);
    }

    static async getCurrentUser(controller){
        return await Api.get(`${UserApi.url}/current`,true,controller);
        
    }

    static async updateCurrentUser(user,controller){
        await Api.put(`${UserApi.url}/current`,true,user,controller);
    }

    static async resendVerfication(email){
        await Api.post(`${UserApi.url}/resend_verfication`,false,{"email":email});
    }

    static async getCurrentUserFavouriteRoutines(page,size,orderBy,direction,controller){
        let parameters = "";
        let concatenate = false;
        if(page instanceof Number && page>=0){
            parameters+=`page=${page}`;
        }
        if(concatenate == true){
            parameters+="&";
        }
        if(size instanceof Number && size>=0){
            parameters+=`size=${size}`;
        }
        if(concatenate == true){
            parameters+="&";
        }
        if(orderBy!==null && orderBy!==''){
            parameters+=`orderBy=${orderBy}`;
        }
        if(concatenate == true){
            parameters+="&";
        }
        if(direction!==null && direction!==''){
            parameters+=`direction=${direction}`;
        }
        if(concatenate == true){
            parameters+="&";
        }
        return await Api.get(`${UserApi.url}/current/routines/favourites?${parameters}`,true,controller);
        
    }

    static async addRoutineToUserFavourites(id,controller){
        return await Api.post(`${UserApi.url}/current/routines/${id}/favourites`,true,controller);
    }

    static async removeRoutineToUserFavourites(id,controller){
        return await Api.delete(`${UserApi.url}/current/routines/${id}/favourites`,true,controller);
    }

    static async getCurrentUserExecutions(page,size,orderBy,direction,controller){
        let parameters = "";
        let concatenate = false;
        if(page instanceof Number && page>=0){
            parameters+=`page=${page}`;
        }
        if(concatenate == true){
            parameters+="&";
        }
        if(size instanceof Number && size>=0){
            parameters+=`size=${size}`;
        }
        if(concatenate == true){
            parameters+="&";
        }
        if(orderBy!==null && orderBy!==''){
            parameters+=`orderBy=${orderBy}`;
        }
        if(concatenate == true){
            parameters+="&";
        }
        if(direction!==null && direction!==''){
            parameters+=`direction=${direction}`;
        }
        if(concatenate == true){
            parameters+="&";
        }
        return await Api.get(`${UserApi.url}/current/routines/executions?${parameters}`,true,controller);
        
    }

    





    
}

class Credentials {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
}


class FullUser{
    constructor(id,username,fullName,gender,birthdate,email,avatarUrl,phone,dateCreated,dateLastActive,deleted,verified){
        this.id = id;
        this.username = username;
        this.fullName = fullName;
        this.gender= gender;
        this.birthdate = birthdate;
        this.email = email;
        this.avatarUrl = avatarUrl;
        this.phone = phone;
        this.dateCreated = dateCreated;
        this.dateLastActive = dateLastActive;
        this.deleted = deleted;
        this.verified = verified;
    }

}

class User{
    constructor(credential,email,fullName,gender,birthdate,avatarUrl,phone){
        this.username = credential.username;
        this.password = credential.password;
        this.fullName = fullName;
        this.gender= gender;
        this.birthdate = birthdate;
        this.email = email;
        this.avatarUrl = avatarUrl;
        this.phone = phone;
    }

} 
