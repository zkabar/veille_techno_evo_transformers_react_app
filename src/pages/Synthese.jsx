import React, { useState } from "react";

const Synthese = () => {
    return (
      <div class="container">
        <h1>LLMs : Évolution et adaptation des Transformers aux séquences longues</h1>
        
        <h2>1. Introduction</h2>
        <p>Le traitement automatique du langage naturel (NLP) a connu des avancées majeures au cours de la dernière décennie, notamment grâce à l'émergence des Large Language Models (LLMs). Ces modèles d'intelligence artificielle, basés principalement sur l'architecture Transformer, permettent d'analyser, de comprendre et de générer du texte avec une précision remarquable. Ils sont désormais omniprésents dans de nombreuses applications, allant des chatbots aux systèmes de traduction automatique en passant par la recherche documentaire et l'assistance à la rédaction.</p>

        <p>Malgré leurs performances impressionnantes, les modèles basés sur les Transformers présentent des limites importantes, notamment lorsqu'ils sont confrontés à des textes longs. La complexité quadratique du mécanisme de self-attention, qui croît exponentiellement avec la longueur de la séquence d'entrée, constitue un obstacle majeur. De plus, la capacité des modèles traditionnels comme BERT et GPT-2 est limitée à environ 512 tokens, ce qui empêche une compréhension globale des documents volumineux.</p>
        
        <p>Ce rapport de veille technologique vise à explorer les récentes innovations permettant de surmonter les limites des Transformers classiques pour le traitement des longues séquences. Nous analyserons les modèles spécifiques conçus pour gérer de grands contextes, tels que BigBird, Longformer, Reformer et Unlimiformer, et nous examinerons leurs applications dans divers secteurs professionnels, notamment la médecine, le droit et la recherche scientifique. L'objectif est de comprendre comment ces avancées influencent l'évolution des LLMs et quelles sont les perspectives d'amélioration futures.

La suite du rapport abordera dans un premier temps le fonctionnement des Transformers, avant d'examiner leurs limites et les solutions innovantes qui permettent aujourd'hui d'étendre leur capacité à traiter des textes longs.</p>
        
        <h2>2. Les Transformers : Origine et Fonctionnement</h2>
        <h3>Des RNN aux Transformers</h3>
        <p>Avant l'émergence des Transformers, les modèles de traitement du langage naturel étaient principalement basés sur les Réseaux de Neurones Récurrents (RNN) et leurs variantes, telles que les LSTM et les GRU. Ces architectures, bien que performantes pour des tâches séquentielles courtes, présentaient plusieurs limitations :

Une incapacité à capturer efficacement des dépendances longues en raison de la disparition du gradient.

Une exécution séquentielle, rendant l'entraînement et l'inférence peu efficaces en termes de parallélisme.

L'introduction des Transformers par Vaswani et al. en 2017 avec l'article "Attention is All You Need" a révolutionné le domaine du NLP. Cette architecture repose sur un mécanisme de self-attention qui permet un traitement parallèle efficace de</p>
        
        <h3>Mécanisme du Self-Attention</h3>
        <p>Le self-attention est le cœur des Transformers. Il permet à chaque mot d'une séquence d'accorder une importance variable aux autres mots du texte, améliorant ainsi la compréhension du contexte global. Le fonctionnement repose sur trois vecteurs principaux :

Les requêtes (Query) : Représentent le mot analysé.

Les clés (Key) : Contiennent les informations des autres mots.

Les valeurs (Value) : Contiennent les informations finales à extraire.

Chaque mot peut ainsi interagir avec tous les autres mots de la séquence, ce qui permet une meilleure représentation des relations sémantiques et syntaxiques.

Applications des Transformers

Depuis leur création, les Transformers ont été adoptés dans de nombreuses applications :

<ul>

<li>Traduction automatique (ex. Google Translate).</li>

<li>Analyse de sentiments et classification de texte.</li>

<li>Génération de texte et modèles conversationnels (ex. ChatGPT, Claude AI).</li>

<li>Traitement multimodal (ex. Vision Transformers pour l'analyse d'images et de vidéos).</li>

</ul>

Le succès des Transformers a conduit à une adoption massive et à des améliorations constantes. Toutefois, leur efficacité est remise en question lorsqu'ils sont appliqués à de très longues séquences, ce qui nous amène aux limites de cette architecture et aux solutions proposées.
</p>
        
        <h2>3. Les Limites des Transformers pour le Traitement des Longues Séquences</h2>
        <h3>Complexité Quadratique et Contraintes Matérielles</h3>
        <p>L’un des principaux défis des Transformers classiques est leur complexité quadratique en fonction de la longueur de la séquence (O(n²)). Cela signifie que plus la séquence est longue, plus le coût computationnel devient élevé. Cette contrainte limite l'utilisation des Transformers sur des textes volumineux, nécessitant des ressources considérables en mémoire et en puissance de calcul.</p>

<h3>Taille Maximale des Entrées</h3>

<p>Les modèles comme BERT ou GPT-2 sont souvent restreints à une taille d’entrée d’environ 512 tokens. Cette limitation empêche l’analyse complète de documents longs tels que des rapports médicaux, des contrats juridiques ou des recherches académiques. Des solutions comme la troncature ou le passage par des fenêtres glissantes entraînent souvent une perte d’information contextuelle.</p>

<h3>Limitations en Mémoire et Temps de Calcul</h3>

<p>L'entraînement et l'inférence des Transformers classiques nécessitent des infrastructures coûteuses. Par exemple :

<ul>

<li>Coût en GPU : La nécessité de multiples cartes graphiques pour entraîner un modèle avec un contexte plus large.</li>

<li>Temps de calcul : Même sur des architectures avancées, le temps requis pour traiter de longues séquences reste un frein à leur adoption généralisée.</li>

</ul>
</p>

<h3>Difficulté à Capturer le Contexte Global</h3>

<p>Bien que les Transformers surpassent les RNN en capturant des relations longues distances, ils ne sont pas toujours optimisés pour maintenir une compréhension cohérente sur de très grands textes. Lorsque la séquence dépasse la fenêtre d’attention maximale, l’information devient fragmentée, réduisant l’efficacité du modèle.

Ces limitations ont conduit au développement de nouvelles architectures permettant de mieux gérer les longues séquences, que nous explorerons dans la prochaine section.
</p>
        
        <h2>4. Les Modèles et Approches pour le Traitement des Longues Séquences</h2>
        <h3>BigBird : Une Attention Clairsemée</h3>
        <p>BigBird, développé par Google en 2020, réduit la complexité quadratique en appliquant une attention clairsemée, permettant de traiter des séquences longues avec une complexité linéaire O(n). Il utilise trois types de connexions :

Fenêtre locale : chaque token interagit avec ses voisins immédiats.

Tokens globaux : certains tokens clés sont connectés à l’ensemble de la séquence.

Échantillonnage aléatoire : des connexions aléatoires permettent d’assurer une bonne couverture contextuelle.
</p>

<h3>Longformer : Une Fenêtre d’Attention</h3>
        <p>Longformer d’AllenAI adopte une approche similaire mais utilise une attention à fenêtre glissante, où chaque token n’interagit qu’avec un sous-ensemble limité des autres tokens, réduisant ainsi le coût de calcul.
</p>

<h3>Reformer et Autres Approches</h3>
        <p>Reformer utilise le Locality-Sensitive Hashing (LSH) pour regrouper les tokens similaires, optimisant ainsi la mémoire utilisée.

Ces modèles ouvrent la voie à des applications plus avancées, que nous détaillerons dans la section suivante.
</p>

        
        <h2>5. Applications et Impacts des Long-Context Models</h2>
        <h3>Secteurs Impactés</h3>
	<p>
	Les modèles adaptés aux longues séquences ont des implications majeures dans plusieurs domaines 
	</p>
        <ul>
            <li><strong>Santé</strong> : Analyse automatisée des dossiers médicaux et rapports de pathologie.</li>
            <li><strong>Droit</strong> : Traitement de longues jurisprudences et contrats légaux.</li>
	    <li><strong>Recherche scientifique</strong> : Synthèse automatique de grands corpus académiques.</li>
            <li><strong>Finance</strong> : Traitement automatisé de rapports financiers.</li>
        </ul>
</div>
    );
  };

export default Synthese;
