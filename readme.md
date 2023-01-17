# Technical Assignment_Technical Research Assistant_ChromaWay
## Task 1  ##

Its important to consider the market volume of the NFT industry. From January 2022 to September 2022, NFT trading volume collapsed by 97 per cent, from $17 billion in value to just $466 million, according to data provided by Bitay. The rise or fall of this number is heavily dependent on the type of NFTs being purchased regularly.
The trading volume is an important factor to take this into account if you want to buy an NFT and makes the collection important. The Cumulative trading volume of NFT provides information regarding the total trades and it must increase with time.

```console
{
  marketplaces(first: 1) {
    id
    name
    slug
    network
  }
  collections(first: 10, orderBy: cumulativeTradeVolumeETH, orderDirection: desc) {
    id
    name
    symbol
    cumulativeTradeVolumeETH
  }
}
```
### Output  ###
```console
{
  "data": {
    "marketplaces": [
      {
        "id": "0x00000000006c3852cbef3e08e8df289169ede581",
        "name": "Seaport",
        "slug": "seaport",
        "network": "MAINNET"
      }
    ],
    "collections": [
      {
        "id": "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d",
        "name": "BoredApeYachtClub",
        "symbol": "BAYC",
        "cumulativeTradeVolumeETH": "101830.17427205754760402"
      },
      {
        "id": "0x34d85c9cdeb23fa97cb08333b511ac86e1c4e258",
        "name": "Otherdeed",
        "symbol": "OTHR",
        "cumulativeTradeVolumeETH": "70677.883147420768348249"
      },
      {
        "id": "0x60e4d786628fea6478f785a6d7e704777c86a7c6",
        "name": "MutantApeYachtClub",
        "symbol": "MAYC",
        "cumulativeTradeVolumeETH": "66195.989523142488520622"
      },
      {
        "id": "0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270",
        "name": "Art Blocks",
        "symbol": "BLOCKS",
        "cumulativeTradeVolumeETH": "47325.20700038959181923"
      },
      {
        "id": "0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85",
        "name": null,
        "symbol": null,
        "cumulativeTradeVolumeETH": "47140.134474603255495584"
      },
      {
        "id": "0x49cf6f5d44e70224e2e23fdcdd2c053f30ada28b",
        "name": "CloneX",
        "symbol": "CloneX",
        "cumulativeTradeVolumeETH": "35114.518855453265447664"
      },
      {
        "id": "0x23581767a106ae21c074b2276d25e5c3e136a68b",
        "name": "Moonbirds",
        "symbol": "MOONBIRD",
        "cumulativeTradeVolumeETH": "28187.966086798711108945"
      },
      {
        "id": "0xed5af388653567af2f388e6224dc7c4b3241c544",
        "name": "Azuki",
        "symbol": "AZUKI",
        "cumulativeTradeVolumeETH": "24777.983188276160388241"
      },
      {
        "id": "0x8a90cab2b38dba80c64b7734e58ee1db38b8992e",
        "name": "Doodles",
        "symbol": "DOODLE",
        "cumulativeTradeVolumeETH": "20999.754968953444444336"
      },
      {
        "id": "0x495f947276749ce646f68ac8c248420045cb7b5e",
        "name": "OpenSea Shared Storefront",
        "symbol": "OPENSTORE",
        "cumulativeTradeVolumeETH": "20583.074927913831506732"
      }
    ]
  }
```

## Task 2 - Closing price/volume for BTCUSDT using the Binance API. ##

### Prerequisite ###
You need to install node js > 14. You can skip Prerequisite if you already have node installed
### Node using [NVM](https://github.com/nvm-sh/nvm) ### 
```console
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
```
```console
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```
```console
nvm install 16
```
## Project Setup  ##

```console
npm i
npm start 
```
### Output ###

I am fetching data from [Binance API](https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=30)
and using apex charts to plot data. After running project **please open http://localhost:3000 in your browser** 
![Alt text](./result.png?raw=true "Title")