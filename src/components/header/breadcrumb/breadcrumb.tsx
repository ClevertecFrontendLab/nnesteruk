import { ChevronRightIcon } from '@chakra-ui/icons';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { Link, useLocation } from 'react-router';

export const DynamicBreadcrumb = () => {
    const location = useLocation();
    const pathSegments = location.pathname.split('/').filter(Boolean);

    return (
        <Breadcrumb spacing='8px' separator={<ChevronRightIcon color='gray.500' />}>
            <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink as={Link} to='/'>
                    Главная
                </BreadcrumbLink>
            </BreadcrumbItem>

            {pathSegments.map((segment, index) => {
                const path = `/${pathSegments.slice(0, index + 1).join('>')}`;
                const isCurrentPage = index === pathSegments.length - 1;

                return (
                    <BreadcrumbItem key={path} isCurrentPage={isCurrentPage}>
                        <BreadcrumbLink
                            as={Link}
                            to={path}
                            aria-current={isCurrentPage ? 'page' : undefined}
                        >
                            {segment.charAt(0).toUpperCase() + segment.slice(1)}
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                );
            })}
        </Breadcrumb>
    );
};
