<script setup>

const emit = defineEmits(['customChange'])
const handleChange = (event) => {
  emit('customChange', event.target.value)
}
</script>


<template>
    <div class="form-group">
        <div class="col-xs-6">
            <label for="phone">
                <h4>telefone</h4>
            </label>
            <input type="text" class="form-control" name="phone" id="phone" placeholder="enter phone"
                title="enter your phone number if any." @input="handleChange" />
        </div>
    </div>
</template>