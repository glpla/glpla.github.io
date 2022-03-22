#include <stdio.h>
#include <stdlib.h>

typedef struct Node
{
    int data;
    struct Node *next;
} Node;
typedef struct Stack
{
    Node *top;
} Stack;
void init(Stack *s)
{
    s->top = (Node *)malloc(sizeof(Node));
    s->top->next = NULL;
    printf("Stack init done\n");
}
void destroy(Stack *s)
{
    Node *p, *pre;
    pre = s->top;
    p = pre->next;
    while (p)
    {
        pre = p->next;
        free(p);
        p = pre->next;
    }
    free(pre);
    printf("destroy done\n");
}
int isEmpty(Stack *s)
{
    // 不要使用（NULL == ptr ）或者 （nullptr== ptr ）
    // 请使用（!ptr）或（ptr）
    if (!s->top->next)
    {
        printf("Stack empty\n");
        return 0;
    }
    printf("Stack not empty\n");
    return 1;
}
void push(Stack *s, int data)
{
    Node *node = (Node *)malloc(sizeof(Node));
    node->data = data;
    node->next = s->top->next;
    s->top->next = node;
    printf("Stack push done: %d\n", data);
}
int pop(Stack *s)
{
    if (!s->top->next)
    {
        printf("Stack empty\n");
        return -1;
    }
    Node *node = s->top->next;
    s->top->next = node->next;
    printf("Stack pop done: %d\n", node->data);
    free(node);
    return 0;
}
int top(Stack *s)
{
    if (!s->top->next)
    {
        printf("Stack empty\n");
        return -1;
    }
    printf("Stack top done: %d\n", s->top->next->data);
    return s->top->next->data;
}

int main(void)
{
    Stack *s;
    init(s);
    isEmpty(s);
    push(s, 1);
    top(s);
    push(s, 11);
    top(s);
    push(s, 2);
    top(s);
    push(s, 3);
    top(s);
    push(s, 10);
    top(s);
    printf("pop-------------------\n");
    pop(s);
    top(s);
    pop(s);
    top(s);
    pop(s);
    top(s);
    pop(s);
    top(s);
    pop(s);
    top(s);
    return 0;
}