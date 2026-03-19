<template>
  <div class="glass-card hover:scale-[1.02] transition-transform duration-500 cursor-default group relative overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
    <div class="relative z-10">
      <div v-if="$slots.icon" class="mb-6 p-3 bg-white/5 w-fit rounded-2xl border border-white/5">
        <slot name="icon" />
      </div>
      <h3 class="text-2xl font-semibold mb-4 text-white/90 group-hover:text-cyan-400 transition-colors duration-300">
        <slot name="title" />
      </h3>
      <p class="text-slate-400 leading-relaxed font-light group-hover:text-slate-200 transition-colors duration-300">
        <slot name="content" />
      </p>
    </div>
  </div>
</template>
