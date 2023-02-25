import { defineStore } from 'pinia'

export const useMenuStore = defineStore('menu', {
    state: () => {
        return {
            categories : null,
            items : null,
            currentSelectedItem : null,
            currentSelectedCategory : null,
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
        },
        setCurrentSelectedItem(item){
             this.currentSelectedItem = item;
        },
        getCurrentSelectedItem(){
            return this.currentSelectedItem ;
        },
        setCurrentSelectedCategory(category){
            this.currentSelectedCategory = category;
        },
        getCurrentSelectedCategory(){
            return this.currentSelectedCategory ;
        }


    },
});