import { ref, defineComponent, computed } from 'vue';

export default defineComponent({
  props: {
    value: { type: Number, required: true },
  },
  setup(props) {
    const contador = ref(props.value);
    const cuadradoContador = computed(() => contador.value * contador.value);
    return {
      contador,
      cuadradoContador,
    };
  },
});
