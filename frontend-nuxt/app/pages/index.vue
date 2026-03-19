<template>
  <div class="space-y-32">
    <!-- Hero Section -->
    <section id="hero" class="relative py-24 md:py-48 text-center flex flex-col items-center">
      <div class="absolute -top-48 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-cyan-500/10 blur-[160px] rounded-full pointer-events-none -z-10"></div>
      
      <div class="max-w-4xl mx-auto space-y-12">
        <h1 class="text-7xl md:text-9xl font-bold tracking-tighter leading-none liquid-text py-4">
          The Fluid Sanctuary
        </h1>
        <p class="text-lg md:text-2xl text-slate-400 font-light leading-relaxed max-w-2xl mx-auto px-6">
          Experience digital immersion through ethereal glass interfaces and organic liquid motion. We build the future of pressurized atmospheric UI.
        </p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-6 pt-10">
          <button class="btn-liquid text-white text-lg">Submerge Now</button>
          <button class="px-10 py-3 border border-white/10 rounded-full hover:bg-white/5 transition-all text-lg font-medium">Explore Sanctuary</button>
        </div>
      </div>
    </section>

    <!-- Luminous Engine Section -->
    <section id="luminous" class="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8">
      <div class="w-1.5 h-24 bg-gradient-to-b from-transparent via-cyan-400 to-indigo-600 rounded-full animate-pulse opacity-60"></div>
      <h2 class="text-4xl md:text-6xl font-semibold tracking-tight text-white/90">Luminous Engine</h2>
      <div class="flex items-center space-x-4 text-cyan-400 font-mono text-sm tracking-widest uppercase py-4 border-y border-white/5 w-full justify-center">
        <span>Status: Synchronized</span>
        <span class="w-2 h-2 rounded-full bg-cyan-400"></span>
        <span>Active Layer: 04</span>
      </div>
    </section>

    <!-- Core Modalities Grid -->
    <section id="modalities" class="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto px-6">
      <GlassCard>
        <template #icon>
          <svg class="w-10 h-10 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
          </svg>
        </template>
        <template #title>Atmospheric Depth</template>
        <template #content>
          Our proprietary stack leverages multi-layered tonal shifts to create visual weight without using outdated drop shadows. Immerse yourself in a pressurized visual environment.
        </template>
      </GlassCard>

      <GlassCard>
        <template #icon>
          <svg class="w-10 h-10 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M20.893 13.393l-1.135-1.135a2.252 2.252 0 01-.421-.585c-.083-.19-.112-.39-.089-.593l.115-1.04a2.25 2.25 0 00-2.31-2.493l-1.033.404a2.25 2.25 0 01-.649.07c-.201-.013-.4-.058-.585-.133l-.865-.347a2.25 2.25 0 00-2.14.3l-.715.485a2.25 2.25 0 01-.555.265c-.198.058-.405.088-.613.088l-1.01-.005a2.25 2.25 0 00-2.222 1.772l-.377 1.05a2.25 2.25 0 01-.264.556c-.12.18-.276.335-.458.455l-.715.486a2.25 2.25 0 00-.3 2.14l.347.865c.075.185.12.384.133.585a2.25 2.25 0 01-.07.649l-.404 1.033a2.25 2.25 0 002.493 2.31l1.04-.115c.202-.023.403.006.593.089a2.25 2.25 0 01.585.421l1.135 1.135a2.25 2.25 0 003.182 0l1.135-1.135a2.25 2.25 0 01.585-.421c.19-.083.39-.112.593-.089l1.04.115a2.25 2.25 0 002.493-2.31l-.404-1.033a2.25 2.25 0 01-.07-.649c.013-.201.058-.4.133-.585l.347-.865a2.25 2.25 0 00-.3-2.14l-.485-.715a2.25 2.25 0 01-.265-.555c-.058-.198-.088-.405-.088-.613l.005-1.01a2.25 2.25 0 00-1.772-2.222l-1.05-.377a2.25 2.25 0 01-.556-.264 2.25 2.25 0 01-.455-.458l-.486-.715a2.25 2.25 0 00-2.14-.3l-.865.347c-.185.075-.384.12-.585.133a2.25 2.25 0 01-.649-.07l-1.033-.404a2.25 2.25 0 00-2.31 2.493l.115 1.04c.023.202-.006.403-.089.593a2.251 2.251 0 01-.421.585l-1.135 1.135a2.25 2.25 0 000 3.182l1.135 1.135a2.25 2.25 0 01.421.585c.083.19.112.39.089.593l-.115 1.04a2.25 2.25 0 002.31 2.493l1.033-.404a2.25 2.25 0 01.649-.07c.201.013.4.058.585.133l.865.347a2.25 2.25 0 002.14-.3l.715-.485a2.25 2.25 0 01.555-.265c.198-.058.405-.088.613-.088l1.01.005a2.25 2.25 0 002.222-1.772l.377-1.05a2.25 2.25 0 01.264-.556c.12-.136.276-.335.458-.455l.715-.486a2.25 2.25 0 00.3-2.14l-.347-.865c-.075-.185-.12-.384-.133-.585a2.25 2.25 0 01.07-.649l.404-1.033a2.25 2.25 0 00-2.493-2.31l-1.04.115c-.202.023-.403-.006-.593-.089a2.25 2.25 0 01-.585-.421l-1.135-1.135z" />
          </svg>
        </template>
        <template #title>Viscosity Flow</template>
        <template #content>
          Interaction patterns that respond like liquid, providing tactile satisfaction through digital fluid dynamics. Experience interfaces that flow around your touch.
        </template>
      </GlassCard>

      <GlassCard>
        <template #icon>
          <svg class="w-10 h-10 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
        </template>
        <template #title>Editorial Precision</template>
        <template #content>
          Bold typography meets industrial clarity for a high-fashion digital presence. We curate every pixel with the precision of a high-end editorial publication.
        </template>
      </GlassCard>

      <GlassCard>
        <template #icon>
          <svg class="w-10 h-10 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
          </svg>
        </template>
        <template #title>Unified Interface</template>
        <template #content>
          A single source of truth for all your fluid assets, synchronized across the entire sanctuary ecosystem. Consistent motion and design language everywhere.
        </template>
      </GlassCard>
    </section>

    <!-- Call to Action Section -->
    <section id="cta" class="relative max-w-5xl mx-auto px-6 py-24 mb-32 overflow-hidden rounded-[3rem]">
      <div class="absolute inset-0 bg-blue-600 animate-pulse opacity-10 blur-[80px]"></div>
      <div class="glass-card flex flex-col items-center text-center space-y-10 relative z-10 border-white/20">
        <h2 class="text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight">
          Ready to submerge?
        </h2>
        <p class="text-lg md:text-xl text-slate-300 font-light max-w-2xl px-4">
          Join over 12,000 creators who have transitioned to the liquid architecture. Secure your spot in the sanctuary today.
        </p>
        <div class="pt-6">
          <button class="btn-liquid text-white px-16 text-xl">Get Started</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// Page specific logic
</script>
