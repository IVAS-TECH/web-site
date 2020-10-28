import React from 'react';
import Link, { LinkProps } from 'next/link';

type aProps = React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;

type Props
    = React.PropsWithChildren<LinkProps>
    & aProps;

const NavLink = React.forwardRef((
    props: Props,
    ref: React.LegacyRef<HTMLAnchorElement>
) => {
    const {
        as,
        href,
        replace,
        shallow,
        scroll,
        prefetch,
        passHref,
        ...rest
    } = props;
    return (
        <Link href={href} as={as} replace={replace} shallow={shallow}>
            <a ref={ref} {...rest} />
        </Link>
    );
});

export default NavLink;