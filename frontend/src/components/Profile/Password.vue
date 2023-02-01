<script setup>
const emit = defineEmits(["customChange"]);
const handleChange = (event) => {
  emit("customChange", event.target.value);
};
</script>
<template>
  <div class="form-group">
    <div class="col-xs-6">
      <label for="password">
        <h4>Senha</h4>
      </label>
      <input
        type="password"
        class="form-control"
        name="password"
        id="password"
        placeholder="password"
        title="enter your password."
        @input="handleChange"
      />
    </div>
  </div>
</template>
