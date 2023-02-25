<script setup>
    import Carousel from 'primevue/carousel';
    import {ref} from 'vue'
    import { storeToRefs } from 'pinia'
    import {useModalStore} from "../../stores/modal";
    import {useMenuStore} from "../../stores/menu";

    const openCategoryDetailsModalIdentifier = 'open-item-details-modal';

    const modalStore = new useModalStore();

    const menuStore = new useMenuStore();

    const { categories } = storeToRefs(menuStore);





    const responsiveOptions = ref( [
        {
            breakpoint: '1024px',
            numVisible: 3,
            numScroll: 3
        },
        {
            breakpoint: '600px',
            numVisible: 2,
            numScroll: 2
        },
        {
            breakpoint: '480px',
            numVisible: 1,
            numScroll: 1
        }
    ]);

    const openModal = async (id , identifier)=>{

        await setSelectedCategory(id);

        await modalStore.changeState( true , identifier);
    };

    const setSelectedCategory = (categoryId)=>{

        menuStore.setCurrentSelectedCategory(categoryId);

    }

</script>


<template src="./list-categories.html" ></template>
<style scoped src="./list-categories.css" ></style>