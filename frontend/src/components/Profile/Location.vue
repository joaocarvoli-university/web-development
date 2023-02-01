<script setup>
const emit = defineEmits(["customChange"]);
const handleChange = (event) => {
  emit("customChange", event.target.value);
};
</script>

<template>
  <div class="form-group">
    <div class="col-xs-6">
      <label for="email">
        <h4>city</h4>
      </label>
      <input
        type="email"
        class="form-control"
        id="location"
        placeholder="somewhere"
        title="enter a location"
        @input="handleChange"
      />
    </div>
  </div>
</template>
