<script setup>
import SectionWrapper from '../common/SectionWrapper';
import Button from '../common/Button';
import Input from '../common/Input';

defineProps({
  isFormValid: Boolean,
  handleCreateUser: Function,
});

</script>

<template>
  <SectionWrapper title="Add User">
    <form class="form-wrapper">
      <div class="form-wrapper-content">
        <Input name="name" title="Name" placeholder="Your name" />
        <Input name="email" title="Email" placeholder="Email" />
      </div>
    </form>
    <Button @click="handleCreateUser" :disabled="!isFormValid">Add user</Button>
  </SectionWrapper>
</template>

<style scoped lang="scss">
.form-wrapper {
  width: 350px;
  display: flex;
  flex-direction: column;
  gap: 47px;

  &-content {
    display: flex;
    flex-direction: column;
    gap: 43px;
  }
}

</style>
