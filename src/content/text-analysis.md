---
id: 4.1
---
## Wordclouds

With the question of how artist collaborates answered, we now want to extend our analysis by analysing the texts further.
To do this word clouds based on the lyrics are constructed for every genre.
To see the difference between the genres and to take the imbalance of the amount artist within each genre, and thereby the number of song lyrics, into account the [TF-IDF](https://en.wikipedia.org/wiki/Tf%E2%80%93idf) (term frequency-inverse document frequency) is used.

The TF-IDF consist of two parts. The TF is the times a word appears in a document (in our case all the lyrics of a genre) divided by the sum of the frequency of all words in the document.
The IDF on the other hand is focused on how much information a word has.
So if a word like _love_ is commonly used in all genres then it will have a low IDF, while if a word such as _hillbilly_ is only used in few of the genres it will have a higher score.
The TF-IDF score is then the product of the two terms and is used to choose which 100 words are showed in the word clouds below.
