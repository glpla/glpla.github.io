#include <stdio.h>
#include <stdlib.h>
#include "contact.h"

void menu(void);

int main(void)
{
    int option;
    Contact con;
    init(&con);
    do
    {
        menu();
        printf("please make a choice>");
        scanf("%d", &option);
        switch (option)
        {
        case ADD:
            add(&con);
            break;
        case DELETE:
            delete (&con);
            break;
        case UPDATE:
            update(&con);
            break;
        case SERACH:
            search(&con);
            break;
        case DISPLAY:
            display(&con);
            break;
        case SORT:
            sort(&con);
            break;
        case OUTPUT:
            output(&con);
            break;
        case EXIT:
            exit(0);
            break;
        default:
            exit(0);
            break;
        }
    } while (1);

    return 0;
}
void menu(void)
{
    printf("********************************\n");
    printf("*** 1.add           2.delete ***\n");
    printf("*** 3.update        4.search ***\n");
    printf("*** 5.display       6.sort   ***\n");
    printf("*** 7.output        0.exit   ***\n");
    printf("********************************\n\n");
    // 基础太弱
    // 思路没有清楚
}
