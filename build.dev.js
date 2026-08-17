import esbuild from 'esbuild';

async function build() {
  try {
    const context = await esbuild.context({
      entryPoints: ['./src/index.ts'],
      bundle: true,
      outdir: './dist',
      platform: 'node',
      target: 'es2022',
      format: 'esm',
      sourcemap: true,
      minify: false,
      logLevel: 'info',
    });

    await context.watch();
    console.log('Watching for changes...');
  } catch (error) {
    console.error('Build error:', error);
    process.exit(1);
  }
}

build();
