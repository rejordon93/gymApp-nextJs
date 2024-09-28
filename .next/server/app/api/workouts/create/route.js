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
exports.id = "app/api/workouts/create/route";
exports.ids = ["app/api/workouts/create/route"];
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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fworkouts%2Fcreate%2Froute&page=%2Fapi%2Fworkouts%2Fcreate%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fworkouts%2Fcreate%2Froute.tsx&appDir=C%3A%5CUsers%5CEjord%5COneDrive%5CDesktop%5CGymApp%5Cuniongym%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CEjord%5COneDrive%5CDesktop%5CGymApp%5Cuniongym&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fworkouts%2Fcreate%2Froute&page=%2Fapi%2Fworkouts%2Fcreate%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fworkouts%2Fcreate%2Froute.tsx&appDir=C%3A%5CUsers%5CEjord%5COneDrive%5CDesktop%5CGymApp%5Cuniongym%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CEjord%5COneDrive%5CDesktop%5CGymApp%5Cuniongym&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_Ejord_OneDrive_Desktop_GymApp_uniongym_src_app_api_workouts_create_route_tsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/workouts/create/route.tsx */ \"(rsc)/./src/app/api/workouts/create/route.tsx\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/workouts/create/route\",\n        pathname: \"/api/workouts/create\",\n        filename: \"route\",\n        bundlePath: \"app/api/workouts/create/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\Ejord\\\\OneDrive\\\\Desktop\\\\GymApp\\\\uniongym\\\\src\\\\app\\\\api\\\\workouts\\\\create\\\\route.tsx\",\n    nextConfigOutput,\n    userland: C_Users_Ejord_OneDrive_Desktop_GymApp_uniongym_src_app_api_workouts_create_route_tsx__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/workouts/create/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZ3b3Jrb3V0cyUyRmNyZWF0ZSUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGd29ya291dHMlMkZjcmVhdGUlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZ3b3Jrb3V0cyUyRmNyZWF0ZSUyRnJvdXRlLnRzeCZhcHBEaXI9QyUzQSU1Q1VzZXJzJTVDRWpvcmQlNUNPbmVEcml2ZSU1Q0Rlc2t0b3AlNUNHeW1BcHAlNUN1bmlvbmd5bSU1Q3NyYyU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9QyUzQSU1Q1VzZXJzJTVDRWpvcmQlNUNPbmVEcml2ZSU1Q0Rlc2t0b3AlNUNHeW1BcHAlNUN1bmlvbmd5bSZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDaUQ7QUFDOUg7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBaUU7QUFDekU7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUN1SDs7QUFFdkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91bmlvbmd5bS8/NmQ2MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxFam9yZFxcXFxPbmVEcml2ZVxcXFxEZXNrdG9wXFxcXEd5bUFwcFxcXFx1bmlvbmd5bVxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFx3b3Jrb3V0c1xcXFxjcmVhdGVcXFxccm91dGUudHN4XCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS93b3Jrb3V0cy9jcmVhdGUvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS93b3Jrb3V0cy9jcmVhdGVcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL3dvcmtvdXRzL2NyZWF0ZS9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkM6XFxcXFVzZXJzXFxcXEVqb3JkXFxcXE9uZURyaXZlXFxcXERlc2t0b3BcXFxcR3ltQXBwXFxcXHVuaW9uZ3ltXFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXHdvcmtvdXRzXFxcXGNyZWF0ZVxcXFxyb3V0ZS50c3hcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL3dvcmtvdXRzL2NyZWF0ZS9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fworkouts%2Fcreate%2Froute&page=%2Fapi%2Fworkouts%2Fcreate%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fworkouts%2Fcreate%2Froute.tsx&appDir=C%3A%5CUsers%5CEjord%5COneDrive%5CDesktop%5CGymApp%5Cuniongym%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CEjord%5COneDrive%5CDesktop%5CGymApp%5Cuniongym&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/workouts/create/route.tsx":
/*!***********************************************!*\
  !*** ./src/app/api/workouts/create/route.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _database_prisma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/database/prisma */ \"(rsc)/./src/database/prisma.ts\");\n/* harmony import */ var _helpers_getDataFromToken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/helpers/getDataFromToken */ \"(rsc)/./src/helpers/getDataFromToken.ts\");\n\n\n\nasync function POST(req) {\n    try {\n        const { checkin, equipment, duration, calories, weightLifted, distance, repetitions } = await req.json();\n        if (!checkin) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Missing required fields\"\n            }, {\n                status: 400\n            });\n        }\n        // Assuming you have a function to extract the user ID from the token\n        const userId = (0,_helpers_getDataFromToken__WEBPACK_IMPORTED_MODULE_2__.getDataFromToken)(req);\n        if (!userId) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Invalid token or no user found\"\n            }, {\n                status: 401\n            });\n        }\n        // Create workout in the database\n        const workout = await _database_prisma__WEBPACK_IMPORTED_MODULE_1__[\"default\"].workout.create({\n            data: {\n                equipment: equipment || null,\n                duration: duration || null,\n                checkin: new Date(checkin),\n                calories: calories || 0,\n                weightLifted: weightLifted || null,\n                distance: distance || null,\n                repetitions: repetitions || null,\n                user_id: userId\n            }\n        });\n        // Send success response\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: \"Workout added successfully\",\n            workout\n        });\n    } catch (error) {\n        console.error(\"Error processing the request\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Failed to process request\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS93b3Jrb3V0cy9jcmVhdGUvcm91dGUudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBd0Q7QUFDakI7QUFDdUI7QUFFdkQsZUFBZUcsS0FBS0MsR0FBZ0I7SUFDekMsSUFBSTtRQUNGLE1BQU0sRUFDSkMsT0FBTyxFQUNQQyxTQUFTLEVBQ1RDLFFBQVEsRUFDUkMsUUFBUSxFQUNSQyxZQUFZLEVBQ1pDLFFBQVEsRUFDUkMsV0FBVyxFQUNaLEdBQUcsTUFBTVAsSUFBSVEsSUFBSTtRQUVsQixJQUFJLENBQUNQLFNBQVM7WUFDWixPQUFPTCxxREFBWUEsQ0FBQ1ksSUFBSSxDQUN0QjtnQkFBRUMsT0FBTztZQUEwQixHQUNuQztnQkFBRUMsUUFBUTtZQUFJO1FBRWxCO1FBRUEscUVBQXFFO1FBQ3JFLE1BQU1DLFNBQVNiLDJFQUFnQkEsQ0FBQ0U7UUFFaEMsSUFBSSxDQUFDVyxRQUFRO1lBQ1gsT0FBT2YscURBQVlBLENBQUNZLElBQUksQ0FDdEI7Z0JBQUVDLE9BQU87WUFBaUMsR0FDMUM7Z0JBQUVDLFFBQVE7WUFBSTtRQUVsQjtRQUVBLGlDQUFpQztRQUNqQyxNQUFNRSxVQUFVLE1BQU1mLHdEQUFNQSxDQUFDZSxPQUFPLENBQUNDLE1BQU0sQ0FBQztZQUMxQ0MsTUFBTTtnQkFDSlosV0FBV0EsYUFBYTtnQkFDeEJDLFVBQVVBLFlBQVk7Z0JBQ3RCRixTQUFTLElBQUljLEtBQUtkO2dCQUNsQkcsVUFBVUEsWUFBWTtnQkFDdEJDLGNBQWNBLGdCQUFnQjtnQkFDOUJDLFVBQVVBLFlBQVk7Z0JBQ3RCQyxhQUFhQSxlQUFlO2dCQUM1QlMsU0FBU0w7WUFDWDtRQUNGO1FBQ0Esd0JBQXdCO1FBQ3hCLE9BQU9mLHFEQUFZQSxDQUFDWSxJQUFJLENBQUM7WUFDdkJTLFNBQVM7WUFDVEw7UUFDRjtJQUNGLEVBQUUsT0FBT0gsT0FBTztRQUNkUyxRQUFRVCxLQUFLLENBQUMsZ0NBQWdDQTtRQUM5QyxPQUFPYixxREFBWUEsQ0FBQ1ksSUFBSSxDQUN0QjtZQUFFQyxPQUFPO1FBQTRCLEdBQ3JDO1lBQUVDLFFBQVE7UUFBSTtJQUVsQjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdW5pb25neW0vLi9zcmMvYXBwL2FwaS93b3Jrb3V0cy9jcmVhdGUvcm91dGUudHN4PzUyMmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlcXVlc3QsIE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xyXG5pbXBvcnQgcHJpc21hIGZyb20gXCJAL2RhdGFiYXNlL3ByaXNtYVwiO1xyXG5pbXBvcnQgeyBnZXREYXRhRnJvbVRva2VuIH0gZnJvbSBcIkAvaGVscGVycy9nZXREYXRhRnJvbVRva2VuXCI7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXE6IE5leHRSZXF1ZXN0KSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgY2hlY2tpbixcclxuICAgICAgZXF1aXBtZW50LFxyXG4gICAgICBkdXJhdGlvbixcclxuICAgICAgY2Fsb3JpZXMsXHJcbiAgICAgIHdlaWdodExpZnRlZCxcclxuICAgICAgZGlzdGFuY2UsXHJcbiAgICAgIHJlcGV0aXRpb25zLFxyXG4gICAgfSA9IGF3YWl0IHJlcS5qc29uKCk7XHJcblxyXG4gICAgaWYgKCFjaGVja2luKSB7XHJcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcclxuICAgICAgICB7IGVycm9yOiBcIk1pc3NpbmcgcmVxdWlyZWQgZmllbGRzXCIgfSxcclxuICAgICAgICB7IHN0YXR1czogNDAwIH1cclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBBc3N1bWluZyB5b3UgaGF2ZSBhIGZ1bmN0aW9uIHRvIGV4dHJhY3QgdGhlIHVzZXIgSUQgZnJvbSB0aGUgdG9rZW5cclxuICAgIGNvbnN0IHVzZXJJZCA9IGdldERhdGFGcm9tVG9rZW4ocmVxKTtcclxuXHJcbiAgICBpZiAoIXVzZXJJZCkge1xyXG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXHJcbiAgICAgICAgeyBlcnJvcjogXCJJbnZhbGlkIHRva2VuIG9yIG5vIHVzZXIgZm91bmRcIiB9LFxyXG4gICAgICAgIHsgc3RhdHVzOiA0MDEgfVxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENyZWF0ZSB3b3Jrb3V0IGluIHRoZSBkYXRhYmFzZVxyXG4gICAgY29uc3Qgd29ya291dCA9IGF3YWl0IHByaXNtYS53b3Jrb3V0LmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBlcXVpcG1lbnQ6IGVxdWlwbWVudCB8fCBudWxsLFxyXG4gICAgICAgIGR1cmF0aW9uOiBkdXJhdGlvbiB8fCBudWxsLFxyXG4gICAgICAgIGNoZWNraW46IG5ldyBEYXRlKGNoZWNraW4pLCAvLyBFbnN1cmUgZGF0ZSBmb3JtYXQgaXMgY29ycmVjdFxyXG4gICAgICAgIGNhbG9yaWVzOiBjYWxvcmllcyB8fCAwLCAvLyBEZWZhdWx0IHRvIDAgaWYgbm90IHByb3ZpZGVkXHJcbiAgICAgICAgd2VpZ2h0TGlmdGVkOiB3ZWlnaHRMaWZ0ZWQgfHwgbnVsbCwgLy8gT3B0aW9uYWwgZmllbGRcclxuICAgICAgICBkaXN0YW5jZTogZGlzdGFuY2UgfHwgbnVsbCwgLy8gT3B0aW9uYWwgZmllbGRcclxuICAgICAgICByZXBldGl0aW9uczogcmVwZXRpdGlvbnMgfHwgbnVsbCwgLy8gT3B0aW9uYWwgZmllbGRcclxuICAgICAgICB1c2VyX2lkOiB1c2VySWQsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIC8vIFNlbmQgc3VjY2VzcyByZXNwb25zZVxyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHtcclxuICAgICAgbWVzc2FnZTogXCJXb3Jrb3V0IGFkZGVkIHN1Y2Nlc3NmdWxseVwiLFxyXG4gICAgICB3b3Jrb3V0LFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBwcm9jZXNzaW5nIHRoZSByZXF1ZXN0XCIsIGVycm9yKTtcclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcclxuICAgICAgeyBlcnJvcjogXCJGYWlsZWQgdG8gcHJvY2VzcyByZXF1ZXN0XCIgfSxcclxuICAgICAgeyBzdGF0dXM6IDUwMCB9XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwicHJpc21hIiwiZ2V0RGF0YUZyb21Ub2tlbiIsIlBPU1QiLCJyZXEiLCJjaGVja2luIiwiZXF1aXBtZW50IiwiZHVyYXRpb24iLCJjYWxvcmllcyIsIndlaWdodExpZnRlZCIsImRpc3RhbmNlIiwicmVwZXRpdGlvbnMiLCJqc29uIiwiZXJyb3IiLCJzdGF0dXMiLCJ1c2VySWQiLCJ3b3Jrb3V0IiwiY3JlYXRlIiwiZGF0YSIsIkRhdGUiLCJ1c2VyX2lkIiwibWVzc2FnZSIsImNvbnNvbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/workouts/create/route.tsx\n");

