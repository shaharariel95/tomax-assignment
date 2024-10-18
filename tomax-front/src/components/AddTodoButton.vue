<script setup>
const emit = defineEmits(['click']);
import addIcon from '../assets/add-note-svgrepo-com.svg';

</script>

<template>
  <button @click="$emit('click')" class="btn border-purple-500 p-0">
    <img class="w-9" :src="addIcon"/>
  </button>
</template>