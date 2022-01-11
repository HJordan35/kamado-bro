import React from 'react';

interface Props {
    category?: string,
}

export const Header: React.FunctionComponent<Props> = (props: Props) => {
    return <div>Card Header</div>;
};

export default Header;