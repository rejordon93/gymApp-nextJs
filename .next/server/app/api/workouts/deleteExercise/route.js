"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/workouts/deleteExercise/route";
exports.ids = ["app/api/workouts/deleteExercise/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fworkouts%2FdeleteExercise%2Froute&page=%2Fapi%2Fworkouts%2FdeleteExercise%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fworkouts%2FdeleteExercise%2Froute.ts&appDir=C%3A%5CUsers%5CEjord%5COneDrive%5CDesktop%5CGymApp%5Cuniongym%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CEjord%5COneDrive%5CDesktop%5CGymApp%5Cuniongym&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fworkouts%2FdeleteExercise%2Froute&page=%2Fapi%2Fworkouts%2FdeleteExercise%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fworkouts%2FdeleteExercise%2Froute.ts&appDir=C%3A%5CUsers%5CEjord%5COneDrive%5CDesktop%5CGymApp%5Cuniongym%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CEjord%5COneDrive%5CDesktop%5CGymApp%5Cuniongym&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_Ejord_OneDrive_Desktop_GymApp_uniongym_src_app_api_workouts_deleteExercise_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/workouts/deleteExercise/route.ts */ \"(rsc)/./src/app/api/workouts/deleteExercise/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/workouts/deleteExercise/route\",\n        pathname: \"/api/workouts/deleteExercise\",\n        filename: \"route\",\n        bundlePath: \"app/api/workouts/deleteExercise/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\Ejord\\\\OneDrive\\\\Desktop\\\\GymApp\\\\uniongym\\\\src\\\\app\\\\api\\\\workouts\\\\deleteExercise\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_Ejord_OneDrive_Desktop_GymApp_uniongym_src_app_api_workouts_deleteExercise_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/workouts/deleteExercise/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZ3b3Jrb3V0cyUyRmRlbGV0ZUV4ZXJjaXNlJTJGcm91dGUmcGFnZT0lMkZhcGklMkZ3b3Jrb3V0cyUyRmRlbGV0ZUV4ZXJjaXNlJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGd29ya291dHMlMkZkZWxldGVFeGVyY2lzZSUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNFam9yZCU1Q09uZURyaXZlJTVDRGVza3RvcCU1Q0d5bUFwcCU1Q3VuaW9uZ3ltJTVDc3JjJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1DJTNBJTVDVXNlcnMlNUNFam9yZCU1Q09uZURyaXZlJTVDRGVza3RvcCU1Q0d5bUFwcCU1Q3VuaW9uZ3ltJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUN3RDtBQUNySTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlFQUFpRTtBQUN6RTtBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ3VIOztBQUV2SCIsInNvdXJjZXMiOlsid2VicGFjazovL3VuaW9uZ3ltLz84OTc3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXEVqb3JkXFxcXE9uZURyaXZlXFxcXERlc2t0b3BcXFxcR3ltQXBwXFxcXHVuaW9uZ3ltXFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXHdvcmtvdXRzXFxcXGRlbGV0ZUV4ZXJjaXNlXFxcXHJvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS93b3Jrb3V0cy9kZWxldGVFeGVyY2lzZS9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL3dvcmtvdXRzL2RlbGV0ZUV4ZXJjaXNlXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS93b3Jrb3V0cy9kZWxldGVFeGVyY2lzZS9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkM6XFxcXFVzZXJzXFxcXEVqb3JkXFxcXE9uZURyaXZlXFxcXERlc2t0b3BcXFxcR3ltQXBwXFxcXHVuaW9uZ3ltXFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXHdvcmtvdXRzXFxcXGRlbGV0ZUV4ZXJjaXNlXFxcXHJvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS93b3Jrb3V0cy9kZWxldGVFeGVyY2lzZS9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fworkouts%2FdeleteExercise%2Froute&page=%2Fapi%2Fworkouts%2FdeleteExercise%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fworkouts%2FdeleteExercise%2Froute.ts&appDir=C%3A%5CUsers%5CEjord%5COneDrive%5CDesktop%5CGymApp%5Cuniongym%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CEjord%5COneDrive%5CDesktop%5CGymApp%5Cuniongym&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/workouts/deleteExercise/route.ts":
/*!******************************************************!*\
  !*** ./src/app/api/workouts/deleteExercise/route.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DELETE: () => (/* binding */ DELETE)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _database_prisma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/database/prisma */ \"(rsc)/./src/database/prisma.ts\");\n/* harmony import */ var _helpers_getDataFromToken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/helpers/getDataFromToken */ \"(rsc)/./src/helpers/getDataFromToken.ts\");\n\n\n\nasync function DELETE(req) {\n    try {\n        const body = await req.json();\n        // update to  pull is inside body\n        const { id } = body;\n        // Validate input\n        if (!id) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Exercise ID is required\"\n            }, {\n                status: 400\n            });\n        }\n        // get user token\n        const userId = (0,_helpers_getDataFromToken__WEBPACK_IMPORTED_MODULE_2__.getDataFromToken)(req);\n        // Validate user token\n        if (!userId) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Invalid token or no user found\"\n            }, {\n                status: 401\n            });\n        }\n        // Delete the exercise where id\n        const deletedExercise = await _database_prisma__WEBPACK_IMPORTED_MODULE_1__[\"default\"].favoritedExercise.delete({\n            where: {\n                id: id\n            }\n        });\n        // Return success response\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: `Exercise with ID ${id} successfully removed`,\n            deletedExercise\n        }, {\n            status: 200\n        });\n    } catch (error) {\n        console.error(\"Error processing the request:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"An internal server error occurred. Please try again later.\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS93b3Jrb3V0cy9kZWxldGVFeGVyY2lzZS9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXdEO0FBQ2pCO0FBQ3VCO0FBTXZELGVBQWVHLE9BQU9DLEdBQWdCO0lBQzNDLElBQUk7UUFDRixNQUFNQyxPQUFPLE1BQU1ELElBQUlFLElBQUk7UUFDM0IsaUNBQWlDO1FBQ2pDLE1BQU0sRUFBRUMsRUFBRSxFQUFFLEdBQVdGO1FBRXZCLGlCQUFpQjtRQUNqQixJQUFJLENBQUNFLElBQUk7WUFDUCxPQUFPUCxxREFBWUEsQ0FBQ00sSUFBSSxDQUN0QjtnQkFBRUUsT0FBTztZQUEwQixHQUNuQztnQkFBRUMsUUFBUTtZQUFJO1FBRWxCO1FBRUEsaUJBQWlCO1FBQ2pCLE1BQU1DLFNBQVNSLDJFQUFnQkEsQ0FBQ0U7UUFFaEMsc0JBQXNCO1FBQ3RCLElBQUksQ0FBQ00sUUFBUTtZQUNYLE9BQU9WLHFEQUFZQSxDQUFDTSxJQUFJLENBQ3RCO2dCQUFFRSxPQUFPO1lBQWlDLEdBQzFDO2dCQUFFQyxRQUFRO1lBQUk7UUFFbEI7UUFFQSwrQkFBK0I7UUFDL0IsTUFBTUUsa0JBQWtCLE1BQU1WLHdEQUFNQSxDQUFDVyxpQkFBaUIsQ0FBQ0MsTUFBTSxDQUFDO1lBQzVEQyxPQUFPO2dCQUFFUCxJQUFJQTtZQUFHO1FBQ2xCO1FBRUEsMEJBQTBCO1FBQzFCLE9BQU9QLHFEQUFZQSxDQUFDTSxJQUFJLENBQ3RCO1lBQ0VTLFNBQVMsQ0FBQyxpQkFBaUIsRUFBRVIsR0FBRyxxQkFBcUIsQ0FBQztZQUV0REk7UUFDRixHQUNBO1lBQUVGLFFBQVE7UUFBSTtJQUVsQixFQUFFLE9BQU9ELE9BQU87UUFDZFEsUUFBUVIsS0FBSyxDQUFDLGlDQUFpQ0E7UUFDL0MsT0FBT1IscURBQVlBLENBQUNNLElBQUksQ0FDdEI7WUFBRUUsT0FBTztRQUE2RCxHQUN0RTtZQUFFQyxRQUFRO1FBQUk7SUFFbEI7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL3VuaW9uZ3ltLy4vc3JjL2FwcC9hcGkvd29ya291dHMvZGVsZXRlRXhlcmNpc2Uvcm91dGUudHM/MmI2MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVxdWVzdCwgTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XG5pbXBvcnQgcHJpc21hIGZyb20gXCJAL2RhdGFiYXNlL3ByaXNtYVwiO1xuaW1wb3J0IHsgZ2V0RGF0YUZyb21Ub2tlbiB9IGZyb20gXCJAL2hlbHBlcnMvZ2V0RGF0YUZyb21Ub2tlblwiO1xuXG5pbnRlcmZhY2UgaWRUeXBlIHtcbiAgaWQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIERFTEVURShyZXE6IE5leHRSZXF1ZXN0KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgYm9keSA9IGF3YWl0IHJlcS5qc29uKCk7XG4gICAgLy8gdXBkYXRlIHRvICBwdWxsIGlzIGluc2lkZSBib2R5XG4gICAgY29uc3QgeyBpZCB9OiBpZFR5cGUgPSBib2R5O1xuXG4gICAgLy8gVmFsaWRhdGUgaW5wdXRcbiAgICBpZiAoIWlkKSB7XG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXG4gICAgICAgIHsgZXJyb3I6IFwiRXhlcmNpc2UgSUQgaXMgcmVxdWlyZWRcIiB9LFxuICAgICAgICB7IHN0YXR1czogNDAwIH1cbiAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gZ2V0IHVzZXIgdG9rZW5cbiAgICBjb25zdCB1c2VySWQgPSBnZXREYXRhRnJvbVRva2VuKHJlcSk7XG5cbiAgICAvLyBWYWxpZGF0ZSB1c2VyIHRva2VuXG4gICAgaWYgKCF1c2VySWQpIHtcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcbiAgICAgICAgeyBlcnJvcjogXCJJbnZhbGlkIHRva2VuIG9yIG5vIHVzZXIgZm91bmRcIiB9LFxuICAgICAgICB7IHN0YXR1czogNDAxIH1cbiAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gRGVsZXRlIHRoZSBleGVyY2lzZSB3aGVyZSBpZFxuICAgIGNvbnN0IGRlbGV0ZWRFeGVyY2lzZSA9IGF3YWl0IHByaXNtYS5mYXZvcml0ZWRFeGVyY2lzZS5kZWxldGUoe1xuICAgICAgd2hlcmU6IHsgaWQ6IGlkIH0sXG4gICAgfSk7XG5cbiAgICAvLyBSZXR1cm4gc3VjY2VzcyByZXNwb25zZVxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcbiAgICAgIHtcbiAgICAgICAgbWVzc2FnZTogYEV4ZXJjaXNlIHdpdGggSUQgJHtpZH0gc3VjY2Vzc2Z1bGx5IHJlbW92ZWRgLFxuXG4gICAgICAgIGRlbGV0ZWRFeGVyY2lzZSxcbiAgICAgIH0sXG4gICAgICB7IHN0YXR1czogMjAwIH1cbiAgICApO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBwcm9jZXNzaW5nIHRoZSByZXF1ZXN0OlwiLCBlcnJvcik7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxuICAgICAgeyBlcnJvcjogXCJBbiBpbnRlcm5hbCBzZXJ2ZXIgZXJyb3Igb2NjdXJyZWQuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuXCIgfSxcbiAgICAgIHsgc3RhdHVzOiA1MDAgfVxuICAgICk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJwcmlzbWEiLCJnZXREYXRhRnJvbVRva2VuIiwiREVMRVRFIiwicmVxIiwiYm9keSIsImpzb24iLCJpZCIsImVycm9yIiwic3RhdHVzIiwidXNlcklkIiwiZGVsZXRlZEV4ZXJjaXNlIiwiZmF2b3JpdGVkRXhlcmNpc2UiLCJkZWxldGUiLCJ3aGVyZSIsIm1lc3NhZ2UiLCJjb25zb2xlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/workouts/deleteExercise/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/database/prisma.ts":
