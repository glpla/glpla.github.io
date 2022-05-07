#include <stdio.h>
#if defined(VER1)
#pragma message("ver 1.0")
#define VER "ver 1.0"
#elif defined(VER2)
#pragma message("ver 2.0")
#define VER "ver 2.0"
#else
#pragma message("ver not provided")
#define VER "null"
#endif
int main(void)
{
    printf("%s\n", VER);
    return 0;
}