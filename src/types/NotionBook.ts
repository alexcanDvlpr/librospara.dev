export interface NotionBook {
    object: string;
    id: string;
    createdTime: Date;
    lastEditedTime: Date;
    createdBy: TedBy;
    lastEditedBy: TedBy;
    cover: null;
    icon: null;
    parent: Parent;
    archived: boolean;
    properties: Properties;
    url: string;
    publicURL: null;
}

export interface TedBy {
    object: string;
    id: string;
}

export interface Parent {
    type: string;
    databaseID: string;
}

export interface Properties {
    description: Author;
    author: Author;
    isbn: Author;
    portrait: AmazonAffiliate;
    amazonAffiliate: AmazonAffiliate;
    dificult: Dificult;
    name: Name;
}

export interface AmazonAffiliate {
    id: string;
    type: string;
    url: null | string;
}

export interface Author {
    id: string;
    type: string;
    richText: Title[];
}

export interface Title {
    type: string;
    text: Text;
    annotations: Annotations;
    plainText: string;
    href: null;
}

export interface Annotations {
    bold: boolean;
    italic: boolean;
    strikethrough: boolean;
    underline: boolean;
    code: boolean;
    color: string;
}

export interface Text {
    content: string;
    link: null;
}

export interface Dificult {
    id: string;
    type: string;
    select: Select;
}

export interface Select {
    id: string;
    name: string;
    color: string;
}

export interface Name {
    id: string;
    type: string;
    title: Title[];
}
