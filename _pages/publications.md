<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Research Publications - Preview</title>
  <script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
  <div id="react-publications-root"></div>

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
      
      // Sample published papers
      const publications = [
        {
          id: 1,
          year: 2026,
          title: "Political Science Under Pressure: Competition and Collaboration in a Growing Discipline",
          authors: "William Dinneen and Carolina Torreblanca",
          journal: "Perspective on Politics",
          status: "forthcoming",
          abstract: "This study analyzes the evolution of political science scholarship using 140,000+ articles from 174 journals (2003–2023). We examine how structural changes affect what gets studied and how.",
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
          id: 2,
          year: 2025,
          title: "The Politics of Climate Change in the Developing World",
          authors: "Audrey Sacks and Alice Xu",
          journal: "Annual Review of Political Science",
          status: "forthcoming",
          abstract: "Climate change politics in the developing world remains understudied, despite the region's acute vulnerability and centrality to climate futures.",
          links: {
            pdf: "#",
            journal: "#",
            bibtex: `@article{grossman2026climate,
  title={The Politics of Climate Change in the Developing World},
  author={Grossman, Guy and Sacks, Audrey and Xu, Alice},
  journal={Annual Review of Political Science},
  year={2026}
}`
          }
        },
        {
          id: 3,
          year: 2020,
          title: "Information Technology and Political Engagement: Mixed Evidence from Uganda",
          authors: "Macartan Humphreys and Gabriella Sacramone-Lutz",
          journal: "Journal of Politics",
          volume: "82(4): 1321-1336",
          abstract: "How does access to information communication technology affect political engagement? We examine this question using field experiments in Uganda.",
          links: {
            pdf: "#",
            journal: "#",
            appendix: "#",
            replication: "#",
            bibtex: `@article{grossman2020ict,
  title={Information Technology and Political Engagement},
  author={Grossman, Guy and Humphreys, Macartan and Sacramone-Lutz, Gabriella},
  journal={Journal of Politics},
  volume={82},
  number={4},
  pages={1321--1336},
  year={2020}
}`
          }
        }
      ];

      // Sample working papers
      const workingPapers = [
        {
          id: 1,
          title: "Can Community Policing Improve Police-Community Relations in Low-Income Countries?",
          authors: "Robert A. Blair and Anna M. Wilke",
          status: "revise and resubmit",
          abstract: "Community-oriented policing (COP) is one of the most widely touted mechanisms for building bridges between police forces and communities. We present results from a randomized controlled trial in Liberia.",
          links: {
            pdf: "https://osf.io/preprints/osf/wkrcm_v2",
            bibtex: `@unpublished{grossman2024community,
  title={Can Community Policing Improve Police-Community Relations?},
  author={Grossman, Guy and Blair, Robert A. and Wilke, Anna M.},
  note={Revise and resubmit},
  year={2024}
}`
          }
        },
        {
          id: 2,
          title: "Informal Connections Outweigh Co-authorship Ties in Academic Impact",
          authors: "William Dinneen, Carolina Torreblanca, and Sandra González-Bailón",
          status: "under review",
          abstract: "Research has documented the importance of teamwork in co-authorship for productivity, but we know less about informal collaborations. Informal ties allow exchanges like mentoring and feedback.",
          links: {
            bibtex: `@unpublished{grossman2024informal,
  title={Informal Connections in Academic Networks},
  author={Grossman, Guy and Dinneen, William and Torreblanca, Carolina},
  note={Under review},
  year={2024}
}`
          }
        }
      ];

      const years = useMemo(() => {
        const uniqueYears = [...new Set(publications.map(p => String(p.year)))].sort((a, b) => Number(b) - Number(a));
        return ['all', ...uniqueYears];
      }, []);

      const filteredPublications = useMemo(() => {
        if (selectedYear === 'all') return publications;
        return publications.filter(p => String(p.year) === selectedYear);
      }, [selectedYear]);

      const yearCounts = useMemo(() => {
        const counts = {};
        publications.forEach(p => {
          const y = String(p.year);
          counts[y] = (counts[y] || 0) + 1;
        });
        return counts;
      }, []);

      // Extract all unique co-authors
      const allCoauthors = useMemo(() => {
        const coauthorSet = new Set();
        [...publications, ...workingPapers].forEach(paper => {
          if (paper.authors) {
            const authors = paper.authors.split(/,| and /).map(a => a.trim()).filter(a => a);
            authors.forEach(author => coauthorSet.add(author));
          }
        });
        return Array.from(coauthorSet).sort();
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
                  {paper.volume ? `, ${paper.volume}` : ''}
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
                {paper.links?.pdf && (
                  <ActionButton icon={Download} label="PDF" onClick={() => window.open(paper.links.pdf, '_blank')} />
                )}
                {paper.links?.journal && (
                  <ActionButton icon={ExternalLink} label="Journal" onClick={() => window.open(paper.links.journal, '_blank')} />
                )}
                {paper.links?.appendix && (
                  <ActionButton icon={FileText} label="Appendix" onClick={() => window.open(paper.links.appendix, '_blank')} />
                )}
                {paper.links?.replication && (
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

              {showBibtex && paper.links?.bibtex && (
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

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Co-authors ({allCoauthors.length})</h2>
              <div className="max-h-40 overflow-y-auto">
                <div className="flex flex-wrap gap-2">
                  {allCoauthors.map((author, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-medium border border-blue-200"
                    >
                      {author}
                    </span>
                  ))}
                </div>
              </div>
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

    const mount = document.getElementById('react-publications-root');
    const root = ReactDOM.createRoot(mount);
    root.render(<PapersWidget />);
  </script>
</body>
</html>