import React, { useState } from 'react';
import { Plus, Trash2, Printer, LayoutTemplate, User, Briefcase, GraduationCap, FolderGit2, Wrench, Mail, Phone, MapPin, ChevronRight, Download, Image as ImageIcon, CheckCircle2 } from 'lucide-react';

const App = () => {
  // --- States for Resume Data ---
  const [personalInfo, setPersonalInfo] = useState({
    name: 'Pankaj Kumar',
    title: 'MIS Executive',
    email: 'mis.essaar@gmail.com',
    phone: '+91-8938953093',
    location: 'Manesar, INDIA',
    photo: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png', // Default placeholder
    summary: 'A results-driven MIS Executive with 4.3 years of experience in automation, data management, and operational efficiency, backed by a strong foundation in security operations. Proficient in Google Workspace, Google Apps Script, Excel (VBA & Macros), JavaScript, and HTML with AI integration.',
  });

  const [experience, setExperience] = useState([
    {
      id: 1,
      company: 'Inizio Technology',
      role: 'MIS Executive',
      duration: 'Oct 2024 - Present',
      description: 'Responsible for managing, analyzing, and automating organizational data systems. Developed digital solutions minimizing manual work and improving reporting accuracy. Streamlined data validation and workflow approval systems, reducing manual effort by over 60%.',
    },
    {
      id: 2,
      company: 'Honda Motorcycle & Scooter (HMSI)',
      role: 'Security Officer & Data Entry Operator',
      duration: 'Nov 2021 - Oct 2024',
      description: 'Managed security-related MIS reports covering incidents, manpower performance, and operational trends. Developed automated dashboards for management reviews. Handled CCTV monitoring and incident investigation.',
    }
  ]);

  const [education, setEducation] = useState([
    {
      id: 1,
      degree: '12th Standard',
      institution: 'Uttarakhand Board',
      year: '2018',
      marks: '49.9%',
    },
    {
      id: 2,
      degree: '10th Standard',
      institution: 'Uttarakhand Board',
      year: '2016',
      marks: '45.9%',
    }
  ]);

  const [skills, setSkills] = useState('Google Apps Script, HTML, Javascript, Google Sheets, Data Analysis, Vendor Management, Power BI, Advanced Excel, Macros VBA');
  
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: 'Payroll & Attendance Web-Based Automation System',
      duration: '1 Week',
      description: 'Designed and developed a fully web-based Payroll & Attendance Management System. Implemented Face Recognition-based attendance marking. Delivered a 100% cost-free solution using Google Workspace tools.',
    }
  ]);

  const [template, setTemplate] = useState('modern_split'); // 'classic_ats', 'modern_split', 'creative_red', 'corporate_pro', 'minimal_grid'
  const [activeTab, setActiveTab] = useState('personal'); // Tab navigation state

  // --- Handlers ---
  const handlePersonalInfoChange = (e) => {
    setPersonalInfo({ ...personalInfo, [e.target.name]: e.target.value });
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPersonalInfo({ ...personalInfo, photo: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleArrayChange = (index, field, value, setter, state) => {
    const newState = [...state];
    newState[index][field] = value;
    setter(newState);
  };

  const addItem = (setter, state, defaultItem) => {
    setter([...state, { id: Date.now(), ...defaultItem }]);
  };

  const removeItem = (id, setter, state) => {
    setter(state.filter(item => item.id !== id));
  };

  const handlePrint = () => {
    window.print();
  };

  // --- Templates ---
  
  // 1. Classic ATS Template (Like Pankaj PDF - Strictly Text, Clean)
  const ClassicTemplate = () => (
    <div className="font-sans text-gray-900 leading-relaxed p-10 bg-white h-full">
      <div className="text-center mb-6 border-b-2 border-gray-800 pb-6">
        <h1 className="text-4xl font-bold uppercase tracking-wider mb-2">{personalInfo.name}</h1>
        <h2 className="text-xl text-gray-700 font-semibold mb-3">{personalInfo.title}</h2>
        <p className="text-sm font-medium">
          {personalInfo.phone} | {personalInfo.email} | {personalInfo.location}
        </p>
      </div>

      {personalInfo.summary && (
        <div className="mb-6">
          <h3 className="text-sm font-bold border-b border-gray-300 mb-2 uppercase tracking-widest text-gray-500 pb-1">Profile Summary</h3>
          <p className="text-sm text-justify leading-relaxed">{personalInfo.summary}</p>
        </div>
      )}

      {skills && (
        <div className="mb-6">
          <h3 className="text-sm font-bold border-b border-gray-300 mb-2 uppercase tracking-widest text-gray-500 pb-1">Skills</h3>
          <p className="text-sm leading-relaxed font-medium text-gray-800">{skills.split(',').map(s => s.trim()).join('  •  ')}</p>
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-sm font-bold border-b border-gray-300 mb-4 uppercase tracking-widest text-gray-500 pb-1">Work Experience</h3>
        {experience.map((exp) => (
          <div key={exp.id} className="mb-5">
            <div className="flex justify-between font-bold text-base mb-1">
              <span className="text-gray-900">{exp.role} - <span className="font-semibold text-gray-600">{exp.company}</span></span>
              <span className="text-sm text-gray-600">{exp.duration}</span>
            </div>
            <ul className="list-disc list-outside ml-5 text-sm text-gray-700 space-y-1 mt-2">
              {exp.description.split('. ').map((point, i) => point && <li key={i}>{point.trim()}</li>)}
            </ul>
          </div>
        ))}
      </div>

      {projects.length > 0 && (
        <div className="mb-6">
          <h3 className="text-sm font-bold border-b border-gray-300 mb-4 uppercase tracking-widest text-gray-500 pb-1">Projects</h3>
          {projects.map((proj) => (
            <div key={proj.id} className="mb-4">
              <div className="flex justify-between font-bold mb-1">
                <span className="text-gray-900">{proj.title}</span>
                <span className="text-sm font-normal text-gray-600">{proj.duration}</span>
              </div>
              <p className="text-sm mt-1 text-gray-700">{proj.description}</p>
            </div>
          ))}
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-sm font-bold border-b border-gray-300 mb-4 uppercase tracking-widest text-gray-500 pb-1">Education</h3>
        {education.map((edu) => (
          <div key={edu.id} className="mb-2 flex justify-between text-sm">
            <div>
              <span className="font-bold text-gray-900">{edu.degree}</span> <span className="text-gray-600">| {edu.institution}</span>
            </div>
            <div className="font-medium text-gray-700">
              {edu.year} | {edu.marks}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // 2. Modern Split Template (Like Rashmi PDF - Sidebar + Photo)
  const ModernTemplate = () => (
    <div className="flex h-full font-sans text-gray-800 bg-white min-h-[297mm]">
      {/* Left Column */}
      <div className="w-[35%] bg-[#1e293b] text-white p-8">
        <div className="flex justify-center mb-8">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-slate-500 shadow-xl">
            <img src={personalInfo.photo || 'https://via.placeholder.com/150'} alt="Profile" className="w-full h-full object-cover" />
          </div>
        </div>
        
        <h1 className="text-2xl font-extrabold mb-1 leading-tight tracking-tight text-center">{personalInfo.name}</h1>
        <h2 className="text-xs font-medium text-blue-400 uppercase tracking-widest mb-8 text-center">{personalInfo.title}</h2>
        
        <div className="mb-8 space-y-4 text-xs font-medium text-slate-300">
          <div className="flex items-center gap-3"><Mail className="w-4 h-4 text-slate-400 shrink-0"/> <span className="break-all">{personalInfo.email}</span></div>
          <div className="flex items-center gap-3"><Phone className="w-4 h-4 text-slate-400 shrink-0"/> <span>{personalInfo.phone}</span></div>
          <div className="flex items-center gap-3"><MapPin className="w-4 h-4 text-slate-400 shrink-0"/> <span>{personalInfo.location}</span></div>
        </div>

        <div className="mb-8">
          <h3 className="text-xs font-bold uppercase tracking-widest mb-4 text-white border-b border-slate-600 pb-2">Key Skills</h3>
          <ul className="flex flex-col gap-2 text-xs text-slate-300">
            {skills.split(',').map((s, i) => <li key={i} className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full shrink-0"></div>{s.trim()}</li>)}
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-xs font-bold uppercase tracking-widest mb-4 text-white border-b border-slate-600 pb-2">Education</h3>
          {education.map((edu) => (
            <div key={edu.id} className="mb-4">
              <div className="font-bold text-sm text-slate-100">{edu.degree}</div>
              <div className="text-xs text-slate-400 mt-1">{edu.institution}</div>
              <div className="text-xs text-slate-500 mt-0.5">{edu.year} | {edu.marks}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Column */}
      <div className="w-[65%] p-8 bg-slate-50">
        {personalInfo.summary && (
          <div className="mb-8">
            <h3 className="text-sm font-bold uppercase tracking-widest mb-3 text-slate-900 border-b-2 border-slate-200 pb-2">Profile Summary</h3>
            <p className="text-xs text-slate-600 leading-relaxed text-justify">{personalInfo.summary}</p>
          </div>
        )}

        <div className="mb-8">
          <h3 className="text-sm font-bold uppercase tracking-widest mb-4 text-slate-900 border-b-2 border-slate-200 pb-2">Work Experience</h3>
          {experience.map((exp) => (
            <div key={exp.id} className="mb-6 relative pl-4 border-l-2 border-slate-200">
              <div className="absolute w-2 h-2 bg-blue-500 rounded-full -left-[5px] top-1.5"></div>
              <div className="flex justify-between items-baseline mb-1">
                <h4 className="font-bold text-slate-900 text-sm">{exp.role}</h4>
                <span className="text-[10px] font-bold text-blue-700 bg-blue-100 px-2.5 py-1 rounded-full">{exp.duration}</span>
              </div>
              <div className="text-xs font-bold text-slate-500 mb-2 uppercase tracking-wide">{exp.company}</div>
              <ul className="list-disc list-outside ml-4 text-xs text-slate-600 space-y-1.5 leading-relaxed">
                {exp.description.split('. ').map((point, i) => point && <li key={i}>{point.trim()}</li>)}
              </ul>
            </div>
          ))}
        </div>

        {projects.length > 0 && (
          <div className="mb-8">
            <h3 className="text-sm font-bold uppercase tracking-widest mb-4 text-slate-900 border-b-2 border-slate-200 pb-2">Projects</h3>
            {projects.map((proj) => (
              <div key={proj.id} className="mb-5 relative pl-4 border-l-2 border-slate-200">
                <div className="absolute w-2 h-2 bg-blue-500 rounded-full -left-[5px] top-1.5"></div>
                <div className="flex justify-between items-baseline mb-1">
                  <h4 className="font-bold text-slate-900 text-sm">{proj.title}</h4>
                  <span className="text-[10px] text-slate-500 font-bold bg-slate-200 px-2 rounded-full py-0.5">{proj.duration}</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mt-1">{proj.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  // 3. Creative Red Template (Like Meherunesha PDF - Red Accent & Photo)
  const CreativeTemplate = () => (
    <div className="font-sans text-gray-800 bg-white min-h-[297mm] p-8">
      {/* Header section */}
      <div className="flex gap-8 items-center border-b-4 border-red-500 pb-6 mb-8">
        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-red-500 shrink-0">
          <img src={personalInfo.photo || 'https://via.placeholder.com/150'} alt="Profile" className="w-full h-full object-cover" />
        </div>
        <div>
          <h1 className="text-4xl font-black text-gray-900 tracking-tight uppercase mb-2">{personalInfo.name}</h1>
          <h2 className="text-lg font-bold text-red-600 uppercase tracking-widest mb-4">{personalInfo.title}</h2>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-semibold text-gray-600">
            <span className="flex items-center gap-1"><Phone className="w-3 h-3 text-red-500"/> {personalInfo.phone}</span>
            <span className="flex items-center gap-1"><Mail className="w-3 h-3 text-red-500"/> {personalInfo.email}</span>
            <span className="flex items-center gap-1"><MapPin className="w-3 h-3 text-red-500"/> {personalInfo.location}</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-10">
        {/* Left Narrow Column */}
        <div className="col-span-1 space-y-8">
          <div>
            <h3 className="text-sm font-black uppercase text-gray-900 border-l-4 border-red-500 pl-3 mb-4">Key Skills</h3>
            <div className="flex flex-col gap-2">
              {skills.split(',').map((s, i) => (
                <span key={i} className="text-xs font-bold text-gray-700 bg-gray-100 py-1.5 px-3 rounded-md border-l-2 border-red-300">
                  {s.trim()}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase text-gray-900 border-l-4 border-red-500 pl-3 mb-4">Education</h3>
            <div className="space-y-4">
              {education.map((edu) => (
                <div key={edu.id}>
                  <div className="font-bold text-xs text-gray-900">{edu.degree}</div>
                  <div className="text-[10px] font-semibold text-red-600 mt-1">{edu.year} | {edu.marks}</div>
                  <div className="text-[10px] text-gray-500 mt-0.5">{edu.institution}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Wide Column */}
        <div className="col-span-2 space-y-8">
          {personalInfo.summary && (
            <div>
              <h3 className="text-sm font-black uppercase text-gray-900 border-l-4 border-red-500 pl-3 mb-4">Profile Summary</h3>
              <p className="text-xs text-gray-700 leading-relaxed font-medium">{personalInfo.summary}</p>
            </div>
          )}

          <div>
            <h3 className="text-sm font-black uppercase text-gray-900 border-l-4 border-red-500 pl-3 mb-4">Work Experience</h3>
            <div className="space-y-6">
              {experience.map((exp) => (
                <div key={exp.id}>
                  <div className="flex justify-between items-center mb-1">
                    <h4 className="font-bold text-gray-900 text-sm">{exp.role}</h4>
                    <span className="text-[10px] font-bold text-red-600">{exp.duration}</span>
                  </div>
                  <div className="text-xs font-bold text-gray-500 mb-2">{exp.company}</div>
                  <p className="text-xs text-gray-700 leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          {projects.length > 0 && (
            <div>
              <h3 className="text-sm font-black uppercase text-gray-900 border-l-4 border-red-500 pl-3 mb-4">Projects</h3>
              <div className="space-y-5">
                {projects.map((proj) => (
                  <div key={proj.id}>
                    <div className="flex justify-between items-center mb-1">
                      <h4 className="font-bold text-gray-900 text-sm">{proj.title}</h4>
                      <span className="text-[10px] font-bold text-gray-500">{proj.duration}</span>
                    </div>
                    <p className="text-xs text-gray-700 leading-relaxed">{proj.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  // 4. Corporate Pro Template (AI Added - Sharp, Professional, Blue Line)
  const CorporateTemplate = () => (
    <div className="font-serif text-gray-900 bg-white min-h-[297mm]">
      <div className="h-4 bg-blue-800 w-full"></div>
      <div className="p-10">
        <header className="flex justify-between items-end border-b pb-6 mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">{personalInfo.name}</h1>
            <h2 className="text-lg text-blue-800 font-semibold">{personalInfo.title}</h2>
          </div>
          <div className="text-right text-xs text-gray-600 space-y-1 font-sans">
            <div>{personalInfo.email}</div>
            <div>{personalInfo.phone}</div>
            <div>{personalInfo.location}</div>
          </div>
        </header>

        {personalInfo.summary && (
          <div className="mb-8">
            <h3 className="text-sm font-bold text-blue-800 uppercase tracking-widest mb-3">Professional Summary</h3>
            <p className="text-sm text-gray-700 leading-relaxed">{personalInfo.summary}</p>
          </div>
        )}

        <div className="mb-8">
          <h3 className="text-sm font-bold text-blue-800 uppercase tracking-widest mb-4">Experience & Achievements</h3>
          <div className="space-y-6">
            {experience.map((exp) => (
              <div key={exp.id} className="grid grid-cols-4 gap-4">
                <div className="col-span-1 text-xs font-bold text-gray-500 font-sans mt-1">
                  {exp.duration}
                </div>
                <div className="col-span-3">
                  <h4 className="font-bold text-gray-900 text-base">{exp.role}</h4>
                  <div className="text-sm italic text-gray-600 mb-2">{exp.company}</div>
                  <ul className="list-disc list-outside ml-4 text-sm text-gray-700 space-y-1.5">
                    {exp.description.split('. ').map((point, i) => point && <li key={i}>{point.trim()}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-sm font-bold text-blue-800 uppercase tracking-widest mb-4">Technical Expertise</h3>
          <div className="flex flex-wrap gap-2 font-sans">
            {skills.split(',').map((s, i) => (
              <span key={i} className="text-xs font-semibold text-blue-900 bg-blue-50 px-3 py-1.5 border border-blue-100 rounded">
                {s.trim()}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 font-sans">
          <div>
             <h3 className="text-sm font-bold text-blue-800 uppercase tracking-widest mb-4 font-serif">Education</h3>
             {education.map((edu) => (
                <div key={edu.id} className="mb-3">
                  <div className="font-bold text-sm text-gray-900">{edu.degree}</div>
                  <div className="text-xs text-gray-600">{edu.institution}</div>
                  <div className="text-xs text-gray-500 font-medium">{edu.year} | {edu.marks}</div>
                </div>
              ))}
          </div>
          {projects.length > 0 && (
            <div>
              <h3 className="text-sm font-bold text-blue-800 uppercase tracking-widest mb-4 font-serif">Key Projects</h3>
               {projects.map((proj) => (
                <div key={proj.id} className="mb-3">
                  <div className="font-bold text-sm text-gray-900 flex justify-between"><span>{proj.title}</span> <span className="text-xs font-normal text-gray-500">{proj.duration}</span></div>
                  <p className="text-xs text-gray-700 mt-1">{proj.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );

  // 5. Minimal Grid Template (AI Added - Modern Layout without sidebar)
  const MinimalGridTemplate = () => (
    <div className="font-sans text-gray-800 p-10 bg-white min-h-[297mm]">
      <header className="mb-10 text-center">
        <h1 className="text-5xl font-black tracking-tight mb-2 text-gray-900">{personalInfo.name}</h1>
        <div className="text-xl text-indigo-600 mb-4 font-medium tracking-wide">{personalInfo.title}</div>
        <div className="text-xs font-bold text-gray-500 flex justify-center gap-6 uppercase tracking-wider">
          <span>{personalInfo.email}</span>
          <span>{personalInfo.phone}</span>
          <span>{personalInfo.location}</span>
        </div>
      </header>

      {personalInfo.summary && (
        <section className="mb-10 text-center px-10">
          <p className="text-sm text-gray-600 leading-relaxed italic border-y py-4 border-gray-100 font-medium">{personalInfo.summary}</p>
        </section>
      )}

      <div className="grid grid-cols-2 gap-x-12 gap-y-10">
        <section className="col-span-2">
          <h2 className="text-xl font-black text-gray-900 border-b-2 border-indigo-600 pb-2 mb-6 inline-block">Work Experience</h2>
          <div className="grid grid-cols-2 gap-8">
            {experience.map((exp) => (
              <div key={exp.id} className="bg-gray-50 p-5 rounded-2xl">
                <h3 className="font-bold text-gray-900 text-base">{exp.role}</h3>
                <div className="text-xs text-indigo-600 font-bold mb-3 uppercase tracking-wider mt-1">{exp.company} <span className="text-gray-400 font-medium lowercase ml-1">({exp.duration})</span></div>
                <p className="text-xs text-gray-600 leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-black text-gray-900 border-b-2 border-indigo-600 pb-2 mb-6 inline-block">Core Skills</h2>
          <div className="flex flex-wrap gap-2">
             {skills.split(',').map((s, i) => (
              <span key={i} className="text-xs font-bold text-gray-700 bg-white border-2 border-gray-100 px-4 py-2 rounded-full shadow-sm">
                {s.trim()}
              </span>
            ))}
          </div>
        </section>

        <section>
           <h2 className="text-xl font-black text-gray-900 border-b-2 border-indigo-600 pb-2 mb-6 inline-block">Education</h2>
           <div className="space-y-4">
            {education.map((edu) => (
              <div key={edu.id} className="flex justify-between items-center border-b border-gray-100 pb-3">
                <div>
                  <div className="font-bold text-sm text-gray-900">{edu.degree}</div>
                  <div className="text-xs text-gray-500 mt-0.5">{edu.institution}</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-black text-indigo-600">{edu.marks}</div>
                  <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{edu.year}</div>
                </div>
              </div>
            ))}
           </div>
        </section>

        {projects.length > 0 && (
          <section className="col-span-2">
            <h2 className="text-xl font-black text-gray-900 border-b-2 border-indigo-600 pb-2 mb-6 inline-block">Highlighted Projects</h2>
            <div className="grid grid-cols-2 gap-6">
              {projects.map((proj) => (
                <div key={proj.id} className="border border-gray-200 p-4 rounded-xl">
                  <h3 className="font-bold text-gray-900 text-sm mb-1">{proj.title}</h3>
                  <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-2">{proj.duration}</div>
                  <p className="text-xs text-gray-600 mt-1">{proj.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 flex flex-col md:flex-row print:bg-white print:block font-sans overflow-hidden">
      
      {/* 1. DARK ICON SIDEBAR */}
      <div className="w-full md:w-20 bg-slate-900 flex md:flex-col items-center py-4 md:py-8 gap-2 md:gap-8 print:hidden z-20 shrink-0 overflow-x-auto md:overflow-visible shadow-2xl shadow-slate-900/50">
        <div className="text-blue-500 md:mb-4 px-4 md:px-0">
          <LayoutTemplate className="w-8 h-8 drop-shadow-md" />
        </div>
        <button onClick={() => setActiveTab('personal')} className={`p-3 rounded-xl transition-all duration-300 flex flex-col items-center gap-1 ${activeTab === 'personal' ? 'bg-blue-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.4)] scale-110' : 'text-slate-400 hover:text-white hover:bg-slate-800'}`} title="Personal Info">
          <User className="w-6 h-6" />
        </button>
        <button onClick={() => setActiveTab('experience')} className={`p-3 rounded-xl transition-all duration-300 flex flex-col items-center gap-1 ${activeTab === 'experience' ? 'bg-blue-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.4)] scale-110' : 'text-slate-400 hover:text-white hover:bg-slate-800'}`} title="Experience">
          <Briefcase className="w-6 h-6" />
        </button>
        <button onClick={() => setActiveTab('education')} className={`p-3 rounded-xl transition-all duration-300 flex flex-col items-center gap-1 ${activeTab === 'education' ? 'bg-blue-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.4)] scale-110' : 'text-slate-400 hover:text-white hover:bg-slate-800'}`} title="Education">
          <GraduationCap className="w-6 h-6" />
        </button>
        <button onClick={() => setActiveTab('projects')} className={`p-3 rounded-xl transition-all duration-300 flex flex-col items-center gap-1 ${activeTab === 'projects' ? 'bg-blue-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.4)] scale-110' : 'text-slate-400 hover:text-white hover:bg-slate-800'}`} title="Projects">
          <FolderGit2 className="w-6 h-6" />
        </button>
        <button onClick={() => setActiveTab('skills')} className={`p-3 rounded-xl transition-all duration-300 flex flex-col items-center gap-1 ${activeTab === 'skills' ? 'bg-blue-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.4)] scale-110' : 'text-slate-400 hover:text-white hover:bg-slate-800'}`} title="Skills">
          <Wrench className="w-6 h-6" />
        </button>
      </div>

      {/* 2. WHITE FORM PANEL */}
      <div className="w-full md:w-[380px] bg-white shadow-[8px_0_30px_rgba(0,0,0,0.06)] overflow-y-auto h-auto md:h-screen print:hidden z-10 shrink-0 border-r border-slate-100 flex flex-col custom-scrollbar">
        <div className="p-6 border-b border-slate-100 bg-white/80 backdrop-blur-md sticky top-0 z-10">
           <h2 className="text-xl font-extrabold text-slate-800 tracking-tight">Editor Studio</h2>
           <p className="text-xs text-slate-500 mt-1 font-medium">Craft your perfect resume</p>
        </div>

        <div className="p-6 flex-1">
          {/* Premium Template Selector */}
          <div className="mb-8">
            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 block">Design Templates</label>
            <div className="grid grid-cols-2 gap-3">
              {[
                { id: 'classic_ats', name: 'Classic ATS', desc: 'Pankaj Style' },
                { id: 'modern_split', name: 'Modern Split', desc: 'Rashmi Style' },
                { id: 'creative_red', name: 'Creative Red', desc: 'Meherunesha Style' },
                { id: 'corporate_pro', name: 'Corporate Pro', desc: 'New Addition' },
                { id: 'minimal_grid', name: 'Minimal Grid', desc: 'New Addition' }
              ].map((tpl) => (
                <button 
                  key={tpl.id}
                  onClick={() => setTemplate(tpl.id)} 
                  className={`relative flex flex-col items-start p-3 rounded-xl border-2 transition-all duration-200 ${template === tpl.id ? 'border-blue-600 bg-blue-50/50 shadow-md' : 'border-slate-100 bg-white hover:border-blue-300 hover:bg-slate-50'}`}
                >
                  <span className={`text-sm font-bold ${template === tpl.id ? 'text-blue-700' : 'text-slate-700'}`}>{tpl.name}</span>
                  <span className="text-[10px] text-slate-500 font-medium mt-0.5">{tpl.desc}</span>
                  {template === tpl.id && <CheckCircle2 className="w-4 h-4 text-blue-600 absolute top-3 right-3" />}
                </button>
              ))}
            </div>
          </div>

          {/* Dynamic Form Sections based on activeTab */}
          {activeTab === 'personal' && (
            <div className="space-y-4 animate-in fade-in slide-in-from-left-4 duration-300">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 block">Personal Details</label>
              <div className="space-y-3">
                <div className="flex gap-3">
                  <div className="w-16 h-16 rounded-full bg-slate-100 border-2 border-dashed border-slate-300 flex items-center justify-center overflow-hidden shrink-0">
                    {personalInfo.photo ? <img src={personalInfo.photo} alt="Profile" className="w-full h-full object-cover" /> : <ImageIcon className="w-6 h-6 text-slate-400" />}
                  </div>
                  <div className="flex-1 flex flex-col justify-center">
                    <label className="text-[10px] font-semibold text-slate-500 uppercase ml-1 mb-1">Upload Photo</label>
                    <input type="file" accept="image/*" onChange={handlePhotoUpload} className="w-full text-xs text-slate-500 file:mr-2 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-bold file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200 cursor-pointer transition" />
                    <input type="text" name="photo" value={personalInfo.photo} onChange={handlePersonalInfoChange} placeholder="Or paste image URL..." className="w-full mt-2 p-2 bg-slate-50 border border-slate-200 rounded-lg text-xs focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition" />
                  </div>
                </div>
                <div><label className="text-[10px] font-semibold text-slate-500 uppercase ml-1">Full Name</label><input type="text" name="name" value={personalInfo.name} onChange={handlePersonalInfoChange} className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition" /></div>
                <div><label className="text-[10px] font-semibold text-slate-500 uppercase ml-1">Job Title</label><input type="text" name="title" value={personalInfo.title} onChange={handlePersonalInfoChange} className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition" /></div>
                <div><label className="text-[10px] font-semibold text-slate-500 uppercase ml-1">Email</label><input type="email" name="email" value={personalInfo.email} onChange={handlePersonalInfoChange} className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition" /></div>
                <div><label className="text-[10px] font-semibold text-slate-500 uppercase ml-1">Phone</label><input type="text" name="phone" value={personalInfo.phone} onChange={handlePersonalInfoChange} className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition" /></div>
                <div><label className="text-[10px] font-semibold text-slate-500 uppercase ml-1">Location</label><input type="text" name="location" value={personalInfo.location} onChange={handlePersonalInfoChange} className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition" /></div>
                <div><label className="text-[10px] font-semibold text-slate-500 uppercase ml-1">Professional Summary</label><textarea name="summary" value={personalInfo.summary} onChange={handlePersonalInfoChange} rows="5" className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition resize-none"></textarea></div>
              </div>
            </div>
          )}

          {activeTab === 'experience' && (
            <div className="space-y-4 animate-in fade-in slide-in-from-left-4 duration-300">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 block">Work Experience</label>
              {experience.map((exp, index) => (
                <div key={exp.id} className="p-4 bg-slate-50 border border-slate-200 rounded-xl relative group hover:border-slate-300 transition shadow-sm">
                  <button onClick={() => removeItem(exp.id, setExperience, experience)} className="absolute -top-2 -right-2 bg-red-100 text-red-600 p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition shadow-md hover:bg-red-200">
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                  <div className="space-y-3">
                    <div><label className="text-[10px] font-semibold text-slate-500 uppercase ml-1">Company</label><input type="text" value={exp.company} onChange={(e) => handleArrayChange(index, 'company', e.target.value, setExperience, experience)} className="w-full p-2 bg-white border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none transition" /></div>
                    <div><label className="text-[10px] font-semibold text-slate-500 uppercase ml-1">Role</label><input type="text" value={exp.role} onChange={(e) => handleArrayChange(index, 'role', e.target.value, setExperience, experience)} className="w-full p-2 bg-white border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none transition" /></div>
                    <div><label className="text-[10px] font-semibold text-slate-500 uppercase ml-1">Duration</label><input type="text" value={exp.duration} onChange={(e) => handleArrayChange(index, 'duration', e.target.value, setExperience, experience)} className="w-full p-2 bg-white border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none transition" /></div>
                    <div><label className="text-[10px] font-semibold text-slate-500 uppercase ml-1">Description (Use . for bullets)</label><textarea value={exp.description} onChange={(e) => handleArrayChange(index, 'description', e.target.value, setExperience, experience)} rows="4" className="w-full p-2 bg-white border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none transition resize-none"></textarea></div>
                  </div>
                </div>
              ))}
              <button onClick={() => addItem(setExperience, experience, { company: '', role: '', duration: '', description: '' })} className="w-full py-3 border-2 border-dashed border-slate-300 text-slate-500 rounded-xl text-sm font-bold flex items-center justify-center gap-2 hover:border-blue-500 hover:text-blue-600 transition bg-white hover:bg-slate-50">
                <Plus className="w-4 h-4" /> Add Experience
              </button>
            </div>
          )}

          {activeTab === 'education' && (
            <div className="space-y-4 animate-in fade-in slide-in-from-left-4 duration-300">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 block">Education</label>
              {education.map((edu, index) => (
                <div key={edu.id} className="p-4 bg-slate-50 border border-slate-200 rounded-xl relative group hover:border-slate-300 transition shadow-sm">
                   <button onClick={() => removeItem(edu.id, setEducation, education)} className="absolute -top-2 -right-2 bg-red-100 text-red-600 p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition shadow-md hover:bg-red-200">
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                  <div className="space-y-3">
                    <div><label className="text-[10px] font-semibold text-slate-500 uppercase ml-1">Degree</label><input type="text" value={edu.degree} onChange={(e) => handleArrayChange(index, 'degree', e.target.value, setEducation, education)} className="w-full p-2 bg-white border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none transition" /></div>
                    <div><label className="text-[10px] font-semibold text-slate-500 uppercase ml-1">Institution</label><input type="text" value={edu.institution} onChange={(e) => handleArrayChange(index, 'institution', e.target.value, setEducation, education)} className="w-full p-2 bg-white border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none transition" /></div>
                    <div className="flex gap-2">
                      <div className="w-1/2"><label className="text-[10px] font-semibold text-slate-500 uppercase ml-1">Year</label><input type="text" value={edu.year} onChange={(e) => handleArrayChange(index, 'year', e.target.value, setEducation, education)} className="w-full p-2 bg-white border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none transition" /></div>
                      <div className="w-1/2"><label className="text-[10px] font-semibold text-slate-500 uppercase ml-1">Marks</label><input type="text" value={edu.marks} onChange={(e) => handleArrayChange(index, 'marks', e.target.value, setEducation, education)} className="w-full p-2 bg-white border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none transition" /></div>
                    </div>
                  </div>
                </div>
              ))}
               <button onClick={() => addItem(setEducation, education, { degree: '', institution: '', year: '', marks: '' })} className="w-full py-3 border-2 border-dashed border-slate-300 text-slate-500 rounded-xl text-sm font-bold flex items-center justify-center gap-2 hover:border-blue-500 hover:text-blue-600 transition bg-white hover:bg-slate-50">
                <Plus className="w-4 h-4" /> Add Education
              </button>
            </div>
          )}

          {activeTab === 'projects' && (
            <div className="space-y-4 animate-in fade-in slide-in-from-left-4 duration-300">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 block">Projects</label>
              {projects.map((proj, index) => (
                <div key={proj.id} className="p-4 bg-slate-50 border border-slate-200 rounded-xl relative group hover:border-slate-300 transition shadow-sm">
                   <button onClick={() => removeItem(proj.id, setProjects, projects)} className="absolute -top-2 -right-2 bg-red-100 text-red-600 p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition shadow-md hover:bg-red-200">
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                  <div className="space-y-3">
                    <div><label className="text-[10px] font-semibold text-slate-500 uppercase ml-1">Project Title</label><input type="text" value={proj.title} onChange={(e) => handleArrayChange(index, 'title', e.target.value, setProjects, projects)} className="w-full p-2 bg-white border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none transition" /></div>
                    <div><label className="text-[10px] font-semibold text-slate-500 uppercase ml-1">Duration</label><input type="text" value={proj.duration} onChange={(e) => handleArrayChange(index, 'duration', e.target.value, setProjects, projects)} className="w-full p-2 bg-white border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none transition" /></div>
                    <div><label className="text-[10px] font-semibold text-slate-500 uppercase ml-1">Description</label><textarea value={proj.description} onChange={(e) => handleArrayChange(index, 'description', e.target.value, setProjects, projects)} rows="3" className="w-full p-2 bg-white border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none transition resize-none"></textarea></div>
                  </div>
                </div>
              ))}
               <button onClick={() => addItem(setProjects, projects, { title: '', duration: '', description: '' })} className="w-full py-3 border-2 border-dashed border-slate-300 text-slate-500 rounded-xl text-sm font-bold flex items-center justify-center gap-2 hover:border-blue-500 hover:text-blue-600 transition bg-white hover:bg-slate-50">
                <Plus className="w-4 h-4" /> Add Project
              </button>
            </div>
          )}

          {activeTab === 'skills' && (
            <div className="space-y-4 animate-in fade-in slide-in-from-left-4 duration-300">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 block">Skills</label>
              <div className="bg-blue-50/80 p-3 rounded-lg mb-2 border border-blue-100">
                <p className="text-xs text-blue-700 font-medium">Use commas (,) to separate your skills.</p>
              </div>
              <textarea value={skills} onChange={(e) => setSkills(e.target.value)} placeholder="e.g. MS Excel, Tally, HTML, Communication" rows="6" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition resize-none leading-relaxed"></textarea>
            </div>
          )}
        </div>
      </div>

      {/* 3. PREVIEW CANVAS (A4 Sized) */}
      <div className="flex-1 h-auto md:h-screen overflow-y-auto bg-transparent flex flex-col items-center py-6 md:py-10 print:w-full print:p-0 print:m-0 print:h-auto print:bg-white print:block custom-scrollbar">
        
        <div className="w-full max-w-[210mm] flex justify-between items-center mb-6 px-4 md:px-0 print:hidden sticky top-0 z-20">
          <div className="bg-white/80 backdrop-blur-md px-4 py-2 rounded-full shadow-sm border border-slate-200 text-sm font-bold text-slate-700 hidden md:block">
            Live Preview (A4 Size)
          </div>
          <button 
            onClick={handlePrint}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-xl shadow-[0_8px_20px_rgba(37,99,235,0.25)] font-bold text-sm flex items-center gap-2 transition transform hover:-translate-y-0.5 ml-auto"
          >
            <Download className="w-4 h-4" />
            Download PDF
          </button>
        </div>

        {/* Scaled wrapper for smaller screens, full size for desktop/print */}
        <div className="w-full max-w-[210mm] px-4 md:px-0">
          <div className="bg-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-sm overflow-hidden print:shadow-none print:w-full print:min-h-0 print:p-0 transition-all duration-500">
            {template === 'classic_ats' && <ClassicTemplate />}
            {template === 'modern_split' && <ModernTemplate />}
            {template === 'creative_red' && <CreativeTemplate />}
            {template === 'corporate_pro' && <CorporateTemplate />}
            {template === 'minimal_grid' && <MinimalGridTemplate />}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #cbd5e1;
          border-radius: 20px;
        }
        .custom-scrollbar:hover::-webkit-scrollbar-thumb {
          background-color: #94a3b8;
        }
      `}} />
    </div>
  );
};

export default App;
