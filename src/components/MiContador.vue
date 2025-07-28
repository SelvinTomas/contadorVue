<template>
  <section>
    <h3>Número: {{ contador }}</h3>
    <h3>Cuandrado del número: {{ cuadradoContador }}</h3>
    <!-- <h4>{{ text }}</h4> -->
    <div>
      <button class="btn" @click="contador++">+1</button>
      <button class="btn-secondary" @click="contador--">-1</button>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useContador } from '@/composables/useContador';

const { contador, cuadradoContador } = useContador();
interface Props {
  value: number;
  text: string;
}
// const props = defineProps<Props>();
</script>
