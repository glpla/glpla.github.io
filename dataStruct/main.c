#include <stdio.h>
#include <stdlib.h>
#define uchar unsigned char
#define uint unsigned int

int main(void)
{
    uchar ch = 0xEE;
    printf("%#x\n", ch);
    ch |= (1 << 4);
    printf("%#x\n", ch);
    // for (int i = 0; i < 8; i++)
    // {
    //     printf("%#x\n", ch);
    //     ch = ~ch;
    //     ch = ch << 1;
    //     ch = ~ch;
    // }

    return 0;
}