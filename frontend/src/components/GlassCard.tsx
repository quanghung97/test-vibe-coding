

const GlassCard = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
  return (
    <div className={`glass p-8 rounded-[2rem] hover:bg-white/10 transition-all duration-500 group ${className}`}>
      {children}
    </div>
  );
};

export default GlassCard;
