---
layout: page
permalink: /publications/
title: Publications
nav: true
order: 2
---

<div id="react-publications-root"></div>

<script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
<script src="https://cdn.tailwindcss.com"></script>

<script type="text/babel">
const { useState, useMemo } = React;

// SVG Icons
const Download = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
    <polyline points="7 10 12 15 17 10"></polyline>
    <line x1="12" y1="15" x2="12" y2="3"></line>
  </svg>
);

const ExternalLink = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
);

const FileText = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
    <polyline points="14 2 14 8 20 8"></polyline>
    <line x1="16" y1="13" x2="8" y2="13"></line>
    <line x1="16" y1="17" x2="8" y2="17"></line>
  </svg>
);

const Database = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
  </svg>
);

const Quote = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
  </svg>
);

const BookOpen = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
  </svg>
);

const PapersWidget = () => {
  const [selectedYear, setSelectedYear] = useState('all');
  const [activeTab, setActiveTab] = useState('published');

  const publications = [
    {
      id: 49,
      year: 2026,
      title: "Political Science Under Pressure: Competition and Collaboration in a Growing Discipline, 2003-2023",
      authors: "William Dinneen and Carolina Torreblanca",
      journal: "Perspective on Politics",
      status: "forthcoming",
      abstract: "This study analyzes the evolution of political science scholarship using 140,000+ articles from 174 journals.",
      links: {
        pdf: "https://osf.io/preprints/osf/tmy37_v3",
        bibtex: "@article{grossman2026political,\n  title={Political Science Under Pressure},\n  author={Grossman, Guy},\n  year={2026}\n}"
      }
    },
    {
      id: 48,
      year: 2026,
      title: "The Politics of Climate Change in the Developing World",
      authors: "Audrey Sacks and Alice Xu",
      journal: "Annual Review of Political Science",
      status: "forthcoming",
      abstract: "Climate change politics in the developing world remains understudied.",
      links: {
        pdf: "/assets/pdf/2025_The_Politics_Of_Climate_Change_In_The_Developing_World.pdf",
        bibtex: "@article{grossman2026climate,\n  title={Climate Change Politics},\n  author={Grossman, Guy},\n  year={2026}\n}"
      }
    },
    {
      id: 47,
      year: 2025,
      title: "Ethical Oversight in Impact Evaluations",
      authors: "Darin Christensen and others",
      journal: "PNAS",
      volume: "122(47)",
      abstract: "We propose External Advisory Committees for ethical oversight.",
      links: {
        pdf: "https://www.pnas.org/doi/epdf/10.1073/pnas.2509773122",
        journal: "https://www.pnas.org/doi/10.1073/pnas.2509773122",
        bibtex: "@article{grossman2025ethical,\n  title={Ethical Oversight},\n  year={2025}\n}"
      }
    },
    {
      id: 44,
      year: 2024,
      title: "Turnout Turnaround: Ethnic Minority Victories Mobilize White Voters",
      authors: "Stephanie Zonszein",
      journal: "American Political Science Review",
      volume: "118(3): 1556-1562",
      abstract: "Ethnic minority electoral victories increase white voter turnout.",
      links: {
        pdf: "/assets/pdf/turnout-turnaround.pdf",
        journal: "https://doi.org/10.1017/S000305542300103X",
        bibtex: "@article{grossman2024turnout,\n  title={Turnout Turnaround},\n  year={2024}\n}"
      }
    },
    {
      id: 40,
      year: 2023,
      title: "Locked Down, Lashing Out: COVID-19 Effects on Asian Hate Crimes",
      authors: "Gemma Dipoppa and Stephanie Zonszein",
      journal: "Journal of Politics",
      volume: "85(2): 389-404",
      abstract: "COVID-19 increased hate crimes against Asian communities.",
      links: {
        pdf: "/assets/pdf/2023_JoP_locked_down.pdf",
        journal: "https://www.journals.uchicago.edu/doi/abs/10.1086/722346",
        bibtex: "@article{grossman2023locked,\n  title={Locked Down},\n  year={2023}\n}"
      }
    }
  ];

  const workingPapers = [
    {
      id: 1,
      title: "Can Community Policing Improve Police-Community Relations?",
      authors: "Robert A. Blair and Anna M. Wilke",
      status: "revise and resubmit",
      abstract: "Evidence from a randomized trial of community policing in Uganda.",
      links: {
        pdf: "https://osf.io/preprints/osf/wkrcm_v2",
        bibtex: "@unpublished{grossman2024community,\n  title={Community Policing},\n  year={2024}\n}"
      }
    },
    {
      id: 2,
      title: "Informal Connections Outweigh Co-authorship Ties",
      authors: "Lluís Danús and others",
      status: "revise and resubmit",
      abstract: "Informal academic networks predict research impact.",
      links: {
        bibtex: "@unpublished{grossman2024informal,\n  title={Informal Connections},\n  year={2024}\n}"
      }
    }
  ];

  const years = useMemo(() => {
    const uniqueYears = [...new Set(publications.map(p => p.year))].sort((a, b) => b - a);
    return ['all', ...uniqueYears];
  }, []);

  const filteredPublications = useMemo(() => {
    if (selectedYear === 'all') return publications;
    return publications.filter(p => p.year === selectedYear);
  }, [selectedYear]);

  const yearCounts = useMemo(() => {
    const counts = {};
    publications.forEach(p => {
      counts[p.year] = (counts[p.year] || 0) + 1;
    });
    return counts;
  }, []);

  const ActionButton = ({ icon: Icon, label, onClick, disabled }) => (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
        disabled
          ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
          : 'bg-white/80 text-gray-700 hover:bg-blue-50 hover:text-blue-700 border border-gray-200 hover:border-blue-300'
      }`}
    >
      <Icon />
      {label}
    </button>
  );

  const PaperCard = ({ paper, showYear = true }) => {
    const [showAbstract, setShowAbstract] = useState(false);
    const [showBibtex, setShowBibtex] = useState(false);

    return (
      <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all border border-gray-100">
        <div className="space-y-3">
          {showYear && paper.year && (
            <div className="text-sm font-semibold text-blue-600">{paper.year}</div>
          )}
          
          <h3 className="text-lg font-bold text-gray-900 leading-tight">{paper.title}</h3>
          
          <div className="text-sm text-gray-600">with {paper.authors}</div>
          
          {paper.journal && (
            <div className="text-sm font-medium text-gray-700">
              {paper.journal}
              {paper.volume && `, ${paper.volume}`}
              {paper.status && (
                <span className="ml-2 px-2 py-0.5 bg-yellow-100 text-yellow-800 rounded text-xs">
                  {paper.status}
                </span>
              )}
            </div>
          )}

          {!paper.journal && paper.status && (
            <div className="text-sm">
              <span className="px-2 py-0.5 bg-blue-100 text-blue-800 rounded text-xs font-medium">
                {paper.status}
              </span>
            </div>
          )}

          <div className="flex flex-wrap gap-2 pt-2">
            {paper.links.pdf && (
              <ActionButton icon={Download} label="PDF" onClick={() => window.open(paper.links.pdf, '_blank')} />
            )}
            {paper.links.journal && (
              <ActionButton icon={ExternalLink} label="Journal" onClick={() => window.open(paper.links.journal, '_blank')} />
            )}
            {paper.links.appendix && (
              <ActionButton icon={FileText} label="Appendix" onClick={() => window.open(paper.links.appendix, '_blank')} />
            )}
            {paper.links.replication && (
              <ActionButton icon={Database} label="Data" onClick={() => window.open(paper.links.replication, '_blank')} />
            )}
            <ActionButton icon={Quote} label="BibTeX" onClick={() => setShowBibtex(!showBibtex)} />
            {paper.abstract && (
              <ActionButton icon={BookOpen} label={showAbstract ? 'Hide Abstract' : 'Abstract'} onClick={() => setShowAbstract(!showAbstract)} />
            )}
          </div>

          {showAbstract && paper.abstract && (
            <div className="mt-4 p-4 bg-gray-50 rounded-lg text-sm text-gray-700 leading-relaxed">
              {paper.abstract}
            </div>
          )}

          {showBibtex && paper.links.bibtex && (
            <div className="mt-4 relative">
              <pre className="p-4 bg-gray-900 text-gray-100 rounded-lg text-xs overflow-x-auto">
                {paper.links.bibtex}
              </pre>
              <button
                onClick={() => navigator.clipboard.writeText(paper.links.bibtex)}
                className="absolute top-2 right-2 px-2 py-1 bg-gray-700 hover:bg-gray-600 text-white text-xs rounded"
              >
                Copy
              </button>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-8">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold text-gray-900">Research Publications</h1>
          <p className="text-gray-600">Guy Grossman • University of Pennsylvania</p>
        </div>

        <div className="flex gap-2 border-b border-gray-200">
          <button
            onClick={() => setActiveTab('published')}
            className={`px-6 py-3 font-medium transition-all ${
              activeTab === 'published' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'
            }`}
          >
            Published Papers ({publications.length})
          </button>
          <button
            onClick={() => setActiveTab('working')}
            className={`px-6 py-3 font-medium transition-all ${
              activeTab === 'working' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'
            }`}
          >
            Under Review ({workingPapers.length})
          </button>
        </div>

        {activeTab === 'published' ? (
          <>
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2">
                {years.map(year => (
                  <button
                    key={year}
                    onClick={() => setSelectedYear(year)}
                    className={`px-3 py-2 rounded-lg font-medium text-sm transition-all ${
                      selectedYear === year ? 'bg-blue-600 text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <div>{year === 'all' ? 'All' : year}</div>
                    {year !== 'all' && (
                      <div className="text-xs opacity-75 mt-0.5">({yearCounts[year] || 0})</div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              {filteredPublications.map(paper => (
                <PaperCard key={paper.id} paper={paper} showYear={selectedYear === 'all'} />
              ))}
            </div>
          </>
        ) : (
          <div className="space-y-4">
            {workingPapers.map(paper => (
              <PaperCard key={paper.id} paper={paper} showYear={false} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('react-publications-root'));
root.render(<PapersWidget />);
</script>

<style>
  #react-publications-root {
    margin-left: -2rem;
    margin-right: -2rem;
    margin-top: -2rem;
  }
</style>
