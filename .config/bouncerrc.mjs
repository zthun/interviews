export default {
  servers: [
    {
      type: "http",
      handle: "redirect",
    },
    {
      type: "https",
      security: {
        domain: "local.zthunworks.com",
      },
      domains: {
        "interviews.local.zthunworks.com": {
          "/": "http://interview-react:5173",
          "/api": "http://interview-nest:3000",
        },
      },
    },
  ],
};
