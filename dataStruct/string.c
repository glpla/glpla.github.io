#include <stdio.h>
#include <stdlib.h>
#define maxSize 20
#define TRUE 1
#define FALSE 0
#define ERROR -1
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
        return ERROR;
    }
    i = 0;
    while (*(str + i) != '\0')
    {
        s->data[i] = *(str + i);
        i++;
    }
    // MUST
    s->data[i] = '\0';
    s->len = i;
    return TRUE;
}

void display(String *s)
{
    puts(s->data);
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
int indexOfCh(String *s, char ch)
{
    if (!s->len)
    {
        return ERROR;
    }
    int ind;
    for (int i = 0; i < s->len; i++)
    {
        if (s->data[i] == ch)
        {
            return i;
        }
    }
    return ERROR;
}
int match(String *s, String *p, int s_start, int p_start, int *s_fail, int *p_fail)
{
    int i = s_start, j = p_start;
    // 从p串的第一位开始比较
    for (; j < p->len; i++, j++)
    {
        if (s->data[i] != p->data[j])
        {
            *s_fail = i;
            *p_fail = j;
            return FALSE;
        }
    }
    return TRUE;
}

int indexOfStr(String *s, String *p, int pos)
{
    int s_start = 0, p_start = 0, s_fail, p_fail;
    for (s_start = pos; s_start <= s->len - p->len; s_start++)
    {
        if (match(s, p, s_start, p_start, &s_fail, &p_fail))
        {
            return s_start;
        }
    }
    return FALSE;
}

int main(void)
{
    char *str0 = "hi, there. boy";
    char *str1 = "th";
    int res;
    String *s = (String *)malloc(sizeof(String));
    String *p = (String *)malloc(sizeof(String));
    assign(s, str0);
    assign(p, str1);
    // assign(p, "there");
    display(s);
    display(p);
    res = indexOfStr(s, p, 0);
    printf("res=%d\n", res); // res=4
    free(s);
    free(p);
    return 0;
}