<template>
  <div class="navbar">
    <nav>
      <div class="nav-wrapper red darken-4">
        <a href="#" data-target="sidenav" class="sidenav-trigger"><i class="material-icons">menu</i></a>
        <router-link to="/" class="brand-logo">CNL</router-link>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li>
            <router-link to="/lien1">Lien 1</router-link>
          </li>
          <li>
            <router-link to="/lien2">Lien 2</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <ul class="sidenav quite-black" id="sidenav" @click="closeSidenav">
      <li>
        <router-link to="/lien1">Lien 1</router-link>
      </li>
      <li>
        <router-link to="/lien2">Lien 2</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    closeSidenav () {
      var sidenav = document.querySelector('.sidenav')
      var instance = M.Sidenav.getInstance(sidenav)
      instance.close()
    }
  }
}
document.addEventListener('DOMContentLoaded', function () {
  var sidenav = document.querySelectorAll('.sidenav')
  M.Sidenav.init(sidenav)
})
</script>

<style scoped>
*
{
  color: #fff !important;
}
.brand-logo {
  margin-left: 15px;
}
li a {
  margin: 0 !important;
  color: #fff !important;
  border: none !important;
}
</style>
