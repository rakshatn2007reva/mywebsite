import { Project, EducationItem, Hobby } from '../types';

export const PERSONAL_INFO = {
  name: 'RAKSHA TN',
  title: 'Aspiring Software Engineer',
  role: 'Computer Science Engineering Student',
  institution: 'REVA University, Bengaluru',
  batch: 'First-Year B.Tech CSE (2024 - 2028)',
  location: 'Bengaluru, Karnataka, India',
  email: 'ralshatn2007reva@gmail.com',
  github: 'https://github.com',
  linkedin: 'https://linkedin.com',
  logoUrl: 'https://lh3.googleusercontent.com/aida/AEtjO1XUqIBFiSR7pBd3_YrXcmkozaWwVFNSpuubeTnjusYDtwoo2M-9y3y4EZGkcXpvLNHk1FvrN-19FkxrXX1hHoB6Lt9CzQaqVrm-YxwwoJntn63qQfHQaWsxs8W9GOHTtdqviFZReAtvozECu_znkIjJppTHnEVqbS5Aa_0ahSmgWQ7BdbJxO_vplc_7ua_Ci-wgu462JuiMjaDdtnB8DEUD6dHJ9fZSz4Qmf8xK9b42Topb612ndSVCSv2Y',
  quote: 'Curious learner. Aspiring technologist. Building my skills one project at a time.',
  bio: 'I am a first-year B.Tech Computer Science and Engineering student at REVA University, Bengaluru, passionate about programming, technology, creativity, and solving real-world problems through clean, thoughtful code.',
  aboutDetailed: 'I am a curious, enthusiastic, and adaptable learner with an interest in technology, programming, creativity, and continuous self-development. I enjoy understanding how things work beneath the hood and learning new concepts through practical experience. As a Computer Science student, I am actively solidifying my technical foundation while also focusing on communication, teamwork, presentation, and analytical problem-solving.',
};

