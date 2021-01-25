(function (factory) {
    typeof define === 'function' && define.amd ? define(factory) :
    factory();
}((function () { 'use strict';

    /*
     * Copyright (c) 2020, salesforce.com, inc.
     * All rights reserved.
     * SPDX-License-Identifier: MIT
     * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
     */
    const { getOwnPropertyDescriptor } = Object;
    const { DOCUMENT_POSITION_CONTAINED_BY, DOCUMENT_POSITION_CONTAINS, DOCUMENT_POSITION_PRECEDING, DOCUMENT_POSITION_FOLLOWING, ELEMENT_NODE, TEXT_NODE, CDATA_SECTION_NODE, PROCESSING_INSTRUCTION_NODE, COMMENT_NODE, DOCUMENT_FRAGMENT_NODE, } = Node;
    const { appendChild, cloneNode, compareDocumentPosition, insertBefore, removeChild, replaceChild, hasChildNodes, getRootNode, } = Node.prototype;
    const firstChildGetter = getOwnPropertyDescriptor(Node.prototype, 'firstChild').get;
    const lastChildGetter = getOwnPropertyDescriptor(Node.prototype, 'lastChild').get;
    const textContentGetter = getOwnPropertyDescriptor(Node.prototype, 'textContent').get;
    const parentNodeGetter = getOwnPropertyDescriptor(Node.prototype, 'parentNode').get;
    const ownerDocumentGetter = getOwnPropertyDescriptor(Node.prototype, 'ownerDocument').get;
    const parentElementGetter = getOwnPropertyDescriptor(Node.prototype, 'parentElement').get;
    const textContextGetter = getOwnPropertyDescriptor(Node.prototype, 'textContent').get;
    const childNodesGetter = getOwnPropertyDescriptor(Node.prototype, 'childNodes').get;
    const isConnected = getOwnPropertyDescriptor(Node.prototype, 'isConnected').get;

    /*
     * Copyright (c) 2020, salesforce.com, inc.
     * All rights reserved.
     * SPDX-License-Identifier: MIT
     * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
     */
    const { getOwnPropertyDescriptor: getOwnPropertyDescriptor$1, hasOwnProperty } = Object;
    const { addEventListener, getAttribute, getBoundingClientRect, getElementsByTagName, getElementsByTagNameNS, getElementsByClassName, matches, closest, hasAttribute, querySelector, querySelectorAll, removeAttribute, removeEventListener, setAttribute, } = Element.prototype;
    const attachShadow = hasOwnProperty.call(Element.prototype, 'attachShadow')
        ? Element.prototype.attachShadow
        : () => {
            throw new TypeError('attachShadow() is not supported in current browser. Load the @lwc/synthetic-shadow polyfill and use Lightning Web Components');
        };
    const childElementCountGetter = getOwnPropertyDescriptor$1(Element.prototype, 'childElementCount').get;
    const firstElementChildGetter = getOwnPropertyDescriptor$1(Element.prototype, 'firstElementChild').get;
    const lastElementChildGetter = getOwnPropertyDescriptor$1(Element.prototype, 'lastElementChild').get;
    const innerHTMLDescriptor = getOwnPropertyDescriptor$1(Element.prototype, 'innerHTML');
    const innerHTMLGetter = innerHTMLDescriptor.get;
    const innerHTMLSetter = innerHTMLDescriptor.set;
    const outerHTMLDescriptor = getOwnPropertyDescriptor$1(Element.prototype, 'outerHTML');
    const outerHTMLGetter = outerHTMLDescriptor.get;
    const outerHTMLSetter = outerHTMLDescriptor.set;
    const tagNameGetter = getOwnPropertyDescriptor$1(Element.prototype, 'tagName').get;
    const tabIndexDescriptor = getOwnPropertyDescriptor$1(HTMLElement.prototype, 'tabIndex');
    const tabIndexGetter = tabIndexDescriptor.get;
    const tabIndexSetter = tabIndexDescriptor.set;
    const childrenGetter = getOwnPropertyDescriptor$1(Element.prototype, 'children').get;
    const shadowRootGetter = getOwnPropertyDescriptor$1(Element.prototype, 'shadowRoot').get;

    /*
     * Copyright (c) 2020, salesforce.com, inc.
     * All rights reserved.
     * SPDX-License-Identifier: MIT
     * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
     */
    const { getOwnPropertyDescriptor: getOwnPropertyDescriptor$2 } = Object;
    const DocumentPrototypeActiveElement = getOwnPropertyDescriptor$2(Document.prototype, 'activeElement').get;
    // defaultView can be null when a document has no browsing context. For example, the owner document
    // of a node in a template doesn't have a default view: https://jsfiddle.net/hv9z0q5a/
    const defaultViewGetter = getOwnPropertyDescriptor$2(Document.prototype, 'defaultView').get;
    const { createComment, querySelectorAll: querySelectorAll$1, getElementById, getElementsByName, getElementsByClassName: getElementsByClassName$1, getElementsByTagName: getElementsByTagName$1, getElementsByTagNameNS: getElementsByTagNameNS$1, } = Document.prototype;

    const { assign, create: ObjectCreate, defineProperty: ObjectDefineProperty, getOwnPropertyDescriptors, freeze, seal, isSealed, isFrozen, } = Object;
    const { apply, construct, getPrototypeOf: ReflectGetPrototypeOf, setPrototypeOf: ReflectSetPrototypeOf, defineProperty: ReflectDefineProperty, isExtensible: ReflectIsExtensible, getOwnPropertyDescriptor: ReflectGetOwnPropertyDescriptor, ownKeys, preventExtensions: ReflectPreventExtensions, deleteProperty, has: ReflectHas, get: ReflectGet, set: ReflectSet, } = Reflect;
    const ErrorCreate = unconstruct(Error);
    const SetCreate = unconstruct(Set);
    const SetHas = unapply(Set.prototype.has);
    const WeakMapCreate = unconstruct(WeakMap);
    const WeakMapGet = unapply(WeakMap.prototype.get);
    const WeakMapSet = unapply(WeakMap.prototype.set);
    const hasOwnProperty$1 = unapply(Object.prototype.hasOwnProperty);
    const map = unapply(Array.prototype.map);
    function unapply(func) {
        return (thisArg, ...args) => apply(func, thisArg, args);
    }
    function unconstruct(func) {
        return (...args) => construct(func, args);
    }
    function isUndefined(obj) {
        return obj === undefined;
    }
    function isNull(obj) {
        return obj === null;
    }
    function isNullOrUndefined(obj) {
        return isNull(obj) || isUndefined(obj);
    }
    function isTrue(obj) {
        return obj === true;
    }
    function isFunction(obj) {
        return typeof obj === 'function';
    }
    const emptyArray = [];

    const serializedRedEnvSourceText = (function redEnvFactory(blueEnv, hooks) {
        const LockerLiveValueMarkerSymbol = Symbol.for('@@lockerLiveValue');
        const { blueMap, distortionMap } = blueEnv;
        const { apply: blueApplyHook, construct: blueConstructHook } = hooks;
        const { apply, construct, isExtensible, getOwnPropertyDescriptor, setPrototypeOf, getPrototypeOf, preventExtensions, deleteProperty, ownKeys, defineProperty, get: ReflectGet, set: ReflectSet, has: ReflectHas, } = Reflect;
        const { assign, create, getOwnPropertyDescriptors, freeze, seal, isSealed, isFrozen, hasOwnProperty, } = Object;
        const ProxyRevocable = Proxy.revocable;
        const { isArray: isArrayOrNotOrThrowForRevoked } = Array;
        const noop = () => undefined;
        const emptyArray = [];
        const map = unapply(Array.prototype.map);
        const WeakMapGet = unapply(WeakMap.prototype.get);
        const WeakMapHas = unapply(WeakMap.prototype.has);
        const ErrorCreate = unconstruct(Error);
        const hasOwnPropertyCall = unapply(hasOwnProperty);
        function unapply(func) {
            return (thisArg, ...args) => apply(func, thisArg, args);
        }
        function unconstruct(func) {
            return (...args) => construct(func, args);
        }
        function isUndefined(obj) {
            return obj === undefined;
        }
        function isNull(obj) {
            return obj === null;
        }
        function isFunction(obj) {
            return typeof obj === 'function';
        }
        function isNullOrUndefined(obj) {
            return isNull(obj) || isUndefined(obj);
        }
        function isMarkAsDynamic(blue) {
            let hasDynamicMark = false;
            try {
                hasDynamicMark = hasOwnPropertyCall(blue, LockerLiveValueMarkerSymbol);
            }
            catch (_a) {
                // try-catching this because blue could be a proxy that is revoked
                // or throws from the `has` trap.
            }
            return hasDynamicMark;
        }
        function getRedValue(blue) {
            if (isNullOrUndefined(blue)) {
                return blue;
            }
            // NOTE: internationally checking for typeof 'undefined' for the case of
            // `typeof document.all === 'undefined'`, which is an exotic object with
            // a bizarre behavior described here:
            // * https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
            // This check covers that case, but doesn't affect other undefined values
            // because those are covered by the previous condition anyways.
            if (typeof blue === 'undefined') {
                // @ts-ignore blue at this point is type T because of the previous condition
                return undefined;
            }
            if (typeof blue === 'object' || typeof blue === 'function') {
                const blueOriginalOrDistortedValue = getDistortedValue(blue);
                const red = WeakMapGet(blueMap, blueOriginalOrDistortedValue);
                if (!isUndefined(red)) {
                    return red;
                }
                return createRedProxy(blueOriginalOrDistortedValue);
            }
            return blue;
        }
        function getStaticBlueArray(redArray) {
            return map(redArray, blueEnv.getBlueValue);
        }
        function getDistortedValue(target) {
            if (!WeakMapHas(distortionMap, target)) {
                return target;
            }
            // if a distortion entry is found, it must be a valid proxy target
            const distortedTarget = WeakMapGet(distortionMap, target);
            return distortedTarget;
        }
        function renameFunction(blueProvider, receiver) {
            try {
                // a revoked proxy will break the membrane when reading the function name
                const nameDescriptor = getOwnPropertyDescriptor(blueProvider, 'name');
                defineProperty(receiver, 'name', nameDescriptor);
            }
            catch (_a) {
                // intentionally swallowing the error because this method is just extracting the function
                // in a way that it should always succeed except for the cases in which the provider is a proxy
                // that is either revoked or has some logic to prevent reading the name property descriptor.
            }
        }
        function installDescriptorIntoShadowTarget(shadowTarget, key, originalDescriptor) {
            const shadowTargetDescriptor = getOwnPropertyDescriptor(shadowTarget, key);
            if (!isUndefined(shadowTargetDescriptor)) {
                if (hasOwnPropertyCall(shadowTargetDescriptor, 'configurable') &&
                    shadowTargetDescriptor.configurable === true) {
                    defineProperty(shadowTarget, key, originalDescriptor);
                }
                else if (hasOwnPropertyCall(shadowTargetDescriptor, 'writable') &&
                    shadowTargetDescriptor.writable === true) {
                    // just in case
                    shadowTarget[key] = originalDescriptor.value;
                }
            }
            else {
                defineProperty(shadowTarget, key, originalDescriptor);
            }
        }
        function getRedDescriptor(blueDescriptor) {
            const redDescriptor = assign(create(null), blueDescriptor);
            const { value: blueValue, get: blueGet, set: blueSet } = redDescriptor;
            if ('writable' in redDescriptor) {
                // we are dealing with a value descriptor
                redDescriptor.value = getRedValue(blueValue);
            }
            else {
                // we are dealing with accessors
                if (isFunction(blueSet)) {
                    redDescriptor.set = getRedValue(blueSet);
                }
                if (isFunction(blueGet)) {
                    redDescriptor.get = getRedValue(blueGet);
                }
            }
            return redDescriptor;
        }
        function copyRedOwnDescriptors(shadowTarget, blueDescriptors) {
            const keys = ownKeys(blueDescriptors);
            for (let i = 0, len = keys.length; i < len; i += 1) {
                const key = keys[i];
                // avoid poisoning by checking own properties from descriptors
                if (hasOwnPropertyCall(blueDescriptors, key)) {
                    // @ts-ignore PropertyDescriptorMap def defines properties as being only of string type
                    const originalDescriptor = getRedDescriptor(blueDescriptors[key]);
                    installDescriptorIntoShadowTarget(shadowTarget, key, originalDescriptor);
                }
            }
        }
        function copyBlueDescriptorIntoShadowTarget(shadowTarget, originalTarget, key) {
            // Note: a property might get defined multiple times in the shadowTarget
            //       if the user calls defineProperty or similar mechanism multiple times
            //       but it will always be compatible with the previous descriptor
            //       to preserve the object invariants, which makes these lines safe.
            const normalizedBlueDescriptor = getOwnPropertyDescriptor(originalTarget, key);
            if (!isUndefined(normalizedBlueDescriptor)) {
                const redDesc = getRedDescriptor(normalizedBlueDescriptor);
                defineProperty(shadowTarget, key, redDesc);
            }
        }
        function lockShadowTarget(shadowTarget, originalTarget) {
            // copying all own properties into the shadowTarget
            const targetKeys = ownKeys(originalTarget);
            for (let i = 0, len = targetKeys.length; i < len; i += 1) {
                copyBlueDescriptorIntoShadowTarget(shadowTarget, originalTarget, targetKeys[i]);
            }
            // setting up __proto__ of the shadowTarget
            setPrototypeOf(shadowTarget, getRedValue(getPrototypeOf(originalTarget)));
            // locking down the extensibility of shadowTarget
            preventExtensions(shadowTarget);
        }
        function getTargetMeta(target) {
            const meta = create(null);
            try {
                // a revoked proxy will break the membrane when reading the meta
                meta.proto = getPrototypeOf(target);
                meta.descriptors = getOwnPropertyDescriptors(target);
                if (isFrozen(target)) {
                    meta.isFrozen = meta.isSealed = meta.isExtensible = true;
                }
                else if (isSealed(target)) {
                    meta.isSealed = meta.isExtensible = true;
                }
                else if (isExtensible(target)) {
                    meta.isExtensible = true;
                }
                // if the target was revoked or become revoked during the extraction
                // of the metadata, we mark it as broken in the catch.
                isArrayOrNotOrThrowForRevoked(target);
            }
            catch (_ignored) {
                // intentionally swallowing the error because this method is just extracting the metadata
                // in a way that it should always succeed except for the cases in which the target is a proxy
                // that is either revoked or has some logic that is incompatible with the membrane, in which
                // case we will just create the proxy for the membrane but revoke it right after to prevent
                // any leakage.
                meta.proto = null;
                meta.descriptors = {};
                meta.isBroken = true;
            }
            return meta;
        }
        function getBluePartialDescriptor(redPartialDesc) {
            const bluePartialDesc = assign(create(null), redPartialDesc);
            if ('value' in bluePartialDesc) {
                // we are dealing with a value descriptor
                bluePartialDesc.value = blueEnv.getBlueValue(bluePartialDesc.value);
            }
            if ('set' in bluePartialDesc) {
                // we are dealing with accessors
                bluePartialDesc.set = blueEnv.getBlueValue(bluePartialDesc.set);
            }
            if ('get' in bluePartialDesc) {
                bluePartialDesc.get = blueEnv.getBlueValue(bluePartialDesc.get);
            }
            return bluePartialDesc;
        }
        // invoking traps
        function redProxyApplyTrap(shadowTarget, redThisArg, redArgArray) {
            const { target: blueTarget } = this;
            let blue;
            try {
                const blueThisArg = blueEnv.getBlueValue(redThisArg);
                const blueArgArray = getStaticBlueArray(redArgArray);
                blue = blueApplyHook(blueTarget, blueThisArg, blueArgArray);
            }
            catch (e) {
                // This error occurred when the sandbox attempts to call a
                // function from the blue realm. By throwing a new red error,
                // we eliminates the stack information from the blue realm as a consequence.
                throw getRedValue(e);
            }
            return getRedValue(blue);
        }
        function redProxyConstructTrap(shadowTarget, redArgArray, redNewTarget) {
            const { target: BlueCtor } = this;
            if (isUndefined(redNewTarget)) {
                throw TypeError();
            }
            let blue;
            try {
                const blueNewTarget = blueEnv.getBlueValue(redNewTarget);
                const blueArgArray = getStaticBlueArray(redArgArray);
                blue = blueConstructHook(BlueCtor, blueArgArray, blueNewTarget);
            }
            catch (e) {
                // This error occurred when the sandbox attempts to new a
                // constructor from the blue realm. By throwing a new red error,
                // we eliminates the stack information from the blue realm as a consequence.
                throw getRedValue(e);
            }
            return getRedValue(blue);
        }
        // reading traps
        /**
         * This trap cannot just use `Reflect.get` directly on the `target` because
         * the red object graph might have mutations that are only visible on the red side,
         * which means looking into `target` directly is not viable. Instead, we need to
         * implement a more crafty solution that looks into target's own properties, or
         * in the red proto chain when needed.
         */
        function redProxyDynamicGetTrap(shadowTarget, key, receiver) {
            /**
             * If the target has a non-configurable own data descriptor that was observed by the red side,
             * and therefore installed in the shadowTarget, we might get into a situation where a writable,
             * non-configurable value in the target is out of sync with the shadowTarget's value for the same
             * key. This is fine because this does not violate the object invariants, and even though they
             * are out of sync, the original descriptor can only change to something that is compatible with
             * what was installed in shadowTarget, and in order to observe that, the getOwnPropertyDescriptor
             * trap must be used, which will take care of synchronizing them again.
             */
            const { target } = this;
            const blueDescriptor = getOwnPropertyDescriptor(target, key);
            if (isUndefined(blueDescriptor)) {
                // looking in the red proto chain in case the red proto chain has being mutated
                const redProto = getRedValue(getPrototypeOf(target));
                if (isNull(redProto)) {
                    return undefined;
                }
                return ReflectGet(redProto, key, receiver);
            }
            if (hasOwnPropertyCall(blueDescriptor, 'get')) {
                // Knowing that it is an own getter, we can't still not use Reflect.get
                // because there might be a distortion for such getter, in which case we
                // must get the red getter, and call it.
                return apply(getRedValue(blueDescriptor.get), receiver, emptyArray);
            }
            // if it is not an accessor property, is either a setter only accessor
            // or a data property, in which case we could return undefined or the red value
            return getRedValue(blueDescriptor.value);
        }
        /**
         * This trap cannot just use `Reflect.has` or the `in` operator directly because
         * the red object graph might have mutations that are only visible on the red side,
         * which means looking into `target` directly is not viable. Instead, we need to
         * implement a more crafty solution that looks into target's own properties, or
         * in the red proto chain when needed.
         */
        function redProxyDynamicHasTrap(shadowTarget, key) {
            const { target } = this;
            if (hasOwnPropertyCall(target, key)) {
                return true;
            }
            // looking in the red proto chain in case the red proto chain has being mutated
            const redProto = getRedValue(getPrototypeOf(target));
            return !isNull(redProto) && ReflectHas(redProto, key);
        }
        function redProxyDynamicOwnKeysTrap(shadowTarget) {
            return ownKeys(this.target);
        }
        function redProxyDynamicIsExtensibleTrap(shadowTarget) {
            // optimization to avoid attempting to lock down the shadowTarget multiple times
            if (!isExtensible(shadowTarget)) {
                return false; // was already locked down
            }
            const { target } = this;
            if (!isExtensible(target)) {
                lockShadowTarget(shadowTarget, target);
                return false;
            }
            return true;
        }
        function redProxyDynamicGetOwnPropertyDescriptorTrap(shadowTarget, key) {
            const { target } = this;
            const blueDesc = getOwnPropertyDescriptor(target, key);
            if (isUndefined(blueDesc)) {
                return blueDesc;
            }
            if (blueDesc.configurable === false) {
                // updating the descriptor to non-configurable on the shadow
                copyBlueDescriptorIntoShadowTarget(shadowTarget, target, key);
            }
            return getRedDescriptor(blueDesc);
        }
        function redProxyDynamicGetPrototypeOfTrap(shadowTarget) {
            return getRedValue(getPrototypeOf(this.target));
        }
        // writing traps
        function redProxyDynamicSetPrototypeOfTrap(shadowTarget, prototype) {
            return setPrototypeOf(this.target, blueEnv.getBlueValue(prototype));
        }
        /**
         * This trap cannot just use `Reflect.set` directly on the `target` because
         * the red object graph might have mutations that are only visible on the red side,
         * which means looking into `target` directly is not viable. Instead, we need to
         * implement a more crafty solution that looks into target's own properties, or
         * in the red proto chain when needed.
         */
        function redProxyDynamicSetTrap(shadowTarget, key, value, receiver) {
            const { target } = this;
            const blueDescriptor = getOwnPropertyDescriptor(target, key);
            if (isUndefined(blueDescriptor)) {
                // looking in the red proto chain in case the red proto chain has being mutated
                const redProto = getRedValue(getPrototypeOf(target));
                return ReflectSet(redProto, key, value, receiver);
            }
            if (hasOwnPropertyCall(blueDescriptor, 'set')) {
                // even though the setter function exists, we can't use Reflect.set because there might be
                // a distortion for that setter function, in which case we must resolve the red setter
                // and call it instead.
                apply(getRedValue(blueDescriptor.set), receiver, [value]);
                return true; // if there is a callable setter, it either throw or we can assume the value was set
            }
            // if it is not an accessor property, is either a getter only accessor
            // or a data property, in which case we use Reflect.set to set the value,
            // and no receiver is needed since it will simply set the data property or nothing
            return ReflectSet(target, key, blueEnv.getBlueValue(value));
        }
        function redProxyDynamicDeletePropertyTrap(shadowTarget, key) {
            return deleteProperty(this.target, key);
        }
        function redProxyDynamicPreventExtensionsTrap(shadowTarget) {
            const { target } = this;
            if (isExtensible(shadowTarget)) {
                if (!preventExtensions(target)) {
                    // if the target is a proxy manually created in the sandbox, it might reject
                    // the preventExtension call, in which case we should not attempt to lock down
                    // the shadow target.
                    if (!isExtensible(target)) {
                        lockShadowTarget(shadowTarget, target);
                    }
                    return false;
                }
                lockShadowTarget(shadowTarget, target);
            }
            return true;
        }
        function redProxyDynamicDefinePropertyTrap(shadowTarget, key, redPartialDesc) {
            const { target } = this;
            const blueDesc = getBluePartialDescriptor(redPartialDesc);
            if (defineProperty(target, key, blueDesc)) {
                // intentionally testing against true since it could be undefined as well
                if (blueDesc.configurable === false) {
                    copyBlueDescriptorIntoShadowTarget(shadowTarget, target, key);
                }
            }
            return true;
        }
        // pending traps
        function redProxyPendingSetPrototypeOfTrap(shadowTarget, prototype) {
            makeRedProxyUnambiguous(this, shadowTarget);
            return this.setPrototypeOf(shadowTarget, prototype);
        }
        function redProxyPendingSetTrap(shadowTarget, key, value, receiver) {
            makeRedProxyUnambiguous(this, shadowTarget);
            return this.set(shadowTarget, key, value, receiver);
        }
        function redProxyPendingDeletePropertyTrap(shadowTarget, key) {
            makeRedProxyUnambiguous(this, shadowTarget);
            return this.deleteProperty(shadowTarget, key);
        }
        function redProxyPendingPreventExtensionsTrap(shadowTarget) {
            makeRedProxyUnambiguous(this, shadowTarget);
            return this.preventExtensions(shadowTarget);
        }
        function redProxyPendingDefinePropertyTrap(shadowTarget, key, redPartialDesc) {
            makeRedProxyUnambiguous(this, shadowTarget);
            return this.defineProperty(shadowTarget, key, redPartialDesc);
        }
        function makeRedProxyDynamic(proxyHandler, shadowTarget) {
            // replacing pending traps with dynamic traps that can work with the target
            // without taking snapshots.
            proxyHandler.set = redProxyDynamicSetTrap;
            proxyHandler.deleteProperty = redProxyDynamicDeletePropertyTrap;
            proxyHandler.setPrototypeOf = redProxyDynamicSetPrototypeOfTrap;
            proxyHandler.preventExtensions = redProxyDynamicPreventExtensionsTrap;
            proxyHandler.defineProperty = redProxyDynamicDefinePropertyTrap;
        }
        function makeRedProxyStatic(proxyHandler, shadowTarget) {
            const meta = getTargetMeta(proxyHandler.target);
            const { proto: blueProto, isBroken } = meta;
            if (isBroken) {
                // the target is a revoked proxy, in which case we revoke
                // this proxy as well.
                proxyHandler.revoke();
            }
            // adjusting the proto chain of the shadowTarget
            const redProto = getRedValue(blueProto);
            setPrototypeOf(shadowTarget, redProto);
            // defining own descriptors
            copyRedOwnDescriptors(shadowTarget, meta.descriptors);
            // preserving the semantics of the object
            if (meta.isFrozen) {
                freeze(shadowTarget);
            }
            else if (meta.isSealed) {
                seal(shadowTarget);
            }
            else if (!meta.isExtensible) {
                preventExtensions(shadowTarget);
            }
            // resetting all traps except apply and construct for static proxies since the
            // proxy target is the shadow target and all operations are going to be applied
            // to it rather than the real target.
            delete proxyHandler.getOwnPropertyDescriptor;
            delete proxyHandler.getPrototypeOf;
            delete proxyHandler.get;
            delete proxyHandler.has;
            delete proxyHandler.ownKeys;
            delete proxyHandler.isExtensible;
            // those used by pending traps needs to exist so the pending trap can call them
            proxyHandler.set = ReflectSet;
            proxyHandler.defineProperty = defineProperty;
            proxyHandler.deleteProperty = deleteProperty;
            proxyHandler.setPrototypeOf = setPrototypeOf;
            proxyHandler.preventExtensions = preventExtensions;
            // future optimization: hoping that proxies with frozen handlers can be faster
            freeze(proxyHandler);
        }
        function makeRedProxyUnambiguous(proxyHandler, shadowTarget) {
            if (isMarkAsDynamic(proxyHandler.target)) {
                // when the target has the a descriptor for the magic symbol, use the Dynamic traps
                makeRedProxyDynamic(proxyHandler);
            }
            else {
                makeRedProxyStatic(proxyHandler, shadowTarget);
            }
            // future optimization: hoping that proxies with frozen handlers can be faster
            freeze(proxyHandler);
        }
        /**
         * RedProxyHandler class is used for any object, array or function coming from
         * the blue realm. The semantics of this proxy handler are the following:
         *  - the proxy is live (dynamic) after creation
         *  = once the first mutation trap is called, the handler will be make unambiguous
         *  - if the target has the magical symbol the proxy will remain as dynamic forever.
         *  = otherwise proxy will become static by taking a snapshot of the target
         */
        class RedProxyHandler {
            constructor(blue) {
                this.apply = redProxyApplyTrap;
                this.construct = redProxyConstructTrap;
                this.get = redProxyDynamicGetTrap;
                this.has = redProxyDynamicHasTrap;
                this.ownKeys = redProxyDynamicOwnKeysTrap;
                this.isExtensible = redProxyDynamicIsExtensibleTrap;
                this.getOwnPropertyDescriptor = redProxyDynamicGetOwnPropertyDescriptorTrap;
                this.getPrototypeOf = redProxyDynamicGetPrototypeOfTrap;
                this.setPrototypeOf = redProxyPendingSetPrototypeOfTrap;
                this.set = redProxyPendingSetTrap;
                this.deleteProperty = redProxyPendingDeletePropertyTrap;
                this.preventExtensions = redProxyPendingPreventExtensionsTrap;
                this.defineProperty = redProxyPendingDefinePropertyTrap;
                // revoke is meant to be set right after construction, but
                // typescript is forcing the initialization :(
                this.revoke = noop;
                this.target = blue;
            }
        }
        setPrototypeOf(RedProxyHandler.prototype, null);
        function createRedShadowTarget(blue) {
            let shadowTarget;
            if (isFunction(blue)) {
                // this is never invoked just needed to anchor the realm for errors
                try {
                    shadowTarget = 'prototype' in blue ? function () { } : () => { };
                }
                catch (_a) {
                    // target is either a revoked proxy, or a proxy that throws on the
                    // `has` trap, in which case going with a strict mode function seems
                    // appropriate.
                    shadowTarget = function () { };
                }
                renameFunction(blue, shadowTarget);
            }
            else {
                let isBlueArray = false;
                try {
                    // try/catch in case Array.isArray throws when target is a revoked proxy
                    isBlueArray = isArrayOrNotOrThrowForRevoked(blue);
                }
                catch (_b) {
                    // target is a revoked proxy, ignoring...
                }
                // target is array or object
                shadowTarget = isBlueArray ? [] : {};
            }
            return shadowTarget;
        }
        function createRedProxy(blueOriginalOrDistortedValue) {
            const shadowTarget = createRedShadowTarget(blueOriginalOrDistortedValue);
            const proxyHandler = new RedProxyHandler(blueOriginalOrDistortedValue);
            const { proxy, revoke } = ProxyRevocable(shadowTarget, proxyHandler);
            proxyHandler.revoke = revoke;
            try {
                // intentionally storing the distorted blue object, this way, if a distortion
                // exists, and the sandbox passed back its reference to blue, it gets mapped
                // to the distortion rather than the original. This protects against tricking
                // the blue side to use the original value (unwrapping the provided proxy ref)
                // while the blue side will mistakenly evaluate the original function.
                blueEnv.setRefMapEntries(proxy, blueOriginalOrDistortedValue);
            }
            catch (e) {
                // This is a very edge case, it could happen if someone is very
                // crafty, but basically can cause an overflow when invoking the
                // setRefMapEntries() method, which will report an error from
                // the blue realm.
                throw ErrorCreate('Internal Error');
            }
            try {
                isArrayOrNotOrThrowForRevoked(blueOriginalOrDistortedValue);
            }
            catch (_a) {
                // detecting revoked targets, it can also be detected later on
                // during mutations, in which case we will also revoke
                revoke();
            }
            return proxy;
        }
        return getRedValue;
    })
        .toString()
        // We cannot have 'use strict' directly in `redEnvFactory()` because bundlers and
        // minifiers may strip the directive. So, we inject 'use strict' after the function
        // is coerced to a string.
        .replace('{', `{'use strict';`);

    function renameFunction(provider, receiver) {
        try {
            // a revoked proxy will break the membrane when reading the function name
            const nameDescriptor = ReflectGetOwnPropertyDescriptor(provider, 'name');
            ReflectDefineProperty(receiver, 'name', nameDescriptor);
        }
        catch (_a) {
            // intentionally swallowing the error because this method is just extracting the function
            // in a way that it should always succeed except for the cases in which the provider is a proxy
            // that is either revoked or has some logic to prevent reading the name property descriptor.
        }
    }
    const ProxyCreate = unconstruct(Proxy);
    const { isArray: isArrayOrNotOrThrowForRevoked } = Array;
    function createBlueShadowTarget(target) {
        let shadowTarget;
        if (isFunction(target)) {
            // this new shadow target function is never invoked just needed to anchor the realm
            try {
                shadowTarget = 'prototype' in target ? function () { } : () => { };
            }
            catch (_a) {
                // target is a revoked proxy
                shadowTarget = function () { };
            }
            // This is only really needed for debugging, it helps to identify the proxy by name
            renameFunction(target, shadowTarget);
        }
        else {
            let isRedArray = false;
            try {
                // try/catch in case Array.isArray throws when target is a revoked proxy
                isRedArray = isArrayOrNotOrThrowForRevoked(target);
            }
            catch (_b) {
                // target is a revoked proxy, ignoring...
            }
            // target is array or object
            shadowTarget = isRedArray ? [] : {};
        }
        return shadowTarget;
    }
    function blueProxyFactory(env) {
        function getBlueDescriptor(redDesc) {
            const blueDesc = assign(ObjectCreate(null), redDesc);
            const { value, get, set } = blueDesc;
            if ('writable' in blueDesc) {
                // we are dealing with a value descriptor
                blueDesc.value = isFunction(value) ?
                    // we are dealing with a method (optimization)
                    getBlueFunction(value) : getBlueValue(value);
            }
            else {
                // we are dealing with accessors
                if (isFunction(set)) {
                    blueDesc.set = getBlueFunction(set);
                }
                if (isFunction(get)) {
                    blueDesc.get = getBlueFunction(get);
                }
            }
            return blueDesc;
        }
        function getRedPartialDescriptor(bluePartialDesc) {
            const redPartialDesc = assign(ObjectCreate(null), bluePartialDesc);
            if ('value' in redPartialDesc) {
                // we are dealing with a value descriptor
                redPartialDesc.value = env.getRedValue(redPartialDesc.value);
            }
            if ('set' in redPartialDesc) {
                // we are dealing with accessors
                redPartialDesc.set = env.getRedValue(redPartialDesc.set);
            }
            if ('get' in redPartialDesc) {
                redPartialDesc.get = env.getRedValue(redPartialDesc.get);
            }
            return redPartialDesc;
        }
        function copyRedDescriptorIntoShadowTarget(shadowTarget, originalTarget, key) {
            // Note: a property might get defined multiple times in the shadowTarget
            //       but it will always be compatible with the previous descriptor
            //       to preserve the object invariants, which makes these lines safe.
            const normalizedRedDescriptor = ReflectGetOwnPropertyDescriptor(originalTarget, key);
            if (!isUndefined(normalizedRedDescriptor)) {
                const blueDesc = getBlueDescriptor(normalizedRedDescriptor);
                ReflectDefineProperty(shadowTarget, key, blueDesc);
            }
        }
        function lockShadowTarget(shadowTarget, originalTarget) {
            // copying all own properties into the shadowTarget
            const targetKeys = ownKeys(originalTarget);
            for (let i = 0, len = targetKeys.length; i < len; i += 1) {
                copyRedDescriptorIntoShadowTarget(shadowTarget, originalTarget, targetKeys[i]);
            }
            // setting up __proto__ of the shadowTarget
            ReflectSetPrototypeOf(shadowTarget, getBlueValue(ReflectGetPrototypeOf(originalTarget)));
            // locking down the extensibility of shadowTarget
            ReflectPreventExtensions(shadowTarget);
        }
        function getStaticRedArray(blueArray) {
            return map(blueArray, env.getRedValue);
        }
        class BlueDynamicProxyHandler {
            constructor(target) {
                this.target = target;
                // future optimization: hoping that proxies with frozen handlers can be faster
                freeze(this);
            }
            deleteProperty(shadowTarget, key) {
                return deleteProperty(this.target, key);
            }
            apply(shadowTarget, blueThisArg, blueArgArray) {
                const { target } = this;
                const redThisArg = env.getRedValue(blueThisArg);
                const redArgArray = getStaticRedArray(blueArgArray);
                let red;
                try {
                    red = apply(target, redThisArg, redArgArray);
                }
                catch (e) {
                    throw env.getBlueValue(e);
                }
                return env.getBlueValue(red);
            }
            construct(shadowTarget, blueArgArray, blueNewTarget) {
                const { target: RedCtor } = this;
                if (isUndefined(blueNewTarget)) {
                    throw TypeError();
                }
                const redNewTarget = env.getRedValue(blueNewTarget);
                const redArgArray = getStaticRedArray(blueArgArray);
                let red;
                try {
                    red = construct(RedCtor, redArgArray, redNewTarget);
                }
                catch (e) {
                    throw env.getBlueValue(e);
                }
                return env.getBlueValue(red);
            }
            /**
             * This trap cannot just use `Reflect.get` directly on the `target` because
             * the red object graph might have mutations that are only visible on the red side,
             * which means looking into `target` directly is not viable. Instead, we need to
             * implement a more crafty solution that looks into target's own properties, or
             * in the red proto chain when needed.
             */
            get(shadowTarget, key, receiver) {
                /**
                 * If the target has a non-configurable own data descriptor that was observed by the red side,
                 * and therefore installed in the shadowTarget, we might get into a situation where a writable,
                 * non-configurable value in the target is out of sync with the shadowTarget's value for the same
                 * key. This is fine because this does not violate the object invariants, and even though they
                 * are out of sync, the original descriptor can only change to something that is compatible with
                 * what was installed in shadowTarget, and in order to observe that, the getOwnPropertyDescriptor
                 * trap must be used, which will take care of synchronizing them again.
                 */
                const { target } = this;
                const redDescriptor = ReflectGetOwnPropertyDescriptor(target, key);
                if (isUndefined(redDescriptor)) {
                    // looking in the blue proto chain to avoid switching sides
                    const blueProto = getBlueValue(ReflectGetPrototypeOf(target));
                    if (isNull(blueProto)) {
                        return undefined;
                    }
                    return ReflectGet(blueProto, key, receiver);
                }
                if (hasOwnProperty$1(redDescriptor, 'get')) {
                    // Knowing that it is an own getter, we can't still not use Reflect.get
                    // because there might be a distortion for such getter, and from the blue
                    // side, we should not be subject to those distortions.
                    return apply(getBlueValue(redDescriptor.get), receiver, emptyArray);
                }
                // if it is not an accessor property, is either a setter only accessor
                // or a data property, in which case we could return undefined or the blue value
                return getBlueValue(redDescriptor.value);
            }
            /**
             * This trap cannot just use `Reflect.set` directly on the `target` on the
             * red side because the red object graph might have mutations that are only visible
             * on the red side, which means looking into `target` directly is not viable.
             * Instead, we need to implement a more crafty solution that looks into target's
             * own properties, or in the blue proto chain when needed.
             */
            set(shadowTarget, key, value, receiver) {
                const { target } = this;
                const redDescriptor = ReflectGetOwnPropertyDescriptor(target, key);
                if (isUndefined(redDescriptor)) {
                    // looking in the blue proto chain to avoid switching sides
                    const blueProto = getBlueValue(ReflectGetPrototypeOf(target));
                    if (!isNull(blueProto)) {
                        return ReflectSet(blueProto, key, value, receiver);
                    }
                }
                else if (hasOwnProperty$1(redDescriptor, 'set')) {
                    // even though the setter function exists, we can't use Reflect.set because there might be
                    // a distortion for that setter function, and from the blue side, we should not be subject
                    // to those distortions.
                    apply(getBlueValue(redDescriptor.set), receiver, [value]);
                    return true; // if there is a callable setter, it either throw or we can assume the value was set
                }
                // if it is not an accessor property, is either a getter only accessor
                // or a data property, in which case we use Reflect.set to set the value,
                // and no receiver is needed since it will simply set the data property or nothing
                return ReflectSet(target, key, env.getRedValue(value));
            }
            /**
             * This trap cannot just use `Reflect.has` or the `in` operator directly on the
             * red side because the red object graph might have mutations that are only visible
             * on the red side, which means looking into `target` directly is not viable.
             * Instead, we need to implement a more crafty solution that looks into target's
             * own properties, or in the blue proto chain when needed.
             */
            has(shadowTarget, key) {
                const { target } = this;
                if (hasOwnProperty$1(target, key)) {
                    return true;
                }
                // looking in the blue proto chain to avoid switching sides
                const blueProto = getBlueValue(ReflectGetPrototypeOf(target));
                return !isNull(blueProto) && ReflectHas(blueProto, key);
            }
            ownKeys(shadowTarget) {
                return ownKeys(this.target);
            }
            isExtensible(shadowTarget) {
                // optimization to avoid attempting to lock down the shadowTarget multiple times
                if (!ReflectIsExtensible(shadowTarget)) {
                    return false; // was already locked down
                }
                const { target } = this;
                if (!ReflectIsExtensible(target)) {
                    lockShadowTarget(shadowTarget, target);
                    return false;
                }
                return true;
            }
            getOwnPropertyDescriptor(shadowTarget, key) {
                const { target } = this;
                const redDesc = ReflectGetOwnPropertyDescriptor(target, key);
                if (isUndefined(redDesc)) {
                    return redDesc;
                }
                if (redDesc.configurable === false) {
                    // updating the descriptor to non-configurable on the shadow
                    copyRedDescriptorIntoShadowTarget(shadowTarget, target, key);
                }
                return getBlueDescriptor(redDesc);
            }
            getPrototypeOf(shadowTarget) {
                return env.getBlueValue(ReflectGetPrototypeOf(this.target));
            }
            setPrototypeOf(shadowTarget, prototype) {
                return ReflectSetPrototypeOf(this.target, env.getRedValue(prototype));
            }
            preventExtensions(shadowTarget) {
                const { target } = this;
                if (ReflectIsExtensible(shadowTarget)) {
                    if (!ReflectPreventExtensions(target)) {
                        // if the target is a proxy manually created in the sandbox, it might reject
                        // the preventExtension call, in which case we should not attempt to lock down
                        // the shadow target.
                        if (!ReflectIsExtensible(target)) {
                            lockShadowTarget(shadowTarget, target);
                        }
                        return false;
                    }
                    lockShadowTarget(shadowTarget, target);
                }
                return true;
            }
            defineProperty(shadowTarget, key, bluePartialDesc) {
                const { target } = this;
                const redDesc = getRedPartialDescriptor(bluePartialDesc);
                if (ReflectDefineProperty(target, key, redDesc)) {
                    // intentionally testing against true since it could be undefined as well
                    if (redDesc.configurable === false) {
                        copyRedDescriptorIntoShadowTarget(shadowTarget, target, key);
                    }
                }
                return true;
            }
        }
        ReflectSetPrototypeOf(BlueDynamicProxyHandler.prototype, null);
        // future optimization: hoping that proxies with frozen handlers can be faster
        freeze(BlueDynamicProxyHandler.prototype);
        function getBlueValue(red) {
            if (isNullOrUndefined(red)) {
                return red;
            }
            if (typeof red === 'function') {
                return getBlueFunction(red);
            }
            else if (typeof red === 'object') {
                // arrays and objects
                const blue = env.getBlueRef(red);
                if (isUndefined(blue)) {
                    return createBlueProxy(red);
                }
                return blue;
            }
            // internationally ignoring the case of (typeof document.all === 'undefined') because
            // in the reserve membrane, you never get one of those exotic objects
            return red;
        }
        function getBlueFunction(redFn) {
            const blueFn = env.getBlueRef(redFn);
            if (isUndefined(blueFn)) {
                return createBlueProxy(redFn);
            }
            return blueFn;
        }
        function createBlueProxy(red) {
            const shadowTarget = createBlueShadowTarget(red);
            const proxyHandler = new BlueDynamicProxyHandler(red);
            const proxy = ProxyCreate(shadowTarget, proxyHandler);
            env.setRefMapEntries(red, proxy);
            return proxy;
        }
        return getBlueValue;
    }

    class SecureEnvironment {
        constructor(options) {
            // map from red to blue references
            this.redMap = WeakMapCreate();
            // map from blue to red references
            this.blueMap = WeakMapCreate();
            if (isUndefined(options)) {
                throw ErrorCreate(`Missing SecureEnvironmentOptions options bag.`);
            }
            const { redGlobalThis, distortionMap } = options;
            this.distortionMap = WeakMapCreate();
            // validating distortion entries
            distortionMap === null || distortionMap === void 0 ? void 0 : distortionMap.forEach((value, key) => {
                if (typeof key !== typeof value) {
                    throw ErrorCreate(`Invalid distortion ${value}.`);
                }
                WeakMapSet(this.distortionMap, key, value);
            });
            // getting proxy factories ready per environment so we can produce
            // the proper errors without leaking instances into a sandbox
            const redEnvFactory = redGlobalThis.eval(`(${serializedRedEnvSourceText})`);
            // Important Note: removing the indirection for apply and construct breaks
            // chrome karma tests for some unknown reasons. What is seems harmless turns out
            // to be fatal, why? it seems that this is because Chrome does identity checks
            // on those intrinsics, and fails if the detached iframe is calling an intrinsic
            // from another realm.
            const blueHooks = {
                apply(target, thisArgument, argumentsList) {
                    return apply(target, thisArgument, argumentsList);
                },
                construct(target, argumentsList, newTarget) {
                    return construct(target, argumentsList, newTarget);
                },
            };
            this.getRedValue = redEnvFactory(this, blueHooks);
            this.getBlueValue = blueProxyFactory(this);
        }
        getBlueValue(red) {
            // placeholder since this will be assigned in construction
        }
        getRedValue(blue) {
            // placeholder since this will be assigned in construction
        }
        getBlueRef(red) {
            const blue = WeakMapGet(this.redMap, red);
            if (!isUndefined(blue)) {
                return blue;
            }
        }
        getRedRef(blue) {
            const red = WeakMapGet(this.blueMap, blue);
            if (!isUndefined(red)) {
                return red;
            }
        }
        setRefMapEntries(red, blue) {
            // double index for perf
            WeakMapSet(this.redMap, red, blue);
            WeakMapSet(this.blueMap, blue, red);
        }
        remap(redValue, blueValue, blueDescriptors) {
            const broker = this;
            const keys = ownKeys(blueDescriptors);
            for (let i = 0, len = keys.length; i < len; i += 1) {
                const key = keys[i];
                if (!canRedPropertyBeTamed(redValue, key)) {
                    console.warn(`Property ${String(key)} of ${redValue} cannot be remapped.`);
                    continue;
                }
                // avoid poisoning by only installing own properties from blueDescriptors
                // @ts-expect-error because PropertyDescriptorMap does not accept symbols ATM
                const blueDescriptor = assign(ObjectCreate(null), blueDescriptors[key]);
                const redDescriptor = assign(ObjectCreate(null), blueDescriptor);
                if ('value' in blueDescriptor) {
                    redDescriptor.value = broker.getRedValue(blueDescriptor.value);
                }
                else {
                    // Use the original getter to return a red object, but if the
                    // sandbox attempts to set it to a new value, this mutation will
                    // only affect the sandbox's global object, and the getter will
                    // start returning the new provided value rather than calling onto
                    // the blue realm. This is to preserve the object graph of the
                    // blue realm.
                    let currentBlueGetter = () => undefined;
                    if (isFunction(blueDescriptor.get)) {
                        const { get: blueGetter } = blueDescriptor;
                        const blueDistortedGetter = WeakMapGet(this.distortionMap, blueGetter) || blueGetter;
                        currentBlueGetter = function () {
                            const value = apply(blueDistortedGetter, broker.getBlueValue(this), emptyArray);
                            return broker.getRedValue(value);
                        };
                        redDescriptor.get = function () {
                            return apply(currentBlueGetter, this, emptyArray);
                        };
                    }
                    if (isFunction(blueDescriptor.set)) {
                        redDescriptor.set = function (v) {
                            // if a global setter is invoke, the value will be use as it is as the result of the getter operation
                            currentBlueGetter = () => v;
                        };
                    }
                }
                ReflectDefineProperty(redValue, key, redDescriptor);
            }
        }
    }
    function canRedPropertyBeTamed(redValue, key) {
        const redDescriptor = ReflectGetOwnPropertyDescriptor(redValue, key);
        // TODO: what about writable - non-configurable?
        return isUndefined(redDescriptor) || isTrue(redDescriptor.configurable);
    }

    const cachedReflectiveIntrinsicsMap = WeakMapCreate();
    /**
     * This list must be in sync with ecma-262, anything new added to the global object
     * should be considered, to decide whether or not they need remapping. The default
     * behavior, if missing form the following list, is to be remapped, which is safer.
     *
     * Note: remapped means the functionality is provided by the blue realm, rather than
     * the red one. This helps with the identity discontinuity issue, e.g.: all Set objects
     * have the same identity because it is always derived from the outer realm's Set.
     *
     * Note 1: We have identified 3 types of intrinsics
     * A: primitives driven intrinsics
     * B: syntax driven intrinsics (they usually have a imperative form as well)
     * C: imperative only intrinsics
     *
     * While A is not remapped, it is safe, and works fast that way, and C is remapped to
     * preserve the identity of all produced objects from the same realm, B is really
     * problematic, and requires a lot more work to guarantee that objects from both sides
     * can be considered equivalents (without identity discontinuity).
     */
    const ESGlobalKeys = SetCreate([
        // *** 18.1 Value Properties of the Global Object
        'Infinity',
        'NaN',
        'undefined',
        // *** 18.2 Function Properties of the Global Object
        'eval',
        'isFinite',
        'isNaN',
        'parseFloat',
        'parseInt',
        'decodeURI',
        'decodeURIComponent',
        'encodeURI',
        'encodeURIComponent',
        // *** 18.3 Constructor Properties of the Global Object
        'AggregateError',
        'Array',
        'ArrayBuffer',
        'Boolean',
        'DataView',
        // 'Date', // Unstable & Remapped
        'Error',
        'EvalError',
        'Float32Array',
        'Float64Array',
        'Function',
        'Int8Array',
        'Int16Array',
        'Int32Array',
        // 'Map', // Remapped
        'Number',
        'Object',
        // Allow Blue `Promise` constructor to overwrite the Red one so that promises
        // created by the `Promise` constructor or APIs like `fetch` will work.
        // 'Promise', // Remapped
        'Proxy',
        'RangeError',
        'ReferenceError',
        'RegExp',
        // 'Set', // Remapped
        'SharedArrayBuffer',
        'String',
        'Symbol',
        'SyntaxError',
        'TypeError',
        'Uint8Array',
        'Uint8ClampedArray',
        'Uint16Array',
        'Uint32Array',
        'URIError',
        // 'WeakMap', // Remapped
        // 'WeakSet', // Remapped
        // *** 18.4 Other Properties of the Global Object
        'Atomics',
        'JSON',
        'Math',
        'Reflect',
        // *** Annex B
        'escape',
        'unescape',
    ]);
    // These are foundational things that should never be wrapped but are equivalent
    // TODO: revisit this list.
    const ReflectiveIntrinsicObjectNames = [
        'AggregateError',
        'Array',
        'Error',
        'EvalError',
        'Function',
        'Object',
        'RangeError',
        'ReferenceError',
        'SyntaxError',
        'TypeError',
        'URIError',
    ];
    function getReflectiveIntrinsics(global) {
        let reflectiveIntrinsics = WeakMapGet(cachedReflectiveIntrinsicsMap, global);
        if (!isUndefined(reflectiveIntrinsics)) {
            return reflectiveIntrinsics;
        }
        reflectiveIntrinsics = ObjectCreate(null);
        WeakMapSet(cachedReflectiveIntrinsicsMap, global, reflectiveIntrinsics);
        // remapping intrinsics that are realm's agnostic
        for (let i = 0, len = ReflectiveIntrinsicObjectNames.length; i < len; i += 1) {
            const name = ReflectiveIntrinsicObjectNames[i];
            reflectiveIntrinsics[name] = global[name];
        }
        return reflectiveIntrinsics;
    }
    function linkIntrinsics(env, blueGlobalThis, redGlobalThis) {
        // remapping intrinsics that are realm's agnostic
        const blueIntrinsics = getReflectiveIntrinsics(blueGlobalThis);
        const redIntrinsics = getReflectiveIntrinsics(redGlobalThis);
        for (let i = 0, len = ReflectiveIntrinsicObjectNames.length; i < len; i += 1) {
            const name = ReflectiveIntrinsicObjectNames[i];
            const blue = blueIntrinsics[name];
            const red = redIntrinsics[name];
            // new intrinsics might not be available in some browsers, e.g.: AggregateError
            if (!isUndefined(blue)) {
                env.setRefMapEntries(red, blue);
                env.setRefMapEntries(red.prototype, blue.prototype);
            }
        }
    }
    function getFilteredEndowmentDescriptors(endowments) {
        const to = ObjectCreate(null);
        const endowmentsDescriptors = getOwnPropertyDescriptors(endowments);
        const globalKeys = ownKeys(endowmentsDescriptors);
        for (let i = 0, len = globalKeys.length; i < len; i++) {
            // forcing to string here because of TypeScript's PropertyDescriptorMap definition, which doesn't
            // support symbols as entries.
            const key = globalKeys[i];
            // avoid overriding ECMAScript global names that correspond
            // to global intrinsics. This guarantee that those entries
            // will be ignored if present in the endowments object.
            // TODO: what if the intent is to polyfill one of those
            // intrinsics?
            if (!SetHas(ESGlobalKeys, key)) {
                to[key] = endowmentsDescriptors[key];
            }
        }
        return to;
    }
    function isIntrinsicGlobalName(key) {
        return SetHas(ESGlobalKeys, key);
    }

    const cachedGlobalMap = WeakMapCreate();
    function getCachedReferences(window) {
        let record = WeakMapGet(cachedGlobalMap, window);
        if (!isUndefined(record)) {
            return record;
        }
        record = ObjectCreate(null);
        // caching the record
        WeakMapSet(cachedGlobalMap, window, record);
        // caching references to object values that can't be replaced
        // window -> Window -> WindowProperties -> EventTarget
        record.window = window.window;
        record.document = window.document;
        record.WindowProto = ReflectGetPrototypeOf(record.window);
        record.WindowPropertiesProto = ReflectGetPrototypeOf(record.WindowProto);
        record.EventTargetProto = ReflectGetPrototypeOf(record.WindowPropertiesProto);
        record.DocumentProto = ReflectGetPrototypeOf(record.document);
        // caching descriptors
        record.windowDescriptors = getOwnPropertyDescriptors(record.window);
        // intentionally avoiding remapping any Window.prototype descriptor,
        // there is nothing in this prototype that needs to be remapped.
        record.WindowProtoDescriptors = ObjectCreate(null);
        // intentionally avoiding remapping any WindowProperties.prototype descriptor
        // because this object contains magical properties for HTMLObjectElement instances
        // and co, based on their id attribute. These cannot, and should not, be
        // remapped. Additionally, constructor is not relevant, and can't be used for anything.
        record.WindowPropertiesProtoDescriptors = ObjectCreate(null);
        record.EventTargetProtoDescriptors = getOwnPropertyDescriptors(record.EventTargetProto);
        return record;
    }
    /**
     * Initialization operation to capture and cache all unforgeable references
     * and their respective descriptor maps before any other code runs, this
     * usually help because this library runs before anything else that can poison
     * the environment.
     */
    getCachedReferences(window);
    /**
     * global descriptors are a combination of 3 set of descriptors:
     * - first, the key of the red descriptors define the descriptors
     *   provided by the browser when creating a brand new window.
     * - second, once we know the base keys, we get the actual descriptors
     *   from the blueDescriptors, since those are the one we want to provide
     *   access to via the membrane.
     * - third, the user of this library can provide endowments, which define
     *   global descriptors that should be installed into the sandbox on top
     *   of the base descriptors.
     *
     * Note: The main reason for using redDescriptors as the base keys instead
     * of blueDescriptor is because there is no guarantee that this library is
     * the first one to be evaluated in the host app, which means it has no ways
     * to determine what is a real DOM API vs app specific globals.
     *
     * Quirk: The only quirk here is for the case in which this library runs
     * after some other code that patches some of the DOM APIs. This means
     * the installed proxy in the sandbox will point to the patched global
     * API in the blue realm, rather than the original, because we don't have
     * a way to access the original anymore. This should not be a deal-breaker
     * if the patched API behaves according to the spec.
     *
     * The result of this method is a descriptor map that contains everything
     * that will be installed (via the membrane) as global descriptors in
     * the red realm.
     */
    function aggregateWindowDescriptors(redDescriptors, blueDescriptors, endowmentsDescriptors) {
        const to = ObjectCreate(null);
        const baseKeys = ownKeys(redDescriptors);
        for (let i = 0, len = baseKeys.length; i < len; i++) {
            const key = baseKeys[i];
            if (!isIntrinsicGlobalName(key)) {
                to[key] = blueDescriptors[key];
            }
        }
        // endowments descriptors will overrule any default descriptor inferred
        // from the detached iframe. note that they are already filtered, not need
        // to check against intrinsics again.
        assign(to, endowmentsDescriptors);
        // removing unforgeable descriptors that cannot be installed
        delete to.location;
        delete to.document;
        delete to.window;
        delete to.top;
        // Some DOM APIs do brand checks for TypeArrays and others objects,
        // in this case, if the API is not dangerous, and works in a detached
        // iframe, we can let the sandbox to use the iframe's api directly,
        // instead of remapping it to the blue realm.
        // TODO [issue #67]: review this list
        delete to.crypto;
        // others browser specific undeniable globals
        delete to.chrome;
        return to;
    }
    /**
     * WindowProperties.prototype is magical, it provide access to any
     * object that "clobbers" the WindowProxy instance for easy access. E.g.:
     *
     *     var object = document.createElement('object');
     *     object.id = 'foo';
     *     document.body.appendChild(object);
     *
     * The result of this code is that `window.foo` points to the HTMLObjectElement
     * instance, and in some browsers, those are not even reported as descriptors
     * installed on WindowProperties.prototype, but they are instead magically
     * resolved when accessing `foo` from `window`.
     *
     * This forces us to avoid using the descriptors from the blue window directly,
     * and instead, we need to shadow only the descriptors installed in the brand
     * new iframe, that way any magical entry from the blue window will not be
     * installed on the iframe.
     */
    function aggregateWindowPropertiesDescriptors(redDescriptors, blueDescriptors) {
        const to = ObjectCreate(null);
        const baseKeys = ownKeys(redDescriptors);
        for (let i = 0, len = baseKeys.length; i < len; i++) {
            const key = baseKeys[i];
            to[key] = blueDescriptors[key];
        }
        return to;
    }
    function tameDOM(env, blueRefs, redRefs, endowmentsDescriptors) {
        // adjusting proto chain of window.document
        ReflectSetPrototypeOf(redRefs.document, env.getRedValue(blueRefs.DocumentProto));
        const globalDescriptors = aggregateWindowDescriptors(redRefs.windowDescriptors, blueRefs.windowDescriptors, endowmentsDescriptors);
        const WindowPropertiesDescriptors = aggregateWindowPropertiesDescriptors(redRefs.WindowPropertiesProtoDescriptors, blueRefs.WindowPropertiesProtoDescriptors);
        // remapping globals
        env.remap(redRefs.window, blueRefs.window, globalDescriptors);
        // remapping unforgeable objects
        env.remap(redRefs.EventTargetProto, blueRefs.EventTargetProto, blueRefs.EventTargetProtoDescriptors);
        env.remap(redRefs.WindowPropertiesProto, blueRefs.WindowPropertiesProto, WindowPropertiesDescriptors);
        env.remap(redRefs.WindowProto, blueRefs.WindowProto, blueRefs.WindowProtoDescriptors);
    }
    function linkUnforgeables(env, blueRefs, redRefs) {
        env.setRefMapEntries(redRefs.window, blueRefs.window);
        env.setRefMapEntries(redRefs.document, blueRefs.document);
        env.setRefMapEntries(redRefs.EventTargetProto, blueRefs.EventTargetProto);
        env.setRefMapEntries(redRefs.WindowPropertiesProto, blueRefs.WindowPropertiesProto);
        env.setRefMapEntries(redRefs.WindowProto, blueRefs.WindowProto);
    }

    const IFRAME_SANDBOX_ATTRIBUTE_VALUE = 'allow-same-origin allow-scripts';
    const appendChildCall = unapply(Node.prototype.appendChild);
    const removeCall = unapply(Element.prototype.remove);
    const isConnectedGetterCall = unapply(ReflectGetOwnPropertyDescriptor(Node.prototype, 'isConnected').get);
    const nodeLastChildGetterCall = unapply(ReflectGetOwnPropertyDescriptor(Node.prototype, 'lastChild').get);
    const documentBodyGetterCall = unapply(ReflectGetOwnPropertyDescriptor(Document.prototype, 'body').get);
    const createElementCall = unapply(document.createElement);
    function createDetachableIframe() {
        // @ts-ignore document global ref - in browsers
        const iframe = createElementCall(document, 'iframe');
        iframe.setAttribute('sandbox', IFRAME_SANDBOX_ATTRIBUTE_VALUE);
        iframe.style.display = 'none';
        const parent = documentBodyGetterCall(document) || nodeLastChildGetterCall(document);
        appendChildCall(parent, iframe);
        return iframe;
    }
    function removeIframe(iframe) {
        // In Chrome debugger statements will be ignored when the iframe is removed
        // from the document. Other browsers like Firefox and Safari work as expected.
        // https://bugs.chromium.org/p/chromium/issues/detail?id=1015462
        if (isConnectedGetterCall(iframe)) {
            removeCall(iframe);
        }
    }
    // caching references
    const { open, close } = document;
    function createSecureEnvironment(options) {
        const { distortionMap, endowments, keepAlive } = options || ObjectCreate(null);
        const iframe = createDetachableIframe();
        const blueWindow = window;
        const redWindow = iframe.contentWindow.window;
        const endowmentsDescriptors = getFilteredEndowmentDescriptors(endowments || {});
        const { eval: redIndirectEval } = redWindow;
        // extract the global references and descriptors before any interference
        const blueRefs = getCachedReferences(blueWindow);
        const redRefs = getCachedReferences(redWindow);
        // creating a new environment
        const env = new SecureEnvironment({
            blueGlobalThis: blueWindow,
            redGlobalThis: redWindow,
            distortionMap,
        });
        linkIntrinsics(env, blueWindow, redWindow);
        linkUnforgeables(env, blueRefs, redRefs);
        tameDOM(env, blueRefs, redRefs, endowmentsDescriptors);
        // once we get the iframe info ready, and all mapped, we can proceed
        // to detach the iframe only if the keepAlive option isn't true
        if (keepAlive !== true) {
            removeIframe(iframe);
        }
        else {
            // TODO: temporary hack to preserve the document reference in FF
            // https://bugzilla.mozilla.org/show_bug.cgi?id=543435
            open.call(redRefs.document);
            close.call(redRefs.document);
        }
        // finally, we return the evaluator function
        return (sourceText) => {
            try {
                redIndirectEval(sourceText);
            }
            catch (e) {
                throw env.getBlueValue(e);
            }
        };
    }

    /*
     * Copyright (c) 2020, salesforce.com, inc.
     * All rights reserved.
     * SPDX-License-Identifier: MIT
     * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
     */
    /**
     * This utility should be used to convert NodeList and HTMLCollection into an array before we
     * perform array operations on them. See issue #1545 for more details.
     */
    function arrayFromCollection(collection) {
        const size = collection.length;
        const cloned = [];
        if (size > 0) {
            for (let i = 0; i < size; i++) {
                cloned[i] = collection[i];
            }
        }
        return cloned;
    }
    const { assign: assign$1, create, defineProperties, defineProperty, freeze: freeze$1, getOwnPropertyDescriptor: getOwnPropertyDescriptor$3, getOwnPropertyNames, getPrototypeOf, hasOwnProperty: hasOwnProperty$2, keys, seal: seal$1, setPrototypeOf, } = Object;
    const { filter: ArrayFilter, find: ArrayFind, indexOf: ArrayIndexOf, join: ArrayJoin, map: ArrayMap, push: ArrayPush, reduce: ArrayReduce, reverse: ArrayReverse, slice: ArraySlice, splice: ArraySplice, unshift: ArrayUnshift, forEach, } = Array.prototype;
    function isUndefined$1(obj) {
        return obj === undefined;
    }
    function isNull$1(obj) {
        return obj === null;
    }
    function isTrue$1(obj) {
        return obj === true;
    }
    function isString(obj) {
        return typeof obj === 'string';
    }
    function MapConcat(maps) {
        const map = new Map();
        maps.forEach((m) => {
            m.forEach((v, k) => {
                map.set(k, v);
            });
        });
        return map;
    }
    const MapCreate = (args) => new Map(args);
    function createHiddenField(key) {
        return Symbol(key);
    }
    function setHiddenField(o, field, value) {
        o[field] = value;
    }
    function getHiddenField(o, field) {
        return o[field];
    }
    function isHostElement(node) {
        return node instanceof HTMLElement && !!shadowRootGetter.call(node);
    }
    function getShadowRootFromHostElement(elm) {
        return shadowRootGetter.call(elm);
    }

    /*
     * Copyright (c) 2020, salesforce.com, inc.
     * All rights reserved.
     * SPDX-License-Identifier: MIT
     * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
     */
    const Items = createHiddenField('StaticNodeListItems');
    function StaticNodeList() {
        throw new TypeError('Illegal constructor');
    }
    StaticNodeList.prototype = create(NodeList.prototype, {
        constructor: {
            writable: true,
            configurable: true,
            value: StaticNodeList,
        },
        item: {
            writable: true,
            enumerable: true,
            configurable: true,
            value(index) {
                return this[index];
            },
        },
        length: {
            enumerable: true,
            configurable: true,
            get() {
                return getHiddenField(this, Items).length;
            },
        },
        // Iterator protocol
        forEach: {
            writable: true,
            enumerable: true,
            configurable: true,
            value(cb, thisArg) {
                forEach.call(getHiddenField(this, Items), cb, thisArg);
            },
        },
        entries: {
            writable: true,
            enumerable: true,
            configurable: true,
            value() {
                return ArrayMap.call(getHiddenField(this, Items), (v, i) => [i, v]);
            },
        },
        keys: {
            writable: true,
            enumerable: true,
            configurable: true,
            value() {
                return ArrayMap.call(getHiddenField(this, Items), (_v, i) => i);
            },
        },
        values: {
            writable: true,
            enumerable: true,
            configurable: true,
            value() {
                return getHiddenField(this, Items);
            },
        },
        [Symbol.iterator]: {
            writable: true,
            configurable: true,
            value() {
                let nextIndex = 0;
                return {
                    next: () => {
                        const items = getHiddenField(this, Items);
                        return nextIndex < items.length
                            ? {
                                value: items[nextIndex++],
                                done: false,
                            }
                            : {
                                done: true,
                            };
                    },
                };
            },
        },
        [Symbol.toStringTag]: {
            configurable: true,
            get() {
                return 'NodeList';
            },
        },
    });
    // prototype inheritance dance
    setPrototypeOf(StaticNodeList, NodeList);
    function createStaticNodeList(items) {
        const nodeList = create(StaticNodeList.prototype);
        setHiddenField(nodeList, Items, items);
        // setting static indexes
        forEach.call(items, (item, index) => {
            defineProperty(nodeList, index, {
                value: item,
                enumerable: true,
                configurable: true,
            });
        });
        return nodeList;
    }

    /*
     * Copyright (c) 2020, salesforce.com, inc.
     * All rights reserved.
     * SPDX-License-Identifier: MIT
     * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
     */
    const assignedSlotGetter = getOwnPropertyDescriptor$3(Element.prototype, 'assignedSlot').get;
    function isSlotElement(node) {
        return node instanceof HTMLSlotElement;
    }
    function getFilteredChildNodes(node) {
        if (isSlotElement(node)) {
            return node.assignedNodes({ flatten: true });
        }
        else if (isHostElement(node)) {
            return arrayFromCollection(childNodesGetter.call(getShadowRootFromHostElement(node)));
        }
        return arrayFromCollection(childNodesGetter.call(node));
    }
    const firstChildDistortion = function firstChild() {
        const nodes = getFilteredChildNodes(this);
        return nodes.length > 0 ? nodes[0] : null;
    };
    const lastChildDistortion = function lastChild() {
        const nodes = getFilteredChildNodes(this);
        return nodes.length > 0 ? nodes[nodes.length - 1] : null;
    };
    const textContentDistortion = function textContent() {
        return getTextContent(this);
    };
    const parentNodeDistortion = function parentNode() {
        const assignedSlot = assignedSlotGetter.call(this);
        // if node is slotted, jump into the slot node instead
        if (assignedSlot) {
            return assignedSlot;
        }
        const parentNode = parentNodeGetter.call(this);
        // if walking up we encounter a shadowRoot, we skip it
        if (parentNode && parentNode instanceof ShadowRoot) {
            return parentNode.host;
        }
        return parentNode;
    };
    const parentElementDistortion = function parentElement() {
        const assignedSlot = assignedSlotGetter.call(this);
        // if node is slotted, jump into the slot node instead
        if (assignedSlot) {
            return assignedSlot;
        }
        const parentNode = parentNodeGetter.call(this);
        // if walking up we encounter a shadowRoot, we skip it
        if (parentNode && parentNode instanceof ShadowRoot) {
            return parentNode.host;
        }
        return parentElementGetter.call(this);
    };
    const childNodesDistortion = function childNodes() {
        return createStaticNodeList(getFilteredChildNodes(this)); // cast to NodeListOf<Node>
    };
    const hasChildNodesDistortion = function hasChildNodes() {
        return getFilteredChildNodes(this).length > 0;
    };
    const getRootNodeDistortion = function getRootNode$1() {
        if (this.isConnected) {
            return this.ownerDocument; // Is this correct?
        }
        return getRootNode.call(this);
    };
    function getTextContent(node) {
        switch (node.nodeType) {
            case ELEMENT_NODE:
            case DOCUMENT_FRAGMENT_NODE: {
                const childNodes = getFilteredChildNodes(node);
                let content = '';
                for (let i = 0, len = childNodes.length; i < len; i += 1) {
                    const currentNode = childNodes[i];
                    if (currentNode.nodeType !== COMMENT_NODE) {
                        content += getTextContent(currentNode);
                    }
                }
                return content;
            }
            default:
                return node.nodeValue;
        }
    }
    var NodeDistortions = MapCreate([
        [firstChildGetter, firstChildDistortion],
        [lastChildGetter, lastChildDistortion],
        [textContextGetter, textContentDistortion],
        [parentNodeGetter, parentNodeDistortion],
        [parentElementGetter, parentElementDistortion],
        [childNodesGetter, childNodesDistortion],
        [hasChildNodes, hasChildNodesDistortion],
        [getRootNode, getRootNodeDistortion],
    ]);

    /*
     * Copyright (c) 2020, salesforce.com, inc.
     * All rights reserved.
     * SPDX-License-Identifier: MIT
     * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
     */
    const assignedSlotOriginal = getOwnPropertyDescriptor$3(Text.prototype, 'assignedSlot').get;
    const assignedSlotDistortion = function assignedSlot() {
        return null;
    };
    var TextDistortions = MapCreate([
        [assignedSlotOriginal, assignedSlotDistortion]
    ]);

    /*
     * Copyright (c) 2020, salesforce.com, inc.
     * All rights reserved.
     * SPDX-License-Identifier: MIT
     * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
     */
    const { assignedNodes: assignedNodesOriginal, assignedElements: assignedElementsOriginal } = HTMLSlotElement.prototype;
    const assignedElementsDistortion = function assignedElements(options) {
        const flatten = !isUndefined$1(options) && isTrue$1(options.flatten);
        if (!flatten) {
            return [];
        }
        return assignedElementsOriginal.call(this, { flatten: true });
    };
    const assignedNodesDistortion = function assignedNodes(options) {
        const flatten = !isUndefined$1(options) && isTrue$1(options.flatten);
        if (!flatten) {
            return [];
        }
        return assignedNodesOriginal.call(this, { flatten: true });
    };
    var SlotDistortions = MapCreate([
        [assignedElementsOriginal, assignedElementsDistortion],
        [assignedNodesOriginal, assignedNodesDistortion],
    ]);

    /*
     * Copyright (c) 2020, salesforce.com, inc.
     * All rights reserved.
     * SPDX-License-Identifier: MIT
     * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
     */
    const Items$1 = createHiddenField('StaticHTMLCollectionItems');
    function StaticHTMLCollection() {
        throw new TypeError('Illegal constructor');
    }
    StaticHTMLCollection.prototype = create(HTMLCollection.prototype, {
        constructor: {
            writable: true,
            configurable: true,
            value: StaticHTMLCollection,
        },
        item: {
            writable: true,
            enumerable: true,
            configurable: true,
            value(index) {
                return this[index];
            },
        },
        length: {
            enumerable: true,
            configurable: true,
            get() {
                return getHiddenField(this, Items$1).length;
            },
        },
        // https://dom.spec.whatwg.org/#dom-htmlcollection-nameditem-key
        namedItem: {
            writable: true,
            enumerable: true,
            configurable: true,
            value(name) {
                if (name === '') {
                    return null;
                }
                const items = getHiddenField(this, Items$1);
                for (let i = 0, len = items.length; i < len; i++) {
                    const item = items[len];
                    if (name === getAttribute.call(item, 'id') ||
                        name === getAttribute.call(item, 'name')) {
                        return item;
                    }
                }
                return null;
            },
        },
        // Iterable protocol
        // TODO [#1665]: HTMLCollection should not implement the iterable protocol. The only collection
        // interface implementing this protocol is NodeList. This code need to be removed.
        forEach: {
            writable: true,
            enumerable: true,
            configurable: true,
            value(cb, thisArg) {
                forEach.call(getHiddenField(this, Items$1), cb, thisArg);
            },
        },
        entries: {
            writable: true,
            enumerable: true,
            configurable: true,
            value() {
                return ArrayMap.call(getHiddenField(this, Items$1), (v, i) => [i, v]);
            },
        },
        keys: {
            writable: true,
            enumerable: true,
            configurable: true,
            value() {
                return ArrayMap.call(getHiddenField(this, Items$1), (v, i) => i);
            },
        },
        values: {
            writable: true,
            enumerable: true,
            configurable: true,
            value() {
                return getHiddenField(this, Items$1);
            },
        },
        [Symbol.iterator]: {
            writable: true,
            configurable: true,
            value() {
                let nextIndex = 0;
                return {
                    next: () => {
                        const items = getHiddenField(this, Items$1);
                        return nextIndex < items.length
                            ? {
                                value: items[nextIndex++],
                                done: false,
                            }
                            : {
                                done: true,
                            };
                    },
                };
            },
        },
        [Symbol.toStringTag]: {
            configurable: true,
            get() {
                return 'HTMLCollection';
            },
        },
    });
    // prototype inheritance dance
    setPrototypeOf(StaticHTMLCollection, HTMLCollection);
    function createStaticHTMLCollection(items) {
        const collection = create(StaticHTMLCollection.prototype);
        setHiddenField(collection, Items$1, items);
        // setting static indexes
        forEach.call(items, (item, index) => {
            defineProperty(collection, index, {
                value: item,
                enumerable: true,
                configurable: true,
            });
        });
        return collection;
    }

    /*
     * Copyright (c) 2020, salesforce.com, inc.
     * All rights reserved.
     * SPDX-License-Identifier: MIT
     * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
     */
    function getChildNodesMarkup(childNodes) {
        let s = '';
        for (let i = 0, len = childNodes.length; i < len; i += 1) {
            s += getOuterHTML(childNodes[i]);
        }
        return s;
    }
    function getInnerHTML(elm) {
        if (isSlotElement(elm)) {
            return getChildNodesMarkup(elm.assignedNodes({ flatten: true }));
        }
        else if (isHostElement(elm)) {
            return getChildNodesMarkup(childNodesGetter.call(getShadowRootFromHostElement(elm)));
        }
        return getChildNodesMarkup(childNodesGetter.call(elm));
    }

    /*
     * Copyright (c) 2020, salesforce.com, inc.
     * All rights reserved.
     * SPDX-License-Identifier: MIT
     * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
     */
    // http://www.whatwg.org/specs/web-apps/current-work/multipage/the-end.html#escapingString
    const escapeAttrRegExp = /[&\u00A0"]/g;
    const escapeDataRegExp = /[&\u00A0<>]/g;
    const { replace, toLowerCase } = String.prototype;
    function escapeReplace(c) {
        switch (c) {
            case '&':
                return '&amp;';
            case '<':
                return '&lt;';
            case '>':
                return '&gt;';
            case '"':
                return '&quot;';
            case '\u00A0':
                return '&nbsp;';
            default:
                return '';
        }
    }
    function escapeAttr(s) {
        return replace.call(s, escapeAttrRegExp, escapeReplace);
    }
    function escapeData(s) {
        return replace.call(s, escapeDataRegExp, escapeReplace);
    }
    // http://www.whatwg.org/specs/web-apps/current-work/#void-elements
    const voidElements = new Set([
        'AREA',
        'BASE',
        'BR',
        'COL',
        'COMMAND',
        'EMBED',
        'HR',
        'IMG',
        'INPUT',
        'KEYGEN',
        'LINK',
        'META',
        'PARAM',
        'SOURCE',
        'TRACK',
        'WBR',
    ]);
    const plaintextParents = new Set([
        'STYLE',
        'SCRIPT',
        'XMP',
        'IFRAME',
        'NOEMBED',
        'NOFRAMES',
        'PLAINTEXT',
        'NOSCRIPT',
    ]);
    function getOuterHTML(node) {
        switch (node.nodeType) {
            case ELEMENT_NODE: {
                const { attributes: attrs } = node;
                const tagName = tagNameGetter.call(node);
                let s = '<' + toLowerCase.call(tagName);
                for (let i = 0, attr; (attr = attrs[i]); i++) {
                    s += ' ' + attr.name + '="' + escapeAttr(attr.value) + '"';
                }
                s += '>';
                if (voidElements.has(tagName)) {
                    return s;
                }
                return s + getInnerHTML(node) + '</' + toLowerCase.call(tagName) + '>';
            }
            case TEXT_NODE: {
                const { data, parentNode } = node;
                if (parentNode instanceof Element &&
                    plaintextParents.has(tagNameGetter.call(parentNode))) {
                    return data;
                }
                return escapeData(data);
            }
            case CDATA_SECTION_NODE: {
                return `<!CDATA[[${node.data}]]>`;
            }
            case PROCESSING_INSTRUCTION_NODE: {
                return `<?${node.target} ${node.data}?>`;
            }
            case COMMENT_NODE: {
                return `<!--${node.data}-->`;
            }
            default: {
                // intentionally ignoring unknown node types
                // Note: since this routine is always invoked for childNodes
                // we can safety ignore type 9, 10 and 99 (document, fragment and doctype)
                return '';
            }
        }
    }

    /*
     * Copyright (c) 2020, salesforce.com, inc.
     * All rights reserved.
     * SPDX-License-Identifier: MIT
     * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
     */
    const eventTargetGetter = getOwnPropertyDescriptor$3(Event.prototype, 'target').get;
    const focusEventRelatedTargetGetter = getOwnPropertyDescriptor$3(FocusEvent.prototype, 'relatedTarget').get;
    const { composedPath } = Event.prototype;
    const eventsMeta = new WeakMap();
    function extractEventMetadata(event) {
        let meta = eventsMeta.get(event);
        if (meta) {
            return meta;
        }
        meta = {
            target: eventTargetGetter.call(event),
            composedPath: composedPath.call(event),
        };
        if (event instanceof FocusEvent) {
            meta.relatedTarget = focusEventRelatedTargetGetter.call(event);
        }
        eventsMeta.set(event, meta);
        return meta;
    }
    const targetDistortion = function target() {
        return extractEventMetadata(this).target;
    };
    const composedPathDistortion = function composedPath() {
        return ArrayFilter.call(extractEventMetadata(this).composedPath, (et) => !(et instanceof ShadowRoot));
    };
    const relatedTargetDistortion = function relatedTarget() {
        return extractEventMetadata(this).relatedTarget;
    };
    var EventDistortions = MapCreate([
        [eventTargetGetter, targetDistortion],
        [composedPath, composedPathDistortion],
        [focusEventRelatedTargetGetter, relatedTargetDistortion],
    ]);

    /*! http://mths.be/startswith v0.2.0 by @mathias */
    if (!String.prototype.startsWith) {
    	(function() {
    		var defineProperty = (function() {
    			// IE 8 only supports `Object.defineProperty` on DOM elements
    			try {
    				var object = {};
    				var $defineProperty = Object.defineProperty;
    				var result = $defineProperty(object, object, object) && $defineProperty;
    			} catch(error) {}
    			return result;
    		}());
    		var toString = {}.toString;
    		var startsWith = function(search) {
    			if (this == null) {
    				throw TypeError();
    			}
    			var string = String(this);
    			if (search && toString.call(search) == '[object RegExp]') {
    				throw TypeError();
    			}
    			var stringLength = string.length;
    			var searchString = String(search);
    			var searchLength = searchString.length;
    			var position = arguments.length > 1 ? arguments[1] : undefined;
    			// `ToInteger`
    			var pos = position ? Number(position) : 0;
    			if (pos != pos) { // better `isNaN`
    				pos = 0;
    			}
    			var start = Math.min(Math.max(pos, 0), stringLength);
    			// Avoid the `indexOf` call if no match is possible
    			if (searchLength + start > stringLength) {
    				return false;
    			}
    			var index = -1;
    			while (++index < searchLength) {
    				if (string.charCodeAt(start + index) != searchString.charCodeAt(index)) {
    					return false;
    				}
    			}
    			return true;
    		};
    		if (defineProperty) {
    			defineProperty(String.prototype, 'startsWith', {
    				'value': startsWith,
    				'configurable': true,
    				'writable': true
    			});
    		} else {
    			String.prototype.startsWith = startsWith;
    		}
    	}());
    }

    /*! http://mths.be/endswith v0.2.0 by @mathias */
    if (!String.prototype.endsWith) {
    	(function() {
    		var defineProperty = (function() {
    			// IE 8 only supports `Object.defineProperty` on DOM elements
    			try {
    				var object = {};
    				var $defineProperty = Object.defineProperty;
    				var result = $defineProperty(object, object, object) && $defineProperty;
    			} catch(error) {}
    			return result;
    		}());
    		var toString = {}.toString;
    		var endsWith = function(search) {
    			if (this == null) {
    				throw TypeError();
    			}
    			var string = String(this);
    			if (search && toString.call(search) == '[object RegExp]') {
    				throw TypeError();
    			}
    			var stringLength = string.length;
    			var searchString = String(search);
    			var searchLength = searchString.length;
    			var pos = stringLength;
    			if (arguments.length > 1) {
    				var position = arguments[1];
    				if (position !== undefined) {
    					// `ToInteger`
    					pos = position ? Number(position) : 0;
    					if (pos != pos) { // better `isNaN`
    						pos = 0;
    					}
    				}
    			}
    			var end = Math.min(Math.max(pos, 0), stringLength);
    			var start = end - searchLength;
    			if (start < 0) {
    				return false;
    			}
    			var index = -1;
    			while (++index < searchLength) {
    				if (string.charCodeAt(start + index) != searchString.charCodeAt(index)) {
    					return false;
    				}
    			}
    			return true;
    		};
    		if (defineProperty) {
    			defineProperty(String.prototype, 'endsWith', {
    				'value': endsWith,
    				'configurable': true,
    				'writable': true
    			});
    		} else {
    			String.prototype.endsWith = endsWith;
    		}
    	}());
    }

    /*
    object-assign
    (c) Sindre Sorhus
    @license MIT
    */
    /* eslint-disable no-unused-vars */
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var hasOwnProperty$3 = Object.prototype.hasOwnProperty;
    var propIsEnumerable = Object.prototype.propertyIsEnumerable;

    function toObject(val) {
    	if (val === null || val === undefined) {
    		throw new TypeError('Object.assign cannot be called with null or undefined');
    	}

    	return Object(val);
    }

    function shouldUseNative() {
    	try {
    		if (!Object.assign) {
    			return false;
    		}

    		// Detect buggy property enumeration order in older V8 versions.

    		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
    		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
    		test1[5] = 'de';
    		if (Object.getOwnPropertyNames(test1)[0] === '5') {
    			return false;
    		}

    		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
    		var test2 = {};
    		for (var i = 0; i < 10; i++) {
    			test2['_' + String.fromCharCode(i)] = i;
    		}
    		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
    			return test2[n];
    		});
    		if (order2.join('') !== '0123456789') {
    			return false;
    		}

    		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
    		var test3 = {};
    		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
    			test3[letter] = letter;
    		});
    		if (Object.keys(Object.assign({}, test3)).join('') !==
    				'abcdefghijklmnopqrst') {
    			return false;
    		}

    		return true;
    	} catch (err) {
    		// We don't expect any of the above to throw, but better to be safe.
    		return false;
    	}
    }

    var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
    	var arguments$1 = arguments;

    	var from;
    	var to = toObject(target);
    	var symbols;

    	for (var s = 1; s < arguments.length; s++) {
    		from = Object(arguments$1[s]);

    		for (var key in from) {
    			if (hasOwnProperty$3.call(from, key)) {
    				to[key] = from[key];
    			}
    		}

    		if (getOwnPropertySymbols) {
    			symbols = getOwnPropertySymbols(from);
    			for (var i = 0; i < symbols.length; i++) {
    				if (propIsEnumerable.call(from, symbols[i])) {
    					to[symbols[i]] = from[symbols[i]];
    				}
    			}
    		}
    	}

    	return to;
    };

    var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

    function getDefaultExportFromCjs (x) {
    	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
    }

    function createCommonjsModule(fn, basedir, module) {
    	return module = {
    	  path: basedir,
    	  exports: {},
    	  require: function (path, base) {
          return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
        }
    	}, fn(module, module.exports), module.exports;
    }

    function commonjsRequire () {
    	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
    }

    var indexesOf = function (ary, item) {
      var i = -1, indexes = [];
      while((i = ary.indexOf(item, i + 1)) !== -1)
        { indexes.push(i); }
      return indexes
    };

    function unique_pred(list, compare) {
      var ptr = 1
        , len = list.length
        , a=list[0], b=list[0];
      for(var i=1; i<len; ++i) {
        b = a;
        a = list[i];
        if(compare(a, b)) {
          if(i === ptr) {
            ptr++;
            continue
          }
          list[ptr++] = a;
        }
      }
      list.length = ptr;
      return list
    }

    function unique_eq(list) {
      var ptr = 1
        , len = list.length
        , a=list[0], b = list[0];
      for(var i=1; i<len; ++i, b=a) {
        b = a;
        a = list[i];
        if(a !== b) {
          if(i === ptr) {
            ptr++;
            continue
          }
          list[ptr++] = a;
        }
      }
      list.length = ptr;
      return list
    }

    function unique(list, compare, sorted) {
      if(list.length === 0) {
        return list
      }
      if(compare) {
        if(!sorted) {
          list.sort(compare);
        }
        return unique_pred(list, compare)
      }
      if(!sorted) {
        list.sort();
      }
      return unique_eq(list)
    }

    var uniq = unique;

    var unesc_1 = createCommonjsModule(function (module, exports) {

    exports.__esModule = true;
    exports.default = unesc;
    var whitespace = '[\\x20\\t\\r\\n\\f]';
    var unescapeRegExp = new RegExp('\\\\([\\da-f]{1,6}' + whitespace + '?|(' + whitespace + ')|.)', 'ig');

    function unesc(str) {
      return str.replace(unescapeRegExp, function (_, escaped, escapedWhitespace) {
        var high = '0x' + escaped - 0x10000; // NaN means non-codepoint
        // Workaround erroneous numeric interpretation of +"0x"
        // eslint-disable-next-line no-self-compare

        return high !== high || escapedWhitespace ? escaped : high < 0 ? // BMP codepoint
        String.fromCharCode(high + 0x10000) : // Supplemental Plane codepoint (surrogate pair)
        String.fromCharCode(high >> 10 | 0xd800, high & 0x3ff | 0xdc00);
      });
    }

    module.exports = exports.default;
    });

    var getProp_1 = createCommonjsModule(function (module, exports) {

    exports.__esModule = true;
    exports.default = getProp;

    function getProp(obj) {
      var arguments$1 = arguments;

      for (var _len = arguments.length, props = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        props[_key - 1] = arguments$1[_key];
      }

      while (props.length > 0) {
        var prop = props.shift();

        if (!obj[prop]) {
          return undefined;
        }

        obj = obj[prop];
      }

      return obj;
    }

    module.exports = exports.default;
    });

    var ensureObject_1 = createCommonjsModule(function (module, exports) {

    exports.__esModule = true;
    exports.default = ensureObject;

    function ensureObject(obj) {
      var arguments$1 = arguments;

      for (var _len = arguments.length, props = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        props[_key - 1] = arguments$1[_key];
      }

      while (props.length > 0) {
        var prop = props.shift();

        if (!obj[prop]) {
          obj[prop] = {};
        }

        obj = obj[prop];
      }
    }

    module.exports = exports.default;
    });

    var stripComments_1 = createCommonjsModule(function (module, exports) {

    exports.__esModule = true;
    exports.default = stripComments;

    function stripComments(str) {
      var s = "";
      var commentStart = str.indexOf("/*");
      var lastEnd = 0;

      while (commentStart >= 0) {
        s = s + str.slice(lastEnd, commentStart);
        var commentEnd = str.indexOf("*/", commentStart + 2);

        if (commentEnd < 0) {
          return s;
        }

        lastEnd = commentEnd + 2;
        commentStart = str.indexOf("/*", lastEnd);
      }

      s = s + str.slice(lastEnd);
      return s;
    }

    module.exports = exports.default;
    });

    var util = createCommonjsModule(function (module, exports) {

    exports.__esModule = true;
    exports.stripComments = exports.ensureObject = exports.getProp = exports.unesc = void 0;

    var _unesc = _interopRequireDefault(unesc_1);

    exports.unesc = _unesc.default;

    var _getProp = _interopRequireDefault(getProp_1);

    exports.getProp = _getProp.default;

    var _ensureObject = _interopRequireDefault(ensureObject_1);

    exports.ensureObject = _ensureObject.default;

    var _stripComments = _interopRequireDefault(stripComments_1);

    exports.stripComments = _stripComments.default;

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    });

    var node = createCommonjsModule(function (module, exports) {

    exports.__esModule = true;
    exports.default = void 0;



    function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) { descriptor.writable = true; } Object.defineProperty(target, descriptor.key, descriptor); } }

    function _createClass(Constructor, protoProps, staticProps) { if (protoProps) { _defineProperties(Constructor.prototype, protoProps); } if (staticProps) { _defineProperties(Constructor, staticProps); } return Constructor; }

    var cloneNode = function cloneNode(obj, parent) {
      if (typeof obj !== 'object' || obj === null) {
        return obj;
      }

      var cloned = new obj.constructor();

      for (var i in obj) {
        if (!obj.hasOwnProperty(i)) {
          continue;
        }

        var value = obj[i];
        var type = typeof value;

        if (i === 'parent' && type === 'object') {
          if (parent) {
            cloned[i] = parent;
          }
        } else if (value instanceof Array) {
          cloned[i] = value.map(function (j) {
            return cloneNode(j, cloned);
          });
        } else {
          cloned[i] = cloneNode(value, cloned);
        }
      }

      return cloned;
    };

    var Node =
    /*#__PURE__*/
    function () {
      function Node(opts) {
        if (opts === void 0) {
          opts = {};
        }

        objectAssign(this, opts);
        this.spaces = this.spaces || {};
        this.spaces.before = this.spaces.before || '';
        this.spaces.after = this.spaces.after || '';
      }

      var _proto = Node.prototype;

      _proto.remove = function remove() {
        if (this.parent) {
          this.parent.removeChild(this);
        }

        this.parent = undefined;
        return this;
      };

      _proto.replaceWith = function replaceWith() {
        var arguments$1 = arguments;

        if (this.parent) {
          for (var index in arguments) {
            this.parent.insertBefore(this, arguments$1[index]);
          }

          this.remove();
        }

        return this;
      };

      _proto.next = function next() {
        return this.parent.at(this.parent.index(this) + 1);
      };

      _proto.prev = function prev() {
        return this.parent.at(this.parent.index(this) - 1);
      };

      _proto.clone = function clone(overrides) {
        if (overrides === void 0) {
          overrides = {};
        }

        var cloned = cloneNode(this);

        for (var name in overrides) {
          cloned[name] = overrides[name];
        }

        return cloned;
      }
      /**
       * Some non-standard syntax doesn't follow normal escaping rules for css.
       * This allows non standard syntax to be appended to an existing property
       * by specifying the escaped value. By specifying the escaped value,
       * illegal characters are allowed to be directly inserted into css output.
       * @param {string} name the property to set
       * @param {any} value the unescaped value of the property
       * @param {string} valueEscaped optional. the escaped value of the property.
       */
      ;

      _proto.appendToPropertyAndEscape = function appendToPropertyAndEscape(name, value, valueEscaped) {
        if (!this.raws) {
          this.raws = {};
        }

        var originalValue = this[name];
        var originalEscaped = this.raws[name];
        this[name] = originalValue + value; // this may trigger a setter that updates raws, so it has to be set first.

        if (originalEscaped || valueEscaped !== value) {
          this.raws[name] = (originalEscaped || originalValue) + valueEscaped;
        } else {
          delete this.raws[name]; // delete any escaped value that was created by the setter.
        }
      }
      /**
       * Some non-standard syntax doesn't follow normal escaping rules for css.
       * This allows the escaped value to be specified directly, allowing illegal
       * characters to be directly inserted into css output.
       * @param {string} name the property to set
       * @param {any} value the unescaped value of the property
       * @param {string} valueEscaped the escaped value of the property.
       */
      ;

      _proto.setPropertyAndEscape = function setPropertyAndEscape(name, value, valueEscaped) {
        if (!this.raws) {
          this.raws = {};
        }

        this[name] = value; // this may trigger a setter that updates raws, so it has to be set first.

        this.raws[name] = valueEscaped;
      }
      /**
       * When you want a value to passed through to CSS directly. This method
       * deletes the corresponding raw value causing the stringifier to fallback
       * to the unescaped value.
       * @param {string} name the property to set.
       * @param {any} value The value that is both escaped and unescaped.
       */
      ;

      _proto.setPropertyWithoutEscape = function setPropertyWithoutEscape(name, value) {
        this[name] = value; // this may trigger a setter that updates raws, so it has to be set first.

        if (this.raws) {
          delete this.raws[name];
        }
      }
      /**
       *
       * @param {number} line The number (starting with 1)
       * @param {number} column The column number (starting with 1)
       */
      ;

      _proto.isAtPosition = function isAtPosition(line, column) {
        if (this.source && this.source.start && this.source.end) {
          if (this.source.start.line > line) {
            return false;
          }

          if (this.source.end.line < line) {
            return false;
          }

          if (this.source.start.line === line && this.source.start.column > column) {
            return false;
          }

          if (this.source.end.line === line && this.source.end.column < column) {
            return false;
          }

          return true;
        }

        return undefined;
      };

      _proto.stringifyProperty = function stringifyProperty(name) {
        return this.raws && this.raws[name] || this[name];
      };

      _proto.valueToString = function valueToString() {
        return String(this.stringifyProperty("value"));
      };

      _proto.toString = function toString() {
        return [this.rawSpaceBefore, this.valueToString(), this.rawSpaceAfter].join('');
      };

      _createClass(Node, [{
        key: "rawSpaceBefore",
        get: function get() {
          var rawSpace = this.raws && this.raws.spaces && this.raws.spaces.before;

          if (rawSpace === undefined) {
            rawSpace = this.spaces && this.spaces.before;
          }

          return rawSpace || "";
        },
        set: function set(raw) {
          (0, util.ensureObject)(this, "raws", "spaces");
          this.raws.spaces.before = raw;
        }
      }, {
        key: "rawSpaceAfter",
        get: function get() {
          var rawSpace = this.raws && this.raws.spaces && this.raws.spaces.after;

          if (rawSpace === undefined) {
            rawSpace = this.spaces.after;
          }

          return rawSpace || "";
        },
        set: function set(raw) {
          (0, util.ensureObject)(this, "raws", "spaces");
          this.raws.spaces.after = raw;
        }
      }]);

      return Node;
    }();

    exports.default = Node;
    module.exports = exports.default;
    });

    var types = createCommonjsModule(function (module, exports) {

    exports.__esModule = true;
    exports.UNIVERSAL = exports.ATTRIBUTE = exports.CLASS = exports.COMBINATOR = exports.COMMENT = exports.ID = exports.NESTING = exports.PSEUDO = exports.ROOT = exports.SELECTOR = exports.STRING = exports.TAG = void 0;
    var TAG = 'tag';
    exports.TAG = TAG;
    var STRING = 'string';
    exports.STRING = STRING;
    var SELECTOR = 'selector';
    exports.SELECTOR = SELECTOR;
    var ROOT = 'root';
    exports.ROOT = ROOT;
    var PSEUDO = 'pseudo';
    exports.PSEUDO = PSEUDO;
    var NESTING = 'nesting';
    exports.NESTING = NESTING;
    var ID = 'id';
    exports.ID = ID;
    var COMMENT = 'comment';
    exports.COMMENT = COMMENT;
    var COMBINATOR = 'combinator';
    exports.COMBINATOR = COMBINATOR;
    var CLASS = 'class';
    exports.CLASS = CLASS;
    var ATTRIBUTE = 'attribute';
    exports.ATTRIBUTE = ATTRIBUTE;
    var UNIVERSAL = 'universal';
    exports.UNIVERSAL = UNIVERSAL;
    });

    var container = createCommonjsModule(function (module, exports) {

    exports.__esModule = true;
    exports.default = void 0;

    var _node = _interopRequireDefault(node);

    var types$1 = _interopRequireWildcard(types);

    function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) { descriptor.writable = true; } Object.defineProperty(target, descriptor.key, descriptor); } }

    function _createClass(Constructor, protoProps, staticProps) { if (protoProps) { _defineProperties(Constructor.prototype, protoProps); } if (staticProps) { _defineProperties(Constructor, staticProps); } return Constructor; }

    function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

    var Container =
    /*#__PURE__*/
    function (_Node) {
      _inheritsLoose(Container, _Node);

      function Container(opts) {
        var _this;

        _this = _Node.call(this, opts) || this;

        if (!_this.nodes) {
          _this.nodes = [];
        }

        return _this;
      }

      var _proto = Container.prototype;

      _proto.append = function append(selector) {
        selector.parent = this;
        this.nodes.push(selector);
        return this;
      };

      _proto.prepend = function prepend(selector) {
        selector.parent = this;
        this.nodes.unshift(selector);
        return this;
      };

      _proto.at = function at(index) {
        return this.nodes[index];
      };

      _proto.index = function index(child) {
        if (typeof child === 'number') {
          return child;
        }

        return this.nodes.indexOf(child);
      };

      _proto.removeChild = function removeChild(child) {
        child = this.index(child);
        this.at(child).parent = undefined;
        this.nodes.splice(child, 1);
        var index;

        for (var id in this.indexes) {
          index = this.indexes[id];

          if (index >= child) {
            this.indexes[id] = index - 1;
          }
        }

        return this;
      };

      _proto.removeAll = function removeAll() {
        for (var _iterator = this.nodes, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
          var _ref;

          if (_isArray) {
            if (_i >= _iterator.length) { break; }
            _ref = _iterator[_i++];
          } else {
            _i = _iterator.next();
            if (_i.done) { break; }
            _ref = _i.value;
          }

          var node = _ref;
          node.parent = undefined;
        }

        this.nodes = [];
        return this;
      };

      _proto.empty = function empty() {
        return this.removeAll();
      };

      _proto.insertAfter = function insertAfter(oldNode, newNode) {
        newNode.parent = this;
        var oldIndex = this.index(oldNode);
        this.nodes.splice(oldIndex + 1, 0, newNode);
        newNode.parent = this;
        var index;

        for (var id in this.indexes) {
          index = this.indexes[id];

          if (oldIndex <= index) {
            this.indexes[id] = index + 1;
          }
        }

        return this;
      };

      _proto.insertBefore = function insertBefore(oldNode, newNode) {
        newNode.parent = this;
        var oldIndex = this.index(oldNode);
        this.nodes.splice(oldIndex, 0, newNode);
        newNode.parent = this;
        var index;

        for (var id in this.indexes) {
          index = this.indexes[id];

          if (index <= oldIndex) {
            this.indexes[id] = index + 1;
          }
        }

        return this;
      };

      _proto._findChildAtPosition = function _findChildAtPosition(line, col) {
        var found = undefined;
        this.each(function (node) {
          if (node.atPosition) {
            var foundChild = node.atPosition(line, col);

            if (foundChild) {
              found = foundChild;
              return false;
            }
          } else if (node.isAtPosition(line, col)) {
            found = node;
            return false;
          }
        });
        return found;
      }
      /**
       * Return the most specific node at the line and column number given.
       * The source location is based on the original parsed location, locations aren't
       * updated as selector nodes are mutated.
       * 
       * Note that this location is relative to the location of the first character
       * of the selector, and not the location of the selector in the overall document
       * when used in conjunction with postcss.
       *
       * If not found, returns undefined.
       * @param {number} line The line number of the node to find. (1-based index)
       * @param {number} col  The column number of the node to find. (1-based index)
       */
      ;

      _proto.atPosition = function atPosition(line, col) {
        if (this.isAtPosition(line, col)) {
          return this._findChildAtPosition(line, col) || this;
        } else {
          return undefined;
        }
      };

      _proto._inferEndPosition = function _inferEndPosition() {
        if (this.last && this.last.source && this.last.source.end) {
          this.source = this.source || {};
          this.source.end = this.source.end || {};
          objectAssign(this.source.end, this.last.source.end);
        }
      };

      _proto.each = function each(callback) {
        if (!this.lastEach) {
          this.lastEach = 0;
        }

        if (!this.indexes) {
          this.indexes = {};
        }

        this.lastEach++;
        var id = this.lastEach;
        this.indexes[id] = 0;

        if (!this.length) {
          return undefined;
        }

        var index, result;

        while (this.indexes[id] < this.length) {
          index = this.indexes[id];
          result = callback(this.at(index), index);

          if (result === false) {
            break;
          }

          this.indexes[id] += 1;
        }

        delete this.indexes[id];

        if (result === false) {
          return false;
        }
      };

      _proto.walk = function walk(callback) {
        return this.each(function (node, i) {
          var result = callback(node, i);

          if (result !== false && node.length) {
            result = node.walk(callback);
          }

          if (result === false) {
            return false;
          }
        });
      };

      _proto.walkAttributes = function walkAttributes(callback) {
        var _this2 = this;

        return this.walk(function (selector) {
          if (selector.type === types$1.ATTRIBUTE) {
            return callback.call(_this2, selector);
          }
        });
      };

      _proto.walkClasses = function walkClasses(callback) {
        var _this3 = this;

        return this.walk(function (selector) {
          if (selector.type === types$1.CLASS) {
            return callback.call(_this3, selector);
          }
        });
      };

      _proto.walkCombinators = function walkCombinators(callback) {
        var _this4 = this;

        return this.walk(function (selector) {
          if (selector.type === types$1.COMBINATOR) {
            return callback.call(_this4, selector);
          }
        });
      };

      _proto.walkComments = function walkComments(callback) {
        var _this5 = this;

        return this.walk(function (selector) {
          if (selector.type === types$1.COMMENT) {
            return callback.call(_this5, selector);
          }
        });
      };

      _proto.walkIds = function walkIds(callback) {
        var _this6 = this;

        return this.walk(function (selector) {
          if (selector.type === types$1.ID) {
            return callback.call(_this6, selector);
          }
        });
      };

      _proto.walkNesting = function walkNesting(callback) {
        var _this7 = this;

        return this.walk(function (selector) {
          if (selector.type === types$1.NESTING) {
            return callback.call(_this7, selector);
          }
        });
      };

      _proto.walkPseudos = function walkPseudos(callback) {
        var _this8 = this;

        return this.walk(function (selector) {
          if (selector.type === types$1.PSEUDO) {
            return callback.call(_this8, selector);
          }
        });
      };

      _proto.walkTags = function walkTags(callback) {
        var _this9 = this;

        return this.walk(function (selector) {
          if (selector.type === types$1.TAG) {
            return callback.call(_this9, selector);
          }
        });
      };

      _proto.walkUniversals = function walkUniversals(callback) {
        var _this10 = this;

        return this.walk(function (selector) {
          if (selector.type === types$1.UNIVERSAL) {
            return callback.call(_this10, selector);
          }
        });
      };

      _proto.split = function split(callback) {
        var _this11 = this;

        var current = [];
        return this.reduce(function (memo, node, index) {
          var split = callback.call(_this11, node);
          current.push(node);

          if (split) {
            memo.push(current);
            current = [];
          } else if (index === _this11.length - 1) {
            memo.push(current);
          }

          return memo;
        }, []);
      };

      _proto.map = function map(callback) {
        return this.nodes.map(callback);
      };

      _proto.reduce = function reduce(callback, memo) {
        return this.nodes.reduce(callback, memo);
      };

      _proto.every = function every(callback) {
        return this.nodes.every(callback);
      };

      _proto.some = function some(callback) {
        return this.nodes.some(callback);
      };

      _proto.filter = function filter(callback) {
        return this.nodes.filter(callback);
      };

      _proto.sort = function sort(callback) {
        return this.nodes.sort(callback);
      };

      _proto.toString = function toString() {
        return this.map(String).join('');
      };

      _createClass(Container, [{
        key: "first",
        get: function get() {
          return this.at(0);
        }
      }, {
        key: "last",
        get: function get() {
          return this.at(this.length - 1);
        }
      }, {
        key: "length",
        get: function get() {
          return this.nodes.length;
        }
      }]);

      return Container;
    }(_node.default);

    exports.default = Container;
    module.exports = exports.default;
    });

    var root = createCommonjsModule(function (module, exports) {

    exports.__esModule = true;
    exports.default = void 0;

    var _container = _interopRequireDefault(container);



    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) { descriptor.writable = true; } Object.defineProperty(target, descriptor.key, descriptor); } }

    function _createClass(Constructor, protoProps, staticProps) { if (protoProps) { _defineProperties(Constructor.prototype, protoProps); } if (staticProps) { _defineProperties(Constructor, staticProps); } return Constructor; }

    function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

    var Root =
    /*#__PURE__*/
    function (_Container) {
      _inheritsLoose(Root, _Container);

      function Root(opts) {
        var _this;

        _this = _Container.call(this, opts) || this;
        _this.type = types.ROOT;
        return _this;
      }

      var _proto = Root.prototype;

      _proto.toString = function toString() {
        var str = this.reduce(function (memo, selector) {
          memo.push(String(selector));
          return memo;
        }, []).join(',');
        return this.trailingComma ? str + ',' : str;
      };

      _proto.error = function error(message, options) {
        if (this._error) {
          return this._error(message, options);
        } else {
          return new Error(message);
        }
      };

      _createClass(Root, [{
        key: "errorGenerator",
        set: function set(handler) {
          this._error = handler;
        }
      }]);

      return Root;
    }(_container.default);

    exports.default = Root;
    module.exports = exports.default;
    });

    var selector = createCommonjsModule(function (module, exports) {

    exports.__esModule = true;
    exports.default = void 0;

    var _container = _interopRequireDefault(container);



    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

    var Selector =
    /*#__PURE__*/
    function (_Container) {
      _inheritsLoose(Selector, _Container);

      function Selector(opts) {
        var _this;

        _this = _Container.call(this, opts) || this;
        _this.type = types.SELECTOR;
        return _this;
      }

      return Selector;
    }(_container.default);

    exports.default = Selector;
    module.exports = exports.default;
    });

    /*! https://mths.be/cssesc v3.0.0 by @mathias */

    var object = {};
    var hasOwnProperty$1$1 = object.hasOwnProperty;
    var merge = function merge(options, defaults) {
    	if (!options) {
    		return defaults;
    	}
    	var result = {};
    	for (var key in defaults) {
    		// `if (defaults.hasOwnProperty(key) { … }` is not needed here, since
    		// only recognized option names are used.
    		result[key] = hasOwnProperty$1$1.call(options, key) ? options[key] : defaults[key];
    	}
    	return result;
    };

    var regexAnySingleEscape = /[ -,\.\/:-@\[-\^`\{-~]/;
    var regexSingleEscape = /[ -,\.\/:-@\[\]\^`\{-~]/;
    var regexExcessiveSpaces = /(^|\\+)?(\\[A-F0-9]{1,6})\x20(?![a-fA-F0-9\x20])/g;

    // https://mathiasbynens.be/notes/css-escapes#css
    var cssesc = function cssesc(string, options) {
    	options = merge(options, cssesc.options);
    	if (options.quotes != 'single' && options.quotes != 'double') {
    		options.quotes = 'single';
    	}
    	var quote = options.quotes == 'double' ? '"' : '\'';
    	var isIdentifier = options.isIdentifier;

    	var firstChar = string.charAt(0);
    	var output = '';
    	var counter = 0;
    	var length = string.length;
    	while (counter < length) {
    		var character = string.charAt(counter++);
    		var codePoint = character.charCodeAt();
    		var value = void 0;
    		// If it’s not a printable ASCII character…
    		if (codePoint < 0x20 || codePoint > 0x7E) {
    			if (codePoint >= 0xD800 && codePoint <= 0xDBFF && counter < length) {
    				// It’s a high surrogate, and there is a next character.
    				var extra = string.charCodeAt(counter++);
    				if ((extra & 0xFC00) == 0xDC00) {
    					// next character is low surrogate
    					codePoint = ((codePoint & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000;
    				} else {
    					// It’s an unmatched surrogate; only append this code unit, in case
    					// the next code unit is the high surrogate of a surrogate pair.
    					counter--;
    				}
    			}
    			value = '\\' + codePoint.toString(16).toUpperCase() + ' ';
    		} else {
    			if (options.escapeEverything) {
    				if (regexAnySingleEscape.test(character)) {
    					value = '\\' + character;
    				} else {
    					value = '\\' + codePoint.toString(16).toUpperCase() + ' ';
    				}
    			} else if (/[\t\n\f\r\x0B]/.test(character)) {
    				value = '\\' + codePoint.toString(16).toUpperCase() + ' ';
    			} else if (character == '\\' || !isIdentifier && (character == '"' && quote == character || character == '\'' && quote == character) || isIdentifier && regexSingleEscape.test(character)) {
    				value = '\\' + character;
    			} else {
    				value = character;
    			}
    		}
    		output += value;
    	}

    	if (isIdentifier) {
    		if (/^-[-\d]/.test(output)) {
    			output = '\\-' + output.slice(1);
    		} else if (/\d/.test(firstChar)) {
    			output = '\\3' + firstChar + ' ' + output.slice(1);
    		}
    	}

    	// Remove spaces after `\HEX` escapes that are not followed by a hex digit,
    	// since they’re redundant. Note that this is only possible if the escape
    	// sequence isn’t preceded by an odd number of backslashes.
    	output = output.replace(regexExcessiveSpaces, function ($0, $1, $2) {
    		if ($1 && $1.length % 2) {
    			// It’s not safe to remove the space, so don’t.
    			return $0;
    		}
    		// Strip the space.
    		return ($1 || '') + $2;
    	});

    	if (!isIdentifier && options.wrap) {
    		return quote + output + quote;
    	}
    	return output;
    };

    // Expose default options (so they can be overridden globally).
    cssesc.options = {
    	'escapeEverything': false,
    	'isIdentifier': false,
    	'quotes': 'single',
    	'wrap': false
    };

    cssesc.version = '3.0.0';

    var cssesc_1 = cssesc;

    var className = createCommonjsModule(function (module, exports) {

    exports.__esModule = true;
    exports.default = void 0;

    var _cssesc = _interopRequireDefault(cssesc_1);



    var _node = _interopRequireDefault(node);



    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) { descriptor.writable = true; } Object.defineProperty(target, descriptor.key, descriptor); } }

    function _createClass(Constructor, protoProps, staticProps) { if (protoProps) { _defineProperties(Constructor.prototype, protoProps); } if (staticProps) { _defineProperties(Constructor, staticProps); } return Constructor; }

    function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

    var ClassName =
    /*#__PURE__*/
    function (_Node) {
      _inheritsLoose(ClassName, _Node);

      function ClassName(opts) {
        var _this;

        _this = _Node.call(this, opts) || this;
        _this.type = types.CLASS;
        _this._constructed = true;
        return _this;
      }

      var _proto = ClassName.prototype;

      _proto.valueToString = function valueToString() {
        return '.' + _Node.prototype.valueToString.call(this);
      };

      _createClass(ClassName, [{
        key: "value",
        set: function set(v) {
          if (this._constructed) {
            var escaped = (0, _cssesc.default)(v, {
              isIdentifier: true
            });

            if (escaped !== v) {
              (0, util.ensureObject)(this, "raws");
              this.raws.value = escaped;
            } else if (this.raws) {
              delete this.raws.value;
            }
          }

          this._value = v;
        },
        get: function get() {
          return this._value;
        }
      }]);

      return ClassName;
    }(_node.default);

    exports.default = ClassName;
    module.exports = exports.default;
    });

    var comment = createCommonjsModule(function (module, exports) {

    exports.__esModule = true;
    exports.default = void 0;

    var _node = _interopRequireDefault(node);



    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

    var Comment =
    /*#__PURE__*/
    function (_Node) {
      _inheritsLoose(Comment, _Node);

      function Comment(opts) {
        var _this;

        _this = _Node.call(this, opts) || this;
        _this.type = types.COMMENT;
        return _this;
      }

      return Comment;
    }(_node.default);

    exports.default = Comment;
    module.exports = exports.default;
    });

    var id = createCommonjsModule(function (module, exports) {

    exports.__esModule = true;
    exports.default = void 0;

    var _node = _interopRequireDefault(node);



    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

    var ID =
    /*#__PURE__*/
    function (_Node) {
      _inheritsLoose(ID, _Node);

      function ID(opts) {
        var _this;

        _this = _Node.call(this, opts) || this;
        _this.type = types.ID;
        return _this;
      }

      var _proto = ID.prototype;

      _proto.valueToString = function valueToString() {
        return '#' + _Node.prototype.valueToString.call(this);
      };

      return ID;
    }(_node.default);

    exports.default = ID;
    module.exports = exports.default;
    });

    var namespace = createCommonjsModule(function (module, exports) {

    exports.__esModule = true;
    exports.default = void 0;

    var _cssesc = _interopRequireDefault(cssesc_1);



    var _node = _interopRequireDefault(node);

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) { descriptor.writable = true; } Object.defineProperty(target, descriptor.key, descriptor); } }

    function _createClass(Constructor, protoProps, staticProps) { if (protoProps) { _defineProperties(Constructor.prototype, protoProps); } if (staticProps) { _defineProperties(Constructor, staticProps); } return Constructor; }

    function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

    var Namespace =
    /*#__PURE__*/
    function (_Node) {
      _inheritsLoose(Namespace, _Node);

      function Namespace() {
        return _Node.apply(this, arguments) || this;
      }

      var _proto = Namespace.prototype;

      _proto.qualifiedName = function qualifiedName(value) {
        if (this.namespace) {
          return this.namespaceString + "|" + value;
        } else {
          return value;
        }
      };

      _proto.valueToString = function valueToString() {
        return this.qualifiedName(_Node.prototype.valueToString.call(this));
      };

      _createClass(Namespace, [{
        key: "namespace",
        get: function get() {
          return this._namespace;
        },
        set: function set(namespace) {
          if (namespace === true || namespace === "*" || namespace === "&") {
            this._namespace = namespace;

            if (this.raws) {
              delete this.raws.namespace;
            }

            return;
          }

          var escaped = (0, _cssesc.default)(namespace, {
            isIdentifier: true
          });
          this._namespace = namespace;

          if (escaped !== namespace) {
            (0, util.ensureObject)(this, "raws");
            this.raws.namespace = escaped;
          } else if (this.raws) {
            delete this.raws.namespace;
          }
        }
      }, {
        key: "ns",
        get: function get() {
          return this._namespace;
        },
        set: function set(namespace) {
          this.namespace = namespace;
        }
      }, {
        key: "namespaceString",
        get: function get() {
          if (this.namespace) {
            var ns = this.stringifyProperty("namespace");

            if (ns === true) {
              return '';
            } else {
              return ns;
            }
          } else {
            return '';
          }
        }
      }]);

      return Namespace;
    }(_node.default);

    exports.default = Namespace;
    module.exports = exports.default;
    });

    var tag = createCommonjsModule(function (module, exports) {

    exports.__esModule = true;
    exports.default = void 0;

    var _namespace = _interopRequireDefault(namespace);



    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

    var Tag =
    /*#__PURE__*/
    function (_Namespace) {
      _inheritsLoose(Tag, _Namespace);

      function Tag(opts) {
        var _this;

        _this = _Namespace.call(this, opts) || this;
        _this.type = types.TAG;
        return _this;
      }

      return Tag;
    }(_namespace.default);

    exports.default = Tag;
    module.exports = exports.default;
    });

    var string = createCommonjsModule(function (module, exports) {

    exports.__esModule = true;
    exports.default = void 0;

    var _node = _interopRequireDefault(node);



    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

    var String =
    /*#__PURE__*/
    function (_Node) {
      _inheritsLoose(String, _Node);

      function String(opts) {
        var _this;

        _this = _Node.call(this, opts) || this;
        _this.type = types.STRING;
        return _this;
      }

      return String;
    }(_node.default);

    exports.default = String;
    module.exports = exports.default;
    });

    var pseudo = createCommonjsModule(function (module, exports) {

    exports.__esModule = true;
    exports.default = void 0;

    var _container = _interopRequireDefault(container);



    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

    var Pseudo =
    /*#__PURE__*/
    function (_Container) {
      _inheritsLoose(Pseudo, _Container);

      function Pseudo(opts) {
        var _this;

        _this = _Container.call(this, opts) || this;
        _this.type = types.PSEUDO;
        return _this;
      }

      var _proto = Pseudo.prototype;

      _proto.toString = function toString() {
        var params = this.length ? '(' + this.map(String).join(',') + ')' : '';
        return [this.rawSpaceBefore, this.stringifyProperty("value"), params, this.rawSpaceAfter].join('');
      };

      return Pseudo;
    }(_container.default);

    exports.default = Pseudo;
    module.exports = exports.default;
    });

    /**
     * Module exports.
     */

    var browser = deprecate;

    /**
     * Mark that a method should not be used.
     * Returns a modified function which warns once by default.
     *
     * If `localStorage.noDeprecation = true` is set, then it is a no-op.
     *
     * If `localStorage.throwDeprecation = true` is set, then deprecated functions
     * will throw an Error when invoked.
     *
     * If `localStorage.traceDeprecation = true` is set, then deprecated functions
     * will invoke `console.trace()` instead of `console.error()`.
     *
     * @param {Function} fn - the function to deprecate
     * @param {String} msg - the string to print to the console when `fn` is invoked
     * @returns {Function} a new "deprecated" version of `fn`
     * @api public
     */

    function deprecate (fn, msg) {
      if (config('noDeprecation')) {
        return fn;
      }

      var warned = false;
      function deprecated() {
        if (!warned) {
          if (config('throwDeprecation')) {
            throw new Error(msg);
          } else if (config('traceDeprecation')) {
            console.trace(msg);
          } else {
            console.warn(msg);
          }
          warned = true;
        }
        return fn.apply(this, arguments);
      }

      return deprecated;
    }

    /**
     * Checks `localStorage` for boolean values for the given `name`.
     *
     * @param {String} name
     * @returns {Boolean}
     * @api private
     */

    function config (name) {
      // accessing global.localStorage can trigger a DOMException in sandboxed iframes
      try {
        if (!commonjsGlobal.localStorage) { return false; }
      } catch (_) {
        return false;
      }
      var val = commonjsGlobal.localStorage[name];
      if (null == val) { return false; }
      return String(val).toLowerCase() === 'true';
    }

    var attribute = createCommonjsModule(function (module, exports) {

    exports.__esModule = true;
    exports.unescapeValue = unescapeValue;
    exports.default = void 0;

    var _cssesc = _interopRequireDefault(cssesc_1);

    var _unesc = _interopRequireDefault(unesc_1);

    var _namespace = _interopRequireDefault(namespace);



    var _CSSESC_QUOTE_OPTIONS;

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) { descriptor.writable = true; } Object.defineProperty(target, descriptor.key, descriptor); } }

    function _createClass(Constructor, protoProps, staticProps) { if (protoProps) { _defineProperties(Constructor.prototype, protoProps); } if (staticProps) { _defineProperties(Constructor, staticProps); } return Constructor; }

    function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }



    var WRAPPED_IN_QUOTES = /^('|")(.*)\1$/;
    var warnOfDeprecatedValueAssignment = browser(function () {}, "Assigning an attribute a value containing characters that might need to be escaped is deprecated. " + "Call attribute.setValue() instead.");
    var warnOfDeprecatedQuotedAssignment = browser(function () {}, "Assigning attr.quoted is deprecated and has no effect. Assign to attr.quoteMark instead.");
    var warnOfDeprecatedConstructor = browser(function () {}, "Constructing an Attribute selector with a value without specifying quoteMark is deprecated. Note: The value should be unescaped now.");

    function unescapeValue(value) {
      var deprecatedUsage = false;
      var quoteMark = null;
      var unescaped = value;
      var m = unescaped.match(WRAPPED_IN_QUOTES);

      if (m) {
        quoteMark = m[1];
        unescaped = m[2];
      }

      unescaped = (0, _unesc.default)(unescaped);

      if (unescaped !== value) {
        deprecatedUsage = true;
      }

      return {
        deprecatedUsage: deprecatedUsage,
        unescaped: unescaped,
        quoteMark: quoteMark
      };
    }

    function handleDeprecatedContructorOpts(opts) {
      if (opts.quoteMark !== undefined) {
        return opts;
      }

      if (opts.value === undefined) {
        return opts;
      }

      warnOfDeprecatedConstructor();

      var _unescapeValue = unescapeValue(opts.value),
          quoteMark = _unescapeValue.quoteMark,
          unescaped = _unescapeValue.unescaped;

      if (!opts.raws) {
        opts.raws = {};
      }

      if (opts.raws.value === undefined) {
        opts.raws.value = opts.value;
      }

      opts.value = unescaped;
      opts.quoteMark = quoteMark;
      return opts;
    }

    var Attribute =
    /*#__PURE__*/
    function (_Namespace) {
      _inheritsLoose(Attribute, _Namespace);

      function Attribute(opts) {
        var _this;

        if (opts === void 0) {
          opts = {};
        }

        _this = _Namespace.call(this, handleDeprecatedContructorOpts(opts)) || this;
        _this.type = types.ATTRIBUTE;
        _this.raws = _this.raws || {};
        Object.defineProperty(_this.raws, 'unquoted', {
          get: browser(function () {
            return _this.value;
          }, "attr.raws.unquoted is deprecated. Call attr.value instead."),
          set: browser(function () {
            return _this.value;
          }, "Setting attr.raws.unquoted is deprecated and has no effect. attr.value is unescaped by default now.")
        });
        _this._constructed = true;
        return _this;
      }
      /**
       * Returns the Attribute's value quoted such that it would be legal to use
       * in the value of a css file. The original value's quotation setting
       * used for stringification is left unchanged. See `setValue(value, options)`
       * if you want to control the quote settings of a new value for the attribute.
       *
       * You can also change the quotation used for the current value by setting quoteMark.
       *
       * Options:
       *   * quoteMark {'"' | "'" | null} - Use this value to quote the value. If this
       *     option is not set, the original value for quoteMark will be used. If
       *     indeterminate, a double quote is used. The legal values are:
       *     * `null` - the value will be unquoted and characters will be escaped as necessary.
       *     * `'` - the value will be quoted with a single quote and single quotes are escaped.
       *     * `"` - the value will be quoted with a double quote and double quotes are escaped.
       *   * preferCurrentQuoteMark {boolean} - if true, prefer the source quote mark
       *     over the quoteMark option value.
       *   * smart {boolean} - if true, will select a quote mark based on the value
       *     and the other options specified here. See the `smartQuoteMark()`
       *     method.
       **/


      var _proto = Attribute.prototype;

      _proto.getQuotedValue = function getQuotedValue(options) {
        if (options === void 0) {
          options = {};
        }

        var quoteMark = this._determineQuoteMark(options);

        var cssescopts = CSSESC_QUOTE_OPTIONS[quoteMark];
        var escaped = (0, _cssesc.default)(this._value, cssescopts);
        return escaped;
      };

      _proto._determineQuoteMark = function _determineQuoteMark(options) {
        return options.smart ? this.smartQuoteMark(options) : this.preferredQuoteMark(options);
      }
      /**
       * Set the unescaped value with the specified quotation options. The value
       * provided must not include any wrapping quote marks -- those quotes will
       * be interpreted as part of the value and escaped accordingly.
       */
      ;

      _proto.setValue = function setValue(value, options) {
        if (options === void 0) {
          options = {};
        }

        this._value = value;
        this._quoteMark = this._determineQuoteMark(options);

        this._syncRawValue();
      }
      /**
       * Intelligently select a quoteMark value based on the value's contents. If
       * the value is a legal CSS ident, it will not be quoted. Otherwise a quote
       * mark will be picked that minimizes the number of escapes.
       *
       * If there's no clear winner, the quote mark from these options is used,
       * then the source quote mark (this is inverted if `preferCurrentQuoteMark` is
       * true). If the quoteMark is unspecified, a double quote is used.
       *
       * @param options This takes the quoteMark and preferCurrentQuoteMark options
       * from the quoteValue method.
       */
      ;

      _proto.smartQuoteMark = function smartQuoteMark(options) {
        var v = this.value;
        var numSingleQuotes = v.replace(/[^']/g, '').length;
        var numDoubleQuotes = v.replace(/[^"]/g, '').length;

        if (numSingleQuotes + numDoubleQuotes === 0) {
          var escaped = (0, _cssesc.default)(v, {
            isIdentifier: true
          });

          if (escaped === v) {
            return Attribute.NO_QUOTE;
          } else {
            var pref = this.preferredQuoteMark(options);

            if (pref === Attribute.NO_QUOTE) {
              // pick a quote mark that isn't none and see if it's smaller
              var quote = this.quoteMark || options.quoteMark || Attribute.DOUBLE_QUOTE;
              var opts = CSSESC_QUOTE_OPTIONS[quote];
              var quoteValue = (0, _cssesc.default)(v, opts);

              if (quoteValue.length < escaped.length) {
                return quote;
              }
            }

            return pref;
          }
        } else if (numDoubleQuotes === numSingleQuotes) {
          return this.preferredQuoteMark(options);
        } else if (numDoubleQuotes < numSingleQuotes) {
          return Attribute.DOUBLE_QUOTE;
        } else {
          return Attribute.SINGLE_QUOTE;
        }
      }
      /**
       * Selects the preferred quote mark based on the options and the current quote mark value.
       * If you want the quote mark to depend on the attribute value, call `smartQuoteMark(opts)`
       * instead.
       */
      ;

      _proto.preferredQuoteMark = function preferredQuoteMark(options) {
        var quoteMark = options.preferCurrentQuoteMark ? this.quoteMark : options.quoteMark;

        if (quoteMark === undefined) {
          quoteMark = options.preferCurrentQuoteMark ? options.quoteMark : this.quoteMark;
        }

        if (quoteMark === undefined) {
          quoteMark = Attribute.DOUBLE_QUOTE;
        }

        return quoteMark;
      };

      _proto._syncRawValue = function _syncRawValue() {
        var rawValue = (0, _cssesc.default)(this._value, CSSESC_QUOTE_OPTIONS[this.quoteMark]);

        if (rawValue === this._value) {
          if (this.raws) {
            delete this.raws.value;
          }
        } else {
          this.raws.value = rawValue;
        }
      };

      _proto._handleEscapes = function _handleEscapes(prop, value) {
        if (this._constructed) {
          var escaped = (0, _cssesc.default)(value, {
            isIdentifier: true
          });

          if (escaped !== value) {
            this.raws[prop] = escaped;
          } else {
            delete this.raws[prop];
          }
        }
      };

      _proto._spacesFor = function _spacesFor(name) {
        var attrSpaces = {
          before: '',
          after: ''
        };
        var spaces = this.spaces[name] || {};
        var rawSpaces = this.raws.spaces && this.raws.spaces[name] || {};
        return objectAssign(attrSpaces, spaces, rawSpaces);
      };

      _proto._stringFor = function _stringFor(name, spaceName, concat) {
        if (spaceName === void 0) {
          spaceName = name;
        }

        if (concat === void 0) {
          concat = defaultAttrConcat;
        }

        var attrSpaces = this._spacesFor(spaceName);

        return concat(this.stringifyProperty(name), attrSpaces);
      }
      /**
       * returns the offset of the attribute part specified relative to the
       * start of the node of the output string.
       *
       * * "ns" - alias for "namespace"
       * * "namespace" - the namespace if it exists.
       * * "attribute" - the attribute name
       * * "attributeNS" - the start of the attribute or its namespace
       * * "operator" - the match operator of the attribute
       * * "value" - The value (string or identifier)
       * * "insensitive" - the case insensitivity flag;
       * @param part One of the possible values inside an attribute.
       * @returns -1 if the name is invalid or the value doesn't exist in this attribute.
       */
      ;

      _proto.offsetOf = function offsetOf(name) {
        var count = 1;

        var attributeSpaces = this._spacesFor("attribute");

        count += attributeSpaces.before.length;

        if (name === "namespace" || name === "ns") {
          return this.namespace ? count : -1;
        }

        if (name === "attributeNS") {
          return count;
        }

        count += this.namespaceString.length;

        if (this.namespace) {
          count += 1;
        }

        if (name === "attribute") {
          return count;
        }

        count += this.stringifyProperty("attribute").length;
        count += attributeSpaces.after.length;

        var operatorSpaces = this._spacesFor("operator");

        count += operatorSpaces.before.length;
        var operator = this.stringifyProperty("operator");

        if (name === "operator") {
          return operator ? count : -1;
        }

        count += operator.length;
        count += operatorSpaces.after.length;

        var valueSpaces = this._spacesFor("value");

        count += valueSpaces.before.length;
        var value = this.stringifyProperty("value");

        if (name === "value") {
          return value ? count : -1;
        }

        count += value.length;
        count += valueSpaces.after.length;

        var insensitiveSpaces = this._spacesFor("insensitive");

        count += insensitiveSpaces.before.length;

        if (name === "insensitive") {
          return this.insensitive ? count : -1;
        }

        return -1;
      };

      _proto.toString = function toString() {
        var _this2 = this;

        var selector = [this.rawSpaceBefore, '['];
        selector.push(this._stringFor('qualifiedAttribute', 'attribute'));

        if (this.operator && (this.value || this.value === '')) {
          selector.push(this._stringFor('operator'));
          selector.push(this._stringFor('value'));
          selector.push(this._stringFor('insensitiveFlag', 'insensitive', function (attrValue, attrSpaces) {
            if (attrValue.length > 0 && !_this2.quoted && attrSpaces.before.length === 0 && !(_this2.spaces.value && _this2.spaces.value.after)) {
              attrSpaces.before = " ";
            }

            return defaultAttrConcat(attrValue, attrSpaces);
          }));
        }

        selector.push(']');
        selector.push(this.rawSpaceAfter);
        return selector.join('');
      };

      _createClass(Attribute, [{
        key: "quoted",
        get: function get() {
          var qm = this.quoteMark;
          return qm === "'" || qm === '"';
        },
        set: function set(value) {
          warnOfDeprecatedQuotedAssignment();
        }
        /**
         * returns a single (`'`) or double (`"`) quote character if the value is quoted.
         * returns `null` if the value is not quoted.
         * returns `undefined` if the quotation state is unknown (this can happen when
         * the attribute is constructed without specifying a quote mark.)
         */

      }, {
        key: "quoteMark",
        get: function get() {
          return this._quoteMark;
        }
        /**
         * Set the quote mark to be used by this attribute's value.
         * If the quote mark changes, the raw (escaped) value at `attr.raws.value` of the attribute
         * value is updated accordingly.
         *
         * @param {"'" | '"' | null} quoteMark The quote mark or `null` if the value should be unquoted.
         */
        ,
        set: function set(quoteMark) {
          if (!this._constructed) {
            this._quoteMark = quoteMark;
            return;
          }

          if (this._quoteMark !== quoteMark) {
            this._quoteMark = quoteMark;

            this._syncRawValue();
          }
        }
      }, {
        key: "qualifiedAttribute",
        get: function get() {
          return this.qualifiedName(this.raws.attribute || this.attribute);
        }
      }, {
        key: "insensitiveFlag",
        get: function get() {
          return this.insensitive ? 'i' : '';
        }
      }, {
        key: "value",
        get: function get() {
          return this._value;
        }
        /**
         * Before 3.0, the value had to be set to an escaped value including any wrapped
         * quote marks. In 3.0, the semantics of `Attribute.value` changed so that the value
         * is unescaped during parsing and any quote marks are removed.
         *
         * Because the ambiguity of this semantic change, if you set `attr.value = newValue`,
         * a deprecation warning is raised when the new value contains any characters that would
         * require escaping (including if it contains wrapped quotes).
         *
         * Instead, you should call `attr.setValue(newValue, opts)` and pass options that describe
         * how the new value is quoted.
         */
        ,
        set: function set(v) {
          if (this._constructed) {
            var _unescapeValue2 = unescapeValue(v),
                deprecatedUsage = _unescapeValue2.deprecatedUsage,
                unescaped = _unescapeValue2.unescaped,
                quoteMark = _unescapeValue2.quoteMark;

            if (deprecatedUsage) {
              warnOfDeprecatedValueAssignment();
            }

            if (unescaped === this._value && quoteMark === this._quoteMark) {
              return;
            }

            this._value = unescaped;
            this._quoteMark = quoteMark;

            this._syncRawValue();
          } else {
            this._value = v;
          }
        }
      }, {
        key: "attribute",
        get: function get() {
          return this._attribute;
        },
        set: function set(name) {
          this._handleEscapes("attribute", name);

          this._attribute = name;
        }
      }]);

      return Attribute;
    }(_namespace.default);

    exports.default = Attribute;
    Attribute.NO_QUOTE = null;
    Attribute.SINGLE_QUOTE = "'";
    Attribute.DOUBLE_QUOTE = '"';
    var CSSESC_QUOTE_OPTIONS = (_CSSESC_QUOTE_OPTIONS = {
      "'": {
        quotes: 'single',
        wrap: true
      },
      '"': {
        quotes: 'double',
        wrap: true
      }
    }, _CSSESC_QUOTE_OPTIONS[null] = {
      isIdentifier: true
    }, _CSSESC_QUOTE_OPTIONS);

    function defaultAttrConcat(attrValue, attrSpaces) {
      return "" + attrSpaces.before + attrValue + attrSpaces.after;
    }
    });

    var universal = createCommonjsModule(function (module, exports) {

    exports.__esModule = true;
    exports.default = void 0;

    var _namespace = _interopRequireDefault(namespace);



    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

    var Universal =
    /*#__PURE__*/
    function (_Namespace) {
      _inheritsLoose(Universal, _Namespace);

      function Universal(opts) {
        var _this;

        _this = _Namespace.call(this, opts) || this;
        _this.type = types.UNIVERSAL;
        _this.value = '*';
        return _this;
      }

      return Universal;
    }(_namespace.default);

    exports.default = Universal;
    module.exports = exports.default;
    });

    var combinator = createCommonjsModule(function (module, exports) {

    exports.__esModule = true;
    exports.default = void 0;

    var _node = _interopRequireDefault(node);



    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

    var Combinator =
    /*#__PURE__*/
    function (_Node) {
      _inheritsLoose(Combinator, _Node);

      function Combinator(opts) {
        var _this;

        _this = _Node.call(this, opts) || this;
        _this.type = types.COMBINATOR;
        return _this;
      }

      return Combinator;
    }(_node.default);

    exports.default = Combinator;
    module.exports = exports.default;
    });

    var nesting = createCommonjsModule(function (module, exports) {

    exports.__esModule = true;
    exports.default = void 0;

    var _node = _interopRequireDefault(node);



    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

    var Nesting =
    /*#__PURE__*/
    function (_Node) {
      _inheritsLoose(Nesting, _Node);

      function Nesting(opts) {
        var _this;

        _this = _Node.call(this, opts) || this;
        _this.type = types.NESTING;
        _this.value = '&';
        return _this;
      }

      return Nesting;
    }(_node.default);

    exports.default = Nesting;
    module.exports = exports.default;
    });

    var sortAscending_1 = createCommonjsModule(function (module, exports) {

    exports.__esModule = true;
    exports.default = sortAscending;

    function sortAscending(list) {
      return list.sort(function (a, b) {
        return a - b;
      });
    }
    module.exports = exports.default;
    });

    var tokenTypes = createCommonjsModule(function (module, exports) {

    exports.__esModule = true;
    exports.combinator = exports.word = exports.comment = exports.str = exports.tab = exports.newline = exports.feed = exports.cr = exports.backslash = exports.bang = exports.slash = exports.doubleQuote = exports.singleQuote = exports.space = exports.greaterThan = exports.pipe = exports.equals = exports.plus = exports.caret = exports.tilde = exports.dollar = exports.closeSquare = exports.openSquare = exports.closeParenthesis = exports.openParenthesis = exports.semicolon = exports.colon = exports.comma = exports.at = exports.asterisk = exports.ampersand = void 0;
    var ampersand = 38; // `&`.charCodeAt(0);

    exports.ampersand = ampersand;
    var asterisk = 42; // `*`.charCodeAt(0);

    exports.asterisk = asterisk;
    var at = 64; // `@`.charCodeAt(0);

    exports.at = at;
    var comma = 44; // `,`.charCodeAt(0);

    exports.comma = comma;
    var colon = 58; // `:`.charCodeAt(0);

    exports.colon = colon;
    var semicolon = 59; // `;`.charCodeAt(0);

    exports.semicolon = semicolon;
    var openParenthesis = 40; // `(`.charCodeAt(0);

    exports.openParenthesis = openParenthesis;
    var closeParenthesis = 41; // `)`.charCodeAt(0);

    exports.closeParenthesis = closeParenthesis;
    var openSquare = 91; // `[`.charCodeAt(0);

    exports.openSquare = openSquare;
    var closeSquare = 93; // `]`.charCodeAt(0);

    exports.closeSquare = closeSquare;
    var dollar = 36; // `$`.charCodeAt(0);

    exports.dollar = dollar;
    var tilde = 126; // `~`.charCodeAt(0);

    exports.tilde = tilde;
    var caret = 94; // `^`.charCodeAt(0);

    exports.caret = caret;
    var plus = 43; // `+`.charCodeAt(0);

    exports.plus = plus;
    var equals = 61; // `=`.charCodeAt(0);

    exports.equals = equals;
    var pipe = 124; // `|`.charCodeAt(0);

    exports.pipe = pipe;
    var greaterThan = 62; // `>`.charCodeAt(0);

    exports.greaterThan = greaterThan;
    var space = 32; // ` `.charCodeAt(0);

    exports.space = space;
    var singleQuote = 39; // `'`.charCodeAt(0);

    exports.singleQuote = singleQuote;
    var doubleQuote = 34; // `"`.charCodeAt(0);

    exports.doubleQuote = doubleQuote;
    var slash = 47; // `/`.charCodeAt(0);

    exports.slash = slash;
    var bang = 33; // `!`.charCodeAt(0);

    exports.bang = bang;
    var backslash = 92; // '\\'.charCodeAt(0);

    exports.backslash = backslash;
    var cr = 13; // '\r'.charCodeAt(0);

    exports.cr = cr;
    var feed = 12; // '\f'.charCodeAt(0);

    exports.feed = feed;
    var newline = 10; // '\n'.charCodeAt(0);

    exports.newline = newline;
    var tab = 9; // '\t'.charCodeAt(0);
    // Expose aliases primarily for readability.

    exports.tab = tab;
    var str = singleQuote; // No good single character representation!

    exports.str = str;
    var comment = -1;
    exports.comment = comment;
    var word = -2;
    exports.word = word;
    var combinator = -3;
    exports.combinator = combinator;
    });

    var tokenize_1 = createCommonjsModule(function (module, exports) {

    exports.__esModule = true;
    exports.default = tokenize;
    exports.FIELDS = void 0;

    var t = _interopRequireWildcard(tokenTypes);

    var _unescapable, _wordDelimiters;

    function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

    var unescapable = (_unescapable = {}, _unescapable[t.tab] = true, _unescapable[t.newline] = true, _unescapable[t.cr] = true, _unescapable[t.feed] = true, _unescapable);
    var wordDelimiters = (_wordDelimiters = {}, _wordDelimiters[t.space] = true, _wordDelimiters[t.tab] = true, _wordDelimiters[t.newline] = true, _wordDelimiters[t.cr] = true, _wordDelimiters[t.feed] = true, _wordDelimiters[t.ampersand] = true, _wordDelimiters[t.asterisk] = true, _wordDelimiters[t.bang] = true, _wordDelimiters[t.comma] = true, _wordDelimiters[t.colon] = true, _wordDelimiters[t.semicolon] = true, _wordDelimiters[t.openParenthesis] = true, _wordDelimiters[t.closeParenthesis] = true, _wordDelimiters[t.openSquare] = true, _wordDelimiters[t.closeSquare] = true, _wordDelimiters[t.singleQuote] = true, _wordDelimiters[t.doubleQuote] = true, _wordDelimiters[t.plus] = true, _wordDelimiters[t.pipe] = true, _wordDelimiters[t.tilde] = true, _wordDelimiters[t.greaterThan] = true, _wordDelimiters[t.equals] = true, _wordDelimiters[t.dollar] = true, _wordDelimiters[t.caret] = true, _wordDelimiters[t.slash] = true, _wordDelimiters);
    var hex = {};
    var hexChars = "0123456789abcdefABCDEF";

    for (var i = 0; i < hexChars.length; i++) {
      hex[hexChars.charCodeAt(i)] = true;
    }
    /**
     *  Returns the last index of the bar css word
     * @param {string} css The string in which the word begins
     * @param {number} start The index into the string where word's first letter occurs
     */


    function consumeWord(css, start) {
      var next = start;
      var code;

      do {
        code = css.charCodeAt(next);

        if (wordDelimiters[code]) {
          return next - 1;
        } else if (code === t.backslash) {
          next = consumeEscape(css, next) + 1;
        } else {
          // All other characters are part of the word
          next++;
        }
      } while (next < css.length);

      return next - 1;
    }
    /**
     *  Returns the last index of the escape sequence
     * @param {string} css The string in which the sequence begins
     * @param {number} start The index into the string where escape character (`\`) occurs.
     */


    function consumeEscape(css, start) {
      var next = start;
      var code = css.charCodeAt(next + 1);

      if (unescapable[code]) ; else if (hex[code]) {
        var hexDigits = 0; // consume up to 6 hex chars

        do {
          next++;
          hexDigits++;
          code = css.charCodeAt(next + 1);
        } while (hex[code] && hexDigits < 6); // if fewer than 6 hex chars, a trailing space ends the escape


        if (hexDigits < 6 && code === t.space) {
          next++;
        }
      } else {
        // the next char is part of the current word
        next++;
      }

      return next;
    }

    var FIELDS = {
      TYPE: 0,
      START_LINE: 1,
      START_COL: 2,
      END_LINE: 3,
      END_COL: 4,
      START_POS: 5,
      END_POS: 6
    };
    exports.FIELDS = FIELDS;

    function tokenize(input) {
      var tokens = [];
      var css = input.css.valueOf();
      var _css = css,
          length = _css.length;
      var offset = -1;
      var line = 1;
      var start = 0;
      var end = 0;
      var code, content, endColumn, endLine, escaped, escapePos, last, lines, next, nextLine, nextOffset, quote, tokenType;

      function unclosed(what, fix) {
        if (input.safe) {
          // fyi: this is never set to true.
          css += fix;
          next = css.length - 1;
        } else {
          throw input.error('Unclosed ' + what, line, start - offset, start);
        }
      }

      while (start < length) {
        code = css.charCodeAt(start);

        if (code === t.newline) {
          offset = start;
          line += 1;
        }

        switch (code) {
          case t.space:
          case t.tab:
          case t.newline:
          case t.cr:
          case t.feed:
            next = start;

            do {
              next += 1;
              code = css.charCodeAt(next);

              if (code === t.newline) {
                offset = next;
                line += 1;
              }
            } while (code === t.space || code === t.newline || code === t.tab || code === t.cr || code === t.feed);

            tokenType = t.space;
            endLine = line;
            endColumn = next - offset - 1;
            end = next;
            break;

          case t.plus:
          case t.greaterThan:
          case t.tilde:
          case t.pipe:
            next = start;

            do {
              next += 1;
              code = css.charCodeAt(next);
            } while (code === t.plus || code === t.greaterThan || code === t.tilde || code === t.pipe);

            tokenType = t.combinator;
            endLine = line;
            endColumn = start - offset;
            end = next;
            break;
          // Consume these characters as single tokens.

          case t.asterisk:
          case t.ampersand:
          case t.bang:
          case t.comma:
          case t.equals:
          case t.dollar:
          case t.caret:
          case t.openSquare:
          case t.closeSquare:
          case t.colon:
          case t.semicolon:
          case t.openParenthesis:
          case t.closeParenthesis:
            next = start;
            tokenType = code;
            endLine = line;
            endColumn = start - offset;
            end = next + 1;
            break;

          case t.singleQuote:
          case t.doubleQuote:
            quote = code === t.singleQuote ? "'" : '"';
            next = start;

            do {
              escaped = false;
              next = css.indexOf(quote, next + 1);

              if (next === -1) {
                unclosed('quote', quote);
              }

              escapePos = next;

              while (css.charCodeAt(escapePos - 1) === t.backslash) {
                escapePos -= 1;
                escaped = !escaped;
              }
            } while (escaped);

            tokenType = t.str;
            endLine = line;
            endColumn = start - offset;
            end = next + 1;
            break;

          default:
            if (code === t.slash && css.charCodeAt(start + 1) === t.asterisk) {
              next = css.indexOf('*/', start + 2) + 1;

              if (next === 0) {
                unclosed('comment', '*/');
              }

              content = css.slice(start, next + 1);
              lines = content.split('\n');
              last = lines.length - 1;

              if (last > 0) {
                nextLine = line + last;
                nextOffset = next - lines[last].length;
              } else {
                nextLine = line;
                nextOffset = offset;
              }

              tokenType = t.comment;
              line = nextLine;
              endLine = nextLine;
              endColumn = next - nextOffset;
            } else if (code === t.slash) {
              next = start;
              tokenType = code;
              endLine = line;
              endColumn = start - offset;
              end = next + 1;
            } else {
              next = consumeWord(css, start);
              tokenType = t.word;
              endLine = line;
              endColumn = next - offset;
            }

            end = next + 1;
            break;
        } // Ensure that the token structure remains consistent


        tokens.push([tokenType, // [0] Token type
        line, // [1] Starting line
        start - offset, // [2] Starting column
        endLine, // [3] Ending line
        endColumn, // [4] Ending column
        start, // [5] Start position / Source index
        end]); // Reset offset for the next token

        if (nextOffset) {
          offset = nextOffset;
          nextOffset = null;
        }

        start = end;
      }

      return tokens;
    }
    });

    var parser = createCommonjsModule(function (module, exports) {

    exports.__esModule = true;
    exports.default = void 0;

    var _indexesOf = _interopRequireDefault(indexesOf);

    var _uniq = _interopRequireDefault(uniq);

    var _root = _interopRequireDefault(root);

    var _selector = _interopRequireDefault(selector);

    var _className = _interopRequireDefault(className);

    var _comment = _interopRequireDefault(comment);

    var _id = _interopRequireDefault(id);

    var _tag = _interopRequireDefault(tag);

    var _string = _interopRequireDefault(string);

    var _pseudo = _interopRequireDefault(pseudo);

    var _attribute = _interopRequireWildcard(attribute);

    var _universal = _interopRequireDefault(universal);

    var _combinator = _interopRequireDefault(combinator);

    var _nesting = _interopRequireDefault(nesting);

    var _sortAscending = _interopRequireDefault(sortAscending_1);

    var _tokenize = _interopRequireWildcard(tokenize_1);

    var tokens = _interopRequireWildcard(tokenTypes);

    var types$1 = _interopRequireWildcard(types);



    var _WHITESPACE_TOKENS, _Object$assign;

    function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) { descriptor.writable = true; } Object.defineProperty(target, descriptor.key, descriptor); } }

    function _createClass(Constructor, protoProps, staticProps) { if (protoProps) { _defineProperties(Constructor.prototype, protoProps); } if (staticProps) { _defineProperties(Constructor, staticProps); } return Constructor; }

    var WHITESPACE_TOKENS = (_WHITESPACE_TOKENS = {}, _WHITESPACE_TOKENS[tokens.space] = true, _WHITESPACE_TOKENS[tokens.cr] = true, _WHITESPACE_TOKENS[tokens.feed] = true, _WHITESPACE_TOKENS[tokens.newline] = true, _WHITESPACE_TOKENS[tokens.tab] = true, _WHITESPACE_TOKENS);
    var WHITESPACE_EQUIV_TOKENS = objectAssign({}, WHITESPACE_TOKENS, (_Object$assign = {}, _Object$assign[tokens.comment] = true, _Object$assign));

    function tokenStart(token) {
      return {
        line: token[_tokenize.FIELDS.START_LINE],
        column: token[_tokenize.FIELDS.START_COL]
      };
    }

    function tokenEnd(token) {
      return {
        line: token[_tokenize.FIELDS.END_LINE],
        column: token[_tokenize.FIELDS.END_COL]
      };
    }

    function getSource(startLine, startColumn, endLine, endColumn) {
      return {
        start: {
          line: startLine,
          column: startColumn
        },
        end: {
          line: endLine,
          column: endColumn
        }
      };
    }

    function getTokenSource(token) {
      return getSource(token[_tokenize.FIELDS.START_LINE], token[_tokenize.FIELDS.START_COL], token[_tokenize.FIELDS.END_LINE], token[_tokenize.FIELDS.END_COL]);
    }

    function getTokenSourceSpan(startToken, endToken) {
      if (!startToken) {
        return undefined;
      }

      return getSource(startToken[_tokenize.FIELDS.START_LINE], startToken[_tokenize.FIELDS.START_COL], endToken[_tokenize.FIELDS.END_LINE], endToken[_tokenize.FIELDS.END_COL]);
    }

    function unescapeProp(node, prop) {
      var value = node[prop];

      if (typeof value !== "string") {
        return;
      }

      if (value.indexOf("\\") !== -1) {
        (0, util.ensureObject)(node, 'raws');
        node[prop] = (0, util.unesc)(value);

        if (node.raws[prop] === undefined) {
          node.raws[prop] = value;
        }
      }

      return node;
    }

    var Parser =
    /*#__PURE__*/
    function () {
      function Parser(rule, options) {
        if (options === void 0) {
          options = {};
        }

        this.rule = rule;
        this.options = objectAssign({
          lossy: false,
          safe: false
        }, options);
        this.position = 0;
        this.css = typeof this.rule === 'string' ? this.rule : this.rule.selector;
        this.tokens = (0, _tokenize.default)({
          css: this.css,
          error: this._errorGenerator(),
          safe: this.options.safe
        });
        var rootSource = getTokenSourceSpan(this.tokens[0], this.tokens[this.tokens.length - 1]);
        this.root = new _root.default({
          source: rootSource
        });
        this.root.errorGenerator = this._errorGenerator();
        var selector = new _selector.default({
          source: {
            start: {
              line: 1,
              column: 1
            }
          }
        });
        this.root.append(selector);
        this.current = selector;
        this.loop();
      }

      var _proto = Parser.prototype;

      _proto._errorGenerator = function _errorGenerator() {
        var _this = this;

        return function (message, errorOptions) {
          if (typeof _this.rule === 'string') {
            return new Error(message);
          }

          return _this.rule.error(message, errorOptions);
        };
      };

      _proto.attribute = function attribute() {
        var attr = [];
        var startingToken = this.currToken;
        this.position++;

        while (this.position < this.tokens.length && this.currToken[_tokenize.FIELDS.TYPE] !== tokens.closeSquare) {
          attr.push(this.currToken);
          this.position++;
        }

        if (this.currToken[_tokenize.FIELDS.TYPE] !== tokens.closeSquare) {
          return this.expected('closing square bracket', this.currToken[_tokenize.FIELDS.START_POS]);
        }

        var len = attr.length;
        var node = {
          source: getSource(startingToken[1], startingToken[2], this.currToken[3], this.currToken[4]),
          sourceIndex: startingToken[_tokenize.FIELDS.START_POS]
        };

        if (len === 1 && !~[tokens.word].indexOf(attr[0][_tokenize.FIELDS.TYPE])) {
          return this.expected('attribute', attr[0][_tokenize.FIELDS.START_POS]);
        }

        var pos = 0;
        var spaceBefore = '';
        var commentBefore = '';
        var lastAdded = null;
        var spaceAfterMeaningfulToken = false;

        while (pos < len) {
          var token = attr[pos];
          var content = this.content(token);
          var next = attr[pos + 1];

          switch (token[_tokenize.FIELDS.TYPE]) {
            case tokens.space:
              // if (
              //     len === 1 ||
              //     pos === 0 && this.content(next) === '|'
              // ) {
              //     return this.expected('attribute', token[TOKEN.START_POS], content);
              // }
              spaceAfterMeaningfulToken = true;

              if (this.options.lossy) {
                break;
              }

              if (lastAdded) {
                (0, util.ensureObject)(node, 'spaces', lastAdded);
                var prevContent = node.spaces[lastAdded].after || '';
                node.spaces[lastAdded].after = prevContent + content;
                var existingComment = (0, util.getProp)(node, 'raws', 'spaces', lastAdded, 'after') || null;

                if (existingComment) {
                  node.raws.spaces[lastAdded].after = existingComment + content;
                }
              } else {
                spaceBefore = spaceBefore + content;
                commentBefore = commentBefore + content;
              }

              break;

            case tokens.asterisk:
              if (next[_tokenize.FIELDS.TYPE] === tokens.equals) {
                node.operator = content;
                lastAdded = 'operator';
              } else if ((!node.namespace || lastAdded === "namespace" && !spaceAfterMeaningfulToken) && next) {
                if (spaceBefore) {
                  (0, util.ensureObject)(node, 'spaces', 'attribute');
                  node.spaces.attribute.before = spaceBefore;
                  spaceBefore = '';
                }

                if (commentBefore) {
                  (0, util.ensureObject)(node, 'raws', 'spaces', 'attribute');
                  node.raws.spaces.attribute.before = spaceBefore;
                  commentBefore = '';
                }

                node.namespace = (node.namespace || "") + content;
                var rawValue = (0, util.getProp)(node, 'raws', 'namespace') || null;

                if (rawValue) {
                  node.raws.namespace += content;
                }

                lastAdded = 'namespace';
              }

              spaceAfterMeaningfulToken = false;
              break;

            case tokens.dollar:
              if (lastAdded === "value") {
                var oldRawValue = (0, util.getProp)(node, 'raws', 'value');
                node.value += "$";

                if (oldRawValue) {
                  node.raws.value = oldRawValue + "$";
                }

                break;
              }

            // Falls through

            case tokens.caret:
              if (next[_tokenize.FIELDS.TYPE] === tokens.equals) {
                node.operator = content;
                lastAdded = 'operator';
              }

              spaceAfterMeaningfulToken = false;
              break;

            case tokens.combinator:
              if (content === '~' && next[_tokenize.FIELDS.TYPE] === tokens.equals) {
                node.operator = content;
                lastAdded = 'operator';
              }

              if (content !== '|') {
                spaceAfterMeaningfulToken = false;
                break;
              }

              if (next[_tokenize.FIELDS.TYPE] === tokens.equals) {
                node.operator = content;
                lastAdded = 'operator';
              } else if (!node.namespace && !node.attribute) {
                node.namespace = true;
              }

              spaceAfterMeaningfulToken = false;
              break;

            case tokens.word:
              if (next && this.content(next) === '|' && attr[pos + 2] && attr[pos + 2][_tokenize.FIELDS.TYPE] !== tokens.equals && // this look-ahead probably fails with comment nodes involved.
              !node.operator && !node.namespace) {
                node.namespace = content;
                lastAdded = 'namespace';
              } else if (!node.attribute || lastAdded === "attribute" && !spaceAfterMeaningfulToken) {
                if (spaceBefore) {
                  (0, util.ensureObject)(node, 'spaces', 'attribute');
                  node.spaces.attribute.before = spaceBefore;
                  spaceBefore = '';
                }

                if (commentBefore) {
                  (0, util.ensureObject)(node, 'raws', 'spaces', 'attribute');
                  node.raws.spaces.attribute.before = commentBefore;
                  commentBefore = '';
                }

                node.attribute = (node.attribute || "") + content;

                var _rawValue = (0, util.getProp)(node, 'raws', 'attribute') || null;

                if (_rawValue) {
                  node.raws.attribute += content;
                }

                lastAdded = 'attribute';
              } else if (!node.value && node.value !== "" || lastAdded === "value" && !spaceAfterMeaningfulToken) {
                var _unescaped = (0, util.unesc)(content);

                var _oldRawValue = (0, util.getProp)(node, 'raws', 'value') || '';

                var oldValue = node.value || '';
                node.value = oldValue + _unescaped;
                node.quoteMark = null;

                if (_unescaped !== content || _oldRawValue) {
                  (0, util.ensureObject)(node, 'raws');
                  node.raws.value = (_oldRawValue || oldValue) + content;
                }

                lastAdded = 'value';
              } else {
                var insensitive = content === 'i' || content === "I";

                if ((node.value || node.value === '') && (node.quoteMark || spaceAfterMeaningfulToken)) {
                  node.insensitive = insensitive;

                  if (!insensitive || content === "I") {
                    (0, util.ensureObject)(node, 'raws');
                    node.raws.insensitiveFlag = content;
                  }

                  lastAdded = 'insensitive';

                  if (spaceBefore) {
                    (0, util.ensureObject)(node, 'spaces', 'insensitive');
                    node.spaces.insensitive.before = spaceBefore;
                    spaceBefore = '';
                  }

                  if (commentBefore) {
                    (0, util.ensureObject)(node, 'raws', 'spaces', 'insensitive');
                    node.raws.spaces.insensitive.before = commentBefore;
                    commentBefore = '';
                  }
                } else if (node.value || node.value === '') {
                  lastAdded = 'value';
                  node.value += content;

                  if (node.raws.value) {
                    node.raws.value += content;
                  }
                }
              }

              spaceAfterMeaningfulToken = false;
              break;

            case tokens.str:
              if (!node.attribute || !node.operator) {
                return this.error("Expected an attribute followed by an operator preceding the string.", {
                  index: token[_tokenize.FIELDS.START_POS]
                });
              }

              var _unescapeValue = (0, _attribute.unescapeValue)(content),
                  unescaped = _unescapeValue.unescaped,
                  quoteMark = _unescapeValue.quoteMark;

              node.value = unescaped;
              node.quoteMark = quoteMark;
              lastAdded = 'value';
              (0, util.ensureObject)(node, 'raws');
              node.raws.value = content;
              spaceAfterMeaningfulToken = false;
              break;

            case tokens.equals:
              if (!node.attribute) {
                return this.expected('attribute', token[_tokenize.FIELDS.START_POS], content);
              }

              if (node.value) {
                return this.error('Unexpected "=" found; an operator was already defined.', {
                  index: token[_tokenize.FIELDS.START_POS]
                });
              }

              node.operator = node.operator ? node.operator + content : content;
              lastAdded = 'operator';
              spaceAfterMeaningfulToken = false;
              break;

            case tokens.comment:
              if (lastAdded) {
                if (spaceAfterMeaningfulToken || next && next[_tokenize.FIELDS.TYPE] === tokens.space || lastAdded === 'insensitive') {
                  var lastComment = (0, util.getProp)(node, 'spaces', lastAdded, 'after') || '';
                  var rawLastComment = (0, util.getProp)(node, 'raws', 'spaces', lastAdded, 'after') || lastComment;
                  (0, util.ensureObject)(node, 'raws', 'spaces', lastAdded);
                  node.raws.spaces[lastAdded].after = rawLastComment + content;
                } else {
                  var lastValue = node[lastAdded] || '';
                  var rawLastValue = (0, util.getProp)(node, 'raws', lastAdded) || lastValue;
                  (0, util.ensureObject)(node, 'raws');
                  node.raws[lastAdded] = rawLastValue + content;
                }
              } else {
                commentBefore = commentBefore + content;
              }

              break;

            default:
              return this.error("Unexpected \"" + content + "\" found.", {
                index: token[_tokenize.FIELDS.START_POS]
              });
          }

          pos++;
        }

        unescapeProp(node, "attribute");
        unescapeProp(node, "namespace");
        this.newNode(new _attribute.default(node));
        this.position++;
      }
      /**
       * return a node containing meaningless garbage up to (but not including) the specified token position.
       * if the token position is negative, all remaining tokens are consumed.
       *
       * This returns an array containing a single string node if all whitespace,
       * otherwise an array of comment nodes with space before and after.
       *
       * These tokens are not added to the current selector, the caller can add them or use them to amend
       * a previous node's space metadata.
       *
       * In lossy mode, this returns only comments.
       */
      ;

      _proto.parseWhitespaceEquivalentTokens = function parseWhitespaceEquivalentTokens(stopPosition) {
        if (stopPosition < 0) {
          stopPosition = this.tokens.length;
        }

        var startPosition = this.position;
        var nodes = [];
        var space = "";
        var lastComment = undefined;

        do {
          if (WHITESPACE_TOKENS[this.currToken[_tokenize.FIELDS.TYPE]]) {
            if (!this.options.lossy) {
              space += this.content();
            }
          } else if (this.currToken[_tokenize.FIELDS.TYPE] === tokens.comment) {
            var spaces = {};

            if (space) {
              spaces.before = space;
              space = "";
            }

            lastComment = new _comment.default({
              value: this.content(),
              source: getTokenSource(this.currToken),
              sourceIndex: this.currToken[_tokenize.FIELDS.START_POS],
              spaces: spaces
            });
            nodes.push(lastComment);
          }
        } while (++this.position < stopPosition);

        if (space) {
          if (lastComment) {
            lastComment.spaces.after = space;
          } else if (!this.options.lossy) {
            var firstToken = this.tokens[startPosition];
            var lastToken = this.tokens[this.position - 1];
            nodes.push(new _string.default({
              value: '',
              source: getSource(firstToken[_tokenize.FIELDS.START_LINE], firstToken[_tokenize.FIELDS.START_COL], lastToken[_tokenize.FIELDS.END_LINE], lastToken[_tokenize.FIELDS.END_COL]),
              sourceIndex: firstToken[_tokenize.FIELDS.START_POS],
              spaces: {
                before: space,
                after: ''
              }
            }));
          }
        }

        return nodes;
      }
      /**
       * 
       * @param {*} nodes 
       */
      ;

      _proto.convertWhitespaceNodesToSpace = function convertWhitespaceNodesToSpace(nodes, requiredSpace) {
        var _this2 = this;

        if (requiredSpace === void 0) {
          requiredSpace = false;
        }

        var space = "";
        var rawSpace = "";
        nodes.forEach(function (n) {
          var spaceBefore = _this2.lossySpace(n.spaces.before, requiredSpace);

          var rawSpaceBefore = _this2.lossySpace(n.rawSpaceBefore, requiredSpace);

          space += spaceBefore + _this2.lossySpace(n.spaces.after, requiredSpace && spaceBefore.length === 0);
          rawSpace += spaceBefore + n.value + _this2.lossySpace(n.rawSpaceAfter, requiredSpace && rawSpaceBefore.length === 0);
        });

        if (rawSpace === space) {
          rawSpace = undefined;
        }

        var result = {
          space: space,
          rawSpace: rawSpace
        };
        return result;
      };

      _proto.isNamedCombinator = function isNamedCombinator(position) {
        if (position === void 0) {
          position = this.position;
        }

        return this.tokens[position + 0] && this.tokens[position + 0][_tokenize.FIELDS.TYPE] === tokens.slash && this.tokens[position + 1] && this.tokens[position + 1][_tokenize.FIELDS.TYPE] === tokens.word && this.tokens[position + 2] && this.tokens[position + 2][_tokenize.FIELDS.TYPE] === tokens.slash;
      };

      _proto.namedCombinator = function namedCombinator() {
        if (this.isNamedCombinator()) {
          var nameRaw = this.content(this.tokens[this.position + 1]);
          var name = (0, util.unesc)(nameRaw).toLowerCase();
          var raws = {};

          if (name !== nameRaw) {
            raws.value = "/" + nameRaw + "/";
          }

          var node = new _combinator.default({
            value: "/" + name + "/",
            source: getSource(this.currToken[_tokenize.FIELDS.START_LINE], this.currToken[_tokenize.FIELDS.START_COL], this.tokens[this.position + 2][_tokenize.FIELDS.END_LINE], this.tokens[this.position + 2][_tokenize.FIELDS.END_COL]),
            sourceIndex: this.currToken[_tokenize.FIELDS.START_POS],
            raws: raws
          });
          this.position = this.position + 3;
          return node;
        } else {
          this.unexpected();
        }
      };

      _proto.combinator = function combinator() {
        var _this3 = this;

        if (this.content() === '|') {
          return this.namespace();
        } // We need to decide between a space that's a descendant combinator and meaningless whitespace at the end of a selector.


        var nextSigTokenPos = this.locateNextMeaningfulToken(this.position);

        if (nextSigTokenPos < 0 || this.tokens[nextSigTokenPos][_tokenize.FIELDS.TYPE] === tokens.comma) {
          var nodes = this.parseWhitespaceEquivalentTokens(nextSigTokenPos);

          if (nodes.length > 0) {
            var last = this.current.last;

            if (last) {
              var _this$convertWhitespa = this.convertWhitespaceNodesToSpace(nodes),
                  space = _this$convertWhitespa.space,
                  rawSpace = _this$convertWhitespa.rawSpace;

              if (rawSpace !== undefined) {
                last.rawSpaceAfter += rawSpace;
              }

              last.spaces.after += space;
            } else {
              nodes.forEach(function (n) {
                return _this3.newNode(n);
              });
            }
          }

          return;
        }

        var firstToken = this.currToken;
        var spaceOrDescendantSelectorNodes = undefined;

        if (nextSigTokenPos > this.position) {
          spaceOrDescendantSelectorNodes = this.parseWhitespaceEquivalentTokens(nextSigTokenPos);
        }

        var node;

        if (this.isNamedCombinator()) {
          node = this.namedCombinator();
        } else if (this.currToken[_tokenize.FIELDS.TYPE] === tokens.combinator) {
          node = new _combinator.default({
            value: this.content(),
            source: getTokenSource(this.currToken),
            sourceIndex: this.currToken[_tokenize.FIELDS.START_POS]
          });
          this.position++;
        } else if (WHITESPACE_TOKENS[this.currToken[_tokenize.FIELDS.TYPE]]) ; else if (!spaceOrDescendantSelectorNodes) {
          this.unexpected();
        }

        if (node) {
          if (spaceOrDescendantSelectorNodes) {
            var _this$convertWhitespa2 = this.convertWhitespaceNodesToSpace(spaceOrDescendantSelectorNodes),
                _space = _this$convertWhitespa2.space,
                _rawSpace = _this$convertWhitespa2.rawSpace;

            node.spaces.before = _space;
            node.rawSpaceBefore = _rawSpace;
          }
        } else {
          // descendant combinator
          var _this$convertWhitespa3 = this.convertWhitespaceNodesToSpace(spaceOrDescendantSelectorNodes, true),
              _space2 = _this$convertWhitespa3.space,
              _rawSpace2 = _this$convertWhitespa3.rawSpace;

          if (!_rawSpace2) {
            _rawSpace2 = _space2;
          }

          var spaces = {};
          var raws = {
            spaces: {}
          };

          if (_space2.endsWith(' ') && _rawSpace2.endsWith(' ')) {
            spaces.before = _space2.slice(0, _space2.length - 1);
            raws.spaces.before = _rawSpace2.slice(0, _rawSpace2.length - 1);
          } else if (_space2.startsWith(' ') && _rawSpace2.startsWith(' ')) {
            spaces.after = _space2.slice(1);
            raws.spaces.after = _rawSpace2.slice(1);
          } else {
            raws.value = _rawSpace2;
          }

          node = new _combinator.default({
            value: ' ',
            source: getTokenSourceSpan(firstToken, this.tokens[this.position - 1]),
            sourceIndex: firstToken[_tokenize.FIELDS.START_POS],
            spaces: spaces,
            raws: raws
          });
        }

        if (this.currToken && this.currToken[_tokenize.FIELDS.TYPE] === tokens.space) {
          node.spaces.after = this.optionalSpace(this.content());
          this.position++;
        }

        return this.newNode(node);
      };

      _proto.comma = function comma() {
        if (this.position === this.tokens.length - 1) {
          this.root.trailingComma = true;
          this.position++;
          return;
        }

        this.current._inferEndPosition();

        var selector = new _selector.default({
          source: {
            start: tokenStart(this.tokens[this.position + 1])
          }
        });
        this.current.parent.append(selector);
        this.current = selector;
        this.position++;
      };

      _proto.comment = function comment() {
        var current = this.currToken;
        this.newNode(new _comment.default({
          value: this.content(),
          source: getTokenSource(current),
          sourceIndex: current[_tokenize.FIELDS.START_POS]
        }));
        this.position++;
      };

      _proto.error = function error(message, opts) {
        throw this.root.error(message, opts);
      };

      _proto.missingBackslash = function missingBackslash() {
        return this.error('Expected a backslash preceding the semicolon.', {
          index: this.currToken[_tokenize.FIELDS.START_POS]
        });
      };

      _proto.missingParenthesis = function missingParenthesis() {
        return this.expected('opening parenthesis', this.currToken[_tokenize.FIELDS.START_POS]);
      };

      _proto.missingSquareBracket = function missingSquareBracket() {
        return this.expected('opening square bracket', this.currToken[_tokenize.FIELDS.START_POS]);
      };

      _proto.unexpected = function unexpected() {
        return this.error("Unexpected '" + this.content() + "'. Escaping special characters with \\ may help.", this.currToken[_tokenize.FIELDS.START_POS]);
      };

      _proto.namespace = function namespace() {
        var before = this.prevToken && this.content(this.prevToken) || true;

        if (this.nextToken[_tokenize.FIELDS.TYPE] === tokens.word) {
          this.position++;
          return this.word(before);
        } else if (this.nextToken[_tokenize.FIELDS.TYPE] === tokens.asterisk) {
          this.position++;
          return this.universal(before);
        }
      };

      _proto.nesting = function nesting() {
        if (this.nextToken) {
          var nextContent = this.content(this.nextToken);

          if (nextContent === "|") {
            this.position++;
            return;
          }
        }

        var current = this.currToken;
        this.newNode(new _nesting.default({
          value: this.content(),
          source: getTokenSource(current),
          sourceIndex: current[_tokenize.FIELDS.START_POS]
        }));
        this.position++;
      };

      _proto.parentheses = function parentheses() {
        var last = this.current.last;
        var unbalanced = 1;
        this.position++;

        if (last && last.type === types$1.PSEUDO) {
          var selector = new _selector.default({
            source: {
              start: tokenStart(this.tokens[this.position - 1])
            }
          });
          var cache = this.current;
          last.append(selector);
          this.current = selector;

          while (this.position < this.tokens.length && unbalanced) {
            if (this.currToken[_tokenize.FIELDS.TYPE] === tokens.openParenthesis) {
              unbalanced++;
            }

            if (this.currToken[_tokenize.FIELDS.TYPE] === tokens.closeParenthesis) {
              unbalanced--;
            }

            if (unbalanced) {
              this.parse();
            } else {
              this.current.source.end = tokenEnd(this.currToken);
              this.current.parent.source.end = tokenEnd(this.currToken);
              this.position++;
            }
          }

          this.current = cache;
        } else {
          // I think this case should be an error. It's used to implement a basic parse of media queries
          // but I don't think it's a good idea.
          var parenStart = this.currToken;
          var parenValue = "(";
          var parenEnd;

          while (this.position < this.tokens.length && unbalanced) {
            if (this.currToken[_tokenize.FIELDS.TYPE] === tokens.openParenthesis) {
              unbalanced++;
            }

            if (this.currToken[_tokenize.FIELDS.TYPE] === tokens.closeParenthesis) {
              unbalanced--;
            }

            parenEnd = this.currToken;
            parenValue += this.parseParenthesisToken(this.currToken);
            this.position++;
          }

          if (last) {
            last.appendToPropertyAndEscape("value", parenValue, parenValue);
          } else {
            this.newNode(new _string.default({
              value: parenValue,
              source: getSource(parenStart[_tokenize.FIELDS.START_LINE], parenStart[_tokenize.FIELDS.START_COL], parenEnd[_tokenize.FIELDS.END_LINE], parenEnd[_tokenize.FIELDS.END_COL]),
              sourceIndex: parenStart[_tokenize.FIELDS.START_POS]
            }));
          }
        }

        if (unbalanced) {
          return this.expected('closing parenthesis', this.currToken[_tokenize.FIELDS.START_POS]);
        }
      };

      _proto.pseudo = function pseudo() {
        var _this4 = this;

        var pseudoStr = '';
        var startingToken = this.currToken;

        while (this.currToken && this.currToken[_tokenize.FIELDS.TYPE] === tokens.colon) {
          pseudoStr += this.content();
          this.position++;
        }

        if (!this.currToken) {
          return this.expected(['pseudo-class', 'pseudo-element'], this.position - 1);
        }

        if (this.currToken[_tokenize.FIELDS.TYPE] === tokens.word) {
          this.splitWord(false, function (first, length) {
            pseudoStr += first;

            _this4.newNode(new _pseudo.default({
              value: pseudoStr,
              source: getTokenSourceSpan(startingToken, _this4.currToken),
              sourceIndex: startingToken[_tokenize.FIELDS.START_POS]
            }));

            if (length > 1 && _this4.nextToken && _this4.nextToken[_tokenize.FIELDS.TYPE] === tokens.openParenthesis) {
              _this4.error('Misplaced parenthesis.', {
                index: _this4.nextToken[_tokenize.FIELDS.START_POS]
              });
            }
          });
        } else {
          return this.expected(['pseudo-class', 'pseudo-element'], this.currToken[_tokenize.FIELDS.START_POS]);
        }
      };

      _proto.space = function space() {
        var content = this.content(); // Handle space before and after the selector

        if (this.position === 0 || this.prevToken[_tokenize.FIELDS.TYPE] === tokens.comma || this.prevToken[_tokenize.FIELDS.TYPE] === tokens.openParenthesis || this.current.nodes.every(function (node) {
          return node.type === 'comment';
        })) {
          this.spaces = this.optionalSpace(content);
          this.position++;
        } else if (this.position === this.tokens.length - 1 || this.nextToken[_tokenize.FIELDS.TYPE] === tokens.comma || this.nextToken[_tokenize.FIELDS.TYPE] === tokens.closeParenthesis) {
          this.current.last.spaces.after = this.optionalSpace(content);
          this.position++;
        } else {
          this.combinator();
        }
      };

      _proto.string = function string() {
        var current = this.currToken;
        this.newNode(new _string.default({
          value: this.content(),
          source: getTokenSource(current),
          sourceIndex: current[_tokenize.FIELDS.START_POS]
        }));
        this.position++;
      };

      _proto.universal = function universal(namespace) {
        var nextToken = this.nextToken;

        if (nextToken && this.content(nextToken) === '|') {
          this.position++;
          return this.namespace();
        }

        var current = this.currToken;
        this.newNode(new _universal.default({
          value: this.content(),
          source: getTokenSource(current),
          sourceIndex: current[_tokenize.FIELDS.START_POS]
        }), namespace);
        this.position++;
      };

      _proto.splitWord = function splitWord(namespace, firstCallback) {
        var _this5 = this;

        var nextToken = this.nextToken;
        var word = this.content();

        while (nextToken && ~[tokens.dollar, tokens.caret, tokens.equals, tokens.word].indexOf(nextToken[_tokenize.FIELDS.TYPE])) {
          this.position++;
          var current = this.content();
          word += current;

          if (current.lastIndexOf('\\') === current.length - 1) {
            var next = this.nextToken;

            if (next && next[_tokenize.FIELDS.TYPE] === tokens.space) {
              word += this.requiredSpace(this.content(next));
              this.position++;
            }
          }

          nextToken = this.nextToken;
        }

        var hasClass = (0, _indexesOf.default)(word, '.').filter(function (i) {
          return word[i - 1] !== '\\';
        });
        var hasId = (0, _indexesOf.default)(word, '#').filter(function (i) {
          return word[i - 1] !== '\\';
        }); // Eliminate Sass interpolations from the list of id indexes

        var interpolations = (0, _indexesOf.default)(word, '#{');

        if (interpolations.length) {
          hasId = hasId.filter(function (hashIndex) {
            return !~interpolations.indexOf(hashIndex);
          });
        }

        var indices = (0, _sortAscending.default)((0, _uniq.default)([0].concat(hasClass, hasId)));
        indices.forEach(function (ind, i) {
          var index = indices[i + 1] || word.length;
          var value = word.slice(ind, index);

          if (i === 0 && firstCallback) {
            return firstCallback.call(_this5, value, indices.length);
          }

          var node;
          var current = _this5.currToken;
          var sourceIndex = current[_tokenize.FIELDS.START_POS] + indices[i];
          var source = getSource(current[1], current[2] + ind, current[3], current[2] + (index - 1));

          if (~hasClass.indexOf(ind)) {
            var classNameOpts = {
              value: value.slice(1),
              source: source,
              sourceIndex: sourceIndex
            };
            node = new _className.default(unescapeProp(classNameOpts, "value"));
          } else if (~hasId.indexOf(ind)) {
            var idOpts = {
              value: value.slice(1),
              source: source,
              sourceIndex: sourceIndex
            };
            node = new _id.default(unescapeProp(idOpts, "value"));
          } else {
            var tagOpts = {
              value: value,
              source: source,
              sourceIndex: sourceIndex
            };
            unescapeProp(tagOpts, "value");
            node = new _tag.default(tagOpts);
          }

          _this5.newNode(node, namespace); // Ensure that the namespace is used only once


          namespace = null;
        });
        this.position++;
      };

      _proto.word = function word(namespace) {
        var nextToken = this.nextToken;

        if (nextToken && this.content(nextToken) === '|') {
          this.position++;
          return this.namespace();
        }

        return this.splitWord(namespace);
      };

      _proto.loop = function loop() {
        while (this.position < this.tokens.length) {
          this.parse(true);
        }

        this.current._inferEndPosition();

        return this.root;
      };

      _proto.parse = function parse(throwOnParenthesis) {
        switch (this.currToken[_tokenize.FIELDS.TYPE]) {
          case tokens.space:
            this.space();
            break;

          case tokens.comment:
            this.comment();
            break;

          case tokens.openParenthesis:
            this.parentheses();
            break;

          case tokens.closeParenthesis:
            if (throwOnParenthesis) {
              this.missingParenthesis();
            }

            break;

          case tokens.openSquare:
            this.attribute();
            break;

          case tokens.dollar:
          case tokens.caret:
          case tokens.equals:
          case tokens.word:
            this.word();
            break;

          case tokens.colon:
            this.pseudo();
            break;

          case tokens.comma:
            this.comma();
            break;

          case tokens.asterisk:
            this.universal();
            break;

          case tokens.ampersand:
            this.nesting();
            break;

          case tokens.slash:
          case tokens.combinator:
            this.combinator();
            break;

          case tokens.str:
            this.string();
            break;
          // These cases throw; no break needed.

          case tokens.closeSquare:
            this.missingSquareBracket();

          case tokens.semicolon:
            this.missingBackslash();

          default:
            this.unexpected();
        }
      }
      /**
       * Helpers
       */
      ;

      _proto.expected = function expected(description, index, found) {
        if (Array.isArray(description)) {
          var last = description.pop();
          description = description.join(', ') + " or " + last;
        }

        var an = /^[aeiou]/.test(description[0]) ? 'an' : 'a';

        if (!found) {
          return this.error("Expected " + an + " " + description + ".", {
            index: index
          });
        }

        return this.error("Expected " + an + " " + description + ", found \"" + found + "\" instead.", {
          index: index
        });
      };

      _proto.requiredSpace = function requiredSpace(space) {
        return this.options.lossy ? ' ' : space;
      };

      _proto.optionalSpace = function optionalSpace(space) {
        return this.options.lossy ? '' : space;
      };

      _proto.lossySpace = function lossySpace(space, required) {
        if (this.options.lossy) {
          return required ? ' ' : '';
        } else {
          return space;
        }
      };

      _proto.parseParenthesisToken = function parseParenthesisToken(token) {
        var content = this.content(token);

        if (token[_tokenize.FIELDS.TYPE] === tokens.space) {
          return this.requiredSpace(content);
        } else {
          return content;
        }
      };

      _proto.newNode = function newNode(node, namespace) {
        if (namespace) {
          if (/^ +$/.test(namespace)) {
            if (!this.options.lossy) {
              this.spaces = (this.spaces || '') + namespace;
            }

            namespace = true;
          }

          node.namespace = namespace;
          unescapeProp(node, "namespace");
        }

        if (this.spaces) {
          node.spaces.before = this.spaces;
          this.spaces = '';
        }

        return this.current.append(node);
      };

      _proto.content = function content(token) {
        if (token === void 0) {
          token = this.currToken;
        }

        return this.css.slice(token[_tokenize.FIELDS.START_POS], token[_tokenize.FIELDS.END_POS]);
      };

      /**
       * returns the index of the next non-whitespace, non-comment token.
       * returns -1 if no meaningful token is found.
       */
      _proto.locateNextMeaningfulToken = function locateNextMeaningfulToken(startPosition) {
        if (startPosition === void 0) {
          startPosition = this.position + 1;
        }

        var searchPosition = startPosition;

        while (searchPosition < this.tokens.length) {
          if (WHITESPACE_EQUIV_TOKENS[this.tokens[searchPosition][_tokenize.FIELDS.TYPE]]) {
            searchPosition++;
            continue;
          } else {
            return searchPosition;
          }
        }

        return -1;
      };

      _createClass(Parser, [{
        key: "currToken",
        get: function get() {
          return this.tokens[this.position];
        }
      }, {
        key: "nextToken",
        get: function get() {
          return this.tokens[this.position + 1];
        }
      }, {
        key: "prevToken",
        get: function get() {
          return this.tokens[this.position - 1];
        }
      }]);

      return Parser;
    }();

    exports.default = Parser;
    module.exports = exports.default;
    });

    var processor = createCommonjsModule(function (module, exports) {

    exports.__esModule = true;
    exports.default = void 0;

    var _parser = _interopRequireDefault(parser);

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    var Processor =
    /*#__PURE__*/
    function () {
      function Processor(func, options) {
        this.func = func || function noop() {};

        this.funcRes = null;
        this.options = options;
      }

      var _proto = Processor.prototype;

      _proto._shouldUpdateSelector = function _shouldUpdateSelector(rule, options) {
        if (options === void 0) {
          options = {};
        }

        var merged = objectAssign({}, this.options, options);

        if (merged.updateSelector === false) {
          return false;
        } else {
          return typeof rule !== "string";
        }
      };

      _proto._isLossy = function _isLossy(options) {
        if (options === void 0) {
          options = {};
        }

        var merged = objectAssign({}, this.options, options);

        if (merged.lossless === false) {
          return true;
        } else {
          return false;
        }
      };

      _proto._root = function _root(rule, options) {
        if (options === void 0) {
          options = {};
        }

        var parser = new _parser.default(rule, this._parseOptions(options));
        return parser.root;
      };

      _proto._parseOptions = function _parseOptions(options) {
        return {
          lossy: this._isLossy(options)
        };
      };

      _proto._run = function _run(rule, options) {
        var _this = this;

        if (options === void 0) {
          options = {};
        }

        return new Promise(function (resolve, reject) {
          try {
            var root = _this._root(rule, options);

            Promise.resolve(_this.func(root)).then(function (transform) {
              var string = undefined;

              if (_this._shouldUpdateSelector(rule, options)) {
                string = root.toString();
                rule.selector = string;
              }

              return {
                transform: transform,
                root: root,
                string: string
              };
            }).then(resolve, reject);
          } catch (e) {
            reject(e);
            return;
          }
        });
      };

      _proto._runSync = function _runSync(rule, options) {
        if (options === void 0) {
          options = {};
        }

        var root = this._root(rule, options);

        var transform = this.func(root);

        if (transform && typeof transform.then === "function") {
          throw new Error("Selector processor returned a promise to a synchronous call.");
        }

        var string = undefined;

        if (options.updateSelector && typeof rule !== "string") {
          string = root.toString();
          rule.selector = string;
        }

        return {
          transform: transform,
          root: root,
          string: string
        };
      }
      /**
       * Process rule into a selector AST.
       *
       * @param rule {postcss.Rule | string} The css selector to be processed
       * @param options The options for processing
       * @returns {Promise<parser.Root>} The AST of the selector after processing it.
       */
      ;

      _proto.ast = function ast(rule, options) {
        return this._run(rule, options).then(function (result) {
          return result.root;
        });
      }
      /**
       * Process rule into a selector AST synchronously.
       *
       * @param rule {postcss.Rule | string} The css selector to be processed
       * @param options The options for processing
       * @returns {parser.Root} The AST of the selector after processing it.
       */
      ;

      _proto.astSync = function astSync(rule, options) {
        return this._runSync(rule, options).root;
      }
      /**
       * Process a selector into a transformed value asynchronously
       *
       * @param rule {postcss.Rule | string} The css selector to be processed
       * @param options The options for processing
       * @returns {Promise<any>} The value returned by the processor.
       */
      ;

      _proto.transform = function transform(rule, options) {
        return this._run(rule, options).then(function (result) {
          return result.transform;
        });
      }
      /**
       * Process a selector into a transformed value synchronously.
       *
       * @param rule {postcss.Rule | string} The css selector to be processed
       * @param options The options for processing
       * @returns {any} The value returned by the processor.
       */
      ;

      _proto.transformSync = function transformSync(rule, options) {
        return this._runSync(rule, options).transform;
      }
      /**
       * Process a selector into a new selector string asynchronously.
       *
       * @param rule {postcss.Rule | string} The css selector to be processed
       * @param options The options for processing
       * @returns {string} the selector after processing.
       */
      ;

      _proto.process = function process(rule, options) {
        return this._run(rule, options).then(function (result) {
          return result.string || result.root.toString();
        });
      }
      /**
       * Process a selector into a new selector string synchronously.
       *
       * @param rule {postcss.Rule | string} The css selector to be processed
       * @param options The options for processing
       * @returns {string} the selector after processing.
       */
      ;

      _proto.processSync = function processSync(rule, options) {
        var result = this._runSync(rule, options);

        return result.string || result.root.toString();
      };

      return Processor;
    }();

    exports.default = Processor;
    module.exports = exports.default;
    });

    var constructors = createCommonjsModule(function (module, exports) {

    exports.__esModule = true;
    exports.universal = exports.tag = exports.string = exports.selector = exports.root = exports.pseudo = exports.nesting = exports.id = exports.comment = exports.combinator = exports.className = exports.attribute = void 0;

    var _attribute = _interopRequireDefault(attribute);

    var _className = _interopRequireDefault(className);

    var _combinator = _interopRequireDefault(combinator);

    var _comment = _interopRequireDefault(comment);

    var _id = _interopRequireDefault(id);

    var _nesting = _interopRequireDefault(nesting);

    var _pseudo = _interopRequireDefault(pseudo);

    var _root = _interopRequireDefault(root);

    var _selector = _interopRequireDefault(selector);

    var _string = _interopRequireDefault(string);

    var _tag = _interopRequireDefault(tag);

    var _universal = _interopRequireDefault(universal);

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    var attribute$1 = function attribute(opts) {
      return new _attribute.default(opts);
    };

    exports.attribute = attribute$1;

    var className$1 = function className(opts) {
      return new _className.default(opts);
    };

    exports.className = className$1;

    var combinator$1 = function combinator(opts) {
      return new _combinator.default(opts);
    };

    exports.combinator = combinator$1;

    var comment$1 = function comment(opts) {
      return new _comment.default(opts);
    };

    exports.comment = comment$1;

    var id$1 = function id(opts) {
      return new _id.default(opts);
    };

    exports.id = id$1;

    var nesting$1 = function nesting(opts) {
      return new _nesting.default(opts);
    };

    exports.nesting = nesting$1;

    var pseudo$1 = function pseudo(opts) {
      return new _pseudo.default(opts);
    };

    exports.pseudo = pseudo$1;

    var root$1 = function root(opts) {
      return new _root.default(opts);
    };

    exports.root = root$1;

    var selector$1 = function selector(opts) {
      return new _selector.default(opts);
    };

    exports.selector = selector$1;

    var string$1 = function string(opts) {
      return new _string.default(opts);
    };

    exports.string = string$1;

    var tag$1 = function tag(opts) {
      return new _tag.default(opts);
    };

    exports.tag = tag$1;

    var universal$1 = function universal(opts) {
      return new _universal.default(opts);
    };

    exports.universal = universal$1;
    });

    var guards = createCommonjsModule(function (module, exports) {

    exports.__esModule = true;
    exports.isNode = isNode;
    exports.isPseudoElement = isPseudoElement;
    exports.isPseudoClass = isPseudoClass;
    exports.isContainer = isContainer;
    exports.isNamespace = isNamespace;
    exports.isUniversal = exports.isTag = exports.isString = exports.isSelector = exports.isRoot = exports.isPseudo = exports.isNesting = exports.isIdentifier = exports.isComment = exports.isCombinator = exports.isClassName = exports.isAttribute = void 0;



    var _IS_TYPE;

    var IS_TYPE = (_IS_TYPE = {}, _IS_TYPE[types.ATTRIBUTE] = true, _IS_TYPE[types.CLASS] = true, _IS_TYPE[types.COMBINATOR] = true, _IS_TYPE[types.COMMENT] = true, _IS_TYPE[types.ID] = true, _IS_TYPE[types.NESTING] = true, _IS_TYPE[types.PSEUDO] = true, _IS_TYPE[types.ROOT] = true, _IS_TYPE[types.SELECTOR] = true, _IS_TYPE[types.STRING] = true, _IS_TYPE[types.TAG] = true, _IS_TYPE[types.UNIVERSAL] = true, _IS_TYPE);

    function isNode(node) {
      return typeof node === "object" && IS_TYPE[node.type];
    }

    function isNodeType(type, node) {
      return isNode(node) && node.type === type;
    }

    var isAttribute = isNodeType.bind(null, types.ATTRIBUTE);
    exports.isAttribute = isAttribute;
    var isClassName = isNodeType.bind(null, types.CLASS);
    exports.isClassName = isClassName;
    var isCombinator = isNodeType.bind(null, types.COMBINATOR);
    exports.isCombinator = isCombinator;
    var isComment = isNodeType.bind(null, types.COMMENT);
    exports.isComment = isComment;
    var isIdentifier = isNodeType.bind(null, types.ID);
    exports.isIdentifier = isIdentifier;
    var isNesting = isNodeType.bind(null, types.NESTING);
    exports.isNesting = isNesting;
    var isPseudo = isNodeType.bind(null, types.PSEUDO);
    exports.isPseudo = isPseudo;
    var isRoot = isNodeType.bind(null, types.ROOT);
    exports.isRoot = isRoot;
    var isSelector = isNodeType.bind(null, types.SELECTOR);
    exports.isSelector = isSelector;
    var isString = isNodeType.bind(null, types.STRING);
    exports.isString = isString;
    var isTag = isNodeType.bind(null, types.TAG);
    exports.isTag = isTag;
    var isUniversal = isNodeType.bind(null, types.UNIVERSAL);
    exports.isUniversal = isUniversal;

    function isPseudoElement(node) {
      return isPseudo(node) && node.value && (node.value.startsWith("::") || node.value.toLowerCase() === ":before" || node.value.toLowerCase() === ":after");
    }

    function isPseudoClass(node) {
      return isPseudo(node) && !isPseudoElement(node);
    }

    function isContainer(node) {
      return !!(isNode(node) && node.walk);
    }

    function isNamespace(node) {
      return isAttribute(node) || isTag(node);
    }
    });

    var selectors = createCommonjsModule(function (module, exports) {

    exports.__esModule = true;



    Object.keys(types).forEach(function (key) {
      if (key === "default" || key === "__esModule") { return; }
      exports[key] = types[key];
    });



    Object.keys(constructors).forEach(function (key) {
      if (key === "default" || key === "__esModule") { return; }
      exports[key] = constructors[key];
    });



    Object.keys(guards).forEach(function (key) {
      if (key === "default" || key === "__esModule") { return; }
      exports[key] = guards[key];
    });
    });

    var dist = createCommonjsModule(function (module, exports) {

    exports.__esModule = true;
    exports.default = void 0;

    var _processor = _interopRequireDefault(processor);

    var selectors$1 = _interopRequireWildcard(selectors);

    function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    var parser = function parser(processor) {
      return new _processor.default(processor);
    };

    objectAssign(parser, selectors$1);
    delete parser.__esModule;
    var _default = parser;
    exports.default = _default;
    module.exports = exports.default;
    });

    var postcssSelectorParser = /*@__PURE__*/getDefaultExportFromCjs(dist);

    /*
     * Copyright (c) 2020, salesforce.com, inc.
     * All rights reserved.
     * SPDX-License-Identifier: BSD-3-Clause
     * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
     */

    // IE11 does not have Element.prototype.matches, we can use msMatchesSelector.
    // This is ignored for code coverage because we don't run code coverage in IE.
    var nativeMatches = Element.prototype.matches || /* istanbul ignore next */ Element.prototype.msMatchesSelector;

    function getChildren (node) {
      if (node.documentElement) { // document
        return node.documentElement.children
      } else if (node.shadowRoot) { // shadow host
        return node.shadowRoot.children
      } else if (typeof node.assignedElements === 'function') { // slot
        // If the slot has assigned elements, then those
        // should be shown. Otherwise the (default) children should be shown.
        var assigned = node.assignedElements();
        return assigned.length ? assigned : node.children
      } else { // regular element
        return node.children
      }
    }

    var ElementIterator = function ElementIterator (context) {
      this._queue = [context];
      this.next(); // disregard the root
    };

    ElementIterator.prototype.next = function next () {
      // create the results list in depth-first order
      var node = this._queue.pop();
      if (node) {
        var children = getChildren(node);
        // In IE, children may be undefined if the `node` is the document.
        // We don't run coverage tests for IE, so it's ignored.
        // See: https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/children#Browser_compatibility
        /* istanbul ignore else */
        if (children) {
          for (var i = children.length - 1; i >= 0; i--) {
            this._queue.push(children[i]);
          }
        }
      }
      return node
    };

    // given a list of ast nodes, find the final list and stop when hitting
    // a combinator. for instance "div span > button span strong.foo" should return "strong.foo"
    function getLastNonCombinatorNodes (nodes) {
      var results = [];
      for (var i = nodes.length - 1; i >= 0; i--) {
        var node = nodes[i];
        if (node.type === 'combinator') {
          break
        }
        results.push(node);
      }
      return results.reverse()
    }

    function getParent (element) {
      // If an element is slotted, ignore the "real" parent and use the shadow DOM parent.
      // Unless the slot is also slotted; just return the parent element in this case.
      if (typeof element.assignedElements !== 'function' && element.assignedSlot && element.assignedSlot.parentElement) {
        return element.assignedSlot.parentElement
      }
      if (element.parentElement) {
        return element.parentElement
      }
      // if an element is inside the shadow DOM, break outside of it
      var rootNode = element.getRootNode();
      /* istanbul ignore else */
      if (rootNode !== document) {
        return rootNode.host
      }
    }

    function getFirstMatchingAncestor (element, nodes) {
      var ancestor = getParent(element);
      while (ancestor) {
        if (matchesSelector(ancestor, { nodes: nodes })) {
          return ancestor
        }

        ancestor = getParent(ancestor);
      }
    }

    function getFirstMatchingPreviousSibling (element, nodes) {
      var sibling = element.previousElementSibling;
      while (sibling) {
        if (matchesSelector(sibling, { nodes: nodes })) {
          return sibling
        }
        sibling = sibling.previousElementSibling;
      }
    }

    function matchesSelector (element, ast) {
      var nodes = ast.nodes;
      for (var i = nodes.length - 1; i >= 0; i--) {
        var node = nodes[i];
        /* istanbul ignore else */
        if (node.type === 'id') {
          if (element.id !== node.value) {
            return false
          }
        } else if (node.type === 'class') {
          if (!element.classList.contains(node.value)) {
            return false
          }
        } else if (node.type === 'tag') {
          if (element.tagName.toLowerCase() !== node.value.toLowerCase()) {
            return false
          }
        } else if (node.type === 'pseudo' || node.type === 'attribute') {
          // For pseudos and attributes, just use the native element matcher.
          // `sourceCode` comes from `attachSourceIfNecessary()`
          if (!nativeMatches.call(element, node.sourceCode)) {
            return false
          }
        } else if (node.type === 'combinator') {
          /* istanbul ignore else */
          if (node.value === ' ') {
            // walk all ancestors
            var precedingNodes = getLastNonCombinatorNodes(nodes.slice(0, i));
            var ancestor = getFirstMatchingAncestor(element, precedingNodes);
            if (!ancestor) {
              return false
            } else {
              element = ancestor;
              i -= precedingNodes.length;
            }
          } else if (node.value === '>') {
            // walk immediate parent only
            var precedingNodes$1 = getLastNonCombinatorNodes(nodes.slice(0, i));
            var ancestor$1 = getParent(element);
            if (!ancestor$1 || !matchesSelector(ancestor$1, { nodes: precedingNodes$1 })) {
              return false
            } else {
              element = ancestor$1;
              i -= 1;
            }
          } else if (node.value === '+') {
            // walk immediate sibling only
            var precedingNodes$2 = getLastNonCombinatorNodes(nodes.slice(0, i));
            var sibling = element.previousElementSibling;
            if (!sibling || !matchesSelector(sibling, { nodes: precedingNodes$2 })) {
              return false
            } else {
              i -= precedingNodes$2.length;
            }
          } else if (node.value === '~') {
            // walk all previous siblings
            var precedingNodes$3 = getLastNonCombinatorNodes(nodes.slice(0, i));
            var sibling$1 = getFirstMatchingPreviousSibling(element, precedingNodes$3);
            if (!sibling$1) {
              return false
            } else {
              i -= precedingNodes$3.length;
            }
          }
        }
      }
      return true
    }

    function getMatchingElements (elementIterator, ast, multiple) {
      var results = multiple ? [] : null;
      var element;
      while ((element = elementIterator.next())) {
        for (var i = 0, list = ast.nodes; i < list.length; i += 1) { // comma-separated selectors, e.g. .foo, .bar
          var node = list[i];

          if (matchesSelector(element, node)) {
            if (multiple) {
              results.push(element);
            } else {
              return element
            }
          }
        }
      }
      return results
    }

    function getMatchingElementsByTagName (elementIterator, tagName) {
      var results = [];
      var element;
      var tagNameAsLowerCase = tagName.toLowerCase();
      while ((element = elementIterator.next())) {
        if (tagName === '*' || tagNameAsLowerCase === element.tagName.toLowerCase()) {
          results.push(element);
        }
      }
      return results
    }

    function getMatchingElementsByName (elementIterator, name) {
      var results = [];
      var element;
      while ((element = elementIterator.next())) {
        if (element.name === name) {
          results.push(element);
        }
      }
      return results
    }

    /**
     * https://dom.spec.whatwg.org/#concept-getelementsbytagnamens
     */
    function getMatchingElementsByTagNameNS (elementIterator, namespaceURI, tagName) {
      var results = [];
      // exit early if null, empty string or undefined is provided
      // these will not match the element namespace
      if (!namespaceURI) {
        return results
      }
      var element;

      while ((element = elementIterator.next())) {
        // we'll do a case insensitive match to find out where the tag name is
        var outerHTMLAsUppercase = element.outerHTML.toUpperCase();
        // we are not not guaranteed to have an uppercase element.tagName, eg: svg elements
        var index = outerHTMLAsUppercase.indexOf(element.tagName.toUpperCase());
        // now we can get the original, non-uppercased tag name
        var originalTagName = element.outerHTML.substr(index, element.tagName.length);
        // tagName supports a wildcard parameter
        var tagMatches = tagName === originalTagName || tagName === '*';
        // namespace supports a wildcard parameter
        var namespaceMatches = element.namespaceURI === namespaceURI || namespaceURI === '*';
        if (tagMatches && namespaceMatches) {
          results.push(element);
        }
      }
      return results
    }

    function getMatchingElementsByClassName (elementIterator, classNames) {
      var results = [];
      var element;

      var loop = function () {
        var elementClassList = element.classList;
        var contains = classNames.every(function (className) {
          return elementClassList.contains(className)
        });
        if (contains) {
          results.push(element);
        }
      };

      while ((element = elementIterator.next())) loop();
      return results
    }

    function getMatchingElementById (elementIterator, id) {
      var element;
      while ((element = elementIterator.next())) {
        if (element.id === id) {
          return element
        }
      }

      return null
    }

    // For convenience, attach the source to all pseudo selectors.
    // We need this later, and it's easier than passing the selector into every function.
    function attachSourceIfNecessary (ref, selector) {
      var nodes = ref.nodes;

      for (var i$1 = 0, list = nodes; i$1 < list.length; i$1 += 1) {
        var node = list[i$1];

        if (node.type === 'pseudo' || node.type === 'attribute') {
          var splitSelector = selector.split('\n');
          var ref$1 = node.source;
          var start = ref$1.start;
          var end = ref$1.end;
          var sourceCode = '';
          for (var i = start.line - 1; i < end.line; i++) {
            var line = splitSelector[i];
            var stringStart = i === start.line - 1 ? start.column : 0;
            var stringEnd = i === end.line - 1 ? end.column : line.length;
            sourceCode += line.substring(stringStart, stringEnd);
          }
          node.sourceCode = (node.type === 'pseudo' ? ':' : '[') + sourceCode;
        }
        if (node.nodes) {
          attachSourceIfNecessary(node, selector);
        }
      }
    }

    function assertIsDocumentOrShadowRoot (context) {
      if (context.nodeType !== 11 && context.nodeType !== 9) {
        throw new TypeError('Provided context must be of type Document or ShadowRoot')
      }
    }

    function assertIsElement (element) {
      if (!element || element.nodeType !== 1) {
        throw new TypeError('Provided context must be of type Element')
      }
    }

    function parse (selector) {
      var ast = postcssSelectorParser().astSync(selector);
      attachSourceIfNecessary(ast, selector);
      return ast
    }

    function query (selector, context, multiple) {
      var ast = parse(selector);

      var elementIterator = new ElementIterator(context);
      return getMatchingElements(elementIterator, ast, multiple)
    }

    function getElementsByTagName$2 (tagName, context) {
      if ( context === void 0 ) context = document;

      var elementIterator = new ElementIterator(context);
      return getMatchingElementsByTagName(elementIterator, tagName)
    }

    function getElementsByTagNameNS$2 (namespaceURI, tagName, context) {
      if ( context === void 0 ) context = document;

      var elementIterator = new ElementIterator(context);
      return getMatchingElementsByTagNameNS(elementIterator, namespaceURI, tagName)
    }

    function querySelector$1 (selector, context) {
      if ( context === void 0 ) context = document;

      return query(selector, context, false)
    }

    function querySelectorAll$2 (selector, context) {
      if ( context === void 0 ) context = document;

      return query(selector, context, true)
    }

    function getElementsByClassName$2 (classNames, context) {
      if ( context === void 0 ) context = document;

      var elementIterator = new ElementIterator(context);
      var classNamesSplit = classNames.trim().split(/\s+/);
      return getMatchingElementsByClassName(elementIterator, classNamesSplit)
    }

    function getElementById$1 (id, context) {
      if ( context === void 0 ) context = document;

      assertIsDocumentOrShadowRoot(context);
      var elementIterator = new ElementIterator(context);
      return getMatchingElementById(elementIterator, id)
    }

    function getElementsByName$1 (name, context) {
      if ( context === void 0 ) context = document;

      assertIsDocumentOrShadowRoot(context);
      var elementIterator = new ElementIterator(context);
      return getMatchingElementsByName(elementIterator, name)
    }

    function matches$1 (selector, context) {
      assertIsElement(context);
      var ast = parse(selector);

      for (var i = 0, list = ast.nodes; i < list.length; i += 1) { // comma-separated selectors, e.g. .foo, .bar
        var node = list[i];

        if (matchesSelector(context, node)) {
          return true
        }
      }
      return false
    }

    function closest$1 (selector, context) {
      var ast = parse(selector);

      for (var i = 0, list = ast.nodes; i < list.length; i += 1) { // comma-separated selectors, e.g. .foo, .bar
        var node = list[i];

        if (matchesSelector(context, node)) {
          return context
        }

        var matchingAncestor = getFirstMatchingAncestor(context, node.nodes);
        if (matchingAncestor) {
          return matchingAncestor
        }
      }
      return null
    }

    /*
     * Copyright (c) 2020, salesforce.com, inc.
     * All rights reserved.
     * SPDX-License-Identifier: MIT
     * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
     */
    const assignedSlotGetter$1 = getOwnPropertyDescriptor$3(Element.prototype, 'assignedSlot').get;
    const fragmentChildrenGetter = getOwnPropertyDescriptor$3(DocumentFragment.prototype, 'children').get;
    function getFilteredChildren(elm) {
        if (isSlotElement(elm)) {
            return elm.assignedElements({ flatten: true });
        }
        else if (isHostElement(elm)) {
            return arrayFromCollection(fragmentChildrenGetter.call(getShadowRootFromHostElement(elm)));
        }
        return arrayFromCollection(childrenGetter.call(elm));
    }
    // Deep-traversing patches from this point on:
    // The following patched methods surfaces shadowed elements in global
    // traversing mechanisms.
    const querySelectorDistortion = function querySelector(selectors) {
        return querySelector$1(selectors, this);
    };
    const querySelectorAllDistortion = function querySelectorAll(selectors) {
        const elements = querySelectorAll$2(selectors, this);
        return createStaticNodeList(elements);
    };
    const getElementsByClassNameDistortion = function getElementsByClassName(classNames) {
        const elements = getElementsByClassName$2(classNames, this);
        return createStaticNodeList(elements);
    };
    const getElementsByTagNameDistortion = function getElementsByTagName(tagName) {
        const elements = getElementsByTagName$2(tagName, this);
        return createStaticNodeList(elements);
    };
    const getElementsByTagNameNSDistortion = function getElementsByTagNameNS(namespaceURI, tagName) {
        const elements = getElementsByTagNameNS$2(namespaceURI, tagName, this);
        return createStaticNodeList(elements);
    };
    const matchesDistortion = function matches(selector) {
        return matches$1(selector, this);
    };
    const closestDistortion = function closest(selector) {
        return closest$1(selector, this);
    };
    // Non-deep-traversing patches: this descriptor map includes all descriptors that
    // do not have access to nodes beyond the immediate children.
    const innerHTMLDistortion = function innerHTML() {
        return getInnerHTML(this);
    };
    const outerHTMLDistortion = function outerHTML() {
        return getOuterHTML(this);
    };
    const shadowRootDistortion = function shadowRoot() {
        // you should not see any shadowRoot ever in this virtualization mode
        return null;
    };
    const childrenDistortion = function children() {
        return createStaticHTMLCollection(getFilteredChildren(this));
    };
    const childElementCountDistortion = function childElementCount() {
        return getFilteredChildren(this).length;
    };
    const firstElementChildDistortion = function firstElementChild() {
        return getFilteredChildren(this)[0];
    };
    const lastElementChildDistortion = function lastElementChild() {
        const elements = getFilteredChildren(this);
        return elements[elements.length - 1];
    };
    const assignedSlotDistortion$1 = function assignedSlot() {
        // you should now see any slotting ever in this virtualization mode
        return null;
    };
    var ElementDistortions = MapCreate([
        [innerHTMLGetter, innerHTMLDistortion],
        [outerHTMLGetter, outerHTMLDistortion],
        [shadowRootGetter, shadowRootDistortion],
        [childrenGetter, childrenDistortion],
        [childElementCountGetter, childElementCountDistortion],
        [firstElementChildGetter, firstElementChildDistortion],
        [lastElementChildGetter, lastElementChildDistortion],
        [assignedSlotGetter$1, assignedSlotDistortion$1],
        [querySelector, querySelectorDistortion],
        [querySelectorAll, querySelectorAllDistortion],
        [getElementsByClassName, getElementsByClassNameDistortion],
        [getElementsByTagName, getElementsByTagNameDistortion],
        [getElementsByTagNameNS, getElementsByTagNameNSDistortion],
        [matches, matchesDistortion],
        [closest, closestDistortion],
    ]);
    // Main Window Patches
    const { attachShadow: originalAttachShadow } = Element.prototype;
    // the role of this callback is to simply capture important events
    // from `getObservedEventNames()` before they cross the first shadow boundary
    // to capture the original event's metadata in case the event is observed
    // from inside the oasis' realm.
    function trackShadowEvent(e) {
        extractEventMetadata(e);
    }
    const attachShadowPatched = function attachShadow(options) {
        const sr = originalAttachShadow.call(this, options);
        // observed events needs to be captured for flattening them
        getObservedEventNames().forEach((name) => addEventListener.call(sr, name, trackShadowEvent));
        return sr;
    };
    defineProperty(Element.prototype, 'attachShadow', {
        value: attachShadowPatched,
        enumerable: true,
        writable: true,
        configurable: true,
    });
    function getDocumentChildrenWithShadows() {
        // It is fine... it is slow... but this only should happen
        // few times, again, it is fine!
        return Array.from(document.querySelectorAll(`*`))
            .filter((elm) => isHostElement(elm));
    }
    // returns all the active host elements with a shadow root
    // attached to them
    function getAllActiveHostElements() {
        const map = new Map();
        let currentSegment = getDocumentChildrenWithShadows();
        while (currentSegment.length > 0) {
            const elm = currentSegment.shift();
            // there is a possibility that with synthetic shadow we get some duplicate entries here,
            // we can simply about duplicates by checking the already defined map.
            if (!map.has(elm)) {
                const sr = getShadowRootFromHostElement(elm);
                if (sr) {
                    map.set(elm, sr);
                    const newSegment = Array.from(sr.querySelectorAll(`*`))
                        .filter((elm) => isHostElement(elm));
                    currentSegment = currentSegment.concat(newSegment);
                }
            }
        }
        return map;
    }
    const observedEventNames = create(null);
    function getObservedEventNames() {
        return Reflect.ownKeys(observedEventNames);
    }
    function addKnownEventName(name) {
        if (observedEventNames[name]) {
            return;
        }
        observedEventNames[name] = 1;
        getAllActiveHostElements().forEach((sr) => {
            addEventListener.call(sr, name, trackShadowEvent);
        });
    }

    /*
     * Copyright (c) 2020, salesforce.com, inc.
     * All rights reserved.
     * SPDX-License-Identifier: MIT
     * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
     */
    const activeElementOriginal = getOwnPropertyDescriptor$3(Document.prototype, 'activeElement').get;
    const activeElementDistortion = function () {
        let activeElement = activeElementOriginal.call(this);
        while (activeElement) {
            const sr = getShadowRootFromHostElement(activeElement);
            if (!sr) {
                return activeElement;
            }
            activeElement = sr.activeElement; // it is safe to use the dot notation here
        }
        return activeElement;
    };
    const getElementByIdDistortion = function getElementById(id) {
        return getElementById$1(id, this);
    };
    const getElementsByNameDistortion = function getElementsByName(name) {
        return getElementsByName$1(name, this);
    };
    var DocumentDistortions = MapCreate([
        [activeElementOriginal, activeElementDistortion],
        [getElementById, getElementByIdDistortion],
        [getElementsByName, getElementsByNameDistortion],
    ]);

    /*
     * Copyright (c) 2020, salesforce.com, inc.
     * All rights reserved.
     * SPDX-License-Identifier: MIT
     * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
     */
    const { addEventListener: addEventListenerOriginal, dispatchEvent: dispatchEventOriginal, } = EventTarget.prototype;
    const addEventListenerDistortion = function addEventListener(...args) {
        // track the event name that libs in oasis will be listening for
        // in order to flatten those events before re-targeting
        const [name] = args;
        addKnownEventName(name);
        return addEventListenerOriginal.apply(this, args);
    };
    var EventTargetDistortions = MapCreate([
        [addEventListenerOriginal, addEventListenerDistortion]
    ]);

    /*
     * Copyright (c) 2018, salesforce.com, inc.
     * All rights reserved.
     * SPDX-License-Identifier: BSD-3-Clause
     * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
     */
    // local caches
    const { createElement } = document;
    const { prepend: originalPrepend, append: originalAppend, appendChild: originalAppendChild, insertBefore: originalInsertBefore, } = Element.prototype;
    const documentBodyGetter = Reflect.getOwnPropertyDescriptor(Document.prototype, 'body').get;
    function defineExportedGlobal(name, descriptor) {
        Reflect.defineProperty(window, name, descriptor);
    }
    function getImportedGlobal(name) {
        return window[name];
    }
    // TODO: make sure that these are only accessible when doing controlled evaluations
    const endowments = Object.create(Object.prototype, {
        $oasisExternalDefineProperty$: {
            value: defineExportedGlobal
        },
        $oasisExternalGetProperty$: {
            value: getImportedGlobal
        }
    });
    function isScriptElement(node) {
        return node instanceof HTMLScriptElement;
    }
    const patchedAppendChild = function appendChild(...args) {
        const [child] = args;
        if (isScriptElement(child)) {
            createScriptReflection(child);
            return child;
        }
        return originalAppendChild.apply(this, args);
    };
    const patchedInsertBefore = function insertBefore(...args) {
        const [child] = args;
        if (isScriptElement(child)) {
            createScriptReflection(child);
            return child;
        }
        return originalInsertBefore.apply(this, args);
    };
    const patchedAppend = function append(...args) {
        const [child] = args;
        if (!isString(child) && isScriptElement(child)) {
            createScriptReflection(child);
            return;
        }
        originalAppend.apply(this, args);
    };
    const patchedPrepend = function prepend(...args) {
        const [child] = args;
        if (!isString(child) && isScriptElement(child)) {
            createScriptReflection(child);
            return;
        }
        originalPrepend.apply(this, args);
    };
    const distortionMap = MapConcat([
        MapCreate([
            // Element & Node
            [originalAppendChild, patchedAppendChild],
            [originalInsertBefore, patchedInsertBefore],
            [originalAppend, patchedAppend],
            [originalPrepend, patchedPrepend],
        ]),
        NodeDistortions,
        TextDistortions,
        SlotDistortions,
        ElementDistortions,
        EventDistortions,
        DocumentDistortions,
        EventTargetDistortions,
    ]);
    const evaluate = createSecureEnvironment({
        distortionMap,
        endowments,
        keepAlive: true
    });
    const magicIframe = document.querySelector('iframe');
    if (isNull$1(magicIframe)) {
        throw new Error(`Invalid Initialization`);
    }
    const magicWindow = magicIframe.contentWindow;
    const magicDocument = magicWindow.document;
    const magicBody = documentBodyGetter.call(magicDocument);
    // patching iframe.contentWindow getter to prevent access to the magic iframe
    const contentWindowDescriptor = Reflect.getOwnPropertyDescriptor(HTMLIFrameElement.prototype, 'contentWindow');
    const originalContentWindowGetter = contentWindowDescriptor.get;
    contentWindowDescriptor.get = function contentWindow() {
        if (this === magicIframe) {
            return null;
        }
        return originalContentWindowGetter.call(this);
    };
    Reflect.defineProperty(HTMLIFrameElement.prototype, 'contentWindow', contentWindowDescriptor);
    // patching iframe.contentDocument getter to prevent access to the magic iframe
    const contentDocumentDescriptor = Reflect.getOwnPropertyDescriptor(HTMLIFrameElement.prototype, 'contentDocument');
    const originalContentDocumentGetter = contentDocumentDescriptor.get;
    contentDocumentDescriptor.get = function contentWindow() {
        if (this === magicIframe) {
            return null;
        }
        return originalContentDocumentGetter.call(this);
    };
    Reflect.defineProperty(HTMLIFrameElement.prototype, 'contentDocument', contentDocumentDescriptor);
    evaluate(`
    // This initialization will prevent any of these APIs to be polyfilled
    // on the blue realm that can affect this sandbox.
    [
        HTMLElement.prototype,
        Element.prototype,
        Node.prototype,
        Event.prototype,
        Document.prototype,
        EventTarget.prototype,
        MutationObserver.prototype,
        HTMLCollection.prototype,
        NodeList.prototype,
        ShadowRoot.prototype,
        HTMLSlotElement.prototype,
        Text.prototype,
    ].forEach(o => delete o.$);
`);
    // remap any exported globals between the sandbox and window
    function mapExportedGlobals(names) {
        names.forEach(name => {
            evaluate(`
            'use strict';
            const key = \`${name}\`;
            $oasisExternalDefineProperty$(key, {
                get() { return window[key]; },
                enumerable: true,
                configurable: true,
            });
        `);
        });
    }
    // remap any imported globals between the sandbox and window
    function mapImportedGlobals(names) {
        names.forEach(name => {
            evaluate(`
            'use strict';
            const key = \`${name}\`;
            Object.defineProperty(window, key, {
                get() { return $oasisExternalGetProperty$(key); },
                enumerable: true,
                configurable: true,
            });
        `);
        });
    }
    function createScriptReflection(elm) {
        const { attributes, textContent: sourceText } = elm;
        if (sourceText) {
            evaluate(sourceText);
            return;
        }
        const script = createElement.call(magicDocument, 'script');
        for (let i = 0, len = attributes.length; i < len; i += 1) {
            const attr = attributes.item(i);
            if (!isNull$1(attr) && attr.name.indexOf('on') !== 0) {
                setAttribute.call(script, attr.name, attr.value);
            }
        }
        if (sourceText) {
            script.textContent = sourceText;
        }
        addEventListenerOriginal.call(script, 'error', (e) => dispatchEventOriginal
            .call(elm, new ErrorEvent('error', e)));
        addEventListenerOriginal.call(script, 'load', () => dispatchEventOriginal
            .call(elm, new Event('load')));
        appendChild.call(magicBody, script);
    }
    function normalizeGlobalNames(names) {
        if (!isNull$1(names) && !isUndefined$1(names)) {
            return names.split(",").map(name => name.trim()).filter(name => GLOBAL_NAMES_REGEX.test(name));
        }
        return [];
    }
    function execute(elm) {
        // TODO: improve this to not use an expando, use a weakmap instead
        if (elm.evaluate)
            return; // skipping
        elm.evaluate = true;
        mapExportedGlobals(normalizeGlobalNames(elm.exportedGlobalNames));
        mapImportedGlobals(normalizeGlobalNames(elm.importedGlobalNames));
        createScriptReflection(elm);
    }
    // disallow spaces but allow anything else, including "_", "-" and "$"
    const GLOBAL_NAMES_REGEX = /^\S+$/;
    class OasisScript extends HTMLElement {
        constructor() {
            super();
            const slot = document.createElement('slot');
            addEventListenerOriginal.call(slot, 'slotchange', () => execute(this), {
                once: true // we only care about the first time this receive some content
            });
            this.attachShadow({ mode: 'open' }).appendChild(slot);
        }
        get exportedGlobalNames() {
            return this.getAttribute('exported-global-names');
        }
        set exportedGlobalNames(v) {
            if (isNull$1(v) || isUndefined$1(v) || v === '') {
                this.removeAttribute('exported-global-names');
            }
            else {
                this.setAttribute('exported-global-names', v);
            }
        }
        get importedGlobalNames() {
            return this.getAttribute('imported-global-names');
        }
        set importedGlobalNames(v) {
            if (isNull$1(v) || isUndefined$1(v) || v === '') {
                this.removeAttribute('imported-global-names');
            }
            else {
                this.setAttribute('imported-global-names', v);
            }
        }
        get src() {
            var _a;
            return (_a = this.getAttribute('src')) !== null && _a !== void 0 ? _a : '';
        }
        set src(v) {
            if (isNull$1(v) || isUndefined$1(v) || v === '') {
                this.removeAttribute('src');
            }
            else {
                this.setAttribute('src', v);
            }
        }
        connectedCallback() {
            // always hide oasis element
            this.setAttribute('hidden', 'true');
            // ensure that we only execute if there is a src
            // this allows the slotChange event to pick up inline text
            const { src } = this;
            if (src && src.length) {
                execute(this);
            }
        }
    }
    customElements.define('x-oasis-script', OasisScript);

})));
//# sourceMappingURL=oasis.js.map
