import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';
import { projects } from '../data/projects';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiArrowRight, FiArrowLeft } = FiIcons;

const Projects = () => {
  const { language, direction } = useLanguage();
  const t = translations[language];

  const ArrowIcon = direction === 'rtl' ? FiArrowLeft : FiArrowRight;

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t.projects.title}
          </h2>
          <p className="text-xl text-gray-600">
            {t.projects.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title[language]}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6">
                <div className="text-sm text-purple-600 font-medium mb-2">
                  {project.category[language]}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {project.title[language]}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {project.description[language]}
                </p>
                
                <Link
                  to={`/project/${project.id}`}
                  className="inline-flex items-center gap-2 text-purple-600 font-medium hover:text-purple-700 transition-colors group/link"
                >
                  {t.projects.viewProject}
                  <SafeIcon
                    icon={ArrowIcon}
                    className="w-4 h-4 group-hover/link:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;