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

// Import Lucide icons via CDN
const Download = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
    <polyline points="7 10 12 15 17 10"></polyline>
    <line x1="12" y1="15" x2="12" y2="3"></line>
  </svg>
);

const ExternalLink = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
);

const FileText = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
    <polyline points="14 2 14 8 20 8"></polyline>
    <line x1="16" y1="13" x2="8" y2="13"></line>
    <line x1="16" y1="17" x2="8" y2="17"></line>
    <polyline points="10 9 9 9 8 9"></polyline>
  </svg>
);

const Database = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
  </svg>
);

const Quote = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
  </svg>
);

const BookOpen = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
  </svg>
);

const PapersWidget = () => {
  const [selectedYear, setSelectedYear] = useState('all');
  const [activeTab, setActiveTab] = useState('published');

  // Your complete publications data
  const publications = [
    {
      id: 49,
      year: 2026,
      title: "Political Science Under Pressure: Competition and Collaboration in a Growing Discipline, 2003-2023",
      authors: "William Dinneen and Carolina Torreblanca",
      journal: "Perspective on Politics",
      status: "forthcoming",
      abstract: "This study analyzes the evolution of political science (PS) scholarship using 140,000+ articles from 174 journals (2003–2023). We examine how structural changes—shrinking job markets and increased reliance on publication metrics—affect what gets studied and how.",
      links: {
        pdf: "https://osf.io/preprints/osf/tmy37_v3",
        bibtex: `@article{grossman2026political,
  title={Political Science Under Pressure},
  author={Grossman, Guy and Dinneen, William and Torreblanca, Carolina},
  journal={Perspective on Politics},
  year={2026}
}`
      }
    },
    {
      id: 48,
      year: 2026,
      title: "The Politics of Climate Change in the Developing World",
      authors: "Audrey Sacks and Alice Xu",
      journal: "Annual Review of Political Science",
      status: "forthcoming",
      abstract: "Climate change politics in the developing world remains understudied, despite the region's acute vulnerability and centrality to climate futures.",
      links: {
        pdf: "/assets/pdf/2025_The_Politics_Of_Climate_Change_In_The_Developing_World.pdf",
        bibtex: `@article{grossman2026climate,
  title={The Politics of Climate Change in the Developing World},
  author={Grossman, Guy and Sacks, Audrey and Xu, Alice},
  journal={Annual Review of Political Science},
  year={2026}
}`
      }
    },
    {
      id: 47,
      year: 2025,
      title: "Ethical Oversight in Impact Evaluations: External Advisory Committees to Assess Programming Risks",
      authors: "Darin Christensen, Allison N. Grossman, Jon Kurtz, Jeremy Weinstein, and Jessica Wolff",
      journal: "Proceedings of the National Academy of Sciences",
      volume: "122(47): e2509773122",
      abstract: "Social scientists not only conduct impact evaluations but also participate in the design and implementation of the programs being evaluated.",
      links: {
        pdf: "https://www.pnas.org/doi/epdf/10.1073/pnas.2509773122",
        journal: "https://www.pnas.org/doi/10.1073/pnas.2509773122",
        appendix: "https://www.pnas.org/doi/suppl/10.1073/pnas.2509773122/suppl_file/pnas.2509773122.sapp.pdf",
        bibtex: `@article{grossman2025ethical,
  title={Ethical Oversight in Impact Evaluations},
  author={Grossman, Guy and Christensen, Darin and others},
  journal={PNAS},
  year={2025}
}`
      }
    },
    // Add all other publications here (I'll include a few more for brevity)
    {
      id: 44,
      year: 2024,
      title: "Turnout Turnaround: Ethnic Minority Victories Mobilize White Voters",
      authors: "Stephanie Zonszein",
      journal: "American Political Science Review",
      volume: "118(3): 1556–1562",
      abstract: "In Western democracies, the number of ethnic minority representatives has been steadily increasing.",
      links: {
        pdf: "/assets/pdf/turnout-turnaround-ethnic-minority-victories-mobilize-white-voters.pdf",
        journal: "https://doi.org/10.1017/S000305542300103X",
        replication: "https://dataverse.harvard.edu/dataset.xhtml?persistentId=doi:10.7910/DVN/UKVOPE",
        bibtex: `@article{grossman2024turnout,
  title={Turnout Turnaround},
  author={Grossman, Guy and Zonszein, Stephanie},
  journal={APSR},
  year={2024}
}`
      }
    }
  ];

  const workingPapers = [
    {
      id: 1,
      title: "Can Community Policing Improve Police-Community Relations in a Low-Income Country Setting?",
      authors: "Robert A. Blair and Anna M. Wilke",
      status: "revise and resubmit",
      abstract: "Community-oriented policing (COP) is one of the most widely touted mechanisms for building bridges between police forces and the communities they serve.",
      links: {
        pdf: "https://osf.io/preprints/osf/wkrcm_v2",
        bibtex: `@unpublished{grossman2024community,
  title={Can Community Policing Improve Relations},
  author={Grossman, Guy and Blair, Robert A.},
  year={2024}
}`
      }
    }
  ];

  const years = useMemo(() => {
    const uniqueYears = [...new Set(publications.map(p => p.year))].sort((a, b) => b - a);
    return ['all', ...uniqueYears];
  }, [publications]);

  const filteredPublications = useMemo(() => {
    if (selectedYear === 'all') return publications;
    return publications.filter(p => p.year === selectedYear);
  }, [selectedYear, publications]);

  const yearCounts = useMemo(() => {
    const counts = {};
    publications.forEach(p => {
      counts[p.year] = (counts[p.year] || 0) + 1;
    });
    return counts;
  }, [publications]);

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
            <div className="text-sm font-semibold text-blue-600">
              {paper.year}
            </div>
          )}
          
          <h3 className="text-lg font-bold text-gray-900 leading-tight">
            {paper.title}
          </h3>
          
          <div className="text-sm text-gray-600">
            with {paper.authors}
          </div>
          
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
              <ActionButton
                icon={Download}
                label="PDF"
                onClick={() => window.open(paper.links.pdf, '_blank')}
              />
            )}
            
            {paper.links.journal && (
              <ActionButton
                icon={ExternalLink}
                label="Journal"
                onClick={() => window.open(paper.links.journal, '_blank')}
              />
            )}

            {paper.links.appendix && (
              <ActionButton
                icon={FileText}
                label="Appendix"
                onClick={() => window.open(paper.links.appendix, '_blank')}
              />
            )}

            {paper.links.replication && (
              <ActionButton
                icon={Database}
                label="Data"
                onClick={() => window.open(paper.links.replication, '_blank')}
              />
            )}
            
            <ActionButton
              icon={Quote}
              label="BibTeX"
              onClick={() => setShowBibtex(!showBibtex)}
            />
            
            {paper.abstract && (
              <ActionButton
                icon={BookOpen}
                label={showAbstract ? 'Hide Abstract' : 'Abstract'}
                onClick={() => setShowAbstract(!showAbstract)}
              />
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
                onClick={() => {
                  navigator.clipboard.writeText(paper.links.bibtex);
                }}
                className="absolute top-2 right-2 px-2 py-1 bg-gray-700 hover:bg-gray-600 text-white text-xs rounded transition-colors"
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
              activeTab === 'published'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Published Papers ({publications.length})
          </button>
          <button
            onClick={() => setActiveTab('working')}
            className={`px-6 py-3 font-medium transition-all ${
              activeTab === 'working'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500 hover:text-gray-700'
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
                      selectedYear === year
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <div>{year === 'all' ? 'All' : year}</div>
                    {year !== 'all' && (
                      <div className="text-xs opacity-75 mt-0.5">
                        ({yearCounts[year] || 0})
                      </div>
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

// Render the component
const root = ReactDOM.createRoot(document.getElementById('react-publications-root'));
root.render(<PapersWidget />);
</script>

<style>
  /* Override Jekyll default styles for this page */
  #react-publications-root {
    margin-left: -2rem;
    margin-right: -2rem;
    margin-top: -2rem;
  }
  
  /* Ensure Tailwind styles work properly */
  .page-content {
    max-width: none !important;
  }
</style>