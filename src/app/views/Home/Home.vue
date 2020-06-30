<template>
  <div>
    <main>
      <div class="title" id="title-id">
        <h1>The fun Bot 🍜 that can do serious stuff</h1>
        <p class="text-lg">
          Noodles is an do it all bot of that is for people who want a
          <strong class="text-contrast">highly configurable toolset for discord</strong>.
        </p>

        <p>
          <a class="btn btn-orange-outline" href="#about-id" v-smooth-scroll>Learn More</a>
          <a class="btn btn-orange-outline" href="http://invite.noodles-bot.live/">Add to discord</a>
        </p>
        <hr>
      </div>
      <div class="about" id="about-id">
        <h2>Section 2</h2>
        <a href="#title-id" v-smooth-scroll>Test for smooth scroll</a>
      </div>
    </main>
  </div>
</template>

<script>
import vueSmoothScroll from 'vue2-smooth-scroll'
import Vue from 'vue';
Vue.use(vueSmoothScroll)
export default {
  name: 'Home',

  methods: {
    test: () => {
      console.log('yeet')
    }
  }
}
</script>

<style scoped>
  @import "Home.css";
</style>
