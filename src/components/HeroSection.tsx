import { Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="hero-bg relative w-full min-h-screen overflow-hidden">
      
      {/* Navbar */}
      <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-5">
        <div className="flex items-center">
          <Zap className="w-5 h-5 md:w-6 md:h-6 text-foreground fill-foreground" strokeWidth={0} />
        </div>
        <div className="flex items-center gap-6 md:gap-10">
          <a href="#" className="nav-link">HOME</a>
          <a href="#" className="nav-link">PRODUCT</a>
          <a href="#" className="nav-link hidden md:block">COMPANY</a>
          <a href="#" className="nav-link">CONTACT</a>
        </div>
      </nav>

      {/* Background CHARGING Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <h1 className="gradient-text text-[20vw] md:text-[18vw] font-bold tracking-tight leading-none whitespace-nowrap">
          CHARGING
        </h1>
      </div>

      {/* Content Layer */}
      <div className="relative z-10 h-screen">
        
        {/* Fast and Secure Text - Left Side */}
        <div className="absolute left-6 md:left-12 top-[32%] z-20">
          <p className="italic-heading text-xl md:text-3xl">Fast and Secure</p>
        </div>

        {/* Center Image Area */}
        <div className="absolute inset-0 flex items-center justify-center pt-16">
          <img 
            src="/images/charger.png" 
            alt="SK Signet EV Charging Station" 
            className="max-h-[90%] max-w-full object-contain"
          />
        </div>

        {/* SK Signet Label */}
        <div className="absolute left-[8%] md:left-[30%] bottom-[18%] md:bottom-[22%] z-20">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-foreground/70"></div>
            <div className="w-12 md:w-16 h-px bg-foreground/40 rotate-[-25deg] origin-left"></div>
          </div>
          <div className="mt-3">
            <h3 className="text-foreground font-semibold text-base md:text-lg">SK Signet</h3>
            <p className="text-foreground/50 text-[9px] md:text-[10px] mt-1 leading-relaxed max-w-[140px]">
              Output Power: 60DC+22/42KW<br/>
              120DC+22/42KW 360DC+22/42KW<br/>
              Outlet: Double/Triple-outlet
            </p>
          </div>
        </div>

        {/* Right Side Description */}
        <div className="absolute right-6 md:right-12 bottom-[18%] md:bottom-[22%] z-20 max-w-[200px] md:max-w-[260px] text-right">
          <p className="text-foreground/70 text-xs md:text-sm leading-relaxed italic font-light">
            Be part of the transformation electric vehicles 
            via partnership for the provision of Filling 
            Stations Public Electric Vehicles
          </p>
        </div>

      </div>

      {/* Bottom Notch/Curve */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-30">
        <svg width="180" height="45" viewBox="0 0 180 45" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M0 45V0H55C55 0 65 0 75 20C85 40 90 42 90 42C90 42 95 40 105 20C115 0 125 0 125 0H180V45H0Z" 
            fill="white"
          />
        </svg>
      </div>

    </section>
  );
};

export default HeroSection;
