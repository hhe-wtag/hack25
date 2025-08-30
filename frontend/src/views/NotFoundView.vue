<template>
  <div
    class="min-h-screen-minus-nav flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
  >
    <div class="max-w-md w-full space-y-8 text-center">
      <div>
        <h1 class="text-9xl font-bold text-gray-900">404</h1>
        <h2 class="mt-6 text-3xl font-extrabold text-gray-900">Page not found</h2>
        <p class="mt-2 text-sm text-gray-600">
          Sorry, we couldn't find the page you're looking for.
        </p>
      </div>
      <div class="mt-8 space-y-4">
        <Button @click="goBack" variant="outline" class="w-full"> Go back </Button>
        <Button @click="goHome" class="w-full"> Go to homepage </Button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import Button from '@/components/ui/button/Button.vue'

const router = useRouter()

const goBack = () => {
  router.go(-1)
}

const goHome = () => {
  router.push('/')
}
</script>
