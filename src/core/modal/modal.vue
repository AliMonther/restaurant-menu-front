<script setup>

//--------------------------imports-----------------------------------------

import Dialog from 'primevue/dialog';
import { ref, defineProps, onBeforeMount, onMounted, onUpdated } from 'vue'
import { useModalStore } from "../../stores/modal";
// import sxwButton from '../form/sxw-button/sxw-button.vue'
import { storeToRefs } from 'pinia'
//--------------------------End imports--------------------------------------

//--------------------------variables----------------------------------------
// onBeforeMount(()=>{
//     console.log('props.identifier');
//     console.log(props.identifier);
//     console.log('modalStore.identifier');
//     console.log(modalStore.identifier);
// });
//
// onMounted(()=>{
//
//     });
//     onUpdated(()=>{
//
//     });


const modalStore = useModalStore();

const { display } = storeToRefs(modalStore);

const canDisplay = () => {
    return display.value === true && props.identifier === modalStore.identifier;
};

const props = defineProps({

    identifier: {
        type: String,
        required: true
    },
    modalWidth: {
        type: String,
        required: true
    },
    modalHeight: {
        type: String,
        required: true
    },
    borderRadius: {
        type: String,
        default: '10'
    },
    component: {
        required: true,
    },
    componentProps: {
        type: Object,
        default: {},

    },
    showBtn: {
        type: Boolean,
        default: true
    },
    btnLabel: {
        type: String,
        default: 'click'
    },
    btnIcon: {
        type: String,
        default: null
    },
    btnIconPosition: {
        type: String,
        default: 'left'
    },
    btnSize: {
        type: String,
        default: null
    },
    btnBackground: {
        type: String,
        default: '#F2DE31'
    },
    btnColor: {
        type: String,
        default: '#00000'
    },
    btnHoverBackground: {
        type: String,
        default: '#F2DE31'
    },
    btnHoverColor: {
        type: String,
        default: '#00000'
    },
    btnBorderRadius: {
        type: String,
        default: '0'
    },
    btnBorderRadiusUnit: {
        type: String,
        default: 'px'
    },

});


//--------------------------End variables-------------------------------------

//--------------------------methods-------------------------------------------
const changeState = (newState) => {
    modalStore.changeState(newState);
}
const getValueFromComponent = ($event) => {
    emit('getValue', $event)

};
const close = () => {
    modalStore.changeState(false);

}

//--------------------------End methods---------------------------------------



</script>

<template src="./modal.html"></template>
<style src="./modal.css">

</style>
