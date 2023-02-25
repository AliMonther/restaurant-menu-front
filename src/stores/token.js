import { defineStore } from 'pinia'

export const useTokenStore = defineStore('token', {
    state: () => {
        return {
            token : null,
        }
    },

    actions: {

        setToken(token){
            this.token = token;
        },
        getToken(){
            return this.token;
        },
        resetToken(){
             this.token = null;
        },


    },
});