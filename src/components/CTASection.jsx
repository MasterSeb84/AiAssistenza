import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Calendar, Gift, CheckCircle, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const CTASection = () => {
  const handleScrollToBooking = () => {
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      toast({
        title: "Errore di navigazione",
        description: "La sezione di prenotazione non è stata trovata.",
        variant: "destructive",
      });
    }
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/393792777396', '_blank');
  };

  const benefits = [
    {
      icon: Gift,
      title: "Consulenza Gratuita",
      description: "Valutiamo il tuo problema senza impegno e ti offriamo la soluzione migliore.",
    },
    {
      icon: Clock,
      title: "Risposta Rapida",
      description: "Garantiamo un primo contatto entro poche ore per pianificare l'intervento.",
    },
    {
      icon: CheckCircle,
      title: "Risultati Garantiti",
      description: "La nostra esperienza è la tua garanzia di un servizio efficace e duraturo.",
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 cta-section"></div>
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl floating-animation"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-300/5 rounded-full blur-3xl floating-animation" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Pronto a Risolvere i Tuoi
            <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Problemi Informatici?
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Non aspettare che il problema peggiori. Prenota subito la tua 
            <span className="font-semibold text-yellow-300"> consulenza gratuita</span> e 
            scopri come possiamo aiutarti a tornare operativo in tempi record.
          </p>
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {benefit.title}
              </h3>
              <p className="text-white/80">
                {benefit.description}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="glass-effect rounded-3xl p-12 mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Consulenza Gratuita di 30 Minuti
            </h3>
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              Approfitta della nostra offerta speciale: una consulenza completamente gratuita 
              per valutare la tua situazione e fornirti le migliori soluzioni personalizzate. 
              Nessun impegno, solo consigli professionali da parte di Sebastiano Biscuso.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              {/*
              <Button 
                onClick={handleScrollToBooking}
                size="lg" 
                className="bg-white text-purple-700 hover:bg-white/90 font-bold px-10 py-5 text-xl rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3"
              >
                <Calendar className="w-8 h-8" />
                Prenota Consulenza Gratuita
              </Button>
              
              <div className="text-white/80 text-sm">oppure</div>
              
              <Button 
                onClick={handleWhatsAppClick}
                variant="outline" 
                size="lg" 
                className="border-green-400/50 text-green-300 hover:bg-green-400/10 hover:text-green-200 font-bold px-10 py-5 text-xl rounded-full backdrop-blur-lg flex items-center gap-3"
              >
                <Phone className="w-8 h-8" />
                Chiama su WhatsApp
              </Button>
              */}
              {/* CTA Buttons */}
          
            <Button 
              onClick={handleScrollToBooking}
              size="lg" 
              className="bg-white text-purple-700 hover:bg-white/90 font-semibold px-8 py-4 text-lg rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Prenota Consulenza Gratuita
            </Button>
            <Button 
              onClick={handleWhatsAppClick}
              variant="outline" 
              size="lg" 
              className="border-green-400/50 text-green-300 hover:bg-green-400/10 hover:text-green-200 font-semibold px-8 py-4 text-lg rounded-full backdrop-blur-lg flex items-center gap-2"
            >
              <Phone className="w-5 h-5"/>
              Chiama su WhatsApp
            </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-white flex items-center gap-3">
                  <Phone className="w-8 h-8 text-green-400" />
                  Contatto Diretto
                </h4>
                <p className="text-white/80">
                  <span className="font-semibold">Telefono:</span> +39 379 2777396
                </p>
                <p className="text-white/80">
                  <span className="font-semibold">Email:</span> info@sebastianobiscuso.it
                </p>
                <p className="text-white/80">
                  <span className="font-semibold">Modalità:</span> Solo su appuntamento
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-bold text-white flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-400" />
                  Cosa Ottieni
                </h4>
                <ul className="space-y-2 text-white/80">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Analisi completa del problema</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Preventivo dettagliato e trasparente</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Consigli personalizzati per le tue esigenze</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Nessun costo nascosto o sorpresa</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-white/70 text-lg"
          >
            <span className="font-semibold text-yellow-300">Oltre 5000 clienti</span> hanno già risolto i loro problemi informatici. 
            <br />
            Unisciti a loro e scopri perché siamo la scelta preferita per l'assistenza IT.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;