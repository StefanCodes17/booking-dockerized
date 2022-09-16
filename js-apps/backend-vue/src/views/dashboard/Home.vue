<template>
  <div class="max-w-7xl mx-auto py-6">
    <div class="flex justify-between">
      <h1 class="text-3xl font-bold text-gray-900">Дашборд</h1>
    </div>
  </div>
  <div v-if="!isLoading">
    <div class="grid gap-6 mb-8 md:grid-cols-2 lg:grid-cols-3 mb-10">
      <TotalDeck :rooms="additionalData.rooms" title="стаи" :icon="CubeIcon" />
      <TotalDeck :rooms="additionalData.gallery" title="снимки" :icon="PhotographIcon" />
      <TotalDeck :rooms="additionalData.users" title="потребители" :icon="UsersIcon" />
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div class="col-span-1">
        <ChartReservations :data="chartData" />
      </div>
      <div class="col-span-1">
        <ChartReservations :data="chartDataTotals" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { CubeIcon, PhotographIcon, UsersIcon } from '@heroicons/vue/outline';

import ChartReservations from './components/ChartReservations.vue';
import TotalDeck from './components/TotalDeck.vue';
import api from '../../services/api';
import { ref } from 'vue';

const isLoading = ref(true);
const additionalData = ref({ rooms: null, gallery: null, users: null });

api.get('/dashboard').then((res) => {
  const { reservations, totals, ...data } = res.data;
  chartData.datasets[0].data = reservations;
  chartDataTotals.datasets[0].data = totals;
  additionalData.value = { ...data };
  isLoading.value = false;
});

const labels = [
  'Януари',
  'Февруари',
  'Март',
  'Април',
  'Май',
  'Юни',
  'Юли',
  'Август',
  'Септември',
  'Октомври',
  'Ноември',
  'Декември',
];

const chartData = {
  labels,
  datasets: [
    {
      label: 'Резервации',
      data: [],
      backgroundColor: '#77CEFF',
    },
  ],
};

const chartDataTotals = {
  labels,
  datasets: [
    {
      label: 'Печалби',
      data: [],
      backgroundColor: '#00a2fd',
    },
  ],
};
</script>
