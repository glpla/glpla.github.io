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

int main(void)
{
    int arr[5];
    printf("arr=%d\n", sizeof(arr));

    return 0;
}