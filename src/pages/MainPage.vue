<script setup>
import {
  computed, onMounted, ref, watch,
} from 'vue';
import { useToast } from 'vue-toastification';
import { useForm } from 'vee-validate';

import { getUsers } from '@/api/getUsers';
import { deleteUser } from '@/api/deleteUser';
import { createUser } from '@/api/createUser';
import UserSection from '@/components/UsersSection';
import AddUserSection from '@/components/AddUserSection';
import UserDetails from '@/components/UserDetails';
import SearchIcon from '@/components/icons/SearchIcon';
import { createUserValidationSchema } from '@/helpers/validationSchema';

const usersList = ref([]);

const currantPage = ref(1);

const totalPages = ref(0);

const user = ref();

const isDetailsModalShow = ref(false);

const query = ref('');

const filteredUsersList = ref([]);

const isFilteredUsersList = computed(() => filteredUsersList.value.length > 0);

const isNoSearchResult = computed(() => !filteredUsersList.value.length && query.value !== '');

const toast = useToast();

const {
  values, isFieldDirty, isFieldValid, resetForm,
} = useForm({
  validationSchema: createUserValidationSchema,
});

const isFormValid = computed(() => (
  isFieldDirty('name') && isFieldValid('name')
  && isFieldDirty('email') && isFieldValid('email')
));

const showMoreUsers = async () => {
  await getUsers(++currantPage.value).then(({ data, total_pages, page }) => {
    usersList.value = [...usersList.value, ...data];
    totalPages.value = total_pages;
    currantPage.value = page;
  }).catch(() => {
    toast.error('Something went wrong, please check your connection or try later');
  });
};

const handleDelete = async (id) => {
  await deleteUser(id)
    .then(() => {
      usersList.value = usersList.value.filter(({ id: userId }) => userId !== id);
    })
    .catch(() => {
      toast.error('Something went wrong, please check your connection or try later');
    });
};

const onShowUserDetails = (id) => {
  user.value = usersList.value.find(({ id: userId }) => userId === id);
  isDetailsModalShow.value = true;
};

const handleCreateUser = async () => {
  const userData = {
    first_name: values.name,
    email: values.email,
  };

  await createUser(userData)
    .then(async (response) => {
      usersList.value.unshift({ ...response, id: +response.id });
    })
    .catch(() => {
      toast.error('Something went wrong, please check your connection or try later');
    })
    .finally(() => {
      resetForm();
    });
};

onMounted(async () => {
  await getUsers(currantPage.value).then(({ total_pages, data }) => {
    usersList.value = [...data];
    totalPages.value = total_pages;
  }).catch(() => {
    toast.error('Something went wrong, please check your connection or try later');
  });
});

watch(query, (newQuery, oldQuery) => {
  if (!newQuery || !oldQuery) {
    filteredUsersList.value = usersList.value;
  } else {
    setTimeout(() => {
      filteredUsersList.value = usersList.value.filter(({ first_name }) => first_name.toLowerCase().includes(query.value.toLowerCase()));
    }, 300);
  }
});

</script>

<template>
  <div class="main-page-wrapper">

    <div class="search-wrapper">
      <div class="search-wrapper-content">
        <input v-model="query" placeholder="Search by name..." class="search-wrapper-content-input" />
        <SearchIcon class="search-wrapper-content-icon"/>
      </div>
    </div>

    <UserSection
      :users-list="isFilteredUsersList ? filteredUsersList : usersList"
      :currant-page="currantPage"
      :total-pages="totalPages"
      :show-more-users="showMoreUsers"
      :on-delete="handleDelete"
      :on-click-name="onShowUserDetails"
      :is-no-search-result="isNoSearchResult"
    />

    <AddUserSection :is-form-valid="isFormValid" :handle-create-user="handleCreateUser" />

    <UserDetails v-if="isDetailsModalShow" :user="user" :on-close="() => isDetailsModalShow = false" />
  </div>
</template>

<style scoped lang="scss">
.main-page-wrapper {
  padding: 50px;
  display: flex;
  flex-direction: column;
  gap: 50px;
}

.search-wrapper {
  display: flex;
  justify-content: end;

  &-content {
    max-width: 500px;
    display: flex;
    align-items: center;
    position: relative;

    &-input {
      width: 100%;
      height: 30px;
      border-radius: 20px;
      padding: 5px 50px 5px 10px;
    }

    &-icon {
      width: 30px;
      height: 30px;
      position: absolute;
      right: 10px;
    }
  }
}

</style>
