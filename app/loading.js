export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#2E3523]">
      <div className="relative w-24 h-24 md:w-28 md:h-28 mb-8 animate-pulse flex justify-center items-center">
        <div 
          className="w-full h-full bg-[#C29A56]"
          style={{
            WebkitMaskImage: "url('/logo.png')",
            WebkitMaskSize: "contain",
            WebkitMaskRepeat: "no-repeat",
            WebkitMaskPosition: "center",
            maskImage: "url('/logo.png')",
            maskSize: "contain",
            maskRepeat: "no-repeat",
            maskPosition: "center",
          }}
        />
      </div>
      <div className="text-[#C29A56] font-inter text-[10px] md:text-xs uppercase tracking-[0.3em] animate-pulse opacity-80">
        Preparando Invitación
      </div>
    </div>
  );
}
