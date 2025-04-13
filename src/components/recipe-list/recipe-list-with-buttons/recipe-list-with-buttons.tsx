import { Grid } from '@chakra-ui/react';

import FryingPanIcon from '~/assets/icons/frying-pan.svg';
import NationalIcon from '~/assets/icons/international-food.svg';
import Lapsha from '~/assets/img/lapsha.png';
import Spaghetti from '~/assets/img/spaghetti.png';
import TomYam from '~/assets/img/tom-yam.png';
import Vetchina from '~/assets/img/vetchina.png';
import { Emoji } from '~/components/icons/emoji';
import { FavoritesIcon } from '~/components/icons/favorites-icon';

import { RecipesWithRecommendation } from '../recipe-list.types';
import { RecipeItemWithButtons } from './recipe-item-with-buttons';

const popularRecipes: RecipesWithRecommendation[] = [
    {
        img: Spaghetti,
        title: 'Кнели со спагетти',
        text: 'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        likes: [
            { icon: <FavoritesIcon size={12} />, count: 85 },
            { icon: <Emoji size={12} />, count: 152 },
        ],
        category: { icon: FryingPanIcon, text: 'Вторые блюда' },
    },
    {
        img: Vetchina,
        title: 'Пряная ветчина по итальянски',
        text: 'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        likes: [
            { icon: <FavoritesIcon size={12} />, count: 159 },
            { icon: <Emoji size={12} />, count: 257 },
        ],
        category: { icon: FryingPanIcon, text: 'Вторые блюда' },
        recommendation: { text: 'Alex Cook рекомендует', avatar: 'https://bit.ly/dan-abramov' },
    },
    {
        img: Lapsha,
        title: 'Лапша с курицей и шафраном',
        text: 'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        likes: [
            { icon: <FavoritesIcon size={12} />, count: 258 },
            { icon: <Emoji size={12} />, count: 342 },
        ],
        category: { icon: FryingPanIcon, text: 'Вторые блюда' },
        recommendation: {
            text: 'Елена Высоцкая рекомендует',
            avatar: 'https://bit.ly/dan-abramov',
        },
    },
    {
        img: TomYam,
        title: 'Том-ям с капустой кимчи',
        text: 'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        likes: [
            { icon: <FavoritesIcon size={12} />, count: 124 },
            { icon: <Emoji size={12} />, count: 324 },
        ],
        category: { icon: NationalIcon, text: 'Национальные' },
    },
];

export const RecipeListWithButtons = ({
    bgColorSectionCategory,
}: {
    bgColorSectionCategory?: string;
}) => (
    <Grid
        marginTop={4}
        gridTemplateColumns={{
            base: '1fr',
            md: 'repeat(2, 1fr)',
            lg: '1fr',
            xl: 'repeat(2, 1fr)',
        }}
        gap={4}
    >
        {popularRecipes?.map((recipe) => (
            <RecipeItemWithButtons
                recipe={recipe}
                bgColorSectionCategory={bgColorSectionCategory}
            />
        ))}
    </Grid>
);
