<template>
  <Suspense>
    <template #default>
      <BarChart :chartData="data" />
    </template>
    <template #fallback> ... loading </template>
  </Suspense>
</template>

<script setup>
import { BarChart } from 'vue-chart-3';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

defineProps({
  data: {
    required: true,
  },
});
</script>
