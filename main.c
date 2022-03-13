#include <stdio.h>
#include <stdlib.h>
#include <string.h>
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
  list->len = 0;
}

int isEmpty(List *list)
{
  return list->len == 0;
}

int len(List *list)
{
  return list->len;
}
void insertHead(List *list, int el)
{
  Node *node = (Node *)malloc(sizeof(Node));
  node->data = el;
  node->next = list->head->next;
  list->head->next = node;
  list->len++;
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
    printf("data=%d\n", p->data);
    cur = cur->next;
    p = p->next;
  }
  cur->next = node;
  list->len++;
}

void display(List *list)
{
  Node *p = list->head->next;
  while (p)
  {
    printf("%d\n", p->data);
    p = p->next;
  }
}
int main(void)
{
  List *list;
  init(list);
  insertHead(list, 1);
  insertHead(list, 2);
  insertHead(list, 3);
  display(list);
  insertTail(list, 1);
  insertTail(list, 2);
  insertTail(list, 3);
  display(list);
  return 0;
}