export default {
  domains: [
    {
      host: "interviews.local.zthunworks.com",
      paths: {
        "/": "interview-react:5173",
        "/api": "interview-nest:3000/api",
      },
    },
  ],
};
