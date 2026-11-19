import { MapPin, Phone, Mail, Instagram, Facebook, Clock, AlertCircle, Printer } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#2C2C2C] text-white/80 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-16">
          {/* Brand */}
          <div>
            <img 
              src="https://storage.googleapis.com/clients-ai-studio/Shelbi%20Aesthetics/Image%20from%20Michael%20Riga%20Mail.png" 
              alt="Shelbi Aesthetics" 
              className="h-16 mb-6 object-contain brightness-0 invert"
            />
            <p className="text-sm leading-relaxed mb-6">
              Elevating beauty and wellness in Baytown, TX through advanced
              aesthetic treatments and personalized care.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/shelbi_aesthetics/?hl=en" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/shelbiaesthetics/" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* About & Shop */}
          <div>
            <h3 className="text-sm tracking-widest uppercase text-white mb-6 font-semibold">
              About
            </h3>
            <ul className="space-y-4 text-sm mb-8">
              <li>
                <Link to="/about/us" className="hover:text-gold transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/about/galleries" className="hover:text-gold transition-colors">
                  Before & After Galleries
                </Link>
              </li>
              <li>
                <Link to="/membership" className="hover:text-gold transition-colors">
                  Membership
                </Link>
              </li>
              <li>
                <Link to="/about/financing" className="hover:text-gold transition-colors">
                  Financing
                </Link>
              </li>
            </ul>

            <h3 className="text-sm tracking-widest uppercase text-white mb-6 font-semibold">
              Shop
            </h3>
            <ul className="space-y-4 text-sm">
              <li>
                <a href="https://aurowellness.com/ref/10666843" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">Aura Wellness</a>
              </li>
              <li>
                <a href="https://zoskinhealth.com/?practice-ref=75051&practice-name=Shelbi+Aesthetics+and+Wellness" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">ZO Skinhealth</a>
              </li>
              <li>
                <a href="https://www.ourself.com/?provider_acc_id=30199" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">OurSelf</a>
              </li>
              <li>
                <a href="http://www.colorescience.com/shelbi-aesthetics-and-wellness-the-salt-ranch" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">ColorScience</a>
              </li>
              <li>
                <a href="https://hydropeptide.com/?rfsn=8908020.3b1aea" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">HydroPeptide</a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm tracking-widest uppercase text-white mb-6 font-semibold">
              Services
            </h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/services/injectables" className="hover:text-gold transition-colors">Injectables</Link></li>
              <li><Link to="/services/skin-boosters" className="hover:text-gold transition-colors">Skin Boosters</Link></li>
              <li><Link to="/services/microneedling" className="hover:text-gold transition-colors">Microneedling</Link></li>
              <li><Link to="/services/lasers" className="hover:text-gold transition-colors">Lasers</Link></li>
              <li><Link to="/services/vaginal-rejuvenation" className="hover:text-gold transition-colors">Vaginal Rejuvenation</Link></li>
              <li><Link to="/services/facials-peels" className="hover:text-gold transition-colors">Facials & Peels</Link></li>
              <li><Link to="/services/wellness" className="hover:text-gold transition-colors">Wellness</Link></li>
              <li><Link to="/services/exosome-hair-injection" className="hover:text-gold transition-colors">Exosome Hair Injection</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm tracking-widest uppercase text-white mb-6 font-semibold">
              Contact Us
            </h3>
            <ul className="space-y-6 text-sm">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-gold flex-shrink-0" />
                <span>
                  803 Massey Tompkins Road
                  <br />
                  Baytown, TX 77521
                  <br />
                  <span className="text-xs italic mt-1 block">HSA/FSA cards not accepted</span>
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-gold flex-shrink-0" />
                <span>(281) 757-3250</span>
              </li>
              <li className="flex items-center">
                <AlertCircle className="w-5 h-5 mr-3 text-gold flex-shrink-0" />
                <span>Emergency only: (832) 398-1362</span>
              </li>
              <li className="flex items-center">
                <Printer className="w-5 h-5 mr-3 text-gold flex-shrink-0" />
                <span>Fax: (281) 402-9211</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-gold flex-shrink-0" />
                <a href="mailto:Shelbi@ShelbiAestheticsWellness.com" className="hover:text-gold transition-colors break-all">
                  Shelbi@ShelbiAestheticsWellness.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/50">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 text-center md:text-left">
            <p>
              &copy; {new Date().getFullYear()} Shelbi Aesthetics. All rights
              reserved.
            </p>
            <span className="hidden md:inline text-white/30">|</span>
            <p>
              Developed by <a href="https://bluewolfagency.co" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors font-semibold">BlueWolf Marketing</a>
            </p>
            <span className="hidden md:inline text-white/30">|</span>
            <p className="font-semibold text-white/70">
              All sales are final. No refunds at all.
            </p>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
