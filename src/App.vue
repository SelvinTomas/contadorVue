<template>
  <h1>Mi primera app en VUE</h1>
  <hr />
  <h1 class="h1">Hello world!</h1>
  <MiContador :value="1" text="Hola mundo" />
  <MiContadorScript :value="2" text="Desde script" />
  <MiContadorScript2 :value="3" text="Desde script2" />
</template>

<script lang="ts" setup>
import MiContador from './components/MiContador.vue';

import MiContadorScript from './components/MiContadorScript.vue';
import MiContadorScript2 from './components/MiContadorScript2.vue';
</script>
