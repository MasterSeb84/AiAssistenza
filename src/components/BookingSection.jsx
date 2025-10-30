import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import BookingFormModal from '@/components/BookingFormModal';

const BookingSection = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [serviceType, setServiceType] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBookingClick = () => {
    if (!serviceType || !selectedDate || !selectedTime) {
      toast({
        title: "Attenzione!",
        description: "Per favore, seleziona tipo di servizio, data e orario prima di continuare.",
        variant: "destructive",
      });
      return;
    }
    setIsModalOpen(true);
  };

  const handleBookingSubmit = (userData) => {
    console.log("Dati di prenotazione:", { ...userData, serviceType, selectedDate, selectedTime });

    toast({
      title: "✅ Prenotazione Inviata!",
      description: `Grazie ${userData.firstName}! Abbiamo inviato una conferma a ${userData.email} e una notifica a prenotazioni@sebastianobiscuso.it`,
    });
    
    // Simulating sending emails
    console.log(`Simulazione invio email di conferma a: ${userData.email}`);
    console.log(`Simulazione invio dettagli prenotazione a: prenotazioni@sebastianobiscuso.it`);
    
    setIsModalOpen(false);
    // Reset form
    setServiceType('');
    setSelectedDate('');
    setSelectedTime('');
  };

  const timeSlots = [
    '09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00'
  ];

  const services = [
    'Riparazione Hardware',
    'Assistenza Software',
    'Consulenza IT',
    'Installazione Sistemi',
    'Recupero Dati',
    'Sicurezza Informatica'
  ];

  return (
    <>
      <BookingFormModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleBookingSubmit}
        bookingDetails={{ serviceType, date: selectedDate, time: selectedTime }}
      />
      <section id="booking" className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Prenota il Tuo Intervento
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Scegli data, orario e tipo di servizio. Ti contatteremo per confermare 
              l'appuntamento e fornirti tutte le informazioni necessarie.
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="calendar-container rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                  <Calendar className="w-7 h-7 text-blue-400" />
                  Seleziona Data e Orario
                </h3>

                <div className="mb-8">
                  <label className="block text-white font-semibold mb-4">Tipo di Servizio</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {services.map((service, index) => (
                      <button
                        key={index}
                        onClick={() => setServiceType(service)}
                        className={`p-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                          serviceType === service
                            ? 'bg-blue-500 text-white shadow-lg'
                            : 'bg-white/10 text-white/80 hover:bg-white/20'
                        }`}
                      >
                        {service}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <label className="block text-white font-semibold mb-4">Data Preferita</label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full p-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>

                <div className="mb-8">
                  <label className="block text-white font-semibold mb-4">Orario Preferito</label>
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                    {timeSlots.map((time, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedTime(time)}
                        className={`p-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                          selectedTime === time
                            ? 'bg-blue-500 text-white shadow-lg'
                            : 'bg-white/10 text-white/80 hover:bg-white/20'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                <Button 
                  onClick={handleBookingClick}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-4 text-lg rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  Continua la Prenotazione
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="glass-effect rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">
                    Contatti Diretti
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                        <Phone className="w-6 h-6 text-green-400" />
                      </div>
                      <div>
                        <p className="text-white font-semibold">Telefono</p>
                        <p className="text-white/80">+39 379 2777396</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                        <Mail className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <p className="text-white font-semibold">Email</p>
                        <p className="text-white/80">info@sebastianobiscuso.it</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-purple-400" />
                      </div>
                      <div>
                        <p className="text-white font-semibold">Modalità</p>
                        <p className="text-white/80">Solo su Appuntamento</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center">
                        <Clock className="w-6 h-6 text-orange-400" />
                      </div>
                      <div>
                        <p className="text-white font-semibold">Orari</p>
                        <p className="text-white/80">Lun-Ven: 9:00-18:00</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="glass-effect rounded-2xl p-8">
                  <h4 className="text-xl font-bold text-white mb-4">
                    Perché Prenotare?
                  </h4>
                  <ul className="space-y-3 text-white/80">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Consulenza personalizzata per le tue esigenze</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Diagnosi accurata del problema</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Preventivo trasparente e dettagliato</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Garanzia sui lavori eseguiti</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BookingSection;