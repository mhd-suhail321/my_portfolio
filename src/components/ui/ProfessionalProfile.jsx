import React from "react";
// 1. IMPORT THE IMAGE
import profileImg from "../../assets/profile.jpeg"; 

const ProfessionalProfile = () => {
  return (
    <div className="relative group w-[300px] h-[350px] md:w-[350px] md:h-[400px]">
      
      {/* 1. THE MOVING GRADIENT BORDER */}
      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 opacity-75 blur-lg group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
      
      {/* 2. MAIN IMAGE CONTAINER */}
      <div className="relative h-full w-full bg-zinc-950 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
        
        {/* Photo */}
        <img
          src={profileImg} // <--- 2. USE THE IMPORT VARIABLE
          alt="Mohamed Suhail Afreeth"
          className="w-full h-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-105 group-hover:opacity-100"
        />

        {/* 3. SUBTLE OVERLAY */}
        <div className="absolute bottom-0 inset-x-0 h-1/3 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
          <div className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
            <p className="text-cyan-400 text-xs font-bold tracking-widest uppercase mb-1">
              Developer
            </p>
            <div className="h-0.5 w-12 bg-white/30 rounded-full"></div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProfessionalProfile;