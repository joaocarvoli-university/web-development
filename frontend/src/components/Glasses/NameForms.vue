<script setup>
const emit = defineEmits(["customChange"]);
const handleChange = (event) => {
  emit("customChange", event.target.value)
}
</script>
<template>
  <div class="form-group">
    <div class="col-xs-6">
      <label for="name">
        <h4>Nome</h4>
      </label>
      <input
        type="text"
        class="form-control"
        name="name"
        id="name"
        placeholder="rayban"
        title="enter glass name."
        @input="handleChange"
      />
    </div>
  </div>
</template>
