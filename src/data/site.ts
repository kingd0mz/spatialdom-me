export type NavItem = {
  label: string;
  href: string;
};

export type Credential = {
  label: string;
  value: string;
  detail: string;
};

export type ExperienceEntry = {
  title: string;
  org: string;
  period: string;
  summary: string[];
};

export type WorkEntry = {
  name: string;
  role: string;
  description: string;
  impact: string;
  tags: string[];
};

export type Publication = {
  year: string;
  title: string;
  venue: string;
  href?: string;
  tag: string;
};

export type EngagementGroup = {
  label: string;
  items: string[];
};

export type Affiliation = {
  name: string;
  note: string;
};

export const navItems: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
];

export const profile = {
  name: 'Dominic C. Fargas Jr.',
  shortName: 'Dominic Fargas',
  title: 'Geospatial Systems Architect',
  statement: 'Designing geospatial systems for governance, resilience, and decision-making.',
  description:
    'Geomatics engineer, full-stack geospatial systems builder, researcher, educator, and technology leader working across smart cities, earth observation, digital twins, and public-sector platforms.',
  location: 'Philippines',
  email: 'dcfargas@up.edu.ph',
  phone: '(+63) 926-025-3844',
  github: 'https://github.com/kingd0mz/',
  spatialdom: 'https://spatialdom.xyz/',
  cvPath: '/files/dominic-c-fargas-jr-cv.pdf',
};

export const aboutCopy = [
  'Dominic works at the junction of geospatial data, application development, and institutional decision infrastructure. His work is less about isolated interfaces and more about building operational systems that help cities, agencies, and research teams observe conditions, coordinate action, and act on spatial intelligence.',
  'Across smart city platforms, earth observation dashboards, digital twin environments, and WebGIS tools, his practice combines architectural thinking with implementation depth, translating complex spatial workflows into systems that are usable, durable, and aligned with public value.',
];

export const credentials: Credential[] = [
  {
    label: 'Current Mandate',
    value: 'Supervising Technical Specialist, SMART METRO',
    detail:
      'Leading smart region delivery across Metro Iloilo-Guimaras, Zamboanga City, and Bayugan City.',
  },
  {
    label: 'Public Sector',
    value: 'Science Research Specialist II, Philippine Space Agency',
    detail:
      'Built space-data access tools for drought, flood, land surface temperature, and atmospheric monitoring.',
  },
  {
    label: 'Academic',
    value: 'Lecturer, UP Department of Geodetic Engineering',
    detail:
      'Teaching photogrammetry, programming for geomatics, geospatial adjustment, and control networks.',
  },
  {
    label: 'Professional Standing',
    value: 'Licensed Geodetic Engineer, GELE 2021 Top 9',
    detail:
      'Magna cum laude graduate with ongoing MS work in geomatics engineering and remote sensing.',
  },
];

export const credentialHighlights = [
  '20-person delivery team led in SmartMETRO',
  '50-member technical working group coordinated',
  '100+ participants trained across GIS and environmental platforms',
  'ISPRS, smart city, EO, and digital twin publication record',
];

