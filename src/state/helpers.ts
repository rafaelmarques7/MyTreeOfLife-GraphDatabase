import { Node, Relationship } from "neo4j-driver";
import { EventGraphClick, GraphData, GraphElement } from "../interfaces";
import { nodeToString, getRelationshionLabel } from "../utils/graphLib";

export const extractNodeFromGraph = (
  event: EventGraphClick,
  nodeList: Node[]
): GraphElement => {
  const nodeId = event.nodes[0];
  const node = nodeList.filter((n) => n.elementId === nodeId)[0];
  const label = nodeToString(node);

  return {
    elementType: "node",
    element: node,
    label: label,
    elementId: node.elementId,
  };
};

export const extractEdgeFromGraph = (
  event: EventGraphClick,
  dataGraph: GraphData,
  relationshipList: Relationship[],
  nodeList: Node[]
): GraphElement => {
  const edgeId = event.edges[0];
  const edge = dataGraph.edges.filter((n) => n?.id === edgeId)[0];

  const relationship = relationshipList.filter(
    (r) =>
      r.startNodeElementId === edge.from &&
      r.endNodeElementId === edge.to &&
      r.type === edge.label
  )[0];

  const label = getRelationshionLabel(relationship, nodeList);

  return {
    elementType: "relationship",
    element: relationship,
    label: label.label,
    elementId: relationship.elementId,
  };
};