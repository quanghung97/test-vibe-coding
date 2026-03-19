import { Twitter, Instagram, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-20 px-10 bg-[#050811] relative z-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="text-xl font-display font-extrabold tracking-[-0.05em] text-white">
            LIQUID <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary uppercase">Ether</span>
          </div>
          <p className="text-white/30 text-[11px] uppercase tracking-widest leading-loose text-center md:text-left">
            © 2024 Liquid Ether. The Fluid Sanctuary.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-20">
           <div className="flex gap-8 text-[11px] font-bold uppercase tracking-widest text-white/40">
             {['Privacy Policy', 'Terms of Service', 'Cookies'].map((item) => (
               <a key={item} href="#" className="hover:text-primary flex items-center gap-1 transition-colors group">
                 {item}
               </a>
             ))}
           </div>
           
           <div className="flex gap-4">
              {[Twitter, Instagram, Github].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 transition-all">
                  <Icon size={18} />
                </a>
              ))}
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
