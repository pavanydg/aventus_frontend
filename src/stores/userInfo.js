// stores/userInfo.js
import { defineStore } from 'pinia';

export const userInfoStore = defineStore('userInfo', {
  state: () => ({
    loggedIn: false,
  }),
  actions: {
    login() {
      this.loggedIn = true;
    },
    logout() {
      this.loggedIn = false;
    },
  },
});
