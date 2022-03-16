#include <stdio.h>
#include <stdlib.h>

typedef struct Node
{
    int data;
    struct Node *next;
} Node;

typedef struct
{
    Node *head;
    int len;
} List;

void init(List *list)
{
    list->head = (Node *)malloc(sizeof(Node));
    list->head->next = NULL;
    list->head->data = -1;
    list->len = 0;
    printf("list initialized\n");
}

int isEmpty(List *list)
{
    return list->len == 0;
}

int len(List *list)
{
    printf("length=%d\n", list->len);
    return list->len;
}
void insertHead(List *list, int el)
{
    Node *node = (Node *)malloc(sizeof(Node));
    node->data = el;
    node->next = list->head->next;
    list->head->next = node;
    list->len++;
    printf("head inserted ok\n");
}
void insertTail(List *list, int el)
{
    Node *node = (Node *)malloc(sizeof(Node)), *p, *cur;
    node->data = el;
    node->next = NULL;
    cur = list->head;
    p = cur->next;
    while (p)
    {
        cur = cur->next;
        p = p->next;
    }
    printf("tail inserted ok\n");
    cur->next = node;
    list->len++;
}

int insertAt(List *list, int loc, int el)
{
    if (loc < 0 || loc > list->len - 1)
    {
        printf("insert index overfollow\n");
        return -1;
    }
    if (!loc)
    {
        insertHead(list, el);
        return 0;
    }
    if (loc == list->len)
    {
        insertTail(list, el);
        return 0;
    }
    Node *node = (Node *)malloc(sizeof(Node));
    node->data = el;
    node->next = NULL;
    Node *p = list->head->next;
    int ind = 0;
    while (ind < loc - 1)
    {
        p = p->next;
        ind++;
    }
    node->next = p->next;
    p->next = node;
    list->len++;
    return 0;
}
int delAt(List *list, int loc)
{
    if (loc > -1 && loc < list->len)
    {
        Node *p, *cur;
        cur = list->head;
        p = cur->next;
        for (int i = 0; i < loc; i++)
        {
            cur = cur->next;
            p = p->next;
        }
        cur->next = p->next;
        free(p);
        list->len--;
        printf("delete ok\n");
        return 0;
    }
    printf("delete fail\n");
    return -1;
}
// indexOf() and delAt()
int delBy(List *list, int el)
{
    Node *p = list->head->next;
    int loc = 0;
    while (p)
    {
        if (p->data == el)
        {
            delAt(list, loc);
            return loc;
        }
        p = p->next;
        loc++;
    }
    return -1;
}

// assumed head->data=-1
int delMax(List *list)
{
    if (!list->len)
    {
        printf("list is empty\n");
        return -1;
    }
    if (list->len == 1)
    {
        printf("maxItem %d deleted\n", list->head->next->data);
        free(list->head->next);
        list->head->next = NULL;
        list->len = 0;
        return 0;
    }
    Node *pre, *p, *max, *maxPre;
    pre = list->head->next;
    maxPre = pre;
    p = pre->next;
    max = p;
    while (p)
    {
        if (p->data > max->data)
        {
            max = p;
            maxPre = pre;
        }
        pre = pre->next;
        p = p->next;
    }
    maxPre->next = max->next;
    printf("maxItem %d deleted\n", max->data);
    free(max);
    list->len--;
    return 0;
}

int updateAt(List *list, int loc, int data)
{
    if (loc > -1 && loc < list->len)
    {
        Node *p = list->head->next;
        for (int i = 0; i < loc; i++)
        {
            p = p->next;
        }
        p->data = data;
        printf("item at %d updated\n", loc);
        return 0;
    }
    printf("update index overfollow\n");
    return -1;
}

int getAt(List *List, int loc)
{
    printf("len=%d\n", List->len);
    if (loc > -1 && loc < List->len)
    {
        Node *p = List->head->next;
        int ind = 0;
        while (ind < loc)
        {
            p = p->next;
            ind++;
        }
        printf("res=%d\n", p->data);
        return p->data;
    }
    printf("index overfolw\n");
    return -1;
}

int getBy(List *list, int el) {}

int indexOf(List *list, int data)
{
    Node *p = list->head->next;
    int loc = 0;
    while (p)
    {
        if (p->data == data)
        {
            printf("item %d found at %d \n", p->data, loc);
            return loc;
        }
        p = p->next;
        loc++;
    }
    printf("item %d not found\n", data);
    return -1;
}

int destroy(List *list)
{
    if (!list->len)
    {
        printf("list is empty\n");
        return -1;
    }
    Node *p = list->head->next;
    while (p)
    {
        list->head->next = p->next;
        free(p);
        p = list->head->next;
    }
    printf("list destroyed\n");
    list->len = 0;
    return 0;
}
void display(List *list)
{
    printf("start\n");
    Node *p = list->head->next;
    while (p)
    {
        printf("%d\n", p->data);
        p = p->next;
    }
    printf("end\n");
}
int main(void)
{
    List *list;
    init(list);
    insertHead(list, 1);
    insertHead(list, 2);
    insertHead(list, 3);
    insertTail(list, 1);
    insertTail(list, 2);
    insertTail(list, 3);
    insertAt(list, 0, 11);
    insertAt(list, 4, 77);
    display(list);
    len(list);
    delAt(list, 4);
    updateAt(list, 7, 80);
    display(list);
    return 0;
}