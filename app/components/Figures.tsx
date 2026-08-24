/**
 * 案例頁共用的圖表元件。
 * 規則：資料色只用在色塊上，文字一律用文字色；小螢幕橫向捲動而不是整張縮小
 * （720 單位的 viewBox 在 330px 視窗會把 13px 字縮成 6px）。
 */

export function Scroll({ children }: { children: React.ReactNode }) {
  return <div className="chart-scroll">{children}</div>;
}

/** 比例條：顯示一個高度不平衡的組成，例如 97% / 3% */
export function Split({
  parts,
  note,
  caption,
}: {
  parts: { k: string; v: number; c: number }[];
  note?: string;
  caption?: string;
}) {
  // 先算好每段的起點，避免在 render 期間累加變數
  const laid = parts.reduce<{ p: (typeof parts)[number]; x: number; w: number }[]>((acc, p) => {
    const prev = acc[acc.length - 1];
    const x = prev ? prev.x + prev.w : 0;
    return [...acc, { p, x, w: (p.v / 100) * 720 }];
  }, []);
  return (
    <figure className="chart">
      <Scroll>
        <svg viewBox="0 0 720 92" role="img" aria-label={parts.map((p) => `${p.k} ${p.v}%`).join("，")}>
          {laid.map(({ p, x, w }) => {
            // 靠右的細segment：標籤改成靠右對齊，否則會衝出 viewBox
            const flip = x > 480;
            return (
              <g key={p.k}>
                <rect x={x} y="26" width={Math.max(w - 2, 2)} height="38" rx="2" fill={`var(--c${p.c})`} />
                <text x={flip ? 720 : x} y="18" className="val" textAnchor={flip ? "end" : "start"}>
                  {p.k} {p.v}%
                </text>
              </g>
            );
          })}
          {note ? <text x="0" y="84" className="note">{note}</text> : null}
        </svg>
      </Scroll>
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
}

/** 橫向指標條：把幾個 0–100 的指標放在同一把尺上比較 */
export function Metrics({
  rows,
  caption,
}: {
  rows: { k: string; v: number; note: string; c: number; dim?: boolean }[];
  caption?: string;
}) {
  const H = rows.length * 46 + 42;
  return (
    <figure className="chart">
      <Scroll>
        <svg viewBox={`0 0 720 ${H}`} role="img" aria-label={rows.map((r) => `${r.k} ${r.v}%`).join("，")}>
          {[0, 25, 50, 75, 100].map((g) => (
            <g key={g}>
              <line x1={168 + g * 5.2} y1="8" x2={168 + g * 5.2} y2={H - 34} className="grid" />
              <text x={168 + g * 5.2} y={H - 12} className="note" textAnchor="middle">
                {g}%
              </text>
            </g>
          ))}
          {rows.map((r, i) => {
            const y = i * 46 + 14;
            return (
              <g key={r.k}>
                <text x="0" y={y + 17} className="val">{r.k}</text>
                <rect x="168" y={y} width={Math.max(r.v * 5.2, 2)} height="24" rx="2"
                      fill={`var(--c${r.c})`} opacity={r.dim ? 0.35 : 1} />
                <text x={168 + r.v * 5.2 + 10} y={y + 17} className="val">{r.v}%</text>
                <text x="0" y={y + 34} className="note">{r.note}</text>
              </g>
            );
          })}
        </svg>
      </Scroll>
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
}

/** 折線圖：兩條時間序列，直接標名不靠圖例顏色辨識 */
export function Lines({
  years,
  series,
  unit,
  caption,
}: {
  years: string[];
  series: { k: string; v: number[]; c: number }[];
  unit: string;
  caption?: string;
}) {
  const W = 720, H = 260, L = 52, R = 118, T = 22, B = 40;
  const rawMax = Math.max(...series.flatMap((s) => s.v));
  const step = rawMax <= 20 ? 5 : 50;
  const max = Math.ceil(rawMax / step) * step;
  const px = (i: number) => L + (i / (years.length - 1)) * (W - L - R);
  const py = (v: number) => T + (1 - v / max) * (H - T - B);
  return (
    <figure className="chart">
      <Scroll>
        <svg viewBox={`0 0 ${W} ${H}`} role="img"
             aria-label={series.map((s) => `${s.k} 由 ${s.v[0]} 成長至 ${s.v[s.v.length - 1]} ${unit}`).join("；")}>
          {[0, max / 2, max].map((g) => (
            <g key={g}>
              <line x1={L} y1={py(g)} x2={W - R} y2={py(g)} className="grid" />
              <text x={L - 8} y={py(g) + 4} className="note" textAnchor="end">{g}</text>
            </g>
          ))}
          {years.map((y, i) =>
            i % 3 === 0 || i === years.length - 1 ? (
              <text key={y} x={px(i)} y={H - 14} className="note" textAnchor="middle">{y}</text>
            ) : null,
          )}
          {series.map((s) => (
            <g key={s.k}>
              <path d={s.v.map((v, i) => `${i ? "L" : "M"}${px(i)} ${py(v)}`).join(" ")}
                    fill="none" stroke={`var(--c${s.c})`} strokeWidth="2.5" />
              {s.v.map((v, i) => (
                <circle key={i} cx={px(i)} cy={py(v)} r="3.5" fill={`var(--c${s.c})`} />
              ))}
              <text x={W - R + 12} y={py(s.v[s.v.length - 1]) + 4} className="val">
                {s.k} {s.v[s.v.length - 1]}
              </text>
            </g>
          ))}
          <text x={L} y="12" className="note">單位：{unit}</text>
        </svg>
      </Scroll>
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
}

/** 直向流程：每一步一個框，之間有箭頭 */
export function Steps({
  steps,
  caption,
}: {
  steps: { t: string; s: string; on?: boolean }[];
  caption?: string;
}) {
  const H = steps.length * 76 + 8;
  return (
    <figure className="flow">
      <Scroll>
        <svg viewBox={`0 0 720 ${H}`} role="img" aria-label={steps.map((s) => `${s.t}：${s.s}`).join("　→　")}>
          <defs>
            <marker id="sa" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
              <path d="M0 0 L7 3.5 L0 7 z" fill="var(--ink-3)" />
            </marker>
          </defs>
          {steps.map((st, i) => {
            const y = i * 76;
            return (
              <g key={st.t}>
                <rect className={st.on ? "flow-box-on" : "flow-box"} x="0" y={y} width="720" height="56" rx="4" />
                <text x="18" y={y + 24} className="flow-t">{st.t}</text>
                <text x="18" y={y + 43} className="flow-s">{st.s}</text>
                {i < steps.length - 1 && (
                  <path className="flow-arrow" d={`M360 ${y + 58} L360 ${y + 72}`} markerEnd="url(#sa)" />
                )}
              </g>
            );
          })}
        </svg>
      </Scroll>
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
}

/** 24 小時節律帶 */
export function Rhythm({
  bands,
  caption,
}: {
  bands: { from: number; to: number; k: string; s: string; c: number }[];
  caption?: string;
}) {
  const W = 720, L = 0, T = 34, BH = 44;
  const px = (h: number) => L + (h / 24) * W;
  return (
    <figure className="chart">
      <Scroll>
        <svg viewBox="0 0 720 170" role="img" aria-label="一天二十四小時的排程分布">
          {[0, 4, 8, 12, 16, 20, 24].map((h) => (
            <g key={h}>
              <line x1={px(h)} y1={T - 8} x2={px(h)} y2={T + BH + 8} className="grid" />
              <text x={px(h)} y={T - 14} className="note" textAnchor={h === 0 ? "start" : h === 24 ? "end" : "middle"}>
                {String(h).padStart(2, "0")}
              </text>
            </g>
          ))}
          {bands.map((b, i) => {
            const x = px(b.from);
            const w = px(b.to) - px(b.from);
            // 相鄰標籤交錯上下兩層——窄的時段（例如只有四小時）放不下說明文字
            const ly = T + BH + 24 + (i % 2) * 40;
            return (
              <g key={b.k}>
                <rect x={x} y={T} width={Math.max(w - 2, 2)} height={BH} rx="3" fill={`var(--c${b.c})`} />
                <line x1={x + 1} y1={T + BH + 4} x2={x + 1} y2={ly - 12} className="grid" />
                <text x={x + 10} y={ly} className="val">{b.k}</text>
                <text x={x + 10} y={ly + 17} className="note">{b.s}</text>
              </g>
            );
          })}
        </svg>
      </Scroll>
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
}
