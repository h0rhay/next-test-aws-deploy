import { Construct } from "constructs";
import { Duration, Stack, StackProps } from "aws-cdk-lib";
import { NextJSLambdaEdge } from "@sls-next/cdk-construct";
import { Runtime } from "aws-cdk-lib/aws-lambda";

export class NextStack extends Stack {
  constructor(scope: Construct, id: string, props: StackProps) {
    super(scope, id, props);
    new NextJSLambdaEdge(this, "NextJsApp", {
      serverlessBuildOutDir: "./build",
      runtime: Runtime.NODEJS_12_X,
      memory: 1024,
      timeout: Duration.seconds(30),
      withLogging: true,
      name: {
        apiLambda: `${id}Api`,
        defaultLambda: `Fn${id}`,
        imageLambda: `${id}Image`,
      },
    });
  }
}
