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
    printf("Stack destroy done\n");
}
int isEmpty(Stack *s)
{
    // 不要使用（NULL == ptr ）或者 （nullptr== ptr ）
    // 请使用（!ptr）或（ptr）
    if (!s->top->next)
    {
        // printf("Stack empty\n");
        return 1;
    }
    // printf("Stack not empty\n");
    return 0;
}
void push(Stack *s, int data)
{
    Node *node = (Node *)malloc(sizeof(Node));
    node->data = data;
    node->next = s->top->next;
    s->top->next = node;
    // printf("Stack push done: %d\n", data);
}
int pop(Stack *s)
{
    if (!s->top->next)
    {
        // printf("Stack empty, pop fail\n");
        return -1;
    }
    Node *node = s->top->next;
    s->top->next = node->next;
    int res = node->data;
    // printf("Stack pop done: %d\n", node->data);
    free(node);
    return res;
}
int top(Stack *s)
{
    if (!s->top->next)
    {
        printf("Stack empty, top fail\n");
        return -1;
    }
    printf("Stack top done: %d\n", s->top->next->data);
    return s->top->next->data;
}
void traversal(Stack *s)
{
    Node *p = s->top->next;
    int res;
    while (!isEmpty(s))
    {
        res = pop(s);
        printf("traversal res=%d\n", res);
    }
}
// 10 -> 2
void dec2bin(Stack *s, int num)
{
    int rem;
    while (num > 0)
    {
        rem = num % 2;
        push(s, rem);
        num = (int)num / 2;
    }
    traversal(s);
}
void symStr(Stack *s, char *str)
{
    while (*str != '\0')
    {
        push(s, *str);
        str++;
    }
    traversal(s);
}

int main(void)
{
    Stack *s;
    init(s);
    symStr(s, "hellolleh");
    dec2bin(s, 12);
    push(s, 1);
    push(s, 11);
    push(s, 2);
    push(s, 3);
    push(s, 10);
    traversal(s);
    // pop(s);
    // pop(s);
    // pop(s);
    // pop(s);
    // pop(s);
    // isEmpty(s);
    // pop(s);
    // top(s);
    // pop(s);
    // top(s);
    // pop(s);
    // top(s);
    // pop(s);
    // top(s);
    // pop(s);
    // top(s);
    // printf("1\n");
    dec2bin(s, 11);
    return 0;
}