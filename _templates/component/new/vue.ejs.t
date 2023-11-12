---
to: src/components/<%=section%>/<%= h.changeCase.pascal(name) %>.vue
---
<script setup lang="ts">
  import { ref } from 'vue'
</script>

<template>
  <slot />
</template>
