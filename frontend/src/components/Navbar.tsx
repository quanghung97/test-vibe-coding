interface NavbarProps {
  currentPage: 'home' | 'about';
  onPageChange: (page: 'home' | 'about') => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onPageChange }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6 bg-transparent">
      <div className="glass px-10 py-3 rounded-full flex items-center gap-12 max-w-7xl w-full justify-between">
        <button 
          onClick={() => onPageChange('home')}
          className="text-xl font-display font-extrabold tracking-[-0.05em] text-white hover:opacity-80 transition-opacity"
        >
          LIQUID <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary bg-opacity-80">ETHER</span>
        </button>
        
        <div className="hidden md:flex items-center gap-10">
          {[
            { label: 'Home', id: 'home' },
            { label: 'Services', id: 'services' },
            { label: 'About', id: 'about' },
            { label: 'Contact', id: 'contact' }
          ].map((item) => (
            <button 
              key={item.id} 
              onClick={() => (item.id === 'home' || item.id === 'about') && onPageChange(item.id as any)}
              className={`text-[13px] font-bold uppercase tracking-widest transition-all hover:text-white relative pb-1 ${
                currentPage === item.id ? 'text-primary' : 'text-on-surface/50'
              }`}
            >
              {item.label}
              {currentPage === item.id && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full shadow-[0_0_10px_rgba(196,113,237,0.5)]" />
              )}
            </button>
          ))}
        </div>

        <button className="btn-primary-purple text-xs tracking-widest uppercase py-2.5 px-6">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
