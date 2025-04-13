import { Flex } from '@chakra-ui/react';

import SaladIcon from '~/assets/icons/baklagan.svg';
import DesertIcon from '~/assets/icons/bread.svg';
import FirstDishesIcon from '~/assets/icons/castrulya.svg';
import VeganIcon from '~/assets/icons/leaf.svg';
import Kapusta from '~/assets/img/kapusta.png';
import Pancakes from '~/assets/img/pancakes.png';
import Salad from '~/assets/img/salad.png';
import Solyanka from '~/assets/img/solyanka.png';

import { Emoji } from '../icons/emoji';
import { FavoritesIcon } from '../icons/favorites-icon';
import { RecipeItem } from './recipe-item';
import { RecipeListProps, Recipes } from './recipe-list.types';

const recipes: Recipes[] = [
    {
        img: Solyanka,
        title: 'Солянка с грибами',
        text: 'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        likes: [{ icon: <FavoritesIcon size={12} />, count: 1 }],
        category: { icon: FirstDishesIcon, text: 'Первые блюда' },
    },
    {
        img: Kapusta,
        title: 'Капустные котлеты',
        text: 'Капустные котлеты по этому рецепту получаются необычайно пышными и  невероятно вкусными. Мягкий вкус и лёгкая пряная нотка наверняка помогут сделать эти чудесные котлеты из капусты одним из ваших любимых овощных  блюд.',
        likes: [
            { icon: <FavoritesIcon size={12} />, count: 2 },
            { icon: <Emoji size={12} />, count: 1 },
        ],
        category: { icon: VeganIcon, text: 'Веганские блюда' },
    },
    {
        img: Pancakes,
        title: 'Оладьи на кефире "Пышные"',
        text: 'Очень вкусные и нежные оладьи на кефире. Настоятельно рекомендую пышные кефирные оладьи на завтрак.',
        likes: [{ icon: <Emoji size={12} />, count: 1 }],
        category: { icon: DesertIcon, text: 'Десерты, выпечка' },
    },
    {
        img: Salad,
        title: 'Салат "Здоровье"',
        text: 'Сельдерей очень полезен для здоровья, пора набираться витаминов. Не  салат, а сплошное удовольствие:) Вкусный, необычный, а главное быстрый.',
        likes: [],
        category: { icon: SaladIcon, text: 'Салаты' },
    },
    {
        img: Salad,
        title: 'Салат "Здоровье"',
        text: 'Сельдерей очень полезен для здоровья, пора набираться витаминов. Не  салат, а сплошное удовольствие:) Вкусный, необычный, а главное быстрый.',
        likes: [],
        category: { icon: SaladIcon, text: 'Салаты' },
    },
];

export const RecipeList = ({
    showImg = true,
    bgColorSectionCategory = 'lime.150',
    limit = 2,
    showAll = true,
}: RecipeListProps) => {
    const allRecipes = showAll ? recipes : recipes.slice(0, limit);

    return (
        <Flex
            position='relative'
            marginTop={8}
            gap={{ base: '12px', xl: '24px' }}
            width='100%'
            overflowX='hidden'
        >
            {allRecipes?.map((recipe) => (
                <RecipeItem
                    recipe={recipe}
                    showImg={showImg}
                    bgColorSectionCategory={bgColorSectionCategory}
                />
            ))}
        </Flex>
    );
};
