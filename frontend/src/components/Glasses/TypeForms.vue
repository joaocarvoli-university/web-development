<script setup>
const emit = defineEmits(["customChange"]);
const handleChange = (event) => {
  emit("customChange", event.target.value);
};
</script>
<template>
  <div class="form-group">
    <div class="col-xs-6">
      <label for="type">
        <h4>Tipo</h4>
      </label>
      <input
        type="type"
        class="form-control"
        name="type"
        id="type"
        title="enter glass type."
        @input="handleChange"
        placeholder="sunglasses ou prescriptionGlasses"
      />
    </div>
  </div>
</template>
