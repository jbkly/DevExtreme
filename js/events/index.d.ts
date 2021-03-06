import {
    DxElement
} from '../core/element';

export interface EventExtension { }
export interface EventType { }
/**
 * @docid
 * @type EventObject|jQuery.Event
 * @prevFileNamespace DevExpress.events
 */
export type DxEvent = {} extends EventType ? EventObject : EventType;

/** @public */
export interface InitializedEventInfo<T> {
    readonly component?: T;
    readonly element?: DxElement;
}

/** @public */
export interface EventInfo<T> {
    readonly component: T;
    readonly element: DxElement;
    readonly model?: any;
}

/** @public */
export interface NativeEventInfo<T> {
    readonly component: T;
    readonly element: DxElement;
    readonly model?: any;
    readonly event?: DxEvent;
}

/** @public */
export interface ChangedOptionInfo {
    readonly name: string;
    readonly fullName: string;
    readonly value?: any;
    readonly previousValue?: any;
}

export interface ItemInfo {
    readonly itemData?: any;
    readonly itemElement: DxElement;
    readonly itemIndex: number;
}

/** @public */
export interface Cancelable {
    cancel?: boolean;
}

/** @deprecated EventObject */
export type dxEvent = EventObject;

/**
 * @docid
 * @section commonObjectStructures
 * @prevFileNamespace DevExpress.events
 * @public
 */
export class EventObject {
    /**
     * @docid
     * @prevFileNamespace DevExpress.events
     * @public
     */
    currentTarget: Element;
    /**
     * @docid
     * @prevFileNamespace DevExpress.events
     * @public
     */
    data: any;
    /**
     * @docid
     * @prevFileNamespace DevExpress.events
     * @public
     */
    delegateTarget: Element;
    /**
     * @docid
     * @prevFileNamespace DevExpress.events
     * @public
     */
    target: Element;
    /**
     * @docid
     * @publicName isDefaultPrevented()
     * @return boolean
     * @prevFileNamespace DevExpress.events
     * @public
     */
    isDefaultPrevented(): boolean;
    /**
     * @docid
     * @publicName isImmediatePropagationStopped()
     * @return boolean
     * @prevFileNamespace DevExpress.events
     * @public
     */
    isImmediatePropagationStopped(): boolean;
    /**
     * @docid
     * @publicName isPropagationStopped()
     * @return boolean
     * @prevFileNamespace DevExpress.events
     * @public
     */
    isPropagationStopped(): boolean;
    /**
     * @docid
     * @publicName preventDefault()
     * @prevFileNamespace DevExpress.events
     * @public
     */
    preventDefault(): void;
    /**
     * @docid
     * @publicName stopImmediatePropagation()
     * @prevFileNamespace DevExpress.events
     * @public
     */
    stopImmediatePropagation(): void;
    /**
     * @docid
     * @publicName stopPropagation()
     * @prevFileNamespace DevExpress.events
     * @public
     */
    stopPropagation(): void;
}

/**
 * @docid
 * @type EventObject|jQuery.Event
 * @hidden
 * @prevFileNamespace DevExpress.events
 * @deprecated DxEvent
 */
export type event = DxEvent;

/**
 * @docid
 * @publicName handler(event, extraParameters)
 * @param1 event:DxEvent
 * @param2 extraParameters:object
 * @return boolean
 * @hidden
 * @prevFileNamespace DevExpress.events
 */
export function eventsHandler(event: DxEvent, extraParameters: any): boolean;

/**
 * @docid eventsMethods.off
 * @publicName off(element)
 * @namespace DevExpress.events
 * @param1 element:Element|Array<Element>
 * @module events
 * @export off
 * @prevFileNamespace DevExpress.events
 * @public
 */
export function off(element: Element | Array<Element>): void;

/**
 * @docid eventsMethods.off
 * @publicName off(element, eventName)
 * @namespace DevExpress.events
 * @param1 element:Element|Array<Element>
 * @param2 eventName:string
 * @module events
 * @export off
 * @prevFileNamespace DevExpress.events
 * @public
 */
export function off(element: Element | Array<Element>, eventName: string): void;

/**
 * @docid eventsMethods.off
 * @publicName off(element, eventName, handler)
 * @namespace DevExpress.events
 * @param1 element:Element|Array<Element>
 * @param2 eventName:string
 * @param3 handler:function
 * @module events
 * @export off
 * @prevFileNamespace DevExpress.events
 * @public
 */
export function off(element: Element | Array<Element>, eventName: string, handler: Function): void;

/**
 * @docid eventsMethods.off
 * @publicName off(element, eventName, selector)
 * @namespace DevExpress.events
 * @param1 element:Element|Array<Element>
 * @param2 eventName:string
 * @param3 selector:string
 * @module events
 * @export off
 * @prevFileNamespace DevExpress.events
 * @public
 */
export function off(element: Element | Array<Element>, eventName: string, selector: string): void;

/**
 * @docid eventsMethods.off
 * @publicName off(element, eventName, selector, handler)
 * @namespace DevExpress.events
 * @param1 element:Element|Array<Element>
 * @param2 eventName:string
 * @param3 selector:string
 * @param4 handler:function
 * @module events
 * @export off
 * @prevFileNamespace DevExpress.events
 * @public
 */
export function off(element: Element | Array<Element>, eventName: string, selector: string, handler: Function): void;