export const experience: ExperienceEntry[] = [
  {
    title: 'Supervising Technical Specialist',
    org: 'SMART METRO Project',
    period: 'Oct 2024 - Present',
    summary: [
      'Leads a multidisciplinary team and a 50-member technical working group delivering smart region systems for Metro Iloilo-Guimaras, Zamboanga City, and Bayugan City.',
      'Oversees stakeholder coordination, delivery strategy, and the application of smart city technologies to regional governance and disaster resilience.',
    ],
  },
  {
    title: 'Director for Technology',
    org: 'LUNGSOD Solutions, Inc.',
    period: 'Apr 2024 - Present',
    summary: [
      'Directs technology strategy, platform direction, and product execution for a smart city systems company working with local governments and institutional partners.',
      'Shapes collaborations for customized digital infrastructure across governance, service delivery, and urban management.',
    ],
  },
  {
    title: 'Science Research Specialist II',
    org: 'Philippine Space Agency',
    period: 'Jun 2023 - May 2024',
    summary: [
      'Led the PhilSA Space Data Dashboard, turning remote sensing products into accessible monitoring tools for drought, flood impact, land surface temperature, and NO2 analysis.',
      'Contributed to broader hazard and agricultural monitoring initiatives using GIS and earth observation workflows.',
    ],
  },
  {
    title: 'Science Research Specialist I',
    org: 'Project LUNGSOD',
    period: 'Feb 2021 - Apr 2023',
    summary: [
      'Spearheaded the development of a digital twin for Iloilo City as part of a broader smart city transformation and preparedness agenda.',
      'Built citizen-facing web and mobile tools, including emergency and report-an-issue modules that improved response time by 10 to 15 minutes.',
    ],
  },
  {
    title: 'Lecturer',
    org: 'UP Department of Geodetic Engineering',
    period: 'Nov 2020 - Present',
    summary: [
      'Teaches digital photogrammetry, object-oriented programming for geomatics, adjustment computations, and geodetic control network courses.',
      'Maintains consistently excellent student evaluation scores while bridging engineering, software, and applied geospatial practice.',
    ],
  },
  {
    title: 'Senior Technical Specialist',
    org: 'SMART METRO Project',
    period: 'Jun 2024 - Sep 2024',
    summary: [
      'Directed the initial development of a regional coordination platform and regional database for Iloilo City and surrounding municipalities.',
      'Delivered GIS and regional data hub training for local government, academe, and national agency participants.',
    ],
  },
  {
    title: 'Mobile App / Google Earth Engine Specialist',
    org: 'Project MapABLE, IM4ManilaBay Program',
    period: 'Oct 2020 - Mar 2022',
    summary: [
      'Developed the backend and monitoring interfaces for MASDAN, a citizen-science environmental reporting platform for Manila Bay.',
      'Ran technical trainings for more than 100 participants on environmental monitoring workflows and platform use.',
    ],
  },
];

export const selectedWork: WorkEntry[] = [
  {
    name: 'SMART METRO Regional Coordination Systems',
    role: 'Lead delivery and systems strategy',
    description:
      'Regional smart governance infrastructure spanning databases, coordination workflows, and geospatial decision layers for local and regional actors.',
    impact:
      'Frames spatial data as operating infrastructure for resilience, inter-city coordination, and institutional planning.',
    tags: ['Smart Regions', 'Data Infrastructure', 'Governance Systems'],
  },
  {
    name: 'PhilSA Space Data Dashboard',
    role: 'Lead architect and builder',
    description:
      'A public-facing dashboard translating satellite-derived indicators into accessible monitoring views for drought, flood impact, LST, and NO2.',
    impact:
      'Connected space-based data products to practical institutional and citizen use rather than keeping them confined to technical pipelines.',
    tags: ['Earth Observation', 'Dashboard Systems', 'Public Access'],
  },
  {
    name: 'Iloilo City Digital Twin',
    role: 'Systems development lead',
    description:
      'An open-source digital twin environment built to support smart city monitoring, preparedness, and urban systems visibility.',
    impact:
      'Demonstrated how digital twin concepts can be grounded in local government operations and real implementation contexts.',
    tags: ['Digital Twin', 'Smart Cities', 'Open Source'],
  },
  {
    name: 'Citizen Response and Reporting Applications',
    role: 'Full-stack geospatial application builder',
    description:
      'Web and mobile tools designed for issue reporting, emergency response, and citizen-to-government feedback loops with geospatial context.',
    impact:
      'Improved operational response times while making location-aware service flows more usable on the ground.',
    tags: ['Mobile + Web', 'Operational Systems', 'Civic Tech'],
  },
  {
    name: 'MASDAN and IM4ManilaBay Monitoring Platform',
    role: 'Backend and platform development',
    description:
      'Citizen-science mobile and WebGIS tools for monitoring Manila Bay watershed conditions and environmental change.',
    impact:
      'Extended environmental observation beyond specialist teams through participatory reporting and interface design.',
    tags: ['WebGIS', 'Citizen Science', 'Environmental Monitoring'],
  },
  {
    name: 'Regional GIS and Geoportal Capacity Building',
    role: 'Trainer and technical resource person',
    description:
      'Hands-on training programs in GIS, remote sensing, geodatabases, GeoServer, KoboToolbox, and regional geographic information network systems.',
    impact:
      'Turned systems work into institutional capability by helping agencies adopt and operate geospatial platforms themselves.',
    tags: ['Training', 'Geoportals', 'Institutional Adoption'],
  },
];