export const CODE_SNIPPETS = {
  c: {
    filename: 'main.c',
    language: 'c',
    lines: [
      { text: '#include <stdio.h>', type: 'keyword' },
      { text: '// Initializing foundational engineering journey', type: 'comment' },
      { text: 'int main() {', type: 'function' },
      { text: '    char student[] = "Raksha TN";', type: 'statement' },
      { text: '    float cgpa = 9.00;', type: 'statement' },
      { text: '    char focus[] = "Logic • Hardware • Systems";', type: 'statement' },
      { text: '    printf("Status: Ready to build and learn!\\n");', type: 'print' },
      { text: '    return 0;', type: 'keyword' },
      { text: '}', type: 'function' },
    ],
    output: 'Status: Ready to build and learn!\n[Process exited with code 0]',
  },
  python: {
    filename: 'profile.py',
    language: 'python',
    lines: [
      { text: '# Engineer profile & learning trajectory', type: 'comment' },
      { text: 'class EngineeringJourney:', type: 'keyword' },
      { text: '    def __init__(self):', type: 'function' },
      { text: '        self.name = "Raksha TN"', type: 'statement' },
      { text: '        self.university = "REVA University, Bengaluru"', type: 'statement' },
      { text: '        self.cgpa = 9.00', type: 'statement' },
      { text: '        self.stack = ["C", "Python", "MySQL", "Arduino"]', type: 'statement' },
      { text: '    def run_build(self):', type: 'function' },
      { text: '        return f"Executing {self.name}\'s build..."', type: 'print' },
      { text: 'journey = EngineeringJourney()', type: 'statement' },
      { text: 'print(journey.run_build())', type: 'print' },
    ],
    output: "Executing Raksha TN's build...\n>> All modules loaded successfully.",
  },
  arduino: {
    filename: 'sensor_telemetry.ino',
    language: 'cpp',
    lines: [
      { text: '#include <Arduino.h>', type: 'keyword' },
      { text: 'const int TRIG_PIN = 9;', type: 'statement' },
      { text: 'const int ECHO_PIN = 10;', type: 'statement' },
      { text: 'void setup() {', type: 'function' },
      { text: '    Serial.begin(9600);', type: 'statement' },
      { text: '    Serial.println("Hardware telemetry online.");', type: 'print' },
      { text: '}', type: 'function' },
      { text: 'void loop() {', type: 'function' },
      { text: '    // Processing ultrasonic distance sensor', type: 'comment' },
      { text: '    delay(1000);', type: 'statement' },
      { text: '}', type: 'function' },
    ],
    output: 'Hardware telemetry online.\nBaud rate: 9600 bps. Sensor ping active.',
  },
};

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: 'edu-1',
    period: '2024 - 2028 (Ongoing)',
    isCurrent: true,
    degree: 'B.Tech in Computer Science & Engineering',
    institution: 'REVA University, Bengaluru',
    scoreLabel: 'Current Academic CGPA',
    scoreValue: '9.00 / 10',
    isCgpa: true,
    color: 'secondary',
  },
  {
    id: 'edu-2',
    period: 'Class XII / Pre-University',
    isCurrent: false,
    degree: 'Senior Secondary (PUC)',
    institution: 'Narayana Pre-University College',
    scoreLabel: 'Final Score',
    scoreValue: '95%',
    color: 'primary',
  },
  {
    id: 'edu-3',
    period: 'Class X (SSLC)',
    isCurrent: false,
    degree: 'Secondary School Education',
    institution: 'Narayana School',
    scoreLabel: 'Final Score',
    scoreValue: '95%',
    color: 'tertiary',
  },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'proj-1',
    number: 'PROJECT 01',
    title: 'Smart Healthcare & Management',
    category: 'Concept & Prototype',
    description: 'A technology-focused concept exploring how digital tools can be used to make healthcare-related processes more accessible, organized, and efficient for patient records and clinic visits.',
    tags: ['Python', 'MySQL', 'Web Technologies', 'Data Modelling'],
    githubUrl: 'https://github.com',
    colorScheme: 'primary',
    overviewDetails: {
      summary: 'Smart Healthcare & Management is designed to tackle administrative bottlenecks in patient admission, clinical tracking, and medical record indexing. Built with relational databases and procedural logic.',
      keyFeatures: [
        'Centralized digital patient identification and diagnostic logs',
        'Relational schema preventing duplicate record entries across departments',
        'Structured appointment scheduling and status queues',
        'Secure data query filtering for doctors and medical staff',
      ],
      technologiesUsed: [
        'Python for algorithmic backend workflow logic',
        'MySQL for persistent relational database tables',
        'HTML5 & CSS3 for patient lookup interface prototypes',
      ],
      futureEnhancements: [
        'Automated prescription alerts and SMS integration',
        'Integration with wearable IoT telemetry (heart rate & oxygen monitors)',
      ],
    },
  },
  {
    id: 'proj-2',
    number: 'PROJECT 02',
    title: 'Arduino Sensor Projects',
    category: 'Embedded Systems',
    description: 'Hands-on experiments using Arduino microcontroller boards, environmental sensors, LEDs, and basic electronics to understand automation, live sensor telemetry, and hardware-software synergy.',
    tags: ['Arduino Uno', 'Sensors', 'C/C++', 'Circuits'],
    githubUrl: 'https://github.com',
    colorScheme: 'secondary',
    overviewDetails: {
      summary: 'A suite of embedded hardware projects utilizing Arduino Uno development boards. Explores real-time physical computing, analog-to-digital signal conversion, and responsive robotics.',
      keyFeatures: [
        'Ultrasonic distance sensing with proximity alerts via buzzers and LEDs',
        'Temperature & humidity sensor logging with serial monitor visualizer',
        'Infrared (IR) obstacle detection triggering automated servo motor gates',
        'Circuit design and breadboard prototyping adhering to voltage safety standards',
      ],
      technologiesUsed: [
        'Arduino Uno Microcontroller (ATmega328P)',
        'Embedded C / C++ via Arduino IDE',
        'Ultrasonic HC-SR04, DHT11 Temperature sensor, IR sensors',
      ],
      futureEnhancements: [
        'Wi-Fi telemetry transmission using ESP8266/ESP32 microcontrollers',
        'Cloud IoT dashboard sync for remote climate monitoring',
      ],
    },
  },
  {
    id: 'proj-3',
    number: 'PROJECT 03',
    title: 'Programming & Database Projects',
    category: 'Foundational Code',
    description: 'A structured collection of academic projects and programming exercises developed while building a strong foundation in C, Python, tabular data persistence, and problem-solving.',
    tags: ['C Logic', 'Python Scripts', 'MySQL', 'Git Repo'],
    githubUrl: 'https://github.com',
    colorScheme: 'tertiary',
    overviewDetails: {
      summary: 'A repository of computer science lab assignments and standalone computational tools exploring foundational paradigms: memory management, sorting/searching algorithms, and normalized database queries.',
      keyFeatures: [
        'Matrix manipulations, recursion, and dynamic pointer allocations in C',
        'Modular Python utilities for file parsing, text statistics, and arithmetic algorithms',
        'Relational database tables with Primary/Foreign keys and complex JOIN queries',
        'Clean Git commit conventions and comprehensive Markdown documentation',
      ],
      technologiesUsed: [
        'C Language (GCC Compiler, GDB)',
        'Python 3.x with standard libraries',
        'MySQL Workbench and CLI queries',
        'Git & GitHub for revision tracking',
      ],
      futureEnhancements: [
        'Comprehensive unit testing framework for algorithmic benchmarks',
        'Graphical UI wrapper using Tkinter / PyQt',
      ],
    },
  },
];

