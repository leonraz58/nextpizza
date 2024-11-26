import { Ingredient } from '@prisma/client';
import React from 'react';
import {Api} from "@/services/api-client";

export const useIngredients = () => {
    const [ingredients, setIngredients] = React.useState<Ingredient[]>([]);

    React.useEffect(() => {
        async function fetchIngredients() {
            try {
                const ingredients = await Api.ingredients.getAll();
                setIngredients(ingredients);
            } catch (error) {
                console.log(error);
            }
        }

        fetchIngredients();
    }, []);

    return {
        ingredients,
    };
};
