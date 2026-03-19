import React from 'react';
import { CheckCircle, Waves, Eye, Leaf, ArrowRight } from 'lucide-react';
import LiquidOrb from '../components/LiquidOrb';
import GlassCard from '../components/GlassCard';
import { aboutUsData } from '../data/mockData';

const AboutUs: React.FC = () => {
  const { hero, philosophies, team, cta } = aboutUsData;

  return (
    <main className="relative pt-32 pb-24 min-h-screen bg-background overflow-hidden">
      {/* Background Decor - Fluid Atmospheric Orbs */}
      <LiquidOrb className="w-[800px] h-[800px] -top-1/4 -left-1/4" color="var(--color-primary)" />
      <LiquidOrb className="w-[800px] h-[800px] top-1/2 -right-1/4" color="var(--color-secondary)" />
      <LiquidOrb className="w-[400px] h-[400px] bottom-10 left-1/4" color="var(--color-tertiary)" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-secondary/5 rounded-full blur-[200px] pointer-events-none" />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-8 mb-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="animate-fade-in">
            <span className="text-secondary font-display font-bold tracking-[0.3em] uppercase text-xs mb-4 block">
              {hero.origin}
            </span>
            <h1 className="text-7xl font-display font-extrabold text-white leading-[1.1] tracking-tighter mb-8 italic uppercase">
              {hero.title.part1}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary drop-shadow-[0_0_20px_rgba(219,144,255,0.3)]">
                {hero.title.highlight}
              </span>
            </h1>
            <p className="text-xl text-on-surface-variant leading-relaxed mb-10 max-w-xl font-body">
              {hero.description}
            </p>
            <div className="flex gap-4">
              <GlassCard className="px-6 py-4 flex items-center gap-4">
                <CheckCircle className="text-primary w-8 h-8" />
                <div>
                  <p className="text-white font-bold">{hero.stats.value}</p>
                  <p className="text-on-surface-variant text-sm">{hero.stats.label}</p>
                </div>
              </GlassCard>
            </div>
          </div>

          <div className="relative group animate-fade-in-up">
            <GlassCard className="aspect-square p-4 rotate-3 transform transition-all duration-700 hover:rotate-0">
               <div className="w-full h-full rounded-xl overflow-hidden bg-surface-container-highest relative">
                <img 
                  src={hero.image.url} 
                  alt={hero.image.alt}
                  className="w-full h-full object-cover opacity-60 mix-blend-luminosity hover:opacity-100 transition-opacity duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-highest via-transparent to-transparent"></div>
              </div>
            </GlassCard>
            
            {/* Asymmetric Floating Element */}
            <div className="absolute -bottom-8 -left-8 z-20">
              <GlassCard className="p-8 max-w-xs shadow-2xl border-l-4 border-secondary">
                <p className="italic text-lg text-white mb-2 leading-tight">"{hero.quote.text}"</p>
                <p className="text-sm font-bold text-secondary uppercase tracking-widest">— {hero.quote.author}</p>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Bento Grid */}
      <section className="max-w-7xl mx-auto px-8 mb-48 relative z-10">
        <h2 className="text-5xl font-display font-black text-white mb-16 text-center italic uppercase tracking-tight">
          {philosophies.title}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto">
          {/* Large Feature */}
          <GlassCard className="md:col-span-8 flex flex-col justify-end p-12 min-h-[400px] group overflow-hidden relative">
            <div className="absolute top-0 right-0 p-8">
               <Waves className="text-primary w-16 h-16 opacity-10 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />
            </div>
            <div className="relative z-10">
              <h3 className="text-3xl font-display font-bold text-white mb-4 uppercase tracking-tight">
                {philosophies.items[0].title}
              </h3>
              <p className="text-on-surface-variant text-lg max-w-lg leading-relaxed">
                {philosophies.items[0].description}
              </p>
            </div>
          </GlassCard>

          {/* Small Vertical */}
          <GlassCard className="md:col-span-4 flex flex-col gap-8 p-12 bg-gradient-to-br from-surface-container-highest/50 to-surface-container-low/50">
            <div className="h-16 w-16 bg-secondary/10 rounded-full flex items-center justify-center border border-secondary/20 shadow-[0_0_20px_rgba(54,209,249,0.2)]">
              <Eye className="text-secondary w-8 h-8" />
            </div>
            <div>
              <h3 className="text-2xl font-display font-bold text-white mb-4 uppercase tracking-tight">
                 {philosophies.items[1].title}
              </h3>
              <p className="text-on-surface-variant leading-relaxed">
                 {philosophies.items[1].description}
              </p>
            </div>
          </GlassCard>

          {/* Small Horizontal */}
          <GlassCard className="md:col-span-5 flex items-center gap-8 p-10">
            <div className="h-12 w-12 bg-tertiary/10 rounded-full flex items-center justify-center border border-tertiary/20">
              <Leaf className="text-tertiary w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-display font-bold text-white uppercase tracking-tight">
                {philosophies.items[2].title}
              </h3>
              <p className="text-sm text-on-surface-variant">
                {philosophies.items[2].description}
              </p>
            </div>
          </GlassCard>

          {/* Interactive Stats */}
          <GlassCard className="md:col-span-7 flex flex-col md:flex-row justify-between items-center p-10 bg-surface-container-high/40">
            {philosophies.stats.map((stat, idx) => (
              <React.Fragment key={stat.label}>
                <div className="text-center md:text-left py-4">
                  <span className={`text-5xl font-display font-black text-${stat.color} tracking-tighter`}>
                    {stat.value}
                  </span>
                  <p className="text-on-surface-variant uppercase tracking-[0.2em] text-[10px] font-bold mt-2">
                    {stat.label}
                  </p>
                </div>
                {idx < philosophies.stats.length - 1 && (
                  <div className="h-px w-full md:h-12 md:w-px bg-white/5" />
                )}
              </React.Fragment>
            ))}
          </GlassCard>
        </div>
      </section>

      {/* Team / Culture */}
      <section className="max-w-7xl mx-auto px-8 mb-48 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl animate-fade-in">
            <h2 className="text-5xl font-display font-black text-white mb-6 leading-tight italic uppercase tracking-tight">
              {team.title}
            </h2>
            <p className="text-on-surface-variant text-lg leading-relaxed">
              {team.description}
            </p>
          </div>
          <button className="btn-glass px-10 py-4 flex items-center gap-3 group">
            <span className="tracking-[0.2em] uppercase text-xs font-bold">Join the Collective</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.members.map((member, idx) => (
            <div key={member.name} className={`group ${idx % 2 !== 0 ? 'md:mt-12' : ''}`}>
              <GlassCard className="aspect-[3/4] overflow-hidden p-0 relative">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-x-0 bottom-0 p-8 pt-16 bg-gradient-to-t from-background via-background/80 to-transparent">
                  <p className="text-white font-display font-bold text-xl mb-1">{member.name}</p>
                  <p className="text-secondary text-xs font-bold uppercase tracking-[0.2em]">{member.role}</p>
                </div>
              </GlassCard>
            </div>
          ))}
        </div>
      </section>

      {/* Vision CTA */}
      <section className="max-w-5xl mx-auto px-8 relative z-10">
        <GlassCard className="p-20 text-center relative overflow-hidden bg-surface-container-low/60 rounded-[3rem]">
          <div className="absolute -top-32 -right-32 w-80 h-80 bg-tertiary/20 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="relative z-10">
            <h2 className="text-6xl font-display font-black text-white mb-8 italic uppercase tracking-tighter">
              {cta.title}
            </h2>
            <p className="text-on-surface-variant text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
              {cta.description}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button className="btn-primary-purple px-12 py-5 shadow-2xl">
                <span className="tracking-[0.2em] uppercase text-sm font-black">Initiate Project</span>
              </button>
              <button className="btn-glass px-12 py-5">
                <span className="tracking-[0.2em] uppercase text-sm font-black text-white">View Showreel</span>
              </button>
            </div>
          </div>
        </GlassCard>
      </section>
    </main>
  );
};

export default AboutUs;
