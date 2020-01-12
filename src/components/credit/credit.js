import React from 'react';
import { Block } from 'baseui/block';

import { Credit, PaginatedItems } from 'next-movie-components';

const PAGE_SIZE = 5;

export const Cast = ({ data }) => (
    <PaginatedItems
        data={data}
        pageSize={PAGE_SIZE}
        renderer={datum => (
            <Credit
                id={datum.creditId}
                name={datum.name}
                description={datum.character}
                imageUrl={datum.profileImgUrl}
            />
        )}
    />
);

export const Crew = ({ data }) => {
    if (!data || data.length === 0) {
        return null;
    }

    return (
        <Block marginTop="scale600">
            {data.map(datum => (
                <Credit
                    key={datum.creditId}
                    id={datum.creditId}
                    name={datum.name}
                    description={datum.job}
                    imageUrl={datum.profileImgUrl}
                />
            ))}
        </Block>
    );
};
