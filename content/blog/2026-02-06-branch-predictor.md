---
title: "Branch Prediction and Why Sorted Arrays Can Be Faster"
date: 2026-02-06 00:00:00 +0100
category: "Computer Science"
description: "How branch predictors, pipelines, and data patterns affect real-world performance beyond Big-O."
---

Today, while reading about computer architecture, I came across an interesting digital circuit called the Branch predictor.

Now, to understand what a branch predictor is, we must first understand what an instruction pipeline is. Instructions are processed in a fetch, decode, execute cycle, a sequence of steps, but if we are to look at modern computers, they are not purely sequential; you are able to run multiple threads in parallel.

One of the factors that makes this possible is the instruction pipeline. At its core, it is a technique for implementing instruction-level parallelism within a single processor, where the attempt is to keep every part of the processor occupied by an instruction from the fetch, decode, and execute cycle.

![Desktop View](/assets/images/instructionPipeline.png)
_Instruction Pipeline from Wikipedia_

The pipeline operates at peak efficiency when the execution is linear. But, software with its complexity, rarely follows a straight path, matter of fact, branches are a defining subject of programming.

When the CPU hits a branch, it faces the dilemma of having to wait for the current instruction to finish executing to fetch the next. Understandably, this wait would result in leaving the earlier stages of the pipeline empty, creating what is known as pipeline stall.

To prevent exactly that, Some amazing team of computer engineers created an amazing piece of technology called the **Branch Predictor**.

The branch predictor is a circuit that looks at the history of a specific branch to guess its next outcome.

If the guess is correct, the pipeline stays full and the CPU processes instructions without interruption.

Otherwise, the CPU must flush the pipeline, discarding all the instructions it fetched based on the wrong guess. It then restarts the cycle from the correct branch path.

![Desktop View](/assets/images/PIPELINE.png)
_Credits: ETH Zurich Lecture 9._

This mechanism showcases itself in a classic programming experiment: processing a sorted array versus an unsorted one.

Imagine a loop that iterates through a large array of integers and conditionally sums only the values greater than a specific threshold.

```java
package com.salmane.benchmark;

import org.openjdk.jmh.annotations.*;
import java.util.Arrays;
import java.util.Random;
import java.util.concurrent.TimeUnit;

@State(Scope.Thread)
@BenchmarkMode(Mode.AverageTime)
@OutputTimeUnit(TimeUnit.MICROSECONDS)
@Warmup(iterations = 3, time = 1)
@Measurement(iterations = 5, time = 1)
@Fork(1)
public class SortedAndUnsortedArrays {

    private int[] unsortedData;
    private int[] sortedData;

    @Setup
    public void setup() {
        int size = 36800000;
        unsortedData = new int[size];
        Random rnd = new Random(42);
        for (int i = 0; i < size; i++) {
            unsortedData[i] = rnd.nextInt(256);
        }

        sortedData = unsortedData.clone();
        Arrays.sort(sortedData);
    }

    @Benchmark
    public long testUnsorted() {
        return computeSum(unsortedData);
    }

    @Benchmark
    public long testSorted() {
        return computeSum(sortedData);
    }

    private long computeSum(int[] data) {
        long sum = 0;
        for (int datum : data) {
            sum += (datum >= 128) ? datum : 0;
        }
        return sum;
    }
}
```

Algorithmic complexity says that with the added overhead of the sorting algorithm, the computeSum method processing should be slower than the one applied on the unsorted array.

But the results reflect the contrary.

![Desktop View](/assets/images/ResultsWithBranchIf.png)
_Benchmark results using JMH._

The reason behind these results is that if the array is sorted, the data becomes highly predictable. The BP sees a recurring pattern of false and true, identifies it, and predicts correctly nearly every time.

However, if the array is unsorted, the branch predictor has no pattern to learn, essentially guessing at random, leading to frequent costly pipeline flushes.

Big O notation, although the foothold for performance is not the only factor. Mechanical sympathy plays an important role as well; building an understanding of how the code interacts with the hardware is very much a game-changer.

On that note, it seems using a ternary operator instead of an if branch gives different results, which is what I will be looking into next:

![Desktop View](/assets/images/ResultsWithTernary.png)
_Benchmark results using JMH._
