<template>
  <div class="max-w-7xl mx-auto py-6">
    <div class="flex justify-between">
      <h1 class="text-3xl font-bold text-gray-900">Потребители</h1>
      <router-link
        to="/users/create"
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
                  Потребителско име
                </th>
                <th scope="col" class="text-sm font-medium text-white px-6 py-4 text-left">
                  Имейл
                </th>
                <th scope="col" class="text-sm font-medium text-white px-6 py-4 text-left">Роли</th>
                <th class="text-sm font-medium text-white px-6 py-4 text-left"></th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b" v-for="(user, key) in users" :key="key">
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  {{ user.id }}
                </td>
                <td class="text-sm font-light px-6 py-4 whitespace-nowrap">
                  {{ user.name }}
                </td>
                <td class="text-sm font-light px-6 py-4 whitespace-nowrap">
                  {{ user.email }}
                </td>
                <td class="text-sm font-light px-6 py-4 whitespace-nowrap">
                  {{ user.roles.map((role) => role.name).join(', ') }}
                </td>
                <td class="text-sm font-light px-6 py-4 flex justify-end whitespace-nowrap">
                  <router-link
                    :to="`/users/${user.id}`"
                    class="flex items-center mr-2 p-2 bg-green-400 text-white font-medium text-xs leading-normal uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    <PencilIcon class="w-6 h-6" /> </router-link
                  ><button
                    type="button"
                    @click="remove(user.id)"
                    class="flex items-center p-2 bg-red-400 text-white font-medium text-xs leading-normal uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    <TrashIcon class="w-6 h-6" />
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

const users = ref(null);

api.get('/users').then((res) => {
  users.value = res.data;
});

const remove = (id) => {
  api.delete(`/users/${id}`).then((res) => {
    users.value = res.data.data;
  });
};
</script>
