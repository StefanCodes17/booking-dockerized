<template>
  <div>
    <img
      src="http://booking-dev.test/storage/public/gallery/19565a72150bcb617c7cec81830e6731.jpg"
      alt=""
    />
    <div class="md:grid">
      <div class="mt-5 md:mt-0 md:col-span-2">
        <form @submit="upload">
          <div>
            <div class="mt-1 flex justify-center items-center">
              <span
                class="inline-block h-80 w-80 rounded-lg overflow-hidden bg-gray-100"
                v-if="!img"
              >
                <svg class="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </span>
              <span
                v-else
                class="inline-block flex justify-center w-full h-full rounded-lg overflow-hidden"
              >
                <img class="w-1/2 h-full" :src="img" alt="" />
              </span>
            </div>
          </div>
          <div class="flex justify-center flex-col items-center">
            <div class="my-3 w-96">
              <input
                class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                type="file"
                id="formFile"
                name="images"
                @change="handleImage($event.target.files)"
                accept="image/*"
              />
            </div>
            <div class="px-4 py-5 bg-white sm:p-6">
              <div class="grid grid-cols-6 gap-6">
                <div class="col-span-12">
                  <label for="first-name" class="block text-sm font-medium text-gray-700"
                    >Име на стая</label
                  >
                  <input
                    type="text"
                    v-model="data.name"
                    name="first-name"
                    id="first-name"
                    autocomplete="given-name"
                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                <div class="col-span-6 sm:col-span-4">
                  <label for="email-address" class="block text-sm font-medium text-gray-700"
                    >Номер</label
                  >
                  <input
                    type="number"
                    v-model="data.number"
                    name="email-address"
                    autocomplete="email"
                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                <div class="col-span-6 sm:col-span-4">
                  <label for="email-address" class="block text-sm font-medium text-gray-700"
                    >Брой хора</label
                  >
                  <input
                    type="text"
                    v-model="data.people"
                    name="email-address"
                    autocomplete="email"
                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                <div class="col-span-12 sm:col-span-12">
                  <label for="email-address" class="block text-sm font-medium text-gray-700"
                    >Описание</label
                  >
                  <textarea
                    type="text"
                    v-model="data.description"
                    name="email-address"
                    id="email-address"
                    autocomplete="email"
                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                <div class="col-span-6 sm:col-span-4">
                  <label for="email-address" class="block text-sm font-medium text-gray-700"
                    >Цена</label
                  >
                  <input
                    type="text"
                    v-model="data.price"
                    name="email-address"
                    autocomplete="email"
                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              :disabled="!img && !data.name && !data.price"
              :class="{
                'disabled:opacity-75 cursor-not-allowed': !img && !data.name && !data.price,
              }"
              class="flex items-center px-6 py-2.5 bg-gray-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Създай стая
              <span class="ml-3" v-if="isLoading">
                <RefreshIcon class="w-5 h-5 animate-spin" />
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RefreshIcon } from '@heroicons/vue/solid';
import { useRouter } from 'vue-router';
import api from '../../services/api';
import { ref } from 'vue';
const img = ref('');
const data = ref({});
const isLoading = ref(false);

const router = useRouter();

const handleImage = (files) => {
  const file = files[0];
  createBase64Image(file);
};
const createBase64Image = (file) => {
  const reader = new FileReader();
  reader.onloadend = (e) => {
    img.value = e.target.result;
  };
  reader.readAsDataURL(file);
};

const upload = (e) => {
  e.preventDefault();
  isLoading.value = true;
  api.post('/rooms', { ...data.value, image: img.value }).then((res) => {
    isLoading.value = false;
    router.push('/rooms');
  });
};
</script>
