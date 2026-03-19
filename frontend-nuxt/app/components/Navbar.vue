<template>
  <nav class="sticky top-6 z-50 px-6 py-4 mx-auto max-w-6xl">
    <div class="bg-slate-900/60 backdrop-blur-xl border border-white/5 rounded-full flex items-center justify-between px-8 py-3 shadow-2xl">
      <div class="flex items-center space-x-2">
        <div class="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-400 to-indigo-600 animate-pulse"></div>
        <span class="text-xl font-bold tracking-tight text-white hover:text-cyan-400 cursor-pointer transition-colors duration-300">
          Liquid Ether
        </span>
      </div>
      
      <div class="hidden md:flex items-center space-x-10 text-sm font-medium tracking-wide">
        <NuxtLink to="/" class="hover:text-cyan-400 transition-colors uppercase">Home</NuxtLink>
        <NuxtLink to="/services" class="hover:text-cyan-400 transition-colors uppercase opacity-70">Services</NuxtLink>
        <NuxtLink to="/about" class="hover:text-cyan-400 transition-colors uppercase opacity-70">About</NuxtLink>
        <NuxtLink to="/contact" class="hover:text-cyan-400 transition-colors uppercase opacity-70">Contact</NuxtLink>
      </div>

      <button class="bg-white/5 hover:bg-white/10 px-6 py-2 rounded-full border border-white/10 text-sm font-semibold transition-all">
        Enter Sanctuary
      </button>
    </div>
  </nav>
</template>
