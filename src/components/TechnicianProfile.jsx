import React from 'react';
import { motion } from 'framer-motion';
import { Award, Star, Users, CheckCircle, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TechnicianProfile = () => {
  const handleContact = () => {
    window.location.href = "mailto:info@sebastianobiscuso.it?subject=Richiesta%20di%20Contatto";
  };
  const achievements = [{
    icon: Award,
    title: "13+ Anni di Esperienza",
    description: "Competenza consolidata nel settore IT"
  }, {
    icon: Users,
    title: "5000+ Clienti Soddisfatti",
    description: "Fiducia guadagnata sul campo"
  }, {
    icon: CheckCircle,
    title: "100% Problemi Risolti",
    description: "Nessun caso irrisolto"
  }, {
    icon: Star,
    title: "Eccellenza Riconosciuta",
    description: "Valutazioni sempre positive"
  }];
  const skills = ["Riparazione Hardware", "Sistemi Operativi", "Reti e Connettività", "Sicurezza Informatica", "Recupero Dati", "Consulenza IT", "Formazione Utenti", "Supporto Remoto"];
  return <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div initial={{
        opacity: 0,
        y: 50
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} viewport={{
        once: true
      }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Il Tuo Tecnico di Fiducia
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Conosci Sebastiano Biscuso, il professionista che si prenderà cura 
            dei tuoi dispositivi e delle tue esigenze informatiche
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image and Info */}
            <motion.div initial={{
            opacity: 0,
            x: -50
          }} whileInView={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.8
          }} viewport={{
            once: true
          }} className="text-center lg:text-left">
              <div className="relative mb-8">
                <div className="w-80 h-80 mx-auto lg:mx-0 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                  <img alt="Sebastiano Biscuso - Tecnico Informatico Esperto" className="w-full h-full object-cover" src="src/assets/images/logo.svg" />
                </div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
              </div>

              <div className="tech-profile rounded-2xl p-8">
                <h3 className="text-3xl font-bold text-white mb-2">
                  Sebastiano Biscuso
                </h3>
                <p className="text-xl text-blue-300 mb-4 font-semibold">
                  Tecnico Informatico Senior
                </p>
                <p className="text-white/80 leading-relaxed mb-6">
                  Con oltre <span className="font-semibold text-yellow-300">13 anni di esperienza</span> nel settore informatico, 
                  Sebastiano ha sviluppato una competenza unica nella risoluzione di problemi complessi 
                  e nella fornitura di soluzioni innovative per privati e aziende.
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {skills.slice(0, 4).map((skill, index) => <span key={index} className="px-3 py-1 bg-white/10 rounded-full text-sm text-white/80 border border-white/20">
                      {skill}
                    </span>)}
                </div>

                <Button onClick={handleContact} className="w-full lg:w-auto bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold px-8 py-3 rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300">
                  Contatta Sebastiano
                </Button>
              </div>
            </motion.div>

            {/* Achievements and Skills */}
            <motion.div initial={{
            opacity: 0,
            x: 50
          }} whileInView={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.8
          }} viewport={{
            once: true
          }} className="space-y-8">
              {/* Achievements */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {achievements.map((achievement, index) => <motion.div key={index} initial={{
                opacity: 0,
                scale: 0.9
              }} whileInView={{
                opacity: 1,
                scale: 1
              }} transition={{
                duration: 0.5,
                delay: index * 0.1
              }} viewport={{
                once: true
              }} className="glass-effect rounded-xl p-6 text-center hover:scale-105 transition-all duration-300">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mb-4">
                      <achievement.icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">
                      {achievement.title}
                    </h4>
                    <p className="text-white/70 text-sm">
                      {achievement.description}
                    </p>
                  </motion.div>)}
              </div>

              {/* All Skills */}
              <div className="glass-effect rounded-2xl p-8">
                <h4 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <Briefcase className="w-6 h-6 text-blue-400" />
                  Competenze Specialistiche
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {skills.map((skill, index) => <motion.div key={index} initial={{
                  opacity: 0,
                  x: -20
                }} whileInView={{
                  opacity: 1,
                  x: 0
                }} transition={{
                  duration: 0.3,
                  delay: index * 0.05
                }} viewport={{
                  once: true
                }} className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300">
                      <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></div>
                      <span className="text-white/80 text-sm font-medium">{skill}</span>
                    </motion.div>)}
                </div>
              </div>

              {/* Quote */}
              <motion.div initial={{
              opacity: 0,
              y: 30
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.8,
              delay: 0.3
            }} viewport={{
              once: true
            }} className="glass-effect rounded-2xl p-8 text-center">
                <div className="text-4xl text-blue-300 mb-4">"</div>
                <p className="text-white/90 text-lg italic leading-relaxed mb-4">
                  La mia missione è rendere la tecnologia accessibile e funzionale per tutti. 
                  Ogni problema è un'opportunità per trovare la soluzione perfetta.
                </p>
                <p className="text-blue-300 font-semibold">
                  - Sebastiano Biscuso
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>;
};
export default TechnicianProfile;
