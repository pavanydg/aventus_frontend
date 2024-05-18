<template>
  <div>
    <button @click="connectToMetaMask">Connect to MetaMask</button>
    <p v-if="account">Connected account: {{ account }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      account: null,
    };
  },
  methods: {
    async connectToMetaMask() {
      if (typeof window.ethereum !== 'undefined') {
        try {
          // Request account access if needed
          const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
          // Set the first account as the connected account
          this.account = accounts[0];
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
