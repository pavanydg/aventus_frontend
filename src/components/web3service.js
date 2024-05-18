import Web3 from 'web3';

let web3;
let selectedAccount;

export const connectMetaMask = async () => {
    if (window.ethereum) {
        try {
            // Request account access if needed
            await window.ethereum.request({ method: 'eth_requestAccounts' });

            // We don't know window.web3 version, so we use our own instance of web3
            web3 = new Web3(window.ethereum);

            // Get the user's account
            const accounts = await web3.eth.getAccounts();
            selectedAccount = accounts[0];

            console.log(`Selected account: ${selectedAccount}`);

            // Handle account changes
            window.ethereum.on('accountsChanged', (accounts) => {
                selectedAccount = accounts[0];
                console.log(`Account changed: ${selectedAccount}`);
            });

            return selectedAccount;
        } catch (error) {
            console.error("User denied account access");
        }
    } else {
        console.error("MetaMask is not installed");
    }
};

export const getWeb3 = () => {
    return web3;
};
