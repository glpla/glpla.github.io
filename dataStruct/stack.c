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
void destroy(Stack *s);
void show(Stack *s);
void dec2bin(Stack *s, int num);

int main(void)
{
    int num = 11231323;
    char *str = "";
    sprintf(str, "%d", num);
    printf("%s\n", str);
    // int test[] = {1, 2, 3, 4};
    // int res;
    // Stack *s = (Stack *)malloc(sizeof(Stack));
    // init(s);
    // for (int i = 0; i < 4; i++)
    // {
    //     push(s, test[i]);
    // }
    // top(s, &res);
    // printf("top res=%d\n", res);
    // pop(s, &res);
    // printf("pop res=%d\n", res);
    // top(s, &res);
    // printf("top res=%d\n", res);
    // clear(s);
    // dec2bin(s, 15);
    // free(s);
    return 0;
}
void init(Stack *s)
{
    printf("inside=%p\n", s);
    s->top = -1;
    printf("init done\n");
}

int isEmpty(Stack *s)
{
    if (s->top == -1)
    {
        printf("stack empty\n");
        return TRUE;
    }
    printf("stack NOT empty\n");
    return FALSE;
}

int push(Stack *s, int data)
{
    if (s->top == maxSize - 1)
    {
        printf("stack FULL\n");
        return FALSE;
    }
    s->top++;
    s->data[s->top] = data;
    printf("stack push done\n");
    return TRUE;
}

int pop(Stack *s, int *el)
{
    if (s->top == -1)
    {
        printf("stack EMPTy\n");
        return FALSE;
    }
    *el = s->data[s->top];
    s->top--;
    printf("stack pop done\n");
    return TRUE;
}

int top(Stack *s, int *el)
{
    if (s->top == -1)
    {
        printf("stack EMPTy\n");
        return FALSE;
    }
    *el = s->data[s->top];
    printf("stack top done\n");
    return TRUE;
}

void clear(Stack *s)
{
    printf("stack clear done\n");
    s->top = -1;
}

void destroy(Stack *s)
{
    printf("stack released\n");
    free(s);
}
void show(Stack *s)
{
    int res;
    while (s->top > -1)
    {
        pop(s, &res);
        printf("%d\n", res);
    }
}

void dec2bin(Stack *s, int num)
{
    int rem;
    char *str;
    while (num > 0)
    {
        rem = num % 2;
        num = (int)num / 2;
        push(s, rem);
    }
    show(s);
    // while (s->top > -1)
    // {
    //     pop(s, &rem);
    //     printf("%d\n", rem);
    // }
}