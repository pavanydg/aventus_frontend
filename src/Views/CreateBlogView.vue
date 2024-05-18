<script setup>
import NavBar from '../components/NavBar.vue'
</script>

<template>
    <NavBar/>
    <div class="flex ">
        <form>
            <input type="text" placeholder="Title"/>
            <textarea placeholder="Content"></textarea>
            <button>Create</button>
        </form>
    </div>
</template>