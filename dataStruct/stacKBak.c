#include <stdio.h>
#include <stdlib.h>

#define maxSize 10
#define TRUE 1
#define FALSE 0

typedef struct Stack
{
    int data[maxSize];
    int top;
} Stack;
void init(Stack *s);
int isEmpty(Stack *s);
int push(Stack *s, int data);
int pop(Stack *s, int *el);
int top(Stack *s, int *el);
void clear(Stack *s);

int main(void)
{
    int test[] = {1, 2, 3, 4};
    Stack *s = (Stack *)malloc(sizeof(Stack));
    int res;
    init(s);
    for (int i = 0; i < 4; i++)
    {
        push(s, test[i]);
    }
    top(s, &res);
    printf("top res=%d\n", res);
    pop(s, &res);
    printf("pop res=%d\n", res);
    top(s, &res);
    printf("top res=%d\n", res);
    free(s);
    return 0;
}
void init(Stack *s)
{
    s->top = -1;
}

int isEmpty(Stack *s)
{
    if (s->top == -1)
    {
        return TRUE;
    }
    return FALSE;
}

int push(Stack *s, int data)
{
    if (s->top == maxSize - 1)
    {
        return FALSE;
    }
    s->top++;
    s->data[s->top] = data;
    return TRUE;
}

int pop(Stack *s, int *el)
{
    if (s->top == -1)
    {
        return FALSE;
    }
    *el = s->data[s->top];
    s->top--;
    return TRUE;
}

int top(Stack *s, int *el)
{
    if (s->top == -1)
    {
        return FALSE;
    }
    *el = s->data[s->top];
    return TRUE;
}

void clear(Stack *s)
{
    s->top = -1;
}