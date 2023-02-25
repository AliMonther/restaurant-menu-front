<script setup>
    import AutoComplete from 'primevue/autocomplete';
    import Chip from 'primevue/chip';
    import { ref , defineProps , onBeforeMount, watch} from 'vue'

    const emit = defineEmits(["getValue", "allSelectedItems"]);

    const optionsTypes = { STATIC_ARRAY: 'static array', CALL_BACK_FUNCTION: 'call back function'};

    const isTouch = ref(false);

    const selectedOption = ref(props.value);

    const props = defineProps({

        searchId:{
            type : String,
            default : 'id'
        },
        label: {
            type: String
        },
        placeHolder: {
            type: String
        },
        value: {
            type: Array
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
        multiple: {
            type: Boolean,
            default :false
        },
        options: {
            type: Object,
            default :{}
        },
        function: {
            type: Function,
            default :null
        },
        optionLabel: {
            type: String,
            default :'integraa_id'
        },
        enableCaching: {
            type: Boolean,
            default :false
        },
        showSelectedItemsAsChips: {
            type: Boolean,
            default :false
        },
        type : {
            type : String,
            default : 'static'
        }

    });

    let currentOptionType = '';

    let selectedItems = ref([]);

    let selectedItemsIds = ref([]);

    let filteredOptionsBasic = ref(null);

    watch(
        () => props.value,
         (newVal) => {
             if(isTouch.value === false && newVal.length === 0 && selectedItems.value.length === 0){
                 isTouch.value = false;
             }
             else{
                 isTouch.value = true;
             }
             prepareSelectedItems(newVal);
        }
    );

    onBeforeMount(async () => {

        prepareOptions();

        prepareSelectedItems();

    });

    /*
    * Prepare autocomplete options by type and set current type in currentOptionType variable
    *
    * */
    const prepareOptions = async () => {

        currentOptionType = props.type === 'static' ? optionsTypes['STATIC_ARRAY'] : optionsTypes['CALL_BACK_FUNCTION'];
    };

    /*
    * check if value in not empty to fill selectedItems with value data
    *
    * */
    const prepareSelectedItems = (value = props.value) => {
        if (value && props.showSelectedItemsAsChips) {
            selectedItemsIds.value = props.value.map(item => item[props.searchId]);
            selectedItems.value = [...props.value];
        }
        selectedOption.value = props.showSelectedItemsAsChips ? [] : selectedOption.value;

    };

    /*
    * To filter options by key and Remove selected items from filtered options
    * @param $event : the query event
    *
    * */
    const searchInOptions = async (event)=> {

        const filteredData = currentOptionType === optionsTypes['STATIC_ARRAY']
            ? props.options.filter(item => item[props.optionLabel].includes(event.query))
            : await props.function(event.query);
        filteredOptionsBasic.value = removeSelectedItemsFromOptions(filteredData);

    };

    /*
    * To emit current selected value
    * @param $event
    * */
    const changeValue = ($event) => {
        emit('getValue', $event)
    };

    /*
    * To add value to the selectedItems
    * its add the new value to selectedItems array and add new value:id to the selectedItemsIds
    * @param $event : item to add
    * */
    const addToSelectedItems = ($event)=>{

        selectedItems.value = [...selectedItems.value, $event.value];
        selectedItemsIds.value = [...selectedItemsIds.value, $event.value[props.searchId]];
        selectedOption.value = props.showSelectedItemsAsChips ? [] : selectedOption.value;
        if(props.multiple === true){

            emit('allSelectedItems', selectedItems.value);
        }
        else{

            emit('allSelectedItems', selectedOption.value);
        }
    };

    /*
    * To remove required value from selectedItems
    * its remove the required value from selectedItems array and remove required value:id from the selectedItemsIds
    * @param $event : item to remove
    * @param type : withChips | withoutChips
    * */
    const removeFromSelectedItems = ($event , type = 'withChips') =>{
        isTouch.value = true;
        let searchId = type === 'withChips' ? parseInt($event) : $event.value[props.searchId];
        selectedItems.value = selectedItems.value.filter(item => item[props.searchId] !== searchId);
        selectedItemsIds.value = selectedItemsIds.value.filter(item => item !== searchId);
        selectedOption.value = selectedOption.value.filter(item => item[props.searchId] !== searchId);
        emit('allSelectedItems', selectedItems.value);
    };

    /*
    * To remove selected items from options
    * @param items
    * return items param after remove selected items
    * */
    const removeSelectedItemsFromOptions = (items)=>{
        if(props.multiple === true){
            return items.filter(item => !selectedItemsIds.value.includes(item[props.searchId]));
        }
        else{
            return items;
        }
    };

    const focus = ()=>{
        isTouch.value = true
    };


</script>

<template src="./input-auto-complete.html"></template>
<style src="./input-auto-complete.css">

</style>
