<script setup>

    import InputText from '../../core/form/input-text/input-text.vue'
    import InputPassword from '../../core/form/input-password/input-password.vue'
    import Button from 'primevue/button';
    import { useRoute , useRouter } from "vue-router";

    const route = useRoute();
    const router = useRouter();

</script>
<template src="./login.html"></template>
<style scoped src="./login.css"></style>