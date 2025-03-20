import React, { useState } from "react";

const Home = () => {
    return (
        <div className="p-6">
        <h1 className="text-2xl font-bold">Les applications concrètes de la blockchain au-delà des cryptomonnaies : panorama des innovations sectorielles.</h1>
        <br />
        <br />
        <h2 className="text-xl font-semibold">👨🏽‍💻 Auteur : Omar Mousteau</h2>
        <br />
        <section className="mt-4">
            <h2 className="text-xl font-semibold">🔍 Présentation du projet</h2>
            <p className="mt-2 text-gray-700">
                La blockchain est une technologie dont l’essor a été largement médiatisé avec la montée en popularité des crypto-monnaies aux alentours de 2020. Cependant, son potentiel dépasse largement le cadre des actifs numériques. Ce projet de veille technologique vise à explorer les usages innovants de cette technologie dans divers secteurs économiques et sociétaux. De l'immobilier à la finance, en passant par la santé, la supply chain ou encore l'IoT, nous analyserons comment la blockchain transforme les pratiques existantes et ouvre de nouvelles perspectives.</p>
        </section>
        <br />
        <section className="mt-4">
            <h2 className="text-xl font-semibold">📌 Objectifs</h2>
            <ul className="mt-2 list-disc list-inside text-gray-700">
                <li>Identifier des cas d’usage concrets et innovants de la blockchain dans différents secteurs.</li>
                <li>Comprendre l’impact de cette technologie sur les modèles économiques existants.</li>
                <li>Explorer les tendances et les perspectives d’évolution.</li>
            </ul>
        </section>
        <br />
        <section className="mt-4">
            <h2 className="text-xl font-semibold">💡 Pourquoi cette étude ?</h2>
            <p className="mt-2 text-gray-700">
                À travers cette veille, l'idée est de mettre en lumière les avancées récentes et les transformations majeures apportées par la blockchain, afin d’aider à mieux appréhender son rôle dans la société de demain.
            </p>
            <p className="mt-2 text-gray-700">Cette veille est réalisée dans le cadre du cours <em>Nouvelles technologies de l'information et de la communication</em> à l'École Centrale de Lyon.</p>
        </section>
      </div>
    );
};

export default Home;
