#include <stdio.h>
#include <string.h>
// typedef char **HTable;
void code(char **hc, int n)
{
    char *hcode[n + 1];
    hc = hcode;
    int start = 5;
    char res[n - start];
    hc[0] = res;
    strcpy(hc[0], "hillo");
}
int main(void)
{
    char **hc;
    code(&hc, 10);
    printf("%s\n", *hc[0]);
    return 0;
}