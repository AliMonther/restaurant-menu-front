<script setup>
    import Menubar from 'primevue/menubar';
    import Button from 'primevue/button';
    import modal from '../../core/modal/modal.vue'
    import AddCategory from '../../components/add-category/add-category.vue'
    import AddItem from '../../components/add-item/add-item.vue'
    import ListItems from '../../components/list-items/list-items.vue'
    import ListCategories from '../../components/list-categories/list-categories.vue'
    import CategoryDetails from '../../components/category-details/category-details.vue'
    import ItemDetails from '../../components/item-details/item-details.vue'
    import { ref , onBeforeMount} from 'vue';
    import {useModalStore} from "../../stores/modal";
    import {useTokenStore} from "../../stores/token";
    import {useMenuStore} from "../../stores/menu";
    import { useRoute , useRouter } from "vue-router";
    import MenuService from "../../services/MenuService";
    import AuthService from "../../services/AuthService";

    const openCategoryModalIdentifier = 'open-category-modal';

    const openItemModalIdentifier = 'open-item-modal';

    const openCategoryDetailsModalIdentifier = 'open-item-details-modal';

    const openItemDetailsModalIdentifier = 'open-category-details-modal';

    const modalStore = new useModalStore();

    const tokenStore = new useTokenStore();

    const authService = new AuthService();

    const router = useRouter();

    const menuStore = new useMenuStore();

    const menuService = new MenuService();

    onBeforeMount(()=>{
        if(checkAuth()){

            getMenuDetails();

        }

    });

    const openModal = (identifier)=>{
        modalStore.changeState( true , identifier);
    };

    const items = ref(

        [

            {
                label:'category',
                icon:'pi pi-fw pi-plus',
                identifier : openCategoryModalIdentifier
            },
            {
                label:'item',
                icon:'pi pi-fw pi-plus',
                identifier : openItemModalIdentifier
            },

        ]

    );




    const getMenuDetails = ()=>{
        menuService.getMenuDetails();

    };

    const logout = ()=>{

        authService.logout();

        router.push({ name: 'welcome' });
    };

    const checkAuth = ()=>{
        if(!localStorage.getItem('token')){
            router.push({name : 'login'});
            return false;
        }
        else{

            return true
        }
    }

</script>

<template scoped src="./menu-details.html"></template>
<style scoped src="./menu-details.css"></style>