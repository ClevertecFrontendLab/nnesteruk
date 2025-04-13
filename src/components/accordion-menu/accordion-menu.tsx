import './style.css';

import { Accordion, Box, Button, Flex, Text } from '@chakra-ui/react';

import SaladIcon from '/src/assets/icons/baklagan.svg';
import DesertIcon from '/src/assets/icons/bread.svg';
import FirstDishesIcon from '/src/assets/icons/castrulya.svg';
import ChildIcon from '/src/assets/icons/child-tasty.svg';
import DrinkIcon from '/src/assets/icons/cup.svg';
import FryingPanIcon from '/src/assets/icons/frying-pan.svg';
import HealthyIcon from '/src/assets/icons/healthy-eating.svg';
import NationalIcon from '/src/assets/icons/international-food.svg';
import VeganIcon from '/src/assets/icons/leaf.svg';
import NoteIcon from '/src/assets/icons/note.svg';
import GrilIcon from '/src/assets/icons/oven.svg';
import PlusIcon from '/src/assets/icons/plus.svg';
import SauseIcon from '/src/assets/icons/stupka.svg';

import { ExitIcon } from '../icons/exit-icon';
import { Item } from './accordion.type';
import { AccordionMenuItem } from './accordion-menu-item';

const menuItems: Item[] = [
    {
        title: 'Салаты',
        leftIcon: <img src={SaladIcon} alt='Salad Icon' />,
    },
    {
        title: 'Закуски',
        leftIcon: <img src={HealthyIcon} alt='Healthy Icon' />,
    },
    {
        title: 'Первые блюда',
        leftIcon: <img src={FirstDishesIcon} alt='FirstDishes Icon' />,
    },
    {
        title: 'Вторые блюда',
        leftIcon: <img src={FryingPanIcon} alt='SecondDishes Icon' />,
    },
    {
        title: 'Десерты, выпечка',
        leftIcon: <img src={DesertIcon} alt='Desert Icon' />,
    },
    {
        title: 'Блюда на гриле',
        leftIcon: <img src={GrilIcon} alt='Gril Icon' />,
    },
    {
        title: 'Веганская кухня',
        leftIcon: <img src={VeganIcon} alt='Vegan Icon' />,
        list: [
            {
                item: 'Закуски',
                url: 'url',
            },
            {
                item: 'Первые блюда',
                url: 'url',
            },
            {
                item: 'Вторые блюда',
                url: 'url',
            },
            {
                item: 'Гарниры',
                url: 'url',
            },
            {
                item: 'Десерты',
                url: 'url',
            },
            {
                item: 'Выпечка',
                url: 'url',
            },
            {
                item: 'Сыроедческие блюда',
                url: 'url',
            },
            {
                item: 'Напитки',
                url: 'url',
            },
        ],
    },
    {
        title: 'Детские блюда',
        leftIcon: <img src={ChildIcon} alt='Child Icon' />,
    },
    {
        title: 'Лечебное питание',
        leftIcon: <img src={PlusIcon} alt='Plus Icon' />,
    },
    {
        title: 'Национальные',
        leftIcon: <img src={NationalIcon} alt='National Icon' />,
    },
    {
        title: 'Соусы',
        leftIcon: <img src={SauseIcon} alt='Sause Icon' />,
    },
    {
        title: 'Напитки',
        leftIcon: <img src={DrinkIcon} alt='Drink Icon' />,
    },
    {
        title: 'Заготовки',
        leftIcon: <img src={NoteIcon} alt='Note Icon' />,
    },
];

export const AccordionMenu = () => (
    <Flex position='fixed' top='80px' bottom={0} direction='column' width='255px'>
        <Box flex='1' paddingTop='24px' overflowY='auto' padding='10px 16px 10px 10px'>
            <Accordion allowMultiple>
                {menuItems.map((item) => (
                    <AccordionMenuItem key={item.title} item={item} />
                ))}
            </Accordion>
        </Box>
        <footer className='accordion-menu-footer'>
            <Box>
                <Text opacity={0.24}>Версия программы 03.25</Text>
            </Box>
            <Box>
                <Text opacity={0.64}>
                    Все права защищены, ученический файл, ©Клевер Технолоджи, 2025
                </Text>
            </Box>
            <Box>
                <Button
                    bgColor='transparent'
                    paddingX={1.5}
                    fontSize='12px'
                    leftIcon={<ExitIcon />}
                >
                    Выйти
                </Button>
            </Box>
        </footer>
    </Flex>
);
