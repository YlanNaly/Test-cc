# ANALYSE DE COMPLEXITE

### Code Original :

- **Complexité Temporelle** :
  - Les méthodes de `riceCooker` effectuent des actions directes sans itérer sur des structures de données, donc elles ont une complexité temporelle relativement constante.
  - La fonction `simulateRiceCooker()` utilise une boucle `while` pour demander en continu des entrées utilisateur et exécute des actions en fonction de ces entrées. Sa complexité temporelle dépend du nombre d'itérations dans la boucle, basé sur l'interaction utilisateur.

- **Complexité Spatiale** :
  - La complexité spatiale est faible car il n'y a pas de grandes structures de données utilisées ou créées pendant l'exécution du code. L'utilisation de mémoire est principalement pour stocker des variables booléennes et quelques chaînes de caractères pour les sorties console.

### Code Refactorisé :
- **Complexité Temporelle** :
  - Les méthodes dans `riceCooker` ont la même complexité temporelle que le code original.
  - Dans la fonction `simulateRiceCooker()` refactorisée, la logique est simplifiée avec une instruction `switch-case` au lieu de multiples conditions `if-else`; elle dépend toujours de l'interaction et du traitement des entrées utilisateur.

- **Complexité Spatiale** :
  - La complexité spatiale reste identique au code original, car les variables et l'utilisation de mémoire sont les mêmes.
