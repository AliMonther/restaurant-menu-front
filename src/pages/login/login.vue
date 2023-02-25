<script setup>
    import { ref , reactive , computed} from 'vue'

    import InputText from '../../core/form/input-text/input-text.vue'
    import InputPassword from '../../core/form/input-password/input-password.vue'
    import Button from 'primevue/button';
    import { useRoute , useRouter } from "vue-router";
    import AuthService from "../../services/AuthService";
    import { useVuelidate } from "@vuelidate/core";
    import { required ,email} from "@vuelidate/validators";
    import {useTokenStore} from "../../stores/token";

    const tokenStore = new useTokenStore();

    const route = useRoute();

    const authService = new AuthService();

    const router = useRouter();

    let submitted = ref(false);


    const rules = computed(() => {
        return {

            email : {
                required : required,
                email : email,
            },
            password : {
                required : required
            },


        };
    });

    let state = reactive({
        email : '',
        password : '',
    });

    const validator = useVuelidate(rules, state);

    const updateState = (key, value) => {
        validator.value[key].$touch();
        state[key] = value;

    };

    const login = async ()=>{
        let data = prepareData();
        let result = await authService.login(data);
        if(result){

            await router.push({ name: 'menu' });
        }

    };

    const prepareData = ()=>{
        return{
            email : state.email,
            password : state.password,
        }
    };

</script>
<template src="./login.html"></template>
<style scoped src="./login.css"></style>