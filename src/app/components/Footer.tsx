import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowRight } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';

export function Footer() {
  return (
    <footer className="bg-[#0a0b1e] text-gray-400 relative overflow-hidden">
      {/* Subtle Background Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#6071dd]/5 rounded-full blur-[100px] -mr-48 -mt-48" />

      <div className="container mx-auto px-4 pt-20 pb-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <h3 className="text-white text-2xl font-black tracking-tight">
              Koshy's <span className="text-[#6071dd]">Global</span> Academia
            </h3>
            <p className="leading-relaxed font-medium">
              Empowering future leaders through an innovative global curriculum and character-driven education in the heart of Bangalore.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Facebook, color: 'hover:bg-[#1877F2]' },
                { icon: Twitter, color: 'hover:bg-[#1DA1F2]' },
                { icon: Instagram, color: 'hover:bg-[#E4405F]' },
                { icon: Linkedin, color: 'hover:bg-[#0A66C2]' }
              ].map((social, i) => (
                <Button 
                  key={i} 
                  size="icon" 
                  variant="outline" 
                  className={`border-white/10 bg-white/5 text-white transition-all duration-300 rounded-xl ${social.color} hover:border-transparent`}
                >
                  <social.icon className="h-5 w-5" />
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-lg font-bold mb-6">Explore</h4>
            <ul className="space-y-4">
              {['About KGA', 'Admissions', 'Academic Calendar', 'Infrastructure', 'Career Guidance'].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-[#6071dd] transition-colors flex items-center group">
                    <ArrowRight className="h-0 w-0 group-hover:w-4 group-hover:h-4 mr-0 group-hover:mr-2 transition-all text-[#6071dd]" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Link */}
          <div>
            <h4 className="text-white text-lg font-bold mb-6">Programs</h4>
            <ul className="space-y-4">
              {['Early Years', 'Primary School', 'Middle School', 'High School', 'STEM & Robotics'].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-[#6071dd] transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-6">
            <h4 className="text-white text-lg font-bold mb-6">Newsletter</h4>
            <p className="text-sm">Stay updated with our latest events and academic news.</p>
            <div className="flex gap-2">
              <Input 
                placeholder="Email Address" 
                className="bg-white/5 border-white/10 rounded-xl focus-visible:ring-[#6071dd]" 
              />
              <Button className="bg-[#6071dd] hover:bg-[#4e5ec7] text-white rounded-xl">
                Join
              </Button>
            </div>
            
            <div className="pt-4 space-y-4">
              <div className="flex gap-3 items-start">
                <MapPin className="h-5 w-5 text-[#6071dd] shrink-0 mt-0.5" />
                <span className="text-sm">123 Education Street, Bangalore, KA 560001</span>
              </div>
              <div className="flex gap-3 items-center">
                <Phone className="h-5 w-5 text-[#6071dd] shrink-0" />
                <span className="text-sm">+91 98765 43210</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-xs font-medium tracking-wider uppercase opacity-50">
              © {new Date().getFullYear()} Koshys Global Academia. Crafted for Excellence.
            </p>
            <div className="flex gap-8 text-xs font-bold uppercase tracking-widest">
              <a href="#" className="hover:text-[#6071dd] transition-colors">Privacy</a>
              <a href="#" className="hover:text-[#6071dd] transition-colors">Terms</a>
              <a href="#" className="hover:text-[#6071dd] transition-colors">Safety</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