/***/ }),

/***/ "(rsc)/./src/database/prisma.ts":
/*!********************************!*\
  !*** ./src/database/prisma.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n// helpers/prisma.ts\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvZGF0YWJhc2UvcHJpc21hLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLG9CQUFvQjtBQUUwQjtBQUU5QyxNQUFNQyxTQUFTLElBQUlELHdEQUFZQTtBQUUvQixpRUFBZUMsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3VuaW9uZ3ltLy4vc3JjL2RhdGFiYXNlL3ByaXNtYS50cz9kNmNlIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGhlbHBlcnMvcHJpc21hLnRzXHJcblxyXG5pbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcclxuXHJcbmNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHByaXNtYTtcclxuIl0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsInByaXNtYSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/database/prisma.ts\n");

/***/ }),

/***/ "(rsc)/./src/helpers/getDataFromToken.ts":
/*!*****************************************!*\
  !*** ./src/helpers/getDataFromToken.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getDataFromToken: () => (/* binding */ getDataFromToken)\n/* harmony export */ });\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ \"(rsc)/./node_modules/jsonwebtoken/index.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);\n\nconst getDataFromToken = (request)=>{\n    try {\n        // Retrieve the token from cookies\n        const token = request.cookies.get(\"token\")?.value || \"\";\n        // Decode the token\n        const decodedToken = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().verify(token, process.env.TOKEN_SECRET);\n        return decodedToken.id;\n    } catch (error) {\n        // Handle errors\n        console.error(\"Token verification failed:\", error.message);\n        throw new Error(\"Invalid token\");\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvaGVscGVycy9nZXREYXRhRnJvbVRva2VuLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUMrQjtBQU14QixNQUFNQyxtQkFBbUIsQ0FBQ0M7SUFDL0IsSUFBSTtRQUNGLGtDQUFrQztRQUNsQyxNQUFNQyxRQUFRRCxRQUFRRSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxVQUFVQyxTQUFTO1FBRXJELG1CQUFtQjtRQUNuQixNQUFNQyxlQUFlUCwwREFBVSxDQUM3QkcsT0FDQU0sUUFBUUMsR0FBRyxDQUFDQyxZQUFZO1FBRzFCLE9BQU9KLGFBQWFLLEVBQUU7SUFDeEIsRUFBRSxPQUFPQyxPQUFZO1FBQ25CLGdCQUFnQjtRQUNoQkMsUUFBUUQsS0FBSyxDQUFDLDhCQUE4QkEsTUFBTUUsT0FBTztRQUN6RCxNQUFNLElBQUlDLE1BQU07SUFDbEI7QUFDRixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdW5pb25neW0vLi9zcmMvaGVscGVycy9nZXREYXRhRnJvbVRva2VuLnRzP2UwNTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlcXVlc3QgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcclxuaW1wb3J0IGp3dCBmcm9tIFwianNvbndlYnRva2VuXCI7XHJcblxyXG50eXBlIHRva2VuUHJvcHMgPSB7XHJcbiAgaWQ6IG51bWJlcjtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXREYXRhRnJvbVRva2VuID0gKHJlcXVlc3Q6IE5leHRSZXF1ZXN0KSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIC8vIFJldHJpZXZlIHRoZSB0b2tlbiBmcm9tIGNvb2tpZXNcclxuICAgIGNvbnN0IHRva2VuID0gcmVxdWVzdC5jb29raWVzLmdldChcInRva2VuXCIpPy52YWx1ZSB8fCBcIlwiO1xyXG5cclxuICAgIC8vIERlY29kZSB0aGUgdG9rZW5cclxuICAgIGNvbnN0IGRlY29kZWRUb2tlbiA9IGp3dC52ZXJpZnkoXHJcbiAgICAgIHRva2VuLFxyXG4gICAgICBwcm9jZXNzLmVudi5UT0tFTl9TRUNSRVQhXHJcbiAgICApIGFzIHRva2VuUHJvcHM7XHJcblxyXG4gICAgcmV0dXJuIGRlY29kZWRUb2tlbi5pZDtcclxuICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAvLyBIYW5kbGUgZXJyb3JzXHJcbiAgICBjb25zb2xlLmVycm9yKFwiVG9rZW4gdmVyaWZpY2F0aW9uIGZhaWxlZDpcIiwgZXJyb3IubWVzc2FnZSk7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHRva2VuXCIpO1xyXG4gIH1cclxufTtcclxuIl0sIm5hbWVzIjpbImp3dCIsImdldERhdGFGcm9tVG9rZW4iLCJyZXF1ZXN0IiwidG9rZW4iLCJjb29raWVzIiwiZ2V0IiwidmFsdWUiLCJkZWNvZGVkVG9rZW4iLCJ2ZXJpZnkiLCJwcm9jZXNzIiwiZW52IiwiVE9LRU5fU0VDUkVUIiwiaWQiLCJlcnJvciIsImNvbnNvbGUiLCJtZXNzYWdlIiwiRXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/helpers/getDataFromToken.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/ms","vendor-chunks/semver","vendor-chunks/jsonwebtoken","vendor-chunks/jws","vendor-chunks/ecdsa-sig-formatter","vendor-chunks/safe-buffer","vendor-chunks/lodash.once","vendor-chunks/lodash.isstring","vendor-chunks/lodash.isplainobject","vendor-chunks/lodash.isnumber","vendor-chunks/lodash.isinteger","vendor-chunks/lodash.isboolean","vendor-chunks/lodash.includes","vendor-chunks/jwa","vendor-chunks/buffer-equal-constant-time"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fworkouts%2Fcreate%2Froute&page=%2Fapi%2Fworkouts%2Fcreate%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fworkouts%2Fcreate%2Froute.tsx&appDir=C%3A%5CUsers%5CEjord%5COneDrive%5CDesktop%5CGymApp%5Cuniongym%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CEjord%5COneDrive%5CDesktop%5CGymApp%5Cuniongym&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();