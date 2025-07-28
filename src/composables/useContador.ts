import { computed, ref } from 'vue';
export const useContador = (valorInicial: number = 5) => {
  const contador = ref(valorInicial);
  const cuadradoContador = computed(() => contador.value * contador.value);

  return {
    contador,
    cuadradoContador,
  };
};
