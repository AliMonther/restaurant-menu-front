<script setup>
    import OrderList from 'primevue/orderlist';
    import {ref} from 'vue'
    import { storeToRefs } from 'pinia'
    import {useModalStore} from "../../stores/modal";
    import {useMenuStore} from "../../stores/menu";

    const openItemDetailsModalIdentifier = 'open-category-details-modal';

    const modalStore = new useModalStore();

    const menuStore = new useMenuStore();

    const { items } = storeToRefs(menuStore);

    const products = ref([
        {
           name:'item1',
           price:'200' ,
        },
        {
            name:'item2',
            price:'1200' ,
        },
        {
            name:'item1',
            price:'200' ,
        },
        {
            name:'item2',
            price:'1200' ,
        },
        {
            name:'item1',
            price:'200' ,
        },
        {
            name:'item2',
            price:'1200' ,
        },
        {
            name:'item1',
            price:'200' ,
        },
        {
            name:'item2',
            price:'1200' ,
        },
    ]);

    const openModal = (identifier)=>{
        modalStore.changeState( true , identifier);
    };

</script>

<template src="./list-items.html"></template>
<!--<style  lang="scss" scoped src="./list-items.css"></style>-->
<style lang="scss" scoped>
.card {
background: #ffffff;
padding: 2rem;
box-shadow: 0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12);
border-radius: 4px;
margin-bottom: 2rem;
}
.product-item {
display: flex;
align-items: center;
padding: .5rem;
width: 100%;


img {
width: 75px;
box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
margin-right: 1rem;
}

.product-list-detail {
flex: 1 1 0;
}

.product-list-action {
display: flex;
flex-direction: column;
align-items: flex-end;
}

.product-category-icon {
vertical-align: middle;
margin-right: .5rem;
font-size: .875rem;
}

.product-category {
vertical-align: middle;
line-height: 1;
font-size: .875rem;
}
}

@media screen and (max-width: 576px) {
.product-item {
flex-wrap: wrap;

.image-container {
width: 100%;
text-align: center;
}

img {
margin: 0 0 1rem 0;
width: 100px;
}
}
}
</style>