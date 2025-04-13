import { Likes } from '~/shared-types/types';

export type CategoryT = {
    icon: string;
    text: string;
};

export type Recipes = {
    img: string;
    title: string;
    text: string;
    likes: Likes[];
    category: CategoryT;
};

export type Recommendation = {
    text: string;
    avatar: string;
};

export type RecipesWithRecommendation = Recipes & {
    recommendation?: Recommendation;
};

export type RecipeListProps = {
    showImg?: boolean;
    bgColorSectionCategory?: string;
    limit?: number;
    showAll?: boolean;
};

export type RecipeItemProps = Pick<RecipeListProps, 'bgColorSectionCategory' | 'showImg'> & {
    recipe: Recipes;
};

export type RecipesItemWithButton = Pick<RecipeListProps, 'bgColorSectionCategory'> & {
    recipe: RecipesWithRecommendation;
};
