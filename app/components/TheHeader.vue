<script setup lang="ts">
const onTop = ref(true)

// Handle scroll to show header bottom border
function handleScroll() {
  onTop.value = window.scrollY < 30
}

const { user, loggedIn } = useUserSession()

const isLogoutModalOpen = ref(false)

useEventListener(document, 'scroll', handleScroll)
</script>

<template>
  <header
    class="fixed z-20 w-full bg-base"
    :class="{ 'drop-shadow dark:(border-b-1 border-grey)': !onTop }"
  >
    <nav class="m-auto flex items-center gap-1 px4 py3 text-lg container">
      <NuxtLink
        to="/"
        class="text-3xl fw-bold flex items-center gap-4"
        title="Nuxt starter template"
      >
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            style="fill:#ffffff;fill-opacity:1;stroke:#333333;stroke-width:1.3305;stroke-linecap:round;stroke-dasharray:none;stroke-opacity:1"
            d="M 22.488174,7.5583451 A 11.375162,11.335492 0 0 1 18.538978,21.342706 11.375162,11.335492 0 0 1 4.1956053,20.24896 11.375162,11.335492 0 0 1 2.3970443,6.0263063 11.375162,11.335492 0 0 1 16.019688,1.4206712"
          />
          <path
            id="path2"
            fill="none"
            stroke="#00dc82"
            stroke-width="2.32585"
            d="M 12.317355,21.659577 V 10.843876 m 0,4.806978 c 0,-3.605235 0,-7.2104668 -7.8774897,-7.2104668 0,3.6052318 0,7.2104668 7.8774897,7.2104668 z m 0,-4.806978 c 0,-3.6052332 0,-7.2104669 7.877491,-7.2104669 0,3.6052337 0,7.2104669 -7.877491,7.2104669 z"
          />
        </svg>
        {{ $t('HEADER.TITLE') }}
      </NuxtLink>
      <div flex-auto />
      <LanguageSwitch />
      <ColorSchemeToggle />
      <LogoutModal v-model:open="isLogoutModalOpen" />

      <DropdownMenuRoot v-if="loggedIn && user">
        <DropdownMenuTrigger as-child>
          <button class="btn-link p-1" aria-label="User Menu">
            <AppAvatar :src="user.avatar" :alt="user.name" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem class="text-sm p-1" as-child>
            <NuxtLink to="/profile" class="flex items-center">
              <span class="i-carbon-user inline-block mr-1 w-4 h-4" />{{ $t('GENERAL.PROFILE') }}
            </NuxtLink>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem class="text-sm p-1" @click="isLogoutModalOpen = true">
            <div class="flex items-center">
              <span class="i-carbon-logout inline-block mr-1 w-4 h-4" />{{ $t('LOGOUT.TITLE') }}
            </div>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenuRoot>
    </nav>
  </header>
</template>
