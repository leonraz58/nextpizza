'use client';

import React, {useState} from 'react';
import {cn} from "@/shared/lib/utils";
import {GroupVariants, IngredientItem, PizzaImage, Title} from './index';
import {Button} from "../ui";
import {PizzaSize, pizzaSizes, PizzaType, pizzaTypes} from "@/shared/constants/pizza";
import {Ingredient} from "@prisma/client";

interface Props {
    imageUrl: string;
    name: string;
    ingredients: Ingredient[]
    items?: any[];
    className?: string;
    onClickAdd?: VoidFunction
}

export const ChoosePizzaForm: React.FC<Props> = ({imageUrl, name, ingredients, items, className, onClickAdd}) => {

    const [size, setSize] = useState<PizzaSize>(20)
    const [type, setType] = useState<PizzaType>(1)

    const textDetails = "30см, традиционное тесто 30"
    const totalPrice = '250р'

    return (
        <div className={cn(className, 'flex flex-1')}>
            <PizzaImage imageUrl={imageUrl} size={size}/>

            <div className="w-[490px] bg-[#f7f6f5] p-7">
                <Title text={name} size="md" className="font-extrabold mb-1"/>

                <p className="text-gray-400">{textDetails}</p>

                <div className="flex flex-col gap-4 mt-5">
                    <GroupVariants
                        items={pizzaSizes}
                        value={String(size)}
                        onClick={(value) => setSize(Number(value) as PizzaSize)}
                    />

                    <GroupVariants
                        items={pizzaTypes}
                        value={String(type)}
                        onClick={(value) => setType(Number(value) as PizzaType)}
                    />
                </div>

                <div className="bg-gray-50 p-5 rounded-md h-[420px] overflow-auto scrollbar mt-5">
                    <div className="grid grid-cols-3 gap-3">
                        {ingredients.map((ingredient) => (
                            <IngredientItem
                                key={ingredient.id}
                                name={ingredient.name}
                                price={ingredient.price}
                                imageUrl={ingredient.imageUrl}
                                onClick={onClickAdd}
                            />
                        ))}
                    </div>
                </div>

                <Button
                    className="h-[55px] px-10 text-base rounded-[18px] w-full mt-10">
                    Добавить в корзину за {totalPrice} ₽
                </Button>
            </div>
        </div>
    );
};