<script setup>

    import { ref , reactive , computed} from 'vue'
    import InputPassword from '../../core/form/input-password/input-password.vue'
    import DropdownInput from '../../core/form/input-dropdown/input-dropdown.vue'
    import AuthCompleteInput from '../../core/form/input-auto-complete/input-auto-complete.vue'
    import InputText from '../../core/form/input-text/input-text.vue'
    import { useRoute , useRouter } from "vue-router";
    import Button from 'primevue/button';
    import { useVuelidate } from "@vuelidate/core";
    import { required } from "@vuelidate/validators";
    import { storeToRefs } from "pinia";
    import {useMenuStore} from "../../stores/menu";
    import ItemService from "../../services/ItemService";

    let submitted = ref(false);

    const menuStore = new useMenuStore();

    const itemService = new ItemService();

    const { categories } = storeToRefs(menuStore);

    const rules = computed(() => {
        return {
            name : {
                required : required
            },
            price : {
                required : required
            },
            discount : {},

            selectedCategories : {
                required : required,
            },


        };
    });

    let state = reactive({
        name : '',
        price : 0,
        selectedCategories : null,
        discount : null,

    });

    const validator = useVuelidate(rules, state);

    const updateState = (key, value) => {
        console.log('key');
        console.log(key);
        console.log('value');
        console.log(value);
        validator.value[key].$touch();
        state[key] = value;

    };

    const addItem = async ()=>{
        if(isValidForm()){
            let data = prepareData();
            console.log(data);
            let result = await itemService.add(data);
            if(result){
                console.log(result);
            }
        }


    };

    const prepareData = ()=>{

        return{
            name : state.name,
            price : state.price,
            discount : state.discount ? state.discount : undefined,
            categories : ( state.selectedCategories ? prepareSelectedCategories() : undefined ),
        }
    };

    const prepareSelectedCategories = ()=>{
        return state.selectedCategories.map((category)=>{
            return category.id
        })
    };

    const isValidForm = () => {
        validator.value.$validate();
        return !validator.value.$error;
    };
</script>
<template scoped src="./add-item.html"></template>
<style scoped src="./add-item.css"></style>