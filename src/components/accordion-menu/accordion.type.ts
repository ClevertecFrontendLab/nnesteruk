import { ReactElement } from 'react';

export type List = {
    item: string;
    url: string;
};

export type Item = {
    title: string;
    leftIcon: ReactElement;
    list?: List[];
};
