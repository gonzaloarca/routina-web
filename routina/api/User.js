
const axios = require('axios');

export {UserApi,User};

class UserApi{
    static get url() {
        return '/user';
      }
   
    async addUser(user){
        return await axios.post(url,user);
    }

    async getUser(id){
        return await axios.get(url+'/' + id);
    }
}

class User{
    constructor(username,password,fullName,gender,birthdate,email,avatarUrl){
        this.username = username;
        this.password = password;
        this.fullName = fullName;
        this.gender = gender;
        this.birthdate = birthdate;
        this.email = email;
        this.avatarUrl = avatarUrl;
    }
}


// "username": "johndoe",
//   "password": "1234567890",
//   "fullName": "John Doe",
//   "gender": "male",
//   "birthdate": 284007600000,
//   "email": "johndoe@email.com",
//   "phone": "98295822",
//   "avatarUrl": "https://flic.kr/p/3ntH2u"

