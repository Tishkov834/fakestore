<script setup>
import { computed, toRefs } from 'vue';

import UserCard from '../UserCard';
import Button from '../common/Button';
import SectionWrapper from '../common/SectionWrapper';

const props = defineProps({
  usersList: Array,
  currantPage: Number,
  totalPages: Number,
  isNoSearchResult: Boolean,
  showMoreUsers: Function,
  onDelete: Function,
  onClickName: Function,
});

const { currantPage, totalPages } = toRefs(props);

const isShowButtonDisabled = computed(() => totalPages.value === currantPage.value);
</script>

<template>
  <SectionWrapper title="Users List">
    <div v-if="isNoSearchResult" class="empty-search-result-wrapper">
        <span class="empty-search-result-wrapper-text">No search result</span>
    </div>

    <div v-else class="users-wrapper">
      <ul class="cards-wrapper">
        <li class="cards-wrapper-item" v-for="{id, first_name, avatar, email} in usersList" :key="id">
          <UserCard
            :id="id"
            :avatar="avatar"
            :name="first_name"
            :email="email"
            :on-delete="onDelete"
            :on-click-name="onClickName"
          />
        </li>
      </ul>
      <Button @click="showMoreUsers" :disabled="isShowButtonDisabled">Show more</Button>
    </div>
  </SectionWrapper>
</template>

<style scoped lang="scss">
.cards-wrapper {
  margin: 0;
  padding: 0;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;

  &-item {
    list-style: none;
  }
}

.users-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
}

</style>
