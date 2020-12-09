---
id: 2.1
---

The network of artists is constructed such that every node in the network resembles an artist while edges in the network resembles collaborations.
If two artists have collaborated on a song they are thereby connected by an edge.
To prepare the network initial filtering of the network was needed based on three criterias:

1. **Remove artist which has no collaborations**
   - If an artist do not have any collaborations with other artists there is no meaningful way to use it in the analysis, the artists are therefore removed.
   
1. **Remove artist with too few song lyrics**
   - As a part of data retrieval the top 5 song lyrics (accordingly to the Spotify ratings in USA) were acquired from [Genius](https://genius.com/).
     However, for some nodes all 5 song lyrics were not succesfully acquired due the song being less famous or pure instrumental.
     Therefore only artist which had 3 or more song lyrics downloaded were kept in the network.
     
1. **Remove artist which song lyrics are not in english**
   - Some artists mainly had song lyrics which were in a different language than english, these artists were also removed.

## Artists Genre Detection

From Spotify information about the genre of an artist is also available.
Most artists will have several different genres, a genre list, which for data analysis makes it diffcult to work with.
To deal with this problem a network of genres was therefore constructed.

<img src="../images/nw_genres.png" width="75%" />

In this network each node represents a genre and the edges represent if an artist has both of these genres in its genre list.
This means that if for example the artist Childish Gambino has the genres Rap and Hip-hop an edge is created between these two genres.
As certain connections will occurr more often than others, a weight is included in the edges. This weight, will increase with the frequency of the connection.
The same is done for the nodes, if a genre appears more often the weight of the node will increase.

Once the network is created, it is possible to divide it into partitions.
By evaluating the wordclouds of the genre names for each partition, we can detect an overall genre or family genre
for the partition that embraces the motive of the wordcloud and thereby detect which genre/partition an artist belongs to.
