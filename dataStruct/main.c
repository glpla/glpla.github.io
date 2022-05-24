#include <stdio.h>
typedef struct
{
    int vertex[20];
    int edge[20][20];
    int vertexNum;
    int edgeNum;
} Graph;

typedef struct vNode
{
    int data;
    int *first;
} VNode;

typedef struct eNode
{
    int adjVertex;
    int w;
    struct eNode *next;
} ENode;
typedef struct
{
    VNode vertex[20];
    int vertexNum;
    int edgeNums;
} Graph;

int main(void)
{
    char *str = "1234";
    for (int i = 0; i < 4; i++)
    {
        printf("%c\n", *str++);
    }

    return 0;
}