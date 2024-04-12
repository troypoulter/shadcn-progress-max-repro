"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { ProgressAfter } from "@/components/ui/progress-after";
import { ProgressBefore } from "@/components/ui/progress-before";
import { Separator } from "@/components/ui/separator";
import { CircleCheck, CircleX } from "lucide-react";
import { useEffect, useState } from "react";

export function Reproduction() {
  const [progress, setProgress] = useState(13);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(50), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col sm:flex-row gap-4 mx-auto justify-center m-6">
      <Card className="min-w-[300px] bg-red-100">
        <CardHeader>
          <CardTitle className="flex">
            <CircleX className="mr-2" color="red" /> Before Fix
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          <span className="text-sm font-semibold">
            Scenario 1: <code>max</code> defaults to 100
          </span>
          <span className="text-sm">
            <code>{`<Progress value={${progress}} />`}</code>
          </span>
          <ProgressBefore value={progress} />
          <span className="flex justify-center font-mono">{progress}/100</span>
          <Separator />
          <span className="text-sm font-semibold">
            Scenario 2: <code>max</code> set to 50
          </span>
          <span className="text-sm">
            <code>{`<Progress value={${progress}} max={50} />`}</code>
          </span>
          <ProgressBefore value={progress} max={50} />
          <span className="flex justify-center font-mono">{progress}/50</span>
          <Separator />
          <span className="text-sm font-semibold">
            Scenario 3: <code>max</code> set to 150
          </span>
          <span className="text-sm">
            <code>{`<Progress value={${progress}} max={150} />`}</code>
          </span>
          <ProgressBefore value={progress} max={150} />
          <span className="flex justify-center font-mono">{progress}/150</span>
          <Separator />
          <span className="text-sm font-semibold">
            Scenario 4: <code>max</code> set to 20
          </span>
          <span className="text-sm">
            <code>{`<Progress value={${progress}} max={20} />`}</code>
          </span>
          <ProgressBefore value={progress} max={20} />
          <span className="flex justify-center font-mono">{progress}/20</span>
        </CardContent>
      </Card>
      <Card className="min-w-[300px] bg-green-100">
        <CardHeader>
          <CardTitle className="flex">
            <CircleCheck className="mr-2" color="green" /> After Fix
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          <span className="text-sm font-semibold">
            Scenario 1: <code>max</code> defaults to 100
          </span>
          <span className="text-sm">
            <code>{`<Progress value={${progress}} />`}</code>
          </span>
          <ProgressAfter value={progress} />
          <span className="flex justify-center mt-2 font-mono">
            {progress}/100
          </span>
          <Separator />
          <span className="text-sm font-semibold">
            Scenario 2: <code>max</code> set to 50
          </span>
          <span className="text-sm">
            <code>{`<Progress value={${progress}} max={50} />`}</code>
          </span>
          <ProgressAfter value={progress} max={50} />
          <span className="flex justify-center font-mono">{progress}/50</span>
          <Separator />
          <span className="text-sm font-semibold">
            Scenario 3: <code>max</code> set to 150
          </span>
          <span className="text-sm">
            <code>{`<Progress value={${progress}} max={150} />`}</code>
          </span>
          <ProgressAfter value={progress} max={150} />
          <span className="flex justify-center font-mono">{progress}/150</span>
          <Separator />
          <span className="text-sm font-semibold">
            Scenario 4: <code>max</code> set to 20
          </span>
          <span className="text-sm">
            <code>{`<Progress value={${progress}} max={20} />`}</code>
          </span>
          <ProgressAfter value={progress} max={20} />
          <span className="flex justify-center font-mono">{progress}/20</span>
        </CardContent>
      </Card>
    </div>
  );
}
