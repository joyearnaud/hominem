---
id: "map-diff_fr"
title: "Les différentes Map en Java"
description: "Leurs fonctionnements, différences et cas d'usages"
date: 2022-11-07
lang: fr
published: true
relateTo:
  - map-diff_en
---

<article>

# Présentation

## Pourquoi et quand utiliser une Maps?

Les maps sont parfaites pour le `mappage d'association clé-valeur` tel que les `dictionnaires`. Les maps sont utilisées pour effectuer des recherches par clés ou lorsque l'on veut récupérer et mettre à jour des éléments par leur clés.

## Charactéristique d'une Map

1. Une map n'a `pas de duplication de clé` et `chaque clé peut correspondre au plus une valeur`. Certaines implémentations autorisent une clé nulle et des valeurs nulles comme HashMap, LinkedHashMap, ConcurrentHashMap, mais d'autres non, comme TreeMap.
2. L'ordre d'une map dépend des implémentations spécifiques. Par exemple, `TreeMap et LinkedHashMap ont des ordres prévisibles`, alors que `HashMap et ConcurrentHashMap n'en a pas`.
3. Il existe `trois interfaces` pour implémenter Map en Java. Il s'agit de **Map**, **SortedMap** et **ConcurrentMap**, et de `quatre classes` : **HashMap**, **TreeMap**, **LinkedHashMap** et **ConcurrentHashMap**.

```mermaid
classDiagram
    Map~K,V~ <|-- SortedMap~K,V~
    Map~K,V~ <.. AbstractMap~K,V~
    AbstractMap~K,V~ <|-- HashMap~K,V~
    Map~K,V~ <.. HashMap~K,V~
    HashMap~K,V~ <|-- LinkedHashMap~K,V~
    Map~K,V~ <.. LinkedHashMap~K,V~
    SortedMap~K,V~ <|-- NavigableMap~K,V~
    NavigableMap~K,V~ <.. TreeMap~K,V~
    AbstractMap~K,V~ <|-- TreeMap~K,V~
    Map~K,V~ <|-- ConcurrentMap~K,V~
    ConcurrentMap~K,V~ <.. ConcurrentHashMap~K,V~
    AbstractMap~K,V~ <|-- ConcurrentHashMap~K,V~

    class Map{
        <<interface>>
    }
    class AbstractMap{
        <<abstract>>
    }
    class NavigableMap{
        <<interface>>
    }
    class SortedMap{
        <<interface>>
    }
    class TreeMap{
    }
    class HashMap{
    }
    class LinkedHashMap{
    }
    class ConcurrentMap {
        <<interface>>
    }
    class ConcurrentHashMap {
    }
```

### Methodes disponbile à partir de l'interface Map

