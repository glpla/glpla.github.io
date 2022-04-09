#include <stdio.h>
#include <stdlib.h>
#define maxSize 20
#define TRUE 1
#define FALSE 0
typedef struct
{
    char data[maxSize];
    int len;
} String;
int assign(String *s, char *str)
{
    int i;
    for (i = 0; *(str + i) != '\0'; i++)
    {
        i++;
    }
    printf("len=%d\n", i);
    if (i > maxSize)
    {
        return FALSE;
    }
    i = 0;
    while (*(str + i) != '\0')
    {
        s->data[i] = *(str + i);
        i++;
    }
    s->len = i;
    return TRUE;
}
String *substr(String *s, int i, int len)
{
    String *str = (String *)malloc(sizeof(String));
    str->len = 0;
    if (i < 0 || i > s->len || len < 0)
    {
        return str;
    }
    // 这个变量可以省略
    int j = 0;
    for (int ind = i; ind < i + len; ind++)
    {
        str->data[j] = s->data[ind];
        j++;
    }
    // MUST
    str->data[j] = '\0';
    str->len = j;
    return str;
}

int main(void)
{
    char *str = "hi, there. boy";
    int res;
    String *s = (String *)malloc(sizeof(String));
    res = assign(s, str);
    if (res)
    {
        puts(s->data);
        printf("%d\n", s->len);
    }
    String *newstr = substr(s, 2, 4);
    puts(newstr->data);
    printf("%d\n", newstr->len);
    free(s);
    return 0;
}