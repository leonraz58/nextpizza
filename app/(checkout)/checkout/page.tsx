'use client';

import {
    CheckoutItem,
    CheckoutItemDetails,
    Container,
    Title,
    WhiteBlock
} from "@/shared/components/shared";
import {Button, Input, Textarea} from "@/shared/components/ui";
import {ArrowRight, Package, Percent, Truck} from "lucide-react";
import {useCart} from "@/shared/hooks";
import {PizzaSize, PizzaType} from "@/shared/constants/pizza";
import {getCartItemDetails} from "@/shared/lib";

const VAT = 15;
const DELIVERY_PRICE = 250;

export default function CheckoutPage() {

    const { totalAmount, updateItemQuantity, items, removeCartItem, loading } = useCart();

    const onClickCountButton = (id: number, quantity: number, type: 'plus' | 'minus') => {
        const newQuantity = type === 'plus' ? quantity + 1 : quantity - 1;
        updateItemQuantity(id, newQuantity);
    };

    const vatPrice = (totalAmount * VAT) / 100;
    const totalPrice = totalAmount + DELIVERY_PRICE + vatPrice;

    return (
        <Container className="mt-10">
            <Title text="Оформление заказа" className="font-extrabold mb-8 text-[36px]"/>
            <div className="flex gap-10">
                <div className={'flex flex-col gap-10 flex-1 mb-20'}>
                    <WhiteBlock title="1. Корзина">
                        <div className="flex flex-col gap-5">
                            {items.map((item) => (
                                <CheckoutItem
                                    key={item.id}
                                    id={item.id}
                                    imageUrl={item.imageUrl}
                                    details={getCartItemDetails(
                                        item.ingredients,
                                        item.pizzaType as PizzaType,
                                        item.pizzaSize as PizzaSize,
                                    )}
                                    name={item.name}
                                    price={item.price}
                                    quantity={item.quantity}
                                    disabled={item.disabled}
                                    onClickCountButton={(type) => onClickCountButton(item.id, item.quantity, type)}
                                    onClickRemove={() => removeCartItem(item.id)}
                                />
                            ))}
                        </div>
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
                            <span className="h-11 text-[34px] font-extrabold">{totalPrice}</span>
                        </div>

                        <CheckoutItemDetails
                            title={
                                <div className="flex items-center">
                                    <Package size={18} className="mr-2 text-gray-400"/>
                                    Стоимость корзины:
                                </div>
                            }
                            value={`${totalAmount} ₽`}
                        />
                        <CheckoutItemDetails
                            title={
                                <div className="flex items-center">
                                    <Percent size={18} className="mr-2 text-gray-400"/>
                                    Налоги:
                                </div>
                            }
                            value={`${vatPrice} ₽`}
                        />
                        <CheckoutItemDetails
                            title={
                                <div className="flex items-center">
                                    <Truck size={18} className="mr-2 text-gray-400"/>
                                    Доставка:
                                </div>
                            }
                            value={`${DELIVERY_PRICE} ₽`}
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
