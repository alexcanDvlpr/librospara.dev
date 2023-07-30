import { CSSProperties } from 'react';

declare module 'react' {
    interface CSSProperties {
        'view-transition-name'?: string;
    }
}
