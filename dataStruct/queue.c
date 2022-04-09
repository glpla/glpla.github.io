#include <stdio.h>
#include <stdlib.h>
#define maxSize 20
#define TRUE 1
#define FALSE 0
typedef struct
{
    int data[20];
    int rear;
    int front;
} Queue;

void init(Queue **q)
{
    *q = (Queue *)malloc(sizeof(Queue));
    (*q)->front = 0;
    (*q)->rear = 0;
}

int isEmpty(Queue *q)
{
    return q->rear == q->front;
}

int enQueue(Queue *q, int data)
{
    if ((q->rear + 1) % maxSize == q->front)
    {
        return FALSE;
    }
    q->rear = (q->rear + 1) % maxSize;
    q->data[q->rear] = data;
    return TRUE;
}

int deQueue(Queue *q)
{
    if (q->rear == q->front)
    {
        return FALSE;
    }
    q->front = (q->front + 1) % maxSize;

    return q->data[q->front];
}

void destroy(Queue **q)
{
    free(*q);
}

int main(void)
{
    Queue *q;
    init(&q);
    //… …
    free(&q);
    return 0;
}