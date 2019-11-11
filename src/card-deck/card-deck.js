import React from 'react';
import { useStyletron } from 'baseui';

import { Card, Deck } from 'next-movie-components';

export const CardDeck = ({ name, data }) => {
    const [useCss, theme] = useStyletron();
    const titleClass = useCss({
        ...theme.typography.font450,
        color: theme.colors.colorSecondary,
        fontWeight: 'bold'
    });

    return (
        <div className="card-deck">
            <h2 className={titleClass}>{name}</h2>
            <Deck>
                {data.map(({ id, headerImage, content }) => (
                    <Card
                        key={id}
                        headerImage={headerImage}
                        size="small"
                        title={content}
                    />
                ))}
            </Deck>
        </div>
    );
};
