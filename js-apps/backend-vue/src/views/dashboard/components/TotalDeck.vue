<template>
  <div class="min-w-0 rounded-lg shadow-xs overflow-hidden bg-white dark:bg-gray-800">
    <div class="p-4 flex items-center">
      <div
        class="p-3 rounded-full text-orange-500 dark:text-orange-100 bg-orange-100 dark:bg-orange-500 mr-4"
      >
        <component :is="icon" class="w-5 h-5" />
      </div>
      <div>
        <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">Общо {{ title }}</p>
        <p class="text-lg font-semibold text-gray-700 dark:text-gray-200">{{ rooms }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  rooms: {
    required: true,
  },
  title: {
    required: true,
  },
  icon: {
    required: false,
  },
});
</script>
