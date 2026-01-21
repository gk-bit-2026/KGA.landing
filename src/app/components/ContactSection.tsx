import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, ExternalLink } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-[#1f2150] mb-4">Visit Our Campus</h2>
          <p className="text-gray-500 max-w-2xl mx-auto font-medium">
            Experience our world-class infrastructure firsthand. We are located in the heart of Kannur, Bangalore.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Contact Details Cards */}
          <div className="space-y-4">
            {/* Using div instead of Card to ensure it renders even if shadcn is missing */}
            {[
              { 
                icon: <MapPin className="text-[#6071dd] h-6 w-6" />, 
                title: "Campus Address", 
                desc: <>Koshys Global Academia, Kannur,<br />Bangalore, Karnataka 562149</> 
              },
              { 
                icon: <Phone className="text-[#6071dd] h-6 w-6" />, 
                title: "Contact Numbers", 
                desc: <>+91 90353 32189<br />+91 80 1234 5678</> 
              },
              { 
                icon: <Clock className="text-[#6071dd] h-6 w-6" />, 
                title: "Office Hours", 
                desc: <>Mon - Sat: 8:30 AM - 4:30 PM<br /><span className="text-[#6071dd] font-bold">Sunday Closed</span></> 
              }
            ].map((item, index) => (
              <div key={index} className="p-6 shadow-[0_10px_40px_rgba(0,0,0,0.04)] bg-[#f8faff] rounded-[2rem] flex gap-4">
                <div className="h-12 w-12 bg-white rounded-2xl flex-shrink-0 flex items-center justify-center shadow-sm">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-bold text-[#1f2150]">{item.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Google Map Embed - Fixed URL */}
          <div className="lg:col-span-2 h-[450px] rounded-[3rem] overflow-hidden shadow-2xl relative group">
            <iframe 
              src="https://maps.app.goo.gl/BVZhHLn3GyR18BJLA" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              className="grayscale-[0.2] contrast-[1.1] hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
