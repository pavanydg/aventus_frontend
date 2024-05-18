// stores/userInfo.js
// import { defineStore } from 'pinia';

// export const userInfoStore = defineStore('userInfo', {
//   state: () => ({loggedIn: false}),
//   actions: {
//     login() {
//       this.loggedIn = true;
//     },
//     logout() {
//       this.loggedIn = false;
//     },
//   },
// });
// stores/userInfo.js
import { defineStore } from 'pinia';

export const userInfoStore = defineStore('userInfo', {
  state: () => ({
    loggedIn: JSON.parse(localStorage.getItem('loggedIn')) || false,
    account: JSON.parse(localStorage.getItem('account')) || '',
    balance: JSON.parse(localStorage.getItem('balance')) || 0,
    accountInfo: JSON.parse(localStorage.getItem('accountInfo')) || {},
  }),
  actions: {
    login() {
      this.loggedIn = true;
      localStorage.setItem('loggedIn', JSON.stringify(this.loggedIn));
    },
    setAccount(account) {
      this.account = account;
      localStorage.setItem('account', JSON.stringify(this.account));
    },
    setBalance(balance) {
      this.balance = balance;
      localStorage.setItem('balance', JSON.stringify(this.balance));
    },
    setAccountInfo(accountInfo) {
      this.accountInfo = accountInfo;
      localStorage.setItem('accountInfo', JSON.stringify(this.accountInfo));
    },
    logout() {
      this.loggedIn = false;
      localStorage.setItem('loggedIn', JSON.stringify(this.loggedIn));
    },
  },
});

