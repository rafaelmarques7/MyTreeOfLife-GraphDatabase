# Graph Database project, using Neo4j

> Website is live: http://mytol.s3-website-eu-west-1.amazonaws.com/

Simple app that allows users to create "Nodes" and "Relationships", using Neo4j,
and displays these using React.

<img src="./public/ui.png" alt="alt text" width="600"/>

## Description

- `Neo4j` for graph database
- `React` with `ChakraUI`
- `TypeScript`
- `react-graph-vis` for graph visualization

## Connection to neo4j

- Connection to Neo4j requires the `.env` variables to be set (see
  [env.ts](./src/env.ts) file)
- This app can run without a connection to Neo4j. In this case, it uses some
  dummy data.

## ToDo's

Error handling and user warnings

- Create action container with 4 buttons: create/delete nodes, create/delete
  relationships
  - the new node opens the dialog we already have
  - the delete node makes the user select nodes by clicking on them on the
    screen
  - the delete node makes the user delete relationships by clicking on them on
    the screen
  - the create relationship allows the users to select:
    - a relationship label, by entering their own or choosing from a list
    - a starting node, by clicking on it first
    - a list of other nodes, by clicking on them
    - (finish by clicking on the create button on the screen)
- Create filtering, by node and relationship types
- Display different colors for different node and relationship types

## Bugs

## Feature requests

- Graph and edge colors
- Toggle visibility of nodes and edges based on type
- CICD

## useful links:

- vis network documentation: https://visjs.github.io/vis-network/docs/network/
