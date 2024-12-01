'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import {Dialog} from "@/components/ui";
import {DialogContent} from "@/components/ui/dialog";
import {cn} from "@/lib/utils";
import {ChooseProductForm} from "@/components/shared/choose-product-form";
import {ProductWithRelations} from "@/@types/prisma";


interface Props {
  product: ProductWithRelations;
  className?: string;
}

export const ChooseProductModal: React.FC<Props> = ({ product, className }) => {
  const router = useRouter();
  const isPizzaForm = Boolean(product.items[0].pizzaType)


  return (
    <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
      <DialogContent
        className={cn(
          'p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden',
          className,
        )}>
        {isPizzaForm ? ('PizzaForm') : <ChooseProductForm imageUrl={product.imageUrl} name={product.name} ingredients={[]} />}

      </DialogContent>
    </Dialog>
  );
};
