<script lang="ts" setup>
const { t } = useI18n()

const message = ref()

const route = useRoute()

if (route.query.alert) {
  message.value = t('LOGIN.ALERT')
}
</script>

<template>
  <div class="m-auto p-8 container">
    <p v-if="message" class="mx-auto max-w-sm mb-4 text-danger">
      {{ message }}
    </p>
    <div class="mx-auto max-w-sm rounded-lg p-4 border-base">
      <h1 class="mb-4 text-2xl">
        {{ $t('LOGIN.TITLE') }}
      </h1>

      <form>
        <div class="grid gap-4">
          <!-- With Google -->
          <a href="/api/auth/google" class="btn-secondary w-full">
            <span class="i-carbon-logo-google mr-1" />{{ $t('LOGIN.SIGN_IN_GOOGLE') }}
          </a>
          <AppSeparator :label="$t('GENERAL.OR')" />
          <!-- With Github -->
          <a href="/api/auth/github" class="btn-secondary w-full">
            <span class="i-carbon-logo-github mr-1" />{{ $t('LOGIN.SIGN_IN_GITHUB') }}
          </a>

          <!-- With Email -->
          <!-- <p>
            {{ $t('LOGIN.DESCRIPTION') }}
          </p>
          <div class="grid gap-2">
            <Label for="email">{{ $t('GENERAL.EMAIL') }}</Label>
            <input
              id="email"
              type="email"
              :placeholder="$t('LOGIN.EMAIL_PLACEHOLDER')"
              required
            >
          </div>
          <div class="grid gap-2">
            <div class="flex items-center">
              <Label for="password">{{ $t('GENERAL.PASSWORD') }}</Label>
              <a href="#" class="ml-auto inline-block text-sm underline">
                {{ $t('LOGIN.PASSWORD_FORGOTTEN') }}
              </a>
            </div>
            <input id="password" type="password" required>
          </div>
          <button type="submit" class="w-full btn">
            {{ $t('LOGIN.SIGN_IN') }}
          </Button>
        </div>
        <div class="mt-4 text-center text-sm">
          {{ $t('LOGIN.NO_ACCOUNT') }}
          <a href="#" class="underline">
            {{ $t('LOGIN.SIGN_UP') }}
          </a>
        </div> -->
        </div>
      </form>
    </div>
  </div>
</template>
