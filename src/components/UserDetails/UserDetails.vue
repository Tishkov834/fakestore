<script setup>
import { toRefs } from 'vue';

import Button from '@/components/common/Button';

const props = defineProps({
  user: Object,
  onClose: Function,
});

const { user } = toRefs(props);

const { avatar, first_name, email } = user.value;
</script>

<template>
  <div class="details-modal">
    <div class="details-modal-content">
      <img class="details-modal-content-avatar" alt="user_avatar" :src="avatar">
      <div class="details-modal-content-info">
          <div class="details-modal-content-info-wrapper">
            <label class="details-modal-content-info-wrapper-label">Name:</label>
            <span class="details-modal-content-info-wrapper-text">{{first_name}}</span>
          </div>
        <div class="details-modal-content-info-wrapper">
          <label class="details-modal-content-info-wrapper-label">Email:</label>
          <span class="details-modal-content-info-wrapper-text">{{email}}</span>
        </div>
        <div class="details-modal-content-info-wrapper">
          <label class="details-modal-content-info-wrapper-label">Phone:</label>
          <span class="details-modal-content-info-wrapper-text">-</span>
        </div>
        <div class="details-modal-content-info-wrapper">
          <label class="details-modal-content-info-wrapper-label">Residence address:</label>
          <span class="details-modal-content-info-wrapper-text">-</span>
        </div>
      </div>
      <Button @click="onClose">Close</Button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.details-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 20;

  &-content {
    min-width: 500px;
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;

    &-avatar {
      width: 150px;
      height: 150px;
      border-radius: 70px;
    }

    &-info {
      display: flex;
      flex-direction: column;
      align-items: start;
      gap: 10px;

      &-wrapper {

        &-label {
          font-size: 24px;
          font-style: normal;
          font-weight: 600;
          margin-right: 10px;
          text-align: center;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        &-text {
          font-size: 24px;
          font-style: normal;
          font-weight: 400;
          text-align: center;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }
  }
}

</style>
