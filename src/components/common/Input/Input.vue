<script setup>
import { ref, toRef } from 'vue';
import { useField } from 'vee-validate';

const props = defineProps({
  type: String,
  name: String,
  title: String,
  placeholder: String,
  helperText: String,
});

const name = toRef(props, 'name');

const isTitleShow = ref(false);

const showTitle = () => {
  isTitleShow.value = true;
};

const {
  value: inputValue,
  errorMessage,
} = useField(name, undefined, {
  initialValue: '',
});
</script>

<template>
  <div>
    <fieldset :class="['input-wrapper', errorMessage && 'error']">
      <legend v-show="isTitleShow" :class="['input-wrapper-legend', errorMessage && 'error']">{{title}}</legend>
      <label>
        <input v-model="inputValue" :type="type" class="input-wrapper-input" :name="name" :placeholder="placeholder" @focus="showTitle">
      </label>
    </fieldset>
    <p :class="errorMessage ? 'error-text' : 'text'">{{errorMessage ?? helperText}}</p>
  </div>
</template>

<style scoped lang="scss">
@import "@/styles/colors";

.input-wrapper {
  max-height: 54px;
  padding: 13px 16px;
  border-radius: 4px;
  border: 1px solid $dark-white;
  background: white;
  position: relative;
  margin: 0;

  &-legend {
    position: absolute;
    bottom: 47px;
    background: inherit;
    padding: 0 4px;
    color: $dark-gray;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 14px;
  }

  &-legend.error {
    color: $red;
  }

  &-input {
    width: 100%;
    height: 26px;
    border: none;
    padding: 0;
    margin: 0;
    background: inherit;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px;
  }

  &-input:focus-visible {
    outline: none;
  }

  &-input::placeholder {
    color: $dark-gray;
  }
}

.input-wrapper.error {
  border: 2px solid $red;
}

.text {
  color: $dark-gray;
  position: absolute;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px;
  margin: 4px 0 0 16px;
}

.error-text {
  color: $red;
  position: absolute;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px;
  margin: 4px 0 0 16px;
}

</style>
