#include <stdio.h>
#include <stdlib.h>
typedef struct eNode
{
    int adjV;
    int w;
    struct eNode *nextAdjV;
} ENode;
typedef struct
{
    int vSize;
    int eSize;
    ENode **arr;
} Graph;
void init(Graph *g, int size)
{
    int i;
    g->vSize = size;
    g->eSize = 0;
    g->arr = (ENode **)malloc(g->vSize * sizeof(ENode *));
    if (g->arr)
    {
        for (i = 0; i < g->vSize; i++)
        {
            g->arr[i] = NULL;
        }
        printf("init done.\n");
    }
}
void destroy(Graph *g)
{
    int i;
    ENode *p, *q;
    for (i = 0; i < g->vSize; i++)
    {
        p = g->arr[i];
        q = p;
        while (q)
        {
            p = p->nextAdjV;
            free(q);
            q = p;
        }
    }
    free(g->arr);
}
int edgeFind(Graph *g, int ind, int vertex)
{
    ENode *p = g->arr[ind];
    while (p && p->adjV != vertex)
        p = p->nextAdjV;
    if (!p)
        return -1;
    else
        return 0;
}
int edgeInsert(Graph *g, int ind, int vertex, int w)
{
    if (!edgeFind(g, ind, vertex))
        return -1;
    ENode *p = (ENode *)malloc(sizeof(ENode));
    p->adjV = vertex;
    p->w = w;
    p->nextAdjV = g->arr[ind];
    g->arr[ind] = p;
    g->eSize++;
    printf("Insert done.\n");
    return 0;
}
int edgeDel(Graph *g, int ind, int vertex)
{
    // the validation of n and vertex
    // by yourself
    ENode *p, *q;
    p = g->arr[ind];
    q = NULL;
    while (p && p->adjV != vertex)
    {
        q = p;
        p = p->nextAdjV;
    }
    if (!p)
        return -1;
    if (q)
    {
        q->nextAdjV = p->nextAdjV;
    }
    else
    {
        g->arr[ind] = p->nextAdjV;
    }
    free(p);
    g->eSize--;
    return 0;
}
void DFS(int vertex, int visted[], Graph *g)
{
    ENode *w;
    printf("%d ", vertex);
    visted[vertex] = 1;
    for (w = g->arr[vertex]; w; w = w->nextAdjV)
    {
        if (!visted[w->adjV])
        {
            DFS(w->adjV, visted, g);
        }
    }
}
void DFSGraph(Graph *g)
{
    int i;
    int *visted = (int *)malloc(g->vSize * sizeof(int));
    for (i = 0; i < g->vSize; i++)
    {
        visted[i] = 0;
        // printf("i=%d\n", i);
    }
    for (i = 0; i < g->vSize; i++)
    {
        if (!visted[i])
        {
            DFS(i, visted, g);
        }
    }
    free(visted);
}
int main(void)
{
    Graph *g;
    int i;
    init(g, 5);
    return 0;
}