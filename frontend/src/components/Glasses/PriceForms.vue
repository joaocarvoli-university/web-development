<script setup >

const emit = defineEmits(['customChange'])
const handleChange = (event) => {
    emit('customChange', event.target.value)
}

</script>
<template>
    <div class="form-group">
        <div class="col-xs-6">
            <label for="price">
                <h4>Preço</h4>
            </label>
            <input type="number" class="form-control" name="price" id="price" 
                title="enter glass price." @input="handleChange" placeholder="R$ 350,00"/>
        </div>
    </div>
</template>