| Method | Action Performed  |
| --- | --- |
| **clear**() | Cette méthode est utilisée pour effacer et supprimer tous les éléments ou mappages d'une collection Map spécifiée. |
| **containsKey**(Object) | Cette méthode est utilisée pour vérifier si une clé particulière est mappée dans la map ou non. Il prend l'élément clé comme paramètre et renvoie True si cet élément est mappé dans la map. |
| **containsValue**(Object) | Cette méthode est utilisée pour vérifier si une valeur particulière est mappée par une ou plusieurs clés dans la map. Il prend la valeur comme paramètre et renvoie True si cette valeur est mappée par l'une des clés de la map. |
| **entrySet**() | Cette méthode est utilisée pour créer un ensemble à partir des mêmes éléments contenus dans la map. Il renvoie essentiellement une vue d'ensemble de la map ou nous pouvons créer un nouvel ensemble et y stocker les éléments de la map. |
| **equals**(Object) | Cette méthode est utilisée pour vérifier l'égalité entre deux maps. Il vérifie si les éléments d'une map passée en paramètre sont égaux ou non aux éléments de cette map. |
| **get**(Object) | Cette méthode est utilisée pour récupérer ou récupérer la valeur mappée par une clé particulière mentionnée dans le paramètre. Elle renvoie NULL lorsque la map ne contient aucun mappage de ce type pour la clé. |
| **hashCode**() | Cette méthode est utilisée pour générer un hashCode pour la map donnée contenant des clés et des valeurs. |
| **isEmpty**() | Cette méthode est utilisée pour vérifier si une map contient une entrée pour les paires de clé et de valeur. Si aucun mappage n'existe, cela renvoie true. |
| **keySet**() | Cette méthode est utilisée pour retourner une vue Set des clés contenues dans cette map. L'ensemble est soutenu par la map, de sorte que les modifications apportées à la map sont reflétées dans l'ensemble, et vice-versa. |
| **put**(Object, Object) | Cette méthode est utilisée pour associer la valeur spécifiée à la clé spécifiée dans cette map. |
| **putAll**(Map) | Cette méthode est utilisée pour copier tous les mappages de la map spécifiée vers cette map. |
| **remove**(Object)  | This method is used to remove the mapping for a key from this map if it is present in the map. |
| **size**() | Cette méthode est utilisée pour supprimer le mappage d'une clé de cette map si elle est présente dans la map. |
| **values**() | Cette méthode est utilisée pour créer une collection à partir des valeurs de la map. Il renvoie essentiellement une vue Collection des valeurs dans le HashMap. |
| **getOrDefault**(Object key, V defaultValue) | Renvoie la valeur à laquelle la clé spécifiée est mappée, ou defaultValue si cette map ne contient aucun mappage pour la clé. |
| **merge**(K key, V value, BiFunction<? super V,? super V,? extends V> remappingFunction) | Si la clé spécifiée n'est pas déjà associée à une valeur ou est associée à null, l'associe à la valeur non nulle donnée. |
| **putIfAbsent**(K key, V value) | Si la clé spécifiée n'est pas déjà associée à une valeur (ou est mappée sur null), l'associe à la valeur donnée et renvoie null, sinon renvoie la valeur actuelle associée. |

# Différences

`Map` est le type d'interface de la map, tandis que `HashMap`, `LinkedHashMap`, `TreeMap` et `ConcurrentHashMap` sont le type d'implémentation de la map.
Cela signifie que le compilateur traitera l'objet map comme étant de type Map, même si au moment de l'exécution, il peut pointer vers n'importe quel sous-type de celui-ci.

## HashMap

HashMap fait partie de la collection de Java depuis Java 1.2. Il fournit l'implémentation de base de l'interface Map de Java. Il stocke les données dans des paires (clé, valeur). Pour accéder à une valeur, il faut connaître sa clé. Cette classe utilise une technique appelée `hachage`. Le hachage est une technique de conversion d'une grande chaîne de charactère en une petite chaîne de charactère qui représente la même valeur. Une valeur plus courte permet une `indexation et des recherches plus rapides`. HashMap a fourni l'avantage d'une `insertion, d'une recherche et d'une suppression rapides`.

## LinkedHashMap

LinkedHashMap est comme HashMap, avec une fonctionnalité supplémentaire de `maintien de l'ordre d'insertion des éléments`.

## TreeMap

La map est triée selon le constructeur utilisé soit `triée selon l'ordre naturel de ses clés`, soit `triée par un comparateur fourni au moment de la création de la map`. Cela s'avère être un moyen efficace de trier et de stocker les paires clé-valeur.

## ConcurrentHashMap

La classe ConcurrentHashMap est similaire à HashMap, sauf qu'elle est `thread-safe` et `synchronisée` (HashMap peut être thread-safe avec une synchronisation externe comme Collections.synchornizedMap) et `permet la modification pendant l'itération` (un HashMap lance une ConcurrentModificationException lorsqu'un autre thread essayez d'ajouter/modifier le contenu de l'objet).
D'une manière générale, il est `plus performant et plus évolutif dans un contexte avec thread` et dans des utilisations spécifiques comme lorsqu'un nombre de threads de lecture dépassent le nombre de threads d'écriture (scénario de cache, ...)

---

références externes:

- [geeksforgeeks](https://www.geeksforgeeks.org/map-interface-java-examples/)

<style scoped>
table {
  margin-bottom: 2em;
  padding: 2em;
}
table tr {
  border: 1px solid var(--border-color);
  padding: 5px
}
table td {
  border: 1px solid var(--border-color);
  padding: 10px
}
table th {
  padding: 10px;
  text-align: center;
  color: var(--border-color);
}
.mermaid {
  border: 3px solid var(--border-color);
  border-radius: 15px;
  background-color: white;
  margin: auto;
  margin-bottom: 2em;
}
</style>

</article>
