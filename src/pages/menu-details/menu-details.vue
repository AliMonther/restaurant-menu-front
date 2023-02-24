<script setup>
    import Menubar from 'primevue/menubar';
    import Button from 'primevue/button';
    import modal from '../../core/modal/modal.vue'
    import AddCategory from '../../components/add-category/add-category.vue'
    import AddItem from '../../components/add-item/add-item.vue'
    import { ref } from 'vue';
    import {useModalStore} from "../../stores/modal";

    const openCategoryModalIdentifier = 'open-category-modal';

    const openItemModalIdentifier = 'open-item-modal';

    const modalStore = new useModalStore();

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
            // {
            //     label:'logout',
            //     icon:'pi pi-fw pi-sign-out'
            // }
        ]

    );
</script>

<template scoped src="./menu-details.html"></template>
<style scoped src="./menu-details.css"></style>