import BaseCrud from '../api/baseCrud'
import {useMenuStore} from "../stores/menu";

export default class MenuService extends BaseCrud{

    constructor() {

        super('/menus/details');
        this.menuStore = new useMenuStore();
    }

     async getMenuDetails(){
         let result =  await super.getDetails();
         let menu = result.data.data;
         this.menuStore.setCategories(menu.categories);
         this.menuStore.setItems(menu.items);

    }

}
