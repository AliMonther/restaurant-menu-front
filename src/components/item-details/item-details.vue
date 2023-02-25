<script setup>
    import { ref , onBeforeMount } from 'vue';
    import { storeToRefs } from 'pinia';
    import Card from 'primevue/card';
    import Chip from 'primevue/chip';
    import {useMenuStore} from "../../stores/menu";
    import ItemService from "../../services/ItemService";

    const menuStore = new useMenuStore();

    const itemService = new ItemService();

    const item = ref();

    const { currentSelectedItem } = storeToRefs(menuStore);

    onBeforeMount(async()=>{
        await getItemDetails();
    });

    const getItemDetails =async ()=>{
        item.value = await itemService.getById(currentSelectedItem.value);

    }

</script>
<template  src="./item-details.html"></template>
<style scoped src="./item-details.css"></style>