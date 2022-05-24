#include <stdio.h>

int main(void)
{
    char *str = "1234";
    for (int i = 0; i < 4; i++)
    {
        printf("%c\n", *str++);
    }

    return 0;
}