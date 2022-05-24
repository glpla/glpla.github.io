#include <stdio.h>
#include <stdlib.h>
typedef struct vNode
{
    int data;
    int w;
    ENode *first;
} VNode;

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
    g->arr = (ENode *)malloc(g->eSize * sizeof(ENode));
    if (g->arr)
    {
        for (i = 0; i < g->vSize; i++)
        {
            g->arr[i]->nextAdjV = NULL;
        }
    }
}
// free ENode
// free Graph
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
// find edge in vertex n
// where you find the vertex, you find the edge
int edgeFind(Graph *g, int ind, int vertex)
{
    // the validation of n and vertex
    // by yourself

    ENode *p = g->arr[ind];
    while (p && p->adjV != vertex)
    {
        p = p->nextAdjV;
    }
    if (!p)
    {
        return -1;
    }
    else
    {
        return 0;
    };
}
int edgeInsert(Graph *g, int ind, int vertex, int w)
{
    // the validation of n and vertex
    // by yourself

    if (!edgeFind(g, ind, vertex))
    {
        return -1;
    }

    ENode *p = (ENode *)malloc(sizeof(ENode));
    p->adjV = ind;
    p->w = w;
    p->nextAdjV = g->arr[ind];
    g->arr[ind] = p;
    g->eSize++;
    return 0;
}

int edgeDel(Graph *g, int ind, int vertex)
{
    // the validation of n and vertex
    // by yourself
    ENode *p, *q;
    p = g->arr[ind];
    q = NULL;
    while (p && p->nextAdjV != vertex)
    {
        q = p;
        p = p->nextAdjV;
    }
    if (!p)
    {
        return -1;
    }
    else
    {
        q->nextAdjV = p->nextAdjV;
        free(p);
        g->eSize--;
        return 0;
    }
}

int main(void)
{
    int arr[5];
    printf("arr=%d\n", sizeof(arr));

    return 0;
}