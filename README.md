WikiViz
=======

###Graph Visualization of Wikipedia Articles and their Embedded Links

Deployed at: http://wikiviz.herokuapp.com/#/

Description: Visualize and explore a graph of the embedded links within a Wikipedia article. The initial Wikipedia article title is the central node and titles of embedded links appear as children nodes distributed around the central node. As a fun game embedded within the visualiation, try to find the page for "Paris" in as few clicks as possible!

Tech stack: Angular/D3, Node.js, deployed to Heroku.

Code base: https://github.com/WikiMapper/WikiViz
  - Front end: see wikiviz-client folder for angular/D3
  - Back end: app folder / app.js for basic server
    - app / scraper / scape.js for scraper that extracts links from a given wikipedia page
    - app / scraper / getRelatedWords.js for NLP processing of each page (deprecated)

