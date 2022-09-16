<template>
  <div class="max-w-7xl mx-auto py-6">
    <div class="flex justify-between">
      <h1 class="text-3xl font-bold text-gray-900">Резервации</h1>
      <!--      <router-link-->
      <!--        to="/reservations/create"-->
      <!--        data-mdb-ripple="true"-->
      <!--        data-mdb-ripple-color="light"-->
      <!--        class="inline-block px-6 py-2.5 bg-gray-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out"-->
      <!--      >-->
      <!--        Създай-->
      <!--      </router-link>-->
    </div>
  </div>
  <div class="flex flex-col">
    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
        <div class="overflow-x-auto">
          <table class="min-w-full">
            <thead class="border-b bg-gray-600">
              <tr>
                <th scope="col" class="text-sm font-medium text-white px-6 py-4 text-left">#</th>
                <th scope="col" class="text-sm font-medium text-white px-6 py-4 text-left">
                  Потребител
                </th>
                <th scope="col" class="text-sm font-medium text-white px-6 py-4 text-left">
                  Имейл
                </th>
                <th scope="col" class="text-sm font-medium text-white px-6 py-4 text-left">От</th>
                <th scope="col" class="text-sm font-medium text-white px-6 py-4 text-left">До</th>
                <th scope="col" class="text-sm font-medium text-white px-6 py-4 text-left">Стая</th>
                <th scope="col" class="text-sm font-medium text-white px-6 py-4 text-left">
                  Статус
                </th>
                <th scope="col" class="text-sm font-medium text-white px-6 py-4 text-left">Общо</th>
                <th class="text-sm font-medium text-white px-6 py-4 text-left"></th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b" v-for="(reservation, key) in reservations" :key="key">
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  {{ reservation.id }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  {{ reservation.user.name }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  {{ reservation.user.email }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  {{ reservation.from }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  {{ reservation.to }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <span v-if="reservation.room.number">№{{ reservation.room.number }}</span>
                  {{ reservation.room.name }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <span
                    v-if="reservation.status"
                    class="px-2 py-1 text-xs rounded-full text-white"
                    :class="{
                      'bg-status-confirmed': reservation.status === 'confirmed',
                      'bg-status-canceled': reservation.status === 'canceled',
                      'bg-status-pending': reservation.status === 'pending',
                    }"
                  >
                    {{ getStatusString(reservation.status) }}
                  </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  {{ reservation.total }}лв.
                </td>
                <td class="text-sm font-light px-6 py-4 flex justify-end whitespace-nowrap">
                  <router-link
                    type="button"
                    :to="`/reservations/${reservation.id}`"
                    class="flex items-center p-3 mr-2 bg-green-400 text-white font-medium text-xs leading-normal uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    <PencilIcon class="w-4 h-4" />
                  </router-link>
                  <button
                    type="button"
                    @click="remove(reservation.id)"
                    class="flex items-center p-3 bg-red-400 text-white font-medium text-xs leading-normal uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    <TrashIcon class="w-4 h-4" />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import api from '../../services/api';
import { ref } from 'vue';
import { TrashIcon, PencilIcon } from '@heroicons/vue/solid';

const reservations = ref(null);

const STATUSES = {
  pending: {
    color: 'gray',
    string: 'В процес',
  },
  confirmed: {
    color: 'green',
    string: 'Удобрена',
  },
  canceled: {
    color: 'red',
    string: 'Отаказана',
  },
};

const getStatusString = (status) => STATUSES[status].string;

api.get('/reservations').then((res) => {
  reservations.value = res.data;
});

const remove = (id) => {
  api.delete(`/reservations/${id}`).then((res) => {
    reservations.value = res.data.data;
  });
};
</script>
