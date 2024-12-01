'use client';

import React from 'react';
import {cn} from "@/lib/utils";
import {PizzaImage, Title} from '.';
import {Button} from "@/components/ui";

interface Props {
    imageUrl: string;
    name: string;
    ingredients: any[]
    items?: any[];
    className?: string;
    onClickAdd?: VoidFunction
}

export const ChoosePizzaForm: React.FC<Props> = ({imageUrl, name, ingredients, items, className, onClickAdd}) => {

    const textDetails = "30см, традиционное тесто 30"
    const totalPrice = '250р'
    const size = 30

    return (
        <div className={cn(className, 'flex flex-1')}>
            <PizzaImage imageUrl={imageUrl} size={size}/>

            <div className="w-[490px] bg-[#f7f6f5] p-7">
                <Title text={name} size="md" className="font-extrabold mb-1"/>

                <p className="text-gray-400">{textDetails}</p>

                <Button
                    className="h-[55px] px-10 text-base rounded-[18px] w-full mt-10">
                    Добавить в корзину за {totalPrice} ₽
                </Button>
            </div>
        </div>
    );
};
