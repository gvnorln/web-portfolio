// components/Skills.js
'use client';
import { motion } from 'framer-motion';
import {
  FaReact,
  FaNode,
  FaPython,
  FaDocker,
  FaVuejs,
  FaLinux
} from 'react-icons/fa';
import {
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiLaravel,
  SiMysql,
  SiPostgresql,
  SiKubernetes,
  SiJenkins,
  SiAmazon as SiAws,
  SiTerraform,
  SiAnsible,
  SiGithubactions as SiGithubActions,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiSass,
  SiGo,
  SiMongodb
} from 'react-icons/si';

const iconMap = {
  'React': <FaReact className="text-[#61DAFB]" />, 
  'Next.js': <SiNextdotjs className="text-black dark:text-white" />, 
  'Vue.js': <FaVuejs className="text-[#4FC08D]" />, 
  'Tailwind CSS': <SiTailwindcss className="text-[#06B6D4]" />, 
  'HTML': <SiHtml5 className="text-[#E34F26]" />,
  'CSS': <SiCss3 className="text-[#1572B6]" />,
  'Bootstrap': <SiBootstrap className="text-[#7952B3]" />,
  'SCSS': <SiSass className="text-[#CC6699]" />,
  'Node.js': <FaNode className="text-[#339933]" />, 
  'Express.js': <SiExpress className="text-[#000000] dark:text-[#FFFFFF]" />, 
  'Laravel': <SiLaravel className="text-[#FF2D20]" />, 
  'Python': <FaPython className="text-[#3776AB]" />, 
  'Golang': <SiGo className="text-[#00ADD8]" />,
  'Docker': <FaDocker className="text-[#2496ED]" />, 
  'Kubernetes': <SiKubernetes className="text-[#326CE5]" />, 
  'Linux': <FaLinux className="text-[#FCC624]" />, 
  'AWS': <SiAws className="text-[#FF9900]" />, 
  'Terraform': <SiTerraform className="text-[#7B42BC]" />, 
  'Ansible': <SiAnsible className="text-[#EE0000]" />, 
  'Jenkins': <SiJenkins className="text-[#D24939]" />, 
  'GitHub Actions': <SiGithubActions className="text-[#2088FF]" />, 
  'MySQL': <SiMysql className="text-[#4479A1]" />, 
  'PostgreSQL': <SiPostgresql className="text-[#4169E1]" />,
  'MongoDB': <SiMongodb className="text-[#47A248]" />
};

const skills = [
  { 
    name: 'Frontend', 
    tech: ['React', 'Next.js', 'Vue.js', 'Tailwind CSS', 'HTML', 'CSS', 'Bootstrap', 'SCSS'],
    color: 'from-purple-600/20 to-blue-500/20'
  },
  { 
    name: 'Backend', 
    tech: ['Node.js', 'Express.js', 'Laravel', 'Python', 'Golang'],
    color: 'from-emerald-600/20 to-cyan-500/20'
  },
  { 
    name: 'DevOps', 
    tech: ['Docker', 'Kubernetes', 'Linux', 'AWS', 'Terraform', 'Ansible', 'Jenkins', 'GitHub Actions'],
    color: 'from-orange-600/20 to-amber-500/20'
  },
  { 
    name: 'Database', 
    tech: ['MySQL', 'PostgreSQL', 'MongoDB'],
    color: 'from-pink-600/20 to-rose-500/20'
  }
];

export default function Skills() {
  return (
    <motion.section 
      id="skills" 
      className="py-12 md:py-20 bg-gradient-to-b from-gray-50/50 to-white/50 dark:from-gray-900 dark:to-gray-800 backdrop-blur-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-6xl mx-auto px-4 xl:px-0">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Technical Expertise
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              className="group relative bg-white/80 dark:bg-gray-800/80 p-6 rounded-2xl shadow-xl hover:shadow-2xl backdrop-blur-md border border-gray-100/20 dark:border-gray-700/50 transition-all duration-300 hover:-translate-y-2"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity -z-10`} />
              
              <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white text-center">
                {skill.name}
              </h3>
              
              <div className="flex flex-wrap justify-center gap-3">
                {skill.tech.map((tech, i) => (
                  <motion.div
                    key={i}
                    className="px-3 py-2 bg-white/50 dark:bg-gray-700/50 rounded-xl flex items-center gap-2 text-sm font-medium border border-gray-100/30 dark:border-gray-600/50 backdrop-blur-sm hover:bg-white/80 dark:hover:bg-gray-600/80 transition-all"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span className="text-xl shrink-0">
                      {iconMap[tech]}
                    </span>
                    <span className="text-gray-700 dark:text-gray-300">
                      {tech}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}