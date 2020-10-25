import { Api } from './api.js';
import {Cookies} from './cookies.js';

export { UserApi, Credentials,FullUser,User };

class UserApi {


    static get url() {
        return `${Api.baseUrl}/user`;
    }

    static async createUser(user,controller){
        const result = await Api.post(`${UserApi.url}`, false, user, controller);
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
    static async verify(email,code){
        await Api.post(`${UserApi.url}/verify_email`,false,new Verfication(email,code));
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

    static async getCurrentUserRoutines(controller){
        return await Api.get(`${UserApi.url}/current/routines/?size=1000`,true,controller);
    }

    static async getUserRoutines(id,controller){
        return await Api.get(`${UserApi.url}/${id}/routines/`,true,controller);
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
        parameters="";
        return await Api.get(`${UserApi.url}/current/routines/favourites${parameters}`,true,controller);
        
    }

    static async geUserFavouriteRoutines(userId,page,size,orderBy,direction,controller){
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

    static async addWeightingToUser(weightParam, controller){
        // let parameters = "";
        // let height=1.7;
        // // let concatenate = false;
        // if(weight instanceof Number && weight>=0){
        //     parameters+=`weight=${weight}`;
        // }
        // parameters+=`height=${height}`;
        // console.log(parameters);
        return await Api.post(`${UserApi.url}/current/weightings`,true,new Weight(weightParam,1.3),controller);
    }

    static async getWeightingFromUser(controller){
        return await Api.get(`${UserApi.url}/current/weightings/`,true,controller);
    }

    static async removeWeightingFromUser(weightingId, controller){
        return await Api.delete(`${UserApi.url}/current/weightings/${weightingId}`,true,controller);
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
        parameters=`size=100&orderBy=date`;
        return await Api.get(`${UserApi.url}/current/routines/executions?${parameters}`,true,controller);
        
    }
}




class Credentials {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
}

class Verfication{
    constructor(email,code){
        this.email=email;
        this.code = code;
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

class Weight{
    constructor(weight,height){
        this.weight=weight;
        this.height=height;
    }
}

