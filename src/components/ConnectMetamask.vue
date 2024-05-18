<script setup>
import { userInfoStore } from '../stores/userInfo';
</script>

<template>
  <div v-if="!userInfo.loggedIn">
    <button @click="connectToMetaMask">Connect to MetaMask</button>
  </div>
  <div v-else>
    <span class="text-white self-center text-s font-semibold whitespace-nowrap">Account : {{ account }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      account: null,
      balance: null,
      accountInfo: null,
    };
  },
  methods: {
    async connectToMetaMask() {
      if (typeof window.ethereum !== 'undefined') {
        try {
          // Request account access if needed
          const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
          const balance = await window.ethereum.request({ method: 'eth_getBalance', params: [accounts[0]] });
          // Set the first account as the connected account
          this.account = accounts[0];
          this.balance = balance;
          console.log(userInfo.loggedIn);
          userInfo.loggedIn = true;
        } catch (error) {
          console.error('User denied account access');
        }
      } else {
        console.error('MetaMask is not installed');
      }
    },
  },
};
</script>

<style scoped>
button {
  padding: 10px 20px;
  background-color: #f6851b;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #e2761b;
}

p {
  margin-top: 20px;
  font-size: 16px;
}
</style>

