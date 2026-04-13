import React, { useState, useEffect } from 'react';
import {
  Mail, Phone, MapPin, Download, ChevronRight, ChevronLeft, X,
  Maximize2, Layers, Briefcase, GraduationCap, Layout, Camera,
  Settings, ShieldCheck, PenTool, CheckCircle2, Ruler, HardHat,
  Monitor, Smartphone, Globe, ArrowRight, ArrowLeft, Menu,
  Linkedin, Instagram, ExternalLink, Box, AlertCircle, Clock, BookOpen
} from 'lucide-react';

// --- HELPER FUNCTION FOR GOOGLE DRIVE IMAGES ---
const getDriveImg = (id) => `https://drive.google.com/thumbnail?id=${id}&sz=w1920`;

// --- DATA STRUCTURE: 100% ALIGNED ---
const PORTFOLIO_DATA = {
  personal: {
    name: "Ahmed Yasser",
    profileImage: getDriveImg("1WdKcS5D6D_D9LmbeDdQv106_GKc0BfT9"),
    brandLogo: getDriveImg("1mvUQ_tSeWxIl6NqpCBZcsb0DRPYAYppj"),
    title: "Senior Technical Architect & Interior Designer",
    profileSummary: "Senior Technical Architect with over 5+ years of experience specializing in the seamless transition of design vision into buildable, high-quality architectural solutions. Expert in technical leadership for luxury, hospitality, and large-scale residential projects, ensuring spatial and technical logic remains aligned with the original design ambition while maintaining rigorous quality control.",
    competencies: [
      { title: "Technical Leadership", desc: "Leading technical streams from concept to IFC stage, managing multidisciplinary interfaces.", icon: <PenTool size={24} /> },
      { title: "BIM Coordination", desc: "Seamless alignment between architectural, structural, and MEP systems using Revit workflows.", icon: <Layers size={24} /> },
      { title: "Regulatory Compliance", desc: "Expert knowledge of building codes and safety regulations to mitigate technical risks.", icon: <ShieldCheck size={24} /> },
      { title: "Interior Specialization", desc: "Detailed millwork, bespoke kitchen design, and high-end residential interior execution.", icon: <Box size={24} /> }
    ],
    experience: [
      { role: "Senior Technical Office Engineer", firm: "Ahmed Osman Archi-Arts", date: "Aug 2024 - Present" },
      { role: "Architect & Interior Designer", firm: "Nomad Digital Solution", date: "2020 - 2024" },
      { role: "Architectural and Site Engineer", firm: "Touch of Art Real Estate Firm", date: "2019" },
      { role: "Intern", firm: "ACE Consultancy - Moharram Bakhoum", date: "2019" },
      { role: "Intern", firm: "Rêny France", date: "2018" }
    ],
    education: [
      { degree: "B.Arch", school: "Higher Technological Institute", date: "2016 - 2020", loc: "Cairo, EGY" },
      { degree: "Thanaweya 'Amma", school: "St. George's College", date: "2014 - 2016", loc: "Cairo, EGY" }
    ],
    software: ["Revit", "AutoCAD", "3ds Max", "Adobe Photoshop", "V-Ray", "Google Workspace", "Microsoft Office"],
    stats: [
      { label: "Experience", value: "5+ Years" },
      { label: "BIM Level", value: "Expert" },
      { label: "Projects", value: "40+" },
      { label: "IFC Sets", value: "15+" }
    ],
    social: {
      linkedin: "https://www.linkedin.com/in/archahmedyasser/",
      behance: "https://www.behance.net/archahmedyasser",
      instagram: "https://www.instagram.com/conceptsplus.cai/"
    },
    contact: {
      email: "ahmedyasser.arch@gmail.com",
      phone: "+20 109 285 7301",
      location: "Cairo, Egypt"
    }
  },
  topics: [
    {
      id: "tech-leadership",
      title: "Technical Leadership & Drawing Production",
      coverImg: getDriveImg("1CyfM2rKK3giV84HhZA68qrXMaQizpgQG"),
      summary: "Leading technical streams from concept to IFC stage, ensuring design intent is translated into buildable reality.",
      details: [
        "Production of high-precision Layout Detailing & Execution sets.",
        "Leading technical teams for luxury private villas.",
        "Ensuring 100% design-to-build integrity.",
        "Specialized in complex facade details and 3D architectural integrations.",
        "Translating architectural drawings directly to on-site reality."
      ],
      gallery: [
        { label: "Layout Detailing 01", url: getDriveImg("1RpZe6j34vhMtWGlbcJIa55OKc54Jy8zw") },
        { label: "Layout Detailing 02", url: getDriveImg("1ufNNXX3hYIEiXaHaw5i7xcmTCv6wgxA_") },
        { label: "Facade Detail", url: getDriveImg("183IRopc4n7eqWfFU264Px4PUJ8DPwD-d") },
        { label: "3D Facade Visual", url: getDriveImg("1Zeuq3qlZmuoQSXpO_rSG1Intx0dIgdjN") },
        { label: "Detailed Staircase", url: getDriveImg("1dLazBefrnfnJ4c1qst29HV3tda6TU5Iw") },
        { label: "Design to Reality: Drawing", url: getDriveImg("1v1ZIJlXLrClh8H_rY7pYNmDsN8FKGNB_") },
        { label: "Design to Reality: Site Execution", url: getDriveImg("1MMUcRoHP8_3_ld8mCs8n5xLaxbvdhJHX") }
      ]
    },
    {
      id: "multidisciplinary",
      title: "Multidisciplinary Coordination",
      coverImg: getDriveImg("19pUH1HP3J4iV7IjDV0pHJSHvo8U_bfEN"),
      summary: "Managing the interface between Architectural, Structural, and MEP systems via rigorous BIM workflows.",
      details: [
        "BIM Coordination using Revit for conflict resolution.",
        "Executing intensive clash detection tests between disciplines.",
        "Production of coordinated ceiling plans and false ceiling details.",
        "MEP interface management for complex interiors.",
        "Reviewing and responding to consultant markups."
      ],
      gallery: [
        { label: "Ceiling Coordination Plan", url: getDriveImg("1vo9Qvz_cJL90NxsjR3het97pCExYOgRh") },
        { label: "Ceiling 02 Coordination Plan", url: getDriveImg("1oCKzwhpka3_ZGgKriXqe6OdiZGXbkMuK") },
        { label: "Plumbing Coordination", url: getDriveImg("1LJktidGrt_EFUq1aabUHr3TKV96s39OC") },
        { label: "False Ceiling Details", url: getDriveImg("1_-KzDrmy1yIoDoRJ93Ift8loBteJJyno") },
        { label: "Clash Detection Profile 01", url: getDriveImg("16AOVzngSlyZXLfbbzxbkWOlpAT4jv9Mn") },
        { label: "Clash Detection Profile 02", url: getDriveImg("1s9axx8d_LnO_A7SjYJxHvn-71ZnexHJS") },
        { label: "Consultant Markups 01", url: getDriveImg("1zWdKsO9KlDLOlw5GiIqAVXqDw-sHIm4h") },
        { label: "Consultant Markups 02", url: getDriveImg("14iO1RjPtJCgWg32xnQBdR9M7FRcV1Q-s") }
      ]
    },
    {
      id: "regulatory",
      title: "Regulatory Compliance & Risk Management",
      coverImg: getDriveImg("1-wnFtYoHD1FVigtX0O_0NLFE5UULqJAG"),
      summary: "Technical auditing, rigorous scheduling, and meticulous document control to mitigate pre-construction risks.",
      details: [
        "Auditing architectural sets for local code compliance.",
        "Managing technical revisions and submissions.",
        "Document controlling and lifecycle management of project sheets.",
        "Detailed schedules production for regulatory submissions."
      ],
      gallery: [
        { label: "Compliance Schedules", url: getDriveImg("1NOpj9kbwEb579sx3NDfA_xhd_yRkpk-g") },
        { label: "Additional Schedules", url: getDriveImg("1ScVKt1d21s-AHzYGA63TcjYVr3oTQDI1") },
        { label: "Document Controlling Record 01", url: getDriveImg("10NGd9l5LSzxQJzg9bUPKXVTItid25_zg") },
        { label: "Document Controlling Record 02", url: getDriveImg("1Y6kvT21N894E2VJOCgqV1zbwt-Ta3pTF") }
      ]
    },
    {
      id: "concept",
      title: "Concept and Schematic Visualization",
      coverImg: getDriveImg("1MUIHyNEkAI7ba-OMiaOdxIVlzXRsiq04"),
      summary: "Bespoke spatial optimization, interior detailing, and advanced schematic visualization.",
      details: [
        "Translating abstract thoughts into initial architectural geometries.",
        "Rapid spatial visualization and massing studies.",
        "Conceptual renderings linking interior and landscape design.",
        "Technical shop drawings and interior elevations for luxury residential."
      ],
      gallery: [
        { label: "Interior Render", url: getDriveImg("1IChDYSW_-6gKHc6TZDn-SpHjU8Fia7-q") },
        { label: "Render Visualization", url: getDriveImg("1SYjcDJF6aWgHtBp2k4A6Iz1UvfPIl0zw") },
        { label: "Conceptual Render", url: getDriveImg("1PhTXjmDwsHrMju3KDVzSgVHKcZCYTLLc") },
        { label: "Conceptual 2D Landscape Render", url: getDriveImg("1xlDFy273o8gKuDcQIYNBPbReijraf3NZ") },
        { label: "Conceptual Sketch", url: getDriveImg("1LWA233IXBLYkoAyNfr-KxzhoI_omwXxH") }
      ]
    },
    {
      id: "mentorship",
      title: "Mentorship & Collaboration",
      coverImg: getDriveImg("1FxaUtpowoKHgBYXZ-cbtbHT9jkLglQgC"),
      summary: "Fostering a collaborative environment and guiding junior architects through complex technical workflows.",
      centerText: true,
      details: [
        "Guiding junior team members in BIM methodologies.",
        "Coordinating effectively with external multidisciplinary consultants.",
        "Establishing standard operating procedures for CAD/BIM technicians.",
        "Promoting a culture of technical excellence and peer review."
      ],
      gallery: []
    },
    {
      id: "photography",
      title: "Photographs & Scenes",
      coverImg: getDriveImg("1BhQRQe-rH0SiiYjH1lvE1Y-4VZMpPTvn"),
      summary: "Architectural photography capturing the essence of built environments and spatial atmospheres.",
      details: [
        "An architect possesses a refined eye that perceives beauty and spatial depth, an intrinsic skill perfectly captured and translated through the lens of architectural photography.",
        "Documenting site progress and architectural completions.",
        "Capturing the interplay of light and materiality in built forms.",
        "Spatial atmosphere visualization through photographic mediums."
      ],
      gallery: [
        { label: "Architectural Perspective 01", url: getDriveImg("1KA6Vw77ZvpMZ5_rjPTFwnSfLGFxk7RUu") },
        { label: "Architectural Perspective 02", url: getDriveImg("1OVtIFzEE35shvgDnaP7UEz0r_qkAWUHq") },
        { label: "Spatial Depth", url: getDriveImg("1JeqebLbwnekuTQDKMI43Xgiv3bUBJMH6") },
        { label: "Light & Materiality", url: getDriveImg("1jVY-42q_M2_ssDwlXZTK3bMnmdBiG_DQ") }
      ]
    },
    {
      id: "academic",
      title: "Academic Research & Conceptual Projects",
      isAcademic: true,
      projects: [
        {
          id: "a1",
          title: "Fustat Cultural Center",
          year: "2022",
          type: "Graduation Project",
          link: "https://www.behance.net/gallery/138554725/Fustat-Cultural-Center-(Academic)",
          desc: "A dialogue between heritage and modernity through rhythmic massing in Old Cairo.",
          details: ["Structural Logic", "Spatial Rhythms", "Detailed Visualization", "Heritage Context Integration"],
          gallery: [{ label: "Main Masterplan Render", url: getDriveImg("1wMxqISZpkLjv1GBxA9u5tmOR5SpxIHzC") }]
        },
        {
          id: "a2",
          title: "Marsa Matrouh General Hospital",
          year: "2021",
          type: "Healthcare Design",
          desc: "Healthcare efficiency meeting coastal environmental logic and sterile flow management.",
          details: ["Healthcare Zoning", "Circulation Efficiency", "Environmental Adaptation"],
          gallery: [{ label: "Hospital Perspective", url: getDriveImg("1SvRaFzeCHy0AaZfV8q-fQa0QvGTePOcv") }]
        },
        {
          id: "a3",
          title: "International University in Alamein",
          year: "2021",
          type: "Educational Design",
          link: "https://www.behance.net/gallery/98618793/International-University-of-Alamein-City-(Academic)",
          desc: "Modern educational hubs designed for collaborative multidisciplinary interaction.",
          details: ["Campus Masterplanning", "Collaborative Space Design", "Structural Innovation"],
          gallery: [{ label: "University Perspective", url: getDriveImg("1m5KEQMkhS4hcJpM4o4IEWZcDyKJDhi6v") }]
        },
        {
          id: "a4",
          title: "Khalifa Open Museum",
          year: "2021",
          type: "Urban Revitalization",
          link: "https://www.behance.net/gallery/99813121/Khalifa-Open-Museum-(Academic)",
          desc: "Urban intervention aimed at preserving historical layers while providing modern community nodes.",
          details: ["Historical Mapping", "Urban Spatial Analysis", "Public Realm Design"],
          gallery: [{ label: "Khalifa Open Museum", url: getDriveImg("1cPIeks9LeZt9Cti5AwqqrYQCbbvFvWfG") }]
        }
      ]
    }
  ]
};

