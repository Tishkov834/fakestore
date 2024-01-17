<script setup>
import DeleteIcon from '../icons/DeleteIcon';

defineProps({
  id: Number,
  avatar: String,
  name: String,
  email: String,
  onDelete: Function,
  onClickName: Function,
});
</script>

<template>
  <div class="user-card">
    <img class="user-card-avatar" alt="user_avatar" :src="avatar">
    <div class="user-card-info">
      <p @click="onClickName(id)" @keydown.enter="onClickName(id)" tabindex="0" class="user-card-info-name">{{name}}</p>
      <p class="user-card-info-email">{{email}}</p>
    </div>
    <button @click="onDelete(id)" class="user-card-del-button">
      <DeleteIcon class="user-card-del-button-icon" />
    </button>
  </div>
</template>

<style scoped lang="scss">
@import "@/styles/colors";

.user-card {
  width: 220px;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;
  position: relative;
  border: 1px solid $dark-white;

  &-avatar {
    width: 70px;
    height: 70px;
    border-radius: 70px;
    border: 0.5px solid $dark-white;
  }

  &-info {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    &-name {
      margin: 0;
      max-width: 100%;
      text-align: center;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      cursor: pointer;
    }

    &-email {
      margin: 0;
      max-width: 100%;
      text-align: center;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  &-del-button {
    width: 30px;
    height: 30px;
    border: none;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: absolute;
    right: 10px;
    top: 10px;

    &-icon {
      width: 20px;
      height: 20px;
    }
  }
}

</style>
