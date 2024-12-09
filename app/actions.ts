 'use server';

import {OrderStatus} from "@prisma/client";
 import {prisma} from "@/prisma/prisma-client";
 import {CheckoutFormValues} from "@/shared/constants";
 import {cookies} from "next/headers";
 import {sendEmail} from "@/shared/lib";
 import {PayOrderTemplate} from "@/shared/components";

 export async function createOrder(data: CheckoutFormValues) {
     try {
         const cookieStore = cookies();
         const cartToken = cookieStore.get('cartToken')?.value;

         if (!cartToken) {
             throw new Error('Cart token not found');
         }

         /* Находим корзину по токену */
         const userCart = await prisma.cart.findFirst({
             include: {
                 user: true,
                 items: {
                     include: {
                         ingredients: true,
                         productItem: {
                             include: {
                                 product: true,
                             },
                         },
                     },
                 },
             },
             where: {
                 token: cartToken,
             },
         });

         /* Если корзина не найдена возращаем ошибку */
         if (!userCart) {
             throw new Error('Cart not found');
         }

         /* Если корзина пустая возращаем ошибку */
         if (userCart?.totalAmount === 0) {
             throw new Error('Cart is empty');
         }

         /* Создаем заказ */
         const order = await prisma.order.create({
             data: {
                 token: cartToken,
                 fullName: data.firstName + ' ' + data.lastName,
                 email: data.email,
                 phone: data.phone,
                 address: data.address,
                 comment: data.comment,
                 totalAmount: userCart.totalAmount,
                 status: OrderStatus.PENDING,
                 items: JSON.stringify(userCart.items),
             },
         });

         /* Очищаем корзину */
         await prisma.cart.update({
             where: {
                 id: userCart.id,
             },
             data: {
                 totalAmount: 0,
             },
         });

         await prisma.cartItem.deleteMany({
             where: {
                 cartId: userCart.id,
             },
         });

         //сделать создание paymentUrl

         await sendEmail(
             data.email,
             'Next Pizza / Оплатите заказ #' + order.id,
             PayOrderTemplate({
                 orderId: order.id,
                 totalAmount: order.totalAmount,
                 paymentUrl: 'https://github.com/',
             }),
         );

         //return paymentUrl;
     } catch (err) {
         console.log('[CreateOrder] Server error', err);
     }
 }