<script setup>
import NavBar from '../components/NavBar.vue'
import BlogWriter from '../components/BlogWriter.vue'
</script>
<template>
    <NavBar />
    <BlogWriter/>
</template>

<script>
export default {
    name: 'PublishView',
    components: {
        NavBar,
        BlogWriter
    }
}
</script>