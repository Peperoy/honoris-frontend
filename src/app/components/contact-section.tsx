import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactItems = [
    {
      icon: MapPin,
      title: 'ADRESSE',
      content: ['44 avenue d\'Amsterdam', '59300 Valenciennes']
    },
    {
      icon: Phone,
      title: 'TÉLÉPHONE',
      content: ['+33 1 23 45 67 89', '+33 6 12 34 56 78']
    },
    {
      icon: Mail,
      title: 'EMAIL',
      content: ['contact@honoriscosa.fr', 'info@honoriscosa.fr']
    },
    {
      icon: Clock,
      title: 'HORAIRES',
      content: ['Lun - Sam: 10h - 19h', 'Dimanche: Fermé']
    }
  ];

  return (
    <section id="contact" className="py-24 md:py-32 bg-black text-white" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.span 
              className="text-xs tracking-[0.3em] text-amber-400"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
            >
              CONTACT
            </motion.span>
            <motion.div 
              className="h-px w-16 bg-amber-400 mt-4 mx-auto"
              initial={{ width: 0 }}
              animate={isInView ? { width: 64 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            ></motion.div>
            <motion.h2 
              className="text-4xl md:text-5xl tracking-[0.1em] font-light mt-6 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Nous Visiter
            </motion.h2>
            <motion.p 
              className="text-gray-400 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Notre équipe est à votre disposition pour vous offrir une expérience personnalisée
            </motion.p>
          </div>

          {/* Contact Info Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactItems.map((item, index) => (
              <motion.div
                key={item.title}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              >
                <motion.div 
                  className="w-12 h-12 mx-auto mb-4 flex items-center justify-center border border-amber-400/30"
                  whileHover={{ scale: 1.1, borderColor: 'rgba(251, 191, 36, 0.5)' }}
                  transition={{ duration: 0.3 }}
                >
                  <item.icon className="text-amber-400" size={20} />
                </motion.div>
                <h3 className="text-sm tracking-[0.2em] mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm">
                  {item.content[0]}
                  <br />
                  {item.content[1]}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Interactive Map */}
          <motion.div
            className="mb-16 overflow-hidden border-2 border-amber-400/20"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <div className="aspect-video w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2532.256839258!2d3.5194!3d50.3576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c2e7e0a2e2e2e2%3A0x0!2s44%20Avenue%20d%27Amsterdam%2C%2059300%20Valenciennes!5e0!3m2!1sfr!2sfr!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(100%) invert(90%) contrast(90%)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation Honoris Cosa"
              ></iframe>
            </div>
          </motion.div>

          {/* Divider */}
          <motion.div 
            className="h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent my-16"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          ></motion.div>

          {/* Footer */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <h3 className="text-3xl tracking-[0.3em] font-light mb-4">HONORIS COSA</h3>
            <p className="text-gray-400 text-sm mb-8">
              L'excellence à votre portée
            </p>
            <div className="flex justify-center gap-8">
              {['INSTAGRAM', 'FACEBOOK', 'LINKEDIN'].map((social, index) => (
                <motion.button
                  key={social}
                  className="text-sm tracking-[0.2em] text-gray-400 transition-colors hover:text-amber-400"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                >
                  {social}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}