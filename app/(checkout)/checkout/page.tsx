'use client';

import {CheckoutItemDetails, Container, Title, WhiteBlock} from "@/shared/components/shared";
import {Button, Input, Textarea} from "@/shared/components/ui";
import {ArrowRight, Package, Percent, Truck} from "lucide-react";

export default function CheckoutPage() {

    return (
        <Container className="mt-10">
            <Title text="Оформление заказа" className="font-extrabold mb-8 text-[36px]"/>
            <div className="flex gap-10">
                <div className={'flex flex-col gap-10 flex-1 mb-20'}>
                    <WhiteBlock title="1. Корзина">

                    </WhiteBlock>
                    <WhiteBlock title="2. Персональные данные">
                        <div className="grid grid-cols-2 gap-5">
                            <Input name="firstName" className="text-base" placeholder="Имя"/>
                            <Input name="lastName" className="text-base" placeholder="Фамилия"/>
                            <Input name="email" className="text-base" placeholder="E-Mail"/>
                            <Input name="phone" className="text-base" placeholder="Телефон"/>
                        </div>
                    </WhiteBlock>

                    <WhiteBlock title="3. Адрес доставки">
                        <div className="flex flex-col gap-5">
                            <Input name={'firstName'} className={'text-base'} placeholder={'Введите адрес'}/>
                            <Textarea
                                name="comment"
                                className="text-base"
                                placeholder="Комментарий к заказу"
                                rows={5}
                            />
                        </div>
                    </WhiteBlock>
                </div>

                <div className="w-[450px]">
                    <WhiteBlock className={'p-6 sticky top-4'}>
                        <div className="flex flex-col gap-1">
                            <span className="text-xl">Итого:</span>
                            <span className="h-11 text-[34px] font-extrabold">3333 ₽</span>
                        </div>

                        <CheckoutItemDetails
                            title={
                                <div className="flex items-center">
                                    <Package size={18} className="mr-2 text-gray-400"/>
                                    Стоимость корзины:
                                </div>
                            }
                            value={`555р`}
                        />
                        <CheckoutItemDetails
                            title={
                                <div className="flex items-center">
                                    <Percent size={18} className="mr-2 text-gray-400"/>
                                    Налоги:
                                </div>
                            }
                            value={`555р`}
                        />
                        <CheckoutItemDetails
                            title={
                                <div className="flex items-center">
                                    <Truck size={18} className="mr-2 text-gray-400"/>
                                    Доставка:
                                </div>
                            }
                            value={`555р`}
                        />

                        <Button
                            type="submit"
                            className="w-full h-14 rounded-2xl mt-6 text-base font-bold">
                            Перейти к оплате
                            <ArrowRight className="w-5 ml-2" />
                        </Button>

                    </WhiteBlock>
                </div>
            </div>
        </Container>
    );
}
