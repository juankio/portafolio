<template>
    <div class="container mx-auto mt-8">
      <h1 class="text-2xl lg:text-6xl text-center font-extrabold text-white mb-8">Explora Mi Portafolio</h1>
      <div class="grid grid-cols-1 gap-8 p-10 md:grid-cols-2 lg:grid-cols-3 mx-auto">
        <!-- En pantallas medianas y grandes -->
        <div v-if="!tamano" class="bg-app bg-cover text-white p-3 rounded-lg shadow-md flex col-span-2 border-4 border-solid border-white">
          <quiensomos />
        </div>
        <!-- En pantallas pequeñas -->
        <div v-else class="bg-app bg-cover text-white p-3 rounded-lg shadow-md border-4 border-solid border-white">
          <quiensomos />
        </div>
        
        <!-- Los otros elementos aquí -->
  
        <div class="bg-app bg-cover text-white p-3 rounded-lg shadow-md border-4 border-solid border-white">
          <habilidades/>
        </div>
        <div class="bg-app bg-cover text-white p-3 rounded-lg shadow-md border-4 border-solid border-white">
          <conocimiento/>
        </div>
        <div class="bg-app bg-cover text-white p-3 rounded-lg shadow-md border-4 border-solid border-white">
          <proyectos/>
        </div>
        <div v-if="!tamano"  class="text-white grid grid-cols-2 grid-rows-3 gap-8">
          <info />
        </div>
        <div  v-else class="bg-app bg-cover text-white pb-10 rounded-lg shadow-md gap-8 ">
          <info/>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import quiensomos from './components/quiensomos.vue';
  import habilidades from './components/habilidades.vue';
  import conocimiento from './components/conocimiento.vue';
  import proyectos from './components/proyectos.vue';
  import info from './components/info.vue';
  
  import { ref, onMounted, onBeforeUnmount } from 'vue';
  
  const tamano = ref(false);
  
  const checkScreenSize = () => {
    tamano.value = window.innerWidth < 768; 
  };
  
  onMounted(() => {
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
  });
  
  onBeforeUnmount(() => {
    window.removeEventListener('resize', checkScreenSize);
  });
  </script>
  