<script setup>


import { ref, onMounted, defineProps, onBeforeMount, watch } from 'vue';
import InputText from "primevue/inputtext";

const emit = defineEmits(["getValue", "blur", "keyUp"]);
const textValue = ref(null);
const className = ref('p-input-icon');
const size = ref('p-inputtext-default');

watch(
    () => props.value,
    (newVal) => textValue.value = newVal
);

const props = defineProps({
    label: {
        type: String
    },
    type: {
        type: String,
        default: 'text',
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
        default: false
    },
    icon: {
        type: String,
        default: null
    },
    iconSize: {
        type: String,
        default: '10'
    },
    iconSizeUnit: {
        type: String,
        default: 'px'
    },
    iconWeight: {
        type: String,
        default: 'normal'
    },
    iconColor: {
        type: String,
        default: '#000000'
    },
    iconBackground: {
        type: String,
        default: 'none'
    },
    iconPosition: {
        type: String,
        default: 'left'
    },
    size: {
        type: String,
        default: null
    },
    borderRadius: {
        type: String,
        default: '8'
    },
    borderRadiusUnit: {
        type: String,
        default: 'px'
    },


});

onBeforeMount(() => {

    className.value = setClass();
    size.value = setSize();

    if (props.value) {
        textValue.value = props.value
    }
});

const readOnlyProps = ref({
    background: "#E6E4E4",
    pointerEvents: 'none'
});

const changeValue = ($event) => {
    emit('getValue', $event)
};

const blur = ($event) => {
    emit('blur', $event)
};

const keyUp = ($event) => {
    emit('keyUp', $event)
};

const setClass = () => {


    if (props.icon) {
        return props.iconPosition === 'left' ? 'p-input-icon-left' : 'p-input-icon-right';
    }
    return 'p-input-icon';


};

const setSize = () => {

    if (!props.size || props.size === 'normal') {
        return 'p-inputtext-default';
    }
    else if (props.size === 'small') {
        return 'p-inputtext-sm';
    }
    else if (props.size === 'large') {
        return 'p-inputtext-lg';
    }
    else {
        return 'p-inputtext-default';
    }
    return 'p-input-icon';

}


</script>
<template  src="./input-text.html"></template>
<style src="./input-text.css">

</style>