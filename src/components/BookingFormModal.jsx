import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, User, Mail, Phone, Calendar, Clock, Check, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BookingFormModal = ({ isOpen, onClose, onSubmit, bookingDetails }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    description: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = 'Il nome è obbligatorio.';
    if (!formData.lastName) newErrors.lastName = 'Il cognome è obbligatorio.';
    if (!formData.email) {
      newErrors.email = 'L\'email è obbligatoria.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'L\'indirizzo email non è valido.';
    }
    if (!formData.phone) newErrors.phone = 'Il numero di telefono è obbligatorio.';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(formData);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-2xl bg-gradient-to-br from-gray-800 to-slate-900 rounded-2xl shadow-2xl border border-white/20 text-white p-8"
          onClick={(e) => e.stopPropagation()}
        >
          <button onClick={onClose} className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors">
            <X size={24} />
          </button>
          
          <h2 className="text-3xl font-bold text-center mb-2">Completa la Tua Prenotazione</h2>
          <p className="text-center text-white/70 mb-8">Inserisci i tuoi dati per confermare l'appuntamento.</p>
          
          <div className="bg-white/5 rounded-lg p-4 mb-8 flex flex-col md:flex-row justify-around items-center gap-4">
              <div className="flex items-center gap-3">
                  <Check size={20} className="text-blue-400" />
                  <span className="font-medium">{bookingDetails.serviceType}</span>
              </div>
              <div className="flex items-center gap-3">
                  <Calendar size={20} className="text-blue-400" />
                  <span className="font-medium">{new Date(bookingDetails.date).toLocaleDateString('it-IT', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
              </div>
              <div className="flex items-center gap-3">
                  <Clock size={20} className="text-blue-400" />
                  <span className="font-medium">{bookingDetails.time}</span>
              </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">Nome</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" size={20}/>
                  <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="w-full bg-white/10 border border-white/20 rounded-lg py-3 pl-10 pr-3 focus:ring-2 focus:ring-blue-400 focus:outline-none" placeholder="Mario" />
                </div>
                {errors.firstName && <p className="text-red-400 text-xs mt-1">{errors.firstName}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">Cognome</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" size={20}/>
                  <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="w-full bg-white/10 border border-white/20 rounded-lg py-3 pl-10 pr-3 focus:ring-2 focus:ring-blue-400 focus:outline-none" placeholder="Rossi" />
                </div>
                {errors.lastName && <p className="text-red-400 text-xs mt-1">{errors.lastName}</p>}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-white/80 mb-2">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" size={20}/>
                <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-white/10 border border-white/20 rounded-lg py-3 pl-10 pr-3 focus:ring-2 focus:ring-blue-400 focus:outline-none" placeholder="mario.rossi@email.com" />
              </div>
              {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-white/80 mb-2">Numero di Telefono</label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" size={20}/>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full bg-white/10 border border-white/20 rounded-lg py-3 pl-10 pr-3 focus:ring-2 focus:ring-blue-400 focus:outline-none" placeholder="3331234567" />
              </div>
              {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-white/80 mb-2">Descrizione del problema (max 1000 caratteri)</label>
              <div className="relative">
                <FileText className="absolute left-3 top-3 text-white/40" size={20}/>
                <textarea 
                  name="description" 
                  value={formData.description} 
                  onChange={handleChange} 
                  className="w-full bg-white/10 border border-white/20 rounded-lg py-3 pl-10 pr-3 focus:ring-2 focus:ring-blue-400 focus:outline-none" 
                  placeholder="Descrivi brevemente il problema o il servizio di cui hai bisogno..." 
                  rows="4"
                  maxLength="1000"
                ></textarea>
              </div>
              <p className="text-white/50 text-xs mt-1 text-right">{formData.description.length}/1000 caratteri</p>
            </div>
            
            <Button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 font-semibold py-4 text-lg rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300">
              Conferma e Invia
            </Button>
          </form>
          <p className="text-xs text-white/50 text-center mt-6">Rispettiamo la tua privacy. I tuoi dati saranno usati solo per la gestione di questo appuntamento.</p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default BookingFormModal;