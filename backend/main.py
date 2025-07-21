# main.py
from fastapi import FastAPI
from pydantic import BaseModel
from typing import List, Dict, Any, Set
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# CORS for local frontend access
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# === Models ===
class PipelineData(BaseModel):
    nodes: List[Dict[str, Any]]
    edges: List[Dict[str, Any]]


# === Utility: Check if the graph is a DAG ===
def is_dag(nodes: List[Dict[str, Any]], edges: List[Dict[str, Any]]) -> bool:
    graph = {node["id"]: [] for node in nodes}
    visited = set()
    rec_stack = set()

    # Build adjacency list
    for edge in edges:
        graph[edge["source"]].append(edge["target"])

    def dfs(node_id: str) -> bool:
        visited.add(node_id)
        rec_stack.add(node_id)

        for neighbor in graph[node_id]:
            if neighbor not in visited:
                if not dfs(neighbor):
                    return False    # Cycle found
            elif neighbor in rec_stack:
                return False    # Cycle found

        rec_stack.remove(node_id)
        return True # It is a DAG

    # Call DFS from all nodes
    for node in nodes:
        node_id = node["id"]
        if node_id not in visited:
            if not dfs(node_id):
                return False  # Not a DAG

    return True


# === Endpoint ===
@app.post('/pipelines/parse')
def parse_pipeline(pipeline: PipelineData):
    return {
        "num_nodes": len(pipeline.nodes),
        "num_edges": len(pipeline.edges),
        "is_dag": is_dag(pipeline.nodes, pipeline.edges)
    }
