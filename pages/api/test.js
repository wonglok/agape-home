// const swc = require('@swc/core')

// export default async function API(req, res) {
//   //

//   try {
//     swc
//       .transform(
//         `
//         import react from 'react';

//       `,
//         {
//           // Some options cannot be specified in .swcrc
//           filename: 'input.js',
//           sourceMaps: true,
//           // Input files are treated as module by default.
//           isModule: false,

//           // All options below can be configured via .swcrc
//           jsc: {
//             parser: {
//               syntax: 'ecmascript',
//             },
//             transform: {},
//           },
//         },
//       )
//       .then((output) => {
//         // output.code // transformed code
//         // output.map // source map (in string)

//         console.log(output.code)
//       })
//   } catch (e) {
//     console.log(e)
//   }

//   res.json({ outputs: [] })
//   //
// }

export default async function Yop({ req, res }) {
  res.json({})
}