/**
 * @docid eventsMethods.on
 * @publicName on(element, eventName, data, handler)
 * @namespace DevExpress.events
 * @param1 element:Element|Array<Element>
 * @param2 eventName:string
 * @param3 data:object
 * @param4 handler:function
 * @module events
 * @export on
 * @prevFileNamespace DevExpress.events
 * @public
 */
export function on(element: Element | Array<Element>, eventName: string, data: any, handler: Function): void;

/**
 * @docid eventsMethods.on
 * @publicName on(element, eventName, handler)
 * @namespace DevExpress.events
 * @param1 element:Element|Array<Element>
 * @param2 eventName:string
 * @param3 handler:function
 * @module events
 * @export on
 * @prevFileNamespace DevExpress.events
 * @public
 */
export function on(element: Element | Array<Element>, eventName: string, handler: Function): void;

/**
 * @docid eventsMethods.on
 * @publicName on(element, eventName, selector, data, handler)
 * @namespace DevExpress.events
 * @param1 element:Element|Array<Element>
 * @param2 eventName:string
 * @param3 selector:string
 * @param4 data:object
 * @param5 handler:function
 * @module events
 * @export on
 * @prevFileNamespace DevExpress.events
 * @public
 */
export function on(element: Element | Array<Element>, eventName: string, selector: string, data: any, handler: Function): void;

/**
 * @docid eventsMethods.on
 * @publicName on(element, eventName, selector, handler)
 * @namespace DevExpress.events
 * @param1 element:Element|Array<Element>
 * @param2 eventName:string
 * @param3 selector:string
 * @param4 handler:function
 * @module events
 * @export on
 * @prevFileNamespace DevExpress.events
 * @public
 */
export function on(element: Element | Array<Element>, eventName: string, selector: string, handler: Function): void;

/**
 * @docid eventsMethods.one
 * @publicName one(element, eventName, data, handler)
 * @namespace DevExpress.events
 * @param1 element:Element|Array<Element>
 * @param2 eventName:string
 * @param3 data:object
 * @param4 handler:function
 * @module events
 * @export one
 * @prevFileNamespace DevExpress.events
 * @public
 */
export function one(element: Element | Array<Element>, eventName: string, data: any, handler: Function): void;

/**
 * @docid eventsMethods.one
 * @publicName one(element, eventName, handler)
 * @namespace DevExpress.events
 * @param1 element:Element|Array<Element>
 * @param2 eventName:string
 * @param3 handler:function
 * @module events
 * @export one
 * @prevFileNamespace DevExpress.events
 * @public
 */
export function one(element: Element | Array<Element>, eventName: string, handler: Function): void;

/**
 * @docid eventsMethods.one
 * @publicName one(element, eventName, selector, data, handler)
 * @namespace DevExpress.events
 * @param1 element:Element|Array<Element>
 * @param2 eventName:string
 * @param3 selector:string
 * @param4 data:object
 * @param5 handler:function
 * @module events
 * @export one
 * @prevFileNamespace DevExpress.events
 * @public
 */
export function one(element: Element | Array<Element>, eventName: string, selector: string, data: any, handler: Function): void;

/**
 * @docid eventsMethods.one
 * @publicName one(element, eventName, selector, handler)
 * @namespace DevExpress.events
 * @param1 element:Element|Array<Element>
 * @param2 eventName:string
 * @param3 selector:string
 * @param4 handler:function
 * @module events
 * @export one
 * @prevFileNamespace DevExpress.events
 * @public
 */
export function one(element: Element | Array<Element>, eventName: string, selector: string, handler: Function): void;

/**
 * @docid eventsMethods.trigger
 * @publicName trigger(element, event)
 * @namespace DevExpress.events
 * @param1 element:Element|Array<Element>
 * @param2 event:string|event
 * @module events
 * @export trigger
 * @prevFileNamespace DevExpress.events
 * @public
 */
export function trigger(element: Element | Array<Element>, event: string | DxEvent): void;

/**
 * @docid eventsMethods.trigger
 * @publicName trigger(element, event, extraParameters)
 * @namespace DevExpress.events
 * @param1 element:Element|Array<Element>
 * @param2 event:string|event
 * @param3 extraParameters:object
 * @module events
 * @export trigger
 * @prevFileNamespace DevExpress.events
 * @public
 */
export function trigger(element: Element | Array<Element>, event: string | DxEvent, extraParameters: any): void;

/**
 * @docid eventsMethods.triggerHandler
 * @publicName triggerHandler(element, event)
 * @namespace DevExpress.events
 * @param1 element:Element|Array<Element>
 * @param2 event:string|event
 * @module events
 * @export triggerHandler
 * @hidden
 * @prevFileNamespace DevExpress.events
 */
export function triggerHandler(element: Element | Array<Element>, event: string | DxEvent): void;

/**
 * @docid eventsMethods.triggerHandler
 * @publicName triggerHandler(element, event, extraParameters)
 * @namespace DevExpress.events
 * @param1 element:Element|Array<Element>
 * @param2 event:string|event
 * @param3 extraParameters:object
 * @module events
 * @export triggerHandler
 * @hidden
 * @prevFileNamespace DevExpress.events
 */
export function triggerHandler(element: Element | Array<Element>, event: string | DxEvent, extraParameters: any): void;
