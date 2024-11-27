'use client';

import React from 'react';

import {FilterCheckbox, FilterChecboxProps} from './filter-checkbox';
import {Input} from '../ui/input';
import {Skeleton} from "@/components/ui";

type Item = FilterChecboxProps;

interface Props {
    title: string;
    items: Item[];
    defaultItems?: Item[];
    limit?: number;
    searchInputPlaceholder?: string;
    className?: string;
    selected?: Set<string>;
    onClickCheckbox?: (value: string) => void;
    loading?: boolean;
    name?: string
}

export const CheckboxFiltersGroup: React.FC<Props> = ({
                                                          title,
                                                          items,
                                                          defaultItems,
                                                          limit = 5,
                                                          searchInputPlaceholder = 'Поиск...',
                                                          className,
                                                          selected,
                                                          onClickCheckbox,
                                                          loading,
                                                          name
                                                      }) => {
    const [showAll, setShowAll] = React.useState(false);
    const [searchValue, setSearchValue] = React.useState('');

    if (loading) {
        return (
            <div className={className}>
                <p className="font-bold mb-3">{title}</p>

                {...Array(limit)
                    .fill(0)
                    .map((_, index) => <Skeleton key={index} className="h-6 mb-4 rounded-[8px]"/>)}

                <Skeleton className="w-28 h-6 mb-4 rounded-[8px]"/>
            </div>
        );
    }

    const filteredItems = items.filter((item) =>
        item.text.toLowerCase().includes(searchValue.toLowerCase()),
    );

    const list = showAll ? filteredItems : (defaultItems || items).slice(0, limit);

    return (
        <div className={className}>
            <p className="font-bold mb-3">{title}</p>


            {showAll && <div className="mb-5">
                <Input
                    placeholder={searchInputPlaceholder}
                    className="bg-gray-50 border-none"
                    onChange={(e) => setSearchValue(e.target.value)}
                />
            </div>}


            <div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
                {list.map((item) => (
                    <FilterCheckbox
                        onCheckedChange={() => onClickCheckbox?.(item.value)}
                        checked={selected?.has(item.value)}
                        key={String(item.value)}
                        value={item.value}
                        text={item.text}
                        endAdornment={item.endAdornment}
                        name={name}
                    />
                ))}
            </div>

            {items.length > limit && (
                <div className={showAll ? 'border-t border-t-neutral-100 mt-4' : ''}>
                    <button onClick={() => setShowAll(!showAll)} className="text-primary mt-3">
                        {showAll ? 'Скрыть' : '+ Показать все'}
                    </button>
                </div>
            )}
        </div>
    );
};
