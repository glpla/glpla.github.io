// DEPTH FIRST SERACH
#include "graph.c"
int visited[MAXV] = {0};
void DFS(AdjGraph *G, int v)
{
    ArcNode *p;
    visited[v] = 1;             //?????????
    printf("%d  ", v);          //???????????????
    p = G->adjlist[v].firstarc; // p????v???????????????
    while (p != NULL)
    {
        if (visited[p->adjvex] == 0) //??p->adjvex????δ????,????????
            DFS(G, p->adjvex);
        p = p->nextarc; // p????v????????????????
    }
}
int main()
{
    AdjGraph *G;
    int A[MAXV][MAXV] = {{0, 1, 0, 1, 1}, {1, 0, 1, 1, 0}, {0, 1, 0, 1, 1}, {1, 1, 1, 0, 1}, {1, 0, 1, 1, 0}};
    int n = 5, e = 8;
    G = CreateAdj(G, A, n, e); // 8.1(a)的邻接表
    printf("%p\n", G);
    printf("图G的邻接表:\n");
    DispAdj(G); //输出邻接表G
    printf("深度优先序列(递归):");
    DFS(G, 2);
    printf("\n");
    DestroyAdj(G); //销毁邻接表
    return 0;
}
