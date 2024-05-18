<template>
    <NavBar />
    <div class="home-screen p-4">
        <div class="home-view">
            <div class="banner text-center mb-12">
                <h1 class="text-4xl font-bold mb-4">Welcome to DecentraWiki 🗺️</h1>
                <p class="text-lg text-gray-700 mb-6">
                    A decentralized platform for publishing and sharing information.
                </p>
                <div class="button-holder flex flex-row gap-4 justify-center">
                    <router-link to="/publish-blogs" class="btn-primary">Publish Now</router-link>
                    <router-link to="/read-blogs" class="btn-primary">Read Blogs</router-link>
                </div>
            </div>

            <div class="features grid grid-cols-1 md:grid-cols-3 gap-6 ">
                <div class="feature bg-white rounded-lg p-6 shadow-md">
                    <img src="https://i.imgflip.com/8qh8li.jpg" alt="Meme" class="h-96 w-full object-cover object-top">
                    <h2 class="text-2xl font-bold mb-2">Decentralized Publishing 🖥️</h2>
                    <p class="text-base text-gray-700">Say goodbye to centralized control. Publish directly to the
                        decentralized web and earn rewards.</p>
                </div>
                <div class="feature bg-white rounded-lg p-6 shadow-md">

                    <img src="https://i.imgflip.com/8qh8i4.jpg" alt="Meme" class="h-96  object-cover object-top">
                    <h2 class="text-2xl font-bold mb-2">Earn Rewards💵</h2>
                    <p class="text-base text-gray-700">Get rewarded for your contributions with our token-based reward
                        system.</p>
                </div>
                <div class="feature bg-white rounded-lg p-6 shadow-md">
                    <img src="https://i.imgflip.com/8qh8n9.jpg" alt="" class="h-96 w-full object-cover object-top">
                    <h2 class="text-2xl font-bold mb-2">Community Policing👮</h2>
                    <p class="text-base text-gray-700">Help maintain the integrity of our platform by flagging
                        misinformation and earn rewards for your vigilance.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import NavBar from '../components/NavBar.vue'
</script>

<style scoped>
.btn-primary {
    @apply inline-block py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md transition duration-300 ease-in-out hover:bg-blue-600;
}

.home-screen {
    @apply flex flex-col items-center justify-center;
}
</style>