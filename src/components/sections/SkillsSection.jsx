import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, Globe, Database, Terminal, Cpu, BrainCircuit, 
  Trophy, ExternalLink, Target, Layout, Server, Wrench, GitBranch,
  BarChart3, Table, FileCode 
} from 'lucide-react';

const SkillsSection = () => {
  
  // 1. LEFT SIDE DATA
  const problemSolvingStats = [
    { 
      name: "LeetCode", 
      stat: "350+ Solved", 
      sub: "Active Solver",
      icon: <img src="https://assets.leetcode.com/users/leetcode/avatar_1568224780.png" alt="LeetCode" className="w-full h-full object-contain rounded-full" />,
      link: "https://leetcode.com/", 
      color: "hover:border-yellow-500/50"
    },
    { 
      name: "Code360", 
      stat: "High Rank", 
      sub: "Coding Ninjas", 
      icon: <Target className="text-orange-500 w-full h-full" />,
      link: "https://www.naukri.com/code360/", 
      color: "hover:border-orange-500/50"
    },
    { 
      name: "HackerRank", 
      stat: "5 Star", 
      sub: "Gold Badge", 
      icon: <img src="https://upload.wikimedia.org/wikipedia/commons/4/40/HackerRank_Icon-1000px.png" alt="HackerRank" className="w-full h-full object-contain" />,
      link: "https://www.hackerrank.com/", 
      color: "hover:border-green-500/50"
    },
  ];

  // 2. RIGHT SIDE DATA
  const techCategories = [
    {
      title: "Languages",
      icon: <Code2 size={20} className="text-blue-400" />,
      skills: [
        { name: "Java", icon: <Code2 size={16} /> },
        { name: "Python", icon: <Terminal size={16} /> }, 
        { name: "JavaScript", icon: <FileCode size={16} /> }
      ]
    },
    {
      title: "Web Technologies",
      icon: <Globe size={20} className="text-cyan-400" />,
      skills: [
        { name: "React.js", icon: <Layout size={16} /> },
        { name: "Node.js", icon: <Server size={16} /> },
        { name: "Spring Boot", icon: <Cpu size={16} /> },
        { name: "Tailwind", icon: <Layout size={16} /> }
      ]
    },
    {
      title: "Database",
      icon: <Database size={20} className="text-purple-400" />,
      skills: [
        { name: "MySQL", icon: <Database size={16} /> },
        { name: "MongoDB", icon: <Database size={16} /> }
      ]
    },
    {
      title: "Tools",
      icon: <Wrench size={20} className="text-pink-400" />,
      skills: [
        { name: "PowerBI", icon: <BarChart3 size={16} /> },
        { name: "Git / GitHub", icon: <GitBranch size={16} /> },
        { name: "Gen AI", icon: <BrainCircuit size={16} /> },
        { name: "Excel", icon: <Table size={16} /> },
        { name: "VS Code", icon: <FileCode size={16} /> }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-black relative">
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Technical <span className="text-indigo-500">Arsenal</span>
          </h2>
          <div className="w-20 h-1 bg-indigo-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 overflow-hidden">
          
          {/* LEFT COLUMN */}
          <motion.div
            initial={{ x: -100, opacity: 0 }} 
            whileInView={{ x: 0, opacity: 1 }} 
            // CHANGED: 'once: false' makes it animate every time you scroll
            viewport={{ once: false, amount: 0.2 }} 
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-4"
          >
            <div className="flex items-center gap-3 mb-2 px-1">
              <Trophy className="text-indigo-400" size={24} />
              <h3 className="text-2xl font-bold text-white">Problem Solving</h3>
            </div>

            {problemSolvingStats.map((item, index) => (
              <a 
                key={index} 
                href={item.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`group relative flex items-center justify-between p-6 rounded-xl bg-zinc-900/50 border border-zinc-800 ${item.color} transition-all duration-300 hover:bg-zinc-900 hover:shadow-lg`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 p-2 bg-white rounded-lg border border-zinc-700 group-hover:scale-110 transition-transform flex items-center justify-center overflow-hidden">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white group-hover:text-indigo-400 transition-colors">
                      {item.name}
                    </h4>
                    <p className="text-zinc-400 text-sm">{item.sub}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="block text-2xl font-black text-white">{item.stat}</span>
                  <ExternalLink size={16} className="ml-auto mt-1 text-zinc-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </a>
            ))}
          </motion.div>

          {/* RIGHT COLUMN */}
          <motion.div
            initial={{ x: 100, opacity: 0 }} 
            whileInView={{ x: 0, opacity: 1 }} 
            // CHANGED: 'once: false' here too
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }} 
            className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-2xl relative group h-full"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500"></div>

            <div className="relative z-10 space-y-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-cyan-500/10 rounded-lg text-cyan-400">
                  <Cpu size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white">Core Technologies</h3>
              </div>

              <div className="space-y-6">
                {techCategories.map((cat, idx) => (
                  <div key={idx}>
                    <div className="flex items-center gap-2 mb-3 text-zinc-400 text-sm font-semibold uppercase tracking-wider">
                      {cat.icon}
                      <span>{cat.title}</span>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {cat.skills.map((skill, sIdx) => (
                        <div 
                          key={sIdx} 
                          className="flex items-center gap-2 px-3 py-2 bg-zinc-950 border border-zinc-800 rounded-lg text-sm font-medium text-zinc-300 hover:text-white hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all cursor-default"
                        >
                          <span className="text-cyan-400">{skill.icon}</span>
                          {skill.name}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default SkillsSection;