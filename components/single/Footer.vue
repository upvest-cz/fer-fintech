<template>
  <footer>
    <div class="container">
      Copyright {{ new Date().getFullYear() }} Fér Fintech
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
};
</script>

<style scoped lang="scss">
footer {
  padding: 4px 0 47px;
  text-align: center;
}
</style>
