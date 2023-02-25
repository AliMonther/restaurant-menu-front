import { defineStore } from "pinia/dist/pinia";


export const useGlobalStore = defineStore('global', {

    state: () => {

        return {
            loading: false,
        }

    },

    actions: {
        enableLoader(){
            this.loading = true;
        },
        disableLoader(){
            this.loading = false;
        }
    },

    getters: {

    }


});