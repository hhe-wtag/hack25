<template>
  <div
    class="min-h-screen-minus-nav flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8"
  >
    <div class="max-w-lg w-full space-y-8 text-center">
      <!-- 404 Icon and Number -->
      <div class="relative">
        <div class="flex justify-center mb-6">
          <div class="relative">
            <SearchX class="w-24 h-24 text-gray-400 mx-auto" />
            <div class="absolute -top-2 -right-2">
              <AlertTriangle class="w-8 h-8 text-orange-500" />
            </div>
          </div>
        </div>
        <h1 class="text-8xl md:text-9xl font-bold text-gray-900 mb-4">404</h1>
        <div
          class="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"
        ></div>
      </div>

      <!-- Error Message -->
      <div class="space-y-4">
        <h2 class="text-2xl md:text-3xl font-bold text-gray-900">Oops! Page not found</h2>
        <p class="text-gray-600 text-lg max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved. Let's get you back on track!
        </p>
      </div>

      <!-- Action Buttons -->
      <div class="space-y-4 pt-6">
        <Button @click="goHome" class="w-full sm:w-auto px-8 py-3 text-lg group">
          <Home class="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
          Go to Homepage
        </Button>

        <div class="flex flex-col sm:flex-row gap-3 justify-center">
          <Button @click="goBack" variant="outline" class="px-6 py-2 group">
            <ArrowLeft class="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Go Back
          </Button>

          <Button @click="refresh" variant="outline" class="px-6 py-2 group">
            <RefreshCw
              class="w-4 h-4 mr-2 group-hover:rotate-180 transition-transform duration-500"
            />
            Refresh Page
          </Button>
        </div>
      </div>

      <!-- Help Section -->
      <div class="pt-8 border-t border-gray-200 mt-12">
        <div class="flex items-center justify-center space-x-6 text-sm text-gray-500">
          <router-link to="/" class="flex items-center hover:text-gray-700 transition-colors">
            <HelpCircle class="w-4 h-4 mr-1" />
            Help
          </router-link>

          <a
            href="mailto:support@example.com"
            class="flex items-center hover:text-gray-700 transition-colors"
          >
            <Mail class="w-4 h-4 mr-1" />
            Contact Support
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import Button from '@/components/ui/button/Button.vue'
import {
  SearchX,
  AlertTriangle,
  Home,
  ArrowLeft,
  RefreshCw,
  HelpCircle,
  Mail,
} from 'lucide-vue-next'

const router = useRouter()

const goBack = () => {
  if (window.history.length > 1) {
    router.go(-1)
  } else {
    router.push('/')
  }
}

const goHome = () => {
  router.push('/')
}

const refresh = () => {
  window.location.reload()
}
</script>

<style scoped>
.group:hover .group-hover\:scale-110 {
  transform: scale(1.1);
}

.group:hover .group-hover\:-translate-x-1 {
  transform: translateX(-0.25rem);
}

.group:hover .group-hover\:rotate-180 {
  transform: rotate(180deg);
}
</style>
