import { Button, ListItem } from '@chakra-ui/react';

import { List } from './accordion.type';

export const MenuListItem = ({ listItem }: { listItem: List }) => (
    <ListItem key={listItem?.item} paddingLeft='20px' className='list-item'>
        <Button bgColor='#FFF' fontSize='16px' fontWeight={500}>
            {listItem?.item}
        </Button>
    </ListItem>
);
