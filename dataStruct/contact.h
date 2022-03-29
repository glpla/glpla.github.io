#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define maxSize 10
#define max_name_len 8
#define max_address_len 30
enum options
{
    EXIT,
    ADD,
    DELETE,
    UPDATE,
    SERACH,
    DISPLAY,
    SORT,
    OUTPUT
};

typedef struct Stu
{
    char name[max_name_len];
    int age;
    // char gender;
    // int cell[11];
    // char add[max_address_len];
} Stu;

typedef struct Contact
{
    Stu stu[maxSize];
    int len;
} Contact;

void init(Contact *con)
{
    memset(con->stu, 0, sizeof(con->stu));
    con->len = 0;
}

void add(Contact *con)
{
    if (con->len == maxSize - 1)
    {
        printf("contact is full\n");
    }
    else
    {
        printf("please input the name>");
        scanf("%s", con->stu[con->len].name);
        printf("please input the age>");
        scanf("%d", &(con->stu[con->len].age));
        con->len++;
        printf("contact add: ok\n\n");
    }
}
void delete (Contact *con) { printf("delete\n"); }
void update(Contact *con) { printf("update\n"); }
void search(Contact *con) { printf("search\n"); }
void display(Contact *con)
{
    if (!con->len)
    {
        printf("contact is empty\n");
    }
    else
    {
        printf("contack list start------------------------------\n");
        printf("%-3s\t%-15s\t%-5s\n", "sn", "name", "age");
        for (int i = 0; i < con->len; i++)
        {
            printf("%-3d\t%-15s\t%-5d\n", i + 1, con->stu[i].name, con->stu[i].age);
        }
        printf("contack list end  ------------------------------\n\n");
    }
}
void sort(Contact *con) { printf("update\n"); }
void output(Contact *con) { printf("search\n"); }