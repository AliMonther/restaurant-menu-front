<script setup>
    import Button from 'primevue/button';
    import { useRoute , useRouter } from "vue-router";

    const route = useRoute();
    const router = useRouter();

    const goToLink = (name)=>{
        router.push({
            name: name,
        });
    }

</script>

<template src="./welcome.html"></template>
<style scoped src="./welcome.css"></style>