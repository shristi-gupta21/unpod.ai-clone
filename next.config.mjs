export default {
  swcMinify: true,
  compiler: {
    styledComponents: {
      ssr: true,
      displayName: true,
      fileName: true,
      transpileTemplateLiterals: true,
      minify: true,
      pure: true,
      cssProp: true,
    },
  },
};
