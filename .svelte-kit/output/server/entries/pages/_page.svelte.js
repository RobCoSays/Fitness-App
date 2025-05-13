import { e as escape_html } from "../../chunks/escaping.js";
import "clsx";
import { c as pop, p as push } from "../../chunks/index.js";
import "@perfood/capacitor-google-fit";
const replacements = {
  translate: /* @__PURE__ */ new Map([
    [true, "yes"],
    [false, "no"]
  ])
};
function attr(name, value, is_boolean = false) {
  if (is_boolean) return "";
  const normalized = name in replacements && replacements[name].get(value) || value;
  const assignment = is_boolean ? "" : `="${escape_html(normalized, true)}"`;
  return ` ${name}${assignment}`;
}
function _page($$payload, $$props) {
  push();
  let loading = false;
  $$payload.out += `<div class="center-screen svelte-14cti6s"><button${attr("disabled", loading, true)} class="svelte-14cti6s">${escape_html("Show Google Fit Data")}</button> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div>`;
  pop();
}
export {
  _page as default
};
