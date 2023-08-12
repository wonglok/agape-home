let { Box: e } = window.Globals["@react-three/drei"],
  { Canvas: t } = window.Globals["@react-three/fiber"];
function n() {
  return window.React.createElement(
    window.React.Fragment,
    null,
    window.React.createElement(
      "group",
      null,
      window.React.createElement(e, null)
    )
  );
}
function l() {
  return window.React.createElement(window.React.Fragment, null, "html");
}
function a({ smartObject: e = null, htmlOverlay: n = null }) {
  return window.React.createElement(
    window.React.Fragment,
    null,
    window.React.createElement(t, null, e),
    n
  );
}
export { l as HTMLOverlay, a as Preview, n as SmartObject };
