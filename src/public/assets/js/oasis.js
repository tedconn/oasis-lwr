const { assign, create: ObjectCreate, defineProperty: ObjectDefineProperty, getOwnPropertyDescriptors, freeze, seal, isSealed, isFrozen, } = Object;
const { apply, construct, getPrototypeOf: ReflectGetPrototypeOf, setPrototypeOf: ReflectSetPrototypeOf, defineProperty: ReflectDefineProperty, isExtensible: ReflectIsExtensible, getOwnPropertyDescriptor: ReflectGetOwnPropertyDescriptor, ownKeys, preventExtensions: ReflectPreventExtensions, deleteProperty, has: ReflectHas, get: ReflectGet, set: ReflectSet, } = Reflect;
const ErrorCreate = unconstruct(Error);
const SetCreate = unconstruct(Set);
const SetHas = unapply(Set.prototype.has);
const WeakMapCreate = unconstruct(WeakMap);
const WeakMapGet = unapply(WeakMap.prototype.get);
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
            else ;
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
        env.setRefMapEntries(red, blue);
        env.setRefMapEntries(red.prototype, blue.prototype);
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
function createSecureEnvironment(options) {
    const { distortionMap, endowments, keepAlive } = options || {};
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
const { getOwnPropertyDescriptor: getOwnPropertyDescriptor$1 } = Object;
const DocumentPrototypeActiveElement = getOwnPropertyDescriptor$1(Document.prototype, 'activeElement').get;
// defaultView can be null when a document has no browsing context. For example, the owner document
// of a node in a template doesn't have a default view: https://jsfiddle.net/hv9z0q5a/
const defaultViewGetter = getOwnPropertyDescriptor$1(Document.prototype, 'defaultView').get;

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
const { assign: assign$1, create, defineProperties, defineProperty, freeze: freeze$1, getOwnPropertyDescriptor: getOwnPropertyDescriptor$2, getOwnPropertyNames, getPrototypeOf, hasOwnProperty: hasOwnProperty$1, keys, seal: seal$1, setPrototypeOf, } = Object;
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
const hosts = new WeakMap();
function isHostElement(node) {
    return hosts.has(node);
}
function setHostElement(elm, sr) {
    hosts.set(elm, sr);
}
function getShadowRootFromHostElement(node) {
    return hosts.get(node) || null;
}

/*
 * Copyright (c) 2020, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
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
const assignedSlotGetter = getOwnPropertyDescriptor$2(Element.prototype, 'assignedSlot').get;
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
const assignedSlotOriginal = getOwnPropertyDescriptor$2(Text.prototype, 'assignedSlot').get;
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
const { getOwnPropertyDescriptor: getOwnPropertyDescriptor$3, hasOwnProperty: hasOwnProperty$2 } = Object;
const { addEventListener, getAttribute, getBoundingClientRect, getElementsByTagName, getElementsByTagNameNS, hasAttribute, querySelector, querySelectorAll, removeAttribute, removeEventListener, setAttribute, } = Element.prototype;
const attachShadow = hasOwnProperty$2.call(Element.prototype, 'attachShadow')
    ? Element.prototype.attachShadow
    : () => {
        throw new TypeError('attachShadow() is not supported in current browser. Load the @lwc/synthetic-shadow polyfill and use Lightning Web Components');
    };
const childElementCountGetter = getOwnPropertyDescriptor$3(Element.prototype, 'childElementCount').get;
const firstElementChildGetter = getOwnPropertyDescriptor$3(Element.prototype, 'firstElementChild').get;
const lastElementChildGetter = getOwnPropertyDescriptor$3(Element.prototype, 'lastElementChild').get;
const innerHTMLDescriptor = getOwnPropertyDescriptor$3(Element.prototype, 'innerHTML');
const innerHTMLGetter = innerHTMLDescriptor.get;
const innerHTMLSetter = innerHTMLDescriptor.set;
const outerHTMLDescriptor = getOwnPropertyDescriptor$3(Element.prototype, 'outerHTML');
const outerHTMLGetter = outerHTMLDescriptor.get;
const outerHTMLSetter = outerHTMLDescriptor.set;
const tagNameGetter = getOwnPropertyDescriptor$3(Element.prototype, 'tagName').get;
const tabIndexDescriptor = getOwnPropertyDescriptor$3(HTMLElement.prototype, 'tabIndex');
const tabIndexGetter = tabIndexDescriptor.get;
const tabIndexSetter = tabIndexDescriptor.set;
const childrenGetter = getOwnPropertyDescriptor$3(Element.prototype, 'children').get;
const { getElementsByClassName } = Element.prototype;
const shadowRootGetter = getOwnPropertyDescriptor$3(Element.prototype, 'shadowRoot').get;

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
const assignedSlotGetter$1 = getOwnPropertyDescriptor$2(Element.prototype, 'assignedSlot').get;
const fragmentChildrenGetter = getOwnPropertyDescriptor$2(DocumentFragment.prototype, 'children').get;
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
const querySelectorDistortion = function querySelector() {
    // TODO
    throw new Error(`Implementation Missing`);
};
const querySelectorAllDistortion = function querySelectorAll() {
    // TODO
    throw new Error(`Implementation Missing`);
};
const getElementsByClassNameDistortion = function getElementsByClassName() {
    // TODO
    throw new Error(`Implementation Missing`);
};
const getElementsByTagNameDistortion = function getElementsByTagName() {
    // TODO
    throw new Error(`Implementation Missing`);
};
const getElementsByTagNameNSDistortion = function getElementsByTagNameNS() {
    // TODO
    throw new Error(`Implementation Missing`);
};
// Non-deep-traversing patches: this descriptor map includes all descriptors that
// do not five access to nodes beyond the immediate children.
const innerHTMLDistortion = function innerHTML() {
    return getInnerHTML(this);
};
const outerHTMLDistortion = function outerHTML() {
    return getOuterHTML(this);
};
const shadowRootDistortion = function shadowRoot() {
    // you should now see any shadowRoot ever in this virtualization mode
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
]);
// Main Window Patches
const { attachShadow: originalAttachShadow } = Element.prototype;
const attachShadowPatched = function attachShadow(options) {
    const sr = originalAttachShadow.call(this, options);
    // associating the host element with the shadow even when the shadow root is closed
    setHostElement(this, sr);
    return sr;
};
defineProperty(Element.prototype, 'attachShadow', {
    value: attachShadowPatched,
    enumerable: true,
    writable: true,
    configurable: true,
});

/*
 * Copyright (c) 2020, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
const eventTargetGetter = getOwnPropertyDescriptor$2(Event.prototype, 'target').get;
const focusEventRelatedTargetGetter = getOwnPropertyDescriptor$2(FocusEvent.prototype, 'relatedTarget').get;
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

/*
 * Copyright (c) 2020, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
const activeElementOriginal = getOwnPropertyDescriptor$2(Document.prototype, 'activeElement').get;
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
var DocumentDistortions = new Map([
    [activeElementOriginal, activeElementDistortion]
]);

/*
 * Copyright (c) 2020, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
const { addEventListener: addEventListenerOriginal, } = EventTarget.prototype;
const addEventListenerDistortion = function addEventListener(...args) {
    // TODO: at least log the event that libs in oasis will be listening for,
    // we will need to do more work to make sure that those are not fully retargeted
    return addEventListenerOriginal.apply(this, args);
};
var EventTargetDistortions = MapCreate([
    [addEventListenerOriginal, addEventListenerDistortion]
]);

// @ts-ignore we have some issues with `declare module '@caridy/sjs/lib/browser-realm';`
// local caches
const { createElement } = document;
const { prepend: originalPrepend, append: originalAppend, appendChild: originalAppendChild, insertBefore: originalInsertBefore, } = Element.prototype;
const documentBodyGetter = Reflect.getOwnPropertyDescriptor(Document.prototype, 'body').get;
function defineExportedGlobal(name, descriptor) {
    console.log("exporting: " + name);
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
        createScriptReflection(child.textContent, child.attributes);
        return child;
    }
    return originalAppendChild.apply(this, args);
};
const patchedInsertBefore = function insertBefore(...args) {
    const [child] = args;
    if (isScriptElement(child)) {
        createScriptReflection(child.textContent, child.attributes);
        return child;
    }
    return originalInsertBefore.apply(this, args);
};
const patchedAppend = function append(...args) {
    const [child] = args;
    if (!isString(child) && isScriptElement(child)) {
        createScriptReflection(child.textContent, child.attributes);
        return;
    }
    originalAppend.apply(this, args);
};
const patchedPrepend = function prepend(...args) {
    const [child] = args;
    if (!isString(child) && isScriptElement(child)) {
        createScriptReflection(child.textContent, child.attributes);
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
const magicDocument = magicIframe.contentDocument;
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
function createScriptReflection(sourceText, attributes) {
    const script = createElement.call(magicDocument, 'script');
    for (let i = 0, len = attributes.length; i < len; i += 1) {
        const attr = attributes.item(i);
        if (!isNull$1(attr)) {
            script.setAttribute(attr.name, attr.value);
        }
    }
    if (sourceText) {
        script.append(sourceText);
    }
    magicBody.appendChild(script);
}
function execute(elm) {
    // TODO: improve this to not use an expando, use a weakmap instead
    if (elm.evaluate)
        return; // skipping
    elm.evaluate = true;
    mapExportedGlobals(elm.exportedGlobalNames);
    mapImportedGlobals(elm.importedGlobalNames);
    createScriptReflection(elm.textContent, elm.attributes);
}
class OasisScript extends HTMLElement {
    constructor() {
        super();
        const slot = document.createElement('slot');
        slot.addEventListener('slotchange', () => execute(this), {
            once: true // we only care about the first time this receive some content
        });
        this.attachShadow({ mode: 'open' }).appendChild(slot);
    }
    get exportedGlobalNames() {
        const names = this.getAttribute('exported-global-names');
        return names ? names.split(',').map(name => name.trim()).filter(name => /\w+/.test(name)) : [];
    }
    set exportedGlobalNames(v) {
        this.setAttribute('exported-global-names', v.join(','));
    }
    get importedGlobalNames() {
        const names = this.getAttribute('imported-global-names');
        return names ? names.split(',').map(name => name.trim()).filter(name => /\w+/.test(name)) : [];
    }
    set importedGlobalNames(v) {
        this.setAttribute('imported-global-names', v.join(','));
    }
    get src() {
        return this.getAttribute('src');
    }
    set src(v) {
        if (v === null) {
            this.removeAttribute('src');
        }
        else {
            this.setAttribute('src', v);
        }
    }
    connectedCallback() {
        const { src } = this;
        if (src !== null) {
            execute(this);
        }
    }
}
customElements.define('x-oasis-script', OasisScript);

var sandbox = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': OasisScript
});
