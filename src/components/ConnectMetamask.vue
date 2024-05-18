
<template>
  <div v-if="!loggedIn">
    <button @click="connectToMetaMask">Connect to MetaMask</button>
  </div>
  <div class="flex flex-row gap-4" v-else>
    <span class="text-white self-center text-s font-semibold whitespace-nowrap">Account : {{ account }}</span>
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      account: localStorage.getItem('account') || null,
      balance: null,
      accountInfo: null,
      loggedIn:  JSON.parse(localStorage.getItem('loggedIn')) || false,
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
          this.loggedIn = true;
          this.account = accounts[0];
          this.balance = balance;

          console.log(this.account, this.balance, 'Connected to MetaMask');
          localStorage.setItem('loggedIn', JSON.stringify(this.loggedIn));
          localStorage.setItem('account',this.account)
        } catch (error) {
          console.error('User denied account access');
        }
      } else {
        console.error('MetaMask is not installed');
      }
    },
    logout() {
      this.loggedIn = false;
      this.account = null;
      localStorage.setItem('loggedIn', JSON.stringify(this.loggedIn));
          localStorage.setItem('account',this.account)
      this.balance = null;
      console.log('Logged out');
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

