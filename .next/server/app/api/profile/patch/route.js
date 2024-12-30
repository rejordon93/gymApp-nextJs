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
exports.id = "app/api/profile/patch/route";
exports.ids = ["app/api/profile/patch/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@prisma/client");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fprofile%2Fpatch%2Froute&page=%2Fapi%2Fprofile%2Fpatch%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fprofile%2Fpatch%2Froute.ts&appDir=C%3A%5CUsers%5CEjord%5COneDrive%5CDesktop%5CGymApp%5Cuniongym%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CEjord%5COneDrive%5CDesktop%5CGymApp%5Cuniongym&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fprofile%2Fpatch%2Froute&page=%2Fapi%2Fprofile%2Fpatch%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fprofile%2Fpatch%2Froute.ts&appDir=C%3A%5CUsers%5CEjord%5COneDrive%5CDesktop%5CGymApp%5Cuniongym%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CEjord%5COneDrive%5CDesktop%5CGymApp%5Cuniongym&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_Ejord_OneDrive_Desktop_GymApp_uniongym_src_app_api_profile_patch_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/profile/patch/route.ts */ \"(rsc)/./src/app/api/profile/patch/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/profile/patch/route\",\n        pathname: \"/api/profile/patch\",\n        filename: \"route\",\n        bundlePath: \"app/api/profile/patch/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\Ejord\\\\OneDrive\\\\Desktop\\\\GymApp\\\\uniongym\\\\src\\\\app\\\\api\\\\profile\\\\patch\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_Ejord_OneDrive_Desktop_GymApp_uniongym_src_app_api_profile_patch_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZwcm9maWxlJTJGcGF0Y2glMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRnByb2ZpbGUlMkZwYXRjaCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRnByb2ZpbGUlMkZwYXRjaCUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNFam9yZCU1Q09uZURyaXZlJTVDRGVza3RvcCU1Q0d5bUFwcCU1Q3VuaW9uZ3ltJTVDc3JjJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1DJTNBJTVDVXNlcnMlNUNFam9yZCU1Q09uZURyaXZlJTVDRGVza3RvcCU1Q0d5bUFwcCU1Q3VuaW9uZ3ltJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErRjtBQUN2QztBQUNxQjtBQUM4QztBQUMzSDtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFzRDtBQUM5RDtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMwRjs7QUFFMUYiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcRWpvcmRcXFxcT25lRHJpdmVcXFxcRGVza3RvcFxcXFxHeW1BcHBcXFxcdW5pb25neW1cXFxcc3JjXFxcXGFwcFxcXFxhcGlcXFxccHJvZmlsZVxcXFxwYXRjaFxcXFxyb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvcHJvZmlsZS9wYXRjaC9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL3Byb2ZpbGUvcGF0Y2hcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL3Byb2ZpbGUvcGF0Y2gvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFxVc2Vyc1xcXFxFam9yZFxcXFxPbmVEcml2ZVxcXFxEZXNrdG9wXFxcXEd5bUFwcFxcXFx1bmlvbmd5bVxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxwcm9maWxlXFxcXHBhdGNoXFxcXHJvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgd29ya0FzeW5jU3RvcmFnZSxcbiAgICAgICAgd29ya1VuaXRBc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fprofile%2Fpatch%2Froute&page=%2Fapi%2Fprofile%2Fpatch%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fprofile%2Fpatch%2Froute.ts&appDir=C%3A%5CUsers%5CEjord%5COneDrive%5CDesktop%5CGymApp%5Cuniongym%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CEjord%5COneDrive%5CDesktop%5CGymApp%5Cuniongym&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./src/app/api/profile/patch/route.ts":
/*!********************************************!*\
  !*** ./src/app/api/profile/patch/route.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PATCH: () => (/* binding */ PATCH)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _database_prisma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/database/prisma */ \"(rsc)/./src/database/prisma.ts\");\n/* harmony import */ var _helpers_getDataFromToken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/helpers/getDataFromToken */ \"(rsc)/./src/helpers/getDataFromToken.ts\");\n\n\n\nasync function PATCH(req) {\n    try {\n        const body = await req.json();\n        const { firstName, lastName, homeClub, memberSince, currentStatus, cellPhone, city, state, zipCode } = body;\n        // Validate required fields\n        if (!firstName || !lastName) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Missing required fields: firstName or lastName\"\n            }, {\n                status: 400\n            });\n        }\n        // Validate token and user ID\n        const userId = await (0,_helpers_getDataFromToken__WEBPACK_IMPORTED_MODULE_2__.getDataFromToken)(req);\n        if (!userId) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"No user logged in\"\n            }, {\n                status: 401\n            });\n        }\n        // Check if a profile already exists for this user\n        const existingProfile = await _database_prisma__WEBPACK_IMPORTED_MODULE_1__[\"default\"].profilePlan.findUnique({\n            where: {\n                userId\n            }\n        });\n        let profileResponse;\n        if (existingProfile) {\n            // Update existing profile\n            profileResponse = await _database_prisma__WEBPACK_IMPORTED_MODULE_1__[\"default\"].profilePlan.update({\n                where: {\n                    userId\n                },\n                data: {\n                    firstName,\n                    lastName,\n                    homeClub,\n                    memberSince,\n                    currentStatus,\n                    cellPhone,\n                    city,\n                    state,\n                    zipCode\n                }\n            });\n        } else {\n            // No profile exists, create a new profile\n            profileResponse = await _database_prisma__WEBPACK_IMPORTED_MODULE_1__[\"default\"].profilePlan.create({\n                data: {\n                    userId,\n                    firstName,\n                    lastName,\n                    homeClub,\n                    memberSince,\n                    currentStatus,\n                    cellPhone,\n                    city,\n                    state,\n                    zipCode\n                }\n            });\n        }\n        console.log(profileResponse);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(profileResponse, {\n            status: 200\n        });\n    } catch (error) {\n        console.error(\"Error updating profile:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Internal server error\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9wcm9maWxlL3BhdGNoL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBd0Q7QUFDakI7QUFDdUI7QUFjdkQsZUFBZUcsTUFBTUMsR0FBZ0I7SUFDMUMsSUFBSTtRQUNGLE1BQU1DLE9BQW9CLE1BQU1ELElBQUlFLElBQUk7UUFDeEMsTUFBTSxFQUNKQyxTQUFTLEVBQ1RDLFFBQVEsRUFDUkMsUUFBUSxFQUNSQyxXQUFXLEVBQ1hDLGFBQWEsRUFDYkMsU0FBUyxFQUNUQyxJQUFJLEVBQ0pDLEtBQUssRUFDTEMsT0FBTyxFQUNSLEdBQUdWO1FBRUosMkJBQTJCO1FBQzNCLElBQUksQ0FBQ0UsYUFBYSxDQUFDQyxVQUFVO1lBQzNCLE9BQU9SLHFEQUFZQSxDQUFDTSxJQUFJLENBQ3RCO2dCQUFFVSxPQUFPO1lBQWlELEdBQzFEO2dCQUFFQyxRQUFRO1lBQUk7UUFFbEI7UUFFQSw2QkFBNkI7UUFDN0IsTUFBTUMsU0FBUyxNQUFNaEIsMkVBQWdCQSxDQUFDRTtRQUN0QyxJQUFJLENBQUNjLFFBQVE7WUFDWCxPQUFPbEIscURBQVlBLENBQUNNLElBQUksQ0FBQztnQkFBRVUsT0FBTztZQUFvQixHQUFHO2dCQUFFQyxRQUFRO1lBQUk7UUFDekU7UUFFQSxrREFBa0Q7UUFDbEQsTUFBTUUsa0JBQWtCLE1BQU1sQix3REFBTUEsQ0FBQ21CLFdBQVcsQ0FBQ0MsVUFBVSxDQUFDO1lBQzFEQyxPQUFPO2dCQUFFSjtZQUFPO1FBQ2xCO1FBRUEsSUFBSUs7UUFDSixJQUFJSixpQkFBaUI7WUFDbkIsMEJBQTBCO1lBQzFCSSxrQkFBa0IsTUFBTXRCLHdEQUFNQSxDQUFDbUIsV0FBVyxDQUFDSSxNQUFNLENBQUM7Z0JBQ2hERixPQUFPO29CQUFFSjtnQkFBTztnQkFDaEJPLE1BQU07b0JBQ0psQjtvQkFDQUM7b0JBQ0FDO29CQUNBQztvQkFDQUM7b0JBQ0FDO29CQUNBQztvQkFDQUM7b0JBQ0FDO2dCQUNGO1lBQ0Y7UUFDRixPQUFPO1lBQ0wsMENBQTBDO1lBQzFDUSxrQkFBa0IsTUFBTXRCLHdEQUFNQSxDQUFDbUIsV0FBVyxDQUFDTSxNQUFNLENBQUM7Z0JBQ2hERCxNQUFNO29CQUNKUDtvQkFDQVg7b0JBQ0FDO29CQUNBQztvQkFDQUM7b0JBQ0FDO29CQUNBQztvQkFDQUM7b0JBQ0FDO29CQUNBQztnQkFDRjtZQUNGO1FBQ0Y7UUFFQVksUUFBUUMsR0FBRyxDQUFDTDtRQUVaLE9BQU92QixxREFBWUEsQ0FBQ00sSUFBSSxDQUFDaUIsaUJBQWlCO1lBQUVOLFFBQVE7UUFBSTtJQUMxRCxFQUFFLE9BQU9ELE9BQU87UUFDZFcsUUFBUVgsS0FBSyxDQUFDLDJCQUEyQkE7UUFDekMsT0FBT2hCLHFEQUFZQSxDQUFDTSxJQUFJLENBQ3RCO1lBQUVVLE9BQU87UUFBd0IsR0FDakM7WUFBRUMsUUFBUTtRQUFJO0lBRWxCO0FBQ0YiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRWpvcmRcXE9uZURyaXZlXFxEZXNrdG9wXFxHeW1BcHBcXHVuaW9uZ3ltXFxzcmNcXGFwcFxcYXBpXFxwcm9maWxlXFxwYXRjaFxccm91dGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlcXVlc3QsIE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xyXG5pbXBvcnQgcHJpc21hIGZyb20gXCJAL2RhdGFiYXNlL3ByaXNtYVwiO1xyXG5pbXBvcnQgeyBnZXREYXRhRnJvbVRva2VuIH0gZnJvbSBcIkAvaGVscGVycy9nZXREYXRhRnJvbVRva2VuXCI7XHJcblxyXG5pbnRlcmZhY2UgUHJvZmlsZVR5cGUge1xyXG4gIGZpcnN0TmFtZTogc3RyaW5nO1xyXG4gIGxhc3ROYW1lOiBzdHJpbmc7XHJcbiAgaG9tZUNsdWI/OiBzdHJpbmc7XHJcbiAgbWVtYmVyU2luY2U/OiBzdHJpbmc7XHJcbiAgY3VycmVudFN0YXR1cz86IHN0cmluZztcclxuICBjZWxsUGhvbmU/OiBzdHJpbmc7XHJcbiAgY2l0eT86IHN0cmluZztcclxuICBzdGF0ZTogc3RyaW5nO1xyXG4gIHppcENvZGU6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBBVENIKHJlcTogTmV4dFJlcXVlc3QpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgYm9keTogUHJvZmlsZVR5cGUgPSBhd2FpdCByZXEuanNvbigpO1xyXG4gICAgY29uc3Qge1xyXG4gICAgICBmaXJzdE5hbWUsXHJcbiAgICAgIGxhc3ROYW1lLFxyXG4gICAgICBob21lQ2x1YixcclxuICAgICAgbWVtYmVyU2luY2UsXHJcbiAgICAgIGN1cnJlbnRTdGF0dXMsXHJcbiAgICAgIGNlbGxQaG9uZSxcclxuICAgICAgY2l0eSxcclxuICAgICAgc3RhdGUsXHJcbiAgICAgIHppcENvZGUsXHJcbiAgICB9ID0gYm9keTtcclxuXHJcbiAgICAvLyBWYWxpZGF0ZSByZXF1aXJlZCBmaWVsZHNcclxuICAgIGlmICghZmlyc3ROYW1lIHx8ICFsYXN0TmFtZSkge1xyXG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXHJcbiAgICAgICAgeyBlcnJvcjogXCJNaXNzaW5nIHJlcXVpcmVkIGZpZWxkczogZmlyc3ROYW1lIG9yIGxhc3ROYW1lXCIgfSxcclxuICAgICAgICB7IHN0YXR1czogNDAwIH1cclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBWYWxpZGF0ZSB0b2tlbiBhbmQgdXNlciBJRFxyXG4gICAgY29uc3QgdXNlcklkID0gYXdhaXQgZ2V0RGF0YUZyb21Ub2tlbihyZXEpO1xyXG4gICAgaWYgKCF1c2VySWQpIHtcclxuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6IFwiTm8gdXNlciBsb2dnZWQgaW5cIiB9LCB7IHN0YXR1czogNDAxIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENoZWNrIGlmIGEgcHJvZmlsZSBhbHJlYWR5IGV4aXN0cyBmb3IgdGhpcyB1c2VyXHJcbiAgICBjb25zdCBleGlzdGluZ1Byb2ZpbGUgPSBhd2FpdCBwcmlzbWEucHJvZmlsZVBsYW4uZmluZFVuaXF1ZSh7XHJcbiAgICAgIHdoZXJlOiB7IHVzZXJJZCB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgbGV0IHByb2ZpbGVSZXNwb25zZTtcclxuICAgIGlmIChleGlzdGluZ1Byb2ZpbGUpIHtcclxuICAgICAgLy8gVXBkYXRlIGV4aXN0aW5nIHByb2ZpbGVcclxuICAgICAgcHJvZmlsZVJlc3BvbnNlID0gYXdhaXQgcHJpc21hLnByb2ZpbGVQbGFuLnVwZGF0ZSh7XHJcbiAgICAgICAgd2hlcmU6IHsgdXNlcklkIH0sXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgZmlyc3ROYW1lLFxyXG4gICAgICAgICAgbGFzdE5hbWUsXHJcbiAgICAgICAgICBob21lQ2x1YixcclxuICAgICAgICAgIG1lbWJlclNpbmNlLFxyXG4gICAgICAgICAgY3VycmVudFN0YXR1cyxcclxuICAgICAgICAgIGNlbGxQaG9uZSxcclxuICAgICAgICAgIGNpdHksXHJcbiAgICAgICAgICBzdGF0ZSxcclxuICAgICAgICAgIHppcENvZGUsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBObyBwcm9maWxlIGV4aXN0cywgY3JlYXRlIGEgbmV3IHByb2ZpbGVcclxuICAgICAgcHJvZmlsZVJlc3BvbnNlID0gYXdhaXQgcHJpc21hLnByb2ZpbGVQbGFuLmNyZWF0ZSh7XHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgdXNlcklkLFxyXG4gICAgICAgICAgZmlyc3ROYW1lLFxyXG4gICAgICAgICAgbGFzdE5hbWUsXHJcbiAgICAgICAgICBob21lQ2x1YixcclxuICAgICAgICAgIG1lbWJlclNpbmNlLFxyXG4gICAgICAgICAgY3VycmVudFN0YXR1cyxcclxuICAgICAgICAgIGNlbGxQaG9uZSxcclxuICAgICAgICAgIGNpdHksXHJcbiAgICAgICAgICBzdGF0ZSxcclxuICAgICAgICAgIHppcENvZGUsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc29sZS5sb2cocHJvZmlsZVJlc3BvbnNlKTtcclxuXHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24ocHJvZmlsZVJlc3BvbnNlLCB7IHN0YXR1czogMjAwIH0pO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgdXBkYXRpbmcgcHJvZmlsZTpcIiwgZXJyb3IpO1xyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxyXG4gICAgICB7IGVycm9yOiBcIkludGVybmFsIHNlcnZlciBlcnJvclwiIH0sXHJcbiAgICAgIHsgc3RhdHVzOiA1MDAgfVxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsInByaXNtYSIsImdldERhdGFGcm9tVG9rZW4iLCJQQVRDSCIsInJlcSIsImJvZHkiLCJqc29uIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJob21lQ2x1YiIsIm1lbWJlclNpbmNlIiwiY3VycmVudFN0YXR1cyIsImNlbGxQaG9uZSIsImNpdHkiLCJzdGF0ZSIsInppcENvZGUiLCJlcnJvciIsInN0YXR1cyIsInVzZXJJZCIsImV4aXN0aW5nUHJvZmlsZSIsInByb2ZpbGVQbGFuIiwiZmluZFVuaXF1ZSIsIndoZXJlIiwicHJvZmlsZVJlc3BvbnNlIiwidXBkYXRlIiwiZGF0YSIsImNyZWF0ZSIsImNvbnNvbGUiLCJsb2ciXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/profile/patch/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/database/prisma.ts":
