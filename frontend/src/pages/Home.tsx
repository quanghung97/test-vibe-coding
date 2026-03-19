import { ArrowRight, Waves, Asterisk, Radio, Activity } from 'lucide-react';
import LiquidOrb from '../components/LiquidOrb';
import GlassCard from '../components/GlassCard';

const Home = () => {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-white">
      {/* Background Decor - Fluid Atmospheric Orbs */}
      <LiquidOrb className="w-[800px] h-[800px] -top-1/4 -left-1/4" color="var(--color-primary)" />
      <LiquidOrb className="w-[800px] h-[800px] top-1/2 -right-1/4" color="var(--color-secondary)" />
      <LiquidOrb className="w-[400px] h-[400px] bottom-10 left-1/4" color="var(--color-tertiary)" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-secondary/5 rounded-full blur-[200px] pointer-events-none" />

      {/* Hero Section */}
      <section className="pt-52 pb-32 px-10 max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="flex flex-col items-start text-left space-y-10 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full glass border-primary/20 bg-primary/5">
            <Radio size={14} className="text-secondary animate-pulse" />
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-primary">Initialize Protocol — L-X1</span>
          </div>
          
          <h1 className="text-7xl md:text-9xl font-display font-extrabold tracking-[-0.04em] leading-[0.85] italic text-white uppercase">
            THE FLUID <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-[#4facfe] drop-shadow-[0_0_30px_rgba(0,242,254,0.4)]">SANCTUARY</span>
          </h1>
          
          <p className="text-lg md:text-xl text-on-surface/50 max-w-lg font-body leading-relaxed">
            Experience digital immersion through ethereal glass interfaces and organic liquid motion. We build the future of pressurized atmospheric UI.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 pt-4">
            <button className="btn-primary-purple group px-10">
              <span className="flex items-center gap-3 tracking-widest uppercase text-xs">
                Initialize Protocol <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </span>
            </button>
            <button className="btn-glass tracking-widest uppercase text-xs px-10">View Ecosystem</button>
          </div>
        </div>

        {/* Right Column: Luminees Engine Widget */}
        <div className="relative group">
          <GlassCard className="relative p-8 min-h-[420px] flex flex-col justify-between overflow-hidden">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-secondary/30 rounded-full blur-3xl group-hover:scale-110 transition-transform"></div>
            <div className="flex justify-between items-start relative z-10">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center">
                   <Radio size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-xl uppercase tracking-tight">Luminous Engine</h3>
                  <p className="text-on-surface-variant text-sm">Active Layer: 04</p>
                </div>
              </div>
            </div>

            <div className="relative z-10 my-8">
              <div className="h-32 rounded-xl bg-surface-container-low/50 overflow-hidden mb-6 border border-white/5">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXNJ2OJBLD8tOs3_brdQwokD2VMccGQuyaLkWDiSlM8q3T4kTsLJGC2J3-utu28XgehrD9SC1_xooaq_Bd1pQn5HNXxFdncePIw5ARAeAJuDLGCc23h3fZf-1EKEKusy2Q9aNJ1zye9Ai94GA80yMVNSuq-hPl2t9ysFVAR4VcMiX1pRD5OY3eWMYnCVksZx9897vhtdwDZ6SfAVzN3NAA2iB0SesG_ag_ZYoOImpx8FimiuKcwPSXfTpgB2kTXLStmXXBA3s3lW0" 
                  className="w-full h-full object-cover opacity-60"
                  alt="Fluid art"
                />
              </div>
              <div className="flex justify-between items-center text-xs font-bold uppercase tracking-widest text-secondary mb-2">
                 <span>Density Monitor</span>
                 <span>98.2%</span>
              </div>
              <div className="w-full h-1 bg-surface-container-highest rounded-full overflow-hidden">
                 <div className="w-[98.2%] h-full bg-secondary shadow-[0_0_10px_rgba(54,209,249,0.8)]" />
              </div>
            </div>
            
            <div className="flex justify-between items-center text-[10px] text-white/20 tracking-[0.2em] font-bold uppercase relative z-10">
              <span>Sync Status: Persistent</span>
              <Activity size={14} className="text-secondary/50" />
            </div>
          </GlassCard>

          {/* Decorative Stat Box */}
          <div className="absolute -bottom-8 -left-8 glass p-6 rounded-2xl z-30 hidden md:block border-l-4 border-primary animate-fade-in delay-500 shadow-2xl">
             <Activity size={24} className="text-primary mb-2" />
             <div className="font-display font-black text-3xl tracking-tighter">24.5k</div>
             <div className="text-[10px] text-on-surface-variant uppercase font-bold tracking-widest leading-none">Active Instances</div>
          </div>
        </div>
      </section>

      {/* Core Modalities Section */}
      <section className="py-32 px-10 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-12 gap-8 h-auto lg:h-[700px]">
          {/* Card 1: Atmospheric Depth */}
          <GlassCard className="col-span-12 lg:col-span-7 row-span-1 flex flex-col justify-end p-12 overflow-hidden relative group">
             <img 
               src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5ZDEKtqZMGK8twV3uAS-_Ihs_7peTVGmQ0V1o1AXnUBE0_6q_fiK-sjHYMogIHwXq2-FLUfSuZ9S-s8Bu9fcUvhxhWa2YLb7VI80rUHfW1IWltGO0Cf268UTYyk7L5c0aLthT5W_PH63TGHl83skoV54i2FaJHyp_zPr-qYeWFR6GftJkk2hNi7EeRz2vXw5EVp3MFH_otR0Zb2I5CxlRjefbJRx_NsjHjvi1HyNhFWLnqqFtua1tkFnrxPZXhtN-COVIluDpX8Q" 
               className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-105 transition-transform duration-700" 
               alt="Atmospheric Depth" 
             />
             <div className="absolute top-0 right-0 p-8">
               <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 inline-block">Advanced</span>
             </div>
             <div className="relative z-10 max-w-sm">
               <span className="absolute -top-16 -left-16 text-[15rem] font-black text-white/[0.03] font-display italic pointer-events-none select-none">01</span>
               <h2 className="text-4xl font-display font-extrabold mb-6 italic tracking-tight relative z-10 uppercase">ATMOSPHERIC<br/>DEPTH</h2>
               <p className="text-on-surface-variant leading-relaxed font-body relative z-10">
                 Our proprietary stack leverages multi-layered tonal shifts to create visual weight without using outdated drop shadows.
               </p>
             </div>
          </GlassCard>

          {/* Card 2: Viscosity Flow */}
          <GlassCard className="col-span-12 lg:col-span-5 flex flex-col justify-between p-12 relative overflow-hidden group">
             <span className="absolute top-12 right-12 text-7xl font-black text-white/5 font-display italic">02</span>
             <Waves size={32} className="text-secondary relative z-10" />
             <div className="relative z-10">
               <h3 className="text-2xl font-display font-bold mb-4 tracking-tight uppercase text-white">Viscosity <span className="text-secondary font-black">Flow</span></h3>
               <p className="text-sm text-on-surface/50 leading-relaxed max-w-[200px]">
                 Interaction patterns that respond like liquid, providing tactile satisfaction through digital fluid dynamics.
               </p>
             </div>
             <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-secondary to-transparent" />
          </GlassCard>

          {/* Card 3: Editorial Precision */}
          <GlassCard className="col-span-12 lg:col-span-4 flex flex-col justify-between p-12 relative overflow-hidden group">
            <Asterisk size={32} className="text-tertiary animate-spin-slow" />
            <div className="space-y-4">
               <h3 className="text-2xl font-display font-bold tracking-tight uppercase">Editorial <span className="text-tertiary">Precision</span></h3>
               <p className="text-sm text-on-surface/50 leading-relaxed">
                  Bold typography meets industrial clarity for a high-fashion digital presence.
               </p>
               <div className="flex gap-2">
                 <div className="w-2 h-2 rounded-full bg-tertiary" />
                 <div className="w-2 h-2 rounded-full bg-yellow-400" />
                 <div className="w-2 h-2 rounded-full bg-secondary" />
               </div>
            </div>
          </GlassCard>

          {/* Card 4: Unified Interface */}
          <GlassCard className="col-span-12 lg:col-span-8 p-12 flex flex-col md:flex-row items-center gap-8 overflow-hidden group">
             <div className="w-full md:w-1/3 aspect-video md:aspect-square rounded-xl bg-surface-container-low/50 overflow-hidden border border-white/5">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTJC_1Saehg3qLWP9qjf8wl_mgLm8SrKDewfvA7y24oOt9DatSPEDzGtxtsRm83i3UH9asRUAh5R5wTvAID3HkysyM3mp5Pj25XrvskY1D4vUbY7ms1Bi35UYdBquDcxUM-yfaLOKo7G5k0TBTtm5897x-e7N5IVvXwO_jehAgWlwP95OHTI3BwIK_uV908bOc7DDtSNiIZpIGRL00_e80EF5T_O8MKj6qiLxRmDt2SeMCYVW6mp8w2koEJMCZX3UxfyalArzXTYY" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  alt="Unified Interface"
                />
             </div>
             <div className="w-full md:w-2/3">
                <h3 className="text-2xl font-display font-bold mb-3 uppercase tracking-tight">Unified Interface</h3>
                <p className="text-on-surface-variant mb-6 leading-relaxed">
                   A single source of truth for all your fluid assets, synchronized across the entire sanctuary ecosystem.
                </p>
                <div className="flex gap-2">
                   {['REACT', 'WEBGL', 'TS'].map(tag => (
                     <span key={tag} className="px-4 py-2 bg-surface-container-highest rounded-full text-[10px] font-bold tracking-widest border border-white/5">
                        {tag}
                     </span>
                   ))}
                </div>
             </div>
          </GlassCard>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-10 max-w-7xl mx-auto relative z-10">
        <div className="glass-panel group rounded-[3rem] p-24 text-center relative overflow-hidden border border-white/10 shadow-3xl bg-surface-container-low/40">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
          
          <div className="relative space-y-12">
            <h2 className="text-7xl md:text-8xl font-display font-extrabold italic tracking-tighter leading-none">
              Ready to <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20">submerge?</span>
            </h2>
            <p className="text-xl text-on-surface-variant max-w-2xl mx-auto font-body">
              Join over 12,000 creators who have transitioned to the liquid architecture. Secure your spot in the sanctuary today.
            </p>
            <div className="pt-8">
              <button className="bg-gradient-to-br from-secondary to-secondary-container text-background px-16 py-6 rounded-2xl text-lg font-black shadow-2xl shadow-secondary/20 hover:scale-105 active:scale-95 transition-all uppercase tracking-widest">
                Initialize Instant Access
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
