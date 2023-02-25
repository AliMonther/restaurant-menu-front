import BaseCrud from '../api/baseCrud'
import { useTokenStore } from "../stores/token";
import {useMenuStore} from "../stores/menu";
import {useModalStore} from "../stores/modal";

export default class CategoryService extends BaseCrud{

    constructor() {

        super('/categories');

        this.tokenStore = new useTokenStore();

        this.tokenStore.getToken();
        this.menuStore = new useMenuStore();
        this.modalStore = new useModalStore();

    }

    async add(data = null){

        try{
            await super.store(data);

            let categories = await this.list();
            console.log('categories');
            console.log(categories);
            await this.menuStore.setCategories(categories);

            await this.modalStore.changeState(false , 'open-category-modal');

        }
        catch (e) {
            alert( e.response.data.message);
            return false;
        }

    }

    async list(){
        let result = await super.index({all : 1});
        return result.data.data;
    }
    async getById(id){

        this.prefix = '/categories/';

        let result =  await super.show(id);

        return result.data.data;
    }

}
