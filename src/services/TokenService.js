
export default class TokenService {



    set(token){
        localStorage.setItem('token',token);
    }
    get(){
        return localStorage.getItem('token');

    }
    removeToken(){
        localStorage.removeItem('token')

    }

}