export const publications: Publication[] = [
  {
    year: '2024',
    title: 'Space+ Data Dashboard: Empowering Institutions and Citizens with Seamless Space Data Access',
    venue: 'ISPRS Archives',
    href: 'https://doi.org/10.5194/isprs-archives-XLVIII-4-W8-2023-219-2024',
    tag: 'Earth Observation',
  },
  {
    year: '2024',
    title: 'Suitability Analysis for Urban Bicycle Tourism of Iloilo City Using GIS',
    venue: 'ISPRS Archives',
    href: 'https://doi.org/10.5194/isprs-archives-XLVIII-4-W9-2024-157-2024',
    tag: 'Urban Analytics',
  },
  {
    year: '2024',
    title: 'Validating the Philippine Mangrove Map 2023 Through Capacity Building and Crowdsourcing',
    venue: 'ISPRS Annals',
    href: 'https://doi.org/10.5194/isprs-annals-x-5-2024-243-2024',
    tag: 'Remote Sensing',
  },
  {
    year: '2022',
    title: 'Locating Off-campus Shuttle Service Terminals for a University Using Address Cluster Analysis',
    venue: 'Journal of the Eastern Asia Society for Transportation Studies',
    href: 'https://doi.org/10.11175/easts.14.463',
    tag: 'Spatial Analysis',
  },
  {
    year: '2021',
    title: 'Development of a Digital Twin for the Monitoring of Smart Cities Using Open-Source Software',
    venue: 'ISPRS Archives',
    href: 'https://doi.org/10.5194/isprs-archives-XLVI-4-W6-2021-281-2021',
    tag: 'Smart Cities',
  },
  {
    year: '2021',
    title: 'Monitoring and Assessment of Agri-Urban Land Conversion Using Multi-Sensor Remote Sensing and GIS Techniques',
    venue: 'ISPRS Annals',
    href: 'https://doi.org/10.5194/isprs-annals-V-3-2021-117-2021',
    tag: 'Land Change',
  },
];

export const engagements: EngagementGroup[] = [
  {
    label: 'Speaking',
    items: [
      'Forum on Smart Cities and Communities, Caraga Regional Science, Technology, and Innovation Week, 2024',
      'Philippine Geomatics Symposium 2023 and 2021',
      '8th International Conference on Geoinformation Advances, Istanbul, 2024',
      'XXIV ISPRS Congress, Nice, 2021',
    ],
  },
  {
    label: 'Training / Resource Person',
    items: [
      'Basic QGIS and RGIN-IH Geoportal Training, NEDA Region VI, 2024',
      'Basic Remote Sensing trainings for NEDA Region IX and UST Senior High School, 2024',
      'Open-source geospatial server, geodatabase, and GeoServer training for the Philippine Statistics Authority',
      'Open Data Kit / KoboToolbox training for the Apayao-Abulug River Basin program with GIZ, 2024',
    ],
  },
  {
    label: 'Mentorship / Roles',
    items: [
      'Mentor, Global Tech Innovators Competition, Lisbon, 2024',
      'Judge, Geomatics Student Project Colloquium 2024 and 2025',
      'Judge, KPMG Philippines and Global Tech Innovators Competition Philippines, 2024',
      'Presenter and technical resource person across academic, government, and professional forums',
    ],
  },
];

export const affiliations: Affiliation[] = [
  {
    name: 'UP Society of Geodetic Engineering Majors (UP GEOP)',
    note: 'Organization co-adviser; former Vice President for Academic Affairs and multiple program leadership roles.',
  },
  {
    name: 'UP Geomatics Alumni Association',
    note: 'Director for Marketing, 2025 to present.',
  },
  {
    name: 'ISPRS Student Consortium',
    note: 'Member.',
  },
  {
    name: 'NEDA Regional Geographic Information Network',
    note: 'Member.',
  },
  {
    name: 'Geodetic Engineers of the Philippines (GEP) / yGEP',
    note: 'Professional member.',
  },
  {
    name: 'UP Resilience Institute Youth Mappers',
    note: 'Humanitarian OpenStreetMap Team participation.',
  },
];

export const contactLinks = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { label: 'Phone', value: profile.phone, href: 'tel:+639260253844' },
  { label: 'GitHub', value: 'github.com/kingd0mz', href: profile.github },
  { label: 'Spatialdom', value: 'spatialdom.xyz', href: profile.spatialdom },
];
