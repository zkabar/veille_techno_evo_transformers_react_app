import React, { useState } from "react";
import { Card, CardContent } from '@/components/Card.jsx';
import { Button } from '@/components/Button';

const articles = [
  {
    "titre": "La percée des Transformers dans le domaine de la santé",
    "resume": "Les Transformers révolutionnent la médecine en analysant les données médicales (Med-BERT, BEHRT), segmentant les images IRM (TransUNet) et modélisant les protéines (AlphaFold2). GPT-3, utilisé en chatbots médicaux, pose des risques éthiques, nécessitant une régulation stricte pour éviter les erreurs médicales.",
    "lien": "https://diplodoc.medium.com/la-perc%C3%A9e-des-transformeurs-transformers-dans-le-domaine-de-la-sant%C3%A9-8e8f2df8c82c",
    "categorie": "Médecine"
  },
  {
    "titre": "Transformer la médecine grâce à la santé numérique",
    "resume": "Sanofi ambitionne de devenir la première plateforme mondiale de soins numériques en intégrant IA, données et solutions digitales pour accélérer diagnostic et traitements. Elle optimise la fabrication industrielle, sécurise les données de santé et minimise les risques via une gouvernance stricte, garantissant éthique et régulation dans l’usage des technologies numériques.",
    "lien": "https://www.codeofconduct.sanofi/fr/topics/transformer-la-medecine-grace-a-la-sante-numerique/",
    "categorie": "Médecine"
  },
  {
    "titre": "Transformers pour la segmentation d’images médicales",
    "resume": "Les Transformers améliorent la segmentation d’images médicales grâce à des modèles hybrides comme TransUNet, Swin-UNet et nnFormer, combinant CNN et self-attention. Leur objectif est de préciser la segmentation des organes et tissus en optimisant la précision des diagnostics, tout en affrontant les défis liés à l’éthique et la consommation mémoire.",
    "lien": "https://thome.isir.upmc.fr/talks/DeepImaging23-Medical-Transformers.pdf",
    "categorie": "Médecine"
  },
  {
    "titre": "Les Transformers en imagerie médicale",
    "resume": "L’usage des Transformers en imagerie médicale s’étend à la classification, segmentation et détection des anomalies. Grâce à leur capacité à capter le contexte global, ils surpassent les CNN classiques dans l’analyse des images médicales, offrant une meilleure précision et automatisation des diagnostics dans les hôpitaux et laboratoires.",
    "lien": "https://www.sciencedirect.com/science/article/pii/S1361841523000634",
    "categorie": "Médecine"
  },
  {
    "titre": "Transformers pour usage médical",
    "resume": "Les modèles Transformer trouvent des applications dans le diagnostic assisté, l’analyse de pathologies et l’optimisation des traitements. Ils permettent aux médecins d’obtenir des analyses détaillées et rapides, facilitant ainsi la prise de décisions médicales. Cependant, leur adoption clinique nécessite des régulations strictes pour garantir la sécurité et la fiabilité des diagnostics IA.",
    "lien": "https://www.torytrans.com/en/products/transformers/medical-use",
    "categorie": "Médecine"
  },
  {
    "titre": "Transformers et intelligence artificielle en médecine",
    "resume": "Les Transformers révolutionnent la médecine en automatisant l’analyse des données médicales, optimisant les diagnostics et améliorant la recherche clinique. Utilisés en imagerie médicale, classification de maladies et génération de rapports, ils augmentent la précision des soins, bien que leur adoption nécessite une réglementation stricte pour éviter les erreurs critiques.",
    "lien": "https://www.sciencedirect.com/science/article/pii/S1361841523000233",
    "categorie": "Médecine"
  },
  {
    "titre": "Les modèles Transformers et la médecine",
    "resume": "Les Transformers permettent une meilleure détection des pathologies grâce à leur capacité à traiter des données massives. Utilisés en génomique, radiologie et surveillance épidémiologique, ils facilitent l’analyse rapide des signaux médicaux. Cependant, leur impact clinique dépend d’une intégration éthique et sécurisée dans les systèmes de santé.",
    "lien": "https://arxiv.org/abs/2202.12165",
    "categorie": "Médecine"
  },
  {
    "titre": "Les Transformers et l’intelligence artificielle dans le droit",
    "resume": "L’IA juridique, grâce aux Transformers, révolutionne la rédaction de contrats, l’analyse des décisions judiciaires et la recherche documentaire. Les modèles comme GPT-4 et BigBird automatisent les tâches répétitives et offrent des résumés précis, mais nécessitent une vérification humaine pour éviter les biais et garantir la fiabilité des résultats.",
    "lien": "https://dassignies.law/blog/les-transformers",
    "categorie": "Droit"
  },
  {
    "titre": "Les LLMs et leur impact sur le droit",
    "resume": "Les Large Language Models (LLMs) facilitent l’analyse des textes juridiques, la rédaction de conclusions et la gestion des litiges. Utilisés dans les cabinets d’avocats et par les juges, ils accélèrent la recherche juridique, mais soulèvent des questions éthiques sur l’interprétation des textes et la transparence des décisions.",
    "lien": "https://eleven-strategy.fr/comment-les-llm-peuvent-transformer-votre-activite-les-impacts-les-challenges-et-les-cas-dusage/",
    "categorie": "Droit"
  },
  {
    "titre": "L’IA générative pour les professionnels du droit",
    "resume": "L’IA générative, via les Transformers, assiste les juristes dans la rédaction automatique de contrats, la conformité réglementaire et la veille juridique. En réduisant le temps d’analyse, ces modèles améliorent l’efficacité des cabinets d’avocats, tout en nécessitant des mesures de contrôle pour éviter les erreurs et les manipulations juridiques.",
    "lien": "https://www.lexisnexis.com/community/fr-ressources/b/podcasts/posts/ia-generative-professionnels-droit-episode-2",
    "categorie": "Droit"
  },
  {
    "titre": "L'intelligence artificielle dans le droit : révolution ou défi ?",
    "resume": "Les Transformers transforment le secteur juridique en automatisant l’analyse des textes législatifs et en accélérant la rédaction de contrats. Cependant, leur adoption pose des défis éthiques et réglementaires, notamment en matière de transparence des décisions et de biais algorithmiques dans l’interprétation des lois.",
    "lien": "https://www.village-justice.com/articles/intelligence-artificielle-dans-droit-revolution-defi-pour-les-cabinets-avocats,49936.html",
    "categorie": "Droit"
  },
  {
    "titre": "L'intelligence artificielle et le droit au Sénat",
    "resume": "Les LLMs sont au centre des discussions législatives sur leur impact sur le droit. Le Sénat examine les implications de l’IA sur la justice prédictive, la confidentialité des données et l’équité juridique. L’objectif est d’établir un cadre réglementaire garantissant l’usage éthique et sécurisé des modèles IA en droit.",
    "lien": "https://www.senat.fr/rap/r24-216/r24-21614.html",
    "categorie": "Droit"
  },
  {
    "titre": "L’IA et la gestion des contrats dans le droit",
    "resume": "Les Transformers optimisent la gestion contractuelle en automatisant l’analyse des risques, la rédaction et la révision des clauses. Cette technologie réduit les délais juridiques et améliore la conformité, mais nécessite une supervision humaine rigoureuse pour éviter des erreurs qui pourraient compromettre la validité des contrats légaux.",
    "lien": "https://mylegitech.com/blog/ia-generative-et-management-des-contrats-vers-un-contrat-augmente-4eme-partie-2/",
    "categorie": "Droit"
  },
  {
    "titre": "L’intelligence artificielle et la transformation du droit",
    "resume": "L’IA générative transforme les métiers du droit en améliorant la recherche documentaire et l’analyse des décisions judiciaires. Les avocats et magistrats utilisent ces outils pour gagner en productivité, mais restent confrontés aux défis éthiques, notamment en matière de confidentialité des données et d’objectivité des analyses.",
    "lien": "https://juridy.com/lintelligence-artificielle-droit/",
    "categorie": "Droit"
  },
  {
    "titre": "L’impact des LLMs dans le secteur bancaire et financier",
    "resume": "Les LLMs révolutionnent la finance en automatisant la détection des fraudes, l’analyse des risques et la gestion des investissements. Grâce à l’analyse prédictive, ces modèles optimisent la prise de décision, mais leur implémentation requiert une réglementation stricte pour éviter les manipulations de marché et les erreurs algorithmiques.",
    "lien": "https://fr.shaip.com/blog/llm-in-banking-and-finance/",
    "categorie": "Finance"
  },
  {
    "titre": "Les Transformers dans la finance et la banque",
    "resume": "Les Transformers améliorent l’évaluation des risques, l’optimisation des portefeuilles et la gestion des transactions bancaires. Utilisés pour la prédiction des marchés et la détection de fraudes, ils offrent une automatisation avancée, mais nécessitent une régulation stricte pour éviter les biais et risques financiers.",
    "lien": "https://meritis.fr/les-transformers-le-modele-derriere-la-puissance-de-chatgpt/",
    "categorie": "Finance"
  },
  {
    "titre": "IA générative et finance : transformation technologique et humaine",
    "resume": "L’IA générative, appliquée à la finance, optimise la conformité réglementaire, la gestion des risques et l'automatisation des services clients. Les LLMs permettent d’analyser des volumes massifs de données financières, mais posent des défis éthiques et sécuritaires quant à la prise de décisions autonomes dans les investissements.",
    "lien": "https://www.groupeonepoint.com/fr/publications/finance-et-ia-generative-transformation-technologique-et-humaine/",
    "categorie": "Finance"
  },
  {
    "titre": "L’impact de ChatGPT sur la finance",
    "resume": "ChatGPT et les LLMs révolutionnent les conseils financiers et la gestion des relations clients en automatisant les réponses et en assistant les analystes. Bien qu’ils facilitent l’analyse rapide des tendances financières, leur fiabilité reste sujette à la validation humaine pour éviter les erreurs et les biais algorithmiques.",
    "lien": "https://blog.ibanfirst.com/fr/chatgpt-pour-finance",
    "categorie": "Finance"
  },
  {
    "titre": "L’IA et les banques : vers une nouvelle ère financière",
    "resume": "Les banques adoptent l’IA générative pour l’automatisation des transactions, l’évaluation des crédits et la personnalisation des services clients. Les Transformers facilitent une analyse approfondie des risques, mais leur intégration doit garantir une transparence accrue et un cadre éthique respectant la régulation financière.",
    "lien": "https://mondetech.fr/jpmorgan-revolutionne-le-secteur-financier-avec-sa-suite-ia-llm/",
    "categorie": "Finance"
  },
  {
    "titre": "Les chatbots IA et la finance",
    "resume": "Les chatbots basés sur Transformers révolutionnent la relation client dans la finance en fournissant des réponses automatisées et des conseils personnalisés. Leur efficacité réduit les coûts opérationnels, mais nécessite une supervision humaine pour éviter des erreurs dans les recommandations financières et garantir la conformité réglementaire.",
    "lien": "https://botpress.com/fr/industries/finance",
    "categorie": "Finance"
  },
  {
    "titre": "Comment les banques utilisent les LLMs",
    "resume": "Les LLMs transforment la banque en automatisant la détection des fraudes, l’évaluation des risques et la gestion des crédits. Leur capacité à analyser rapidement des volumes massifs de données optimise la conformité réglementaire, mais leur implémentation exige une transparence accrue et une supervision pour éviter les biais algorithmiques.",
    "lien": "https://www.investglass.com/fr/how-are-banks-using-llms-enhancing-fraud-detection-risk-assessment-and-credit-evaluation/",
    "categorie": "Finance"
  },
  {
    "titre": "L’intelligence artificielle dans la finance",
    "resume": "L’IA révolutionne la gestion des investissements, le trading automatisé et la gestion des risques financiers. Grâce aux Transformers, les institutions financières gagnent en rapidité et précision dans leurs décisions. Cependant, la régulation des IA financières devient essentielle pour garantir leur éthique et éviter la manipulation des marchés.",
    "lien": "https://www.intel.fr/content/www/fr/fr/learn/ai-in-finance.html",
    "categorie": "Finance"
  },
  {
    "titre": "L’impact des LLMs sur la génération de résumés",
    "resume": "Les LLMs facilitent la synthèse automatique des documents en réduisant le temps de lecture et d’analyse. Utilisés dans la recherche académique, les entreprises et la finance, ils permettent d’extraire rapidement les informations clés, bien que la vérification humaine reste nécessaire pour éviter les erreurs d’interprétation.",
    "lien": "https://datacorner.fr/llm-bart-summary/",
    "categorie": "Génération de résumés"
  },
  {
    "titre": "Les Transformers et la génération automatique de texte",
    "resume": "Les modèles Transformers améliorent la génération de résumés intelligents, permettant d’automatiser la rédaction d’articles et de rapports. Utilisés dans les médias, la finance et la recherche, ces modèles posent la question de la fiabilité des sources et de la qualité des résumés générés par l’IA.",
    "lien": "https://meritis.fr/les-transformers-le-modele-derriere-la-puissance-de-chatgpt/",
    "categorie": "Génération de résumés"
  },
  {
    "titre": "Les LLMs pour résumer l'information",
    "resume": "Les LLMs sont utilisés pour analyser et condenser rapidement de grandes quantités de texte dans des secteurs comme la médecine, la finance et le droit. Bien qu’ils réduisent le temps de recherche, leur efficacité dépend de l’entraînement du modèle et des biais présents dans les données utilisées.",
    "lien": "https://datascientest.com/large-language-models-tout-savoir",
    "categorie": "Génération de résumés"
  },
  {
    "titre": "LangChain et la transformation des données",
    "resume": "LangChain utilise les LLMs pour transformer les données en connaissances exploitables, facilitant l’automatisation des analyses et la génération d’insights stratégiques. Son application s’étend aux chatbots, systèmes de recommandation et analyse de texte, bien que la gestion des biais et la transparence des résultats restent des défis.",
    "lien": "https://creative-ai.studio/blog/2024/09/21/langchain-et-llm-transformer-les-donnees-en-connaissances-exploitables/",
    "categorie": "Génération de résumés"
  },
  {
    "titre": "Les LLMs et la maintenance prédictive industrielle",
    "resume": "Les Transformers optimisent la maintenance industrielle en analysant des flux de données en temps réel pour anticiper les défaillances des machines. Leur capacité à prédire les pannes et réduire les coûts de maintenance transforme l’industrie, mais nécessite une intégration efficace avec les infrastructures existantes.",
    "lien": "https://blog.integral-system.fr/ia-generative-une-revolution-pour-le-secteur-industriel/",
    "categorie": "Maintenance prédictive"
  },
  {
    "titre": "L’intelligence artificielle et la maintenance préventive",
    "resume": "L’IA générative révolutionne la maintenance préventive en permettant d’identifier les anomalies avant qu’elles ne causent des pannes majeures. Les LLMs analysent les historiques de maintenance et les données IoT, optimisant ainsi les opérations industrielles. Toutefois, leur adoption dépend de la qualité des données et des modèles prédictifs.",
    "lien": "https://www.carl-software.fr/cmms-ia-intelligence-artificielle-gmao-maintenance-preventive-predictive/",
    "categorie": "Maintenance prédictive"
  },
  {
    "titre": "Efficient Transformers: A Survey",
    "resume": "Résumé disponible dans le lien",
    "lien": "https://proceedings.neurips.cc/paper/2020/hash/c8512d142a2d849725f31a9a7a361ab9-Abstract.html",
    "categorie": "Papier scientifique"
  },
  {
    "titre": "Attention Is All You Need",
    "resume": "Résumé disponible dans le lien",
    "lien": "https://proceedings.neurips.cc/paper/2017/hash/3f5ee243547dee91fbd053c1c4a845aa-Abstract.html",
    "categorie": "Papier scientifique"
  },
  {
    "titre": "GPT Understands, Too",
    "resume": "Résumé disponible dans le lien",
    "lien": "https://arxiv.org/abs/2201.11838",
    "categorie": "Papier scientifique"
  },
  {
    "titre": "A Survey on Large Language Models",
    "resume": "Résumé disponible dans le lien",
    "lien": "https://arxiv.org/abs/2211.00974",
    "categorie": "Papier scientifique"
  },
  {
    "titre": "Reformer: The Efficient Transformer",
    "resume": "Résumé disponible dans le lien",
    "lien": "https://arxiv.org/abs/2004.05150",
    "categorie": "Papier scientifique"
  },
  {
    "titre": "Longformer: The Long-Document Transformer",
    "resume": "Résumé disponible dans le lien",
    "lien": "https://aclanthology.org/2021.eacl-main.154/",
    "categorie": "Papier scientifique"
  },
  {
    "titre": "Transformer-Based Model for Text Summarization",
    "resume": "Résumé disponible dans le lien",
    "lien": "https://ieeexplore.ieee.org/abstract/document/9441516/",
    "categorie": "Papier scientifique"
  },
  {
    "titre": "Sparse Attention Mechanisms in Transformers",
    "resume": "Résumé disponible dans le lien",
    "lien": "https://arxiv.org/abs/2203.08913",
    "categorie": "Papier scientifique"
  },
  {
    "titre": "Advances in Transformer Architectures",
    "resume": "Résumé disponible dans le lien",
    "lien": "https://proceedings.neurips.cc/paper_files/paper/2023/hash/6f9806a5adc72b5b834b27e4c7c0df9b-Abstract-Conference.html",
    "categorie": "Papier scientifique"
  },
  {
    "titre": "Scaling Laws for Neural Language Models",
    "resume": "Résumé disponible dans le lien",
    "lien": "https://arxiv.org/abs/2310.13800",
    "categorie": "Papier scientifique"
  },
  {
    "titre": "Understanding Memory Usage in Large Transformer Models",
    "resume": "Résumé disponible dans le lien",
    "lien": "https://arxiv.org/abs/2309.16039",
    "categorie": "Papier scientifique"
  }
]
;

const Articles = () => {
  const [filter, setFilter] = useState("Tous");
  const categories = ["Tous", "Médecine", "Droit", "Finance", "Génération de résumés", "Maintenance prédictive", "Papier scientifique"];

  const filteredArticles = filter === "Tous" ? articles : articles.filter(a => a.categorie === filter);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Recueil d'articles</h1>
      <br />
      <div className="mb-4">
        {categories.map((cat) => (
          <Button
            key={cat}
            onClick={() => setFilter(cat)}
            isActive={filter === cat}
            className="mr-2"
          >
            {cat}
        </Button>
        ))}
      </div>
      <br />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredArticles.map((article, index) => (
          <Card key={index}>
            <CardContent className="p-4">
              <h2 className="text-base font-semibold mb-2">{article.titre}</h2>
              <p className="text-sm text-gray-600 mb-4 min-h-[8.5rem]">{article.resume}</p>
              <a
                href={article.lien}
                className="text-blue-500 hover:text-blue-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                Lire l'article
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Articles;
