---
id: "java"
name: "Java"
categorie: "langage"
level: 70
datestart: 2020-01-05
dateend: 2022-01-05
---

## Définition Wikipedia [[source]](https://fr.wikipedia.org/wiki/Java_(langage))

**Java** est un langage de programmation orienté objet créé par James Gosling et Patrick Naughton, employés de Sun Microsystems, avec le soutien de Bill Joy en 1982, présenté officiellement le 23 mai 1995 au _SunWorld_

La société Sun a été ensuite rachetée en 2009 par la société Oracle qui détient et maintient désormais Java.

Une particularité de Java est que les logiciels écrits dans ce langage sont compilés vers une représentation binaire intermédiaire qui peut être exécutée dans une machine virtuelle Java (JVM) en faisant abstraction du système d'exploitation.

---

## Spring

En Java, **Spring comme Java EE permettent depuis longtemps de réaliser des web services**. Néanmoins, dans le cas de Java EE, cela nécessite le recours à un serveur d'application certifié, tel que WildFly, alors **qu'en Spring, un simple serveur web (léger) tel que Tomcat suffit.**

**Déployer une API de services sur un serveur d'applications Java EE est complexe** : configuration, packaging, sélection des modules… cela nécessite du temps et de l'expertise. A l'heure actuelle, Java EE avance lentement vers la voie du cloud (trop lentement, serait-on tenté de dire).

De son côté **Spring propose Spring Boot, une approche module particulièrement rapide et efficace pour créer une API de web services**. En quelques lignes de code, avec un (tout) petit projet Maven/Gradle, on obtient un .jar directement exécutable. Tout est compris, les briques du serveur web dont vous avez besoin, et rien d'autre. Vous pouvez très simplement utiliser les frameworks dont vous avez besoin (Hibernate, par exemple, ou n'importe quelle brique du Spring classique), Spring vous package le tout en un rien de temps.

---

## Kotlin

**Kotlin est simplement une dépendance et un plugin pour Maven/Gradle**. C'est un langage agréable, compact et facile à utiliser qui supprime toute la lourdeur syntaxique (par opposition au "syntactic sugar") que Java fournit.

À partir de la version 5.0.0, **Kotlin bénéficie d'un support de première classe de la part de Spring**, ce qui offre les mêmes garanties que Java en termes de robustesse du code.

Kotlin est interopérable par conception, il s'intégrer en douceur à n'importe quelle bibliothèque Java déjà existante, ce qui offre un véritable liberté de choix.

Ainsi, **Kotlin fonctionne bien avec Spring**, qui fournit une grande partie des fonctionnalités standard pour les applications Web, en particulier Spring Boot.

**Kotlin a une syntaxe beaucoup plus compacte et son système de type permet un code beaucoup plus robuste grâce à la sécurité nulle (null safety), aux classes scellées (sealed classes) et aux notions d'immutabilités.**

--- 

## Immutabilité

Il est aussi possible d'utilisé la bibliothèque Java **Immutables** ou la fonctionnalité Java des **Record** pour atteindre cette notions d'immutabilité, **permettant de facilement implémenté des valeurs (value object) associés au Domain Driven Design (DDD)**.

Ainsi, **une requête HTTP doit être considérée comme une valeur car celle-ci doit être immutable** : si nous en modifions le moindre caractère ce n'est plus la même requête et le comportement engendré sur le serveur pourrait être radicalement différent. Plus important, l'identité d'une requête HTTP nous importe peu, seul son contenu est utile. Pour preuve, le contenu d'une requête provoque la génération d'une réponse qui est souvent mise dans un système de cache. Une autre requête avec le même contenu se verra retourner la même réponse.