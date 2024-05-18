<template>
    <div>
      <button @click="connectMetaMask">Connect MetaMask</button>
      <p v-if="account">Connected account: {{ account }}</p>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import {connectMetaMask} from '../utils/metamask';
  
  export default {
    name: 'ConnectMetaMask',
    setup() {
      const account = ref(null);
  
      const connectMetaMaskHandler = async () => {
        const selectedAccount = await connectMetaMask();
        if (selectedAccount) {
          account.value = selectedAccount;
        }
      };
  
      return {
        account,
        connectMetaMask: connectMetaMaskHandler,
      };
    },
  };
  </script>
  
  <style scoped>
  button {
    margin: 20px;
    padding: 10px 20px;
    font-size: 16px;
  }
  </style>
  