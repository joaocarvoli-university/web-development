<script setup >

const emit = defineEmits(['customChange'])
const handleChange = (event) => {
    emit('customChange', event.target.value)
}

</script>
<template>
    <div class="form-group">
        <div class="col-xs-6">
            <label for="color">
                <h4>Cor</h4>
            </label>
            <input type="text" class="form-control" name="color" id="color" 
                title="enter glass color." @input="handleChange" placeholder="Preto, Vermelho"/>
        </div>
    </div>
</template>