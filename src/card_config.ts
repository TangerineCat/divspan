import type {ReactNode} from 'react';

export enum CardType {
    DIV = "div",
    SPAN = "span",
    INPUT = "input",
    SCRIPT = "script",
    DIV_COVER = "divCover",
    SPAN_COVER = "spanCover",
}

export enum DescriptionType {
    NUMBER = "number",
    TAG = "tag",
    KEYWORD = "keyword",
    SCRIPT = "script",
}

export interface DescriptionPart {
    text: string;
    type: DescriptionType;
}

export type DescriptionContent = string | number | DescriptionPart;

export interface CardConfig {
    type: CardType;
    name: string;
    // Parts of the description, each with it's own theme, that are joined together to form the full description of the card.
    description: DescriptionContent[];
    flavorText?: string;
    useClosingTag?: boolean;
    visual?: ReactNode;
    // Number of times the card should be displayed
    count?: number;
    // The number of cards that are the same tag. Overrides count if set.
    countDisplay?: number;
    // Whether or not a span is a text span.
    text?: boolean;
}