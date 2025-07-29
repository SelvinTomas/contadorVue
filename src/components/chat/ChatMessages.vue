<script setup lang="ts">
import ChatBubble from './ChatBubble.vue';
import { ChatMessage } from '@/interfaces/chat-message.interface';
import { ref, watch, nextTick } from 'vue';

interface Props {
  messages: ChatMessage[];
}

const { messages } = defineProps<Props>();
const chatRef = ref<HTMLDivElement | null>(null);

watch(
  () => messages.length, // Observa cambios en la longitud
  async () => {
    await nextTick(); // Espera a que el DOM se actualice
    chatRef.value?.scrollTo({
      top: chatRef.value.scrollHeight,
      behavior: 'smooth',
    });
  },
);
</script>

<template>
  <div ref="chatRef" class="flex-1 overflow-y-auto p-4">
    <div class="flex flex-col space-y-2">
      <ChatBubble v-for="message in messages" :key="message.id" v-bind="message" />
    </div>
  </div>
</template>
