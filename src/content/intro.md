---
id: 0
---

This webpage is made as a part of the final exam project for the course 02805, Social graphs and interactions, at DTU during the fall of 2020.
For general information about the project and where to find the [_Explainer notebook_](https://andreas-kaae.github.io/socialgraphs2020_artists_collaborations_network/main_TheExplainerNotebook) and underlying code please go to the [about page](/about/).

## Motivation

Listening to one of your favorite artists can be amazing on its own.
But realizing that two of your favorite artists started collaborating can be just breathtaking.
This made our group wonder about the network of collaborations between artists and genres.
Because how do artists collaborate?
Is it only popular artists that collaborate?
Are artist from certain genres more likely to collaborate?
Do artists mainly collaborate within their own genre or also outside?
Do artists with happier or sadder song lyrics tend to collaborate more?
And how about the time, has the level of collaboration changed?

To answer these questions information about artists are gathered from Spotify using the [Spotify Web API](https://developer.spotify.com/documentation/web-api/quick-start/).
However, as Spotify has more than 50 million tracks available a subset of artists from different genres is retrieved from the list of musicians from [Wikipedia](https://en.wikipedia.org/wiki/Lists_of_musicians).
To enrichen the dataset the lyrics of the top songs for every artists are further downloaded from the website of the digital media company [Genius](https://genius.com/).
