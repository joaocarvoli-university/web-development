<script setup >

defineProps({
name: "Thiago",
});

const emit = defineEmits(['customChange'])
const handleChange = (event) => {
  emit('customChange', event.target.value)
}


</script>




<template>
  <div class="form-group">
    <div class="col-xs-6">
      <label for="first_name">
        <h4>Nome completo</h4>
      </label>
      <input type="text" class="form-control" name="first_name" id="first_name" placeholder="first name"
        title="enter your first name if any."  @input="handleChange"/>
    </div>
  </div>

</template>

