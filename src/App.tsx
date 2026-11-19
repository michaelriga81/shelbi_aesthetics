/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MotionConfig } from "motion/react";
import ScrollProgress from "./components/ScrollProgress";
import ScrollToTop from "./components/ScrollToTop";
import PageTransition from "./components/PageTransition";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Membership from "./pages/Membership";
import Injectables from "./pages/Injectables";
import Lasers from "./pages/Lasers";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import VaginalRejuvenation from "./pages/VaginalRejuvenation";
import FacialsPeels from "./pages/FacialsPeels";
import Contact from "./pages/Contact";
import FinancingPage from "./pages/FinancingPage";
import Wellness from "./pages/Wellness";
import ExosomeHairInjection from "./pages/ExosomeHairInjection";
import PRP from "./pages/PRP";
import AboutUs from "./pages/AboutUs";
import Locations from "./pages/Locations";
import Galleries from "./pages/Galleries";
import MonthlyPromotions from "./pages/MonthlyPromotions";
import Services from "./pages/Services";
import GiftCards from "./pages/GiftCards";
import WrinkleTreatments from "./pages/WrinkleTreatments";
import Fillers from "./pages/Fillers";
import Biostimulators from "./pages/Biostimulators";
import Microneedling from "./pages/Microneedling";
import SkinBoosters from "./pages/SkinBoosters";
import FAQ from "./pages/FAQ";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";

export default function App() {
  return (
    <Router>
      <MotionConfig reducedMotion="user">
      <ScrollToTop />
      <ScrollProgress />
      <div className="min-h-screen bg-sand font-sans text-charcoal selection:bg-gold/30 selection:text-charcoal">
        <Navbar />
        <PageTransition>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/monthly-promotions" element={<MonthlyPromotions />} />
          <Route path="/shop/gift-cards" element={<GiftCards />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/wrinkle-treatments" element={<WrinkleTreatments />} />
          <Route path="/services/fillers" element={<Fillers />} />
          <Route path="/services/biostimulators" element={<Biostimulators />} />
          <Route path="/services/skin-boosters" element={<SkinBoosters />} />
          <Route path="/services/microneedling" element={<Microneedling />} />
          <Route path="/services/lasers" element={<Lasers />} />
          <Route path="/services/vaginal-rejuvenation" element={<VaginalRejuvenation />} />
          <Route path="/services/facials-peels" element={<FacialsPeels />} />
          <Route path="/services/wellness" element={<Wellness />} />
          <Route path="/services/prp" element={<PRP />} />
          <Route path="/services/exosome-hair-injection" element={<ExosomeHairInjection />} />
          <Route path="/about/us" element={<AboutUs />} />
          <Route path="/about/locations" element={<Locations />} />
          <Route path="/about/galleries" element={<Galleries />} />
          <Route path="/about/financing" element={<FinancingPage />} />
          <Route path="/about/faq" element={<FAQ />} />
          <Route path="/about/blog" element={<Blog />} />
          <Route path="/about/blog/:slug" element={<BlogPost />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
        </Routes>
        </PageTransition>
        <Footer />
      </div>
      </MotionConfig>
    </Router>
  );
}
