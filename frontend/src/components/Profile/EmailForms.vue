<script setup >

const emit = defineEmits(['customChange'])
const handleChange = (event) => {
  emit('customChange', event.target.value)
}

</script>
<template>
  <div class="form-group">
    <div class="col-xs-6">
      <label for="email">
        <h4>Email</h4>
      </label>
      <input type="email" class="form-control" name="email" id="email" placeholder="you@email.com"
        title="enter your email." @input="handleChange"/>
    </div>
  </div>
</template>