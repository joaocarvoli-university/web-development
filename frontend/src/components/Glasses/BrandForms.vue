<script setup>
const emit = defineEmits(["customChange"]);
const handleChange = (event) => {
  emit("customChange", event.target.value)
}
</script>
<template>
  <div class="form-group">
    <div class="col-xs-6">
      <label for="brand">
        <h4>Marca</h4>
      </label>
      <input
        type="text"
        class="form-control"
        name="brand"
        id="brand"
        title="enter glass brand."
        @input="handleChange"
        placeholder="Rayban, Look,..."
      />
    </div>
  </div>
</template>
