<template>
  <div class="Tagline">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Tagline'
};
</script>

<style scoped lang="scss">
.Tagline {
  @include heading-6;
  color: $primary;
}
</style>
