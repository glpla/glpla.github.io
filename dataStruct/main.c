#include <stdio.h>
#include <stdlib.h>

typedef struct pNode
{
    int coef;
    int exp;
    struct pNode *next;
} pNode;

typedef struct
{
    struct pNode *head;
} PolyExp;

void createPlyExp(PolyExp *pe)
{
    pe->head = (pNode *)malloc(sizeof(pNode));
    pe->head->exp = -1;
    pe->head->next = NULL;
    pNode *pn, *pre, *p;
    while (1)
    {
        pn = (pNode *)malloc(sizeof(pNode));
        printf("conf:\n");
        scanf("%d", &pn->coef);
        printf("exp:\n");
        scanf("%d", &pn->exp);
        if (pn->exp < 0)
        {
            break;
        }
        pre = pe->head;
        p = pre->next;
        // 已有数据大于新数据，后移
        while (p && p->exp > pn->exp)
        {
            pre = p;
            p = p->next;
        }
        pn->next = p;
        pre->next = pn;
    }
}

void displayPolyExp(PolyExp *pe)
{
    pNode *pn;
    pn = pe->head->next;
    printf("pe=\t");
    while (pn)
    {
        printf("%+dx^%d\t", pn->coef, pn->exp);
        pn = pn->next;
    }
    printf("\n");
}

void addPolyExp(PolyExp *pe0, PolyExp *pe1)
{
    pNode *pre0 = pe0->head;
    pNode *p0 = pe0->head->next;
    pNode *pre1 = pe1->head;
    pNode *p1 = pe1->head->next;
    pNode *tmp;
    while (p0 && p1)
    {
        while (p1)
        {
            if (p1->exp > p0->exp)
            {
                pre1->next = p1->next;
                // 移动p1的节点到p0里
                p1->next = p0;
                pre0->next = p1;
                p1 = pre1->next;
                // 因为p0加入了一个节点，所以要更新p0的指针域：p0不用动，pre0前移一个节点
                pre0 = pre0->next;
            }
            else if (p1->exp == p0->exp)
            {
                p0->coef = p0->coef + p1->coef;
                pre1->next = p1->next;
                tmp = p1;
                free(tmp);
                p1 = pre1->next;
            }
            break;
        }
        pre0 = p0;
        p0 = p0->next;
    }
}

int main()
{
    PolyExp *pe0, *pe1;
    pe0 = (PolyExp *)malloc(sizeof(PolyExp));
    pe1 = (PolyExp *)malloc(sizeof(PolyExp));
    createPlyExp(pe0);
    createPlyExp(pe1);
    displayPolyExp(pe0);
    displayPolyExp(pe1);
    addPolyExp(pe0, pe1);
    displayPolyExp(pe0);
    return 0;
}