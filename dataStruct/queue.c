#include <stdio.h>
#include <stdlib.h>
#define maxSize 20
#define TRUE 1
#define FALSE 0
typedef struct
{
    int data[maxSize];
    int rear;
    int front;
    int len;
} Queue;
void init(Queue **q)
{
    *q = (Queue *)malloc(sizeof(Queue));
    printf("inside %p\n", *q);
    (*q)->front = -1;
    (*q)->rear = -1;
}
Queue *initR(Queue *q)
{
    q = (Queue *)malloc(sizeof(Queue));
    printf("inside %p\n", q);
    q->front = -1;
    q->rear = -1;
    return q;
}
void destroy(Queue **q)
{
    free(*q);
}
int isEmpty(Queue *q)
{
    return q->len == 0;
}
int enqueue(Queue *q, int data)
{
    if (q->len == maxSize)
    {
        return FALSE;
    }
    q->rear++;
    q->rear = q->rear % maxSize;
    q->data[q->rear] = data;
    q->len++;
    return TRUE;
}
int dequeue(Queue *q, int *data)
{
    if (!q->len)
    {
        return FALSE;
    }
    *data = q->data[q->front];
    q->front++;
    q->front = q->front % maxSize;
    q->len--;
    return TRUE;
}
int main(void)
{
    Queue *q;
    printf("outside %p\n", q);
    init(&q);
    printf("outside %p\n", q);
    free(&q);
    q = NULL;
    return 0;
}