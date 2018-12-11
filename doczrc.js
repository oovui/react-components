
export default {
  title: 'React components',
  description: 'Oovui react components docs site',
  src:'./docs-site',
  dest: '/docs-dist',
  //base:"/"
  //propsParser:false,
  files: '**/*.{markdown,mdx}',
  codeSandbox: false,
  themeConfig: {
    colors: {
      primary: 'tomato',
    },
    styles: {
      h1: {
        fontSize: 32,
      },
      h2: {
        fontSize: 22,
      },
      h3: {
        fontSize: 18,
      },
      h4: {
        fontSize: 16,
      },
      h5: {
        fontSize: 14,
      },
    },
  }

}