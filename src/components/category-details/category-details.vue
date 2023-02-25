<script setup>
    import { ref , onBeforeMount } from 'vue';
    import { storeToRefs } from 'pinia';
    import Card from 'primevue/card';
    import Chip from 'primevue/chip';
    import {useMenuStore} from "../../stores/menu";
    import CategoryService from "../../services/CategoryService";

    const menuStore = new useMenuStore();

    const categoryService = new CategoryService();

    const category = ref();

    const { currentSelectedCategory } = storeToRefs(menuStore);

    onBeforeMount(async()=>{
        console.log('currentSelectedCategory');
        console.log(currentSelectedCategory.value);
        await getCategoryDetails();
    });

    const getCategoryDetails =async ()=>{
         category.value = await categoryService.getById(currentSelectedCategory.value);

    }

</script>
<template src="./category-details.html"></template>
<style scoped src="./category-details.css"></style>