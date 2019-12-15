import { styled } from 'baseui';

import { Content } from './content';
import { HeaderMovie } from './header-movie';
import { HeaderTv } from './header-tv';
import { Section } from './section';
import { Cast } from './cast';
import { Crew } from './crew';
import { Similar } from './similar';
import { Heading, Paragraph } from './typography';

export const Page = styled('div', {});

Page.Content = Content;
Page.HeaderMovie = HeaderMovie;
Page.HeaderTv = HeaderTv;
Page.Heading = Heading;
Page.Paragraph = Paragraph;
Page.Section = Section;
Page.Cast = Cast;
Page.Crew = Crew;
Page.Similar = Similar;
