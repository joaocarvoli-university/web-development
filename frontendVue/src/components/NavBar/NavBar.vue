<script setup>
  import 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js'
  import DropList from './DropList.vue'
  import PageOptions from './PageOptions.vue'
  import SearchBar from './SearchBar.vue'
  import Logo from './Logo.vue'
</script>

<template>
  <head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
  </head>
  
  <div class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <Logo></Logo>
      <div class="navbar-collapse"> <!--collapse impede a renderização-->
        <ul>
          <PageOptions></PageOptions>
          <DropList></DropList>
        </ul>
        <SearchBar></SearchBar>
      </div>
    </div>
  </div>
  <DropList></DropList>
</template>

<style>

</style>