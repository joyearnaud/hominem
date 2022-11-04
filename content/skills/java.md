---
id: "java"
name: "Java"
category: "langage"
level: 70
datestart: 2020-01-05
dateend: 2022-01-05
---

## Définition Wikipedia [[source]](https://fr.wikipedia.org/wiki/Java_(langage))

**Java** est un langage de programmation orienté objet créé par James Gosling et Patrick Naughton, employés de Sun Microsystems, avec le soutien de Bill Joy en 1982, présenté officiellement le 23 mai 1995 au _SunWorld_

La société Sun a été ensuite rachetée en 2009 par la société Oracle qui détient et maintient désormais Java.

Une particularité de Java est que les logiciels écrits dans ce langage sont compilés vers une représentation binaire intermédiaire qui peut être exécutée dans une machine virtuelle Java (JVM) en faisant abstraction du système d'exploitation.

---

##  2. <a name='Spring'></a>Spring

En Java, **Spring comme Java EE permettent depuis longtemps de réaliser des web services**. Néanmoins, dans le cas de Java EE, cela nécessite le recours à un serveur d'application certifié, tel que WildFly, alors **qu'en Spring, un simple serveur web (léger) tel que Tomcat suffit.**

**Déployer une API de services sur un serveur d'applications Java EE est complexe** : configuration, packaging, sélection des modules… cela nécessite du temps et de l'expertise. A l'heure actuelle, Java EE avance lentement vers la voie du cloud (trop lentement, serait-on tenté de dire).

De son côté **Spring propose Spring Boot, une approche module particulièrement rapide et efficace pour créer une API de web services**. En quelques lignes de code, avec un (tout) petit projet Maven/Gradle, on obtient un .jar directement exécutable. Tout est compris, les briques du serveur web dont vous avez besoin, et rien d'autre. Vous pouvez très simplement utiliser les frameworks dont vous avez besoin (Hibernate, par exemple, ou n'importe quelle brique du Spring classique), Spring vous package le tout en un rien de temps.

---

##  3. <a name='Kotlin'></a>Kotlin

**Kotlin est simplement une dépendance et un plugin pour Maven/Gradle**. C'est un langage agréable, compact et facile à utiliser qui supprime toute la lourdeur syntaxique (par opposition au "syntactic sugar") que Java fournit.

À partir de la version 5.0.0, **Kotlin bénéficie d'un support de première classe de la part de Spring**, ce qui offre les mêmes garanties que Java en termes de robustesse du code.

Kotlin est interopérable par conception, il s'intégrer en douceur à n'importe quelle bibliothèque Java déjà existante, ce qui offre un véritable liberté de choix.

Ainsi, **Kotlin fonctionne bien avec Spring**, qui fournit une grande partie des fonctionnalités standard pour les applications Web, en particulier Spring Boot.

**Kotlin a une syntaxe beaucoup plus compacte et son système de type permet un code beaucoup plus robuste grâce à la sécurité nulle (null safety), aux classes scellées (sealed classes) et aux notions d'immutabilités.**

--- 

##  4. <a name='Immutabilit'></a>Immutabilité

Il est aussi possible d'utilisé la bibliothèque Java **Immutables** ou la fonctionnalité Java des **Record** pour atteindre cette notions d'immutabilité, **permettant de facilement implémenté des valeurs (value object) associés au Domain Driven Design (DDD)**.

Ainsi, **une requête HTTP doit être considérée comme une valeur car celle-ci doit être immutable** : si nous en modifions le moindre caractère ce n'est plus la même requête et le comportement engendré sur le serveur pourrait être radicalement différent. Plus important, l'identité d'une requête HTTP nous importe peu, seul son contenu est utile. Pour preuve, le contenu d'une requête provoque la génération d'une réponse qui est souvent mise dans un système de cache. Une autre requête avec le même contenu se verra retourner la même réponse.

---

##  5. <a name='Versionetvolution'></a>Version et évolution

###  5.1. <a name='Timeline:Java1.8aujourdhui'></a>Timeline: Java 1.8 à aujourd'hui

Les cycles de publication jusqu'a la version 1.8 durait environs 3 à 5 ans. `Les nouvelles versions de Java sortent désormais tous les 6 mois`.

