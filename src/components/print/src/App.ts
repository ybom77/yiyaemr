

import { ElementNode } from "lexical";

import type { NodeKey } from 'lexical';

class MyCustomNode extends ElementNode {
    __foo: string;
    constructor(foo: string, key?: NodeKey) {
        super(key);
        this.__foo = foo;
    }
    setFoo(foo: string) {
        const self = this.getWritable();
        self.__foo = foo;
    }
    getFoo(): string {
        const self = this.getLatest();
        return self.__foo;
    }
}