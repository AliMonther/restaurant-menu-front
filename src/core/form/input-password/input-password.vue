<script setup>
    import { onMounted, defineProps, ref , watch} from 'vue';
    import Password from 'primevue/password';


    const emit = defineEmits(["getValue"]);
    const readOnlyProps = ref({
        background:"#E6E4E4",
        pointerEvents : 'none'
    });

    let pointerEvents = props.readOnly === true ? 'none' : 'auto';
    let background = props.readOnly === true ? '#e6e4e4' : 'white';
    const borderRadiusValue = ref(props.borderRadius + props.borderRadiusUnit);

    const valuePassword = ref(props.value);

    const props = defineProps({
        label: {
            type: String
        },
        placeHolder: {
            type: String
        },
        value: {
            type: String
        },
        error: {
            type: Object
        },
        submitted: {
            type: Boolean
        },
        vValid: {
            type: Boolean
        },
        readOnly: {
            type: Boolean,
            default : false
        },
        borderRadius: {
            type: String,
            default : '0'
        },
        borderRadiusUnit: {
            type: String,
            default : 'px'
        },
    });

    watch(
        () => props.value,
        (newVal) => valuePassword.value = newVal
    );


    const changeValue = ($event) => {

        emit('getValue', $event)
    }

</script>
<template  src="./input-password.html"></template>
<style src="./input-password.css"></style>
<style>


    .input-password-item-container-wrapper .p-password .p-inputtext{
        border-radius: v-bind(borderRadiusValue);
        pointer-events :  v-bind(pointerEvents);
        background :  v-bind(background);

    }

</style>