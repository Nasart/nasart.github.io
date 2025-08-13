import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';
import { projects } from '../data/projects';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiArrowLeft, FiArrowRight, FiExternalLink } = FiIcons;

const ProjectDetail = () => {
  const { id } = useParams();
  const { language, direction } = useLanguage();
  const t = translations[language];
  
  const project = projects.find(p => p.id === parseInt(id));
  
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Project not found</h1>
          <Link to="/" className="text-purple-600 hover:text-purple-700">
            Return to home
          </Link>
        </div>
      </div>
    );
  }

  const BackIcon = direction === 'rtl' ? FiArrowRight : FiArrowLeft;

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-purple-300 hover:text-white transition-colors mb-8"
            >
              <SafeIcon icon={BackIcon} className="w-4 h-4" />
              Back to home
            </Link>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="text-purple-300 text-lg mb-4">
                  {project.category[language]}
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  {project.title[language]}
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  {project.description[language]}
                </p>
                
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-purple-300 text-sm mb-2">{t.projects.role}</div>
                    <div className="text-white font-medium">{project.role[language]}</div>
                  </div>
                  <div>
                    <div className="text-purple-300 text-sm mb-2">{t.projects.duration}</div>
                    <div className="text-white font-medium">{project.duration[language]}</div>
                  </div>
                </div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="relative"
              >
                <img
                  src={project.image}
                  alt={project.title[language]}
                  className="w-full rounded-2xl shadow-2xl"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {/* Tools Used */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{t.projects.tools}</h2>
              <div className="flex flex-wrap gap-3">
                {project.tools.map((tool, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Challenge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">The Challenge</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {project.challenge[language]}
              </p>
            </motion.div>

            {/* Solution */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">The Solution</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {project.solution[language]}
              </p>
            </motion.div>

            {/* Project Images */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Project Gallery</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {project.images.map((image, index) => (
                  <motion.img
                    key={index}
                    src={image}
                    alt={`${project.title[language]} - Image ${index + 1}`}
                    className="w-full rounded-xl shadow-lg"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                    viewport={{ once: true }}
                  />
                ))}
              </div>
            </motion.div>

            {/* Results */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-2xl"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Results & Impact</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {project.results[language]}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Next Project */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              {t.projects.viewAll}
            </h2>
            <Link
              to="/#projects"
              className="inline-flex items-center gap-2 bg-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-purple-700 transition-colors"
            >
              {t.projects.viewAll}
              <SafeIcon icon={FiExternalLink} className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;