Les projets "legacy" d'entreprises sont souvent bloqués à Java 1.8, plus rarement avec des versions antérieurs. Pourquoi? La réponse est un mélange de problèmes pratiques (mise à niveau de vos outils, bibliothèques, frameworks) et de problèmes politiques:
  - les outils de build (Maven, Gradle etc.) et certaines librairies avaient initialement des bugs avec les versions supérieurs à Java 8 et nécessitaient des mises à jour;
  - Oracle a modifié le système de licences en 2019, ce qui à provoqué la confusion des utilisateurs. Jusqu'à Java 1.8, seul les versions JDK d'Oracle étaient disponibles et il n'y avait pas à ce soucier des licences (sauf cas à la marge);
  - les entreprises ont pour politique de n'utiliser que les versions LTS et de compter sur leurs fournisseurs de systèmes pour leur fournir ces versions, ce qui prend du temps.

Si vous démarrez un nouveau projet, vous pouvez, sans hésitation, utiliser `Java 17 (LTS)` ou plus récente.

Pour des fonctionnalités actualisées sur une version antérieur, l'utilisation de `Kotlin permet de cibler un JDK 1.8` (d'anciennes versions permettent de l'utiliser à partir d'un JDK 1.6).


<div class="timeline">
  <div class="flex-parent">
    <div class="input-flex-container">
      <div class="input">
        <span data-year="09/04" data-info="5.0"></span>
      </div>
      <div class="input">
        <span data-year="09/06" data-info="1.6"></span>
      </div>
      <div class="input">
        <span data-year="07/11" data-info="1.7"></span>
      </div>
      <div class="input active">
        <span data-year="03/14" data-info="1.8 (LTS 2030)"></span>
      </div>
      <div class="input">
        <span data-year="09/17" data-info="9"></span>
      </div>
      <div class="input">
        <span data-year="03/18" data-info="10"></span>
      </div>
      <div class="input">
        <span data-year="09/18" data-info="11 (LTS 2026)"></span>
      </div>
      <div class="input">
        <span data-year="03/19" data-info="12"></span>
      </div>
      <div class="input">
        <span data-year="09/19" data-info="13"></span>
      </div>
      <div class="input">
        <span data-year="03/20" data-info="14"></span>
      </div>
      <div class="input">
        <span data-year="09/20" data-info="15"></span>
      </div>
      <div class="input">
        <span data-year="03/21" data-info="16"></span>
      </div>
      <div class="input">
        <span data-year="09/21" data-info="17 (LTS 2029)"></span>
      </div>
      <div class="input">
        <span data-year="03/22" data-info="18"></span>
      </div>
      <div class="input">
        <span data-year="09/22" data-info="19"></span>
      </div>
      <div class="input">
        <span data-year="03/23" data-info="...20?"></span>
      </div>
    </div>
  </div>
</div>

###  5.2. <a name='Changelog'></a>Changelog

####  5.2.1. <a name='AjoutdelaversionJava1.8digitaloceanhttps:www.digitalocean.comcommunitytutorialsjava-8-features-with-examples'></a>Ajout de la version Java 1.8 [[digitalocean]](https://www.digitalocean.com/community/tutorials/java-8-features-with-examples)

