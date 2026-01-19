---
layout: default
permalink: /publications/
title: publications
nav: true
nav_order: 2
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
    'Israel Politics'
  ];

  const publications = [
    {
      id: 49,
      year: 2026,
      title: "Political Science Under Pressure: Competition and Collaboration in a Growing Discipline, 2003-2023",
      authors: "William Dinneen and Carolina Torreblanca",
      journal: "Perspective on Politics",
      status: "forthcoming",
      categories: ['Knowledge Production'],
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
      categories: ['Climate Change'],
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
      categories: ['Migration'],
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
      categories: ['Governance'],
      abstract: "It has been argued that the level at which electoral results are published can affect the election integrity. Publishing more granular results (e.g., at the polling station level) can allow citizens to verify the vote totals that determine election outcomes, thereby deterring voting aggregation fraud. While this logic undergirds the recommendations of international organizations monitoring elections to publish disaggregated electoral results, to date there have not been systematic assessments of how variation in aggregation is linked to electoral miscounting.",
      links: {
        pdf: "/assets/pdf/2025_do_more_disaggregated_electoral_results_deter_aggregation_fraud.pdf",
        journal: "https://www.cambridge.org/core/journals/british-journal-of-political-science/article/do-more-disaggregated-electoral-results-deter-aggregation-fraud/08AFBE74047115114DBA17E841DEFDDE",
        appendix: "/assets/pdf/2025_deter_aggregation_S0007123425100665sup001.pdf",
        replication: "https://dataverse.harvard.edu/dataset.xhtml?persistentId=doi:10.7910/DVN/GBR02C",
        bibtex: `@article{grossman2020ict,
  title={Information Technology and Political Engagement: Mixed Evidence from Uganda},
  author={Grossman, Guy and Humphreys, Macartan and Sacramone-Lutz, Gabriella},
  journal={Journal of Politics},
  volume={82},
  number={4},
  pages={1321--1336},
  year={2020}
}`
      }
    },
    {
    id: 45,
    year: 2025,
    title: "Voted In, Standing Out: Public Response to Immigrants’ Political Accession",
    authors: "Stephanie Zonszein, Guy Grossman",
    journal: "American Journal of Political Science",
    volume: "69 (2): 718-733",
    status: "published",
    categories: ['Migration', 'Conflict'],
    abstract: "How do dominant-group natives react to immigrants' political integration? We argue that ethnic minority immigrants winning political office makes natives feel threatened, triggering animosity. We test this dynamic across the 2010–2019 UK general elections, using hate crime police records, public opinion data, and text data from over 500,000 regional and local newspaper articles. While past work has not established a causal relationship between minorities' political power gains and dominant-group animosity, we identify natives' hostile reactions with a regression discontinuity design that leverages close election results between immigrant-origin ethnic minority and dominant-group candidates. We find that minority victories increase hate crimes by 67%, exclusionary attitudes by 66%, and negative media coverage of immigrant groups by 110%. Consistent with power threat and social identity theories, these findings demonstrate a strong and widespread negative reaction—encompassing a violence-prone fringe and the mass public—against ethnic minority immigrants' integration into majority settings.",
    links: {
      pdf: "/assets/pdf/Voted-in-standing-out-Public-response-to-immigrants-political-accession.pdf",
      appendix: "/assets/pdf/ajps12877-sup-0001-suppmat.pdf",
      replication: "https://dataverse.harvard.edu/dataset.xhtml?persistentId=doi:10.7910/DVN/IJ2DW4",
      bibtex: `@article{grossman2025votedin,
  title={Voted In, Standing Out},
  author={Zonszein, Stephanie and Grossman, Guy},
  journal={American Journal of Political Science},
  volume={69},
  number={2},
  pages={718-733},
  year={2025},
  status={published}
}`
    }
  },
  {
    id: 44,
    year: 2024,
    title: "Turnout Turnaround: Ethnic Minority Victories Mobilize White Voters",
    authors: "Stephanie Zonszein, Guy Grossman",
    journal: "American Political Science Review",
    volume: "118(3): 1556–1562",
    status: "published",
    categories: ["Migration"],
    abstract: "In Western democracies, like the United States, the United Kingdom, and Germany, the number of ethnic minority representatives has been steadily increasing. How is this trend shaping electoral behavior? Past work has focused on the effects of minority representation on ethnic minorities’ political engagement, with less attention to the electoral behavior of majority-group members. We argue that increased minorities’ representation can be experienced as a threat to a historically white-dominant political context. This, in turn, politically activates white constituents. Using data from four U.K. general elections and a regression discontinuity design, we find that the next election’s turnout in constituencies narrowly won by an ethnic minority candidate is 4.3 percentage points larger than in constituencies narrowly won by a white candidate. Consistent with our argument, this turnout difference is driven by majority-white constituencies. Our findings have implications for intergroup relations and party politics and help explain recent political dynamics. ",
    links: {
      pdf: "/assets/pdf/turnout-turnaround-ethnic-minority-victories-mobilize-white-voters.pdf",
      journal : "https://doi.org/10.1017/S000305542300103X",
      appendix : "/assets/pdf/PSR2300103_Supplementary_Materials.pdf",
      replication : "https://dataverse.harvard.edu/dataset.xhtml?persistentId=doi:10.7910/DVN/UKVOPE",
      bibtex: `@article{grossman2024turnout,
  title={Turnout Turnaround},
  author={Zonszein, Stephanie and Grossman, Guy},
  journal={American Political Science Review},
  volume ={118},
  number ={3},
  pages ={1556-1562},
  year={2024},
  status={published}
}`
    }
  },
{
    id: 43,
    year: 2024,
    title: "The Effect of Sustained Transparency on Electoral Accountability",
    authors: "Kristin Michelitch, Carlo Prato, Guy Grossman",
    journal: "American Journal of Political Science",
    volume : " 68(3): 1022-1040",
    status: "published",
    categories: ["Governance"],
    abstract: "Transparency is expected to strengthen electoral accountability. Yet, initiatives disseminating politician performance information directly prior to elections have reported disappointing results. We argue that to be effective transparency needs to be sustained: the dissemination of politician performance information needs to occur early, regularly, and predictably throughout the term. Using a formal model of electoral accountability under non-programmatic and uneven party competition, we study how sustained transparency impacts a string of decisions by various actors in advance of elections: incumbents' running choices, party nomination strategies, and potential challengers' entry decisions. We show how these effects shape the candidate slate and ultimately electoral outcomes, conditional on incumbent performance and the incumbent party's relative strength. We test our theory using a field experiment involving 354 subnational constituencies in Uganda, and find robust support to the idea that sustained transparency can improve electoral accountability even in weakly institutionalized electoral settings.",
    links: {
      pdf: "/assets/pdf/2023_AJPS_the_effect_of_sustained_transparency.pdf",
      journal: "https://onlinelibrary.wiley.com/doi/10.1111/ajps.12787",
      appendix :"/assets/pdf/2023_AJPS_the_effect_of_sustained_transparency_appendix.pdf",
      replication: "https://dataverse.harvard.edu/dataset.xhtml?persistentId=doi:10.7910/DVN/2E4MOZ",
      bibtex: `@article{grossman2024transparency,
  title={The Effect of Sustained Transparency on Electoral Accountability},
  author={Michelitch, Kristin and Prato, Carlo and Grossman, Guy},
  journal={American Journal of Political Science},
  volume ={68},
  number={3},
  pages={1022-1040},
  year={2024},
  status={published}
}`
    }
  },

{
    id: 42,
    year: 2023,
    title: "Oil Discoveries and Political Windfalls: Evidence on Presidential Support in Uganda",
    authors: "Laura Paler, Jeremy Springman, Jan Pierskalla, Guy Grossman",
    journal: "Political Science Research and Methods",
    volume : "11(4): 903-912",
    status: "published",
    categories: ["Governance"],
    abstract: "Oil discoveries, paired with delays in production, have created a new phenomenon: sustained post-discovery, pre-production periods. While research on the resource curse has debated the effects of oil on governance and conflict, less is known about the political effects of oil discoveries absent production. Using comprehensive electoral data from Uganda and a difference-in-difference design with heterogeneous effects, we show that oil discoveries increased electoral support for the incumbent chief executive in localities proximate to discoveries, even prior to production. Moreover, the biggest effects occurred in localities that were historically most electorally competitive. Overall, we show that the political effects of oil discoveries vary subnationally depending on local political context and prior to production, with important implications for understanding the roots of the political and conflict curses. ",
    links: {
      pdf: "/assets/pdf/2023_PSRM_Oil_discoveries.pdf",
      journal : "https://www.cambridge.org/core/journals/political-science-research-and-methods/article/oil-discoveries-and-political-windfalls-evidence-on-presidential-support-in-uganda/815B8BF178DA7BEF7CA186C3AC19A265",
      appendix : "/assets/pdf/2023_PSRM_Oil_discoveries.pdf",
      replication :"https://dataverse.harvard.edu/dataset.xhtml?persistentId=doi:10.7910/DVN/LGNJ10",
      bibtex: `@article{grossman2023oil,
  title={Oil Discoveries and Political Windfalls},
  author={Paler, Laura and Springman, Jeremy and Pierskalla, Jan and Grossman, Guy},
  journal={Political Science Research and Methods},
  year={2023},
  volume={11},
  number={4},
  pages={903-912},
  status={published}
}`
    }
  },

  {
    id: 41,
    year: 2023,
    title: "Can Low-Cost, Scalable Online Interventions Increase Youth Informed Political Participation in Electoral Authoritarian Contexts?",
    authors: "Romain Ferrali, Horacio Larreguy, Guy Grossman",
    journal: "Science Advances",
    volume: " 9(26): eadf1222",
    status: "published",
    categories: ["Governance"],
    abstract: "Young citizens in many democracies, and more so in electoral autocracies, turn out to vote at relatively low rates. Low youth participation arguably contributes to political parties' tendency to de-prioritize the youth's policy preferences. We analyze the effect of three low-cost, scalable, theoretically-grounded, online interventions designed to encourage young Moroccans to turn out and cast an informed vote ahead of the 2021 parliamentary elections. Those interventions aimed at (1) lowering the cost of participation by providing information about the voting registration process, (2) increasing the expected benefit of voting by providing information about the stakes of the election, and about (3) the distance between respondents’ policy preferences and political parties' policy platforms. We find that while all three interventions failed to increase youth turnout on average, the two treatments designed to increase expected benefits increased turnout intentions for likely 'compliers' those who, prior to treatment assignment, were unsure about whether to vote. Moreover, providing information about parties' policy platforms durably increased their support for the party that best represented their preferences, ultimately leading to better-informed voting. Consistent with probabilistic voting models with voting costs, the effect of the party-platforms treatment is concentrated among those who rated the party that our treatment deemed most congruent from a policy perspective as one of their two favorite parties. Contributing to information processing theories, we also find that party updating followed a form of motivated reasoning even in a context with weak party institutionalization.",
    links: {
      pdf: "/assets/pdf/2023_SciAdv_Lowcost_online_interventions.pdf",
      journal: "https://www.science.org/doi/10.1126/sciadv.adf1222",
      appendix:"https://guygrossman.com/assets/pdf/41_SA-Supplementary-information.pdf",
      replication:"https://osf.io/m5rwn/",
      bibtex: `@article{grossman2023online,
  title={Low-Cost Online Interventions and Youth Participation},
  author={Ferrali, Romain and Larreguy, Horacio and Grossman, Guy},
  journal={Science Advances},
  volume={9},
  number={26},
  pages={eadf1222},
  year={2023},
  status={published}
}`
    }
  },
  {
    id: 40,
    year: 2023,
    title: "Locked Down, Lashing Out: COVID-19 Effects on Asian Hate Crimes in Italy",
    authors: "Gemma Dipoppa, Stephanie Zonszein, Guy Grossman",
    journal: "Journal of Politics",
    volume: "85(2): pp.389-404",
    status: "published",
    categories: ["Conflict", "Migration"],
    abstract: "Covid-19 caused a significant health and economic crisis, a condition identified as conducive to stigmatization and hateful behavior against minority groups. It is however unclear whether the threat of infection triggers violence in addition to stigmatization, and whether a violent reaction can happen at the onset of an unexpected economic shock before social hierarchies can be disrupted. Using a novel database of hate crimes across Italy, we show that (i) hate crimes against Asians increased substantially at the pandemic onset, and that (ii) the increase was concentrated in cities with higher expected unemployment, but not higher mortality. We then examine individual, local and national mobilization as mechanisms. We find that (iii) a xenophobic national discourse and local far-right institutions motivate hate crimes, while we find no support for the role of individual prejudice. Our study identifies new conditions triggering hateful behavior, advancing our understanding of factors hindering migrant integration. ",
    links: {
      pdf: "/assets/pdf/2023_JoP_Migration_locked_down_lashing_out.pdf",
      journal: "https://www.journals.uchicago.edu/doi/abs/10.1086/722346",
      appendix:"/assets/pdf/2023_JoP_Migration_locked_down_lashing_out_appendix.pdf",
      replication: "https://dataverse.harvard.edu/dataset.xhtml?persistentId=doi:10.7910/DVN/0DCWT7",
      bibtex: `@article{grossman2023covid,
  title={Locked Down, Lashing Out},
  author={Dipoppa, Gemma and Zonszein, Stephanie and Grossman, Guy},
  journal={Journal of Politics},
  volume={85},
  number={2},
  pages={389-404},
  year={2023},
  status={published}
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
      categories: ['Governance'],
      abstract: "Does political engagement depend on government responsiveness? Identifying the drivers of political action is challenging because it requires disentangling instrumental from expressive motives for engagement and because government responsiveness is likely endogenous. We overcome the first challenge by studying citizens’ reporting of street-problems—a form of participation arguably driven by instrumental considerations. We overcome the second challenge by taking advantage of variation in local elections timing in England’s district authorities. We report three key results. First, local governments address requests faster in the months leading to elections. Second, street-problem reporting increases in (pre)electoral periods. Third, the increase in requests sent in preelection periods is driven by districts in which government responsiveness is higher. These findings show that, individuals consider expected benefits when choosing to undertake at least some instrumental forms of participation. Our results also underscore the importance of temporal factors that increase the perceived benefits of one’s political engagement.",
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
      categories: ['Governance'],
      abstract: "Voluntary physical distancing is essential for preventing the spread of COVID-19. We assessed the role of political partisanship in individuals’ compliance with physical distancing recommendations of political leaders using data on mobility from a sample of mobile phones in 3,100 counties in the United States during March 2020, county-level partisan preferences, information about the political affiliation of state governors, and the timing of their communications about COVID-19 prevention. Regression analyses examined how political preferences influenced the association between governors’ COVID-19 communications and residents’ mobility patterns. Governors’ recommendations for residents to stay at home preceded stay-at-home orders and led to a significant reduction in mobility that was comparable to the effect of the orders themselves. Effects were larger in Democratic- than in Republican-leaning counties, a pattern more pronounced under Republican governors. Democratic-leaning counties also responded more strongly to recommendations from Republican than from Democratic governors. Political partisanship influences citizens’ decisions to voluntarily engage in physical distancing in response to communications by their governor.",
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
      categories: ['Governance'],
      abstract: "Do social networks matter for the adoption of new forms of political participation? We develop a formal model showing that the quality of communication that takes place in social networks is central to understanding whether a community will adopt forms of political participation where benefits are uncertain and where there are positive externalities associated with participation. Early adopters may exaggerate benefits, leading others to discount information about the technology's value. Thus, peer effects are likely to emerge only when informal institutions support truthful communication. We collect social network data for 16 Ugandan villages where an innovative mobile-based reporting platform was introduced. Consistent with our model, we find variation across villages in the extent of peer effects on technology adoption, as well as evidence supporting additional observable implications. Impediments to social diffusion may help explain the varied uptake of new and increasingly common political communication technologies around the world.",
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
      categories: ['Governance'],
      abstract: "Voters may be unable to hold politicians to account if they lack basic information about their representatives’ performance. Civil society groups and international donors therefore advocate using voter information campaigns to improve democratic accountability. Yet, are these campaigns effective? Limited replication, measurement heterogeneity, and publication biases may undermine the reliability of published research. We implemented a new approach to cumulative learning, coordinating the design of seven randomized controlled trials to be fielded in six countries by independent research teams. Uncommon for multisite trials in the social sciences, we jointly preregistered a meta-analysis of results in advance of seeing the data. We find no evidence overall that typical, nonpartisan voter information campaigns shape voter behavior, although exploratory and subgroup analyses suggest conditions under which informational campaigns could be more effective. Such null estimated effects are too seldom published, yet they can be critical for scientific progress and cumulative, policy-relevant learning.",
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
    },
  {
      id: 23,
      year: 2019,
      title: "A Signaling Theory of Distributive Policy Choice: Evidence From Senegal",
      authors: "Jessica Gottlieb, Horacio Larreguy, and Benjamin Marx",
      journal: "Journal of Politics",
      volume: "81(2): 631-647",
      categories: ['Governance'],
      abstract: "A recent literature emphasizes political economy factors behind the wave of administrative splits across the developing world. While previous studies have focused on why some groups are more likely to obtain new administrative units, they do not explain why vote-maximizing incumbents use this arguably less efficient policy in the first place. We contribute to this literature by embedding administrative splits within incumbents’ broader electoral strategy of distributive policies. We develop a model in which incumbents target local public goods to groups for whom this is a credible signal of commitment, namely, those with a history of reciprocal relationship. When incumbents face increased electoral competition, however, other groups require a stronger signal, which is emitted by the costly creation of new units that reduces the cost of future transfers to those groups. We test our theory using electoral and public goods data from Senegal and find robust support for its predictions.",
      links: {
        pdf: "/assets/pdf/2019_JoP_Government_a_signaling_theory.pdf",
        journal: "https://www.journals.uchicago.edu/doi/abs/10.1086/701833",
        replication: "https://dataverse.harvard.edu/dataset.xhtml?persistentId=doi:10.7910/DVN/QJ9E9M",
        bibtex: `@article{grossman2019signaling,
  title={A Signaling Theory of Distributive Policy Choice: Evidence From Senegal},
  author={Grossman, Guy and Gottlieb, Jessica and Larreguy, Horacio and Marx, Benjamin},
  journal={Journal of Politics},
  volume={81},
  number={2},
  pages={631--647},
  year={2019}
}`
      }
    },
    {
      id: 22,
      year: 2019,
      title: "Contested Ground: Disentangling Material and Symbolic Attachment to Disputed Territory",
      authors: "Devorah Manekin and Tamar Mitts",
      journal: "Political Science Research and Methods",
      volume: "7(4): 679-697",
      categories: ['Israel Politics', 'Conflict'],
      abstract: "Territorial disputes are prone to conflict because of the value of territory to publics, whether due to its strategic and material worth, or to its intangible, symbolic value. Yet despite the implications of the distinction for both theory and policy, empirically disentangling the material from the symbolic has posed formidable methodological challenges. We propose a set of tools for assessing the nature of individual territorial attachment, drawing on a series of survey experiments in Israel. Using these tools, we find that a substantial segment of the Jewish population is attached to the disputed West Bank territory for intangible reasons, consisting not only of far-right voters but also of voters of moderate-right and centrist parties. This distribution considerably narrows the bargaining space of leaders regardless of coalitional configurations. Our empirical analysis thus illustrates how the distribution of territorial preferences in the domestic population can have powerful implications for conflict and its resolution.",
      links: {
        pdf: "/assets/pdf/2019_PSRM_Conflict_contested_ground.pdf",
        journal: "https://www.cambridge.org/core/journals/political-science-research-and-methods/article/abs/contested-ground-disentangling-material-and-symbolic-attachment-to-disputed-territory/51547A284177A0B4E84B76E1929A0C51",
        appendix: "/assets/pdf/2019_PSRM_Conflict_contested_ground_appendix.pdf",
        replication: "https://dataverse.harvard.edu/dataset.xhtml?persistentId=doi:10.7910/DVN/INCWQN",
        bibtex: `@article{grossman2019contested,
  title={Contested Ground: Disentangling Material and Symbolic Attachment to Disputed Territory},
  author={Grossman, Guy and Manekin, Devorah and Mitts, Tamar},
  journal={Political Science Research and Methods},
  volume={7},
  number={4},
  pages={679--697},
  year={2019}
}`
      }
    },
    {
      id: 21,
      year: 2019,
      title: "Border Walls and Smuggling Spillovers",
      authors: "Anna Getmansky and Austin L. Wright",
      journal: "Quarterly Journal of Political Science",
      volume: "14(3): 329-347",
      categories: ['Israel Politics', 'Conflict'],
      abstract: "A growing number of states are erecting physical barriers along their borders to stem the illicit flow of goods and people. Though border fortification policies are both controversial and politically salient, their distributional consequences remain largely unexplored. We study the impact of a border wall project on smuggling in Israel. We use the initial phase of the wall construction to causally estimate spillover effects on cross-border smuggling, especially vehicle theft. We find a large decrease in smuggling of stolen vehicles in protected towns and a similar substantial increase in not-yet-protected towns. For some protected towns, fortification also arbitrarily increased the length of smuggling routes. These township-level shocks further deterred smuggling (6% per kilometer). Our findings suggest that border fortification may have uneven distributional consequences, creating unintended winners and losers.",
      links: {
        pdf: "/assets/pdf/2019_QJPS_Conflict_border_walls.pdf",
        journal: "https://www.nowpublishers.com/article/Details/QJPS-18094",
        appendix: "/assets/pdf/2019_QJPS_Conflict_border_walls_appendix.pdf",
        replication: "https://www.nowpublishers.com/article/details/supplementary-info/100.00018094_supp.zip",
        bibtex: `@article{grossman2019border,
  title={Border Walls and Smuggling Spillovers},
  author={Grossman, Guy and Getmansky, Anna and Wright, Austin L.},
  journal={Quarterly Journal of Political Science},
  volume={14},
  number={3},
  pages={329--347},
  year={2019}
}`
      }
    },
    {
      id: 20,
      year: 2018,
      title: "How Sanctions Affect Public Opinion in Target Countries: Experimental Evidence from Israel",
      authors: "Devorah Manekin and Yotam Margalit",
      journal: "Comparative Political Studies",
      volume: "51(14): 1823–1857",
      categories: ['Israel Politics', 'Conflict'],
      abstract: "How do economic sanctions affect the political attitudes of individuals in targeted countries? Do they reduce or increase support for policy change? Are targeted, “smart” sanctions more effective in generating public support? Despite the importance of these questions for understanding the effectiveness of sanctions, they have received little systematic attention. We address them drawing on original data from Israel, where the threat of economic sanctions has sparked a contentious policy debate. We first examine the political effects of the European Union’s (EU) 2015 decision to label goods produced in the West Bank, and then expand our analysis by employing a survey experiment that allows us to test the differential impact of sanction type and sender identity. We find that the EU’s decision produced a backlash effect, increasing support for hardline policies and raising hostility toward Europe. Our findings further reveal that individuals are likely to support concessions only in the most extreme and unlikely of circumstances—a comprehensive boycott imposed by a sender perceived as a key strategic ally. These results offer theoretical and policy implications for the study of the effects of economic sanctions.",
      links: {
        pdf: "/assets/pdf/2018_CPS_Conflict_how_sanctions.pdf",
        journal: "https://journals.sagepub.com/eprint/FNVxKbKXwaPcIKUaPSnt/full",
        replication: "https://journals.sagepub.com/doi/suppl/10.1177/0010414018774370/suppl_file/replication.zip",
        bibtex: `@article{grossman2018sanctions,
  title={How Sanctions Affect Public Opinion in Target Countries: Experimental Evidence from Israel},
  author={Grossman, Guy and Manekin, Devorah and Margalit, Yotam},
  journal={Comparative Political Studies},
  volume={51},
  number={14},
  pages={1823--1857},
  year={2018}
}`
      }
    },
 {
      id: 19,
      year: 2018,
      title: "Do Men and Women Have Different Policy Preferences in Africa? Determinants and Implications of Gender Gaps in Policy Prioritization",
      authors: "Jessica Gottlieb and Amanda Lea Robinson",
      journal: "British Journal of Political Science",
      volume: "48(3): 611-638",
      categories: ['Governance'],
      abstract: "Policies designed to increase women’s representation in Africa are often motivated by the assumption that men and women have different policy preferences. This article finds that gender differences in policy priorities are actually quite small on average, but vary significantly across policy domains and countries. The study leverages this variation to show that the economic and social empowerment of women influences the size of gender gaps in the prioritization of two important domains. In particular, women’s participation in the labor force – an indicator of economic empowerment – narrows the gender gap in the prioritization of infrastructure investment and access to clean water, while social vulnerability widens the gap on prioritizing infrastructure investment. Finally, the article shows that the places where women and men have the most divergent policy preferences – and thus where formal representation is most important – are precisely the places where women are currently the most poorly represented and least active in formal politics.",
      links: {
        pdf: "/assets/pdf/2018_BJPS_Identity_do_men_and_women.pdf",
        journal: "https://www.cambridge.org/core/journals/british-journal-of-political-science/article/abs/do-men-and-women-have-different-policy-preferences-in-africa-determinants-and-implications-of-gender-gaps-in-policy-prioritization/CE824A46AE39D05FC79900C50DCEC0C4",
        appendix: "/assets/pdf/2018_BJPS_Identity_do_men_and_women_appendix.pdf",
        replication: "https://dataverse.harvard.edu/dataset.xhtml?persistentId=doi:10.7910/DVN/ZIWLCJ",
        bibtex: `@article{grossman2018gender,
  title={Do Men and Women Have Different Policy Preferences in Africa? Determinants and Implications of Gender Gaps in Policy Prioritization},
  author={Grossman, Guy and Gottlieb, Jessica and Robinson, Amanda Lea},
  journal={British Journal of Political Science},
  volume={48},
  number={3},
  pages={611--638},
  year={2018}
}`
      }
    },
{
      id: 18,
      year: 2018,
      title: "Information Dissemination, Competitive Pressure, and Politician Performance between Elections: A Field Experiment in Uganda",
      authors: "Kristin Michelitch",
      journal: "American Political Science Review",
      volume: "112(2): 280-301",
      categories: ['Governance'],
      abstract: "Politicians shirk when their performance is obscure to constituents. We theorize that when politician performance information is disseminated early in the electoral term, politicians will subsequently improve their performance in anticipation of changes in citizens’ evaluative criteria and possible challenger entry in the next election. However, politicians may only respond in constituencies where opposition has previously mounted. We test these predictions in partnership with a Ugandan civil society organization in a multiyear field experiment conducted in 20 district governments between the 2011 and 2016 elections. While the organization published yearly job duty performance scorecards for all incumbents, it disseminated the scorecards to constituents for randomly selected politicians. These dissemination efforts induced politicians to improve performance across a range of measures, but only in competitive constituencies. Service delivery was unaffected. We conclude that, conditional on electoral pressure, transparency can improve politicians’ performance between elections but not outcomes outside of their control.",
      links: {
        pdf: "/assets/pdf/2018_APSR_PE_information_dissemination.pdf",
        journal: "http://bit.ly/2FTkhR6",
        appendix: "/assets/pdf/2018_APSR_PE_information_dissemination_appendix.pdf",
        replication: "https://dataverse.harvard.edu/dataset.xhtml?persistentId=doi:10.7910/DVN/AI3VM8",
        bibtex: `@article{grossman2018information,
  title={Information Dissemination, Competitive Pressure, and Politician Performance between Elections: A Field Experiment in Uganda},
  author={Grossman, Guy and Michelitch, Kristin},
  journal={American Political Science Review},
  volume={112},
  number={2},
  pages={280--301},
  year={2018}
}`
      }
    },

  {
      id: 17,
      year: 2018,
      title: "Crowdsourcing Accountability: ICT for Service Delivery",
      authors: "Melina R. Platas and Jonathan Rodden",
      journal: "World Development",
      volume: "112: 74-87",
      categories: ['Governance'],
      abstract: "We examine the effect on service delivery outcomes of a new information communication technology (ICT) platform that allows citizens to send free and anonymous messages to local government officials, thus reducing the cost and increasing the efficiency of communication about public services. In particular, we use a field experiment to assess the extent to which the introduction of this ICT platform improved monitoring by the district, effort by service providers, and inputs at service points in health, education and water in Arua District, Uganda. We find suggestive evidence of a short-term improvement in some education services, but these effects deteriorate by year two of the program, and we find little or no evidence of an effect on health and water services at any period. Despite relatively high levels of system uptake, enthusiasm of district officials, and anecdotal success stories, we find that relatively few messages from citizens provided specific, actionable information about service provision within the purview and resource constraints of district officials, and users were often discouraged by officials’ responses. Our findings suggest that for crowd-sourced ICT programs to move from isolated success stories to long-term accountability enhancement, the quality and specific content of reports and responses provided by users and officials is centrally important.",
      links: {
        pdf: "/assets/pdf/2018_WD_ICT_crowdsourcing_accountability.pdf",
        journal: "https://www.sciencedirect.com/science/article/pii/S0305750X18302286",
        appendix: "/assets/pdf/2018_WD_ICT_crowdsourcing_accountability_appendix.pdf",
        replication: "https://dataverse.harvard.edu/dataset.xhtml?persistentId=doi:10.7910/DVN/FFBNBU",
        bibtex: `@article{grossman2018crowdsourcing,
  title={Crowdsourcing Accountability: ICT for Service Delivery},
  author={Grossman, Guy and Platas, Melina R. and Rodden, Jonathan},
  journal={World Development},
  volume={112},
  pages={74--87},
  year={2018}
}`
      }
    },
    {
      id: 16,
      year: 2017,
      title: "Texting Complaints to Politicians: Name Personalization and Politicians' Encouragement in Citizen Mobilization",
      authors: "Kristin Michelitch and Marta Santamaria",
      journal: "Comparative Political Studies",
      volume: "50(10): 1325-1357",
      categories: ['Governance'],
      abstract: "Poor public service provision and government accountability is commonplace in low-income countries. Although mobile phone–based platforms have emerged to allow constituents to report service deficiencies to government officials, they have been plagued by low citizen participation. We question whether low participation may root in low political efficacy to politically participate. In the context of a text message–reporting platform in Uganda, we investigate the impact of adding efficacy-boosting language to mobilization texts—(a) citizen name personalization and (b) politician encouragement—on citizens’ willingness to report service deficiencies to politicians via text messages. Both treatments, designed to increase internal and external efficacy, respectively, have a large, positive effect on participation. The results are driven by traditionally less internally efficacious constituents (females) and less externally efficacious constituents (those represented by opposition party members), respectively.",
      links: {
        pdf: "/assets/pdf/2017_CPS_ICT_texting_commplaints.pdf",
        journal: "https://journals.sagepub.com/doi/abs/10.1177/0010414016666862",
        bibtex: `@article{grossman2017texting,
  title={Texting Complaints to Politicians: Name Personalization and Politicians' Encouragement in Citizen Mobilization},
  author={Grossman, Guy and Michelitch, Kristin and Santamaria, Marta},
  journal={Comparative Political Studies},
  volume={50},
  number={10},
  pages={1325--1357},
  year={2017}
}`
      }
    },
    {
      id: 15,
      year: 2017,
      title: "Government Fragmentation and Public Goods Provision",
      authors: "Jan H. Pierskalla and Emma Boswell Dean",
      journal: "Journal of Politics",
      volume: "79(3): 823-840",
      categories: ['Governance'],
      abstract: "We investigate the effects of territorial government fragmentation on the quality of public services. We argue that an increase in the number of regional governments has two effects: (1) it redistributes fiscal and administrative resources to underserved regions and (2) encourages yardstick competition. Extreme government fragmentation, however, limits efficiency gains by reducing administrative capacity, economies of scale, and enabling capture. We test this argument using original data on the number of regional governments in sub-Saharan Africa (1960–2012). Consistent with our theoretical expectations, we find robust evidence for an initial increase in the quality of services provision following regional government splits, which levels off at high levels of regional fragmentation. Three distinct difference-in-difference analyses of microlevel, georeferenced data on health outcomes in Malawi, Nigeria, and Uganda further support our theoretical argument.",
      links: {
        pdf: "/assets/pdf/2017_JoP_Government_government_fragmentation.pdf",
        journal: "https://www.journals.uchicago.edu/doi/abs/10.1086/690305",
        appendix: "/assets/pdf/2017_JoP_Government_government_fragmentation_appendix.pdf",
        replication: "https://dataverse.harvard.edu/dataset.xhtml?persistentId=doi:10.7910/DVN/VS3CG6",
        bibtex: `@article{grossman2017fragmentation,
  title={Government Fragmentation and Public Goods Provision},
  author={Grossman, Guy and Pierskalla, Jan H. and Dean, Emma Boswell},
  journal={Journal of Politics},
  volume={79},
  number={3},
  pages={823--840},
  year={2017}
}`
      }
    },
     {
      id: 14,
      year: 2016,
      title: "Deliberate Disengagement: How Education Can Decrease Political Participation in Electoral Authoritarian Regimes",
      authors: "Keven Croke, Horacio A. Larreguy, and John Marshall",
      journal: "American Political Science Review",
      volume: "110(3): 579-600",
      categories: ['Governance'],
      abstract: "A large literature examining advanced and consolidating democracies suggests that education increases political participation. However, in electoral authoritarian regimes, educated voters may instead deliberately disengage. If education increases critical capacities, political awareness, and support for democracy, educated citizens may believe that participation is futile or legitimizes autocrats. We test this argument in Zimbabwe—a paradigmatic electoral authoritarian regime—by exploiting cross-cohort variation in access to education following a major educational reform. We find that education decreases political participation, substantially reducing the likelihood that better-educated citizens vote, contact politicians, or attend community meetings. Consistent with deliberate disengagement, education’s negative effect on participation dissipated following 2008’s more competitive election, which (temporarily) initiated unprecedented power sharing. Supporting the mechanisms underpinning our hypothesis, educated citizens experience better economic outcomes, are more interested in politics, and are more supportive of democracy, but are also more likely to criticize the government and support opposition parties.",
      links: {
        pdf: "/assets/pdf/2016_APSR_PE_deliberate_disengagement.pdf",
        journal: "https://www.cambridge.org/core/journals/american-political-science-review/article/abs/deliberate-disengagement-how-education-can-decrease-political-participation-in-electoral-authoritarian-regimes/192AB48618B0E0450C93E97BE8321218",
        appendix: "/assets/pdf/2016_APSR_PE_deliberate_disengagement_appendix.pdf",
        replication: "/assets/pdf/2016_APSR_PE_deliberate_disengagement_replication.zip",
        bibtex: `@article{grossman2016deliberate,
  title={Deliberate Disengagement: How Education Can Decrease Political Participation in Electoral Authoritarian Regimes},
  author={Grossman, Guy and Croke, Keven and Larreguy, Horacio A. and Marshall, John},
  journal={American Political Science Review},
  volume={110},
  number={3},
  pages={579--600},
  year={2016}
}`
      }
    },
    {
      id: 13,
      year: 2016,
      title: "Descriptive Representation and Judicial Outcomes in Multi-Ethnic Societies",
      authors: "Oren Gazal-Ayal, Samuel D. Pimentel, and Jeremy M. Weinstein",
      journal: "American Journal of Political Science",
      volume: "60(1): 44–69",
      categories: ['Israel Politics','Governance'],
      abstract: "The extent to which judicial outcomes depend on judges' identities is a central question in multiethnic societies. Past work on the impact of the racial composition of appellate courts has narrowly focused on civil rights cases in the United States. We expand this literature by testing for ethnicity-based panel effects in criminal appeals in Israel. Using randomness in the assignment of cases to panels, we find that appeal outcomes for Jewish defendants are independent of panels' ethnic composition. By contrast, panel composition is highly consequential for Arab defendants, who receive more lenient punishments when their case is heard by a panel that includes at least one Arab judge, compared to all-Jewish panels. The magnitude of these effects is sizable: a 14–20% reduction in incarceration and a 15–26% reduction in prison sentencing. These findings contribute to recent debates on the relationship between descriptive representation and substantive outcomes in judicial bodies.",
      links: {
        pdf: "/assets/pdf/2016_AJPS_Identity_descriptive_representation.pdf",
        journal: "https://onlinelibrary.wiley.com/doi/abs/10.1111/ajps.12187",
        appendix: "/assets/pdf/2016_AJPS_Identity_descriptive_representation_appendix.pdf",
        replication: "https://dataverse.harvard.edu/dataset.xhtml?persistentId=doi:10.7910/DVN/28870",
        bibtex: `@article{grossman2016descriptive,
  title={Descriptive Representation and Judicial Outcomes in Multi-Ethnic Societies},
  author={Grossman, Guy and Gazal-Ayal, Oren and Pimentel, Samuel D. and Weinstein, Jeremy M.},
  journal={American Journal of Political Science},
  volume={60},
  number={1},
  pages={44--69},
  year={2016}
}`
      }
    },
    {
      id: 12,
      year: 2015,
      title: "Renewalist Christianity and the Political Saliency of LGBTs: Theory and Evidence from Sub-Saharan Africa",
      authors: "",
      journal: "Journal of Politics",
      volume: "77(2): 337-351",
      categories: ['Knowledge Production'],
      abstract: "One key political development in the past decade in many, but not all, countries across Africa has been the growing saliency of morality politics in general, and of lesbian, gay, bisexual, and transgender (LGBT) politics in particular. I argue that the uneven upward trend in the political saliency of LGBTs is closely related to two recent political processes: (1) a rapid growth of Pentecostal, Evangelical, and related Renewalist or Spirit-filled churches (demand-side factor) and (2) a democratization process leading to heightened political competition (supply side). To evaluate the above proposition, I created an original, fine-grained longitudinal dataset of media coverage of LGBTs in Africa, which I use as a measure of issue saliency. Using a series of negative binomial regression models, I find robust evidence that the saliency of LGBTs increases with a country’s population share of Renewalist Christians and that this effect increases with rising levels of political competition.",
      links: {
        pdf: "/assets/pdf/2015_JoP_Identity_renewalist_christianity.pdf",
        journal: "https://www.journals.uchicago.edu/doi/abs/10.1086/679596",
        appendix: "/assets/pdf/2015_JoP_Identity_renewalist_christianity_appendix.pdf",
        replication: "https://dataverse.harvard.edu/dataset.xhtml?persistentId=doi:10.7910/DVN/I7KXPA",
        bibtex: `@article{grossman2015renewalist,
  title={Renewalist Christianity and the Political Saliency of LGBTs: Theory and Evidence from Sub-Saharan Africa},
  author={Grossman, Guy},
  journal={Journal of Politics},
  volume={77},
  number={2},
  pages={337--351},
  year={2015}
}`
      }
    },
    {
      id: 11,
      year: 2015,
      title: "The Political Legacies Of Combat: Attitudes Towards War And Peace Among Israeli Ex-Combatants",
      authors: "Devorah Manekin and Dan Miodownik",
      journal: "International Organization",
      volume: "69(4): 981–1009",
      categories: ['Israel Politics'],
      abstract: "Recent research has highlighted combat's positive effects for political behavior, but it is unclear whether they extend to attitudes toward the conflict itself. We exploit the assignment of health rankings determining combat eligibility in the Israel Defense Forces to examine the effect of combat exposure on support for peaceful conflict resolution. Given the centrality of the Israeli-Palestinian conflict to global affairs, and its apparent intractability, the political consequences of combat become all the more pressing. We find that exposure to combat hardens attitudes toward the rival and reduces support for negotiation and compromise. Importantly, these attitudes translate into voting behavior: combatants are likely to vote for more hawkish parties. These findings call for caution in emphasizing the benign effects of combat and underscore the importance of reintegrating combatants during the transition from conflict to peace.",
      links: {
        pdf: "/assets/pdf/2015_IO_Conflict_the_political_legacies.pdf",
        journal: "https://www.cambridge.org/core/journals/international-organization/article/abs/the-political-legacies-of-combat-attitudes-toward-war-and-peace-among-israeli-ex-combatants/88C560C9B90473AC1D7DFDFEF685AEE0",
        replication: "/assets/pdf/2015_IO_Conflict_the_political_legacies_replication.zip",
        bibtex: `@article{grossman2015political,
  title={The Political Legacies Of Combat: Attitudes Towards War And Peace Among Israeli Ex-Combatants},
  author={Grossman, Guy and Manekin, Devorah and Miodownik, Dan},
  journal={International Organization},
  volume={69},
  number={4},
  pages={981--1009},
  year={2015}
}`
      }
    },
  {
      id: 10,
      year: 2014,
      title: "I would like u WMP to extend electricity 2 our village: On Information Technology and Interest Articulation",
      authors: "Macartan Humphreys and Gabriella Sacramone-Lutz",
      journal: "American Political Science Review",
      volume: "108(3): 688-705",
      categories: ['Knowledge Production'],
      abstract: "How does access to information communication technology (ICT) affect who gets heard and what gets communicated to politicians? On the one hand, ICT can lower communication costs for poorer constituents; on the other, technological channels may be used disproportionately more by the already well connected. To assess the flattening effects of ICTs, we presented a representative sample of constituents in Uganda with an opportunity to send a text message to their representatives at one of three randomly assigned prices. Critically, and contrary to concerns that technological innovations benefit the privileged, we find evidence that ICT can lead to significant flattening: a greater share of marginalized populations use this channel compared to existing political communication channels. Price plays a more complex role. Subsidizing the full cost of messaging increases uptake by over 40%. Surprisingly however, subsidy-induced increases in uptake do not yield further flattening since free channels are not used at higher rates by more marginalized constituents.",
      links: {
        pdf: "/assets/pdf/2014_APSR_ICT_I_would_like_u_WMP.pdf",
        journal: "https://www.cambridge.org/core/journals/american-political-science-review/article/abs/i-wld-like-u-wmp-to-extend-electricity-2-our-village-on-information-technology-and-interest-articulation/2F7F012EED269B795DF642ECFC3830AC",
        appendix: "/assets/pdf/2014_APSR_ICT_I_would_like_u_WMP_appendix.pdf",
        replication: "https://dataverse.harvard.edu/dataset.xhtml?persistentId=doi:10.7910/DVN/27192",
        bibtex: `@article{grossman2014ict,
  title={I would like u WMP to extend electricity 2 our village: On Information Technology and Interest Articulation},
  author={Grossman, Guy and Humphreys, Macartan and Sacramone-Lutz, Gabriella},
  journal={American Political Science Review},
  volume={108},
  number={3},
  pages={688--705},
  year={2014}
}`
      }
    },
    {
      id: 9,
      year: 2014,
      title: "Do better monitoring institutions increase leadership quality in community organizations? Evidence from Uganda",
      authors: "W. Walker Hanlon",
      journal: "American Journal of Political Science",
      volume: "58(3): 669–686",
      categories: ['Governance'],
      abstract: "We offer a framework for analyzing the impact of monitoring—a commonly recommended solution to poor leadership—on the quality of democratically elected leaders in community organizations in low-income countries. In our model, groups may face a trade-off between leader ability and effort. If the group's ability to monitor the leader is low, then the leader may exert too little effort. A higher level of monitoring increases leader effort, raising the value of the public good. However, more intense monitoring may also drive higher-ability members to opt out of candidacy, reducing public-goods value. The result is an inverted U-shaped relationship between the level of monitoring and the value of the public good. The trade-off between leader effort and ability, however, only exists in the presence of sufficient private-income opportunities. These predictions are assessed using original data gathered from Ugandan farmer associations.",
      links: {
        pdf: "/assets/pdf/2014_AJPS_PE_do_better_monitoring.pdf",
        journal: "https://onlinelibrary.wiley.com/doi/full/10.1111/ajps.12071",
        appendix: "/assets/pdf/2014_AJPS_PE_do_better_monitoring_appendix.pdf",
        replication: "https://dataverse.harvard.edu/dataset.xhtml?persistentId=hdl:1902.1/22124",
        bibtex: `@article{grossman2014monitoring,
  title={Do better monitoring institutions increase leadership quality in community organizations? Evidence from Uganda},
  author={Grossman, Guy and Hanlon, W. Walker},
  journal={American Journal of Political Science},
  volume={58},
  number={3},
  pages={669--686},
  year={2014}
}`
      }
    },
    {
      id: 8,
      year: 2014,
      title: "Do Selection Rules Affect Leader Responsiveness? Evidence from Rural Uganda",
      authors: "",
      journal: "Quarterly Journal of Political Science",
      volume: "9(1): 1-44",
      categories: ['Governance'],
      abstract: "Community organizations in developing countries often suffer from self-serving elites. This study examines whether the responsiveness and accountability of local leaders can be strengthened through the introduction of more inclusive and participatory leader selection rules. To address identification problems, I take advantage of natural conditions that resulted in exogenous variation in the rules for selecting leaders of farmer associations in Uganda. I find that compared to leaders appointed by the community elites, directly elected leaders are significantly more responsive to group members, leading to greater cooperative behavior. Analyzing possible mechanisms, I find that community organizations using appointments are less likely to develop monitoring institutions that are vital for constraining the behavior of local elites. Unique social network data provides evidence that close friendship ties between appointed and appointers substitute for formal monitoring institutions, leading to loss of confidence by community members and, subsequently, to a decline in public goods contributions.",
      links: {
        pdf: "/assets/pdf/2014_QJPS_PE_do_selection_rules.pdf",
        journal: "https://www.nowpublishers.com/article/Details/QJPS-13012",
        appendix: "/assets/pdf/2014_QJPS_PE_do_selection_rules_appendix.pdf",
        replication: "https://dataverse.harvard.edu/dataset.xhtml?persistentId=hdl:1902.1/22201",
        bibtex: `@article{grossman2014selection,
  title={Do Selection Rules Affect Leader Responsiveness? Evidence from Rural Uganda},
  author={Grossman, Guy},
  journal={Quarterly Journal of Political Science},
  volume={9},
  number={1},
  pages={1--44},
  year={2014}
}`
      }
    },
    {
      id: 7,
      year: 2014,
      title: "Administrative Unit Proliferation",
      authors: "Janet I. Lewis",
      journal: "American Political Science Review",
      volume: "108(1): 196-217",
      categories: ['Governance'],
      abstract: "Numerous developing countries have substantially increased their number of subnational administrative units in recent years. The literature on this phenomenon is, nonetheless, small and suffers from several theoretical and methodological shortcomings: in particular, a unit of analysis problem that causes past studies to mistakenly de-emphasize the importance of local actors. We posit that administrative unit proliferation occurs where and when there is a confluence of interests between the national executive and local citizens and elites from areas that are politically, economically, and ethnically marginalized. We argue further that although the proliferation of administrative units often accompanies or follows far-reaching decentralization reforms, it likely results in a recentralization of power; the proliferation of new local governments fragments existing units into smaller ones with lower relative intergovernmental bargaining power and administrative capacity. We find support for these arguments using original data from Uganda.",
      links: {
        pdf: "/assets/pdf/2014_APSR_Government_administrative_unit_proliferation.pdf",
        journal: "https://www.cambridge.org/core/journals/american-political-science-review/article/abs/administrative-unit-proliferation/28FB2861D809344D840B245100151918",
        appendix: "/assets/pdf/2014_APSR_Government_administrative_unit_proliferation_appendix.pdf",
        replication: "https://dataverse.harvard.edu/dataset.xhtml?persistentId=doi:10.7910/DVN/26937",
        bibtex: `@article{grossman2014administrative,
  title={Administrative Unit Proliferation},
  author={Grossman, Guy and Lewis, Janet I.},
  journal={American Political Science Review},
  volume={108},
  number={1},
  pages={196--217},
  year={2014}
}`
      }
    },
    {
      id: 6,
      year: 2013,
      title: "The Effect of Group Attachment and Social Position on Prosocial Behavior. Evidence from Lab-in-the-Field Experiments",
      authors: "Delia Baldassarri",
      journal: "PLoS ONE",
      volume: "8(3): e58750",
      categories: ['Knowledge Production'],
      abstract: "Social life is regulated by norms of fairness that constrain selfish behavior. While a substantial body of scholarship on prosocial behavior has provided evidence of such norms, large inter- and intra-personal variation in prosocial behavior still needs to be explained. The article identifies two social-structural dimensions along which people's generosity varies systematically: group attachment and social position. We conducted lab-in-the-field experiments involving 2,597 members of producer organizations in rural Uganda. Using different variants of the dictator game, we demonstrate that group attachment positively affects prosocial behavior, and that this effect is not simply the by-product of the degree of proximity between individuals. Second, we show that occupying a formal position in an organization or community leads to greater generosity toward in-group members. Taken together, our findings show that prosocial behavior is not an invariant social trait; rather, it varies according to individuals' relative position in the social structure.",
      links: {
        pdf: "/assets/pdf/2013_PLosOne_Identity_the_effect_of_group_attachment.pdf",
        journal: "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0058750",
        appendix: "/assets/pdf/2013_PLosOne_Identity_the_effect_of_group_attachment_appendix.pdf",
        bibtex: `@article{grossman2013group,
  title={The Effect of Group Attachment and Social Position on Prosocial Behavior. Evidence from Lab-in-the-Field Experiments},
  author={Grossman, Guy and Baldassarri, Delia},
  journal={PLoS ONE},
  volume={8},
  number={3},
  pages={e58750},
  year={2013}
}`
      }
    },
    {
      id: 5,
      year: 2012,
      title: "The Impact of Elections on Cooperation: Evidence from a Lab-in-the-Field Experiment in Uganda",
      authors: "Delia Baldassarri",
      journal: "American Journal of Political Science",
      volume: "56(4): 964-985",
      categories: ['Knowledge Production'],
      abstract: "Communities often rely on sanctioning to induce public goods contributions. Past studies focus on how external agencies or peer sanctioning induce cooperation. In this article, we focus instead on the role played by centralized authorities, internal to the community. Combining “lab-in-the-field” experiments with observational data on 1,541 Ugandan farmers from 50 communities, we demonstrate the positive effect of internal centralized sanctioning authorities on cooperative behavior. We also show that the size of this effect depends on the political process by which authority is granted: subjects electing leaders contribute more to public goods than subjects who were assigned leaders through a lottery. To test the ecological validity of our findings, we relate farmers’ behavior in the experiment to their level of cooperation in their community organization. We show that deference to authority in the controlled setting predicts cooperative behavior in the farmers’ natural environment, in which they face a similar social dilemma.",
      links: {
        pdf: "/assets/pdf/2012_AJPS_PE_the_impact_of_elections.pdf",
        journal: "https://onlinelibrary.wiley.com/doi/full/10.1111/j.1540-5907.2012.00596.x",
        appendix: "/assets/pdf/2012_AJPS_PE_the_impact_of_elections_appendix.docx",
        replication: "https://dataverse.harvard.edu/dataset.xhtml?persistentId=hdl:1902.1/18334",
        bibtex: `@article{grossman2012elections,
  title={The Impact of Elections on Cooperation: Evidence from a Lab-in-the-Field Experiment in Uganda},
  author={Grossman, Guy and Baldassarri, Delia},
  journal={American Journal of Political Science},
  volume={56},
  number={4},
  pages={964-985},
  year={2012}
}`
      }
    },
     {
      id: 4,
      year: 2011,
      title: "Centralized sanctioning and legitimate authority promote cooperation in humans",
      authors: "Delia Baldassarri",
      journal: "Proceedings of the National Academy of Sciences",
      volume: "108(27) 11023-11027",
      categories: ['Knowledge Production'],
      abstract: "Social sanctioning is widely considered a successful strategy to promote cooperation among humans. In situations in which individual and collective interests are at odds, incentives to free-ride induce individuals to refrain from contributing to public goods provision. Experimental evidence from public goods games shows that when endowed with sanctioning powers, conditional cooperators can discipline defectors, thus leading to greater levels of cooperation. However, extant evidence is based on peer punishment institutions, whereas in complex societies, systems of control are often centralized: for instance, we do not sanction our neighbors for driving too fast, the police do. Here we show the effect of centralized sanctioning and legitimate authority on cooperation. We designed an adaptation of the public goods game in which sanctioning power is given to a single monitor, and we experimentally manipulated the process by which the monitor is chosen. To increase the external validity of the study, we conducted lab-in-the-field experiments involving 1,543 Ugandan farmers from 50 producer cooperatives. This research provides evidence of the effectiveness of centralized sanctioning and demonstrates the causal effect of legitimacy on cooperation: participants are more responsive to the authority of an elected monitor than a randomly chosen monitor. Our essay contributes to the literature on the evolution of cooperation by introducing the idea of role differentiation. In complex societies, cooperative behavior is not only sustained by mechanisms of selection and reciprocity among peers, but also by the legitimacy that certain actors derive from their position in the social hierarchy.",
      links: {
        pdf: "/assets/pdf/2011_NAS_PE_centralized_sanctioning.pdf",
        journal: "https://www.pnas.org/doi/abs/10.1073/pnas.1105456108",
        appendix: "/assets/pdf/2011_NAS_PE_centralized_sanctioning_appendix.pdf",
        bibtex: `@article{doi:10.1073/pnas.1105456108,
  title={Centralized sanctioning and legitimate authority promote cooperation in humans},
  journal = {Proceedings of the National Academy of Sciences},
  volume = {108},
  number = {27},
  pages = {11023-11027},
  year = {2011}
}`
      }
    },
    {
      id: 3,
      year: 2006,
      title: "Courage to Refuse",
      authors: "Rami Kaplan",
      journal: "Peace Review",
      volume: "18",
      categories: ['Israel Politics'],
      abstract: "Social sanctioning is widely considered a successful strategy to promote cooperation among humans. In situations in which individual and collective interests are at odds, incentives to free-ride induce individuals to refrain from contributing to public goods provision. Experimental evidence from public goods games shows that when endowed with sanctioning powers, conditional cooperators can discipline defectors, thus leading to greater levels of cooperation. However, extant evidence is based on peer punishment institutions, whereas in complex societies, systems of control are often centralized: for instance, we do not sanction our neighbors for driving too fast, the police do. Here we show the effect of centralized sanctioning and legitimate authority on cooperation. We designed an adaptation of the public goods game in which sanctioning power is given to a single monitor, and we experimentally manipulated the process by which the monitor is chosen. To increase the external validity of the study, we conducted lab-in-the-field experiments involving 1,543 Ugandan farmers from 50 producer cooperatives. This research provides evidence of the effectiveness of centralized sanctioning and demonstrates the causal effect of legitimacy on cooperation: participants are more responsive to the authority of an elected monitor than a randomly chosen monitor. Our essay contributes to the literature on the evolution of cooperation by introducing the idea of role differentiation. In complex societies, cooperative behavior is not only sustained by mechanisms of selection and reciprocity among peers, but also by the legitimacy that certain actors derive from their position in the social hierarchy.",
      links: {
        pdf: "/assets/pdf/2011_NAS_PE_centralized_sanctioning.pdf",
        journal: "https://www.pnas.org/doi/abs/10.1073/pnas.1105456108",
        appendix: "/assets/pdf/2011_NAS_PE_centralized_sanctioning_appendix.pdf",
        bibtex: `@article{Grossman01072006,
title = {Courage to Refuse},
journal = {Peace Review},
volume = {18},
number = {2},
pages = {189--197},
year = {2006}
}`
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
      categories: ['Governance', 'Conflict'],
      abstract: "Community-oriented policing (COP) is one of the most widely touted mechanisms for building bridges between police forces and the communities they serve.  But evidence on the effectiveness of COP is surprisingly scant. We present results from one of the first randomized controlled trials to evaluate the impact of COP in the Global South. The COP initiative we study was locally designed and funded by the Ugandan government. Contrary to our expectations, we find no evidence that the program reduced crime, enhanced citizens’ perceptions of safety, improved their attitudes towards the police, increased crime reporting, or strengthened other norms of citizen cooperation with the police.   Nor do we find evidence that the program generated greater empathy or accountability among participating police officers themselves. We explore a variety of potential explanations for these null results, including both supply-side factors (e.g., resource constraints within the Ugandan police force) and demand-side factors (e.g., citizens’ fear of engaging with the police). We find no evidence that overcoming these obstacles would make COP more effective.  Taken together, our findings point to potential limitations of COP in low-income countries.",
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
      categories: ['Knowledge Production'],
      abstract: "Research has documented the importance of teamwork in the form of co-authorship for research productivity and innovation, but we know much less about how informal collaborations relate to academic success. Informal ties allow intangible exchanges like mentoring, guidance, and feedback to flow among scholars: these interactions weave a support structure that improves ideas and encourages project growth. However, these informal exchanges are more difficult to measure because they do not leave as clear a trail as co-authorship ties. Here, we uncover this layer of informal communication around scholarly outputs by parsing the information contained in the acknowledgment sections of published articles. Our data include 130,000 articles authored by 86,000 scholars from the period 2003-2023. We analyze scholars’ embeddedness in this informal structure of collaboration and reveal that (1) informal ties create a larger and denser network of support than co-authorship ties; (2) disconnection from informal networks is associated with gaps in productivity and impact; and (3) informal ties are a more relevant predictor of academic success than formal collaborations, even after matching for gender, seniority, methodology, and geographical location. Using coarsened exact matching and random forest regressions we show that informal structures of support are significantly associated with academic impact, creating gaps in who benefits from those connections. ",
      links: {
        bibtex: `@unpublished{grossman2024informal,
  title={Informal Connections Outweigh Co-authorship Ties in Academic Impact},
  author={Grossman, Guy and Danús, Lluís and Dinneen, William and Torreblanca, Carolina and González-Bailón, Sandra},
  note={Revise and resubmit},
  year={2024}
}`
      }
    },
    {
      id: 3,
      title: "Expression at the Edge: Free Speech Boundaries Amidst the Gaza Crisis",
      authors: "Yphtach Lelkes, Ran Abramitzky, Tamar Mitts, and Hani Mansour",
      status: "revise and resubmit",
      categories: ['Conflict', 'Governance'],
      abstract: "This study examines how college students navigate the tension between free speech and harm prevention, highlighted by recent campus protests around the war in Gaza. Using online survey experiments with 3,065 college students nationwide, we find that the severity of speech and the target’s identity strongly influence support for disciplinary actions in response to objectionable speech. Students generally oppose punishing objectionable speech unless it is deemed highly harmful. Hateful rhetoric targeting minority groups, such as Black, Jewish, Muslim, and transgender individuals, elicits stronger punitive responses than identical statements directed at White students. While students, on average, afford greater protections to minority groups, there is notable variation. Exploratory analysis reveals that students’ responses are shaped by normative principles: about two-thirds believe minority groups should receive greater protection from harmful speech, while one-third advocate universal, equal treatment regardless of the target’s identity. These principles predict responses to speech scenarios, beyond ideology, stance on the Israeli-Palestinian conflict, and other personal characteristics. However, commitment to these principles weakens when individuals have a strong stance on the topic. These findings shed light on how college students balance competing principles of fairness and harm prevention in polarized contexts, offering insights into contemporary campus debates about free speech and inclusion.",
      links: {
        pdf: "https://osf.io/preprints/osf/mc6u3_v2",
        bibtex: `@unpublished{grossman2024expression,
  title={Expression at the Edge: Free Speech Boundaries Amidst the Gaza Crisis},
  author={Grossman, Guy and Lelkes, Yphtach and Abramitzky, Ran and Mitts, Tamar and Mansour, Hani},
  note={Revise and resubmit},
  year={2024}
}`
  }
    },
  {
      id: 4,
      title: "Calculation and Conscience: Motivations for the Substantive Representation of Ethnic Minorities",
      authors: "Apurav Bhatiya, William Dinneen, and Stephanie Zonszein",
      status: "revise and resubmit",
      categories: ['Migration'],
      abstract: "A vast body of work shows that minority legislators are more likely to represent their group's interests compared to dominant group legislators. However, it is unclear whether this is due to intrinsic motivations or electoral incentives. We use a regression discontinuity design (RDD) to analyze ethnic minority representation in the UK Parliament. By comparing white MPs who narrowly beat minority candidates to minority MPs who narrowly beat white candidates, the RDD controls for electoral incentives since it holds constant constituency factors correlated with a minority parliamentary win. Analyzing over 1 million parliamentary questions and speeches, we find that minority MPs are more likely than white MPs to discuss issues important to ethnic minorities. Additional evidence supports that narrowly elected MPs face similar electoral incentives, and that minority MPs representing minorities face reelection penalties. Our findings suggest that minority substantive representation is driven at least in part by intrinsic motivations.",
      links: {
        pdf: "https://osf.io/preprints/osf/hfm35_v2",
        bibtex: `@unpublished{grossman2024calculation,
  title={Calculation and Conscience: Motivations for the Substantive Representation of Ethnic Minorities},
  author={Grossman, Guy and Bhatiya, Apurav and Dinneen, William and Zonszein, Stephanie},
  note={Revise and resubmit},
  year={2024}
}`
      }
    },
    {
      id: 5,
      title: "The Credibility Revolution in Political Science",
      authors: "Carolina Torreblanca, William Dinneen, and Yiqing Xu",
      status: "under review",
      categories: ['Knowledge Production'],
      abstract: "How has the credibility revolution reshaped political science? We address this question by using a large language model to classify 91,632 articles published between 2003 and 2023 across 174 political science journals, focusing on causal research designs, transparency practices, and citation patterns. Design-based studies—research strategies that explicitly a research design and the assumptions required for causal identification—have become increasingly common, displacing regression-based analyses that rely primarily on modeling assumptions. Yet as of 2023, studies without an explicit identification strategy still constitute nearly 40% of empirical quantitative work. Within design-based research, survey experiments dominate, while field experiments and quasi-experimental approaches have grown more modestly. Transparency practices such as placebo tests and power analysis remain rare. Design-based studies are concentrated in top journals and among authors at highly ranked institutions, and enjoy a persistent citation premium. The credibility revolution has meaningfully reshaped the discipline, though unevenly and incompletely",
      links: {
        pdf: "https://osf.io/preprints/socarxiv/w2kmc_v1",
        bibtex: `@unpublished{grossman2024credibility,
  title={The Credibility Revolution in Political Science},
  author={Grossman, Guy and Torreblanca, Carolina and Dinneen, William and Xu, Yiqing},
  note={Under review},
  year={2024}
}`
      }
    },

    {
      id: 6,
      title: "Liberalizing Refugee Hosting Policies without Losing the Vote",
      authors: "Yang-Yang Zhou, Naijia Liu, and Shuning Ge",
      status: "under review",
      categories: ['Migration'],
      abstract: "Inclusive refugee policies -- granting refugees the right to work, use public services, and move freely -- benefit both refugees and host countries' economies. Yet many governments hesitate to liberalize such policies, fearing electoral backlash. Can governments minimize backlash by pairing expansions of refugee rights with policies that reduce burdens on host communities? We examine this question in Uganda, Africa's largest refugee hosting country. Alongside refugee policy liberalization, Uganda mandated reallocating a share of refugee aid to communities near refugee centers. Combining refugee settlement data with election returns (2001--2021) and a generalized difference-in-differences design, we show first that the vote share of the incumbent president was significantly lower in areas with high refugee presence before the 2010 reforms. Afterwards, a one standard deviation increase in refugee presence was associated with a four percentage point increase in the vote share of the incumbent government. Using public goods data, public opinion surveys, newspaper data, and parliamentary speech records, we find that infrastructure investments in hosting communities and the reluctance of opposition parties to rally against popular policies account for our findings.",
      links: {
        pdf: "https://osf.io/preprints/osf/94tpy_v5",
        bibtex: `@unpublished{grossman2024liberalizing,
  title={Liberalizing Refugee Hosting Policies without Losing the Vote},
  author={Grossman, Guy and Zhou, Yang-Yang and Liu, Naijia and Ge, Shuning},
  note={Under review},
  year={2024}
}`
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