// --- BRIDGING ITEMS ---
const ALL_TOPICS = PORTFOLIO_DATA.topics.filter(t => !t.isAcademic);
const ACADEMIC_PROJS = PORTFOLIO_DATA.topics.find(t => t.isAcademic).projects;
const ALL_ITEMS = [...ALL_TOPICS, ...ACADEMIC_PROJS];

// --- NAVIGATION COMPONENT ---
const Nav = ({ scrolled, mobileMenuOpen, setMobileMenuOpen, setView }) => {
  const handleNavClick = (sectionId) => {
    setView('home');
    setMobileMenuOpen(false);
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-[#E6E7E8]/95 backdrop-blur-md py-3 shadow-xl border-b border-[#0C2340]/10' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-4 cursor-pointer" onClick={() => handleNavClick('intro')}>
          <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center font-bold text-lg rounded-xl bg-[#0C2340] text-[#D6D2C4] shadow-lg">AY</div>
          <div className="flex flex-col leading-none">
            <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] text-[#0C2340]">Ahmed Yasser</span>
            <span className="text-[8px] md:text-[9px] font-black text-[#F15628] uppercase tracking-[0.2em] mt-1">Technical Stream Lead</span>
          </div>
        </div>
        
        <div className="hidden md:flex gap-8 lg:gap-12 items-center">
          {["Profile", "Topics", "Academic", "Contact"].map(link => (
            <button key={link} onClick={() => handleNavClick(link.toLowerCase())} className="text-[10px] font-black uppercase tracking-[0.3em] text-[#0C2340] hover:text-[#F15628] transition-all relative group">
              {link}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#F15628] transition-all group-hover:w-full" />
            </button>
          ))}
        </div>

        <button className="md:hidden text-[#0C2340] p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      <div className={`md:hidden absolute top-full left-0 w-full bg-[#E6E7E8] border-b border-[#0C2340]/10 shadow-2xl transition-all duration-300 ${mobileMenuOpen ? 'opacity-100 visible h-auto p-8' : 'opacity-0 invisible h-0 overflow-hidden'}`}>
        <div className="flex flex-col gap-6 text-center">
          {["Profile", "Topics", "Academic", "Contact"].map(link => (
            <button key={link} onClick={() => handleNavClick(link.toLowerCase())} className="text-xs font-black uppercase tracking-widest text-[#0C2340] hover:text-[#F15628]">
              {link}
            </button>
          ))}
          <div className="flex justify-center gap-8 pt-4 border-t border-[#0C2340]/10">
            <a href={PORTFOLIO_DATA.personal.social.linkedin} target="_blank" rel="noreferrer"><Linkedin size={20} className="text-[#0C2340]" /></a>
            <a href={PORTFOLIO_DATA.personal.social.instagram} target="_blank" rel="noreferrer"><Instagram size={20} className="text-[#0C2340]" /></a>
          </div>
        </div>
      </div>
    </nav>
  );
};

const DetailView = ({ item, animDirection, onBack, onOpenLightbox, onNextItem, onPrevItem }) => {
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  if (!item) return null;
  const isAcademicProj = item.type !== undefined;
  const animClass = animDirection === 'right' ? 'animate-in fade-in slide-in-from-right-16' : 'animate-in fade-in slide-in-from-left-16';

  const handleTouchStart = (e) => setTouchStart(e.targetTouches[0].clientX);
  const handleTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 70 && onNextItem) onNextItem();
    if (distance < -70 && onPrevItem) onPrevItem();
    setTouchStart(0); setTouchEnd(0);
  };

  return (
    <div key={item.id} className={`${animClass} duration-500 bg-[#E6E7E8] min-h-screen pb-32 relative`} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
      <button onClick={onPrevItem} className="fixed left-6 top-1/2 -translate-y-1/2 z-40 bg-[#0C2340]/10 hover:bg-[#F15628] text-[#0C2340] hover:text-white p-4 rounded-full backdrop-blur-md transition-all shadow-xl hidden md:flex"><ChevronLeft size={28} /></button>
      <button onClick={onNextItem} className="fixed right-6 top-1/2 -translate-y-1/2 z-40 bg-[#0C2340]/10 hover:bg-[#F15628] text-[#0C2340] hover:text-white p-4 rounded-full backdrop-blur-md transition-all shadow-xl hidden md:flex"><ChevronRight size={28} /></button>

      <header className="bg-[#0C2340] pt-32 pb-20 px-6 text-[#D6D2C4] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#F15628 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="container mx-auto max-w-6xl relative z-10">
          <button onClick={onBack} className="flex items-center gap-2 text-[#F15628] font-black uppercase tracking-[0.4em] text-[10px] mb-8 hover:text-white bg-[#0C2340] border border-[#F15628]/30 px-5 py-2.5 rounded-full"><ArrowLeft size={14} /> Back to Overview</button>
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 border-b border-[#D6D2C4]/20 pb-12">
            <div className="space-y-4 max-w-4xl">
              <span className="text-[#F15628] font-black uppercase tracking-[0.5em] text-[11px] block">{item.year || "Topic Deep Dive"}</span>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tighter leading-tight">{item.title}</h2>
            </div>
            {item.link && <a href={item.link} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-[#F15628] text-xs font-bold uppercase tracking-widest hover:underline decoration-2 shrink-0">View Full Project <ExternalLink size={14} /></a>}
          </div>
        </div>
      </header>
      
      <main className="container mx-auto max-w-6xl px-6 py-20">
        {isAcademicProj ? (
          <div className="flex flex-col items-center space-y-16">
            <div className="max-w-3xl text-center space-y-8">
               <h5 className="text-[12px] md:text-[14px] font-black uppercase tracking-[0.5em] text-[#F15628] underline underline-offset-8 decoration-2">Statement of Intent</h5>
               <p className="text-[#0C2340] text-2xl md:text-3xl font-light leading-relaxed">{item.desc || item.summary}</p>
            </div>
            {item.gallery?.map((img, i) => (
              <div key={i} onClick={() => onOpenLightbox(item.gallery, i)} className="group relative rounded-[2.5rem] md:rounded-[4rem] overflow-hidden border border-[#0C2340]/10 bg-[#D6D2C4] cursor-zoom-in w-full max-w-7xl aspect-[16/9] md:aspect-[21/9] transition-all hover:shadow-2xl">
                <img src={img.url} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt={img.label} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C2340]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-10"><p className="text-xl md:text-2xl font-light text-white tracking-widest">{img.label}</p></div>
              </div>
            ))}
          </div>
        ) : item.centerText ? (
          <div className="flex flex-col items-center text-center space-y-12 max-w-4xl mx-auto py-10">
            <h5 className="text-[12px] md:text-[14px] font-black uppercase tracking-[0.5em] text-[#F15628] mb-4 underline underline-offset-8 decoration-2">Statement of Intent</h5>
            <p className="text-[#0C2340] text-2xl md:text-3xl font-light leading-relaxed">{item.desc || item.summary}</p>
            <ul className="mt-16 space-y-6 text-left inline-block max-w-2xl w-full">
              {item.details.map((d, i) => (
                <li key={i} className="flex items-start gap-5 text-lg md:text-xl font-light text-[#0C2340]/80 border-b border-[#0C2340]/10 pb-4 last:border-0"><CheckCircle2 size={24} className="text-[#F15628] shrink-0 mt-1" />{d}</li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4 space-y-12">
               <div className="p-10 bg-white border-l-4 border-[#F15628] rounded-r-[2.5rem] shadow-sm"><h5 className="text-[10px] font-black uppercase tracking-[0.5em] text-[#F15628] mb-4 underline underline-offset-8 decoration-1">Statement of Intent</h5><p className="text-[#0C2340] text-xl font-light leading-relaxed">{item.desc || item.summary}</p></div>
               <div className="space-y-6"><h5 className="text-[10px] font-black uppercase tracking-[0.5em] text-[#F15628]">Technical Scope & Points</h5><ul className="space-y-5">{item.details?.map((d, i) => (<li key={i} className="flex items-start gap-4 text-sm font-bold text-[#0C2340]/70 leading-relaxed"><div className="w-1.5 h-1.5 rounded-full bg-[#F15628] mt-1.5 shrink-0" />{d}</li>))}</ul></div>
            </div>
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-10">
              {item.gallery?.map((img, i) => (
                <div key={i} onClick={() => onOpenLightbox(item.gallery, i)} className="group relative rounded-[2.5rem] overflow-hidden border border-[#0C2340]/10 bg-[#D6D2C4] cursor-zoom-in aspect-video transition-all hover:shadow-2xl">
                   {img.url ? <img src={img.url} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={img.label} /> : <div className="absolute inset-0 flex items-center justify-center p-8 text-center bg-[#E6E7E8]"><Camera size={40} className="text-[#F15628]/30" /></div>}
                   <div className="absolute inset-0 bg-gradient-to-t from-[#0C2340]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8"><p className="text-[14px] font-black text-white uppercase tracking-widest">{img.label}</p></div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

const App = () => {
  const [view, setView] = useState('home'); 
  const [selectedItem, setSelectedItem] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [animDirection, setAnimDirection] = useState('right');
  const [lightbox, setLightbox] = useState({ isOpen: false, index: 0, images: [] });
  const [lbTouchStart, setLbTouchStart] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenItem = (item, direction = 'right') => {
    setAnimDirection(direction); setSelectedItem(item); setView('detail'); window.scrollTo(0, 0);
  };

  const currIdx = selectedItem ? ALL_ITEMS.findIndex(i => i.id === selectedItem.id) : -1;
  const nextItem = currIdx >= 0 && currIdx < ALL_ITEMS.length - 1 ? ALL_ITEMS[currIdx + 1] : null;
  const prevItem = currIdx > 0 ? ALL_ITEMS[currIdx - 1] : null;

  const openLightbox = (images, index) => setLightbox({ isOpen: true, index, images });
  const closeLightbox = () => setLightbox({ isOpen: false, index: 0, images: [] });
  const moveLb = (step) => setLightbox(prev => ({ ...prev, index: (prev.index + step + prev.images.length) % prev.images.length }));

  const handleLbTouch = (e) => {
    const dist = lbTouchStart - e.targetTouches[0].clientX;
    if (dist > 70) moveLb(1); else if (dist < -70) moveLb(-1);
    setLbTouchStart(0);
  };

  return (
    <div className="min-h-screen bg-[#E6E7E8] text-[#0C2340] font-sans selection:bg-[#F15628] antialiased">
      {lightbox.isOpen && (
        <div className="fixed inset-0 z-[100] bg-[#0C2340]/95 flex flex-col items-center justify-center p-4 backdrop-blur-md animate-in fade-in duration-300" onClick={closeLightbox} onTouchStart={e => setLbTouchStart(e.targetTouches[0].clientX)} onTouchEnd={handleLbTouch}>
          <button className="absolute top-10 right-10 text-white/50 hover:text-[#F15628] z-[110]"><X size={44} /></button>
          {lightbox.images.length > 1 && (
            <div className="hidden md:contents">
              <button onClick={e => {e.stopPropagation(); moveLb(-1);}} className="absolute left-10 text-white/50 hover:text-[#F15628] z-[110]"><ChevronLeft size={64} strokeWidth={1} /></button>
              <button onClick={e => {e.stopPropagation(); moveLb(1);}} className="absolute right-10 text-white/50 hover:text-[#F15628] z-[110]"><ChevronRight size={64} strokeWidth={1} /></button>
            </div>
          )}
          <div className="w-full h-full flex items-center justify-center" onClick={e => e.stopPropagation()}>
            <img key={lightbox.index} src={lightbox.images[lightbox.index].url} className="max-w-full max-h-full object-contain animate-in fade-in zoom-in-95 duration-300" alt="Lightbox" />
            <div className="absolute bottom-10 flex justify-between w-full max-w-4xl px-10 text-white">
              <h4 className="text-xl font-light">{lightbox.images[lightbox.index].label}</h4>
              <span className="text-[#F15628] font-black">{lightbox.index + 1} / {lightbox.images.length}</span>
            </div>
          </div>
        </div>
      )}

      <Nav scrolled={scrolled} mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} setView={setView} />

      {view === 'home' ? (
        <>
          <header id="intro" className="relative min-h-screen flex flex-col justify-center pt-32 pb-12 px-6 bg-[#E6E7E8]">
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-8 space-y-10 animate-in slide-in-from-bottom duration-1000">
                <div className="flex items-center gap-4"><div className="h-0.5 w-12 bg-[#F15628]" /><span className="text-[11px] font-black uppercase tracking-[0.5em] text-[#F15628]">Technical Architecture Portfolio</span></div>
                <h1 className="text-5xl md:text-[10rem] lg:text-[11rem] font-light tracking-tighter text-[#0C2340] leading-[0.85]">Vision <br/> <span className="font-semibold italic opacity-80 underline decoration-[#F15628] decoration-[10px] underline-offset-[12px]">Executed.</span></h1>
                <p className="text-lg md:text-2xl text-[#0C2340]/70 font-light max-w-4xl">{PORTFOLIO_DATA.personal.profileSummary}</p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 pt-8">{PORTFOLIO_DATA.personal.stats.map(s => (<div key={s.label} className="border-l-2 border-[#F15628]/20 pl-6"><span className="text-2xl sm:text-4xl font-bold text-[#0C2340]">{s.value}</span><p className="text-[10px] font-black text-[#F15628] uppercase mt-2">{s.label}</p></div>))}</div>
              </div>
              <div className="lg:col-span-4 hidden lg:block"><div className="relative aspect-[3/4] rounded-[4rem] overflow-hidden shadow-2xl border-[16px] border-[#D6D2C4]"><img src={PORTFOLIO_DATA.personal.profileImage} className="w-full h-full object-cover" alt="Profile" /><div className="absolute inset-0 bg-gradient-to-t from-[#0C2340] to-transparent opacity-60" /></div></div>
            </div>
          </header>

          <section id="profile" className="py-24 bg-[#E6E7E8] border-y border-[#0C2340]/10 px-6">
            <div className="container mx-auto space-y-32">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">{PORTFOLIO_DATA.personal.competencies.map((c, i) => (<div key={i} className="p-8 bg-white/40 rounded-3xl hover:bg-white transition-all shadow-sm group"><div className="w-14 h-14 bg-[#0C2340] rounded-2xl flex items-center justify-center text-[#F15628] mb-6 group-hover:scale-110 transition-transform">{c.icon}</div><h4 className="text-lg font-black text-[#0C2340] uppercase tracking-widest">{c.title}</h4><p className="text-[#0C2340]/60 text-sm mt-4">{c.desc}</p></div>))}</div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div className="space-y-10">
                  <div className="flex items-center gap-4"><Briefcase size={20} className="text-[#F15628]" /><span className="text-[10px] font-black uppercase text-[#0C2340]">Experience</span></div>
                  <div className="space-y-8 border-l-2 border-[#0C2340]/10 ml-2 pl-8">{PORTFOLIO_DATA.personal.experience.map((e, i) => (<div key={i} className="relative"><div className="absolute -left-[39px] top-1 w-4 h-4 rounded-full border-4 border-[#E6E7E8] bg-[#F15628]" /><h5 className="text-xl font-bold">{e.role}</h5><p className="text-[#0C2340]/70 font-bold">{e.firm}</p><span className="text-[10px] text-[#F15628] font-black uppercase">{e.date}</span></div>))}</div>
                </div>
                <div className="space-y-10">
                  <div className="flex items-center gap-4"><BookOpen size={20} className="text-[#F15628]" /><span className="text-[10px] font-black uppercase text-[#0C2340]">Education</span></div>
                  <div className="space-y-8 border-l-2 border-[#0C2340]/10 ml-2 pl-8">{PORTFOLIO_DATA.personal.education.map((edu, i) => (<div key={i} className="relative"><div className="absolute -left-[39px] top-1 w-4 h-4 rounded-full border-4 border-[#E6E7E8] bg-[#0C2340]" /><h5 className="text-xl font-bold">{edu.degree}</h5><p className="text-[#0C2340]/70 font-bold">{edu.school}</p><span className="text-[10px] text-[#F15628] font-black uppercase">{edu.date}</span></div>))}</div>
                </div>
              </div>
            </div>
          </section>

          <section id="topics" className="py-24 container mx-auto px-6 space-y-48">
            {ALL_TOPICS.map((t, idx) => (
              <div key={t.id} className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center group">
                <div className="lg:col-span-6 space-y-10 animate-in fade-in slide-in-from-left duration-1000">
                  <div className="flex items-center gap-6 text-[#F15628] font-mono text-[11px] font-black uppercase"><span>Chapter 0{idx + 1}</span><span className="w-16 h-0.5 bg-[#F15628]/20" /></div>
                  <h3 className="text-4xl md:text-7xl font-light text-[#0C2340] group-hover:text-[#F15628] transition-colors">{t.title}</h3>
                  <p className="text-xl text-[#0C2340]/70">{t.summary}</p>
                  <button onClick={() => handleOpenItem(t)} className="flex items-center gap-5 text-white font-black uppercase text-[10px] bg-[#0C2340] hover:bg-[#F15628] px-12 py-6 rounded-full shadow-2xl transition-all">Explore Topic <ChevronRight size={18} /></button>
                </div>
                <div className="lg:col-span-6"><div onClick={() => handleOpenItem(t)} className="relative rounded-[4rem] overflow-hidden aspect-video bg-[#D6D2C4] border border-[#0C2340]/10 cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-1000"><img src={t.coverImg} className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-80" alt="Cover" /><div className="absolute inset-0 bg-[#0C2340]/20 flex items-center justify-center"><Ruler size={64} className="text-white" /></div></div></div>
              </div>
            ))}
          </section>

          <section id="academic" className="py-24 bg-[#0C2340] text-[#D6D2C4] px-6 relative overflow-hidden">
            <div className="container mx-auto relative z-10 space-y-20">
              <div className="flex items-center gap-4"><span className="text-[10px] font-black text-[#F15628] uppercase tracking-[0.5em]">Academic Records</span><div className="h-px flex-1 bg-white/10" /></div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16">{ACADEMIC_PROJS.map(p => (<div key={p.id} className="group space-y-10 bg-white/5 p-10 rounded-[3rem] border border-white/5 hover:border-[#F15628]/30 transition-all duration-700 flex flex-col justify-between"><div><span className="text-[#F15628] font-black uppercase text-[10px]">{p.year}</span><h4 className="text-4xl md:text-5xl font-light mt-4 group-hover:text-[#F15628] transition-colors">{p.title}</h4><p className="text-[#D6D2C4]/50 italic text-lg mt-6">"{p.desc}"</p></div><div className="flex gap-4 mt-10"><button onClick={() => handleOpenItem(p)} className="flex-1 py-5 bg-[#D6D2C4] text-[#0C2340] rounded-2xl font-black uppercase text-[10px] hover:bg-white transition-all shadow-lg">View Details</button>{p.link && <a href={p.link} target="_blank" rel="noreferrer" className="w-16 h-16 flex items-center justify-center border border-white/20 rounded-2xl hover:bg-[#F15628] transition-all"><ExternalLink size={20} /></a>}</div></div>))}</div>
            </div>
          </section>

          <section id="contact" className="py-40 text-center container mx-auto px-6 space-y-16">
            <div className="max-w-4xl mx-auto p-10 border border-[#0C2340]/10 rounded-[3rem] bg-[#D6D2C4]/30 text-left space-y-6"><div className="flex items-center gap-4 text-[#F15628]"><AlertCircle size={24} /><h5 className="text-[11px] font-black uppercase tracking-[0.4em]">Confidentiality</h5></div><p className="text-[#0C2340]/70 font-bold leading-relaxed text-sm">Selected samples are intended solely to demonstrate technical proficiency. Projects are collaborative; acknowledgment is given to peers and consultants.</p></div>
            <h2 className="text-5xl md:text-[10rem] font-light tracking-tighter text-[#0C2340]">Architecting <br/> <span className="font-semibold text-[#F15628] italic underline underline-offset-[15px] decoration-[#0C2340]">The Future.</span></h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8"><a href={`mailto:${PORTFOLIO_DATA.personal.contact.email}`} className="px-16 py-8 bg-[#F15628] text-white rounded-[2rem] font-black uppercase hover:bg-[#0C2340] transition-all shadow-2xl">Direct Inquiry <Mail size={24} className="inline ml-2"/></a><button className="px-16 py-8 border-2 border-[#0C2340] text-[#0C2340] rounded-[2rem] font-black uppercase hover:bg-[#0C2340] hover:text-white transition-all">Full CV <Download size={24} className="inline ml-2"/></button></div>
          </section>

          <footer className="py-24 border-t border-[#0C2340]/10 bg-[#E6E7E8] px-6"><div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16"><div className="lg:col-span-5 space-y-8 flex items-center gap-6"><div className="w-20 h-20 bg-[#0C2340] text-[#D6D2C4] flex items-center justify-center font-black text-3xl rounded-2xl">AY</div><img src={PORTFOLIO_DATA.personal.brandLogo} alt="Logo" className="h-14 mix-blend-multiply" /><div><p className="text-2xl font-black">{PORTFOLIO_DATA.personal.name}</p><p className="text-[9px] text-[#F15628] uppercase font-black">Senior Technical Architect</p></div></div><div className="lg:col-span-3 flex flex-col justify-end space-y-4"><span className="text-[10px] font-black text-[#F15628] uppercase">Digital</span><a href={PORTFOLIO_DATA.personal.social.linkedin} target="_blank" rel="noreferrer" className="text-xs font-black">LinkedIn</a><a href={PORTFOLIO_DATA.personal.social.behance} target="_blank" rel="noreferrer" className="text-xs font-black">Behance</a></div><div className="lg:col-span-4 lg:text-right opacity-40 mt-8 lg:mt-0"><p className="text-[10px] font-black uppercase">Adaptive System v9.5</p><p className="text-[10px] font-bold mt-2">© 2026 Record • Cairo, Egypt</p></div></div></footer>
        </>
      ) : (
        <DetailView item={selectedItem} animDirection={animDirection} onBack={() => setView('home')} onOpenLightbox={openLightbox} onNextItem={nextItem ? () => handleOpenItem(nextItem, 'right') : null} onPrevItem={prevItem ? () => handleOpenItem(prevItem, 'left') : null} />
      )}
    </div>
  );
};

export default App;
