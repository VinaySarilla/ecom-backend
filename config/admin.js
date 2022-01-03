module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '78f06f15bea354f877dc7ec5f99a6204'),
  },
});
