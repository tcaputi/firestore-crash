# Symptoms

- process never completes
- CPU pegged at 100%
- crashTest document locked for several minutes (as far as transactions are concerned)

# Steps to Reproduce

1. Edit common.js to add the fields of your service account (from the json file).
2. Run the following commands

```
npm run init
npm run crash # you may need to run this several times
```

You will know the problem has occurred when `done racing transactions` never prints and the CPU is pegged.
