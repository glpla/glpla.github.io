#include <stdio.h>
#include <stdlib.h>
#define maxSize 20
#define TRUE 1
#define FALSE 0
typedef struct Node
{
    char data;
    struct Node *next;
} Node;

typedef struct
{
    Node *head;
    int len;
} String;

int main(void)
{

    return 0;
}