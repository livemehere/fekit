import nextra from "nextra";
import { remarkSandpack } from "remark-sandpack";

const withNextra = nextra({
  contentDirBasePath: "/docs",
  defaultShowCopyCode: true,
  mdxOptions: {
    remarkPlugins: [remarkSandpack],
  },
});

// You can include other Next.js configuration options here, in addition to Nextra settings:
export default withNextra({});
