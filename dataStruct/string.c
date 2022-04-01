#include <stdio.h>
#include <stdlib.h>
int main(void)
{
    char c0[100] = "hi,";
    char *c1 = "there.boy";
    char *p = c0;
    while (*p != '\0')
    {
        p++;
    }
    while (*c1 != '\0')
    {
        *p = *c1;
        c1++;
        p++;
    }
    *p = '\0';
    puts(c0);
    return 0;
}