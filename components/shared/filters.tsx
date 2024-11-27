'use client'

import React, {useState} from 'react';

import {Title} from './title';
import {Input, RangeSlider} from "@/components/ui";
import {CheckboxFiltersGroup} from './checkbox-filters-group';
import {useIngredients} from "@/hooks/use-ingredients";
import {useSet} from "react-use";

interface Props {
    className?: string;
}

interface PriceProps {
    priceFrom: number;
    priceTo: number;
}

export const Filters: React.FC<Props> = ({className}) => {

    const {ingredients, loading, onAddId, selectedIds} = useIngredients();

    const [sizes, { toggle: toggleSizes }] = useSet(new Set<string>([]));

    const [price, setPrice] = useState<PriceProps>({priceFrom: 0, priceTo: 1000});

    const items = ingredients.map((item) => ({value: String(item.id), text: item.name}));

    const updatePrice = (name: keyof PriceProps, value: number) => {
        setPrice({
            ...price,
            [name]: value,
        })
    }

    return (
        <div className={className}>
            <Title text="Фильтрация" size="sm" className="mb-5 font-bold"/>

            <CheckboxFiltersGroup
                title="Размеры"
                name="sizes"
                className="mb-5"
                onClickCheckbox={toggleSizes}
                selected={sizes}
                items={[
                    { text: '20 см', value: '20' },
                    { text: '30 см', value: '30' },
                    { text: '40 см', value: '40' },
                ]}
            />

            <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
                <p className="font-bold mb-3">Цена от и до:</p>
                <div className="flex gap-3 mb-5">
                    <Input type="number"
                           placeholder="0"
                           min={0}
                           max={1000}
                           value={String(price.priceFrom)}
                           onChange={e => updatePrice('priceFrom', Number(e.target.value))}
                    />
                    <Input type="number"
                           min={100}
                           max={1000}
                           placeholder="1000"
                           value={String(price.priceTo)}
                           onChange={e => updatePrice('priceTo', Number(e.target.value))}
                    />
                </div>
                <RangeSlider min={0} max={1000} step={10} value={[price.priceFrom, price.priceTo]}
                onValueChange={([priceFrom, priceTo]) => setPrice({priceFrom, priceTo})}
                />
            </div>

            <CheckboxFiltersGroup title={"Ингредиенты"}
                                  className={'mt-5'}
                                  limit={6}
                                  defaultItems={items.slice(0, 6)}
                                  items={items}
                                  loading={loading}
                                  onClickCheckbox={onAddId}
                                  selected={selectedIds}
                                  name={'ingredients'}
            />
        </div>
    );
};
