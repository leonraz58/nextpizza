'use client';

import React from 'react';
import {useRouter} from 'next/navigation';
import {Dialog} from "../../ui";
import {DialogContent} from "@/shared/components/ui/dialog";
import {cn} from "@/shared/lib/utils";
import {ProductWithRelations} from "@/@types/prisma";
import {ChoosePizzaForm} from "@/shared/components/shared";
import {ChooseProductForm} from "@/shared/components/shared/choose-product-form";
import {useCartStore} from "@/shared/store";
import toast from "react-hot-toast";


interface Props {
    product: ProductWithRelations;
    className?: string;
}

export const ChooseProductModal: React.FC<Props> = ({product, className}) => {
    const router = useRouter();
    const firstItem = product.items[0]
    const isPizzaForm = Boolean(firstItem.pizzaType)
    const addCartItem = useCartStore(store => store.addCartItem)
    const loading = useCartStore(store => store.loading)

    const onAddProduct = () => {
        addCartItem({
            productItemId: firstItem.id
        })
    }

    const onAddPizza = async (productItemId: number, ingredients: number[]) => {
        try {
            await addCartItem({
                productItemId,
                ingredients
            })
            toast.success("Пицца добавлена в корзину")
            router.back()
        } catch (error) {
            toast.error('Не удалось добавить пиццу')
            console.error(error)
        }

    }


    return (
        <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
            <DialogContent
                className={cn(
                    'p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden',
                    className,
                )}>
                {isPizzaForm ? (
                        <ChoosePizzaForm imageUrl={product.imageUrl}
                                         name={product.name}
                                         ingredients={product.ingredients}
                                         items={product.items}
                                         onSubmit={onAddPizza}
                                         loading={loading}
                        />)
                    : <ChooseProductForm imageUrl={product.imageUrl}
                                         name={product.name}
                                         onSubmit={onAddProduct}
                                         price={firstItem.price}
                                         loading={loading}
                    />
                }

            </DialogContent>
        </Dialog>
    );
};
