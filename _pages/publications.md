---
layout: page
permalink: /publications/
title: publications
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

// Icon Components
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

const Search = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"></circle>
    <path d="m21 21-4.35-4.35"></path>
  </svg>
);

const PapersWidget = () => {
  const [selectedYear, setSelectedYear] = useState('all');
  const [activeTab, setActiveTab] = useState('published');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);

  // Category definitions
  const categories = [
    'Governance',
    'Migration',
    'Knowledge Production',
    'Conflict',
    'Climate Change',
    'Identity'
  ];

  // Sample publications data (add your full list here)
  const publications = [
    {
      id: 49,
      year: 2026,
      title: "Political Science Under Pressure: Competition and Collaboration in a Growing Discipline, 2003-2023",
      authors: "William Dinneen and Carolina Torreblanca",
      journal: "Perspective on Politics",
      status: "forthcoming",
      categories: ['Knowledge Production'],
      abstract: "This study analyzes the evolution of political science scholarship...",
      links: {
        pdf: "https://osf.io/preprints/osf/tmy37_v3",
        bibtex: `@article{grossman2026political,...}`
      }
    },
    {
      id: 48,
      year: 2026,
      title: "The Politics of Climate Change in the Developing World",
      authors: "Audrey Sacks and Alice Xu",
      journal: "Annual Review of Political Science",
      status: "forthcoming",
      categories: ['Climate Change', 'Governance'],
      abstract: "Climate change politics in the developing world remains understudied...",
      links: {
        pdf: "/assets/pdf/2025_The_Politics_Of_Climate_Change_In_The_Developing_World.pdf",
        bibtex: `@article{grossman2026climate,...}`
      }
    },
    // ... add more publications here
  ];

  const workingPapers = [
    {
      id: 1,
      title: "Can Community Policing Improve Police-Community Relations in a Low-Income Country Setting?",
      authors: "Robert A. Blair and Anna M. Wilke",
      status: "revise and resubmit",
      categories: ['Governance'],
      abstract: "Community-oriented policing (COP) is one of the most widely touted mechanisms...",
      links: {
        pdf: "https://osf.io/preprints/osf/wkrcm_v2",
        bibtex: `@unpublished{grossman2024community,...}`
      }
    }
    // ... add more working papers here
  ];

  // Calculate years from publications
  const years = useMemo(() => {
    const uniqueYears = [...new Set(publications.map(p => p.year))].sort((a, b) => b - a);
    return ['all', ...uniqueYears];
  }, [publications]);

  // Filter publications based on all criteria
  const filteredPublications = useMemo(() => {
    let filtered = activeTab === 'published' ? publications : workingPapers;

    // Filter by year
    if (selectedYear !== 'all') {
      filtered = filtered.filter(p => p.year === selectedYear);
    }

    // Filter by categories
    if (selectedCategories.length > 0) {
      filtered = filtered.filter(p => 
        p.categories && p.categories.some(cat => selectedCategories.includes(cat))
      );
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(p => 
        p.title.toLowerCase().includes(query) ||
        p.authors.toLowerCase().includes(query) ||
        (p.abstract && p.abstract.toLowerCase().includes(query)) ||
        (p.journal && p.journal.toLowerCase().includes(query))
      );
    }

    return filtered;
  }, [selectedYear, selectedCategories, searchQuery, activeTab, publications, workingPapers]);

  // Count papers per year
  const yearCounts = useMemo(() => {
    const counts = {};
    publications.forEach(p => {
      counts[p.year] = (counts[p.year] || 0) + 1;
    });
    return counts;
  }, [publications]);

  // Count papers per category
  const categoryCounts = useMemo(() => {
    const counts = {};
    const allPapers = activeTab === 'published' ? publications : workingPapers;
    allPapers.forEach(p => {
      if (p.categories) {
        p.categories.forEach(cat => {
          counts[cat] = (counts[cat] || 0) + 1;
        });
      }
    });
    return counts;
  }, [activeTab, publications, workingPapers]);

  // Toggle category selection
  const toggleCategory = (category) => {
    setSelectedCategories(prev => 
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  // Action button component
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

  // Paper card component
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

  // Main render
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto p-8">
        {/* Header */}
        <div className="text-center space-y-2 mb-8">
          <h1 className="text-4xl font-bold text-gray-900">Research Publications</h1>
          <p className="text-gray-600">Guy Grossman • University of Pennsylvania</p>
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-2 border-b border-gray-200 mb-6">
          <button
            onClick={() => {
              setActiveTab('published');
              setSelectedYear('all');
              setSearchQuery('');
              setSelectedCategories([]);
            }}
            className={`px-6 py-3 font-medium transition-all ${
              activeTab === 'published'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Published Papers ({publications.length})
          </button>
          <button
            onClick={() => {
              setActiveTab('working');
              setSelectedYear('all');
              setSearchQuery('');
              setSelectedCategories([]);
            }}
            className={`px-6 py-3 font-medium transition-all ${
              activeTab === 'working'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Under Review ({workingPapers.length})
          </button>
        </div>

        <div className="flex gap-6">
          {/* Left Sidebar */}
          <div className="w-64 flex-shrink-0 space-y-6">
            {/* Search Bar */}
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <h3 className="text-sm font-semibold text-gray-700 mb-3">Search</h3>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search papers..."
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Year Filter */}
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <h3 className="text-sm font-semibold text-gray-700 mb-3">Year</h3>
              <div className="space-y-1 max-h-64 overflow-y-auto">
                {years.map(year => (
                  <button
                    key={year}
                    onClick={() => setSelectedYear(year)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all ${
                      selectedYear === year
                        ? 'bg-blue-600 text-white shadow-sm'
                        : 'hover:bg-gray-100 text-gray-700'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span>{year === 'all' ? 'All Years' : year}</span>
                      {year !== 'all' && (
                        <span className="text-xs opacity-75">
                          {yearCounts[year] || 0}
                        </span>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Category Filter */}
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <h3 className="text-sm font-semibold text-gray-700 mb-3">Categories</h3>
              <div className="space-y-1">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => toggleCategory(category)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all ${
                      selectedCategories.includes(category)
                        ? 'bg-blue-600 text-white shadow-sm'
                        : 'hover:bg-gray-100 text-gray-700'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span>{category}</span>
                      <span className="text-xs opacity-75">
                        {categoryCounts[category] || 0}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
              {selectedCategories.length > 0 && (
                <button
                  onClick={() => setSelectedCategories([])}
                  className="w-full mt-3 px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs rounded-lg transition-all"
                >
                  Clear Categories
                </button>
              )}
            </div>

            {/* Active Filters Summary */}
            {(searchQuery || selectedCategories.length > 0 || selectedYear !== 'all') && (
              <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                <div className="text-xs font-semibold text-blue-700 mb-2">Active Filters</div>
                <div className="text-xs text-blue-600 space-y-1">
                  {searchQuery && <div>• Search: "{searchQuery}"</div>}
                  {selectedYear !== 'all' && <div>• Year: {selectedYear}</div>}
                  {selectedCategories.length > 0 && (
                    <div>• {selectedCategories.length} categor{selectedCategories.length === 1 ? 'y' : 'ies'}</div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {filteredPublications.length === 0 ? (
              <div className="bg-white rounded-xl p-12 shadow-sm border border-gray-100 text-center">
                <div className="text-gray-400 mb-2">
                  <Search />
                </div>
                <h3 className="text-lg font-semibold text-gray-700 mb-2">No papers found</h3>
                <p className="text-sm text-gray-500">Try adjusting your filters or search query</p>
              </div>
            ) : (
              <>
                <div className="mb-4 text-sm text-gray-600">
                  Showing {filteredPublications.length} paper{filteredPublications.length === 1 ? '' : 's'}
                </div>
                <div className="space-y-4">
                  {filteredPublications.map(paper => (
                    <PaperCard key={paper.id} paper={paper} showYear={selectedYear === 'all'} />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Render the component
const root = ReactDOM.createRoot(document.getElementById('react-publications-root'));
root.render(<PapersWidget />);
</script>

<style>
  /* Ensure the page banner/header and navigation remain visible */
  .page-content {
    max-width: none !important;
    padding-top: 0 !important;
    margin-top: 0 !important;
  }
  
  /* Remove negative margins to preserve header and nav */
  #react-publications-root {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-top: 2rem;
  }
  
  /* Ensure navigation is visible */
  .navbar,
  .nav,
  nav,
  header,
  .header {
    position: relative !important;
    z-index: 1000 !important;
  }
  
  /* If you need full-width content, add this */
  .container {
    max-width: 100% !important;
  }
  
  /* Ensure wrapper doesn't hide content */
  .wrapper {
    overflow: visible !important;
  }
</style>