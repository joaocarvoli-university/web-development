<script setup>
  import 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js'
  import DropList from './NavBar/DropList.vue'
  import PageOptions from './NavBar/PageOptions.vue'
  import SearchBar from './NavBar/SearchBar.vue'
  import Logo from './NavBar/Logo.vue'
</script>

<template>
  <head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" rel="stylesheet">
  </head>
  
  <div class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <Logo></Logo>
      <div class="navbar-collapse"> <!--collapse impede a renderização-->
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item dropdown">
            <PageOptions></PageOptions>
            <DropList></DropList>
          </li>
        </ul>
        <SearchBar></SearchBar>
      </div>
    </div>
  </div>
</template>

<style>
nav {
  font-family: 'Poppins';
  border-bottom: 2px solid #FF0011;
}

#titlle {
  color: #FF0011;
  display: inline-block;
  align-items: left;
}

.navbar-brands {
  display: inline-block;
  align-items: left;
}

li a:hover {
  text-decoration: 2px underline #FF0011;

}

.products {
  margin-left: 550px;
}

.dropdown-menu {
  display: flex;
}

.actions {
  margin-left: 920px;
}
</style>