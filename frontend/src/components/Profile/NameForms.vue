<script setup >

defineProps({
name: "Thiago",
});


</script>




<template>
  <div class="form-group">
    <div class="col-xs-6">
      <label for="first_name">
        <h4>First name</h4>
      </label>
      <input type="text" class="form-control" name="first_name" id="first_name" placeholder="first name"
        title="enter your first name if any."  />
    </div>
  </div>
  <div class="form-group">
    <div class="col-xs-6">
      <label for="last_name">
        <h4>Last name</h4>
      </label>
      <input type="text" class="form-control" name="last_name" id="last_name" placeholder="last name"
        title="enter your last name if any." />
    </div>
  </div>
</template>

