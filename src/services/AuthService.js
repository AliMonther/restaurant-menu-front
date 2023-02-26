import BaseCrud from '../api/baseCrud'
import {useTokenStore} from "../stores/token";
import Swal from 'sweetalert2';
import TokenService from "./TokenService";
export default class AuthService extends BaseCrud{

    constructor() {

        super('/auth');
        this.tokenStore = new useTokenStore();
        this.tokenService = new TokenService();
    }

    async register(data){
        try{
            this.prefix = '/auth/register';

            let result = await super.store(data);

            let userResult = result.data.data;

            this.tokenStore.setToken(userResult.token);

            this.tokenService.set(userResult.token);
            return true;

        }
        catch (e) {
            new Swal( e.response.data.message);
            return false;
        }

    }


    async login(data){
        try{
            this.prefix = '/auth/login';

            let result = await super.store(data);

            let userResult = result.data.data;

            this.tokenStore.setToken(userResult.token);

            this.tokenService.set(userResult.token);
            return true;

        }
        catch (e) {
            new Swal( e.response.data.message);
            return false;
        }

    }

    logout(){
        this.tokenService.removeToken();
    }

}
