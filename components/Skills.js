'use client';
import { memo, useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaReact, FaNode, FaPython, FaDocker, FaVuejs, FaLinux } from 'react-icons/fa';
import {
  SiNextdotjs, SiTailwindcss, SiExpress, SiLaravel, SiMysql, SiPostgresql, SiKubernetes,
  SiJenkins, SiAmazon as SiAws, SiTerraform, SiAnsible, SiGithubactions as SiGithubActions,
  SiHtml5, SiCss3, SiBootstrap, SiSass, SiGo, SiMongodb
} from 'react-icons/si';

const Skills = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const ICON_MAP = useMemo(() => ({
    React: <FaReact className="text-[#61DAFB]" aria-label="React" />,
    'Next.js': <SiNextdotjs className="text-black dark:text-white" aria-label="Next.js" />,
    'Vue.js': <FaVuejs className="text-[#4FC08D]" aria-label="Vue.js" />,
    'Tailwind CSS': <SiTailwindcss className="text-[#06B6D4]" aria-label="Tailwind CSS" />,
    HTML: <SiHtml5 className="text-[#E34F26]" aria-label="HTML" />,
    CSS: <SiCss3 className="text-[#1572B6]" aria-label="CSS" />,
    Bootstrap: <SiBootstrap className="text-[#7952B3]" aria-label="Bootstrap" />,
    SCSS: <SiSass className="text-[#CC6699]" aria-label="SCSS" />,
    'Node.js': <FaNode className="text-[#339933]" aria-label="Node.js" />,
    'Express.js': <SiExpress className="text-black dark:text-white" aria-label="Express.js" />,
    Laravel: <SiLaravel className="text-[#FF2D20]" aria-label="Laravel" />,
    Python: <FaPython className="text-[#3776AB]" aria-label="Python" />,
    Golang: <SiGo className="text-[#00ADD8]" aria-label="Golang" />,
    Docker: <FaDocker className="text-[#2496ED]" aria-label="Docker" />,
    Kubernetes: <SiKubernetes className="text-[#326CE5]" aria-label="Kubernetes" />,
    Linux: <FaLinux className="text-[#FCC624]" aria-label="Linux" />,
    AWS: <SiAws className="text-[#FF9900]" aria-label="AWS" />,
    Terraform: <SiTerraform className="text-[#7B42BC]" aria-label="Terraform" />,
    Ansible: <SiAnsible className="text-[#EE0000]" aria-label="Ansible" />,
    Jenkins: <SiJenkins className="text-[#D24939]" aria-label="Jenkins" />,
    'GitHub Actions': <SiGithubActions className="text-[#2088FF]" aria-label="GitHub Actions" />,
    MySQL: <SiMysql className="text-[#4479A1]" aria-label="MySQL" />,
    PostgreSQL: <SiPostgresql className="text-[#4169E1]" aria-label="PostgreSQL" />,
    MongoDB: <SiMongodb className="text-[#47A248]" aria-label="MongoDB" />
  }), []);

  const skills = useMemo(() => [
    { name: 'Frontend', tech: ['React', 'Next.js', 'Vue.js', 'Tailwind CSS', 'HTML', 'CSS', 'Bootstrap', 'SCSS'], color: 'from-purple-600/20 to-blue-500/20' },
    { name: 'Backend', tech: ['Node.js', 'Express.js', 'Laravel', 'Python', 'Golang'], color: 'from-emerald-600/20 to-cyan-500/20' },
    { name: 'DevOps', tech: ['Docker', 'Kubernetes', 'Linux', 'AWS', 'Terraform', 'Ansible', 'Jenkins', 'GitHub Actions'], color: 'from-orange-600/20 to-amber-500/20' },
    { name: 'Database', tech: ['MySQL', 'PostgreSQL', 'MongoDB'], color: 'from-pink-600/20 to-rose-500/20' }
  ], []);

  return (
    <motion.section
      ref={ref}
      id="skills"
      className="py-12 md:py-20 bg-gradient-to-b from-gray-50/50 to-white/50 dark:from-gray-900 dark:to-gray-800"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto px-4 xl:px-0">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          Technical Expertise
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} iconMap={ICON_MAP} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

const SkillCard = memo(({ skill, iconMap }) => (
  <motion.div
    className="group relative bg-white/80 dark:bg-gray-800/80 p-6 rounded-2xl shadow-xl hover:shadow-2xl border border-gray-100/20 dark:border-gray-700/50 transition-all duration-300 hover:-translate-y-2"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity -z-10`} />
    <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white text-center">{skill.name}</h3>
    <div className="flex flex-wrap justify-center gap-3">
      {skill.tech.map((tech) => (
        <div key={tech} className="px-3 py-2 bg-white/50 dark:bg-gray-700/50 rounded-xl flex items-center gap-2 text-sm font-medium border border-gray-100/30 dark:border-gray-600/50 hover:bg-white/80 dark:hover:bg-gray-600/80 transition-all hover:scale-105">
          <span className="text-xl shrink-0">{iconMap[tech]}</span>
          <span className="text-gray-700 dark:text-gray-300">{tech}</span>
        </div>
      ))}
    </div>
  </motion.div>
));

SkillCard.displayName = "SkillCard";

export default Skills;
