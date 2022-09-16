<template>
  <div class="max-w-7xl mx-auto py-6">
    <div class="md:flex-row flex flex-col justify-between">
      <h1 class="text-3xl font-bold text-gray-900">
        {{ route.params.id ? 'Редактирай потребител' : 'Създай потребител' }}
      </h1>
      <router-link
        to="/users"
        data-mdb-ripple="true"
        data-mdb-ripple-color="light"
        class="inline-block px-6 py-2.5 bg-gray-800 text-white mt-3 md:mt-0 text-center font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out"
      >
        Върни се обратно в потребители
      </router-link>
    </div>
  </div>
  <div class="mt-10 sm:mt-0">
    <div class="md:grid md:gap-6">
      <div class="md:col-span-1">
        <div class="px-4 sm:px-0">
          <h3 class="text-lg font-medium leading-6 text-gray-900">Лична информация</h3>
        </div>
      </div>
      <div class="mt-5 md:mt-0 md:col-span-2" v-if="user">
        <form @submit="update">
          <div class="shadow overflow-hidden sm:rounded-md">
            <div class="px-4 py-5 bg-white sm:p-6">
              <div class="grid grid-cols-6 gap-6">
                <div class="col-span-12">
                  <label for="first-name" class="block text-sm font-medium text-gray-700"
                    >Потребителско име</label
                  >
                  <input
                    type="text"
                    v-model="user.name"
                    name="first-name"
                    id="first-name"
                    autocomplete="given-name"
                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                <div class="col-span-6 sm:col-span-4">
                  <label for="email-address" class="block text-sm font-medium text-gray-700"
                    >Имейл</label
                  >
                  <input
                    type="text"
                    v-model="user.email"
                    name="email-address"
                    id="email-address"
                    autocomplete="email"
                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <label for="country" class="block text-sm font-medium text-gray-700">Роля</label>
                  <select
                    id="country"
                    name="country"
                    v-model="role"
                    autocomplete="country-name"
                    class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option value="admin">Админ</option>
                    <option value="guest">Гост</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <button
                type="submit"
                class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Запази
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { ref } from 'vue';
import api from '../../services/api';

const route = useRoute();

const roles = ref([
  { text: 'Admin', value: 'admin' },
  { text: 'Guest', value: 'guest' },
]);

const role = ref();
const user = ref({
  name: '',
  email: '',
  roles: [],
});

if (route.params.id) {
  api.get(`/users/${route.params.id}`).then((res) => {
    user.value = res.data[0];
    role.value = res.data[0].roles[0].name;
  });
}

const update = (e) => {
  e.preventDefault();
  console.log({ ...user.value, role });
  api.post(`/users/${route.params.id}`, { ...user.value, role: role.value });
};
</script>

<style scoped></style>
