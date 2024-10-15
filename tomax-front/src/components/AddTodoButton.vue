<script setup>
const emit = defineEmits(['click']);
</script>

<template>
  <button @click="$emit('click')" class="btn btn-primary mb-4">
    + Add Todo
  </button>
</template>