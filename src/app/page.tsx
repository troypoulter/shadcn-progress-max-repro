import { Icons } from "@/components/icons";
import {
  PageHeader,
  PageHeaderHeading,
  PageHeaderDescription,
  PageActions,
} from "@/components/page-header";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Reproduction } from "./_components/Reproduction";

export default function Home() {
  return (
    <main className="flex-1 h-full container relative">
      <PageHeader>
        <PageHeaderHeading>
          shadcn/ui <code>{"<Progress />"}</code> max reproduction
        </PageHeaderHeading>
        <PageHeaderDescription>
          A reproduction of the progress bar issue, where the max does not work
          if it isn&apos;t 100
        </PageHeaderDescription>
        <PageActions>
          <Link
            target="_blank"
            rel="noreferrer"
            href="https://github.com/shadcn-ui/ui/pulls/123"
            className={cn(buttonVariants())}
          >
            <Icons.gitHub className="mr-2 h-4 w-4" />
            GitHub PR (#123)
          </Link>
          <Link
            target="_blank"
            rel="noreferrer"
            href="https://github.com/shadcn-ui/ui/issues/3082"
            className={cn(buttonVariants({ variant: "outline" }))}
          >
            <Icons.gitHub className="mr-2 h-4 w-4" />
            GitHub Issue (#3082)
          </Link>
        </PageActions>
      </PageHeader>
      <Separator />
      <Reproduction />
    </main>
  );
}
