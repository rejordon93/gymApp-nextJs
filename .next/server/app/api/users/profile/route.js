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
exports.id = "app/api/users/profile/route";
exports.ids = ["app/api/users/profile/route"];
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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fusers%2Fprofile%2Froute&page=%2Fapi%2Fusers%2Fprofile%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fusers%2Fprofile%2Froute.ts&appDir=C%3A%5CUsers%5CEjord%5COneDrive%5CDesktop%5CGymApp%5Cuniongym%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CEjord%5COneDrive%5CDesktop%5CGymApp%5Cuniongym&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fusers%2Fprofile%2Froute&page=%2Fapi%2Fusers%2Fprofile%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fusers%2Fprofile%2Froute.ts&appDir=C%3A%5CUsers%5CEjord%5COneDrive%5CDesktop%5CGymApp%5Cuniongym%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CEjord%5COneDrive%5CDesktop%5CGymApp%5Cuniongym&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_Ejord_OneDrive_Desktop_GymApp_uniongym_src_app_api_users_profile_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/users/profile/route.ts */ \"(rsc)/./src/app/api/users/profile/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/users/profile/route\",\n        pathname: \"/api/users/profile\",\n        filename: \"route\",\n        bundlePath: \"app/api/users/profile/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\Ejord\\\\OneDrive\\\\Desktop\\\\GymApp\\\\uniongym\\\\src\\\\app\\\\api\\\\users\\\\profile\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_Ejord_OneDrive_Desktop_GymApp_uniongym_src_app_api_users_profile_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/users/profile/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZ1c2VycyUyRnByb2ZpbGUlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRnVzZXJzJTJGcHJvZmlsZSUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRnVzZXJzJTJGcHJvZmlsZSUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNFam9yZCU1Q09uZURyaXZlJTVDRGVza3RvcCU1Q0d5bUFwcCU1Q3VuaW9uZ3ltJTVDc3JjJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1DJTNBJTVDVXNlcnMlNUNFam9yZCU1Q09uZURyaXZlJTVDRGVza3RvcCU1Q0d5bUFwcCU1Q3VuaW9uZ3ltJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUM4QztBQUMzSDtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlFQUFpRTtBQUN6RTtBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ3VIOztBQUV2SCIsInNvdXJjZXMiOlsid2VicGFjazovL3VuaW9uZ3ltLz83OTc4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXEVqb3JkXFxcXE9uZURyaXZlXFxcXERlc2t0b3BcXFxcR3ltQXBwXFxcXHVuaW9uZ3ltXFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXHVzZXJzXFxcXHByb2ZpbGVcXFxccm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL3VzZXJzL3Byb2ZpbGUvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS91c2Vycy9wcm9maWxlXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS91c2Vycy9wcm9maWxlL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiQzpcXFxcVXNlcnNcXFxcRWpvcmRcXFxcT25lRHJpdmVcXFxcRGVza3RvcFxcXFxHeW1BcHBcXFxcdW5pb25neW1cXFxcc3JjXFxcXGFwcFxcXFxhcGlcXFxcdXNlcnNcXFxccHJvZmlsZVxcXFxyb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvdXNlcnMvcHJvZmlsZS9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fusers%2Fprofile%2Froute&page=%2Fapi%2Fusers%2Fprofile%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fusers%2Fprofile%2Froute.ts&appDir=C%3A%5CUsers%5CEjord%5COneDrive%5CDesktop%5CGymApp%5Cuniongym%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CEjord%5COneDrive%5CDesktop%5CGymApp%5Cuniongym&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/users/profile/route.ts":
/*!********************************************!*\
  !*** ./src/app/api/users/profile/route.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _database_prisma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/database/prisma */ \"(rsc)/./src/database/prisma.ts\");\n/* harmony import */ var _helpers_getDataFromToken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/helpers/getDataFromToken */ \"(rsc)/./src/helpers/getDataFromToken.ts\");\n\n\n\nasync function GET(request) {\n    try {\n        const userId = (0,_helpers_getDataFromToken__WEBPACK_IMPORTED_MODULE_2__.getDataFromToken)(request);\n        console.log(\"User ID:\", userId);\n        if (userId === null) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Invalid token or no user found\"\n            }, {\n                status: 401\n            });\n        }\n        const user = await _database_prisma__WEBPACK_IMPORTED_MODULE_1__[\"default\"].user.findUnique({\n            where: {\n                id: userId\n            },\n            select: {\n                id: true,\n                username: true,\n                email: true\n            }\n        });\n        const workouts = await _database_prisma__WEBPACK_IMPORTED_MODULE_1__[\"default\"].workout.findMany({\n            where: {\n                user_id: userId\n            },\n            select: {\n                id: true,\n                equipment: true,\n                duration: true,\n                calories: true,\n                weightLifted: true,\n                distance: true,\n                repetitions: true,\n                checkin: true,\n                user_id: true,\n                createdAt: true,\n                editedAt: true\n            }\n        });\n        if (!user) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"User not found\"\n            }, {\n                status: 404\n            });\n        }\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: \"User Found\",\n            user,\n            workouts\n        });\n    } catch (error) {\n        console.error(\"Error fetching user:\", error.message);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Failed to fetch user\"\n        }, {\n            status: 400\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS91c2Vycy9wcm9maWxlL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBd0Q7QUFDakI7QUFDdUI7QUFFdkQsZUFBZUcsSUFBSUMsT0FBb0I7SUFDNUMsSUFBSTtRQUNGLE1BQU1DLFNBQVNILDJFQUFnQkEsQ0FBQ0U7UUFFaENFLFFBQVFDLEdBQUcsQ0FBQyxZQUFZRjtRQUV4QixJQUFJQSxXQUFXLE1BQU07WUFDbkIsT0FBT0wscURBQVlBLENBQUNRLElBQUksQ0FDdEI7Z0JBQUVDLE9BQU87WUFBaUMsR0FDMUM7Z0JBQUVDLFFBQVE7WUFBSTtRQUVsQjtRQUVBLE1BQU1DLE9BQU8sTUFBTVYsd0RBQU1BLENBQUNVLElBQUksQ0FBQ0MsVUFBVSxDQUFDO1lBQ3hDQyxPQUFPO2dCQUFFQyxJQUFJVDtZQUFPO1lBQ3BCVSxRQUFRO2dCQUNORCxJQUFJO2dCQUNKRSxVQUFVO2dCQUNWQyxPQUFPO1lBQ1Q7UUFDRjtRQUVBLE1BQU1DLFdBQVcsTUFBTWpCLHdEQUFNQSxDQUFDa0IsT0FBTyxDQUFDQyxRQUFRLENBQUM7WUFDN0NQLE9BQU87Z0JBQUVRLFNBQVNoQjtZQUFPO1lBQ3pCVSxRQUFRO2dCQUNORCxJQUFJO2dCQUNKUSxXQUFXO2dCQUNYQyxVQUFVO2dCQUNWQyxVQUFVO2dCQUNWQyxjQUFjO2dCQUNkQyxVQUFVO2dCQUNWQyxhQUFhO2dCQUNiQyxTQUFTO2dCQUNUUCxTQUFTO2dCQUNUUSxXQUFXO2dCQUNYQyxVQUFVO1lBQ1o7UUFDRjtRQUVBLElBQUksQ0FBQ25CLE1BQU07WUFDVCxPQUFPWCxxREFBWUEsQ0FBQ1EsSUFBSSxDQUFDO2dCQUFFQyxPQUFPO1lBQWlCLEdBQUc7Z0JBQUVDLFFBQVE7WUFBSTtRQUN0RTtRQUVBLE9BQU9WLHFEQUFZQSxDQUFDUSxJQUFJLENBQUM7WUFDdkJ1QixTQUFTO1lBQ1RwQjtZQUNBTztRQUNGO0lBQ0YsRUFBRSxPQUFPVCxPQUFZO1FBQ25CSCxRQUFRRyxLQUFLLENBQUMsd0JBQXdCQSxNQUFNc0IsT0FBTztRQUNuRCxPQUFPL0IscURBQVlBLENBQUNRLElBQUksQ0FDdEI7WUFBRUMsT0FBTztRQUF1QixHQUNoQztZQUFFQyxRQUFRO1FBQUk7SUFFbEI7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL3VuaW9uZ3ltLy4vc3JjL2FwcC9hcGkvdXNlcnMvcHJvZmlsZS9yb3V0ZS50cz9iODJkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXF1ZXN0LCBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcclxuaW1wb3J0IHByaXNtYSBmcm9tIFwiQC9kYXRhYmFzZS9wcmlzbWFcIjtcclxuaW1wb3J0IHsgZ2V0RGF0YUZyb21Ub2tlbiB9IGZyb20gXCJAL2hlbHBlcnMvZ2V0RGF0YUZyb21Ub2tlblwiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVChyZXF1ZXN0OiBOZXh0UmVxdWVzdCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB1c2VySWQgPSBnZXREYXRhRnJvbVRva2VuKHJlcXVlc3QpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiVXNlciBJRDpcIiwgdXNlcklkKTtcclxuXHJcbiAgICBpZiAodXNlcklkID09PSBudWxsKSB7XHJcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcclxuICAgICAgICB7IGVycm9yOiBcIkludmFsaWQgdG9rZW4gb3Igbm8gdXNlciBmb3VuZFwiIH0sXHJcbiAgICAgICAgeyBzdGF0dXM6IDQwMSB9XHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoe1xyXG4gICAgICB3aGVyZTogeyBpZDogdXNlcklkIH0sXHJcbiAgICAgIHNlbGVjdDoge1xyXG4gICAgICAgIGlkOiB0cnVlLFxyXG4gICAgICAgIHVzZXJuYW1lOiB0cnVlLFxyXG4gICAgICAgIGVtYWlsOiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3Qgd29ya291dHMgPSBhd2FpdCBwcmlzbWEud29ya291dC5maW5kTWFueSh7XHJcbiAgICAgIHdoZXJlOiB7IHVzZXJfaWQ6IHVzZXJJZCB9LFxyXG4gICAgICBzZWxlY3Q6IHtcclxuICAgICAgICBpZDogdHJ1ZSxcclxuICAgICAgICBlcXVpcG1lbnQ6IHRydWUsXHJcbiAgICAgICAgZHVyYXRpb246IHRydWUsXHJcbiAgICAgICAgY2Fsb3JpZXM6IHRydWUsXHJcbiAgICAgICAgd2VpZ2h0TGlmdGVkOiB0cnVlLFxyXG4gICAgICAgIGRpc3RhbmNlOiB0cnVlLFxyXG4gICAgICAgIHJlcGV0aXRpb25zOiB0cnVlLFxyXG4gICAgICAgIGNoZWNraW46IHRydWUsXHJcbiAgICAgICAgdXNlcl9pZDogdHJ1ZSxcclxuICAgICAgICBjcmVhdGVkQXQ6IHRydWUsXHJcbiAgICAgICAgZWRpdGVkQXQ6IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoIXVzZXIpIHtcclxuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6IFwiVXNlciBub3QgZm91bmRcIiB9LCB7IHN0YXR1czogNDA0IH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7XHJcbiAgICAgIG1lc3NhZ2U6IFwiVXNlciBGb3VuZFwiLFxyXG4gICAgICB1c2VyLFxyXG4gICAgICB3b3Jrb3V0cyxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyB1c2VyOlwiLCBlcnJvci5tZXNzYWdlKTtcclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcclxuICAgICAgeyBlcnJvcjogXCJGYWlsZWQgdG8gZmV0Y2ggdXNlclwiIH0sXHJcbiAgICAgIHsgc3RhdHVzOiA0MDAgfVxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsInByaXNtYSIsImdldERhdGFGcm9tVG9rZW4iLCJHRVQiLCJyZXF1ZXN0IiwidXNlcklkIiwiY29uc29sZSIsImxvZyIsImpzb24iLCJlcnJvciIsInN0YXR1cyIsInVzZXIiLCJmaW5kVW5pcXVlIiwid2hlcmUiLCJpZCIsInNlbGVjdCIsInVzZXJuYW1lIiwiZW1haWwiLCJ3b3Jrb3V0cyIsIndvcmtvdXQiLCJmaW5kTWFueSIsInVzZXJfaWQiLCJlcXVpcG1lbnQiLCJkdXJhdGlvbiIsImNhbG9yaWVzIiwid2VpZ2h0TGlmdGVkIiwiZGlzdGFuY2UiLCJyZXBldGl0aW9ucyIsImNoZWNraW4iLCJjcmVhdGVkQXQiLCJlZGl0ZWRBdCIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/users/profile/route.ts\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/ms","vendor-chunks/semver","vendor-chunks/jsonwebtoken","vendor-chunks/lodash.includes","vendor-chunks/jws","vendor-chunks/lodash.once","vendor-chunks/jwa","vendor-chunks/lodash.isinteger","vendor-chunks/ecdsa-sig-formatter","vendor-chunks/lodash.isplainobject","vendor-chunks/lodash.isstring","vendor-chunks/lodash.isnumber","vendor-chunks/lodash.isboolean","vendor-chunks/safe-buffer","vendor-chunks/buffer-equal-constant-time"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fusers%2Fprofile%2Froute&page=%2Fapi%2Fusers%2Fprofile%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fusers%2Fprofile%2Froute.ts&appDir=C%3A%5CUsers%5CEjord%5COneDrive%5CDesktop%5CGymApp%5Cuniongym%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CEjord%5COneDrive%5CDesktop%5CGymApp%5Cuniongym&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();