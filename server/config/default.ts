export default {
  port: 1337,
  origin: "http://localhost:3000",
  dbUri: "mongodb://localhost:27017/rest-api-typescript",
  saltWorkFactor: 10,
  accessTokenTtl: "15min",
  refreshTokenTtl: "1y",
  publicKey: `-----BEGIN PUBLIC KEY-----
MIGeMA0GCSqGSIb3DQEBAQUAA4GMADCBiAKBgGKbidGr7VsKqF9cEcDGoMwkG71w
eHGRdHxgKeLz4VSyzYdeSDbSPYE3DO2h/zj/tQqaC/3AZzCOcrfRTEDF7oWHGOUK
D/B2oY9Jw4m6u73+nQHg9W0UPrOcPuwYXn/sW5bmhn5cHkFSR535iT41huiK7b8p
wkzky47yP3e9cqzFAgMBAAE=
-----END PUBLIC KEY-----`,
  privateKey: `-----BEGIN RSA PRIVATE KEY-----
MIICXAIBAAKBgGKbidGr7VsKqF9cEcDGoMwkG71weHGRdHxgKeLz4VSyzYdeSDbS
PYE3DO2h/zj/tQqaC/3AZzCOcrfRTEDF7oWHGOUKD/B2oY9Jw4m6u73+nQHg9W0U
PrOcPuwYXn/sW5bmhn5cHkFSR535iT41huiK7b8pwkzky47yP3e9cqzFAgMBAAEC
gYAthZ6PVC6kW/w04b00YL403+qKfxSrYToEfSR5KJt6zXzCpIzz+gT41SA7yBCa
ELpUZZ9pitxYdzqQj6gDMx0UpdBK2LbcYQ5z41Z1ct2n/rPsOa3v6mSl5n8hFO2G
BxFP5UrjQbPLshWRpfO1C1OCZMcQwnP64PklQ7XinlnzoQJBALR+SYqVC/4gsX4i
3LB4HbzVXpgomJpFuNgxj8sNYyUYzGHTuIU1Es2/ohoFs4I0pjMMACr4hbEEG3zn
PrXgBGkCQQCL28wIVl9J7uYoNZ+8axUuoeI08Jdh3HqiKfsJoP854oAjLrGpmX0g
DuLsqOyh79jLECksUj2wE7hcYdcyXan9AkEAkoZPB1y2Lqi1zpNYmz33zjtdHqMe
N2dQhtm9RPbqPMxj5yrsid8rE7J1UzC7qIE7Rwd//2JfjfOqqPxFUXq5uQJAATfy
CCSQgfll4fXNpXudXKGmceWivASKwPzypfvUHXH+wc+3Vo3yzCO1EHDMVwDa97H1
WeCBjxYs5gkoMdUlFQJBAJiGSH8EPoPvGR80c8EFvyFxGuRfOTbP6mQ/qGuh0Icv
odUqt+RAKA0H94lUXYKDd5X32Lg8UQr0m7b0xzRis8E=
-----END RSA PRIVATE KEY-----`,
};
