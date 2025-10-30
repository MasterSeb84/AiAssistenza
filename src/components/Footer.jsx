import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Computer } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black/20 backdrop-blur-lg border-t border-white/10 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                <Computer className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold text-white">AI Assistenza Informatica</span>
                <p className="text-white/70 text-sm">di Sebastiano Biscuso</p>
              </div>
            </div>
            <p className="text-white/80 leading-relaxed mb-6 max-w-md">
              Con oltre 13 anni di esperienza, offriamo soluzioni informatiche complete 
              per privati e aziende. Assistenza professionale, riparazioni e consulenza IT.
            </p>
            <div className="flex items-center gap-4 text-white/70">
              <span className="text-sm">Seguici:</span>
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                  <span className="text-xs">FB</span>
                </div>
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                  <span className="text-xs">LI</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contatti */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <span className="text-xl font-bold text-white mb-6 block">Contatti</span>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">+39 379 2777396</p>
                  <p className="text-white/70 text-sm">Chiamate e WhatsApp</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">info@sebastianobiscuso.it</p>
                  <p className="text-white/70 text-sm">Email principale</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">Solo su Appuntamento</p>
                  <p className="text-white/70 text-sm">Servizio personalizzato</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Orari e Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="text-xl font-bold text-white mb-6 block">Orari</span>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">Lun - Ven</p>
                  <p className="text-white/70 text-sm">9:00 - 18:00</p>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-white/80 text-sm">
                  <span className="font-medium">Sabato:</span> Su appuntamento
                </p>
                <p className="text-white/80 text-sm">
                  <span className="font-medium">Domenica:</span> Emergenze
                </p>
                <p className="text-white/80 text-sm">
                  <span className="font-medium">Risposta:</span> Entro 24h
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-white/10 mt-12 pt-8 text-center"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/70 text-sm">
              © 2024 AI Assistenza Informatica - Sebastiano Biscuso. Tutti i diritti riservati.
            </p>
            <div className="flex gap-6 text-white/70 text-sm">
              <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
              <span className="hover:text-white cursor-pointer transition-colors">Termini di Servizio</span>
              <span className="hover:text-white cursor-pointer transition-colors">Cookie Policy</span>
            </div>
          </div>
          <p className="text-white/60 text-xs mt-4">
            | Assistenza tecnica informatica professionale dal 2011
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;