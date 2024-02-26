module.exports = {
  apps: [
    {
      name: 'vylo',
      watch: false,
      max_memory_restart: '1000M',
      interpreter: 'node@20.10.0',
      cwd: './',
      script: './.output/server/index.mjs',
      args: 'start',
      interpreter_args: '--harmony',
      error_file: './pm2-error.log',
      env: {
        PORT: 3052,
        NODE_ENV: 'development',
      },
      env_production: {
        PORT: 3052,
        NODE_ENV: 'production',
      },
    },
  ],
};
