#include <stdio.h>
#include <stdlib.h>
#define maxSize 20
#define TRUE 1
#define FALSE 0
typedef struct
{
    int data;
    int parent;
} pTree;

typedef struct Node
{
    int data;
    struct Node *children[maxSize];
} cTree;

typedef struct Node
{
    int data;
    struct Node *leftChild;
    struct Node *nextBrother;
} cbTree;

int main(void)
{
    return 0;
}