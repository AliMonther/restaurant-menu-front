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
    import CategoryService from "../../services/CategoryService";

    let submitted = ref(false);

    const menuStore = new useMenuStore();

    const categoryService = new CategoryService();

    const { items , categories } = storeToRefs(menuStore);

    const rules = computed(() => {
        return {
            name : {
                required : required
            },
            parent : {},
            selectedItems : {},
            discount : {},

        };
    });

    let state = reactive({
        name : '',
        parent : null,
        selectedItems : null,
        discount : null,

    });

    const validator = useVuelidate(rules, state);

    const updateState = (key, value) => {

        validator.value[key].$touch();
        state[key] = value;

    };

    const addCategory = async ()=>{
        if(isValidForm()){
            let data = prepareData();
            console.log(data);
            let result = await categoryService.add(data);
            if(result){
                console.log(result);
            }
        }


    };

    const prepareData = ()=>{

        return{
            name : state.name,
            parent : state.parent ? state.parent.id : undefined,
            items : state.selectedItems ? prepareItems() : undefined ,
            discount : state.discount ? state.discount : undefined ,
        }
    };

    const prepareItems = ()=>{
        return state.selectedItems.map((item)=>{
            return item.id
        })
    };

    const isValidForm = () => {
        validator.value.$validate();
        return !validator.value.$error;
    };
</script>

<template scoped src="./add-category.html"> </template>
<style scoped src="./add-category.css"> </style>