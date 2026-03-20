import React from 'react';
import { Mail, MapPin, AtSign, Globe, Share2, Send } from 'lucide-react';
import LiquidOrb from '../components/LiquidOrb';
import GlassCard from '../components/GlassCard';
import { contactData } from '../data/mockData';

const Contact: React.FC = () => {
  const { hero, details, socials, form, decorationImage } = contactData;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Mail': return <Mail className="w-6 h-6" />;
      case 'MapPin': return <MapPin className="w-6 h-6" />;
      case 'AtSign': return <AtSign className="w-4 h-4" />;
      case 'Globe': return <Globe className="w-4 h-4" />;
      case 'Share2': return <Share2 className="w-4 h-4" />;
      case 'Send': return <Send className="w-5 h-5" />;
      default: return null;
    }
  };

  return (
    <main className="relative pt-32 pb-24 min-h-screen bg-background overflow-hidden">
      {/* Background Decor - Fluid Atmospheric Orbs */}
      <LiquidOrb className="w-[600px] h-[600px] -top-[10%] -left-[10%]" color="var(--color-primary)" />
      <LiquidOrb className="w-[500px] h-[500px] -bottom-[10%] -right-[5%]" color="var(--color-secondary)" />
      <LiquidOrb className="w-[400px] h-[400px] top-[40%] right-[20%]" color="var(--color-tertiary)" />
      
      <div className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start z-10">
        {/* Left Side: Editorial Content */}
        <div className="lg:col-span-5 space-y-8 animate-fade-in">
          <div className="space-y-4">
            <span className="text-secondary font-display font-bold tracking-[0.3em] uppercase text-xs px-4 py-1 rounded-full bg-secondary/10 border border-secondary/20 inline-block">
              {hero.badge}
            </span>
            <h1 className="text-5xl lg:text-7xl font-display font-black text-white leading-tight tracking-tighter uppercase italic">
              {hero.title.part1}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary drop-shadow-[0_0_20px_rgba(219,144,255,0.3)]">
                {hero.title.highlight}
              </span>
            </h1>
            <p className="text-on-surface-variant text-lg max-w-md leading-relaxed font-body">
              {hero.description}
            </p>
          </div>

          {/* Contact Details Cards */}
          <div className="grid gap-4">
            {details.map((detail, idx) => (
              <div 
                key={idx}
                className="glass p-6 rounded-2xl flex items-center gap-4 group hover:bg-surface-container-highest/40 transition-all duration-500 cursor-pointer"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-all duration-500">
                  {getIcon(detail.icon)}
                </div>
                <div>
                  <p className="text-[10px] font-display font-bold text-on-surface-variant uppercase tracking-[0.2em]">{detail.label}</p>
                  <p className="text-white font-medium">{detail.value}</p>
                </div>
              </div>
            ))}

            <div className="flex gap-4 pt-4">
              {socials.map((social, idx) => (
                <a 
                  key={idx}
                  href={social.href}
                  className={`w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-${social.color} transition-all duration-500 group`}
                >
                  <div className="group-hover:text-on-surface">
                    {getIcon(social.icon)}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="lg:col-span-7 relative animate-fade-in-up">
          {/* Decorative Blobs within the form area */}
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-primary/20 rounded-full blur-[100px] pointer-events-none"></div>
          
          <GlassCard className="p-8 md:p-12 rounded-[2rem] space-y-8 relative z-10 bg-surface-container-low/40 border-white/5">
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                {form.inputs.map((input, idx) => (
                  <div key={idx} className="space-y-2">
                    <label className="font-display font-bold text-xs text-on-surface-variant ml-1 uppercase tracking-widest">{input.label}</label>
                    <input 
                      className="w-full bg-surface-container-highest/40 border border-white/5 rounded-xl px-4 py-4 text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:border-primary/50 transition-all" 
                      placeholder={input.placeholder} 
                      type={input.type} 
                    />
                  </div>
                ))}
              </div>
              
              <div className="space-y-2">
                <label className="font-display font-bold text-xs text-on-surface-variant ml-1 uppercase tracking-widest">{form.subject.label}</label>
                <select className="w-full bg-surface-container-highest/40 border border-white/5 rounded-xl px-4 py-4 text-on-surface focus:outline-none focus:border-primary/50 transition-all appearance-none cursor-pointer">
                  {form.subject.options.map((opt, idx) => (
                    <option key={idx} className="bg-surface-container-highest text-on-surface">{opt}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className="font-display font-bold text-xs text-on-surface-variant ml-1 uppercase tracking-widest">{form.message.label}</label>
                <textarea 
                  className="w-full bg-surface-container-highest/40 border border-white/5 rounded-xl px-4 py-4 text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:border-primary/50 transition-all resize-none" 
                  placeholder={form.message.placeholder} 
                  rows={5}
                ></textarea>
              </div>

              <button className="w-full py-5 rounded-2xl bg-gradient-to-r from-primary to-primary-container text-on-primary font-display font-black text-sm uppercase tracking-[0.2em] hover:shadow-[0_0_40px_rgba(219,144,255,0.4)] hover:-translate-y-1 transition-all duration-500 flex items-center justify-center gap-3 group">
                {form.button.text}
                <div className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500">
                  {getIcon(form.button.icon)}
                </div>
              </button>
            </form>
          </GlassCard>

          {/* Image Offset Decoration */}
          <div className="absolute -bottom-10 -left-10 hidden md:block w-48 h-48 rounded-[2rem] overflow-hidden border-4 border-surface-container-high shadow-2xl z-20 rotate-6 group transition-transform duration-700 hover:rotate-0">
            <img 
              alt={decorationImage.alt} 
              className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700" 
              src={decorationImage.url} 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container-highest/60 to-transparent"></div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
