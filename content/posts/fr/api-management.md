---
id: "APIM_fr"
title: "API Management (gestion d'API)"
description: "Débloquer la puissance des APIs: Un guide de gestion et d'outils d'API"
date: 2023-03-15
lang: fr
published: true
relateTo:
  - APIM_en
---

<article>

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Physical_culture_%281908%29_%2814759598416%29.jpg/640px-Physical_culture_%281908%29_%2814759598416%29.jpg"
     alt="Acculturation"
     class="img-cover">

<div class="contenttable">

- [Qu'est ce que l'API Management?](#quest-ce-que-lapi-management)
- [Comment la mettre en place?](#comment-la-mettre-en-place)
  - [Les outils](#les-outils)
    - [Aculturation](#aculturation)
      - [Le manifeste d'API](#le-manifeste-dapi)
      - [Atelier API](#atelier-api)
      - [Feuille de route d'API](#feuille-de-route-dapi)
    - [Approche technique](#approche-technique)
      - [Passerelle d'API](#passerelle-dapi)
      - [Publication d'API](#publication-dapi)
      - [Portail d'API](#portail-dapi)
      - [Communication de données d'API](#communication-de-données-dapi)
      - [Monétisation d'API](#monétisation-dapi)
- [Outro](#outro)

</div>

## Qu'est ce que l'API Management?

API Management ou Gestion des API est un ensemble du processus de `conception`, de `publication`, de `documentation` et d'`analyse des API` au sein d'un environnement sécurisé.

Ce processus permet d'exploiter au mieux les API sans mettre en péril le système d'information et sans affecter l'expérience utilisateur. Il s'agit d'une solution de gestion qui permet aux entreprises de `garantir que les API publiques/internes ou privées qu'elles conçoivent soient utilisables et sécurisées`.

L'API Management couvre un large spectre d'utilisations car il intervient à plusieurs niveaux :

- Technique (sécurité, haute disponibilité, validation de données, …)
- Architecture (gateway proxy)
- Gouvernance de données
- Organisationnel

## Comment la mettre en place?

Il s'accompagne de `nouveaux concepts avec lesquels les équipes métiers et techniques doivent se familiariser`. Cela passe par une phase d'apprentissage où l'organisation doit également intégrer de nouvelles fonctions et de nouveaux mode de gouvernance. Ces dernières sont relatives à une `nécessaire approche API produit` qui s'étend du marketing des API à leur diffusion et à leur commercialisation.

### Les outils

Les outils de gestions peuvent comprendre, entre autres exemples:

#### Aculturation

L'acculturation peut se référer au processus d'introduction de nouvelles technologies, de processus ou de modes de pensée à une équipe ou à une organisation, et de les aider à s'adapter et à intégrer ces changements dans leur travail quotidien. Elle aide à garantir que les équipes et les organisations peuvent s'adapter aux nouveaux outils et approches et les exploiter efficacement pour atteindre leurs objectifs.

##### Le manifeste d'API

`Ecriture d'une vision API unifiée entre les équipes avec contraintes et nécessités métier`

Un manifeste est une déclaration publique des intentions, des objectifs et des valeurs d'une organisation en ce qui concerne son programme API. Il énonce les principes qui guident l'approche de l'organisation en matière de conception, de développement, de déploiement et de gestion d'API.

Le manifeste sert de point de référence pour l'organisation et ses parties prenantes afin de s'assurer que leurs actions sont alignées sur leurs valeurs et leurs objectifs déclarés. Il aide également à communiquer les priorités et l'approche de l'organisation en matière de gestion d'API aux parties externes, telles que les développeurs qui peuvent créer des applications qui consomment les API de l'organisation.

Un manifeste peut couvrir une variété de sujets liés à la gestion d'API, tels que la sécurité, la scalabilité, l'expérience des développeurs et l'ouverture. Par exemple, un manifeste de gestion d'API peut prioriser la facilité d'utilisation pour les développeurs, préconiser l'utilisation de protocoles de sécurité standard de l'industrie et encourager la collaboration avec des développeurs et des partenaires externes.

*En créant un manifeste de gestion d'API, une organisation peut établir une vision claire pour son programme API et fournir des orientations et des directives à toutes les personnes impliquées dans son développement et sa gestion.*

##### Atelier API

`Séance de travail collaborative pour une amélioration continue`

Un atelier (ou workshop en anglais) est une séance de travail collaborative au cours de laquelle un groupe de parties prenantes, telles que des développeurs, des architectes, des responsables produits et des analystes métier, se réunit pour explorer, concevoir et développer des API. Les ateliers peuvent avoir lieu à différents stades du cycle de vie des API, de l'idéation au déploiement et à la maintenance.

Pendant un atelier, les participants travaillent ensemble pour définir la portée et les exigences du projet API, identifier les cas d'utilisation potentiels et créer une feuille de route pour le développement de l'API. L'atelier peut également inclure des activités telles que la conception d'API, la documentation, les tests et la planification du déploiement.

Les ateliers peuvent être dirigés par des experts en API ou animés par une tierce partie neutre. Le format de l'atelier encourage la collaboration et la communication entre les parties prenantes, conduisant à une meilleure compréhension des besoins de l'organisation et de ses clients. Les ateliers peuvent également aider à identifier les obstacles potentiels et les défis tôt dans le processus de développement, ce qui peut économiser du temps et des ressources à long terme.

*Les ateliers sont un outil précieux en gestion d'API qui peut aider les organisations à créer des API bien conçues, bien documentées et bien soutenues qui répondent aux besoins des parties prenantes internes et externes.*

##### Feuille de route d'API

`Avec l'apparition de nouvelles normes et standarts et l'évolution métier oblige à percevoir et fournir ses jalons`

Une feuille de route (ou roadmap en anglais) est un plan stratégique qui décrit les objectifs, les jalons et les échéanciers d'un projet ou d'un programme d'API. La feuille de route offre une vue d'ensemble des fonctionnalités, des améliorations et des nouvelles versions prévues pour l'API.

La feuille de route inclut généralement des informations sur la planification des versions de l'API, les fonctionnalités clés et les améliorations, les groupes d'utilisateurs cibles, ainsi que toute autre information importante pour le succès du projet. Elle peut également inclure des échéanciers pour les tests, la mise en place et d'autres activités nécessaires.

Les feuilles de route d'API sont généralement élaborées par les propriétaires de produits ou d'autres parties prenantes en collaboration avec les développeurs et les équipes API. La feuille de route permet de s'assurer que toutes les personnes impliquées dans le projet sont alignées et travaillent vers les mêmes objectifs et les mêmes résultats.

Les feuilles de route peuvent être un outil important pour la gestion des API, car elles fournissent un plan clair pour le développement de l'API et aident à garantir que les ressources sont allouées de manière appropriée. Elles aident également à gérer les attentes des parties prenantes et à communiquer sur les progrès accomplis en vue des objectifs de l'API.

*Une feuille de route est un élément essentiel de la gestion d'API, car elle fournit une vision claire pour le développement et l'évolution des API, permettant aux organisations de planifier, de suivre et d'optimiser leurs programmes d'API pour un succès maximum.*

#### Approche technique

Comme discuté, les outils d'acculturation sont conçus pour aider à éduquer et à intégrer les utilisateurs impliqués dans l'API, du développement à la production, dans le but d'augmenter l'adoption et l'utilisation des API et de leur mentalité.

Les outils techniques, quant à eux, sont conçus pour soutenir le développement, la gestion et la surveillance des API. Ces outils fournissent généralement des fonctionnalités telles que des tests d'API, le contrôle de version, la gestion de la sécurité et la surveillance des performances. Ils sont conçus pour prendre en charge les aspects techniques de la gestion des API, tels que s'assurer que les API sont sécurisées, performantes et répondent aux exigences techniques.

Les outils techniques se concentrent sur la fourniture d'une plateforme API robuste et fiable, dans le but de garantir que les API sont disponibles, évolutives et performantes. Ils visent à prendre en charge les besoins techniques des développeurs d'API, des équipes informatiques et d'autres parties prenantes responsables de la plateforme API.

##### Passerelle d'API

`A vocation de diriger le trafic des API et de relier les réseaux entre eux (client avec services ...). Il est possible de regrouper une collection de serveurs de gestion et de serveurs de passerelle pour créer des clusters afin d'équilibrer la charge et d'isoler le trafic`

Une passerelle API (ou gateway, reverse proxy) joue un rôle crucial dans la gestion des API en agissant en tant qu'intermédiaire entre le client et les services backend qui fournissent l'API. La passerelle fournit un point d'entrée unique pour toutes les demandes d'API et est responsable de la gestion et du routage de ces demandes vers le service backend approprié.

L'une des principales fonctions d'une passerelle est de gérer les demandes et les réponses entre le client et les services API backend. Elle reçoit les demandes entrantes des clients et les transfère au service API approprié. Elle gère également les réponses du service API et les envoie de retour au client.

En plus de la gestion des demandes et des réponses, une passerelle fournit plusieurs autres fonctions importantes pour la gestion des API. Celles-ci comprennent :

1. Sécurité : Une passerelle peut appliquer des politiques de sécurité, telles que l'authentification et l'autorisation, pour s'assurer que seuls les clients autorisés peuvent accéder aux services API.

2. Gestion du trafic : Une passerelle peut contrôler le taux auquel les demandes sont envoyées aux services API pour éviter la surcharge ou les attaques de déni de service.

3. Traduction de protocole : Une passerelle peut traduire les demandes et les réponses entre différents protocoles pour permettre aux clients d'utiliser différents protocoles de communication que les services API backend.

4. Mise en cache : Une passerelle peut mettre en cache les réponses fréquemment consultées pour réduire la charge sur les services backend et améliorer les performances de l'API.

5. Analyse et surveillance : Une passerelle peut collecter et analyser des données sur l'utilisation, la performance et les erreurs de l'API, fournissant des informations sur l'état de santé de la plateforme API.

*Une passerelle API est un composant essentiel de la gestion des API, fournissant des fonctionnalités essentielles pour la gestion des demandes, la gestion du trafic, l'application de la sécurité et la surveillance de l'utilisation des API.*

##### Publication d'API

`C'est l'outil que les fournisseurs utilisent pour définir les API, leurs politiques d'accès et d'utilisation, l'exécution de débogage ainsi que la gestion du cycle de leur cycle de vie de l'API`

Les outils de publication sont souvent intégrés à l'application de passerelle.

Un outil de publication est une application logicielle qui aide les fournisseurs à créer, concevoir et publier leurs API. Cet outil est généralement utilisé par des développeurs, des architectes et d'autres professionnels de l'informatique pour définir les points de terminaison et les méthodes d'une API, créer une documentation, générer du code d'exemple et gérer l'accès aux API, tel que l'authentification et l'autorisation.

Le principal objectif d'un outil de publication est de faciliter la création et la publication par les développeurs en fournissant un ensemble d'outils et d'interfaces conviviaux. Il inclut généralement une interface utilisateur graphique (GUI) ou une interface en ligne de commande (CLI) qui permet aux utilisateurs de définir et de gérer les ressources, les paramètres et les méthodes de l'API. Cette interface peut également fournir des assistants ou des modèles pour aider les utilisateurs à configurer l'API et à créer de la documentation.

Certains outils de publication prennent également en charge une gamme de langages de programmation, permettant aux développeurs d'écrire du code dans leur langage de choix. Ils peuvent également prendre en charge des normes d'API telles que OpenAPI, Swagger et RAML, qui aident à normaliser la façon dont les API sont définies et documentées.

Une fois qu'une API est publiée, un outil de publication peut également fournir des fonctionnalités pour gérer et surveiller son utilisation. Cela peut inclure des outils d'analyse d'utilisation, de journalisation et de surveillance pour suivre les performances, d'identifier les problèmes et optimiser les performances de l'API.

*L'outil de publication est un composant essentiel de la gestion d'API, car il aide les organisations à créer et publier des API de haute qualité qui sont faciles à utiliser et à intégrer dans les applications.*

##### Portail d'API

`C'est un site communautaire pour les abonnés à l'API qui sont tenus par les fournisseurs. Il comprend la documentation, la console interactive de l'API pour tester les API, la possibilité de s'abonner aux API et de gérer les abonnements et le service de soutien du fournisseur ou de la communauté de l'API`

Comme pour la passerelle/publication, il n'est pas courant de séparer l'outil de publication de l'outil de portail, car ils sont souvent intégrés dans une seule plateforme. Cependant, il est possible de les séparer conceptuellement pour comprendre leurs rôles individuels dans le processus de gestion des API.

Un outil de portail se concentre sur la fourniture d'une interface conviviale basée sur le web où les développeurs peuvent découvrir, en apprendre davantage sur et gérer les API. Cela peut inclure de la documentation, du code d'exemple, des outils de test et de débogage, l'accès à des analyses et des rapports, et des fonctionnalités pour gérer l'accès aux API qui ont été publiées par le fournisseur avec l'outil de publication.

L'une des principales fonctions d'un portail est de fournir aux développeurs une documentation claire et concise décrivant la fonctionnalité, les entrées, les sorties et les codes de réponse de l'API. Cette documentation doit être facile à comprendre et à naviguer et peut inclure des exemples de code dans différents langages de programmation qui montrent comment interagir avec l'API.

Une autre fonctionnalité clé d'un portail est sa communauté de développeurs. De nombreux portails comprennent des forums, des tableaux de discussion et d'autres outils de collaboration qui permettent aux développeurs de partager des connaissances et de poser des questions sur les API qu'ils utilisent. Cette communauté peut être une ressource précieuse pour les développeurs qui découvrent les API, ainsi que pour les développeurs expérimentés qui souhaitent partager les meilleures pratiques et apprendre de leurs pairs.

*Le portail est un composant essentiel de la gestion des API, car il fournit une interface conviviale aux développeurs pour découvrir, en apprendre davantage sur et gérer les API. Ils sont essentiels pour promouvoir l'adoption des API, stimuler l'innovation et améliorer l'expérience des développeurs.*

##### Communication de données d'API

`Outil de communication de données et d'analyse permettant d'avoir une visibilité claire sur l'utilisation de l'API. C'est en outre un outil de marketing qui permet de mesurer le comportement des abonnés et ainsi permettre à l'éditeur de l'API d'optimiser son offre`;

Après la conception et la publication d'une API à partir de l'outil de publication, les utilisateurs peuvent s'y abonner sur le portail. Le provider doit surveiller son utilisation et ses performances pour s'assurer qu'elle répond aux besoins de ses utilisateurs. C'est là que les communications de données (ou reporting) interviennent.

Les reporting jouent un rôle important dans la gestion des API en fournissant une visibilité sur utilisation et les performances. Ils permettent aux fournisseurs de suivre des métriques clés telles que le trafic, les modèles d'utilisation, les temps de réponse, les erreurs et les taux de réussite. En analysant ces données, les fournisseurs peuvent obtenir des informations sur la manière dont leurs API sont consommées, identifier les problèmes potentiels et prendre des décisions éclairées pour améliorer les performances, la scalabilité et la sécurité de l'API.

Les reporting permettent également aux fournisseurs de surveiller l'utilisation de leurs API et de garantir la conformité aux exigences réglementaires et aux accords de niveau de service. Ils leur permettent de générer des rapports et des tableaux de bord personnalisés pour visualiser l'utilisation et les métriques de performance, et de les partager avec les parties prenantes pour démontrer la valeur commerciale des API.

Les reporting sont un composant essentiel de la gestion des API, fournissant des informations et des analyses précieuses pour optimiser les performances de l'API et stimuler les résultats commerciaux.

##### Monétisation d'API

`Permet de générer des revenus, à l'usage, par forfait ou en créant de nouveau flux avec des partenaires à valeur ajouté basé sur l'API. Permet aussi de justifier les investissement en démontrant la valeur commercial`

Après la conception, la publication et la surveillance de l'utilisation et de la performance via la création de rapports, les fournisseurs peuvent vouloir monétiser en facturant des frais pour l'accès ou l'utilisation. Les règles de publication et la surveillance sont essentielles pour une monétisation réussie, car elles permettent aux fournisseurs de prendre des décisions basées sur des données à propos du prix, de l'utilisation et de la performance, maximisant ainsi la valeur de leurs APIs.

La monétisation fait référence au processus de génération de revenus à partir d'APIs en facturant leur utilisation ou en créant de nouvelles sources de revenus grâce à l'utilisation des APIs. Dans la gestion d'API, la monétisation joue un rôle critique pour assurer le succès et la durabilité d'un programme d'API.

Les fournisseurs peuvent monétiser leurs APIs de plusieurs façons, telles que la facturation de frais d'abonnement, de frais basés sur l'utilisation, de frais de transaction, ou en offrant des modèles de tarification à paliers. La monétisation d'API peut également impliquer la création de nouvelles sources de revenus en permettant à des partenaires et des développeurs de créer des applications et des services à valeur ajoutée sur les APIs.

La monétisation nécessite une planification et une exécution minutieuses, notamment la définition de modèles de tarification, la fixation des niveaux de prix et l'établissement de processus de facturation et de paiement. Des stratégies de monétisation efficaces peuvent aider les fournisseurs à générer de nouvelles sources de revenus, à augmenter la fidélité des clients, et à stimuler l'innovation et la croissance.

La monétisation joue également un rôle critique dans la justification de l'investissement dans le développement et la gestion d'API, en démontrant la valeur et le ROI aux parties prenantes et aux cadres.

*La monétisation est un aspect important de la gestion d'API, aidant les fournisseurs à créer des programmes d'API durables et rentables.*

## Outro

Le processus de gestion d'API commence par la conception et la publication d'une API à l'aide d'outils de publication, suivie d'outils de portail pour l'abonnement et la gestion des utilisateurs. Ensuite, des outils de surveillance et de reporting sont utilisés pour s'assurer que les API répondent aux besoins des utilisateurs et fonctionnent bien.

La monétisationintervient une fois que les API sont établies et utilisées de manière efficace. Elle implique la création de modèles de tarification et de structures de paiement, la mise en place de systèmes de facturation et de facturation, ainsi que la gestion des flux de revenus. Par conséquent, bien que la monétisation soit importante, elle n'est qu'un élément d'un processus de gestion d'API plus vaste et continu qui nécessite une variété d'outils et de stratégies pour assurer le succès.

`Les solutions de gestion d'API sont essentielles pour aider les organisations à réussir avec leurs programmes API. Ces solutions fournissent une plate-forme sécurisée et évolutive pour gérer les API et garantir que les personnes qui en ont besoin peuvent y accéder rapidement et en toute sécurité. Elles fournissent également des analyses et des informations sur la manière dont les API sont utilisées, ce qui permet aux organisations de mesurer leur succès. De plus, les solutions de gestion d'API peuvent permettre aux organisations de monétiser leurs API et de s'assurer que leur utilisation est documentée et suivie pour se conformer aux réglementations. En tirant parti d'une solution de gestion d'API, les organisations peuvent stimuler le succès de leurs programmes API et maximiser la valeur qu'ils apportent à l'entreprise.`

références externes:

- [mulesoft](https://www.mulesoft.com/fr/resources/api/what-is-api-management)
- [wikipedia](https://fr.wikipedia.org/wiki/API_management)
- [cross-systems](https://cross-systems.ch/actualites/api-management/)

</article>
