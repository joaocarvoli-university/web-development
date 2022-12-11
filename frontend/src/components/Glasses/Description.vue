<script setup>
const emit = defineEmits(["customChange"]);
const handleChange = (event) => {
  emit("customChange", event.target.value)
}

</script>
<template>
  <div class="form-group">
    <div class="col-xs-6">
      <label for="description">
        <h4>Descrição</h4>
      </label>
      <input
        type="text"
        class="form-control"
        name="description"
        id="description"
        title="enter glass description."
        @input="handleChange"
        placeholder="O óculos perfeito para você"
      />
    </div>
  </div>
</template>