export const PRACTICAL_PILLARS = [
  {
    num: '01',
    title: 'Programming',
    desc: 'Building a strong foundation in C and Python through continuous algorithmic problem solving and practical coding exercises.',
    color: 'secondary',
  },
  {
    num: '02',
    title: 'Databases',
    desc: 'Mastering MySQL and relational database fundamentals through academic assignments, schema normalization, and practical queries.',
    color: 'primary',
  },
  {
    num: '03',
    title: 'Hardware',
    desc: 'Exploring Arduino microcontrollers, interfacing digital & analog sensors, LEDs, and understanding circuit mechanics.',
    color: 'tertiary',
  },
  {
    num: '04',
    title: 'Version Control',
    desc: 'Adopting Git and GitHub workflows for tracking codebase revisions, managing repos, and presenting projects cleanly.',
    color: 'secondary',
  },
];

export const SOFT_SKILLS = [
  { name: 'Communication', icon: 'forum', color: 'secondary' },
  { name: 'Teamwork', icon: 'groups', color: 'primary' },
  { name: 'Problem Solving', icon: 'psychology', color: 'tertiary' },
  { name: 'Creativity', icon: 'palette', color: 'secondary' },
  { name: 'Time Management', icon: 'schedule', color: 'primary' },
  { name: 'Adaptability', icon: 'published_with_changes', color: 'tertiary' },
  { name: 'Quick Learning', icon: 'bolt', color: 'secondary' },
  { name: 'Presentation Skills', icon: 'co_present', color: 'primary' },
  { name: 'Critical Thinking', icon: 'analytics', color: 'tertiary' },
  { name: 'Leadership', icon: 'flag', color: 'secondary' },
  { name: 'Self Motivation', icon: 'track_changes', color: 'primary' },
  { name: 'Attention to Detail', icon: 'center_focus_strong', color: 'tertiary' },
];

export const HOBBIES: Hobby[] = [
  {
    id: 'music',
    title: 'Music',
    description: 'Listening to eclectic music genres and discovering new sounds daily.',
    iconName: 'headphones',
    color: 'primary',
  },
  {
    id: 'reading',
    title: 'Reading & Fiction',
    description: 'Thrillers, horror, mysteries, humor, and captivating story-based fiction.',
    iconName: 'menu_book',
    color: 'secondary',
  },
  {
    id: 'travel',
    title: 'Travel',
    description: 'Exploring scenic places and tuning into audiobooks during transit.',
    iconName: 'flight_takeoff',
    color: 'tertiary',
  },
  {
    id: 'cooking',
    title: 'Cooking',
    description: 'Trying delicious new recipes and experimenting with food creations.',
    iconName: 'skillet',
    color: 'primary',
  },
  {
    id: 'movies',
    title: 'Movies & Series',
    description: 'Unwinding with cinema, storytelling web series, and thoughtful films.',
    iconName: 'movie',
    color: 'secondary',
  },
  {
    id: 'tech',
    title: 'Technology',
    description: 'Tracking new gadgets, software paradigms, and evolving dev tools.',
    iconName: 'smart_toy',
    color: 'tertiary',
  },
];

export const LANGUAGES = [
  { name: 'English', level: 'Good', role: 'Proficiency', color: 'secondary' },
  { name: 'Kannada', level: 'Good', role: 'Proficiency', color: 'primary' },
  { name: 'Hindi', level: 'Working', role: 'Proficiency', color: 'tertiary' },
];

export const ASPIRATIONS = [
  { icon: 'code', label: 'Technical Projects', color: 'secondary' },
  { icon: 'badge', label: 'Internships', color: 'primary' },
  { icon: 'verified', label: 'Certifications', color: 'tertiary' },
  { icon: 'commit', label: 'GitHub Milestones', color: 'secondary' },
  { icon: 'emoji_events', label: 'Competitions', color: 'primary' },
  { icon: 'hub', label: 'Peer Networking', color: 'tertiary' },
];
