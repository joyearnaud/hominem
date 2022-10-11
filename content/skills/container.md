---
id: "container"
name: "Container"
category: "cloud"
level: 40
datestart: 2020-01-05
dateend: 2022-01-05
---

Un `conteneur (container en anglais)` est utilisé pour bénéficier d'un espace d'exécution dédié à une application logicielle. Il peut se présenter sous la forme d'un type de données abstrait, d'une structure d'informations ou encore d'une classe.

L'usage d'un conteneur permet de tester des applications en développement avec les même contrainte que sur l'environnement de production (`réplicabilité`), sur de multiple support avec le même rendu (`portabilité`). L'intérêt est de disposer d'un environnement isolé pour réaliser tous les contrôles nécessaires avant le déploiement. Il est donc plus facile de distinguer les dysfonctionnements, les failles de sécurité et d'éventuels problèmes de stabilité. 

`A l'inverse d'une machine virtuelle (ou VM`) qui dispose de son propre système d'exploitation, le conteneur utilise l'OS de l'ordinateur où il est installé. Bien que ce dernier aspect soit pratique, `la puissance sollicitée est inférieure`, en particulier sur les ressources de la mémoire.

Parmi les outils de gestion de conteneurs les plus réputés, on peut citer `Docker`. Disponible en open source, `Kubernetes` permet de déployer et de réaliser des opérations de maintenance dans des environnements conteneurisés (Docker ou autre) parfaitement sécurisés. 

Des architecture et solutions complètes utilisant la conteneurisation permettent d'obtenir l'`agilité`, la `sécurité` et la `mise à l'échelle` de ses services