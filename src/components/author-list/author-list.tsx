import { Grid } from '@chakra-ui/react';

import { AuthorItem } from './author-item';

export type Author = {
    name: string;
    nick: string;
    text: string;
};

const authors: Author[] = [
    {
        name: 'Елена Высоцкая',
        nick: '@elenapovar',
        text: 'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
    },
    {
        name: 'Alex Cook',
        nick: '@funtasticooking',
        text: 'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
    },
    {
        name: 'Екатерина Константинопольская',
        nick: '@bake_and_pie',
        text: 'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
    },
];
export const AuthorList = () => (
    <Grid gridTemplateColumns='repeat(3,1fr)' columnGap={4} mt={4}>
        {authors.map((author) => (
            <AuthorItem author={author} />
        ))}
    </Grid>
);
