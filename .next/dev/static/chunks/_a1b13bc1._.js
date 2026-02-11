(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
// ============================================================
// ESCRIBE TU POEMA AQUI (cada linea es un verso)
// ============================================================
const POEMA = [
    "Nieves, amor mío,",
    "eres mi lugar seguro",
    "y el sueño al que siempre quiero volver.",
    "",
    "En ti encuentro calma,",
    "sonrisa, hogar,",
    "y un amor que no duda.",
    "",
    "Hoy y todos los días,",
    "mi corazón te elige.",
    "Feliz San Valentín."
];
// Seeded random for deterministic tree shape
function seededRandom(seed) {
    let s = seed;
    return (min, max)=>{
        s = (s * 16807 + 0) % 2147483647;
        return min + s / 2147483647 * (max - min);
    };
}
// Color utilities
function lightenColor(hex, amount) {
    const num = Number.parseInt(hex.replace("#", ""), 16);
    const r = Math.min(255, (num >> 16 & 0xff) + amount);
    const g = Math.min(255, (num >> 8 & 0xff) + amount);
    const b = Math.min(255, (num & 0xff) + amount);
    return `rgb(${r},${g},${b})`;
}
function darkenColor(hex, amount) {
    const num = Number.parseInt(hex.replace("#", ""), 16);
    const r = Math.max(0, (num >> 16 & 0xff) - amount);
    const g = Math.max(0, (num >> 8 & 0xff) - amount);
    const b = Math.max(0, (num & 0xff) - amount);
    return `rgb(${r},${g},${b})`;
}
function Page() {
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const phaseRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])("heart");
    const frameRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const timeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const ballY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const ballVel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const treeProgress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const leavesProgress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const slideOffset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const poemChars = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const poemDone = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const leafHearts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const branchTips = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const treeSeed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(42);
    // ── REALISTIC HEART with gradient and highlight ──
    const drawHeart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Page.useCallback[drawHeart]": (ctx, cx, cy, size, color, rotation = 0, withGlow = false)=>{
            ctx.save();
            ctx.translate(cx, cy);
            ctx.rotate(rotation);
            const s = size;
            // Heart path
            const heartPath = {
                "Page.useCallback[drawHeart].heartPath": ()=>{
                    ctx.beginPath();
                    ctx.moveTo(0, s * 0.35);
                    ctx.bezierCurveTo(-s * 0.05, s * 0.1, -s * 0.7, -s * 0.2, -s * 0.5, -s * 0.5);
                    ctx.bezierCurveTo(-s * 0.35, -s * 0.75, -s * 0.05, -s * 0.85, 0, -s * 0.5);
                    ctx.bezierCurveTo(s * 0.05, -s * 0.85, s * 0.35, -s * 0.75, s * 0.5, -s * 0.5);
                    ctx.bezierCurveTo(s * 0.7, -s * 0.2, s * 0.05, s * 0.1, 0, s * 0.35);
                    ctx.closePath();
                }
            }["Page.useCallback[drawHeart].heartPath"];
            // Outer glow
            if (withGlow) {
                ctx.save();
                ctx.shadowColor = "rgba(220,20,60,0.25)";
                ctx.shadowBlur = s * 0.6;
                heartPath();
                ctx.fillStyle = color;
                ctx.fill();
                ctx.restore();
            }
            // Gradient fill
            heartPath();
            const grad = ctx.createRadialGradient(-s * 0.15, -s * 0.35, s * 0.05, 0, -s * 0.1, s * 0.85);
            grad.addColorStop(0, lightenColor(color, 50));
            grad.addColorStop(0.4, color);
            grad.addColorStop(1, darkenColor(color, 35));
            ctx.fillStyle = grad;
            ctx.fill();
            // Specular highlight on left lobe
            ctx.beginPath();
            ctx.ellipse(-s * 0.22, -s * 0.48, s * 0.1, s * 0.16, -0.35, 0, Math.PI * 2);
            ctx.fillStyle = "rgba(255,255,255,0.4)";
            ctx.fill();
            // Small secondary highlight on right lobe
            ctx.beginPath();
            ctx.ellipse(s * 0.18, -s * 0.44, s * 0.06, s * 0.09, 0.2, 0, Math.PI * 2);
            ctx.fillStyle = "rgba(255,255,255,0.18)";
            ctx.fill();
            ctx.restore();
        }
    }["Page.useCallback[drawHeart]"], []);
    // ── ORGANIC RECURSIVE BRANCH ──
    const drawBranch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Page.useCallback[drawBranch]": (ctx, x1, y1, angle, length, width, depth, progress, rand, tips)=>{
            if (depth <= 0 || length < 3 || progress <= 0) return;
            const actualLen = length * Math.min(progress, 1);
            const segs = Math.max(5, Math.floor(length / 6));
            let cx = x1;
            let cy = y1;
            let curAngle = angle;
            // Build organic path with wobble
            const pts = [
                {
                    x: cx,
                    y: cy
                }
            ];
            for(let i = 1; i <= segs; i++){
                curAngle += rand(-0.06, 0.06) * (1 + (6 - depth) * 0.15);
                const step = actualLen / segs;
                cx += Math.cos(curAngle) * step;
                cy += Math.sin(curAngle) * step;
                pts.push({
                    x: cx,
                    y: cy
                });
            }
            // Draw filled branch segments with tapering width
            for(let i = 0; i < pts.length - 1; i++){
                const t = i / (pts.length - 1);
                const w1 = width * (1 - t * 0.65) * 0.5;
                const w2 = width * (1 - (i + 1) / (pts.length - 1) * 0.65) * 0.5;
                const p1 = pts[i];
                const p2 = pts[i + 1];
                const a = Math.atan2(p2.y - p1.y, p2.x - p1.x);
                const perp = a + Math.PI / 2;
                ctx.beginPath();
                ctx.moveTo(p1.x + Math.cos(perp) * w1, p1.y + Math.sin(perp) * w1);
                ctx.lineTo(p2.x + Math.cos(perp) * w2, p2.y + Math.sin(perp) * w2);
                ctx.lineTo(p2.x - Math.cos(perp) * w2, p2.y - Math.sin(perp) * w2);
                ctx.lineTo(p1.x - Math.cos(perp) * w1, p1.y - Math.sin(perp) * w1);
                ctx.closePath();
                // Bark color gradient across width
                const barkBase = depth > 4 ? "#3e2c1a" : depth > 3 ? "#4a3728" : depth > 2 ? "#5a4332" : "#6b5040";
                const bGrad = ctx.createLinearGradient(p1.x + Math.cos(perp) * w1, p1.y + Math.sin(perp) * w1, p1.x - Math.cos(perp) * w1, p1.y - Math.sin(perp) * w1);
                bGrad.addColorStop(0, lightenColor(barkBase, 18));
                bGrad.addColorStop(0.35, barkBase);
                bGrad.addColorStop(0.65, darkenColor(barkBase, 12));
                bGrad.addColorStop(1, lightenColor(barkBase, 8));
                ctx.fillStyle = bGrad;
                ctx.fill();
            }
            // Bark texture lines for thick branches
            if (width > 5) {
                ctx.save();
                ctx.strokeStyle = "rgba(0,0,0,0.07)";
                ctx.lineWidth = 0.6;
                for(let k = 0; k < Math.min(4, Math.floor(width / 3)); k++){
                    const off = rand(-width * 0.2, width * 0.2);
                    ctx.beginPath();
                    for(let i = 0; i < pts.length; i++){
                        const p = pts[i];
                        const nextP = pts[Math.min(i + 1, pts.length - 1)];
                        const prevP = pts[Math.max(i - 1, 0)];
                        const a2 = Math.atan2(nextP.y - prevP.y, nextP.x - prevP.x) + Math.PI / 2;
                        const px = p.x + Math.cos(a2) * off;
                        const py = p.y + Math.sin(a2) * off;
                        if (i === 0) ctx.moveTo(px, py);
                        else ctx.lineTo(px, py);
                    }
                    ctx.stroke();
                }
                ctx.restore();
            }
            // Knots on thick branches
            if (width > 12 && depth > 3) {
                const knotIdx = Math.floor(pts.length * rand(0.3, 0.6));
                const knotP = pts[knotIdx];
                ctx.beginPath();
                ctx.ellipse(knotP.x, knotP.y, width * 0.15, width * 0.1, rand(0, Math.PI), 0, Math.PI * 2);
                ctx.fillStyle = darkenColor("#4a3728", 20);
                ctx.fill();
            }
            if (progress < 0.25) return;
            const childProg = (progress - 0.25) / 0.75;
            const endP = pts[pts.length - 1];
            // Store tips for leaves
            if (depth <= 2) {
                tips.push({
                    x: endP.x,
                    y: endP.y
                });
            }
            // Also store mid-branch tips for more leaf coverage
            if (depth === 2) {
                const midP = pts[Math.floor(pts.length * 0.5)];
                tips.push({
                    x: midP.x,
                    y: midP.y
                });
            }
            // Recursive branching
            if (depth > 1) {
                const numBranches = depth > 4 ? Math.floor(rand(2, 4)) : depth > 2 ? Math.floor(rand(2, 4)) : Math.floor(rand(1, 3));
                for(let b = 0; b < numBranches; b++){
                    const spread = rand(0.25, 0.85) * (b % 2 === 0 ? 1 : -1);
                    const bAngle = curAngle + spread + rand(-0.12, 0.12);
                    const bLen = length * rand(0.5, 0.72);
                    const bWidth = width * rand(0.45, 0.65);
                    const delay = b * 0.12;
                    const bProg = Math.max(0, childProg - delay) / Math.max(0.01, 1 - delay);
                    drawBranch(ctx, endP.x, endP.y, bAngle, bLen, bWidth, depth - 1, bProg, rand, tips);
                }
                // Extra side branches from mid-point for natural look
                if (depth > 3 && childProg > 0.4) {
                    const midIdx = Math.floor(pts.length * rand(0.35, 0.55));
                    const midP = pts[midIdx];
                    const sideDir = rand(0, 1) > 0.5 ? 1 : -1;
                    const sideAngle = curAngle + rand(0.5, 1.1) * sideDir;
                    drawBranch(ctx, midP.x, midP.y, sideAngle, length * rand(0.28, 0.42), width * 0.35, depth - 2, (childProg - 0.4) / 0.6, rand, tips);
                }
                // Another small side branch lower
                if (depth > 4 && childProg > 0.3) {
                    const lowIdx = Math.floor(pts.length * rand(0.15, 0.35));
                    const lowP = pts[lowIdx];
                    const sDir = rand(0, 1) > 0.5 ? 1 : -1;
                    drawBranch(ctx, lowP.x, lowP.y, curAngle + rand(0.6, 1.3) * sDir, length * rand(0.2, 0.35), width * 0.3, depth - 3, (childProg - 0.3) / 0.7, rand, tips);
                }
            }
        }
    }["Page.useCallback[drawBranch]"], []);
    // ── FULL TREE ──
    const drawFullTree = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Page.useCallback[drawFullTree]": (ctx, baseX, baseY, progress, maxH)=>{
            const rand = seededRandom(treeSeed.current);
            const tips = [];
            // Roots
            const rootProg = Math.min(progress / 0.08, 1);
            if (rootProg > 0) {
                for(let i = 0; i < 7; i++){
                    const ra = rand(-1, 1);
                    const rl = rand(20, 55) * rootProg * (maxH / 400);
                    const rw = rand(3, 7) * (maxH / 400);
                    ctx.strokeStyle = darkenColor("#4a3728", 5);
                    ctx.lineWidth = rw;
                    ctx.lineCap = "round";
                    ctx.beginPath();
                    ctx.moveTo(baseX + rand(-5, 5), baseY);
                    ctx.quadraticCurveTo(baseX + Math.cos(ra) * rl * 0.6, baseY + Math.abs(Math.sin(ra)) * rl * 0.4 + 2, baseX + Math.cos(ra) * rl * 1.1, baseY + Math.abs(Math.sin(ra + 0.2)) * rl * 0.35 + 5);
                    ctx.stroke();
                }
            }
            // Main trunk with slight lean
            const trunkLen = maxH * 0.38;
            const trunkWidth = maxH * 0.045;
            const trunkAngle = -Math.PI / 2 + rand(-0.04, 0.04);
            drawBranch(ctx, baseX, baseY, trunkAngle, trunkLen, trunkWidth, 7, progress, rand, tips);
            branchTips.current = tips;
        }
    }["Page.useCallback[drawFullTree]"], [
        drawBranch
    ]);
    // ── GENERATE 160 LEAF HEARTS ──
    const generateLeafHearts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Page.useCallback[generateLeafHearts]": ()=>{
            const colors = [
                "#e74c3c",
                "#c0392b",
                "#e91e63",
                "#d81b60",
                "#f44336",
                "#ff5722",
                "#ff7043",
                "#ff8a65",
                "#ef5350",
                "#ec407a",
                "#f06292",
                "#ff80ab",
                "#ff5252",
                "#ff1744",
                "#d50000",
                "#ad1457",
                "#880e4f",
                "#ff6f00",
                "#ff9800",
                "#ffab40",
                "#ce93d8",
                "#ba68c8",
                "#ab47bc",
                "#e57373",
                "#ef9a9a"
            ];
            const hearts = [];
            for(let i = 0; i < 180; i++){
                hearts.push({
                    bx: (Math.random() - 0.5) * 2.4,
                    by: Math.random(),
                    color: colors[Math.floor(Math.random() * colors.length)],
                    size: Math.random() * 7 + 5,
                    angle: (Math.random() - 0.5) * 0.5,
                    layer: Math.random()
                });
            }
            hearts.sort({
                "Page.useCallback[generateLeafHearts]": (a, b)=>a.layer - b.layer
            }["Page.useCallback[generateLeafHearts]"]);
            leafHearts.current = hearts;
        }
    }["Page.useCallback[generateLeafHearts]"], []);
    // Position leaves around branch tips
    const getLeafWorldPos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Page.useCallback[getLeafWorldPos]": (baseX, baseY, maxH, leaf)=>{
            const tips = branchTips.current;
            if (tips.length === 0) {
                const crownCY = baseY - maxH * 0.6;
                return {
                    x: baseX + leaf.bx * maxH * 0.35,
                    y: crownCY + (leaf.by - 0.5) * maxH * 0.4
                };
            }
            const tipIdx = Math.floor(leaf.layer * tips.length) % tips.length;
            const tip = tips[tipIdx];
            const spread = maxH * 0.1;
            return {
                x: tip.x + leaf.bx * spread,
                y: tip.y + (leaf.by - 0.5) * spread * 0.7
            };
        }
    }["Page.useCallback[getLeafWorldPos]"], []);
    const handleClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Page.useCallback[handleClick]": ()=>{
            if (phaseRef.current === "heart") {
                phaseRef.current = "falling";
                const canvas = canvasRef.current;
                if (canvas) ballY.current = canvas.height / (window.devicePixelRatio || 1) / 2;
                ballVel.current = 0;
            }
        }
    }["Page.useCallback[handleClick]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Page.useEffect": ()=>{
            generateLeafHearts();
            treeSeed.current = 42 + Math.floor(Math.random() * 1000);
            const canvas = canvasRef.current;
            if (!canvas) return;
            const ctx = canvas.getContext("2d");
            if (!ctx) return;
            const resize = {
                "Page.useEffect.resize": ()=>{
                    const dpr = window.devicePixelRatio || 1;
                    canvas.width = window.innerWidth * dpr;
                    canvas.height = window.innerHeight * dpr;
                    canvas.style.width = `${window.innerWidth}px`;
                    canvas.style.height = `${window.innerHeight}px`;
                    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
                }
            }["Page.useEffect.resize"];
            resize();
            window.addEventListener("resize", resize);
            let animId;
            const loop = {
                "Page.useEffect.loop": ()=>{
                    const W = window.innerWidth;
                    const H = window.innerHeight;
                    timeRef.current += 1 / 60;
                    ctx.fillStyle = "#f5f0e8";
                    ctx.fillRect(0, 0, W, H);
                    const phase = phaseRef.current;
                    const t = timeRef.current;
                    // ── HEART ──
                    if (phase === "heart") {
                        // Realistic double-pulse heartbeat
                        const beat1 = Math.max(0, Math.sin(t * 4)) ** 3;
                        const beat2 = Math.max(0, Math.sin(t * 4 + 0.8)) ** 5;
                        const beatScale = 1 + beat1 * 0.08 + beat2 * 0.04;
                        const s = 70 * beatScale;
                        // ── ARCHED TITLE above the heart ──
                        const arcText = "Feliz San Valentin Nieves";
                        const arcRadius = Math.min(W, H) * 0.25;
                        const arcCenterX = W / 2;
                        const arcCenterY = H / 2 + 20;
                        const arcFontSize = Math.min(26, Math.max(16, W * 0.028));
                        ctx.save();
                        ctx.font = `bold ${arcFontSize}px Georgia, "Times New Roman", serif`;
                        ctx.fillStyle = "#8B2252";
                        ctx.textAlign = "center";
                        ctx.textBaseline = "middle";
                        // Measure total text width to distribute evenly
                        const charWidths = [];
                        let totalW = 0;
                        for (const ch of arcText){
                            const cw = ctx.measureText(ch).width;
                            charWidths.push(cw);
                            totalW += cw;
                        }
                        // Total angle the text spans (wider arc)
                        const totalAngle = totalW / arcRadius;
                        // Start from left side of arc, centered
                        const startAngle = -Math.PI / 2 - totalAngle / 2;
                        let currentAngle = startAngle;
                        for(let i = 0; i < arcText.length; i++){
                            const halfChar = charWidths[i] / 2;
                            currentAngle += halfChar / arcRadius;
                            const charX = arcCenterX + Math.cos(currentAngle) * arcRadius;
                            const charY = arcCenterY + Math.sin(currentAngle) * arcRadius;
                            ctx.save();
                            ctx.translate(charX, charY);
                            ctx.rotate(currentAngle + Math.PI / 2);
                            // Subtle text shadow
                            ctx.fillStyle = "rgba(139, 34, 82, 0.12)";
                            ctx.fillText(arcText[i], 1, 1);
                            // Main text
                            ctx.fillStyle = "#8B2252";
                            ctx.fillText(arcText[i], 0, 0);
                            ctx.restore();
                            currentAngle += halfChar / arcRadius;
                        }
                        ctx.restore();
                        // Drop shadow
                        ctx.save();
                        ctx.globalAlpha = 0.1;
                        drawHeart(ctx, W / 2 + 3, H / 2 + 5, s * 1.03, "#6b0000", 0, false);
                        ctx.restore();
                        drawHeart(ctx, W / 2, H / 2, s, "#dc143c", 0, true);
                        // Pulse ring
                        ctx.save();
                        ctx.globalAlpha = beat1 * 0.06;
                        drawHeart(ctx, W / 2, H / 2, s * 1.35, "#ff6b6b", 0, false);
                        ctx.restore();
                        // Hint text
                        const hAlpha = 0.3 + Math.sin(t * 2) * 0.15;
                        ctx.save();
                        ctx.globalAlpha = hAlpha;
                        ctx.font = "14px Georgia, serif";
                        ctx.fillStyle = "#8B7355";
                        ctx.textAlign = "center";
                        ctx.fillText("haz click", W / 2, H / 2 + 95);
                        ctx.restore();
                    }
                    // ── FALLING ──
                    if (phase === "falling") {
                        ballVel.current += 0.7;
                        ballY.current += ballVel.current;
                        const groundY = H - 50;
                        if (ballY.current >= groundY) {
                            ballY.current = groundY;
                            phaseRef.current = "impact";
                            frameRef.current = 0;
                        }
                        const r = 18;
                        ctx.beginPath();
                        ctx.arc(W / 2, ballY.current, r, 0, Math.PI * 2);
                        const bGrad = ctx.createRadialGradient(W / 2 - r * 0.3, ballY.current - r * 0.3, r * 0.1, W / 2, ballY.current, r);
                        bGrad.addColorStop(0, "#e74c3c");
                        bGrad.addColorStop(1, "#7a1a0a");
                        ctx.fillStyle = bGrad;
                        ctx.fill();
                        // Motion trail
                        ctx.save();
                        ctx.globalAlpha = 0.12;
                        ctx.beginPath();
                        ctx.arc(W / 2, ballY.current - ballVel.current * 2, r * 0.7, 0, Math.PI * 2);
                        ctx.fillStyle = "#e74c3c";
                        ctx.fill();
                        ctx.restore();
                    }
                    // ── IMPACT ──
                    if (phase === "impact") {
                        frameRef.current++;
                        const groundY = H - 50;
                        const f = frameRef.current;
                        // Particles
                        if (f < 40) {
                            const alpha = 1 - f / 40;
                            for(let i = 0; i < 14; i++){
                                const angle = i / 14 * Math.PI + Math.sin(i * 2.3) * 0.3;
                                const dist = f * 2.8 * (0.5 + Math.sin(i * 1.7) * 0.5);
                                const px = W / 2 + Math.cos(angle) * dist;
                                const py = groundY - Math.sin(angle) * dist * 0.55;
                                const pSize = (3 + Math.sin(i) * 2) * (1 - f / 40);
                                ctx.beginPath();
                                ctx.arc(px, py, pSize, 0, Math.PI * 2);
                                ctx.fillStyle = `rgba(101, 67, 33, ${alpha})`;
                                ctx.fill();
                            }
                        }
                        // Ball sinks
                        const shrink = Math.min(f / 45, 1);
                        const r = 18 * (1 - shrink);
                        if (r > 0.5) {
                            ctx.beginPath();
                            ctx.arc(W / 2, groundY, r, 0, Math.PI * 2);
                            ctx.fillStyle = "#654321";
                            ctx.fill();
                        }
                        // Ground cracks
                        ctx.save();
                        ctx.globalAlpha = Math.min(f / 20, 0.35);
                        ctx.strokeStyle = "#5a3d1a";
                        ctx.lineWidth = 1.2;
                        for(let i = 0; i < 6; i++){
                            const a = i / 6 * Math.PI;
                            const len = 12 + i * 7;
                            ctx.beginPath();
                            ctx.moveTo(W / 2, groundY);
                            ctx.lineTo(W / 2 + Math.cos(a) * len, groundY + Math.sin(a) * len * 0.3 + 2);
                            ctx.stroke();
                        }
                        ctx.restore();
                        if (f > 55) {
                            phaseRef.current = "growing";
                            treeProgress.current = 0;
                        }
                    }
                    // ── GROWING ──
                    if (phase === "growing") {
                        treeProgress.current += 0.003;
                        const groundY = H - 50;
                        const maxH = H * 0.78;
                        drawFullTree(ctx, W / 2, groundY, treeProgress.current, maxH);
                        if (treeProgress.current >= 1) {
                            phaseRef.current = "leaves";
                            leavesProgress.current = 0;
                        }
                    }
                    // ── LEAVES ──
                    if (phase === "leaves") {
                        leavesProgress.current += 0.005;
                        const groundY = H - 50;
                        const maxH = H * 0.78;
                        drawFullTree(ctx, W / 2, groundY, 1, maxH);
                        const total = leafHearts.current.length;
                        const visible = Math.floor(leavesProgress.current * total);
                        for(let i = 0; i < Math.min(visible, total); i++){
                            const leaf = leafHearts.current[i];
                            const pos = getLeafWorldPos(W / 2, groundY, maxH, leaf);
                            const aT = Math.min((leavesProgress.current - i / total) * 4, 1);
                            if (aT > 0) {
                                const bounce = aT < 1 ? Math.sin(aT * Math.PI) * 0.3 : 0;
                                drawHeart(ctx, pos.x, pos.y - bounce * 8, leaf.size * aT, leaf.color, leaf.angle);
                            }
                        }
                        if (leavesProgress.current >= 1.4) {
                            phaseRef.current = "sliding";
                            slideOffset.current = 0;
                        }
                    }
                    // ── SLIDING ──
                    if (phase === "sliding") {
                        slideOffset.current += 2.5;
                        const targetX = W * 0.7;
                        const currentTreeX = W / 2 + slideOffset.current;
                        const groundY = H - 50;
                        const maxH = H * 0.78;
                        if (currentTreeX >= targetX) {
                            slideOffset.current = targetX - W / 2;
                            phaseRef.current = "poem";
                            poemChars.current = 0;
                            poemDone.current = false;
                        }
                        const tx = W / 2 + slideOffset.current;
                        drawFullTree(ctx, tx, groundY, 1, maxH);
                        for (const leaf of leafHearts.current){
                            const pos = getLeafWorldPos(tx, groundY, maxH, leaf);
                            drawHeart(ctx, pos.x, pos.y, leaf.size, leaf.color, leaf.angle);
                        }
                    }
                    // ── POEM ──
                    if (phase === "poem") {
                        const groundY = H - 50;
                        const maxH = H * 0.78;
                        const tx = W / 2 + slideOffset.current;
                        drawFullTree(ctx, tx, groundY, 1, maxH);
                        // Leaves with gentle sway
                        for(let i = 0; i < leafHearts.current.length; i++){
                            const leaf = leafHearts.current[i];
                            const pos = getLeafWorldPos(tx, groundY, maxH, leaf);
                            const sway = Math.sin(t * 1.5 + i * 0.4) * 2.5;
                            const swayY = Math.sin(t * 1.2 + i * 0.7) * 1;
                            drawHeart(ctx, pos.x + sway, pos.y + swayY, leaf.size, leaf.color, leaf.angle + Math.sin(t + i * 0.5) * 0.08);
                        }
                        // Falling petals
                        for(let i = 0; i < 4; i++){
                            const ft = (t * 0.3 + i * 3.7) % 8;
                            if (ft < 6) {
                                const fx = tx + Math.sin(ft * 2 + i * 5) * maxH * 0.3;
                                const fy = groundY - maxH * 0.65 + ft * maxH * 0.12;
                                const fa = Math.sin(ft * 3 + i) * 0.5;
                                const fAlpha = ft < 5 ? 0.45 : 0.45 * (6 - ft);
                                ctx.save();
                                ctx.globalAlpha = fAlpha;
                                drawHeart(ctx, fx, fy, 5, "#e74c3c", fa);
                                ctx.restore();
                            }
                        }
                        // Typewriter poem
                        if (!poemDone.current) {
                            poemChars.current += 0.7;
                        }
                        const fullText = POEMA.join("\n");
                        const charsToShow = Math.min(Math.floor(poemChars.current), fullText.length);
                        if (charsToShow >= fullText.length) poemDone.current = true;
                        const visibleText = fullText.substring(0, charsToShow);
                        const poemLines = visibleText.split("\n");
                        const poemX = W * 0.05;
                        const poemStartY = H * 0.15;
                        const fontSize = Math.min(20, Math.max(13, W * 0.018));
                        const lineH = fontSize * 1.8;
                        ctx.font = `italic ${fontSize}px Georgia, "Times New Roman", serif`;
                        ctx.textAlign = "left";
                        ctx.textBaseline = "top";
                        for(let i = 0; i < poemLines.length; i++){
                            // Text shadow
                            ctx.fillStyle = "rgba(93, 64, 55, 0.07)";
                            ctx.fillText(poemLines[i], poemX + 1, poemStartY + i * lineH + 1);
                            // Text
                            ctx.fillStyle = "#5D4037";
                            ctx.fillText(poemLines[i], poemX, poemStartY + i * lineH);
                        }
                        // Blinking cursor
                        if (!poemDone.current) {
                            const lastIdx = poemLines.length - 1;
                            const lastLine = poemLines[lastIdx] || "";
                            const lw = ctx.measureText(lastLine).width;
                            const cursorY = poemStartY + lastIdx * lineH;
                            if (Math.floor(t * 3) % 2 === 0) {
                                ctx.fillStyle = "#5D4037";
                                ctx.fillRect(poemX + lw + 3, cursorY + 2, 2, fontSize * 1.1);
                            }
                        }
                        // Heart at end of poem
                        if (poemDone.current) {
                            const endY = poemStartY + poemLines.length * lineH + 20;
                            const pulse = 1 + Math.sin(t * 2.5) * 0.1;
                            drawHeart(ctx, poemX + 12, endY + 5, 12 * pulse, "#dc143c", 0, true);
                        }
                    }
                    animId = requestAnimationFrame(loop);
                }
            }["Page.useEffect.loop"];
            animId = requestAnimationFrame(loop);
            return ({
                "Page.useEffect": ()=>{
                    cancelAnimationFrame(animId);
                    window.removeEventListener("resize", resize);
                }
            })["Page.useEffect"];
        }
    }["Page.useEffect"], [
        drawHeart,
        drawFullTree,
        getLeafWorldPos,
        generateLeafHearts
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
        ref: canvasRef,
        onClick: handleClick,
        style: {
            display: "block",
            width: "100vw",
            height: "100vh",
            cursor: "pointer",
            background: "#f5f0e8"
        }
    }, void 0, false, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 794,
        columnNumber: 5
    }, this);
}
_s(Page, "SRJz+TtgG2lG3T1bAWLUnRDrOOw=");
_c = Page;
var _c;
__turbopack_context__.k.register(_c, "Page");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
]);

//# sourceMappingURL=_a1b13bc1._.js.map