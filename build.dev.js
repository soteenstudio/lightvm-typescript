import esbuild from 'esbuild';

async function build() {
  try {
    await esbuild.build({
      entryPoints: ['./src/index.ts'],
      bundle: true,
      outdir: './dist',
      platform: 'node',
      target: 'es2022',
      format: 'esm',
      sourcemap: true,
      minify: true,
      logLevel: 'info',
    });
    console.log('Build success');
  } catch (error) {
    console.error('Build error:', error);
    process.exit(1);
  }
}

build();
