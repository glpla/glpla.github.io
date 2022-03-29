#include <stdio.h>
#include <stdlib.h>
typedef struct Arr
{
    int row, col;
    int data;
} Arr;

int main(void)
{
    int arr[5];
    printf("arr=%d\n", sizeof(arr));

    return 0;
}