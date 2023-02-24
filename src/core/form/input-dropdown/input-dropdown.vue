<script setup>
    import Dropdown from 'primevue/dropdown';
    import { ref , defineProps ,watch} from 'vue'


    const emit = defineEmits(["getValue"]);

    const props = defineProps({
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
        options: {
            type: Object,
            default :{}
        },
        function: {
            type: Object,
            default :null
        },
        optionLabel: {
            type: String,
            default :'id'
        },
        enableCaching: {
            type: Boolean,
            default :false
        },
        inputHeight : {
            type: String,
            default :'40px'
        }

    });
    let selectedItem = ref(props.value);
    const changeValue = ($event) => {
        emit('getValue', $event)
    };
    watch(
        () => props.value,
        (newVal) => {
            emit('getValue', newVal);
            selectedItem.value = newVal;
        }
    )

</script>

<template src="./input-dropdown.html"></template>
<style src="./input-dropdown.css"></style>
