<template>
  <section id="app" class="hero">
    <!-- Hero header: will stick at the top -->
    <div class="hero-head">
      <header class="nav">
        <div class="container">
          <div class="nav-left">
            <a class="nav-item" href="#">
              HOW2
            </a>
          </div>
        </div>
      </header>
    </div>

    <!-- Hero content: will be in the middle -->
    <div class="hero-body">
      <router-view></router-view>
    </div>

    <!-- Hero footer: will stick at the bottom -->
    <div class="hero-foot">
      <nav class="tabs is-right">
        <ul>
          <li><a href="https://github.com/santinic/how2" target="_blank">how2</a></li>
          <li><a href="https://vuejs.org" target="_blank">Vue</a></li>
        </ul>
      </nav>
    </div>
  </section>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  min-height: 100vh;
}
</style>
