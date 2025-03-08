# Benchmarking of the deep merge libraries performance


- ramda
- deepmerge-ts
- ts-deepmerge
- lodash.merge
- Custom merge (Using spread operators when we know the fields)


## Result

 DEV  v2.1.8 /home/jesse/Documents/Projects/mp-boot/projects/benchmark-deep-merge-libraries

 ✓ src/fastest.bench.ts (5) 5705ms
   ✓ 'Case 1: Simple objects' (5) 5703ms
     name                            hz     min     max    mean     p75     p99    p995    p999     rme  samples
   · lodash.merge          1,342,803.44  0.0006  0.2384  0.0007  0.0007  0.0015  0.0016  0.0042  ±0.38%   671402
   · ts-deepmerge          1,086,657.49  0.0007  0.2582  0.0009  0.0009  0.0019  0.0021  0.0060  ±0.40%   543329
   · deepmerge-ts            434,416.57  0.0019  0.2945  0.0023  0.0022  0.0042  0.0048  0.0158  ±0.51%   217209   slowest
   · ramda.mergeDeepRight  1,561,579.48  0.0005  0.2640  0.0006  0.0006  0.0013  0.0014  0.0029  ±0.47%   780790
   · customMerge           6,000,190.84  0.0001  0.3984  0.0002  0.0002  0.0004  0.0005  0.0008  ±0.44%  3000096   fastest

 BENCH  Summary

  customMerge - src/fastest.bench.ts > 'Case 1: Simple objects'
    3.84x faster than ramda.mergeDeepRight
    4.47x faster than lodash.merge
    5.52x faster than ts-deepmerge
    13.81x faster than deepmerge-ts

