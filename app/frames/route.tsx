import { frames } from "./frames";
import { Button } from "frames.js/next";

const handleRequest = frames(async (ctx) => {
  return {
    image: `${process.env.NEXT_PRIVATE_GATEWAY}/QmVqNJW8zFaPDh86vhtmw1xnPvToN9oS1JH6Y91SpAMapG`,
    buttons:
      [
        <Button action="post" target="/welcome">
          Let's get started.
        </Button>,
        <Button action="post_redirect" target='/results'>idealite.xyz</Button>

      ]
  };
});

export const GET = handleRequest;
export const POST = handleRequest;
