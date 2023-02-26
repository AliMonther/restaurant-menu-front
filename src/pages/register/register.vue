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
            firstName : {
                required : required
            },
            lastName : {
                required : required
            },
            email : {
                required : required,
                email : email,
            },
            password : {
                required : required
            },
            menuName : {
                required : required
            },
            menuDiscount : {},

        };
    });

    let state = reactive({
        firstName : '',
        lastName : '',
        email : '',
        password : '',
        menuName : '',
        menuDiscount : null,
    });

    const validator = useVuelidate(rules, state);

    const updateState = (key, value) => {
        validator.value[key].$touch();
        state[key] = value;

    };

    const register = async ()=>{
        let data = prepareData();
        let result = await authService.register(data);
        if(result){

            await router.push({ name: 'menu' });
        }

    };

    const prepareData = ()=>{
        return{
            first_name : state.firstName,
            last_name : state.lastName,
            email : state.email,
            password : state.password,
            menu_name : state.menuName,
            menu_discount : state.menuDiscount ? state.menuDiscount : undefined,
        }
    };

</script>
<template src="./register.html"></template>
<style scoped src="./register.css"></style>