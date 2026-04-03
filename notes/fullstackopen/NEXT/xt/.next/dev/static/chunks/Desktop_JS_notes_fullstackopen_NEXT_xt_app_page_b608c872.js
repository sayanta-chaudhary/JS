(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/JS/notes/fullstackopen/NEXT/xt/app/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$JS$2f$notes$2f$fullstackopen$2f$NEXT$2f$xt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/JS/notes/fullstackopen/NEXT/xt/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$JS$2f$notes$2f$fullstackopen$2f$NEXT$2f$xt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/JS/notes/fullstackopen/NEXT/xt/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function Header({ title }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$JS$2f$notes$2f$fullstackopen$2f$NEXT$2f$xt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
        children: title ? title : "Default title"
    }, void 0, false, {
        fileName: "[project]/Desktop/JS/notes/fullstackopen/NEXT/xt/app/page.js",
        lineNumber: 5,
        columnNumber: 10
    }, this);
}
_c = Header;
function HomePage() {
    _s();
    const names = [
        "Ada Lovelace",
        "Grace Hopper",
        "Margaret Hamilton"
    ];
    const [likes, setLikes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$JS$2f$notes$2f$fullstackopen$2f$NEXT$2f$xt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    function handleClick() {
        setLikes(likes + 1);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$JS$2f$notes$2f$fullstackopen$2f$NEXT$2f$xt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$JS$2f$notes$2f$fullstackopen$2f$NEXT$2f$xt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Header, {
                title: "Develop. Preview. Ship."
            }, void 0, false, {
                fileName: "[project]/Desktop/JS/notes/fullstackopen/NEXT/xt/app/page.js",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$JS$2f$notes$2f$fullstackopen$2f$NEXT$2f$xt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                children: names.map((name)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$JS$2f$notes$2f$fullstackopen$2f$NEXT$2f$xt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: name
                    }, name, false, {
                        fileName: "[project]/Desktop/JS/notes/fullstackopen/NEXT/xt/app/page.js",
                        lineNumber: 22,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Desktop/JS/notes/fullstackopen/NEXT/xt/app/page.js",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$JS$2f$notes$2f$fullstackopen$2f$NEXT$2f$xt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: handleClick,
                children: [
                    "Like (",
                    likes,
                    ")"
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/JS/notes/fullstackopen/NEXT/xt/app/page.js",
                lineNumber: 26,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/JS/notes/fullstackopen/NEXT/xt/app/page.js",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_s(HomePage, "m4sdoi624sGASZMfyLgbxubRP0c=");
_c1 = HomePage;
var _c, _c1;
__turbopack_context__.k.register(_c, "Header");
__turbopack_context__.k.register(_c1, "HomePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_JS_notes_fullstackopen_NEXT_xt_app_page_b608c872.js.map