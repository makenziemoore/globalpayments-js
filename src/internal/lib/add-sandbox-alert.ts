/**
 * Adds an alert letting the user know they're in sandbox mode
 *
 * @param target
 *
 */
export function addSandboxAlert(
  target: string | HTMLElement,
  insertBefore?: Node,
) {
  const el = document.createElement("div");
  const text = document.createTextNode(
    "This page is currently in sandbox/test mode. Do not use real/active card numbers.",
  );
  el.appendChild(text);
  el.className = "sandbox-warning";

  if (typeof target === "string") {
    const element = document.querySelector(target) as HTMLElement;

    if (!element) {
      throw new Error("Credit card form target does not exist");
    }

    target = element;
  }

  if (!target) {
    return;
  }

  if (insertBefore) {
    target.insertBefore(el, insertBefore);
  } else {
    target.insertBefore(el, target.firstChild);
  }
}
