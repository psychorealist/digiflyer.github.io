// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  externals,
  distDir,
  publicUrl,
  devServer
) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        if (externals[name]) {
          return externals[name];
        }
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      if (res === false) {
        return {};
      }
      // Synthesize a module to follow re-exports.
      if (Array.isArray(res)) {
        var m = {__esModule: true};
        res.forEach(function (v) {
          var key = v[0];
          var id = v[1];
          var exp = v[2] || v[0];
          var x = newRequire(id);
          if (key === '*') {
            Object.keys(x).forEach(function (key) {
              if (
                key === 'default' ||
                key === '__esModule' ||
                Object.prototype.hasOwnProperty.call(m, key)
              ) {
                return;
              }

              Object.defineProperty(m, key, {
                enumerable: true,
                get: function () {
                  return x[key];
                },
              });
            });
          } else if (exp === '*') {
            Object.defineProperty(m, key, {
              enumerable: true,
              value: x,
            });
          } else {
            Object.defineProperty(m, key, {
              enumerable: true,
              get: function () {
                if (exp === 'default') {
                  return x.__esModule ? x.default : x;
                }
                return x[exp];
              },
            });
          }
        });
        return m;
      }
      return newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  // INSERT_LOAD_HERE

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });
    }
  }
})({"afzPs":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "f9db3c51dc7f351e";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_SERVER_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_SERVER_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ , bundleNotFound = false;
function getHostname() {
    return HMR_HOST || (typeof location !== 'undefined' && location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || (typeof location !== 'undefined' ? location.port : HMR_SERVER_PORT);
}
// eslint-disable-next-line no-redeclare
let WebSocket = globalThis.WebSocket;
if (!WebSocket && typeof module.bundle.root === 'function') try {
    // eslint-disable-next-line no-global-assign
    WebSocket = module.bundle.root('ws');
} catch  {
// ignore.
}
var hostname = getHostname();
var port = getPort();
var protocol = HMR_SECURE || typeof location !== 'undefined' && location.protocol === 'https:' && ![
    'localhost',
    '127.0.0.1',
    '0.0.0.0'
].includes(hostname) ? 'wss' : 'ws';
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if (!parent || !parent.isParcelRequire) {
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        // If we're running in the dev server's node runner, listen for messages on the parent port.
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) {
            parentPort.on('message', async (message)=>{
                try {
                    await handleMessage(message);
                    parentPort.postMessage('updated');
                } catch  {
                    parentPort.postMessage('restart');
                }
            });
            // After the bundle has finished running, notify the dev server that the HMR update is complete.
            queueMicrotask(()=>parentPort.postMessage('ready'));
        }
    } catch  {
        if (typeof WebSocket !== 'undefined') try {
            ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
        } catch (err) {
            // Ignore cloudflare workers error.
            if (err.message && !err.message.includes('Disallowed operation called within global scope')) console.error(err.message);
        }
    }
    if (ws) {
        // $FlowFixMe
        ws.onmessage = async function(event /*: {data: string, ...} */ ) {
            var data /*: HMRMessage */  = JSON.parse(event.data);
            await handleMessage(data);
        };
        if (ws instanceof WebSocket) {
            ws.onerror = function(e) {
                if (e.message) console.error(e.message);
            };
            ws.onclose = function() {
                console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
            };
        }
    }
}
async function handleMessage(data /*: HMRMessage */ ) {
    checkedAssets = {} /*: {|[string]: boolean|} */ ;
    disposedAssets = {} /*: {|[string]: boolean|} */ ;
    assetsToAccept = [];
    assetsToDispose = [];
    bundleNotFound = false;
    if (data.type === 'reload') fullReload();
    else if (data.type === 'update') {
        // Remove error overlay if there is one
        if (typeof document !== 'undefined') removeErrorOverlay();
        let assets = data.assets;
        // Handle HMR Update
        let handled = assets.every((asset)=>{
            return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        });
        // Dispatch a custom event in case a bundle was not found. This might mean
        // an asset on the server changed and we should reload the page. This event
        // gives the client an opportunity to refresh without losing state
        // (e.g. via React Server Components). If e.preventDefault() is not called,
        // we will trigger a full page reload.
        if (handled && bundleNotFound && assets.some((a)=>a.envHash !== HMR_ENV_HASH) && typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') handled = !window.dispatchEvent(new CustomEvent('parcelhmrreload', {
            cancelable: true
        }));
        if (handled) {
            console.clear();
            // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
            if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
            await hmrApplyUpdates(assets);
            hmrDisposeQueue();
            // Run accept callbacks. This will also re-execute other disposed assets in topological order.
            let processedAssets = {};
            for(let i = 0; i < assetsToAccept.length; i++){
                let id = assetsToAccept[i][1];
                if (!processedAssets[id]) {
                    hmrAccept(assetsToAccept[i][0], id);
                    processedAssets[id] = true;
                }
            }
        } else fullReload();
    }
    if (data.type === 'error') {
        // Log parcel errors to console
        for (let ansiDiagnostic of data.diagnostics.ansi){
            let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
            console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
        }
        if (typeof document !== 'undefined') {
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="${protocol === 'wss' ? 'https' : 'http'}://${hostname}:${port}/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if (typeof location !== 'undefined' && 'reload' in location) location.reload();
    else if (typeof extCtx !== 'undefined' && extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
    else try {
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) parentPort.postMessage('restart');
    } catch (err) {
        console.error("[parcel] \u26A0\uFE0F An HMR update was not accepted. Please restart the process.");
    }
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout || typeof document === 'undefined') return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    checkedAssets = {};
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else if (a !== null) {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) {
            bundleNotFound = true;
            return true;
        }
        return hmrAcceptCheckOne(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return null;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    if (!cached) return true;
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
    return false;
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"giKwA":[function(require,module,exports,__globalThis) {
function t(t, e, i) {
    return Math.max(t, Math.min(e, i));
}
var e = class {
    isRunning = !1;
    value = 0;
    from = 0;
    to = 0;
    currentTime = 0;
    lerp;
    duration;
    easing;
    onUpdate;
    advance(e) {
        if (!this.isRunning) return;
        let i = !1;
        if (this.duration && this.easing) {
            this.currentTime += e;
            let s = t(0, this.currentTime / this.duration, 1), n = (i = s >= 1) ? 1 : this.easing(s);
            this.value = this.from + (this.to - this.from) * n;
        } else if (this.lerp) {
            var s, n, o;
            this.value = (s = this.value, n = this.to, (1 - (o = 1 - Math.exp(-(60 * this.lerp) * e))) * s + o * n), Math.round(this.value) === this.to && (this.value = this.to, i = !0);
        } else this.value = this.to, i = !0;
        i && this.stop(), this.onUpdate?.(this.value, i);
    }
    stop() {
        this.isRunning = !1;
    }
    fromTo(t, e, { lerp: i, duration: s, easing: n, onStart: o, onUpdate: r }) {
        this.from = this.value = t, this.to = e, this.lerp = i, this.duration = s, this.easing = n, this.currentTime = 0, this.isRunning = !0, o?.(), this.onUpdate = r;
    }
}, i = class {
    constructor(t, e, { autoResize: i = !0, debounce: s = 250 } = {}){
        if (this.wrapper = t, this.content = e, i) {
            var n;
            let t;
            this.debouncedResize = (n = this.resize, function(...e) {
                let i = this;
                clearTimeout(t), t = setTimeout(()=>{
                    t = void 0, n.apply(i, e);
                }, s);
            }), this.wrapper instanceof Window ? window.addEventListener("resize", this.debouncedResize, !1) : (this.wrapperResizeObserver = new ResizeObserver(this.debouncedResize), this.wrapperResizeObserver.observe(this.wrapper)), this.contentResizeObserver = new ResizeObserver(this.debouncedResize), this.contentResizeObserver.observe(this.content);
        }
        this.resize();
    }
    width = 0;
    height = 0;
    scrollHeight = 0;
    scrollWidth = 0;
    debouncedResize;
    wrapperResizeObserver;
    contentResizeObserver;
    destroy() {
        this.wrapperResizeObserver?.disconnect(), this.contentResizeObserver?.disconnect(), this.wrapper === window && this.debouncedResize && window.removeEventListener("resize", this.debouncedResize, !1);
    }
    resize = ()=>{
        this.onWrapperResize(), this.onContentResize();
    };
    onWrapperResize = ()=>{
        this.wrapper instanceof Window ? (this.width = window.innerWidth, this.height = window.innerHeight) : (this.width = this.wrapper.clientWidth, this.height = this.wrapper.clientHeight);
    };
    onContentResize = ()=>{
        this.wrapper instanceof Window ? (this.scrollHeight = this.content.scrollHeight, this.scrollWidth = this.content.scrollWidth) : (this.scrollHeight = this.wrapper.scrollHeight, this.scrollWidth = this.wrapper.scrollWidth);
    };
    get limit() {
        return {
            x: this.scrollWidth - this.width,
            y: this.scrollHeight - this.height
        };
    }
}, s = class {
    events = {};
    emit(t, ...e) {
        let i = this.events[t] || [];
        for(let t = 0, s = i.length; t < s; t++)i[t]?.(...e);
    }
    on(t, e) {
        return this.events[t]?.push(e) || (this.events[t] = [
            e
        ]), ()=>{
            this.events[t] = this.events[t]?.filter((t)=>e !== t);
        };
    }
    off(t, e) {
        this.events[t] = this.events[t]?.filter((t)=>e !== t);
    }
    destroy() {
        this.events = {};
    }
}, n = 100 / 6, o = {
    passive: !1
}, r = class {
    constructor(t, e = {
        wheelMultiplier: 1,
        touchMultiplier: 1
    }){
        this.element = t, this.options = e, window.addEventListener("resize", this.onWindowResize, !1), this.onWindowResize(), this.element.addEventListener("wheel", this.onWheel, o), this.element.addEventListener("touchstart", this.onTouchStart, o), this.element.addEventListener("touchmove", this.onTouchMove, o), this.element.addEventListener("touchend", this.onTouchEnd, o);
    }
    touchStart = {
        x: 0,
        y: 0
    };
    lastDelta = {
        x: 0,
        y: 0
    };
    window = {
        width: 0,
        height: 0
    };
    emitter = new s;
    on(t, e) {
        return this.emitter.on(t, e);
    }
    destroy() {
        this.emitter.destroy(), window.removeEventListener("resize", this.onWindowResize, !1), this.element.removeEventListener("wheel", this.onWheel, o), this.element.removeEventListener("touchstart", this.onTouchStart, o), this.element.removeEventListener("touchmove", this.onTouchMove, o), this.element.removeEventListener("touchend", this.onTouchEnd, o);
    }
    onTouchStart = (t)=>{
        let { clientX: e, clientY: i } = t.targetTouches ? t.targetTouches[0] : t;
        this.touchStart.x = e, this.touchStart.y = i, this.lastDelta = {
            x: 0,
            y: 0
        }, this.emitter.emit("scroll", {
            deltaX: 0,
            deltaY: 0,
            event: t
        });
    };
    onTouchMove = (t)=>{
        let { clientX: e, clientY: i } = t.targetTouches ? t.targetTouches[0] : t, s = -(e - this.touchStart.x) * this.options.touchMultiplier, n = -(i - this.touchStart.y) * this.options.touchMultiplier;
        this.touchStart.x = e, this.touchStart.y = i, this.lastDelta = {
            x: s,
            y: n
        }, this.emitter.emit("scroll", {
            deltaX: s,
            deltaY: n,
            event: t
        });
    };
    onTouchEnd = (t)=>{
        this.emitter.emit("scroll", {
            deltaX: this.lastDelta.x,
            deltaY: this.lastDelta.y,
            event: t
        });
    };
    onWheel = (t)=>{
        let { deltaX: e, deltaY: i, deltaMode: s } = t, o = 1 === s ? n : 2 === s ? this.window.width : 1, r = 1 === s ? n : 2 === s ? this.window.height : 1;
        e *= o, i *= r, e *= this.options.wheelMultiplier, i *= this.options.wheelMultiplier, this.emitter.emit("scroll", {
            deltaX: e,
            deltaY: i,
            event: t
        });
    };
    onWindowResize = ()=>{
        this.window = {
            width: window.innerWidth,
            height: window.innerHeight
        };
    };
}, l = (t)=>Math.min(1, 1.001 - Math.pow(2, -10 * t)), a = class {
    _isScrolling = !1;
    _isStopped = !1;
    _isLocked = !1;
    _preventNextNativeScrollEvent = !1;
    _resetVelocityTimeout = null;
    _rafId = null;
    isTouching;
    time = 0;
    userData = {};
    lastVelocity = 0;
    velocity = 0;
    direction = 0;
    options;
    targetScroll;
    animatedScroll;
    animate = new e;
    emitter = new s;
    dimensions;
    virtualScroll;
    constructor({ wrapper: t = window, content: e = document.documentElement, eventsTarget: s = t, smoothWheel: n = !0, syncTouch: o = !1, syncTouchLerp: a = .075, touchInertiaExponent: c = 1.7, duration: h, easing: u, lerp: d = .1, infinite: p = !1, orientation: v = "vertical", gestureOrientation: m = "horizontal" === v ? "both" : "vertical", touchMultiplier: f = 1, wheelMultiplier: g = 1, autoResize: S = !0, prevent: w, virtualScroll: y, overscroll: b = !0, autoRaf: E = !1, anchors: I = !1, autoToggle: R = !1, allowNestedScroll: T = !1, __experimental__naiveDimensions: _ = !1, naiveDimensions: O = _, stopInertiaOnNavigate: z = !1 } = {}){
        window.lenisVersion = "1.3.17", t && t !== document.documentElement || (t = window), "number" == typeof h && "function" != typeof u ? u = l : "function" == typeof u && "number" != typeof h && (h = 1), this.options = {
            wrapper: t,
            content: e,
            eventsTarget: s,
            smoothWheel: n,
            syncTouch: o,
            syncTouchLerp: a,
            touchInertiaExponent: c,
            duration: h,
            easing: u,
            lerp: d,
            infinite: p,
            gestureOrientation: m,
            orientation: v,
            touchMultiplier: f,
            wheelMultiplier: g,
            autoResize: S,
            prevent: w,
            virtualScroll: y,
            overscroll: b,
            autoRaf: E,
            anchors: I,
            autoToggle: R,
            allowNestedScroll: T,
            naiveDimensions: O,
            stopInertiaOnNavigate: z
        }, this.dimensions = new i(t, e, {
            autoResize: S
        }), this.updateClassName(), this.targetScroll = this.animatedScroll = this.actualScroll, this.options.wrapper.addEventListener("scroll", this.onNativeScroll, !1), this.options.wrapper.addEventListener("scrollend", this.onScrollEnd, {
            capture: !0
        }), (this.options.anchors || this.options.stopInertiaOnNavigate) && this.options.wrapper.addEventListener("click", this.onClick, !1), this.options.wrapper.addEventListener("pointerdown", this.onPointerDown, !1), this.virtualScroll = new r(s, {
            touchMultiplier: f,
            wheelMultiplier: g
        }), this.virtualScroll.on("scroll", this.onVirtualScroll), this.options.autoToggle && (this.checkOverflow(), this.rootElement.addEventListener("transitionend", this.onTransitionEnd, {
            passive: !0
        })), this.options.autoRaf && (this._rafId = requestAnimationFrame(this.raf));
    }
    destroy() {
        this.emitter.destroy(), this.options.wrapper.removeEventListener("scroll", this.onNativeScroll, !1), this.options.wrapper.removeEventListener("scrollend", this.onScrollEnd, {
            capture: !0
        }), this.options.wrapper.removeEventListener("pointerdown", this.onPointerDown, !1), (this.options.anchors || this.options.stopInertiaOnNavigate) && this.options.wrapper.removeEventListener("click", this.onClick, !1), this.virtualScroll.destroy(), this.dimensions.destroy(), this.cleanUpClassName(), this._rafId && cancelAnimationFrame(this._rafId);
    }
    on(t, e) {
        return this.emitter.on(t, e);
    }
    off(t, e) {
        return this.emitter.off(t, e);
    }
    onScrollEnd = (t)=>{
        t instanceof CustomEvent || "smooth" !== this.isScrolling && !1 !== this.isScrolling || t.stopPropagation();
    };
    dispatchScrollendEvent = ()=>{
        this.options.wrapper.dispatchEvent(new CustomEvent("scrollend", {
            bubbles: this.options.wrapper === window,
            detail: {
                lenisScrollEnd: !0
            }
        }));
    };
    get overflow() {
        let t = this.isHorizontal ? "overflow-x" : "overflow-y";
        return getComputedStyle(this.rootElement)[t];
    }
    checkOverflow() {
        [
            "hidden",
            "clip"
        ].includes(this.overflow) ? this.internalStop() : this.internalStart();
    }
    onTransitionEnd = (t)=>{
        t.propertyName.includes("overflow") && this.checkOverflow();
    };
    setScroll(t) {
        this.isHorizontal ? this.options.wrapper.scrollTo({
            left: t,
            behavior: "instant"
        }) : this.options.wrapper.scrollTo({
            top: t,
            behavior: "instant"
        });
    }
    onClick = (t)=>{
        let e = t.composedPath().filter((t)=>t instanceof HTMLAnchorElement && t.getAttribute("href"));
        if (this.options.anchors) {
            let t = e.find((t)=>t.getAttribute("href")?.includes("#"));
            if (t) {
                let e = t.getAttribute("href");
                if (e) {
                    let t = "object" == typeof this.options.anchors && this.options.anchors ? this.options.anchors : void 0, i = `#${e.split("#")[1]}`;
                    this.scrollTo(i, t);
                }
            }
        }
        this.options.stopInertiaOnNavigate && e.find((t)=>t.host === window.location.host) && this.reset();
    };
    onPointerDown = (t)=>{
        1 === t.button && this.reset();
    };
    onVirtualScroll = (t)=>{
        if ("function" == typeof this.options.virtualScroll && !1 === this.options.virtualScroll(t)) return;
        let { deltaX: e, deltaY: i, event: s } = t;
        if (this.emitter.emit("virtual-scroll", {
            deltaX: e,
            deltaY: i,
            event: s
        }), s.ctrlKey || s.lenisStopPropagation) return;
        let n = s.type.includes("touch"), o = s.type.includes("wheel");
        this.isTouching = "touchstart" === s.type || "touchmove" === s.type;
        let r = 0 === e && 0 === i;
        if (this.options.syncTouch && n && "touchstart" === s.type && r && !this.isStopped && !this.isLocked) return void this.reset();
        let l = "vertical" === this.options.gestureOrientation && 0 === i || "horizontal" === this.options.gestureOrientation && 0 === e;
        if (r || l) return;
        let a = s.composedPath();
        a = a.slice(0, a.indexOf(this.rootElement));
        let c = this.options.prevent;
        if (a.find((t)=>t instanceof HTMLElement && ("function" == typeof c && c?.(t) || t.hasAttribute?.("data-lenis-prevent") || n && t.hasAttribute?.("data-lenis-prevent-touch") || o && t.hasAttribute?.("data-lenis-prevent-wheel") || this.options.allowNestedScroll && this.checkNestedScroll(t, {
                deltaX: e,
                deltaY: i
            })))) return;
        if (this.isStopped || this.isLocked) {
            s.cancelable && s.preventDefault();
            return;
        }
        if (!(this.options.syncTouch && n || this.options.smoothWheel && o)) {
            this.isScrolling = "native", this.animate.stop(), s.lenisStopPropagation = !0;
            return;
        }
        let h = i;
        "both" === this.options.gestureOrientation ? h = Math.abs(i) > Math.abs(e) ? i : e : "horizontal" === this.options.gestureOrientation && (h = e), (!this.options.overscroll || this.options.infinite || this.options.wrapper !== window && this.limit > 0 && (this.animatedScroll > 0 && this.animatedScroll < this.limit || 0 === this.animatedScroll && i > 0 || this.animatedScroll === this.limit && i < 0)) && (s.lenisStopPropagation = !0), s.cancelable && s.preventDefault();
        let u = n && this.options.syncTouch, d = n && "touchend" === s.type;
        d && (h = Math.sign(this.velocity) * Math.pow(Math.abs(this.velocity), this.options.touchInertiaExponent)), this.scrollTo(this.targetScroll + h, {
            programmatic: !1,
            ...u ? {
                lerp: d ? this.options.syncTouchLerp : 1
            } : {
                lerp: this.options.lerp,
                duration: this.options.duration,
                easing: this.options.easing
            }
        });
    };
    resize() {
        this.dimensions.resize(), this.animatedScroll = this.targetScroll = this.actualScroll, this.emit();
    }
    emit() {
        this.emitter.emit("scroll", this);
    }
    onNativeScroll = ()=>{
        if (null !== this._resetVelocityTimeout && (clearTimeout(this._resetVelocityTimeout), this._resetVelocityTimeout = null), this._preventNextNativeScrollEvent) {
            this._preventNextNativeScrollEvent = !1;
            return;
        }
        if (!1 === this.isScrolling || "native" === this.isScrolling) {
            let t = this.animatedScroll;
            this.animatedScroll = this.targetScroll = this.actualScroll, this.lastVelocity = this.velocity, this.velocity = this.animatedScroll - t, this.direction = Math.sign(this.animatedScroll - t), this.isStopped || (this.isScrolling = "native"), this.emit(), 0 !== this.velocity && (this._resetVelocityTimeout = setTimeout(()=>{
                this.lastVelocity = this.velocity, this.velocity = 0, this.isScrolling = !1, this.emit();
            }, 400));
        }
    };
    reset() {
        this.isLocked = !1, this.isScrolling = !1, this.animatedScroll = this.targetScroll = this.actualScroll, this.lastVelocity = this.velocity = 0, this.animate.stop();
    }
    start() {
        if (this.isStopped) {
            if (this.options.autoToggle) return void this.rootElement.style.removeProperty("overflow");
            this.internalStart();
        }
    }
    internalStart() {
        this.isStopped && (this.reset(), this.isStopped = !1, this.emit());
    }
    stop() {
        if (!this.isStopped) {
            if (this.options.autoToggle) return void this.rootElement.style.setProperty("overflow", "clip");
            this.internalStop();
        }
    }
    internalStop() {
        this.isStopped || (this.reset(), this.isStopped = !0, this.emit());
    }
    raf = (t)=>{
        let e = t - (this.time || t);
        this.time = t, this.animate.advance(.001 * e), this.options.autoRaf && (this._rafId = requestAnimationFrame(this.raf));
    };
    scrollTo(e, { offset: i = 0, immediate: s = !1, lock: n = !1, programmatic: o = !0, lerp: r = o ? this.options.lerp : void 0, duration: a = o ? this.options.duration : void 0, easing: c = o ? this.options.easing : void 0, onStart: h, onComplete: u, force: d = !1, userData: p } = {}) {
        if (!this.isStopped && !this.isLocked || d) {
            if ("string" == typeof e && [
                "top",
                "left",
                "start",
                "#"
            ].includes(e)) e = 0;
            else if ("string" == typeof e && [
                "bottom",
                "right",
                "end"
            ].includes(e)) e = this.limit;
            else {
                let t;
                if ("string" == typeof e ? (t = document.querySelector(e)) || ("#top" === e ? e = 0 : console.warn("Lenis: Target not found", e)) : e instanceof HTMLElement && e?.nodeType && (t = e), t) {
                    if (this.options.wrapper !== window) {
                        let t = this.rootElement.getBoundingClientRect();
                        i -= this.isHorizontal ? t.left : t.top;
                    }
                    let s = t.getBoundingClientRect();
                    e = (this.isHorizontal ? s.left : s.top) + this.animatedScroll;
                }
            }
            if ("number" == typeof e) {
                if (e += i, e = Math.round(e), this.options.infinite) {
                    if (o) {
                        this.targetScroll = this.animatedScroll = this.scroll;
                        let t = e - this.animatedScroll;
                        t > this.limit / 2 ? e -= this.limit : t < -this.limit / 2 && (e += this.limit);
                    }
                } else e = t(0, e, this.limit);
                if (e === this.targetScroll) {
                    h?.(this), u?.(this);
                    return;
                }
                if (this.userData = p ?? {}, s) {
                    this.animatedScroll = this.targetScroll = e, this.setScroll(this.scroll), this.reset(), this.preventNextNativeScrollEvent(), this.emit(), u?.(this), this.userData = {}, requestAnimationFrame(()=>{
                        this.dispatchScrollendEvent();
                    });
                    return;
                }
                o || (this.targetScroll = e), "number" == typeof a && "function" != typeof c ? c = l : "function" == typeof c && "number" != typeof a && (a = 1), this.animate.fromTo(this.animatedScroll, e, {
                    duration: a,
                    easing: c,
                    lerp: r,
                    onStart: ()=>{
                        n && (this.isLocked = !0), this.isScrolling = "smooth", h?.(this);
                    },
                    onUpdate: (t, e)=>{
                        this.isScrolling = "smooth", this.lastVelocity = this.velocity, this.velocity = t - this.animatedScroll, this.direction = Math.sign(this.velocity), this.animatedScroll = t, this.setScroll(this.scroll), o && (this.targetScroll = t), e || this.emit(), e && (this.reset(), this.emit(), u?.(this), this.userData = {}, requestAnimationFrame(()=>{
                            this.dispatchScrollendEvent();
                        }), this.preventNextNativeScrollEvent());
                    }
                });
            }
        }
    }
    preventNextNativeScrollEvent() {
        this._preventNextNativeScrollEvent = !0, requestAnimationFrame(()=>{
            this._preventNextNativeScrollEvent = !1;
        });
    }
    checkNestedScroll(t, { deltaX: e, deltaY: i }) {
        let s, n, o, r, l, a, c, h, u, d, p, v, m, f, g = Date.now(), S = t._lenis ??= {}, w = this.options.gestureOrientation;
        if (g - (S.time ?? 0) > 2e3) {
            S.time = Date.now();
            let e = window.getComputedStyle(t);
            S.computedStyle = e;
            let i = e.overflowX, u = e.overflowY;
            if (s = [
                "auto",
                "overlay",
                "scroll"
            ].includes(i), n = [
                "auto",
                "overlay",
                "scroll"
            ].includes(u), S.hasOverflowX = s, S.hasOverflowY = n, !s && !n || "vertical" === w && !n || "horizontal" === w && !s) return !1;
            l = t.scrollWidth, a = t.scrollHeight, c = t.clientWidth, h = t.clientHeight, o = l > c, r = a > h, S.isScrollableX = o, S.isScrollableY = r, S.scrollWidth = l, S.scrollHeight = a, S.clientWidth = c, S.clientHeight = h;
        } else o = S.isScrollableX, r = S.isScrollableY, s = S.hasOverflowX, n = S.hasOverflowY, l = S.scrollWidth, a = S.scrollHeight, c = S.clientWidth, h = S.clientHeight;
        if (!s && !n || !o && !r || "vertical" === w && (!n || !r) || "horizontal" === w && (!s || !o) || ("horizontal" === w ? u = "x" : "vertical" === w ? u = "y" : (0 !== e && s && o && (u = "x"), 0 !== i && n && r && (u = "y")), !u)) return !1;
        if ("x" === u) d = t.scrollLeft, p = l - c, v = e, m = s, f = o;
        else {
            if ("y" !== u) return !1;
            d = t.scrollTop, p = a - h, v = i, m = n, f = r;
        }
        return (v > 0 ? d < p : d > 0) && m && f;
    }
    get rootElement() {
        return this.options.wrapper === window ? document.documentElement : this.options.wrapper;
    }
    get limit() {
        return this.options.naiveDimensions ? this.isHorizontal ? this.rootElement.scrollWidth - this.rootElement.clientWidth : this.rootElement.scrollHeight - this.rootElement.clientHeight : this.dimensions.limit[this.isHorizontal ? "x" : "y"];
    }
    get isHorizontal() {
        return "horizontal" === this.options.orientation;
    }
    get actualScroll() {
        let t = this.options.wrapper;
        return this.isHorizontal ? t.scrollX ?? t.scrollLeft : t.scrollY ?? t.scrollTop;
    }
    get scroll() {
        var t;
        return this.options.infinite ? (this.animatedScroll % (t = this.limit) + t) % t : this.animatedScroll;
    }
    get progress() {
        return 0 === this.limit ? 1 : this.scroll / this.limit;
    }
    get isScrolling() {
        return this._isScrolling;
    }
    set isScrolling(t) {
        this._isScrolling !== t && (this._isScrolling = t, this.updateClassName());
    }
    get isStopped() {
        return this._isStopped;
    }
    set isStopped(t) {
        this._isStopped !== t && (this._isStopped = t, this.updateClassName());
    }
    get isLocked() {
        return this._isLocked;
    }
    set isLocked(t) {
        this._isLocked !== t && (this._isLocked = t, this.updateClassName());
    }
    get isSmooth() {
        return "smooth" === this.isScrolling;
    }
    get className() {
        let t = "lenis";
        return this.options.autoToggle && (t += " lenis-autoToggle"), this.isStopped && (t += " lenis-stopped"), this.isLocked && (t += " lenis-locked"), this.isScrolling && (t += " lenis-scrolling"), "smooth" === this.isScrolling && (t += " lenis-smooth"), t;
    }
    updateClassName() {
        this.cleanUpClassName(), this.rootElement.className = `${this.rootElement.className} ${this.className}`.trim();
    }
    cleanUpClassName() {
        this.rootElement.className = this.rootElement.className.replace(/lenis(-\w+)?/g, "").trim();
    }
};
function c(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for(var i = 0, s = Array(e); i < e; i++)s[i] = t[i];
    return s;
}
function h(t, e) {
    var i = "u" > typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
    if (i) return (i = i.call(t)).next.bind(i);
    if (Array.isArray(t) || (i = function(t) {
        if (t) {
            if ("string" == typeof t) return c(t, void 0);
            var e = ({}).toString.call(t).slice(8, -1);
            return "Object" === e && t.constructor && (e = t.constructor.name), "Map" === e || "Set" === e ? Array.from(t) : "Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? c(t, void 0) : void 0;
        }
    }(t)) || e && t && "number" == typeof t.length) {
        i && (t = i);
        var s = 0;
        return function() {
            return s >= t.length ? {
                done: !0
            } : {
                done: !1,
                value: t[s++]
            };
        };
    }
    throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function u() {
    return (u = Object.assign ? Object.assign.bind() : function(t) {
        for(var e = 1; e < arguments.length; e++){
            var i = arguments[e];
            for(var s in i)({}).hasOwnProperty.call(i, s) && (t[s] = i[s]);
        }
        return t;
    }).apply(null, arguments);
}
var d = function() {
    function t(t) {
        var e = t.scrollElements, i = t.rootMargin, s = t.root, n = t.IORaf;
        this.scrollElements = void 0, this.rootMargin = void 0, this.root = void 0, this.IORaf = void 0, this.observer = void 0, this.scrollElements = e, this.rootMargin = void 0 === i ? "-1px -1px -1px -1px" : i, this.root = void 0 === s ? null : s, this.IORaf = n, this._init();
    }
    var e = t.prototype;
    return e._init = function() {
        var t = this;
        this.observer = new IntersectionObserver(function(e) {
            e.forEach(function(e) {
                var i = t.scrollElements.find(function(t) {
                    return t.$el === e.target;
                });
                e.isIntersecting ? (i && (i.isAlreadyIntersected = !0), t._setInview(e)) : i && i.isAlreadyIntersected && t._setOutOfView(e);
            });
        }, {
            root: this.root,
            rootMargin: this.rootMargin
        });
        for(var e, i = h(this.scrollElements); !(e = i()).done;)this.observe(e.value.$el);
    }, e.destroy = function() {
        this.observer.disconnect();
    }, e.observe = function(t) {
        t && this.observer.observe(t);
    }, e.unobserve = function(t) {
        t && this.observer.unobserve(t);
    }, e._setInview = function(t) {
        var e = this.scrollElements.find(function(e) {
            return e.$el === t.target;
        });
        this.IORaf && (null == e || e.setInteractivityOn()), this.IORaf || null == e || e.setInview();
    }, e._setOutOfView = function(t) {
        var e = this.scrollElements.find(function(e) {
            return e.$el === t.target;
        });
        this.IORaf && (null == e || e.setInteractivityOff()), this.IORaf || null == e || e.setOutOfView(), null != e && e.attributes.scrollRepeat || this.IORaf || this.unobserve(t.target);
    }, t;
}();
function p(t, e) {
    return t.reduce(function(t, i) {
        return Math.abs(i - e) < Math.abs(t - e) ? i : t;
    });
}
var v = "--progress", m = function() {
    function t(t) {
        var e, i, s, n, o, r = this, l = t.$el, a = t.id, c = t.subscribeElementUpdateFn, h = t.unsubscribeElementUpdateFn, u = t.needRaf, d = t.scrollOrientation, p = t.lenisInstance;
        this.$el = void 0, this.id = void 0, this.needRaf = void 0, this.attributes = void 0, this.scrollOrientation = void 0, this.isAlreadyIntersected = void 0, this.intersection = void 0, this.metrics = void 0, this.currentScroll = void 0, this.translateValue = void 0, this.progress = void 0, this.lastProgress = void 0, this.isInview = void 0, this.isInteractive = void 0, this.isInFold = void 0, this.isFirstResize = void 0, this.subscribeElementUpdateFn = void 0, this.unsubscribeElementUpdateFn = void 0, this.lenisInstance = void 0, this.getWindowSize = void 0, this.getMetricsStart = void 0, this.getMetricsSize = void 0, this.startPositionHandlers = {
            start: function(t, e, i) {
                return t - e + i;
            },
            middle: function(t, e, i, s) {
                return t - e + i + .5 * s;
            },
            end: function(t, e, i, s) {
                return t - e + i + s;
            },
            fold: function() {
                return 0;
            }
        }, this.endPositionHandlers = {
            start: function(t, e) {
                return t - e;
            },
            middle: function(t, e, i) {
                return t - e + .5 * i;
            },
            end: function(t, e, i) {
                return t - e + i;
            }
        }, this.$el = l, this.id = a, this.needRaf = u, this.scrollOrientation = d, this.lenisInstance = p, this.subscribeElementUpdateFn = c, this.unsubscribeElementUpdateFn = h, this.attributes = {
            scrollClass: null != (e = this.$el.dataset.scrollClass) ? e : "is-inview",
            scrollOffset: null != (i = this.$el.dataset.scrollOffset) ? i : "0,0",
            scrollPosition: null != (s = this.$el.dataset.scrollPosition) ? s : "start,end",
            scrollCssProgress: void 0 !== this.$el.dataset.scrollCssProgress,
            scrollEventProgress: null != (n = this.$el.dataset.scrollEventProgress) ? n : null,
            scrollSpeed: void 0 !== this.$el.dataset.scrollSpeed ? parseFloat(this.$el.dataset.scrollSpeed) : null,
            scrollRepeat: void 0 !== this.$el.dataset.scrollRepeat,
            scrollCall: null != (o = this.$el.dataset.scrollCall) ? o : null,
            scrollIgnoreFold: void 0 !== this.$el.dataset.scrollIgnoreFold,
            scrollEnableTouchSpeed: void 0 !== this.$el.dataset.scrollEnableTouchSpeed
        }, this.intersection = {
            start: 0,
            end: 0
        }, this.metrics = {
            offsetStart: 0,
            offsetEnd: 0,
            bcr: {}
        }, this.currentScroll = this.lenisInstance.scroll, this.translateValue = 0, this.progress = 0, this.lastProgress = null, this.isInview = !1, this.isInteractive = !1, this.isAlreadyIntersected = !1, this.isInFold = !1, this.isFirstResize = !0, this.getWindowSize = "vertical" === this.scrollOrientation ? function() {
            return r.lenisInstance.dimensions.height;
        } : function() {
            return r.lenisInstance.dimensions.width;
        }, this.getMetricsStart = "vertical" === this.scrollOrientation ? function(t) {
            return t.top;
        } : function(t) {
            return t.left;
        }, this.getMetricsSize = "vertical" === this.scrollOrientation ? function(t) {
            return t.height;
        } : function(t) {
            return t.width;
        }, this._init();
    }
    var e = t.prototype;
    return e._init = function() {
        this.needRaf && this._resize();
    }, e.onResize = function(t) {
        this.currentScroll = t.currentScroll, this._resize();
    }, e.onRender = function(t) {
        var e = t.currentScroll, i = t.smooth, s = this.getWindowSize();
        if (this.currentScroll = e, this._computeProgress(), this.attributes.scrollSpeed && !isNaN(this.attributes.scrollSpeed)) {
            if (this.attributes.scrollEnableTouchSpeed || i) {
                if (this.isInFold) {
                    var n = Math.max(0, this.progress);
                    this.translateValue = -(n * s * this.attributes.scrollSpeed * 1);
                } else {
                    var o = -1 + ((this.progress - 0) / 1 * 2 || 0);
                    this.translateValue = -(o * s * this.attributes.scrollSpeed * 1);
                }
                this.$el.style.transform = "vertical" === this.scrollOrientation ? "translate3d(0, " + this.translateValue + "px, 0)" : "translate3d(" + this.translateValue + "px, 0, 0)";
            } else this.translateValue && (this.$el.style.transform = "translate3d(0, 0, 0)"), this.translateValue = 0;
        }
    }, e.setInview = function() {
        if (!this.isInview) {
            this.isInview = !0, this.$el.classList.add(this.attributes.scrollClass);
            var t = this._getScrollCallFrom();
            this.attributes.scrollCall && this._dispatchCall("enter", t);
        }
    }, e.setOutOfView = function() {
        if (this.isInview && this.attributes.scrollRepeat) {
            this.isInview = !1, this.$el.classList.remove(this.attributes.scrollClass);
            var t = this._getScrollCallFrom();
            this.attributes.scrollCall && this._dispatchCall("leave", t);
        }
    }, e.setInteractivityOn = function() {
        this.isInteractive || (this.isInteractive = !0, this.subscribeElementUpdateFn(this));
    }, e.setInteractivityOff = function() {
        this.isInteractive && (this.isInteractive = !1, this.unsubscribeElementUpdateFn(this), null !== this.lastProgress && this._computeProgress(p([
            0,
            1
        ], this.lastProgress)));
    }, e._resize = function() {
        this.metrics.bcr = this.$el.getBoundingClientRect(), this._computeMetrics(), this._computeIntersection(), this.isFirstResize && (this.isFirstResize = !1, this.isInFold && this.setInview());
    }, e._computeMetrics = function() {
        var t = this.getWindowSize(), e = this.getMetricsStart(this.metrics.bcr), i = this.getMetricsSize(this.metrics.bcr);
        this.metrics.offsetStart = this.currentScroll + e - this.translateValue, this.metrics.offsetEnd = this.metrics.offsetStart + i, this.isInFold = this.metrics.offsetStart < t && !this.attributes.scrollIgnoreFold;
    }, e._computeIntersection = function() {
        var t, e, i, s, n, o, r, l, a = this.getWindowSize(), c = this.getMetricsSize(this.metrics.bcr), h = this.attributes.scrollOffset.split(","), u = null != (t = null == (e = h[0]) ? void 0 : e.trim()) ? t : "0", d = null != (i = null == (s = h[1]) ? void 0 : s.trim()) ? i : "0", p = this.attributes.scrollPosition.split(","), v = null != (n = null == (o = p[0]) ? void 0 : o.trim()) ? n : "start", m = null != (r = null == (l = p[1]) ? void 0 : l.trim()) ? r : "end", f = u.includes("%") ? a * parseInt(u.replace("%", "").trim()) * .01 : parseInt(u), g = d.includes("%") ? a * parseInt(d.replace("%", "").trim()) * .01 : parseInt(d);
        this.isInFold && (v = "fold");
        var S = this.startPositionHandlers[v];
        this.intersection.start = S ? S(this.metrics.offsetStart, a, f, c) : this.metrics.offsetStart - a + f;
        var w = this.endPositionHandlers[m];
        if (this.intersection.end = w ? w(this.metrics.offsetStart, g, c) : this.metrics.offsetStart - g + c, this.intersection.end <= this.intersection.start) switch(m){
            case "start":
            default:
                this.intersection.end = this.intersection.start + 1;
                break;
            case "middle":
                this.intersection.end = this.intersection.start + .5 * c;
                break;
            case "end":
                this.intersection.end = this.intersection.start + c;
        }
    }, e._computeProgress = function(t) {
        var e, i, s, n = null != t ? t : (e = this.intersection.start, i = this.intersection.end, (s = 0 + ((this.currentScroll - e) / (i - e) * 1 || 0)) < 0) ? 0 : s > 1 ? 1 : s;
        this.progress = n, n !== this.lastProgress && (this.lastProgress = n, this.attributes.scrollCssProgress && this._setCssProgress(n), this.attributes.scrollEventProgress && this._setCustomEventProgress(n), n > 0 && n < 1 && this.setInview(), 0 === n && this.setOutOfView(), 1 === n && this.setOutOfView());
    }, e._setCssProgress = function(t) {
        void 0 === t && (t = 0), this.$el.style.setProperty(v, t.toString());
    }, e._setCustomEventProgress = function(t) {
        void 0 === t && (t = 0);
        var e = this.attributes.scrollEventProgress;
        if (e) {
            var i = new CustomEvent(e, {
                detail: {
                    target: this.$el,
                    progress: t
                }
            });
            window.dispatchEvent(i);
        }
    }, e._getScrollCallFrom = function() {
        var t = p([
            this.intersection.start,
            this.intersection.end
        ], this.currentScroll);
        return this.intersection.start === t ? "start" : "end";
    }, e.destroy = function() {
        this.attributes.scrollCssProgress && this.$el.style.removeProperty(v), this.attributes.scrollSpeed && this.$el.style.removeProperty("transform"), this.isInview && this.attributes.scrollClass && this.$el.classList.remove(this.attributes.scrollClass);
    }, e._dispatchCall = function(t, e) {
        var i = this.attributes.scrollCall;
        if (i) {
            var s = new CustomEvent(i, {
                detail: {
                    target: this.$el,
                    way: t,
                    from: e
                }
            });
            window.dispatchEvent(s);
        }
    }, t;
}(), f = [
    "scrollOffset",
    "scrollPosition",
    "scrollCssProgress",
    "scrollEventProgress",
    "scrollSpeed"
], g = function() {
    function t(t) {
        var e = t.$el, i = t.triggerRootMargin, s = t.rafRootMargin, n = t.scrollOrientation, o = t.lenisInstance;
        this.$scrollContainer = void 0, this.triggerRootMargin = void 0, this.rafRootMargin = void 0, this.scrollElements = void 0, this.triggeredScrollElements = void 0, this.RAFScrollElements = void 0, this.scrollElementsToUpdate = void 0, this.IOTriggerInstance = void 0, this.IORafInstance = void 0, this.scrollOrientation = void 0, this.lenisInstance = void 0, e ? (this.$scrollContainer = e, this.lenisInstance = o, this.scrollOrientation = n, this.triggerRootMargin = null != i ? i : "-1px -1px -1px -1px", this.rafRootMargin = null != s ? s : "100% 100% 100% 100%", this.scrollElements = [], this.triggeredScrollElements = [], this.RAFScrollElements = [], this.scrollElementsToUpdate = [], this._init()) : console.error("Please provide a DOM Element as scrollContainer");
    }
    var e = t.prototype;
    return e._init = function() {
        var t = this.$scrollContainer.querySelectorAll("[data-scroll]"), e = this.toElementArray(t);
        this._subscribeScrollElements(e);
        var i = this.lenisInstance.options.wrapper === window ? null : this.lenisInstance.options.wrapper;
        this.IOTriggerInstance = new d({
            scrollElements: [].concat(this.triggeredScrollElements),
            root: i,
            rootMargin: this.triggerRootMargin,
            IORaf: !1
        }), this.IORafInstance = new d({
            scrollElements: [].concat(this.RAFScrollElements),
            root: i,
            rootMargin: this.rafRootMargin,
            IORaf: !0
        });
    }, e.destroy = function() {
        this.IOTriggerInstance.destroy(), this.IORafInstance.destroy(), this._unsubscribeAllScrollElements();
    }, e.onResize = function(t) {
        for(var e, i = t.currentScroll, s = h(this.RAFScrollElements); !(e = s()).done;)e.value.onResize({
            currentScroll: i
        });
    }, e.onRender = function(t) {
        for(var e, i = t.currentScroll, s = t.smooth, n = h(this.scrollElementsToUpdate); !(e = n()).done;)e.value.onRender({
            currentScroll: i,
            smooth: s
        });
    }, e.removeScrollElements = function(t) {
        var e = this, i = t.querySelectorAll("[data-scroll]");
        if (i.length) {
            for(var s = new Set(Array.from(i)), n = 0; n < this.triggeredScrollElements.length; n++){
                var o = this.triggeredScrollElements[n];
                s.has(o.$el) && (this.IOTriggerInstance.unobserve(o.$el), this.triggeredScrollElements.splice(n, 1));
            }
            for(var r = 0; r < this.RAFScrollElements.length; r++){
                var l = this.RAFScrollElements[r];
                s.has(l.$el) && (this.IORafInstance.unobserve(l.$el), this.RAFScrollElements.splice(r, 1));
            }
            i.forEach(function(t) {
                var i = e.scrollElementsToUpdate.find(function(e) {
                    return e.$el === t;
                }), s = e.scrollElements.find(function(e) {
                    return e.$el === t;
                });
                i && e._unsubscribeElementUpdate(i), s && (e.scrollElements = e.scrollElements.filter(function(t) {
                    return t.id != s.id;
                }));
            });
        }
    }, e.addScrollElements = function(t) {
        var e = t.querySelectorAll("[data-scroll]"), i = [];
        this.scrollElements.forEach(function(t) {
            i.push(t.id);
        });
        var s = Math.max.apply(Math, i.concat([
            0
        ])) + 1, n = this.toElementArray(e);
        this._subscribeScrollElements(n, s, !0);
    }, e._subscribeScrollElements = function(t, e, i) {
        void 0 === e && (e = 0), void 0 === i && (i = !1);
        for(var s = 0; s < t.length; s++){
            var n = t[s], o = this._checkRafNeeded(n), r = new m({
                $el: n,
                id: e + s,
                scrollOrientation: this.scrollOrientation,
                lenisInstance: this.lenisInstance,
                subscribeElementUpdateFn: this._subscribeElementUpdate.bind(this),
                unsubscribeElementUpdateFn: this._unsubscribeElementUpdate.bind(this),
                needRaf: o
            });
            this.scrollElements.push(r), o ? (this.RAFScrollElements.push(r), i && (this.IORafInstance.scrollElements.push(r), this.IORafInstance.observe(r.$el))) : (this.triggeredScrollElements.push(r), i && (this.IOTriggerInstance.scrollElements.push(r), this.IOTriggerInstance.observe(r.$el)));
        }
    }, e._unsubscribeAllScrollElements = function() {
        for(var t, e = h(this.scrollElements); !(t = e()).done;)t.value.destroy();
        this.scrollElements = [], this.RAFScrollElements = [], this.triggeredScrollElements = [], this.scrollElementsToUpdate = [];
    }, e._subscribeElementUpdate = function(t) {
        this.scrollElementsToUpdate.push(t);
    }, e._unsubscribeElementUpdate = function(t) {
        this.scrollElementsToUpdate = this.scrollElementsToUpdate.filter(function(e) {
            return e.id != t.id;
        });
    }, e.toElementArray = function(t) {
        return Array.from(t);
    }, e._checkRafNeeded = function(t) {
        var e = [].concat(f), i = function(t) {
            e = e.filter(function(e) {
                return e !== t;
            });
        };
        if (t.dataset.scrollOffset) {
            if ("0,0" !== t.dataset.scrollOffset.split(",").map(function(t) {
                return t.replace("%", "").trim();
            }).join(",")) return !0;
            i("scrollOffset");
        } else i("scrollOffset");
        if (t.dataset.scrollPosition) {
            if ("top,bottom" !== t.dataset.scrollPosition.trim()) return !0;
            i("scrollPosition");
        } else i("scrollPosition");
        if (t.dataset.scrollSpeed && !isNaN(parseFloat(t.dataset.scrollSpeed))) return !0;
        i("scrollSpeed");
        for(var s, n = h(e); !(s = n()).done;)if (s.value in t.dataset) return !0;
        return !1;
    }, t;
}(), S = function() {
    function t(t) {
        var e = void 0 === t ? {} : t, i = e.lenisOptions, s = e.triggerRootMargin, n = e.rafRootMargin, o = e.autoStart, r = e.scrollCallback, l = e.initCustomTicker, a = e.destroyCustomTicker;
        this.rafPlaying = void 0, this.lenisInstance = null, this.coreInstance = null, this.lenisOptions = void 0, this.triggerRootMargin = void 0, this.rafRootMargin = void 0, this.rafInstance = void 0, this.autoStart = void 0, this.isTouchDevice = void 0, this.initCustomTicker = void 0, this.destroyCustomTicker = void 0, this._onRenderBind = void 0, this._onResizeBind = void 0, this._onScrollToBind = void 0, this._originalOnContentResize = void 0, this._originalOnWrapperResize = void 0, window.locomotiveScrollVersion = "5.0.0", Object.assign(this, {
            lenisOptions: void 0 === i ? {} : i,
            triggerRootMargin: s,
            rafRootMargin: n,
            autoStart: void 0 === o || o,
            scrollCallback: void 0 === r ? function() {} : r,
            initCustomTicker: l,
            destroyCustomTicker: a
        }), this._onRenderBind = this._onRender.bind(this), this._onScrollToBind = this._onScrollTo.bind(this), this._onResizeBind = this._onResize.bind(this), this.rafPlaying = !1, this.isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0, this._init();
    }
    var e = t.prototype;
    return e._init = function() {
        var t = this;
        this.lenisInstance = new a(u({}, this.lenisOptions)), this.scrollCallback && this.lenisInstance.on("scroll", this.scrollCallback), document.documentElement.setAttribute("data-scroll-orientation", this.lenisInstance.options.orientation), requestAnimationFrame(function() {
            t.coreInstance = new g({
                $el: t.lenisInstance.rootElement,
                triggerRootMargin: t.triggerRootMargin,
                rafRootMargin: t.rafRootMargin,
                scrollOrientation: t.lenisInstance.options.orientation,
                lenisInstance: t.lenisInstance
            }), t._bindEvents(), t.initCustomTicker && !t.destroyCustomTicker ? console.warn("initCustomTicker callback is declared, but destroyCustomTicker is not. Please pay attention. It could cause trouble.") : !t.initCustomTicker && t.destroyCustomTicker && console.warn("destroyCustomTicker callback is declared, but initCustomTicker is not. Please pay attention. It could cause trouble."), t.autoStart && t.start();
        });
    }, e.destroy = function() {
        var t, e = this;
        this.stop(), this._unbindEvents(), null == (t = this.lenisInstance) || t.destroy(), requestAnimationFrame(function() {
            var t;
            null == (t = e.coreInstance) || t.destroy();
        });
    }, e._bindEvents = function() {
        var t = this;
        this._bindScrollToEvents(), this.lenisInstance && (this._originalOnContentResize = this.lenisInstance.dimensions.onContentResize.bind(this.lenisInstance.dimensions), this._originalOnWrapperResize = this.lenisInstance.dimensions.onWrapperResize.bind(this.lenisInstance.dimensions), this.lenisInstance.dimensions.onContentResize = function() {
            null == t._originalOnContentResize || t._originalOnContentResize(), t._onResizeBind();
        }, this.lenisInstance.dimensions.onWrapperResize = function() {
            null == t._originalOnWrapperResize || t._originalOnWrapperResize(), t._onResizeBind();
        });
    }, e._unbindEvents = function() {
        this._unbindScrollToEvents(), this.lenisInstance && (this._originalOnContentResize && (this.lenisInstance.dimensions.onContentResize = this._originalOnContentResize), this._originalOnWrapperResize && (this.lenisInstance.dimensions.onWrapperResize = this._originalOnWrapperResize));
    }, e._bindScrollToEvents = function(t) {
        var e, i = this, s = t || (null == (e = this.lenisInstance) ? void 0 : e.rootElement), n = null == s ? void 0 : s.querySelectorAll("[data-scroll-to]");
        (null == n ? void 0 : n.length) && n.forEach(function(t) {
            t.addEventListener("click", i._onScrollToBind, !1);
        });
    }, e._unbindScrollToEvents = function(t) {
        var e, i = this, s = t || (null == (e = this.lenisInstance) ? void 0 : e.rootElement), n = null == s ? void 0 : s.querySelectorAll("[data-scroll-to]");
        (null == n ? void 0 : n.length) && n.forEach(function(t) {
            t.removeEventListener("click", i._onScrollToBind, !1);
        });
    }, e._onResize = function() {
        var t, e, i;
        null == (t = this.coreInstance) || t.onResize({
            currentScroll: null != (e = null == (i = this.lenisInstance) ? void 0 : i.scroll) ? e : 0,
            smooth: !this.isTouchDevice
        });
    }, e._onRender = function() {
        var t, e, i, s;
        null == (t = this.lenisInstance) || t.raf(Date.now()), null == (e = this.coreInstance) || e.onRender({
            currentScroll: null != (i = null == (s = this.lenisInstance) ? void 0 : s.scroll) ? i : 0,
            smooth: !this.isTouchDevice
        });
    }, e._onScrollTo = function(t) {
        t.preventDefault();
        var e, i, s = null != (e = t.currentTarget) ? e : null;
        if (s) {
            var n = s.getAttribute("data-scroll-to-href") || s.getAttribute("href"), o = s.getAttribute("data-scroll-to-offset") || 0, r = s.getAttribute("data-scroll-to-duration") || (null == (i = this.lenisInstance) ? void 0 : i.options.duration);
            n && this.scrollTo(n, {
                offset: "string" == typeof o ? parseInt(o) : o,
                duration: "string" == typeof r ? parseInt(r) : r
            });
        }
    }, e.start = function() {
        var t;
        this.rafPlaying || (null == (t = this.lenisInstance) || t.start(), this.rafPlaying = !0, this.initCustomTicker ? this.initCustomTicker(this._onRenderBind) : this._raf());
    }, e.stop = function() {
        var t;
        this.rafPlaying && (null == (t = this.lenisInstance) || t.stop(), this.rafPlaying = !1, this.destroyCustomTicker ? this.destroyCustomTicker(this._onRenderBind) : this.rafInstance && cancelAnimationFrame(this.rafInstance));
    }, e.removeScrollElements = function(t) {
        var e;
        t ? (this._unbindScrollToEvents(t), null == (e = this.coreInstance) || e.removeScrollElements(t)) : console.error("Please provide a DOM Element as $oldContainer");
    }, e.addScrollElements = function(t) {
        var e, i = this;
        t ? (null == (e = this.coreInstance) || e.addScrollElements(t), requestAnimationFrame(function() {
            i._bindScrollToEvents(t);
        })) : console.error("Please provide a DOM Element as $newContainer");
    }, e.resize = function() {
        this._onResizeBind();
    }, e.scrollTo = function(t, e) {
        var i;
        null == (i = this.lenisInstance) || i.scrollTo(t, {
            offset: null == e ? void 0 : e.offset,
            lerp: null == e ? void 0 : e.lerp,
            duration: null == e ? void 0 : e.duration,
            immediate: null == e ? void 0 : e.immediate,
            lock: null == e ? void 0 : e.lock,
            force: null == e ? void 0 : e.force,
            easing: null == e ? void 0 : e.easing,
            onComplete: null == e ? void 0 : e.onComplete
        });
    }, e._raf = function() {
        var t = this;
        this._onRenderBind(), this.rafInstance = requestAnimationFrame(function() {
            return t._raf();
        });
    }, t;
}();
let w = document.querySelector("[data-scroll-container]");
w ? (new S({
    el: w,
    smooth: !0
}), console.log("Locomotive Scroll initialized")) : console.error("Missing [data-scroll-container] in HTML");
let y = document.querySelector(".cl"), b = document.querySelector(".one"), E = document.querySelector(".two"), I = document.querySelector(".three");
document.querySelector(".four"), document.querySelector(".five"), document.querySelector(".six"), document.querySelector(".seven"), document.querySelector(".eight"), document.querySelector(".nine"), document.querySelector(".ten"), document.querySelector(".info"), y.onclick = function() {
    document.querySelector(".progress-bar").style.opacity = 0, document.querySelector(".progress").style.opacity = 0, document.querySelector(".terminal").style.color = "white", document.querySelector(".cl").style.animation = 0, document.querySelector(".terminal").style.color = "white", document.querySelectorAll(".info").forEach((t)=>{
        t.style.opacity = 1;
    });
}, y.addEventListener("click", function() {
    b.textContent = "[This week find Giotto at:]", E.textContent = `Giotto Chill Room Installation
    [Party: Ether X Naff ]
    [Line-up: OK EG (Live) // Notte Infinita // Miette // Asha ]
    [Time: Saturday October 10th (10:00pm - 7:00am)]
    [+ ????? suprise opening b2b ;)]
     `, I.textContent = `Giotto Fabric Works
[Party:Flush]
[Line-up: Zi! (Live) // Fieldnote (Live) // Dj Spirit // Dj Hermano // Sam Blake // Aduunya ]
[Time: Sunday March 31s (9pm - ?)] 
[Happy birthday Reid :)))]
  `;
}); //# sourceMappingURL=digiflyer-live.d4276a55.js.map

},{}]},["afzPs","giKwA"], "giKwA", "parcelRequire453d", {})

//# sourceMappingURL=digiflyer-live.dc7f351e.js.map
