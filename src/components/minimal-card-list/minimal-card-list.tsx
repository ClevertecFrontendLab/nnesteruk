import { Grid } from '@chakra-ui/react';

import FryingPanIcon from '~/assets/icons/frying-pan.svg';

import { MinimalCardItem } from './minimal-card-item';

export type Card = {
    img: string;
    title: string;
};

const cardList: Card[] = [
    {
        img: FryingPanIcon,
        title: 'Стейк для вегетарианцев',
    },
    {
        img: FryingPanIcon,
        title: 'Котлеты из гречки и фасоли',
    },
    {
        img: FryingPanIcon,
        title: 'Сырный суп с лапшой и брокколи',
    },
];

export const MinimalCardList = () => (
    <Grid templateRows='repeat(3,1fr)' gap={3}>
        {cardList.map((card) => (
            <MinimalCardItem card={card} />
        ))}
    </Grid>
);
