'use client';

import {Container, Title, WhiteBlock} from "@/shared/components/shared";
import {Input, Textarea} from "@/shared/components/ui";

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

                        <div className={'flex my-4'}>
                            <span className="flex flex-1 text-lg text-neutral-500">
                                Text
                                <div
                                    className="flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2"/>
                            </span>

                            <span className="font-bold text-lg">Value</span>
                        </div>
                    </WhiteBlock>
                </div>
            </div>
        </Container>
    );
}
