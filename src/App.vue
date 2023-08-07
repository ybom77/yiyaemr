<template>
  <div ref="el">
  </div>
</template>

<script setup lang="ts">

import { onMounted, ref } from "vue";
import { createEditor } from "./components/main/index";

const el = ref()

onMounted(() => createEditor(el.value!))

</script>
