<template>
  <div>
    <div class="max-w-7xl mx-auto py-6">
      <div class="flex justify-between">
        <h1 class="text-3xl font-bold text-gray-900">Преглед на резервация</h1>
      </div>
    </div>
    <div class="md:grid">
      <div class="mt-5 md:mt-0 md:col-span-2" v-if="reservation">
        <form @submit="save">
          <div class="shadow overflow-hidden sm:rounded-md">
            <div class="px-4 py-5 bg-white sm:p-6">
              <div class="grid grid-cols-6 gap-6">
                <div class="col-span-3">
                  <label for="room" class="block text-sm font-medium text-gray-700">Стая</label>
                  <input
                    type="text"
                    v-model="reservation.room.name"
                    name="room"
                    id="room"
                    readonly
                    autocomplete="given-name"
                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                <div class="col-span-3">
                  <label for="number" class="block text-sm font-medium text-gray-700">Стая</label>
                  <input
                    type="text"
                    v-model="reservation.room.number"
                    name="number"
                    id="number"
                    readonly
                    autocomplete="given-name"
                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                <div class="col-span-3">
                  <label for="first-name" class="block text-sm font-medium text-gray-700"
                    >Потребителско име</label
                  >
                  <input
                    type="text"
                    v-model="reservation.user.name"
                    name="first-name"
                    id="first-name"
                    readonly
                    autocomplete="given-name"
                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                <div class="col-span-3">
                  <label for="email-address" class="block text-sm font-medium text-gray-700"
                    >Имейл на потребителя</label
                  >
                  <input
                    type="text"
                    v-model="reservation.user.email"
                    name="email-address"
                    id="email-address"
                    readonly
                    autocomplete="email"
                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                <div class="col-span-3">
                  <label for="from" class="block text-sm font-medium text-gray-700">От</label>
                  <input
                    type="text"
                    v-model="reservation.from"
                    name="from"
                    id="from"
                    readonly
                    autocomplete="given-name"
                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                <div class="col-span-3">
                  <label for="to" class="block text-sm font-medium text-gray-700">До</label>
                  <input
                    type="text"
                    v-model="reservation.to"
                    name="to"
                    id="to"
                    readonly
                    autocomplete="given-name"
                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                <div class="col-span-3" v-if="reservation.status">
                  <label for="status" class="block text-sm font-medium text-gray-700">Статус</label>
                  <select
                    id="status"
                    name="status"
                    v-model="reservation.status"
                    autocomplete="country-name"
                    class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option value="pending">В процес</option>
                    <option value="confirmed">Потвърдена</option>
                    <option value="canceled">Отказана</option>
                  </select>
                </div>

                <div class="col-span-3 flex items-end justify-end">
                  <div class="block text-md font-bold text-gray-700">
                    Общо {{ reservation.total }}лв.
                  </div>
                </div>
              </div>
            </div>
            <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <button
                type="submit"
                class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Запази
                <span class="ml-3" v-if="isLoading">
                  <RefreshIcon class="w-5 h-5 animate-spin" />
                </span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RefreshIcon } from '@heroicons/vue/solid';
import { useRouter, useRoute } from 'vue-router';
import api from '../../services/api';
import { ref } from 'vue';
const isLoading = ref(false);
const reservation = ref();

const router = useRouter();
const route = useRoute();

api.get(`/reservations/${route.params.id}`).then((res) => {
  reservation.value = res.data[0];
});

const save = (e) => {
  e.preventDefault();
  isLoading.value = true;
  api.post(`/reservations/${route.params.id}`, { ...reservation.value }).then(() => {
    isLoading.value = false;
  });
};
</script>
