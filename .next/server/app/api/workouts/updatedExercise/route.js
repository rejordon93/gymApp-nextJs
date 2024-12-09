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
exports.id = "app/api/workouts/updatedExercise/route";
exports.ids = ["app/api/workouts/updatedExercise/route"];
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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fworkouts%2FupdatedExercise%2Froute&page=%2Fapi%2Fworkouts%2FupdatedExercise%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fworkouts%2FupdatedExercise%2Froute.ts&appDir=C%3A%5CUsers%5CEjord%5COneDrive%5CDesktop%5CGymApp%5Cuniongym%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CEjord%5COneDrive%5CDesktop%5CGymApp%5Cuniongym&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fworkouts%2FupdatedExercise%2Froute&page=%2Fapi%2Fworkouts%2FupdatedExercise%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fworkouts%2FupdatedExercise%2Froute.ts&appDir=C%3A%5CUsers%5CEjord%5COneDrive%5CDesktop%5CGymApp%5Cuniongym%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CEjord%5COneDrive%5CDesktop%5CGymApp%5Cuniongym&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_Ejord_OneDrive_Desktop_GymApp_uniongym_src_app_api_workouts_updatedExercise_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/workouts/updatedExercise/route.ts */ \"(rsc)/./src/app/api/workouts/updatedExercise/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/workouts/updatedExercise/route\",\n        pathname: \"/api/workouts/updatedExercise\",\n        filename: \"route\",\n        bundlePath: \"app/api/workouts/updatedExercise/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\Ejord\\\\OneDrive\\\\Desktop\\\\GymApp\\\\uniongym\\\\src\\\\app\\\\api\\\\workouts\\\\updatedExercise\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_Ejord_OneDrive_Desktop_GymApp_uniongym_src_app_api_workouts_updatedExercise_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/workouts/updatedExercise/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZ3b3Jrb3V0cyUyRnVwZGF0ZWRFeGVyY2lzZSUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGd29ya291dHMlMkZ1cGRhdGVkRXhlcmNpc2UlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZ3b3Jrb3V0cyUyRnVwZGF0ZWRFeGVyY2lzZSUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNFam9yZCU1Q09uZURyaXZlJTVDRGVza3RvcCU1Q0d5bUFwcCU1Q3VuaW9uZ3ltJTVDc3JjJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1DJTNBJTVDVXNlcnMlNUNFam9yZCU1Q09uZURyaXZlJTVDRGVza3RvcCU1Q0d5bUFwcCU1Q3VuaW9uZ3ltJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUN5RDtBQUN0STtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlFQUFpRTtBQUN6RTtBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ3VIOztBQUV2SCIsInNvdXJjZXMiOlsid2VicGFjazovL3VuaW9uZ3ltLz83YWVjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXEVqb3JkXFxcXE9uZURyaXZlXFxcXERlc2t0b3BcXFxcR3ltQXBwXFxcXHVuaW9uZ3ltXFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXHdvcmtvdXRzXFxcXHVwZGF0ZWRFeGVyY2lzZVxcXFxyb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvd29ya291dHMvdXBkYXRlZEV4ZXJjaXNlL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvd29ya291dHMvdXBkYXRlZEV4ZXJjaXNlXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS93b3Jrb3V0cy91cGRhdGVkRXhlcmNpc2Uvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFxVc2Vyc1xcXFxFam9yZFxcXFxPbmVEcml2ZVxcXFxEZXNrdG9wXFxcXEd5bUFwcFxcXFx1bmlvbmd5bVxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFx3b3Jrb3V0c1xcXFx1cGRhdGVkRXhlcmNpc2VcXFxccm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL3dvcmtvdXRzL3VwZGF0ZWRFeGVyY2lzZS9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fworkouts%2FupdatedExercise%2Froute&page=%2Fapi%2Fworkouts%2FupdatedExercise%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fworkouts%2FupdatedExercise%2Froute.ts&appDir=C%3A%5CUsers%5CEjord%5COneDrive%5CDesktop%5CGymApp%5Cuniongym%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CEjord%5COneDrive%5CDesktop%5CGymApp%5Cuniongym&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/workouts/updatedExercise/route.ts":
/*!*******************************************************!*\
  !*** ./src/app/api/workouts/updatedExercise/route.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PATCH: () => (/* binding */ PATCH)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _database_prisma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/database/prisma */ \"(rsc)/./src/database/prisma.ts\");\n/* harmony import */ var _helpers_getDataFromToken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/helpers/getDataFromToken */ \"(rsc)/./src/helpers/getDataFromToken.ts\");\n\n\n\nasync function PATCH(req) {\n    try {\n        const body = await req.json();\n        const { id, updateBody } = body;\n        if (!id || !updateBody) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                message: \"Exercise ID and update data are required\"\n            }, {\n                status: 401\n            });\n        }\n        const { name, equipment, gifUrl, instructions, secondaryMuscles, target } = updateBody;\n        const userId = (0,_helpers_getDataFromToken__WEBPACK_IMPORTED_MODULE_2__.getDataFromToken)(req);\n        if (!userId) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                message: \"No Token or invalid user\"\n            }, {\n                status: 401\n            });\n        }\n        const updateExercise = await _database_prisma__WEBPACK_IMPORTED_MODULE_1__[\"default\"].favoritedExercise.update({\n            where: {\n                id: id\n            },\n            data: {\n                name: name || \"\",\n                equipment: equipment || \"\",\n                gifUrl: gifUrl || \"\",\n                instructions: instructions || \"\",\n                secondaryMuscles: secondaryMuscles || \"\",\n                target: target || \"\"\n            }\n        });\n        console.log(updateExercise);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: \"Exercise updated successfully\",\n            updateExercise\n        });\n    } catch (error) {\n        console.error(\"Somthing want Wrong updateing\", error);\n    }\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        message: \"error\"\n    }, {\n        status: 401\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS93b3Jrb3V0cy91cGRhdGVkRXhlcmNpc2Uvcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUF3RDtBQUNqQjtBQUN1QjtBQUV2RCxlQUFlRyxNQUFNQyxHQUFnQjtJQUMxQyxJQUFJO1FBQ0YsTUFBTUMsT0FBTyxNQUFNRCxJQUFJRSxJQUFJO1FBQzNCLE1BQU0sRUFBRUMsRUFBRSxFQUFFQyxVQUFVLEVBQUUsR0FBR0g7UUFFM0IsSUFBSSxDQUFDRSxNQUFNLENBQUNDLFlBQVk7WUFDdEIsT0FBT1IscURBQVlBLENBQUNNLElBQUksQ0FDdEI7Z0JBQUVHLFNBQVM7WUFBMkMsR0FDdEQ7Z0JBQUVDLFFBQVE7WUFBSTtRQUVsQjtRQUVBLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLE1BQU0sRUFBRUMsWUFBWSxFQUFFQyxnQkFBZ0IsRUFBRUMsTUFBTSxFQUFFLEdBQ3ZFUjtRQUVGLE1BQU1TLFNBQVNmLDJFQUFnQkEsQ0FBQ0U7UUFFaEMsSUFBSSxDQUFDYSxRQUFRO1lBQ1gsT0FBT2pCLHFEQUFZQSxDQUFDTSxJQUFJLENBQ3RCO2dCQUFFRyxTQUFTO1lBQTJCLEdBQ3RDO2dCQUFFQyxRQUFRO1lBQUk7UUFFbEI7UUFFQSxNQUFNUSxpQkFBaUIsTUFBTWpCLHdEQUFNQSxDQUFDa0IsaUJBQWlCLENBQUNDLE1BQU0sQ0FBQztZQUMzREMsT0FBTztnQkFBRWQsSUFBSUE7WUFBRztZQUNoQmUsTUFBTTtnQkFDSlgsTUFBTUEsUUFBUTtnQkFDZEMsV0FBV0EsYUFBYTtnQkFDeEJDLFFBQVFBLFVBQVU7Z0JBQ2xCQyxjQUFjQSxnQkFBZ0I7Z0JBQzlCQyxrQkFBa0JBLG9CQUFvQjtnQkFDdENDLFFBQVFBLFVBQVU7WUFDcEI7UUFDRjtRQUNBTyxRQUFRQyxHQUFHLENBQUNOO1FBQ1osT0FBT2xCLHFEQUFZQSxDQUFDTSxJQUFJLENBQUM7WUFDdkJHLFNBQVM7WUFDVFM7UUFDRjtJQUNGLEVBQUUsT0FBT08sT0FBTztRQUNkRixRQUFRRSxLQUFLLENBQUMsaUNBQWlDQTtJQUNqRDtJQUNBLE9BQU96QixxREFBWUEsQ0FBQ00sSUFBSSxDQUN0QjtRQUNFRyxTQUFTO0lBQ1gsR0FDQTtRQUFFQyxRQUFRO0lBQUk7QUFFbEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91bmlvbmd5bS8uL3NyYy9hcHAvYXBpL3dvcmtvdXRzL3VwZGF0ZWRFeGVyY2lzZS9yb3V0ZS50cz81YWU5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXNwb25zZSwgTmV4dFJlcXVlc3QgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcbmltcG9ydCBwcmlzbWEgZnJvbSBcIkAvZGF0YWJhc2UvcHJpc21hXCI7XG5pbXBvcnQgeyBnZXREYXRhRnJvbVRva2VuIH0gZnJvbSBcIkAvaGVscGVycy9nZXREYXRhRnJvbVRva2VuXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQQVRDSChyZXE6IE5leHRSZXF1ZXN0KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgYm9keSA9IGF3YWl0IHJlcS5qc29uKCk7XG4gICAgY29uc3QgeyBpZCwgdXBkYXRlQm9keSB9ID0gYm9keTtcblxuICAgIGlmICghaWQgfHwgIXVwZGF0ZUJvZHkpIHtcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcbiAgICAgICAgeyBtZXNzYWdlOiBcIkV4ZXJjaXNlIElEIGFuZCB1cGRhdGUgZGF0YSBhcmUgcmVxdWlyZWRcIiB9LFxuICAgICAgICB7IHN0YXR1czogNDAxIH1cbiAgICAgICk7XG4gICAgfVxuXG4gICAgY29uc3QgeyBuYW1lLCBlcXVpcG1lbnQsIGdpZlVybCwgaW5zdHJ1Y3Rpb25zLCBzZWNvbmRhcnlNdXNjbGVzLCB0YXJnZXQgfSA9XG4gICAgICB1cGRhdGVCb2R5O1xuXG4gICAgY29uc3QgdXNlcklkID0gZ2V0RGF0YUZyb21Ub2tlbihyZXEpO1xuXG4gICAgaWYgKCF1c2VySWQpIHtcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcbiAgICAgICAgeyBtZXNzYWdlOiBcIk5vIFRva2VuIG9yIGludmFsaWQgdXNlclwiIH0sXG4gICAgICAgIHsgc3RhdHVzOiA0MDEgfVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBjb25zdCB1cGRhdGVFeGVyY2lzZSA9IGF3YWl0IHByaXNtYS5mYXZvcml0ZWRFeGVyY2lzZS51cGRhdGUoe1xuICAgICAgd2hlcmU6IHsgaWQ6IGlkIH0sXG4gICAgICBkYXRhOiB7XG4gICAgICAgIG5hbWU6IG5hbWUgfHwgXCJcIixcbiAgICAgICAgZXF1aXBtZW50OiBlcXVpcG1lbnQgfHwgXCJcIixcbiAgICAgICAgZ2lmVXJsOiBnaWZVcmwgfHwgXCJcIixcbiAgICAgICAgaW5zdHJ1Y3Rpb25zOiBpbnN0cnVjdGlvbnMgfHwgXCJcIixcbiAgICAgICAgc2Vjb25kYXJ5TXVzY2xlczogc2Vjb25kYXJ5TXVzY2xlcyB8fCBcIlwiLFxuICAgICAgICB0YXJnZXQ6IHRhcmdldCB8fCBcIlwiLFxuICAgICAgfSxcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyh1cGRhdGVFeGVyY2lzZSk7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHtcbiAgICAgIG1lc3NhZ2U6IFwiRXhlcmNpc2UgdXBkYXRlZCBzdWNjZXNzZnVsbHlcIixcbiAgICAgIHVwZGF0ZUV4ZXJjaXNlLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJTb210aGluZyB3YW50IFdyb25nIHVwZGF0ZWluZ1wiLCBlcnJvcik7XG4gIH1cbiAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxuICAgIHtcbiAgICAgIG1lc3NhZ2U6IFwiZXJyb3JcIixcbiAgICB9LFxuICAgIHsgc3RhdHVzOiA0MDEgfVxuICApO1xufVxuIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsInByaXNtYSIsImdldERhdGFGcm9tVG9rZW4iLCJQQVRDSCIsInJlcSIsImJvZHkiLCJqc29uIiwiaWQiLCJ1cGRhdGVCb2R5IiwibWVzc2FnZSIsInN0YXR1cyIsIm5hbWUiLCJlcXVpcG1lbnQiLCJnaWZVcmwiLCJpbnN0cnVjdGlvbnMiLCJzZWNvbmRhcnlNdXNjbGVzIiwidGFyZ2V0IiwidXNlcklkIiwidXBkYXRlRXhlcmNpc2UiLCJmYXZvcml0ZWRFeGVyY2lzZSIsInVwZGF0ZSIsIndoZXJlIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/workouts/updatedExercise/route.ts\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/ms","vendor-chunks/semver","vendor-chunks/jsonwebtoken","vendor-chunks/lodash.includes","vendor-chunks/jws","vendor-chunks/lodash.once","vendor-chunks/jwa","vendor-chunks/lodash.isinteger","vendor-chunks/ecdsa-sig-formatter","vendor-chunks/lodash.isplainobject","vendor-chunks/lodash.isstring","vendor-chunks/lodash.isnumber","vendor-chunks/lodash.isboolean","vendor-chunks/safe-buffer","vendor-chunks/buffer-equal-constant-time"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fworkouts%2FupdatedExercise%2Froute&page=%2Fapi%2Fworkouts%2FupdatedExercise%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fworkouts%2FupdatedExercise%2Froute.ts&appDir=C%3A%5CUsers%5CEjord%5COneDrive%5CDesktop%5CGymApp%5Cuniongym%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CEjord%5COneDrive%5CDesktop%5CGymApp%5Cuniongym&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();