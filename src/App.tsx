import { AppShell } from './components/AppShell';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { AboutSection } from './components/sections/AboutSection';
import { AffiliationsSection } from './components/sections/AffiliationsSection';
import { ContactSection } from './components/sections/ContactSection';
import { CredentialsSection } from './components/sections/CredentialsSection';
import { EngagementsSection } from './components/sections/EngagementsSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { HeroSection } from './components/sections/HeroSection';
import { PublicationsSection } from './components/sections/PublicationsSection';
import { WorkSection } from './components/sections/WorkSection';

function App() {
  return (
    <AppShell>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <CredentialsSection />
        <ExperienceSection />
        <WorkSection />
        <PublicationsSection />
        <EngagementsSection />
        <AffiliationsSection />
        <ContactSection />
      </main>
      <Footer />
    </AppShell>
  );
}

export default App;
