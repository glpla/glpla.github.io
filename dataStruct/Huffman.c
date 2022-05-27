#include <stdio.h>
#include <stdlib.h>

typedef struct Node
{
    int w;
    int left;
    int right;
    int parent;
} Node, HTree;

void sel(HTree ht[], int curInd, int *min1, int *min2)
{
    *min1 = *min2 = 0;
    for (int i = 1; i < curInd; i++)
    {
        // ignore those nodes with parents
        if (ht[i].parent != 0)
        {
            continue;
        }
        // init min1 and min2
        if (*min1 == 0)
        {
            *min1 = *min2 = i;
        }
        else
        {
            if (ht[i].w <= ht[*min1].w)
            {
                *min2 = *min1;
                *min1 = i;
            }
            else if (ht[i].w < ht[*min2].w)
            {
                *min2 = i;
            }
            else if (ht[i].w > ht[*min2].w)
            {
                if (*min1 == *min2)
                {
                    *min2 = i;
                }
            }
        }
    }
}
void display(HTree ht[], int n)
{
    for (int i = 1; i <= n; i++)
    {
        printf("i=%d\tw=%d\tparent=%d\tleft=%d\tright=%d\t\n", i, ht[i].w, ht[i].parent, ht[i].left, ht[i].right);
    }
}

void main(void)
{
    // int arr[] = {5, 29, 7, 8, 14, 23, 3, 11};
    // int n = 8;
    int arr[] = {2, 4, 5, 3};
    int n = 4;
    int size = 2 * n - 1;
    int i;
    // start from 1
    HTree ht[size + 1];

    // init
    for (i = 1; i <= size; ++i)
    {
        ht[i].parent = 0;
        ht[i].left = 0;
        ht[i].right = 0;
    }
    for (i = 1; i <= n; i++)
    {
        ht[i].w = arr[i - 1];
    }
    // display
    // display(ht, size);

    // create
    for (i = n + 1; i <= size; ++i)
    {
        int min1, min2;
        sel(ht, i, &min1, &min2);
        ht[i].w = ht[min1].w + ht[min2].w;
        ht[i].left = min1;
        ht[i].right = min2;
        ht[min1].parent = ht[min2].parent = i;
    }
    // display
    display(ht, size);
}
