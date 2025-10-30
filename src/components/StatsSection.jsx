import React from 'react';
import { motion } from 'framer-motion';
import { Users, CheckCircle, Calendar, TrendingUp } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    {
      icon: TrendingUp,
      number: "70%",
      label: "delle persone ha bisogno di assistenza informatica",
      description: "La maggior parte degli utenti necessita di supporto tecnico"
    },
    {
      icon: CheckCircle,
      number: "5000+",
      label: "problemi risolti con successo",
      description: "Clienti soddisfatti in tutta Italia"
    },
    {
      icon: Calendar,
      number: "15",
      label: "anni di esperienza nel settore",
      description: "Competenza consolidata e affidabilità garantita"
    },
    {
      icon: Users,
      number: "100%",
      label: "soddisfazione clienti",
      description: "Assistenza personalizzata e soluzioni efficaci"
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
            Numeri che Parlano Chiaro
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            La nostra esperienza e i risultati ottenuti dimostrano l'affidabilità 
            e la qualità del nostro servizio di assistenza informatica
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="stats-card rounded-2xl p-8 text-center hover:scale-105 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mb-6">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                viewport={{ once: true }}
                className="mb-4"
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <h3 className="text-lg font-semibold text-white/90 mb-2">
                  {stat.label}
                </h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  {stat.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glass-effect rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Perché Scegliere AI Assistenza Informatica?
            </h3>
            <p className="text-white/80 text-lg leading-relaxed">
              Con <span className="font-semibold text-yellow-300">oltre 13 anni di esperienza</span> nel settore, 
              Sebastiano Biscuso ha risolto migliaia di problemi informatici, 
              guadagnandosi la fiducia di clienti privati e aziende. 
              La nostra missione è fornire soluzioni rapide, efficaci e personalizzate 
              per ogni esigenza tecnologica.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;