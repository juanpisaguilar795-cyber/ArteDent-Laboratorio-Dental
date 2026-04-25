'use client';

import { motion } from 'framer-motion';
import { Phone, MapPin, Clock, Mail, MessageCircle, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Teléfono',
      content: '321 593 2059',
      subtitle: 'TD. Marionel Aguilar',
      action: 'tel:3215932059',
    },
    {
      icon: MapPin,
      title: 'Dirección',
      content: 'Transversal 79b # 83b - 35',
      subtitle: 'La Española, Bogotá',
      action: 'https://goo.gl/maps/tu-link-real', // Sugerencia: pon el link real de Maps
    },
    {
      icon: Clock,
      title: 'Horarios',
      content: 'Lun a Vie: 7:30 - 18:30',
      subtitle: 'Sábados: 8:00 - 13:00',
    },
  ];

  return (
    <section 
      id="contacto" 
      className="relative py-16 sm:py-32 overflow-hidden bg-gradient-to-br from-primary-100 via-white to-primary-50"
    >
      {/* FONDO DE ESFERAS */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], x: [0, 20, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute -top-20 -left-20 w-64 h-64 sm:w-96 sm:h-96 bg-primary-200/30 rounded-full blur-[80px] sm:blur-[100px]" 
        />
        <motion.div 
          animate={{ scale: [1, 1.3, 1], y: [0, -30, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute -bottom-20 -right-20 w-80 h-80 sm:w-[500px] sm:h-[500px] bg-primary-300/20 rounded-full blur-[100px] sm:blur-[120px]" 
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        
        {/* Header Responsive */}
        <div className="text-center mb-10 sm:mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="inline-block px-4 py-1.5 bg-white border border-primary-200 text-primary-700 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-4 shadow-sm"
          >
            Atención Inmediata
          </motion.span>
          <h2 className="text-3xl sm:text-7xl font-bold text-slate-900 mb-4 leading-[1.1] tracking-tight">
            ¿Hablamos de tu <br className="sm:hidden" /> <span className="text-primary-700 italic font-display">Próximo Caso</span>?
          </h2>
          <p className="text-sm sm:text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed px-4">
            Estamos listos para brindarte la precisión técnica que tu laboratorio o consultorio necesita.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-16 items-stretch">
          
          {/* Columna Izquierda: Info de Contacto */}
          <div className="space-y-4 sm:space-y-6">
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-white/90 backdrop-blur-sm rounded-[1.5rem] sm:rounded-[2.5rem] p-5 sm:p-8 border border-white shadow-lg shadow-primary-900/5 hover:shadow-xl transition-all"
                >
                  <div className="flex items-center gap-4 sm:gap-6">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary-600 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary-200">
                      <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <div className="flex-1 min-w-0 text-left">
                      <h3 className="text-[9px] sm:text-xs font-bold text-primary-600 uppercase tracking-wider mb-1">{item.title}</h3>
                      {item.action ? (
                        <a href={item.action} className="text-base sm:text-2xl font-bold text-slate-900 hover:text-primary-700 transition-colors block break-words leading-tight">
                          {item.content}
                        </a>
                      ) : (
                        <p className="text-base sm:text-2xl font-bold text-slate-900 break-words leading-tight">{item.content}</p>
                      )}
                      <p className="text-[11px] sm:text-base text-slate-500 font-medium mt-1 leading-snug">{item.subtitle}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
            
            {/* WhatsApp Button Optimizado */}
            <motion.a
              href="https://wa.me/573215932059?text=Hola%2C%20quisiera%20agendar%20una%20consulta%20en%20Artedent."
              target="_blank"
              rel="noopener noreferrer"
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-4 bg-slate-900 text-white rounded-[1.5rem] sm:rounded-[2.5rem] p-5 sm:p-8 shadow-2xl hover:bg-slate-800 transition-all group"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#25D366] rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform shrink-0">
                <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white fill-current" />
              </div>
              <div className="text-left">
                <p className="text-[9px] sm:text-[10px] font-bold text-green-400 uppercase tracking-widest">Agendar Cita</p>
                <span className="text-base sm:text-xl font-bold">WhatsApp Directo</span>
              </div>
            </motion.a>
          </div>

          {/* Columna Derecha: Beneficios */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white rounded-[2rem] sm:rounded-[3rem] p-6 sm:p-12 shadow-2xl border-4 border-white flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl sm:text-3xl font-bold text-slate-900 mb-6 sm:mb-8 text-center sm:text-left leading-tight">
                Compromiso <br className="hidden sm:block" /> <span className="text-primary-600 font-display italic">ArteDent</span>
              </h3>
              <div className="space-y-4 sm:space-y-6">
                {[
                  '15+ años perfeccionando sonrisas',
                  'Materiales certificados (INVIMA)',
                  'Garantía estructural incluida',
                  'Entrega puntual en Bogotá'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3 sm:gap-4">
                    <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600 shrink-0 mt-0.5" />
                    <p className="text-slate-700 font-semibold text-sm sm:text-lg leading-snug">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quote / Note */}
            <div className="mt-8 sm:mt-12 p-5 sm:p-8 bg-primary-50 rounded-[1.5rem] sm:rounded-[2rem] border border-primary-100 relative overflow-hidden text-center sm:text-left">
              <Mail className="absolute -right-4 -bottom-4 w-16 h-16 sm:w-24 sm:h-24 text-primary-200/40 -rotate-12" />
              <h4 className="text-primary-800 font-bold mb-1 relative z-10 text-base sm:text-xl">¿Necesitas cotización?</h4>
              <p className="text-primary-700/80 relative z-10 text-xs sm:text-base font-medium">
                Envíanos las especificaciones y responderemos el mismo día.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Stats Trust Badges: Grid 2x2 en móvil */}
        <div className="mt-8 sm:mt-20 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
          {[
            { label: 'Calidad', value: '100%' },
            { label: 'Clientes', value: '500+' },
            { label: 'Años Exp.', value: '15+' },
            { label: 'Trabajos', value: '5K+' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-3xl p-4 sm:p-8 text-center border border-white shadow-lg"
            >
              <div className="text-lg sm:text-3xl font-bold text-primary-700 mb-0.5">{stat.value}</div>
              <div className="text-[8px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest leading-none">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}