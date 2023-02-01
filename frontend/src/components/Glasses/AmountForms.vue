<script setup>
const emit = defineEmits(["customChange"]);
const handleChange = (event) => {
  emit("customChange", event.target.value)
}
</script>

<template>
  <div class="form-group">
    <div class="col-xs-6">
      <label for="email">
        <h4>Quantidade</h4>
      </label>
      <input
        type="text"
        class="form-control"
        name="text"
        id="text"
        title="enter glass Amount."
        @input="handleChange"
        placeholder="10"
      />
    </div>
  </div>
</template>
