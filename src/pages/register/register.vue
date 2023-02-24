<script setup>

    import InputText from '../../core/form/input-text/input-text.vue'
    import InputPassword from '../../core/form/input-password/input-password.vue'
    import Button from 'primevue/button';
    import { useRoute , useRouter } from "vue-router";

    const route = useRoute();
    const router = useRouter();

</script>
<template src="./register.html"></template>
<style scoped src="./register.css"></style>