import { CodegenConfig } from '@graphql-codegen/cli';


const config: CodegenConfig = {
    schema: 'http://localhost:7878/graphql',
    documents: ['src/**/*.ts', 'src/**/*.tsx'],
  generates: {
    './src/apollo/__generated__/': {
      preset: 'client',
      plugins: [],
      presetConfig: {
        gqlTagName: 'gql',
      },
    },
  },
  ignoreNoDocuments: true,

};


export default config;