

const LiquidOrb = ({ className, color }: { className: string, color: string }) => {
  return (
    <div 
      className={`liquid-orb ${className}`}
      style={{ backgroundColor: color }}
    />
  );
};

export default LiquidOrb;
