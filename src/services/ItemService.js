import BaseCrud from '../api/baseCrud'
import {useMenuStore} from "../stores/menu";
import {useModalStore} from "../stores/modal";

export default class ItemService extends BaseCrud{

    constructor() {

        super('/items');
        this.menuStore = new useMenuStore();
        this.modalStore = new useModalStore();
    }
   //
   async add(data = null){
      try{
          let result = await super.store(data);

          let items = await this.list();

          await this.menuStore.setItems(items);

          await this.modalStore.changeState(false , 'open-item-modal');
      }

   catch (e) {
            alert( e.response.data.message);
           return false;
       }
   }

    async list(){
        let result = await super.index({});
        return result.data.data;
    }

    async getById(id){
        this.prefix = '/items/';

        let result =  await super.show(id);

        return result.data.data;
    }

}
