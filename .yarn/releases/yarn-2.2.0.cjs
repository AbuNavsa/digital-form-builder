module.exports = (() => {
  var __webpack_modules__ = {
      80150: (e, t, r) => {
        "use strict";
        r.r(t), r.d(t, { default: () => g });
        var n = r(5624);
        const i = { optional: !0 },
          A = [
            [
              "@samverschueren/stream-to-observable@*",
              { peerDependenciesMeta: { rxjs: i, zenObservable: i } },
            ],
            [
              "any-observable@<0.5.1",
              { peerDependenciesMeta: { rxjs: i, zenObservable: i } },
            ],
            ["@pm2/agent@<1.0.4", { dependencies: { debug: "*" } }],
            ["debug@*", { peerDependenciesMeta: { "supports-color": i } }],
            [
              "got@<11",
              {
                dependencies: {
                  "@types/responselike": "^1.0.0",
                  "@types/keyv": "^3.1.1",
                },
              },
            ],
            [
              "cacheable-lookup@<4.1.2",
              { dependencies: { "@types/keyv": "^3.1.1" } },
            ],
            [
              "http-link-dataloader@*",
              { peerDependencies: { graphql: "^0.13.1 || ^14.0.0" } },
            ],
            [
              "typescript-language-server@*",
              {
                dependencies: {
                  "vscode-jsonrpc": "^5.0.1",
                  "vscode-languageserver-protocol": "^3.15.0",
                },
              },
            ],
            [
              "postcss-syntax@*",
              {
                peerDependenciesMeta: {
                  "postcss-html": i,
                  "postcss-jsx": i,
                  "postcss-less": i,
                  "postcss-markdown": i,
                  "postcss-scss": i,
                },
              },
            ],
            [
              "jss-plugin-rule-value-function@<=10.1.1",
              { dependencies: { "tiny-warning": "^1.0.2" } },
            ],
            ["ink-select-input@*", { peerDependencies: { react: "^16.8.2" } }],
            ["promise-inflight@*", { peerDependenciesMeta: { bluebird: i } }],
          ];
        let o, s, a;
        const c = new Map([
            [
              n.structUtils.makeIdent(null, "fsevents").identHash,
              function () {
                return (
                  void 0 === o &&
                    (o = r(78761)
                      .brotliDecompressSync(
                        Buffer.from(
                          "G8AcICwLeENqnk8o74LOyiZCqCn+nfkoHoOW2Wy/ZaLbawoJug0vEah6g6y0zM2VGKAGUXjpuyyX/35emYdTZ6IKvYYekxabWJ1MJUiPj18N39noRCXSRrg4d2/37WX2X0qjlXq3R++KiYujNAsyg/RYlEBIhMIYluF015kiMUIInfP/zLRSUC4vdAA5Hz54RWXtId4PIrS/APSpqXY7WSjFrGFx1NpG7a1wkmKkqQ3t1AEgHU4ayRIZccu55KrViKVdWamBsYZElYvL+xzjdHr7IAf3XDhHh294rE87BITNRj4i4r7zsis3y1dyzswVF4ICvCQhRQ44dvdWLhSmQW3++3Oy8IrUcOu0vcNk1UWyjgI/icHvNAC6WXkq6MXNs3+eOK1pkhb7wwvev2j5JPssZR293ExF+QYuwPyu/EKKFKCQkbYH1NZ9GlJ+DieCJ+8PFYF8renTSEr6GSJZTtzYrUIgN44cG5WnWJphIHh8mD5A6UGvfPC8RxSgpYPus/yoHw+idviDBeCWy+hxN5v2A2dDSuiz+tpLphJ01JO3IduKMVtNfr1qq/BLCqkP59S+vFP/Cof0sWbqkffhPFcl4SLIxWq1qFcKYDKzclwBBzVFiPWC7LlvMk9m8xGjaQ2R2P+BZR3anFJoyXATv0PvZnP/tioMsJJFC7f5gI9Fmy4U/LRUVo3N/OxY2a6kykxjwVvchhI5t5BdDPjYONcUTtkrzMtXFhSASbtzx7uIxYfhvs4/3mW6hKqwLBaipralUhPdfo5h4SiOic7o+oOUwl5/Aff6cyh3wEeDB4tVA79bq29MEeRfTV+Oe3fr/UhZQtkY0iE8vqSle2b58SXY0mkGmBiRjoPIkAFs1OSlJ3nSz9raEeB1ZWvJ2xiclGu1xTT6NRw3NaHU0k4R+4t0SIlltXJAW4kHj92+lB7TLjIWZfWfBNncDSYqP8jmg+jV7VyIgy/uk09ipbLdLM6Xr76rabkrZyQ3Qk8S71SEqlWRxEjWsKaELHnDeAxqaYrL0ITQr2S9xbXg0rnId4wtsQgZw21lye/up1/dTfXT+MkD5AP0i4YCh99d1V3sdxTAEDlI0nFBTjPoJwJnctqtFkgcP+Xakk36SgMSHuOZh/KUlex2NIizXmbBwicMK9s1LK6dQOqBuFZlX9lanWTwnVGuVvr3olrdhlClWC3T7S9NdfVsaYZKBDfYEZnTL7pZcKnE60KSutBZSaSgM+0BQbg1+qJHaVwb0X2Dhv70O7k7ALDJiNiA7GdsX1Ygf4ktBZv66did31wGeUm5JBJLemdjZHRa2YATgMFlye4t0hcz9ha4eXoVOc2EXHVqDdjeItztOwm7tBzcHR8Mwwb/HqtC/VKZC0IiH8TE/FE7x9SHWGUnTUNEBlucGudFTKYYlQaIjoANOgXsGLVtemCeplca3Wv1CMijvkZXTiUd8KmEZ2z6frw/kpo7gG/nDo2VkG6e+veL+scVhKDSObOXKcdtw+/Wbbw269oDLe5BLyqsR9VTc631RKspQYcCMx9M2xRKn7uZog504EXqMOPmUCHwW0yqiHxxoN+sMqYhjo/A8r4KAJ9TX7siey+38u6rhHYtDIMBKBk/lewEzgzDqFxxnqmvRK+XjeObr1axojyQobCerDLaHtzU1fwLHasuURSspKMhvR6QpWketRn2MJqMRLU0DQC0YCVLT+qeCS1LaZKQsQ0ZS1I1rKPmRjp7QQ2YDzdwpIHdTmPuBEIyIgXXiUQ/w6ZcFj4AA2ozg5zYaI5+3zGniD4ABtHXjuwGdRlRW6dngE5mECYu/0QnYwo5I6Z3KfM7BmZ/l4//i25lwXry79v/jxsAaMAc",
                          "base64"
                        )
                      )
                      .toString()),
                  o
                );
              },
            ],
            [
              n.structUtils.makeIdent(null, "resolve").identHash,
              function () {
                return (
                  void 0 === s &&
                    (s = r(78761)
                      .brotliDecompressSync(
                        Buffer.from(
                          "G1QTIIzURnVBnGa0VPvr81orV8AFIqdU0sqrdcVgCdukgAZwi8a50gLk9+19Z2NcUILjmzXkzt4dzm5a6Yoys+/9qnKiaApXukOiuoyUaMcynG4X7X4vBaIE/PL30gwG6HSGJkLxb9PnLjfMr+748n7sM6C/NycK6ber/bX1reVVxta6W/31tZIhfrS+upoE/TPRHj0S/l0T59gTGdtKOp1OmMOJt9rhfucDdLJ2tgyfnO+u4YMkQAcYq/nebTcDmbXhqhgo6iQA4M3m4xya4Cos3p6klmkmQT+S4DLDZfwfMF+sUCx36KleOtaHLQfEIz0Bmncj/Ngi3lqOl4391EWEfIss6gVp3oDUGwsSZJKeOVONJWZg+Mue3KUMV3aMqYJ+7b2219D+GFDi8EV5y/Y+5J+He0oNjKAgqLsJziEsS9uIaCu3BHBKSXxNKKa2ShbfglcWoiiVT2kfGI7Gw+YJ/Sqy1H6wdFWtyVUQIa82JPwbeV25YKLzc5ZIFM6GCPSA+J9dTvJbs5LuuKnLP3f09gCu2jxqsAv6CA+ZySVaUJr2d3A70BC/uBCKr2OVrWgC3fSwb7NlfkgSEEiejrMGvhya9lMbVI6lMsFKN330A1/FOaefHQdNGLEZ3IwFF87H3xVlM0Xxsmbi/7A60oymRcIe0tH90alG6ez/yA7jwYotxuHWZdR+1HlMcddGHAV6QD/gXYPV0wnNv47I+5FGevzZFMqWSO8GU4nQ3FjsdgdJcD+c1rvudERKuLyd7bxiBpnsMDHsvPP4nXdXkld/gUNks3GAE1Otmb90bavDyiw4Mrx496Iw+jbLTgsCZGZXSZ9vM55C7KGe4HyJAKXEk0iT/Cj/PFwLJBN7pcP7ZFfYtUApGTWKkYhI9IE2zt/5ByH72wdvH+88b71zuv/FMCX3w6x5nzhY44Cg5IYv9LeKwHuHIWgPbfgrAcUxOlKkPRdQOIDF/aBuLPJAXD+TgxCNXx4jQxeR/qlBWVikFPfEI4rXMUc4kZ2w9KbPKYRvFUag0dVlVoyUP4zfidbTXAdZF88jAckl+NHjLFCNdX7EQ1PbLSOl+P+MqgwEOCi6dxgWZ7NCwJBjWKpk1LaxwKrhZ4aEC/0lMPJYe5S8xAakDcmA2kSS86GjEMTrv3VEu0S0YGZcxToMV524G4WAc4CReePePdipvs4aXRL5p+aeN96yfMGjsiTbQNxgbdRKc+keQ+NxYIEm1mBtEO29WrcbrqNbQRMR66KpGG4aG0NtmRyZ2JhUvu0paCklRlID8PT3gSiwZrqr4XZXoBBzBMrveWCuOg7iTgGDXDdbGi8XHkQf5KXDGFUxWueu5wkSa6gMWY1599g2piQjwBKIAPt4N5cOZdFBidz2feGwEAy1j1UydGxDSCCUsh314cUIIRV/dWCheceubL2gU8CibewmP7UxmN5kN4I7zfQhPxkP0NCcei8GXQpw4c3krEzW7PR2hgi/hqqqR58UJ/ZVfWxfcH5ZKMo4itkmPK0FCGxzzIRP20lK/gz28Y03sY233KvSVWUKl9rcbX6MbHjpUG8MvNlw72p6FwTejv92zgpnCxVJnIHHZhCBxNcHF5RTveRp513hUtTHHq4BIndlytZT5xoTSYfHKqKNr4o9kcGINIz6tZSKRdtbON3Ydr9cgqxHIeisMNIsvPg/IFMZuBbSqqDLeSO5dak1cGr76FtH2PC7hs0S0Oq3GsmF1Ga4YABAMGcdPAWzTk26B7cKV91I2b0V/GYvnsEQ1YGntRqi5EQqTlgZszbV/32GuZtUF49JOA/r4jAdwUOsbPo6mNoBlJPYjM5axrZaWQf33bFsLWqiyvvDOM4x0Ng802T7cuP2a3q98GWq6yiq6q3M77hcZlOUnmryctRYmI4Hb2F5XixFohkBmySCjU+M7/WQVE5YAtnlxiUJDhFN0y1tNeMWY9E0MfZi2rQ4eC72WXjsAA==",
                          "base64"
                        )
                      )
                      .toString()),
                  s
                );
              },
            ],
            [
              n.structUtils.makeIdent(null, "typescript").identHash,
              function () {
                return (
                  void 0 === a &&
                    (a = r(78761)
                      .brotliDecompressSync(
                        Buffer.from(
                          "W86VFEVuB5UK4bko6sMmtYIRySinFtCygDfEp3qiTyMeV0XbGa83HOCIeIZOe7p527RW/UBFHvKpyWsyuZdjqLKV7SD3nGRg1IR6HFKugLT4n+nszuX08DbJRSJ7hJiW1kirjnBhtWOER/8n3aopYnuXKeh8SCWJIsVpf+DhOHGD9MwoBNVNWaxHXUwsgVcMxMPFf7JplS6RvARajjYJOdsg3CDaGPvXr3oraA1IHpAsL8Ex/fpV3S27PbPAPgCILjyO7pL4kvQ4BspS2ZaH0HAcEUVAh9NlmXEJIy1TGCRGIdXKYBiFxGMEvSikXdr/C8dXGsap+52PapFvMmY13H3V/YqFWNAFhmC2QLpljvUhtBti1P62jZnL769VIYQsogXX1WRMKfm5tYxdDKj5o9/9clUhSRZmGF17rjm5+h/Mr41Oql8lFLk9W/wY93ulOJz4UJ4HhCDgNH9Iy9fSo/HBZ7L8gWH6d73W+w+eP0mSpPEuOlEUpfNlxmMkf2vEU/mK3m3Gvo6IIy/kDNbDY9rOy1fhqIW4HhRRnip6vTtCqh8BO2pHUApo1Rc/qaApGqASxz6kxFdHfKotxxNZ2mKCgYyQBNe7fbD4CzzlKBcSD1aC+/ecbYZAlcGCCQ04fBqTHD2X5CPt0t8xXQVVyvW7D6l7GI7a3Qpfvaw7cbk9X+PTr4lzFrK2/URR71qyBdsakW1k2EOiafCfFanvmRf5RSeoHOzGhYlDCBy3exgQJHgX398QBOlIaTUcFFBPfOKghva78pbNMD4e4xAdYT3uASLfddKESVkPQnay5e55QSwYT6LQ5smX8bdw1o1sQysg1essNWHz4qUylJ5dEq7jDLRv1VQ4B30a2nAOEQKmifEbNN2YxiLNxLucNFYEM62kkjdJjkDLS2EnGNc87K8n9SkjQqCDBDni17SppnRF6XJbEmRCgk9yRVEtAk8kVfx4jUQAs42wKVQ9y+zL9s4rM0hnX0/bgCQE3/5zgnSlHMStrQ+4JO86s1HEMpPIEfNk3H2f2ccGp8nW5vnuhWh52aF/PQbX0IRkUDzeNA+09fqMxFnS8DT4jAPlAex20+oiACkVsVaRtfSDYz7d7e9N6j6mHgNDjHQFfSYmqhiAnYCS0Txw4QUBM8KtAWrJT19b8DbSNBzjOAGqJ1jVr+igsGIRNii9hifP8jGkxQCWyRBNM+gsGs5x7Q7Rs+YM1O8VaZ9eWSUuNwxuTQyhRFoua4BBQGur6IZBBT5/ePtaCu5Fk7wQ/i2tTbL145hIJMnOwQYQFKHgNfmZtoLoB6YsXfwyFUBBdV9RY5Jg3+xhKo66D0/ruAsXb8CO//pUT0fllfQicxnyQo6yVEWd5YcI5Krrx9IQRXoYBXaYW2eIkMfNKVB9eWps8JiSRFY4N2KzQ3Y3H607czQjrSPvtPiObXxlfKrwP/HSxE1yRQV9s4LO8ADkW8hcxmyppS8O+kN3BEbIUcE0XEj6BVJzI+OxiO4y+3wKdpB6n1lU1nm/Mwtlk12VaFS01cordKCPE/ORq07WmbTLsw6kLdeYCdgUJucrcdSmzcKtiG1OasKz1nPsZr3//YwpmTPZzqoh5GY2wLk5q3yVODGerZHUckBwbOB+nn7lkg6lC7+1sm+7IlvT5uNL4KSZXlkumYnmmMH+CPNrhyV1KyYwJAmPz0JYc/PX2rwzGJPcTtun6nXiC2/8QFQJgbrW2eYzIkGoZxgxuYE5xku/oNFpM8aldz7LcTWk7D58+uXU7s4texK5f8he2ENNLhn8OPw0AhSFcI6Cr+rpwF5cjtXhjZ70wcB/eTZzbp+OFkBO0tpkHUnpdNBlEyN8dWl/kkta9CG36qc21UOA5F0da7iyu4ZIv+lmF6shIscXDMy+WbebwZ8nE8jfdAwkaVPM8jjjBHpkPPcE00EbTmL6S9pSCcY+l+6itm+FLQtZyIpOHl81uI1yYN86okqfuJU5bEPgPldkZnFn3m4LSswWtj2w8pEbt7NQccXA7MMTUi6/xuzCYTtbqhkdzm2bEnRvqREgdXIVTAZ6qtpodFblUeSLKFMQi51UQfEyQgApiPpCdMFK9G2MCpfEtt0wnVQ5Sfe3q1rgpIfOm6Aj4/iKOwcqudbul/xzSKkzt5b9C6+hmtVDAFh1baaI46dZ1n+QK/yBSEsClCIy0weU64yaFgnVcIFLKR9yzyTSI3LmA2F6jAgviBdM9pgRWOtADMHvfGNJfExBtICQ6KgRjh5xM2cvliHxLsCIsgb9HhezhMsZJlspiqXbQVNfVD4k7sqVhoOYRgiRO8wQCYYHQ0Hz/JhckHbbv6yj7wWjn8P2VUDYPteDMZw0eX3JcQqv577HTPVF0DtHKTahw9DzPIQ4K9UlqA19w8p72ZemLg1bA1OEia1PDd8hJphNdZaASEj73mNcJ12pFme3THNPvF/u0Zi4TTRuuUK9ae/0H9AwL4t/iqtar3VT3hsuzrUGSd3X1SyiUw6pBt9uoDiP2LensiC9voTWKKm2jpN2GOtJ5Yx6Ug2r60iIrVT/fxEWW+Yl0RrjarDNrwraA9+pqelaSqyLBDaW2U9qtqHl3QYUZf2PF2tQVabOZKgc3ril90aXWypUhHOXT7kNzv6Jx1QIS04gHo1aPO/VBn/Mvx5Aw7GPVVB0t4pfZOEJKm82akLCJZl7a/Bwv5GQq9DWYRn1o0Ld0YhQifUSVaiZuhz35Nzl8qqRbe1vsy9iUd0VT1vHQT4CJeeOVVe5vq6s0bZ5xZmbLQavRNGgSUI5Jbtn2Qol5wiPX7smq1bRLmAGHwXe9d8pr0wRD1PYl73e8heuco8gZe1+L4zPGXMwjPvAyj2qqo5UyUDWaLB5+I1vCu+FBe4PL5pUk6Ts/UvldvVCMK+xW7iYxSoAKpZi4pP1A3lbYW3fQNgKb/rjDfaXlfvd4lNn9AsQIMn0Jku+NSSctDsgZaNUM7bGKgxu6NbSJO0rao0xJ7EnadTC3dr9YFud/HOCQQGzO6ijafKDjubo3vU6PE/zZcntldGfS6Hm+GhCV6fBRhtq9nrpOdTscGGRaqFJJusnWyQu47hkq3kISlkfCWb5J4SPR8e6iFjxXjncoOgSICJMMGMC8Mxjxiq3AICBMzeQmL2F5SpTy9pncKajEvbXCACMo9JQUy0QFLM3HOzyj7kqe3f7Nb7XrRvvXIYEQgexrI8DpzxWXu0WACij0r1cmIlKank7hErOao8AABawygzccmg8OOafcC6At80FvRc8UHHPHQFIAdccM832vgoAzvm+j9/e/370ebjucnAs+OYfs/fmRQ1+Y+U49hGY0GTgFpwCtzFplVsAQMJZ2v1VYTlRaS5rb+PMXSZmf40AgF2cwcY/YiaCdJeY9zrPSB/43cARmqy2ivXVnGnj2y4DAOCcyceWAF3IWWtcTUK//ZkUUK1I/jZ7BQbVAuN31xdc+DH7XNL+qdc6zR5/4BTHk72vcmKMb/tbAIDTqLLRhHpglQz/coLsh0uzuMJVFevfZlemUdWs2v5rBADECoCaapwyueG2Lo5Zgu7HUsZpZfjekMwiELQFAAJgS4YJtnftdhprqvzoEgBINxzqJdfXORTq1Dc6r7YyfN8n3NaH2AIAhHI8li9cAy6R9riYqYJrPmoEAMK5MNI4JQI+QJqH5L32tM3OboIZvse8CgDCGdZC4wIPdkK6cvjkty7d2snJZsd9nzCMD7MFAJrIFmMyXGC6b3+qrBRMeCMA4HYyz/gEDQ0z+it6welQWnv8QEXBVIxk9yva1ocyAADu2nwqjaPszn4mA+uaMNDYb58G9/xh70XKbaSLKT4aq+Y26X4BWZ7kt75CaX34FgDgbifPpHGUmmxwRWMtjonGXjsXcnO0+TATALBLqc1UZtXX1to/rcvZNrEM/0Qai1DgFgAIIVIqI6wKSHG0Ie3r5OZoPrgEANadwX1JyCSRDuHDgefBdHIZvhMxgVsAIAZSSW2IsJ0UoSHtcnITmg82AQC5E9uh/Vg9o3FHapRr+opidtdhXwUA5QzrTph+HJLmlra9N9Vetbd+c/0sGstgGB96CwA0lF2lN5wGA3EXGD5qBACE5IdDnuKVDFo4SJtKeyRX+W3raiToz1HdYH6k3uf6/wN2qXv96xHeTQ6pF7EYk9Bk7ei6SBkEGAQaHSx5p4CIgStvQkJ26he89TBtlO3m52CLg6gGXen1Swf/P35j+hut+ra3zORvR4GPgKGSrA+AzOJ3FPhMkrXMtn4LO1jtvK+Yms+3Ao93KxZvI+Nym8+iYg+FrvVrdM4StRaL248PSz6hZo8MyYkj4JDO3BigGsgtXifQp3lX++8P/fvRfdt4A70FNR7O2tz3atPUaU5TfoSEMEwy1Ju4Al9VbziDeNvvwscvrb0MRmOoBv6PEml4vV9f8U/qGoEdvqGiQwMezz4rRi5TYKjNSL/OeNaOGF8nGyc0AtNdgTk5nQvvDZlpq6E7RpbCLmNfbf2FGKQ3bVMbiKohuLUZQ1QMLQXeXdvAgRY6xtWoArpjKcnwv5OwGFkhUscJzqN1w7xHtIEDIj2/R8VZPVJ/z4IRAus56Osd3XjiI/6+uiTaUw3hEmk943OseTHS2IAOSw5PIt/Rtxnu7PhUf/9+Xypsp3b58y64oAEKlhyU+8RIo3Q6EVISwjTt3lkJUSVsoslllJ2nP0KT8iYm1ZLADGNX1mXcz3wRMIrxYT9FGjJjab8GH4uoY1XkkHnbl9n0ABt5EDJ0+BD+toVDZHpSPsmJXgzfiQi9a0/BgOf4DhuR0sXiEfLIzr0J3T+C+fMhJ1Pe45Pqfy4+9M3jNT9iI47Gd214GUM0A1QB2rkmS0KOMMIjjf9ERe5/+a8ekwaXQ6Zkp/gtihLCuscRsw+jodGc7M22CS77XYDnY89E33nXog1eJp+kE1J7RS7NkyJk25jUXAk1Xi+3B/s/EZvIkyHTpreLFuzibpRyqltH71o+Zhnsz+fYKRmmF5VQrP54tIBK6J9YYgIrv+BGHYxqkiYyQDf7cWzFjWrxXDRtN677187KT1t3bwXLOJnk7S+gmAPHi4SpsV9aWFbCa8/TGnvVk72+JcCMUManxbflw2/6U58sQJglk1hUdkCos3h1JGOm/7BNwsXzZQ3eZH3hZgFcOgWeYZxZhBDLAlb6DhHLy8B0DdAMyvevbOGEbMESRg5xJaA5mGtKlx/LYllt4WS+nmch1KcWD1Ql0m014Z3hcbjO8jhc/SL0cYg+DtEZH+njEH0s5syPob4SbNn5dBuB/5qxDyW7nZFdLDK1I4lfufpmfFukyQGO9c8xeC5v02fIStLDHITEDIj1COr5qSmgbOU8Vdm3ZlKl2130ml3Ac7o7rwKje2wQIuyaZvCt0gfTJ0se4KZlh/lzuAFk3WsKQdoVIR9vAxVIRdkSLBJ7lv80R/QwXz//7ygvy6Am+wloa7O+2oR6Gufgxhy0Y6E2ymMZgfr4awdx/hMDXFKz36TEV+JjkdE7pkUNWLknPblVZMomMcIu/vnnqLssi4sZuYTTpFtsvadPBxOu/fxH09MeV5ncszx8d1pGXXs+1e/vihbJ5All7JNyafRsottNNfnU6nhkrL3+M6OsyX32WTfvkFE0YbhrOcGuZJ6Pka/yySxUsDdozlNmPlj3Do1cl7Q8WlzLF7vW5ZmCoUJzXIkfESJYMvQiAgY4cFuTGhycIYvsEN4hxJ5HdVNLc8nX4oEtv02p04a/bEaUqLV09LfsaTs2wnDAP96W4iuKeNeEexa4cGV8x7YvwI3j8/aK0vHwlSlijzRGaFvMnaGqQ18CBsZ0vpgyasLbBkyzvrWcyFrSdr8QGipAx3yb34P78l6hdUbOFMY0juaUqiXWKvKwPLO9ZQCAJTho9hZeFrxXO1nyfjQBAHKFXiqXqaJeSWCLLgZWv6ZvlnQRYP+aJuZQ3oA1+g5IyXtr316jZ7IzxsycEl5iDdNYedVlAKBBAvxIex2b9mofjfFJXkUTABi+rayWyjeoUrmiQC6dKq7Yp6Gx3ZWeAlQQILe+zcurmG8aHkNTHG/vUgEYU1Mc4OC+zX0Mn95jPZ6mGMZYmlNillhjaExabRkA0JIHXrnFwgxe1o5gwatoAgAOrkwvlbOpMloZgKS8NMnyWdjyJ6LniG562F+ci105KZHlgkYU/XkUwtW2nLjVygCALa4i1L+cQMb/JfPonCvA8naAqtjl78yHC9Qj4m5Y/h/4+RKL0/hetAZMSKBCHazJ90dIGwPqYbk6npyn3AN+MXbQdJbZThmpzkEVbCqGH7SlX+4FMt4vcLE1Lf6aGGE1zxma+UYkee8YXXpFu+WIt4pVwlE5P/1CQojzllx/U/iQQeGcERZp0r+D9Z1GRjwIaTHWj1Gqe5F1xxa+MEEKLGdn30/UeW4fKcNL1YKF1bZErJGUuaUrlBQqX8VcKLVci7i8PRtPqUyv58oCShBbH53QOAonTF//KrgkyxSuOydltdPsOZi25iUTJUtRYGjdGcEiD8djP7guiWZFDc8eKf7ddJ3FazUJDlLdHLZlyyKl0KhFRZYbCk26zMvlkV1oteN79GIPnkXMcesPjJLe0TizLMLczKNHmdP59DgLjBna8+zAnZM61QmX1nkXAVFOVO3w72z4Q20tLR8dMLzjwO5gbl2WXbR/cMe6ioDGfkPYd/RtU2R4DYwi4jHoPzRDKzzdnpiz8BDZaRAcn3/IwAi/EaIMiYNplKckdCWmF+U2mkd6WGNndq7advPLlUB1EG8yOYdZF+DT7O7Hgn+tT6wFWFqIsoE+A4UN8Nx59S1O+VwvwTLlr2egMzmVrEeqXDWi6G/7WQYAxFVP8FeEPVBp8QX26rfZO6Lm1ry8A4u/lwkAdEwN3ZeBHfbwf9wZWPvg5zw2JGIcq/VKqZcrk0+ZiBPrftdddGcv9rbkhmdf1ofBzfnLekHLuOBlIG7Lu/U1mWzfU5JU6w43ZX0aTk5mey/YS/Pt0I3cD5/NU+M+Olrr4Mau3ld/bkcsoEp+aZm0Z/mycR9lblg7QT2IZg29+4ey7dp53QtHjkyhhsLaw608Yv97z4BnT/n9EE4GvXNMo5zhNXzJ++n/l/kEWsuXXhXjx974+++Ld3Y0NVJnvtWI1Dw51GgYi93jDH/ROzobNTUE9yWxQBiJNTfGOOlR0d/+/mvVdIplKiy0b4Ucbi+rJzTGgPVtZfTu5O8y/40vG52N+zLPfM7vqDwyL+1o+LptWCNLrTUrQfZL5PcrUl35qyvDyYFSvS7vqDJVUStlaflHhMHvCHRhLr525DiAKHasTy+5Ub+sG/NFiJngMgAwQ5xDhPnfn7TpyGa/PUWcHdIEACgSnrz7CZDwPkcJACaDWkLkTK6KYk3lNDmSIJTH90ZcqKgbU2PB5meHZm6C1BsfRuUAzA0BqCTNC1/7PHG7/K6FBVjfOkRO9aOJSjkAc0fAKgP3wl/T5SU9uta9pdOJ5iH3esBtEmn+fFvVV0TczmfLAECbFMNDhBtUqAou+u0J4uqAJgCQoLY8anp0z7Vi2CQAgAg=",
                          "base64"
                        )
                      )
                      .toString()),
                  a
                );
              },
            ],
          ]),
          g = {
            hooks: {
              registerPackageExtensions: async (e, t) => {
                for (const [e, r] of A)
                  t(n.structUtils.parseDescriptor(e, !0), r);
              },
              getBuiltinPatch: async (e, t) => {
                var r;
                if (!t.startsWith("compat/")) return;
                const i = n.structUtils.parseIdent(t.slice("compat/".length)),
                  A =
                    null === (r = c.get(i.identHash)) || void 0 === r
                      ? void 0
                      : r();
                return void 0 !== A ? A : null;
              },
              reduceDependency: async (e, t, r, i) =>
                void 0 === c.get(e.identHash)
                  ? e
                  : n.structUtils.makeDescriptor(
                      e,
                      n.structUtils.makeRange({
                        protocol: "patch:",
                        source: n.structUtils.stringifyDescriptor(e),
                        selector: `builtin<compat/${n.structUtils.stringifyIdent(
                          e
                        )}>`,
                        params: null,
                      })
                    ),
            },
          };
      },
      10420: (e, t, r) => {
        "use strict";
        r.r(t), r.d(t, { default: () => h });
        var n = r(36370),
          i = r(95397),
          A = r(5624),
          o = r(93103);
        class s extends i.BaseCommand {
          constructor() {
            super(...arguments), (this.quiet = !1), (this.args = []);
          }
          async execute() {
            const e = [];
            this.pkg && e.push("--package", this.pkg),
              this.quiet && e.push("--quiet");
            const t = A.structUtils.parseIdent(this.command),
              r = A.structUtils.makeIdent(t.scope, "create-" + t.name);
            return this.cli.run([
              "dlx",
              ...e,
              A.structUtils.stringifyIdent(r),
              ...this.args,
            ]);
          }
        }
        (0, n.gn)(
          [o.Command.String("-p,--package")],
          s.prototype,
          "pkg",
          void 0
        ),
          (0, n.gn)(
            [o.Command.Boolean("-q,--quiet")],
            s.prototype,
            "quiet",
            void 0
          ),
          (0, n.gn)([o.Command.String()], s.prototype, "command", void 0),
          (0, n.gn)([o.Command.Proxy()], s.prototype, "args", void 0),
          (0, n.gn)([o.Command.Path("create")], s.prototype, "execute", null);
        var a = r(27122),
          c = r(40376),
          g = r(56537),
          l = r(46009);
        class u extends i.BaseCommand {
          constructor() {
            super(...arguments), (this.quiet = !1), (this.args = []);
          }
          async execute() {
            return (
              (a.VK.telemetry = null),
              await g.xfs.mktempPromise(async (e) => {
                const t = l.y1.join(e, "dlx-" + process.pid);
                await g.xfs.mkdirPromise(t),
                  await g.xfs.writeFilePromise(
                    l.y1.join(t, "package.json"),
                    "{}\n"
                  ),
                  await g.xfs.writeFilePromise(l.y1.join(t, "yarn.lock"), "");
                const r = l.y1.join(t, ".yarnrc.yml"),
                  n = await a.VK.findProjectCwd(
                    this.context.cwd,
                    l.QS.lockfile
                  ),
                  o = null !== n ? l.y1.join(n, ".yarnrc.yml") : null;
                null !== o && g.xfs.existsSync(o)
                  ? (await g.xfs.copyFilePromise(o, r),
                    await a.VK.updateConfiguration(t, (e) => {
                      const t = {
                        ...e,
                        enableGlobalCache: !0,
                        enableTelemetry: !1,
                      };
                      return (
                        Array.isArray(e.plugins) &&
                          (t.plugins = e.plugins.map((e) => {
                            const t = "string" == typeof e ? e : e.path,
                              r = l.cS.isAbsolute(t)
                                ? t
                                : l.cS.resolve(l.cS.fromPortablePath(n), t);
                            return "string" == typeof e
                              ? r
                              : { path: r, spec: e.spec };
                          })),
                        t
                      );
                    }))
                  : await g.xfs.writeFilePromise(
                      r,
                      "enableGlobalCache: true\nenableTelemetry: false\n"
                    );
                const s = void 0 !== this.pkg ? [this.pkg] : [this.command],
                  u = A.structUtils.parseDescriptor(this.command).name,
                  h = await this.cli.run(["add", "--", ...s], {
                    cwd: t,
                    quiet: this.quiet,
                  });
                if (0 !== h) return h;
                this.quiet || this.context.stdout.write("\n");
                const f = await a.VK.find(t, this.context.plugins),
                  { project: p, workspace: C } = await c.I.find(f, t);
                if (null === C) throw new i.WorkspaceRequiredError(p.cwd, t);
                return (
                  await p.restoreInstallState(),
                  await A.scriptUtils.executeWorkspaceAccessibleBinary(
                    C,
                    u,
                    this.args,
                    {
                      cwd: this.context.cwd,
                      stdin: this.context.stdin,
                      stdout: this.context.stdout,
                      stderr: this.context.stderr,
                    }
                  )
                );
              })
            );
          }
        }
        (u.usage = o.Command.Usage({
          description: "run a package in a temporary environment",
          details:
            "\n      This command will install a package within a temporary environment, and run its binary script if it contains any. The binary will run within the current cwd.\n\n      By default Yarn will download the package named `command`, but this can be changed through the use of the `-p,--package` flag which will instruct Yarn to still run the same command but from a different package.\n\n      Also by default Yarn will print the full install logs when installing the given package. This behavior can be disabled by using the `-q,--quiet` flag which will instruct Yarn to only report critical errors.\n\n      Using `yarn dlx` as a replacement of `yarn add` isn't recommended, as it makes your project non-deterministic (Yarn doesn't keep track of the packages installed through `dlx` - neither their name, nor their version).\n    ",
          examples: [
            [
              "Use create-react-app to create a new React app",
              "yarn dlx create-react-app ./my-app",
            ],
          ],
        })),
          (0, n.gn)(
            [o.Command.String("-p,--package")],
            u.prototype,
            "pkg",
            void 0
          ),
          (0, n.gn)(
            [o.Command.Boolean("-q,--quiet")],
            u.prototype,
            "quiet",
            void 0
          ),
          (0, n.gn)([o.Command.String()], u.prototype, "command", void 0),
          (0, n.gn)([o.Command.Proxy()], u.prototype, "args", void 0),
          (0, n.gn)([o.Command.Path("dlx")], u.prototype, "execute", null);
        const h = { commands: [s, u] };
      },
      61736: (e, t, r) => {
        "use strict";
        r.r(t), r.d(t, { suggestUtils: () => n, default: () => Oe });
        var n = {};
        r.r(n),
          r.d(n, {
            Modifier: () => A,
            Strategy: () => o,
            Target: () => i,
            applyModifier: () => D,
            extractDescriptorFromPath: () => k,
            extractRangeModifier: () => b,
            fetchDescriptorFrom: () => N,
            findProjectDescriptors: () => S,
            getModifier: () => Q,
            getSuggestedDescriptors: () => M,
          });
        var i,
          A,
          o,
          s = r(27122),
          a = r(36370),
          c = r(95397),
          g = r(28148),
          l = r(62152),
          u = r(92659),
          h = r(40376),
          f = r(15815),
          p = r(5624),
          C = r(93103),
          d = r(61899),
          I = r(33720),
          E = r(46611),
          m = r(46009),
          B = r(56537),
          w = r(53887),
          y = r.n(w);
        function Q(e, t) {
          return e.exact
            ? A.EXACT
            : e.caret
            ? A.CARET
            : e.tilde
            ? A.TILDE
            : t.configuration.get("defaultSemverRangePrefix");
        }
        !(function (e) {
          (e.REGULAR = "dependencies"),
            (e.DEVELOPMENT = "devDependencies"),
            (e.PEER = "peerDependencies");
        })(i || (i = {})),
          (function (e) {
            (e.CARET = "^"), (e.TILDE = "~"), (e.EXACT = "");
          })(A || (A = {})),
          (function (e) {
            (e.KEEP = "keep"),
              (e.REUSE = "reuse"),
              (e.PROJECT = "project"),
              (e.LATEST = "latest"),
              (e.CACHE = "cache");
          })(o || (o = {}));
        const v = /^([\^~]?)[0-9]+(?:\.[0-9]+){0,2}(?:-\S+)?$/;
        function b(e, { project: t }) {
          const r = e.match(v);
          return r ? r[1] : t.configuration.get("defaultSemverRangePrefix");
        }
        function D(e, t) {
          let {
            protocol: r,
            source: n,
            params: i,
            selector: A,
          } = p.structUtils.parseRange(e.range);
          return (
            y().valid(A) && (A = `${t}${e.range}`),
            p.structUtils.makeDescriptor(
              e,
              p.structUtils.makeRange({
                protocol: r,
                source: n,
                params: i,
                selector: A,
              })
            )
          );
        }
        async function S(e, { project: t, target: r }) {
          const n = new Map(),
            A = (e) => {
              let t = n.get(e.descriptorHash);
              return (
                t ||
                  n.set(
                    e.descriptorHash,
                    (t = { descriptor: e, locators: [] })
                  ),
                t
              );
            };
          for (const n of t.workspaces)
            if (r === i.PEER) {
              const t = n.manifest.peerDependencies.get(e.identHash);
              void 0 !== t && A(t).locators.push(n.locator);
            } else {
              const t = n.manifest.dependencies.get(e.identHash),
                o = n.manifest.devDependencies.get(e.identHash);
              r === i.DEVELOPMENT
                ? void 0 !== o
                  ? A(o).locators.push(n.locator)
                  : void 0 !== t && A(t).locators.push(n.locator)
                : void 0 !== t
                ? A(t).locators.push(n.locator)
                : void 0 !== o && A(o).locators.push(n.locator);
            }
          return n;
        }
        async function k(e, { cwd: t, workspace: r }) {
          return await (async function (e) {
            return await B.xfs.mktempPromise(async (t) => {
              const r = s.VK.create(t);
              return (
                r.useWithSource(
                  t,
                  { enableMirror: !1, compressionLevel: 0 },
                  t,
                  { overwrite: !0 }
                ),
                await e(
                  new g.C(t, { configuration: r, check: !1, immutable: !1 })
                )
              );
            });
          })(async (n) => {
            m.y1.isAbsolute(e) ||
              (e = m.y1.relative(r.cwd, m.y1.resolve(t, e))).match(
                /^\.{0,2}\//
              ) ||
              (e = "./" + e);
            const { project: i } = r,
              A = await N(p.structUtils.makeIdent(null, "archive"), e, {
                project: r.project,
                cache: n,
                workspace: r,
              });
            if (!A)
              throw new Error(
                "Assertion failed: The descriptor should have been found"
              );
            const o = new I.$(),
              s = i.configuration.makeResolver(),
              a = i.configuration.makeFetcher(),
              c = {
                checksums: i.storedChecksums,
                project: i,
                cache: n,
                fetcher: a,
                report: o,
                resolver: s,
              },
              g = s.bindDescriptor(A, r.anchoredLocator, c),
              l = p.structUtils.convertDescriptorToLocator(g),
              u = await a.fetch(l, c),
              h = await E.G.find(u.prefixPath, { baseFs: u.packageFs });
            if (!h.name) throw new Error("Target path doesn't have a name");
            return p.structUtils.makeDescriptor(h.name, e);
          });
        }
        async function M(
          e,
          {
            project: t,
            workspace: r,
            cache: n,
            target: A,
            modifier: s,
            strategies: a,
            maxResults: c = 1 / 0,
          }
        ) {
          if (!(c >= 0)) throw new Error(`Invalid maxResults (${c})`);
          if ("unknown" !== e.range)
            return {
              suggestions: [
                {
                  descriptor: e,
                  name:
                    "Use " + p.structUtils.prettyDescriptor(t.configuration, e),
                  reason: "(unambiguous explicit request)",
                },
              ],
              rejections: [],
            };
          const g = (null != r && r.manifest[A].get(e.identHash)) || null,
            l = [],
            u = [],
            h = async (e) => {
              try {
                await e();
              } catch (e) {
                u.push(e);
              }
            };
          for (const u of a) {
            if (l.length >= c) break;
            switch (u) {
              case o.KEEP:
                await h(async () => {
                  g &&
                    l.push({
                      descriptor: g,
                      name:
                        "Keep " +
                        p.structUtils.prettyDescriptor(t.configuration, g),
                      reason: "(no changes)",
                    });
                });
                break;
              case o.REUSE:
                await h(async () => {
                  for (const { descriptor: n, locators: i } of (
                    await S(e, { project: t, target: A })
                  ).values()) {
                    if (
                      1 === i.length &&
                      i[0].locatorHash === r.anchoredLocator.locatorHash &&
                      a.includes(o.KEEP)
                    )
                      continue;
                    let e =
                      "(originally used by " +
                      p.structUtils.prettyLocator(t.configuration, i[0]);
                    (e +=
                      i.length > 1
                        ? ` and ${i.length - 1} other${
                            i.length > 2 ? "s" : ""
                          })`
                        : ")"),
                      l.push({
                        descriptor: n,
                        name:
                          "Reuse " +
                          p.structUtils.prettyDescriptor(t.configuration, n),
                        reason: e,
                      });
                  }
                });
                break;
              case o.CACHE:
                await h(async () => {
                  for (const r of t.storedDescriptors.values())
                    r.identHash === e.identHash &&
                      l.push({
                        descriptor: r,
                        name:
                          "Reuse " +
                          p.structUtils.prettyDescriptor(t.configuration, r),
                        reason: "(already used somewhere in the lockfile)",
                      });
                });
                break;
              case o.PROJECT:
                await h(async () => {
                  if (
                    null !== r.manifest.name &&
                    e.identHash === r.manifest.name.identHash
                  )
                    return;
                  const n = t.tryWorkspaceByIdent(e);
                  null !== n &&
                    l.push({
                      descriptor: n.anchoredDescriptor,
                      name:
                        "Attach " +
                        p.structUtils.prettyWorkspace(t.configuration, n),
                      reason: `(local workspace at ${n.cwd})`,
                    });
                });
                break;
              case o.LATEST:
                await h(async () => {
                  if ("unknown" !== e.range)
                    l.push({
                      descriptor: e,
                      name:
                        "Use " +
                        p.structUtils.prettyRange(t.configuration, e.range),
                      reason: "(explicit range requested)",
                    });
                  else if (A === i.PEER)
                    l.push({
                      descriptor: p.structUtils.makeDescriptor(e, "*"),
                      name: "Use *",
                      reason: "(catch-all peer dependency pattern)",
                    });
                  else if (t.configuration.get("enableNetwork")) {
                    let i = await N(e, "latest", {
                      project: t,
                      cache: n,
                      workspace: r,
                      preserveModifier: !1,
                    });
                    i &&
                      ((i = D(i, s)),
                      l.push({
                        descriptor: i,
                        name:
                          "Use " +
                          p.structUtils.prettyDescriptor(t.configuration, i),
                        reason: "(resolved from latest)",
                      }));
                  } else
                    l.push({
                      descriptor: null,
                      name: "Resolve from latest",
                      reason: t.configuration.format(
                        "(unavailable because enableNetwork is toggled off)",
                        "grey"
                      ),
                    });
                });
            }
          }
          return { suggestions: l.slice(0, c), rejections: u.slice(0, c) };
        }
        async function N(
          e,
          t,
          { project: r, cache: n, workspace: i, preserveModifier: A = !0 }
        ) {
          const o = p.structUtils.makeDescriptor(e, t),
            s = new I.$(),
            a = r.configuration.makeFetcher(),
            c = r.configuration.makeResolver(),
            g = {
              project: r,
              fetcher: a,
              cache: n,
              checksums: r.storedChecksums,
              report: s,
              skipIntegrityCheck: !0,
            },
            l = { ...g, resolver: c, fetchOptions: g },
            u = c.bindDescriptor(o, i.anchoredLocator, l),
            h = await c.getCandidates(u, new Map(), l);
          if (0 === h.length) return null;
          const f = h[0];
          let {
            protocol: C,
            source: d,
            params: E,
            selector: m,
          } = p.structUtils.parseRange(
            p.structUtils.convertToManifestRange(f.reference)
          );
          if (
            (C === r.configuration.get("defaultProtocol") && (C = null),
            y().valid(m) && !1 !== A)
          ) {
            m = b("string" == typeof A ? A : o.range, { project: r }) + m;
          }
          return p.structUtils.makeDescriptor(
            f,
            p.structUtils.makeRange({
              protocol: C,
              source: d,
              params: E,
              selector: m,
            })
          );
        }
        class R extends c.BaseCommand {
          constructor() {
            super(...arguments),
              (this.packages = []),
              (this.json = !1),
              (this.exact = !1),
              (this.tilde = !1),
              (this.caret = !1),
              (this.dev = !1),
              (this.peer = !1),
              (this.optional = !1),
              (this.preferDev = !1),
              (this.interactive = null),
              (this.cached = !1);
          }
          async execute() {
            var e;
            const t = await s.VK.find(this.context.cwd, this.context.plugins),
              { project: r, workspace: n } = await h.I.find(
                t,
                this.context.cwd
              ),
              A = await g.C.find(t);
            if (!n) throw new c.WorkspaceRequiredError(r.cwd, this.context.cwd);
            const a =
                null !== (e = this.interactive) && void 0 !== e
                  ? e
                  : t.get("preferInteractive"),
              I = Q(this, r),
              E = [
                ...(a ? [o.REUSE] : []),
                o.PROJECT,
                ...(this.cached ? [o.CACHE] : []),
                o.LATEST,
              ],
              m = a ? 1 / 0 : 1,
              B = await Promise.all(
                this.packages.map(async (e) => {
                  const t = e.match(/^\.{0,2}\//)
                      ? await k(e, { cwd: this.context.cwd, workspace: n })
                      : p.structUtils.parseDescriptor(e),
                    o = (function (
                      e,
                      t,
                      { dev: r, peer: n, preferDev: A, optional: o }
                    ) {
                      const s = e.manifest[i.REGULAR].has(t.identHash),
                        a = e.manifest[i.DEVELOPMENT].has(t.identHash),
                        c = e.manifest[i.PEER].has(t.identHash);
                      if ((r || n) && s)
                        throw new C.UsageError(
                          `Package "${p.structUtils.prettyIdent(
                            e.project.configuration,
                            t
                          )}" is already listed as a regular dependency - remove the -D,-P flags or remove it from your dependencies first`
                        );
                      if (!r && !n && c)
                        throw new C.UsageError(
                          `Package "${p.structUtils.prettyIdent(
                            e.project.configuration,
                            t
                          )}" is already listed as a peer dependency - use either of -D or -P, or remove it from your peer dependencies first`
                        );
                      if (o && a)
                        throw new C.UsageError(
                          `Package "${p.structUtils.prettyIdent(
                            e.project.configuration,
                            t
                          )}" is already listed as a dev dependency - remove the -O flag or remove it from your dev dependencies first`
                        );
                      if (o && !n && c)
                        throw new C.UsageError(
                          `Package "${p.structUtils.prettyIdent(
                            e.project.configuration,
                            t
                          )}" is already listed as a peer dependency - remove the -O flag or add the -P flag or remove it from your peer dependencies first`
                        );
                      if ((r || A) && o)
                        throw new C.UsageError(
                          `Package "${p.structUtils.prettyIdent(
                            e.project.configuration,
                            t
                          )}" cannot simultaneously be a dev dependency and an optional dependency`
                        );
                      return n
                        ? i.PEER
                        : r || A
                        ? i.DEVELOPMENT
                        : s
                        ? i.REGULAR
                        : a
                        ? i.DEVELOPMENT
                        : i.REGULAR;
                    })(n, t, {
                      dev: this.dev,
                      peer: this.peer,
                      preferDev: this.preferDev,
                      optional: this.optional,
                    });
                  return [
                    t,
                    await M(t, {
                      project: r,
                      workspace: n,
                      cache: A,
                      target: o,
                      modifier: I,
                      strategies: E,
                      maxResults: m,
                    }),
                    o,
                  ];
                })
              ),
              w = await l.h.start(
                {
                  configuration: t,
                  stdout: this.context.stdout,
                  suggestInstall: !1,
                },
                async (e) => {
                  for (const [n, { suggestions: i, rejections: A }] of B) {
                    if (0 === i.filter((e) => null !== e.descriptor).length) {
                      const [i] = A;
                      if (void 0 === i)
                        throw new Error(
                          "Assertion failed: Expected an error to have been set"
                        );
                      const o = this.cli.error(i);
                      r.configuration.get("enableNetwork")
                        ? e.reportError(
                            u.b.CANT_SUGGEST_RESOLUTIONS,
                            `${p.structUtils.prettyDescriptor(
                              t,
                              n
                            )} can't be resolved to a satisfying range:\n\n${o}`
                          )
                        : e.reportError(
                            u.b.CANT_SUGGEST_RESOLUTIONS,
                            `${p.structUtils.prettyDescriptor(
                              t,
                              n
                            )} can't be resolved to a satisfying range (note: network resolution has been disabled):\n\n${o}`
                          );
                    }
                  }
                }
              );
            if (w.hasErrors()) return w.exitCode();
            let y = !1;
            const v = [],
              b = [];
            for (const [, { suggestions: e }, t] of B) {
              let r;
              const i = e.filter((e) => null !== e.descriptor),
                A = i[0].descriptor,
                o = i.every((e) =>
                  p.structUtils.areDescriptorsEqual(e.descriptor, A)
                );
              1 === i.length || o
                ? (r = A)
                : ((y = !0),
                  ({ answer: r } = await (0, d.prompt)({
                    type: "select",
                    name: "answer",
                    message: "Which range do you want to use?",
                    choices: e.map(({ descriptor: e, name: t, reason: r }) =>
                      e
                        ? { name: t, hint: r, descriptor: e }
                        : { name: t, hint: r, disabled: !0 }
                    ),
                    onCancel: () => process.exit(130),
                    result(e) {
                      return this.find(e, "descriptor");
                    },
                    stdin: this.context.stdin,
                    stdout: this.context.stdout,
                  })));
              const s = n.manifest[t].get(r.identHash);
              (void 0 !== s && s.descriptorHash === r.descriptorHash) ||
                (n.manifest[t].set(r.identHash, r),
                this.optional &&
                  ("dependencies" === t
                    ? (n.manifest.ensureDependencyMeta({
                        ...r,
                        range: "unknown",
                      }).optional = !0)
                    : "peerDependencies" === t &&
                      (n.manifest.ensurePeerDependencyMeta({
                        ...r,
                        range: "unknown",
                      }).optional = !0)),
                void 0 === s ? v.push([n, t, r, E]) : b.push([n, t, s, r]));
            }
            await t.triggerMultipleHooks(
              (e) => e.afterWorkspaceDependencyAddition,
              v
            ),
              await t.triggerMultipleHooks(
                (e) => e.afterWorkspaceDependencyReplacement,
                b
              ),
              y && this.context.stdout.write("\n");
            return (
              await f.Pk.start(
                {
                  configuration: t,
                  json: this.json,
                  stdout: this.context.stdout,
                  includeLogs: !this.context.quiet,
                },
                async (e) => {
                  await r.install({ cache: A, report: e });
                }
              )
            ).exitCode();
          }
        }
        (R.usage = C.Command.Usage({
          description: "add dependencies to the project",
          details:
            "\n      This command adds a package to the package.json for the nearest workspace.\n\n      - If it didn't exist before, the package will by default be added to the regular `dependencies` field, but this behavior can be overriden thanks to the `-D,--dev` flag (which will cause the dependency to be added to the `devDependencies` field instead) and the `-P,--peer` flag (which will do the same but for `peerDependencies`).\n\n      - If the package was already listed in your dependencies, it will by default be upgraded whether it's part of your `dependencies` or `devDependencies` (it won't ever update `peerDependencies`, though).\n\n      - If set, the `--prefer-dev` flag will operate as a more flexible `-D,--dev` in that it will add the package to your `devDependencies` if it isn't already listed in either `dependencies` or `devDependencies`, but it will also happily upgrade your `dependencies` if that's what you already use (whereas `-D,--dev` would throw an exception).\n\n      - If set, the `-O,--optional` flag will add the package to the `optionalDependencies` field and, in combination with the `-P,--peer` flag, it will add the package as an optional peer dependency. If the package was already listed in your `dependencies`, it will be upgraded to `optionalDependencies`. If the package was already listed in your `peerDependencies`, in combination with the `-P,--peer` flag, it will be upgraded to an optional peer dependency: `\"peerDependenciesMeta\": { \"<package>\": { \"optional\": true } }`\n\n      - If the added package doesn't specify a range at all its `latest` tag will be resolved and the returned version will be used to generate a new semver range (using the `^` modifier by default unless otherwise configured via the `defaultSemverRangePrefix` configuration, or the `~` modifier if `-T,--tilde` is specified, or no modifier at all if `-E,--exact` is specified). Two exceptions to this rule: the first one is that if the package is a workspace then its local version will be used, and the second one is that if you use `-P,--peer` the default range will be `*` and won't be resolved at all.\n\n      - If the added package specifies a tag range (such as `latest` or `rc`), Yarn will resolve this tag to a semver version and use that in the resulting package.json entry (meaning that `yarn add foo@latest` will have exactly the same effect as `yarn add foo`).\n\n      If the `--cached` option is used, Yarn will preferably reuse the highest version already used somewhere within the project, even if through a transitive dependency.\n\n      If the `-i,--interactive` option is used (or if the `preferInteractive` settings is toggled on) the command will first try to check whether other workspaces in the project use the specified package and, if so, will offer to reuse them.\n\n      If the `--json` flag is set the output will follow a JSON-stream output also known as NDJSON (https://github.com/ndjson/ndjson-spec).\n\n      For a compilation of all the supported protocols, please consult the dedicated page from our website: .\n    ",
          examples: [
            ["Add a regular package to the current workspace", "$0 add lodash"],
            [
              "Add a specific version for a package to the current workspace",
              "$0 add lodash@1.2.3",
            ],
            [
              "Add a package from a GitHub repository (the master branch) to the current workspace using a URL",
              "$0 add lodash@https://github.com/lodash/lodash",
            ],
            [
              "Add a package from a GitHub repository (the master branch) to the current workspace using the GitHub protocol",
              "$0 add lodash@github:lodash/lodash",
            ],
            [
              "Add a package from a GitHub repository (the master branch) to the current workspace using the GitHub protocol (shorthand)",
              "$0 add lodash@lodash/lodash",
            ],
            [
              "Add a package from a specific branch of a GitHub repository to the current workspace using the GitHub protocol (shorthand)",
              "$0 add lodash-es@lodash/lodash#es",
            ],
          ],
        })),
          (0, a.gn)([C.Command.Rest()], R.prototype, "packages", void 0),
          (0, a.gn)([C.Command.Boolean("--json")], R.prototype, "json", void 0),
          (0, a.gn)(
            [C.Command.Boolean("-E,--exact")],
            R.prototype,
            "exact",
            void 0
          ),
          (0, a.gn)(
            [C.Command.Boolean("-T,--tilde")],
            R.prototype,
            "tilde",
            void 0
          ),
          (0, a.gn)(
            [C.Command.Boolean("-C,--caret")],
            R.prototype,
            "caret",
            void 0
          ),
          (0, a.gn)(
            [C.Command.Boolean("-D,--dev")],
            R.prototype,
            "dev",
            void 0
          ),
          (0, a.gn)(
            [C.Command.Boolean("-P,--peer")],
            R.prototype,
            "peer",
            void 0
          ),
          (0, a.gn)(
            [C.Command.Boolean("-O,--optional")],
            R.prototype,
            "optional",
            void 0
          ),
          (0, a.gn)(
            [C.Command.Boolean("--prefer-dev")],
            R.prototype,
            "preferDev",
            void 0
          ),
          (0, a.gn)(
            [C.Command.Boolean("-i,--interactive")],
            R.prototype,
            "interactive",
            void 0
          ),
          (0, a.gn)(
            [C.Command.Boolean("--cached")],
            R.prototype,
            "cached",
            void 0
          ),
          (0, a.gn)([C.Command.Path("add")], R.prototype, "execute", null);
        class F extends c.BaseCommand {
          constructor() {
            super(...arguments), (this.verbose = !1), (this.json = !1);
          }
          async execute() {
            const e = await s.VK.find(this.context.cwd, this.context.plugins),
              { project: t, locator: r } = await h.I.find(e, this.context.cwd);
            if ((await t.restoreInstallState(), this.name)) {
              const n = (
                await p.scriptUtils.getPackageAccessibleBinaries(r, {
                  project: t,
                })
              ).get(this.name);
              if (!n)
                throw new C.UsageError(
                  `Couldn't find a binary named "${
                    this.name
                  }" for package "${p.structUtils.prettyLocator(e, r)}"`
                );
              const [, i] = n;
              return this.context.stdout.write(i + "\n"), 0;
            }
            return (
              await f.Pk.start(
                {
                  configuration: e,
                  json: this.json,
                  stdout: this.context.stdout,
                },
                async (n) => {
                  const i = await p.scriptUtils.getPackageAccessibleBinaries(
                      r,
                      { project: t }
                    ),
                    A = Array.from(i.keys()).reduce(
                      (e, t) => Math.max(e, t.length),
                      0
                    );
                  for (const [e, [t, r]] of i)
                    n.reportJson({
                      name: e,
                      source: p.structUtils.stringifyIdent(t),
                      path: r,
                    });
                  if (this.verbose)
                    for (const [t, [r]] of i)
                      n.reportInfo(
                        null,
                        `${t.padEnd(A, " ")}   ${p.structUtils.prettyLocator(
                          e,
                          r
                        )}`
                      );
                  else for (const e of i.keys()) n.reportInfo(null, e);
                }
              )
            ).exitCode();
          }
        }
        (F.usage = C.Command.Usage({
          description: "get the path to a binary script",
          details:
            "\n      When used without arguments, this command will print the list of all the binaries available in the current workspace. Adding the `-v,--verbose` flag will cause the output to contain both the binary name and the locator of the package that provides the binary.\n\n      When an argument is specified, this command will just print the path to the binary on the standard output and exit. Note that the reported path may be stored within a zip archive.\n\n      If the `--json` flag is set the output will follow a JSON-stream output also known as NDJSON (https://github.com/ndjson/ndjson-spec).\n    ",
          examples: [
            ["List all the available binaries", "$0 bin"],
            ["Print the path to a specific binary", "$0 bin eslint"],
          ],
        })),
          (0, a.gn)(
            [C.Command.String({ required: !1 })],
            F.prototype,
            "name",
            void 0
          ),
          (0, a.gn)(
            [C.Command.Boolean("-v,--verbose")],
            F.prototype,
            "verbose",
            void 0
          ),
          (0, a.gn)([C.Command.Boolean("--json")], F.prototype, "json", void 0),
          (0, a.gn)([C.Command.Path("bin")], F.prototype, "execute", null);
        class K extends c.BaseCommand {
          constructor() {
            super(...arguments), (this.mirror = !1), (this.all = !1);
          }
          async execute() {
            const e = await s.VK.find(this.context.cwd, this.context.plugins),
              t = await g.C.find(e);
            return (
              await f.Pk.start(
                { configuration: e, stdout: this.context.stdout },
                async () => {
                  const e = (this.all || this.mirror) && null !== t.mirrorCwd,
                    r = !this.mirror;
                  e && (await B.xfs.removePromise(t.mirrorCwd)),
                    r && (await B.xfs.removePromise(t.cwd));
                }
              )
            ).exitCode();
          }
        }
        (K.usage = C.Command.Usage({
          description: "remove the shared cache files",
          details:
            "\n      This command will remove all the files from the cache.\n\n      By default only the local cache will be cleaned. This behavior can be disabled with the `--mirror`, which will lead to the removal of the global cache files instead, or `--all` (which will remove both the local and global caches for the current project).\n    ",
          examples: [
            ["Remove all the local archives", "$0 cache clean"],
            [
              "Remove all the archives stored in the ~/.yarn directory",
              "$0 cache clean --mirror",
            ],
          ],
        })),
          (0, a.gn)(
            [C.Command.Boolean("--mirror")],
            K.prototype,
            "mirror",
            void 0
          ),
          (0, a.gn)([C.Command.Boolean("--all")], K.prototype, "all", void 0),
          (0, a.gn)(
            [C.Command.Path("cache", "clean")],
            K.prototype,
            "execute",
            null
          );
        var x = r(44674),
          L = r.n(x),
          P = r(31669);
        class U extends c.BaseCommand {
          constructor() {
            super(...arguments), (this.json = !1), (this.unsafe = !1);
          }
          async execute() {
            const e = await s.VK.find(this.context.cwd, this.context.plugins),
              t = this.name.replace(/[.[].*$/, ""),
              r = this.name.replace(/^[^.[]*/, "");
            if (void 0 === e.settings.get(t))
              throw new C.UsageError(
                `Couldn't find a configuration settings named "${t}"`
              );
            const n = T(
                e.getSpecial(t, {
                  hideSecrets: !this.unsafe,
                  getNativePaths: !0,
                })
              ),
              i = r ? L()(n, r) : n,
              A = await f.Pk.start(
                {
                  configuration: e,
                  includeFooter: !1,
                  json: this.json,
                  stdout: this.context.stdout,
                },
                async (e) => {
                  e.reportJson(i);
                }
              );
            if (!this.json) {
              if ("string" == typeof i)
                return this.context.stdout.write(i + "\n"), A.exitCode();
              (P.inspect.styles.name = "cyan"),
                this.context.stdout.write(
                  (0, P.inspect)(i, { depth: 1 / 0, colors: !0, compact: !1 }) +
                    "\n"
                );
            }
            return A.exitCode();
          }
        }
        function T(e) {
          if (
            (e instanceof Map && (e = Object.fromEntries(e)),
            "object" == typeof e && null !== e)
          )
            for (const t of Object.keys(e)) {
              const r = e[t];
              "object" == typeof r && null !== r && (e[t] = T(r));
            }
          return e;
        }
        (U.usage = C.Command.Usage({
          description: "read a configuration settings",
          details:
            "\n      This command will print a configuration setting.\n\n      Secrets (such as tokens) will be redacted from the output by default. If this behavior isn't desired, set the `--no-redacted` to get the untransformed value.\n    ",
          examples: [
            [
              "Print a simple configuration setting",
              "yarn config get yarnPath",
            ],
            [
              "Print a complex configuration setting",
              "yarn config get packageExtensions",
            ],
            [
              "Print a nested field from the configuration",
              "yarn config get 'npmScopes[\"my-company\"].npmRegistryServer'",
            ],
            [
              "Print a token from the configuration",
              "yarn config get npmAuthToken --no-redacted",
            ],
            [
              "Print a configuration setting as JSON",
              "yarn config get packageExtensions --json",
            ],
          ],
        })),
          (0, a.gn)([C.Command.String()], U.prototype, "name", void 0),
          (0, a.gn)([C.Command.Boolean("--json")], U.prototype, "json", void 0),
          (0, a.gn)(
            [C.Command.Boolean("--no-redacted")],
            U.prototype,
            "unsafe",
            void 0
          ),
          (0, a.gn)(
            [C.Command.Path("config", "get")],
            U.prototype,
            "execute",
            null
          );
        var O = r(82558),
          Y = r.n(O),
          j = r(81534),
          G = r.n(j);
        class _ extends c.BaseCommand {
          constructor() {
            super(...arguments), (this.json = !1), (this.home = !1);
          }
          async execute() {
            const e = await s.VK.find(this.context.cwd, this.context.plugins);
            if (!e.projectCwd)
              throw new C.UsageError(
                "This command must be run from within a project folder"
              );
            const t = this.name.replace(/[.[].*$/, ""),
              r = this.name.replace(/^[^.[]*/, "");
            if (void 0 === e.settings.get(t))
              throw new C.UsageError(
                `Couldn't find a configuration settings named "${t}"`
              );
            const n = this.json ? JSON.parse(this.value) : this.value,
              i = this.home
                ? (e) => s.VK.updateHomeConfiguration(e)
                : (t) => s.VK.updateConfiguration(e.projectCwd, t);
            await i((e) => {
              if (r) {
                const t = Y()(e);
                return G()(t, this.name, n), t;
              }
              return { ...e, [t]: n };
            });
            const A = T(
                (
                  await s.VK.find(this.context.cwd, this.context.plugins)
                ).getSpecial(t, { hideSecrets: !0, getNativePaths: !0 })
              ),
              o = r ? L()(A, r) : A;
            return (
              await f.Pk.start(
                {
                  configuration: e,
                  includeFooter: !1,
                  stdout: this.context.stdout,
                },
                async (e) => {
                  (P.inspect.styles.name = "cyan"),
                    e.reportInfo(
                      u.b.UNNAMED,
                      `Successfully set ${this.name} to ${(0, P.inspect)(o, {
                        depth: 1 / 0,
                        colors: !0,
                        compact: !1,
                      })}`
                    );
                }
              )
            ).exitCode();
          }
        }
        (_.usage = C.Command.Usage({
          description: "change a configuration settings",
          details:
            "\n      This command will set a configuration setting.\n\n      - If set, the `-H,--home` flag will update the home configuration instead of the project configuration.\n\n      When used without the `--json` flag, it can only set a simple configuration setting (a string, a number, or a boolean).\n\n      When used with the `--json` flag, it can set both simple and complex configuration settings, including Arrays and Objects.\n    ",
          examples: [
            [
              "Set a simple configuration setting (a string, a number, or a boolean)",
              "yarn config set initScope myScope",
            ],
            [
              "Set a simple configuration setting (a string, a number, or a boolean) using the `--json` flag",
              'yarn config set initScope --json \\"myScope\\"',
            ],
            [
              "Set a complex configuration setting (an Array) using the `--json` flag",
              'yarn config set unsafeHttpWhitelist --json \'["*.example.com", "example.com"]\'',
            ],
            [
              "Set a complex configuration setting (an Object) using the `--json` flag",
              'yarn config set packageExtensions --json \'{ "@babel/parser@*": { "dependencies": { "@babel/types": "*" } } }\'',
            ],
          ],
        })),
          (0, a.gn)([C.Command.String()], _.prototype, "name", void 0),
          (0, a.gn)([C.Command.String()], _.prototype, "value", void 0),
          (0, a.gn)([C.Command.Boolean("--json")], _.prototype, "json", void 0),
          (0, a.gn)(
            [C.Command.Boolean("-H,--home")],
            _.prototype,
            "home",
            void 0
          ),
          (0, a.gn)(
            [C.Command.Path("config", "set")],
            _.prototype,
            "execute",
            null
          );
        class H extends c.BaseCommand {
          constructor() {
            super(...arguments),
              (this.verbose = !1),
              (this.why = !1),
              (this.json = !1);
          }
          async execute() {
            const e = await s.VK.find(this.context.cwd, this.context.plugins, {
              strict: !1,
            });
            return (
              await f.Pk.start(
                {
                  configuration: e,
                  json: this.json,
                  stdout: this.context.stdout,
                },
                async (t) => {
                  if (e.invalid.size > 0 && !this.json) {
                    for (const [r, n] of e.invalid)
                      t.reportError(
                        u.b.INVALID_CONFIGURATION_KEY,
                        `Invalid configuration key "${r}" in ${n}`
                      );
                    t.reportSeparator();
                  }
                  if (this.json) {
                    const r = p.miscUtils.sortMap(e.settings.keys(), (e) => e);
                    for (const n of r) {
                      const r = e.settings.get(n),
                        i = e.getSpecial(n, {
                          hideSecrets: !0,
                          getNativePaths: !0,
                        }),
                        A = e.sources.get(n);
                      this.verbose
                        ? t.reportJson({ key: n, effective: i, source: A })
                        : t.reportJson({
                            key: n,
                            effective: i,
                            source: A,
                            ...r,
                          });
                    }
                  } else {
                    const r = p.miscUtils.sortMap(e.settings.keys(), (e) => e),
                      n = r.reduce((e, t) => Math.max(e, t.length), 0),
                      i = {
                        breakLength: 1 / 0,
                        colors: e.get("enableColors"),
                        maxArrayLength: 2,
                      };
                    if (this.why || this.verbose) {
                      const A = r.map((t) => {
                          const r = e.settings.get(t);
                          if (!r)
                            throw new Error(
                              `Assertion failed: This settings ("${t}") should have been registered`
                            );
                          return [
                            t,
                            this.why
                              ? e.sources.get(t) || "<default>"
                              : r.description,
                          ];
                        }),
                        o = A.reduce((e, [, t]) => Math.max(e, t.length), 0);
                      for (const [r, s] of A)
                        t.reportInfo(
                          null,
                          `${r.padEnd(n, " ")}   ${s.padEnd(o, " ")}   ${(0,
                          P.inspect)(
                            e.getSpecial(r, {
                              hideSecrets: !0,
                              getNativePaths: !0,
                            }),
                            i
                          )}`
                        );
                    } else
                      for (const A of r)
                        t.reportInfo(
                          null,
                          `${A.padEnd(n, " ")}   ${(0, P.inspect)(
                            e.getSpecial(A, {
                              hideSecrets: !0,
                              getNativePaths: !0,
                            }),
                            i
                          )}`
                        );
                  }
                }
              )
            ).exitCode();
          }
        }
        (H.usage = C.Command.Usage({
          description: "display the current configuration",
          details:
            "\n      This command prints the current active configuration settings.\n\n      When used together with the `-v,--verbose` option, the output will contain the settings description on top of the regular key/value information.\n\n      When used together with the `--why` flag, the output will also contain the reason why a settings is set a particular way.\n\n      If the `--json` flag is set the output will follow a JSON-stream output also known as NDJSON (https://github.com/ndjson/ndjson-spec).\n\n      Note that the paths settings will be normalized - especially on Windows. It means that paths such as `C:\\project` will be transparently shown as `/mnt/c/project`.\n    ",
          examples: [["Print the active configuration settings", "$0 config"]],
        })),
          (0, a.gn)(
            [C.Command.Boolean("-v,--verbose")],
            H.prototype,
            "verbose",
            void 0
          ),
          (0, a.gn)([C.Command.Boolean("--why")], H.prototype, "why", void 0),
          (0, a.gn)([C.Command.Boolean("--json")], H.prototype, "json", void 0),
          (0, a.gn)([C.Command.Path("config")], H.prototype, "execute", null);
        var J,
          q = r(2401),
          z = r.n(q),
          W = r(15966);
        !(function (e) {
          e.HIGHEST = "highest";
        })(J || (J = {}));
        const V = new Set(Object.values(J)),
          X = {
            highest: async (
              e,
              t,
              { resolver: r, fetcher: n, resolveOptions: i, fetchOptions: A }
            ) => {
              const o = new Map();
              for (const [t, r] of e.storedResolutions) {
                const n = e.storedDescriptors.get(t);
                if (void 0 === n)
                  throw new Error(
                    `Assertion failed: The descriptor (${t}) should have been registered`
                  );
                p.miscUtils.getSetWithDefault(o, n.identHash).add(r);
              }
              return Array.from(e.storedDescriptors.values(), async (n) => {
                if (
                  t.length &&
                  !z().isMatch(p.structUtils.stringifyIdent(n), t)
                )
                  return null;
                const A = e.storedResolutions.get(n.descriptorHash);
                if (void 0 === A)
                  throw new Error(
                    `Assertion failed: The resolution (${n.descriptorHash}) should have been registered`
                  );
                const s = e.originalPackages.get(A);
                if (void 0 === s) return null;
                if (!r.shouldPersistResolution(s, i)) return null;
                const a = o.get(n.identHash);
                if (void 0 === a)
                  throw new Error(
                    `Assertion failed: The resolutions (${n.identHash}) should have been registered`
                  );
                if (1 === a.size) return null;
                const c = [...a].map((t) => {
                    const r = e.originalPackages.get(t);
                    if (void 0 === r)
                      throw new Error(
                        `Assertion failed: The package (${t}) should have been registered`
                      );
                    return r.reference;
                  }),
                  g = await r.getSatisfying(n, c, i),
                  l = null == g ? void 0 : g[0];
                if (void 0 === l) return null;
                const u = l.locatorHash,
                  h = e.originalPackages.get(u);
                if (void 0 === h)
                  throw new Error(
                    `Assertion failed: The package (${u}) should have been registered`
                  );
                return u === A
                  ? null
                  : { descriptor: n, currentPackage: s, updatedPackage: h };
              });
            },
          };
        class Z extends c.BaseCommand {
          constructor() {
            super(...arguments),
              (this.patterns = []),
              (this.strategy = J.HIGHEST),
              (this.check = !1),
              (this.json = !1);
          }
          async execute() {
            const e = await s.VK.find(this.context.cwd, this.context.plugins),
              { project: t } = await h.I.find(e, this.context.cwd),
              r = await g.C.find(e);
            let n = 0;
            const i = await f.Pk.start(
              {
                configuration: e,
                includeFooter: !1,
                stdout: this.context.stdout,
                json: this.json,
              },
              async (e) => {
                n = await (async function ({
                  strategy: e,
                  project: t,
                  patterns: r,
                  cache: n,
                  report: i,
                }) {
                  const { configuration: A } = t,
                    o = new I.$(),
                    a = A.makeResolver(),
                    c = A.makeFetcher(),
                    g = {
                      cache: n,
                      checksums: t.storedChecksums,
                      fetcher: c,
                      project: t,
                      report: o,
                      skipIntegrityCheck: !0,
                    },
                    l = { project: t, resolver: a, report: o, fetchOptions: g };
                  return await i.startTimerPromise(
                    "Deduplication step",
                    async () => {
                      const n = X[e],
                        o = await n(t, r, {
                          resolver: a,
                          resolveOptions: l,
                          fetcher: c,
                          fetchOptions: g,
                        }),
                        h = f.Pk.progressViaCounter(o.length);
                      i.reportProgress(h);
                      let C,
                        d = 0;
                      switch (
                        (await Promise.all(
                          o.map((e) =>
                            e
                              .then((e) => {
                                if (null === e) return;
                                d++;
                                const {
                                  descriptor: r,
                                  currentPackage: n,
                                  updatedPackage: o,
                                } = e;
                                i.reportInfo(
                                  u.b.UNNAMED,
                                  `${p.structUtils.prettyDescriptor(
                                    A,
                                    r
                                  )} can be deduped from ${p.structUtils.prettyLocator(
                                    A,
                                    n
                                  )} to ${p.structUtils.prettyLocator(A, o)}`
                                ),
                                  i.reportJson({
                                    descriptor: p.structUtils.stringifyDescriptor(
                                      r
                                    ),
                                    currentResolution: p.structUtils.stringifyLocator(
                                      n
                                    ),
                                    updatedResolution: p.structUtils.stringifyLocator(
                                      o
                                    ),
                                  }),
                                  t.storedResolutions.set(
                                    r.descriptorHash,
                                    o.locatorHash
                                  );
                              })
                              .finally(() => h.tick())
                          )
                        ),
                        d)
                      ) {
                        case 0:
                          C = "No packages";
                          break;
                        case 1:
                          C = "One package";
                          break;
                        default:
                          C = d + " packages";
                      }
                      const I = A.format(e, s.a5.CODE);
                      return (
                        i.reportInfo(
                          u.b.UNNAMED,
                          `${C} can be deduped using the ${I} strategy`
                        ),
                        d
                      );
                    }
                  );
                })({
                  project: t,
                  strategy: this.strategy,
                  patterns: this.patterns,
                  cache: r,
                  report: e,
                });
              }
            );
            if (i.hasErrors()) return i.exitCode();
            if (this.check) return n ? 1 : 0;
            return (
              await f.Pk.start(
                {
                  configuration: e,
                  stdout: this.context.stdout,
                  json: this.json,
                },
                async (e) => {
                  await t.install({ cache: r, report: e });
                }
              )
            ).exitCode();
          }
        }
        (Z.schema = W.object().shape({
          strategy: W.string().test({
            name: "strategy",
            message: "${path} must be one of ${strategies}",
            params: { strategies: [...V].join(", ") },
            test: (e) => V.has(e),
          }),
        })),
          (Z.usage = C.Command.Usage({
            description: "deduplicate dependencies with overlapping ranges",
            details:
              "\n      Duplicates are defined as descriptors with overlapping ranges being resolved and locked to different locators. They are a natural consequence of Yarn's deterministic installs, but they can sometimes pile up and unnecessarily increase the size of your project.\n\n      This command dedupes dependencies in the current project using different strategies (only one is implemented at the moment):\n\n      - `highest`: Reuses (where possible) the locators with the highest versions. This means that dependencies can only be upgraded, never downgraded. It's also guaranteed that it never takes more than a single pass to dedupe the entire dependency tree.\n\n      **Note:** Even though it never produces a wrong dependency tree, this command should be used with caution, as it modifies the dependency tree, which can sometimes cause problems when packages don't strictly follow semver recommendations. Because of this, it is recommended to also review the changes manually.\n\n      If set, the `-c,--check` flag will only report the found duplicates, without persisting the modified dependency tree. If changes are found, the command will exit with a non-zero exit code, making it suitable for CI purposes.\n\n      This command accepts glob patterns as arguments (if valid Idents and supported by [micromatch](https://github.com/micromatch/micromatch)). Make sure to escape the patterns, to prevent your own shell from trying to expand them.\n\n      ### In-depth explanation:\n\n      Yarn doesn't deduplicate dependencies by default, otherwise installs wouldn't be deterministic and the lockfile would be useless. What it actually does is that it tries to not duplicate dependencies in the first place.\n\n      **Example:** If `foo@^2.3.4` (a dependency of a dependency) has already been resolved to `foo@2.3.4`, running `yarn add foo@*`will cause Yarn to reuse `foo@2.3.4`, even if the latest `foo` is actually `foo@2.10.14`, thus preventing unnecessary duplication.\n\n      Duplication happens when Yarn can't unlock dependencies that have already been locked inside the lockfile.\n\n      **Example:** If `foo@^2.3.4` (a dependency of a dependency) has already been resolved to `foo@2.3.4`, running `yarn add foo@2.10.14` will cause Yarn to install `foo@2.10.14` because the existing resolution doesn't satisfy the range `2.10.14`. This behavior can lead to (sometimes) unwanted duplication, since now the lockfile contains 2 separate resolutions for the 2 `foo` descriptors, even though they have overlapping ranges, which means that the lockfile can be simplified so that both descriptors resolve to `foo@2.10.14`.\n    ",
            examples: [
              ["Dedupe all packages", "$0 dedupe"],
              [
                "Dedupe all packages using a specific strategy",
                "$0 dedupe --strategy highest",
              ],
              ["Dedupe a specific package", "$0 dedupe lodash"],
              [
                "Dedupe all packages with the `@babel/*` scope",
                "$0 dedupe '@babel/*'",
              ],
              [
                "Check for duplicates (can be used as a CI step)",
                "$0 dedupe --check",
              ],
            ],
          })),
          (0, a.gn)([C.Command.Rest()], Z.prototype, "patterns", void 0),
          (0, a.gn)(
            [C.Command.String("-s,--strategy")],
            Z.prototype,
            "strategy",
            void 0
          ),
          (0, a.gn)(
            [C.Command.Boolean("-c,--check")],
            Z.prototype,
            "check",
            void 0
          ),
          (0, a.gn)([C.Command.Boolean("--json")], Z.prototype, "json", void 0),
          (0, a.gn)([C.Command.Path("dedupe")], Z.prototype, "execute", null);
        class $ extends C.Command {
          async execute() {
            const { plugins: e } = await s.VK.find(
                this.context.cwd,
                this.context.plugins
              ),
              t = [];
            for (const r of e) {
              const { commands: e } = r[1];
              if (e) {
                const n = C.Cli.from(e).definitions();
                t.push([r[0], n]);
              }
            }
            const n = this.cli.definitions(),
              i = r(60306)["@yarnpkg/builder"].bundles.standard;
            for (const e of t) {
              const t = e[1];
              for (const r of t)
                n.find((e) => {
                  return (
                    (t = e.path),
                    (n = r.path),
                    t.split(" ").slice(1).join() ===
                      n.split(" ").slice(1).join()
                  );
                  var t, n;
                }).plugin = { name: e[0], isDefault: i.includes(e[0]) };
            }
            this.context.stdout.write(
              JSON.stringify({ commands: n }, null, 2) + "\n"
            );
          }
        }
        (0, a.gn)(
          [C.Command.Path("--clipanion=definitions")],
          $.prototype,
          "execute",
          null
        );
        class ee extends C.Command {
          async execute() {
            this.context.stdout.write(this.cli.usage(null));
          }
        }
        (0, a.gn)(
          [
            C.Command.Path("help"),
            C.Command.Path("--help"),
            C.Command.Path("-h"),
          ],
          ee.prototype,
          "execute",
          null
        );
        class te extends C.Command {
          constructor() {
            super(...arguments), (this.args = []);
          }
          async execute() {
            if (
              this.leadingArgument.match(/[\\/]/) &&
              !p.structUtils.tryParseIdent(this.leadingArgument)
            ) {
              const e = m.y1.resolve(
                this.context.cwd,
                m.cS.toPortablePath(this.leadingArgument)
              );
              return await this.cli.run(this.args, { cwd: e });
            }
            return await this.cli.run([
              "run",
              this.leadingArgument,
              ...this.args,
            ]);
          }
        }
        (0, a.gn)(
          [C.Command.String()],
          te.prototype,
          "leadingArgument",
          void 0
        ),
          (0, a.gn)([C.Command.Proxy()], te.prototype, "args", void 0);
        var re = r(59355);
        class ne extends C.Command {
          async execute() {
            this.context.stdout.write((re.o || "<unknown>") + "\n");
          }
        }
        (0, a.gn)(
          [C.Command.Path("-v"), C.Command.Path("--version")],
          ne.prototype,
          "execute",
          null
        );
        class ie extends c.BaseCommand {
          constructor() {
            super(...arguments), (this.args = []);
          }
          async execute() {
            const e = await s.VK.find(this.context.cwd, this.context.plugins),
              { project: t } = await h.I.find(e, this.context.cwd);
            return await B.xfs.mktempPromise(async (e) => {
              const { code: r } = await p.execUtils.pipevp(
                this.commandName,
                this.args,
                {
                  cwd: this.context.cwd,
                  stdin: this.context.stdin,
                  stdout: this.context.stdout,
                  stderr: this.context.stderr,
                  env: await p.scriptUtils.makeScriptEnv({
                    project: t,
                    binFolder: e,
                  }),
                }
              );
              return r;
            });
          }
        }
        (ie.usage = C.Command.Usage({
          description: "execute a shell command",
          details:
            "\n      This command simply executes a shell binary within the context of the root directory of the active workspace.\n\n      It also makes sure to call it in a way that's compatible with the current project (for example, on PnP projects the environment will be setup in such a way that PnP will be correctly injected into the environment).\n    ",
          examples: [["Execute a shell command", "$0 exec echo Hello World"]],
        })),
          (0, a.gn)([C.Command.String()], ie.prototype, "commandName", void 0),
          (0, a.gn)([C.Command.Proxy()], ie.prototype, "args", void 0),
          (0, a.gn)([C.Command.Path("exec")], ie.prototype, "execute", null);
        var Ae = r(35691),
          oe = r(55125),
          se = r(5864);
        class ae extends c.BaseCommand {
          constructor() {
            super(...arguments),
              (this.json = !1),
              (this.checkCache = !1),
              (this.silent = !1);
          }
          async execute() {
            var e, t, r;
            const n = await s.VK.find(this.context.cwd, this.context.plugins);
            void 0 !== this.inlineBuilds &&
              n.useWithSource(
                "<cli>",
                { enableInlineBuilds: this.inlineBuilds },
                n.startingCwd,
                { overwrite: !0 }
              );
            const i = !!process.env.NOW_BUILDER,
              A = !!process.env.NETLIFY,
              o = !!process.env.FUNCTION_TARGET || !!process.env.GOOGLE_RUNTIME,
              a = async (e, { error: t }) => {
                const r = await f.Pk.start(
                  {
                    configuration: n,
                    stdout: this.context.stdout,
                    includeFooter: !1,
                  },
                  async (r) => {
                    t
                      ? r.reportError(u.b.DEPRECATED_CLI_SETTINGS, e)
                      : r.reportWarning(u.b.DEPRECATED_CLI_SETTINGS, e);
                  }
                );
                return r.hasErrors() ? r.exitCode() : null;
              };
            if (void 0 !== this.ignoreEngines) {
              const e = await a(
                "The --ignore-engines option is deprecated; engine checking isn't a core feature anymore",
                { error: !i }
              );
              if (null !== e) return e;
            }
            if (void 0 !== this.registry) {
              const e = await a(
                "The --registry option is deprecated; prefer setting npmRegistryServer in your .yarnrc.yml file",
                { error: !1 }
              );
              if (null !== e) return e;
            }
            if (void 0 !== this.preferOffline) {
              const e = await a(
                "The --prefer-offline flag is deprecated; use the --cached flag with 'yarn add' instead",
                { error: !i }
              );
              if (null !== e) return e;
            }
            if (void 0 !== this.production) {
              const e = await a(
                "The --production option is deprecated on 'install'; use 'yarn workspaces focus' instead",
                { error: !0 }
              );
              if (null !== e) return e;
            }
            if (void 0 !== this.nonInteractive) {
              const e = await a("The --non-interactive option is deprecated", {
                error: !o,
              });
              if (null !== e) return e;
            }
            if (void 0 !== this.frozenLockfile) {
              const e = await a(
                "The --frozen-lockfile option is deprecated; use --immutable and/or --immutable-cache instead",
                { error: !o && !se.TRAVIS }
              );
              if (null !== e) return e;
            }
            if (void 0 !== this.cacheFolder) {
              const e = await a(
                "The cache-folder option has been deprecated; use rc settings instead",
                { error: !A }
              );
              if (null !== e) return e;
            }
            const l =
              void 0 === this.immutable && void 0 === this.frozenLockfile
                ? null !== (e = n.get("enableImmutableInstalls")) &&
                  void 0 !== e &&
                  e
                : null !==
                    (r =
                      null !== (t = this.immutable) && void 0 !== t
                        ? t
                        : this.frozenLockfile) &&
                  void 0 !== r &&
                  r;
            if (null !== n.projectCwd) {
              const e = await f.Pk.start(
                {
                  configuration: n,
                  json: this.json,
                  stdout: this.context.stdout,
                  includeFooter: !1,
                },
                async (e) => {
                  (await (async function (e, t) {
                    if (!e.projectCwd) return !1;
                    const r = m.y1.join(
                      e.projectCwd,
                      e.get("lockfileFilename")
                    );
                    if (!(await B.xfs.existsPromise(r))) return !1;
                    const n = await B.xfs.readFilePromise(r, "utf8");
                    if (!n.includes("<<<<<<<")) return !1;
                    if (t)
                      throw new Ae.lk(
                        u.b.AUTOMERGE_IMMUTABLE,
                        "Cannot autofix a lockfile when running an immutable install"
                      );
                    const [i, A] = (function (e) {
                      const t = [[], []],
                        r = e.split(/\r?\n/g);
                      let n = !1;
                      for (; r.length > 0; ) {
                        const e = r.shift();
                        if (void 0 === e)
                          throw new Error(
                            "Assertion failed: Some lines should remain"
                          );
                        if (e.startsWith("<<<<<<<")) {
                          for (; r.length > 0; ) {
                            const e = r.shift();
                            if (void 0 === e)
                              throw new Error(
                                "Assertion failed: Some lines should remain"
                              );
                            if ("=======" === e) {
                              n = !1;
                              break;
                            }
                            n || e.startsWith("|||||||")
                              ? (n = !0)
                              : t[0].push(e);
                          }
                          for (; r.length > 0; ) {
                            const e = r.shift();
                            if (void 0 === e)
                              throw new Error(
                                "Assertion failed: Some lines should remain"
                              );
                            if (e.startsWith(">>>>>>>")) break;
                            t[1].push(e);
                          }
                        } else t[0].push(e), t[1].push(e);
                      }
                      return [t[0].join("\n"), t[1].join("\n")];
                    })(n);
                    let o, s;
                    try {
                      (o = (0, oe.parseSyml)(i)), (s = (0, oe.parseSyml)(A));
                    } catch (e) {
                      throw new Ae.lk(
                        u.b.AUTOMERGE_FAILED_TO_PARSE,
                        "The individual variants of the lockfile failed to parse"
                      );
                    }
                    const a = { ...o, ...s };
                    for (const [e, t] of Object.entries(a))
                      "string" == typeof t && delete a[e];
                    return (
                      await B.xfs.changeFilePromise(
                        r,
                        (0, oe.stringifySyml)(a),
                        { automaticNewlines: !0 }
                      ),
                      !0
                    );
                  })(n, l)) &&
                    (e.reportInfo(
                      u.b.AUTOMERGE_SUCCESS,
                      "Automatically fixed merge conflicts 👍"
                    ),
                    e.reportSeparator());
                }
              );
              if (e.hasErrors()) return e.exitCode();
            }
            if (null !== n.projectCwd) {
              const e = await f.Pk.start(
                {
                  configuration: n,
                  json: this.json,
                  stdout: this.context.stdout,
                  includeFooter: !1,
                },
                async (e) => {
                  var t;
                  (null === (t = s.VK.telemetry) || void 0 === t
                    ? void 0
                    : t.isNew) &&
                    (e.reportInfo(
                      u.b.TELEMETRY_NOTICE,
                      "Yarn will periodically gather anonymous telemetry: https://yarnpkg.com/advanced/telemetry"
                    ),
                    e.reportInfo(
                      u.b.TELEMETRY_NOTICE,
                      `Run ${n.format(
                        "yarn config set --home enableTelemetry 0",
                        s.a5.CODE
                      )} to disable`
                    ),
                    e.reportSeparator());
                }
              );
              if (e.hasErrors()) return e.exitCode();
            }
            const { project: p, workspace: C } = await h.I.find(
                n,
                this.context.cwd
              ),
              d = await g.C.find(n, {
                immutable: this.immutableCache,
                check: this.checkCache,
              });
            if (!C) throw new c.WorkspaceRequiredError(p.cwd, this.context.cwd);
            return (
              await f.Pk.start(
                {
                  configuration: n,
                  json: this.json,
                  stdout: this.context.stdout,
                  includeLogs: !0,
                },
                async (e) => {
                  await p.install({ cache: d, report: e, immutable: l });
                }
              )
            ).exitCode();
          }
        }
        (ae.usage = C.Command.Usage({
          description: "install the project dependencies",
          details:
            "\n      This command setup your project if needed. The installation is splitted in four different steps that each have their own characteristics:\n\n      - **Resolution:** First the package manager will resolve your dependencies. The exact way a dependency version is privileged over another isn't standardized outside of the regular semver guarantees. If a package doesn't resolve to what you would expect, check that all dependencies are correctly declared (also check our website for more information: ).\n\n      - **Fetch:** Then we download all the dependencies if needed, and make sure that they're all stored within our cache (check the value of `cacheFolder` in `yarn config` to see where are stored the cache files).\n\n      - **Link:** Then we send the dependency tree information to internal plugins tasked from writing them on the disk in some form (for example by generating the .pnp.js file you might know).\n\n      - **Build:** Once the dependency tree has been written on the disk, the package manager will now be free to run the build scripts for all packages that might need it, in a topological order compatible with the way they depend on one another.\n\n      Note that running this command is not part of the recommended workflow. Yarn supports zero-installs, which means that as long as you store your cache and your .pnp.js file inside your repository, everything will work without requiring any install right after cloning your repository or switching branches.\n\n      If the `--immutable` option is set, Yarn will abort with an error exit code if the lockfile was to be modified (other paths can be added using the `immutablePaths` configuration setting). For backward compatibility we offer an alias under the name of `--frozen-lockfile`, but it will be removed in a later release.\n\n      If the `--immutable-cache` option is set, Yarn will abort with an error exit code if the cache folder was to be modified (either because files would be added, or because they'd be removed).\n\n      If the `--check-cache` option is set, Yarn will always refetch the packages and will ensure that their checksum matches what's 1/ described in the lockfile 2/ inside the existing cache files (if present). This is recommended as part of your CI workflow if you're both following the Zero-Installs model and accepting PRs from third-parties, as they'd otherwise have the ability to alter the checked-in packages before submitting them.\n\n      If the `--inline-builds` option is set, Yarn will verbosely print the output of the build steps of your dependencies (instead of writing them into individual files). This is likely useful mostly for debug purposes only when using Docker-like environments.\n\n      If the `--json` flag is set the output will follow a JSON-stream output also known as NDJSON (https://github.com/ndjson/ndjson-spec).\n    ",
          examples: [
            ["Install the project", "$0 install"],
            [
              "Validate a project when using Zero-Installs",
              "$0 install --immutable --immutable-cache",
            ],
            [
              "Validate a project when using Zero-Installs (slightly safer if you accept external PRs)",
              "$0 install --immutable --immutable-cache --check-cache",
            ],
          ],
        })),
          (0, a.gn)(
            [C.Command.Boolean("--json")],
            ae.prototype,
            "json",
            void 0
          ),
          (0, a.gn)(
            [C.Command.Boolean("--immutable")],
            ae.prototype,
            "immutable",
            void 0
          ),
          (0, a.gn)(
            [C.Command.Boolean("--immutable-cache")],
            ae.prototype,
            "immutableCache",
            void 0
          ),
          (0, a.gn)(
            [C.Command.Boolean("--check-cache")],
            ae.prototype,
            "checkCache",
            void 0
          ),
          (0, a.gn)(
            [C.Command.Boolean("--production", { hidden: !0 })],
            ae.prototype,
            "production",
            void 0
          ),
          (0, a.gn)(
            [C.Command.Boolean("--non-interactive", { hidden: !0 })],
            ae.prototype,
            "nonInteractive",
            void 0
          ),
          (0, a.gn)(
            [C.Command.Boolean("--frozen-lockfile", { hidden: !0 })],
            ae.prototype,
            "frozenLockfile",
            void 0
          ),
          (0, a.gn)(
            [C.Command.Boolean("--prefer-offline", { hidden: !0 })],
            ae.prototype,
            "preferOffline",
            void 0
          ),
          (0, a.gn)(
            [C.Command.Boolean("--ignore-engines", { hidden: !0 })],
            ae.prototype,
            "ignoreEngines",
            void 0
          ),
          (0, a.gn)(
            [C.Command.String("--registry", { hidden: !0 })],
            ae.prototype,
            "registry",
            void 0
          ),
          (0, a.gn)(
            [C.Command.Boolean("--inline-builds")],
            ae.prototype,
            "inlineBuilds",
            void 0
          ),
          (0, a.gn)(
            [C.Command.String("--cache-folder", { hidden: !0 })],
            ae.prototype,
            "cacheFolder",
            void 0
          ),
          (0, a.gn)(
            [C.Command.Boolean("--silent", { hidden: !0 })],
            ae.prototype,
            "silent",
            void 0
          ),
          (0, a.gn)(
            [C.Command.Path(), C.Command.Path("install")],
            ae.prototype,
            "execute",
            null
          );
        class ce extends c.BaseCommand {
          constructor() {
            super(...arguments),
              (this.all = !1),
              (this.private = !1),
              (this.relative = !1);
          }
          async execute() {
            const e = await s.VK.find(this.context.cwd, this.context.plugins),
              { project: t, workspace: r } = await h.I.find(
                e,
                this.context.cwd
              ),
              n = await g.C.find(e);
            if (!r) throw new c.WorkspaceRequiredError(t.cwd, this.context.cwd);
            const i = m.y1.resolve(
                this.context.cwd,
                m.cS.toPortablePath(this.destination)
              ),
              A = await s.VK.find(i, this.context.plugins),
              { project: o, workspace: a } = await h.I.find(A, i);
            if (!a) throw new c.WorkspaceRequiredError(o.cwd, i);
            const l = t.topLevelWorkspace,
              u = [];
            if (this.all) {
              for (const e of o.workspaces)
                !e.manifest.name ||
                  (e.manifest.private && !this.private) ||
                  u.push(e);
              if (0 === u.length)
                throw new C.UsageError(
                  "No workspace found to be linked in the target project"
                );
            } else {
              if (!a.manifest.name)
                throw new C.UsageError(
                  "The target workspace doesn't have a name and thus cannot be linked"
                );
              if (a.manifest.private && !this.private)
                throw new C.UsageError(
                  "The target workspace is marked private - use the --private flag to link it anyway"
                );
              u.push(a);
            }
            for (const e of u) {
              const r = p.structUtils.stringifyIdent(e.locator),
                n = this.relative ? m.y1.relative(t.cwd, e.cwd) : e.cwd;
              l.manifest.resolutions.push({
                pattern: { descriptor: { fullName: r } },
                reference: "portal:" + n,
              });
            }
            return (
              await f.Pk.start(
                { configuration: e, stdout: this.context.stdout },
                async (e) => {
                  await t.install({ cache: n, report: e });
                }
              )
            ).exitCode();
          }
        }
        (ce.usage = C.Command.Usage({
          description: "connect the local project to another one",
          details:
            "\n      This command will set a new `resolutions` field in the project-level manifest and point it to the workspace at the specified location (even if part of another project).\n\n      If the `--all` option is set, all workspaces belonging to the target project will be linked to the current one.\n\n      There is no `yarn unlink` command. To unlink the workspaces from the current project one must revert the changes made to the `resolutions` field.\n    ",
          examples: [
            [
              "Register a remote workspace for use in the current project",
              "$0 link ~/ts-loader",
            ],
            [
              "Register all workspaces from a remote project for use in the current project",
              "$0 link ~/jest --all",
            ],
          ],
        })),
          (0, a.gn)([C.Command.String()], ce.prototype, "destination", void 0),
          (0, a.gn)(
            [C.Command.Boolean("-A,--all")],
            ce.prototype,
            "all",
            void 0
          ),
          (0, a.gn)(
            [C.Command.Boolean("-p,--private")],
            ce.prototype,
            "private",
            void 0
          ),
          (0, a.gn)(
            [C.Command.Boolean("-r,--relative")],
            ce.prototype,
            "relative",
            void 0
          ),
          (0, a.gn)([C.Command.Path("link")], ce.prototype, "execute", null);
        class ge extends c.BaseCommand {
          constructor() {
            super(...arguments), (this.args = []);
          }
          async execute() {
            return this.cli.run(["exec", "node", ...this.args]);
          }
        }
        (ge.usage = C.Command.Usage({
          description: "run node with the hook already setup",
          details:
            "\n      This command simply runs Node. It also makes sure to call it in a way that's compatible with the current project (for example, on PnP projects the environment will be setup in such a way that PnP will be correctly injected into the environment).\n\n      The Node process will use the exact same version of Node as the one used to run Yarn itself, which might be a good way to ensure that your commands always use a consistent Node version.\n    ",
          examples: [["Run a Node script", "$0 node ./my-script.js"]],
        })),
          (0, a.gn)([C.Command.Proxy()], ge.prototype, "args", void 0),
          (0, a.gn)([C.Command.Path("node")], ge.prototype, "execute", null);
        var le = r(12087),
          ue = r(85622),
          he = r.n(ue);
        class fe extends c.BaseCommand {
          constructor() {
            super(...arguments), (this.onlyIfNeeded = !1);
          }
          async execute() {
            const e = await s.VK.find(this.context.cwd, this.context.plugins);
            if (e.get("yarnPath") && this.onlyIfNeeded) return 0;
            let t;
            if ("latest" === this.version || "berry" === this.version)
              t =
                "https://github.com/yarnpkg/berry/raw/master/packages/yarnpkg-cli/bin/yarn.js";
            else if ("classic" === this.version)
              t = "https://nightly.yarnpkg.com/latest.js";
            else if (p.semverUtils.v(this.version, ">=2.0.0"))
              t = `https://github.com/yarnpkg/berry/raw/%40yarnpkg/cli/${this.version}/packages/yarnpkg-cli/bin/yarn.js`;
            else {
              if (!p.semverUtils.v(this.version, "^0.x || ^1.x"))
                throw y().validRange(this.version)
                  ? new C.UsageError(
                      "Support for ranges got removed - please use the exact version you want to install, or 'latest' to get the latest build available"
                    )
                  : new C.UsageError(
                      `Invalid version descriptor "${this.version}"`
                    );
              t = `https://github.com/yarnpkg/yarn/releases/download/v${this.version}/yarn-${this.version}.js`;
            }
            return (
              await f.Pk.start(
                { configuration: e, stdout: this.context.stdout },
                async (r) => {
                  r.reportInfo(
                    u.b.UNNAMED,
                    "Downloading " + e.format(t, "green")
                  );
                  const n = await p.httpUtils.get(t, { configuration: e });
                  await pe(e, null, n, { report: r });
                }
              )
            ).exitCode();
          }
        }
        async function pe(e, t, r, { report: n }) {
          const i = e.projectCwd ? e.projectCwd : e.startingCwd;
          null === t &&
            (await B.xfs.mktempPromise(async (e) => {
              const n = m.y1.join(e, "yarn.cjs");
              await B.xfs.writeFilePromise(n, r);
              const { stdout: A } = await p.execUtils.execvp(
                process.execPath,
                [m.cS.fromPortablePath(n), "--version"],
                { cwd: i, env: { ...process.env, YARN_IGNORE_PATH: "1" } }
              );
              if (((t = A.trim()), !y().valid(t)))
                throw new Error("Invalid semver version");
            }));
          const A = m.y1.resolve(i, ".yarn/releases"),
            o = m.y1.resolve(A, `yarn-${t}.cjs`),
            a = m.y1.relative(e.startingCwd, o),
            c = m.y1.relative(i, o),
            g = e.get("yarnPath"),
            l = null === g || g.startsWith(A + "/");
          n.reportInfo(
            u.b.UNNAMED,
            "Saving the new release in " + e.format(a, "magenta")
          ),
            await B.xfs.removePromise(m.y1.dirname(o)),
            await B.xfs.mkdirPromise(m.y1.dirname(o), { recursive: !0 }),
            await B.xfs.writeFilePromise(o, r),
            await B.xfs.chmodPromise(o, 493),
            l && (await s.VK.updateConfiguration(i, { yarnPath: c }));
        }
        (fe.usage = C.Command.Usage({
          description: "lock the Yarn version used by the project",
          details:
            "\n      This command will download a specific release of Yarn directly from the Yarn GitHub repository, will store it inside your project, and will change the `yarnPath` settings from your project `.yarnrc.yml` file to point to the new file.\n\n      A very good use case for this command is to enforce the version of Yarn used by the any single member of your team inside a same project - by doing this you ensure that you have control on Yarn upgrades and downgrades (including on your deployment servers), and get rid of most of the headaches related to someone using a slightly different version and getting a different behavior than you.\n    ",
          examples: [
            [
              "Download the latest release from the Yarn repository",
              "$0 set version latest",
            ],
            [
              "Download the latest classic release from the Yarn repository",
              "$0 set version classic",
            ],
            ["Download a specific Yarn 2 build", "$0 set version 2.0.0-rc.30"],
            [
              "Switch back to a specific Yarn 1 release",
              "$0 set version 1.22.1",
            ],
          ],
        })),
          (0, a.gn)(
            [C.Command.Boolean("--only-if-needed")],
            fe.prototype,
            "onlyIfNeeded",
            void 0
          ),
          (0, a.gn)([C.Command.String()], fe.prototype, "version", void 0),
          (0, a.gn)(
            [
              C.Command.Path("policies", "set-version"),
              C.Command.Path("set", "version"),
            ],
            fe.prototype,
            "execute",
            null
          );
        const Ce = /^[0-9]+$/;
        function de(e) {
          return Ce.test(e) ? `pull/${e}/head` : e;
        }
        class Ie extends c.BaseCommand {
          constructor() {
            super(...arguments),
              (this.repository = "https://github.com/yarnpkg/berry.git"),
              (this.branch = "master"),
              (this.plugins = []),
              (this.noMinify = !1),
              (this.force = !1);
          }
          async execute() {
            const e = await s.VK.find(this.context.cwd, this.context.plugins),
              t =
                void 0 !== this.installPath
                  ? m.y1.resolve(
                      this.context.cwd,
                      m.cS.toPortablePath(this.installPath)
                    )
                  : m.y1.resolve(
                      m.cS.toPortablePath((0, le.tmpdir)()),
                      "yarnpkg-sources",
                      p.hashUtils.makeHash(this.repository).slice(0, 6)
                    );
            return (
              await f.Pk.start(
                { configuration: e, stdout: this.context.stdout },
                async (r) => {
                  await me(this, { configuration: e, report: r, target: t }),
                    r.reportSeparator(),
                    r.reportInfo(u.b.UNNAMED, "Building a fresh bundle"),
                    r.reportSeparator(),
                    await Ee(
                      (({ plugins: e, noMinify: t }, r) => [
                        [
                          "yarn",
                          "build:cli",
                          ...new Array().concat(
                            ...e.map((e) => ["--plugin", he().resolve(r, e)])
                          ),
                          ...(t ? ["--no-minify"] : []),
                          "|",
                        ],
                      ])(this, t),
                      { configuration: e, context: this.context, target: t }
                    ),
                    r.reportSeparator();
                  const n = m.y1.resolve(
                      t,
                      "packages/yarnpkg-cli/bundles/yarn.js"
                    ),
                    i = await B.xfs.readFilePromise(n);
                  await pe(e, "sources", i, { report: r });
                }
              )
            ).exitCode();
          }
        }
        async function Ee(e, { configuration: t, context: r, target: n }) {
          for (const [i, ...A] of e) {
            const e = "|" === A[A.length - 1];
            if ((e && A.pop(), e))
              await p.execUtils.pipevp(i, A, {
                cwd: n,
                stdin: r.stdin,
                stdout: r.stdout,
                stderr: r.stderr,
                strict: !0,
              });
            else {
              r.stdout.write(
                t.format("  $ " + [i, ...A].join(" "), "grey") + "\n"
              );
              try {
                await p.execUtils.execvp(i, A, { cwd: n, strict: !0 });
              } catch (e) {
                throw (r.stdout.write(e.stdout || e.stack), e);
              }
            }
          }
        }
        async function me(e, { configuration: t, report: r, target: n }) {
          let i = !1;
          if (!e.force && B.xfs.existsSync(m.y1.join(n, ".git"))) {
            r.reportInfo(u.b.UNNAMED, "Fetching the latest commits"),
              r.reportSeparator();
            try {
              await Ee(
                (({ branch: e }) => [
                  ["git", "fetch", "origin", de(e), "--force"],
                  ["git", "reset", "--hard", "FETCH_HEAD"],
                  ["git", "clean", "-dfx"],
                ])(e),
                { configuration: t, context: e.context, target: n }
              ),
                (i = !0);
            } catch (e) {
              r.reportSeparator(),
                r.reportWarning(
                  u.b.UNNAMED,
                  "Repository update failed; we'll try to regenerate it"
                );
            }
          }
          i ||
            (r.reportInfo(u.b.UNNAMED, "Cloning the remote repository"),
            r.reportSeparator(),
            await B.xfs.removePromise(n),
            await B.xfs.mkdirPromise(n, { recursive: !0 }),
            await Ee(
              (({ repository: e, branch: t }, r) => [
                ["git", "init", m.cS.fromPortablePath(r)],
                ["git", "remote", "add", "origin", e],
                ["git", "fetch", "origin", de(t)],
                ["git", "reset", "--hard", "FETCH_HEAD"],
              ])(e, n),
              { configuration: t, context: e.context, target: n }
            ));
        }
        (Ie.usage = C.Command.Usage({
          description: "build Yarn from master",
          details:
            "\n      This command will clone the Yarn repository into a temporary folder, then build it. The resulting bundle will then be copied into the local project.\n    ",
          examples: [["Build Yarn from master", "$0 set version from sources"]],
        })),
          (0, a.gn)(
            [C.Command.String("--path")],
            Ie.prototype,
            "installPath",
            void 0
          ),
          (0, a.gn)(
            [C.Command.String("--repository")],
            Ie.prototype,
            "repository",
            void 0
          ),
          (0, a.gn)(
            [C.Command.String("--branch")],
            Ie.prototype,
            "branch",
            void 0
          ),
          (0, a.gn)(
            [C.Command.Array("--plugin")],
            Ie.prototype,
            "plugins",
            void 0
          ),
          (0, a.gn)(
            [C.Command.Boolean("--no-minify")],
            Ie.prototype,
            "noMinify",
            void 0
          ),
          (0, a.gn)(
            [C.Command.Boolean("-f,--force")],
            Ie.prototype,
            "force",
            void 0
          ),
          (0, a.gn)(
            [C.Command.Path("set", "version", "from", "sources")],
            Ie.prototype,
            "execute",
            null
          );
        var Be = r(78835),
          we = r(92184);
        async function ye(e) {
          const t = await p.httpUtils.get(
            "https://raw.githubusercontent.com/yarnpkg/berry/master/plugins.yml",
            { configuration: e }
          );
          return (0, oe.parseSyml)(t.toString());
        }
        class Qe extends c.BaseCommand {
          constructor() {
            super(...arguments), (this.json = !1);
          }
          async execute() {
            const e = await s.VK.find(this.context.cwd, this.context.plugins);
            return (
              await f.Pk.start(
                {
                  configuration: e,
                  json: this.json,
                  stdout: this.context.stdout,
                },
                async (t) => {
                  const r = await ye(e);
                  for (const [e, { experimental: n, ...i }] of Object.entries(
                    r
                  )) {
                    let r = e;
                    n && (r += " [experimental]"),
                      t.reportJson({ name: e, experimental: n, ...i }),
                      t.reportInfo(null, r);
                  }
                }
              )
            ).exitCode();
          }
        }
        (Qe.usage = C.Command.Usage({
          category: "Plugin-related commands",
          description: "list the available official plugins",
          details:
            "\n      This command prints the plugins available directly from the Yarn repository. Only those plugins can be referenced by name in `yarn plugin import`.\n    ",
          examples: [["List the official plugins", "$0 plugin list"]],
        })),
          (0, a.gn)(
            [C.Command.Boolean("--json")],
            Qe.prototype,
            "json",
            void 0
          ),
          (0, a.gn)(
            [C.Command.Path("plugin", "list")],
            Qe.prototype,
            "execute",
            null
          );
        class ve extends c.BaseCommand {
          async execute() {
            const e = await s.VK.find(this.context.cwd, this.context.plugins);
            return (
              await f.Pk.start(
                { configuration: e, stdout: this.context.stdout },
                async (t) => {
                  const { project: r } = await h.I.find(e, this.context.cwd);
                  let n, i;
                  if (
                    this.name.match(/^\.{0,2}[\\/]/) ||
                    m.cS.isAbsolute(this.name)
                  ) {
                    const A = m.y1.resolve(
                      this.context.cwd,
                      m.cS.toPortablePath(this.name)
                    );
                    t.reportInfo(
                      u.b.UNNAMED,
                      "Reading " + e.format(A, "green")
                    ),
                      (n = m.y1.relative(r.cwd, A)),
                      (i = await B.xfs.readFilePromise(A));
                  } else {
                    let r;
                    if (this.name.match(/^https?:/)) {
                      try {
                        new Be.URL(this.name);
                      } catch (e) {
                        throw new Ae.lk(
                          u.b.INVALID_PLUGIN_REFERENCE,
                          `Plugin specifier "${this.name}" is neither a plugin name nor a valid url`
                        );
                      }
                      (n = this.name), (r = this.name);
                    } else {
                      const t = p.structUtils.parseIdent(
                          this.name.replace(
                            /^((@yarnpkg\/)?plugin-)?/,
                            "@yarnpkg/plugin-"
                          )
                        ),
                        i = p.structUtils.stringifyIdent(t),
                        A = await ye(e);
                      if (!Object.prototype.hasOwnProperty.call(A, i))
                        throw new Ae.lk(
                          u.b.PLUGIN_NAME_NOT_FOUND,
                          `Couldn't find a plugin named "${i}" on the remote registry. Note that only the plugins referenced on our website (https://github.com/yarnpkg/berry/blob/master/plugins.yml) can be referenced by their name; any other plugin will have to be referenced through its public url (for example https://github.com/yarnpkg/berry/raw/master/packages/plugin-typescript/bin/%40yarnpkg/plugin-typescript.js).`
                        );
                      (n = i), (r = A[i].url);
                    }
                    t.reportInfo(
                      u.b.UNNAMED,
                      "Downloading " + e.format(r, "green")
                    ),
                      (i = await p.httpUtils.get(r, { configuration: e }));
                  }
                  await be(n, i, { project: r, report: t });
                }
              )
            ).exitCode();
          }
        }
        async function be(e, t, { project: r, report: n }) {
          const { configuration: i } = r,
            A = {},
            o = { exports: A };
          (0, we.runInNewContext)(t.toString(), { module: o, exports: A });
          const a = o.exports.name,
            c = `.yarn/plugins/${a}.cjs`,
            g = m.y1.resolve(r.cwd, c);
          n.reportInfo(
            u.b.UNNAMED,
            "Saving the new plugin in " + i.format(c, "magenta")
          ),
            await B.xfs.mkdirPromise(m.y1.dirname(g), { recursive: !0 }),
            await B.xfs.writeFilePromise(g, t);
          const l = { path: c, spec: e };
          await s.VK.updateConfiguration(r.cwd, (e) => {
            const t = [];
            let n = !1;
            for (const i of e.plugins || []) {
              const e = "string" != typeof i ? i.path : i,
                A = m.y1.resolve(r.cwd, m.cS.toPortablePath(e)),
                { name: o } = p.miscUtils.dynamicRequire(
                  m.cS.fromPortablePath(A)
                );
              o !== a ? t.push(i) : (t.push(l), (n = !0));
            }
            return n || t.push(l), { ...e, plugins: t };
          });
        }
        (ve.usage = C.Command.Usage({
          category: "Plugin-related commands",
          description: "download a plugin",
          details:
            "\n      This command downloads the specified plugin from its remote location and updates the configuration to reference it in further CLI invocations.\n\n      Three types of plugin references are accepted:\n\n      - If the plugin is stored within the Yarn repository, it can be referenced by name.\n      - Third-party plugins can be referenced directly through their public urls.\n      - Local plugins can be referenced by their path on the disk.\n\n      Plugins cannot be downloaded from the npm registry, and aren't allowed to have dependencies (they need to be bundled into a single file, possibly thanks to the `@yarnpkg/builder` package).\n    ",
          examples: [
            [
              'Download and activate the "@yarnpkg/plugin-exec" plugin',
              "$0 plugin import @yarnpkg/plugin-exec",
            ],
            [
              'Download and activate the "@yarnpkg/plugin-exec" plugin (shorthand)',
              "$0 plugin import exec",
            ],
            [
              "Download and activate a community plugin",
              "$0 plugin import https://example.org/path/to/plugin.js",
            ],
            ["Activate a local plugin", "$0 plugin import ./path/to/plugin.js"],
          ],
        })),
          (0, a.gn)([C.Command.String()], ve.prototype, "name", void 0),
          (0, a.gn)(
            [C.Command.Path("plugin", "import")],
            ve.prototype,
            "execute",
            null
          );
        class De extends c.BaseCommand {
          constructor() {
            super(...arguments),
              (this.repository = "https://github.com/yarnpkg/berry.git"),
              (this.branch = "master"),
              (this.noMinify = !1),
              (this.force = !1);
          }
          async execute() {
            const e = await s.VK.find(this.context.cwd, this.context.plugins),
              t =
                void 0 !== this.installPath
                  ? m.y1.resolve(
                      this.context.cwd,
                      m.cS.toPortablePath(this.installPath)
                    )
                  : m.y1.resolve(
                      m.cS.toPortablePath((0, le.tmpdir)()),
                      "yarnpkg-sources",
                      p.hashUtils.makeHash(this.repository).slice(0, 6)
                    );
            return (
              await f.Pk.start(
                { configuration: e, stdout: this.context.stdout },
                async (r) => {
                  const { project: n } = await h.I.find(e, this.context.cwd),
                    i = p.structUtils.parseIdent(
                      this.name.replace(
                        /^((@yarnpkg\/)?plugin-)?/,
                        "@yarnpkg/plugin-"
                      )
                    ),
                    A = p.structUtils.stringifyIdent(i),
                    o = await ye(e);
                  if (!Object.prototype.hasOwnProperty.call(o, A))
                    throw new Ae.lk(
                      u.b.PLUGIN_NAME_NOT_FOUND,
                      `Couldn't find a plugin named "${A}" on the remote registry. Note that only the plugins referenced on our website (https://github.com/yarnpkg/berry/blob/master/plugins.yml) can be built and imported from sources.`
                    );
                  const s = A,
                    a = s.replace(/@yarnpkg\//, "");
                  await me(this, { configuration: e, report: r, target: t }),
                    r.reportSeparator(),
                    r.reportInfo(u.b.UNNAMED, "Building a fresh " + a),
                    r.reportSeparator(),
                    await Ee(
                      (({ pluginName: e, noMinify: t }, r) => [
                        [
                          "yarn",
                          "build:" + e,
                          ...(t ? ["--no-minify"] : []),
                          "|",
                        ],
                      ])({ pluginName: a, noMinify: this.noMinify }),
                      { configuration: e, context: this.context, target: t }
                    ),
                    r.reportSeparator();
                  const c = m.y1.resolve(t, `packages/${a}/bundles/${s}.js`),
                    g = await B.xfs.readFilePromise(c);
                  await be(s, g, { project: n, report: r });
                }
              )
            ).exitCode();
          }
        }
        (De.usage = C.Command.Usage({
          category: "Plugin-related commands",
          description: "build a plugin from sources",
          details:
            "\n      This command clones the Yarn repository into a temporary folder, builds the specified contrib plugin and updates the configuration to reference it in further CLI invocations.\n\n      The plugins can be referenced by their short name if sourced from the official Yarn repository.\n    ",
          examples: [
            [
              'Build and activate the "@yarnpkg/plugin-exec" plugin',
              "$0 plugin import from sources @yarnpkg/plugin-exec",
            ],
            [
              'Build and activate the "@yarnpkg/plugin-exec" plugin (shorthand)',
              "$0 plugin import from sources exec",
            ],
          ],
        })),
          (0, a.gn)([C.Command.String()], De.prototype, "name", void 0),
          (0, a.gn)(
            [C.Command.String("--path")],
            De.prototype,
            "installPath",
            void 0
          ),
          (0, a.gn)(
            [C.Command.String("--repository")],
            De.prototype,
            "repository",
            void 0
          ),
          (0, a.gn)(
            [C.Command.String("--branch")],
            De.prototype,
            "branch",
            void 0
          ),
          (0, a.gn)(
            [C.Command.Boolean("--no-minify")],
            De.prototype,
            "noMinify",
            void 0
          ),
          (0, a.gn)(
            [C.Command.Boolean("-f,--force")],
            De.prototype,
            "force",
            void 0
          ),
          (0, a.gn)(
            [C.Command.Path("plugin", "import", "from", "sources")],
            De.prototype,
            "execute",
            null
          );
        class Se extends c.BaseCommand {
          async execute() {
            const e = await s.VK.find(this.context.cwd, this.context.plugins),
              { project: t } = await h.I.find(e, this.context.cwd);
            return (
              await f.Pk.start(
                { configuration: e, stdout: this.context.stdout },
                async (r) => {
                  const n = this.name,
                    i = p.structUtils.parseIdent(n);
                  if (!e.plugins.has(n))
                    throw new C.UsageError(
                      p.structUtils.prettyIdent(e, i) +
                        " isn't referenced by the current configuration"
                    );
                  const A = `.yarn/plugins/${n}.cjs`,
                    o = m.y1.resolve(t.cwd, A);
                  B.xfs.existsSync(o) &&
                    (r.reportInfo(
                      u.b.UNNAMED,
                      `Removing ${e.format(A, s.a5.PATH)}...`
                    ),
                    await B.xfs.removePromise(o)),
                    r.reportInfo(u.b.UNNAMED, "Updating the configuration..."),
                    await s.VK.updateConfiguration(t.cwd, (e) => {
                      if (!Array.isArray(e.plugins)) return e;
                      const t = e.plugins.filter((e) => e.path !== A);
                      return e.plugins.length === t.length
                        ? e
                        : { ...e, plugins: t };
                    });
                }
              )
            ).exitCode();
          }
        }
        (Se.usage = C.Command.Usage({
          category: "Plugin-related commands",
          description: "remove a plugin",
          details:
            "\n      This command deletes the specified plugin from the .yarn/plugins folder and removes it from the configuration.\n\n      **Note:** The plugins have to be referenced by their name property, which can be obtained using the `yarn plugin runtime` command. Shorthands are not allowed.\n   ",
          examples: [
            [
              "Remove a plugin imported from the Yarn repository",
              "$0 plugin remove @yarnpkg/plugin-typescript",
            ],
            [
              "Remove a plugin imported from a local file",
              "$0 plugin remove my-local-plugin",
            ],
          ],
        })),
          (0, a.gn)([C.Command.String()], Se.prototype, "name", void 0),
          (0, a.gn)(
            [C.Command.Path("plugin", "remove")],
            Se.prototype,
            "execute",
            null
          );
        class ke extends c.BaseCommand {
          constructor() {
            super(...arguments), (this.json = !1);
          }
          async execute() {
            const e = await s.VK.find(this.context.cwd, this.context.plugins);
            return (
              await f.Pk.start(
                {
                  configuration: e,
                  json: this.json,
                  stdout: this.context.stdout,
                },
                async (t) => {
                  for (const r of e.plugins.keys()) {
                    const e = this.context.plugins.plugins.has(r);
                    let n = r;
                    e && (n += " [builtin]"),
                      t.reportJson({ name: r, builtin: e }),
                      t.reportInfo(null, "" + n);
                  }
                }
              )
            ).exitCode();
          }
        }
        (ke.usage = C.Command.Usage({
          category: "Plugin-related commands",
          description: "list the active plugins",
          details:
            "\n      This command prints the currently active plugins. Will be displayed both builtin plugins and external plugins.\n    ",
          examples: [
            ["List the currently active plugins", "$0 plugin runtime"],
          ],
        })),
          (0, a.gn)(
            [C.Command.Boolean("--json")],
            ke.prototype,
            "json",
            void 0
          ),
          (0, a.gn)(
            [C.Command.Path("plugin", "runtime")],
            ke.prototype,
            "execute",
            null
          );
        class Me extends c.BaseCommand {
          constructor() {
            super(...arguments), (this.idents = []);
          }
          async execute() {
            const e = await s.VK.find(this.context.cwd, this.context.plugins),
              { project: t, workspace: r } = await h.I.find(
                e,
                this.context.cwd
              ),
              n = await g.C.find(e);
            if (!r) throw new c.WorkspaceRequiredError(t.cwd, this.context.cwd);
            const i = new Set();
            for (const e of this.idents)
              i.add(p.structUtils.parseIdent(e).identHash);
            await t.resolveEverything({ cache: n, report: new I.$() });
            const A = e.get("bstatePath"),
              o = B.xfs.existsSync(A)
                ? (0, oe.parseSyml)(await B.xfs.readFilePromise(A, "utf8"))
                : {},
              a = new Map();
            for (const e of t.storedPackages.values()) {
              if (!Object.prototype.hasOwnProperty.call(o, e.locatorHash))
                continue;
              if (0 === i.size || i.has(e.identHash)) continue;
              const t = o[e.locatorHash];
              a.set(e.locatorHash, t);
            }
            if (a.size > 0) {
              const r = e.get("bstatePath"),
                n = h.I.generateBuildStateFile(a, t.storedPackages);
              await B.xfs.mkdirPromise(m.y1.dirname(r), { recursive: !0 }),
                await B.xfs.changeFilePromise(r, n, { automaticNewlines: !0 });
            } else await B.xfs.removePromise(A);
            return (
              await f.Pk.start(
                {
                  configuration: e,
                  stdout: this.context.stdout,
                  includeLogs: !this.context.quiet,
                },
                async (e) => {
                  await t.install({ cache: n, report: e });
                }
              )
            ).exitCode();
          }
        }
        (Me.usage = C.Command.Usage({
          description: "rebuild the project's native packages",
          details:
            "\n      This command will automatically cause Yarn to forget about previous compilations of the given packages and to run them again.\n\n      Note that while Yarn forgets the compilation, the previous artifacts aren't erased from the filesystem and may affect the next builds (in good or bad). To avoid this, you may remove the .yarn/unplugged folder, or any other relevant location where packages might have been stored (Yarn may offer a way to do that automatically in the future).\n\n      By default all packages will be rebuilt, but you can filter the list by specifying the names of the packages you want to clear from memory.\n    ",
          examples: [
            ["Rebuild all packages", "$0 rebuild"],
            ["Rebuild fsevents only", "$0 rebuild fsevents"],
          ],
        })),
          (0, a.gn)([C.Command.Rest()], Me.prototype, "idents", void 0),
          (0, a.gn)([C.Command.Path("rebuild")], Me.prototype, "execute", null);
        class Ne extends c.BaseCommand {
          constructor() {
            super(...arguments), (this.all = !1), (this.patterns = []);
          }
          async execute() {
            const e = await s.VK.find(this.context.cwd, this.context.plugins),
              { project: t, workspace: r } = await h.I.find(
                e,
                this.context.cwd
              ),
              n = await g.C.find(e);
            if (!r) throw new c.WorkspaceRequiredError(t.cwd, this.context.cwd);
            const A = this.all ? t.workspaces : [r],
              o = [i.REGULAR, i.DEVELOPMENT, i.PEER],
              a = [];
            let l = !1;
            const u = [];
            for (const e of this.patterns) {
              let t = !1;
              const r = p.structUtils.parseIdent(e);
              for (const n of A) {
                const i = [...n.manifest.peerDependenciesMeta.keys()];
                for (const r of z()(i, e))
                  n.manifest.peerDependenciesMeta.delete(r), (l = !0), (t = !0);
                for (const e of o) {
                  const i = n.manifest.getForScope(e),
                    A = [...i.values()].map((e) =>
                      p.structUtils.stringifyIdent(e)
                    );
                  for (const o of z()(A, p.structUtils.stringifyIdent(r))) {
                    const { identHash: r } = p.structUtils.parseIdent(o),
                      A = i.get(r);
                    if (void 0 === A)
                      throw new Error(
                        "Assertion failed: Expected the descriptor to be registered"
                      );
                    n.manifest[e].delete(r),
                      u.push([n, e, A]),
                      (l = !0),
                      (t = !0);
                  }
                }
              }
              t || a.push(e);
            }
            const d = a.length > 1 ? "Patterns" : "Pattern",
              I = a.length > 1 ? "don't" : "doesn't",
              E = this.all ? "any" : "this";
            if (a.length > 0)
              throw new C.UsageError(
                `${d} ${a.join(
                  ", "
                )} ${I} match packages referenced by ${E} workspace`
              );
            if (l) {
              await e.triggerMultipleHooks(
                (e) => e.afterWorkspaceDependencyRemoval,
                u
              );
              return (
                await f.Pk.start(
                  { configuration: e, stdout: this.context.stdout },
                  async (e) => {
                    await t.install({ cache: n, report: e });
                  }
                )
              ).exitCode();
            }
            return 0;
          }
        }
        (Ne.usage = C.Command.Usage({
          description: "remove dependencies from the project",
          details:
            "\n      This command will remove the packages matching the specified patterns from the current workspace.\n\n      If the `-A,--all` option is set, the operation will be applied to all workspaces from the current project.\n\n      This command accepts glob patterns as arguments (if valid Idents and supported by [micromatch](https://github.com/micromatch/micromatch)). Make sure to escape the patterns, to prevent your own shell from trying to expand them.\n    ",
          examples: [
            [
              "Remove a dependency from the current project",
              "$0 remove lodash",
            ],
            [
              "Remove a dependency from all workspaces at once",
              "$0 remove lodash --all",
            ],
            [
              "Remove all dependencies starting with `eslint-`",
              "$0 remove 'eslint-*'",
            ],
            [
              "Remove all dependencies with the `@babel` scope",
              "$0 remove '@babel/*'",
            ],
            [
              "Remove all dependencies matching `react-dom` or `react-helmet`",
              "$0 remove 'react-{dom,helmet}'",
            ],
          ],
        })),
          (0, a.gn)(
            [C.Command.Boolean("-A,--all")],
            Ne.prototype,
            "all",
            void 0
          ),
          (0, a.gn)([C.Command.Rest()], Ne.prototype, "patterns", void 0),
          (0, a.gn)([C.Command.Path("remove")], Ne.prototype, "execute", null);
        class Re extends c.BaseCommand {
          async execute() {
            const e = await s.VK.find(this.context.cwd, this.context.plugins),
              { project: t, workspace: r } = await h.I.find(
                e,
                this.context.cwd
              );
            if (!r) throw new c.WorkspaceRequiredError(t.cwd, this.context.cwd);
            return (
              await f.Pk.start(
                { configuration: e, stdout: this.context.stdout },
                async (t) => {
                  const n = r.manifest.scripts,
                    i = p.miscUtils.sortMap(n.keys(), (e) => e),
                    A = {
                      breakLength: 1 / 0,
                      colors: e.get("enableColors"),
                      maxArrayLength: 2,
                    },
                    o = i.reduce((e, t) => Math.max(e, t.length), 0);
                  for (const [e, r] of n.entries())
                    t.reportInfo(
                      null,
                      `${e.padEnd(o, " ")}   ${(0, P.inspect)(r, A)}`
                    );
                }
              )
            ).exitCode();
          }
        }
        (0, a.gn)([C.Command.Path("run")], Re.prototype, "execute", null);
        class Fe extends c.BaseCommand {
          constructor() {
            super(...arguments),
              (this.inspect = !1),
              (this.inspectBrk = !1),
              (this.topLevel = !1),
              (this.binariesOnly = !1),
              (this.args = []);
          }
          async execute() {
            const e = await s.VK.find(this.context.cwd, this.context.plugins),
              { project: t, workspace: r, locator: n } = await h.I.find(
                e,
                this.context.cwd
              );
            await t.restoreInstallState();
            const i = this.topLevel ? t.topLevelWorkspace.anchoredLocator : n;
            if (
              !this.binariesOnly &&
              (await p.scriptUtils.hasPackageScript(i, this.scriptName, {
                project: t,
              }))
            )
              return await p.scriptUtils.executePackageScript(
                i,
                this.scriptName,
                this.args,
                {
                  project: t,
                  stdin: this.context.stdin,
                  stdout: this.context.stdout,
                  stderr: this.context.stderr,
                }
              );
            if (
              (
                await p.scriptUtils.getPackageAccessibleBinaries(i, {
                  project: t,
                })
              ).get(this.scriptName)
            ) {
              const e = [];
              return (
                this.inspect &&
                  ("string" == typeof this.inspect
                    ? e.push("--inspect=" + this.inspect)
                    : e.push("--inspect")),
                this.inspectBrk &&
                  ("string" == typeof this.inspectBrk
                    ? e.push("--inspect-brk=" + this.inspectBrk)
                    : e.push("--inspect-brk")),
                await p.scriptUtils.executePackageAccessibleBinary(
                  i,
                  this.scriptName,
                  this.args,
                  {
                    cwd: this.context.cwd,
                    project: t,
                    stdin: this.context.stdin,
                    stdout: this.context.stdout,
                    stderr: this.context.stderr,
                    nodeArgs: e,
                  }
                )
              );
            }
            if (
              !this.topLevel &&
              !this.binariesOnly &&
              r &&
              this.scriptName.includes(":")
            ) {
              const e = (
                await Promise.all(
                  t.workspaces.map(async (e) =>
                    e.manifest.scripts.has(this.scriptName) ? e : null
                  )
                )
              ).filter((e) => null !== e);
              if (1 === e.length)
                return await p.scriptUtils.executeWorkspaceScript(
                  e[0],
                  this.scriptName,
                  this.args,
                  {
                    stdin: this.context.stdin,
                    stdout: this.context.stdout,
                    stderr: this.context.stderr,
                  }
                );
            }
            if (this.topLevel)
              throw "node-gyp" === this.scriptName
                ? new C.UsageError(
                    `Couldn't find a script name "${
                      this.scriptName
                    }" in the top-level (used by ${p.structUtils.prettyLocator(
                      e,
                      n
                    )}). This typically happens because some package depends on "node-gyp" to build itself, but didn't list it in their dependencies. To fix that, please run "yarn add node-gyp" into your top-level workspace. You also can open an issue on the repository of the specified package to suggest them to use an optional peer dependency.`
                  )
                : new C.UsageError(
                    `Couldn't find a script name "${
                      this.scriptName
                    }" in the top-level (used by ${p.structUtils.prettyLocator(
                      e,
                      n
                    )}).`
                  );
            {
              if ("global" === this.scriptName)
                throw new C.UsageError(
                  "The 'yarn global' commands have been removed in 2.x - consider using 'yarn dlx' or a third-party plugin instead"
                );
              const e = [this.scriptName].concat(this.args);
              for (const [t, r] of c.pluginCommands)
                for (const n of r)
                  if (
                    e.length >= n.length &&
                    JSON.stringify(e.slice(0, n.length)) === JSON.stringify(n)
                  )
                    throw new C.UsageError(
                      `Couldn't find a script named "${this.scriptName}", but a matching command can be found in the ${t} plugin. You can install it with "yarn plugin import ${t}".`
                    );
              throw new C.UsageError(
                `Couldn't find a script named "${this.scriptName}".`
              );
            }
          }
        }
        (Fe.usage = C.Command.Usage({
          description: "run a script defined in the package.json",
          details:
            "\n      This command will run a tool. The exact tool that will be executed will depend on the current state of your workspace:\n\n      - If the `scripts` field from your local package.json contains a matching script name, its definition will get executed.\n\n      - Otherwise, if one of the local workspace's dependencies exposes a binary with a matching name, this binary will get executed (the `--inspect` and `--inspect-brk` options will then be forwarded to the underlying Node process).\n\n      - Otherwise, if the specified name contains a colon character and if one of the workspaces in the project contains exactly one script with a matching name, then this script will get executed.\n\n      Whatever happens, the cwd of the spawned process will be the workspace that declares the script (which makes it possible to call commands cross-workspaces using the third syntax).\n    ",
          examples: [
            ["Run the tests from the local workspace", "$0 run test"],
            ['Same thing, but without the "run" keyword', "$0 test"],
            ["Inspect Webpack while running", "$0 run --inspect-brk webpack"],
          ],
        })),
          (0, a.gn)(
            [C.Command.String("--inspect", { tolerateBoolean: !0 })],
            Fe.prototype,
            "inspect",
            void 0
          ),
          (0, a.gn)(
            [C.Command.String("--inspect-brk", { tolerateBoolean: !0 })],
            Fe.prototype,
            "inspectBrk",
            void 0
          ),
          (0, a.gn)(
            [C.Command.Boolean("-T,--top-level", { hidden: !0 })],
            Fe.prototype,
            "topLevel",
            void 0
          ),
          (0, a.gn)(
            [C.Command.Boolean("-B,--binaries-only", { hidden: !0 })],
            Fe.prototype,
            "binariesOnly",
            void 0
          ),
          (0, a.gn)(
            [C.Command.Boolean("--silent", { hidden: !0 })],
            Fe.prototype,
            "silent",
            void 0
          ),
          (0, a.gn)([C.Command.String()], Fe.prototype, "scriptName", void 0),
          (0, a.gn)([C.Command.Proxy()], Fe.prototype, "args", void 0),
          (0, a.gn)([C.Command.Path("run")], Fe.prototype, "execute", null);
        class Ke extends c.BaseCommand {
          constructor() {
            super(...arguments), (this.save = !1);
          }
          async execute() {
            const e = await s.VK.find(this.context.cwd, this.context.plugins),
              { project: t, workspace: r } = await h.I.find(
                e,
                this.context.cwd
              ),
              n = await g.C.find(e);
            if (!r) throw new c.WorkspaceRequiredError(t.cwd, this.context.cwd);
            const i = p.structUtils.parseDescriptor(this.descriptor, !0),
              A = p.structUtils.makeDescriptor(i, this.resolution);
            t.storedDescriptors.set(i.descriptorHash, i),
              t.storedDescriptors.set(A.descriptorHash, A),
              t.resolutionAliases.set(i.descriptorHash, A.descriptorHash);
            return (
              await f.Pk.start(
                { configuration: e, stdout: this.context.stdout },
                async (e) => {
                  await t.install({ cache: n, report: e });
                }
              )
            ).exitCode();
          }
        }
        (Ke.usage = C.Command.Usage({
          description: "enforce a package resolution",
          details:
            '\n      This command updates the resolution table so that `descriptor` is resolved by `resolution`.\n\n      Note that by default this command only affect the current resolution table - meaning that this "manual override" will disappear if you remove the lockfile, or if the package disappear from the table. If you wish to make the enforced resolution persist whatever happens, add the `-s,--save` flag which will also edit the `resolutions` field from your top-level manifest.\n\n      Note that no attempt is made at validating that `resolution` is a valid resolution entry for `descriptor`.\n    ',
          examples: [
            [
              "Force all instances of lodash@^1.2.3 to resolve to 1.5.0",
              "$0 set resolution lodash@^1.2.3 1.5.0",
            ],
          ],
        })),
          (0, a.gn)([C.Command.String()], Ke.prototype, "descriptor", void 0),
          (0, a.gn)([C.Command.String()], Ke.prototype, "resolution", void 0),
          (0, a.gn)(
            [C.Command.Boolean("-s,--save")],
            Ke.prototype,
            "save",
            void 0
          ),
          (0, a.gn)(
            [C.Command.Path("set", "resolution")],
            Ke.prototype,
            "execute",
            null
          );
        class xe extends c.BaseCommand {
          constructor() {
            super(...arguments),
              (this.patterns = []),
              (this.interactive = null),
              (this.verbose = !1),
              (this.exact = !1),
              (this.tilde = !1),
              (this.caret = !1);
          }
          async execute() {
            var e;
            const t = await s.VK.find(this.context.cwd, this.context.plugins),
              { project: r, workspace: n } = await h.I.find(
                t,
                this.context.cwd
              ),
              A = await g.C.find(t);
            if (!n) throw new c.WorkspaceRequiredError(r.cwd, this.context.cwd);
            const a =
                null !== (e = this.interactive) && void 0 !== e
                  ? e
                  : t.get("preferInteractive"),
              I = Q(this, r),
              E = a
                ? [o.KEEP, o.REUSE, o.PROJECT, o.LATEST]
                : [o.PROJECT, o.LATEST],
              m = [],
              B = [];
            for (const e of this.patterns) {
              let t = !1;
              const n = p.structUtils.parseDescriptor(e);
              for (const e of r.workspaces)
                for (const o of [i.REGULAR, i.DEVELOPMENT]) {
                  const i = [...e.manifest.getForScope(o).values()].map((e) =>
                    p.structUtils.stringifyIdent(e)
                  );
                  for (const s of z()(i, p.structUtils.stringifyIdent(n))) {
                    const i = p.structUtils.parseIdent(s),
                      a = e.manifest[o].get(i.identHash);
                    if (void 0 === a)
                      throw new Error(
                        "Assertion failed: Expected the descriptor to be registered"
                      );
                    const c = p.structUtils.makeDescriptor(i, n.range);
                    m.push(
                      Promise.resolve().then(async () => [
                        e,
                        o,
                        a,
                        await M(c, {
                          project: r,
                          workspace: e,
                          cache: A,
                          target: o,
                          modifier: I,
                          strategies: E,
                        }),
                      ])
                    ),
                      (t = !0);
                  }
                }
              t || B.push(e);
            }
            if (B.length > 1)
              throw new C.UsageError(
                `Patterns ${B.join(
                  ", "
                )} don't match any packages referenced by any workspace`
              );
            if (B.length > 0)
              throw new C.UsageError(
                `Pattern ${B[0]} doesn't match any packages referenced by any workspace`
              );
            const w = await Promise.all(m),
              y = await l.h.start(
                {
                  configuration: t,
                  stdout: this.context.stdout,
                  suggestInstall: !1,
                },
                async (e) => {
                  for (const [, , n, { suggestions: i, rejections: A }] of w) {
                    const o = i.filter((e) => null !== e.descriptor);
                    if (0 === o.length) {
                      const [i] = A;
                      if (void 0 === i)
                        throw new Error(
                          "Assertion failed: Expected an error to have been set"
                        );
                      const o = this.cli.error(i);
                      r.configuration.get("enableNetwork")
                        ? e.reportError(
                            u.b.CANT_SUGGEST_RESOLUTIONS,
                            `${p.structUtils.prettyDescriptor(
                              t,
                              n
                            )} can't be resolved to a satisfying range\n\n${o}`
                          )
                        : e.reportError(
                            u.b.CANT_SUGGEST_RESOLUTIONS,
                            `${p.structUtils.prettyDescriptor(
                              t,
                              n
                            )} can't be resolved to a satisfying range (note: network resolution has been disabled)\n\n${o}`
                          );
                    } else
                      o.length > 1 &&
                        !a &&
                        e.reportError(
                          u.b.CANT_SUGGEST_RESOLUTIONS,
                          p.structUtils.prettyDescriptor(t, n) +
                            " has multiple possible upgrade strategies; use -i to disambiguate manually"
                        );
                  }
                }
              );
            if (y.hasErrors()) return y.exitCode();
            let v = !1;
            const b = [];
            for (const [e, n, , { suggestions: i }] of w) {
              let A;
              const o = i.filter((e) => null !== e.descriptor),
                s = o[0].descriptor,
                a = o.every((e) =>
                  p.structUtils.areDescriptorsEqual(e.descriptor, s)
                );
              1 === o.length || a
                ? (A = s)
                : ((v = !0),
                  ({ answer: A } = await (0, d.prompt)({
                    type: "select",
                    name: "answer",
                    message: `Which range to you want to use in ${p.structUtils.prettyWorkspace(
                      t,
                      e
                    )} ❯ ${n}?`,
                    choices: i.map(({ descriptor: e, name: t, reason: r }) =>
                      e
                        ? { name: t, hint: r, descriptor: e }
                        : { name: t, hint: r, disabled: !0 }
                    ),
                    onCancel: () => process.exit(130),
                    result(e) {
                      return this.find(e, "descriptor");
                    },
                    stdin: this.context.stdin,
                    stdout: this.context.stdout,
                  })));
              const c = e.manifest[n].get(A.identHash);
              if (void 0 === c)
                throw new Error(
                  "Assertion failed: This descriptor should have a matching entry"
                );
              if (c.descriptorHash !== A.descriptorHash)
                e.manifest[n].set(A.identHash, A), b.push([e, n, c, A]);
              else {
                const n = t.makeResolver(),
                  i = { project: r, resolver: n },
                  A = n.bindDescriptor(c, e.anchoredLocator, i);
                r.forgetResolution(A);
              }
            }
            await t.triggerMultipleHooks(
              (e) => e.afterWorkspaceDependencyReplacement,
              b
            ),
              v && this.context.stdout.write("\n");
            return (
              await f.Pk.start(
                { configuration: t, stdout: this.context.stdout },
                async (e) => {
                  await r.install({ cache: A, report: e });
                }
              )
            ).exitCode();
          }
        }
        (xe.usage = C.Command.Usage({
          description: "upgrade dependencies across the project",
          details:
            "\n      This command upgrades the packages matching the list of specified patterns to their latest available version across the whole project (regardless of whether they're part of `dependencies` or `devDependencies` - `peerDependencies` won't be affected). This is a project-wide command: all workspaces will be upgraded in the process.\n\n      If `-i,--interactive` is set (or if the `preferInteractive` settings is toggled on) the command will offer various choices, depending on the detected upgrade paths. Some upgrades require this flag in order to resolve ambiguities.\n\n      The, `-C,--caret`, `-E,--exact` and  `-T,--tilde` options have the same meaning as in the `add` command (they change the modifier used when the range is missing or a tag, and are ignored when the range is explicitly set).\n\n      This command accepts glob patterns as arguments (if valid Descriptors and supported by [micromatch](https://github.com/micromatch/micromatch)). Make sure to escape the patterns, to prevent your own shell from trying to expand them.\n\n      **Note:** The ranges have to be static, only the package scopes and names can contain glob patterns.\n    ",
          examples: [
            [
              "Upgrade all instances of lodash to the latest release",
              "$0 up lodash",
            ],
            [
              "Upgrade all instances of lodash to the latest release, but ask confirmation for each",
              "$0 up lodash -i",
            ],
            ["Upgrade all instances of lodash to 1.2.3", "$0 up lodash@1.2.3"],
            [
              "Upgrade all instances of packages with the `@babel` scope to the latest release",
              "$0 up '@babel/*'",
            ],
            [
              "Upgrade all instances of packages containing the word `jest` to the latest release",
              "$0 up '*jest*'",
            ],
            [
              "Upgrade all instances of packages with the `@babel` scope to 7.0.0",
              "$0 up '@babel/*@7.0.0'",
            ],
          ],
        })),
          (0, a.gn)([C.Command.Rest()], xe.prototype, "patterns", void 0),
          (0, a.gn)(
            [C.Command.Boolean("-i,--interactive")],
            xe.prototype,
            "interactive",
            void 0
          ),
          (0, a.gn)(
            [C.Command.Boolean("-v,--verbose")],
            xe.prototype,
            "verbose",
            void 0
          ),
          (0, a.gn)(
            [C.Command.Boolean("-E,--exact")],
            xe.prototype,
            "exact",
            void 0
          ),
          (0, a.gn)(
            [C.Command.Boolean("-T,--tilde")],
            xe.prototype,
            "tilde",
            void 0
          ),
          (0, a.gn)(
            [C.Command.Boolean("-C,--caret")],
            xe.prototype,
            "caret",
            void 0
          ),
          (0, a.gn)([C.Command.Path("up")], xe.prototype, "execute", null);
        var Le = r(94682);
        class Pe extends c.BaseCommand {
          constructor() {
            super(...arguments), (this.recursive = !1), (this.peers = !1);
          }
          async execute() {
            const e = await s.VK.find(this.context.cwd, this.context.plugins),
              { project: t, workspace: r } = await h.I.find(
                e,
                this.context.cwd
              );
            if (!r) throw new c.WorkspaceRequiredError(t.cwd, this.context.cwd);
            await t.restoreInstallState();
            const n = p.structUtils.parseIdent(this.package).identHash,
              i = this.recursive
                ? (function (e, t, { configuration: r, peers: n }) {
                    const i = p.miscUtils.sortMap(e.workspaces, (e) =>
                        p.structUtils.stringifyLocator(e.anchoredLocator)
                      ),
                      A = new Set(),
                      o = new Set(),
                      s = (r) => {
                        if (A.has(r.locatorHash)) return o.has(r.locatorHash);
                        if ((A.add(r.locatorHash), r.identHash === t))
                          return o.add(r.locatorHash), !0;
                        let i = !1;
                        r.identHash === t && (i = !0);
                        for (const t of r.dependencies.values()) {
                          if (!n && r.peerDependencies.has(t.identHash))
                            continue;
                          const A = e.storedResolutions.get(t.descriptorHash);
                          if (!A)
                            throw new Error(
                              "Assertion failed: The resolution should have been registered"
                            );
                          const o = e.storedPackages.get(A);
                          if (!o)
                            throw new Error(
                              "Assertion failed: The package should have been registered"
                            );
                          s(o) && (i = !0);
                        }
                        return i && o.add(r.locatorHash), i;
                      };
                    for (const t of i) {
                      const r = e.storedPackages.get(
                        t.anchoredLocator.locatorHash
                      );
                      if (!r)
                        throw new Error(
                          "Assertion failed: The package should have been registered"
                        );
                      s(r);
                    }
                    const a = new Set(),
                      c = {},
                      g = (t, i, A) => {
                        if (!o.has(t.locatorHash)) return;
                        const s = {};
                        if (
                          ((i[
                            null !== A
                              ? `${p.structUtils.prettyLocator(
                                  r,
                                  t
                                )} (via ${p.structUtils.prettyRange(r, A)})`
                              : "" + p.structUtils.prettyLocator(r, t)
                          ] = s),
                          !a.has(t.locatorHash) &&
                            (a.add(t.locatorHash),
                            null === A || !e.tryWorkspaceByLocator(t)))
                        )
                          for (const r of t.dependencies.values()) {
                            if (!n && t.peerDependencies.has(r.identHash))
                              continue;
                            const i = e.storedResolutions.get(r.descriptorHash);
                            if (!i)
                              throw new Error(
                                "Assertion failed: The resolution should have been registered"
                              );
                            const A = e.storedPackages.get(i);
                            if (!A)
                              throw new Error(
                                "Assertion failed: The package should have been registered"
                              );
                            g(A, s, r.range);
                          }
                      };
                    for (const t of i) {
                      const r = e.storedPackages.get(
                        t.anchoredLocator.locatorHash
                      );
                      if (!r)
                        throw new Error(
                          "Assertion failed: The package should have been registered"
                        );
                      g(r, c, null);
                    }
                    return c;
                  })(t, n, { configuration: e, peers: this.peers })
                : (function (e, t, { configuration: r, peers: n }) {
                    const i = p.miscUtils.sortMap(
                        e.storedPackages.values(),
                        (e) => p.structUtils.stringifyLocator(e)
                      ),
                      A = {};
                    for (const o of i) {
                      let i = null;
                      for (const s of o.dependencies.values()) {
                        if (!n && o.peerDependencies.has(s.identHash)) continue;
                        const a = e.storedResolutions.get(s.descriptorHash);
                        if (!a)
                          throw new Error(
                            "Assertion failed: The resolution should have been registered"
                          );
                        const c = e.storedPackages.get(a);
                        if (!c)
                          throw new Error(
                            "Assertion failed: The package should have been registered"
                          );
                        if (c.identHash !== t) continue;
                        if (null === i) {
                          i = {};
                          const e = "" + p.structUtils.prettyLocator(r, o);
                          A[e] = i;
                        }
                        const g = `${p.structUtils.prettyLocator(
                          r,
                          c
                        )} (via ${p.structUtils.prettyRange(r, s.range)})`;
                        i[g] = {};
                      }
                    }
                    return A;
                  })(t, n, { configuration: e, peers: this.peers });
            !(function (e, t) {
              let r = (0, Le.asTree)(t, !1, !1);
              (r = r.replace(/^([├└]─)/gm, "│\n$1").replace(/^│\n/, "")),
                e.write(r);
            })(this.context.stdout, i);
          }
        }
        (Pe.usage = C.Command.Usage({
          description: "display the reason why a package is needed",
          details:
            '\n      This command prints the exact reasons why a package appears in the dependency tree.\n\n      If `-R,--recursive` is set, the listing will go in depth and will list, for each workspaces, what are all the paths that lead to the dependency. Note that the display is somewhat optimized in that it will not print the package listing twice for a single package, so if you see a leaf named "Foo" when looking for "Bar", it means that "Foo" already got printed higher in the tree.\n\n      If `--peers` is set, the command will also print the peer dependencies that match the specified name.\n    ',
          examples: [
            ["Explain why lodash is used in your project", "$0 why lodash"],
          ],
        })),
          (0, a.gn)([C.Command.String()], Pe.prototype, "package", void 0),
          (0, a.gn)(
            [C.Command.Boolean("-R,--recursive")],
            Pe.prototype,
            "recursive",
            void 0
          ),
          (0, a.gn)(
            [C.Command.Boolean("--peers")],
            Pe.prototype,
            "peers",
            void 0
          ),
          (0, a.gn)([C.Command.Path("why")], Pe.prototype, "execute", null);
        class Ue extends c.BaseCommand {
          constructor() {
            super(...arguments), (this.verbose = !1), (this.json = !1);
          }
          async execute() {
            const e = await s.VK.find(this.context.cwd, this.context.plugins),
              { project: t } = await h.I.find(e, this.context.cwd);
            return (
              await f.Pk.start(
                {
                  configuration: e,
                  json: this.json,
                  stdout: this.context.stdout,
                },
                async (e) => {
                  for (const r of t.workspaces) {
                    const { manifest: n } = r;
                    let i;
                    if (this.verbose) {
                      const e = new Set(),
                        r = new Set();
                      for (const i of E.G.hardDependencies)
                        for (const [A, o] of n.getForScope(i)) {
                          const n = t.tryWorkspaceByDescriptor(o);
                          null === n
                            ? t.workspacesByIdent.has(A) && r.add(o)
                            : e.add(n);
                        }
                      i = {
                        workspaceDependencies: Array.from(e).map(
                          (e) => e.relativeCwd
                        ),
                        mismatchedWorkspaceDependencies: Array.from(
                          r
                        ).map((e) => p.structUtils.stringifyDescriptor(e)),
                      };
                    }
                    e.reportInfo(null, "" + r.relativeCwd),
                      e.reportJson({
                        location: r.relativeCwd,
                        name: n.name
                          ? p.structUtils.stringifyIdent(n.name)
                          : null,
                        ...i,
                      });
                  }
                }
              )
            ).exitCode();
          }
        }
        (Ue.usage = C.Command.Usage({
          category: "Workspace-related commands",
          description: "list all available workspaces",
          details:
            "\n      This command will print the list of all workspaces in the project. If both the `-v,--verbose` and `--json` options are set, Yarn will also return the cross-dependencies between each workspaces (useful when you wish to automatically generate Buck / Bazel rules).\n\n      If the `--json` flag is set the output will follow a JSON-stream output also known as NDJSON (https://github.com/ndjson/ndjson-spec).\n    ",
        })),
          (0, a.gn)(
            [C.Command.Boolean("-v,--verbose")],
            Ue.prototype,
            "verbose",
            void 0
          ),
          (0, a.gn)(
            [C.Command.Boolean("--json")],
            Ue.prototype,
            "json",
            void 0
          ),
          (0, a.gn)(
            [C.Command.Path("workspaces", "list")],
            Ue.prototype,
            "execute",
            null
          );
        class Te extends C.Command {
          constructor() {
            super(...arguments), (this.args = []);
          }
          async execute() {
            const e = await s.VK.find(this.context.cwd, this.context.plugins),
              { project: t, workspace: r } = await h.I.find(
                e,
                this.context.cwd
              );
            if (!r) throw new c.WorkspaceRequiredError(t.cwd, this.context.cwd);
            const n = t.workspaces,
              i = new Map(
                n.map((e) => {
                  const t = p.structUtils.convertToIdent(e.locator);
                  return [p.structUtils.stringifyIdent(t), e];
                })
              ),
              A = i.get(this.workspaceName);
            if (void 0 === A) {
              const e = Array.from(i.keys()).sort();
              throw new C.UsageError(
                `Workspace '${
                  this.workspaceName
                }' not found. Did you mean any of the following:\n  - ${e.join(
                  "\n  - "
                )}?`
              );
            }
            return this.cli.run([this.commandName, ...this.args], {
              cwd: A.cwd,
            });
          }
        }
        (Te.usage = C.Command.Usage({
          category: "Workspace-related commands",
          description: "run a command within the specified workspace",
          details:
            "\n      This command will run a given sub-command on a single workspace.\n    ",
          examples: [
            [
              "Add a package to a single workspace",
              "yarn workspace components add -D react",
            ],
            [
              "Run build script on a single workspace",
              "yarn workspace components run build",
            ],
          ],
        })),
          (0, a.gn)(
            [C.Command.String()],
            Te.prototype,
            "workspaceName",
            void 0
          ),
          (0, a.gn)([C.Command.String()], Te.prototype, "commandName", void 0),
          (0, a.gn)([C.Command.Proxy()], Te.prototype, "args", void 0),
          (0, a.gn)(
            [C.Command.Path("workspace")],
            Te.prototype,
            "execute",
            null
          );
        const Oe = {
          configuration: {
            enableImmutableInstalls: {
              description:
                "If true, prevents the install command from modifying the lockfile",
              type: s.a2.BOOLEAN,
              default: !1,
            },
            defaultSemverRangePrefix: {
              description: "The default save prefix: '^', '~' or ''",
              type: s.a2.STRING,
              default: A.CARET,
            },
          },
          commands: [
            K,
            U,
            _,
            Ke,
            Ie,
            fe,
            Ue,
            $,
            ee,
            te,
            ne,
            R,
            F,
            H,
            Z,
            ie,
            ae,
            ce,
            ge,
            De,
            ve,
            Se,
            Qe,
            ke,
            Me,
            Ne,
            Re,
            Fe,
            xe,
            Pe,
            Te,
          ],
        };
      },
      74802: (e, t, r) => {
        "use strict";
        r.r(t), r.d(t, { fileUtils: () => n, default: () => C });
        var n = {};
        r.r(n),
          r.d(n, {
            makeArchiveFromLocator: () => u,
            makeBufferFromLocator: () => h,
            makeLocator: () => l,
            makeSpec: () => g,
            parseSpec: () => c,
          });
        var i = r(5624),
          A = r(46009);
        const o = /^(?:[a-zA-Z]:[\\/]|\.{0,2}\/)/,
          s = /^[^?]*\.(?:tar\.gz|tgz)(?:::.*)?$/;
        var a = r(75448);
        function c(e) {
          const { params: t, selector: r } = i.structUtils.parseRange(e),
            n = A.cS.toPortablePath(r);
          return {
            parentLocator:
              t && "string" == typeof t.locator
                ? i.structUtils.parseLocator(t.locator)
                : null,
            path: n,
          };
        }
        function g({ parentLocator: e, path: t, folderHash: r, protocol: n }) {
          const A =
              null !== e ? { locator: i.structUtils.stringifyLocator(e) } : {},
            o = void 0 !== r ? { hash: r } : {};
          return i.structUtils.makeRange({
            protocol: n,
            source: t,
            selector: t,
            params: { ...o, ...A },
          });
        }
        function l(
          e,
          { parentLocator: t, path: r, folderHash: n, protocol: A }
        ) {
          return i.structUtils.makeLocator(
            e,
            g({ parentLocator: t, path: r, folderHash: n, protocol: A })
          );
        }
        async function u(
          e,
          { protocol: t, fetchOptions: r, inMemory: n = !1 }
        ) {
          const {
              parentLocator: o,
              path: s,
            } = i.structUtils.parseFileStyleRange(e.reference, { protocol: t }),
            c = A.y1.isAbsolute(s)
              ? {
                  packageFs: new a.M(A.LZ.root),
                  prefixPath: A.LZ.dot,
                  localPath: A.LZ.root,
                }
              : await r.fetcher.fetch(o, r),
            g = c.localPath
              ? {
                  packageFs: new a.M(A.LZ.root),
                  prefixPath: A.y1.relative(A.LZ.root, c.localPath),
                }
              : c;
          c !== g && c.releaseFs && c.releaseFs();
          const l = g.packageFs,
            u = A.y1.join(g.prefixPath, s);
          return await i.miscUtils.releaseAfterUseAsync(
            async () =>
              await i.tgzUtils.makeArchiveFromDirectory(u, {
                baseFs: l,
                prefixPath: i.structUtils.getIdentVendorPath(e),
                compressionLevel: r.project.configuration.get(
                  "compressionLevel"
                ),
                inMemory: n,
              }),
            g.releaseFs
          );
        }
        async function h(e, { protocol: t, fetchOptions: r }) {
          return (
            await u(e, { protocol: t, fetchOptions: r, inMemory: !0 })
          ).getBufferAndClose();
        }
        var f = r(32485),
          p = r(46611);
        const C = {
          fetchers: [
            class {
              supports(e, t) {
                return (
                  !!s.test(e.reference) && !!e.reference.startsWith("file:")
                );
              }
              getLocalPath(e, t) {
                return null;
              }
              async fetch(e, t) {
                const r = t.checksums.get(e.locatorHash) || null,
                  [n, A, o] = await t.cache.fetchPackageFromCache(e, r, {
                    onHit: () => t.report.reportCacheHit(e),
                    onMiss: () =>
                      t.report.reportCacheMiss(
                        e,
                        i.structUtils.prettyLocator(
                          t.project.configuration,
                          e
                        ) +
                          " can't be found in the cache and will be fetched from the disk"
                      ),
                    loader: () => this.fetchFromDisk(e, t),
                    skipIntegrityCheck: t.skipIntegrityCheck,
                  });
                return {
                  packageFs: n,
                  releaseFs: A,
                  prefixPath: i.structUtils.getIdentVendorPath(e),
                  checksum: o,
                };
              }
              async fetchFromDisk(e, t) {
                const {
                    parentLocator: r,
                    path: n,
                  } = i.structUtils.parseFileStyleRange(e.reference, {
                    protocol: "file:",
                  }),
                  o = A.y1.isAbsolute(n)
                    ? {
                        packageFs: new a.M(A.LZ.root),
                        prefixPath: A.LZ.dot,
                        localPath: A.LZ.root,
                      }
                    : await t.fetcher.fetch(r, t),
                  s = o.localPath
                    ? {
                        packageFs: new a.M(A.LZ.root),
                        prefixPath: A.y1.relative(A.LZ.root, o.localPath),
                      }
                    : o;
                o !== s && o.releaseFs && o.releaseFs();
                const c = s.packageFs,
                  g = A.y1.join(s.prefixPath, n),
                  l = await c.readFilePromise(g);
                return await i.miscUtils.releaseAfterUseAsync(
                  async () =>
                    await i.tgzUtils.convertToZip(l, {
                      compressionLevel: t.project.configuration.get(
                        "compressionLevel"
                      ),
                      prefixPath: i.structUtils.getIdentVendorPath(e),
                      stripComponents: 1,
                    }),
                  s.releaseFs
                );
              }
            },
            class {
              supports(e, t) {
                return !!e.reference.startsWith("file:");
              }
              getLocalPath(e, t) {
                const {
                  parentLocator: r,
                  path: n,
                } = i.structUtils.parseFileStyleRange(e.reference, {
                  protocol: "file:",
                });
                if (A.y1.isAbsolute(n)) return n;
                const o = t.fetcher.getLocalPath(r, t);
                return null === o ? null : A.y1.resolve(o, n);
              }
              async fetch(e, t) {
                const r = t.checksums.get(e.locatorHash) || null,
                  [n, A, o] = await t.cache.fetchPackageFromCache(e, r, {
                    onHit: () => t.report.reportCacheHit(e),
                    onMiss: () =>
                      t.report.reportCacheMiss(
                        e,
                        i.structUtils.prettyLocator(
                          t.project.configuration,
                          e
                        ) +
                          " can't be found in the cache and will be fetched from the disk"
                      ),
                    loader: () => this.fetchFromDisk(e, t),
                    skipIntegrityCheck: t.skipIntegrityCheck,
                  });
                return {
                  packageFs: n,
                  releaseFs: A,
                  prefixPath: i.structUtils.getIdentVendorPath(e),
                  localPath: this.getLocalPath(e, t),
                  checksum: o,
                };
              }
              async fetchFromDisk(e, t) {
                return u(e, { protocol: "file:", fetchOptions: t });
              }
            },
          ],
          resolvers: [
            class {
              supportsDescriptor(e, t) {
                return (
                  !!s.test(e.range) &&
                  (!!e.range.startsWith("file:") || !!o.test(e.range))
                );
              }
              supportsLocator(e, t) {
                return (
                  !!s.test(e.reference) && !!e.reference.startsWith("file:")
                );
              }
              shouldPersistResolution(e, t) {
                return !0;
              }
              bindDescriptor(e, t, r) {
                return (
                  o.test(e.range) &&
                    (e = i.structUtils.makeDescriptor(e, "file:" + e.range)),
                  i.structUtils.bindDescriptor(e, {
                    locator: i.structUtils.stringifyLocator(t),
                  })
                );
              }
              getResolutionDependencies(e, t) {
                return [];
              }
              async getCandidates(e, t, r) {
                let n = e.range;
                return (
                  n.startsWith("file:") && (n = n.slice("file:".length)),
                  [
                    i.structUtils.makeLocator(
                      e,
                      "file:" + A.cS.toPortablePath(n)
                    ),
                  ]
                );
              }
              async getSatisfying(e, t, r) {
                return null;
              }
              async resolve(e, t) {
                if (!t.fetchOptions)
                  throw new Error(
                    "Assertion failed: This resolver cannot be used unless a fetcher is configured"
                  );
                const r = await t.fetchOptions.fetcher.fetch(e, t.fetchOptions),
                  n = await i.miscUtils.releaseAfterUseAsync(
                    async () =>
                      await p.G.find(r.prefixPath, { baseFs: r.packageFs }),
                    r.releaseFs
                  );
                return {
                  ...e,
                  version: n.version || "0.0.0",
                  languageName: t.project.configuration.get(
                    "defaultLanguageName"
                  ),
                  linkType: f.U.HARD,
                  dependencies: n.dependencies,
                  peerDependencies: n.peerDependencies,
                  dependenciesMeta: n.dependenciesMeta,
                  peerDependenciesMeta: n.peerDependenciesMeta,
                  bin: n.bin,
                };
              }
            },
            class {
              supportsDescriptor(e, t) {
                return !!e.range.match(o) || !!e.range.startsWith("file:");
              }
              supportsLocator(e, t) {
                return !!e.reference.startsWith("file:");
              }
              shouldPersistResolution(e, t) {
                return !1;
              }
              bindDescriptor(e, t, r) {
                return (
                  o.test(e.range) &&
                    (e = i.structUtils.makeDescriptor(e, "file:" + e.range)),
                  i.structUtils.bindDescriptor(e, {
                    locator: i.structUtils.stringifyLocator(t),
                  })
                );
              }
              getResolutionDependencies(e, t) {
                return [];
              }
              async getCandidates(e, t, r) {
                if (!r.fetchOptions)
                  throw new Error(
                    "Assertion failed: This resolver cannot be used unless a fetcher is configured"
                  );
                const { path: n, parentLocator: A } = c(e.range);
                if (null === A)
                  throw new Error(
                    "Assertion failed: The descriptor should have been bound"
                  );
                const o = await h(
                  i.structUtils.makeLocator(
                    e,
                    i.structUtils.makeRange({
                      protocol: "file:",
                      source: n,
                      selector: n,
                      params: { locator: i.structUtils.stringifyLocator(A) },
                    })
                  ),
                  { protocol: "file:", fetchOptions: r.fetchOptions }
                );
                return [
                  l(e, {
                    parentLocator: A,
                    path: n,
                    folderHash: i.hashUtils.makeHash("1", o).slice(0, 6),
                    protocol: "file:",
                  }),
                ];
              }
              async getSatisfying(e, t, r) {
                return null;
              }
              async resolve(e, t) {
                if (!t.fetchOptions)
                  throw new Error(
                    "Assertion failed: This resolver cannot be used unless a fetcher is configured"
                  );
                const r = await t.fetchOptions.fetcher.fetch(e, t.fetchOptions),
                  n = await i.miscUtils.releaseAfterUseAsync(
                    async () =>
                      await p.G.find(r.prefixPath, { baseFs: r.packageFs }),
                    r.releaseFs
                  );
                return {
                  ...e,
                  version: n.version || "0.0.0",
                  languageName: t.project.configuration.get(
                    "defaultLanguageName"
                  ),
                  linkType: f.U.HARD,
                  dependencies: n.dependencies,
                  peerDependencies: n.peerDependencies,
                  dependenciesMeta: n.dependenciesMeta,
                  peerDependenciesMeta: n.peerDependenciesMeta,
                  bin: n.bin,
                };
              }
            },
          ],
        };
      },
      10284: (e, t, r) => {
        "use strict";
        r.r(t), r.d(t, { gitUtils: () => n, default: () => Q });
        var n = {};
        r.r(n),
          r.d(n, {
            TreeishProtocols: () => f,
            clone: () => B,
            isGitUrl: () => p,
            lsRemote: () => E,
            normalizeLocator: () => I,
            normalizeRepoUrl: () => d,
            resolveUrl: () => m,
            splitRepoUrl: () => C,
          });
        var i = r(27122),
          A = r(5624),
          o = r(46009),
          s = r(56537),
          a = r(71191),
          c = r.n(a),
          g = r(53887),
          l = r.n(g);
        function u() {
          return { ...process.env, GIT_SSH_COMMAND: "ssh -o BatchMode=yes" };
        }
        const h = [
          /^ssh:/,
          /^git(?:\+[^:]+)?:/,
          /^(?:git\+)?https?:[^#]+\/[^#]+(?:\.git)(?:#.*)?$/,
          /^git@[^#]+\/[^#]+\.git(?:#.*)?$/,
          /^(?:github:|https:\/\/github\.com\/)?(?!\.{1,2}\/)([a-zA-Z._0-9-]+)\/(?!\.{1,2}(?:#|$))([a-zA-Z._0-9-]+?)(?:\.git)?(?:#.*)?$/,
          /^https:\/\/github\.com\/(?!\.{1,2}\/)([a-zA-Z0-9._-]+)\/(?!\.{1,2}(?:#|$))([a-zA-Z0-9._-]+?)\/tarball\/(.+)?$/,
        ];
        var f;
        function p(e) {
          return !!e && h.some((t) => !!e.match(t));
        }
        function C(e) {
          const t = (e = d(e)).indexOf("#");
          if (-1 === t)
            return {
              repo: e,
              treeish: { protocol: f.Head, request: "master" },
              extra: {},
            };
          const r = e.slice(0, t),
            n = e.slice(t + 1);
          if (n.match(/^[a-z]+=/)) {
            const e = c().parse(n);
            for (const [t, r] of Object.entries(e))
              if ("string" != typeof r)
                throw new Error(
                  `Assertion failed: The ${t} parameter must be a literal string`
                );
            const t = Object.values(f).find((t) =>
              Object.prototype.hasOwnProperty.call(e, t)
            );
            let i, A;
            void 0 !== t
              ? ((i = t), (A = e[t]))
              : ((i = f.Head), (A = "master"));
            for (const t of Object.values(f)) delete e[t];
            return { repo: r, treeish: { protocol: i, request: A }, extra: e };
          }
          {
            const e = n.indexOf(":");
            let t, i;
            return (
              -1 === e
                ? ((t = null), (i = n))
                : ((t = n.slice(0, e)), (i = n.slice(e + 1))),
              { repo: r, treeish: { protocol: t, request: i }, extra: {} }
            );
          }
        }
        function d(e, { git: t = !1 } = {}) {
          return (
            (e = (e = (e = e.replace(/^git\+https:/, "https:")).replace(
              /^(?:github:|https:\/\/github\.com\/)?(?!\.{1,2}\/)([a-zA-Z0-9._-]+)\/(?!\.{1,2}(?:#|$))([a-zA-Z0-9._-]+?)(?:\.git)?(#.*)?$/,
              "https://github.com/$1/$2.git$3"
            )).replace(
              /^https:\/\/github\.com\/(?!\.{1,2}\/)([a-zA-Z0-9._-]+)\/(?!\.{1,2}(?:#|$))([a-zA-Z0-9._-]+?)\/tarball\/(.+)?$/,
              "https://github.com/$1/$2.git#$3"
            )),
            t && (e = e.replace(/^git\+([^:]+):/, "$1:")),
            e
          );
        }
        function I(e) {
          return A.structUtils.makeLocator(e, d(e.reference));
        }
        async function E(e, t) {
          if (!t.get("enableNetwork"))
            throw new Error(
              `Network access has been disabled by configuration (${e})`
            );
          let r;
          try {
            r = await A.execUtils.execvp(
              "git",
              ["ls-remote", "--refs", d(e, { git: !0 })],
              { cwd: t.startingCwd, env: u(), strict: !0 }
            );
          } catch (t) {
            throw ((t.message = `Listing the refs for ${e} failed`), t);
          }
          const n = new Map(),
            i = /^([a-f0-9]{40})\t(refs\/[^\n]+)/gm;
          let o;
          for (; null !== (o = i.exec(r.stdout)); ) n.set(o[2], o[1]);
          return n;
        }
        async function m(e, t) {
          const {
              repo: r,
              treeish: { protocol: n, request: i },
              extra: A,
            } = C(e),
            o = await E(r, t),
            s = (e, t) => {
              switch (e) {
                case f.Commit:
                  if (!t.match(/^[a-f0-9]{40}$/))
                    throw new Error("Invalid commit hash");
                  return c().stringify({ ...A, commit: t });
                case f.Head: {
                  const e = o.get("refs/heads/" + t);
                  if (void 0 === e) throw new Error(`Unknown head ("${t}")`);
                  return c().stringify({ ...A, commit: e });
                }
                case f.Tag: {
                  const e = o.get("refs/tags/" + t);
                  if (void 0 === e) throw new Error(`Unknown tag ("${t}")`);
                  return c().stringify({ ...A, commit: e });
                }
                case f.Semver: {
                  if (!l().validRange(t))
                    throw new Error(`Invalid range ("${t}")`);
                  const e = new Map(
                      [...o.entries()]
                        .filter(([e]) => e.startsWith("refs/tags/"))
                        .map(([e, t]) => [l().parse(e.slice(10)), t])
                        .filter((e) => null !== e[0])
                    ),
                    r = l().maxSatisfying([...e.keys()], t);
                  if (null === r) throw new Error(`No matching range ("${t}")`);
                  return c().stringify({ ...A, commit: e.get(r) });
                }
                case null: {
                  let e;
                  if (null !== (e = a(f.Commit, t))) return e;
                  if (null !== (e = a(f.Tag, t))) return e;
                  if (null !== (e = a(f.Head, t))) return e;
                  throw t.match(/^[a-f0-9]+$/)
                    ? new Error(
                        `Couldn't resolve "${t}" as either a commit, a tag, or a head - if a commit, use the 40-characters commit hash`
                      )
                    : new Error(
                        `Couldn't resolve "${t}" as either a commit, a tag, or a head`
                      );
                }
                default:
                  throw new Error(`Invalid Git resolution protocol ("${e}")`);
              }
            },
            a = (e, t) => {
              try {
                return s(e, t);
              } catch (e) {
                return null;
              }
            };
          return `${r}#${s(n, i)}`;
        }
        async function B(e, t) {
          if (!t.get("enableNetwork"))
            throw new Error(
              `Network access has been disabled by configuration (${e})`
            );
          return await t.getLimit("cloneConcurrency")(async () => {
            const {
              repo: t,
              treeish: { protocol: r, request: n },
            } = C(e);
            if ("commit" !== r)
              throw new Error("Invalid treeish protocol when cloning");
            const i = await s.xfs.mktempPromise(),
              a = { cwd: i, env: u(), strict: !0 };
            try {
              await A.execUtils.execvp(
                "git",
                [
                  "clone",
                  "-c core.autocrlf=false",
                  d(t, { git: !0 }),
                  o.cS.fromPortablePath(i),
                ],
                a
              ),
                await A.execUtils.execvp("git", ["checkout", "" + n], a);
            } catch (e) {
              throw ((e.message = "Repository clone failed: " + e.message), e);
            }
            return i;
          });
        }
        !(function (e) {
          (e.Commit = "commit"),
            (e.Head = "head"),
            (e.Tag = "tag"),
            (e.Semver = "semver");
        })(f || (f = {}));
        var w = r(32485),
          y = r(46611);
        const Q = {
          configuration: {
            cloneConcurrency: {
              description: "Maximal number of concurrent clones",
              type: i.a2.NUMBER,
              default: 2,
            },
          },
          fetchers: [
            class {
              supports(e, t) {
                return p(e.reference);
              }
              getLocalPath(e, t) {
                return null;
              }
              async fetch(e, t) {
                const r = t.checksums.get(e.locatorHash) || null,
                  n = I(e),
                  i = new Map(t.checksums);
                i.set(n.locatorHash, r);
                const o = { ...t, checksums: i },
                  s = await this.downloadHosted(n, o);
                if (null !== s) return s;
                const [a, c, g] = await t.cache.fetchPackageFromCache(e, r, {
                  onHit: () => t.report.reportCacheHit(e),
                  onMiss: () =>
                    t.report.reportCacheMiss(
                      e,
                      A.structUtils.prettyLocator(t.project.configuration, e) +
                        " can't be found in the cache and will be fetched from the remote repository"
                    ),
                  loader: () => this.cloneFromRemote(n, o),
                  skipIntegrityCheck: t.skipIntegrityCheck,
                });
                return {
                  packageFs: a,
                  releaseFs: c,
                  prefixPath: A.structUtils.getIdentVendorPath(e),
                  checksum: g,
                };
              }
              async downloadHosted(e, t) {
                return t.project.configuration.reduceHook(
                  (e) => e.fetchHostedRepository,
                  null,
                  e,
                  t
                );
              }
              async cloneFromRemote(e, t) {
                const r = await B(e.reference, t.project.configuration),
                  n = C(e.reference),
                  i = o.y1.join(r, "package.tgz");
                await A.scriptUtils.prepareExternalProject(r, i, {
                  configuration: t.project.configuration,
                  report: t.report,
                  workspace: n.extra.workspace,
                });
                const a = await s.xfs.readFilePromise(i);
                return await A.miscUtils.releaseAfterUseAsync(
                  async () =>
                    await A.tgzUtils.convertToZip(a, {
                      compressionLevel: t.project.configuration.get(
                        "compressionLevel"
                      ),
                      prefixPath: A.structUtils.getIdentVendorPath(e),
                      stripComponents: 1,
                    })
                );
              }
            },
          ],
          resolvers: [
            class {
              supportsDescriptor(e, t) {
                return p(e.range);
              }
              supportsLocator(e, t) {
                return p(e.reference);
              }
              shouldPersistResolution(e, t) {
                return !0;
              }
              bindDescriptor(e, t, r) {
                return e;
              }
              getResolutionDependencies(e, t) {
                return [];
              }
              async getCandidates(e, t, r) {
                const n = await m(e.range, r.project.configuration);
                return [A.structUtils.makeLocator(e, n)];
              }
              async getSatisfying(e, t, r) {
                return null;
              }
              async resolve(e, t) {
                if (!t.fetchOptions)
                  throw new Error(
                    "Assertion failed: This resolver cannot be used unless a fetcher is configured"
                  );
                const r = await t.fetchOptions.fetcher.fetch(e, t.fetchOptions),
                  n = await A.miscUtils.releaseAfterUseAsync(
                    async () =>
                      await y.G.find(r.prefixPath, { baseFs: r.packageFs }),
                    r.releaseFs
                  );
                return {
                  ...e,
                  version: n.version || "0.0.0",
                  languageName: t.project.configuration.get(
                    "defaultLanguageName"
                  ),
                  linkType: w.U.HARD,
                  dependencies: n.dependencies,
                  peerDependencies: n.peerDependencies,
                  dependenciesMeta: n.dependenciesMeta,
                  peerDependenciesMeta: n.peerDependenciesMeta,
                  bin: n.bin,
                };
              }
            },
          ],
        };
      },
      23599: (e, t, r) => {
        "use strict";
        r.r(t), r.d(t, { default: () => u });
        var n = r(5624),
          i = r(56537),
          A = r(75448),
          o = r(46009),
          s = r(10284),
          a = r(71191),
          c = r.n(a);
        const g = [
          /^https?:\/\/(?:([^/]+?)@)?github.com\/([^/#]+)\/([^/#]+)\/tarball\/([^/#]+)(?:#(.*))?$/,
          /^https?:\/\/(?:([^/]+?)@)?github.com\/([^/#]+)\/([^/#]+?)(?:\.git)?(?:#(.*))?$/,
        ];
        class l {
          supports(e, t) {
            return !(!(r = e.reference) || !g.some((e) => !!r.match(e)));
            var r;
          }
          getLocalPath(e, t) {
            return null;
          }
          async fetch(e, t) {
            const r = t.checksums.get(e.locatorHash) || null,
              [i, A, o] = await t.cache.fetchPackageFromCache(e, r, {
                onHit: () => t.report.reportCacheHit(e),
                onMiss: () =>
                  t.report.reportCacheMiss(
                    e,
                    n.structUtils.prettyLocator(t.project.configuration, e) +
                      " can't be found in the cache and will be fetched from GitHub"
                  ),
                loader: () => this.fetchFromNetwork(e, t),
                skipIntegrityCheck: t.skipIntegrityCheck,
              });
            return {
              packageFs: i,
              releaseFs: A,
              prefixPath: n.structUtils.getIdentVendorPath(e),
              checksum: o,
            };
          }
          async fetchFromNetwork(e, t) {
            const r = await n.httpUtils.get(this.getLocatorUrl(e, t), {
              configuration: t.project.configuration,
            });
            return await i.xfs.mktempPromise(async (a) => {
              const c = new A.M(a);
              await n.tgzUtils.extractArchiveTo(r, c, { stripComponents: 1 });
              const g = s.gitUtils.splitRepoUrl(e.reference),
                l = o.y1.join(a, "package.tgz");
              await n.scriptUtils.prepareExternalProject(a, l, {
                configuration: t.project.configuration,
                report: t.report,
                workspace: g.extra.workspace,
              });
              const u = await i.xfs.readFilePromise(l);
              return await n.tgzUtils.convertToZip(u, {
                compressionLevel: t.project.configuration.get(
                  "compressionLevel"
                ),
                prefixPath: n.structUtils.getIdentVendorPath(e),
                stripComponents: 1,
              });
            });
          }
          getLocatorUrl(e, t) {
            const {
              auth: r,
              username: n,
              reponame: i,
              treeish: A,
            } = (function (e) {
              let t;
              for (const r of g) if (((t = e.match(r)), t)) break;
              if (!t)
                throw new Error(
                  `Input cannot be parsed as a valid GitHub URL ('${e}').`
                );
              let [, r, n, i, A = "master"] = t;
              const { commit: o } = c().parse(A);
              return (
                (A = o || A.replace(/[^:]*:/, "")),
                { auth: r, username: n, reponame: i, treeish: A }
              );
            })(e.reference);
            return `https://${
              r ? r + "@" : ""
            }github.com/${n}/${i}/archive/${A}.tar.gz`;
          }
        }
        const u = {
          hooks: {
            async fetchHostedRepository(e, t, r) {
              if (null !== e) return e;
              const n = new l();
              if (!n.supports(t, r)) return null;
              try {
                return await n.fetch(t, r);
              } catch (e) {
                return null;
              }
            },
          },
        };
      },
      21754: (e, t, r) => {
        "use strict";
        r.r(t), r.d(t, { default: () => a });
        var n = r(5624);
        const i = /^[^?]*\.(?:tar\.gz|tgz)(?:\?.*)?$/,
          A = /^https?:/;
        var o = r(46611),
          s = r(32485);
        const a = {
          fetchers: [
            class {
              supports(e, t) {
                return !!i.test(e.reference) && !!A.test(e.reference);
              }
              getLocalPath(e, t) {
                return null;
              }
              async fetch(e, t) {
                const r = t.checksums.get(e.locatorHash) || null,
                  [i, A, o] = await t.cache.fetchPackageFromCache(e, r, {
                    onHit: () => t.report.reportCacheHit(e),
                    onMiss: () =>
                      t.report.reportCacheMiss(
                        e,
                        n.structUtils.prettyLocator(
                          t.project.configuration,
                          e
                        ) +
                          " can't be found in the cache and will be fetched from the remote server"
                      ),
                    loader: () => this.fetchFromNetwork(e, t),
                    skipIntegrityCheck: t.skipIntegrityCheck,
                  });
                return {
                  packageFs: i,
                  releaseFs: A,
                  prefixPath: n.structUtils.getIdentVendorPath(e),
                  checksum: o,
                };
              }
              async fetchFromNetwork(e, t) {
                const r = await n.httpUtils.get(e.reference, {
                  configuration: t.project.configuration,
                });
                return await n.tgzUtils.convertToZip(r, {
                  compressionLevel: t.project.configuration.get(
                    "compressionLevel"
                  ),
                  prefixPath: n.structUtils.getIdentVendorPath(e),
                  stripComponents: 1,
                });
              }
            },
          ],
          resolvers: [
            class {
              supportsDescriptor(e, t) {
                return !!i.test(e.range) && !!A.test(e.range);
              }
              supportsLocator(e, t) {
                return !!i.test(e.reference) && !!A.test(e.reference);
              }
              shouldPersistResolution(e, t) {
                return !0;
              }
              bindDescriptor(e, t, r) {
                return e;
              }
              getResolutionDependencies(e, t) {
                return [];
              }
              async getCandidates(e, t, r) {
                return [n.structUtils.convertDescriptorToLocator(e)];
              }
              async getSatisfying(e, t, r) {
                return null;
              }
              async resolve(e, t) {
                if (!t.fetchOptions)
                  throw new Error(
                    "Assertion failed: This resolver cannot be used unless a fetcher is configured"
                  );
                const r = await t.fetchOptions.fetcher.fetch(e, t.fetchOptions),
                  i = await n.miscUtils.releaseAfterUseAsync(
                    async () =>
                      await o.G.find(r.prefixPath, { baseFs: r.packageFs }),
                    r.releaseFs
                  );
                return {
                  ...e,
                  version: i.version || "0.0.0",
                  languageName: t.project.configuration.get(
                    "defaultLanguageName"
                  ),
                  linkType: s.U.HARD,
                  dependencies: i.dependencies,
                  peerDependencies: i.peerDependencies,
                  dependenciesMeta: i.dependenciesMeta,
                  peerDependenciesMeta: i.peerDependenciesMeta,
                  bin: i.bin,
                };
              }
            },
          ],
        };
      },
      74230: (e, t, r) => {
        "use strict";
        r.r(t), r.d(t, { default: () => C });
        var n = r(27122),
          i = r(36370),
          A = r(95397),
          o = r(46611),
          s = r(40376),
          a = r(5624),
          c = r(56537),
          g = r(46009),
          l = r(93103),
          u = r(80305),
          h = r.n(u),
          f = r(31669);
        class p extends A.BaseCommand {
          constructor() {
            super(...arguments),
              (this.usev2 = !1),
              (this.assumeFreshProject = !1),
              (this.yes = !1),
              (this.private = !1),
              (this.workspace = !1),
              (this.install = !1);
          }
          async execute() {
            if (c.xfs.existsSync(g.y1.join(this.context.cwd, o.G.fileName)))
              throw new l.UsageError(
                "A package.json already exists in the specified directory"
              );
            const e = await n.VK.find(this.context.cwd, this.context.plugins),
              t = this.install
                ? !0 === this.install
                  ? "latest"
                  : this.install
                : null;
            return null !== t
              ? await this.executeProxy(e, t)
              : await this.executeRegular(e);
          }
          async executeProxy(e, t) {
            if (null !== e.get("yarnPath"))
              throw new l.UsageError(
                `Cannot use the --install flag when the current directory already uses yarnPath (from ${e.sources.get(
                  "yarnPath"
                )})`
              );
            if (null !== e.projectCwd)
              throw new l.UsageError(
                "Cannot use the --install flag when the current directory is already part of a project"
              );
            c.xfs.existsSync(this.context.cwd) ||
              (await c.xfs.mkdirPromise(this.context.cwd, { recursive: !0 }));
            const r = g.y1.join(this.context.cwd, e.get("lockfileFilename"));
            c.xfs.existsSync(r) || (await c.xfs.writeFilePromise(r, ""));
            const n = await this.cli.run(["set", "version", t]);
            if (0 !== n) return n;
            this.context.stdout.write("\n");
            const i = ["--assume-fresh-project"];
            return (
              this.private && i.push("-p"),
              this.workspace && i.push("-w"),
              this.yes && i.push("-y"),
              await c.xfs.mktempPromise(async (e) => {
                const { code: t } = await a.execUtils.pipevp(
                  "yarn",
                  ["init", ...i],
                  {
                    cwd: this.context.cwd,
                    stdin: this.context.stdin,
                    stdout: this.context.stdout,
                    stderr: this.context.stderr,
                    env: await a.scriptUtils.makeScriptEnv({ binFolder: e }),
                  }
                );
                return t;
              })
            );
          }
          async executeRegular(e) {
            let t = null;
            if (!this.assumeFreshProject)
              try {
                t = await s.I.find(e, this.context.cwd);
              } catch (e) {
                t = null;
              }
            c.xfs.existsSync(this.context.cwd) ||
              (await c.xfs.mkdirPromise(this.context.cwd, { recursive: !0 }));
            const r = new o.G(),
              n = Object.fromEntries(e.get("initFields").entries());
            r.load(n),
              (r.name = a.structUtils.makeIdent(
                e.get("initScope"),
                g.y1.basename(this.context.cwd)
              )),
              (r.version = e.get("initVersion")),
              (r.private = this.private || this.workspace),
              (r.license = e.get("initLicense")),
              this.workspace &&
                (await c.xfs.mkdirPromise(
                  g.y1.join(this.context.cwd, "packages"),
                  { recursive: !0 }
                ),
                (r.workspaceDefinitions = [{ pattern: "packages/*" }]));
            const i = {};
            r.exportTo(i),
              (f.inspect.styles.name = "cyan"),
              this.context.stdout.write(
                (0, f.inspect)(i, { depth: 1 / 0, colors: !0, compact: !1 }) +
                  "\n"
              );
            const A = g.y1.join(this.context.cwd, o.G.fileName);
            await c.xfs.changeFilePromise(A, JSON.stringify(i, null, 2) + "\n");
            const l = g.y1.join(this.context.cwd, "README.md");
            if (
              (c.xfs.existsSync(l) ||
                (await c.xfs.writeFilePromise(
                  l,
                  `# ${a.structUtils.stringifyIdent(r.name)}\n`
                )),
              !t)
            ) {
              const t = g.y1.join(this.context.cwd, g.QS.lockfile);
              await c.xfs.writeFilePromise(t, "");
              const r = ["/.yarn/** linguist-vendored"]
                  .map((e) => e + "\n")
                  .join(""),
                n = g.y1.join(this.context.cwd, ".gitattributes");
              c.xfs.existsSync(n) || (await c.xfs.writeFilePromise(n, r));
              const i = [
                  "/.yarn/*",
                  "!/.yarn/releases",
                  "!/.yarn/plugins",
                  "!/.yarn/sdks",
                  "",
                  "# Swap the comments on the following lines if you don't wish to use zero-installs",
                  "# Documentation here: https://yarnpkg.com/features/zero-installs",
                  "!/.yarn/cache",
                  "#/.pnp.*",
                ]
                  .map((e) => e + "\n")
                  .join(""),
                A = g.y1.join(this.context.cwd, ".gitignore");
              c.xfs.existsSync(A) || (await c.xfs.writeFilePromise(A, i));
              const o = {
                "*": { endOfLine: "lf", insertFinalNewline: !0 },
                "*.{js,json,.yml}": {
                  charset: "utf-8",
                  indentStyle: "space",
                  indentSize: 2,
                },
              };
              h()(o, e.get("initEditorConfig"));
              let s = "root = true\n";
              for (const [e, t] of Object.entries(o)) {
                s += `\n[${e}]\n`;
                for (const [e, r] of Object.entries(t)) {
                  s += `${e.replace(
                    /[A-Z]/g,
                    (e) => "_" + e.toLowerCase()
                  )} = ${r}\n`;
                }
              }
              const l = g.y1.join(this.context.cwd, ".editorconfig");
              c.xfs.existsSync(l) || (await c.xfs.writeFilePromise(l, s)),
                await a.execUtils.execvp("git", ["init"], {
                  cwd: this.context.cwd,
                });
            }
          }
        }
        (p.usage = l.Command.Usage({
          description: "create a new package",
          details:
            "\n      This command will setup a new package in your local directory.\n\n      If the `-p,--private` or `-w,--workspace` options are set, the package will be private by default.\n\n      If the `-w,--workspace` option is set, the package will be configured to accept a set of workspaces in the `packages/` directory.\n\n      If the `-i,--install` option is given a value, Yarn will first download it using `yarn set version` and only then forward the init call to the newly downloaded bundle. Without arguments, the downloaded bundle will be `latest`.\n\n      The initial settings of the manifest can be changed by using the `initScope` and `initFields` configuration values. Additionally, Yarn will generate an EditorConfig file whose rules can be altered via `initEditorConfig`, and will initialize a Git repository in the current directory.\n    ",
          examples: [
            ["Create a new package in the local directory", "yarn init"],
            [
              "Create a new private package in the local directory",
              "yarn init -p",
            ],
            [
              "Create a new package and store the Yarn release inside",
              "yarn init -i latest",
            ],
            [
              "Create a new private package and defines it as a workspace root",
              "yarn init -w",
            ],
          ],
        })),
          (0, i.gn)(
            [l.Command.Boolean("-2", { hidden: !0 })],
            p.prototype,
            "usev2",
            void 0
          ),
          (0, i.gn)(
            [l.Command.Boolean("--assume-fresh-project", { hidden: !0 })],
            p.prototype,
            "assumeFreshProject",
            void 0
          ),
          (0, i.gn)(
            [l.Command.Boolean("-y,--yes", { hidden: !0 })],
            p.prototype,
            "yes",
            void 0
          ),
          (0, i.gn)(
            [l.Command.Boolean("-p,--private")],
            p.prototype,
            "private",
            void 0
          ),
          (0, i.gn)(
            [l.Command.Boolean("-w,--workspace")],
            p.prototype,
            "workspace",
            void 0
          ),
          (0, i.gn)(
            [l.Command.String("-i,--install", { tolerateBoolean: !0 })],
            p.prototype,
            "install",
            void 0
          ),
          (0, i.gn)([l.Command.Path("init")], p.prototype, "execute", null);
        const C = {
          configuration: {
            initLicense: {
              description:
                "License used when creating packages via the init command",
              type: n.a2.STRING,
              default: null,
            },
            initScope: {
              description:
                "Scope used when creating packages via the init command",
              type: n.a2.STRING,
              default: null,
            },
            initVersion: {
              description:
                "Version used when creating packages via the init command",
              type: n.a2.STRING,
              default: null,
            },
            initFields: {
              description:
                "Additional fields to set when creating packages via the init command",
              type: n.a2.MAP,
              valueDefinition: { description: "", type: n.a2.ANY },
            },
            initEditorConfig: {
              description:
                "Extra rules to define in the generator editorconfig",
              type: n.a2.MAP,
              valueDefinition: { description: "", type: n.a2.ANY },
            },
          },
          commands: [p],
        };
      },
      86161: (e, t, r) => {
        "use strict";
        r.r(t), r.d(t, { default: () => c });
        var n = r(5624),
          i = r(46009),
          A = r(75448),
          o = r(10489);
        var s = r(46611),
          a = r(32485);
        const c = {
          fetchers: [
            class {
              supports(e, t) {
                return !!e.reference.startsWith("link:");
              }
              getLocalPath(e, t) {
                const {
                  parentLocator: r,
                  path: A,
                } = n.structUtils.parseFileStyleRange(e.reference, {
                  protocol: "link:",
                });
                if (i.y1.isAbsolute(A)) return A;
                const o = t.fetcher.getLocalPath(r, t);
                return null === o ? null : i.y1.resolve(o, A);
              }
              async fetch(e, t) {
                const {
                    parentLocator: r,
                    path: s,
                  } = n.structUtils.parseFileStyleRange(e.reference, {
                    protocol: "link:",
                  }),
                  a = i.y1.isAbsolute(s)
                    ? {
                        packageFs: new A.M(i.LZ.root),
                        prefixPath: i.LZ.dot,
                        localPath: i.LZ.root,
                      }
                    : await t.fetcher.fetch(r, t),
                  c = a.localPath
                    ? {
                        packageFs: new A.M(i.LZ.root),
                        prefixPath: i.y1.relative(i.LZ.root, a.localPath),
                      }
                    : a;
                a !== c && a.releaseFs && a.releaseFs();
                const g = c.packageFs,
                  l = i.y1.join(c.prefixPath, s);
                return a.localPath
                  ? {
                      packageFs: new A.M(l, { baseFs: g }),
                      releaseFs: c.releaseFs,
                      prefixPath: i.LZ.dot,
                      discardFromLookup: !0,
                      localPath: l,
                    }
                  : {
                      packageFs: new o.n(l, { baseFs: g }),
                      releaseFs: c.releaseFs,
                      prefixPath: i.LZ.dot,
                      discardFromLookup: !0,
                    };
              }
            },
            class {
              supports(e, t) {
                return !!e.reference.startsWith("portal:");
              }
              getLocalPath(e, t) {
                const {
                  parentLocator: r,
                  path: A,
                } = n.structUtils.parseFileStyleRange(e.reference, {
                  protocol: "portal:",
                });
                if (i.y1.isAbsolute(A)) return A;
                const o = t.fetcher.getLocalPath(r, t);
                return null === o ? null : i.y1.resolve(o, A);
              }
              async fetch(e, t) {
                const {
                    parentLocator: r,
                    path: s,
                  } = n.structUtils.parseFileStyleRange(e.reference, {
                    protocol: "portal:",
                  }),
                  a = i.y1.isAbsolute(s)
                    ? {
                        packageFs: new A.M(i.LZ.root),
                        prefixPath: i.LZ.dot,
                        localPath: i.LZ.root,
                      }
                    : await t.fetcher.fetch(r, t),
                  c = a.localPath
                    ? {
                        packageFs: new A.M(i.LZ.root),
                        prefixPath: i.y1.relative(i.LZ.root, a.localPath),
                      }
                    : a;
                a !== c && a.releaseFs && a.releaseFs();
                const g = c.packageFs,
                  l = i.y1.join(c.prefixPath, s);
                return a.localPath
                  ? {
                      packageFs: new A.M(l, { baseFs: g }),
                      releaseFs: c.releaseFs,
                      prefixPath: i.LZ.dot,
                      localPath: l,
                    }
                  : {
                      packageFs: new o.n(l, { baseFs: g }),
                      releaseFs: c.releaseFs,
                      prefixPath: i.LZ.dot,
                    };
              }
            },
          ],
          resolvers: [
            class {
              supportsDescriptor(e, t) {
                return !!e.range.startsWith("link:");
              }
              supportsLocator(e, t) {
                return !!e.reference.startsWith("link:");
              }
              shouldPersistResolution(e, t) {
                return !1;
              }
              bindDescriptor(e, t, r) {
                return n.structUtils.bindDescriptor(e, {
                  locator: n.structUtils.stringifyLocator(t),
                });
              }
              getResolutionDependencies(e, t) {
                return [];
              }
              async getCandidates(e, t, r) {
                const A = e.range.slice("link:".length);
                return [
                  n.structUtils.makeLocator(
                    e,
                    "link:" + i.cS.toPortablePath(A)
                  ),
                ];
              }
              async getSatisfying(e, t, r) {
                return null;
              }
              async resolve(e, t) {
                return {
                  ...e,
                  version: "0.0.0",
                  languageName: t.project.configuration.get(
                    "defaultLanguageName"
                  ),
                  linkType: a.U.SOFT,
                  dependencies: new Map(),
                  peerDependencies: new Map(),
                  dependenciesMeta: new Map(),
                  peerDependenciesMeta: new Map(),
                  bin: new Map(),
                };
              }
            },
            class {
              supportsDescriptor(e, t) {
                return !!e.range.startsWith("portal:");
              }
              supportsLocator(e, t) {
                return !!e.reference.startsWith("portal:");
              }
              shouldPersistResolution(e, t) {
                return !1;
              }
              bindDescriptor(e, t, r) {
                return n.structUtils.bindDescriptor(e, {
                  locator: n.structUtils.stringifyLocator(t),
                });
              }
              getResolutionDependencies(e, t) {
                return [];
              }
              async getCandidates(e, t, r) {
                const A = e.range.slice("portal:".length);
                return [
                  n.structUtils.makeLocator(
                    e,
                    "portal:" + i.cS.toPortablePath(A)
                  ),
                ];
              }
              async getSatisfying(e, t, r) {
                return null;
              }
              async resolve(e, t) {
                if (!t.fetchOptions)
                  throw new Error(
                    "Assertion failed: This resolver cannot be used unless a fetcher is configured"
                  );
                const r = await t.fetchOptions.fetcher.fetch(e, t.fetchOptions),
                  i = await n.miscUtils.releaseAfterUseAsync(
                    async () =>
                      await s.G.find(r.prefixPath, { baseFs: r.packageFs }),
                    r.releaseFs
                  );
                return {
                  ...e,
                  version: i.version || "0.0.0",
                  languageName: t.project.configuration.get(
                    "defaultLanguageName"
                  ),
                  linkType: a.U.SOFT,
                  dependencies: new Map([
                    ...i.dependencies,
                    ...i.devDependencies,
                  ]),
                  peerDependencies: i.peerDependencies,
                  dependenciesMeta: i.dependenciesMeta,
                  peerDependenciesMeta: i.peerDependenciesMeta,
                  bin: i.bin,
                };
              }
            },
          ],
        };
      },
      8149: (e, t, r) => {
        "use strict";
        r.r(t), r.d(t, { getPnpPath: () => $, default: () => ee });
        var n = r(46009),
          i = r(5624),
          A = r(46611),
          o = r(35691),
          s = r(92409),
          a = r(32485),
          c = r(92659),
          g = r(17674),
          l = r(53660),
          u = r(56537),
          h = r(29486),
          f = r(55125),
          p = r(57436);
        const C = (e, t) => `${e}@${t}`,
          d = (e, t) => {
            const r = t.indexOf("#"),
              n = r >= 0 ? t.substring(r + 1) : t;
            return C(e, n);
          },
          I = (e, t = {}) => {
            const r = t.debugLevel || Number(process.env.NM_DEBUG_LEVEL || -1),
              n = { check: t.check || r >= 9, debugLevel: r };
            n.debugLevel >= 0 && console.time("hoist");
            const i = Q(e);
            if (
              (m(i, i, new Set([i.locator]), n),
              n.debugLevel >= 0 && console.timeEnd("hoist"),
              n.debugLevel >= 1)
            ) {
              const e = y(i);
              if (e) throw new Error(`${e}, after hoisting finished:\n${k(i)}`);
            }
            return n.debugLevel >= 2 && console.log(k(i)), b(i);
          },
          E = (e, t) => {
            if (t.decoupled) return t;
            const {
                name: r,
                references: n,
                ident: i,
                locator: A,
                dependencies: o,
                originalDependencies: s,
                hoistedDependencies: a,
                peerNames: c,
                reasons: g,
              } = t,
              l = {
                name: r,
                references: new Set(n),
                ident: i,
                locator: A,
                dependencies: new Map(o),
                originalDependencies: new Map(s),
                hoistedDependencies: new Map(a),
                peerNames: new Set(c),
                reasons: new Map(g),
                decoupled: !0,
              },
              u = l.dependencies.get(r);
            return (
              u && u.ident == l.ident && l.dependencies.set(r, l),
              e.dependencies.set(l.name, l),
              l
            );
          },
          m = (e, t, r, n, i = new Set()) => {
            if (i.has(t)) return;
            i.add(t);
            const A = ((e, t) => {
                const r = new Map([[e.name, [e.ident]]]);
                for (const t of e.dependencies.values())
                  e.peerNames.has(t.name) || r.set(t.name, [t.ident]);
                const n = Array.from(t.keys());
                n.sort((e, r) => t.get(r).size - t.get(e).size);
                for (const t of n) {
                  const n = t.substring(0, t.indexOf("@", 1)),
                    i = t.substring(n.length + 1);
                  if (!e.peerNames.has(n)) {
                    let e = r.get(n);
                    e || ((e = []), r.set(n, e)), e.indexOf(i) < 0 && e.push(i);
                  }
                }
                return r;
              })(t, D(t)),
              o = new Map(Array.from(A.entries()).map(([e, t]) => [e, t[0]])),
              s =
                t === e
                  ? new Map()
                  : ((e) => {
                      const t = new Map(),
                        r = new Set(),
                        n = (i) => {
                          if (!r.has(i)) {
                            r.add(i);
                            for (const r of i.hoistedDependencies.values())
                              e.dependencies.has(r.name) || t.set(r.name, r);
                            for (const e of i.dependencies.values())
                              i.peerNames.has(e.name) || n(e);
                          }
                        };
                      return n(e), t;
                    })(t);
            let a;
            do {
              w(e, t, r, s, o, A, n), (a = !1);
              for (const [e, r] of A)
                r.length > 1 &&
                  !t.dependencies.has(e) &&
                  (o.delete(e), r.shift(), o.set(e, r[0]), (a = !0));
            } while (a);
            for (const i of t.dependencies.values())
              t.peerNames.has(i.name) ||
                r.has(i.locator) ||
                (r.add(i.locator), m(e, i, r, n), r.delete(i.locator));
          },
          B = (e) => {
            const t = new Set(),
              r = (n, i = new Set()) => {
                if (!i.has(n)) {
                  i.add(n);
                  for (const A of n.peerNames)
                    if (!e.peerNames.has(A)) {
                      const n = e.dependencies.get(A);
                      n && !t.has(n) && r(n, i);
                    }
                  t.add(n);
                }
              };
            for (const t of e.dependencies.values())
              e.peerNames.has(t.name) || r(t);
            return t;
          },
          w = (e, t, r, n, i, A, o) => {
            const s = new Set(),
              a = (c, g, l, u) => {
                if (s.has(l)) return;
                let h, f;
                o.debugLevel >= 2 &&
                  (h =
                    "" +
                    Array.from(r)
                      .map((e) => S(e))
                      .join("→"));
                const p = c[c.length - 1],
                  C = l.ident === p.ident;
                let d = i.get(l.name) === l.ident && !C;
                if (
                  (o.debugLevel >= 2 &&
                    !d &&
                    (f = `- filled by: ${S(A.get(l.name)[0])} at ${h}`),
                  d)
                ) {
                  let e = !0;
                  const t = new Set(l.peerNames);
                  for (let r = c.length - 1; r >= 1; r--) {
                    const n = c[r];
                    for (const r of t) {
                      if (n.peerNames.has(r) && n.originalDependencies.has(r))
                        continue;
                      const i = n.dependencies.get(r);
                      if (i) {
                        o.debugLevel >= 2 &&
                          (f = `- peer dependency ${S(
                            i.locator
                          )} from parent ${S(
                            n.locator
                          )} was not hoisted to ${h}`),
                          (e = !1);
                        break;
                      }
                      t.delete(r);
                    }
                    if (!e) break;
                  }
                  d = e;
                }
                if (d) {
                  let e = !1;
                  const t = n.get(l.name);
                  if (
                    ((e = !t || t.ident === l.ident),
                    o.debugLevel >= 2 &&
                      !e &&
                      (f = `- filled by: ${S(t.locator)} at ${h}`),
                    e)
                  )
                    for (let t = 1; t < c.length - 1; t++) {
                      const r = c[t],
                        n = r.dependencies.get(l.name);
                      if (n && n.ident !== l.ident) {
                        (e = !1),
                          o.debugLevel >= 2 &&
                            (f = `- filled by: ${S(n.locator)} at ${S(
                              r.locator
                            )}`);
                        break;
                      }
                    }
                  d = e;
                }
                if (d) {
                  p.dependencies.delete(l.name),
                    p.hoistedDependencies.set(l.name, l),
                    p.reasons.delete(l.name);
                  const r = t.dependencies.get(l.name);
                  if (r) for (const e of l.references) r.references.add(e);
                  else
                    t.ident !== l.ident &&
                      (t.dependencies.set(l.name, l), u.add(l));
                  if (o.check) {
                    const r = y(e);
                    if (r)
                      throw new Error(
                        `${r}, after hoisting ${[t, ...c, l]
                          .map((e) => S(e.locator))
                          .join("→")}:\n${k(e)}`
                      );
                  }
                } else if (o.debugLevel >= 2) {
                  c[c.length - 1].reasons.set(l.name, f);
                }
                if (!d && g.indexOf(l.locator) < 0) {
                  const e = E(c[c.length - 1], l);
                  s.add(e);
                  for (const t of B(l)) a([...c, e], [...g, l.locator], t, u);
                  s.delete(e);
                }
              };
            let c,
              g = new Set(t.dependencies.values());
            do {
              (c = g), (g = new Set());
              for (const e of c) {
                if (t.peerNames.has(e.name) || e.locator === t.locator)
                  continue;
                const r = E(t, e);
                s.add(r);
                for (const n of B(e))
                  n.locator !== e.locator &&
                    a([t, r], [t.locator, e.locator], n, g);
                s.delete(r);
              }
            } while (g.size > 0);
          },
          y = (e) => {
            const t = [],
              r = new Set(),
              n = new Set(),
              i = (e, A) => {
                if (r.has(e)) return;
                if ((r.add(e), n.has(e))) return;
                const o = new Map(A);
                for (const t of e.dependencies.values())
                  e.peerNames.has(t.name) || o.set(t.name, t);
                for (const r of e.originalDependencies.values()) {
                  const i = o.get(r.name),
                    s = () =>
                      "" +
                      Array.from(n)
                        .concat([e])
                        .map((e) => S(e.locator))
                        .join("→");
                  if (e.peerNames.has(r.name)) {
                    const e = A.get(r.name);
                    e !== i &&
                      t.push(
                        `${s()} - broken peer promise: expected ${
                          i.locator
                        } but found ${e ? e.locator : e}`
                      );
                  } else
                    i
                      ? i.ident !== r.ident &&
                        t.push(
                          `${s()} - broken require promise for ${
                            r.name
                          }: expected ${r.ident}, but found: ${i.ident}`
                        )
                      : t.push(
                          `${s()} - broken require promise: no required dependency ${
                            r.locator
                          } found`
                        );
                }
                n.add(e);
                for (const t of e.dependencies.values())
                  e.peerNames.has(t.name) || i(t, o);
                n.delete(e);
              };
            return i(e, e.dependencies), t.join("\n");
          },
          Q = (e) => {
            const { identName: t, name: r, reference: n, peerNames: i } = e,
              A = {
                name: r,
                references: new Set([n]),
                locator: C(t, n),
                ident: d(t, n),
                dependencies: new Map(),
                originalDependencies: new Map(),
                hoistedDependencies: new Map(),
                peerNames: new Set(i),
                reasons: new Map(),
                decoupled: !0,
              },
              o = new Map([[e, A]]),
              s = (e, t) => {
                let r = o.get(e);
                const n = !!r;
                if (!r) {
                  const {
                    name: t,
                    identName: n,
                    reference: i,
                    peerNames: A,
                  } = e;
                  (r = {
                    name: t,
                    references: new Set([i]),
                    locator: C(n, i),
                    ident: d(n, i),
                    dependencies: new Map(),
                    originalDependencies: new Map(),
                    hoistedDependencies: new Map(),
                    peerNames: new Set(A),
                    reasons: new Map(),
                    decoupled: !0,
                  }),
                    o.set(e, r);
                }
                if (
                  (t.dependencies.set(e.name, r),
                  t.originalDependencies.set(e.name, r),
                  n)
                ) {
                  const e = new Set(),
                    t = (r) => {
                      if (!e.has(r)) {
                        e.add(r), (r.decoupled = !1);
                        for (const e of r.dependencies.values())
                          r.peerNames.has(e.name) || t(e);
                      }
                    };
                  t(r);
                } else for (const t of e.dependencies) s(t, r);
              };
            for (const t of e.dependencies) s(t, A);
            return A;
          },
          v = (e) => e.substring(0, e.indexOf("@", 1)),
          b = (e) => {
            const t = {
                name: e.name,
                identName: v(e.locator),
                references: new Set(e.references),
                dependencies: new Set(),
              },
              r = new Set([e]),
              n = (e, t, i) => {
                const A = r.has(e);
                let o;
                if (t === e) o = i;
                else {
                  const { name: t, references: r, locator: n } = e;
                  o = {
                    name: t,
                    identName: v(n),
                    references: r,
                    dependencies: new Set(),
                  };
                }
                if ((i.dependencies.add(o), !A)) {
                  r.add(e);
                  for (const t of e.dependencies.values())
                    e.peerNames.has(t.name) || n(t, e, o);
                  r.delete(e);
                }
              };
            for (const r of e.dependencies.values()) n(r, e, t);
            return t;
          },
          D = (e) => {
            const t = new Map(),
              r = new Set([e]),
              n = (e, i) => {
                const A = !!r.has(i),
                  o = ((e) => `${e.name}@${e.ident}`)(i);
                let s = t.get(o);
                if ((s || ((s = new Set()), t.set(o, s)), s.add(e.ident), !A)) {
                  r.add(i);
                  for (const e of i.dependencies.values())
                    i.peerNames.has(e.name) || n(i, e);
                }
              };
            for (const t of e.dependencies.values())
              e.peerNames.has(t.name) || n(e, t);
            return t;
          },
          S = (e) => {
            const t = e.indexOf("@", 1),
              r = e.substring(0, t),
              n = e.substring(t + 1);
            if ("workspace:." === n) return ".";
            if (n) {
              const e = (n.indexOf("#") > 0 ? n.split("#")[1] : n).replace(
                "npm:",
                ""
              );
              return n.startsWith("virtual") ? `v:${r}@${e}` : `${r}@${e}`;
            }
            return "" + r;
          },
          k = (e) => {
            let t = 0;
            const r = (e, n, i = "") => {
              if (t > 5e4 || n.has(e)) return "";
              t++;
              const A = Array.from(e.dependencies.values());
              let o = "";
              n.add(e);
              for (let t = 0; t < A.length; t++) {
                const s = A[t];
                if (!e.peerNames.has(s.name)) {
                  const a = e.reasons.get(s.name),
                    c = v(s.locator);
                  (o += `${i}${t < A.length - 1 ? "├─" : "└─"}${
                    (n.has(s) ? ">" : "") +
                    (c !== s.name ? `a:${s.name}:` : "") +
                    S(s.locator) +
                    (a ? " " + a : "")
                  }\n`),
                    (o += r(s, n, `${i}${t < A.length - 1 ? "│ " : "  "}`));
                }
              }
              return n.delete(e), o;
            };
            return (
              r(e, new Set()) +
              (t > 5e4
                ? "\nTree is too large, part of the tree has been dunped\n"
                : "")
            );
          };
        var M;
        !(function (e) {
          (e.HARD = "HARD"), (e.SOFT = "SOFT");
        })(M || (M = {}));
        const N = (e, t) => {
            const r = F(e, t),
              n = I(r);
            return K(e, n, t);
          },
          R = (e) => `${e.name}@${e.reference}`;
        const F = (e, t) => {
          const r = e.getDependencyTreeRoots(),
            n = e.getPackageInformation(e.topLevel);
          if (null === n)
            throw new Error(
              "Assertion failed: Expected the top-level package to have been registered"
            );
          const A = e.findPackageLocator(n.packageLocation);
          if (null === A)
            throw new Error(
              "Assertion failed: Expected the top-level package to have a physical locator"
            );
          for (const e of r)
            (e.name === A.name && e.reference === A.reference) ||
              n.packageDependencies.set(e.name + "$wsroot$", e.reference);
          const o = {
              name: A.name,
              identName: A.name,
              reference: A.reference,
              peerNames: n.packagePeers,
              dependencies: new Set(),
            },
            s = new Map(),
            a = (r, n, c, g, l) => {
              const u = ((e, t) => `${R(t)}:${e}`)(r, c);
              let h = s.get(u);
              const f = !!h;
              f ||
                c.name !== A.name ||
                c.reference !== A.reference ||
                ((h = o), s.set(u, o)),
                h ||
                  ((h = {
                    name: r,
                    identName: c.name,
                    reference: c.reference,
                    dependencies: new Set(),
                    peerNames: n.packagePeers,
                  }),
                  s.set(u, h)),
                g.dependencies.add(h);
              const p =
                t.pnpifyFs ||
                !(function (e) {
                  let t = i.structUtils.parseDescriptor(e);
                  return (
                    i.structUtils.isVirtualDescriptor(t) &&
                      (t = i.structUtils.devirtualizeDescriptor(t)),
                    t.range.startsWith("portal:")
                  );
                })(u);
              if (!f && p)
                for (const [t, r] of n.packageDependencies)
                  if (null !== r && !h.peerNames.has(t)) {
                    const i = e.getLocator(t, r),
                      A = e.getLocator(t.replace("$wsroot$", ""), r),
                      o = e.getPackageInformation(A);
                    if (null === o)
                      throw new Error(
                        "Assertion failed: Expected the package to have been registered"
                      );
                    a(t, o, i, h, n);
                  }
            };
          return a(A.name, n, A, o, n), o;
        };
        const K = (e, t, r) => {
          const A = new Map(),
            o = (t, i) => {
              const { linkType: A, target: o } = (function (e, t, r) {
                const i = t.getLocator(
                    e.name.replace("$wsroot$", ""),
                    e.reference
                  ),
                  A = t.getPackageInformation(i);
                if (null === A)
                  throw new Error(
                    "Assertion failed: Expected the package to be registered"
                  );
                let o, s;
                if (r.pnpifyFs)
                  (s = n.cS.toPortablePath(A.packageLocation)), (o = M.SOFT);
                else {
                  const r =
                    t.resolveVirtual &&
                    e.reference &&
                    e.reference.startsWith("virtual:")
                      ? t.resolveVirtual(A.packageLocation)
                      : A.packageLocation;
                  (s = n.cS.toPortablePath(r || A.packageLocation)),
                    (o = A.linkType);
                }
                return { linkType: o, target: s };
              })(t, e, r);
              return { locator: R(t), target: o, linkType: A, aliases: i };
            },
            s = (e) => {
              const [t, r] = e.split("/");
              return r
                ? { scope: (0, n.Zu)(t), name: (0, n.Zu)(r) }
                : { scope: null, name: (0, n.Zu)(t) };
            },
            a = new Set(),
            c = (e, t) => {
              if (!a.has(e)) {
                a.add(e);
                for (const r of e.dependencies) {
                  if (r === e) continue;
                  const a = Array.from(r.references).sort(),
                    g = { name: r.identName, reference: a[0] },
                    { name: l, scope: u } = s(r.name),
                    h = u ? [u, l] : [l],
                    f = n.y1.join(t, "node_modules"),
                    p = n.y1.join(f, ...h),
                    C = o(g, a.slice(1));
                  if (!r.name.endsWith("$wsroot$")) {
                    const e = A.get(p);
                    if (e) {
                      if (e.dirList)
                        throw new Error(
                          `Assertion failed: ${p} cannot merge dir node with leaf node`
                        );
                      {
                        const t = i.structUtils.parseLocator(e.locator),
                          r = i.structUtils.parseLocator(C.locator);
                        if (e.linkType !== C.linkType)
                          throw new Error(
                            `Assertion failed: ${p} cannot merge nodes with different link types`
                          );
                        if (t.identHash !== r.identHash)
                          throw new Error(
                            `Assertion failed: ${p} cannot merge nodes with different idents ${i.structUtils.stringifyLocator(
                              t
                            )} and ${i.structUtils.stringifyLocator(r)}`
                          );
                        C.aliases = [
                          ...C.aliases,
                          ...e.aliases,
                          i.structUtils.parseLocator(e.locator).reference,
                        ];
                      }
                    }
                    A.set(p, C);
                    const t = p.split("/"),
                      r = t.indexOf("node_modules");
                    let o = t.length - 1;
                    for (; r >= 0 && o > r; ) {
                      const e = n.cS.toPortablePath(
                          t.slice(0, o).join(n.y1.sep)
                        ),
                        r = (0, n.Zu)(t[o]),
                        i = A.get(e);
                      if (i) {
                        if (i.dirList) {
                          if (i.dirList.has(r)) break;
                          i.dirList.add(r);
                        }
                      } else A.set(e, { dirList: new Set([r]) });
                      o--;
                    }
                  }
                  c(r, C.linkType === M.SOFT ? C.target : p);
                }
              }
            },
            g = o({ name: t.name, reference: Array.from(t.references)[0] }, []),
            l = g.target;
          return A.set(l, g), c(t, l), A;
        };
        var x = r(88563),
          L = r(58069),
          P = r.n(L),
          U = r(93103),
          T = r(35747),
          O = r.n(T);
        const Y = "node_modules";
        class j extends p.AbstractPnpInstaller {
          constructor() {
            super(...arguments), (this.manifestCache = new Map());
          }
          async getBuildScripts(e, t, r) {
            return [];
          }
          async transformPackage(e, t, r, n, i) {
            return r.packageFs;
          }
          async finalizeInstallWithPnp(e) {
            if (
              "node-modules" !==
              this.opts.project.configuration.get("nodeLinker")
            )
              return;
            const t = new g.p({
              baseFs: new l.A({
                libzip: await (0, h.getLibzipPromise)(),
                maxOpenFiles: 80,
                readOnlyArchives: !0,
              }),
            });
            let r = await G(this.opts.project);
            if (null === r) {
              const e = this.opts.project.configuration.get("bstatePath");
              (await u.xfs.existsPromise(e)) && (await u.xfs.unlinkPromise(e)),
                (r = {
                  locatorMap: new Map(),
                  binSymlinks: new Map(),
                  locationTree: new Map(),
                });
            }
            const A = (0, x.oC)(e, this.opts.project.cwd, t),
              s = ((e) => {
                const t = new Map();
                for (const [r, n] of e.entries())
                  if (!n.dirList) {
                    let e = t.get(n.locator);
                    e ||
                      ((e = {
                        target: n.target,
                        linkType: n.linkType,
                        locations: [],
                        aliases: n.aliases,
                      }),
                      t.set(n.locator, e)),
                      e.locations.push(r);
                  }
                for (const e of t.values())
                  e.locations = e.locations.sort((e, t) => {
                    const r = e.split(n.y1.delimiter).length,
                      i = t.split(n.y1.delimiter).length;
                    return r !== i ? i - r : t.localeCompare(e);
                  });
                return t;
              })(N(A, { pnpifyFs: !1 }));
            await (async function (
              e,
              t,
              { baseFs: r, project: i, report: A, loadManifest: s }
            ) {
              const c = n.y1.join(i.cwd, Y),
                { locationTree: g, binSymlinks: l } = (function (e, t) {
                  const r = new Map([...e]),
                    i = new Map([...t]);
                  for (const [t, r] of e) {
                    const e = n.y1.join(t, Y);
                    if (!u.xfs.existsSync(e)) {
                      r.children.delete(Y);
                      for (const t of i.keys())
                        null !== n.y1.contains(e, t) && i.delete(t);
                    }
                  }
                  return { locationTree: r, binSymlinks: i };
                })(e.locationTree, e.binSymlinks),
                h = J(t, { skipPrefix: i.cwd }),
                f = [],
                p = async ({ srcDir: e, dstDir: t, linkType: i }) => {
                  const A = (async () => {
                    try {
                      i === a.U.SOFT
                        ? (await u.xfs.mkdirPromise(n.y1.dirname(t), {
                            recursive: !0,
                          }),
                          await q(n.y1.resolve(e), t))
                        : await z(t, e, { baseFs: r });
                    } catch (r) {
                      throw (
                        ((r.message = `While persisting ${e} -> ${t} ${r.message}`),
                        r)
                      );
                    } finally {
                      m.tick();
                    }
                  })().then(() => f.splice(f.indexOf(A), 1));
                  f.push(A), f.length > 4 && (await Promise.race(f));
                },
                C = async (e, t, r) => {
                  const i = (async () => {
                    const i = async (e, t, r) => {
                      try {
                        (r && r.innerLoop) ||
                          (await u.xfs.mkdirPromise(t, { recursive: !0 }));
                        const A = await u.xfs.readdirPromise(e, {
                          withFileTypes: !0,
                        });
                        for (const o of A) {
                          if (!((r && r.innerLoop) || ".bin" !== o.name))
                            continue;
                          const A = n.y1.join(e, o.name),
                            s = n.y1.join(t, o.name);
                          o.isDirectory()
                            ? (o.name !== Y || (r && r.innerLoop)) &&
                              (await u.xfs.mkdirPromise(s, { recursive: !0 }),
                              await i(A, s, { innerLoop: !0 }))
                            : await u.xfs.copyFilePromise(
                                A,
                                s,
                                O().constants.COPYFILE_FICLONE
                              );
                        }
                      } catch (n) {
                        throw (
                          ((r && r.innerLoop) ||
                            (n.message = `While cloning ${e} -> ${t} ${n.message}`),
                          n)
                        );
                      } finally {
                        (r && r.innerLoop) || m.tick();
                      }
                    };
                    await i(e, t, r);
                  })().then(() => f.splice(f.indexOf(i), 1));
                  f.push(i), f.length > 4 && (await Promise.race(f));
                },
                d = async (e, t, r) => {
                  if (r)
                    for (const [i, A] of t.children) {
                      const t = r.children.get(i);
                      await d(n.y1.join(e, i), A, t);
                    }
                  else
                    t.children.has(Y) &&
                      (await _(n.y1.join(e, Y), { contentsOnly: !1 })),
                      await _(e, { contentsOnly: e === c });
                };
              for (const [e, t] of g) {
                const r = h.get(e);
                for (const [i, A] of t.children) {
                  if ("." === i) continue;
                  const t = r ? r.children.get(i) : r;
                  await d(n.y1.join(e, i), A, t);
                }
              }
              const I = async (e, t, r) => {
                if (r) {
                  V(t.locator, r.locator) ||
                    (await _(e, { contentsOnly: t.linkType === a.U.HARD }));
                  for (const [i, A] of t.children) {
                    const t = r.children.get(i);
                    await I(n.y1.join(e, i), A, t);
                  }
                } else
                  t.children.has(Y) &&
                    (await _(n.y1.join(e, Y), { contentsOnly: !0 })),
                    await _(e, { contentsOnly: t.linkType === a.U.HARD });
              };
              for (const [e, t] of h) {
                const r = g.get(e);
                for (const [i, A] of t.children) {
                  if ("." === i) continue;
                  const t = r ? r.children.get(i) : r;
                  await I(n.y1.join(e, i), A, t);
                }
              }
              const E = [];
              for (const [r, { locations: A }] of e.locatorMap.entries())
                for (const e of A) {
                  const { locationRoot: A, segments: o } = H(e, {
                    skipPrefix: i.cwd,
                  });
                  let s = h.get(A),
                    a = A;
                  if (s) {
                    for (const e of o)
                      if (((a = n.y1.join(a, e)), (s = s.children.get(e)), !s))
                        break;
                    if (s && !V(s.locator, r)) {
                      const e = t.get(s.locator),
                        r = e.target,
                        n = a,
                        i = e.linkType;
                      r !== n && E.push({ srcDir: r, dstDir: n, linkType: i });
                    }
                  }
                }
              for (const [e, { locations: r }] of t.entries())
                for (const A of r) {
                  const { locationRoot: r, segments: o } = H(A, {
                    skipPrefix: i.cwd,
                  });
                  let s = g.get(r),
                    a = h.get(r),
                    c = r;
                  const l = t.get(e),
                    u = l.target,
                    f = A;
                  if (u === f) continue;
                  const p = l.linkType;
                  for (const e of o) a = a.children.get(e);
                  if (s) {
                    for (const e of o)
                      if (
                        ((c = n.y1.join(c, e)), (s = s.children.get(e)), !s)
                      ) {
                        E.push({ srcDir: u, dstDir: f, linkType: p });
                        break;
                      }
                  } else E.push({ srcDir: u, dstDir: f, linkType: p });
                }
              const m = o.yG.progressViaCounter(E.length),
                B = A.reportProgress(m);
              try {
                const e = new Map();
                for (const t of E)
                  (t.linkType !== a.U.SOFT && e.has(t.srcDir)) ||
                    (e.set(t.srcDir, t.dstDir), await p({ ...t }));
                await Promise.all(f), (f.length = 0);
                for (const t of E) {
                  const r = e.get(t.srcDir);
                  t.linkType !== a.U.SOFT &&
                    t.dstDir !== r &&
                    (await C(r, t.dstDir));
                }
                await Promise.all(f),
                  await u.xfs.mkdirPromise(c, { recursive: !0 });
                const r = await (async function (e, t, r, { loadManifest: i }) {
                  const A = new Map();
                  for (const [t, { locations: r }] of e) {
                    const e = W(t) ? null : await i(r[0]),
                      o = new Map();
                    if (e)
                      for (const [t, i] of e.bin) {
                        const e = n.y1.join(r[0], i);
                        "" !== i && u.xfs.existsSync(e) && o.set(t, i);
                      }
                    A.set(t, o);
                  }
                  const o = new Map(),
                    s = (e, t, i) => {
                      const a = new Map(),
                        c = n.y1.contains(r, e);
                      if (i.locator && null !== c) {
                        const t = A.get(i.locator);
                        for (const [r, i] of t) {
                          const t = n.y1.join(e, n.cS.toPortablePath(i));
                          a.set((0, n.Zu)(r), t);
                        }
                        for (const [t, r] of i.children) {
                          const i = n.y1.join(e, t),
                            A = s(i, i, r);
                          A.size > 0 &&
                            o.set(
                              e,
                              new Map([...(o.get(e) || new Map()), ...A])
                            );
                        }
                      } else
                        for (const [r, A] of i.children) {
                          const i = s(n.y1.join(e, r), t, A);
                          for (const [e, t] of i) a.set(e, t);
                        }
                      return a;
                    };
                  for (const [e, r] of t) {
                    const t = s(e, e, r);
                    t.size > 0 &&
                      o.set(e, new Map([...(o.get(e) || new Map()), ...t]));
                  }
                  return o;
                })(t, h, i.cwd, { loadManifest: s });
                await (async function (e, t) {
                  for (const r of e.keys())
                    if (!t.has(r)) {
                      const e = n.y1.join(r, Y, ".bin");
                      await u.xfs.removePromise(e);
                    }
                  for (const [r, i] of t) {
                    const t = n.y1.join(r, Y, ".bin"),
                      A = e.get(r) || new Map();
                    await u.xfs.mkdirPromise(t, { recursive: !0 });
                    for (const e of A.keys())
                      i.has(e) ||
                        (await u.xfs.removePromise(n.y1.join(t, e)),
                        "win32" === process.platform &&
                          (await u.xfs.removePromise(
                            n.y1.join(t, (0, n.Zu)(e + ".cmd"))
                          )));
                    for (const [e, r] of i) {
                      const i = A.get(e),
                        o = n.y1.join(t, e);
                      i !== r &&
                        ("win32" === process.platform
                          ? await P()(
                              n.cS.fromPortablePath(r),
                              n.cS.fromPortablePath(o),
                              { createPwshFile: !1 }
                            )
                          : (await u.xfs.removePromise(o),
                            await q(r, o),
                            await u.xfs.chmodPromise(r, 493)));
                    }
                  }
                })(l, r),
                  await (async function (e, t, r) {
                    let i = "";
                    (i +=
                      "# Warning: This file is automatically generated. Removing it is fine, but will\n"),
                      (i +=
                        "# cause your node_modules installation to become invalidated.\n"),
                      (i += "\n"),
                      (i += "__metadata:\n"),
                      (i += "  version: 1\n");
                    const A = Array.from(t.keys()).sort();
                    for (const o of A) {
                      const A = t.get(o);
                      (i += "\n"),
                        (i += JSON.stringify(o) + ":\n"),
                        (i += "  locations:\n");
                      let s = !1;
                      for (const t of A.locations) {
                        const r = n.y1.contains(e.cwd, t);
                        if (null === r)
                          throw new Error(
                            `Assertion failed: Expected the path to be within the project (${t})`
                          );
                        (i += `    - ${JSON.stringify(r)}\n`),
                          t === e.cwd && (s = !0);
                      }
                      if (A.aliases.length > 0) {
                        i += "  aliases:\n";
                        for (const e of A.aliases)
                          i += `    - ${JSON.stringify(e)}\n`;
                      }
                      if (s && r.size > 0) {
                        i += "  bin:\n";
                        for (const [t, A] of r) {
                          const r = n.y1.contains(e.cwd, t);
                          if (null === r)
                            throw new Error(
                              `Assertion failed: Expected the path to be within the project (${t})`
                            );
                          i += `    ${JSON.stringify(r)}:\n`;
                          for (const [e, r] of A) {
                            const A = n.y1.relative(n.y1.join(t, Y), r);
                            i += `      ${JSON.stringify(e)}: ${JSON.stringify(
                              A
                            )}\n`;
                          }
                        }
                      }
                    }
                    const o = e.cwd,
                      s = n.y1.join(o, Y, ".yarn-state.yml");
                    await u.xfs.changeFilePromise(s, i, {
                      automaticNewlines: !0,
                    });
                  })(i, t, r);
              } finally {
                B.stop();
              }
            })(r, s, {
              baseFs: t,
              project: this.opts.project,
              report: this.opts.report,
              loadManifest: this.cachedManifestLoad.bind(this),
            });
            const f = [];
            for (const [e, t] of s.entries()) {
              if (W(e)) continue;
              const r = i.structUtils.parseLocator(e),
                o = {
                  name: i.structUtils.stringifyIdent(r),
                  reference: r.reference,
                };
              if (null === A.getPackageInformation(o))
                throw new Error(
                  `Assertion failed: Expected the package to be registered (${i.structUtils.prettyLocator(
                    this.opts.project.configuration,
                    r
                  )})`
                );
              const s = n.cS.toPortablePath(t.locations[0]),
                g = await this.cachedManifestLoad(s),
                l = await this.getSourceBuildScripts(s, g);
              l.length > 0 &&
                !this.opts.project.configuration.get("enableScripts") &&
                (this.opts.report.reportWarningOnce(
                  c.b.DISABLED_BUILD_SCRIPTS,
                  i.structUtils.prettyLocator(
                    this.opts.project.configuration,
                    r
                  ) +
                    " lists build scripts, but all build scripts have been disabled."
                ),
                (l.length = 0)),
                l.length > 0 &&
                  t.linkType !== a.U.HARD &&
                  !this.opts.project.tryWorkspaceByLocator(r) &&
                  (this.opts.report.reportWarningOnce(
                    c.b.SOFT_LINK_BUILD,
                    i.structUtils.prettyLocator(
                      this.opts.project.configuration,
                      r
                    ) +
                      " lists build scripts, but is referenced through a soft link. Soft links don't support build scripts, so they'll be ignored."
                  ),
                  (l.length = 0));
              const u = this.opts.project.getDependencyMeta(r, g.version);
              l.length > 0 &&
                u &&
                !1 === u.built &&
                (this.opts.report.reportInfoOnce(
                  c.b.BUILD_DISABLED,
                  i.structUtils.prettyLocator(
                    this.opts.project.configuration,
                    r
                  ) +
                    " lists build scripts, but its build has been explicitly disabled through configuration."
                ),
                (l.length = 0)),
                l.length > 0 &&
                  f.push({
                    buildLocations: t.locations,
                    locatorHash: r.locatorHash,
                    buildDirective: l,
                  });
            }
            return f;
          }
          async cachedManifestLoad(e) {
            let t = this.manifestCache.get(e);
            if (t) return t;
            try {
              t = await A.G.find(e);
            } catch (t) {
              throw ((t.message = `While loading ${e}: ${t.message}`), t);
            }
            return this.manifestCache.set(e, t), t;
          }
          async getSourceBuildScripts(e, t) {
            const r = [],
              { scripts: i } = t;
            for (const e of ["preinstall", "install", "postinstall"])
              i.has(e) && r.push([s.k.SCRIPT, e]);
            const A = n.y1.resolve(e, "binding.gyp");
            return (
              !i.has("install") &&
                u.xfs.existsSync(A) &&
                r.push([s.k.SHELLCODE, "node-gyp rebuild"]),
              r
            );
          }
        }
        async function G(e, { unrollAliases: t = !1 } = {}) {
          const r = e.cwd,
            A = n.y1.join(r, Y, ".yarn-state.yml");
          if (!u.xfs.existsSync(A)) return null;
          const o = (0, f.parseSyml)(await u.xfs.readFilePromise(A, "utf8"));
          if (o.__metadata.version > 1) return null;
          const s = new Map(),
            c = new Map();
          delete o.__metadata;
          for (const [e, A] of Object.entries(o)) {
            const o = A.locations.map((e) => n.y1.join(r, e)),
              g = A.bin;
            if (g)
              for (const [e, t] of Object.entries(g)) {
                const A = n.y1.join(r, n.cS.toPortablePath(e)),
                  o = i.miscUtils.getMapWithDefault(c, A);
                for (const [e, r] of Object.entries(t))
                  o.set(
                    (0, n.Zu)(e),
                    n.cS.toPortablePath([A, Y, r].join(n.y1.delimiter))
                  );
              }
            if (
              (s.set(e, {
                target: n.LZ.dot,
                linkType: a.U.HARD,
                locations: o,
                aliases: A.aliases || [],
              }),
              t && A.aliases)
            )
              for (const t of A.aliases) {
                const { scope: r, name: A } = i.structUtils.parseLocator(e),
                  c = i.structUtils.makeLocator(
                    i.structUtils.makeIdent(r, A),
                    t
                  ),
                  g = i.structUtils.stringifyLocator(c);
                s.set(g, {
                  target: n.LZ.dot,
                  linkType: a.U.HARD,
                  locations: o,
                  aliases: [],
                });
              }
          }
          return {
            locatorMap: s,
            binSymlinks: c,
            locationTree: J(s, { skipPrefix: e.cwd }),
          };
        }
        const _ = async (e, t) => {
            if (e.split(n.y1.sep).indexOf(Y) < 0)
              throw new Error(
                "Assertion failed: trying to remove dir that doesn't contain node_modules: " +
                  e
              );
            try {
              if (!t.innerLoop) {
                if ((await u.xfs.lstatPromise(e)).isSymbolicLink())
                  return void (await u.xfs.unlinkPromise(e));
              }
              const r = await u.xfs.readdirPromise(e, { withFileTypes: !0 });
              for (const i of r) {
                const r = n.y1.join(e, (0, n.Zu)(i.name));
                i.isDirectory()
                  ? (i.name !== Y || (t && t.innerLoop)) &&
                    (await _(r, { innerLoop: !0, contentsOnly: !1 }))
                  : await u.xfs.unlinkPromise(r);
              }
              t.contentsOnly || (await u.xfs.rmdirPromise(e));
            } catch (e) {
              if ("ENOENT" !== e.code && "ENOTEMPTY" !== e.code) throw e;
            }
          },
          H = (e, { skipPrefix: t }) => {
            const r = n.y1.contains(t, e);
            if (null === r)
              throw new Error(
                `Assertion failed: Cannot process a path that isn't part of the requested prefix (${e} isn't within ${t})`
              );
            const i = r.split(n.y1.sep).filter((e) => "" !== e),
              A = i.indexOf(Y),
              o = i.slice(0, A).join(n.y1.sep);
            return { locationRoot: n.y1.join(t, o), segments: i.slice(A) };
          },
          J = (e, { skipPrefix: t }) => {
            const r = new Map();
            if (null === e) return r;
            const A = () => ({ children: new Map(), linkType: a.U.HARD });
            for (const [o, s] of e.entries()) {
              if (s.linkType === a.U.SOFT) {
                if (null !== n.y1.contains(t, s.target)) {
                  const e = i.miscUtils.getFactoryWithDefault(r, s.target, A);
                  (e.locator = o), (e.linkType = s.linkType);
                }
              }
              for (const e of s.locations) {
                const { locationRoot: n, segments: a } = H(e, {
                  skipPrefix: t,
                });
                let c = i.miscUtils.getFactoryWithDefault(r, n, A);
                for (let e = 0; e < a.length; ++e) {
                  const t = a[e];
                  if ("." !== t) {
                    const e = i.miscUtils.getFactoryWithDefault(
                      c.children,
                      t,
                      A
                    );
                    c.children.set(t, e), (c = e);
                  }
                  e === a.length - 1 &&
                    ((c.locator = o), (c.linkType = s.linkType));
                }
              }
            }
            return r;
          },
          q = async (e, t) => {
            let r;
            try {
              "win32" === process.platform && (r = u.xfs.lstatSync(e));
            } catch (e) {}
            "win32" != process.platform || (r && !r.isDirectory())
              ? u.xfs.symlinkPromise(n.y1.relative(n.y1.dirname(t), e), t)
              : u.xfs.symlinkPromise(e, t, "junction");
          },
          z = async (e, t, { baseFs: r, innerLoop: i }) => {
            await u.xfs.mkdirPromise(e, { recursive: !0 });
            const A = await r.readdirPromise(t, { withFileTypes: !0 }),
              o = async (e, t, i) => {
                if (i.isFile()) {
                  const n = await r.lstatPromise(t);
                  await r.copyFilePromise(t, e);
                  const i = 511 & n.mode;
                  420 !== i && (await u.xfs.chmodPromise(e, i));
                } else {
                  if (!i.isSymbolicLink())
                    throw new Error(
                      `Unsupported file type (file: ${t}, mode: 0o${await u.xfs
                        .statSync(t)
                        .mode.toString(8)
                        .padStart(6, "0")})`
                    );
                  {
                    const i = await r.readlinkPromise(t);
                    await q(n.y1.resolve(n.y1.dirname(e), i), e);
                  }
                }
              };
            for (const s of A) {
              const A = n.y1.join(t, (0, n.Zu)(s.name)),
                a = n.y1.join(e, (0, n.Zu)(s.name));
              s.isDirectory()
                ? (s.name !== Y || i) &&
                  (await z(a, A, { baseFs: r, innerLoop: !0 }))
                : await o(a, A, s);
            }
          };
        function W(e) {
          let t = i.structUtils.parseDescriptor(e);
          return (
            i.structUtils.isVirtualDescriptor(t) &&
              (t = i.structUtils.devirtualizeDescriptor(t)),
            t.range.startsWith("link:")
          );
        }
        const V = (e, t) => {
          if (!e || !t) return e === t;
          let r = i.structUtils.parseLocator(e);
          i.structUtils.isVirtualLocator(r) &&
            (r = i.structUtils.devirtualizeLocator(r));
          let n = i.structUtils.parseLocator(t);
          return (
            i.structUtils.isVirtualLocator(n) &&
              (n = i.structUtils.devirtualizeLocator(n)),
            i.structUtils.areLocatorsEqual(r, n)
          );
        };
        class X extends p.PnpLinker {
          constructor() {
            super(...arguments), (this.mode = "loose");
          }
          makeInstaller(e) {
            return new Z(e);
          }
        }
        class Z extends p.PnpInstaller {
          constructor() {
            super(...arguments), (this.mode = "loose");
          }
          async finalizeInstallWithPnp(e) {
            if (this.opts.project.configuration.get("pnpMode") !== this.mode)
              return;
            const t = new g.p({
                baseFs: new l.A({
                  libzip: await (0, h.getLibzipPromise)(),
                  maxOpenFiles: 80,
                  readOnlyArchives: !0,
                }),
              }),
              r = (0, x.oC)(e, this.opts.project.cwd, t),
              A = N(r, { pnpifyFs: !1 }),
              o = new Map();
            e.fallbackPool = o;
            const s = (e, t) => {
                const r = i.structUtils.parseLocator(t.locator),
                  n = i.structUtils.stringifyIdent(r);
                n === e ? o.set(e, r.reference) : o.set(e, [n, r.reference]);
              },
              a = n.y1.join(this.opts.project.cwd, n.QS.nodeModules),
              c = A.get(a);
            if (void 0 === c)
              throw new Error(
                "Assertion failed: Expected a root junction point"
              );
            if ("target" in c)
              throw new Error(
                "Assertion failed: Expected the root junction point to be a directory"
              );
            for (const e of c.dirList) {
              const t = n.y1.join(a, e),
                r = A.get(t);
              if (void 0 === r)
                throw new Error(
                  "Assertion failed: Expected the child to have been registered"
                );
              if ("target" in r) s(e, r);
              else
                for (const i of r.dirList) {
                  const r = n.y1.join(t, i),
                    o = A.get(r);
                  if (void 0 === o)
                    throw new Error(
                      "Assertion failed: Expected the subchild to have been registered"
                    );
                  if (!("target" in o))
                    throw new Error(
                      "Assertion failed: Expected the leaf junction to be a package"
                    );
                  s(`${e}/${i}`, o);
                }
            }
            return super.finalizeInstallWithPnp(e);
          }
        }
        const $ = (e) => n.y1.join(e.cwd, ".pnp.js"),
          ee = {
            linkers: [
              class {
                supportsPackage(e, t) {
                  return (
                    "node-modules" === t.project.configuration.get("nodeLinker")
                  );
                }
                async findPackageLocation(e, t) {
                  const r = t.project.tryWorkspaceByLocator(e);
                  if (r) return r.cwd;
                  const n = await G(t.project, { unrollAliases: !0 });
                  if (null === n)
                    throw new U.UsageError(
                      "Couldn't find the node_modules state file - running an install might help (findPackageLocation)"
                    );
                  const A = n.locatorMap.get(i.structUtils.stringifyLocator(e));
                  if (!A)
                    throw new U.UsageError(
                      `Couldn't find ${i.structUtils.prettyLocator(
                        t.project.configuration,
                        e
                      )} in the currently installed node_modules map - running an install might help`
                    );
                  return A.locations[0];
                }
                async findPackageLocator(e, t) {
                  const r = await G(t.project, { unrollAliases: !0 });
                  if (null === r) return null;
                  const { locationRoot: A, segments: o } = H(n.y1.resolve(e), {
                    skipPrefix: t.project.cwd,
                  });
                  let s = r.locationTree.get(A);
                  if (!s) return null;
                  let a = s.locator;
                  for (const e of o) {
                    if (((s = s.children.get(e)), !s)) break;
                    a = s.locator || a;
                  }
                  return i.structUtils.parseLocator(a);
                }
                makeInstaller(e) {
                  return new j({ ...e, skipIncompatiblePackageLinking: !0 });
                }
              },
              X,
            ],
          };
      },
      94573: (e, t, r) => {
        "use strict";
        r.r(t), r.d(t, { default: () => F });
        var n = r(27122),
          i = r(36370),
          A = r(95397),
          o = r(40376),
          s = r(5624),
          a = r(35691),
          c = r(15815),
          g = r(92659),
          l = r(86717),
          u = r(93103),
          h = r(85622),
          f = r.n(h),
          p = r(53887),
          C = r.n(p),
          d = r(31669);
        class I extends A.BaseCommand {
          constructor() {
            super(...arguments), (this.json = !1);
          }
          async execute() {
            const e = await n.VK.find(this.context.cwd, this.context.plugins),
              { project: t } = await o.I.find(e, this.context.cwd),
              r =
                void 0 !== this.fields
                  ? new Set(["name", ...this.fields.split(/\s*,\s*/)])
                  : null,
              i = [];
            let A = !1;
            const h = await c.Pk.start(
              {
                configuration: e,
                includeFooter: !1,
                json: this.json,
                stdout: this.context.stdout,
              },
              async (n) => {
                for (const o of this.packages) {
                  let c;
                  if ("." === o) {
                    const e = t.topLevelWorkspace;
                    if (!e.manifest.name)
                      throw new u.UsageError(
                        "Missing 'name' field in " +
                          f().join(e.cwd, "package.json")
                      );
                    c = s.structUtils.makeDescriptor(
                      e.manifest.name,
                      "unknown"
                    );
                  } else c = s.structUtils.parseDescriptor(o);
                  const h = l.npmHttpUtils.getIdentUrl(c);
                  let p;
                  try {
                    p = E(
                      await l.npmHttpUtils.get(h, {
                        configuration: e,
                        ident: c,
                        json: !0,
                      })
                    );
                  } catch (e) {
                    throw "HTTPError" !== e.name
                      ? e
                      : 404 === e.response.statusCode
                      ? new a.lk(g.b.EXCEPTION, "Package not found")
                      : new a.lk(g.b.EXCEPTION, e.toString());
                  }
                  const d = Object.keys(p.versions).sort(C().compareLoose);
                  let I = p["dist-tags"].latest || d[d.length - 1];
                  if (C().validRange(c.range)) {
                    const t = C().maxSatisfying(d, c.range);
                    null !== t
                      ? (I = t)
                      : (n.reportWarning(
                          g.b.UNNAMED,
                          `Unmet range ${s.structUtils.prettyRange(
                            e,
                            c.range
                          )}; falling back to the latest version`
                        ),
                        (A = !0));
                  } else
                    "unknown" !== c.range &&
                      (n.reportWarning(
                        g.b.UNNAMED,
                        `Invalid range ${s.structUtils.prettyRange(
                          e,
                          c.range
                        )}; falling back to the latest version`
                      ),
                      (A = !0));
                  const m = p.versions[I],
                    B = { ...p, ...m, version: I, versions: d };
                  let w;
                  if (null !== r) {
                    w = {};
                    for (const t of r) {
                      const r = B[t];
                      void 0 !== r
                        ? (w[t] = r)
                        : (n.reportWarning(
                            g.b.EXCEPTION,
                            `The '${t}' field doesn't exist inside ${s.structUtils.prettyIdent(
                              e,
                              c
                            )}'s informations`
                          ),
                          (A = !0));
                    }
                  } else
                    this.json ||
                      (delete B.dist, delete B.readme, delete B.users),
                      (w = B);
                  n.reportJson(w), this.json || i.push(w);
                }
              }
            );
            d.inspect.styles.name = "cyan";
            for (const e of i)
              (e !== i[0] || A) && this.context.stdout.write("\n"),
                this.context.stdout.write(
                  (0, d.inspect)(e, { depth: 1 / 0, colors: !0, compact: !1 }) +
                    "\n"
                );
            return h.exitCode();
          }
        }
        function E(e) {
          if (Array.isArray(e)) {
            const t = [];
            for (let r of e) (r = E(r)), r && t.push(r);
            return t;
          }
          if ("object" == typeof e && null !== e) {
            const t = {};
            for (const r of Object.keys(e)) {
              if (r.startsWith("_")) continue;
              const n = E(e[r]);
              n && (t[r] = n);
            }
            return t;
          }
          return e || null;
        }
        (I.usage = u.Command.Usage({
          description: "show information about a package",
          details:
            "\n      This command will fetch information about a package from the npm registry, and prints it in a tree format.\n\n      The package does not have to be installed locally, but needs to have been published (in particular, local changes will be ignored even for workspaces).\n\n      Append `@<range>` to the package argument to provide information specific to the latest version that satisfies the range. If the range is invalid or if there is no version satisfying the range, the command will print a warning and fall back to the latest version.\n\n      If the `-f,--fields` option is set, it's a comma-separated list of fields which will be used to only display part of the package informations.\n\n      By default, this command won't return the `dist`, `readme`, and `users` fields, since they are often very long. To explicitly request those fields, explicitly list them with the `--fields` flag or request the output in JSON mode.\n\n      If the `--json` flag is set the output will follow a JSON-stream output also known as NDJSON (https://github.com/ndjson/ndjson-spec).\n    ",
          examples: [
            [
              "Show all available information about react (except the `dist`, `readme`, and `users` fields)",
              "yarn npm info react",
            ],
            [
              "Show all available information about react as valid JSON (including the `dist`, `readme`, and `users` fields)",
              "yarn npm info react --json",
            ],
            [
              "Show all available information about react 16.12.0",
              "yarn npm info react@16.12.0",
            ],
            [
              "Show the description of react",
              "yarn npm info react --fields description",
            ],
            [
              "Show all available versions of react",
              "yarn npm info react --fields versions",
            ],
            ["Show the readme of react", "yarn npm info react --fields readme"],
            [
              "Show a few fields of react",
              "yarn npm info react --fields homepage,repository",
            ],
          ],
        })),
          (0, i.gn)([u.Command.Rest()], I.prototype, "packages", void 0),
          (0, i.gn)(
            [u.Command.String("-f,--fields")],
            I.prototype,
            "fields",
            void 0
          ),
          (0, i.gn)([u.Command.Boolean("--json")], I.prototype, "json", void 0),
          (0, i.gn)(
            [u.Command.Path("npm", "info")],
            I.prototype,
            "execute",
            null
          );
        var m = r(61899);
        class B extends A.BaseCommand {
          constructor() {
            super(...arguments), (this.publish = !1);
          }
          async execute() {
            const e = await n.VK.find(this.context.cwd, this.context.plugins),
              t = await w({
                configuration: e,
                cwd: this.context.cwd,
                publish: this.publish,
                scope: this.scope,
              });
            return (
              await c.Pk.start(
                { configuration: e, stdout: this.context.stdout },
                async (r) => {
                  const i = await (async function ({
                      registry: e,
                      report: t,
                      stdin: r,
                      stdout: n,
                    }) {
                      if (process.env.TEST_ENV)
                        return {
                          name: process.env.TEST_NPM_USER || "",
                          password: process.env.TEST_NPM_PASSWORD || "",
                        };
                      t.reportInfo(g.b.UNNAMED, "Logging in to " + e);
                      let i = !1;
                      e.match(/^https:\/\/npm\.pkg\.github\.com(\/|$)/) &&
                        (t.reportInfo(
                          g.b.UNNAMED,
                          "You seem to be using the GitHub Package Registry. Tokens must be generated with the 'repo', 'write:packages', and 'read:packages' permissions."
                        ),
                        (i = !0));
                      t.reportSeparator();
                      const { username: A, password: o } = await (0, m.prompt)([
                        {
                          type: "input",
                          name: "username",
                          message: "Username:",
                          required: !0,
                          onCancel: () => process.exit(130),
                          stdin: r,
                          stdout: n,
                        },
                        {
                          type: "password",
                          name: "password",
                          message: i ? "Token:" : "Password:",
                          required: !0,
                          onCancel: () => process.exit(130),
                          stdin: r,
                          stdout: n,
                        },
                      ]);
                      return t.reportSeparator(), { name: A, password: o };
                    })({
                      registry: t,
                      report: r,
                      stdin: this.context.stdin,
                      stdout: this.context.stdout,
                    }),
                    A =
                      "/-/user/org.couchdb.user:" + encodeURIComponent(i.name),
                    o = await l.npmHttpUtils.put(A, i, {
                      attemptedAs: i.name,
                      configuration: e,
                      registry: t,
                      json: !0,
                      authType: l.npmHttpUtils.AuthType.NO_AUTH,
                    });
                  return (
                    await (async function (
                      e,
                      t,
                      { configuration: r, scope: i }
                    ) {
                      const A = (e) => (r) => {
                          const n = s.miscUtils.isIndexableObject(r) ? r : {},
                            i = n[e],
                            A = s.miscUtils.isIndexableObject(i) ? i : {};
                          return { ...n, [e]: { ...A, npmAuthToken: t } };
                        },
                        o = i ? { npmScopes: A(i) } : { npmRegistries: A(e) };
                      return await n.VK.updateHomeConfiguration(o);
                    })(t, o.token, { configuration: e, scope: this.scope }),
                    r.reportInfo(g.b.UNNAMED, "Successfully logged in")
                  );
                }
              )
            ).exitCode();
          }
        }
        async function w({ scope: e, publish: t, configuration: r, cwd: n }) {
          return e && t
            ? l.npmConfigUtils.getScopeRegistry(e, {
                configuration: r,
                type: l.npmConfigUtils.RegistryType.PUBLISH_REGISTRY,
              })
            : e
            ? l.npmConfigUtils.getScopeRegistry(e, { configuration: r })
            : t
            ? l.npmConfigUtils.getPublishRegistry(
                (await (0, A.openWorkspace)(r, n)).manifest,
                { configuration: r }
              )
            : l.npmConfigUtils.getDefaultRegistry({ configuration: r });
        }
        (B.usage = u.Command.Usage({
          category: "Npm-related commands",
          description: "store new login info to access the npm registry",
          details:
            "\n      This command will ask you for your username, password, and 2FA One-Time-Password (when it applies). It will then modify your local configuration (in your home folder, never in the project itself) to reference the new tokens thus generated.\n\n      Adding the `-s,--scope` flag will cause the authentication to be done against whatever registry is configured for the associated scope (see also `npmScopes`).\n\n      Adding the `--publish` flag will cause the authentication to be done against the registry used when publishing the package (see also `publishConfig.registry` and `npmPublishRegistry`).\n    ",
          examples: [
            ["Login to the default registry", "yarn npm login"],
            [
              "Login to the registry linked to the @my-scope registry",
              "yarn npm login --scope my-scope",
            ],
            [
              "Login to the publish registry for the current package",
              "yarn npm login --publish",
            ],
          ],
        })),
          (0, i.gn)(
            [u.Command.String("-s,--scope")],
            B.prototype,
            "scope",
            void 0
          ),
          (0, i.gn)(
            [u.Command.Boolean("--publish")],
            B.prototype,
            "publish",
            void 0
          ),
          (0, i.gn)(
            [u.Command.Path("npm", "login")],
            B.prototype,
            "execute",
            null
          );
        const y = new Set(["npmAuthIdent", "npmAuthToken"]);
        class Q extends A.BaseCommand {
          constructor() {
            super(...arguments), (this.publish = !1), (this.all = !1);
          }
          async execute() {
            const e = await n.VK.find(this.context.cwd, this.context.plugins),
              t = async () => {
                var t;
                const r = await w({
                    configuration: e,
                    cwd: this.context.cwd,
                    publish: this.publish,
                    scope: this.scope,
                  }),
                  i = await n.VK.find(this.context.cwd, this.context.plugins),
                  A = s.structUtils.makeIdent(
                    null !== (t = this.scope) && void 0 !== t ? t : null,
                    "pkg"
                  );
                return !l.npmConfigUtils
                  .getAuthConfiguration(r, { configuration: i, ident: A })
                  .get("npmAuthToken");
              };
            return (
              await c.Pk.start(
                { configuration: e, stdout: this.context.stdout },
                async (r) => {
                  if (
                    (this.all &&
                      (await (async function () {
                        const e = (e) => {
                          let t = !1;
                          const r = s.miscUtils.isIndexableObject(e)
                            ? { ...e }
                            : {};
                          r.npmAuthToken && (delete r.npmAuthToken, (t = !0));
                          for (const e of Object.keys(r)) v(r, e) && (t = !0);
                          if (0 !== Object.keys(r).length) return t ? r : e;
                        };
                        return await n.VK.updateHomeConfiguration({
                          npmRegistries: e,
                          npmScopes: e,
                        });
                      })(),
                      r.reportInfo(
                        g.b.UNNAMED,
                        "Successfully logged out from everything"
                      )),
                    this.scope)
                  )
                    return (
                      await b("npmScopes", this.scope),
                      void ((await t())
                        ? r.reportInfo(
                            g.b.UNNAMED,
                            "Successfully logged out from " + this.scope
                          )
                        : r.reportWarning(
                            g.b.UNNAMED,
                            "Scope authentication settings removed, but some other ones settings still apply to it"
                          ))
                    );
                  const i = await w({
                    configuration: e,
                    cwd: this.context.cwd,
                    publish: this.publish,
                  });
                  await b("npmRegistries", i),
                    (await t())
                      ? r.reportInfo(
                          g.b.UNNAMED,
                          "Successfully logged out from " + i
                        )
                      : r.reportWarning(
                          g.b.UNNAMED,
                          "Registry authentication settings removed, but some other ones settings still apply to it"
                        );
                }
              )
            ).exitCode();
          }
        }
        function v(e, t) {
          const r = e[t];
          if (!s.miscUtils.isIndexableObject(r)) return !1;
          const n = new Set(Object.keys(r));
          if ([...y].every((e) => !n.has(e))) return !1;
          for (const e of y) n.delete(e);
          if (0 === n.size) return (e[t] = void 0), !0;
          const i = { ...r };
          for (const e of y) delete i[e];
          return (e[t] = i), !0;
        }
        async function b(e, t) {
          return await n.VK.updateHomeConfiguration({
            [e]: (e) => {
              const r = s.miscUtils.isIndexableObject(e) ? e : {};
              if (!Object.prototype.hasOwnProperty.call(r, t)) return e;
              const n = r[t],
                i = s.miscUtils.isIndexableObject(n) ? n : {},
                A = new Set(Object.keys(i));
              if ([...y].every((e) => !A.has(e))) return e;
              for (const e of y) A.delete(e);
              if (0 === A.size) {
                if (1 === Object.keys(r).length) return;
                return { ...r, [t]: void 0 };
              }
              const o = {};
              for (const e of y) o[e] = void 0;
              return { ...r, [t]: { ...i, ...o } };
            },
          });
        }
        (Q.usage = u.Command.Usage({
          category: "Npm-related commands",
          description: "logout of the npm registry",
          details:
            "\n      This command will log you out by modifying your local configuration (in your home folder, never in the project itself) to delete all credentials linked to a registry.\n\n      Adding the `-s,--scope` flag will cause the deletion to be done against whatever registry is configured for the associated scope (see also `npmScopes`).\n\n      Adding the `--publish` flag will cause the deletion to be done against the registry used when publishing the package (see also `publishConfig.registry` and `npmPublishRegistry`).\n\n      Adding the `-A,--all` flag will cause the deletion to be done against all registries and scopes.\n    ",
          examples: [
            ["Logout of the default registry", "yarn npm logout"],
            [
              "Logout of the @my-scope scope",
              "yarn npm logout --scope my-scope",
            ],
            [
              "Logout of the publish registry for the current package",
              "yarn npm logout --publish",
            ],
            ["Logout of all registries", "yarn npm logout --all"],
          ],
        })),
          (0, i.gn)(
            [u.Command.String("-s,--scope")],
            Q.prototype,
            "scope",
            void 0
          ),
          (0, i.gn)(
            [u.Command.Boolean("--publish")],
            Q.prototype,
            "publish",
            void 0
          ),
          (0, i.gn)(
            [u.Command.Boolean("-A,--all")],
            Q.prototype,
            "all",
            void 0
          ),
          (0, i.gn)(
            [u.Command.Path("npm", "logout")],
            Q.prototype,
            "execute",
            null
          );
        var D = r(5973),
          S = r(76417),
          k = r(10129),
          M = r(78835);
        class N extends A.BaseCommand {
          constructor() {
            super(...arguments),
              (this.tag = "latest"),
              (this.tolerateRepublish = !1);
          }
          async execute() {
            const e = await n.VK.find(this.context.cwd, this.context.plugins),
              { project: t, workspace: r } = await o.I.find(
                e,
                this.context.cwd
              );
            if (!r) throw new A.WorkspaceRequiredError(t.cwd, this.context.cwd);
            if (r.manifest.private)
              throw new u.UsageError("Private workspaces cannot be published");
            if (null === r.manifest.name || null === r.manifest.version)
              throw new u.UsageError(
                "Workspaces must have valid names and versions to be published on an external registry"
              );
            await t.restoreInstallState();
            const i = r.manifest.name,
              h = r.manifest.version,
              f = l.npmConfigUtils.getPublishRegistry(r.manifest, {
                configuration: e,
              });
            return (
              await c.Pk.start(
                { configuration: e, stdout: this.context.stdout },
                async (t) => {
                  if (this.tolerateRepublish)
                    try {
                      const r = await l.npmHttpUtils.get(
                        l.npmHttpUtils.getIdentUrl(i),
                        { configuration: e, registry: f, ident: i, json: !0 }
                      );
                      if (!Object.prototype.hasOwnProperty.call(r, "versions"))
                        throw new a.lk(
                          g.b.REMOTE_INVALID,
                          'Registry returned invalid data for - missing "versions" field'
                        );
                      if (Object.prototype.hasOwnProperty.call(r.versions, h))
                        return void t.reportWarning(
                          g.b.UNNAMED,
                          `Registry already knows about version ${h}; skipping.`
                        );
                    } catch (e) {
                      if ("HTTPError" !== e.name) throw e;
                      if (404 !== e.response.statusCode)
                        throw new a.lk(
                          g.b.NETWORK_ERROR,
                          `The remote server answered with HTTP ${e.response.statusCode} ${e.response.statusMessage}`
                        );
                    }
                  await s.scriptUtils.maybeExecuteWorkspaceLifecycleScript(
                    r,
                    "prepublish",
                    { report: t }
                  ),
                    await D.packUtils.prepareForPack(
                      r,
                      { report: t },
                      async () => {
                        const n = await D.packUtils.genPackList(r);
                        for (const e of n) t.reportInfo(null, e);
                        const A = await D.packUtils.genPackStream(r, n),
                          o = await s.miscUtils.bufferStream(A),
                          a = await (async function (
                            e,
                            t,
                            { access: r, tag: n, registry: i }
                          ) {
                            const A = e.project.configuration,
                              o = e.manifest.name,
                              a = e.manifest.version,
                              c = s.structUtils.stringifyIdent(o),
                              g = (0, S.createHash)("sha1")
                                .update(t)
                                .digest("hex"),
                              l = k.Sd(t).toString();
                            void 0 === r &&
                              (r =
                                e.manifest.publishConfig &&
                                "string" ==
                                  typeof e.manifest.publishConfig.access
                                  ? e.manifest.publishConfig.access
                                  : null !== A.get("npmPublishAccess")
                                  ? A.get("npmPublishAccess")
                                  : o.scope
                                  ? "restricted"
                                  : "public");
                            const u = await D.packUtils.genPackageManifest(e),
                              h = `${c}-${a}.tgz`,
                              f = new M.URL(`${c}/-/${h}`, i);
                            return {
                              _id: c,
                              _attachments: {
                                [h]: {
                                  content_type: "application/octet-stream",
                                  data: t.toString("base64"),
                                  length: t.length,
                                },
                              },
                              name: c,
                              access: r,
                              "dist-tags": { [n]: a },
                              versions: {
                                [a]: {
                                  ...u,
                                  _id: `${c}@${a}`,
                                  name: c,
                                  version: a,
                                  dist: {
                                    shasum: g,
                                    integrity: l,
                                    tarball: f.toString(),
                                  },
                                },
                              },
                            };
                          })(r, o, {
                            access: this.access,
                            tag: this.tag,
                            registry: f,
                          });
                        try {
                          await l.npmHttpUtils.put(
                            l.npmHttpUtils.getIdentUrl(i),
                            a,
                            {
                              configuration: e,
                              registry: f,
                              ident: i,
                              json: !0,
                            }
                          );
                        } catch (e) {
                          if ("HTTPError" !== e.name) throw e;
                          {
                            const r =
                              e.response.body && e.response.body.error
                                ? e.response.body.error
                                : `The remote server answered with HTTP ${e.response.statusCode} ${e.response.statusMessage}`;
                            t.reportError(g.b.NETWORK_ERROR, r);
                          }
                        }
                      }
                    ),
                    t.hasErrors() ||
                      t.reportInfo(g.b.UNNAMED, "Package archive published");
                }
              )
            ).exitCode();
          }
        }
        (N.usage = u.Command.Usage({
          category: "Npm-related commands",
          description: "publish the active workspace to the npm registry",
          details:
            '\n      This command will pack the active workspace into a fresh archive and upload it to the npm registry.\n\n      The package will by default be attached to the `latest` tag on the registry, but this behavior can be overriden by using the `--tag` option.\n\n      Note that for legacy reasons scoped packages are by default published with an access set to `restricted` (aka "private packages"). This requires you to register for a paid npm plan. In case you simply wish to publish a public scoped package to the registry (for free), just add the `--access public` flag. This behavior can be enabled by default through the `npmPublishAccess` settings.\n    ',
          examples: [["Publish the active workspace", "yarn npm publish"]],
        })),
          (0, i.gn)(
            [u.Command.String("--access")],
            N.prototype,
            "access",
            void 0
          ),
          (0, i.gn)([u.Command.String("--tag")], N.prototype, "tag", void 0),
          (0, i.gn)(
            [u.Command.Boolean("--tolerate-republish")],
            N.prototype,
            "tolerateRepublish",
            void 0
          ),
          (0, i.gn)(
            [u.Command.Path("npm", "publish")],
            N.prototype,
            "execute",
            null
          );
        class R extends A.BaseCommand {
          constructor() {
            super(...arguments), (this.publish = !1);
          }
          async execute() {
            const e = await n.VK.find(this.context.cwd, this.context.plugins);
            let t;
            t =
              this.scope && this.publish
                ? l.npmConfigUtils.getScopeRegistry(this.scope, {
                    configuration: e,
                    type: l.npmConfigUtils.RegistryType.PUBLISH_REGISTRY,
                  })
                : this.scope
                ? l.npmConfigUtils.getScopeRegistry(this.scope, {
                    configuration: e,
                  })
                : this.publish
                ? l.npmConfigUtils.getPublishRegistry(
                    (await (0, A.openWorkspace)(e, this.context.cwd)).manifest,
                    { configuration: e }
                  )
                : l.npmConfigUtils.getDefaultRegistry({ configuration: e });
            return (
              await c.Pk.start(
                { configuration: e, stdout: this.context.stdout },
                async (r) => {
                  try {
                    const n = await l.npmHttpUtils.get("/-/whoami", {
                      configuration: e,
                      registry: t,
                      authType: l.npmHttpUtils.AuthType.ALWAYS_AUTH,
                      json: !0,
                    });
                    r.reportInfo(g.b.UNNAMED, n.username);
                  } catch (e) {
                    if ("HTTPError" !== e.name) throw e;
                    401 === e.response.statusCode ||
                    403 === e.response.statusCode
                      ? r.reportError(
                          g.b.AUTHENTICATION_INVALID,
                          "Authentication failed - your credentials may have expired"
                        )
                      : r.reportError(g.b.AUTHENTICATION_INVALID, e.toString());
                  }
                }
              )
            ).exitCode();
          }
        }
        (R.usage = u.Command.Usage({
          category: "Npm-related commands",
          description: "display the name of the authenticated user",
          details:
            "\n      Print the username associated with the current authentication settings to the standard output.\n\n      When using `-s,--scope`, the username printed will be the one that matches the authentication settings of the registry associated with the given scope (those settings can be overriden using the `npmRegistries` map, and the registry associated with the scope is configured via the `npmScopes` map).\n\n      When using `--publish`, the registry we'll select will by default be the one used when publishing packages (`publishConfig.registry` or `npmPublishRegistry` if available, otherwise we'll fallback to the regular `npmRegistryServer`).\n    ",
          examples: [
            ["Print username for the default registry", "yarn npm whoami"],
            [
              "Print username for the registry on a given scope",
              "yarn npm whoami --scope company",
            ],
          ],
        })),
          (0, i.gn)(
            [u.Command.String("-s,--scope")],
            R.prototype,
            "scope",
            void 0
          ),
          (0, i.gn)(
            [u.Command.Boolean("--publish")],
            R.prototype,
            "publish",
            void 0
          ),
          (0, i.gn)(
            [u.Command.Path("npm", "whoami")],
            R.prototype,
            "execute",
            null
          );
        const F = {
          configuration: {
            npmPublishAccess: {
              description: "Default access of the published packages",
              type: n.a2.STRING,
              default: null,
            },
          },
          commands: [I, B, Q, N, R],
        };
      },
      86717: (e, t, r) => {
        "use strict";
        r.r(t),
          r.d(t, {
            npmConfigUtils: () => n,
            npmHttpUtils: () => i,
            default: () => L,
          });
        var n = {};
        r.r(n),
          r.d(n, {
            RegistryType: () => c,
            getAuthConfiguration: () => B,
            getDefaultRegistry: () => I,
            getPublishRegistry: () => C,
            getRegistryConfiguration: () => E,
            getScopeConfiguration: () => m,
            getScopeRegistry: () => d,
            normalizeRegistry: () => p,
          });
        var i = {};
        r.r(i),
          r.d(i, {
            AuthType: () => g,
            get: () => y,
            getIdentUrl: () => w,
            put: () => Q,
          });
        var A = r(27122),
          o = r(5624),
          s = r(53887),
          a = r.n(s);
        var c,
          g,
          l = r(35691),
          u = r(92659),
          h = r(61899),
          f = r(78835);
        function p(e) {
          return e.replace(/\/$/, "");
        }
        function C(e, { configuration: t }) {
          return e.publishConfig && e.publishConfig.registry
            ? p(e.publishConfig.registry)
            : e.name
            ? d(e.name.scope, { configuration: t, type: c.PUBLISH_REGISTRY })
            : I({ configuration: t, type: c.PUBLISH_REGISTRY });
        }
        function d(e, { configuration: t, type: r = c.FETCH_REGISTRY }) {
          const n = m(e, { configuration: t });
          if (null === n) return I({ configuration: t, type: r });
          const i = n.get(r);
          return null === i ? I({ configuration: t, type: r }) : p(i);
        }
        function I({ configuration: e, type: t = c.FETCH_REGISTRY }) {
          const r = e.get(t);
          return p(null !== r ? r : e.get(c.FETCH_REGISTRY));
        }
        function E(e, { configuration: t }) {
          const r = t.get("npmRegistries"),
            n = r.get(e);
          if (void 0 !== n) return n;
          const i = r.get(e.replace(/^[a-z]+:/, ""));
          return void 0 !== i ? i : null;
        }
        function m(e, { configuration: t }) {
          if (null === e) return null;
          const r = t.get("npmScopes").get(e);
          return r || null;
        }
        function B(e, { configuration: t, ident: r }) {
          const n = r && m(r.scope, { configuration: t });
          if (
            (null == n ? void 0 : n.get("npmAuthIdent")) ||
            (null == n ? void 0 : n.get("npmAuthToken"))
          )
            return n;
          return E(e, { configuration: t }) || t;
        }
        function w(e) {
          return e.scope ? `/@${e.scope}%2f${e.name}` : "/" + e.name;
        }
        async function y(
          e,
          {
            configuration: t,
            headers: r,
            ident: n,
            authType: i,
            registry: A,
            ...s
          }
        ) {
          if (
            (n && void 0 === A && (A = d(n.scope, { configuration: t })),
            n && n.scope && void 0 === i && (i = g.BEST_EFFORT),
            "string" != typeof A)
          )
            throw new Error(
              "Assertion failed: The registry should be a string"
            );
          const a = v(A, { authType: i, configuration: t, ident: n });
          let c;
          a && (r = { ...r, authorization: a });
          try {
            c = new f.URL(e);
          } catch (t) {
            c = new f.URL(A + e);
          }
          try {
            return await o.httpUtils.get(c.href, {
              configuration: t,
              headers: r,
              ...s,
            });
          } catch (e) {
            throw "HTTPError" !== e.name ||
              (401 !== e.response.statusCode && 403 !== e.response.statusCode)
              ? e
              : new l.lk(
                  u.b.AUTHENTICATION_INVALID,
                  `Invalid authentication (as ${await b(A, r, {
                    configuration: t,
                  })})`
                );
          }
        }
        async function Q(
          e,
          t,
          {
            attemptedAs: r,
            configuration: n,
            headers: i,
            ident: A,
            authType: s = g.ALWAYS_AUTH,
            registry: a,
            ...c
          }
        ) {
          if (
            (A && void 0 === a && (a = d(A.scope, { configuration: n })),
            "string" != typeof a)
          )
            throw new Error(
              "Assertion failed: The registry should be a string"
            );
          const f = v(a, { authType: s, configuration: n, ident: A });
          f && (i = { ...i, authorization: f });
          try {
            return await o.httpUtils.put(a + e, t, {
              configuration: n,
              headers: i,
              ...c,
            });
          } catch (A) {
            if (
              !(function (e) {
                if ("HTTPError" !== e.name) return !1;
                try {
                  return e.response.headers["www-authenticate"]
                    .split(/,\s*/)
                    .map((e) => e.toLowerCase())
                    .includes("otp");
                } catch (e) {
                  return !1;
                }
              })(A)
            )
              throw "HTTPError" !== A.name ||
                (401 !== A.response.statusCode && 403 !== A.response.statusCode)
                ? A
                : new l.lk(
                    u.b.AUTHENTICATION_INVALID,
                    `Invalid authentication (${
                      "string" != typeof r
                        ? "as " + (await b(a, i, { configuration: n }))
                        : "attempted as " + r
                    })`
                  );
            const s = await (async function () {
                if (process.env.TEST_ENV)
                  return process.env.TEST_NPM_2FA_TOKEN || "";
                const { otp: e } = await (0, h.prompt)({
                  type: "password",
                  name: "otp",
                  message: "One-time password:",
                  required: !0,
                  onCancel: () => process.exit(130),
                });
                return e;
              })(),
              g = { ...i, ...D(s) };
            try {
              return await o.httpUtils.put(`${a}${e}`, t, {
                configuration: n,
                headers: g,
                ...c,
              });
            } catch (e) {
              throw "HTTPError" !== e.name ||
                (401 !== e.response.statusCode && 403 !== e.response.statusCode)
                ? e
                : new l.lk(
                    u.b.AUTHENTICATION_INVALID,
                    `Invalid authentication (${
                      "string" != typeof r
                        ? "as " + (await b(a, g, { configuration: n }))
                        : "attempted as " + r
                    })`
                  );
            }
          }
        }
        function v(
          e,
          { authType: t = g.CONFIGURATION, configuration: r, ident: n }
        ) {
          const i = B(e, { configuration: r, ident: n }),
            A = (function (e, t) {
              switch (t) {
                case g.CONFIGURATION:
                  return e.get("npmAlwaysAuth");
                case g.BEST_EFFORT:
                case g.ALWAYS_AUTH:
                  return !0;
                case g.NO_AUTH:
                  return !1;
                default:
                  throw new Error("Unreachable");
              }
            })(i, t);
          if (!A) return null;
          if (i.get("npmAuthToken")) return "Bearer " + i.get("npmAuthToken");
          if (i.get("npmAuthIdent")) return "Basic " + i.get("npmAuthIdent");
          if (A && t !== g.BEST_EFFORT)
            throw new l.lk(
              u.b.AUTHENTICATION_NOT_FOUND,
              "No authentication configured for request"
            );
          return null;
        }
        async function b(e, t, { configuration: r }) {
          if (void 0 === t || void 0 === t.authorization)
            return "an anonymous user";
          try {
            return (
              await o.httpUtils.get(new f.URL(e + "/-/whoami").href, {
                configuration: r,
                headers: t,
              })
            ).username;
          } catch (e) {
            return "an unknown user";
          }
        }
        function D(e) {
          return { "npm-otp": e };
        }
        !(function (e) {
          (e.FETCH_REGISTRY = "npmRegistryServer"),
            (e.PUBLISH_REGISTRY = "npmPublishRegistry");
        })(c || (c = {})),
          (function (e) {
            (e[(e.NO_AUTH = 0)] = "NO_AUTH"),
              (e[(e.BEST_EFFORT = 1)] = "BEST_EFFORT"),
              (e[(e.CONFIGURATION = 2)] = "CONFIGURATION"),
              (e[(e.ALWAYS_AUTH = 3)] = "ALWAYS_AUTH");
          })(g || (g = {}));
        class S {
          supports(e, t) {
            if (!e.reference.startsWith("npm:")) return !1;
            const r = new f.URL(e.reference);
            return (
              !!a().valid(r.pathname) && !r.searchParams.has("__archiveUrl")
            );
          }
          getLocalPath(e, t) {
            return null;
          }
          async fetch(e, t) {
            const r = t.checksums.get(e.locatorHash) || null,
              [n, i, A] = await t.cache.fetchPackageFromCache(e, r, {
                onHit: () => t.report.reportCacheHit(e),
                onMiss: () =>
                  t.report.reportCacheMiss(
                    e,
                    o.structUtils.prettyLocator(t.project.configuration, e) +
                      " can't be found in the cache and will be fetched from the remote registry"
                  ),
                loader: () => this.fetchFromNetwork(e, t),
                skipIntegrityCheck: t.skipIntegrityCheck,
              });
            return {
              packageFs: n,
              releaseFs: i,
              prefixPath: o.structUtils.getIdentVendorPath(e),
              checksum: A,
            };
          }
          async fetchFromNetwork(e, t) {
            let r;
            try {
              r = await y(S.getLocatorUrl(e), {
                configuration: t.project.configuration,
                ident: e,
              });
            } catch (n) {
              r = await y(S.getLocatorUrl(e).replace(/%2f/g, "/"), {
                configuration: t.project.configuration,
                ident: e,
              });
            }
            return await o.tgzUtils.convertToZip(r, {
              compressionLevel: t.project.configuration.get("compressionLevel"),
              prefixPath: o.structUtils.getIdentVendorPath(e),
              stripComponents: 1,
            });
          }
          static isConventionalTarballUrl(e, t, { configuration: r }) {
            let n = d(e.scope, { configuration: r });
            const i = S.getLocatorUrl(e);
            return (
              (t = t.replace(
                /^https?:(\/\/(?:[^/]+\.)?npmjs.org(?:$|\/))/,
                "https:$1"
              )),
              (n = n.replace(
                /^https:\/\/registry\.npmjs\.org($|\/)/,
                "https://registry.yarnpkg.com$1"
              )),
              (t = t.replace(
                /^https:\/\/registry\.npmjs\.org($|\/)/,
                "https://registry.yarnpkg.com$1"
              )) ===
                n + i || t === n + i.replace(/%2f/g, "/")
            );
          }
          static getLocatorUrl(e) {
            const t = a().clean(e.reference.slice("npm:".length));
            if (null === t)
              throw new l.lk(
                u.b.RESOLVER_NOT_FOUND,
                "The npm semver resolver got selected, but the version isn't semver"
              );
            return `${w(e)}/-/${e.name}-${t}.tgz`;
          }
        }
        var k = r(46611),
          M = r(32485);
        const N = o.structUtils.makeIdent(null, "node-gyp"),
          R = /\b(node-gyp|prebuild-install)\b/;
        var F = r(52779);
        const K = {
            npmAlwaysAuth: {
              description:
                "URL of the selected npm registry (note: npm enterprise isn't supported)",
              type: A.a2.BOOLEAN,
              default: !1,
            },
            npmAuthIdent: {
              description:
                "Authentication identity for the npm registry (_auth in npm and yarn v1)",
              type: A.a2.SECRET,
              default: null,
            },
            npmAuthToken: {
              description:
                "Authentication token for the npm registry (_authToken in npm and yarn v1)",
              type: A.a2.SECRET,
              default: null,
            },
          },
          x = {
            npmPublishRegistry: {
              description: "Registry to push packages to",
              type: A.a2.STRING,
              default: null,
            },
            npmRegistryServer: {
              description:
                "URL of the selected npm registry (note: npm enterprise isn't supported)",
              type: A.a2.STRING,
              default: "https://registry.yarnpkg.com",
            },
          },
          L = {
            configuration: {
              ...K,
              ...x,
              npmScopes: {
                description: "Settings per package scope",
                type: A.a2.MAP,
                valueDefinition: {
                  description: "",
                  type: A.a2.SHAPE,
                  properties: { ...K, ...x },
                },
              },
              npmRegistries: {
                description: "Settings per registry",
                type: A.a2.MAP,
                normalizeKeys: p,
                valueDefinition: {
                  description: "",
                  type: A.a2.SHAPE,
                  properties: { ...K },
                },
              },
            },
            fetchers: [
              class {
                supports(e, t) {
                  if (!e.reference.startsWith("npm:")) return !1;
                  const { selector: r, params: n } = o.structUtils.parseRange(
                    e.reference
                  );
                  return (
                    !!a().valid(r) &&
                    null !== n &&
                    "string" == typeof n.__archiveUrl
                  );
                }
                getLocalPath(e, t) {
                  return null;
                }
                async fetch(e, t) {
                  const r = t.checksums.get(e.locatorHash) || null,
                    [n, i, A] = await t.cache.fetchPackageFromCache(e, r, {
                      onHit: () => t.report.reportCacheHit(e),
                      onMiss: () =>
                        t.report.reportCacheMiss(
                          e,
                          o.structUtils.prettyLocator(
                            t.project.configuration,
                            e
                          ) +
                            " can't be found in the cache and will be fetched from the remote server"
                        ),
                      loader: () => this.fetchFromNetwork(e, t),
                      skipIntegrityCheck: t.skipIntegrityCheck,
                    });
                  return {
                    packageFs: n,
                    releaseFs: i,
                    prefixPath: o.structUtils.getIdentVendorPath(e),
                    checksum: A,
                  };
                }
                async fetchFromNetwork(e, t) {
                  const { params: r } = o.structUtils.parseRange(e.reference);
                  if (null === r || "string" != typeof r.__archiveUrl)
                    throw new Error(
                      "Assertion failed: The archiveUrl querystring parameter should have been available"
                    );
                  const n = await y(r.__archiveUrl, {
                    configuration: t.project.configuration,
                    ident: e,
                  });
                  return await o.tgzUtils.convertToZip(n, {
                    compressionLevel: t.project.configuration.get(
                      "compressionLevel"
                    ),
                    prefixPath: o.structUtils.getIdentVendorPath(e),
                    stripComponents: 1,
                  });
                }
              },
              S,
            ],
            resolvers: [
              class {
                supportsDescriptor(e, t) {
                  return (
                    !!e.range.startsWith("npm:") &&
                    !!o.structUtils.tryParseDescriptor(
                      e.range.slice("npm:".length),
                      !0
                    )
                  );
                }
                supportsLocator(e, t) {
                  return !1;
                }
                shouldPersistResolution(e, t) {
                  throw new Error("Unreachable");
                }
                bindDescriptor(e, t, r) {
                  return e;
                }
                getResolutionDependencies(e, t) {
                  const r = o.structUtils.parseDescriptor(
                    e.range.slice("npm:".length),
                    !0
                  );
                  return t.resolver.getResolutionDependencies(r, t);
                }
                async getCandidates(e, t, r) {
                  const n = o.structUtils.parseDescriptor(
                    e.range.slice("npm:".length),
                    !0
                  );
                  return await r.resolver.getCandidates(n, t, r);
                }
                async getSatisfying(e, t, r) {
                  const n = o.structUtils.parseDescriptor(
                    e.range.slice("npm:".length),
                    !0
                  );
                  return r.resolver.getSatisfying(n, t, r);
                }
                resolve(e, t) {
                  throw new Error("Unreachable");
                }
              },
              class {
                supportsDescriptor(e, t) {
                  return (
                    !!e.range.startsWith("npm:") &&
                    !!o.semverUtils.F(e.range.slice("npm:".length))
                  );
                }
                supportsLocator(e, t) {
                  if (!e.reference.startsWith("npm:")) return !1;
                  const { selector: r } = o.structUtils.parseRange(e.reference);
                  return !!a().valid(r);
                }
                shouldPersistResolution(e, t) {
                  return !0;
                }
                bindDescriptor(e, t, r) {
                  return e;
                }
                getResolutionDependencies(e, t) {
                  return [];
                }
                async getCandidates(e, t, r) {
                  const n = o.semverUtils.F(e.range.slice("npm:".length));
                  if (null === n)
                    throw new Error(
                      "Expected a valid range, got " +
                        e.range.slice("npm:".length)
                    );
                  const i = await y(w(e), {
                      configuration: r.project.configuration,
                      ident: e,
                      json: !0,
                    }),
                    A = Object.keys(i.versions)
                      .map((e) => new (a().SemVer)(e))
                      .filter((e) => n.test(e)),
                    s = A.filter((e) => !i.versions[e.raw].deprecated),
                    c = s.length > 0 ? s : A;
                  return (
                    c.sort((e, t) => -e.compare(t)),
                    c.map((t) => {
                      const n = o.structUtils.makeLocator(e, "npm:" + t.raw),
                        A = i.versions[t.raw].dist.tarball;
                      return S.isConventionalTarballUrl(n, A, {
                        configuration: r.project.configuration,
                      })
                        ? n
                        : o.structUtils.bindLocator(n, { __archiveUrl: A });
                    })
                  );
                }
                async getSatisfying(e, t, r) {
                  const n = o.semverUtils.F(e.range.slice("npm:".length));
                  if (null === n)
                    throw new Error(
                      "Expected a valid range, got " +
                        e.range.slice("npm:".length)
                    );
                  return t
                    .map((e) => {
                      try {
                        return new (a().SemVer)(e.slice("npm:".length));
                      } catch (e) {
                        return null;
                      }
                    })
                    .filter((e) => null !== e)
                    .filter((e) => n.test(e))
                    .sort((e, t) => -e.compare(t))
                    .map((t) => o.structUtils.makeLocator(e, "npm:" + t.raw));
                }
                async resolve(e, t) {
                  const { selector: r } = o.structUtils.parseRange(e.reference),
                    n = a().clean(r);
                  if (null === n)
                    throw new l.lk(
                      u.b.RESOLVER_NOT_FOUND,
                      "The npm semver resolver got selected, but the version isn't semver"
                    );
                  const i = await y(w(e), {
                    configuration: t.project.configuration,
                    ident: e,
                    json: !0,
                  });
                  if (!Object.prototype.hasOwnProperty.call(i, "versions"))
                    throw new l.lk(
                      u.b.REMOTE_INVALID,
                      'Registry returned invalid data for - missing "versions" field'
                    );
                  if (!Object.prototype.hasOwnProperty.call(i.versions, n))
                    throw new l.lk(
                      u.b.REMOTE_NOT_FOUND,
                      `Registry failed to return reference "${n}"`
                    );
                  const A = new k.G();
                  if (
                    (A.load(i.versions[n]),
                    !A.dependencies.has(N.identHash) &&
                      !A.peerDependencies.has(N.identHash))
                  )
                    for (const r of A.scripts.values())
                      if (r.match(R)) {
                        A.dependencies.set(
                          N.identHash,
                          o.structUtils.makeDescriptor(N, "latest")
                        ),
                          t.report.reportWarning(
                            u.b.NODE_GYP_INJECTED,
                            o.structUtils.prettyLocator(
                              t.project.configuration,
                              e
                            ) +
                              ": Implicit dependencies on node-gyp are discouraged"
                          );
                        break;
                      }
                  return (
                    "string" == typeof A.raw.deprecated &&
                      t.report.reportWarning(
                        u.b.DEPRECATED_PACKAGE,
                        `${o.structUtils.prettyLocator(
                          t.project.configuration,
                          e
                        )} is deprecated: ${A.raw.deprecated}`
                      ),
                    {
                      ...e,
                      version: n,
                      languageName: "node",
                      linkType: M.U.HARD,
                      dependencies: A.dependencies,
                      peerDependencies: A.peerDependencies,
                      dependenciesMeta: A.dependenciesMeta,
                      peerDependenciesMeta: A.peerDependenciesMeta,
                      bin: A.bin,
                    }
                  );
                }
              },
              class {
                supportsDescriptor(e, t) {
                  return (
                    !!e.range.startsWith("npm:") &&
                    !!F.c.test(e.range.slice("npm:".length))
                  );
                }
                supportsLocator(e, t) {
                  return !1;
                }
                shouldPersistResolution(e, t) {
                  throw new Error("Unreachable");
                }
                bindDescriptor(e, t, r) {
                  return e;
                }
                getResolutionDependencies(e, t) {
                  return [];
                }
                async getCandidates(e, t, r) {
                  const n = e.range.slice("npm:".length),
                    i = await y(w(e), {
                      configuration: r.project.configuration,
                      ident: e,
                      json: !0,
                    });
                  if (!Object.prototype.hasOwnProperty.call(i, "dist-tags"))
                    throw new l.lk(
                      u.b.REMOTE_INVALID,
                      'Registry returned invalid data - missing "dist-tags" field'
                    );
                  const A = i["dist-tags"];
                  if (!Object.prototype.hasOwnProperty.call(A, n))
                    throw new l.lk(
                      u.b.REMOTE_NOT_FOUND,
                      `Registry failed to return tag "${n}"`
                    );
                  const s = A[n],
                    a = o.structUtils.makeLocator(e, "npm:" + s),
                    c = i.versions[s].dist.tarball;
                  return S.isConventionalTarballUrl(a, c, {
                    configuration: r.project.configuration,
                  })
                    ? [a]
                    : [o.structUtils.bindLocator(a, { __archiveUrl: c })];
                }
                async getSatisfying(e, t, r) {
                  return null;
                }
                async resolve(e, t) {
                  throw new Error("Unreachable");
                }
              },
            ],
          };
      },
      5973: (e, t, r) => {
        "use strict";
        r.r(t), r.d(t, { packUtils: () => n, default: () => L });
        var n = {};
        r.r(n),
          r.d(n, {
            genPackList: () => S,
            genPackStream: () => b,
            genPackageManifest: () => D,
            hasPackScripts: () => Q,
            prepareForPack: () => v,
          });
        var i = r(5624),
          A = r(35691),
          o = r(92659),
          s = r(36370),
          a = r(95397),
          c = r(27122),
          g = r(40376),
          l = r(28148),
          u = r(33720),
          h = r(15815),
          f = r(46009),
          p = r(56537),
          C = r(93103),
          d = r(10489),
          I = r(2401),
          E = r.n(I),
          m = r(59938),
          B = r(78761);
        const w = [
            "/package.json",
            "/readme",
            "/readme.*",
            "/license",
            "/license.*",
            "/licence",
            "/licence.*",
            "/changelog",
            "/changelog.*",
          ],
          y = [
            "/package.tgz",
            ".github",
            ".git",
            ".hg",
            "node_modules",
            ".npmignore",
            ".gitignore",
            ".#*",
            ".DS_Store",
          ];
        async function Q(e) {
          return (
            !!i.scriptUtils.hasWorkspaceScript(e, "prepack") ||
            !!i.scriptUtils.hasWorkspaceScript(e, "postpack")
          );
        }
        async function v(e, { report: t }, r) {
          await i.scriptUtils.maybeExecuteWorkspaceLifecycleScript(
            e,
            "prepack",
            { report: t }
          );
          try {
            await r();
          } finally {
            await i.scriptUtils.maybeExecuteWorkspaceLifecycleScript(
              e,
              "postpack",
              { report: t }
            );
          }
        }
        async function b(e, t) {
          var r, n;
          void 0 === t && (t = await S(e));
          const i = new Set();
          for (const t of null !==
            (n =
              null === (r = e.manifest.publishConfig) || void 0 === r
                ? void 0
                : r.executableFiles) && void 0 !== n
            ? n
            : new Set())
            i.add(f.y1.normalize(t));
          for (const t of e.manifest.bin.values()) i.add(f.y1.normalize(t));
          const A = m.P();
          process.nextTick(async () => {
            for (const r of t) {
              const t = f.y1.normalize(r),
                n = f.y1.resolve(e.cwd, t),
                o = f.y1.join("package", t),
                s = await p.xfs.lstatPromise(n),
                a = { name: o, mtime: new Date(315532800) },
                c = i.has(t) ? 493 : 420;
              let g, l;
              const u = new Promise((e, t) => {
                  (g = e), (l = t);
                }),
                h = (e) => {
                  e ? l(e) : g();
                };
              if (s.isFile()) {
                let r;
                (r =
                  "package.json" === t
                    ? Buffer.from(JSON.stringify(await D(e), null, 2))
                    : await p.xfs.readFilePromise(n)),
                  A.entry({ ...a, mode: c, type: "file" }, r, h);
              } else
                s.isSymbolicLink() &&
                  A.entry(
                    {
                      ...a,
                      mode: c,
                      type: "symlink",
                      linkname: await p.xfs.readlinkPromise(n),
                    },
                    h
                  );
              await u;
            }
            A.finalize();
          });
          const o = (0, B.createGzip)();
          return A.pipe(o), o;
        }
        async function D(e) {
          const t = JSON.parse(JSON.stringify(e.manifest.raw));
          return (
            await e.project.configuration.triggerHook(
              (e) => e.beforeWorkspacePacking,
              e,
              t
            ),
            t
          );
        }
        async function S(e) {
          var t, r, n, i, A, o, s, a;
          const c = e.project,
            g = c.configuration,
            l = { accept: [], reject: [] };
          for (const e of y) l.reject.push(e);
          for (const e of w) l.accept.push(e);
          l.reject.push(g.get("rcFilename"));
          const u = (t) => {
            if (null === t || !t.startsWith(e.cwd + "/")) return;
            const r = f.y1.relative(e.cwd, t),
              n = f.y1.resolve(f.LZ.root, r);
            l.reject.push(n);
          };
          u(f.y1.resolve(c.cwd, g.get("lockfileFilename"))),
            u(g.get("bstatePath")),
            u(g.get("cacheFolder")),
            u(g.get("globalFolder")),
            u(g.get("installStatePath")),
            u(g.get("virtualFolder")),
            u(g.get("yarnPath")),
            await g.triggerHook(
              (e) => e.populateYarnPaths,
              c,
              (e) => {
                u(e);
              }
            );
          for (const t of c.workspaces) {
            const r = f.y1.relative(e.cwd, t.cwd);
            "" === r || r.match(/^(\.\.)?\//) || l.reject.push("/" + r);
          }
          const h = { accept: [], reject: [] },
            p =
              null !==
                (r =
                  null === (t = e.manifest.publishConfig) || void 0 === t
                    ? void 0
                    : t.main) && void 0 !== r
                ? r
                : e.manifest.main,
            C =
              null !==
                (i =
                  null === (n = e.manifest.publishConfig) || void 0 === n
                    ? void 0
                    : n.module) && void 0 !== i
                ? i
                : e.manifest.module,
            I =
              null !==
                (o =
                  null === (A = e.manifest.publishConfig) || void 0 === A
                    ? void 0
                    : A.browser) && void 0 !== o
                ? o
                : e.manifest.browser,
            E =
              null !==
                (a =
                  null === (s = e.manifest.publishConfig) || void 0 === s
                    ? void 0
                    : s.bin) && void 0 !== a
                ? a
                : e.manifest.bin;
          null != p && h.accept.push(f.y1.resolve(f.LZ.root, p)),
            null != C && h.accept.push(f.y1.resolve(f.LZ.root, C)),
            null != I && h.accept.push(f.y1.resolve(f.LZ.root, I));
          for (const e of E.values()) h.accept.push(f.y1.resolve(f.LZ.root, e));
          const m = null !== e.manifest.files;
          if (m) {
            h.reject.push("/*");
            for (const t of e.manifest.files)
              M(h.accept, t, { cwd: f.LZ.root });
          }
          return await (async function (
            e,
            { hasExplicitFileList: t, globalList: r, ignoreList: n }
          ) {
            const i = [],
              A = new d.n(e),
              o = [[f.LZ.root, [n]]];
            for (; o.length > 0; ) {
              const [e, n] = o.pop(),
                s = await A.lstatPromise(e);
              if (
                !N(e, {
                  globalList: r,
                  ignoreLists: s.isDirectory() ? null : n,
                })
              )
                if (s.isDirectory()) {
                  const i = await A.readdirPromise(e);
                  let s = !1,
                    a = !1;
                  if (!t || e !== f.LZ.root)
                    for (const e of i)
                      (s = s || ".gitignore" === e),
                        (a = a || ".npmignore" === e);
                  const c = a
                    ? await k(A, e, ".npmignore")
                    : s
                    ? await k(A, e, ".gitignore")
                    : null;
                  let g = null !== c ? [c].concat(n) : n;
                  N(e, { globalList: r, ignoreLists: n }) &&
                    (g = [...n, { accept: [], reject: ["**/*"] }]);
                  for (const t of i) o.push([f.y1.resolve(e, t), g]);
                } else i.push(f.y1.relative(f.LZ.root, e));
            }
            return i.sort();
          })(e.cwd, { hasExplicitFileList: m, globalList: l, ignoreList: h });
        }
        async function k(e, t, r) {
          const n = { accept: [], reject: [] },
            i = await e.readFilePromise(f.y1.join(t, r), "utf8");
          for (const e of i.split(/\n/g)) M(n.reject, e, { cwd: t });
          return n;
        }
        function M(e, t, { cwd: r }) {
          const n = t.trim();
          "" !== n &&
            "#" !== n[0] &&
            e.push(
              (function (e, { cwd: t }) {
                const r = "!" === e[0];
                return (
                  r && (e = e.slice(1)),
                  e.match(/\.{0,1}\//) && (e = f.y1.resolve(t, e)),
                  r && (e = "!" + e),
                  e
                );
              })(n, { cwd: r })
            );
        }
        function N(e, { globalList: t, ignoreLists: r }) {
          if (R(e, t.accept)) return !1;
          if (R(e, t.reject)) return !0;
          if (null !== r)
            for (const t of r) {
              if (R(e, t.accept)) return !1;
              if (R(e, t.reject)) return !0;
            }
          return !1;
        }
        function R(e, t) {
          let r = t;
          const n = [];
          for (let e = 0; e < t.length; ++e)
            "!" !== t[e][0]
              ? r !== t && r.push(t[e])
              : (r === t && (r = t.slice(0, e)), n.push(t[e].slice(1)));
          return !F(e, n) && !!F(e, r);
        }
        function F(e, t) {
          let r = t;
          const n = [];
          for (let e = 0; e < t.length; ++e)
            t[e].includes("/")
              ? r !== t && r.push(t[e])
              : (r === t && (r = t.slice(0, e)), n.push(t[e]));
          return (
            !!E().isMatch(e, r, { dot: !0, nocase: !0 }) ||
            !!E().isMatch(e, n, { dot: !0, basename: !0, nocase: !0 })
          );
        }
        class K extends a.BaseCommand {
          constructor() {
            super(...arguments),
              (this.installIfNeeded = !1),
              (this.dryRun = !1),
              (this.json = !1);
          }
          async execute() {
            const e = await c.VK.find(this.context.cwd, this.context.plugins),
              { project: t, workspace: r } = await g.I.find(
                e,
                this.context.cwd
              );
            if (!r) throw new a.WorkspaceRequiredError(t.cwd, this.context.cwd);
            (await Q(r)) &&
              (this.installIfNeeded
                ? await t.install({
                    cache: await l.C.find(e),
                    report: new u.$(),
                  })
                : await t.restoreInstallState());
            const n =
              void 0 !== this.out
                ? f.y1.resolve(
                    this.context.cwd,
                    (function (e, { workspace: t }) {
                      const r = e
                        .replace(
                          "%s",
                          (function (e) {
                            return null !== e.manifest.name
                              ? i.structUtils.slugifyIdent(e.manifest.name)
                              : "package";
                          })(t)
                        )
                        .replace(
                          "%v",
                          (function (e) {
                            return null !== e.manifest.version
                              ? e.manifest.version
                              : "unknown";
                          })(t)
                        );
                      return f.cS.toPortablePath(r);
                    })(this.out, { workspace: r })
                  )
                : f.y1.resolve(r.cwd, "package.tgz");
            return (
              await h.Pk.start(
                {
                  configuration: e,
                  stdout: this.context.stdout,
                  json: this.json,
                },
                async (t) => {
                  await v(r, { report: t }, async () => {
                    t.reportJson({ base: r.cwd });
                    const e = await S(r);
                    for (const r of e)
                      t.reportInfo(null, r), t.reportJson({ location: r });
                    if (!this.dryRun) {
                      const t = await b(r, e),
                        i = p.xfs.createWriteStream(n);
                      t.pipe(i),
                        await new Promise((e) => {
                          i.on("finish", e);
                        });
                    }
                  }),
                    this.dryRun ||
                      (t.reportInfo(
                        o.b.UNNAMED,
                        "Package archive generated in " + e.format(n, "magenta")
                      ),
                      t.reportJson({ output: n }));
                }
              )
            ).exitCode();
          }
        }
        (K.usage = C.Command.Usage({
          description: "generate a tarball from the active workspace",
          details:
            "\n      This command will turn the active workspace into a compressed archive suitable for publishing. The archive will by default be stored at the root of the workspace (`package.tgz`).\n\n      If the `--install-if-needed` flag is set Yarn will run a preliminary `yarn install` if the package contains build scripts.\n\n      If the `-n,--dry-run` flag is set the command will just print the file paths without actually generating the package archive.\n\n      If the `--json` flag is set the output will follow a JSON-stream output also known as NDJSON (https://github.com/ndjson/ndjson-spec).\n\n      If the `-o,---out` is set the archive will be created at the specified path. The `%s` and `%v` variables can be used within the path and will be respectively replaced by the package name and version.\n    ",
          examples: [
            ["Create an archive from the active workspace", "yarn pack"],
            [
              "List the files that would be made part of the workspace's archive",
              "yarn pack --dry-run",
            ],
            [
              "Name and output the archive in a dedicated folder",
              "yarn pack --out /artifacts/%s-%v.tgz",
            ],
          ],
        })),
          (0, s.gn)(
            [C.Command.Boolean("--install-if-needed")],
            K.prototype,
            "installIfNeeded",
            void 0
          ),
          (0, s.gn)(
            [C.Command.Boolean("-n,--dry-run")],
            K.prototype,
            "dryRun",
            void 0
          ),
          (0, s.gn)([C.Command.Boolean("--json")], K.prototype, "json", void 0),
          (0, s.gn)(
            [
              C.Command.String("--filename", { hidden: !1 }),
              C.Command.String("-o,--out"),
            ],
            K.prototype,
            "out",
            void 0
          ),
          (0, s.gn)([C.Command.Path("pack")], K.prototype, "execute", null);
        const x = ["dependencies", "devDependencies", "peerDependencies"],
          L = {
            hooks: {
              beforeWorkspacePacking: (e, t) => {
                t.publishConfig &&
                  (t.publishConfig.main && (t.main = t.publishConfig.main),
                  t.publishConfig.browser &&
                    (t.browser = t.publishConfig.browser),
                  t.publishConfig.module && (t.module = t.publishConfig.module),
                  t.publishConfig.browser &&
                    (t.browser = t.publishConfig.browser),
                  t.publishConfig.bin && (t.bin = t.publishConfig.bin));
                const r = e.project;
                for (const n of x)
                  for (const s of e.manifest.getForScope(n).values()) {
                    const e = r.tryWorkspaceByDescriptor(s),
                      a = i.structUtils.parseRange(s.range);
                    if ("workspace:" === a.protocol)
                      if (null === e) {
                        if (null === r.tryWorkspaceByIdent(s))
                          throw new A.lk(
                            o.b.WORKSPACE_NOT_FOUND,
                            i.structUtils.prettyDescriptor(r.configuration, s) +
                              ": No local workspace found for this range"
                          );
                      } else {
                        let r;
                        (r =
                          i.structUtils.areDescriptorsEqual(
                            s,
                            e.anchoredDescriptor
                          ) || "*" === a.selector
                            ? e.manifest.version
                            : a.selector),
                          (t[n][i.structUtils.stringifyIdent(s)] = r);
                      }
                  }
              },
            },
            commands: [K],
          };
      },
      5698: (e, t, r) => {
        "use strict";
        r.r(t), r.d(t, { patchUtils: () => n, default: () => z });
        var n = {};
        r.r(n),
          r.d(n, {
            applyPatchFile: () => p,
            diffFolders: () => U,
            extractPackageToDisk: () => P,
            isParentRequired: () => x,
            loadPatchFiles: () => L,
            makeDescriptor: () => R,
            makeLocator: () => F,
            parseDescriptor: () => k,
            parseLocator: () => M,
            parsePatchFile: () => v,
          });
        var i = r(5624),
          A = r(56537),
          o = r(46009),
          s = r(27551),
          a = r(75448),
          c = r(29486),
          g = r(33720),
          l = r(35691),
          u = r(92659),
          h = r(78420);
        async function f(e, t, r) {
          const n = await e.lstatPromise(t),
            i = await r();
          if ((void 0 !== i && (t = i), e.lutimesPromise))
            await e.lutimesPromise(t, n.atime, n.mtime);
          else {
            if (n.isSymbolicLink())
              throw new Error("Cannot preserve the time values of a symlink");
            await e.utimesPromise(t, n.atime, n.mtime);
          }
        }
        async function p(
          e,
          { baseFs: t = new h.S(), dryRun: r = !1, version: n = null } = {}
        ) {
          for (const A of e)
            if (
              null === A.semverExclusivity ||
              null === n ||
              i.semverUtils.v(n, A.semverExclusivity)
            )
              switch (A.type) {
                case "file deletion":
                  if (r) {
                    if (!t.existsSync(A.path))
                      throw new Error(
                        "Trying to delete a file that doesn't exist: " + A.path
                      );
                  } else
                    await f(t, o.y1.dirname(A.path), async () => {
                      await t.unlinkPromise(A.path);
                    });
                  break;
                case "rename":
                  if (r) {
                    if (!t.existsSync(A.fromPath))
                      throw new Error(
                        "Trying to move a file that doesn't exist: " +
                          A.fromPath
                      );
                  } else
                    await f(t, o.y1.dirname(A.fromPath), async () => {
                      await f(t, o.y1.dirname(A.toPath), async () => {
                        await f(
                          t,
                          A.fromPath,
                          async () => (
                            await t.movePromise(A.fromPath, A.toPath), A.toPath
                          )
                        );
                      });
                    });
                  break;
                case "file creation":
                  if (r) {
                    if (t.existsSync(A.path))
                      throw new Error(
                        "Trying to create a file that already exists: " + A.path
                      );
                  } else {
                    const e = A.hunk
                      ? A.hunk.parts[0].lines.join("\n") +
                        (A.hunk.parts[0].noNewlineAtEndOfFile ? "" : "\n")
                      : "";
                    await t.mkdirpPromise(o.y1.dirname(A.path), {
                      chmod: 493,
                      utimes: [315532800, 315532800],
                    }),
                      await t.writeFilePromise(A.path, e, { mode: A.mode }),
                      await t.utimesPromise(A.path, 315532800, 315532800);
                  }
                  break;
                case "patch":
                  await f(t, A.path, async () => {
                    await I(A, { baseFs: t, dryRun: r });
                  });
                  break;
                case "mode change":
                  {
                    const e = (await t.statPromise(A.path)).mode;
                    if (C(A.newMode) !== C(e)) continue;
                    await f(t, A.path, async () => {
                      await t.chmodPromise(A.path, A.newMode);
                    });
                  }
                  break;
                default:
                  i.miscUtils.assertNever(A);
              }
        }
        function C(e) {
          return (64 & e) > 0;
        }
        function d(e) {
          return e.replace(/\s+$/, "");
        }
        async function I({ hunks: e, path: t }, { baseFs: r, dryRun: n = !1 }) {
          const A = await r.statSync(t).mode,
            o = (await r.readFileSync(t, "utf8")).split(/\n/),
            s = [];
          let a = 0,
            c = 0;
          for (const t of e) {
            const r = Math.max(c, t.header.patched.start + a),
              n = Math.max(0, r - c),
              i = Math.max(0, o.length - r - t.header.original.length),
              A = Math.max(n, i);
            let g = 0,
              h = 0,
              f = null;
            for (; g <= A; ) {
              if (g <= n && ((h = r - g), (f = E(t, o, h)), null !== f)) {
                g = -g;
                break;
              }
              if (g <= i && ((h = r + g), (f = E(t, o, h)), null !== f)) break;
              g += 1;
            }
            if (null === f)
              throw new l.lk(
                u.b.PATCH_HUNK_FAILED,
                "Cannot apply hunk #" + (e.indexOf(t) + 1)
              );
            s.push(f), (a += g), (c = h + t.header.original.length);
          }
          if (n) return;
          let g = 0;
          for (const e of s)
            for (const t of e)
              switch (t.type) {
                case "splice":
                  {
                    const e = t.index + g;
                    o.splice(e, t.numToDelete, ...t.linesToInsert),
                      (g += t.linesToInsert.length - t.numToDelete);
                  }
                  break;
                case "pop":
                  o.pop();
                  break;
                case "push":
                  o.push(t.line);
                  break;
                default:
                  i.miscUtils.assertNever(t);
              }
          await r.writeFilePromise(t, o.join("\n"), { mode: A });
        }
        function E(e, t, r) {
          const n = [];
          for (const o of e.parts)
            switch (o.type) {
              case "deletion":
              case "context":
                for (const e of o.lines) {
                  const n = t[r];
                  if (null == n || ((A = e), d(n) !== d(A))) return null;
                  r += 1;
                }
                "deletion" === o.type &&
                  (n.push({
                    type: "splice",
                    index: r - o.lines.length,
                    numToDelete: o.lines.length,
                    linesToInsert: [],
                  }),
                  o.noNewlineAtEndOfFile && n.push({ type: "push", line: "" }));
                break;
              case "insertion":
                n.push({
                  type: "splice",
                  index: r,
                  numToDelete: 0,
                  linesToInsert: o.lines,
                }),
                  o.noNewlineAtEndOfFile && n.push({ type: "pop" });
                break;
              default:
                i.miscUtils.assertNever(o.type);
            }
          var A;
          return n;
        }
        const m = /^@@ -(\d+)(,(\d+))? \+(\d+)(,(\d+))? @@.*/;
        function B(e) {
          return o.y1.relative(
            o.LZ.root,
            o.y1.resolve(o.LZ.root, o.cS.toPortablePath(e))
          );
        }
        function w(e) {
          const t = e.trim().match(m);
          if (!t) throw new Error(`Bad header line: '${e}'`);
          return {
            original: {
              start: Math.max(Number(t[1]), 1),
              length: Number(t[3] || 1),
            },
            patched: {
              start: Math.max(Number(t[4]), 1),
              length: Number(t[6] || 1),
            },
          };
        }
        const y = {
          "@": "header",
          "-": "deletion",
          "+": "insertion",
          " ": "context",
          "\\": "pragma",
          undefined: "context",
        };
        function Q(e) {
          const t = 511 & parseInt(e, 8);
          if (420 !== t && 493 !== t)
            throw new Error("Unexpected file mode string: " + e);
          return t;
        }
        function v(e) {
          const t = e.split(/\n/g);
          return (
            "" === t[t.length - 1] && t.pop(),
            (function (e) {
              const t = [];
              for (const r of e) {
                const {
                    semverExclusivity: e,
                    diffLineFromPath: n,
                    diffLineToPath: A,
                    oldMode: o,
                    newMode: s,
                    deletedFileMode: a,
                    newFileMode: c,
                    renameFrom: g,
                    renameTo: l,
                    beforeHash: u,
                    afterHash: h,
                    fromPath: f,
                    toPath: p,
                    hunks: C,
                  } = r,
                  d = g
                    ? "rename"
                    : a
                    ? "file deletion"
                    : c
                    ? "file creation"
                    : C && C.length > 0
                    ? "patch"
                    : "mode change";
                let I = null;
                switch (d) {
                  case "rename":
                    if (!g || !l)
                      throw new Error(
                        "Bad parser state: rename from & to not given"
                      );
                    t.push({
                      type: "rename",
                      semverExclusivity: e,
                      fromPath: B(g),
                      toPath: B(l),
                    }),
                      (I = l);
                    break;
                  case "file deletion":
                    {
                      const r = n || f;
                      if (!r)
                        throw new Error(
                          "Bad parse state: no path given for file deletion"
                        );
                      t.push({
                        type: "file deletion",
                        semverExclusivity: e,
                        hunk: (C && C[0]) || null,
                        path: B(r),
                        mode: Q(a),
                        hash: u,
                      });
                    }
                    break;
                  case "file creation":
                    {
                      const r = A || p;
                      if (!r)
                        throw new Error(
                          "Bad parse state: no path given for file creation"
                        );
                      t.push({
                        type: "file creation",
                        semverExclusivity: e,
                        hunk: (C && C[0]) || null,
                        path: B(r),
                        mode: Q(c),
                        hash: h,
                      });
                    }
                    break;
                  case "patch":
                  case "mode change":
                    I = p || A;
                    break;
                  default:
                    i.miscUtils.assertNever(d);
                }
                I &&
                  o &&
                  s &&
                  o !== s &&
                  t.push({
                    type: "mode change",
                    semverExclusivity: e,
                    path: B(I),
                    oldMode: Q(o),
                    newMode: Q(s),
                  }),
                  I &&
                    C &&
                    C.length &&
                    t.push({
                      type: "patch",
                      semverExclusivity: e,
                      path: B(I),
                      hunks: C,
                      beforeHash: u,
                      afterHash: h,
                    });
              }
              return t;
            })(
              (function (e) {
                const t = [];
                let r = {
                    semverExclusivity: null,
                    diffLineFromPath: null,
                    diffLineToPath: null,
                    oldMode: null,
                    newMode: null,
                    deletedFileMode: null,
                    newFileMode: null,
                    renameFrom: null,
                    renameTo: null,
                    beforeHash: null,
                    afterHash: null,
                    fromPath: null,
                    toPath: null,
                    hunks: null,
                  },
                  n = "parsing header",
                  A = null,
                  o = null;
                function s() {
                  A &&
                    (o && (A.parts.push(o), (o = null)),
                    r.hunks.push(A),
                    (A = null));
                }
                function a() {
                  s(),
                    t.push(r),
                    (r = {
                      semverExclusivity: null,
                      diffLineFromPath: null,
                      diffLineToPath: null,
                      oldMode: null,
                      newMode: null,
                      deletedFileMode: null,
                      newFileMode: null,
                      renameFrom: null,
                      renameTo: null,
                      beforeHash: null,
                      afterHash: null,
                      fromPath: null,
                      toPath: null,
                      hunks: null,
                    });
                }
                for (let t = 0; t < e.length; t++) {
                  const c = e[t];
                  if ("parsing header" === n)
                    if (c.startsWith("@@"))
                      (n = "parsing hunks"), (r.hunks = []), (t -= 1);
                    else if (c.startsWith("diff --git ")) {
                      r && r.diffLineFromPath && a();
                      const e = c.match(/^diff --git a\/(.*?) b\/(.*?)\s*$/);
                      if (!e) throw new Error("Bad diff line: " + c);
                      (r.diffLineFromPath = e[1]), (r.diffLineToPath = e[2]);
                    } else if (c.startsWith("old mode "))
                      r.oldMode = c.slice("old mode ".length).trim();
                    else if (c.startsWith("new mode "))
                      r.newMode = c.slice("new mode ".length).trim();
                    else if (c.startsWith("deleted file mode "))
                      r.deletedFileMode = c
                        .slice("deleted file mode ".length)
                        .trim();
                    else if (c.startsWith("new file mode "))
                      r.newFileMode = c.slice("new file mode ".length).trim();
                    else if (c.startsWith("rename from "))
                      r.renameFrom = c.slice("rename from ".length).trim();
                    else if (c.startsWith("rename to "))
                      r.renameTo = c.slice("rename to ".length).trim();
                    else if (c.startsWith("index ")) {
                      const e = c.match(/(\w+)\.\.(\w+)/);
                      if (!e) continue;
                      (r.beforeHash = e[1]), (r.afterHash = e[2]);
                    } else
                      c.startsWith("semver exclusivity ")
                        ? (r.semverExclusivity = c
                            .slice("semver exclusivity ".length)
                            .trim())
                        : c.startsWith("--- ")
                        ? (r.fromPath = c.slice("--- a/".length).trim())
                        : c.startsWith("+++ ") &&
                          (r.toPath = c.slice("+++ b/".length).trim());
                  else {
                    const e = y[c[0]] || null;
                    switch (e) {
                      case "header":
                        s(), (A = { header: w(c), parts: [] });
                        break;
                      case null:
                        (n = "parsing header"), a(), (t -= 1);
                        break;
                      case "pragma":
                        if (!c.startsWith("\\ No newline at end of file"))
                          throw new Error(
                            "Unrecognized pragma in patch file: " + c
                          );
                        if (!o)
                          throw new Error(
                            "Bad parser state: No newline at EOF pragma encountered without context"
                          );
                        o.noNewlineAtEndOfFile = !0;
                        break;
                      case "insertion":
                      case "deletion":
                      case "context":
                        if (!A)
                          throw new Error(
                            "Bad parser state: Hunk lines encountered before hunk header"
                          );
                        o && o.type !== e && (A.parts.push(o), (o = null)),
                          o ||
                            (o = {
                              type: e,
                              lines: [],
                              noNewlineAtEndOfFile: !1,
                            }),
                          o.lines.push(c.slice(1));
                        break;
                      default:
                        i.miscUtils.assertNever(e);
                    }
                  }
                }
                a();
                for (const { hunks: e } of t) if (e) for (const t of e) b(t);
                return t;
              })(t)
            )
          );
        }
        function b(e) {
          let t = 0,
            r = 0;
          for (const { type: n, lines: A } of e.parts)
            switch (n) {
              case "context":
                (r += A.length), (t += A.length);
                break;
              case "deletion":
                t += A.length;
                break;
              case "insertion":
                r += A.length;
                break;
              default:
                i.miscUtils.assertNever(n);
            }
          if (t !== e.header.original.length || r !== e.header.patched.length) {
            const n = (e) => (e < 0 ? e : "+" + e);
            throw new Error(
              `hunk header integrity check failed (expected @@ ${n(
                e.header.original.length
              )} ${n(e.header.patched.length)} @@, got @@ ${n(t)} ${n(r)} @@)`
            );
          }
        }
        const D = /^builtin<([^>]+)>$/;
        function S(e, t) {
          const {
            source: r,
            selector: n,
            params: A,
          } = i.structUtils.parseRange(e);
          if (null === r)
            throw new Error(
              "Patch locators must explicitly define their source"
            );
          const s = n ? n.split(/&/).map((e) => o.cS.toPortablePath(e)) : [],
            a =
              A && "string" == typeof A.locator
                ? i.structUtils.parseLocator(A.locator)
                : null,
            c = A && "string" == typeof A.version ? A.version : null;
          return {
            parentLocator: a,
            sourceItem: t(r),
            patchPaths: s,
            sourceVersion: c,
          };
        }
        function k(e) {
          const { sourceItem: t, ...r } = S(
            e.range,
            i.structUtils.parseDescriptor
          );
          return { ...r, sourceDescriptor: t };
        }
        function M(e) {
          const { sourceItem: t, ...r } = S(
            e.reference,
            i.structUtils.parseLocator
          );
          return { ...r, sourceLocator: t };
        }
        function N(
          {
            parentLocator: e,
            sourceItem: t,
            patchPaths: r,
            sourceVersion: n,
            patchHash: A,
          },
          o
        ) {
          const s =
              null !== e ? { locator: i.structUtils.stringifyLocator(e) } : {},
            a = void 0 !== n ? { version: n } : {},
            c = void 0 !== A ? { hash: A } : {};
          return i.structUtils.makeRange({
            protocol: "patch:",
            source: o(t),
            selector: r.join("&"),
            params: { ...a, ...c, ...s },
          });
        }
        function R(
          e,
          { parentLocator: t, sourceDescriptor: r, patchPaths: n }
        ) {
          return i.structUtils.makeLocator(
            e,
            N(
              { parentLocator: t, sourceItem: r, patchPaths: n },
              i.structUtils.stringifyDescriptor
            )
          );
        }
        function F(
          e,
          { parentLocator: t, sourcePackage: r, patchPaths: n, patchHash: A }
        ) {
          return i.structUtils.makeLocator(
            e,
            N(
              {
                parentLocator: t,
                sourceItem: r,
                sourceVersion: r.version,
                patchPaths: n,
                patchHash: A,
              },
              i.structUtils.stringifyLocator
            )
          );
        }
        function K({ onAbsolute: e, onRelative: t, onBuiltin: r }, n) {
          const i = n.match(D);
          return null !== i ? r(i[1]) : o.y1.isAbsolute(n) ? e(n) : t(n);
        }
        function x(e) {
          return K(
            { onAbsolute: () => !1, onRelative: () => !0, onBuiltin: () => !1 },
            e
          );
        }
        async function L(e, t, r) {
          const n = null !== e ? await r.fetcher.fetch(e, r) : null,
            s =
              n && n.localPath
                ? {
                    packageFs: new a.M(o.LZ.root),
                    prefixPath: o.y1.relative(o.LZ.root, n.localPath),
                  }
                : n;
          n && n !== s && n.releaseFs && n.releaseFs();
          return (
            await i.miscUtils.releaseAfterUseAsync(
              async () =>
                await Promise.all(
                  t.map(async (e) =>
                    K(
                      {
                        onAbsolute: async () =>
                          await A.xfs.readFilePromise(e, "utf8"),
                        onRelative: async () => {
                          if (null === n)
                            throw new Error(
                              "Assertion failed: The parent locator should have been fetched"
                            );
                          return await n.packageFs.readFilePromise(e, "utf8");
                        },
                        onBuiltin: async (e) =>
                          await r.project.configuration.firstHook(
                            (e) => e.getBuiltinPatch,
                            r.project,
                            e
                          ),
                      },
                      e
                    )
                  )
                )
            )
          ).map((e) => ("string" == typeof e ? e.replace(/\r\n?/g, "\n") : e));
        }
        async function P(e, { cache: t, project: r }) {
          const n = r.storedChecksums,
            s = new g.$(),
            a = r.configuration.makeFetcher(),
            c = await a.fetch(e, {
              cache: t,
              project: r,
              fetcher: a,
              checksums: n,
              report: s,
            }),
            l = await A.xfs.mktempPromise();
          return (
            await A.xfs.copyPromise(l, c.prefixPath, { baseFs: c.packageFs }),
            await A.xfs.writeJsonPromise(o.y1.join(l, ".yarn-patch.json"), {
              locator: i.structUtils.stringifyLocator(e),
            }),
            A.xfs.detachTemp(l),
            l
          );
        }
        async function U(e, t) {
          const r = o.cS.fromPortablePath(e).replace(/\\/g, "/"),
            n = o.cS.fromPortablePath(t).replace(/\\/g, "/"),
            { stdout: A } = await i.execUtils.execvp(
              "git",
              [
                "diff",
                "--src-prefix=a/",
                "--dst-prefix=b/",
                "--ignore-cr-at-eol",
                "--full-index",
                "--no-index",
                r,
                n,
              ],
              { cwd: o.cS.toPortablePath(process.cwd()) }
            ),
            s = r.startsWith("/") ? (e) => e.slice(1) : (e) => e;
          return A.replace(
            new RegExp(`(a|b)(${i.miscUtils.escapeRegExp(`/${s(r)}/`)})`, "g"),
            "$1/"
          )
            .replace(
              new RegExp("(a|b)" + i.miscUtils.escapeRegExp(`/${s(n)}/`), "g"),
              "$1/"
            )
            .replace(new RegExp(i.miscUtils.escapeRegExp(r + "/"), "g"), "")
            .replace(new RegExp(i.miscUtils.escapeRegExp(n + "/"), "g"), "");
        }
        var T = r(36370),
          O = r(95397),
          Y = r(27122),
          j = r(40376),
          G = r(28148),
          _ = r(93103);
        class H extends O.BaseCommand {
          async execute() {
            const e = await Y.VK.find(this.context.cwd, this.context.plugins),
              { project: t, workspace: r } = await j.I.find(
                e,
                this.context.cwd
              ),
              n = await G.C.find(e);
            if (!r) throw new O.WorkspaceRequiredError(t.cwd, this.context.cwd);
            await t.restoreInstallState();
            const s = o.y1.resolve(
                this.context.cwd,
                o.cS.toPortablePath(this.patchFolder)
              ),
              a = o.y1.join(s, ".yarn-patch.json");
            if (!A.xfs.existsSync(a))
              throw new _.UsageError(
                "The argument folder didn't get created by 'yarn patch'"
              );
            const c = await A.xfs.readJsonPromise(a),
              g = i.structUtils.parseLocator(c.locator, !0);
            if (!t.storedPackages.has(g.locatorHash))
              throw new _.UsageError(
                "No package found in the project for the given locator"
              );
            const l = await P(g, { cache: n, project: t });
            this.context.stdout.write(await U(l, s));
          }
        }
        (H.usage = _.Command.Usage({
          description:
            "\n      This will turn the folder passed in parameter into a patchfile suitable for consumption with the `patch:` protocol.\n\n      Only folders generated through `yarn patch` are accepted as valid input for `yarn patch-commit`.\n    ",
        })),
          (0, T.gn)([_.Command.String()], H.prototype, "patchFolder", void 0),
          (0, T.gn)(
            [_.Command.Path("patch-commit")],
            H.prototype,
            "execute",
            null
          );
        var J = r(15815);
        class q extends O.BaseCommand {
          async execute() {
            const e = await Y.VK.find(this.context.cwd, this.context.plugins),
              { project: t, workspace: r } = await j.I.find(
                e,
                this.context.cwd
              ),
              n = await G.C.find(e);
            if (!r) throw new O.WorkspaceRequiredError(t.cwd, this.context.cwd);
            await t.restoreInstallState();
            let A = i.structUtils.parseLocator(this.package);
            if ("unknown" === A.reference) {
              const r = i.miscUtils.mapAndFilter(
                [...t.storedPackages.values()],
                (e) =>
                  e.identHash !== A.identHash ||
                  i.structUtils.isVirtualLocator(e)
                    ? i.miscUtils.mapAndFilter.skip
                    : e
              );
              if (0 === r.length)
                throw new _.UsageError(
                  "No package found in the project for the given locator"
                );
              if (r.length > 1)
                throw new _.UsageError(
                  "Multiple candidate packages found; explicitly choose one of them (use `yarn why <package>` to get more information as to who depends on them):\n" +
                    r
                      .map((t) => "\n- " + i.structUtils.prettyLocator(e, t))
                      .join("")
                );
              A = r[0];
            }
            if (!t.storedPackages.has(A.locatorHash))
              throw new _.UsageError(
                "No package found in the project for the given locator"
              );
            await J.Pk.start(
              { configuration: e, stdout: this.context.stdout },
              async (r) => {
                const s = await P(A, { cache: n, project: t });
                r.reportInfo(
                  u.b.UNNAMED,
                  `Package ${i.structUtils.prettyLocator(
                    e,
                    A
                  )} got extracted with success!`
                ),
                  r.reportInfo(
                    u.b.UNNAMED,
                    "You can now edit the following folder: " +
                      e.format(o.cS.fromPortablePath(s), "magenta")
                  ),
                  r.reportInfo(
                    u.b.UNNAMED,
                    `Once you are done run ${e.format(
                      "yarn patch-commit " + o.cS.fromPortablePath(s),
                      "cyan"
                    )} and Yarn will store a patchfile based on your changes.`
                  );
              }
            );
          }
        }
        (q.usage = _.Command.Usage({
          description:
            '\n      This command will cause a package to be extracted in a temporary directory (under a folder named "patch-workdir"). This folder will be editable at will; running `yarn patch` inside it will then cause Yarn to generate a patchfile and register it into your top-level manifest (cf the `patch:` protocol).\n    ',
        })),
          (0, T.gn)([_.Command.String()], q.prototype, "package", void 0),
          (0, T.gn)([_.Command.Path("patch")], q.prototype, "execute", null);
        const z = {
          commands: [H, q],
          fetchers: [
            class {
              supports(e, t) {
                return !!e.reference.startsWith("patch:");
              }
              getLocalPath(e, t) {
                return null;
              }
              async fetch(e, t) {
                const r = t.checksums.get(e.locatorHash) || null,
                  [n, A, o] = await t.cache.fetchPackageFromCache(e, r, {
                    onHit: () => t.report.reportCacheHit(e),
                    onMiss: () =>
                      t.report.reportCacheMiss(
                        e,
                        i.structUtils.prettyLocator(
                          t.project.configuration,
                          e
                        ) +
                          " can't be found in the cache and will be fetched from the disk"
                      ),
                    loader: () => this.patchPackage(e, t),
                    skipIntegrityCheck: t.skipIntegrityCheck,
                  });
                return {
                  packageFs: n,
                  releaseFs: A,
                  prefixPath: i.structUtils.getIdentVendorPath(e),
                  localPath: this.getLocalPath(e, t),
                  checksum: o,
                };
              }
              async patchPackage(e, t) {
                const {
                    parentLocator: r,
                    sourceLocator: n,
                    sourceVersion: g,
                    patchPaths: l,
                  } = M(e),
                  u = await L(r, l, t),
                  h = await A.xfs.mktempPromise(),
                  f = o.y1.join(h, "patched.zip"),
                  C = await t.fetcher.fetch(n, t),
                  d = i.structUtils.getIdentVendorPath(e),
                  I = await (0, c.getLibzipPromise)(),
                  E = new s.d(f, {
                    libzip: I,
                    create: !0,
                    level: t.project.configuration.get("compressionLevel"),
                  });
                await E.mkdirpPromise(d),
                  await i.miscUtils.releaseAfterUseAsync(async () => {
                    await E.copyPromise(d, C.prefixPath, {
                      baseFs: C.packageFs,
                      stableSort: !0,
                    });
                  }, C.releaseFs);
                const m = new a.M(o.y1.resolve(o.LZ.root, d), { baseFs: E });
                for (const e of u)
                  null !== e && (await p(v(e), { baseFs: m, version: g }));
                return E;
              }
            },
          ],
          resolvers: [
            class {
              supportsDescriptor(e, t) {
                return !!e.range.startsWith("patch:");
              }
              supportsLocator(e, t) {
                return !!e.reference.startsWith("patch:");
              }
              shouldPersistResolution(e, t) {
                return !1;
              }
              bindDescriptor(e, t, r) {
                const { patchPaths: n } = k(e);
                return n.every((e) => !x(e))
                  ? e
                  : i.structUtils.bindDescriptor(e, {
                      locator: i.structUtils.stringifyLocator(t),
                    });
              }
              getResolutionDependencies(e, t) {
                const { sourceDescriptor: r } = k(e);
                return [r];
              }
              async getCandidates(e, t, r) {
                if (!r.fetchOptions)
                  throw new Error(
                    "Assertion failed: This resolver cannot be used unless a fetcher is configured"
                  );
                const {
                    parentLocator: n,
                    sourceDescriptor: A,
                    patchPaths: o,
                  } = k(e),
                  s = await L(n, o, r.fetchOptions),
                  a = t.get(A.descriptorHash);
                if (void 0 === a)
                  throw new Error(
                    "Assertion failed: The dependency should have been resolved"
                  );
                return [
                  F(e, {
                    parentLocator: n,
                    sourcePackage: a,
                    patchPaths: o,
                    patchHash: i.hashUtils.makeHash("2", ...s).slice(0, 6),
                  }),
                ];
              }
              async getSatisfying(e, t, r) {
                return null;
              }
              async resolve(e, t) {
                const { sourceLocator: r } = M(e);
                return { ...(await t.resolver.resolve(r, t)), ...e };
              }
            },
          ],
        };
      },
      57436: (e, t, r) => {
        "use strict";
        r.r(t),
          r.d(t, {
            pnpUtils: () => n,
            getPnpPath: () => N,
            quotePathIfNeeded: () => R,
            AbstractPnpInstaller: () => d,
            PnpInstaller: () => w,
            PnpLinker: () => B,
            default: () => F,
          });
        var n = {};
        r.r(n), r.d(n, { getUnpluggedPath: () => I });
        var i = r(27122),
          A = r(46009),
          o = r(56537),
          s = r(53887),
          a = r.n(s),
          c = r(92659),
          g = r(92409),
          l = r(5624),
          u = r(75448),
          h = r(88563),
          f = r(93103),
          p = r(46611),
          C = r(32485);
        class d {
          constructor(e) {
            (this.opts = e),
              (this.packageRegistry = new Map()),
              (this.blacklistedPaths = new Set()),
              (this.opts = e);
          }
          checkAndReportManifestIncompatibility(e, t) {
            return e && !e.isCompatibleWithOS(process.platform)
              ? (this.opts.report.reportWarningOnce(
                  c.b.INCOMPATIBLE_OS,
                  `${l.structUtils.prettyLocator(
                    this.opts.project.configuration,
                    t
                  )} The platform ${
                    process.platform
                  } is incompatible with this module, ${
                    this.opts.skipIncompatiblePackageLinking
                      ? "linking"
                      : "building"
                  } skipped.`
                ),
                !1)
              : !(e && !e.isCompatibleWithCPU(process.arch)) ||
                  (this.opts.report.reportWarningOnce(
                    c.b.INCOMPATIBLE_CPU,
                    `${l.structUtils.prettyLocator(
                      this.opts.project.configuration,
                      t
                    )} The CPU architecture ${
                      process.arch
                    } is incompatible with this module, ${
                      this.opts.skipIncompatiblePackageLinking
                        ? "linking"
                        : "building"
                    } skipped.`
                  ),
                  !1);
          }
          async installPackage(e, t) {
            const r = l.structUtils.requirableIdent(e),
              n = e.reference,
              i =
                e.peerDependencies.size > 0 &&
                !l.structUtils.isVirtualLocator(e) &&
                !this.opts.project.tryWorkspaceByLocator(e),
              o =
                !i || this.opts.skipIncompatiblePackageLinking
                  ? await p.G.tryFind(t.prefixPath, { baseFs: t.packageFs })
                  : null,
              s = this.checkAndReportManifestIncompatibility(o, e);
            if (this.opts.skipIncompatiblePackageLinking && !s)
              return { packageLocation: null, buildDirective: null };
            const a = i ? [] : await this.getBuildScripts(e, o, t),
              g = this.opts.project.getDependencyMeta(e, e.version);
            a.length > 0 &&
              !this.opts.project.configuration.get("enableScripts") &&
              !g.built &&
              (this.opts.report.reportWarningOnce(
                c.b.DISABLED_BUILD_SCRIPTS,
                l.structUtils.prettyLocator(
                  this.opts.project.configuration,
                  e
                ) +
                  " lists build scripts, but all build scripts have been disabled."
              ),
              (a.length = 0)),
              a.length > 0 &&
                e.linkType !== C.U.HARD &&
                !this.opts.project.tryWorkspaceByLocator(e) &&
                (this.opts.report.reportWarningOnce(
                  c.b.SOFT_LINK_BUILD,
                  l.structUtils.prettyLocator(
                    this.opts.project.configuration,
                    e
                  ) +
                    " lists build scripts, but is referenced through a soft link. Soft links don't support build scripts, so they'll be ignored."
                ),
                (a.length = 0)),
              a.length > 0 &&
                g &&
                !1 === g.built &&
                (this.opts.report.reportInfoOnce(
                  c.b.BUILD_DISABLED,
                  l.structUtils.prettyLocator(
                    this.opts.project.configuration,
                    e
                  ) +
                    " lists build scripts, but its build has been explicitly disabled through configuration."
                ),
                (a.length = 0));
            const u =
              i || e.linkType === C.U.SOFT
                ? t.packageFs
                : await this.transformPackage(e, o, t, g, {
                    hasBuildScripts: a.length > 0,
                  });
            if (A.y1.isAbsolute(t.prefixPath))
              throw new Error(
                `Assertion failed: Expected the prefix path (${t.prefixPath}) to be relative to the parent`
              );
            const h = A.y1.resolve(u.getRealPath(), t.prefixPath),
              f = this.normalizeDirectoryPath(h),
              d = new Map(),
              I = new Set();
            if (l.structUtils.isVirtualLocator(e))
              for (const t of e.peerDependencies.values())
                d.set(l.structUtils.requirableIdent(t), null),
                  I.add(l.structUtils.stringifyIdent(t));
            return (
              l.miscUtils
                .getMapWithDefault(this.packageRegistry, r)
                .set(n, {
                  packageLocation: f,
                  packageDependencies: d,
                  packagePeers: I,
                  linkType: e.linkType,
                  discardFromLookup: t.discardFromLookup || !1,
                }),
              i && this.blacklistedPaths.add(f),
              {
                packageLocation: h,
                buildDirective: a.length > 0 && s ? a : null,
              }
            );
          }
          async attachInternalDependencies(e, t) {
            const r = this.getPackageInformation(e);
            for (const [e, n] of t) {
              const t = l.structUtils.areIdentsEqual(e, n)
                ? n.reference
                : [l.structUtils.requirableIdent(n), n.reference];
              r.packageDependencies.set(l.structUtils.requirableIdent(e), t);
            }
          }
          async attachExternalDependents(e, t) {
            for (const r of t) {
              this.getDiskInformation(r).packageDependencies.set(
                l.structUtils.requirableIdent(e),
                e.reference
              );
            }
          }
          async finalizeInstall() {
            this.trimBlacklistedPackages(),
              this.packageRegistry.set(
                null,
                new Map([
                  [
                    null,
                    this.getPackageInformation(
                      this.opts.project.topLevelWorkspace.anchoredLocator
                    ),
                  ],
                ])
              );
            const e = this.opts.project.configuration.get("pnpFallbackMode"),
              t = this.blacklistedPaths,
              r = this.opts.project.workspaces.map(
                ({ anchoredLocator: e }) => ({
                  name: l.structUtils.requirableIdent(e),
                  reference: e.reference,
                })
              ),
              n = "none" !== e,
              i = [],
              A = new Map(),
              o = l.miscUtils.buildIgnorePattern([
                ".yarn/sdks/**",
                ...this.opts.project.configuration.get("pnpIgnorePatterns"),
              ]),
              s = this.packageRegistry,
              a = this.opts.project.configuration.get("pnpShebang");
            if ("dependencies-only" === e)
              for (const e of this.opts.project.storedPackages.values())
                this.opts.project.tryWorkspaceByLocator(e) &&
                  i.push({
                    name: l.structUtils.requirableIdent(e),
                    reference: e.reference,
                  });
            return await this.finalizeInstallWithPnp({
              blacklistedLocations: t,
              dependencyTreeRoots: r,
              enableTopLevelFallback: n,
              fallbackExclusionList: i,
              fallbackPool: A,
              ignorePattern: o,
              packageRegistry: s,
              shebang: a,
            });
          }
          getPackageInformation(e) {
            const t = l.structUtils.requirableIdent(e),
              r = e.reference,
              n = this.packageRegistry.get(t);
            if (!n)
              throw new Error(
                `Assertion failed: The package information store should have been available (for ${l.structUtils.prettyIdent(
                  this.opts.project.configuration,
                  e
                )})`
              );
            const i = n.get(r);
            if (!i)
              throw new Error(
                `Assertion failed: The package information should have been available (for ${l.structUtils.prettyLocator(
                  this.opts.project.configuration,
                  e
                )})`
              );
            return i;
          }
          getDiskInformation(e) {
            const t = l.miscUtils.getMapWithDefault(
                this.packageRegistry,
                "@@disk"
              ),
              r = this.normalizeDirectoryPath(e);
            return l.miscUtils.getFactoryWithDefault(t, r, () => ({
              packageLocation: r,
              packageDependencies: new Map(),
              packagePeers: new Set(),
              linkType: C.U.SOFT,
              discardFromLookup: !1,
            }));
          }
          trimBlacklistedPackages() {
            for (const e of this.packageRegistry.values())
              for (const [t, r] of e)
                r.packageLocation &&
                  this.blacklistedPaths.has(r.packageLocation) &&
                  e.delete(t);
          }
          normalizeDirectoryPath(e) {
            let t = A.y1.relative(this.opts.project.cwd, e);
            return (
              t.match(/^\.{0,2}\//) || (t = "./" + t), t.replace(/\/?$/, "/")
            );
          }
        }
        function I(e, { configuration: t }) {
          return A.y1.resolve(
            t.get("pnpUnpluggedFolder"),
            l.structUtils.slugifyLocator(e)
          );
        }
        const E = new Set([
            l.structUtils.makeIdent(null, "nan").identHash,
            l.structUtils.makeIdent(null, "node-gyp").identHash,
            l.structUtils.makeIdent(null, "node-pre-gyp").identHash,
            l.structUtils.makeIdent(null, "node-addon-api").identHash,
            l.structUtils.makeIdent(null, "fsevents").identHash,
          ]),
          m = new Set([
            ".exe",
            ".h",
            ".hh",
            ".hpp",
            ".c",
            ".cc",
            ".cpp",
            ".java",
            ".jar",
            ".node",
          ]);
        class B {
          constructor() {
            this.mode = "strict";
          }
          supportsPackage(e, t) {
            return (
              "pnp" === t.project.configuration.get("nodeLinker") &&
              t.project.configuration.get("pnpMode") === this.mode
            );
          }
          async findPackageLocation(e, t) {
            const r = N(t.project).main;
            if (!o.xfs.existsSync(r))
              throw new f.UsageError(
                `The project in ${t.project.cwd}/package.json doesn't seem to have been installed - running an install there might help`
              );
            const n = l.miscUtils.dynamicRequireNoCache(r),
              i = {
                name: l.structUtils.requirableIdent(e),
                reference: e.reference,
              },
              s = n.getPackageInformation(i);
            if (!s)
              throw new f.UsageError(
                `Couldn't find ${l.structUtils.prettyLocator(
                  t.project.configuration,
                  e
                )} in the currently installed PnP map - running an install might help`
              );
            return A.cS.toPortablePath(s.packageLocation);
          }
          async findPackageLocator(e, t) {
            const n = N(t.project).main;
            if (!o.xfs.existsSync(n)) return null;
            const i = A.cS.fromPortablePath(n),
              s = l.miscUtils.dynamicRequire(i);
            delete r.c[i];
            const a = s.findPackageLocator(A.cS.fromPortablePath(e));
            return a
              ? l.structUtils.makeLocator(
                  l.structUtils.parseIdent(a.name),
                  a.reference
                )
              : null;
          }
          makeInstaller(e) {
            return new w(e);
          }
        }
        class w extends d {
          constructor() {
            super(...arguments),
              (this.mode = "strict"),
              (this.unpluggedPaths = new Set());
          }
          async getBuildScripts(e, t, r) {
            if (null === t) return [];
            const n = [];
            for (const e of ["preinstall", "install", "postinstall"])
              t.scripts.has(e) && n.push([g.k.SCRIPT, e]);
            const i = A.y1.join(r.prefixPath, "binding.gyp");
            return (
              !t.scripts.has("install") &&
                r.packageFs.existsSync(i) &&
                n.push([g.k.SHELLCODE, "node-gyp rebuild"]),
              n
            );
          }
          async transformPackage(e, t, r, n, { hasBuildScripts: i }) {
            return this.isUnplugged(e, t, r, n, { hasBuildScripts: i })
              ? this.unplugPackage(e, r.packageFs)
              : r.packageFs;
          }
          async finalizeInstallWithPnp(e) {
            if (this.opts.project.configuration.get("pnpMode") !== this.mode)
              return;
            const t = N(this.opts.project),
              r = this.opts.project.configuration.get("pnpDataPath");
            if (
              (await o.xfs.removePromise(t.other),
              "pnp" !== this.opts.project.configuration.get("nodeLinker"))
            )
              return (
                await o.xfs.removePromise(t.main),
                void (await o.xfs.removePromise(r))
              );
            const n = await this.locateNodeModules(e.ignorePattern);
            if (n.length > 0) {
              this.opts.report.reportWarning(
                c.b.DANGEROUS_NODE_MODULES,
                "One or more node_modules have been detected and will be removed. This operation may take some time."
              );
              for (const e of n) await o.xfs.removePromise(e);
            }
            if (this.opts.project.configuration.get("pnpEnableInlining")) {
              const n = (0, h.gY)(e);
              await o.xfs.changeFilePromise(t.main, n, {
                automaticNewlines: !0,
              }),
                await o.xfs.chmodPromise(t.main, 493),
                await o.xfs.removePromise(r);
            } else {
              const n = A.y1.relative(A.y1.dirname(t.main), r),
                { dataFile: i, loaderFile: s } = (0, h.Q$)({
                  ...e,
                  dataLocation: n,
                });
              await o.xfs.changeFilePromise(t.main, s, {
                automaticNewlines: !0,
              }),
                await o.xfs.chmodPromise(t.main, 493),
                await o.xfs.changeFilePromise(r, i, { automaticNewlines: !0 }),
                await o.xfs.chmodPromise(r, 420);
            }
            const i = this.opts.project.configuration.get("pnpUnpluggedFolder");
            if (0 === this.unpluggedPaths.size) await o.xfs.removePromise(i);
            else
              for (const e of await o.xfs.readdirPromise(i)) {
                const t = A.y1.resolve(i, e);
                this.unpluggedPaths.has(t) || (await o.xfs.removePromise(t));
              }
          }
          async locateNodeModules(e) {
            const t = [],
              r = e ? new RegExp(e) : null;
            for (const e of this.opts.project.workspaces) {
              const n = A.y1.join(e.cwd, "node_modules");
              if (
                (r && r.test(A.y1.relative(this.opts.project.cwd, e.cwd))) ||
                !o.xfs.existsSync(n)
              )
                continue;
              const i = await o.xfs.readdirPromise(n, { withFileTypes: !0 }),
                s = i.filter(
                  (e) =>
                    !e.isDirectory() ||
                    ".bin" === e.name ||
                    !e.name.startsWith(".")
                );
              if (s.length === i.length) t.push(n);
              else for (const e of s) t.push(A.y1.join(n, e.name));
            }
            return t;
          }
          async unplugPackage(e, t) {
            const r = I(e, { configuration: this.opts.project.configuration });
            return (
              this.unpluggedPaths.add(r),
              await o.xfs.mkdirPromise(r, { recursive: !0 }),
              await o.xfs.copyPromise(r, A.LZ.dot, {
                baseFs: t,
                overwrite: !1,
              }),
              new u.M(r)
            );
          }
          isUnplugged(e, t, r, n, { hasBuildScripts: i }) {
            return void 0 !== n.unplugged
              ? n.unplugged
              : !!E.has(e.identHash) ||
                  (null !== t && null !== t.preferUnplugged
                    ? t.preferUnplugged
                    : !(
                        !i &&
                        !r.packageFs.getExtractHint({ relevantExtensions: m })
                      ));
          }
        }
        var y = r(36370),
          Q = r(95397),
          v = r(40376),
          b = r(28148),
          D = r(15815),
          S = r(2401),
          k = r.n(S);
        class M extends Q.BaseCommand {
          constructor() {
            super(...arguments),
              (this.patterns = []),
              (this.all = !1),
              (this.recursive = !1),
              (this.json = !1);
          }
          async execute() {
            const e = await i.VK.find(this.context.cwd, this.context.plugins),
              { project: t, workspace: r } = await v.I.find(
                e,
                this.context.cwd
              ),
              n = await b.C.find(e);
            if (!r) throw new Q.WorkspaceRequiredError(t.cwd, this.context.cwd);
            if ("pnp" !== e.get("nodeLinker"))
              throw new f.UsageError(
                "This command can only be used if the `nodeLinker` option is set to `pnp`"
              );
            await t.restoreInstallState();
            const A = new Set(this.patterns),
              o = this.patterns.map((t) => {
                const r = l.structUtils.parseDescriptor(t),
                  n =
                    "unknown" !== r.range
                      ? r
                      : l.structUtils.makeDescriptor(r, "*");
                if (!a().validRange(n.range))
                  throw new f.UsageError(
                    `The range of the descriptor patterns must be a valid semver range (${l.structUtils.prettyDescriptor(
                      e,
                      n
                    )})`
                  );
                return (e) => {
                  const r = l.structUtils.stringifyIdent(e);
                  return (
                    !!k().isMatch(r, l.structUtils.stringifyIdent(n)) &&
                    !(e.version && !l.semverUtils.v(e.version, n.range)) &&
                    (A.delete(t), !0)
                  );
                };
              }),
              s = (e) => {
                const r = new Set(),
                  n = [],
                  i = (e, A) => {
                    if (
                      !r.has(e.locatorHash) &&
                      (r.add(e.locatorHash),
                      t.tryWorkspaceByLocator(e) ||
                        l.structUtils.isVirtualLocator(e) ||
                        !o.some((t) => t(e)) ||
                        n.push(e),
                      !(A > 0) || this.recursive)
                    )
                      for (const r of e.dependencies.values()) {
                        const e = t.storedResolutions.get(r.descriptorHash);
                        if (!e)
                          throw new Error(
                            "Assertion failed: The resolution should have been registered"
                          );
                        const n = t.storedPackages.get(e);
                        if (!n)
                          throw new Error(
                            "Assertion failed: The package should have been registered"
                          );
                        i(n, A + 1);
                      }
                  };
                for (const r of e) {
                  const e = t.storedPackages.get(r.anchoredLocator.locatorHash);
                  if (!e)
                    throw new Error(
                      "Assertion failed: The package should have been registered"
                    );
                  i(e, 0);
                }
                return n;
              };
            let g;
            g =
              this.all && this.recursive
                ? (() => {
                    const e = [];
                    for (const r of t.storedPackages.values())
                      t.tryWorkspaceByLocator(r) ||
                        l.structUtils.isVirtualLocator(r) ||
                        !o.some((e) => e(r)) ||
                        e.push(r);
                    return e;
                  })()
                : this.all
                ? s(t.workspaces)
                : s([r]);
            const u = this.recursive ? "the project" : "any workspace";
            if (A.size > 1)
              throw new f.UsageError(
                `Patterns ${[...A].join(
                  ", "
                )} don't match any packages referenced by ${u}`
              );
            if (A.size > 0)
              throw new f.UsageError(
                `Pattern ${
                  [...A][0]
                } doesn't match any packages referenced by ${u}`
              );
            g = l.miscUtils.sortMap(g, (e) =>
              l.structUtils.stringifyLocator(e)
            );
            return (
              await D.Pk.start(
                {
                  configuration: e,
                  stdout: this.context.stdout,
                  json: this.json,
                },
                async (r) => {
                  var A;
                  for (const n of g) {
                    const o =
                      null !== (A = n.version) && void 0 !== A ? A : "unknown";
                    (t.topLevelWorkspace.manifest.ensureDependencyMeta(
                      l.structUtils.makeDescriptor(n, o)
                    ).unplugged = !0),
                      r.reportInfo(
                        c.b.UNNAMED,
                        `Will unpack ${l.structUtils.prettyLocator(
                          e,
                          n
                        )} to ${e.format(
                          I(n, { configuration: e }),
                          i.a5.PATH
                        )}`
                      ),
                      r.reportJson({
                        locator: l.structUtils.stringifyLocator(n),
                        version: o,
                      });
                  }
                  await t.topLevelWorkspace.persistManifest(),
                    r.reportSeparator(),
                    await t.install({ cache: n, report: r });
                }
              )
            ).exitCode();
          }
        }
        (M.usage = f.Command.Usage({
          description: "force the unpacking of a list of packages",
          details:
            "\n      This command will add the selectors matching the specified patterns to the list of packages that must be unplugged when installed.\n\n      A package being unplugged means that instead of being referenced directly through its archive, it will be unpacked at install time in the directory configured via `pnpUnpluggedFolder`. Note that unpacking packages this way is generally not recommended because it'll make it harder to store your packages within the repository. However, it's a good approach to quickly and safely debug some packages, and can even sometimes be required depending on the context (for example when the package contains shellscripts).\n\n      Running the command will set a persistent flag inside your top-level `package.json`, in the `dependenciesMeta` field. As such, to undo its effects, you'll need to revert the changes made to the manifest and run `yarn install` to apply the modification.\n\n      By default, only direct dependencies from the current workspace are affected. If `-A,--all` is set, direct dependencies from the entire project are affected. Using the `-R,--recursive` flag will affect transitive dependencies as well as direct ones.\n\n      This command accepts glob patterns inside the scope and name components (not the range). Make sure to escape the patterns to prevent your own shell from trying to expand them.\n    ",
          examples: [
            [
              "Unplug the lodash dependency from the active workspace",
              "yarn unplug lodash",
            ],
            [
              "Unplug all instances of lodash referenced by any workspace",
              "yarn unplug lodash -A",
            ],
            [
              "Unplug all instances of lodash referenced by the active workspace and its dependencies",
              "yarn unplug lodash -R",
            ],
            [
              "Unplug all instances of lodash, anywhere",
              "yarn unplug lodash -AR",
            ],
            [
              "Unplug one specific version of lodash",
              "yarn unplug lodash@1.2.3",
            ],
            [
              "Unplug all packages with the `@babel` scope",
              "yarn unplug '@babel/*'",
            ],
            [
              "Unplug all packages (only for testing, not recommended)",
              "yarn unplug -R '*'",
            ],
          ],
        })),
          (0, y.gn)([f.Command.Rest()], M.prototype, "patterns", void 0),
          (0, y.gn)(
            [f.Command.Boolean("-A,--all")],
            M.prototype,
            "all",
            void 0
          ),
          (0, y.gn)(
            [f.Command.Boolean("-R,--recursive")],
            M.prototype,
            "recursive",
            void 0
          ),
          (0, y.gn)([f.Command.Boolean("--json")], M.prototype, "json", void 0),
          (0, y.gn)([f.Command.Path("unplug")], M.prototype, "execute", null);
        const N = (e) => {
            let t, r;
            return (
              "module" === e.topLevelWorkspace.manifest.type
                ? ((t = ".pnp.cjs"), (r = ".pnp.js"))
                : ((t = ".pnp.js"), (r = ".pnp.cjs")),
              { main: A.y1.join(e.cwd, t), other: A.y1.join(e.cwd, r) }
            );
          },
          R = (e) => (/\s/.test(e) ? JSON.stringify(e) : e);
        const F = {
          hooks: {
            populateYarnPaths: async function (e, t) {
              t(N(e).main),
                t(N(e).other),
                t(e.configuration.get("pnpDataPath")),
                t(e.configuration.get("pnpUnpluggedFolder"));
            },
            setupScriptEnvironment: async function (e, t, r) {
              const n = N(e).main,
                i = "--require " + R(A.cS.fromPortablePath(n));
              if (n.includes(" ") && a().lt(process.versions.node, "12.0.0"))
                throw new Error(
                  `Expected the build location to not include spaces when using Node < 12.0.0 (${process.versions.node})`
                );
              if (o.xfs.existsSync(n)) {
                let e = t.NODE_OPTIONS || "";
                const r = /\s*--require\s+\S*\.pnp\.c?js\s*/g;
                (e = e.replace(r, " ").trim()),
                  (e = e ? `${i} ${e}` : i),
                  (t.NODE_OPTIONS = e);
              }
            },
          },
          configuration: {
            nodeLinker: {
              description:
                'The linker used for installing Node packages, one of: "pnp", "node-modules"',
              type: i.a2.STRING,
              default: "pnp",
            },
            pnpMode: {
              description:
                "If 'strict', generates standard PnP maps. If 'loose', merges them with the n_m resolution.",
              type: i.a2.STRING,
              default: "strict",
            },
            pnpShebang: {
              description: "String to prepend to the generated PnP script",
              type: i.a2.STRING,
              default: "#!/usr/bin/env node",
            },
            pnpIgnorePatterns: {
              description:
                "Array of glob patterns; files matching them will use the classic resolution",
              type: i.a2.STRING,
              default: [],
              isArray: !0,
            },
            pnpEnableInlining: {
              description:
                "If true, the PnP data will be inlined along with the generated loader",
              type: i.a2.BOOLEAN,
              default: !0,
            },
            pnpFallbackMode: {
              description:
                "If true, the generated PnP loader will follow the top-level fallback rule",
              type: i.a2.STRING,
              default: "dependencies-only",
            },
            pnpUnpluggedFolder: {
              description: "Folder where the unplugged packages must be stored",
              type: i.a2.ABSOLUTE_PATH,
              default: "./.yarn/unplugged",
            },
            pnpDataPath: {
              description:
                "Path of the file where the PnP data (used by the loader) must be written",
              type: i.a2.ABSOLUTE_PATH,
              default: "./.pnp.data.json",
            },
          },
          linkers: [B],
          commands: [M],
        };
      },
      28638: (e, t, r) => {
        "use strict";
        r.r(t);
        var n = r(50683),
          i = r.n(n);
        Object.fromEntries || (Object.fromEntries = i());
        var A = r(59355),
          o = r(91058),
          s = r(45330);
        (0, o.D)({
          binaryVersion: A.o || "<unknown>",
          pluginConfiguration: (0, s.e)(),
        });
      },
      95397: (e, t, r) => {
        "use strict";
        r.r(t),
          r.d(t, {
            BaseCommand: () => n.F,
            WorkspaceRequiredError: () => s,
            getDynamicLibs: () => c,
            getPluginConfiguration: () => g.e,
            openWorkspace: () => u,
            main: () => h.D,
            pluginCommands: () => f.f,
          });
        var n = r(56087),
          i = r(46611),
          A = r(46009),
          o = r(93103);
        class s extends o.UsageError {
          constructor(e, t) {
            super(
              `This command can only be run from within a workspace of your project (${A.y1.relative(
                e,
                t
              )} isn't a workspace of ${A.y1.join(e, i.G.fileName)}).`
            );
          }
        }
        const a = [
            "@yarnpkg/cli",
            "@yarnpkg/core",
            "@yarnpkg/fslib",
            "@yarnpkg/libzip",
            "@yarnpkg/parsers",
            "@yarnpkg/shell",
            "clipanion",
            "semver",
            "yup",
          ],
          c = () => new Map(a.map((e) => [e, r(98497)(e)]));
        var g = r(45330),
          l = r(40376);
        async function u(e, t) {
          const { project: r, workspace: n } = await l.I.find(e, t);
          if (!n) throw new s(r.cwd, t);
          return n;
        }
        var h = r(91058),
          f = r(15683);
      },
      91058: (e, t, r) => {
        "use strict";
        r.d(t, { D: () => p });
        var n = r(5624),
          i = r(27122),
          A = r(81832),
          o = r(46009),
          s = r(56537),
          a = r(63129),
          c = r(93103),
          g = r(35747),
          l = r(15683),
          u = r(36370),
          h = r(56087);
        class f extends h.F {
          async execute() {
            const e = await i.VK.find(this.context.cwd, this.context.plugins);
            this.context.stdout.write(
              ((e) =>
                `\n${e.format(
                  "Welcome on Yarn 2!",
                  "bold"
                )} 🎉 Thanks for helping us shape our vision of how projects\nshould be managed going forward.\n\nBeing still in RC, Yarn 2 isn't completely stable yet. Some features might be\nmissing, and some behaviors may have received major overhaul. In case of doubt,\nuse the following URLs to get some insight:\n\n  - The changelog:\n    ${e.format(
                  "https://github.com/yarnpkg/berry/tree/CHANGELOG.md",
                  "cyan"
                )}\n\n  - Our issue tracker:\n    ${e.format(
                  "https://github.com/yarnpkg/berry",
                  "cyan"
                )}\n\n  - Our Discord server:\n    ${e.format(
                  "https://discord.gg/yarnpkg",
                  "cyan"
                )}\n\nWe're hoping you will enjoy the experience. For now, a good start is to run\nthe two following commands:\n\n  ${e.format(
                  "find . -name node_modules -prune -exec rm -r {} \\;",
                  "magenta"
                )}\n  ${e.format(
                  "yarn install",
                  "magenta"
                )}\n\nOne last trick! If you need at some point to upgrade Yarn to a nightly build,\nthe following command will install the CLI straight from master:\n\n  ${e.format(
                  "yarn set version from sources",
                  "magenta"
                )}\n\nSee you later 👋\n`)(e).trim() + "\n"
            );
          }
        }
        async function p({ binaryVersion: e, pluginConfiguration: t }) {
          async function r() {
            const u = new c.Cli({
              binaryLabel: "Yarn Package Manager",
              binaryName: "yarn",
              binaryVersion: e,
            });
            u.register(f);
            try {
              await (async function (u) {
                var h, f, p, C, d;
                const I = process.versions.node;
                if (
                  !n.semverUtils.v(I, ">=10.17") &&
                  "1" !== process.env.YARN_IGNORE_NODE
                )
                  throw new c.UsageError(
                    `This tool requires a Node version compatible with >=10.17 (got ${I}). Upgrade Node, or set \`YARN_IGNORE_NODE=1\` in your environment.`
                  );
                const E = await i.VK.find(
                    o.cS.toPortablePath(process.cwd()),
                    t,
                    { usePath: !0, strict: !1 }
                  ),
                  m = E.get("yarnPath"),
                  B = E.get("ignorePath"),
                  w = E.get("ignoreCwd");
                if (null === m || B) {
                  B && delete process.env.YARN_IGNORE_PATH;
                  E.get("enableTelemetry") &&
                    (i.VK.telemetry = new A.E(
                      E,
                      "puba9cdc10ec5790a2cf4969dd413a47270"
                    )),
                    null === (h = i.VK.telemetry) ||
                      void 0 === h ||
                      h.reportVersion(e);
                  for (const [e, t] of E.plugins.entries()) {
                    l.f.has(
                      null !==
                        (p =
                          null === (f = e.match(/^@yarnpkg\/plugin-(.*)$/)) ||
                          void 0 === f
                            ? void 0
                            : f[1]) && void 0 !== p
                        ? p
                        : ""
                    ) &&
                      (null === (C = i.VK.telemetry) ||
                        void 0 === C ||
                        C.reportPluginName(e));
                    for (const e of t.commands || []) u.register(e);
                  }
                  const n = u.process(process.argv.slice(2));
                  n.help ||
                    null === (d = i.VK.telemetry) ||
                    void 0 === d ||
                    d.reportCommandName(n.path.join(" "));
                  const s = n.cwd;
                  if (void 0 !== s && !w) {
                    const e = (0, g.realpathSync)(process.cwd()),
                      t = (0, g.realpathSync)(s);
                    if (e !== t) return process.chdir(s), void (await r());
                  }
                  await u.runExit(n, {
                    cwd: o.cS.toPortablePath(process.cwd()),
                    plugins: t,
                    quiet: !1,
                    stdin: process.stdin,
                    stdout: process.stdout,
                    stderr: process.stderr,
                  });
                } else if (s.xfs.existsSync(m))
                  try {
                    !(function (e) {
                      const t = o.cS.fromPortablePath(e);
                      process.on("SIGINT", () => {}),
                        t
                          ? (0, a.execFileSync)(
                              process.execPath,
                              [t, ...process.argv.slice(2)],
                              {
                                stdio: "inherit",
                                env: {
                                  ...process.env,
                                  YARN_IGNORE_PATH: "1",
                                  YARN_IGNORE_CWD: "1",
                                },
                              }
                            )
                          : (0, a.execFileSync)(t, process.argv.slice(2), {
                              stdio: "inherit",
                              env: {
                                ...process.env,
                                YARN_IGNORE_PATH: "1",
                                YARN_IGNORE_CWD: "1",
                              },
                            });
                    })(m);
                  } catch (e) {
                    process.exitCode = e.code || 1;
                  }
                else
                  process.stdout.write(
                    u.error(
                      new Error(
                        `The "yarn-path" option has been set (in ${E.sources.get(
                          "yarnPath"
                        )}), but the specified location doesn't exist (${m}).`
                      )
                    )
                  ),
                    (process.exitCode = 1);
              })(u);
            } catch (e) {
              process.stdout.write(u.error(e)), (process.exitCode = 1);
            }
          }
          return r()
            .catch((e) => {
              process.stdout.write(e.stack || e.message),
                (process.exitCode = 1);
            })
            .finally(() => s.xfs.rmtempPromise());
        }
        (0, u.gn)([c.Command.Path("--welcome")], f.prototype, "execute", null);
      },
      15683: (e, t, r) => {
        "use strict";
        r.d(t, { f: () => n });
        const n = new Map([
          [
            "constraints",
            [
              ["constraints", "query"],
              ["constraints", "source"],
              ["constraints"],
            ],
          ],
          ["exec", []],
          ["interactive-tools", [["search"], ["upgrade-interactive"]]],
          ["stage", [["stage"]]],
          ["typescript", []],
          [
            "version",
            [["version", "apply"], ["version", "check"], ["version"]],
          ],
          [
            "workspace-tools",
            [
              ["workspaces", "focus"],
              ["workspaces", "foreach"],
            ],
          ],
        ]);
      },
      56087: (e, t, r) => {
        "use strict";
        r.d(t, { F: () => A });
        var n = r(36370),
          i = r(93103);
        class A extends i.Command {}
        (0, n.gn)(
          [i.Command.String("--cwd", { hidden: !0 })],
          A.prototype,
          "cwd",
          void 0
        );
      },
      28148: (e, t, r) => {
        "use strict";
        r.d(t, { C: () => I });
        var n = r(78420),
          i = r(15037),
          A = r(27551),
          o = r(14626),
          s = r(46009),
          a = r(56537),
          c = r(29486),
          g = r(35747),
          l = r.n(g),
          u = r(92659),
          h = r(35691),
          f = r(20624),
          p = r(73632),
          C = r(54143);
        const d = 6;
        class I {
          constructor(
            e,
            {
              configuration: t,
              immutable: r = t.get("enableImmutableCache"),
              check: n = !1,
            }
          ) {
            (this.markedFiles = new Set()),
              (this.mutexes = new Map()),
              (this.configuration = t),
              (this.cwd = e),
              (this.immutable = r),
              (this.check = n);
            const i = t.get("cacheKeyOverride");
            if (null !== i) this.cacheKey = "" + i;
            else {
              const e = t.get("compressionLevel"),
                r = e !== A.k ? "c" + e : "";
              this.cacheKey = [d, r].join("");
            }
          }
          static async find(e, { immutable: t, check: r } = {}) {
            const n = new I(e.get("cacheFolder"), {
              configuration: e,
              immutable: t,
              check: r,
            });
            return await n.setup(), n;
          }
          get mirrorCwd() {
            if (!this.configuration.get("enableMirror")) return null;
            const e = this.configuration.get("globalFolder") + "/cache";
            return e !== this.cwd ? e : null;
          }
          getVersionFilename(e) {
            return `${C.slugifyLocator(e)}-${this.cacheKey}.zip`;
          }
          getChecksumFilename(e, t) {
            const r = (function (e) {
              const t = e.indexOf("/");
              return -1 !== t ? e.slice(t + 1) : e;
            })(t).slice(0, 10);
            return `${C.slugifyLocator(e)}-${r}.zip`;
          }
          getLocatorPath(e, t) {
            if (null === this.mirrorCwd)
              return s.y1.resolve(this.cwd, this.getVersionFilename(e));
            if (null === t) return null;
            return E(t) !== this.cacheKey
              ? null
              : s.y1.resolve(this.cwd, this.getChecksumFilename(e, t));
          }
          getLocatorMirrorPath(e) {
            const t = this.mirrorCwd;
            return null !== t
              ? s.y1.resolve(t, this.getVersionFilename(e))
              : null;
          }
          async setup() {
            if (!this.configuration.get("enableGlobalCache")) {
              await a.xfs.mkdirPromise(this.cwd, { recursive: !0 });
              const e = s.y1.resolve(this.cwd, ".gitignore");
              (await a.xfs.existsPromise(e)) ||
                (await a.xfs.writeFilePromise(e, "/.gitignore\n*.lock\n"));
            }
          }
          async fetchPackageFromCache(
            e,
            t,
            { onHit: r, onMiss: g, loader: d, skipIntegrityCheck: I }
          ) {
            const m = this.getLocatorMirrorPath(e),
              B = new n.S(),
              w = async (e, r = null) => {
                const n =
                  I && t ? t : `${this.cacheKey}/${await f.checksumFile(e)}`;
                if (null !== r) {
                  if (
                    n !==
                    (I && t ? t : `${this.cacheKey}/${await f.checksumFile(r)}`)
                  )
                    throw new h.lk(
                      u.b.CACHE_CHECKSUM_MISMATCH,
                      "The remote archive doesn't match the local checksum - has the local cache been corrupted?"
                    );
                }
                if (null !== t && n !== t) {
                  let e;
                  switch (
                    ((e = this.check
                      ? "throw"
                      : E(t) !== E(n)
                      ? "update"
                      : this.configuration.get("checksumBehavior")),
                    e)
                  ) {
                    case "ignore":
                      return t;
                    case "update":
                      return n;
                    default:
                    case "throw":
                      throw new h.lk(
                        u.b.CACHE_CHECKSUM_MISMATCH,
                        "The remote archive doesn't match the expected checksum"
                      );
                  }
                }
                return n;
              },
              y = async (t) => {
                if (!d)
                  throw new Error(
                    "Cache check required but no loader configured for " +
                      C.prettyLocator(this.configuration, e)
                  );
                const r = await d(),
                  n = r.getRealPath();
                return (
                  r.saveAndClose(),
                  await a.xfs.chmodPromise(n, 420),
                  await w(t, n)
                );
              },
              Q = async () => {
                if (null === m || !(await a.xfs.existsPromise(m))) {
                  const e = await d(),
                    t = e.getRealPath();
                  return e.saveAndClose(), t;
                }
                const t = await a.xfs.mktempPromise(),
                  r = s.y1.join(t, this.getVersionFilename(e));
                return (
                  await a.xfs.copyFilePromise(
                    m,
                    r,
                    l().constants.COPYFILE_FICLONE
                  ),
                  r
                );
              },
              v = async () => {
                if (!d)
                  throw new Error(
                    "Cache entry required but missing for " +
                      C.prettyLocator(this.configuration, e)
                  );
                if (this.immutable)
                  throw new h.lk(
                    u.b.IMMUTABLE_CACHE,
                    "Cache entry required but missing for " +
                      C.prettyLocator(this.configuration, e)
                  );
                const t = await Q();
                await a.xfs.chmodPromise(t, 420);
                const r = await w(t),
                  n = this.getLocatorPath(e, r);
                if (!n)
                  throw new Error(
                    "Assertion failed: Expected the cache path to be available"
                  );
                return await this.writeFileWithLock(
                  n,
                  async () =>
                    await this.writeFileWithLock(
                      m,
                      async () => (
                        await a.xfs.movePromise(t, n),
                        null !== m &&
                          (await a.xfs.copyFilePromise(
                            n,
                            m,
                            l().constants.COPYFILE_FICLONE
                          )),
                        [n, r]
                      )
                    )
                );
              };
            for (let t; (t = this.mutexes.get(e.locatorHash)); ) await t;
            const [b, D] = await (async () => {
              const n = (async () => {
                const n = this.getLocatorPath(e, t),
                  i = null !== n && (await B.existsPromise(n)),
                  A = i ? r : g;
                if ((A && A(), i)) {
                  let e = null;
                  const t = n;
                  return (e = this.check ? await y(t) : await w(t)), [t, e];
                }
                return v();
              })();
              this.mutexes.set(e.locatorHash, n);
              try {
                return await n;
              } finally {
                this.mutexes.delete(e.locatorHash);
              }
            })();
            this.markedFiles.add(b);
            let S = null;
            const k = await (0, c.getLibzipPromise)(),
              M = new i.v(
                () =>
                  p.prettifySyncErrors(
                    () =>
                      (S = new A.d(b, { baseFs: B, libzip: k, readOnly: !0 })),
                    (t) =>
                      `Failed to open the cache entry for ${C.prettyLocator(
                        this.configuration,
                        e
                      )}: ${t}`
                  ),
                s.y1
              );
            return [
              new o.K(b, { baseFs: M, pathUtils: s.y1 }),
              () => {
                null !== S && S.discardAndClose();
              },
              D,
            ];
          }
          async writeFileWithLock(e, t) {
            return null === e
              ? await t()
              : (await a.xfs.mkdirPromise(s.y1.dirname(e), { recursive: !0 }),
                await a.xfs.lockPromise(e, async () => await t()));
          }
        }
        function E(e) {
          const t = e.indexOf("/");
          return -1 !== t ? e.slice(0, t) : null;
        }
      },
      27122: (e, t, r) => {
        "use strict";
        r.d(t, {
          tr: () => j,
          nh: () => G,
          a2: () => _,
          a5: () => H,
          EW: () => Z,
          VK: () => $,
        });
        var n = r(27551),
          i = r(46009),
          A = r(56537),
          o = r(55125),
          s = r(54738),
          a = r.n(s),
          c = r(95882),
          g = r.n(c),
          l = r(5864),
          u = r(93103),
          h = r(61578),
          f = r.n(h),
          p = r(53887),
          C = r.n(p),
          d = r(92413),
          I = r(92659),
          E = r(54143);
        const m = {
          hooks: {
            reduceDependency: (
              e,
              t,
              r,
              n,
              { resolver: i, resolveOptions: A }
            ) => {
              for (const { pattern: n, reference: o } of t.topLevelWorkspace
                .manifest.resolutions) {
                if (n.from && n.from.fullName !== E.requirableIdent(r))
                  continue;
                if (
                  n.from &&
                  n.from.description &&
                  n.from.description !== r.reference
                )
                  continue;
                if (n.descriptor.fullName !== E.requirableIdent(e)) continue;
                if (
                  n.descriptor.description &&
                  n.descriptor.description !== e.range
                )
                  continue;
                return i.bindDescriptor(
                  E.makeDescriptor(e, o),
                  t.topLevelWorkspace.anchoredLocator,
                  A
                );
              }
              return e;
            },
            validateProject: async (e, t) => {
              for (const r of e.workspaces) {
                const n = E.prettyWorkspace(e.configuration, r);
                await e.configuration.triggerHook(
                  (e) => e.validateWorkspace,
                  r,
                  {
                    reportWarning: (e, r) => t.reportWarning(e, `${n}: ${r}`),
                    reportError: (e, r) => t.reportError(e, `${n}: ${r}`),
                  }
                );
              }
            },
            validateWorkspace: async (e, t) => {
              const { manifest: r } = e;
              r.resolutions.length &&
                e.cwd !== e.project.cwd &&
                r.errors.push(new Error("Resolutions field will be ignored"));
              for (const e of r.errors)
                t.reportWarning(I.b.INVALID_MANIFEST, e.message);
            },
          },
        };
        var B = r(46611),
          w = r(35691);
        class y {
          constructor(e) {
            this.fetchers = e;
          }
          supports(e, t) {
            return !!this.tryFetcher(e, t);
          }
          getLocalPath(e, t) {
            return this.getFetcher(e, t).getLocalPath(e, t);
          }
          async fetch(e, t) {
            const r = this.getFetcher(e, t);
            return await r.fetch(e, t);
          }
          tryFetcher(e, t) {
            const r = this.fetchers.find((r) => r.supports(e, t));
            return r || null;
          }
          getFetcher(e, t) {
            const r = this.fetchers.find((r) => r.supports(e, t));
            if (!r)
              throw new w.lk(
                I.b.FETCHER_NOT_FOUND,
                E.prettyLocator(t.project.configuration, e) +
                  " isn't supported by any available fetcher"
              );
            return r;
          }
        }
        var Q = r(27092),
          v = r(52779),
          b = r(60895);
        class D {
          static isVirtualDescriptor(e) {
            return !!e.range.startsWith(D.protocol);
          }
          static isVirtualLocator(e) {
            return !!e.reference.startsWith(D.protocol);
          }
          supportsDescriptor(e, t) {
            return D.isVirtualDescriptor(e);
          }
          supportsLocator(e, t) {
            return D.isVirtualLocator(e);
          }
          shouldPersistResolution(e, t) {
            return !1;
          }
          bindDescriptor(e, t, r) {
            throw new Error(
              'Assertion failed: calling "bindDescriptor" on a virtual descriptor is unsupported'
            );
          }
          getResolutionDependencies(e, t) {
            throw new Error(
              'Assertion failed: calling "getResolutionDependencies" on a virtual descriptor is unsupported'
            );
          }
          async getCandidates(e, t, r) {
            throw new Error(
              'Assertion failed: calling "getCandidates" on a virtual descriptor is unsupported'
            );
          }
          async getSatisfying(e, t, r) {
            throw new Error(
              'Assertion failed: calling "getSatisfying" on a virtual descriptor is unsupported'
            );
          }
          async resolve(e, t) {
            throw new Error(
              'Assertion failed: calling "resolve" on a virtual locator is unsupported'
            );
          }
        }
        D.protocol = "virtual:";
        var S = r(75448),
          k = r(94538);
        class M {
          supports(e) {
            return !!e.reference.startsWith(k.d.protocol);
          }
          getLocalPath(e, t) {
            return this.getWorkspace(e, t).cwd;
          }
          async fetch(e, t) {
            const r = this.getWorkspace(e, t).cwd;
            return {
              packageFs: new S.M(r),
              prefixPath: i.LZ.dot,
              localPath: r,
            };
          }
          getWorkspace(e, t) {
            return t.project.getWorkspaceByCwd(
              e.reference.slice(k.d.protocol.length)
            );
          }
        }
        var N = r(81111),
          R = r(73632),
          F = r(32282),
          K = r.n(F);
        function x(e) {
          return ("undefined" != typeof require ? require : r(32178))(e);
        }
        var L = r(36545);
        const P = process.env.GITHUB_ACTIONS
            ? { level: 2 }
            : g().supportsColor
            ? { level: g().supportsColor.level }
            : { level: 0 },
          U = 0 !== P.level,
          T = U && !process.env.GITHUB_ACTIONS,
          O = new (g().Instance)(P),
          Y = new Set([
            "binFolder",
            "version",
            "flags",
            "profile",
            "gpg",
            "ignoreNode",
            "wrapOutput",
          ]),
          j = ".yarnrc.yml",
          G = "yarn.lock";
        var _, H;
        !(function (e) {
          (e.ANY = "ANY"),
            (e.BOOLEAN = "BOOLEAN"),
            (e.ABSOLUTE_PATH = "ABSOLUTE_PATH"),
            (e.LOCATOR = "LOCATOR"),
            (e.LOCATOR_LOOSE = "LOCATOR_LOOSE"),
            (e.NUMBER = "NUMBER"),
            (e.STRING = "STRING"),
            (e.SECRET = "SECRET"),
            (e.SHAPE = "SHAPE"),
            (e.MAP = "MAP");
        })(_ || (_ = {})),
          (function (e) {
            (e.NAME = "NAME"),
              (e.NUMBER = "NUMBER"),
              (e.PATH = "PATH"),
              (e.RANGE = "RANGE"),
              (e.REFERENCE = "REFERENCE"),
              (e.SCOPE = "SCOPE"),
              (e.ADDED = "ADDED"),
              (e.REMOVED = "REMOVED"),
              (e.CODE = "CODE");
          })(H || (H = {}));
        const J =
            P.level >= 3
              ? new Map([
                  [H.NAME, "#d7875f"],
                  [H.RANGE, "#00afaf"],
                  [H.REFERENCE, "#87afff"],
                  [H.NUMBER, "#ffd700"],
                  [H.PATH, "#d75fd7"],
                  [H.SCOPE, "#d75f00"],
                  [H.ADDED, "#5faf00"],
                  [H.REMOVED, "#d70000"],
                  [H.CODE, "#87afff"],
                ])
              : new Map([
                  [H.NAME, 173],
                  [H.RANGE, 37],
                  [H.REFERENCE, 111],
                  [H.NUMBER, 220],
                  [H.PATH, 170],
                  [H.SCOPE, 166],
                  [H.ADDED, 70],
                  [H.REMOVED, 160],
                  [H.CODE, 111],
                ]),
          q = {
            lastUpdateCheck: {
              description:
                "Last timestamp we checked whether new Yarn versions were available",
              type: _.STRING,
              default: null,
            },
            yarnPath: {
              description:
                "Path to the local executable that must be used over the global one",
              type: _.ABSOLUTE_PATH,
              default: null,
            },
            ignorePath: {
              description:
                "If true, the local executable will be ignored when using the global one",
              type: _.BOOLEAN,
              default: !1,
            },
            ignoreCwd: {
              description: "If true, the `--cwd` flag will be ignored",
              type: _.BOOLEAN,
              default: !1,
            },
            cacheKeyOverride: {
              description:
                "A global cache key override; used only for test purposes",
              type: _.STRING,
              default: null,
            },
            globalFolder: {
              description: "Folder where are stored the system-wide settings",
              type: _.ABSOLUTE_PATH,
              default: N.getDefaultGlobalFolder(),
            },
            cacheFolder: {
              description: "Folder where the cache files must be written",
              type: _.ABSOLUTE_PATH,
              default: "./.yarn/cache",
            },
            compressionLevel: {
              description:
                "Zip files compression level, from 0 to 9 or mixed (a variant of 9, which stores some files uncompressed, when compression doesn't yield good results)",
              type: _.NUMBER,
              values: ["mixed", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
              default: n.k,
            },
            virtualFolder: {
              description:
                "Folder where the virtual packages (cf doc) will be mapped on the disk (must be named $$virtual)",
              type: _.ABSOLUTE_PATH,
              default: "./.yarn/$$virtual",
            },
            bstatePath: {
              description:
                "Path of the file where the current state of the built packages must be stored",
              type: _.ABSOLUTE_PATH,
              default: "./.yarn/build-state.yml",
            },
            lockfileFilename: {
              description:
                "Name of the files where the Yarn dependency tree entries must be stored",
              type: _.STRING,
              default: G,
            },
            installStatePath: {
              description:
                "Path of the file where the install state will be persisted",
              type: _.ABSOLUTE_PATH,
              default: "./.yarn/install-state.gz",
            },
            immutablePatterns: {
              description:
                "Array of glob patterns; files matching them won't be allowed to change during immutable installs",
              type: _.STRING,
              default: [],
              isArray: !0,
            },
            rcFilename: {
              description:
                "Name of the files where the configuration can be found",
              type: _.STRING,
              default: X(),
            },
            enableGlobalCache: {
              description:
                "If true, the system-wide cache folder will be used regardless of `cache-folder`",
              type: _.BOOLEAN,
              default: !1,
            },
            enableAbsoluteVirtuals: {
              description:
                "If true, the virtual symlinks will use absolute paths if required [non portable!!]",
              type: _.BOOLEAN,
              default: !1,
            },
            enableColors: {
              description:
                "If true, the CLI is allowed to use colors in its output",
              type: _.BOOLEAN,
              default: U,
              defaultText: "<dynamic>",
            },
            enableHyperlinks: {
              description:
                "If true, the CLI is allowed to use hyperlinks in its output",
              type: _.BOOLEAN,
              default: T,
              defaultText: "<dynamic>",
            },
            enableInlineBuilds: {
              description:
                "If true, the CLI will print the build output on the command line",
              type: _.BOOLEAN,
              default: l.isCI,
              defaultText: "<dynamic>",
            },
            enableProgressBars: {
              description:
                "If true, the CLI is allowed to show a progress bar for long-running events",
              type: _.BOOLEAN,
              default:
                !l.isCI && process.stdout.isTTY && process.stdout.columns > 22,
              defaultText: "<dynamic>",
            },
            enableTimers: {
              description:
                "If true, the CLI is allowed to print the time spent executing commands",
              type: _.BOOLEAN,
              default: !0,
            },
            preferAggregateCacheInfo: {
              description:
                "If true, the CLI will only print a one-line report of any cache changes",
              type: _.BOOLEAN,
              default: l.isCI,
            },
            preferInteractive: {
              description:
                "If true, the CLI will automatically use the interactive mode when called from a TTY",
              type: _.BOOLEAN,
              default: !1,
            },
            preferTruncatedLines: {
              description:
                "If true, the CLI will truncate lines that would go beyond the size of the terminal",
              type: _.BOOLEAN,
              default: !1,
            },
            progressBarStyle: {
              description:
                "Which style of progress bar should be used (only when progress bars are enabled)",
              type: _.STRING,
              default: void 0,
              defaultText: "<dynamic>",
            },
            defaultLanguageName: {
              description:
                "Default language mode that should be used when a package doesn't offer any insight",
              type: _.STRING,
              default: "node",
            },
            defaultProtocol: {
              description:
                "Default resolution protocol used when resolving pure semver and tag ranges",
              type: _.STRING,
              default: "npm:",
            },
            enableTransparentWorkspaces: {
              description:
                "If false, Yarn won't automatically resolve workspace dependencies unless they use the `workspace:` protocol",
              type: _.BOOLEAN,
              default: !0,
            },
            enableMirror: {
              description:
                "If true, the downloaded packages will be retrieved and stored in both the local and global folders",
              type: _.BOOLEAN,
              default: !0,
            },
            enableNetwork: {
              description:
                "If false, the package manager will refuse to use the network if required to",
              type: _.BOOLEAN,
              default: !0,
            },
            httpProxy: {
              description:
                "URL of the http proxy that must be used for outgoing http requests",
              type: _.STRING,
              default: null,
            },
            httpsProxy: {
              description:
                "URL of the http proxy that must be used for outgoing https requests",
              type: _.STRING,
              default: null,
            },
            unsafeHttpWhitelist: {
              description:
                "List of the hostnames for which http queries are allowed (glob patterns are supported)",
              type: _.STRING,
              default: [],
              isArray: !0,
            },
            httpTimeout: {
              description: "Timeout of each http request in milliseconds",
              type: _.NUMBER,
              default: 6e4,
            },
            httpRetry: {
              description: "Retry times on http failure",
              type: _.NUMBER,
              default: 3,
            },
            networkConcurrency: {
              description: "Maximal number of concurrent requests",
              type: _.NUMBER,
              default: 1 / 0,
            },
            enableTelemetry: {
              description:
                "If true, telemetry will be periodically sent, following the rules in https://yarnpkg.com/advanced/telemetry",
              type: _.BOOLEAN,
              default: !l.isCI,
            },
            telemetryInterval: {
              description:
                "Minimal amount of time between two telemetry uploads, in days",
              type: _.NUMBER,
              default: 7,
            },
            telemetryUserId: {
              description:
                "If you desire to tell us which project you are, you can set this field. Completely optional and opt-in.",
              type: _.STRING,
              default: null,
            },
            enableScripts: {
              description:
                "If true, packages are allowed to have install scripts by default",
              type: _.BOOLEAN,
              default: !0,
            },
            enableImmutableCache: {
              description:
                "If true, the cache is reputed immutable and actions that would modify it will throw",
              type: _.BOOLEAN,
              default: !1,
            },
            checksumBehavior: {
              description:
                "Enumeration defining what to do when a checksum doesn't match expectations",
              type: _.STRING,
              default: "throw",
            },
            packageExtensions: {
              description:
                "Map of package corrections to apply on the dependency tree",
              type: _.MAP,
              valueDefinition: { description: "", type: _.ANY },
            },
          };
        function z(e, t, r, n, i) {
          if (n.isArray)
            return Array.isArray(r)
              ? r.map((r, A) => W(e, `${t}[${A}]`, r, n, i))
              : String(r)
                  .split(/,/)
                  .map((r) => W(e, t, r, n, i));
          if (Array.isArray(r))
            throw new Error(
              `Non-array configuration settings "${t}" cannot be an array`
            );
          return W(e, t, r, n, i);
        }
        function W(e, t, r, n, A) {
          var o;
          switch (n.type) {
            case _.ANY:
              return r;
            case _.SHAPE:
              return (function (e, t, r, n, i) {
                if ("object" != typeof r || Array.isArray(r))
                  throw new u.UsageError(
                    `Object configuration settings "${t}" must be an object`
                  );
                const A = V(e, n);
                if (null === r) return A;
                for (const [o, s] of Object.entries(r)) {
                  const r = `${t}.${o}`;
                  if (!n.properties[o])
                    throw new u.UsageError(
                      `Unrecognized configuration settings found: ${t}.${o} - run "yarn config -v" to see the list of settings supported in Yarn`
                    );
                  A.set(o, z(e, r, s, n.properties[o], i));
                }
                return A;
              })(e, t, r, n, A);
            case _.MAP:
              return (function (e, t, r, n, i) {
                const A = new Map();
                if ("object" != typeof r || Array.isArray(r))
                  throw new u.UsageError(
                    `Map configuration settings "${t}" must be an object`
                  );
                if (null === r) return A;
                for (const [o, s] of Object.entries(r)) {
                  const r = n.normalizeKeys ? n.normalizeKeys(o) : o,
                    a = `${t}['${r}']`,
                    c = n.valueDefinition;
                  A.set(r, z(e, a, s, c, i));
                }
                return A;
              })(e, t, r, n, A);
          }
          if (null === r && !n.isNullable && null !== n.default)
            throw new Error(
              `Non-nullable configuration settings "${t}" cannot be set to null`
            );
          if (null === (o = n.values) || void 0 === o ? void 0 : o.includes(r))
            return r;
          const s = (() => {
            if (n.type === _.BOOLEAN)
              return (function (e) {
                switch (e) {
                  case "true":
                  case "1":
                  case 1:
                  case !0:
                    return !0;
                  case "false":
                  case "0":
                  case 0:
                  case !1:
                    return !1;
                  default:
                    throw new Error(`Couldn't parse "${e}" as a boolean`);
                }
              })(r);
            if ("string" != typeof r)
              throw new Error(`Expected value (${r}) to be a string`);
            const e = R.replaceEnvVariables(r, { env: process.env });
            switch (n.type) {
              case _.ABSOLUTE_PATH:
                return i.y1.resolve(A, i.cS.toPortablePath(e));
              case _.LOCATOR_LOOSE:
                return E.parseLocator(e, !1);
              case _.NUMBER:
                return parseInt(e);
              case _.LOCATOR:
                return E.parseLocator(e);
              default:
                return e;
            }
          })();
          if (n.values && !n.values.includes(s))
            throw new Error(
              "Invalid value, expected one of " + n.values.join(", ")
            );
          return s;
        }
        function V(e, t) {
          switch (t.type) {
            case _.SHAPE: {
              const r = new Map();
              for (const [n, i] of Object.entries(t.properties))
                r.set(n, V(e, i));
              return r;
            }
            case _.MAP:
              return new Map();
            case _.ABSOLUTE_PATH:
              return null === t.default
                ? null
                : null === e.projectCwd
                ? i.y1.isAbsolute(t.default)
                  ? i.y1.normalize(t.default)
                  : t.isNullable
                  ? null
                  : void 0
                : Array.isArray(t.default)
                ? t.default.map((t) => i.y1.resolve(e.projectCwd, t))
                : i.y1.resolve(e.projectCwd, t.default);
            default:
              return t.default;
          }
        }
        function X() {
          for (const [e, t] of Object.entries(process.env))
            if ("yarn_rc_filename" === e.toLowerCase() && "string" == typeof t)
              return t;
          return j;
        }
        var Z;
        !(function (e) {
          (e[(e.LOCKFILE = 0)] = "LOCKFILE"),
            (e[(e.MANIFEST = 1)] = "MANIFEST"),
            (e[(e.NONE = 2)] = "NONE");
        })(Z || (Z = {}));
        class $ {
          constructor(e) {
            (this.projectCwd = null),
              (this.plugins = new Map()),
              (this.settings = new Map()),
              (this.values = new Map()),
              (this.sources = new Map()),
              (this.invalid = new Map()),
              (this.packageExtensions = new Map()),
              (this.limits = new Map()),
              (this.startingCwd = e);
          }
          static create(e, t, r) {
            const n = new $(e);
            void 0 === t || t instanceof Map || (n.projectCwd = t),
              n.importSettings(q);
            const i = void 0 !== r ? r : t instanceof Map ? t : new Map();
            for (const [e, t] of i) n.activatePlugin(e, t);
            return n;
          }
          static async find(
            e,
            t,
            {
              lookup: r = Z.LOCKFILE,
              strict: n = !0,
              usePath: o = !1,
              useRc: s = !0,
            } = {}
          ) {
            const c = (function () {
              const e = {};
              for (let [t, r] of Object.entries(process.env))
                (t = t.toLowerCase()),
                  t.startsWith("yarn_") &&
                    ((t = a()(t.slice("yarn_".length))), (e[t] = r));
              return e;
            })();
            delete c.rcFilename;
            const g = await $.findRcFiles(e),
              l = await $.findHomeRcFile(),
              h = ({
                ignoreCwd: e,
                yarnPath: t,
                ignorePath: r,
                lockfileFilename: n,
              }) => ({
                ignoreCwd: e,
                yarnPath: t,
                ignorePath: r,
                lockfileFilename: n,
              }),
              f = ({
                ignoreCwd: e,
                yarnPath: t,
                ignorePath: r,
                lockfileFilename: n,
                ...i
              }) => i,
              p = new $(e);
            p.importSettings(h(q)),
              p.useWithSource("<environment>", h(c), e, { strict: !1 });
            for (const { path: e, cwd: t, data: r } of g)
              p.useWithSource(e, h(r), t, { strict: !1 });
            if (
              (l && p.useWithSource(l.path, h(l.data), l.cwd, { strict: !1 }),
              o)
            ) {
              const e = p.get("yarnPath"),
                t = p.get("ignorePath");
              if (null !== e && !t) return p;
            }
            const C = p.get("lockfileFilename");
            let d;
            switch (r) {
              case Z.LOCKFILE:
                d = await $.findProjectCwd(e, C);
                break;
              case Z.MANIFEST:
                d = await $.findProjectCwd(e, null);
                break;
              case Z.NONE:
                d = A.xfs.existsSync(i.y1.join(e, "package.json"))
                  ? i.y1.resolve(e)
                  : null;
            }
            (p.startingCwd = e), (p.projectCwd = d), p.importSettings(f(q));
            const I = new Map([["@@core", m]]);
            if (null !== t) {
              for (const e of t.plugins.keys())
                I.set(e, (E = t.modules.get(e)).__esModule ? E.default : E);
              const r = new Map();
              for (const e of new Set(
                K().builtinModules || Object.keys(process.binding("natives"))
              ))
                r.set(e, () => x(e));
              for (const [e, n] of t.modules) r.set(e, () => n);
              const n = new Set(),
                A = (e) => e.default || e,
                o = (e, t) => {
                  const { factory: o, name: s } = x(i.cS.fromPortablePath(e));
                  if (n.has(s)) return;
                  const a = new Map(r),
                    c = (e) => {
                      if (a.has(e)) return a.get(e)();
                      throw new u.UsageError(
                        `This plugin cannot access the package referenced via ${e} which is neither a builtin, nor an exposed entry`
                      );
                    },
                    g = R.prettifySyncErrors(
                      () => A(o(c)),
                      (e) => `${e} (when initializing ${s}, defined in ${t})`
                    );
                  r.set(s, () => g), n.add(s), I.set(s, g);
                };
              if (c.plugins)
                for (const t of c.plugins.split(";")) {
                  o(i.y1.resolve(e, i.cS.toPortablePath(t)), "<environment>");
                }
              for (const { path: e, cwd: t, data: r } of g)
                if (s && Array.isArray(r.plugins))
                  for (const n of r.plugins) {
                    const r = "string" != typeof n ? n.path : n;
                    o(i.y1.resolve(t, i.cS.toPortablePath(r)), e);
                  }
            }
            var E;
            for (const [e, t] of I) p.activatePlugin(e, t);
            p.useWithSource("<environment>", f(c), e, { strict: n });
            for (const { path: e, cwd: t, data: r } of g)
              p.useWithSource(e, f(r), t, { strict: n });
            return (
              l && p.useWithSource(l.path, f(l.data), l.cwd, { strict: !1 }),
              p.get("enableGlobalCache") &&
                (p.values.set("cacheFolder", p.get("globalFolder") + "/cache"),
                p.sources.set("cacheFolder", "<internal>")),
              await p.refreshPackageExtensions(),
              p
            );
          }
          static async findRcFiles(e) {
            const t = X(),
              r = [];
            let n = e,
              s = null;
            for (; n !== s; ) {
              s = n;
              const e = i.y1.join(s, t);
              if (A.xfs.existsSync(e)) {
                }