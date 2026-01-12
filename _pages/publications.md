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
  const [selectedYear, setSelectedYear] = useState('all'); // keep as string always
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
        bibtex: "@article{grossman2026political,
  title={Political Science Under Pressure: Competition and Collaboration in a Growing Discipline, 2003-2023},
  author={Grossman, Guy and Dinneen, William and Torreblanca, Carolina},
  journal={Perspective on Politics},
  year={2026},
  status={forthcoming}
}"
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
        bibtex: "@article{grossman2026climate,
  title={The Politics of Climate Change in the Developing World},
  author={Grossman, Guy and Sacks, Audrey and Xu, Alice},
  journal={Annual Review of Political Science},
  year={2026},
  status={forthcoming}
}"
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
        bibtex: "@article{grossman2025ethical,
  title={Ethical Oversight in Impact Evaluations: External Advisory Committees to Assess Programming Risks},
  author={Grossman, Guy and Christensen, Darin and Grossman, Allison N. and Kurtz, Jon and Weinstein, Jeremy and Wolff, Jessica},
  journal={Proceedings of the National Academy of Sciences},
  volume={122},
  number={47},
  pages={e2509773122},
  year={2025}
}"
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
        bibtex: "@article{grossman2020ict,
  title={Information Technology and Political Engagement: Mixed Evidence from Uganda},
  author={Grossman, Guy and Humphreys, Macartan and Sacramone-Lutz, Gabriella},
  journal={Journal of Politics},
  volume={82},
  number={4},
  pages={1321--1336},
  year={2020}
}"
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
        bibtex: "@article{grossman2020election,
  title={The Effect of Election Proximity on Government Responsiveness and Citizens' Participation},
  author={Grossman, Guy and Dipoppa, Gemma},
  journal={Comparative Political Studies},
  volume={53},
  number={4},
  pages={2183--2212},
  year={2020}
}"
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
        bibtex: "@article{grossman2020partisanship,
  title={Political partisanship influences behavioral responses to governors' recommendations for COVID-19 prevention in the United States},
  author={Grossman, Guy and Kim, Soojong and Rexer, Jonah M. and Thirumurthy, Harsha},
  journal={Proceedings of the National Academy of Sciences},
  volume={117},
  number={39},
  pages={24144--24153},
  year={2020}
}"
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
        bibtex: "@article{grossman2019village,
  title={It Takes a Village: Peer Effects and Externalities in Technology Adoption},
  author={Grossman, Guy and Ferrali, Romain and Platas, Melina R. and Rodden, Jonathan},
  journal={American Journal of Political Science},
  volume={64},
  number={3},
  pages={536--553},
  year={2019}
}"
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
        bibtex: "@article{grossman2019voter,
  title={Voter information campaigns and political accountability},
  author={Dunning, Thad and others},
  journal={Science Advances},
  volume={5},
  number={7},
  pages={1188--1192},
  year={2019}
}"
      }
    },
    {
      id: 23,
      year: 2019,
      title: "A Signaling Theory of Distributive Policy Choice: Evidence From Senegal",
      authors: "Jessica Gottlieb, Horacio Larreguy, and Benjamin Marx",
      journal: "Journal of Politics",
      volume: "81(2): 631-647",
      abstract: "A recent literature emphasizes political economy factors behind the wave of administrative splits across the developing world. While previous studies have focused on why some groups are more likely to obtain new administrative units, they do not explain why vote-maximizing incumbents use this arguably less efficient policy in the first place.",
      links: {
        pdf: "/assets/pdf/2019_JoP_Government_a_signaling_theory.pdf",
        journal: "https://www.journals.uchicago.edu/doi/abs/10.1086/701833",
        replication: "https://dataverse.harvard.edu/dataset.xhtml?persistentId=doi:10.7910/DVN/QJ9E9M",
        bibtex: "@article{grossman2019signaling,
  title={A Signaling Theory of Distributive Policy Choice: Evidence From Senegal},
  author={Grossman, Guy and Gottlieb, Jessica and Larreguy, Horacio and Marx, Benjamin},
  journal={Journal of Politics},
  volume={81},
  number={2},
  pages={631--647},
  year={2019}
}"
      }
    },
    {
      id: 22,
      year: 2019,
      title: "Contested Ground: Disentangling Material and Symbolic Attachment to Disputed Territory",
      authors: "Devorah Manekin and Tamar Mitts",
      journal: "Political Science Research and Methods",
      volume: "7(4): 679-697",
      abstract: "Territorial disputes are prone to conflict because of the value of territory to publics, whether due to its strategic and material worth, or to its intangible, symbolic value. Yet despite the implications of the distinction for both theory and policy, empirically disentangling the material from the symbolic has posed formidable methodological challenges.",
      links: {
        pdf: "/assets/pdf/2019_PSRM_Conflict_contested_ground.pdf",
        journal: "https://www.cambridge.org/core/journals/political-science-research-and-methods/article/abs/contested-ground-disentangling-material-and-symbolic-attachment-to-disputed-territory/51547A284177A0B4E84B76E1929A0C51",
        appendix: "/assets/pdf/2019_PSRM_Conflict_contested_ground_appendix.pdf",
        replication: "https://dataverse.harvard.edu/dataset.xhtml?persistentId=doi:10.7910/DVN/INCWQN",
        bibtex: "@article{grossman2019contested,
  title={Contested Ground: Disentangling Material and Symbolic Attachment to Disputed Territory},
  author={Grossman, Guy and Manekin, Devorah and Mitts, Tamar},
  journal={Political Science Research and Methods},
  volume={7},
  number={4},
  pages={679--697},
  year={2019}
}"
      }
    },
    {
      id: 21,
      year: 2019,
      title: "Border Walls and Smuggling Spillovers",
      authors: "Anna Getmansky and Austin L. Wright",
      journal: "Quarterly Journal of Political Science",
      volume: "14(3): 329-347",
      abstract: "A growing number of states are erecting physical barriers along their borders to stem the illicit flow of goods and people. Though border fortification policies are both controversial and politically salient, their distributional consequences remain largely unexplored. We study the impact of a border wall project on smuggling in Israel.",
      links: {
        pdf: "/assets/pdf/2019_QJPS_Conflict_border_walls.pdf",
        journal: "https://www.nowpublishers.com/article/Details/QJPS-18094",
        appendix: "/assets/pdf/2019_QJPS_Conflict_border_walls_appendix.pdf",
        replication: "https://www.nowpublishers.com/article/details/supplementary-info/100.00018094_supp.zip",
        bibtex: "@article{grossman2019border,
  title={Border Walls and Smuggling Spillovers},
  author={Grossman, Guy and Getmansky, Anna and Wright, Austin L.},
  journal={Quarterly Journal of Political Science},
  volume={14},
  number={3},
  pages={329--347},
  year={2019}
}"
      }
    },
    {
      id: 20,
      year: 2018,
      title: "How Sanctions Affect Public Opinion in Target Countries: Experimental Evidence from Israel",
      authors: "Devorah Manekin and Yotam Margalit",
      journal: "Comparative Political Studies",
      volume: "51(14): 1823–1857",
      abstract: "How do economic sanctions affect the political attitudes of individuals in targeted countries? Do they reduce or increase support for policy change? Are targeted, 'smart' sanctions more effective in generating public support? Despite the importance of these questions for understanding the effectiveness of sanctions, they have received little systematic attention.",
      links: {
        pdf: "/assets/pdf/2018_CPS_Conflict_how_sanctions.pdf",
        journal: "https://journals.sagepub.com/eprint/FNVxKbKXwaPcIKUaPSnt/full",
        replication: "https://journals.sagepub.com/doi/suppl/10.1177/0010414018774370/suppl_file/replication.zip",
        bibtex: "@article{grossman2018sanctions,
  title={How Sanctions Affect Public Opinion in Target Countries: Experimental Evidence from Israel},
  author={Grossman, Guy and Manekin, Devorah and Margalit, Yotam},
  journal={Comparative Political Studies},
  volume={51},
  number={14},
  pages={1823--1857},
  year={2018}
}"
      }
    },
    {
      id: 19,
      year: 2018,
      title: "Do Men and Women Have Different Policy Preferences in Africa? Determinants and Implications of Gender Gaps in Policy Prioritization",
      authors: "Jessica Gottlieb and Amanda Lea Robinson",
      journal: "British Journal of Political Science",
      volume: "48(3): 611-638",
      abstract: "Policies designed to increase women's representation in Africa are often motivated by the assumption that men and women have different policy preferences. This article finds that gender differences in policy priorities are actually quite small on average, but vary significantly across policy domains and countries.",
      links: {
        pdf: "/assets/pdf/2018_BJPS_Identity_do_men_and_women.pdf",
        journal: "https://www.cambridge.org/core/journals/british-journal-of-political-science/article/abs/do-men-and-women-have-different-policy-preferences-in-africa-determinants-and-implications-of-gender-gaps-in-policy-prioritization/CE824A46AE39D05FC79900C50DCEC0C4",
        appendix: "/assets/pdf/2018_BJPS_Identity_do_men_and_women_appendix.pdf",
        replication: "https://dataverse.harvard.edu/dataset.xhtml?persistentId=doi:10.7910/DVN/ZIWLCJ",
        bibtex: "@article{grossman2018gender,
  title={Do Men and Women Have Different Policy Preferences in Africa? Determinants and Implications of Gender Gaps in Policy Prioritization},
  author={Grossman, Guy and Gottlieb, Jessica and Robinson, Amanda Lea},
  journal={British Journal of Political Science},
  volume={48},
  number={3},
  pages={611--638},
  year={2018}
}"
      }
    },
    {
      id: 18,
      year: 2018,
      title: "Information Dissemination, Competitive Pressure, and Politician Performance between Elections: A Field Experiment in Uganda",
      authors: "Kristin Michelitch",
      journal: "American Political Science Review",
      volume: "112(2): 280-301",
      abstract: "Politicians shirk when their performance is obscure to constituents. We theorize that when politician performance information is disseminated early in the electoral term, politicians will subsequently improve their performance in anticipation of changes in citizens' evaluative criteria and possible challenger entry in the next election.",
      links: {
        pdf: "/assets/pdf/2018_APSR_PE_information_dissemination.pdf",
        journal: "http://bit.ly/2FTkhR6",
        appendix: "/assets/pdf/2018_APSR_PE_information_dissemination_appendix.pdf",
        replication: "https://dataverse.harvard.edu/dataset.xhtml?persistentId=doi:10.7910/DVN/AI3VM8",
        bibtex: "@article{grossman2018information,
  title={Information Dissemination, Competitive Pressure, and Politician Performance between Elections: A Field Experiment in Uganda},
  author={Grossman, Guy and Michelitch, Kristin},
  journal={American Political Science Review},
  volume={112},
  number={2},
  pages={280--301},
  year={2018}
}"
      }
    },
    {
      id: 17,
      year: 2018,
      title: "Crowdsourcing Accountability: ICT for Service Delivery",
      authors: "Melina R. Platas and Jonathan Rodden",
      journal: "World Development",
      volume: "112: 74-87",
      abstract: "We examine the effect on service delivery outcomes of a new information communication technology (ICT) platform that allows citizens to send free and anonymous messages to local government officials, thus reducing the cost and increasing the efficiency of communication about public services.",
      links: {
        pdf: "/assets/pdf/2018_WD_ICT_crowdsourcing_accountability.pdf",
        journal: "https://www.sciencedirect.com/science/article/pii/S0305750X18302286",
        appendix: "/assets/pdf/2018_WD_ICT_crowdsourcing_accountability_appendix.pdf",
        replication: "https://dataverse.harvard.edu/dataset.xhtml?persistentId=doi:10.7910/DVN/FFBNBU",
        bibtex: "@article{grossman2018crowdsourcing,
  title={Crowdsourcing Accountability: ICT for Service Delivery},
  author={Grossman, Guy and Platas, Melina R. and Rodden, Jonathan},
  journal={World Development},
  volume={112},
  pages={74--87},
  year={2018}
}"
      }
    },
    {
      id: 16,
      year: 2017,
      title: "Texting Complaints to Politicians: Name Personalization and Politicians' Encouragement in Citizen Mobilization",
      authors: "Kristin Michelitch and Marta Santamaria",
      journal: "Comparative Political Studies",
      volume: "50(10): 1325-1357",
      abstract: "Poor public service provision and government accountability is commonplace in low-income countries. Although mobile phone–based platforms have emerged to allow constituents to report service deficiencies to government officials, they have been plagued by low citizen participation.",
      links: {
        pdf: "/assets/pdf/2017_CPS_ICT_texting_commplaints.pdf",
        journal: "https://journals.sagepub.com/doi/abs/10.1177/0010414016666862",
        bibtex: "@article{grossman2017texting,
  title={Texting Complaints to Politicians: Name Personalization and Politicians' Encouragement in Citizen Mobilization},
  author={Grossman, Guy and Michelitch, Kristin and Santamaria, Marta},
  journal={Comparative Political Studies},
  volume={50},
  number={10},
  pages={1325--1357},
  year={2017}
}"
      }
    },
    {
      id: 15,
      year: 2017,
      title: "Government Fragmentation and Public Goods Provision",
      authors: "Jan H. Pierskalla and Emma Boswell Dean",
      journal: "Journal of Politics",
      volume: "79(3): 823-840",
      abstract: "We investigate the effects of territorial government fragmentation on the quality of public services. We argue that an increase in the number of regional governments has two effects: (1) it redistributes fiscal and administrative resources to underserved regions and (2) encourages yardstick competition.",
      links: {
        pdf: "/assets/pdf/2017_JoP_Government_government_fragmentation.pdf",
        journal: "https://www.journals.uchicago.edu/doi/abs/10.1086/690305",
        appendix: "/assets/pdf/2017_JoP_Government_government_fragmentation_appendix.pdf",
        replication: "https://dataverse.harvard.edu/dataset.xhtml?persistentId=doi:10.7910/DVN/VS3CG6",
        bibtex: "@article{grossman2017fragmentation,
  title={Government Fragmentation and Public Goods Provision},
  author={Grossman, Guy and Pierskalla, Jan H. and Dean, Emma Boswell},
  journal={Journal of Politics},
  volume={79},
  number={3},
  pages={823--840},
  year={2017}
}"
      }
    },
    {
      id: 14,
      year: 2016,
      title: "Deliberate Disengagement: How Education Can Decrease Political Participation in Electoral Authoritarian Regimes",
      authors: "Keven Croke, Horacio A. Larreguy, and John Marshall",
      journal: "American Political Science Review",
      volume: "110(3): 579-600",
      abstract: "A large literature examining advanced and consolidating democracies suggests that education increases political participation. However, in electoral authoritarian regimes, educated voters may instead deliberately disengage. If education increases critical capacities, political awareness, and support for democracy, educated citizens may believe that participation is futile or legitimizes autocrats.",
      links: {
        pdf: "/assets/pdf/2016_APSR_PE_deliberate_disengagement.pdf",
        journal: "https://www.cambridge.org/core/journals/american-political-science-review/article/abs/deliberate-disengagement-how-education-can-decrease-political-participation-in-electoral-authoritarian-regimes/192AB48618B0E0450C93E97BE8321218",
        appendix: "/assets/pdf/2016_APSR_PE_deliberate_disengagement_appendix.pdf",
        replication: "/assets/pdf/2016_APSR_PE_deliberate_disengagement_replication.zip",
        bibtex: "@article{grossman2016deliberate,
  title={Deliberate Disengagement: How Education Can Decrease Political Participation in Electoral Authoritarian Regimes},
  author={Grossman, Guy and Croke, Keven and Larreguy, Horacio A. and Marshall, John},
  journal={American Political Science Review},
  volume={110},
  number={3},
  pages={579--600},
  year={2016}
}"
      }
    },
    {
      id: 13,
      year: 2016,
      title: "Descriptive Representation and Judicial Outcomes in Multi-Ethnic Societies",
      authors: "Oren Gazal-Ayal, Samuel D. Pimentel, and Jeremy M. Weinstein",
      journal: "American Journal of Political Science",
      volume: "60(1): 44–69",
      abstract: "The extent to which judicial outcomes depend on judges' identities is a central question in multiethnic societies. Past work on the impact of the racial composition of appellate courts has narrowly focused on civil rights cases in the United States. We expand this literature by testing for ethnicity-based panel effects in criminal appeals in Israel.",
      links: {
        pdf: "/assets/pdf/2016_AJPS_Identity_descriptive_representation.pdf",
        journal: "https://onlinelibrary.wiley.com/doi/abs/10.1111/ajps.12187",
        appendix: "/assets/pdf/2016_AJPS_Identity_descriptive_representation_appendix.pdf",
        replication: "https://dataverse.harvard.edu/dataset.xhtml?persistentId=doi:10.7910/DVN/28870",
        bibtex: "@article{grossman2016descriptive,
  title={Descriptive Representation and Judicial Outcomes in Multi-Ethnic Societies},
  author={Grossman, Guy and Gazal-Ayal, Oren and Pimentel, Samuel D. and Weinstein, Jeremy M.},
  journal={American Journal of Political Science},
  volume={60},
  number={1},
  pages={44--69},
  year={2016}
}"
      }
    },
    {
      id: 12,
      year: 2015,
      title: "Renewalist Christianity and the Political Saliency of LGBTs: Theory and Evidence from Sub-Saharan Africa",
      authors: "",
      journal: "Journal of Politics",
      volume: "77(2): 337-351",
      abstract: "One key political development in the past decade in many, but not all, countries across Africa has been the growing saliency of morality politics in general, and of lesbian, gay, bisexual, and transgender (LGBT) politics in particular. I argue that the uneven upward trend in the political saliency of LGBTs is closely related to two recent political processes.",
      links: {
        pdf: "/assets/pdf/2015_JoP_Identity_renewalist_christianity.pdf",
        journal: "https://www.journals.uchicago.edu/doi/abs/10.1086/679596",
        appendix: "/assets/pdf/2015_JoP_Identity_renewalist_christianity_appendix.pdf",
        replication: "https://dataverse.harvard.edu/dataset.xhtml?persistentId=doi:10.7910/DVN/I7KXPA",
        bibtex: "@article{grossman2015renewalist,
  title={Renewalist Christianity and the Political Saliency of LGBTs: Theory and Evidence from Sub-Saharan Africa},
  author={Grossman, Guy},
  journal={Journal of Politics},
  volume={77},
  number={2},
  pages={337--351},
  year={2015}
}"
      }
    },
    {
      id: 11,
      year: 2015,
      title: "The Political Legacies Of Combat: Attitudes Towards War And Peace Among Israeli Ex-Combatants",
      authors: "Devorah Manekin and Dan Miodownik",
      journal: "International Organization",
      volume: "69(4): 981–1009",
      abstract: "Recent research has highlighted combat's positive effects for political behavior, but it is unclear whether they extend to attitudes toward the conflict itself. We exploit the assignment of health rankings determining combat eligibility in the Israel Defense Forces to examine the effect of combat exposure on support for peaceful conflict resolution.",
      links: {
        pdf: "/assets/pdf/2015_IO_Conflict_the_political_legacies.pdf",
        journal: "https://www.cambridge.org/core/journals/international-organization/article/abs/the-political-legacies-of-combat-attitudes-toward-war-and-peace-among-israeli-ex-combatants/88C560C9B90473AC1D7DFDFEF685AEE0",
        replication: "/assets/pdf/2015_IO_Conflict_the_political_legacies_replication.zip",
        bibtex: "@article{grossman2015political,
  title={The Political Legacies Of Combat: Attitudes Towards War And Peace Among Israeli Ex-Combatants},
  author={Grossman, Guy and Manekin, Devorah and Miodownik, Dan},
  journal={International Organization},
  volume={69},
  number={4},
  pages={981--1009},
  year={2015}
}"
      }
    },
    {
      id: 10,
      year: 2014,
      title: "I would like u WMP to extend electricity 2 our village: On Information Technology and Interest Articulation",
      authors: "Macartan Humphreys and Gabriella Sacramone-Lutz",
      journal: "American Political Science Review",
      volume: "108(3): 688-705",
      abstract: "How does access to information communication technology (ICT) affect who gets heard and what gets communicated to politicians? On the one hand, ICT can lower communication costs for poorer constituents; on the other, technological channels may be used disproportionately more by the already well connected.",
      links: {
        pdf: "/assets/pdf/2014_APSR_ICT_I_would_like_u_WMP.pdf",
        journal: "https://www.cambridge.org/core/journals/american-political-science-review/article/abs/i-wld-like-u-wmp-to-extend-electricity-2-our-village-on-information-technology-and-interest-articulation/2F7F012EED269B795DF642ECFC3830AC",
        appendix: "/assets/pdf/2014_APSR_ICT_I_would_like_u_WMP_appendix.pdf",
        replication: "https://dataverse.harvard.edu/dataset.xhtml?persistentId=doi:10.7910/DVN/27192",
        bibtex: "@article{grossman2014ict,
  title={I would like u WMP to extend electricity 2 our village: On Information Technology and Interest Articulation},
  author={Grossman, Guy and Humphreys, Macartan and Sacramone-Lutz, Gabriella},
  journal={American Political Science Review},
  volume={108},
  number={3},
  pages={688--705},
  year={2014}
}"
      }
    },
    {
      id: 9,
      year: 2014,
      title: "Do better monitoring institutions increase leadership quality in community organizations? Evidence from Uganda",
      authors: "W. Walker Hanlon",
      journal: "American Journal of Political Science",
      volume: "58(3): 669–686",
      abstract: "We offer a framework for analyzing the impact of monitoring—a commonly recommended solution to poor leadership—on the quality of democratically elected leaders in community organizations in low-income countries. In our model, groups may face a trade-off between leader ability and effort.",
      links: {
        pdf: "/assets/pdf/2014_AJPS_PE_do_better_monitoring.pdf",
        journal: "https://onlinelibrary.wiley.com/doi/full/10.1111/ajps.12071",
        appendix: "/assets/pdf/2014_AJPS_PE_do_better_monitoring_appendix.pdf",
        replication: "https://dataverse.harvard.edu/dataset.xhtml?persistentId=hdl:1902.1/22124",
        bibtex: "@article{grossman2014monitoring,
  title={Do better monitoring institutions increase leadership quality in community organizations? Evidence from Uganda},
  author={Grossman, Guy and Hanlon, W. Walker},
  journal={American Journal of Political Science},
  volume={58},
  number={3},
  pages={669--686},
  year={2014}
}"
      }
    },
    {
      id: 8,
      year: 2014,
      title: "Do Selection Rules Affect Leader Responsiveness? Evidence from Rural Uganda",
      authors: "",
      journal: "Quarterly Journal of Political Science",
      volume: "9(1): 1-44",
      abstract: "Community organizations in developing countries often suffer from selfserving elites. This study examines whether the responsiveness and accountability of local leaders can be strengthened through the introduction of more inclusive and participatory leader selection rules.",
      links: {
        pdf: "/assets/pdf/2014_QJPS_PE_do_selection_rules.pdf",
        journal: "https://www.nowpublishers.com/article/Details/QJPS-13012",
        appendix: "/assets/pdf/2014_QJPS_PE_do_selection_rules_appendix.pdf",
        replication: "https://dataverse.harvard.edu/dataset.xhtml?persistentId=hdl:1902.1/22201",
        bibtex: "@article{grossman2014selection,
  title={Do Selection Rules Affect Leader Responsiveness? Evidence from Rural Uganda},
  author={Grossman, Guy},
  journal={Quarterly Journal of Political Science},
  volume={9},
  number={1},
  pages={1--44},
  year={2014}
}"
      }
    },
    {
      id: 7,
      year: 2014,
      title: "Administrative Unit Proliferation",
      authors: "Janet I. Lewis",
      journal: "American Political Science Review",
      volume: "108(1): 196-217",
      abstract: "Numerous developing countries have substantially increased their number of subnational administrative units in recent years. The literature on this phenomenon is, nonetheless, small and suffers from several theoretical and methodological shortcomings: in particular, a unit of analysis problem that causes past studies to mistakenly de-emphasize the importance of local actors.",
      links: {
        pdf: "/assets/pdf/2014_APSR_Government_administrative_unit_proliferation.pdf",
        journal: "https://www.cambridge.org/core/journals/american-political-science-review/article/abs/administrative-unit-proliferation/28FB2861D809344D840B245100151918",
        appendix: "/assets/pdf/2014_APSR_Government_administrative_unit_proliferation_appendix.pdf",
        replication: "https://dataverse.harvard.edu/dataset.xhtml?persistentId=doi:10.7910/DVN/26937",
        bibtex: "@article{grossman2014administrative,
  title={Administrative Unit Proliferation},
  author={Grossman, Guy and Lewis, Janet I.},
  journal={American Political Science Review},
  volume={108},
  number={1},
  pages={196--217},
  year={2014}
}"
      }
    },
    {
      id: 6,
      year: 2013,
      title: "The Effect of Group Attachment and Social Position on Prosocial Behavior. Evidence from Lab-in-the-Field Experiments",
      authors: "Delia Baldassarri",
      journal: "PLoS ONE",
      volume: "8(3): e58750",
      abstract: "Social life is regulated by norms of fairness that constrain selfish behavior. While a substantial body of scholarship on prosocial behavior has provided evidence of such norms, large inter- and intra-personal variation in prosocial behavior still needs to be explained. The article identifies two social-structural dimensions along which people's generosity varies systematically: group attachment and social position.",
      links: {
        pdf: "/assets/pdf/2013_PLosOne_Identity_the_effect_of_group_attachment.pdf",
        journal: "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0058750",
        appendix: "/assets/pdf/2013_PLosOne_Identity_the_effect_of_group_attachment_appendix.pdf",
        bibtex: "@article{grossman2013group,
  title={The Effect of Group Attachment and Social Position on Prosocial Behavior. Evidence from Lab-in-the-Field Experiments},
  author={Grossman, Guy and Baldassarri, Delia},
  journal={PLoS ONE},
  volume={8},
  number={3},
  pages={e58750},
  year={2013}
}"
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
        bibtex: "@unpublished{grossman2024community,
  title={Can Community Policing Improve Police-Community Relations in a Low-Income Country Setting?},
  author={Grossman, Guy and Blair, Robert A. and Wilke, Anna M.},
  note={Revise and resubmit},
  year={2024}
}
      }
    },
    {
      id: 2,
      title: "Informal Connections Outweigh Co-authorship Ties in Academic Impact",
      authors: "Danús Lluís, William Dinneen, Carolina Torreblanca & Sandra González-Bailón",
      status: "revise and resubmit",
      abstract: "Research has documented the importance of teamwork in the form of co-authorship for research productivity and innovation, but we know much less about how informal collaborations relate to academic success. Informal ties allow intangible exchanges like mentoring, guidance, and feedback to flow among scholars.",
      links: {
        bibtex: "@unpublished{grossman2024informal,
  title={Informal Connections Outweigh Co-authorship Ties in Academic Impact},
  author={Grossman, Guy and Danús, Lluís and Dinneen, William and Torreblanca, Carolina and González-Bailón, Sandra},
  note={Revise and resubmit},
  year={2024}
}
      }
    },
    {
      id: 3,
      title: "Expression at the Edge: Free Speech Boundaries Amidst the Gaza Crisis",
      authors: "Yphtach Lelkes, Ran Abramitzky, Tamar Mitts, and Hani Mansour",
      status: "revise and resubmit",
      abstract: "This study examines how college students navigate the tension between free speech and harm prevention, highlighted by recent campus protests around the war in Gaza. Using online survey experiments with 3,065 college students nationwide, we find that the severity of speech and the target's identity strongly influence support for disciplinary actions.",
      links: {
        pdf: "https://osf.io/preprints/osf/mc6u3_v2",
        bibtex: "@unpublished{grossman2024expression,
  title={Expression at the Edge: Free Speech Boundaries Amidst the Gaza Crisis},
  author={Grossman, Guy and Lelkes, Yphtach and Abramitzky, Ran and Mitts, Tamar and Mansour, Hani},
  note={Revise and resubmit},
  year={2024}
}
      }
    },
    {
      id: 4,
      title: "Calculation and Conscience: Motivations for the Substantive Representation of Ethnic Minorities",
      authors: "Apurav Bhatiya, William Dinneen, and Stephanie Zonszein",
      status: "revise and resubmit",
      abstract: "A vast body of work shows that minority legislators are more likely to represent their group's interests compared to dominant group legislators. However, it is unclear whether this is due to intrinsic motivations or electoral incentives. We use a regression discontinuity design (RDD) to analyze ethnic minority representation in the UK Parliament.",
      links: {
        pdf: "https://osf.io/preprints/osf/hfm35_v2",
        bibtex: "@unpublished{grossman2024calculation,
  title={Calculation and Conscience: Motivations for the Substantive Representation of Ethnic Minorities},
  author={Grossman, Guy and Bhatiya, Apurav and Dinneen, William and Zonszein, Stephanie},
  note={Revise and resubmit},
  year={2024}
}
      }
    },
    {
      id: 5,
      title: "The Credibility Revolution in Political Science",
      authors: "Carolina Torreblanca, William Dinneen, and Yiqing Xu",
      status: "under review",
      abstract: "How has the credibility revolution reshaped political science? We address this question by using a large language model to classify 91,632 articles published between 2003 and 2023 across 174 political science journals, focusing on causal research designs, transparency practices, and citation patterns.",
      links: {
        pdf: "https://osf.io/preprints/socarxiv/w2kmc_v1",
        bibtex: "@unpublished{grossman2024credibility,
  title={The Credibility Revolution in Political Science},
  author={Grossman, Guy and Torreblanca, Carolina and Dinneen, William and Xu, Yiqing},
  note={Under review},
  year={2024}
}
      }
    },
    {
      id: 6,
      title: "Liberalizing Refugee Hosting Policies without Losing the Vote",
      authors: "Yang-Yang Zhou, Naijia Liu, and Shuning Ge",
      status: "under review",
      abstract: "Inclusive refugee policies -- granting refugees the right to work, use public services, and move freely -- benefit both refugees and host countries' economies. Yet many governments hesitate to liberalize such policies, fearing electoral backlash.",
      links: {
        pdf: "https://osf.io/preprints/osf/94tpy_v5",
        bibtex: "@unpublished{grossman2024liberalizing,
  title={Liberalizing Refugee Hosting Policies without Losing the Vote},
  author={Grossman, Guy and Zhou, Yang-Yang and Liu, Naijia and Ge, Shuning},
  note={Under review},
  year={2024}
}
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
  }, [selectedYear, publications]);

  const yearCounts = useMemo(() => {
    const counts = {};
    publications.forEach(p => {
      const y = String(p.year);
      counts[y] = (counts[y] || 0) + 1;
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
