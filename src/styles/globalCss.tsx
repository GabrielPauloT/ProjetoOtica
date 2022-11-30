import { globalCss } from "@stitches/react";

export function GlobalStyles() {
    const styledGlobal = globalCss({'*': { margin: 0, padding: 0 },})
    return <div>{styledGlobal()}</div>
}