import React, { useState } from "react";

const Synthese = () => {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold">Synthèse de la veille</h1>
        <br />
        <br />
        <h2 className="text-xl font-semibold">Définitions</h2>
        <p className="mt-4">La blockchain est un registre distribué et sécurisé permettant d'enregistrer des transactions de manière décentralisée et immuable. Chaque bloc contient un ensemble de transactions validées, reliées entre elles par des liens cryptographiques. Ces blocs sont ajoutés à la chaîne de blocs de manière chronologique, formant ainsi une base de données transparente et infalsifiable.
        Le concept a été popularisé en 2008 avec la création du Bitcoin par une personne ou un groupe sous le pseudonyme de Satoshi Nakamoto. Le Bitcoin est la première application de la blockchain, il illustre bien le fonctionnement de cette technologie : les transactions sont vérifiées par un réseau d'ordinateurs appelés 'mineurs' et elles y sont inscrites dans des blocs successifs.
        La première idée lors de sa création était de pouvoir échanger de la valeur entre des personnes éloignées géographiquement, sans avoir à passer par le système centralisé des banques. On appelle ce système le peer-to-peer, et dans ce dernier, la garantie de confiance est assuréee par une série de protocoles, de programmes informatiques lancés sur les mineurs qui vont vérifier la transaction et la valider.
        Grâce à son fonctionnement basé sur la cryptographie et la validation collective des transactions par un réseau d’ordinateurs, la blockchain garantit la transparence et l’intégrité des données.</p>
        <p className="mt-4">Cependant, on s'est rendu compte que la blockchain pouvait être plus que le simple support des cryptomonnaies. D'abord, les transactions peuvent être de différentes nature : transfert de biens, transfert de données, enregistrements de proprietés, etc. 
          En 2015, avec la création de la blockchain Ethereum par Vitalik Buterin, émerge le concept de smart contract, ou contrats intelligents : Ce sont des programmes autonomes qui exécutent automatiquement des actions lorsque certaines conditions prédéfinies sont remplies. Par exemple, dans le domaine de l’assurance voyage, un contrat intelligent peut être utilisé pour rembourser automatiquement un passager si son vol est retardé de plus d’un certain nombre d’heures. 
          Grâce à ces contrats, il devient possible d’automatiser de nombreuses transactions et d’éliminer la nécessité d’un tiers de confiance, ce qui réduit considérablement les délais et les coûts administratifs.
          D’autres blockchains, dites 2.0, ont vu le jour : Solana, Avalanche, XRP, etc.</p>      
        <p className="mt-4">Les smart contracts ont permis la création d'application décentralisées (DApps) : il s'agit de services numériques qui fonctionnent de manière autonome et résiliente – que ce soit dans la finance décentralisée (DeFi), les jeux, la logistique ou d’autres secteurs – en offrant aux utilisateurs un contrôle total sur leurs données et leurs actifs. Cette nouvelle approche favorise l’émergence de modèles économiques innovants et des interactions directes, de pair à pair, sans la centralisation d’un tiers de confiance.</p>
        <br />
        <h2 className="text-xl font-semibold">Applications concrètes</h2>
        <br />
        <h3 className="text-base font-semibold">Immobilier</h3>
        <p className="mt-4">[Applications dans le domaine de l'immobilier]</p>
        <br />
        <h3 className="text-base font-semibold">Santé</h3>
        <p className="mt-4">[Applications dans le domaine de la santé]</p>
        <br />
        <h3 className="text-base font-semibold">Finance</h3>
        <p className="mt-4">[Applications dans le domaine de la finance]</p>
        <br />
        <h3 className="text-base font-semibold">Supply Chain</h3>
        <p className="mt-4">[Applications dans le domaine de la logistique]</p>
        <br />
        <h3 className="text-base font-semibold">IoT</h3>
        <p className="mt-4">[Applications dans le domaine des réseaux IoT]</p>
      </div>
    );
  };

export default Synthese;