import { defineStore } from 'pinia'

export const useMenuStore = defineStore('menu', {
    state: () => {
        return {
            categories : null,
            items : null,
        }
    },

    actions: {

        setCategories(categories){
            this.categories = categories;
        },
        getCategories(){
            return this.categories;
        },
        setItems(items){
            this.items = items;
        },
        getItems(){
            return this.items;
        }

    },
});