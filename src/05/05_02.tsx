import React from 'react';
import {ManType} from './05_1';

export const createMessages = (people: Array<ManType>) => {
    let callbackfn = (p: ManType) => `Hello, gay ${p.name}`;
    return people.map(callbackfn) // отдали колбэк-функцию внутрь мар
};
