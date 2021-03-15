<template>
  <component :is="computedTag" class="Tagline">
    <slot />
  </component>
</template>

<script>
export default {
  name: 'Tagline',
  props: ['as'],
  computed: {
    computedTag() {
      return this.as || 'div';
    }
  }
};
</script>

<style scoped lang="scss">
.Tagline {
  @include heading-6;
  text-transform: initial;
  color: $primary;
}
</style>
