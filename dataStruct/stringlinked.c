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
void assign(String *s, char *str)
{
    Node *p, *pre = s->head;
    int i;
    for (i = 0; *(str + i) != '\0'; i++)
    {
        p = (Node *)malloc(sizeof(Node));
        p->data = *(str + i);
        p->next = pre->next;
        pre->next = p;
        // MUST
        pre = p;
    }
    s->len = i;
}
void insertStr(String *s, int i, String *str)
{
    // Node *src = s->head, *des = str->head;
    // int i, j;
}
void display(String *s)
{
    Node *p = s->head->next;
    while (p)
    {
        printf("%c", p->data);
        p = p->next;
    }
    printf("\n");
}

int main(void)
{
    String *s = (String *)malloc(sizeof(String));
    s->head = (Node *)malloc(sizeof(Node));
    s->head->data = '#';
    s->head->next = NULL;
    s->len = 0;
    assign(s, "hi, there.");
    printf("%d\n", s->len);
    display(s);
    free(s);
    return 0;
}