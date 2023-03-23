<!-- src/views/Betting.vue -->
<template>
  <div>
    <h1>Panustamine</h1>
    <ul>
      <li v-for="example in examples" :key="example.id">
        {{ example.name }}
      </li>
    </ul>
  </div>
</template>
<script>
// In your Vue component
import Example from '../models/Example';

export default {
  data() {
    return {
      examples: [],
    };
  },
  async created() {
    this.examples = await Example.getAll();
  }
};
</script>