/*!********************************!*\
  !*** ./src/database/prisma.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n// helpers/prisma.ts\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvZGF0YWJhc2UvcHJpc21hLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLG9CQUFvQjtBQUUwQjtBQUU5QyxNQUFNQyxTQUFTLElBQUlELHdEQUFZQTtBQUUvQixpRUFBZUMsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxFam9yZFxcT25lRHJpdmVcXERlc2t0b3BcXEd5bUFwcFxcdW5pb25neW1cXHNyY1xcZGF0YWJhc2VcXHByaXNtYS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBoZWxwZXJzL3ByaXNtYS50c1xuXG5pbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcblxuY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xuXG5leHBvcnQgZGVmYXVsdCBwcmlzbWE7XG4iXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwicHJpc21hIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/database/prisma.ts\n");

/***/ }),

/***/ "(rsc)/./src/helpers/getDataFromToken.ts":
/*!*****************************************!*\
  !*** ./src/helpers/getDataFromToken.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getDataFromToken: () => (/* binding */ getDataFromToken)\n/* harmony export */ });\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ \"(rsc)/./node_modules/jsonwebtoken/index.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);\n\nconst getDataFromToken = (request)=>{\n    try {\n        // Retrieve the token from cookies\n        const token = request.cookies.get(\"token\")?.value || \"\";\n        // Decode the token\n        const decodedToken = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().verify(token, process.env.TOKEN_SECRET);\n        return decodedToken.id;\n    } catch (error) {\n        // Handle errors\n        console.error(\"Token verification failed:\", error.message);\n        throw new Error(\"Invalid token\");\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvaGVscGVycy9nZXREYXRhRnJvbVRva2VuLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUMrQjtBQU14QixNQUFNQyxtQkFBbUIsQ0FBQ0M7SUFDL0IsSUFBSTtRQUNGLGtDQUFrQztRQUNsQyxNQUFNQyxRQUFRRCxRQUFRRSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxVQUFVQyxTQUFTO1FBRXJELG1CQUFtQjtRQUNuQixNQUFNQyxlQUFlUCwwREFBVSxDQUM3QkcsT0FDQU0sUUFBUUMsR0FBRyxDQUFDQyxZQUFZO1FBRzFCLE9BQU9KLGFBQWFLLEVBQUU7SUFDeEIsRUFBRSxPQUFPQyxPQUFZO1FBQ25CLGdCQUFnQjtRQUNoQkMsUUFBUUQsS0FBSyxDQUFDLDhCQUE4QkEsTUFBTUUsT0FBTztRQUN6RCxNQUFNLElBQUlDLE1BQU07SUFDbEI7QUFDRixFQUFFIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXEVqb3JkXFxPbmVEcml2ZVxcRGVza3RvcFxcR3ltQXBwXFx1bmlvbmd5bVxcc3JjXFxoZWxwZXJzXFxnZXREYXRhRnJvbVRva2VuLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXF1ZXN0IH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XG5pbXBvcnQgand0IGZyb20gXCJqc29ud2VidG9rZW5cIjtcblxudHlwZSB0b2tlblByb3BzID0ge1xuICBpZDogbnVtYmVyO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldERhdGFGcm9tVG9rZW4gPSAocmVxdWVzdDogTmV4dFJlcXVlc3QpID0+IHtcbiAgdHJ5IHtcbiAgICAvLyBSZXRyaWV2ZSB0aGUgdG9rZW4gZnJvbSBjb29raWVzXG4gICAgY29uc3QgdG9rZW4gPSByZXF1ZXN0LmNvb2tpZXMuZ2V0KFwidG9rZW5cIik/LnZhbHVlIHx8IFwiXCI7XG5cbiAgICAvLyBEZWNvZGUgdGhlIHRva2VuXG4gICAgY29uc3QgZGVjb2RlZFRva2VuID0gand0LnZlcmlmeShcbiAgICAgIHRva2VuLFxuICAgICAgcHJvY2Vzcy5lbnYuVE9LRU5fU0VDUkVUIVxuICAgICkgYXMgdG9rZW5Qcm9wcztcblxuICAgIHJldHVybiBkZWNvZGVkVG9rZW4uaWQ7XG4gIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAvLyBIYW5kbGUgZXJyb3JzXG4gICAgY29uc29sZS5lcnJvcihcIlRva2VuIHZlcmlmaWNhdGlvbiBmYWlsZWQ6XCIsIGVycm9yLm1lc3NhZ2UpO1xuICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgdG9rZW5cIik7XG4gIH1cbn07XG4iXSwibmFtZXMiOlsiand0IiwiZ2V0RGF0YUZyb21Ub2tlbiIsInJlcXVlc3QiLCJ0b2tlbiIsImNvb2tpZXMiLCJnZXQiLCJ2YWx1ZSIsImRlY29kZWRUb2tlbiIsInZlcmlmeSIsInByb2Nlc3MiLCJlbnYiLCJUT0tFTl9TRUNSRVQiLCJpZCIsImVycm9yIiwiY29uc29sZSIsIm1lc3NhZ2UiLCJFcnJvciJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/helpers/getDataFromToken.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/ms","vendor-chunks/semver","vendor-chunks/jsonwebtoken","vendor-chunks/lodash.includes","vendor-chunks/jws","vendor-chunks/lodash.once","vendor-chunks/jwa","vendor-chunks/lodash.isinteger","vendor-chunks/ecdsa-sig-formatter","vendor-chunks/lodash.isplainobject","vendor-chunks/lodash.isstring","vendor-chunks/lodash.isnumber","vendor-chunks/lodash.isboolean","vendor-chunks/safe-buffer","vendor-chunks/buffer-equal-constant-time"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fprofile%2Fpatch%2Froute&page=%2Fapi%2Fprofile%2Fpatch%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fprofile%2Fpatch%2Froute.ts&appDir=C%3A%5CUsers%5CEjord%5COneDrive%5CDesktop%5CGymApp%5Cuniongym%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CEjord%5COneDrive%5CDesktop%5CGymApp%5Cuniongym&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();