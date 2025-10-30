import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield, Headphones, Wrench, Database, Wifi } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ServicesSection = () => {
  const handleEmailClick = (subject) => {
    window.location.href = `mailto:info@sebastianobiscuso.it?subject=${encodeURIComponent(subject)}`;
  };

  const services = [
    {
      icon: Zap,
      title: "Interventi Rapidi",
      description: "Risoluzione veloce di problemi urgenti con tempi di risposta ridotti al minimo.",
      features: [
        "Diagnosi immediata",
        "Riparazione in giornata",
        "Supporto d'emergenza",
        "Assistenza remota"
      ],
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: Shield,
      title: "Assistenza Professionale",
      description: "Supporto tecnico completo con garanzia di qualità e professionalità.",
      features: [
        "Tecnici certificati",
        "Garanzia sui lavori",
        "Ricambi originali",
        "Documentazione completa"
      ],
      color: "from-green-400 to-blue-500"
    },
    {
      icon: Headphones,
      title: "Consulenza Informatica",
      description: "Consigli esperti per ottimizzare la tua infrastruttura IT e migliorare l'efficienza.",
      features: [
        "Analisi dei sistemi",
        "Pianificazione IT",
        "Ottimizzazione performance",
        "Formazione utenti"
      ],
      color: "from-purple-400 to-pink-500"
    }
  ];

  const additionalServices = [
    {
      icon: Wrench,
      title: "Riparazione Hardware",
      description: "Riparazione di computer, laptop, stampanti e periferiche"
    },
    {
      icon: Database,
      title: "Recupero Dati",
      description: "Recupero di file e documenti da dispositivi danneggiati"
    },
    {
      icon: Wifi,
      title: "Configurazione Reti",
      description: "Setup e ottimizzazione di reti domestiche e aziendali"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            I Nostri Servizi
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Soluzioni complete per ogni esigenza informatica, 
            dalla riparazione hardware alla consulenza strategica
          </p>
        </motion.div>

        {/* Main Services */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="service-card rounded-2xl p-8 text-center group"
            >
              <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${service.color} rounded-full mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">
                {service.title}
              </h3>
              
              <p className="text-white/80 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3 text-white/70">
                    <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></div>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                onClick={() => handleEmailClick(`Richiesta informazioni su: ${service.title}`)}
                className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-lg transition-all duration-300"
              >
                Scopri di Più
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Additional Services */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass-effect rounded-2xl p-8"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Altri Servizi Disponibili
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group cursor-pointer"
                onClick={() => handleEmailClick(`Richiesta informazioni su: ${service.title}`)}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                  {service.title}
                </h4>
                <p className="text-white/70 text-sm">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              onClick={() => handleEmailClick('Richiesta Preventivo Gratuito')}
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold px-8 py-4 text-lg rounded-full shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Richiedi Preventivo Gratuito
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;