<template>
  <h1>Contador</h1>
  <hr />
  <h1 class="h1">Hello world!</h1>
  <MiContador :value="1" text="Hola mundo" />
  <!-- <MiContadorScript :value="2" text="Desde script" />
  <MiContadorScript2 :value="3" text="Desde script2" /> -->
  <hr />
  <h1>Indecision App</h1>
  <hr />
  <IndecisionVue />
  <hr />
  <footer class="text-center">Derechos reservados - Selvin Tomás - Aprendiendo VUE</footer>
</template>

<script lang="ts" setup>
import MiContador from './components/contador/MiContador.vue';

// import MiContadorScript from './components/contador/MiContadorScript.vue';
// import MiContadorScript2 from './components/MiContadorScript2.vue';
import IndecisionVue from './views/IndecisionVue.vue';
</script>
