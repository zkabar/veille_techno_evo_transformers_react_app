import React, { useState } from "react";
import { Card, CardContent } from '@/components/Card.jsx';
import { Button } from '@/components/Button';

const articles = [
  {
    titre: "FieldCoin : La révolution du marché immobilier grâce à la blockchain",
    resume: "FieldCoin utilise la blockchain pour sécuriser les transactions immobilières, réduire les intermédiaires et automatiser les processus via des smart contracts.",
    lien: "https://www.lelieuinternational.com/fieldcoin-la-revolution-du-marche-immobilier-grace-a-la-blockchain",
    categorie: "Immobilier"
  },
  {
    titre: "Les avantages de la technologie blockchain dans l'immobilier",
    resume: "La blockchain apporte transparence, traçabilité et efficacité dans l'immobilier, en simplifiant les transactions et en réduisant les coûts administratifs.",
    lien: "https://finance-innovation.org/les-avantages-de-la-technologie-blockchain-dans-limmobilier/",
    categorie: "Immobilier"
  },
  {
    titre: "La blockchain au service du secteur de l'immobilier",
    resume: "La blockchain transforme l'immobilier en sécurisant les contrats, en automatisant les processus et en améliorant la confiance entre les parties prenantes.",
    lien: "https://www.maformationimmo.fr/la-blockchain-au-service-du-secteur-de-limmobilier/",
    categorie: "Immobilier"
  },
  {
    titre: "Immobilier et blockchain : une révolution en marche",
    resume: "La blockchain permet de sécuriser les transactions immobilières, de réduire les fraudes et de simplifier les démarches juridiques et administratives.",
    lien: "https://blog.iadfrance.fr/conseil-immobilier/droit-legislation/immobilier-blockchain/",
    categorie: "Immobilier"
  },
  {
    titre: "Blockchain et immobilier : quels enjeux ?",
    resume: "La blockchain offre une meilleure traçabilité des transactions, une réduction des coûts et une automatisation des processus immobiliers.",
    lien: "https://www.cotoit.fr/blog/blockchain-immobilier/",
    categorie: "Immobilier"
  },
  {
    titre: "Blockchain in real estate: A systematic review",
    resume: "Cette étude explore les applications de la blockchain dans l'immobilier, mettant en avant ses avantages en termes de transparence, de sécurité et d'efficacité.",
    lien: "https://www.sciencedirect.com/science/article/pii/S0264837722003611",
    categorie: "Immobilier"
  },
  {
    titre: "Quand l'immobilier rencontre la blockchain : Reboost de l'Etztoken",
    resume: "Reboost utilise la blockchain pour moderniser le marché immobilier, en facilitant les investissements et en sécurisant les transactions.",
    lien: "https://paperjam.lu/article/quand-limmobilier-rencontre-la-blockchain-reboost-de-letztoken",
    categorie: "Immobilier"
  },
  {
    titre: "Blockchain en santé : un marché en pleine explosion",
    resume: "La blockchain révolutionne la santé en sécurisant les données médicales et en facilitant le partage d'informations entre professionnels.",
    lien: "https://www.lassuranceenmouvement.com/2024/02/12/blockchain-en-sante-un-marche-en-pleine-explosion/",
    categorie: "Santé"
  },
  {
    titre: "La blockchain appliquée aux données de santé",
    resume: "La blockchain améliore la gestion des données de santé en garantissant leur sécurité, leur intégrité et leur accessibilité.",
    lien: "https://datalama.ca/la-blockchain-appliquee-aux-donnees-de-sante/",
    categorie: "Santé"
  },
  {
    titre: "Blockchain et santé : protection des données",
    resume: "La blockchain protège les données de santé contre les cyberattaques et facilite leur partage sécurisé entre les acteurs du secteur.",
    lien: "https://www.healthcie.fr/blockchain-sante-protection-donnees-article/",
    categorie: "Santé"
  },
  {
    titre: "Smart Contracts in EHR Management",
    resume: "Cette étude explore l'utilisation des smart contracts pour automatiser la gestion des dossiers médicaux électroniques (DME) via la blockchain.",
    lien: "https://www.researchgate.net/profile/Hannah-Adebayo/publication/388641456_Smart_Contracts_in_EHR_Management_Automating_Healthcare_Workflows_with_Blockchain/links/67a078424c479b26c9cae9bc/Smart-Contracts-in-EHR-Management-Automating-Healthcare-Workflows-with-Blockchain.pdf",
    categorie: "Santé"
  },
  {
    titre: "Helium (HNT) : Réinventer la connectivité Internet des objets avec la blockchain",
    resume: "Helium utilise la blockchain pour créer un réseau IoT décentralisé, permettant une connectivité économique et sécurisée pour les appareils connectés.",
    lien: "https://cryptoast.fr/helium-hnt-reinventer-connectivite-internet-objets-blockchain/",
    categorie: "IoT"
  },
  {
    titre: "Qu'est-ce que le Helium (HNT) ?",
    resume: "Helium est un projet blockchain visant à améliorer la connectivité IoT grâce à un réseau décentralisé et des microtransactions sécurisées.",
    lien: "https://kriptomat.io/fr/cours-crypto-monnaies/helium-hnt-valeur/quest-ce-que-le/",
    categorie: "IoT"
  }
];

const Home = () => {
  const [filter, setFilter] = useState("Tous");
  const categories = ["Tous", "Immobilier", "Santé", "IoT"];

  const filteredArticles = filter === "Tous" ? articles : articles.filter(a => a.categorie === filter);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Articles sur la Blockchain</h1>
      <div className="mb-4">
        {categories.map((cat) => (
          <Button
            key={cat}
            className={`mr-2 ${
              filter === cat ? "bg-black text-white" : "bg-gray-600 text-white"
            }`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </Button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredArticles.map((article, index) => (
          <Card key={index}>
            <CardContent className="p-4">
              <h2 className="text-lg font-semibold mb-2">{article.titre}</h2>
              <p className="text-sm text-gray-600 mb-4">{article.resume}</p>
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

export default Home;