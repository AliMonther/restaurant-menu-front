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



    // const categories = ref([
    //     {
    //         name:'item1',
    //         price:'200' ,
    //     },
    //     {
    //         name:'item2',
    //         price:'1200' ,
    //     },
    //     {
    //         name:'item1',
    //         price:'200' ,
    //     },
    //     {
    //         name:'item2',
    //         price:'1200' ,
    //     },
    //     {
    //         name:'item1',
    //         price:'200' ,
    //     },
    //     {
    //         name:'item2',
    //         price:'1200' ,
    //     },
    //     {
    //         name:'item1',
    //         price:'200' ,
    //     },
    //     {
    //         name:'item2',
    //         price:'1200' ,
    //     },
    // ]);

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

    const openModal = (identifier)=>{
        modalStore.changeState( true , identifier);
    };


</script>


<template src="./list-categories.html" ></template>
<style scoped src="./list-categories.css" ></style>