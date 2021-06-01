<template>
  <div class="AspectRatio">
    <svg :viewBox="`0 0 ${aspectRatio} 1`" />
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'AspectRatio',
  props: {
    aspectRatio: {
      type: Number,
      default: 16/9
    },
  },
};
</script>

<style scoped lang="scss">
.AspectRatio {
  display: grid;
  position: relative;

  & > * {
    grid-area: 1 / 1 / 2 / 2;
  }

  & > svg {
    width: auto;
    height: auto;
  }

  & > *:not(svg) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>
