(() => {
  var __webpack_modules__ = {
    150: function(module, exports) {
      var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
      (function(global, factory) {
        if (true) {
          !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ module ], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, 
          __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === "function" ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, 
          __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
        } else {
          var mod;
        }
      })(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, (function(module) {
        "use strict";
        if (!globalThis.chrome?.runtime?.id) {
          throw new Error("This script should only be loaded in a browser extension.");
        }
        if (typeof globalThis.browser === "undefined" || Object.getPrototypeOf(globalThis.browser) !== Object.prototype) {
          const CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE = "The message port closed before a response was received.";
          const wrapAPIs = extensionAPIs => {
            const apiMetadata = {
              alarms: {
                clear: {
                  minArgs: 0,
                  maxArgs: 1
                },
                clearAll: {
                  minArgs: 0,
                  maxArgs: 0
                },
                get: {
                  minArgs: 0,
                  maxArgs: 1
                },
                getAll: {
                  minArgs: 0,
                  maxArgs: 0
                }
              },
              bookmarks: {
                create: {
                  minArgs: 1,
                  maxArgs: 1
                },
                get: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getChildren: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getRecent: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getSubTree: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getTree: {
                  minArgs: 0,
                  maxArgs: 0
                },
                move: {
                  minArgs: 2,
                  maxArgs: 2
                },
                remove: {
                  minArgs: 1,
                  maxArgs: 1
                },
                removeTree: {
                  minArgs: 1,
                  maxArgs: 1
                },
                search: {
                  minArgs: 1,
                  maxArgs: 1
                },
                update: {
                  minArgs: 2,
                  maxArgs: 2
                }
              },
              browserAction: {
                disable: {
                  minArgs: 0,
                  maxArgs: 1,
                  fallbackToNoCallback: true
                },
                enable: {
                  minArgs: 0,
                  maxArgs: 1,
                  fallbackToNoCallback: true
                },
                getBadgeBackgroundColor: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getBadgeText: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getPopup: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getTitle: {
                  minArgs: 1,
                  maxArgs: 1
                },
                openPopup: {
                  minArgs: 0,
                  maxArgs: 0
                },
                setBadgeBackgroundColor: {
                  minArgs: 1,
                  maxArgs: 1,
                  fallbackToNoCallback: true
                },
                setBadgeText: {
                  minArgs: 1,
                  maxArgs: 1,
                  fallbackToNoCallback: true
                },
                setIcon: {
                  minArgs: 1,
                  maxArgs: 1
                },
                setPopup: {
                  minArgs: 1,
                  maxArgs: 1,
                  fallbackToNoCallback: true
                },
                setTitle: {
                  minArgs: 1,
                  maxArgs: 1,
                  fallbackToNoCallback: true
                }
              },
              browsingData: {
                remove: {
                  minArgs: 2,
                  maxArgs: 2
                },
                removeCache: {
                  minArgs: 1,
                  maxArgs: 1
                },
                removeCookies: {
                  minArgs: 1,
                  maxArgs: 1
                },
                removeDownloads: {
                  minArgs: 1,
                  maxArgs: 1
                },
                removeFormData: {
                  minArgs: 1,
                  maxArgs: 1
                },
                removeHistory: {
                  minArgs: 1,
                  maxArgs: 1
                },
                removeLocalStorage: {
                  minArgs: 1,
                  maxArgs: 1
                },
                removePasswords: {
                  minArgs: 1,
                  maxArgs: 1
                },
                removePluginData: {
                  minArgs: 1,
                  maxArgs: 1
                },
                settings: {
                  minArgs: 0,
                  maxArgs: 0
                }
              },
              commands: {
                getAll: {
                  minArgs: 0,
                  maxArgs: 0
                }
              },
              contextMenus: {
                remove: {
                  minArgs: 1,
                  maxArgs: 1
                },
                removeAll: {
                  minArgs: 0,
                  maxArgs: 0
                },
                update: {
                  minArgs: 2,
                  maxArgs: 2
                }
              },
              cookies: {
                get: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getAll: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getAllCookieStores: {
                  minArgs: 0,
                  maxArgs: 0
                },
                remove: {
                  minArgs: 1,
                  maxArgs: 1
                },
                set: {
                  minArgs: 1,
                  maxArgs: 1
                }
              },
              devtools: {
                inspectedWindow: {
                  eval: {
                    minArgs: 1,
                    maxArgs: 2,
                    singleCallbackArg: false
                  }
                },
                panels: {
                  create: {
                    minArgs: 3,
                    maxArgs: 3,
                    singleCallbackArg: true
                  },
                  elements: {
                    createSidebarPane: {
                      minArgs: 1,
                      maxArgs: 1
                    }
                  }
                }
              },
              downloads: {
                cancel: {
                  minArgs: 1,
                  maxArgs: 1
                },
                download: {
                  minArgs: 1,
                  maxArgs: 1
                },
                erase: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getFileIcon: {
                  minArgs: 1,
                  maxArgs: 2
                },
                open: {
                  minArgs: 1,
                  maxArgs: 1,
                  fallbackToNoCallback: true
                },
                pause: {
                  minArgs: 1,
                  maxArgs: 1
                },
                removeFile: {
                  minArgs: 1,
                  maxArgs: 1
                },
                resume: {
                  minArgs: 1,
                  maxArgs: 1
                },
                search: {
                  minArgs: 1,
                  maxArgs: 1
                },
                show: {
                  minArgs: 1,
                  maxArgs: 1,
                  fallbackToNoCallback: true
                }
              },
              extension: {
                isAllowedFileSchemeAccess: {
                  minArgs: 0,
                  maxArgs: 0
                },
                isAllowedIncognitoAccess: {
                  minArgs: 0,
                  maxArgs: 0
                }
              },
              history: {
                addUrl: {
                  minArgs: 1,
                  maxArgs: 1
                },
                deleteAll: {
                  minArgs: 0,
                  maxArgs: 0
                },
                deleteRange: {
                  minArgs: 1,
                  maxArgs: 1
                },
                deleteUrl: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getVisits: {
                  minArgs: 1,
                  maxArgs: 1
                },
                search: {
                  minArgs: 1,
                  maxArgs: 1
                }
              },
              i18n: {
                detectLanguage: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getAcceptLanguages: {
                  minArgs: 0,
                  maxArgs: 0
                }
              },
              identity: {
                launchWebAuthFlow: {
                  minArgs: 1,
                  maxArgs: 1
                }
              },
              idle: {
                queryState: {
                  minArgs: 1,
                  maxArgs: 1
                }
              },
              management: {
                get: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getAll: {
                  minArgs: 0,
                  maxArgs: 0
                },
                getSelf: {
                  minArgs: 0,
                  maxArgs: 0
                },
                setEnabled: {
                  minArgs: 2,
                  maxArgs: 2
                },
                uninstallSelf: {
                  minArgs: 0,
                  maxArgs: 1
                }
              },
              notifications: {
                clear: {
                  minArgs: 1,
                  maxArgs: 1
                },
                create: {
                  minArgs: 1,
                  maxArgs: 2
                },
                getAll: {
                  minArgs: 0,
                  maxArgs: 0
                },
                getPermissionLevel: {
                  minArgs: 0,
                  maxArgs: 0
                },
                update: {
                  minArgs: 2,
                  maxArgs: 2
                }
              },
              pageAction: {
                getPopup: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getTitle: {
                  minArgs: 1,
                  maxArgs: 1
                },
                hide: {
                  minArgs: 1,
                  maxArgs: 1,
                  fallbackToNoCallback: true
                },
                setIcon: {
                  minArgs: 1,
                  maxArgs: 1
                },
                setPopup: {
                  minArgs: 1,
                  maxArgs: 1,
                  fallbackToNoCallback: true
                },
                setTitle: {
                  minArgs: 1,
                  maxArgs: 1,
                  fallbackToNoCallback: true
                },
                show: {
                  minArgs: 1,
                  maxArgs: 1,
                  fallbackToNoCallback: true
                }
              },
              permissions: {
                contains: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getAll: {
                  minArgs: 0,
                  maxArgs: 0
                },
                remove: {
                  minArgs: 1,
                  maxArgs: 1
                },
                request: {
                  minArgs: 1,
                  maxArgs: 1
                }
              },
              runtime: {
                getBackgroundPage: {
                  minArgs: 0,
                  maxArgs: 0
                },
                getPlatformInfo: {
                  minArgs: 0,
                  maxArgs: 0
                },
                openOptionsPage: {
                  minArgs: 0,
                  maxArgs: 0
                },
                requestUpdateCheck: {
                  minArgs: 0,
                  maxArgs: 0
                },
                sendMessage: {
                  minArgs: 1,
                  maxArgs: 3
                },
                sendNativeMessage: {
                  minArgs: 2,
                  maxArgs: 2
                },
                setUninstallURL: {
                  minArgs: 1,
                  maxArgs: 1
                }
              },
              sessions: {
                getDevices: {
                  minArgs: 0,
                  maxArgs: 1
                },
                getRecentlyClosed: {
                  minArgs: 0,
                  maxArgs: 1
                },
                restore: {
                  minArgs: 0,
                  maxArgs: 1
                }
              },
              storage: {
                local: {
                  clear: {
                    minArgs: 0,
                    maxArgs: 0
                  },
                  get: {
                    minArgs: 0,
                    maxArgs: 1
                  },
                  getBytesInUse: {
                    minArgs: 0,
                    maxArgs: 1
                  },
                  remove: {
                    minArgs: 1,
                    maxArgs: 1
                  },
                  set: {
                    minArgs: 1,
                    maxArgs: 1
                  }
                },
                managed: {
                  get: {
                    minArgs: 0,
                    maxArgs: 1
                  },
                  getBytesInUse: {
                    minArgs: 0,
                    maxArgs: 1
                  }
                },
                sync: {
                  clear: {
                    minArgs: 0,
                    maxArgs: 0
                  },
                  get: {
                    minArgs: 0,
                    maxArgs: 1
                  },
                  getBytesInUse: {
                    minArgs: 0,
                    maxArgs: 1
                  },
                  remove: {
                    minArgs: 1,
                    maxArgs: 1
                  },
                  set: {
                    minArgs: 1,
                    maxArgs: 1
                  }
                }
              },
              tabs: {
                captureVisibleTab: {
                  minArgs: 0,
                  maxArgs: 2
                },
                create: {
                  minArgs: 1,
                  maxArgs: 1
                },
                detectLanguage: {
                  minArgs: 0,
                  maxArgs: 1
                },
                discard: {
                  minArgs: 0,
                  maxArgs: 1
                },
                duplicate: {
                  minArgs: 1,
                  maxArgs: 1
                },
                executeScript: {
                  minArgs: 1,
                  maxArgs: 2
                },
                get: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getCurrent: {
                  minArgs: 0,
                  maxArgs: 0
                },
                getZoom: {
                  minArgs: 0,
                  maxArgs: 1
                },
                getZoomSettings: {
                  minArgs: 0,
                  maxArgs: 1
                },
                goBack: {
                  minArgs: 0,
                  maxArgs: 1
                },
                goForward: {
                  minArgs: 0,
                  maxArgs: 1
                },
                highlight: {
                  minArgs: 1,
                  maxArgs: 1
                },
                insertCSS: {
                  minArgs: 1,
                  maxArgs: 2
                },
                move: {
                  minArgs: 2,
                  maxArgs: 2
                },
                query: {
                  minArgs: 1,
                  maxArgs: 1
                },
                reload: {
                  minArgs: 0,
                  maxArgs: 2
                },
                remove: {
                  minArgs: 1,
                  maxArgs: 1
                },
                removeCSS: {
                  minArgs: 1,
                  maxArgs: 2
                },
                sendMessage: {
                  minArgs: 2,
                  maxArgs: 3
                },
                setZoom: {
                  minArgs: 1,
                  maxArgs: 2
                },
                setZoomSettings: {
                  minArgs: 1,
                  maxArgs: 2
                },
                update: {
                  minArgs: 1,
                  maxArgs: 2
                }
              },
              topSites: {
                get: {
                  minArgs: 0,
                  maxArgs: 0
                }
              },
              webNavigation: {
                getAllFrames: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getFrame: {
                  minArgs: 1,
                  maxArgs: 1
                }
              },
              webRequest: {
                handlerBehaviorChanged: {
                  minArgs: 0,
                  maxArgs: 0
                }
              },
              windows: {
                create: {
                  minArgs: 0,
                  maxArgs: 1
                },
                get: {
                  minArgs: 1,
                  maxArgs: 2
                },
                getAll: {
                  minArgs: 0,
                  maxArgs: 1
                },
                getCurrent: {
                  minArgs: 0,
                  maxArgs: 1
                },
                getLastFocused: {
                  minArgs: 0,
                  maxArgs: 1
                },
                remove: {
                  minArgs: 1,
                  maxArgs: 1
                },
                update: {
                  minArgs: 2,
                  maxArgs: 2
                }
              }
            };
            if (Object.keys(apiMetadata).length === 0) {
              throw new Error("api-metadata.json has not been included in browser-polyfill");
            }
            class DefaultWeakMap extends WeakMap {
              constructor(createItem, items = undefined) {
                super(items);
                this.createItem = createItem;
              }
              get(key) {
                if (!this.has(key)) {
                  this.set(key, this.createItem(key));
                }
                return super.get(key);
              }
            }
            const isThenable = value => value && typeof value === "object" && typeof value.then === "function";
            const makeCallback = (promise, metadata) => (...callbackArgs) => {
              if (extensionAPIs.runtime.lastError) {
                promise.reject(new Error(extensionAPIs.runtime.lastError.message));
              } else if (metadata.singleCallbackArg || callbackArgs.length <= 1 && metadata.singleCallbackArg !== false) {
                promise.resolve(callbackArgs[0]);
              } else {
                promise.resolve(callbackArgs);
              }
            };
            const pluralizeArguments = numArgs => numArgs == 1 ? "argument" : "arguments";
            const wrapAsyncFunction = (name, metadata) => function asyncFunctionWrapper(target, ...args) {
              if (args.length < metadata.minArgs) {
                throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
              }
              if (args.length > metadata.maxArgs) {
                throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
              }
              return new Promise(((resolve, reject) => {
                if (metadata.fallbackToNoCallback) {
                  try {
                    target[name](...args, makeCallback({
                      resolve,
                      reject
                    }, metadata));
                  } catch (cbError) {
                    console.warn(`${name} API method doesn't seem to support the callback parameter, ` + "falling back to call it without a callback: ", cbError);
                    target[name](...args);
                    metadata.fallbackToNoCallback = false;
                    metadata.noCallback = true;
                    resolve();
                  }
                } else if (metadata.noCallback) {
                  target[name](...args);
                  resolve();
                } else {
                  target[name](...args, makeCallback({
                    resolve,
                    reject
                  }, metadata));
                }
              }));
            };
            const wrapMethod = (target, method, wrapper) => new Proxy(method, {
              apply(targetMethod, thisObj, args) {
                return wrapper.call(thisObj, target, ...args);
              }
            });
            let hasOwnProperty = Function.call.bind(Object.prototype.hasOwnProperty);
            const wrapObject = (target, wrappers = {}, metadata = {}) => {
              let cache = Object.create(null);
              let handlers = {
                has(proxyTarget, prop) {
                  return prop in target || prop in cache;
                },
                get(proxyTarget, prop, receiver) {
                  if (prop in cache) {
                    return cache[prop];
                  }
                  if (!(prop in target)) {
                    return undefined;
                  }
                  let value = target[prop];
                  if (typeof value === "function") {
                    if (typeof wrappers[prop] === "function") {
                      value = wrapMethod(target, target[prop], wrappers[prop]);
                    } else if (hasOwnProperty(metadata, prop)) {
                      let wrapper = wrapAsyncFunction(prop, metadata[prop]);
                      value = wrapMethod(target, target[prop], wrapper);
                    } else {
                      value = value.bind(target);
                    }
                  } else if (typeof value === "object" && value !== null && (hasOwnProperty(wrappers, prop) || hasOwnProperty(metadata, prop))) {
                    value = wrapObject(value, wrappers[prop], metadata[prop]);
                  } else if (hasOwnProperty(metadata, "*")) {
                    value = wrapObject(value, wrappers[prop], metadata["*"]);
                  } else {
                    Object.defineProperty(cache, prop, {
                      configurable: true,
                      enumerable: true,
                      get() {
                        return target[prop];
                      },
                      set(value) {
                        target[prop] = value;
                      }
                    });
                    return value;
                  }
                  cache[prop] = value;
                  return value;
                },
                set(proxyTarget, prop, value, receiver) {
                  if (prop in cache) {
                    cache[prop] = value;
                  } else {
                    target[prop] = value;
                  }
                  return true;
                },
                defineProperty(proxyTarget, prop, desc) {
                  return Reflect.defineProperty(cache, prop, desc);
                },
                deleteProperty(proxyTarget, prop) {
                  return Reflect.deleteProperty(cache, prop);
                }
              };
              let proxyTarget = Object.create(target);
              return new Proxy(proxyTarget, handlers);
            };
            const wrapEvent = wrapperMap => ({
              addListener(target, listener, ...args) {
                target.addListener(wrapperMap.get(listener), ...args);
              },
              hasListener(target, listener) {
                return target.hasListener(wrapperMap.get(listener));
              },
              removeListener(target, listener) {
                target.removeListener(wrapperMap.get(listener));
              }
            });
            const onRequestFinishedWrappers = new DefaultWeakMap((listener => {
              if (typeof listener !== "function") {
                return listener;
              }
              return function onRequestFinished(req) {
                const wrappedReq = wrapObject(req, {}, {
                  getContent: {
                    minArgs: 0,
                    maxArgs: 0
                  }
                });
                listener(wrappedReq);
              };
            }));
            const onMessageWrappers = new DefaultWeakMap((listener => {
              if (typeof listener !== "function") {
                return listener;
              }
              return function onMessage(message, sender, sendResponse) {
                let didCallSendResponse = false;
                let wrappedSendResponse;
                let sendResponsePromise = new Promise((resolve => {
                  wrappedSendResponse = function(response) {
                    didCallSendResponse = true;
                    resolve(response);
                  };
                }));
                let result;
                try {
                  result = listener(message, sender, wrappedSendResponse);
                } catch (err) {
                  result = Promise.reject(err);
                }
                const isResultThenable = result !== true && isThenable(result);
                if (result !== true && !isResultThenable && !didCallSendResponse) {
                  return false;
                }
                const sendPromisedResult = promise => {
                  promise.then((msg => {
                    sendResponse(msg);
                  }), (error => {
                    let message;
                    if (error && (error instanceof Error || typeof error.message === "string")) {
                      message = error.message;
                    } else {
                      message = "An unexpected error occurred";
                    }
                    sendResponse({
                      __mozWebExtensionPolyfillReject__: true,
                      message
                    });
                  })).catch((err => {
                    console.error("Failed to send onMessage rejected reply", err);
                  }));
                };
                if (isResultThenable) {
                  sendPromisedResult(result);
                } else {
                  sendPromisedResult(sendResponsePromise);
                }
                return true;
              };
            }));
            const wrappedSendMessageCallback = ({reject, resolve}, reply) => {
              if (extensionAPIs.runtime.lastError) {
                if (extensionAPIs.runtime.lastError.message === CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE) {
                  resolve();
                } else {
                  reject(new Error(extensionAPIs.runtime.lastError.message));
                }
              } else if (reply && reply.__mozWebExtensionPolyfillReject__) {
                reject(new Error(reply.message));
              } else {
                resolve(reply);
              }
            };
            const wrappedSendMessage = (name, metadata, apiNamespaceObj, ...args) => {
              if (args.length < metadata.minArgs) {
                throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
              }
              if (args.length > metadata.maxArgs) {
                throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
              }
              return new Promise(((resolve, reject) => {
                const wrappedCb = wrappedSendMessageCallback.bind(null, {
                  resolve,
                  reject
                });
                args.push(wrappedCb);
                apiNamespaceObj.sendMessage(...args);
              }));
            };
            const staticWrappers = {
              devtools: {
                network: {
                  onRequestFinished: wrapEvent(onRequestFinishedWrappers)
                }
              },
              runtime: {
                onMessage: wrapEvent(onMessageWrappers),
                onMessageExternal: wrapEvent(onMessageWrappers),
                sendMessage: wrappedSendMessage.bind(null, "sendMessage", {
                  minArgs: 1,
                  maxArgs: 3
                })
              },
              tabs: {
                sendMessage: wrappedSendMessage.bind(null, "sendMessage", {
                  minArgs: 2,
                  maxArgs: 3
                })
              }
            };
            const settingMetadata = {
              clear: {
                minArgs: 1,
                maxArgs: 1
              },
              get: {
                minArgs: 1,
                maxArgs: 1
              },
              set: {
                minArgs: 1,
                maxArgs: 1
              }
            };
            apiMetadata.privacy = {
              network: {
                "*": settingMetadata
              },
              services: {
                "*": settingMetadata
              },
              websites: {
                "*": settingMetadata
              }
            };
            return wrapObject(extensionAPIs, staticWrappers, apiMetadata);
          };
          module.exports = wrapAPIs(chrome);
        } else {
          module.exports = globalThis.browser;
        }
      }));
    }
  };
  var __webpack_module_cache__ = {};
  function __webpack_require__(moduleId) {
    var cachedModule = __webpack_module_cache__[moduleId];
    if (cachedModule !== undefined) {
      return cachedModule.exports;
    }
    var module = __webpack_module_cache__[moduleId] = {
      exports: {}
    };
    __webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    return module.exports;
  }
  var __webpack_exports__ = {};
  (() => {
    "use strict";
    var browser_polyfill = __webpack_require__(150);
    const VERSION = "0.4.5";
    const YEAR = "2022";
    const YAKKL_INTERNAL = "yakkl-internal";
    const YAKKL_EXTERNAL = "yakkl-external";
    const YAKKL_PROVIDER = "yakkl-provider";
    const YAKKL_SPLASH = "yakkl-splash";
    const YAKKL_ETH = "yakkl-eth";
    const DEFAULT_POPUP_WIDTH = 428;
    const DEFAULT_POPUP_HEIGHT = 926;
    const DEFAULT_EXT_HEIGHT = 926;
    const DEFAULT_TITLE = "#1 YAKKL®  Smart Wallet";
    const DEFAULT_DERIVED_PATH_ETH = "m/44'/60'/";
    const DEFAULT_YAKKL_NETWORKS = "yakklNetworks";
    const STORAGE_YAKKL_SETTINGS = "yakklSettings";
    const STORAGE_YAKKL_PROFILE = "yakklProfile";
    const STORAGE_YAKKL_CURRENTLY_SELECTED = "yakklCurrentlySelected";
    const STORAGE_YAKKL_NETWORKS = "yakklNetworks";
    const STORAGE_YAKKL_ACTIVITY_LOG = "yakklActivityLog";
    const STORAGE_YAKKL_TRANSACTION_DETAIL = "yakklTransactionDetail";
    const STORAGE_YAKKL_PRIMARY_ACCOUNTS = "yakklPrimaryAccounts";
    const STORAGE_YAKKL_CONTACTS = "yakklContacts";
    const PASSKEY_HINTS_MIN = 3;
    const PATH_HOME = "/";
    const PATH_REGISTER = "/register/Register";
    const PATH_LOGIN = "/login/Login";
    const PATH_LOCK = "/lock";
    const PATH_WELCOME = "/welcome/Welcome";
    const PATH_DASHBOARD = "/dashboard";
    const PATH_LOGOUT = "/logout";
    const PATH_IMPORT = "/import";
    const PATH_IMPORT_WATCH = "/import/import-watch";
    const PATH_IMPORT_RECOVERY = "/import/import-recovery";
    const PATH_EXPORT = "/export";
    const PATH_EXPORT_EXPORT = "/export/export";
    const PATH_ACCOUNTS = "/accounts";
    const PATH_ACCOUNTS_ETHEREUM_CREATE_PRIMARY = "/accounts/ethereum/create/primary";
    const PATH_ACCOUNTS_ETHEREUM_CREATE_DERIVED = "/accounts/ethereum/create/derived";
    const PATH_LEGAL = "/legal/Legal";
    const PATH_PROFILE = "/components/profile";
    const PATH_ACTIVITIES = "/activities";
    const PATH_CRYPTO = "/crypto";
    const PATH_NFTS = "/nfts";
    const PATH_UNIVERSITY = "/university";
    const PATH_SECURITY = "/security";
    const PATH_SECURITY_PASSWORD = "/security/password";
    const PATH_SECURITY_2FA = "/security/2fa";
    const PATH_SECURITY_USERNAME = "/security/username";
    const PATH_SECURITY_SECRET = "/security/secret";
    const PATH_SECURITY_RESET = "/security/reset";
    const PATH_SETTINGS = "/settings";
    const PATH_WEB3 = "/web3";
    const PATH_ETHEREUM_TRANSACTIONS_SEND = "/accounts/ethereum/transactions/send";
    const PATH_ETHEREUM_TRANSACTIONS_SWAP = "/accounts/ethereum/transactions/swap";
    const PATH_ETHEREUM_TRANSACTIONS_SELL = "/accounts/ethereum/transactions/sell";
    const PATH_ETHEREUM_TRANSACTIONS_STAKE = "/accounts/ethereum/transactions/stake";
    const PATH_ETHEREUM_TRANSACTIONS_BUY = "/accounts/ethereum/transactions/buy";
    const PROVIDERS = {
      YAKKL: "yakkl",
      INFURA: "infura",
      ALCHEMY: "alchemy",
      ETHERSCAN: "etherscan"
    };
    const BLOCKCHAINS_L1 = {
      ETHEREUM: "ethereum",
      BITCOIN: "bitcoin",
      SOLANA: "solana",
      CARDANO: "cardano",
      RIPPLE: "ripple"
    };
    const BLOCKCHAINS_L1_NETWORKS = {
      ETHEREUM: {
        mainnet: "mainnet",
        testnets: [ "goerli", "sepolia" ]
      },
      BITCOIN: "bitcoin",
      SOLANA: "solana",
      CARDANO: "cardano",
      RIPPLE: "ripple"
    };
    const ENVIRONMENT_TYPES = {
      BACKGROUND: "background",
      BROWSER: "browser",
      NOTIFICATION: "notification",
      POPUP: "index"
    };
    const PLATFORM_TYPES = {
      BRAVE: "Brave",
      CHROME: "Chrome",
      EDGE: "Edge",
      FIREFOX: "Firefox",
      OPERA: "Opera",
      SAFARI: "Safari"
    };
    const TOKEN_IMAGES = {
      ETH_URL: "./images/eth_logo.svg",
      BNB_URL: "./images/bnb.png",
      MATIC_URL: "./images/matic-token.png"
    };
    const OS_TYPES = {
      OSX: "OSX",
      WINDOWS: "Windows",
      LINUX_REDHAT: "Red Hat",
      LINUX_UBUNTU: "Ubuntu",
      LINUX_OTHER: "Linux",
      CHROME: "Chrome OS",
      ANDROID: "Android",
      IOS: "iOS"
    };
    const TRANSACTION_TYPES = {
      CANCEL: "cancel",
      CONTRACT_INTERACTION: "contractInteraction",
      DAO_INTERACTION: "daoInteraction",
      DEPLOY_CONTRACT: "contractDeployment",
      DECRYPT: "decrypt",
      GET_ENCRYPTION_PUBLIC_KEY: "getEncryptionPulicKey",
      INCOMING: "incoming",
      NFT: "contractInteraction",
      PERSONAL_SIGN: "personalSign",
      RETRY: "retry",
      SIGN: "sign",
      SIGN_TYPED_DATA: "signTypedData",
      SIMPLE_SEND: "simpleSend",
      SMART: "smart",
      SWAP: "swap",
      SWAP_APPROVAL: "swapApproval",
      TOKEN_METHOD_APPROVE: "approve",
      TOKEN_METHOD_SAFE_TRANSFER_FROM: "safeTransferFrom",
      TOKEN_METHOD_TRANSFER: "transfer",
      TOKEN_METHOD_TRANSFER_FROM: "transferfrom",
      TOKEN_METHOD_SET_APPROVAL_FOR_ALL: "setApprovalForAll"
    };
    const TRANSACTION_STATUSES = {
      UNAPPROVED: "unapproved",
      APPROVED: "approved",
      REJECTED: "rejected",
      SIGNED: "signed",
      SUBMITTED: "submitted",
      FAILED: "failed",
      DROPPED: "dropped",
      CONFIRMED: "confirmed",
      PENDING: "pending"
    };
    const IN_PROGRESS_TRANSACTION_STATUSES = [ TRANSACTION_STATUSES.UNAPPROVED, TRANSACTION_STATUSES.APPROVED, TRANSACTION_STATUSES.SIGNED, TRANSACTION_STATUSES.SUBMITTED, TRANSACTION_STATUSES.PENDING ];
    const TRANSACTION_GROUP_STATUSES = {
      CANCELLED: "cancelled",
      PENDING: "pending"
    };
    const SMART_TRANSACTION_STATUSES = {
      CANCELLED: "cancelled",
      PENDING: "pending",
      SUCCESS: "success"
    };
    const TRANSACTION_GROUP_CATEGORIES = {
      APPROVAL: "approval",
      INTERACTION: "interaction",
      RECEIVE: "receive",
      SEND: "send",
      SIGNATURE_REQUEST: "signature-request",
      SWAP: "swap"
    };
    const TRANSACTION_EVENTS = {
      ADDED: "Transaction Added",
      APPROVED: "Transaction Approved",
      FINALIZED: "Transaction Finalized",
      REJECTED: "Transaction Rejected",
      SUBMITTED: "Transaction Submitted"
    };
    const ASSET_TYPES = {
      COLLECTIBLE: "Collectaible",
      MEME: "Meme",
      NATIVE: "Native",
      TOKEN: "Token",
      UNKNOWN: "Unknown"
    };
    const windowOrigin = window.location.origin;
    let port;
    function createPort(name) {
      try {
        port = browser_polyfill.runtime.connect({
          name
        });
        port.onMessage.addListener(onMessageListener);
        port.onDisconnect.addListener(onDisconnectListener);
        console.log(port);
      } catch (error) {
        console.log(error);
      }
    }
    function onMessageListener(messageEvent) {
      console.log("content:");
      console.log(messageEvent);
    }
    function onDisconnectListener(messageEvent) {
      console.log("port disconnected:");
      console.log(messageEvent);
      if (browser_polyfill.runtime.lastError) {
        console.log(browser_polyfill.runtime.lastError);
      }
      this.onMessage.removeListener(onMessageListener);
      this.onDisconnect.removeListener(onDisconnectListener);
      port = undefined;
      createPort(YAKKL_EXTERNAL);
    }
    try {
      if (document.contentType === "text/html") {
        const container = document.head || document.documentElement;
        const script = document.createElement("script");
        script.setAttribute("async", "false");
        script.src = browser_polyfill.runtime.getURL("/js/inpage.js");
        script.id = YAKKL_PROVIDER;
        container.prepend(script);
      }
      createPort(YAKKL_EXTERNAL);
      console.log(`port connected for: ${YAKKL_EXTERNAL}`);
      console.log(port);
      window.addEventListener("message", (messageEvent => {
        if (messageEvent.origin === windowOrigin && messageEvent.source === window && messageEvent.data.target === YAKKL_PROVIDER) {
          const request = messageEvent.data.data ? messageEvent.data.data.request : undefined;
          if (request === undefined) {
            console.log("Request was undefined so breaking out of `message` event in `contents`");
          } else {
            if (request.method === "eth_requestAccounts") {
              const faviconElements = window.document.querySelectorAll("link[rel*='icon']");
              const largestFavicon = [ ...faviconElements ].sort((el => parseInt(el.sizes?.toString().split("x")[0], 10)))[0];
              const faviconUrl = largestFavicon?.href ?? "";
              const title = window.document.title ?? "";
              if (request.params === undefined) {
                request.params = [];
              }
              request.params.push(title, faviconUrl);
            }
            console.log(request);
            if (request.method) {
              port.postMessage(request);
              console.log("posted request with icons");
            } else if (request.message) {
              console.log(request);
            }
          }
        }
      }));
    } catch (e) {
      console.error("YAKKL: Provider injection failed. This web page will not be able to connect to YAKKL.", e);
    }
  })();
})();
