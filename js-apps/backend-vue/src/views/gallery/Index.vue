<template>
  <div class="max-w-7xl mx-auto py-6">
    <div class="flex justify-between">
      <h1 class="text-3xl font-bold text-gray-900">Галерия</h1>
      <router-link
        to="/gallery/create"
        data-mdb-ripple="true"
        data-mdb-ripple-color="light"
        class="inline-block px-6 py-2.5 bg-gray-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out"
      >
        Създай
      </router-link>
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
                  Снимка
                </th>
                <th class="text-sm font-medium text-white px-6 py-4 text-left"></th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b" v-for="(i, key) in gallery">
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  {{ i.id }}
                </td>
                <td class="text-sm font-light px-6 py-4 whitespace-nowrap">
                  <img :src="i.image" alt="" class="rounded-lg w-20 h-full" />
                </td>
                <td class="text-sm font-light px-6 py-4 flex justify-end whitespace-nowrap">
                  <button
                    type="button"
                    @click="remove(i.id)"
                    class="flex items-center px-6 pt-2.5 pb-2 bg-red-400 text-white font-medium text-xs leading-normal uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    <TrashIcon class="w-6 h-6" />
                    Изтрии
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
import { TrashIcon } from '@heroicons/vue/solid';

const gallery = ref(null);

api.get('/gallery').then((res) => {
  gallery.value = res.data.data;
});

const remove = (id) => {
  api.delete(`/gallery/${id}`).then((res) => {
    gallery.value = res.data.data;
  });
};
</script>
