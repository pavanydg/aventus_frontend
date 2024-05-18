
<script>
import ConnectMetamask from './ConnectMetamask.vue';
</script>

<template>
    <nav class="bg-white border-gray-200 dark:bg-gray-900">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
                <!-- <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" /> -->
                <span class="text-white self-center text-2xl font-semibold whitespace-nowrap">DecentraWiki</span>
            </a>
            <ul class="flex items-center space-x-4">
                <li class="flex">
                    <a href="" class="text-white font-mono flex justify-center hover:bg-white hover:p-2 rounded-md hover:text-black" >
                        <svg class="text-white h-7 flex-col hover:text-black" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                        </svg>
                        <a href="/create" class="flex flex-col justify-center">Create Blog</a>
                    </a>
                <ConnectMetamask /> 
                </li>
            </ul>
        </div>
    </nav>
</template>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>