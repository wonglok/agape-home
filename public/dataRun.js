let { Sphere: e } = window.Globals["@react-three/drei"];
function t() {
  return window.React.createElement(
    window.React.Fragment,
    null,
    window.React.createElement(
      e,
      null,
      window.React.createElement("meshStandardMaterial", {
        emissive: "hotpink",
      })
    )
  );
}
let { Box: n } = window.Globals["@react-three/drei"],
  { Canvas: a } = window.Globals["@react-three/fiber"];
function l() {
  return window.React.createElement(
    window.React.Fragment,
    null,
    window.React.createElement(
      "group",
      null,
      window.React.createElement(
        "group",
        { position: [1, 0, 0] },
        window.React.createElement(t, null)
      ),
      window.React.createElement(
        "group",
        { position: [-1, 0, 0] },
        window.React.createElement(n, null)
      )
    )
  );
}
function r() {
  return window.React.createElement(window.React.Fragment, null, "html");
}
function w({ smartObject: e = null, htmlOverlay: t = null }) {
  return window.React.createElement(
    window.React.Fragment,
    null,
    window.React.createElement(a, null, e),
    t
  );
}
export { r as HTMLOverlay, w as Preview, l as SmartObject };
//# sourceMappingURL=main.modern.js.map
