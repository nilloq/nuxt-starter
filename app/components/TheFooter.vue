<template>
  <footer class="bg-base fixed bottom-0 left-0 z-1000 w-full border-t border-grey">
    <div
      id="footer"
      class="m-auto flex px-4 py-2 container empty:hidden"
    >
      <slot />
    </div>
  </footer>
</template>

<style lang="css" scoped>
footer:has(#footer:empty) {
  display: none;
}
</style>
