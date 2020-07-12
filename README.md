# generate-eth-address
This action generates an Ethereum address using a given source data value.

## Inputs

### `data`

**Required** Source data to use when generating the address. Input value is tipically a public key.

## Outputs

### `address`

The generated Ethereum address.

# Usage
```yaml
- name: Generate Ethereum Address
  uses: actions/hello-world-javascript-action@v1
  id: ethgen # Later used for reading the output
  with:
    data: '...PUBLIC-KEY...'
# Use the output from the `ethgen` step
- name: Print Gernerated Address
  run: 'echo \"Ethereum address: ${{ steps.ethgen.outputs.address }}"'
```

# License
The scripts and documentation in this project are released under the [MIT License](LICENSE)