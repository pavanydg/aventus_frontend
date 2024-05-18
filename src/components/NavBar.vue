<script setup>
import ConnectMetamask from './ConnectMetamask.vue';
</script>

<template>
    <nav class="bg-black border-gray-200 dark:bg-gray-900">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
                <span class="text-white self-center text-2xl font-semibold whitespace-nowrap">🗺️ &nbsp; DecentraWiki</span>
            </a>
            <ul class="flex items-center">
                <li>
                    <ConnectMetamask />
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'NavBar',
    components: {
        ConnectMetamask
    },
    data() {
        return {
            isLogged: false
        };
    },
}
</script>
