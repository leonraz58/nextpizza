 'use server';

import {OrderStatus} from "@prisma/client";
 import {prisma} from "@/prisma/prisma-client";
 import {CheckoutFormValues} from "@/shared/constants";

 export async function createOrder(data: CheckoutFormValues) {

    console.log(data)
    const token = '123'

    /* Создаем заказ */
    await prisma.order.create({
      data: {
        token,
        fullName: data.firstName + ' ' + data.lastName,
        email: data.email,
        phone: data.phone,
        address: data.address,
        comment: data.comment,
        totalAmount: 1500,
        status: OrderStatus.PENDING,
        items: [],
      },
    });

    return 'https://github.com/';
}