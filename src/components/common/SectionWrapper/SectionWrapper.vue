<script setup>
defineProps({
  title: String,
});

</script>

<template>
  <section class="section-wrapper">
    <h1 class="section-wrapper-title">{{title}}</h1>
    <slot></slot>
  </section>
</template>

<style scoped lang="scss">
.section-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;

  &-title {
    margin: 0;
    font-size: 40px;
    font-style: normal;
    font-weight: 400;
    line-height: 40px;
    text-align: center;
    padding: 0 15px;
  }
}

</style>
