<script setup>
const emit = defineEmits(['click']);
import addIcon from '../assets/add-note-svgrepo-com.svg';

</script>

<template>
  <button @click="$emit('click')" class="btn btn-primary mb-4">
    <img class="w-5" :src="addIcon"/>
  </button>
</template>