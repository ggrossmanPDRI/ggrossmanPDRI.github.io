---
layout: page
permalink: /publications/
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
      abstract: "This study analyzes the evolution of political science (PS) scholarship using 140,000+ articles from 174 journals (2003–2023). We examine how structural changes—shrinking job markets and increased reliance on publication metrics—affect what gets studied and how. Growing publication pressures push younger scholars to publish more, yet the tripling of PS publication volume stems from a larger contributor base, not individual output. On a positive note, structural shifts have made PS more collaborative, with efficiency gains from team research outweighing credit diffusion. Contrary to fears of topical narrowing, our text-as-data analysis shows consistent topical diversity, though higher-ranked journals form a distinct ecosystem with unique methodological references.",
      links: {
        pdf: "https://osf.io/preprints/osf/tmy37_v3",
        bibtex: `@article{grossman2026political,
  title={Political Science Under Pressure: Competition and Collaboration in a Growing Discipline, 2003-2023},
  author={Grossman, Guy and Dinneen, William and Torreblanca, Carolina},
  journal={Perspective on Politics},
  year={2026},
  status={forthcoming}
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
      abstract: "Climate change politics in the developing world remains understudied, despite the region's acute vulnerability and centrality to climate futures. This review synthesizes emerging research across three domains: public opinion and climate salience, the effects of climate exposure on political accountability, and the institutional production of climate risk. We highlight a core paradox widespread public concern often coexists with limited climate literacy—suggesting that political salience stems from lived experience with environmental disruption rather than scientific attribution.",
      links: {
        pdf: "/assets/pdf/2025_The_Politics_Of_Climate_Change_In_The_Developing_World.pdf",
        bibtex: `@article{grossman2026climate,
  title={The Politics of Climate Change in the Developing World},
  author={Grossman, Guy and Sacks, Audrey and Xu, Alice},
  journal={Annual Review of Political Science},
  year={2026},
  status={forthcoming}
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
      abstract: "Social scientists not only conduct impact evaluations but also participate in the design and implementation of the programs being evaluated. While Institutional Review Boards (IRBs) oversee research activities, they do not assess risks posed by the interventions themselves. We propose establishing External Advisory Committees (EACs) to provide independent, expert oversight of programming risks.",
      links: {
        pdf: "https://www.pnas.org/doi/epdf/10.1073/pnas.2509773122",
        journal: "https://www.pnas.org/doi/10.1073/pnas.2509773122",
        appendix: "https://www.pnas.org/doi/suppl/10.1073/pnas.2509773122/suppl_file/pnas.2509773122.sapp.pdf",
        bibtex: `@article{grossman2025ethical,
  title={Ethical Oversight in Impact Evaluations: External Advisory Committees to Assess Programming Risks},
  author={Grossman, Guy and Christensen, Darin and Grossman, Allison N. and Kurtz, Jon and Weinstein, Jeremy and Wolff, Jessica},
  journal={Proceedings of the National Academy of Sciences},
  volume={122},
  number={47},
  pages={e2509773122},
  year={2025}
}`
      }
    },
    {
      id: 46,
      year: 2025,
      title: "Do More Disaggregated Electoral Results Deter Aggregation Fraud?",
      authors: "Miguel Rueda and Shuning Ge",
      journal: "British Journal of Political Science",
      volume: "55 (e140): 1-11",
      abstract: "It has been argued that the level at which electoral results are published can affect the election integrity. Publishing more granular results (e.g., at the polling station level) can allow citizens to verify the vote totals that determine election outcomes, thereby deterring voting aggregation fraud. While this logic undergirds the recommendations of international organizations monitoring elections to publish disaggregated electoral results, to date there have not been systematic assessments of how variation in aggregation is linked to electoral miscounting.",
      links: {
        pdf: "/assets/pdf/2025_do_more_disaggregated_electoral_results_deter_aggregation_fraud.pdf",
        journal: "https://www.cambridge.org/core/journals/british-journal-of-political-science/article/do-more-disaggregated-electoral-results-deter-aggregation-fraud/08AFBE74047115114DBA17E841DEFDDE",
        appendix: "/assets/pdf/2025_deter_aggregation_S0007123425100665sup001.pdf",
        replication: "https://dataverse.harvard.edu/dataset.xhtml?persistentId=doi:10.7910/DVN/GBR02C",
        bibtex: `@article{grossman2025disaggregated,
  title={Do More Disaggregated Electoral Results Deter Aggregation Fraud?},
  author={Grossman, Guy and Rueda, Miguel and Ge, Shuning},
  journal={British Journal of Political Science},
  volume={55},
  number={e140},
  pages={1--11},
  year={2025}
}`
      }
    },
    {
      id: 27,
      year: 2020,
      title: "The Effect of Election Proximity on Government Responsiveness and Citizens' Participation: Evidence from English Local Elections",
      authors: "Gemma Dipoppa",
      journal: "Comparative Political Studies",
      volume: "53(4): 2183-2212",
      abstract: "Does political engagement depend on government responsiveness? Identifying the drivers of political action is challenging because it requires disentangling instrumental from expressive motives for engagement and because government responsiveness is likely endogenous.",
      links: {
        pdf: "/assets/pdf/2020_CPS_ICT_the_effect_of_election_proximity.pdf",
        journal: "https://journals.sagepub.com/eprint/GV3U7V9SCKVJJJJNZBHP/full",
        appendix: "/assets/pdf/2020_CPS_ICT_the_effect_of_election_proximity_appendix.pdf",
        replication: "https://dataverse.harvard.edu/dataset.xhtml?persistentId=doi:10.7910/DVN/YDAS7N",
        bibtex: `@article{grossman2020election,
  title={The Effect of Election Proximity on Government Responsiveness and Citizens' Participation},
  author={Grossman, Guy and Dipoppa, Gemma},
  journal={Comparative Political Studies},
  volume={53},
  number={4},
  pages={2183--2212},
  year={2020}
}`
      }
    },
    {
      id: 26,
      year: 2020,
      title: "Political partisanship influences behavioral responses to governors' recommendations for COVID-19 prevention in the United States",
      authors: "Soojong Kim, Jonah M. Rexer, and Harsha Thirumurthy",
      journal: "Proceedings of the National Academy of Sciences",
      volume: "117(39): 24144-24153",
      abstract: "Voluntary physical distancing is essential for preventing the spread of COVID-19. We assessed the role of political partisanship in individuals' compliance with physical distancing recommendations of political leaders using data on mobility from a sample of mobile phones in 3,100 counties in the United States during March 2020.",
      links: {
        pdf: "/assets/pdf/2020_NAS_PE_political_partisanship.pdf",
        journal: "https://www.pnas.org/content/early/2020/09/14/2007835117",
        appendix: "/assets/pdf/political_partisanship_online_appendix.pdf",
        replication: "https://dataverse.harvard.edu/dataverse/COVID19governors/",
        bibtex: `@article{grossman2020partisanship,
  title={Political partisanship influences behavioral responses to governors' recommendations for COVID-19 prevention in the United States},
  author={Grossman, Guy and Kim, Soojong and Rexer, Jonah M. and Thirumurthy, Harsha},
  journal={Proceedings of the National Academy of Sciences},
  volume={117},
  number={39},
  pages={24144--24153},
  year={2020}
}`
      }
    },
    {
      id: 25,
      year: 2019,
      title: "It Takes a Village: Peer Effects and Externalities in Technology Adoption",
      authors: "Romain Ferrali, Melina R. Platas, and Jonathan Rodden",
      journal: "American Journal of Political Science",
      volume: "64(3): 536-553",
      abstract: "Do social networks matter for the adoption of new forms of political participation? We develop a formal model showing that the quality of communication that takes place in social networks is central to understanding whether a community will adopt forms of political participation where benefits are uncertain.",
      links: {
        pdf: "/assets/pdf/2019_AJPS_ICT_it_takes_a_village.pdf",
        journal: "https://onlinelibrary.wiley.com/doi/full/10.1111/ajps.12471",
        appendix: "/assets/pdf/2019_AJPS_ICT_it_takes_a_village_appendix.pdf",
        replication: "https://dataverse.harvard.edu/dataset.xhtml?persistentId=doi:10.7910/DVN/NOYBCQ",
        bibtex: `@article{grossman2019village,
  title={It Takes a Village: Peer Effects and Externalities in Technology Adoption},
  author={Grossman, Guy and Ferrali, Romain and Platas, Melina R. and Rodden, Jonathan},
  journal={American Journal of Political Science},
  volume={64},
  number={3},
  pages={536--553},
  year={2019}
}`
      }
    },
    {
      id: 24,
      year: 2019,
      title: "Voter information campaigns and political accountability: Cumulative findings from a preregistered meta-analysis of coordinated trials",
      authors: "Thad Dunning et al.",
      journal: "Science Advances",
      volume: "5(7): 1188-1192",
      abstract: "Voters may be unable to hold politicians to account if they lack basic information about their representatives' performance. Civil society groups and international donors therefore advocate using voter information campaigns to improve democratic accountability.",
      links: {
        pdf: "/assets/pdf/2019_Science_PE_voter_information_campaigns.pdf",
        journal: "https://www.science.org/doi/10.1126/sciadv.aaw2612",
        appendix: "/assets/pdf/2019_Science_PE_voter_information_campaigns_appendix.pdf",
        replication: "https://github.com/egap/metaketa-i",
        bibtex: `@article{grossman2019voter,
  title={Voter information campaigns and political accountability},
  author={Dunning, Thad and others},
  journal={Science Advances},
  volume={5},
  number={7},
  pages={1188--1192},
  year={2019}
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
      abstract: "Community-oriented policing (COP) is one of the most widely touted mechanisms for building bridges between police forces and the communities they serve. But evidence on the effectiveness of COP is surprisingly scant. We present results from one of the first randomized controlled trials to evaluate COP in the Global South.",
      links: {
        pdf: "https://osf.io/preprints/osf/wkrcm_v2",
        bibtex: `@unpublished{grossman2024community,
  title={Can Community Policing Improve Police-Community Relations in a Low-Income Country Setting?},
  author={Grossman, Guy and Blair, Robert A. and Wilke, Anna M.},
  note={Revise and resubmit},
  year={2024}
}`
      }
    },
    {
      id: 2,
      title: "Informal Connections Outweigh Co-authorship Ties in Academic Impact",
      authors: "Danús Lluís, William Dinneen, Carolina Torreblanca & Sandra González-Bailón",
      status: "revise and resubmit",
      abstract: "Research has documented the importance of teamwork in the form of co-authorship for research productivity and innovation, but we know much less about how informal collaborations relate to academic success. Informal ties allow intangible exchanges like mentoring, guidance, and feedback to flow among scholars.",
      links: {
        bibtex: `@unpublished{grossman2024informal,
  title={Informal Connections Outweigh Co-authorship Ties in Academic Impact},
  author={Grossman, Guy and Danús, Lluís and Dinneen, William and Torreblanca, Carolina and González-Bailón, Sandra},
  note={Revise and resubmit},
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

<style>
  #react-publications-root {
    margin-left: -2rem;
    margin-right: -2rem;
    margin-top: -2rem;
  }
</style>
