#include <stdio.h>
#include <stdlib.h>

#define TRUE 1
#define FALSE 0
typedef struct Node
{
    int data;
    struct Node *next;
} Node;
typedef struct
{
    Node *front;
    Node *rear;
    int len;
} Queue;
void init(Queue **q)
{
    *q = (Queue *)malloc(sizeof(Queue));
    (*q)->front = NULL;
    (*q)->rear = NULL;
    (*q)->len = 0;
}
void destroy(Queue **q)
{
    free(*q);
}
int isEmpty(Queue *q)
{
    return q->len == 0;
}
void enqueue(Queue *q, int el)
{
    Node *node = (Node *)malloc(sizeof(Node));
    node->data = el;
    node->next = NULL;
    // 判断是否为空
    if (!q->len)
    {
        q->front = node;
        q->rear = node;
    }
    else
    {
        q->rear->next = node;
        q->rear = node;
    }
    q->len++;
}
int dequeue(Queue *q)
{
    if (!q->len)
    {
        return FALSE;
    }
    int res = q->front->data;
    q->front = q->front->next;
    q->len--;
    return res;
}
int main(void)
{
    Queue *q;
    int len = 8, res, i;
    init(&q);
    for (i = 1; i <= len; i++)
    {
        enqueue(q, i);
    }
    while (q->len > 0)
    {
        // MUST
        len = q->len;
        for (i = 0; i < len; i++)
        {
            res = dequeue(q);
            if ((i % 2) != 0)
            {
                enqueue(q, res);
            }
            else
            {
                printf("%d\t", res);
            }
        }
    }
    free(&q);
    return 0;
}