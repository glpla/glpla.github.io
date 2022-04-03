#include <stdio.h>
#include <string.h>
char *get(void)
{
    static char c[] = "hi";
    return c;
}
void test(void)
{
    char *str = NULL;
    str = get();
    printf(str);
}
int main()
{
    test();
    return 0;
}