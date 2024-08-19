import { rest } from "msw";

const mockData = [
  {
    user: {
      id: "user1",
      name: "John Doe",
      profilePic: "https://example.com/user1.jpg",
    },
    messages: [
      {
        id: "msg1",
        senderId: "user1",
        text: "Hey, how are you?",
        createdAt: new Date("2022-01-01T12:00:00Z"),
      },
      {
        id: "msg2",
        senderId: "user1",
        text: "Did you get my email?",
        createdAt: new Date("2022-01-02T12:00:00Z"),
      },
    ],
  },
  {
    user: {
      id: "admin",
      name: "Admin",
      profilePic: "https://example.com/admin.jpg",
    },
    messages: [],
  },
];


export const handlers = [
  rest.get("/api/evaluate", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockData));
  }),
];