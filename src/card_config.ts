import type {ReactNode} from 'react';

export enum CardType {
    DIV = "div",
    SPAN = "span",
    INPUT = "input",
    SCRIPT = "script",
}

export enum DescriptionType {
    NUMBER = "number",
    TAG = "tag",
}

export interface DescriptionPart {
    text: string;
    type: DescriptionType;
}

export type DescriptionContent = string | DescriptionPart;

export interface CardConfig {
    type: CardType;
    name: string;
    // Parts of the description, each with it's own theme, that are joined together to form the full description of the card.
    description: DescriptionContent[];
    flavorText?: string;
    useClosingTag?: boolean;
    visual?: ReactNode;
}