/*!********************************!*\
  !*** ./src/database/prisma.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n// helpers/prisma.ts\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvZGF0YWJhc2UvcHJpc21hLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLG9CQUFvQjtBQUUwQjtBQUU5QyxNQUFNQyxTQUFTLElBQUlELHdEQUFZQTtBQUUvQixpRUFBZUMsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3VuaW9uZ3ltLy4vc3JjL2RhdGFiYXNlL3ByaXNtYS50cz9kNmNlIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGhlbHBlcnMvcHJpc21hLnRzXG5cbmltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuXG5jb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XG5cbmV4cG9ydCBkZWZhdWx0IHByaXNtYTtcbiJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJwcmlzbWEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/database/prisma.ts\n");

/***/ }),

/***/ "(rsc)/./src/helpers/getDataFromToken.ts":
/*!*****************************************!*\
  !*** ./src/helpers/getDataFromToken.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getDataFromToken: () => (/* binding */ getDataFromToken)\n/* harmony export */ });\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ \"(rsc)/./node_modules/jsonwebtoken/index.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);\n\nconst getDataFromToken = (request)=>{\n    try {\n        // Retrieve the token from cookies\n        const token = request.cookies.get(\"token\")?.value || \"\";\n        // Decode the token\n        const decodedToken = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().verify(token, process.env.TOKEN_SECRET);\n        return decodedToken.id;\n    } catch (error) {\n        // Handle errors\n        console.error(\"Token verification failed:\", error.message);\n        throw new Error(\"Invalid token\");\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvaGVscGVycy9nZXREYXRhRnJvbVRva2VuLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUMrQjtBQU14QixNQUFNQyxtQkFBbUIsQ0FBQ0M7SUFDL0IsSUFBSTtRQUNGLGtDQUFrQztRQUNsQyxNQUFNQyxRQUFRRCxRQUFRRSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxVQUFVQyxTQUFTO1FBRXJELG1CQUFtQjtRQUNuQixNQUFNQyxlQUFlUCwwREFBVSxDQUM3QkcsT0FDQU0sUUFBUUMsR0FBRyxDQUFDQyxZQUFZO1FBRzFCLE9BQU9KLGFBQWFLLEVBQUU7SUFDeEIsRUFBRSxPQUFPQyxPQUFZO1FBQ25CLGdCQUFnQjtRQUNoQkMsUUFBUUQsS0FBSyxDQUFDLDhCQUE4QkEsTUFBTUUsT0FBTztRQUN6RCxNQUFNLElBQUlDLE1BQU07SUFDbEI7QUFDRixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdW5pb25neW0vLi9zcmMvaGVscGVycy9nZXREYXRhRnJvbVRva2VuLnRzP2UwNTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlcXVlc3QgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcbmltcG9ydCBqd3QgZnJvbSBcImpzb253ZWJ0b2tlblwiO1xuXG50eXBlIHRva2VuUHJvcHMgPSB7XG4gIGlkOiBudW1iZXI7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0RGF0YUZyb21Ub2tlbiA9IChyZXF1ZXN0OiBOZXh0UmVxdWVzdCkgPT4ge1xuICB0cnkge1xuICAgIC8vIFJldHJpZXZlIHRoZSB0b2tlbiBmcm9tIGNvb2tpZXNcbiAgICBjb25zdCB0b2tlbiA9IHJlcXVlc3QuY29va2llcy5nZXQoXCJ0b2tlblwiKT8udmFsdWUgfHwgXCJcIjtcblxuICAgIC8vIERlY29kZSB0aGUgdG9rZW5cbiAgICBjb25zdCBkZWNvZGVkVG9rZW4gPSBqd3QudmVyaWZ5KFxuICAgICAgdG9rZW4sXG4gICAgICBwcm9jZXNzLmVudi5UT0tFTl9TRUNSRVQhXG4gICAgKSBhcyB0b2tlblByb3BzO1xuXG4gICAgcmV0dXJuIGRlY29kZWRUb2tlbi5pZDtcbiAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgIC8vIEhhbmRsZSBlcnJvcnNcbiAgICBjb25zb2xlLmVycm9yKFwiVG9rZW4gdmVyaWZpY2F0aW9uIGZhaWxlZDpcIiwgZXJyb3IubWVzc2FnZSk7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCB0b2tlblwiKTtcbiAgfVxufTtcbiJdLCJuYW1lcyI6WyJqd3QiLCJnZXREYXRhRnJvbVRva2VuIiwicmVxdWVzdCIsInRva2VuIiwiY29va2llcyIsImdldCIsInZhbHVlIiwiZGVjb2RlZFRva2VuIiwidmVyaWZ5IiwicHJvY2VzcyIsImVudiIsIlRPS0VOX1NFQ1JFVCIsImlkIiwiZXJyb3IiLCJjb25zb2xlIiwibWVzc2FnZSIsIkVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/helpers/getDataFromToken.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/semver","vendor-chunks/next","vendor-chunks/jsonwebtoken","vendor-chunks/jws","vendor-chunks/ecdsa-sig-formatter","vendor-chunks/safe-buffer","vendor-chunks/ms","vendor-chunks/lodash.once","vendor-chunks/lodash.isstring","vendor-chunks/lodash.isplainobject","vendor-chunks/lodash.isnumber","vendor-chunks/lodash.isinteger","vendor-chunks/lodash.isboolean","vendor-chunks/lodash.includes","vendor-chunks/jwa","vendor-chunks/buffer-equal-constant-time"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fworkouts%2FdeleteExercise%2Froute&page=%2Fapi%2Fworkouts%2FdeleteExercise%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fworkouts%2FdeleteExercise%2Froute.ts&appDir=C%3A%5CUsers%5CEjord%5COneDrive%5CDesktop%5CGymApp%5Cuniongym%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CEjord%5COneDrive%5CDesktop%5CGymApp%5Cuniongym&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();