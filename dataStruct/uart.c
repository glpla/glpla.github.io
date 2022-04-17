#include <stdio.h>
#include <stdlib.h>
void Init_Uart0()
{
    //端口配置
    PERCFG &= ~0x01; //将串口0的引脚映射到位置1，即P0_2和P0_3
    P0SEL = 0x0C;    // 0000 1100 将P0_2和P0_3端口设置为外设功能

    /*======使用CC2530的内部16MHz晶振产生9600的波特率====*/

    //波特率配置
    U0BAUD = 59;
    U0GCR = 9;

    //流控配置
    U0UCR |= 0x80; //禁止流控，8位数据，清楚缓冲器

    //串口模式配置
    U0CSR |= 0xC0; //选择UART模式，使能接收器

    //中断配置
    UTX0IF = 0; //清除TX发送中断标志
    URX0IF = 0; //清除RX接收中断标志
    URX0IE = 1; //使能URAT0的接收中断
    EA = 1;     //使能总中断
}

int main()
{
    return 0;
}