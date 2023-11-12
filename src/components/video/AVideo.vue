<script setup lang="ts">
import { ref, computed } from 'vue';
export interface VideoProps {
  src: string;
  width?: number | string;
  height?: number | string;
  tabIndex: number;
  muted?: boolean;
  controls?: boolean;
}
const props = withDefaults(defineProps<VideoProps>(), {
  tabIndex: 0,
  width: '100%',
  height: 'auto',
  muted: false,
  controls: false,
});
const emit = defineEmits<{
  audioprocess: [currentTime: number];
  loaded: [elm: HTMLVideoElement];
}>();
const videoElm = ref<HTMLVideoElement | null>(null);
const tabIndex = ref<string>(props.tabIndex.toString());
const src = ref<string>(props.src);
const width = ref<number | string>(props.width);
const height = ref<number | string>(props.height);

const calcStyle = (size: number | string) => {
  if (typeof size === 'number') return `${size}px`;
  return size;
};
const videoStyle = computed(() => {
  const w = calcStyle(width.value);
  const h = calcStyle(height.value);
  return { width: w, height: h };
});

const canvasStyle = computed(() => {
  return { 
    ...videoStyle,
    position: 'relative',
  };
})

const onTimeUpdate = () => {
  if (videoElm.value) {
    emit('audioprocess', videoElm.value.currentTime);
  }
};

const onLoaded = () => {
  if (videoElm.value) emit('loaded', videoElm.value!);
};
</script>

<template>
  <v-card
    v-if="src"
    :width="videoStyle.width"
    :height="videoStyle.height"
    :style="canvasStyle"
    :tabindex="tabIndex"
  >
    <video
      ref="videoElm"
      :controls="controls"
      :muted="muted"
      :style="videoStyle"
      :src="src"
      @loadeddata="onLoaded"
      @timeupdate="onTimeUpdate"
    />
    <slot />
  </v-card>
</template>
