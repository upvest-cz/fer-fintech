<template>
  <div class="Author">
    <div class="Author__image">
      <slot name="image" />
    </div>
    <div>
      <div class="Author__name"><slot name="name" /></div>
      <div class="Author__position"><slot name="position" /></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Author'
};
</script>

<style scoped lang="scss">
.Author {
  display: flex;

  &__image {
    margin-right: spacer(3);

    img {
      height: 80px;
      width: auto;
    }
  }

  &__name {
    font-weight: $font-weight-bold;
  }
}
</style>