Essentiellement, toutes les fonctionnalités du langage Java 1.8 et antérieur fonctionnent également dans les versions supérieur (tel que Java 19). Ces fonctionnalités forment une base et comprennent:

  - JAVA 1.7 `Generic` et `Diamond Operator`
  - methodes d'interfaces `default` et `static` 
  - `functional Interfaces` et `lambda expressions`, permettent de traiter les fonctions comme un argument de méthode ou le code comme des données (et qui permettent de s'affranchir de l'écriture de `anonymous inner class` pour l'implémentation)
    ```java
    //Anciennement
    for (int i = 0; i < list.size(); i++) {
      System.out.println(list.get(i));
    }
    Thread monThread = new Thread(new Runnable() {
      @Override
      public void run(){
        System.out.println("Mon traitement ");
      }
    });

    //A partir de Java 1.8
    list.forEach(System.out::println);
    Thread monThread = new Thread(() -> { System.out.println("Mon traitement"); });
    ```
  - Stream API, prendre en charge les opérations séquentiels ou parallèles de style fonctionnel sur des flux d'éléments
    ```java
    List<String> list = Arrays.asList("one", "two");
    list.stream()
      .filter(name -> name.startsWith("o"))
      .map(String::toUpperCase)
      .sorted()
      .forEach(System.out::println);
    ```
  - Iterable Interface
    - `forEach` se focus sur la partie
  - `Optional` Le but de la classe est de fournir une solution au niveau du type pour représenter des valeurs facultatives au lieu de références nulles
  - Java Time API
    - `LocalDate`
    - `LocalDateTime`
    - `Instant`
  - Collections API
    - Collection `spliterator()`
    - Map
      - ajout de Map `replaceAll()`, `compute()`, `merge()`;
      - amélioration des performances pour la classe HashMap avec Key Collisions
  - Concurrency API improvements
    - `ConcurrentHashMap`
    - `CompletableFuture`

####  5.2.2. <a name='AjoutdelaversionJava9'></a>Ajout de la version Java 9

  - Collections helper de création
    - `of`
    ```java
    List<String> list = List.of("one", "two", "three");
    Set<String> set = Set.of("one", "two", "three");
    Map<String, String> map = Map.of("foo", "one", "bar", "two");
    ```
  - nouvelles méthodes Streams
    - `takeWhile`
    - `dropWhile`
    - `iterate`
  - optional
    - `ifPresentOrElse`
  - interfaces
    - méthodes privées
  - `diamond operator` pour `anonymous inner class`
  - `JShell`, shell JAVA avec résultat immédiat
  - projet `Jigsaw`: Modules JAVA et Multi-Release Jar Files

####  5.2.3. <a name='AjoutdelaversionJava10'></a>Ajout de la version Java 10

  - mot-clef `var`, variable locale s'appliquant seulement au scope d'une méthode, toujours fortement typée
  
####  5.2.4. <a name='AjoutdelaversionJava11'></a>Ajout de la version Java 11

  - Différentes méthodes Strings et Files
  ```java
  "Marco".isBlank();
  "Mar\nco".lines();
  "Marco  ".strip();

  Path path = Files.writeString(Files.createTempFile("helloworld", ".txt"), "Hi, my name is!");
  String s = Files.readString(path);
  ```
  - `execution de fichier source`: exécution des fichiers source Java sans avoir à les compiler au préalable. Un pas vers la scripting.
  - inférence de type variable local (var) pour les paramètre de fonction lambda
  ```java
  (var firstName, var lastName) -> firstName + lastName
  ```
  - `HTTPClient`, implémentation intégré au JDK en version final
  - `Flight Recorder`
  - `No-Op Garbage Collector`
  
####  5.2.5. <a name='AjoutdelaversionJava12'></a>Ajout de la version Java 12

####  5.2.6. <a name='AjoutdelaversionJava13'></a>Ajout de la version Java 13

####  5.2.7. <a name='AjoutdelaversionJava14'></a>Ajout de la version Java 14

  - nouvelle expression `switch` en version final
    - retour possible
    - synthaxe lambda possible
  - `NullPointerExceptions` plus précis sur les causes
  - Garbage Collectors
    - Concurrent Mark Sweep (CMS) Garbage Collector supprimé

####  5.2.8. <a name='AjoutdelaversionJava15'></a>Ajout de la version Java 15

  - `Text-Blocks` / `Multiline Strings` en version final
  ```java
  String htmlBeforeJava13 = "<html>\n" +
              "    <body>\n" +
              "        <p>Hello, world</p>\n" +
              "    </body>\n" +
              "</html>\n";

  String htmlWithJava15 = """
                <html>
                    <body>
                        <p>Hello, world</p>
                    </body>
                </html>
                """;
  ```
  - Garbage Collectors
    - ZGC, Z Garbage Collector en version final

####  5.2.9. <a name='AjoutdelaversionJava16'></a>Ajout de la version Java 16

  - `Pattern Matching for instanceof`
  ```java
  //before
  if (obj instanceof String) {
    String s = (String) obj;
    s.substring(1)
  }

  //after
  if (obj instanceof String s) {
    s.substring(1)
  }
  ```
  - `Unix-Domain Socket Channels`
  - `records` en version finale, sont un nouveau type de classe dans le langage Java (record class), qui proposent une syntaxe compacte pour la déclaration de classes aux fonctionnalités restreintes qui agrègent des valeurs de manière immuable
  ```java
  //before
  final class Point {
    public final int x;
    public final int y;

    public Point(int x, int y) {
        this.x = x;
        this.y = y;
    }

    // implementations of equals, hashCode, toString and getter needed
  }

  //after
  record Point(int x, int y) { }
  ```

####  5.2.10. <a name='AjoutdelaversionJava17'></a>Ajout de la version Java 17

  - `Sealed Classes` en version final, sont des classes et interfaces qui limitent les classes qui peuvent les étendre/implémenter
  
####  5.2.11. <a name='AjoutdelaversionJava18'></a>Ajout de la version Java 18

  - UTF-8 par défaut
  - `jwebserver`, web server basic

####  5.2.12. <a name='AjoutdelaversionJava19'></a>Ajout de la version Java 19

####  5.2.13. <a name='Ajouttoujoursenpreview'></a>Ajout toujours en `preview`

- Pattern Matching pour switch
- Virtual Threads
- Foreign Function
- Memory API
- Structured Concurrency
- Vector API

<style scoped>
.timeline {
  height: 100%;
  font-family: "Quicksand", sans-serif;
  font-weight: 500;
  color: var(--text-color);
  /* background-color: #ECF0F1; */
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  position: relative;
  /* border-radius: 10px; */
  margin: 40px
}

.timeline h1 {
  text-align: center;
  height: 38px;
  margin: 60px 0;
}
.timeline h1 span {
  white-space: nowrap;
}

.timeline .flex-parent {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.timeline .input-flex-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 80vw;
  height: 100px;
  max-width: 1000px;
  position: relative;
  z-index: 0;
}

.timeline .input {
  width: 25px;
  height: 25px;
  background-color: #AEB6BF;
  position: relative;
  border-radius: 50%;
}

.timeline .input:hover {
  cursor: pointer;
}

.timeline .input::before, .input::after {
  content: "";
  display: block;
  position: absolute;
  z-index: -1;
  top: 50%;
  transform: translateY(-50%);
  background-color: #AEB6BF;
  width: 4vw;
  height: 5px;
  max-width: 50px;
}

.timeline .input::before {
  left: calc(-4vw + 12.5px);
}

.timeline .input::after {
  right: calc(-4vw + 12.5px);
}

.timeline .input.active {
  background-color: var(--border-color);
}

.timeline .input.active::before {
  background-color: #AEB6BF;
}

.timeline .input.active::after {
  /* background-color: #AEB6BF; */
  background-color: var(--border-color);
}

.timeline .input.active span {
  font-weight: 700;
}

.timeline .input.active span::before {
  font-size: 13px;
}

.timeline .input.active span::after {
  font-size: 15px;
}

.timeline .input.active ~ .input, .input.active ~ .input::before, .input.active ~ .input::after {
  background-color: var(--border-color);
}

.timeline .input span {
  width: 1px;
  height: 1px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  visibility: hidden;
}

.timeline .input span::before, .input span::after {
  visibility: visible;
  position: absolute;
  left: 50%;
}

.timeline .input span::after {
  content: attr(data-year);
  top: 25px;
  transform: translateX(-50%);
  font-size: 14px;
}

.timeline .input span::before {
  content: attr(data-info);
  top: -65px;
  width: 70px;
  transform: translateX(-5px) rotateZ(-45deg);
  font-size: 12px;
  text-indent: -10px;
}

.timeline .description-flex-container {
  width: 80vw;
  font-weight: 400;
  font-size: 22px;
  margin-top: 100px;
  max-width: 1000px;
}

.timeline .description-flex-container p {
  margin-top: 0;
  display: none;
}

.timeline .description-flex-container p.active {
  display: block;
}

@media (min-width: 1250px) {
  .input::before {
    left: -37.5px;
  }

  .input::after {
    right: -37.5px;
  }
}

@media (max-width: 850px) {
  .input {
    width: 17px;
    height: 17px;
  }
  .input::before, .input::after {
    height: 3px;
  }
  .input::before {
    left: calc(-4vw + 8.5px);
  }
  .input::after {
    right: calc(-4vw + 8.5px);
  }
}

@media (max-width: 600px) {
  .flex-parent {
    justify-content: initial;
  }

  .input-flex-container {
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    height: auto;
    /* margin-top: 15vh; */
  }

  .input {
    width: 60px;
    height: 60px;
    margin: 0 10px 50px;
    background-color: #AEB6BF;
  }
  .input::before, .input::after {
    content: none;
  }
  .input span {
    width: 100%;
    height: 100%;
    display: block;
  }
  .input span::before {
    top: calc(100% + 5px);
    transform: translateX(-50%);
    text-indent: 0;
    text-align: center;
  }
  .input span::after {
    top: 50%;
    transform: translate(-50%, -50%);
    color: #ECF0F1;
  }
  .description-flex-container {
    margin-top: 30px;
    text-align: center;
  }
}

@media (max-width: 400px) {
  .timeline {
    min-height: 950px;
  }
}
</style>