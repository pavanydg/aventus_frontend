<script setup>
import ABI from '../util/abi.js';
import Web3 from 'web3';
</script>

<template>
    <div
        class="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-full max-w-sm">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Are you sure you want to
                Publish?</h5>
        </a>
        Current Balance : {{ balance }}
        <br>
        Wallet Address : {{ walletAddress }}
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            <b>Content-Hash:</b> {{ contentHash }} <br>
            <b>Provider URL:</b> <a :href="providerUrl" class="text-blue">Provided Link</a>
        </p>

        <div class="button-holder flex flex-row gap-4">
            <a href="#" @click="publish"
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Publish Now 🚀
            </a>
            <a href="#" @click="discard"
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                Discard Draft 🗑️
            </a>
        </div>

    </div>


</template>

<script>
export default {
    data() {
        return {
            isPublished: false,
            balance: null,
            walletAddress: null
        }
    },
    props: {
        providerUrl: {
            type: String,
            required: true
        },
        contentHash: {
            type: String,
            required: true
        }
    },
    async mounted() {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        this.balance = await window.ethereum.request({ method: 'eth_getBalance', params: [accounts[0]] });
        this.balance = (parseInt(this.balance, 16) / Math.pow(10, 18)) + " ETH";
        this.walletAddress = accounts[0];
    },
    methods: {
        async publish() {
            let web3 = new Web3(window.ethereum);
            let abi = ABI;
            let contractAddress = "0x848148B6cb41f2A74E444A5Cf40F614471bBfd3e";
            let contract = new web3.eth.Contract(abi, contractAddress);
            let a = '123';
            let b = '456';

            await contract.methods.uploadBlog(a, b).send({
            from: this.walletAddress,
            value: web3.utils.toWei('0.000003', 'ether') // 1000 Wei
            });

            alert('Published...');
        },
        discard() {
            alert('Discarding...');
        }
    }
}
</script>