(function () {
    'use strict';

    const { assign, create: ObjectCreate, defineProperty: ObjectDefineProperty, getOwnPropertyDescriptors, freeze, seal, isSealed, isFrozen, } = Object;
    const { apply, construct, getPrototypeOf: ReflectGetPrototypeOf, setPrototypeOf: ReflectSetPrototypeOf, defineProperty: ReflectDefineProperty, isExtensible: ReflectIsExtensible, getOwnPropertyDescriptor: ReflectGetOwnPropertyDescriptor, ownKeys, preventExtensions: ReflectPreventExtensions, deleteProperty, has: ReflectHas, get: ReflectGet, set: ReflectSet, } = Reflect;
    const ErrorCreate = unconstruct(Error);
    const SetCreate = unconstruct(Set);
    const SetHas = unapply(Set.prototype.has);
    const WeakMapCreate = unconstruct(WeakMap);
    const WeakMapGet = unapply(WeakMap.prototype.get);
    const WeakMapHas = unapply(WeakMap.prototype.has);
    const WeakMapSet = unapply(WeakMap.prototype.set);
    const hasOwnProperty = unapply(Object.prototype.hasOwnProperty);
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
    function isFunction(obj) {
        return typeof obj === 'function';
    }
    const emptyArray = [];
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
        'Array',
        'ArrayBuffer',
        'Boolean',
        'DataView',
        'Date',
        'Error',
        'EvalError',
        'Float32Array',
        'Float64Array',
        'Function',
        'Int8Array',
        'Int16Array',
        'Int32Array',
        'Map',
        'Number',
        'Object',
        // Allow Blue `Promise` constructor to overwrite the Red one so that promises
        // created by the `Promise` constructor or APIs like `fetch` will work.
        //'Promise',
        'Proxy',
        'RangeError',
        'ReferenceError',
        'RegExp',
        'Set',
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
        'WeakMap',
        'WeakSet',
        // *** 18.4 Other Properties of the Global Object
        'Atomics',
        'JSON',
        'Math',
        'Reflect',
        // *** Annex B
        'escape',
        'unescape',
        // *** ECMA-402
        'Intl',
    ]);
    // These are foundational things that should never be wrapped but are equivalent
    // TODO: revisit this list.
    const ReflectiveIntrinsicObjectNames = [
        'Array',
        'Object',
        'Function',
        'URIError',
        'TypeError',
        'SyntaxError',
        'ReferenceError',
        'RangeError',
        'EvalError',
        'Error',
    ];

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
                let redError;
                const { message, constructor } = e;
                try {
                    // the error constructor must be a blue error since it occur when calling
                    // a function from the blue realm.
                    const redErrorConstructor = blueEnv.getRedRef(constructor);
                    // the red constructor must be registered (done during construction of env)
                    // otherwise we need to fallback to a regular error.
                    redError = construct(redErrorConstructor, [message]);
                }
                catch (_a) {
                    // in case the constructor inference fails
                    redError = new Error(message);
                }
                throw redError;
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
                let redError;
                const { message, constructor } = e;
                try {
                    // the error constructor must be a blue error since it occur when calling
                    // a function from the blue realm.
                    const redErrorConstructor = blueEnv.getRedRef(constructor);
                    // the red constructor must be registered (done during construction of env)
                    // otherwise we need to fallback to a regular error.
                    redError = construct(redErrorConstructor, [message]);
                }
                catch (_a) {
                    // in case the constructor inference fails
                    redError = new Error(message);
                }
                throw redError;
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
        .replace('{', `{'use strict'`);

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
                    // This error occurred when the blue realm attempts to call a
                    // function from the sandbox. By throwing a new blue error, we eliminates the stack
                    // information from the sandbox as a consequence.
                    let blueError;
                    const { message, constructor } = e;
                    try {
                        // the error constructor must be a red error since it occur when calling
                        // a function from the sandbox.
                        const blueErrorConstructor = env.getBlueRef(constructor);
                        // the blue constructor must be registered (done during construction of env)
                        // otherwise we need to fallback to a regular error.
                        blueError = construct(blueErrorConstructor, [message]);
                    }
                    catch (_a) {
                        // in case the constructor inference fails
                        blueError = ErrorCreate(message);
                    }
                    throw blueError;
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
                    // This error occurred when the blue realm attempts to new a
                    // constructor from the sandbox. By throwing a new blue error, we eliminates the stack
                    // information from the sandbox as a consequence.
                    let blueError;
                    const { message, constructor } = e;
                    try {
                        // the error constructor must be a red error since it occur when calling
                        // a function from the sandbox.
                        const blueErrorConstructor = env.getBlueRef(constructor);
                        // the blue constructor must be registered (done during construction of env)
                        // otherwise we need to fallback to a regular error.
                        blueError = construct(blueErrorConstructor, [message]);
                    }
                    catch (_a) {
                        // in case the constructor inference fails
                        blueError = ErrorCreate(message);
                    }
                    throw blueError;
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
                if (hasOwnProperty(redDescriptor, 'get')) {
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
                else if (hasOwnProperty(redDescriptor, 'set')) {
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
                if (hasOwnProperty(target, key)) {
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

    const cachedReflectiveIntrinsicsMap = WeakMapCreate();
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
    // caching from the blue realm right away to avoid picking up modified entries
    getReflectiveIntrinsics(globalThis);
    class SecureEnvironment {
        constructor(options) {
            // map from red to blue references
            this.redMap = WeakMapCreate();
            // map from blue to red references
            this.blueMap = WeakMapCreate();
            if (isUndefined(options)) {
                throw ErrorCreate(`Missing SecureEnvironmentOptions options bag.`);
            }
            const { blueGlobalThis, redGlobalThis, distortionMap } = options;
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
            // remapping intrinsics that are realm's agnostic
            const blueIntrinsics = getReflectiveIntrinsics(blueGlobalThis);
            const redIntrinsics = getReflectiveIntrinsics(redGlobalThis);
            for (let i = 0, len = ReflectiveIntrinsicObjectNames.length; i < len; i += 1) {
                const name = ReflectiveIntrinsicObjectNames[i];
                const blue = blueIntrinsics[name];
                const red = redIntrinsics[name];
                this.setRefMapEntries(red, blue);
                this.setRefMapEntries(red.prototype, blue.prototype);
            }
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
            this.setRefMapEntries(redValue, blueValue);
            if (!isUndefined(blueDescriptors)) {
                const keys = ownKeys(blueDescriptors);
                for (let i = 0, len = keys.length; i < len; i += 1) {
                    const key = keys[i];
                    // TODO: this whole loop needs cleanup and simplification avoid
                    // overriding ECMAScript global keys.
                    if (SetHas(ESGlobalKeys, key) || !hasOwnProperty(blueDescriptors, key)) {
                        continue;
                    }
                    // avoid poisoning by only installing own properties from blueDescriptors
                    // @ts-ignore PropertyDescriptorMap def defines properties as being only of string type
                    const blueDescriptor = assign(ObjectCreate(null), blueDescriptors[key]);
                    if ('value' in blueDescriptor) {
                        // TODO: maybe we should make everything a getter/setter that way
                        // we don't pay the cost of creating the proxy in the first place
                        blueDescriptor.value = this.getRedValue(blueDescriptor.value);
                    }
                    else {
                        // Use the original getter to return a red object, but if the 
                        // sandbox attempts to set it to a new value, this mutation will
                        // only affect the sandbox's global object, and the getter will
                        // start returning the new provided value rather than calling onto
                        // the blue realm. This is to preserve the object graph of the
                        // blue realm.
                        const env = this;
                        const { get: originalGetter } = blueDescriptor;
                        let currentGetter = () => undefined;
                        if (isFunction(originalGetter)) {
                            const originalOrDistortedGetter = WeakMapGet(this.distortionMap, originalGetter) || originalGetter;
                            currentGetter = function () {
                                const value = apply(originalOrDistortedGetter, env.getBlueValue(this), emptyArray);
                                return env.getRedValue(value);
                            };
                        }
                        blueDescriptor.get = function () {
                            return apply(currentGetter, this, emptyArray);
                        };
                        if (isFunction(blueDescriptor.set)) {
                            blueDescriptor.set = function (v) {
                                // if a global setter is invoke, the value will be use as it is as the result of the getter operation
                                currentGetter = () => v;
                            };
                        }
                    }
                    const redDescriptor = ReflectGetOwnPropertyDescriptor(redValue, key);
                    if (!isUndefined(redDescriptor) &&
                        hasOwnProperty(redDescriptor, 'configurable') &&
                        redDescriptor.configurable === false) {
                        const redPropertyValue = redValue[key];
                        if (isNullOrUndefined(redPropertyValue)) {
                            continue;
                        }
                        // this is the case where the red realm has a global descriptor that was supposed to be
                        // overrule but can't be done because it is a non-configurable. Instead we try to
                        // fallback to some more advanced gymnastics
                        if (hasOwnProperty(redDescriptor, 'value')) {
                            // valid proxy target (intentionally ignoring the case of document.all since it is not a value descriptor)
                            if (typeof redPropertyValue === 'function' || typeof redPropertyValue === 'object') {
                                if (!WeakMapHas(this.redMap, redPropertyValue)) {
                                    // remapping the value of the red object graph to the blue realm graph
                                    const { value: blueDescriptorValue } = blueDescriptor;
                                    if (redValue !== blueDescriptorValue) {
                                        if (this.getBlueValue(redValue) !== blueValue) {
                                            console.error('need remapping: ', key, blueValue, blueDescriptor);
                                        }
                                    }
                                    else {
                                        // window.top is the classic example of a descriptor that leaks access to the blue
                                        // window reference, and there is no containment for that case yet.
                                        console.error('leaking: ', key, blueValue, blueDescriptor);
                                    }
                                }
                                else {
                                    // an example of this is circular window.window ref
                                    console.info('circular: ', key, blueValue, blueDescriptor);
                                }
                            }
                        }
                        else if (hasOwnProperty(redDescriptor, 'get')) {
                            // internationally ignoring the case of (typeof document.all === 'undefined') because
                            // it is specified as configurable, you never get one of those exotic objects in this branch
                            if (typeof redPropertyValue === 'function' || typeof redPropertyValue === 'object') {
                                if (redPropertyValue === redValue[key]) {
                                    // this is the case for window.document which is identity preserving getter
                                    // const blueDescriptorValue = blueValue[key];
                                    // this.setRefMapEntries(redDescriptorValue, blueDescriptorValue);
                                    // this.installDescriptors(redDescriptorValue, blueDescriptorValue, getOwnPropertyDescriptors(blueDescriptorValue));
                                    console.error('need remapping: ', key, blueValue, blueDescriptor);
                                    if (ReflectIsExtensible(redPropertyValue)) {
                                        // remapping proto chain
                                        // ReflectSetPrototypeOf(redDescriptorValue, this.getRedValue(ReflectGetPrototypeOf(redDescriptorValue)));
                                        console.error('needs prototype remapping: ', key, blueValue);
                                    }
                                    else {
                                        console.error('leaking prototype: ', key, blueValue, blueDescriptor);
                                    }
                                }
                                else {
                                    console.error('leaking a getter returning values without identity: ', key, blueValue, blueDescriptor);
                                }
                            }
                            else {
                                console.error('skipping: ', key, blueValue, blueDescriptor);
                            }
                        }
                    }
                    else {
                        ReflectDefineProperty(redValue, key, blueDescriptor);
                    }
                }
            }
        }
    }

    const cachedGlobalMap = WeakMapCreate();
    /**
     * Given a Window reference, extract a set of references that are important
     * for the sandboxing mechanism, this includes:
     * - Unforgeable prototypes
     * - Descriptor maps for those unforgeable prototypes
     */
    function getCachedReferences(global) {
        let record = WeakMapGet(cachedGlobalMap, global);
        if (!isUndefined(record)) {
            return record;
        }
        record = ObjectCreate(null);
        // caching references to object values that can't be replaced
        // window -> Window -> WindowProperties -> EventTarget
        record.window = global.window;
        record.document = global.document;
        record.WindowProto = ReflectGetPrototypeOf(record.window);
        record.WindowPropertiesProto = ReflectGetPrototypeOf(record.WindowProto);
        record.EventTargetProto = ReflectGetPrototypeOf(record.WindowPropertiesProto);
        record.DocumentProto = ReflectGetPrototypeOf(record.document);
        // caching descriptors
        record.windowDescriptors = getOwnPropertyDescriptors(record.window);
        record.WindowProtoDescriptors = getOwnPropertyDescriptors(record.WindowProto);
        record.WindowPropertiesProtoDescriptors = getOwnPropertyDescriptors(record.WindowPropertiesProto);
        record.EventTargetProtoDescriptors = getOwnPropertyDescriptors(record.EventTargetProto);
        return record;
    }
    /**
     * Initialization operation to capture and cache all unforgeable references
     * and their respective descriptor maps before any other code runs, this
     * usually help because this library runs before anything else that can poison
     * the environment.
     */
    getCachedReferences(globalThis);
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
    function aggregateGlobalDescriptors(redDescriptors, blueDescriptors, globalDescriptors) {
        const to = ObjectCreate(null);
        const baseKeys = ownKeys(redDescriptors);
        for (let i = 0, len = baseKeys.length; i < len; i++) {
            const key = baseKeys[i];
            to[key] = blueDescriptors[key];
        }
        // global descriptors are user provided descriptors via endowments
        // which will overrule any default descriptor inferred from the
        // detached iframe.
        assign(to, globalDescriptors);
        // removing unforgeable descriptors that cannot be installed
        delete to.location;
        delete to.document;
        delete to.window;
        // Some DOM APIs do brand checks for TypeArrays and others objects,
        // in this case, if the API is not dangerous, and works in a detached
        // iframe, we can let the sandbox to use the iframe's api directly,
        // instead of remapping it to the blue realm.
        // TODO [issue #67]: review this list
        delete to.crypto;
        return to;
    }
    // A comprehensive list of policy feature directives can be found at
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy#Directives
    // Directives not currently supported by Chrome are commented out because
    // Chrome logs warnings to the developer console.
    const IFRAME_ALLOW_ATTRIBUTE_VALUE = "accelerometer 'none';" +
        "ambient-light-sensor 'none';" +
        "autoplay 'none';" +
        // "battery 'none';" +
        "camera 'none';" +
        // "display-capture 'none';" +
        "document-domain 'none';" +
        "encrypted-media 'none';" +
        // "execution-while-not-rendered 'none';" +
        // "execution-while-out-of-viewport 'none';" +
        "fullscreen 'none';" +
        "geolocation 'none';" +
        "gyroscope 'none';" +
        // "layout-animations 'none';" +
        // "legacy-image-formats 'none';" +
        "magnetometer 'none';" +
        "microphone 'none';" +
        "midi 'none';" +
        // "navigation-override 'none';" +
        // "oversized-images 'none';" +
        "payment 'none';" +
        "picture-in-picture 'none';" +
        // "publickey-credentials 'none';" +
        "sync-xhr 'none';" +
        "usb 'none';" +
        // "wake-lock 'none';" +
        "xr-spatial-tracking 'none';";
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
        iframe.setAttribute('allow', IFRAME_ALLOW_ATTRIBUTE_VALUE);
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
    function createSecureEnvironment(distortionMap, endowments) {
        const iframe = createDetachableIframe();
        // For Chrome we evaluate the `window` object to kickstart the realm so that
        // `window` persists when the iframe is removed from the document.
        const redGlobalThis = iframe.contentWindow.window;
        const { eval: redIndirectEval } = redGlobalThis;
        redIndirectEval('window');
        const blueGlobalThis = globalThis;
        // removeIframe(iframe);
        const blueRefs = getCachedReferences(blueGlobalThis);
        const redRefs = getCachedReferences(redGlobalThis);
        const env = new SecureEnvironment({
            blueGlobalThis,
            redGlobalThis,
            distortionMap,
        });
        const globalDescriptors = aggregateGlobalDescriptors(redRefs.windowDescriptors, blueRefs.windowDescriptors, endowments && getOwnPropertyDescriptors(endowments));
        // remapping globals
        env.remap(redRefs.window, blueRefs.window, globalDescriptors);
        // remapping unforgeable objects
        env.remap(redRefs.document, blueRefs.document); // no descriptors needed, document.location is unforgeable
        env.remap(redRefs.EventTargetProto, blueRefs.EventTargetProto, blueRefs.EventTargetProtoDescriptors);
        env.remap(redRefs.WindowPropertiesProto, blueRefs.WindowPropertiesProto, blueRefs.WindowPropertiesProtoDescriptors);
        env.remap(redRefs.WindowProto, blueRefs.WindowProto, blueRefs.WindowProtoDescriptors);
        // adjusting proto chains when possible
        ReflectSetPrototypeOf(redRefs.document, env.getRedValue(blueRefs.DocumentProto));
        // finally, we return the evaluator function
        return (sourceText) => {
            try {
                redIndirectEval(sourceText);
            }
            catch (e) {
                // This error occurred when the blue realm attempts to evaluate a
                // sourceText into the sandbox. By throwing a new blue error, which
                // eliminates the stack information from the sandbox as a consequence.
                let blueError;
                const { message, constructor } = e;
                try {
                    const blueErrorConstructor = env.getBlueRef(constructor);
                    // the constructor must be registered (done during construction of env)
                    // otherwise we need to fallback to a regular error.
                    blueError = construct(blueErrorConstructor, [message]);
                }
                catch (_a) {
                    // in case the constructor inference fails
                    blueError = ErrorCreate(message);
                }
                throw blueError;
            }
        };
    }

    // local caches
    const { createElement } = document;
    const {
        prepend: originalPrepend,
        append: originalAppend,
        appendChild: originalAppendChild,
        insertBefore: originalInsertBefore,
    } = Element.prototype;
    const documentBodyGetter = Reflect.getOwnPropertyDescriptor(
        Document.prototype,
        'body'
    ).get;

    function defineExtraGlobal(name, descriptor) {
        Reflect.defineProperty(window, name, descriptor);
    }

    const endowments = Object.create(Object.prototype, {
        $oasicExtraGlobal$: {
            value: defineExtraGlobal,
            writable: false,
            configurable: false,
            enumerable: false,
        }
    });

    function isScriptElement(elm) {
        return elm && elm instanceof HTMLScriptElement;
    }

    const patchedAppendChild = function appendChild(child) {
        if (isScriptElement(child)) {
            createScriptReflection(child.textContent, child.attributes);
            return child;
        }
        return originalAppendChild.apply(this, arguments);
    };
    const patchedInsertBefore = function insertBefore(child) {
        if (isScriptElement(child)) {
            createScriptReflection(child.textContent, child.attributes);
            return child;
        }
        return originalInsertBefore.apply(this, arguments);
    };
    // TODO: this api accepts a list of arguments
    const patchedAppend = function append(child) {
        if (isScriptElement(child)) {
            createScriptReflection(child.textContent, child.attributes);
            return;
        }
        originalAppend.apply(this, arguments);
    };
    // TODO: this api accepts a list of arguments
    const patchedPrepend = function prepend(child) {
        if (isScriptElement(child)) {
            createScriptReflection(child.textContent, child.attributes);
            return child;
        }
        return originalPrepend.apply(this, arguments);
    };

    const distortionMap = new Map([
        // Element & Node
        [originalAppendChild, patchedAppendChild],
        [originalInsertBefore, patchedInsertBefore],
        [originalAppend, patchedAppend],
        [originalPrepend, patchedPrepend],
        // TODO: document.* as well
    ]);

    const evaluate = createSecureEnvironment(distortionMap, endowments);

    const magicIframe = (document.body || document.lastElementChild).lastElementChild;
    const magicDocument = magicIframe.contentDocument;
    const magicBody = documentBodyGetter.call(magicDocument);

    // patching iframe.contentWindow getter to prevent access to the magic iframe
    /*const contentWindowDescriptor = Reflect.getOwnPropertyDescriptor(
        HTMLIFrameElement.prototype,
        'contentWindow'
    );
    const { get: originalContentWindowGetter } = contentWindowDescriptor;
    contentWindowDescriptor.get = function contentWindow() {
        if (this === magicIframe) { return null; }
        return originalContentWindowGetter.call(this);
    };
    Reflect.defineProperty(HTMLIFrameElement.prototype, 'contentWindow', contentWindowDescriptor);*/

    // patching iframe.contentDocument getter to prevent access to the magic iframe
    /*const contentDocumentDescriptor = Reflect.getOwnPropertyDescriptor(
        HTMLIFrameElement.prototype,
        'contentDocument'
    );
    const { get: originalContentDocumentGetter } = contentDocumentDescriptor;
    contentDocumentDescriptor.get = function contentWindow() {
        if (this === magicIframe) { return null; }
        return originalContentDocumentGetter.call(this);
    };
    Reflect.defineProperty(HTMLIFrameElement.prototype, 'contentDocument', contentDocumentDescriptor);*/

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

    // remap any extra globals between the sandbox and window
    function mapExtraGlobals(names) {
        names.forEach(name => {
            evaluate(`
            'use strict';
            let value;
            const descriptor = {
                get() { return value },
                set(v) { value = v },
                enumerable: true,
                configurable: true,
            };
            const key = \`${name}\`;
            Object.defineProperty(window, key, descriptor);
            $oasicExtraGlobal$(key, descriptor);
        `);
        });
    }

    function createScriptReflection(sourceText, attributes) {
        const script = createElement.call(magicDocument, 'script');
        for (let i = 0, len = attributes.length; i < len; i += 1) {
            const attr = attributes.item(i);
            script.setAttribute(attr.name, attr.value);
        }
        if (sourceText) {
            script.append(sourceText);
        }
        magicBody.appendChild(script);
    }

    function execute(elm) {
        if (elm.evaluate) return; // skipping
        elm.evaluate = true;
        mapExtraGlobals(elm.extraGlobals);
        createScriptReflection(elm.textContent, elm.attributes);
    }

    class OasisScript extends HTMLElement {
        constructor() {
            super();
            let slot = document.createElement('slot');
            slot.addEventListener('slotchange', () => execute(this), {
                once: true // we only care about the first time this receive some content
            });
            this.attachShadow({ mode: 'open' }).appendChild(slot);
        }
        get extraGlobals() {
            const names = this.getAttribute('extra-globals');
            return names ? names.split(',').map(name => name.trim()).filter(name => /\w+/.test(name)) : [];
        }
        set extraGlobals(v) {
            this.setAttribute('extra-globals', v.join(','));
        }
        get src() {
            return this.getAttribute('src');
        }
        set src(v) {
            this.setAttribute('src', v);
        }
        connectedCallback() {
            const { src } = this;
            if (src !== null) {
                execute(this);
            }
        }
    }

    customElements.define('x-oasis-script', OasisScript);

}());
