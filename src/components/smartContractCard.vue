<template>
    <div
        class="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-full max-w-sm">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Are you sure you want to
                Publish?</h5>
        </a>
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
    methods: {
        publish() {
            alert('Publishing...');
        },
        discard() {
            alert('Discarding...');
        }
    }
}
</script>