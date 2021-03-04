<template>
  <section class="module DividerModule">
    <div class="container">
      <hr />
    </div>
  </section>
</template>

<script>
export default {
  name: 'DividerModule'
};
</script>

<style scoped lang="scss">
.DividerModule {
  height: 2px;

  .container {
    position: relative;
  }

  hr {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    border-color: #223F48;
  }
}
</style>
