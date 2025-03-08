# Benchmarking of Deep Merge Libraries Performance

Este repositório apresenta um benchmarking de diferentes bibliotecas para merge profundo de objetos em TypeScript.

## Bibliotecas testadas

- **ramda**
- **deepmerge-ts**
- **ts-deepmerge**
- **lodash.merge**
- **Custom merge** (Usando spread operators quando os campos são conhecidos)

## Resultado do Benchmark

### Case 1: Simple objects

| Biblioteca              | Iterações por segundo (hz) | Mínimo (ms) | Máximo (ms) | Média (ms) | P75 (ms) | P99 (ms) | P995 (ms) | P999 (ms) | Precisão (rme) | Amostras |
|-------------------------|-----------------------------|------------|------------|------------|---------|---------|---------|---------|---------------|----------|
| **lodash.merge**        | 1,342,803.44               | 0.0006     | 0.2384     | 0.0007     | 0.0007  | 0.0015  | 0.0016  | 0.0042  | ±0.38%       | 671402   |
| **ts-deepmerge**       | 1,086,657.49               | 0.0007     | 0.2582     | 0.0009     | 0.0009  | 0.0019  | 0.0021  | 0.0060  | ±0.40%       | 543329   |
| **deepmerge-ts**       | 434,416.57                 | 0.0019     | 0.2945     | 0.0023     | 0.0022  | 0.0042  | 0.0048  | 0.0158  | ±0.51%       | 217209   |
| **ramda.mergeDeepRight** | 1,561,579.48              | 0.0005     | 0.2640     | 0.0006     | 0.0006  | 0.0013  | 0.0014  | 0.0029  | ±0.47%       | 780790   |
| **customMerge**        | 6,000,190.84               | 0.0001     | 0.3984     | 0.0002     | 0.0002  | 0.0004  | 0.0005  | 0.0008  | ±0.44%       | 3000096  |

### Resumo

- **customMerge** é o mais rápido:
  - **3.84x** mais rápido que **ramda.mergeDeepRight**
  - **4.47x** mais rápido que **lodash.merge**
  - **5.52x** mais rápido que **ts-deepmerge**
  - **13.81x** mais rápido que **deepmerge-ts**

