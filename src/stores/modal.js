import { defineStore } from 'pinia'

export const useModalStore = defineStore('modal', {
    state: () => {
        return { display: false , identifier : '' }
    },

    actions: {
        changeState(newState , identifier='') {
            this.identifier = identifier;
            this.display = newState;
        },
    },
});