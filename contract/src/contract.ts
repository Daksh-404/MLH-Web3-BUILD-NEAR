import {
  NearBindgen,
  near,
  call,
  view,
  LookupMap,
  UnorderedSet,
  UnorderedMap,
} from "near-sdk-js";

let chat_structure = {
  "_version": "1.2",
  "project": {
      "_id": "6495a7edcfac400006242147",
      "name": "EzyNFT",
      "teamID": "0NjXABdQnq",
      "devVersion": "649ff8744804770007b1ae29",
      "platform": "webchat",
      "type": "chat",
      "platformData": {
          "invocationName": "template project general"
      },
      "members": [],
      "linkType": "STRAIGHT",
      "image": "",
      "customThemes": [],
      "apiPrivacy": "public",
      "aiAssistSettings": {
          "aiPlayground": true
      },
      "_version": 1.2,
      "updatedAt": "2023-07-01T10:18:52.750Z",
      "creatorID": 145492,
      "updatedBy": 145492,
      "privacy": "private",
      "prototype": {
          "nlp": {
              "appID": "a30fae02-1315-41bf-8bf9-8ea815f55bab",
              "resourceID": "nakemphf:https://westus.api.cognitive.microsoft.com/",
              "type": "LUIS"
          },
          "lastTrainedTime": 1687799509610,
          "trainedModel": {
              "intents": [
                  {
                      "key": "VF.STOP",
                      "name": "VF.STOP",
                      "inputs": [
                          {
                              "text": "stop"
                          }
                      ],
                      "slots": []
                  },
                  {
                      "key": "pdn53hmq",
                      "name": "ipfs.Storage",
                      "inputs": [
                          {
                              "text": "ipfs.Storage"
                          }
                      ],
                      "slots": []
                  },
                  {
                      "key": "bn4ky32av",
                      "name": "mint a NFT",
                      "inputs": [
                          {
                              "text": "Mint a NFT",
                              "slots": []
                          },
                          {
                              "text": "Start the minting process",
                              "slots": []
                          },
                          {
                              "text": "Generate a new NFT",
                              "slots": []
                          },
                          {
                              "text": "Create a new NFT",
                              "slots": []
                          },
                          {
                              "text": "Craft a NFT",
                              "slots": []
                          },
                          {
                              "text": "Create an NFT",
                              "slots": []
                          },
                          {
                              "text": "Start minting an NFT",
                              "slots": []
                          },
                          {
                              "text": "Add a new NFT",
                              "slots": []
                          },
                          {
                              "text": "Make a new NFT",
                              "slots": []
                          },
                          {
                              "text": "Produce a new NFT",
                              "slots": []
                          }
                      ],
                      "slots": []
                  },
                  {
                      "key": "VF.START_OVER",
                      "name": "VF.START_OVER",
                      "inputs": [
                          {
                              "text": "start over"
                          },
                          {
                              "text": "restart"
                          }
                      ],
                      "slots": []
                  },
                  {
                      "key": "8r11e3htz",
                      "name": "nft.Storage",
                      "inputs": [
                          {
                              "text": "nft.Storage"
                          }
                      ],
                      "slots": []
                  },
                  {
                      "key": "capture_name_nkcnflhl",
                      "name": "capture_name_nkcnflhl",
                      "inputs": [],
                      "slots": [
                          {
                              "id": "6215832rg",
                              "required": true,
                              "dialog": {
                                  "prompt": [],
                                  "confirm": [],
                                  "utterances": [
                                      {
                                          "text": "{{[name].6215832rg}}",
                                          "slots": [
                                              "6215832rg"
                                          ]
                                      }
                                  ],
                                  "confirmEnabled": false
                              }
                          }
                      ]
                  }
              ],
              "slots": [
                  {
                      "key": "6215832rg",
                      "name": "name",
                      "type": {
                          "value": "VF.NAME"
                      },
                      "color": "#616769",
                      "inputs": []
                  }
              ]
          }
      },
      "liveVersion": "649ff928e70a190007b2ad59",
      "createdAt": "2023-06-23T14:10:53.000Z"
  },
  "version": {
      "_id": "6495a7edcfac400006242148",
      "variables": [
          "sessions",
          "user_id",
          "timestamp",
          "platform",
          "locale",
          "appName",
          "nftWalletAddress",
          "addressIsValid",
          "nftImageURL",
          "nftChain",
          "nftName",
          "nftDescription",
          "transactionHash",
          "blockExplorer",
          "transactionID",
          "transactionDetails",
          "ipfs_cid",
          "response",
          "first_ipfs",
          "second_ipfs",
          "third_ipfs",
          "ipfs_count",
          "imagePrompt",
          "firstImage",
          "secondImage",
          "verbwire_ipfs",
          "verbwire_ipfsUrl",
          "gpt_utterance"
      ],
      "platformData": {
          "slots": [
              {
                  "key": "6215832rg",
                  "name": "name",
                  "type": {
                      "value": "VF.NAME"
                  },
                  "color": "#616769",
                  "inputs": []
              }
          ],
          "intents": [
              {
                  "key": "VF.YES",
                  "name": "VF.YES",
                  "inputs": [],
                  "slots": []
              },
              {
                  "key": "VF.NO",
                  "name": "VF.NO",
                  "inputs": [],
                  "slots": []
              },
              {
                  "key": "VF.STOP",
                  "name": "VF.STOP",
                  "inputs": [],
                  "slots": []
              },
              {
                  "key": "pdn53hmq",
                  "name": "ipfs.Storage",
                  "inputs": [],
                  "slots": []
              },
              {
                  "key": "bn4ky32av",
                  "name": "mint a NFT",
                  "inputs": [
                      {
                          "text": "Mint a NFT",
                          "slots": []
                      },
                      {
                          "text": "Start the minting process",
                          "slots": []
                      },
                      {
                          "text": "Generate a new NFT",
                          "slots": []
                      },
                      {
                          "text": "Create a new NFT",
                          "slots": []
                      },
                      {
                          "text": "Craft a NFT",
                          "slots": []
                      },
                      {
                          "text": "Create an NFT",
                          "slots": []
                      },
                      {
                          "text": "Start minting an NFT",
                          "slots": []
                      },
                      {
                          "text": "Add a new NFT",
                          "slots": []
                      },
                      {
                          "text": "Make a new NFT",
                          "slots": []
                      },
                      {
                          "text": "Produce a new NFT",
                          "slots": []
                      }
                  ],
                  "slots": []
              },
              {
                  "key": "VF.START_OVER",
                  "name": "VF.START_OVER",
                  "inputs": [],
                  "slots": []
              },
              {
                  "key": "8r11e3htz",
                  "name": "nft.Storage",
                  "inputs": [],
                  "slots": []
              },
              {
                  "key": "va7h33hpa",
                  "name": "seeNFT",
                  "inputs": [],
                  "slots": []
              }
          ],
          "settings": {
              "restart": true,
              "repeat": 100,
              "locales": [
                  "en-US"
              ]
          },
          "publishing": {
              "avatar": "https://cdn.voiceflow.com/assets/logo.png",
              "color": "#2E7FF1",
              "description": "Our virtual assistant is here to help you mint NFTs and more.",
              "feedback": false,
              "image": "https://cdn.voiceflow.com/assets/logo.png",
              "persistence": "memory",
              "position": "right",
              "spacing": {
                  "side": 100,
                  "bottom": 24
              },
              "title": "EzyNFT",
              "watermark": true,
              "launcher": "https://cm4-production-assets.s3.amazonaws.com/1688205240088-chat2.jpeg"
          },
          "platform": "webchat"
      },
      "_version": 4.03,
      "name": "Initial Version",
      "projectID": "6495a7edcfac400006242147",
      "manualSave": false,
      "autoSaveFromRestore": false,
      "topics": [
          {
              "sourceID": "6495a7edcfac400006242149",
              "type": "DIAGRAM"
          }
      ],
      "components": [],
      "rootDiagramID": "6495a7edcfac400006242149",
      "domains": [
          {
              "id": "cla06iyr900b206pkh8d4ap8n",
              "name": "Home",
              "live": true,
              "topicIDs": [
                  "6495a7edcfac400006242149",
                  "6495e613693d0200073ccccf"
              ],
              "rootDiagramID": "6495a7edcfac400006242149",
              "updatedAt": "2023-06-27T19:36:43.222Z",
              "updatedBy": 145492
          }
      ],
      "canvasTemplates": [
          {
              "id": "sg9zy34i0",
              "name": "Basic Conversation Path",
              "color": "#5b9fd7",
              "nodeIDs": [
                  "643872d482cf9d2273b905df",
                  "643872d482cf9d2273b905e1",
                  "643872d482cf9d2273b905e3"
              ]
          },
          {
              "id": "5bgq3341p",
              "name": "Save Information",
              "color": "#000000",
              "nodeIDs": [
                  "6438784f82cf9d2273b90dd4",
                  "6438784f82cf9d2273b90dd6",
                  "6438784f82cf9d2273b90dd8",
                  "6438784f82cf9d2273b90dda"
              ]
          },
          {
              "id": "byav33785",
              "name": "API Call Example",
              "color": null,
              "nodeIDs": [
                  "645d718f83103cca7a3cecc1",
                  "645d718f83103cca7a3cecc3",
                  "645d718f83103cca7a3cecc5",
                  "645d718f83103cca7a3cecc7"
              ]
          }
      ],
      "creatorID": 145492,
      "prototype": {
          "type": "chat",
          "data": {
              "name": "EzyNFT",
              "locales": [
                  "en-US"
              ]
          },
          "model": {
              "intents": [
                  {
                      "key": "pdn53hmq",
                      "name": "ipfs.Storage",
                      "inputs": [
                          {
                              "text": "ipfs.Storage"
                          }
                      ],
                      "slots": []
                  },
                  {
                      "key": "bn4ky32av",
                      "name": "mint a NFT",
                      "inputs": [
                          {
                              "text": "Mint a NFT",
                              "slots": []
                          },
                          {
                              "text": "Start the minting process",
                              "slots": []
                          },
                          {
                              "text": "Generate a new NFT",
                              "slots": []
                          },
                          {
                              "text": "Create a new NFT",
                              "slots": []
                          },
                          {
                              "text": "Craft a NFT",
                              "slots": []
                          },
                          {
                              "text": "Create an NFT",
                              "slots": []
                          },
                          {
                              "text": "Start minting an NFT",
                              "slots": []
                          },
                          {
                              "text": "Add a new NFT",
                              "slots": []
                          },
                          {
                              "text": "Make a new NFT",
                              "slots": []
                          },
                          {
                              "text": "Produce a new NFT",
                              "slots": []
                          }
                      ],
                      "slots": []
                  },
                  {
                      "key": "VF.START_OVER",
                      "name": "VF.START_OVER",
                      "inputs": [
                          {
                              "text": "start over"
                          },
                          {
                              "text": "restart"
                          }
                      ],
                      "slots": []
                  },
                  {
                      "key": "capture_name_nkcnflhl",
                      "name": "capture_name_nkcnflhl",
                      "inputs": [],
                      "slots": [
                          {
                              "id": "6215832rg",
                              "required": true,
                              "dialog": {
                                  "prompt": [],
                                  "confirm": [],
                                  "utterances": [
                                      {
                                          "text": "{{[name].6215832rg}}",
                                          "slots": [
                                              "6215832rg"
                                          ]
                                      }
                                  ],
                                  "confirmEnabled": false
                              }
                          }
                      ]
                  }
              ],
              "slots": [
                  {
                      "key": "6215832rg",
                      "name": "name",
                      "type": {
                          "value": "VF.NAME"
                      },
                      "color": "#616769",
                      "inputs": []
                  }
              ]
          },
          "context": {
              "stack": [
                  {
                      "programID": "6495a7edcfac400006242149",
                      "storage": {},
                      "variables": {}
                  }
              ],
              "variables": {}
          },
          "surveyorContext": {
              "slotsMap": {
                  "6215832rg": {
                      "key": "6215832rg",
                      "name": "name",
                      "type": {
                          "value": "VF.NAME"
                      },
                      "color": "#616769",
                      "inputs": []
                  }
              },
              "extraSlots": [],
              "extraIntents": [
                  {
                      "key": "capture_name_nkcnflhl",
                      "name": "capture_name_nkcnflhl",
                      "inputs": [],
                      "slots": [
                          {
                              "id": "6215832rg",
                              "required": true,
                              "dialog": {
                                  "prompt": [],
                                  "confirm": [],
                                  "utterances": [
                                      {
                                          "text": "{{[name].6215832rg}}",
                                          "slots": [
                                              "6215832rg"
                                          ]
                                      }
                                  ],
                                  "confirmEnabled": false
                              }
                          }
                      ]
                  }
              ],
              "usedIntentsSet": [
                  "bn4ky32av",
                  "capture_name_nkcnflhl",
                  "VF.START_OVER",
                  "pdn53hmq"
              ],
              "platform": "webchat",
              "goToIntentsSet": [],
              "products": {},
              "interfaces": [],
              "permissions": [],
              "usedEventsSet": []
          },
          "settings": {},
          "platform": "webchat"
      },
      "templateDiagramID": "6495a7edcfac40000624214a"
  },
  "diagrams": {
      "6495a7edcfac400006242149": {
          "_id": "6495a7edcfac400006242149",
          "offsetX": 660.3784532606145,
          "offsetY": 781.3489202677721,
          "zoom": 100,
          "variables": [],
          "name": "ROOT",
          "versionID": "6495a7edcfac400006242148",
          "creatorID": 145492,
          "modified": 1687442607,
          "intentStepIDs": [],
          "type": "TOPIC",
          "menuNodeIDs": [],
          "menuItems": [
              {
                  "type": "NODE",
                  "sourceID": "start00000000000000000000"
              },
              {
                  "type": "NODE",
                  "sourceID": "6499c3a008e3f221576bbab1"
              }
          ],
          "nodes": {
              "start00000000000000000000": {
                  "nodeID": "start00000000000000000000",
                  "type": "start",
                  "coords": [
                      -1016.6342175489899,
                      17.901462651997747
                  ],
                  "data": {
                      "name": "Start",
                      "color": "#56b365",
                      "steps": [],
                      "portsV2": {
                          "byKey": {},
                          "builtIn": {
                              "next": {
                                  "type": "next",
                                  "target": "6495f22aeed13f9c47b87ec6",
                                  "id": "6032afcf359e8c14c06c0319",
                                  "data": {
                                      "points": [
                                          {
                                              "point": [
                                                  -952,
                                                  39.9
                                              ]
                                          },
                                          {
                                              "point": [
                                                  -897.44,
                                                  39.9
                                              ]
                                          },
                                          {
                                              "point": [
                                                  -897.44,
                                                  105.89
                                              ]
                                          },
                                          {
                                              "point": [
                                                  -842.89,
                                                  105.89
                                              ],
                                              "allowedToTop": true
                                          }
                                      ]
                                  }
                              }
                          },
                          "dynamic": []
                      },
                      "label": "Start"
                  }
              },
              "646187c35b0afc227e84c8da": {
                  "type": "block",
                  "data": {
                      "name": "AI response output",
                      "color": "#A1ADBA",
                      "steps": [
                          "646187c35b0afc227e84c8e2"
                      ]
                  },
                  "nodeID": "646187c35b0afc227e84c8da",
                  "coords": [
                      2276.6494113954304,
                      1718.4484248127962
                  ]
              },
              "646187c35b0afc227e84c8dc": {
                  "type": "block",
                  "data": {
                      "name": "Blockchain Queries",
                      "color": "",
                      "steps": [
                          "6495a104d3f8f64a027fff68",
                          "64959f4ed3f8f64a027fff5f",
                          "646187c35b0afc227e84c8ec"
                      ]
                  },
                  "nodeID": "646187c35b0afc227e84c8dc",
                  "coords": [
                      1603.9325254362057,
                      1437.0592973385687
                  ]
              },
              "646187c35b0afc227e84c8de": {
                  "type": "block",
                  "data": {
                      "name": "End Conversation",
                      "color": "",
                      "steps": [
                          "646187c35b0afc227e84c8f0",
                          "646187c35b0afc227e84c8f3"
                      ]
                  },
                  "nodeID": "646187c35b0afc227e84c8de",
                  "coords": [
                      -165.02401801249613,
                      807.9635721562661
                  ]
              },
              "646187c35b0afc227e84c8e0": {
                  "type": "block",
                  "data": {
                      "name": "Welcome",
                      "color": "",
                      "steps": [
                          "646187c35b0afc227e84c8f8",
                          "646187c35b0afc227e84c8fb"
                      ]
                  },
                  "nodeID": "646187c35b0afc227e84c8e0",
                  "coords": [
                      901.0570508656522,
                      919.2540195872955
                  ]
              },
              "646187c35b0afc227e84c8e2": {
                  "type": "generative",
                  "data": {
                      "name": "Response AI",
                      "prompt": "Greet {{[name].6215832rg}}! Based on the {{[name].6215832rg}}'s question, respond with two brief sentences in a simple, step-by-step instruction on how to accomplish the task {{[gpt_utterance].gpt_utterance}}",
                      "system": "You are a helpful assistant",
                      "maxTokens": 128,
                      "model": "gpt-4",
                      "temperature": 0.7,
                      "mode": "memory_prompt",
                      "portsV2": {
                          "byKey": {},
                          "builtIn": {
                              "next": {
                                  "type": "next",
                                  "target": "646187c35b0afc227e84c8e0",
                                  "id": "646187c35b0afc227e84c8e3",
                                  "data": {}
                              }
                          },
                          "dynamic": []
                      }
                  },
                  "nodeID": "646187c35b0afc227e84c8e2"
              },
              "646187c35b0afc227e84c8ec": {
                  "type": "captureV2",
                  "data": {
                      "name": "Capture",
                      "intentScope": "GLOBAL",
                      "capture": {
                          "type": "query",
                          "variable": "gpt_utterance"
                      },
                      "portsV2": {
                          "byKey": {},
                          "builtIn": {
                              "next": {
                                  "type": "next",
                                  "target": "646187c35b0afc227e84c8da",
                                  "id": "646187c35b0afc227e84c8ed",
                                  "data": {
                                      "points": [
                                          {
                                              "point": [
                                                  1769.93,
                                                  1671.56
                                              ]
                                          },
                                          {
                                              "point": [
                                                  1940.79,
                                                  1671.56
                                              ]
                                          },
                                          {
                                              "point": [
                                                  1940.79,
                                                  1745.45
                                              ]
                                          },
                                          {
                                              "point": [
                                                  2111.65,
                                                  1745.45
                                              ],
                                              "allowedToTop": true
                                          }
                                      ]
                                  }
                              },
                              "else": {
                                  "type": "else",
                                  "target": null,
                                  "id": "646187c35b0afc227e84c8ee"
                              }
                          },
                          "dynamic": []
                      }
                  },
                  "nodeID": "646187c35b0afc227e84c8ec",
                  "coords": [
                      0,
                      0
                  ]
              },
              "646187c35b0afc227e84c8f0": {
                  "type": "text",
                  "data": {
                      "name": "Text",
                      "texts": [
                          {
                              "id": "0t13737ot",
                              "content": [
                                  {
                                      "children": [
                                          {
                                              "text": "Goodbye!"
                                          }
                                      ]
                                  }
                              ]
                          }
                      ],
                      "canvasVisibility": "preview",
                      "portsV2": {
                          "byKey": {},
                          "builtIn": {
                              "next": {
                                  "type": "next",
                                  "target": "646187c35b0afc227e84c8f3",
                                  "id": "646187c35b0afc227e84c8f1"
                              }
                          },
                          "dynamic": []
                      }
                  },
                  "nodeID": "646187c35b0afc227e84c8f0"
              },
              "646187c35b0afc227e84c8f3": {
                  "type": "exit",
                  "data": {
                      "name": "",
                      "portsV2": {
                          "byKey": {},
                          "builtIn": {},
                          "dynamic": []
                      }
                  },
                  "nodeID": "646187c35b0afc227e84c8f3"
              },
              "646187c35b0afc227e84c8f8": {
                  "type": "text",
                  "data": {
                      "name": "Text",
                      "texts": [
                          {
                              "id": "73r23sar",
                              "content": [
                                  {
                                      "children": [
                                          {
                                              "text": " Ask me a question or click the button below! 👇🏻"
                                          }
                                      ]
                                  }
                              ]
                          }
                      ],
                      "canvasVisibility": "preview",
                      "portsV2": {
                          "byKey": {},
                          "builtIn": {
                              "next": {
                                  "type": "next",
                                  "target": "646187c35b0afc227e84c8fb",
                                  "id": "646187c35b0afc227e84c8f9"
                              }
                          },
                          "dynamic": []
                      }
                  },
                  "nodeID": "646187c35b0afc227e84c8f8"
              },
              "646187c35b0afc227e84c8fb": {
                  "type": "buttons",
                  "data": {
                      "name": "Buttons",
                      "buttons": [
                          {
                              "id": "3bk837y0",
                              "name": "Mint a NFT",
                              "actions": [],
                              "intent": "bn4ky32av"
                          },
                          {
                              "id": "9t79j3h61",
                              "name": "See my NFTs",
                              "actions": []
                          },
                          {
                              "id": "a411i3hbr",
                              "name": "Store a File on IPFS",
                              "actions": []
                          },
                          {
                              "id": "j51263h2q",
                              "name": "Update stored wallet address",
                              "actions": []
                          },
                          {
                              "id": "o01473he5",
                              "name": "I have queries",
                              "actions": [],
                              "intent": null
                          },
                          {
                              "id": "tlvu37wz",
                              "name": "End the conversation!",
                              "actions": [],
                              "intent": null
                          }
                      ],
                      "intentScope": "GLOBAL",
                      "portsV2": {
                          "byKey": {},
                          "builtIn": {
                              "else": {
                                  "type": "else",
                                  "target": null,
                                  "id": "646187c35b0afc227e84c8fc"
                              }
                          },
                          "dynamic": [
                              {
                                  "type": "",
                                  "target": "649947b70ef0dae3b414b0bf",
                                  "id": "646187c35b0afc227e84c8fd",
                                  "data": {
                                      "points": [
                                          {
                                              "point": [
                                                  1067.06,
                                                  1093.25
                                              ]
                                          },
                                          {
                                              "point": [
                                                  1463.97,
                                                  1093.25
                                              ]
                                          },
                                          {
                                              "point": [
                                                  1463.97,
                                                  83.08
                                              ]
                                          },
                                          {
                                              "point": [
                                                  1860.88,
                                                  83.08
                                              ],
                                              "allowedToTop": false
                                          }
                                      ]
                                  }
                              },
                              {
                                  "id": "649b38a465b4982080fd70c3",
                                  "type": "",
                                  "target": null
                              },
                              {
                                  "id": "6494aab127b63e875e1cea1b",
                                  "type": "",
                                  "target": "6495e60316ecab5cf526c8bf",
                                  "data": {}
                              },
                              {
                                  "id": "6494aad327b63e875e1cea1d",
                                  "type": "",
                                  "target": "6495f5b5eed13f9c47b87f48",
                                  "data": {
                                      "points": [
                                          {
                                              "point": [
                                                  735.06,
                                                  1213.5
                                              ],
                                              "reversed": true
                                          },
                                          {
                                              "point": [
                                                  575.33,
                                                  1213.5
                                              ]
                                          },
                                          {
                                              "point": [
                                                  575.33,
                                                  219.94
                                              ]
                                          },
                                          {
                                              "point": [
                                                  415.6,
                                                  219.94
                                              ],
                                              "reversed": true,
                                              "allowedToTop": false
                                          }
                                      ]
                                  }
                              },
                              {
                                  "id": "6494ab1727b63e875e1cea1f",
                                  "type": "",
                                  "target": "646187c35b0afc227e84c8dc",
                                  "data": {
                                      "points": [
                                          {
                                              "point": [
                                                  1067.06,
                                                  1268
                                              ]
                                          },
                                          {
                                              "point": [
                                                  1252.99,
                                                  1268
                                              ]
                                          },
                                          {
                                              "point": [
                                                  1252.99,
                                                  1464.06
                                              ]
                                          },
                                          {
                                              "point": [
                                                  1438.93,
                                                  1464.06
                                              ],
                                              "allowedToTop": true
                                          }
                                      ]
                                  }
                              },
                              {
                                  "type": "",
                                  "target": "646187c35b0afc227e84c8de",
                                  "id": "646187c35b0afc227e84c8fe",
                                  "data": {
                                      "points": [
                                          {
                                              "point": [
                                                  735.06,
                                                  1333.75
                                              ],
                                              "reversed": true
                                          },
                                          {
                                              "point": [
                                                  367.52,
                                                  1333.75
                                              ]
                                          },
                                          {
                                              "point": [
                                                  367.52,
                                                  834.96
                                              ]
                                          },
                                          {
                                              "point": [
                                                  -0.02,
                                                  834.96
                                              ],
                                              "reversed": true,
                                              "allowedToTop": true
                                          }
                                      ]
                                  }
                              }
                          ]
                      }
                  },
                  "nodeID": "646187c35b0afc227e84c8fb",
                  "coords": [
                      0,
                      0
                  ]
              },
              "64959f4ed3f8f64a027fff5f": {
                  "type": "generative",
                  "data": {
                      "name": "Response AI",
                      "mode": "prompt",
                      "prompt": "",
                      "system": "You are an FAQ AI chat assistant expert in Blockchain. Information will be provided to help answer the user's questions. Always summarize your response to be as brief as possible and be extremely concise. Your responses should be fewer than a couple of sentences.",
                      "maxTokens": 128,
                      "model": "gpt-4",
                      "temperature": 0.1,
                      "portsV2": {
                          "byKey": {},
                          "builtIn": {
                              "next": {
                                  "type": "next",
                                  "target": null,
                                  "id": "64959f4ed3f8f64a027fff60"
                              }
                          },
                          "dynamic": []
                      },
                      "source": "default"
                  },
                  "nodeID": "64959f4ed3f8f64a027fff5f"
              },
              "6495a104d3f8f64a027fff68": {
                  "type": "text",
                  "data": {
                      "name": "Text",
                      "texts": [
                          {
                              "id": "qw18e3hft",
                              "content": [
                                  {
                                      "children": [
                                          {
                                              "text": "Ask me anything related to Blockchain & Minting an NFT!"
                                          }
                                      ]
                                  }
                              ]
                          }
                      ],
                      "canvasVisibility": "preview",
                      "portsV2": {
                          "byKey": {},
                          "builtIn": {
                              "next": {
                                  "type": "next",
                                  "target": null,
                                  "id": "6495a104d3f8f64a027fff69"
                              }
                          },
                          "dynamic": []
                      }
                  },
                  "nodeID": "6495a104d3f8f64a027fff68"
              },
              "6495e60316ecab5cf526c8be": {
                  "type": "goTo",
                  "data": {
                      "name": "",
                      "intent": "pdn53hmq",
                      "diagramID": "6495e613693d0200073ccccf",
                      "portsV2": {
                          "byKey": {},
                          "builtIn": {},
                          "dynamic": []
                      }
                  },
                  "nodeID": "6495e60316ecab5cf526c8be"
              },
              "6495e60316ecab5cf526c8bf": {
                  "type": "actions",
                  "data": {
                      "name": "",
                      "steps": [
                          "6495e60316ecab5cf526c8be"
                      ]
                  },
                  "nodeID": "6495e60316ecab5cf526c8bf",
                  "coords": [
                      0,
                      0
                  ]
              },
              "6495eed9eed13f9c47b87e9e": {
                  "type": "text",
                  "data": {
                      "name": "Text",
                      "texts": [
                          {
                              "id": "yz21932ia",
                              "content": [
                                  {
                                      "children": [
                                          {
                                              "text": ""
                                          },
                                          {
                                              "id": "appName",
                                              "name": "appName",
                                              "isSlot": false,
                                              "type": "variable",
                                              "children": [
                                                  {
                                                      "text": ""
                                                  }
                                              ]
                                          },
                                          {
                                              "text": " can help you immortalize your uniqueness! "
                                          },
                                          {
                                              "text": " 😁😁",
                                              "strikeThrough": false
                                          }
                                      ]
                                  }
                              ]
                          }
                      ],
                      "canvasVisibility": "preview",
                      "portsV2": {
                          "byKey": {},
                          "builtIn": {
                              "next": {
                                  "type": "next",
                                  "target": null,
                                  "id": "6495eed9eed13f9c47b87e9f"
                              }
                          },
                          "dynamic": []
                      }
                  },
                  "nodeID": "6495eed9eed13f9c47b87e9e",
                  "coords": [
                      0,
                      0
                  ]
              },
              "6495eed9eed13f9c47b87ea0": {
                  "type": "block",
                  "data": {
                      "name": "Introduction",
                      "steps": [
                          "6495eed9eed13f9c47b87e9e",
                          "6495ef46eed13f9c47b87eac",
                          "6495ef36eed13f9c47b87ea6"
                      ],
                      "color": ""
                  },
                  "nodeID": "6495eed9eed13f9c47b87ea0",
                  "coords": [
                      -189.83056174900958,
                      10.319321263532917
                  ]
              },
              "6495ef46eed13f9c47b87eac": {
                  "type": "text",
                  "data": {
                      "name": "Text",
                      "texts": [
                          {
                              "id": "5026432ko",
                              "content": [
                                  {
                                      "children": [
                                          {
                                              "text": "Can I know your name, please?"
                                          }
                                      ]
                                  }
                              ]
                          }
                      ],
                      "canvasVisibility": "preview",
                      "portsV2": {
                          "byKey": {},
                          "builtIn": {
                              "next": {
                                  "type": "next",
                                  "target": null,
                                  "id": "6495ef46eed13f9c47b87ead"
                              }
                          },
                          "dynamic": []
                      }
                  },
                  "nodeID": "6495ef46eed13f9c47b87eac",
                  "coords": [
                      0,
                      0
                  ]
              },
              "6495f22aeed13f9c47b87ec4": {
                  "type": "setV2",
                  "data": {
                      "name": "",
                      "sets": [
                          {
                              "type": "advance",
                              "variable": "appName",
                              "expression": "\"MintChat\""
                          }
                      ],
                      "title": "Set App Name",
                      "portsV2": {
                          "byKey": {},
                          "builtIn": {
                              "next": {
                                  "type": "next",
                                  "target": "6495eed9eed13f9c47b87e9e",
                                  "id": "6495f22aeed13f9c47b87ec5",
                                  "data": {
                                      "points": [
                                          {
                                              "point": [
                                                  -511.89,
                                                  158.64
                                              ]
                                          },
                                          {
                                              "point": [
                                                  -433.86,
                                                  158.64
                                              ]
                                          },
                                          {
                                              "point": [
                                                  -433.86,
                                                  89.82
                                              ]
                                          },
                                          {
                                              "point": [
                                                  -355.83,
                                                  89.82
                                              ],
                                              "allowedToTop": false
                                          }
                                      ]
                                  }
                              }
                          },
                          "dynamic": []
                      }
                  },
                  "nodeID": "6495f22aeed13f9c47b87ec4"
              },
              "6495f22aeed13f9c47b87ec6": {
                  "type": "block",
                  "data": {
                      "name": "Setting app name",
                      "steps": [
                          "6495f22aeed13f9c47b87ec4"
                      ],
                      "color": ""
                  },
                  "nodeID": "6495f22aeed13f9c47b87ec6",
                  "coords": [
                      -677.8886013082606,
                      78.89097610903356
                  ]
              },
              "6495ef36eed13f9c47b87ea6": {
                  "type": "captureV2",
                  "data": {
                      "name": "Capture",
                      "intentScope": "GLOBAL",
                      "capture": {
                          "type": "intent",
                          "intent": {
                              "key": "",
                              "name": "",
                              "inputs": [],
                              "slots": [
                                  {
                                      "id": "6215832rg",
                                      "dialog": {
                                          "prompt": [],
                                          "confirm": [],
                                          "utterances": [],
                                          "confirmEnabled": false
                                      },
                                      "required": false
                                  }
                              ]
                          }
                      },
                      "noMatch": {
                          "types": [
                              "reprompt"
                          ],
                          "pathName": "No match",
                          "randomize": false,
                          "reprompts": [
                              {
                                  "id": "clj8yxf3w03jd3h824iqcn8ns",
                                  "content": [
                                      {
                                          "children": [
                                              {
                                                  "text": ""
                                              }
                                          ]
                                      }
                                  ]
                              }
                          ]
                      },
                      "portsV2": {
                          "byKey": {},
                          "builtIn": {
                              "next": {
                                  "type": "",
                                  "target": "6495f5b5eed13f9c47b87f4a",
                                  "id": "6495ef36eed13f9c47b87ea7",
                                  "data": {
                                      "points": [
                                          {
                                              "point": [
                                                  -23.83,
                                                  233.57
                                              ]
                                          },
                                          {
                                              "point": [
                                                  30.38,
                                                  233.57
                                              ]
                                          },
                                          {
                                              "point": [
                                                  30.38,
                                                  167.44
                                              ]
                                          },
                                          {
                                              "point": [
                                                  84.6,
                                                  167.44
                                              ],
                                              "allowedToTop": true
                                          }
                                      ]
                                  }
                              },
                              "else": {
                                  "type": "",
                                  "target": null,
                                  "id": "6495ef36eed13f9c47b87ea8"
                              }
                          },
                          "dynamic": []
                      }
                  },
                  "nodeID": "6495ef36eed13f9c47b87ea6",
                  "coords": [
                      0,
                      0
                  ]
              },
              "6495f5b5eed13f9c47b87f48": {
                  "type": "text",
                  "data": {
                      "name": "Text",
                      "texts": [
                          {
                              "id": "y34lg327d",
                              "content": [
                                  {
                                      "children": [
                                          {
                                              "text": "Hola "
                                          },
                                          {
                                              "id": "6215832rg",
                                              "name": "name",
                                              "isSlot": true,
                                              "type": "variable",
                                              "children": [
                                                  {
                                                      "text": ""
                                                  }
                                              ]
                                          },
                                          {
                                              "text": "! Can you provide your wallet Address? ("
                                          },
                                          {
                                              "text": "e.g. mho4jHBcrNCncKt38trJahXakuaBnS7LK5)",
                                              "underline": false
                                          },
                                          {
                                              "text": " "
                                          }
                                      ]
                                  }
                              ]
                          }
                      ],
                      "canvasVisibility": "preview",
                      "portsV2": {
                          "byKey": {},
                          "builtIn": {
                              "next": {
                                  "type": "next",
                                  "target": null,
                                  "id": "6495f5b5eed13f9c47b87f49"
                              }
                          },
                          "dynamic": []
                      }
                  },
                  "nodeID": "6495f5b5eed13f9c47b87f48"
              },
              "6495f5b5eed13f9c47b87f4a": {
                  "type": "block",
                  "data": {
                      "name": "Requiring wallet address",
                      "steps": [
                          "6495f5b5eed13f9c47b87f48",
                          "6498317254141f91a50c8bdb"
                      ],
                      "color": ""
                  },
                  "nodeID": "6495f5b5eed13f9c47b87f4a",
                  "coords": [
                      249.59879875535788,
                      140.4396522659904
                  ]
              },
              "6498317254141f91a50c8bdb": {
                  "type": "captureV2",
                  "data": {
                      "name": "Capture",
                      "intentScope": "GLOBAL",
                      "capture": {
                          "type": "query",
                          "variable": "nftWalletAddress"
                      },
                      "portsV2": {
                          "byKey": {},
                          "builtIn": {
                              "next": {
                                  "type": "next",
                                  "target": "64993b6e0ef0dae3b414afc0",
                                  "id": "6498317254141f91a50c8bdc",
                                  "data": {
                                      "points": [
                                          {
                                              "point": [
                                                  415.6,
                                                  359.44
                                              ]
                                          },
                                          {
                                              "point": [
                                                  591.83,
                                                  359.44
                                              ]
                                          },
                                          {
                                              "point": [
                                                  591.83,
                                                  111.67
                                              ]
                                          },
                                          {
                                              "point": [
                                                  768.06,
                                                  111.67
                                              ],
                                              "allowedToTop": true
                                          }
                                      ]
                                  }
                              },
                              "else": {
                                  "type": "else",
                                  "target": null,
                                  "id": "6498317254141f91a50c8bdd"
                              }
                          },
                          "dynamic": []
                      }
                  },
                  "nodeID": "6498317254141f91a50c8bdb",
                  "coords": [
                      0,
                      0
                  ]
              },
              "64993b6e0ef0dae3b414afbe": {
                  "type": "block",
                  "data": {
                      "name": "API Request Failed",
                      "color": "#5b9fd7",
                      "steps": [
                          "64993b6e0ef0dae3b414afc6"
                      ]
                  },
                  "nodeID": "64993b6e0ef0dae3b414afbe",
                  "coords": [
                      834.5810976911703,
                      433.12575860884533
                  ]
              },
              "64993b6e0ef0dae3b414afc0": {
                  "type": "block",
                  "data": {
                      "name": "Validating Wallet Address",
                      "color": "#5b9fd7",
                      "steps": [
                          "64993b6e0ef0dae3b414afc9"
                      ]
                  },
                  "nodeID": "64993b6e0ef0dae3b414afc0",
                  "coords": [
                      933.062389871577,
                      84.67389907282688
                  ]
              },
              "64993b6e0ef0dae3b414afc4": {
                  "type": "block",
                  "data": {
                      "name": "API Successfully Called",
                      "color": "#5b9fd7",
                      "steps": [
                          "649941050ef0dae3b414aff9"
                      ]
                  },
                  "nodeID": "64993b6e0ef0dae3b414afc4",
                  "coords": [
                      921.000343677212,
                      -182.2884402513247
                  ]
              },
              "64993b6e0ef0dae3b414afc6": {
                  "type": "text",
                  "data": {
                      "name": "Text",
                      "texts": [
                          {
                              "id": "u08yz372g",
                              "content": [
                                  {
                                      "children": [
                                          {
                                              "text": "Unable to reach the server. Please try again!"
                                          }
                                      ]
                                  }
                              ]
                          }
                      ],
                      "canvasVisibility": "preview",
                      "portsV2": {
                          "byKey": {},
                          "builtIn": {
                              "next": {
                                  "type": "next",
                                  "target": "6495f5b5eed13f9c47b87f48",
                                  "id": "64993b6e0ef0dae3b414afc7",
                                  "data": {
                                      "points": [
                                          {
                                              "point": [
                                                  668.58,
                                                  524.13
                                              ],
                                              "reversed": true
                                          },
                                          {
                                              "point": [
                                                  542.09,
                                                  524.13
                                              ]
                                          },
                                          {
                                              "point": [
                                                  542.09,
                                                  219.94
                                              ]
                                          },
                                          {
                                              "point": [
                                                  415.6,
                                                  219.94
                                              ],
                                              "reversed": true,
                                              "allowedToTop": false
                                          }
                                      ]
                                  }
                              }
                          },
                          "dynamic": []
                      }
                  },
                  "nodeID": "64993b6e0ef0dae3b414afc6"
              },
              "64993b6e0ef0dae3b414afc9": {
                  "type": "api",
                  "data": {
                      "name": "",
                      "url": "https://rest.cryptoapis.io/blockchain-tools/bitcoin/testnet/addresses/validate?context=yourExampleString",
                      "body": [
                          {
                              "key": "",
                              "val": ""
                          }
                      ],
                      "params": [],
                      "method": "POST",
                      "headers": [
                          {
                              "key": "Content-Type",
                              "val": "application/json"
                          },
                          {
                              "key": "X-API-Key",
                              "val": "0226b1b7f76e5e4638ca9d78dfb9c801c0c4a8c6"
                          }
                      ],
                      "content": "{\r\n    \"context\": \"yourExampleString\",\r\n    \"data\": {\r\n        \"item\": {\r\n            \"address\": \"{nftWalletAddress}\"\r\n        }\r\n    }\r\n}",
                      "mappings": [
                          {
                              "path": "response.data.item.isValid",
                              "var": "addressIsValid"
                          }
                      ],
                      "bodyType": "rawInput",
                      "selectedAction": "Make a POST Request",
                      "selectedIntegration": "Custom API",
                      "portsV2": {
                          "byKey": {},
                          "builtIn": {
                              "next": {
                                  "type": "next",
                                  "target": "64993b6e0ef0dae3b414afc4",
                                  "id": "64993b6e0ef0dae3b414afcb",
                                  "data": {
                                      "points": [
                                          {
                                              "point": [
                                                  767.06,
                                                  257.92
                                              ],
                                              "reversed": true
                                          },
                                          {
                                              "point": [
                                                  732,
                                                  257.92
                                              ]
                                          },
                                          {
                                              "point": [
                                                  732,
                                                  -155.29
                                              ]
                                          },
                                          {
                                              "point": [
                                                  756,
                                                  -155.29
                                              ],
                                              "allowedToTop": true
                                          }
                                      ]
                                  }
                              },
                              "fail": {
                                  "type": "fail",
                                  "target": "64993b6e0ef0dae3b414afc6",
                                  "id": "64993b6e0ef0dae3b414afca",
                                  "data": {
                                      "points": [
                                          {
                                              "point": [
                                                  767.06,
                                                  312.42
                                              ],
                                              "reversed": true
                                          },
                                          {
                                              "point": [
                                                  644.58,
                                                  312.42
                                              ]
                                          },
                                          {
                                              "point": [
                                                  644.58,
                                                  512.63
                                              ]
                                          },
                                          {
                                              "point": [
                                                  668.58,
                                                  512.63
                                              ],
                                              "allowedToTop": false
                                          }
                                      ]
                                  }
                              }
                          },
                          "dynamic": []
                      }
                  },
                  "nodeID": "64993b6e0ef0dae3b414afc9"
              },
              "649941050ef0dae3b414aff9": {
                  "type": "ifV2",
                  "data": {
                      "name": "If",
                      "expressions": [
                          {
                              "type": null,
                              "name": "Confirming the validity of wallet address",
                              "value": [
                                  {
                                      "logicInterface": "variable",
                                      "type": "contains",
                                      "value": [
                                          {
                                              "type": "variable",
                                              "value": "nftWalletAddress"
                                          },
                                          {
                                              "type": "value",
                                              "value": "0x"
                                          }
                                      ]
                                  }
                              ]
                          }
                      ],
                      "noMatch": {
                          "type": "path",
                          "pathName": "Else"
                      },
                      "portsV2": {
                          "byKey": {},
                          "builtIn": {
                              "else": {
                                  "id": "649945930ef0dae3b414b01a",
                                  "type": "else",
                                  "target": "649945a40ef0dae3b414b01c",
                                  "data": {
                                      "points": [
                                          {
                                              "point": [
                                                  755,
                                                  -25.54
                                              ],
                                              "reversed": true
                                          },
                                          {
                                              "point": [
                                                  639.02,
                                                  -25.54
                                              ]
                                          },
                                          {
                                              "point": [
                                                  639.02,
                                                  -70.17
                                              ]
                                          },
                                          {
                                              "point": [
                                                  523.03,
                                                  -70.17
                                              ],
                                              "reversed": true,
                                              "allowedToTop": false
                                          }
                                      ]
                                  }
                              }
                          },
                          "dynamic": [
                              {
                                  "type": "",
                                  "target": "649943730ef0dae3b414b00b",
                                  "id": "649941050ef0dae3b414affa",
                                  "data": {
                                      "points": [
                                          {
                                              "point": [
                                                  1087,
                                                  -91.29
                                              ]
                                          },
                                          {
                                              "point": [
                                                  1134.02,
                                                  -91.29
                                              ]
                                          },
                                          {
                                              "point": [
                                                  1134.02,
                                                  -25.1
                                              ]
                                          },
                                          {
                                              "point": [
                                                  1181.03,
                                                  -25.1
                                              ],
                                              "allowedToTop": false
                                          }
                                      ]
                                  }
                              }
                          ]
                      }
                  },
                  "nodeID": "649941050ef0dae3b414aff9"
              },
              "649943730ef0dae3b414b00b": {
                  "type": "text",
                  "data": {
                      "name": "Text",
                      "texts": [
                          {
                              "id": "yz1zn3lxf",
                              "content": [
                                  {
                                      "children": [
                                          {
                                              "text": "Yay! Your wallet ("
                                          },
                                          {
                                              "id": "nftWalletAddress",
                                              "name": "nftWalletAddress",
                                              "isSlot": false,
                                              "type": "variable",
                                              "children": [
                                                  {
                                                      "text": ""
                                                  }
                                              ]
                                          },
                                          {
                                              "text": ") has been successfully connected!"
                                          }
                                      ]
                                  }
                              ]
                          }
                      ],
                      "canvasVisibility": "preview",
                      "portsV2": {
                          "byKey": {},
                          "builtIn": {
                              "next": {
                                  "type": "next",
                                  "target": "646187c35b0afc227e84c8fb",
                                  "id": "649943730ef0dae3b414b00c",
                                  "data": {
                                      "points": [
                                          {
                                              "point": [
                                                  1181.03,
                                                  -2.35
                                              ],
                                              "reversed": true
                                          },
                                          {
                                              "point": [
                                                  1124.05,
                                                  -2.35
                                              ]
                                          },
                                          {
                                              "point": [
                                                  1124.05,
                                                  1081.75
                                              ]
                                          },
                                          {
                                              "point": [
                                                  1067.06,
                                                  1081.75
                                              ],
                                              "reversed": true,
                                              "allowedToTop": false
                                          }
                                      ]
                                  }
                              }
                          },
                          "dynamic": []
                      }
                  },
                  "nodeID": "649943730ef0dae3b414b00b"
              },
              "649943730ef0dae3b414b00d": {
                  "type": "block",
                  "data": {
                      "name": "Wallet Connected",
                      "steps": [
                          "649943730ef0dae3b414b00b"
                      ],
                      "color": ""
                  },
                  "nodeID": "649943730ef0dae3b414b00d",
                  "coords": [
                      1347.0328941583466,
                      -104.60322221389765
                  ]
              },
              "649945a40ef0dae3b414b01c": {
                  "type": "text",
                  "data": {
                      "name": "Text",
                      "texts": [
                          {
                              "id": "cp34k3l3x",
                              "content": [
                                  {
                                      "children": [
                                          {
                                              "text": "Your wallet address ("
                                          },
                                          {
                                              "id": "nftWalletAddress",
                                              "name": "nftWalletAddress",
                                              "isSlot": false,
                                              "type": "variable",
                                              "children": [
                                                  {
                                                      "text": ""
                                                  }
                                              ]
                                          },
                                          {
                                              "text": ")  is "
                                          },
                                          {
                                              "text": "invalid",
                                              "fontWeight": "700"
                                          },
                                          {
                                              "text": ". Please try again! Make sure it's in the correct format."
                                          }
                                      ]
                                  }
                              ]
                          }
                      ],
                      "canvasVisibility": "preview",
                      "portsV2": {
                          "byKey": {},
                          "builtIn": {
                              "next": {
                                  "type": "next",
                                  "target": "6495f5b5eed13f9c47b87f4a",
                                  "id": "649945a40ef0dae3b414b01d",
                                  "data": {
                                      "points": [
                                          {
                                              "point": [
                                                  191.03,
                                                  -36.17
                                              ],
                                              "reversed": true
                                          },
                                          {
                                              "point": [
                                                  167.03,
                                                  -36.17
                                              ]
                                          },
                                          {
                                              "point": [
                                                  167.03,
                                                  60.83
                                              ]
                                          },
                                          {
                                              "point": [
                                                  249.6,
                                                  60.83
                                              ]
                                          },
                                          {
                                              "point": [
                                                  249.6,
                                                  140.44
                                              ],
                                              "toTop": true,
                                              "allowedToTop": true
                                          }
                                      ]
                                  }
                              }
                          },
                          "dynamic": []
                      }
                  },
                  "nodeID": "649945a40ef0dae3b414b01c"
              },
              "649945a40ef0dae3b414b01e": {
                  "type": "block",
                  "data": {
                      "name": "Wallet Address Invalid",
                      "steps": [
                          "649945a40ef0dae3b414b01c"
                      ],
                      "color": ""
                  },
                  "nodeID": "649945a40ef0dae3b414b01e",
                  "coords": [
                      357.0328941583466,
                      -149.66572221389765
                  ]
              },
              "649947b70ef0dae3b414b0bf": {
                  "type": "text",
                  "data": {
                      "name": "Text",
                      "texts": [
                          {
                              "id": "o23ol3l2w",
                              "content": [
                                  {
                                      "children": [
                                          {
                                              "text": "Do already have the image or do you want to generate one?"
                                          }
                                      ]
                                  }
                              ]
                          }
                      ],
                      "canvasVisibility": "preview",
                      "portsV2": {
                          "byKey": {},
                          "builtIn": {
                              "next": {
                                  "type": "next",
                                  "target": null,
                                  "id": "649947b70ef0dae3b414b0c0"
                              }
                          },
                          "dynamic": []
                      }
                  },
                  "nodeID": "649947b70ef0dae3b414b0bf"
              },
              "649947b70ef0dae3b414b0c1": {
                  "type": "block",
                  "data": {
                      "name": "Image Choice",
                      "steps": [
                          "649947b70ef0dae3b414b0bf",
                          "649948030ef0dae3b414b0c8"
                      ],
                      "color": ""
                  },
                  "nodeID": "649947b70ef0dae3b414b0c1",
                  "coords": [
                      2026.88140745101,
                      3.583674005120315
                  ]
              },
              "649948030ef0dae3b414b0c8": {
                  "type": "buttons",
                  "data": {
                      "name": "Buttons",
                      "buttons": [
                          {
                              "id": "iw3rt3lj9",
                              "name": "I have the image URL",
                              "actions": []
                          },
                          {
                              "id": "yb3t43lpy",
                              "name": "Generate an image using AI cause I am cool!",
                              "actions": []
                          }
                      ],
                      "intentScope": "GLOBAL",
                      "portsV2": {
                          "byKey": {},
                          "builtIn": {
                              "else": {
                                  "type": "else",
                                  "target": null,
                                  "id": "649948030ef0dae3b414b0ca"
                              }
                          },
                          "dynamic": [
                              {
                                  "type": "",
                                  "target": "64994ada0ef0dae3b414b0d2",
                                  "id": "649948030ef0dae3b414b0c9",
                                  "data": {
                                      "points": [
                                          {
                                              "point": [
                                                  2192.88,
                                                  166.33
                                              ]
                                          },
                                          {
                                              "point": [
                                                  2216.88,
                                                  166.33
                                              ]
                                          },
                                          {
                                              "point": [
                                                  2216.88,
                                                  -48.74
                                              ]
                                          },
                                          {
                                              "point": [
                                                  2047,
                                                  -48.74
                                              ]
                                          },
                                          {
                                              "point": [
                                                  2047,
                                                  -263.81
                                              ]
                                          },
                                          {
                                              "point": [
                                                  2071,
                                                  -263.81
                                              ],
                                              "allowedToTop": false
                                          }
                                      ]
                                  }
                              },
                              {
                                  "id": "6499491e0ef0dae3b414b0d0",
                                  "type": "",
                                  "target": "6499eb5808e3f221576bbe45",
                                  "data": {
                                      "points": [
                                          {
                                              "point": [
                                                  1860.88,
                                                  232.08
                                              ],
                                              "reversed": true
                                          },
                                          {
                                              "point": [
                                                  1752.2,
                                                  232.08
                                              ]
                                          },
                                          {
                                              "point": [
                                                  1752.2,
                                                  -832.05
                                              ]
                                          },
                                          {
                                              "point": [
                                                  1776.2,
                                                  -832.05
                                              ],
                                              "allowedToTop": false
                                          }
                                      ]
                                  }
                              }
                          ]
                      }
                  },
                  "nodeID": "649948030ef0dae3b414b0c8"
              },
              "64994ada0ef0dae3b414b0d2": {
                  "type": "text",
                  "data": {
                      "name": "Text",
                      "texts": [
                          {
                              "id": "343vv3li7",
                              "content": [
                                  {
                                      "children": [
                                          {
                                              "text": "Enter your "
                                          },
                                          {
                                              "text": "image's URL (URLs must end in \".gif\", \".png\", \".jpg\", or \".jpeg\"). ",
                                              "fontWeight": "700"
                                          },
                                          {
                                              "text": "Add \"filetype:png\" in the image URL otherwise."
                                          }
                                      ]
                                  }
                              ]
                          }
                      ],
                      "canvasVisibility": "preview",
                      "portsV2": {
                          "byKey": {},
                          "builtIn": {
                              "next": {
                                  "type": "next",
                                  "target": null,
                                  "id": "64994ada0ef0dae3b414b0d3"
                              }
                          },
                          "dynamic": []
                      }
                  },
                  "nodeID": "64994ada0ef0dae3b414b0d2"
              },
              "64994ada0ef0dae3b414b0d4": {
                  "type": "block",
                  "data": {
                      "name": "Image URL",
                      "steps": [
                          "64994ada0ef0dae3b414b0d2",
                          "64994b1e0ef0dae3b414b0db"
                      ],
                      "color": ""
                  },
                  "nodeID": "64994ada0ef0dae3b414b0d4",
                  "coords": [
                      2236.9980647202674,
                      -343.3132009948797
                  ]
              },
              "64994b1e0ef0dae3b414b0db": {
                  "type": "captureV2",
                  "data": {
                      "name": "Capture",
                      "intentScope": "GLOBAL",
                      "capture": {
                          "type": "query",
                          "variable": "nftImageURL"
                      },
                      "portsV2": {
                          "byKey": {},
                          "builtIn": {
                              "next": {
                                  "type": "next",
                                  "target": "64994efc0ef0dae3b414b106",
                                  "id": "64994b1e0ef0dae3b414b0dc",
                                  "data": {
                                      "points": [
                                          {
                                              "point": [
                                                  2403,
                                                  -124.31
                                              ]
                                          },
                                          {
                                              "point": [
                                                  2447.55,
                                                  -124.31
                                              ]
                                          },
                                          {
                                              "point": [
                                                  2447.55,
                                                  -271.16
                                              ]
                                          },
                                          {
                                              "point": [
                                                  2492.11,
                                                  -271.16
                                              ],
                                              "allowedToTop": false
                                          }
                                      ]
                                  }
                              },
                              "else": {
                                  "type": "else",
                                  "target": null,
                                  "id": "64994b1e0ef0dae3b414b0dd"
                              }
                          },
                          "dynamic": []
                      }
                  },
                  "nodeID": "64994b1e0ef0dae3b414b0db"
              },
              "64994c120ef0dae3b414b0e6": {
                  "type": "text",
                  "data": {
                      "name": "Text",
                      "texts": [
                          {
                              "id": "fl43v3lhl",
                              "content": [
                                  {
                                      "children": [
                                          {
                                              "text": "What chain do you want to mint on? (We support: ethereum, arbitrum, polygon, optimism, avalanche, fantom, goerli, bsc-testnet, arbitrum-goerli, mumbai, optimism-goerli, fuji, fantom-testnet)"
                                          }
                                      ]
                                  }
                              ]
                          }
                      ],
                      "canvasVisibility": "preview",
                      "portsV2": {
                          "byKey": {},
                          "builtIn": {
                              "next": {
                                  "type": "next",
                                  "target": null,
                                  "id": "64994c120ef0dae3b414b0e7"
                              }
                          },
                          "dynamic": []
                      }
                  },
                  "nodeID": "64994c120ef0dae3b414b0e6"
              },
              "64994c120ef0dae3b414b0e8": {
                  "type": "block",
                  "data": {
                      "name": "Chain Choice",
                      "steps": [
                          "64994c120ef0dae3b414b0e6",
                          "64994c7c0ef0dae3b414b0ef"
                      ],
                      "color": ""
                  },
                  "nodeID": "64994c120ef0dae3b414b0e8",
                  "coords": [
                      3701.858572605829,
                      -274.23871319110583
                  ]
              },
              "64994c7c0ef0dae3b414b0ef": {
                  "type": "buttons",
                  "data": {
                      "name": "Buttons",
                      "buttons": [
                          {
                              "id": "nc4693lgy",
                              "name": "Polygon-Mumbai",
                              "actions": []
                          },
                          {
                              "id": "cb2ev32q0",
                              "name": "Goerli",
                              "actions": []
                          },
                          {
                              "id": "s536x326u",
                              "name": "Ethereum",
                              "actions": []
                          },
                          {
                              "id": "vw3an3251",
                              "name": "Arbitrum-Goerli",
                              "actions": []
                          },
                          {
                              "id": "l83aw32aq",
                              "name": "Fantom-goerli",
                              "actions": []
                          },
                          {
                              "id": "dh3b432s7",
                              "name": "Optimism-Goerli",
                              "actions": []
                          },
                          {
                              "id": "we3w732vh",
                              "name": "Arbitrum",
                              "actions": []
                          },
                          {
                              "id": "wp3wf32n4",
                              "name": "Polygon",
                              "actions": []
                          },
                          {
                              "id": "9n3wn32a2",
                              "name": "Optimism",
                              "actions": []
                          },
                          {
                              "id": "uj3wv32hz",
                              "name": "Avalanche",
                              "actions": []
                          },
                          {
                              "id": "o63x332r8",
                              "name": "Fantom",
                              "actions": []
                          },
                          {
                              "id": "4b3xb32ew",
                              "name": "Bsc-Testnet",
                              "actions": []
                          },
                          {
                              "id": "tb3xj323e",
                              "name": "Fuji",
                              "actions": []
                          }
                      ],
                      "intentScope": "GLOBAL",
                      "portsV2": {
                          "byKey": {},
                          "builtIn": {
                              "else": {
                                  "type": "else",
                                  "target": null,
                                  "id": "64994c7c0ef0dae3b414b0f1"
                              }
                          },
                          "dynamic": [
                              {
                                  "type": "",
                                  "target": "64994c9a0ef0dae3b414b0f6",
                                  "id": "64994c7c0ef0dae3b414b0f0",
                                  "data": {}
                              },
                              {
                                  "id": "6499c9dc08e3f221576bbb1f",
                                  "type": "",
                                  "target": "6499c9e708e3f221576bbb22",
                                  "data": {}
                              },
                              {
                                  "id": "6499d96508e3f221576bbc59",
                                  "type": "",
                                  "target": "6499d9ac08e3f221576bbc5c",
                                  "data": {}
                              },
                              {
                                  "id": "6499d9e808e3f221576bbc66",
                                  "type": "",
                                  "target": "6499da0e08e3f221576bbc6d",
                                  "data": {}
                              },
                              {
                                  "id": "6499d9e908e3f221576bbc68",
                                  "type": "",
                                  "target": "6499da2f08e3f221576bbc75",
                                  "data": {}
                              },
                              {
                                  "id": "6499d9ea08e3f221576bbc6a",
                                  "type": "",
                                  "target": "6499da5d08e3f221576bbc7d",
                                  "data": {}
                              },
                              {
                                  "id": "6499e59b08e3f221576bbc88",
                                  "type": "",
                                  "target": "6499e5af08e3f221576bbc99",
                                  "data": {}
                              },
                              {
                                  "id": "6499e59c08e3f221576bbc8a",
                                  "type": "",
                                  "target": "6499e5c808e3f221576bbca1",
                                  "data": {}
                              },
                              {
                                  "id": "6499e59d08e3f221576bbc8c",
                                  "type": "",
                                  "target": "6499e5ed08e3f221576bbca9",
                                  "data": {}
                              },
                              {
                                  "id": "6499e59d08e3f221576bbc8e",
                                  "type": "",
                                  "target": "6499e60308e3f221576bbcb1",
                                  "data": {}
                              },
                              {
                                  "id": "6499e59e08e3f221576bbc90",
                                  "type": "",
                                  "target": "6499e64a08e3f221576bbcb9",
                                  "data": {}
                              },
                              {
                                  "id": "6499e59f08e3f221576bbc92",
                                  "type": "",
                                  "target": "6499e66208e3f221576bbcc1",
                                  "data": {}
                              },
                              {
                                  "id": "6499e5a008e3f221576bbc94",
                                  "type": "",
                                  "target": "6499e6a608e3f221576bbcc9",
                                  "data": {}
                              }
                          ]
                      }
                  },
                  "nodeID": "64994c7c0ef0dae3b414b0ef"
              },
              "64994c9a0ef0dae3b414b0f5": {
                  "type": "setV2",
                  "data": {
                      "name": "",
                      "sets": [
                          {
                              "type": "advance",
                              "variable": "nftChain",
                              "expression": "\"mumbai\""
                          }
                      ],
                      "title": "",
                      "portsV2": {
                          "byKey": {},
                          "builtIn": {
                              "next": {
                                  "type": "next",
                                  "target": "64994ce30ef0dae3b414b0ff",
                                  "id": "64994c9a0ef0dae3b414b0f7",
                                  "data": {
                                      "points": [
                                          {
                                              "point": [
                                                  3289.17,
                                                  -60.72
                                              ],
                                              "reversed": true
                                          },
                                          {
                                              "point": [
                                                  3212.97,
                                                  -60.72
                                              ]
                                          },
                                          {
                                              "point": [
                                                  3212.97,
                                                  710.22
                                              ],
                                              "toTop": true,
                                              "allowedToTop": true
                                          }
                                      ]
                                  }
                              }
                          },
                          "dynamic": []
                      }
                  },
                  "nodeID": "64994c9a0ef0dae3b414b0f5"
              },
              "64994c9a0ef0dae3b414b0f6": {
                  "type": "actions",
                  "data": {
                      "name": "",
                      "steps": [
                          "64994c9a0ef0dae3b414b0f5"
                      ]
                  },
                  "nodeID": "64994c9a0ef0dae3b414b0f6",
                  "coords": [
                      0,
                      0
                  ]
              },
              "64994ce30ef0dae3b414b0fd": {
                  "type": "text",
                  "data": {
                      "name": "Text",
                      "texts": [
                          {
                              "id": "1l4bd3lik",
                              "content": [
                                  {
                                      "children": [
                                          {
                                              "text": "Creating a new NFT with:"
                                          }
                                      ]
                                  },
                                  {
                                      "children": [
                                          {
                                              "text": "Name: "
                                          },
                                          {
                                              "id": "nftName",
                                              "name": "nftName",
                                              "isSlot": false,
                                              "type": "variable",
                                              "children": [
                                                  {
                                                      "text": ""
                                                  }
                                              ]
                                          },
                                          {
                                              "text": " "
                                          }
                                      ]
                                  },
                                  {
                                      "children": [
                                          {
                                              "text": "Description: "
                                          },
                                          {
                                              "id": "nftDescription",
                                              "name": "nftDescription",
                                              "isSlot": false,
                                              "type": "variable",
                                              "children": [
                                                  {
                                                      "text": ""
                                                  }
                                              ]
                                          },
                                          {
                                              "text": " "
                                          }
                                      ]
                                  },
                                  {
                                      "children": [
                                          {
                                              "text": "Image: "
                                          },
                                          {
                                              "id": "nftImageURL",
                                              "name": "nftImageURL",
                                              "isSlot": false,
                                              "type": "variable",
                                              "children": [
                                                  {
                                                      "text": ""
                                                  }
                                              ]
                                          },
                                          {
                                              "text": " "
                                          }
                                      ]
                                  },
                                  {
                                      "children": [
                                          {
                                              "text": "Wallet Address: "
                                          },
                                          {
                                              "id": "nftWalletAddress",
                                              "name": "nftWalletAddress",
                                              "isSlot": false,
                                              "type": "variable",
                                              "children": [
                                                  {
                                                      "text": ""
                                                  }
                                              ]
                                          },
                                          {
                                              "text": " "
                                          }
                                      ]
                                  }
                              ]
                          }
                      ],
                      "canvasVisibility": "preview",
                      "portsV2": {
                          "byKey": {},
                          "builtIn": {
                              "next": {
                                  "type": "next",
                                  "target": null,
                                  "id": "64994ce30ef0dae3b414b0fe"
                              }
                          },
                          "dynamic": []
                      }
                  },
                  "nodeID": "64994ce30ef0dae3b414b0fd"
              },
              "64994ce30ef0dae3b414b0ff": {
                  "type": "block",
                  "data": {
                      "name": "Creating NFT",
                      "steps": [
                          "64994ce30ef0dae3b414b0fd",
                          "6499c29b08e3f221576bba99"
                      ],
                      "color": ""
                  },
                  "nodeID": "64994ce30ef0dae3b414b0ff",
                  "coords": [
                      3212.9657154629713,
                      710.2162318638397
                  ]
              },
              "64994efc0ef0dae3b414b106": {
                  "type": "text",
                  "data": {
                      "name": "Text",
                      "texts": [
                          {
                              "id": "e94em3la6",
                              "content": [
                                  {
                                      "children": [
                                          {
                                              "text": "Enter "
                                          },
                                          {
                                              "text": "NFT's Name",
                                              "fontWeight": "700"
                                          }
                                      ]
                                  }
                              ]
                          }
                      ],
                      "canvasVisibility": "preview",
                      "portsV2": {
                          "byKey": {},
                          "builtIn": {
                              "next": {
                                  "type": "next",
                                  "target": null,
                                  "id": "64994efc0ef0dae3b414b107",
                                  "data": {}
                              }
                          },
                          "dynamic": []
                      }
                  },
                  "nodeID": "64994efc0ef0dae3b414b106"
              },
              "64994efc0ef0dae3b414b108": {
                  "type": "block",
                  "data": {
                      "name": "NFT's Name",
                      "steps": [
                          "64994efc0ef0dae3b414b106",
                          "649950000ef0dae3b414b119"
                      ],
                      "color": ""
                  },
                  "nodeID": "64994efc0ef0dae3b414b108",
                  "coords": [
                      2658.108572605829,
                      -350.656982421875
                  ]
              },
              "64994f1a0ef0dae3b414b10f": {
                  "type": "text",
                  "data": {
                      "name": "Text",
                      "texts": [
                          {
                              "id": "q14g43l2m",
                              "content": [
                                  {
                                      "children": [
                                          {
                                              "text": "Enter "
                                          },
                                          {
                                              "text": "NFT's Description",
                                              "fontWeight": "700"
                                          }
                                      ]
                                  }
                              ]
                          }
                      ],
                      "canvasVisibility": "preview",
                      "portsV2": {
                          "byKey": {},
                          "builtIn": {
                              "next": {
                                  "type": "next",
                                  "target": null,
                                  "id": "64994f1a0ef0dae3b414b110",
                                  "data": {}
                              }
                          },
                          "dynamic": []
                      }
                  },
                  "nodeID": "64994f1a0ef0dae3b414b10f"
              },
              "64994f1a0ef0dae3b414b111": {
                  "type": "block",
                  "data": {
                      "name": "NFT's Description",
                      "steps": [
                          "64994f1a0ef0dae3b414b10f",
                          "649950220ef0dae3b414b11f"
                      ],
                      "color": ""
                  },
                  "nodeID": "64994f1a0ef0dae3b414b111",
                  "coords": [
                      3219.069906381461,
                      -293.3493664081279
                  ]
              },
              "649950000ef0dae3b414b119": {
                  "type": "captureV2",
                  "data": {
                      "name": "Capture",
                      "intentScope": "GLOBAL",
                      "capture": {
                          "type": "query",
                          "variable": "nftName"
                      },
                      "portsV2": {
                          "byKey": {},
                          "builtIn": {
                              "next": {
                                  "type": "next",
                                  "target": "64994f1a0ef0dae3b414b111",
                                  "id": "649950000ef0dae3b414b11a",
                                  "data": {
                                      "points": [
                                          {
                                              "point": [
                                                  2824.11,
                                                  -199.16
                                              ]
                                          },
                                          {
                                              "point": [
                                                  2939.09,
                                                  -199.16
                                              ]
                                          },
                                          {
                                              "point": [
                                                  2939.09,
                                                  -266.35
                                              ]
                                          },
                                          {
                                              "point": [
                                                  3054.07,
                                                  -266.35
                                              ],
                                              "allowedToTop": true
                                          }
                                      ]
                                  }
                              },
                              "else": {
                                  "type": "else",
                                  "target": null,
                                  "id": "649950000ef0dae3b414b11b"
                              }
                          },
                          "dynamic": []
                      }
                  },
                  "nodeID": "649950000ef0dae3b414b119"
              },
              "649950220ef0dae3b414b11f": {
                  "type": "captureV2",
                  "data": {
                      "name": "Capture",
                      "intentScope": "GLOBAL",
                      "capture": {
                          "type": "query",
                          "variable": "nftDescription"
                      },
                      "portsV2": {
                          "byKey": {},
                          "builtIn": {
                              "next": {
                                  "type": "next",
                                  "target": "64994c120ef0dae3b414b0e8",
                                  "id": "649950220ef0dae3b414b120",
                                  "data": {
                                      "points": [
                                          {
                                              "point": [
                                                  3385.07,
                                                  -141.85
                                              ]
                                          },
                                          {
                                              "point": [
                                                  3460.96,
                                                  -141.85
                                              ]
                                          },
                                          {
                                              "point": [
                                                  3460.96,
                                                  -247.24
                                              ]
                                          },
                                          {
                                              "point": [
                                                  3536.86,
                                                  -247.24
                                              ],
                                              "allowedToTop": true
                                          }
                                      ]
                                  }
                              },
                              "else": {
                                  "type": "else",
                                  "target": null,
                                  "id": "649950220ef0dae3b414b121"
                              }
                          },
                          "dynamic": []
                      }
                  },
                  "nodeID": "649950220ef0dae3b414b11f"
              },
              "6499c25408e3f221576bba85": {
                  "type": "block",
                  "data": {
                      "name": "Minting NFT",
                      "color": "",
                      "steps": [
                          "6499c25408e3f221576bba87"
                      ]
                  },
                  "nodeID": "6499c25408e3f221576bba85",
                  "coords": [
                      2582.8648399466633,
                      14.792198748807822
                  ]
              },
              "6499c25408e3f221576bba87": {
                  "type": "api",
                  "data": {
                      "name": "",
                      "url": "https://api.verbwire.com/v1/nft/mint/quickMintFromMetadata",
                      "body": [
                          {
                              "key": "chain",
                              "val": "{{[nftChain].nftChain}}"
                          },
                          {
                              "key": "name",
                              "val": "{{[nftName].nftName}}"
                          },
                          {
                              "key": "description",
                              "val": "{{[nftDescription].nftDescription}}"
                          },
                          {
                              "key": "imageUrl",
                              "val": "{{[nftImageURL].nftImageURL}}"
                          },
                          {
                              "key": "recipientAddress",
                              "val": "{{[nftWalletAddress].nftWalletAddress}}"
                          },
                          {
                              "key": "data",
                              "val": "{{[nftImageURL].nftImageURL}}"
                          }
                      ],
                      "params": [],
                      "method": "POST",
                      "headers": [
                          {
                              "key": "X-API-Key",
                              "val": "sk_live_665984d9-12cc-4126-b7b0-9190bd3ad744"
                          },
                          {
                              "key": "accept",
                              "val": "application/json"
                          },
                          {
                              "key": "content-type",
                              "val": "multipart/form-data"
                          }
                      ],
                      "content": "",
                      "mappings": [
                          {
                              "path": "transaction_details.transactionHash",
                              "var": "transactionHash"
                          },
                          {
                              "path": "transaction_details.blockExplorer",
                              "var": "blockExplorer"
                          },
                          {
                              "path": "transaction_details.transactionID",
                              "var": "transactionID"
                          },
                          {
                              "path": "transaction_details",
                              "var": "transactionDetails"
                          }
                      ],
                      "bodyType": "formData",
                      "selectedAction": "Make a POST Request",
                      "selectedIntegration": "Custom API",
                      "portsV2": {
                          "byKey": {},
                          "builtIn": {
                              "next": {
                                  "type": "next",
                                  "target": "6499c3ee08e3f221576bbab8",
                                  "id": "6499c25408e3f221576bba88",
                                  "data": {
                                      "points": [
                                          {
                                              "point": [
                                                  2416.86,
                                                  188.04
                                              ],
                                              "reversed": true
                                          },
                                          {
                                              "point": [
                                                  2388.04,
                                                  188.04
                                              ]
                                          },
                                          {
                                              "point": [
                                                  2388.04,
                                                  507.37
                                              ]
                                          },
                                          {
                                              "point": [
                                                  2359.22,
                                                  507.37
                                              ],
                                              "reversed": true,
                                              "allowedToTop": false
                                          }
                                      ]
                                  }
                              },
                              "fail": {
                                  "type": "fail",
                                  "target": "6499c2c708e3f221576bbaa0",
                                  "id": "6499c25408e3f221576bba89",
                                  "data": {
                                      "points": [
                                          {
                                              "point": [
                                                  2748.87,
                                                  242.54
                                              ]
                                          },
                                          {
                                              "point": [
                                                  2772.87,
                                                  242.54
                                              ]
                                          },
                                          {
                                              "point": [
                                                  2772.87,
                                                  407.24
                                              ]
                                          },
                                          {
                                              "point": [
                                                  2593.22,
                                                  407.24
                                              ]
                                          },
                                          {
                                              "point": [
                                                  2593.22,
                                                  571.94
                                              ],
                                              "toTop": true,
                                              "allowedToTop": true
                                          }
                                      ]
                                  }
                              }
                          },
                          "dynamic": []
                      }
                  },
                  "nodeID": "6499c25408e3f221576bba87"
              },
              "6499c29b08e3f221576bba99": {
                  "type": "visual",
                  "data": {
                      "name": "Visuals",
                      "image": "{nftImageURL}",
                      "visualType": "image",
                      "canvasVisibility": "full",
                      "portsV2": {
                          "byKey": {},
                          "builtIn": {
                              "next": {
                                  "type": "next",
                                  "target": "6499c25408e3f221576bba85",
                                  "id": "6499c29b08e3f221576bba9a",
                                  "data": {
                                      "points": [
                                          {
                                              "point": [
                                                  3046.97,
                                                  949.22
                                              ],
                                              "reversed": true
                                          },
                                          {
                                              "point": [
                                                  2897.42,
                                                  949.22
                                              ]
                                          },
                                          {
                                              "point": [
                                                  2897.42,
                                                  41.79
                                              ]
                                          },
                                          {
                                              "point": [
                                                  2747.87,
                                                  41.79
                                              ],
                                              "reversed": true,
                                              "allowedToTop": true
                                          }
                                      ]
                                  }
                              }
                          },
                          "dynamic": []
                      }
                  },
                  "nodeID": "6499c29b08e3f221576bba99"
              },
              "6499c2c708e3f221576bbaa0": {
                  "type": "block",
                  "data": {
                      "name": "Minting Process Failed",
                      "color": "",
                      "steps": [
                          "6499c2c708e3f221576bbaa4"
                      ]
                  },
                  "nodeID": "6499c2c708e3f221576bbaa0",
                  "coords": [
                      2593.221982803805,
                      571.9350558916649
                  ]
              },
              "6499c2c708e3f221576bbaa2": {
                  "type": "actions",
                  "data": {
                      "name": "",
                      "steps": [
                          "6499c2c708e3f221576bbaa6"
                      ]
                  },
                  "nodeID": "6499c2c708e3f221576bbaa2",
                  "coords": [
                      1587.5862216522892,
                      -2151.2911167576463
                  ]
              },
              "6499c2c708e3f221576bbaa4": {
                  "type": "text",
                  "data": {
                      "name": "Text",
                      "texts": [
                          {
                              "id": "bwnu36hx",
                              "content": [
                                  {
                                      "children": [
                                          {
                                              "text": "Minting has failed, please try again."
                                          }
                                      ]
                                  }
                              ]
                          }
                      ],
                      "canvasVisibility": "preview",
                      "portsV2": {
                          "byKey": {},
                          "builtIn": {
                              "next": {
                                  "type": "next",
                                  "target": "6499c2c708e3f221576bbaa2",
                                  "id": "6499c2c708e3f221576bbaa5",
                                  "data": {}
                              }
                          },
                          "dynamic": []
                      }
                  },
                  "nodeID": "6499c2c708e3f221576bbaa4"
              },
              "6499c2c708e3f221576bbaa6": {
                  "type": "goTo",
                  "data": {
                      "name": "",
                      "intent": "VF.START_OVER",
                      "diagramID": "6495a7edcfac400006242149",
                      "portsV2": {
                          "byKey": {},
                          "builtIn": {},
                          "dynamic": []
                      }
                  },
                  "nodeID": "6499c2c708e3f221576bbaa6"
              },
              "6499c3a008e3f221576bbab1": {
                  "type": "intent",
                  "data": {
                      "name": "",
                      "intent": "VF.START_OVER",
                      "mappings": [],
                      "availability": "GLOBAL",
                      "portsV2": {
                          "byKey": {},
                          "builtIn": {
                              "next": {
                                  "type": "next",
                                  "target": "646187c35b0afc227e84c8f8",
                                  "id": "6499c3a008e3f221576bbab2",
                                  "data": {
                                      "points": [
                                          {
                                              "point": [
                                                  816.78,
                                                  756.27
                                              ]
                                          },
                                          {
                                              "point": [
                                                  840.78,
                                                  756.27
                                              ]
                                          },
                                          {
                                              "point": [
                                                  840.78,
                                                  877.51
                                              ]
                                          },
                                          {
                                              "point": [
                                                  711.06,
                                                  877.51
                                              ]
                                          },
                                          {
                                              "point": [
                                                  711.06,
                                                  998.75
                                              ]
                                          },
                                          {
                                              "point": [
                                                  735.06,
                                                  998.75
                                              ],
                                              "allowedToTop": false
                                          }
                                      ]
                                  }
                              }
                          },
                          "dynamic": []
                      }
                  },
                  "nodeID": "6499c3a008e3f221576bbab1"
              },
              "6499c3a008e3f221576bbab3": {
                  "type": "block",
                  "data": {
                      "name": "",
                      "steps": [
                          "6499c3a008e3f221576bbab1"
                      ]
                  },
                  "nodeID": "6499c3a008e3f221576bbab3",
                  "coords": [
                      734.036827324339,
                      734.271962799641
                  ]
              },
              "6499c3ee08e3f221576bbab8": {
                  "type": "text",
                  "data": {
                      "name": "Text",
                      "texts": [
                          {
                              "id": "3h1kk32iv",
                              "content": [
                                  {
                                      "children": [
                                          {
                                              "text": "Mint successful! View details below:"
                                          }
                                      ]
                                  },
                                  {
                                      "children": [
                                          {
                                              "text": ""
                                          }
                                      ]
                                  },
                                  {
                                      "children": [
                                          {
                                              "text": "TransactionHash: "
                                          },
                                          {
                                              "id": "transactionHash",
                                              "name": "transactionHash",
                                              "isSlot": false,
                                              "type": "variable",
                                              "children": [
                                                  {
                                                      "text": ""
                                                  }
                                              ]
                                          },
                                          {
                                              "text": " "
                                          }
                                      ]
                                  },
                                  {
                                      "children": [
                                          {
                                              "text": "TransactionID: "
                                          },
                                          {
                                              "id": "transactionID",
                                              "name": "transactionID",
                                              "isSlot": false,
                                              "type": "variable",
                                              "children": [
                                                  {
                                                      "text": ""
                                                  }
                                              ]
                                          },
                                          {
                                              "text": " "
                                          }
                                      ]
                                  },
                                  {
                                      "children": [
                                          {
                                              "text": ""
                                          }
                                      ]
                                  },
                                  {
                                      "children": [
                                          {
                                              "text": "You can view your NFT being created using the blockExplorer URL:"
                                          }
                                      ]
                                  },
                                  {
                                      "children": [
                                          {
                                              "text": ""
                                          }
                                      ]
                                  },
                                  {
                                      "children": [
                                          {
                                              "text": " "
                                          },
                                          {
                                              "id": "blockExplorer",
                                              "name": "blockExplorer",
                                              "isSlot": false,
                                              "type": "variable",
                                              "children": [
                                                  {
                                                      "text": ""
                                                  }
                                              ]
                                          },
                                          {
                                              "text": " "
                                          }
                                      ]
                                  },
                                  {
                                      "children": [
                                          {
                                              "text": ""
                                          }
                                      ]
                                  },
                                  {
                                      "children": [
                                          {
                                              "text": "You can view your NFT using the Openseas URL: "
                                          }
                                      ]
                                  },
                                  {
                                      "children": [
                                          {
                                              "text": ""
                                          }
                                      ]
                                  },
                                  {
                                      "children": [
                                          {
                                              "text": "testnets.opensea.io/"
                                          },
                                          {
                                              "id": "nftWalletAddress",
                                              "name": "nftWalletAddress",
                                              "isSlot": false,
                                              "type": "variable",
                                              "children": [
                                                  {
                                                      "text": ""
                                                  }
                                              ]
                                          },
                                          {
                                              "text": " "
                                          }
                                      ]
                                  }
                              ]
                          }
                      ],
                      "canvasVisibility": "preview",
                      "portsV2": {
                          "byKey": {},
                          "builtIn": {
                              "next": {
                                  "type": "next",
                                  "target": "6499c4b908e3f221576bbaf7",
                                  "id": "6499c3ee08e3f221576bbab9",
                                  "data": {}
                              }
                          },
                          "dynamic": []
                      }
                  },
                  "nodeID": "6499c3ee08e3f221576bbab8"
              },
              "6499c3ee08e3f221576bbaba": {
                  "type": "block",
                  "data": {
                      "name": "Minting Process Successful",
                      "steps": [
                          "6499c3ee08e3f221576bbab8"
                      ],
                      "color": ""
                  },
                  "nodeID": "6499c3ee08e3f221576bbaba",
                  "coords": [
                      2193.221609933035,
                      427.8725062779017
                  ]
              },
              "6499c42808e3f221576bbac1": {
                  "type": "buttons",
                  "data": {
                      "name": "Buttons",
                      "buttons": [
                          {
                              "id": "0d1mh32pe",
                              "name": "Open BlockExplorer",
                              "actions": []
                          },
                          {
                              "id": "e51no32tj",
                              "name": "View Your NFTs",
                              "actions": []
                          },
                          {
                              "id": "111p33267",
                              "name": "Back to Main options",
                              "actions": []
                          }
                      ],
                      "intentScope": "GLOBAL",
                      "portsV2": {
                          "byKey": {},
                          "builtIn": {
                              "else": {
                                  "type": "else",
                                  "target": null,
                                  "id": "6499c42808e3f221576bbac3"
                              }
                          },
                          "dynamic": [
                              {
                                  "type": "",
                                  "target": "6499c44408e3f221576bbac8",
                                  "id": "6499c42808e3f221576bbac2",
                                  "data": {}
                              },
                              {
                                  "id": "6499c44c08e3f221576bbacf",
                                  "type": "",
                                  "target": "6499c46208e3f221576bbad2",
                                  "data": {}
                              },
                              {
                                  "id": "6499c47608e3f221576bbad9",
                                  "type": "",
                                  "target": "646187c35b0afc227e84c8f8",
                                  "data": {
                                      "points": [
                                          {
                                              "point": [
                                                  1930.94,
                                                  1162.09
                                              ],
                                              "reversed": true
                                          },
                                          {
                                              "point": [
                                                  1499,
                                                  1162.09
                                              ]
                                          },
                                          {
                                              "point": [
                                                  1499,
                                                  998.75
                                              ]
                                          },
                                          {
                                              "point": [
                                                  1067.06,
                                                  998.75
                                              ],
                                              "reversed": true,
                                              "allowedToTop": false
                                          }
                                      ]
                                  }
                              }
                          ]
                      }
                  },
                  "nodeID": "6499c42808e3f221576bbac1"
              },
              "6499c44408e3f221576bbac7": {
                  "type": "url",
                  "data": {
                      "name": "",
                      "url": "{{[blockExplorer].blockExplorer}}",
                      "portsV2": {
                          "byKey": {},
                          "builtIn": {
                              "next": {
                                  "type": "next",
                                  "target": "6499c4c808e3f221576bbb10",
                                  "id": "6499c44408e3f221576bbac9",
                                  "data": {
                                      "points": [
                                          {
                                              "point": [
                                                  2435.3,
                                                  1053.09
                                              ]
                                          },
                                          {
                                              "point": [
                                                  2459.3,
                                                  1053.09
                                              ]
                                          },
                                          {
                                              "point": [
                                                  2459.3,
                                                  1196.48
                                              ]
                                          },
                                          {
                                              "point": [
                                                  2339.63,
                                                  1196.48
                                              ]
                                          },
                                          {
                                              "point": [
                                                  2339.63,
                                                  1339.86
                                              ]
                                          },
                                          {
                                              "point": [
                                                  2363.63,
                                                  1339.86
                                              ],
                                              "allowedToTop": false
                                          }
                                      ]
                                  }
                              }
                          },
                          "dynamic": []
                      }
                  },
                  "nodeID": "6499c44408e3f221576bbac7"
              },
              "6499c44408e3f221576bbac8": {
                  "type": "actions",
                  "data": {
                      "name": "",
                      "steps": [
                          "6499c44408e3f221576bbac7"
                      ]
                  },
                  "nodeID": "6499c44408e3f221576bbac8",
                  "coords": [
                      0,
                      0
                  ]
              },
              "6499c46208e3f221576bbad1": {
                  "type": "url",
                  "data": {
                      "name": "",
                      "url": "testnets.opensea.io/{{[nftWalletAddress].nftWalletAddress}}",
                      "portsV2": {
                          "byKey": {},
                          "builtIn": {
                              "next": {
                                  "type": "next",
                                  "target": "6499c4c808e3f221576bbb10",
                                  "id": "6499c46208e3f221576bbad3",
                                  "data": {
                                      "points": [
                                          {
                                              "point": [
                                                  2538.94,
                                                  1107.59
                                              ]
                                          },
                                          {
                                              "point": [
                                                  2719.63,
                                                  1107.59
                                              ]
                                          },
                                          {
                                              "point": [
                                                  2719.63,
                                                  1339.86
                                              ]
                                          },
                                          {
                                              "point": [
                                                  2695.63,
                                                  1339.86
                                              ],
                                              "reversed": true,
                                              "allowedToTop": false
                                          }
                                      ]
                                  }
                              }
                          },
                          "dynamic": []
                      }
                  },
                  "nodeID": "6499c46208e3f221576bbad1"
              },
              "6499c46208e3f221576bbad2": {
                  "type": "actions",
                  "data": {
                      "name": "",
                      "steps": [
                          "6499c46208e3f221576bbad1"
                      ]
                  },
                  "nodeID": "6499c46208e3f221576bbad2",
                  "coords": [
                      0,
                      0
                  ]
              },
              "6499c4b908e3f221576bbaf7": {
                  "type": "block",
                  "data": {
                      "name": "Viewing Options",
                      "steps": [
                          "6499c42808e3f221576bbac1"
                      ],
                      "color": ""
                  },
                  "nodeID": "6499c4b908e3f221576bbaf7",
                  "coords": [
                      2096.941869199989,
                      973.3417788531526
                  ]
              },
              "6499c4c808e3f221576bbb10": {
                  "type": "text",
                  "data": {
                      "name": "Text",
                      "texts": [
                          {
                              "id": "7x1rh321d",
                              "content": [
                                  {
                                      "children": [
                                          {
                                              "text": "Congrats on your newly minted NFT! 🤩 What can I help with?"
                                          }
                                      ]
                                  }
                              ]
                          }
                      ],
                      "canvasVisibility": "preview",
                      "portsV2": {
                          "byKey": {},
                          "builtIn": {
                              "next": {
                                  "type": "next",
                                  "target": "6499c4b908e3f221576bbaf7",
                                  "id": "6499c4c808e3f221576bbb11",
                                  "data": {
                                      "points": [
                                          {
                                              "point": [
                                                  2363.63,
                                                  1351.36
                                              ],
                                              "reversed": true
                                          },
                                          {
                                              "point": [
                                                  2312.79,
                                                  1351.36
                                              ]
                                          },
                                          {
                                              "point": [
                                                  2312.79,
                                                  1000.34
                                              ]
                                          },
                                          {
                                              "point": [
                                                  2261.94,
                                                  1000.34
                                              ],
                                              "reversed": true,
                                              "allowedToTop": true
                                          }
                                      ]
                                  }
                              }
                          },
                          "dynamic": []
                      }
                  },
                  "nodeID": "6499c4c808e3f221576bbb10"
              },
              "6499c4c808e3f221576bbb12": {
                  "type": "block",
                  "data": {
                      "name": "Congratulations! ",
                      "steps": [
                          "6499c4c808e3f221576bbb10"
                      ],
                      "color": ""
                  },
                  "nodeID": "6499c4c808e3f221576bbb12",
                  "coords": [
                      2529.63417689229,
                      1260.3610096223813
                  ]
              },
              "6499c9e708e3f221576bbb21": {
                  "type": "setV2",
                  "data": {
                      "name": "",
                      "sets": [
                          {
                              "type": "advance",
                              "variable": "nftChain",
                              "expression": "\"goerli\""
                          }
                      ],
                      "title": "",
                      "portsV2": {
                          "byKey": {},
                          "builtIn": {
                              "next": {
                                  "type": "next",
                                  "target": "64994ce30ef0dae3b414b0ff",
                                  "id": "6499c9e708e3f221576bbb23",
                                  "data": {
                                      "points": [
                                          {
                                              "point": [
                                                  3306.01,
                                                  -6.22
                                              ],
                                              "reversed": true
                                          },
                                          {
                                              "point": [
                                                  3212.97,
                                                  -6.22
                                              ]
                                          },
                                          {
                                              "point": [
                                                  3212.97,
                                                  710.22
                                              ],
                                              "toTop": true,
                                              "allowedToTop": true
                                          }
                                      ]
                                  }
                              }
                          },
                          "dynamic": []
                      }
                  },
                  "nodeID": "6499c9e708e3f221576bbb21"
              },
              "6499c9e708e3f221576bbb22": {
                  "type": "actions",
                  "data": {
                      "name": "",
                      "steps": [
                          "6499c9e708e3f221576bbb21"
                      ]
                  },
                  "nodeID": "6499c9e708e3f221576bbb22",
                  "coords": [
                      0,
                      0
                  ]
              },
              "6499d9ac08e3f221576bbc5b": {
                  "type": "setV2",
                  "data": {
                      "name": "",
                      "sets": [
                          {
                              "type": "advance",
                              "variable": "nftChain",
                              "expression": "\"ethereum\""
                          }
                      ],
                      "title": "",
                      "portsV2": {
                          "byKey": {},
                          "builtIn": {
                              "next": {
                                  "type": "next",
                                  "target": "64994ce30ef0dae3b414b0ff",
                                  "id": "6499d9ac08e3f221576bbc5d",
                                  "data": {
                                      "points": [
                                          {
                                              "point": [
                                                  3282.75,
                                                  48.28
                                              ],
                                              "reversed": true
                                          },
                                          {
                                              "point": [
                                                  3212.97,
                                                  48.28
                                              ]
                                          },
                                          {
                                              "point": [
                                                  3212.97,
                                                  710.22
                                              ],
                                              "toTop": true,
                                              "allowedToTop": true
                                          }
                                      ]
                                  }
                              }
                          },
                          "dynamic": []
                      }
                  },
                  "nodeID": "6499d9ac08e3f221576bbc5b"
              },
              "6499d9ac08e3f221576bbc5c": {
                  "type": "actions",
                  "data": {
                      "name": "",
                      "steps": [
                          "6499d9ac08e3f221576bbc5b"
                      ]
                  },
                  "nodeID": "6499d9ac08e3f221576bbc5c",
                  "coords": [
                      0,
                      0
                  ]
              },
              "6499da0e08e3f221576bbc6c": {
                  "type": "setV2",
                  "data": {
                      "name": "",
                      "sets": [
                          {
                              "type": "advance",
                              "variable": "nftChain",
                              "expression": "\"arbitrum-goerli\""
                          }
                      ],
                      "title": "",
                      "portsV2": {
                          "byKey": {},
                          "builtIn": {
                              "next": {
                                  "type": "next",
                                  "target": "64994ce30ef0dae3b414b0ff",
                                  "id": "6499da0e08e3f221576bbc6e",
                                  "data": {
                                      "points": [
                                          {
                                              "point": [
                                                  3259.86,
                                                  102.78
                                              ],
                                              "reversed": true
                                          },
                                          {
                                              "point": [
                                                  3212.97,
                                                  102.78
                                              ]
                                          },
                                          {
                                              "point": [
                                                  3212.97,
                                                  710.22
                                              ],
                                              "toTop": true,
                                              "allowedToTop": true
                                          }
                                      ]
                                  }
                              }
                          },
                          "dynamic": []
                      }
                  },
                  "nodeID": "6499da0e08e3f221576bbc6c"
              },
              "6499da0e08e3f221576bbc6d": {
                  "type": "actions",
                  "data": {
                      "name": "",
                      "steps": [
                          "6499da0e08e3f221576bbc6c"
                      ]
                  },
                  "nodeID": "6499da0e08e3f221576bbc6d",
                  "coords": [
                      0,
                      0
                  ]
              },
              "6499da2f08e3f221576bbc74": {
                  "type": "setV2",
                  "data": {
                      "name": "",
                      "sets": [
                          {
                              "type": "advance",
                              "variable": "nftChain",
                              "expression": "\"fantom-goerli\""
                          }
                      ],
                      "title": "",
                      "portsV2": {
                          "byKey": {},
                          "builtIn": {
                              "next": {
                                  "type": "next",
                                  "target": "64994ce30ef0dae3b414b0ff",
                                  "id": "6499da2f08e3f221576bbc76",
                                  "data": {
                                      "points": [
                                          {
                                              "point": [
                                                  3259.86,
                                                  157.28
                                              ],
                                              "reversed": true
                                          },
                                          {
                                              "point": [
                                                  3212.97,
                                                  157.28
                                              ]
                                          },
                                          {
                                              "point": [
                                                  3212.97,
                                                  710.22
                                              ],
                                              "toTop": true,
                                              "allowedToTop": true
                                          }
                                      ]
                                  }
                              }
                          },
                          "dynamic": []
                      }
                  },
                  "nodeID": "6499da2f08e3f221576bbc74"
              },
              "6499da2f08e3f221576bbc75": {
                  "type": "actions",
                  "data": {
                      "name": "",
                      "steps": [
                          "6499da2f08e3f221576bbc74"
                      ]
                  },
                  "nodeID": "6499da2f08e3f221576bbc75",
                  "coords": [
                      0,
                      0
                  ]
              },
              "6499da5d08e3f221576bbc7c": {
                  "type": "setV2",
                  "data": {
                      "name": "",
                      "sets": [
                          {
                              "type": "advance",
                              "variable": "nftChain",
                              "expression": "\"optimism-goerli\""
                          }
                      ],
                      "title": "",
                      "portsV2": {
                          "byKey": {},
                          "builtIn": {
                              "next": {
                                  "type": "next",
                                  "target": "64994ce30ef0dae3b414b0ff",
                                  "id": "6499da5d08e3f221576bbc7e",
                                  "data": {
                                      "points": [
                                          {
                                              "point": [
                                                  3259.86,
                                                  211.78
                                              ],
                                              "reversed": true
                                          },
                                          {
                                              "point": [
                                                  3212.97,
                                                  211.78
                                              ]
                                          },
                                          {
                                              "point": [
                                                  3212.97,
                                                  710.22
                                              ],
                                              "toTop": true,
                                              "allowedToTop": true
                                          }
                                      ]
                                  }
                              }
                          },
                          "dynamic": []
                      }
                  },
                  "nodeID": "6499da5d08e3f221576bbc7c"
              },
              "6499da5d08e3f221576bbc7d": {
                  "type": "actions",
                  "data": {
                      "name": "",
                      "steps": [
                          "6499da5d08e3f221576bbc7c"
                      ]
                  },
                  "nodeID": "6499da5d08e3f221576bbc7d",
                  "coords": [
                      0,
                      0
                  ]
              },
              "6499e5af08e3f221576bbc98": {
                  "type": "setV2",
                  "data": {
                      "name": "",
                      "sets": [
                          {
                              "type": "advance",
                              "variable": "nftChain",
                              "expression": "\"arbitrum\""
                          }
                      ],
                      "title": "",
                      "portsV2": {
                          "byKey": {},
                          "builtIn": {
                              "next": {
                                  "type": "next",
                                  "target": "64994ce30ef0dae3b414b0ff",
                                  "id": "6499e5af08e3f221576bbc9a",
                                  "data": {
                                      "points": [
                                          {
                                              "point": [
                                                  3288.61,
                                                  266.28
                                              ],
                                              "reversed": true
                                          },
                                          {
                                              "point": [
                                                  3212.97,
                                                  266.28
                                              ]
                                          },
                                          {
                                              "point": [
                                                  3212.97,
                                                  710.22
                                              ],
                                              "toTop": true,
                                              "allowedToTop": true
                                          }
                                      ]
                                  }
                              }
                          },
                          "dynamic": []
                      }
                  },
                  "nodeID": "6499e5af08e3f221576bbc98"
              },
              "6499e5af08e3f221576bbc99": {
                  "type": "actions",
                  "data": {
                      "name": "",
                      "steps": [
                          "6499e5af08e3f221576bbc98"
                      ]
                  },
                  "nodeID": "6499e5af08e3f221576bbc99",
                  "coords": [
                      0,
                      0
                  ]
              },
              "6499e5c808e3f221576bbca0": {
                  "type": "setV2",
                  "data": {
                      "name": "",
                      "sets": [
                          {
                              "type": "advance",
                              "variable": "nftChain",
                              "expression": "\"polygon\""
                          }
                      ],
                      "title": "",
                      "portsV2": {
                          "byKey": {},
                          "builtIn": {
                              "next": {
                                  "type": "next",
                                  "target": "64994ce30ef0dae3b414b0ff",
                                  "id": "6499e5c808e3f221576bbca2",
                                  "data": {
                                      "points": [
                                          {
                                              "point": [
                                                  3291.5,
                                                  320.78
                                              ],
                                              "reversed": true
                                          },
                                          {
                                              "point": [
                                                  3212.97,
                                                  320.78
                                              ]
                                          },
                                          {
                                              "point": [
                                                  3212.97,
                                                  710.22
                                              ],
                                              "toTop": true,
                                              "allowedToTop": true
                                          }
                                      ]
                                  }
                              }
                          },
                          "dynamic": []
                      }
                  },
                  "nodeID": "6499e5c808e3f221576bbca0"
              },
              "6499e5c808e3f221576bbca1": {
                  "type": "actions",
                  "data": {
                      "name": "",
                      "steps": [
                          "6499e5c808e3f221576bbca0"
                      ]
                  },
                  "nodeID": "6499e5c808e3f221576bbca1",
                  "coords": [
                      0,
                      0
                  ]
              },
              "6499e5ed08e3f221576bbca8": {
                  "type": "setV2",
                  "data": {
                      "name": "",
                      "sets": [
                          {
                              "type": "advance",
                              "variable": "nftChain",
                              "expression": "\"optimism\""
                          }
                      ],
                      "title": "",
                      "portsV2": {
                          "byKey": {},
                          "builtIn": {
                              "next": {
                                  "type": "next",
                                  "target": "64994ce30ef0dae3b414b0ff",
                                  "id": "6499e5ed08e3f221576bbcaa",
                                  "data": {
                                      "points": [
                                          {
                                              "point": [
                                                  3285.33,
                                                  375.28
                                              ],
                                              "reversed": true
                                          },
                                          {
                                              "point": [
                                                  3212.97,
                                                  375.28
                                              ]
                                          },
                                          {
                                              "point": [
                                                  3212.97,
                                                  710.22
                                              ],
                                              "toTop": true,
                                              "allowedToTop": true
                                          }
                                      ]
                                  }
                              }
                          },
                          "dynamic": []
                      }
                  },
                  "nodeID": "6499e5ed08e3f221576bbca8"
              },
              "6499e5ed08e3f221576bbca9": {
                  "type": "actions",
                  "data": {
                      "name": "",
                      "steps": [
                          "6499e5ed08e3f221576bbca8"
                      ]
                  },
                  "nodeID": "6499e5ed08e3f221576bbca9",
                  "coords": [
                      0,
                      0
                  ]
              },
              "6499e60308e3f221576bbcb0": {
                  "type": "setV2",
                  "data": {
                      "name": "",
                      "sets": [
                          {
                              "type": "advance",
                              "variable": "nftChain",
                              "expression": "\"avalanche\""
                          }
                      ],
                      "title": "",
                      "portsV2": {
                          "byKey": {},
                          "builtIn": {
                              "next": {
                                  "type": "next",
                                  "target": "64994ce30ef0dae3b414b0ff",
                                  "id": "6499e60308e3f221576bbcb2",
                                  "data": {
                                      "points": [
                                          {
                                              "point": [
                                                  3281.23,
                                                  429.78
                                              ],
                                              "reversed": true
                                          },
                                          {
                                              "point": [
                                                  3212.97,
                                                  429.78
                                              ]
                                          },
                                          {
                                              "point": [
                                                  3212.97,
                                                  710.22
                                              ],
                                              "toTop": true,
                                              "allowedToTop": true
                                          }
                                      ]
                                  }
                              }
                          },
                          "dynamic": []
                      }
                  },
                  "nodeID": "6499e60308e3f221576bbcb0"
              },
              "6499e60308e3f221576bbcb1": {
                  "type": "actions",
                  "data": {
                      "name": "",
                      "steps": [
                          "6499e60308e3f221576bbcb0"
                      ]
                  },
                  "nodeID": "6499e60308e3f221576bbcb1",
                  "coords": [
                      0,
                      0
                  ]
              },
              "6499e64a08e3f221576bbcb8": {
                  "type": "setV2",
                  "data": {
                      "name": "",
                      "sets": [
                          {
                              "type": "advance",
                              "variable": "nftChain",
                              "expression": "\"fantom\""
                          }
                      ],
                      "title": "",
                      "portsV2": {
                          "byKey": {},
                          "builtIn": {
                              "next": {
                                  "type": "next",
                                  "target": "64994ce30ef0dae3b414b0ff",
                                  "id": "6499e64a08e3f221576bbcba",
                                  "data": {}
                              }
                          },
                          "dynamic": []
                      }
                  },
                  "nodeID": "6499e64a08e3f221576bbcb8"
              },
              "6499e64a08e3f221576bbcb9": {
                  "type": "actions",
                  "data": {
                      "name": "",
                      "steps": [
                          "6499e64a08e3f221576bbcb8"
                      ]
                  },
                  "nodeID": "6499e64a08e3f221576bbcb9",
                  "coords": [
                      0,
                      0
                  ]
              },
              "6499e66208e3f221576bbcc0": {
                  "type": "setV2",
                  "data": {
                      "name": "",
                      "sets": [
                          {
                              "type": "advance",
                              "variable": "nftChain",
                              "expression": "\"bsc-testnet\""
                          }
                      ],
                      "title": "",
                      "portsV2": {
                          "byKey": {},
                          "builtIn": {
                              "next": {
                                  "type": "next",
                                  "target": "64994ce30ef0dae3b414b0ff",
                                  "id": "6499e66208e3f221576bbcc2",
                                  "data": {}
                              }
                          },
                          "dynamic": []
                      }
                  },
                  "nodeID": "6499e66208e3f221576bbcc0"
              },
              "6499e66208e3f221576bbcc1": {
                  "type": "actions",
                  "data": {
                      "name": "",
                      "steps": [
                          "6499e66208e3f221576bbcc0"
                      ]
                  },
                  "nodeID": "6499e66208e3f221576bbcc1",
                  "coords": [
                      0,
                      0
                  ]
              },
              "6499e6a608e3f221576bbcc8": {
                  "type": "setV2",
                  "data": {
                      "name": "",
                      "sets": [
                          {
                              "type": "advance",
                              "variable": "nftChain",
                              "expression": "\"fuji\""
                          }
                      ],
                      "title": "",
                      "portsV2": {
                          "byKey": {},
                          "builtIn": {
                              "next": {
                                  "type": "next",
                                  "target": "64994ce30ef0dae3b414b0ff",
                                  "id": "6499e6a608e3f221576bbcca",
                                  "data": {}
                              }
                          },
                          "dynamic": []
                      }
                  },
                  "nodeID": "6499e6a608e3f221576bbcc8"
              },
              "6499e6a608e3f221576bbcc9": {
                  "type": "actions",
                  "data": {
                      "name": "",
                      "steps": [
                          "6499e6a608e3f221576bbcc8"
                      ]
                  },
                  "nodeID": "6499e6a608e3f221576bbcc9",
                  "coords": [
                      0,
                      0
                  ]
              },
              "6499eb5808e3f221576bbe45": {
                  "type": "text",
                  "data": {
                      "name": "Text",
                      "texts": [
                          {
                              "id": "pt4wy3244",
                              "content": [
                                  {
                                      "children": [
                                          {
                                              "text": "Please enter the text prompt you want for your Generative AI NFT!"
                                          }
                                      ]
                                  }
                              ]
                          }
                      ],
                      "canvasVisibility": "preview",
                      "portsV2": {
                          "byKey": {},
                          "builtIn": {
                              "next": {
                                  "type": "next",
                                  "target": null,
                                  "id": "6499eb5808e3f221576bbe46"
                              }
                          },
                          "dynamic": []
                      }
                  },
                  "nodeID": "6499eb5808e3f221576bbe45"
              },
              "6499eb5808e3f221576bbe47": {
                  "type": "block",
                  "data": {
                      "name": "AI prompt",
                      "steps": [
                          "6499eb5808e3f221576bbe45",
                          "6499ebd008e3f221576bbe4e"
                      ],
                      "color": ""
                  },
                  "nodeID": "6499eb5808e3f221576bbe47",
                  "coords": [
                      1942.2019958496094,
                      -911.5517578124999
                  ]
              },
              "6499ebd008e3f221576bbe4e": {
                  "type": "captureV2",
                  "data": {
                      "name": "Capture",
                      "intentScope": "GLOBAL",
                      "capture": {
                          "type": "query",
                          "variable": "imagePrompt"
                      },
                      "portsV2": {
                          "byKey": {},
                          "builtIn": {
                              "next": {
                                  "type": "next",
                                  "target": "6499ebf108e3f221576bbe54",
                                  "id": "6499ebd008e3f221576bbe4f",
                                  "data": {}
                              },
                              "else": {
                                  "type": "else",
                                  "target": null,
                                  "id": "6499ebd008e3f221576bbe50"
                              }
                          },
                          "dynamic": []
                      }
                  },
                  "nodeID": "6499ebd008e3f221576bbe4e"
              },
              "6499ebf108e3f221576bbe54": {
                  "type": "api",
                  "data": {
                      "name": "",
                      "url": "https://stablediffusionapi.com/api/v3/text2img",
                      "body": [
                          {
                              "key": "key",
                              "val": "1ENB3pXgMqJDYziaAA2kFUzTVdyvM6ieWD9HTs40bCRAbwaOIQBh6fr3qswb"
                          },
                          {
                              "key": "prompt",
                              "val": "{{[imagePrompt].imagePrompt}}"
                          },
                          {
                              "key": "width",
                              "val": "256"
                          },
                          {
                              "key": "height",
                              "val": "256"
                          },
                          {
                              "key": "num_inference_steps",
                              "val": "21"
                          },
                          {
                              "key": "guidance_scale",
                              "val": "7.5"
                          },
                          {
                              "key": "safety_checker",
                              "val": "yes"
                          },
                          {
                              "key": "samples",
                              "val": "2"
                          }
                      ],
                      "params": [],
                      "method": "POST",
                      "headers": [],
                      "content": "",
                      "mappings": [
                          {
                              "path": "output[0]",
                              "var": "firstImage"
                          },
                          {
                              "path": "output[1]",
                              "var": "secondImage"
                          }
                      ],
                      "bodyType": "formData",
                      "selectedAction": "Make a POST Request",
                      "selectedIntegration": "Custom API",
                      "portsV2": {
                          "byKey": {},
                          "builtIn": {
                              "next": {
                                  "type": "next",
                                  "target": "6499f63b08e3f221576bbe76",
                                  "id": "6499ebf108e3f221576bbe55",
                                  "data": {
                                      "points": [
                                          {
                                              "point": [
                                                  2643.2,
                                                  -722.05
                                              ]
                                          },
                                          {
                                              "point": [
                                                  2812.23,
                                                  -722.05
                                              ]
                                          },
                                          {
                                              "point": [
                                                  2812.23,
                                                  -1473.54
                                              ]
                                          },
                                          {
                                              "point": [
                                                  2788.23,
                                                  -1473.54
                                              ],
                                              "reversed": true,
                                              "allowedToTop": false
                                          }
                                      ]
                                  }
                              },
                              "fail": {
                                  "type": "fail",
                                  "target": "6499f5e008e3f221576bbe5f",
                                  "id": "6499ebf108e3f221576bbe56",
                                  "data": {
                                      "points": [
                                          {
                                              "point": [
                                                  2311.2,
                                                  -667.55
                                              ],
                                              "reversed": true
                                          },
                                          {
                                              "point": [
                                                  2269.1,
                                                  -667.55
                                              ]
                                          },
                                          {
                                              "point": [
                                                  2269.1,
                                                  -1080.49
                                              ]
                                          },
                                          {
                                              "point": [
                                                  2227,
                                                  -1080.49
                                              ],
                                              "reversed": true,
                                              "allowedToTop": false
                                          }
                                      ]
                                  }
                              }
                          },
                          "dynamic": []
                      }
                  },
                  "nodeID": "6499ebf108e3f221576bbe54"
              },
              "6499ebf108e3f221576bbe57": {
                  "type": "block",
                  "data": {
                      "name": "API Request for Generative AI",
                      "steps": [
                          "6499ebf108e3f221576bbe54"
                      ],
                      "color": ""
                  },
                  "nodeID": "6499ebf108e3f221576bbe57",
                  "coords": [
                      2477.2019958496094,
                      -895.3017578124999
                  ]
              },
              "6499f5e008e3f221576bbe5f": {
                  "type": "text",
                  "data": {
                      "name": "Text",
                      "texts": [
                          {
                              "id": "i05hh32ix",
                              "content": [
                                  {
                                      "children": [
                                          {
                                              "text": "Unable to process the request at the moment. Please try again!"
                                          }
                                      ]
                                  }
                              ]
                          }
                      ],
                      "canvasVisibility": "preview",
                      "portsV2": {
                          "byKey": {},
                          "builtIn": {
                              "next": {
                                  "type": "next",
                                  "target": "6499eb5808e3f221576bbe47",
                                  "id": "6499f5e008e3f221576bbe60",
                                  "data": {
                                      "points": [
                                          {
                                              "point": [
                                                  1897,
                                                  -1068.99
                                              ],
                                              "reversed": true
                                          },
                                          {
                                              "point": [
                                                  1873,
                                                  -1068.99
                                              ]
                                          },
                                          {
                                              "point": [
                                                  1873,
                                                  -935.55
                                              ]
                                          },
                                          {
                                              "point": [
                                                  1942.2,
                                                  -935.55
                                              ]
                                          },
                                          {
                                              "point": [
                                                  1942.2,
                                                  -911.55
                                              ],
                                              "toTop": true,
                                              "allowedToTop": true
                                          }
                                      ]
                                  }
                              }
                          },
                          "dynamic": []
                      }
                  },
                  "nodeID": "6499f5e008e3f221576bbe5f"
              },
              "6499f5e008e3f221576bbe61": {
                  "type": "block",
                  "data": {
                      "name": "API Failed",
                      "steps": [
                          "6499f5e008e3f221576bbe5f"
                      ],
                      "color": ""
                  },
                  "nodeID": "6499f5e008e3f221576bbe61",
                  "coords": [
                      2046.7516792292072,
                      -1145.9267578124998
                  ]
              },
              "6499f63b08e3f221576bbe76": {
                  "type": "carousel",
                  "data": {
                      "name": "Card",
                      "cards": [
                          {
                              "id": "6c5lr320l",
                              "title": "First Image",
                              "description": [
                                  {
                                      "children": [
                                          {
                                              "text": ""
                                          }
                                      ]
                                  }
                              ],
                              "imageUrl": "{firstImage}",
                              "buttons": [
                                  {
                                      "id": "bd5n232jy",
                                      "name": "Choose",
                                      "intent": null
                                  }
                              ]
                          },
                          {
                              "id": "0m5oy32z6",
                              "title": "Second Image",
                              "description": [
                                  {
                                      "children": [
                                          {
                                              "text": ""
                                          }
                                      ]
                                  }
                              ],
                              "imageUrl": "{secondImage}",
                              "buttons": [
                                  {
                                      "id": "k65ph32hj",
                                      "name": "Choose",
                                      "intent": null
                                  }
                              ]
                          },
                          {
                              "id": "x25qz3231",
                              "title": "Not Satisfied!",
                              "description": [
                                  {
                                      "children": [
                                          {
                                              "text": ""
                                          }
                                      ]
                                  }
                              ],
                              "imageUrl": "",
                              "buttons": [
                                  {
                                      "id": "tn5rb328t",
                                      "name": "Reload Samples",
                                      "intent": null
                                  }
                              ]
                          }
                      ],
                      "layout": "Carousel",
                      "portsV2": {
                          "byKey": {
                              "bd5n232jy": {
                                  "id": "6499f68d08e3f221576bbe7f",
                                  "target": "6499f69a08e3f221576bbe82",
                                  "type": "",
                                  "data": {}
                              },
                              "k65ph32hj": {
                                  "id": "6499f6da08e3f221576bbe89",
                                  "target": "6499f6e108e3f221576bbe8c",
                                  "type": "",
                                  "data": {}
                              },
                              "tn5rb328t": {
                                  "id": "6499f70b08e3f221576bbe93",
                                  "target": "6499ebf108e3f221576bbe57",
                                  "type": "",
                                  "data": {}
                              }
                          },
                          "builtIn": {
                              "next": {
                                  "type": "next",
                                  "target": null,
                                  "id": "6499f63b08e3f221576bbe77"
                              },
                              "else": {
                                  "type": "else",
                                  "target": null,
                                  "id": "6499f63b08e3f221576bbe78"
                              }
                          },
                          "dynamic": []
                      }
                  },
                  "nodeID": "6499f63b08e3f221576bbe76"
              },
              "6499f63b08e3f221576bbe79": {
                  "type": "block",
                  "data": {
                      "name": "Image Selection",
                      "steps": [
                          "6499f63b08e3f221576bbe76"
                      ],
                      "color": ""
                  },
                  "nodeID": "6499f63b08e3f221576bbe79",
                  "coords": [
                      2622.232736220881,
                      -1553.0361328125
                  ]
              },
              "6499f69a08e3f221576bbe81": {
                  "type": "setV2",
                  "data": {
                      "name": "",
                      "sets": [
                          {
                              "type": "advance",
                              "variable": "nftImageURL",
                              "expression": "{{[firstImage].firstImage}}"
                          }
                      ],
                      "title": "",
                      "portsV2": {
                          "byKey": {},
                          "builtIn": {
                              "next": {
                                  "type": "next",
                                  "target": "6499f74c08e3f221576bbe99",
                                  "id": "6499f69a08e3f221576bbe83",
                                  "data": {
                                      "points": [
                                          {
                                              "point": [
                                                  3064.23,
                                                  -1405.54
                                              ]
                                          },
                                          {
                                              "point": [
                                                  3234.73,
                                                  -1405.54
                                              ]
                                          },
                                          {
                                              "point": [
                                                  3234.73,
                                                  -909.96
                                              ],
                                              "toTop": true,
                                              "allowedToTop": true
                                          }
                                      ]
                                  }
                              }
                          },
                          "dynamic": []
                      }
                  },
                  "nodeID": "6499f69a08e3f221576bbe81"
              },
              "6499f69a08e3f221576bbe82": {
                  "type": "actions",
                  "data": {
                      "name": "",
                      "steps": [
                          "6499f69a08e3f221576bbe81"
                      ]
                  },
                  "nodeID": "6499f69a08e3f221576bbe82",
                  "coords": [
                      0,
                      0
                  ]
              },
              "6499f6e108e3f221576bbe8b": {
                  "type": "setV2",
                  "data": {
                      "name": "",
                      "sets": [
                          {
                              "type": "advance",
                              "variable": "nftImageURL",
                              "expression": "{{[secondImage].secondImage}}"
                          }
                      ],
                      "title": "",
                      "portsV2": {
                          "byKey": {},
                          "builtIn": {
                              "next": {
                                  "type": "next",
                                  "target": "6499f74c08e3f221576bbe99",
                                  "id": "6499f6e108e3f221576bbe8d",
                                  "data": {
                                      "points": [
                                          {
                                              "point": [
                                                  3064.23,
                                                  -1272.54
                                              ]
                                          },
                                          {
                                              "point": [
                                                  3234.73,
                                                  -1272.54
                                              ]
                                          },
                                          {
                                              "point": [
                                                  3234.73,
                                                  -909.96
                                              ],
                                              "toTop": true,
                                              "allowedToTop": true
                                          }
                                      ]
                                  }
                              }
                          },
                          "dynamic": []
                      }
                  },
                  "nodeID": "6499f6e108e3f221576bbe8b"
              },
              "6499f6e108e3f221576bbe8c": {
                  "type": "actions",
                  "data": {
                      "name": "",
                      "steps": [
                          "6499f6e108e3f221576bbe8b"
                      ]
                  },
                  "nodeID": "6499f6e108e3f221576bbe8c",
                  "coords": [
                      0,
                      0
                  ]
              },
              "6499f74c08e3f221576bbe97": {
                  "type": "text",
                  "data": {
                      "name": "Text",
                      "texts": [
                          {
                              "id": "ef5tr32hl",
                              "content": [
                                  {
                                      "children": [
                                          {
                                              "text": "This image will be used to mint your new NFT"
                                          }
                                      ]
                                  }
                              ]
                          }
                      ],
                      "canvasVisibility": "preview",
                      "portsV2": {
                          "byKey": {},
                          "builtIn": {
                              "next": {
                                  "type": "next",
                                  "target": null,
                                  "id": "6499f74c08e3f221576bbe98"
                              }
                          },
                          "dynamic": []
                      }
                  },
                  "nodeID": "6499f74c08e3f221576bbe97"
              },
              "6499f74c08e3f221576bbe99": {
                  "type": "block",
                  "data": {
                      "name": "Display Chosen Image",
                      "steps": [
                          "6499f74c08e3f221576bbe97",
                          "6499f76c08e3f221576bbea0"
                      ],
                      "color": ""
                  },
                  "nodeID": "6499f74c08e3f221576bbe99",
                  "coords": [
                      3234.7327362208753,
                      -909.959209735576
                  ]
              },
              "6499f76c08e3f221576bbea0": {
                  "type": "visual",
                  "data": {
                      "name": "Visuals",
                      "image": "{nftImageURL}",
                      "visualType": "image",
                      "canvasVisibility": "full",
                      "portsV2": {
                          "byKey": {},
                          "builtIn": {
                              "next": {
                                  "type": "next",
                                  "target": "64994efc0ef0dae3b414b108",
                                  "id": "6499f76c08e3f221576bbea1",
                                  "data": {
                                      "points": [
                                          {
                                              "point": [
                                                  3068.73,
                                                  -738.46
                                              ],
                                              "reversed": true
                                          },
                                          {
                                              "point": [
                                                  2945.92,
                                                  -738.46
                                              ]
                                          },
                                          {
                                              "point": [
                                                  2945.92,
                                                  -323.66
                                              ]
                                          },
                                          {
                                              "point": [
                                                  2823.11,
                                                  -323.66
                                              ],
                                              "reversed": true,
                                              "allowedToTop": true
                                          }
                                      ]
                                  }
                              }
                          },
                          "dynamic": []
                      }
                  },
                  "nodeID": "6499f76c08e3f221576bbea0"
              }
          }
      },
      "6495a7edcfac40000624214a": {
          "_id": "6495a7edcfac40000624214a",
          "name": "Template Diagram",
          "type": "TEMPLATE",
          "zoom": 100,
          "offsetX": 272,
          "offsetY": 104,
          "modified": 1687442607,
          "variables": [],
          "menuItems": [],
          "creatorID": 145492,
          "versionID": "6495a7edcfac400006242148",
          "nodes": {
              "6438725334aead00076d562e": {
                  "type": "start",
                  "nodeID": "6438725334aead00076d562e",
                  "coords": [
                      360,
                      120
                  ],
                  "data": {
                      "name": "Start",
                      "color": "#43494E",
                      "portsV2": {
                          "byKey": {},
                          "builtIn": {
                              "next": {
                                  "id": "6438725334aead00076d562f",
                                  "type": "next",
                                  "target": null
                              }
                          },
                          "dynamic": []
                      },
                      "steps": []
                  }
              },
              "6438725382cf9d2273b90589": {
                  "type": "block",
                  "data": {
                      "name": "Welcome",
                      "color": "",
                      "steps": [
                          "6438725382cf9d2273b9058d",
                          "6438725382cf9d2273b90590"
                      ]
                  },
                  "nodeID": "6438725382cf9d2273b90589",
                  "coords": [
                      -501.3585020507189,
                      -658.0432780543358
                  ]
              },
              "6438725382cf9d2273b9058b": {
                  "type": "block",
                  "data": {
                      "name": "AI response output",
                      "color": "#56b365",
                      "steps": [
                          "6438725382cf9d2273b90594"
                      ]
                  },
                  "nodeID": "6438725382cf9d2273b9058b",
                  "coords": [
                      -501.5967776582388,
                      -377.8379726840851
                  ]
              },
              "6438725382cf9d2273b9058d": {
                  "type": "text",
                  "data": {
                      "name": "Text",
                      "texts": [
                          {
                              "id": "s27ac3eqh",
                              "content": [
                                  {
                                      "children": [
                                          {
                                              "text": "Ask any question",
                                              "fontWeight": "700"
                                          },
                                          {
                                              "text": ", and we'll use the response AI step to provide a contextual response."
                                          }
                                      ]
                                  }
                              ]
                          }
                      ],
                      "canvasVisibility": "preview",
                      "portsV2": {
                          "byKey": {},
                          "builtIn": {
                              "next": {
                                  "type": "next",
                                  "target": "6438725382cf9d2273b90590",
                                  "id": "6438725382cf9d2273b9058e"
                              }
                          },
                          "dynamic": []
                      }
                  },
                  "nodeID": "6438725382cf9d2273b9058d"
              },
              "6438725382cf9d2273b90590": {
                  "type": "captureV2",
                  "data": {
                      "name": "Capture",
                      "intentScope": "GLOBAL",
                      "capture": {
                          "type": "query",
                          "variable": "last_utterance"
                      },
                      "noReply": null,
                      "noMatch": null,
                      "portsV2": {
                          "byKey": {},
                          "builtIn": {
                              "next": {
                                  "type": "next",
                                  "target": "6438725382cf9d2273b9058b",
                                  "id": "6438725382cf9d2273b90591",
                                  "data": {
                                      "points": [
                                          {
                                              "point": [
                                                  -667.3584635404925,
                                                  -461.54329806524055
                                              ],
                                              "toTop": false,
                                              "locked": false,
                                              "reversed": true,
                                              "allowedToTop": false
                                          },
                                          {
                                              "point": [
                                                  -691.3584635404925,
                                                  -461.54329806524055
                                              ],
                                              "toTop": false,
                                              "locked": false,
                                              "reversed": false,
                                              "allowedToTop": false
                                          },
                                          {
                                              "point": [
                                                  -691.3584635404925,
                                                  -401.83801893781236
                                              ],
                                              "toTop": false,
                                              "locked": false,
                                              "reversed": false,
                                              "allowedToTop": false
                                          },
                                          {
                                              "point": [
                                                  -501.59680258692276,
                                                  -401.83801893781236
                                              ],
                                              "toTop": false,
                                              "locked": false,
                                              "reversed": false,
                                              "allowedToTop": false
                                          },
                                          {
                                              "point": [
                                                  -501.59680258692276,
                                                  -377.83801893781236
                                              ],
                                              "toTop": true,
                                              "locked": false,
                                              "reversed": false,
                                              "allowedToTop": true
                                          }
                                      ]
                                  }
                              },
                              "else": {
                                  "type": "else",
                                  "target": null,
                                  "id": "6438725382cf9d2273b90592"
                              }
                          },
                          "dynamic": []
                      }
                  },
                  "nodeID": "6438725382cf9d2273b90590"
              },
              "6438725382cf9d2273b90594": {
                  "type": "generative",
                  "data": {
                      "name": "Response AI",
                      "prompt": "Based on the users response {{[last_utterance].last_utterance}}, respond to the user",
                      "system": "You are a helpful assistant",
                      "maxTokens": 100,
                      "model": "gpt-4",
                      "temperature": 0.7,
                      "portsV2": {
                          "byKey": {},
                          "builtIn": {
                              "next": {
                                  "type": "next",
                                  "target": null,
                                  "id": "6438725382cf9d2273b90595",
                                  "data": {
                                      "points": [
                                          {
                                              "point": [
                                                  -335.5969201040813,
                                                  -275.58805327852497
                                              ],
                                              "toTop": false,
                                              "locked": false,
                                              "reversed": false,
                                              "allowedToTop": false
                                          },
                                          {
                                              "point": [
                                                  -295.1503869009563,
                                                  -275.58805327852497
                                              ],
                                              "toTop": false,
                                              "locked": false,
                                              "reversed": false,
                                              "allowedToTop": false
                                          },
                                          {
                                              "point": [
                                                  -295.1503869009563,
                                                  -631.39591460665
                                              ],
                                              "toTop": false,
                                              "locked": false,
                                              "reversed": false,
                                              "allowedToTop": false
                                          },
                                          {
                                              "point": [
                                                  -254.70385369783128,
                                                  -631.39591460665
                                              ],
                                              "toTop": false,
                                              "locked": false,
                                              "reversed": false,
                                              "allowedToTop": true
                                          }
                                      ]
                                  }
                              }
                          },
                          "dynamic": []
                      }
                  },
                  "nodeID": "6438725382cf9d2273b90594"
              },
              "643872d482cf9d2273b905df": {
                  "type": "block",
                  "data": {
                      "name": "Option 2",
                      "color": "",
                      "steps": [
                          "643872d482cf9d2273b905e5"
                      ]
                  },
                  "nodeID": "643872d482cf9d2273b905df",
                  "coords": [
                      -432.02299332274276,
                      -334.73425308247994
                  ]
              },
              "643872d482cf9d2273b905e1": {
                  "type": "block",
                  "data": {
                      "name": "Start Block",
                      "color": "#5b9fd7",
                      "steps": [
                          "643872d482cf9d2273b905e8",
                          "643872d482cf9d2273b905eb"
                      ]
                  },
                  "nodeID": "643872d482cf9d2273b905e1",
                  "coords": [
                      -845.4801744371416,
                      -539.5792694267975
                  ]
              },
              "643872d482cf9d2273b905e3": {
                  "type": "block",
                  "data": {
                      "name": "Option 1",
                      "color": "",
                      "steps": [
                          "643872d482cf9d2273b905f0"
                      ]
                  },
                  "nodeID": "643872d482cf9d2273b905e3",
                  "coords": [
                      -430.5038187460724,
                      -569.9756266907931
                  ]
              },
              "643872d482cf9d2273b905e5": {
                  "type": "text",
                  "data": {
                      "name": "Text",
                      "texts": [
                          {
                              "id": "lu9tb340d",
                              "content": [
                                  {
                                      "children": [
                                          {
                                              "text": "Second Option"
                                          }
                                      ]
                                  }
                              ]
                          }
                      ],
                      "canvasVisibility": "preview",
                      "portsV2": {
                          "byKey": {},
                          "builtIn": {
                              "next": {
                                  "type": "next",
                                  "target": null,
                                  "id": "643872d482cf9d2273b905e6"
                              }
                          },
                          "dynamic": []
                      }
                  },
                  "nodeID": "643872d482cf9d2273b905e5"
              },
              "643872d482cf9d2273b905e8": {
                  "type": "text",
                  "data": {
                      "name": "Text",
                      "texts": [
                          {
                              "id": "929q734a2",
                              "content": [
                                  {
                                      "children": [
                                          {
                                              "text": "How can I help you?"
                                          }
                                      ]
                                  }
                              ]
                          }
                      ],
                      "canvasVisibility": "preview",
                      "portsV2": {
                          "byKey": {},
                          "builtIn": {
                              "next": {
                                  "type": "next",
                                  "target": "643872d482cf9d2273b905eb",
                                  "id": "643872d482cf9d2273b905e9"
                              }
                          },
                          "dynamic": []
                      }
                  },
                  "nodeID": "643872d482cf9d2273b905e8"
              },
              "643872d482cf9d2273b905eb": {
                  "type": "buttons",
                  "data": {
                      "name": "Buttons",
                      "noMatch": null,
                      "buttons": [
                          {
                              "id": "xr9vd34tj",
                              "name": "Path 1",
                              "actions": []
                          },
                          {
                              "id": "cl9vs34c7",
                              "name": "Path 2",
                              "actions": []
                          }
                      ],
                      "noReply": null,
                      "intentScope": "GLOBAL",
                      "portsV2": {
                          "byKey": {},
                          "builtIn": {
                              "else": {
                                  "type": "else",
                                  "target": null,
                                  "id": "643872d482cf9d2273b905ec"
                              }
                          },
                          "dynamic": [
                              {
                                  "type": "",
                                  "target": "643872d482cf9d2273b905e3",
                                  "id": "643872d482cf9d2273b905ed",
                                  "data": {
                                      "points": [
                                          {
                                              "point": [
                                                  -679.4801667002234,
                                                  -399.32923837159325
                                              ],
                                              "toTop": false,
                                              "locked": false,
                                              "reversed": false,
                                              "allowedToTop": false
                                          },
                                          {
                                              "point": [
                                                  -637.4918741411055,
                                                  -399.32923837159325
                                              ],
                                              "toTop": false,
                                              "locked": false,
                                              "reversed": false,
                                              "allowedToTop": false
                                          },
                                          {
                                              "point": [
                                                  -637.4918741411055,
                                                  -542.9755028741506
                                              ],
                                              "toTop": false,
                                              "locked": false,
                                              "reversed": false,
                                              "allowedToTop": false
                                          },
                                          {
                                              "point": [
                                                  -595.5035815819875,
                                                  -542.9755028741506
                                              ],
                                              "toTop": false,
                                              "locked": false,
                                              "reversed": false,
                                              "allowedToTop": true
                                          }
                                      ]
                                  }
                              },
                              {
                                  "type": "",
                                  "target": "643872d482cf9d2273b905df",
                                  "id": "643872d482cf9d2273b905ee",
                                  "data": {
                                      "points": [
                                          {
                                              "point": [
                                                  -679.4801667002234,
                                                  -344.82921901334083
                                              ],
                                              "toTop": false,
                                              "locked": false,
                                              "reversed": false,
                                              "allowedToTop": false
                                          },
                                          {
                                              "point": [
                                                  -638.2515780028617,
                                                  -344.82921901334083
                                              ],
                                              "toTop": false,
                                              "locked": false,
                                              "reversed": false,
                                              "allowedToTop": false
                                          },
                                          {
                                              "point": [
                                                  -638.2515780028617,
                                                  -307.73401942975823
                                              ],
                                              "toTop": false,
                                              "locked": false,
                                              "reversed": false,
                                              "allowedToTop": false
                                          },
                                          {
                                              "point": [
                                                  -597.0229893055001,
                                                  -307.73401942975823
                                              ],
                                              "toTop": false,
                                              "locked": false,
                                              "reversed": false,
                                              "allowedToTop": true
                                          }
                                      ]
                                  }
                              }
                          ]
                      }
                  },
                  "nodeID": "643872d482cf9d2273b905eb"
              },
              "643872d482cf9d2273b905f0": {
                  "type": "text",
                  "data": {
                      "name": "Text",
                      "texts": [
                          {
                              "id": "ky9ry343w",
                              "content": [
                                  {
                                      "children": [
                                          {
                                              "text": "First Option"
                                          }
                                      ]
                                  }
                              ]
                          }
                      ],
                      "canvasVisibility": "preview",
                      "portsV2": {
                          "byKey": {},
                          "builtIn": {
                              "next": {
                                  "type": "next",
                                  "target": null,
                                  "id": "643872d482cf9d2273b905f1"
                              }
                          },
                          "dynamic": []
                      }
                  },
                  "nodeID": "643872d482cf9d2273b905f0"
              },
              "643873be82cf9d2273b90673": {
                  "type": "block",
                  "data": {
                      "name": "If userID does not equal 1234",
                      "color": "",
                      "steps": [
                          "643873be82cf9d2273b9067b"
                      ]
                  },
                  "nodeID": "643873be82cf9d2273b90673",
                  "coords": [
                      -70.18718316214228,
                      -25.420796792411338
                  ]
              },
              "643873be82cf9d2273b90675": {
                  "type": "block",
                  "data": {
                      "name": "Use Logic to Route",
                      "color": "#CB627B",
                      "steps": [
                          "643873be82cf9d2273b9067e"
                      ]
                  },
                  "nodeID": "643873be82cf9d2273b90675",
                  "coords": [
                      -471.1075336325476,
                      -185.10154694620218
                  ]
              },
              "643873be82cf9d2273b90677": {
                  "type": "block",
                  "data": {
                      "name": "If userID equals 1234",
                      "color": "",
                      "steps": [
                          "643873be82cf9d2273b90682"
                      ]
                  },
                  "nodeID": "643873be82cf9d2273b90677",
                  "coords": [
                      -71.43718316214228,
                      -184.17079679241147
                  ]
              },
              "643873be82cf9d2273b90679": {
                  "type": "block",
                  "data": {
                      "name": "Capture Information",
                      "color": "",
                      "steps": [
                          "643873be82cf9d2273b90685",
                          "643873be82cf9d2273b90688"
                      ]
                  },
                  "nodeID": "643873be82cf9d2273b90679",
                  "coords": [
                      -882.7180111791258,
                      -186.51117186930696
                  ]
              },
              "643873be82cf9d2273b9067b": {
                  "type": "text",
                  "data": {
                      "name": "Text",
                      "texts": [
                          {
                              "id": "1jabe34gf",
                              "content": [
                                  {
                                      "children": [
                                          {
                                              "text": "Welcome to Voiceflow user "
                                          },
                                          {
                                              "id": "user_id",
                                              "name": "user_id",
                                              "isSlot": false,
                                              "type": "variable",
                                              "children": [
                                                  {
                                                      "text": ""
                                                  }
                                              ]
                                          },
                                          {
                                              "text": " "
                                          }
                                      ]
                                  }
                              ]
                          }
                      ],
                      "canvasVisibility": "preview",
                      "portsV2": {
                          "byKey": {},
                          "builtIn": {
                              "next": {
                                  "type": "next",
                                  "target": null,
                                  "id": "643873be82cf9d2273b9067c"
                              }
                          },
                          "dynamic": []
                      }
                  },
                  "nodeID": "643873be82cf9d2273b9067b"
              },
              "643873be82cf9d2273b9067e": {
                  "type": "ifV2",
                  "data": {
                      "name": "If",
                      "expressions": [
                          {
                              "type": null,
                              "name": "If UserID = 1234",
                              "value": [
                                  {
                                      "logicInterface": "variable",
                                      "type": "equals",
                                      "value": [
                                          {
                                              "type": "variable",
                                              "value": "user_id"
                                          },
                                          {
                                              "type": "value",
                                              "value": "1234"
                                          }
                                      ]
                                  }
                              ]
                          }
                      ],
                      "noMatch": {
                          "type": "path",
                          "pathName": "All other UserIDs"
                      },
                      "portsV2": {
                          "byKey": {},
                          "builtIn": {
                              "else": {
                                  "type": "else",
                                  "target": "643873be82cf9d2273b90673",
                                  "id": "643873be82cf9d2273b9067f",
                                  "data": {
                                      "points": [
                                          {
                                              "point": [
                                                  -305.10758119605924,
                                                  -50.851426165918596
                                              ],
                                              "toTop": false,
                                              "locked": false,
                                              "reversed": false,
                                              "allowedToTop": false
                                          },
                                          {
                                              "point": [
                                                  -270.147315082778,
                                                  -50.851426165918596
                                              ],
                                              "toTop": false,
                                              "locked": false,
                                              "reversed": false,
                                              "allowedToTop": false
                                          },
                                          {
                                              "point": [
                                                  -270.147315082778,
                                                  1.57917686142504
                                              ],
                                              "toTop": false,
                                              "locked": false,
                                              "reversed": false,
                                              "allowedToTop": false
                                          },
                                          {
                                              "point": [
                                                  -235.18704896949674,
                                                  1.57917686142504
                                              ],
                                              "toTop": false,
                                              "locked": false,
                                              "reversed": false,
                                              "allowedToTop": true
                                          }
                                      ]
                                  }
                              }
                          },
                          "dynamic": [
                              {
                                  "type": "",
                                  "target": "643873be82cf9d2273b90677",
                                  "id": "643873be82cf9d2273b90680",
                                  "data": {
                                      "points": [
                                          {
                                              "point": [
                                                  -305.10758119605924,
                                                  -105.35139564834047
                                              ],
                                              "toTop": false,
                                              "locked": false,
                                              "reversed": false,
                                              "allowedToTop": false
                                          },
                                          {
                                              "point": [
                                                  -270.7723150827781,
                                                  -105.35139564834047
                                              ],
                                              "toTop": false,
                                              "locked": false,
                                              "reversed": false,
                                              "allowedToTop": false
                                          },
                                          {
                                              "point": [
                                                  -270.7723150827781,
                                                  -157.17082313857486
                                              ],
                                              "toTop": false,
                                              "locked": false,
                                              "reversed": false,
                                              "allowedToTop": false
                                          },
                                          {
                                              "point": [
                                                  -236.43704896949686,
                                                  -157.17082313857486
                                              ],
                                              "toTop": false,
                                              "locked": false,
                                              "reversed": false,
                                              "allowedToTop": true
                                          }
                                      ],
                                      "event": {
                                          "type": "If UserID = 1234"
                                      }
                                  }
                              }
                          ]
                      }
                  },
                  "nodeID": "643873be82cf9d2273b9067e"
              },
              "643873be82cf9d2273b90682": {
                  "type": "text",
                  "data": {
                      "name": "Text",
                      "texts": [
                          {
                              "id": "1jabe34gf",
                              "content": [
                                  {
                                      "children": [
                                          {
                                              "text": "Welcome back user "
                                          },
                                          {
                                              "id": "user_id",
                                              "name": "user_id",
                                              "isSlot": false,
                                              "type": "variable",
                                              "children": [
                                                  {
                                                      "text": ""
                                                  }
                                              ]
                                          },
                                          {
                                              "text": " "
                                          }
                                      ]
                                  }
                              ]
                          }
                      ],
                      "canvasVisibility": "preview",
                      "portsV2": {
                          "byKey": {},
                          "builtIn": {
                              "next": {
                                  "type": "next",
                                  "target": null,
                                  "id": "643873be82cf9d2273b90683"
                              }
                          },
                          "dynamic": []
                      }
                  },
                  "nodeID": "643873be82cf9d2273b90682"
              },
              "643873be82cf9d2273b90685": {
                  "type": "text",
                  "data": {
                      "name": "Text",
                      "texts": [
                          {
                              "id": "s8a30349g",
                              "content": [
                                  {
                                      "children": [
                                          {
                                              "text": "What is your userID?"
                                          }
                                      ]
                                  }
                              ]
                          }
                      ],
                      "canvasVisibility": "preview",
                      "portsV2": {
                          "byKey": {},
                          "builtIn": {
                              "next": {
                                  "type": "next",
                                  "target": "643873be82cf9d2273b90688",
                                  "id": "643873be82cf9d2273b90686"
                              }
                          },
                          "dynamic": []
                      }
                  },
                  "nodeID": "643873be82cf9d2273b90685"
              },
              "643873be82cf9d2273b90688": {
                  "type": "captureV2",
                  "data": {
                      "name": "Capture",
                      "intentScope": "GLOBAL",
                      "capture": {
                          "type": "query",
                          "variable": "user_id"
                      },
                      "noReply": null,
                      "noMatch": null,
                      "portsV2": {
                          "byKey": {},
                          "builtIn": {
                              "next": {
                                  "type": "next",
                                  "target": "643873be82cf9d2273b90675",
                                  "id": "643873be82cf9d2273b90689",
                                  "data": {
                                      "points": [
                                          {
                                              "point": [
                                                  -716.7179552552856,
                                                  -35.01107937987875
                                              ],
                                              "toTop": false,
                                              "locked": false,
                                              "reversed": false,
                                              "allowedToTop": false
                                          },
                                          {
                                              "point": [
                                                  -676.4127121801628,
                                                  -35.01107937987875
                                              ],
                                              "toTop": false,
                                              "locked": false,
                                              "reversed": false,
                                              "allowedToTop": false
                                          },
                                          {
                                              "point": [
                                                  -676.4127121801628,
                                                  -158.10137487284737
                                              ],
                                              "toTop": false,
                                              "locked": false,
                                              "reversed": false,
                                              "allowedToTop": false
                                          },
                                          {
                                              "point": [
                                                  -636.1074691050399,
                                                  -158.10137487284737
                                              ],
                                              "toTop": false,
                                              "locked": false,
                                              "reversed": false,
                                              "allowedToTop": true
                                          }
                                      ]
                                  }
                              },
                              "else": {
                                  "type": "else",
                                  "target": null,
                                  "id": "643873be82cf9d2273b9068a"
                              }
                          },
                          "dynamic": []
                      }
                  },
                  "nodeID": "643873be82cf9d2273b90688"
              },
              "643874b482cf9d2273b90953": {
                  "type": "block",
                  "data": {
                      "name": "Set AI",
                      "color": "#56b365",
                      "steps": [
                          "643874b482cf9d2273b9095b",
                          "643874b482cf9d2273b9095e"
                      ]
                  },
                  "nodeID": "643874b482cf9d2273b90953",
                  "coords": [
                      -321.72987951219045,
                      -63.307659112696115
                  ]
              },
              "643874b482cf9d2273b90955": {
                  "type": "block",
                  "data": {
                      "name": "Set AI sample",
                      "color": "",
                      "steps": [
                          "643874b482cf9d2273b90961",
                          "643874b482cf9d2273b90964",
                          "643874b482cf9d2273b90967",
                          "643874b482cf9d2273b9096a"
                      ]
                  },
                  "nodeID": "643874b482cf9d2273b90955",
                  "coords": [
                      -327.19954974607606,
                      -531.5846547683695
                  ]
              },
              "643874b482cf9d2273b90957": {
                  "type": "block",
                  "data": {
                      "name": "Welcome",
                      "color": "#000000",
                      "steps": [
                          "643874b482cf9d2273b9096e",
                          "643874b482cf9d2273b90971",
                          "643874b482cf9d2273b90974"
                      ]
                  },
                  "nodeID": "643874b482cf9d2273b90957",
                  "coords": [
                      -759.89470620039,
                      -534.1559019190823
                  ]
              },
              "643874b482cf9d2273b90959": {
                  "type": "block",
                  "data": {
                      "name": "AI response output",
                      "color": "#56b365",
                      "steps": [
                          "643874b482cf9d2273b90978"
                      ]
                  },
                  "nodeID": "643874b482cf9d2273b90959",
                  "coords": [
                      -761.5579531610629,
                      -134.2530028839701
                  ]
              },
              "643874b482cf9d2273b9095b": {
                  "type": "ai_set",
                  "data": {
                      "name": "AI Set",
                      "label": "Classify the users sentiment",
                      "sets": [
                          {
                              "prompt": "using the last response {{[last_response].last_response}}, classify the users sentiment as a single word",
                              "variable": "sentiment"
                          }
                      ],
                      "system": "",
                      "maxTokens": 10,
                      "model": "gpt-4",
                      "temperature": 0,
                      "portsV2": {
                          "byKey": {},
                          "builtIn": {
                              "next": {
                                  "type": "next",
                                  "target": "643874b482cf9d2273b9095e",
                                  "id": "643874b482cf9d2273b9095c",
                                  "data": {}
                              }
                          },
                          "dynamic": []
                      }
                  },
                  "nodeID": "643874b482cf9d2273b9095b"
              },
              "643874b482cf9d2273b9095e": {
                  "type": "text",
                  "data": {
                      "name": "Text",
                      "texts": [
                          {
                              "id": "wm8on3eh5",
                              "content": [
                                  {
                                      "children": [
                                          {
                                              "text": "Based on your input, I classified your sentiment as: "
                                          },
                                          {
                                              "id": "sentiment",
                                              "name": "sentiment",
                                              "isSlot": false,
                                              "type": "variable",
                                              "children": [
                                                  {
                                                      "text": ""
                                                  }
                                              ]
                                          },
                                          {
                                              "text": ""
                                          }
                                      ]
                                  }
                              ]
                          }
                      ],
                      "canvasVisibility": "preview",
                      "portsV2": {
                          "byKey": {},
                          "builtIn": {
                              "next": {
                                  "type": "next",
                                  "target": null,
                                  "id": "643874b482cf9d2273b9095f",
                                  "data": {
                                      "points": [
                                          {
                                              "point": [
                                                  -33.0240778694905,
                                                  -124.93501293502982
                                              ],
                                              "toTop": false,
                                              "locked": false,
                                              "reversed": true,
                                              "allowedToTop": false
                                          },
                                          {
                                              "point": [
                                                  -57.0240778694905,
                                                  -124.93501293502982
                                              ],
                                              "toTop": false,
                                              "locked": false,
                                              "reversed": false,
                                              "allowedToTop": false
                                          },
                                          {
                                              "point": [
                                                  -57.0240778694905,
                                                  -50.434861800112
                                              ],
                                              "toTop": false,
                                              "locked": false,
                                              "reversed": false,
                                              "allowedToTop": false
                                          },
                                          {
                                              "point": [
                                                  122.77381608300391,
                                                  -50.434861800112
                                              ],
                                              "toTop": false,
                                              "locked": false,
                                              "reversed": false,
                                              "allowedToTop": false
                                          },
                                          {
                                              "point": [
                                                  122.77381608300391,
                                                  -6.044306016441283
                                              ],
                                              "toTop": true,
                                              "locked": false,
                                              "reversed": false,
                                              "allowedToTop": true
                                          }
                                      ]
                                  }
                              }
                          },
                          "dynamic": []
                      }
                  },
                  "nodeID": "643874b482cf9d2273b9095e"
              },
              "643874b482cf9d2273b90961": {
                  "type": "text",
                  "data": {
                      "name": "Text",
                      "texts": [
                          {
                              "id": "xg77r3eyi",
                              "content": [
                                  {
                                      "children": [
                                          {
                                              "text": "The 'Set AI' step allows you to set variables from a prompt you define."
                                          }
                                      ]
                                  }
                              ]
                          }
                      ],
                      "canvasVisibility": "preview",
                      "portsV2": {
                          "byKey": {},
                          "builtIn": {
                              "next": {
                                  "type": "next",
                                  "target": "643874b482cf9d2273b90964",
                                  "id": "643874b482cf9d2273b90962"
                              }
                          },
                          "dynamic": []
                      }
                  },
                  "nodeID": "643874b482cf9d2273b90961"
              },
              "643874b482cf9d2273b90964": {
                  "type": "text",
                  "data": {
                      "name": "Text",
                      "texts": [
                          {
                              "id": "1l9zc3eha",
                              "content": [
                                  {
                                      "children": [
                                          {
                                              "text": "You might be thinking... \"what in the world does that mean?\". Well, lets just test an example."
                                          }
                                      ]
                                  }
                              ]
                          }
                      ],
                      "canvasVisibility": "preview",
                      "portsV2": {
                          "byKey": {},
                          "builtIn": {
                              "next": {
                                  "type": "next",
                                  "target": "643874b482cf9d2273b90967",
                                  "id": "643874b482cf9d2273b90965"
                              }
                          },
                          "dynamic": []
                      }
                  },
                  "nodeID": "643874b482cf9d2273b90964"
              },
              "643874b482cf9d2273b90967": {
                  "type": "text",
                  "data": {
                      "name": "Text",
                      "texts": [
                          {
                              "id": "s27ac3eqh",
                              "content": [
                                  {
                                      "children": [
                                          {
                                              "text": "say anything",
                                              "fontWeight": "700"
                                          },
                                          {
                                              "text": ", and we'll use the 'Set AI' step to classify your sentimet, and map it to a variable"
                                          }
                                      ]
                                  }
                              ]
                          }
                      ],
                      "canvasVisibility": "preview",
                      "portsV2": {
                          "byKey": {},
                          "builtIn": {
                              "next": {
                                  "type": "next",
                                  "target": "643874b482cf9d2273b9096a",
                                  "id": "643874b482cf9d2273b90968"
                              }
                          },
                          "dynamic": []
                      }
                  },
                  "nodeID": "643874b482cf9d2273b90967"
              },
              "643874b482cf9d2273b9096a": {
                  "type": "captureV2",
                  "data": {
                      "name": "Capture",
                      "intentScope": "GLOBAL",
                      "capture": {
                          "type": "query",
                          "variable": "last_response"
                      },
                      "noReply": null,
                      "noMatch": null,
                      "portsV2": {
                          "byKey": {},
                          "builtIn": {
                              "next": {
                                  "type": "next",
                                  "target": "643874b482cf9d2273b90953",
                                  "id": "643874b482cf9d2273b9096b",
                                  "data": {
                                      "points": [
                                          {
                                              "point": [
                                                  -161.1994343750199,
                                                  -146.5846603522872
                                              ],
                                              "toTop": false,
                                              "locked": false,
                                              "reversed": false,
                                              "allowedToTop": false
                                          },
                                          {
                                              "point": [
                                                  -137.1994343750199,
                                                  -146.5846603522872
                                              ],
                                              "toTop": false,
                                              "locked": false,
                                              "reversed": false,
                                              "allowedToTop": false
                                          },
                                          {
                                              "point": [
                                                  -137.1994343750199,
                                                  -87.30750455475197
                                              ],
                                              "toTop": false,
                                              "locked": false,
                                              "reversed": false,
                                              "allowedToTop": false
                                          },
                                          {
                                              "point": [
                                                  -321.7298913547405,
                                                  -87.30750455475197
                                              ],
                                              "toTop": false,
                                              "locked": false,
                                              "reversed": false,
                                              "allowedToTop": false
                                          },
                                          {
                                              "point": [
                                                  -321.7298913547405,
                                                  -63.30750455475197
                                              ],
                                              "toTop": true,
                                              "locked": false,
                                              "reversed": false,
                                              "allowedToTop": true
                                          }
                                      ]
                                  }
                              },
                              "else": {
                                  "type": "else",
                                  "target": null,
                                  "id": "643874b482cf9d2273b9096c"
                              }
                          },
                          "dynamic": []
                      }
                  },
                  "nodeID": "643874b482cf9d2273b9096a"
              },
              "643874b482cf9d2273b9096e": {
                  "type": "text",
                  "data": {
                      "name": "Text",
                      "texts": [
                          {
                              "id": "xg77r3eyi",
                              "content": [
                                  {
                                      "children": [
                                          {
                                              "text": "The 'Response AI' step allows you to dynamically create responses based on a prompt that you define."
                                          }
                                      ]
                                  }
                              ]
                          }
                      ],
                      "canvasVisibility": "preview",
                      "portsV2": {
                          "byKey": {},
                          "builtIn": {
                              "next": {
                                  "type": "next",
                                  "target": "643874b482cf9d2273b90971",
                                  "id": "643874b482cf9d2273b9096f"
                              }
                          },
                          "dynamic": []
                      }
                  },
                  "nodeID": "643874b482cf9d2273b9096e"
              },
              "643874b482cf9d2273b90971": {
                  "type": "text",
                  "data": {
                      "name": "Text",
                      "texts": [
                          {
                              "id": "s27ac3eqh",
                              "content": [
                                  {
                                      "children": [
                                          {
                                              "text": "Ask any question",
                                              "fontWeight": "700"
                                          },
                                          {
                                              "text": ", and we'll use the response AI step to provide a contextual response."
                                          }
                                      ]
                                  }
                              ]
                          }
                      ],
                      "canvasVisibility": "preview",
                      "portsV2": {
                          "byKey": {},
                          "builtIn": {
                              "next": {
                                  "type": "next",
                                  "target": "643874b482cf9d2273b90974",
                                  "id": "643874b482cf9d2273b90972"
                              }
                          },
                          "dynamic": []
                      }
                  },
                  "nodeID": "643874b482cf9d2273b90971"
              },
              "643874b482cf9d2273b90974": {
                  "type": "captureV2",
                  "data": {
                      "name": "Capture",
                      "intentScope": "GLOBAL",
                      "capture": {
                          "type": "query",
                          "variable": "last_utterance"
                      },
                      "noReply": null,
                      "noMatch": null,
                      "portsV2": {
                          "byKey": {},
                          "builtIn": {
                              "next": {
                                  "type": "next",
                                  "target": "643874b482cf9d2273b90959",
                                  "id": "643874b482cf9d2273b90975",
                                  "data": {
                                      "points": [
                                          {
                                              "point": [
                                                  -925.8947036771242,
                                                  -232.1558252080962
                                              ],
                                              "toTop": false,
                                              "locked": false,
                                              "reversed": true,
                                              "allowedToTop": false
                                          },
                                          {
                                              "point": [
                                                  -949.8947036771242,
                                                  -232.1558252080962
                                              ],
                                              "toTop": false,
                                              "locked": false,
                                              "reversed": false,
                                              "allowedToTop": false
                                          },
                                          {
                                              "point": [
                                                  -949.8947036771242,
                                                  -158.25288311712643
                                              ],
                                              "toTop": false,
                                              "locked": false,
                                              "reversed": false,
                                              "allowedToTop": false
                                          },
                                          {
                                              "point": [
                                                  -761.5580320167377,
                                                  -158.25288311712643
                                              ],
                                              "toTop": false,
                                              "locked": false,
                                              "reversed": false,
                                              "allowedToTop": false
                                          },
                                          {
                                              "point": [
                                                  -761.5580320167377,
                                                  -134.25288311712643
                                              ],
                                              "toTop": true,
                                              "locked": false,
                                              "reversed": false,
                                              "allowedToTop": true
                                          }
                                      ]
                                  }
                              },
                              "else": {
                                  "type": "else",
                                  "target": null,
                                  "id": "643874b482cf9d2273b90976"
                              }
                          },
                          "dynamic": []
                      }
                  },
                  "nodeID": "643874b482cf9d2273b90974"
              },
              "643874b482cf9d2273b90978": {
                  "type": "generative",
                  "data": {
                      "name": "Response AI",
                      "prompt": "Based on the users response {{[last_utterance].last_utterance}}, respond to the user",
                      "system": "You are a helpful assistant",
                      "maxTokens": 100,
                      "model": "gpt-4",
                      "temperature": 0.7,
                      "portsV2": {
                          "byKey": {},
                          "builtIn": {
                              "next": {
                                  "type": "next",
                                  "target": "643874b482cf9d2273b90955",
                                  "id": "643874b482cf9d2273b90979",
                                  "data": {
                                      "points": [
                                          {
                                              "point": [
                                                  -595.5579080797152,
                                                  -32.00283908686845
                                              ],
                                              "toTop": false,
                                              "locked": false,
                                              "reversed": false,
                                              "allowedToTop": false
                                          },
                                          {
                                              "point": [
                                                  -543.8787386317132,
                                                  -32.00283908686845
                                              ],
                                              "toTop": false,
                                              "locked": false,
                                              "reversed": false,
                                              "allowedToTop": false
                                          },
                                          {
                                              "point": [
                                                  -543.8787386317132,
                                                  -504.584540763932
                                              ],
                                              "toTop": false,
                                              "locked": false,
                                              "reversed": false,
                                              "allowedToTop": false
                                          },
                                          {
                                              "point": [
                                                  -492.19956918371133,
                                                  -504.584540763932
                                              ],
                                              "toTop": false,
                                              "locked": false,
                                              "reversed": false,
                                              "allowedToTop": true
                                          }
                                      ]
                                  }
                              }
                          },
                          "dynamic": []
                      }
                  },
                  "nodeID": "643874b482cf9d2273b90978"
              },
              "643874d182cf9d2273b909e8": {
                  "type": "block",
                  "data": {
                      "name": "Welcome",
                      "color": "#000000",
                      "steps": [
                          "643874d182cf9d2273b909ec",
                          "643874d182cf9d2273b909ef",
                          "643874d182cf9d2273b909f2"
                      ]
                  },
                  "nodeID": "643874d182cf9d2273b909e8",
                  "coords": [
                      -372.37350578661807,
                      -483.0309031257145
                  ]
              },
              "643874d182cf9d2273b909ea": {
                  "type": "block",
                  "data": {
                      "name": "AI response output",
                      "color": "#56b365",
                      "steps": [
                          "643874d182cf9d2273b909f6"
                      ]
                  },
                  "nodeID": "643874d182cf9d2273b909ea",
                  "coords": [
                      -374.0367527472909,
                      -83.12800409060253
                  ]
              },
              "643874d182cf9d2273b909ec": {
                  "type": "text",
                  "data": {
                      "name": "Text",
                      "texts": [
                          {
                              "id": "xg77r3eyi",
                              "content": [
                                  {
                                      "children": [
                                          {
                                              "text": "The 'Response AI' step allows you to dynamically create responses based on a prompt that you define."
                                          }
                                      ]
                                  }
                              ]
                          }
                      ],
                      "canvasVisibility": "preview",
                      "portsV2": {
                          "byKey": {},
                          "builtIn": {
                              "next": {
                                  "type": "next",
                                  "target": "643874d182cf9d2273b909ef",
                                  "id": "643874d182cf9d2273b909ed"
                              }
                          },
                          "dynamic": []
                      }
                  },
                  "nodeID": "643874d182cf9d2273b909ec"
              },
              "643874d182cf9d2273b909ef": {
                  "type": "text",
                  "data": {
                      "name": "Text",
                      "texts": [
                          {
                              "id": "s27ac3eqh",
                              "content": [
                                  {
                                      "children": [
                                          {
                                              "text": "Ask any question",
                                              "fontWeight": "700"
                                          },
                                          {
                                              "text": ", and we'll use the response AI step to provide a contextual response."
                                          }
                                      ]
                                  }
                              ]
                          }
                      ],
                      "canvasVisibility": "preview",
                      "portsV2": {
                          "byKey": {},
                          "builtIn": {
                              "next": {
                                  "type": "next",
                                  "target": "643874d182cf9d2273b909f2",
                                  "id": "643874d182cf9d2273b909f0"
                              }
                          },
                          "dynamic": []
                      }
                  },
                  "nodeID": "643874d182cf9d2273b909ef"
              },
              "643874d182cf9d2273b909f2": {
                  "type": "captureV2",
                  "data": {
                      "name": "Capture",
                      "intentScope": "GLOBAL",
                      "capture": {
                          "type": "query",
                          "variable": "last_utterance"
                      },
                      "noReply": null,
                      "noMatch": null,
                      "portsV2": {
                          "byKey": {},
                          "builtIn": {
                              "next": {
                                  "type": "next",
                                  "target": "643874d182cf9d2273b909ea",
                                  "id": "643874d182cf9d2273b909f3",
                                  "data": {
                                      "points": [
                                          {
                                              "point": [
                                                  -538.3737632125188,
                                                  -181.03060602450773
                                              ],
                                              "toTop": false,
                                              "locked": false,
                                              "reversed": true,
                                              "allowedToTop": false
                                          },
                                          {
                                              "point": [
                                                  -562.3737632125188,
                                                  -181.03060602450773
                                              ],
                                              "toTop": false,
                                              "locked": false,
                                              "reversed": false,
                                              "allowedToTop": false
                                          },
                                          {
                                              "point": [
                                                  -562.3737632125188,
                                                  -107.12783788023637
                                              ],
                                              "toTop": false,
                                              "locked": false,
                                              "reversed": false,
                                              "allowedToTop": false
                                          },
                                          {
                                              "point": [
                                                  -374.0367436587356,
                                                  -107.12783788023637
                                              ],
                                              "toTop": false,
                                              "locked": false,
                                              "reversed": false,
                                              "allowedToTop": false
                                          },
                                          {
                                              "point": [
                                                  -374.0367436587356,
                                                  -83.12783788023637
                                              ],
                                              "toTop": true,
                                              "locked": false,
                                              "reversed": false,
                                              "allowedToTop": true
                                          }
                                      ]
                                  }
                              },
                              "else": {
                                  "type": "else",
                                  "target": null,
                                  "id": "643874d182cf9d2273b909f4"
                              }
                          },
                          "dynamic": []
                      }
                  },
                  "nodeID": "643874d182cf9d2273b909f2"
              },
              "643874d182cf9d2273b909f6": {
                  "type": "generative",
                  "data": {
                      "name": "Response AI",
                      "prompt": "Based on the users response {{[last_utterance].last_utterance}}, respond to the user",
                      "system": "You are a helpful assistant",
                      "maxTokens": 100,
                      "model": "gpt-4",
                      "temperature": 0.7,
                      "portsV2": {
                          "byKey": {},
                          "builtIn": {
                              "next": {
                                  "type": "next",
                                  "target": null,
                                  "id": "643874d182cf9d2273b909f7",
                                  "data": {
                                      "points": [
                                          {
                                              "point": [
                                                  -203.5519554349242,
                                                  -274.8466263502904
                                              ],
                                              "toTop": false,
                                              "locked": false,
                                              "reversed": false,
                                              "allowedToTop": false
                                          },
                                          {
                                              "point": [
                                                  -163.1054222317992,
                                                  -274.8466263502904
                                              ],
                                              "toTop": false,
                                              "locked": false,
                                              "reversed": false,
                                              "allowedToTop": false
                                          },
                                          {
                                              "point": [
                                                  -163.1054222317992,
                                                  -630.6544876784154
                                              ],
                                              "toTop": false,
                                              "locked": false,
                                              "reversed": false,
                                              "allowedToTop": false
                                          },
                                          {
                                              "point": [
                                                  -122.6588890286742,
                                                  -630.6544876784154
                                              ],
                                              "toTop": false,
                                              "locked": false,
                                              "reversed": false,
                                              "allowedToTop": true
                                          }
                                      ]
                                  }
                              }
                          },
                          "dynamic": []
                      }
                  },
                  "nodeID": "643874d182cf9d2273b909f6"
              },
              "643874eb82cf9d2273b909fa": {
                  "type": "block",
                  "data": {
                      "name": "Set AI",
                      "color": "#56b365",
                      "steps": [
                          "643874eb82cf9d2273b909fe",
                          "643874eb82cf9d2273b90a01"
                      ]
                  },
                  "nodeID": "643874eb82cf9d2273b909fa",
                  "coords": [
                      -556.9039789499768,
                      -48.940886202522734
                  ]
              },
              "643874eb82cf9d2273b909fc": {
                  "type": "block",
                  "data": {
                      "name": "Set AI sample",
                      "color": "",
                      "steps": [
                          "643874eb82cf9d2273b90a04",
                          "643874eb82cf9d2273b90a07",
                          "643874eb82cf9d2273b90a0a",
                          "643874eb82cf9d2273b90a0d"
                      ]
                  },
                  "nodeID": "643874eb82cf9d2273b909fc",
                  "coords": [
                      -562.3736491838624,
                      -517.2178818581958
                  ]
              },
              "643874eb82cf9d2273b909fe": {
                  "type": "ai_set",
                  "data": {
                      "name": "AI Set",
                      "label": "Classify the users sentiment",
                      "sets": [
                          {
                              "prompt": "using the last response {{[last_response].last_response}}, classify the users sentiment as a single word",
                              "variable": "sentiment"
                          }
                      ],
                      "system": "",
                      "maxTokens": 10,
                      "model": "gpt-4",
                      "temperature": 0,
                      "portsV2": {
                          "byKey": {},
                          "builtIn": {
                              "next": {
                                  "type": "next",
                                  "target": "643874eb82cf9d2273b90a01",
                                  "id": "643874eb82cf9d2273b909ff",
                                  "data": {}
                              }
                          },
                          "dynamic": []
                      }
                  },
                  "nodeID": "643874eb82cf9d2273b909fe"
              },
              "643874eb82cf9d2273b90a01": {
                  "type": "text",
                  "data": {
                      "name": "Text",
                      "texts": [
                          {
                              "id": "wm8on3eh5",
                              "content": [
                                  {
                                      "children": [
                                          {
                                              "text": "Based on your input, I classified your sentiment as: "
                                          },
                                          {
                                              "id": "sentiment",
                                              "name": "sentiment",
                                              "isSlot": false,
                                              "type": "variable",
                                              "children": [
                                                  {
                                                      "text": ""
                                                  }
                                              ]
                                          },
                                          {
                                              "text": ""
                                          }
                                      ]
                                  }
                              ]
                          }
                      ],
                      "canvasVisibility": "preview",
                      "portsV2": {
                          "byKey": {},
                          "builtIn": {
                              "next": {
                                  "type": "next",
                                  "target": null,
                                  "id": "643874eb82cf9d2273b90a02",
                                  "data": {
                                      "points": [
                                          {
                                              "point": [
                                                  -261.0733205415116,
                                                  -210.31623474557398
                                              ],
                                              "toTop": false,
                                              "locked": false,
                                              "reversed": true,
                                              "allowedToTop": false
                                          },
                                          {
                                              "point": [
                                                  -285.0733205415116,
                                                  -210.31623474557398
                                              ],
                                              "toTop": false,
                                              "locked": false,
                                              "reversed": false,
                                              "allowedToTop": false
                                          },
                                          {
                                              "point": [
                                                  -285.0733205415116,
                                                  -135.81608361065616
                                              ],
                                              "toTop": false,
                                              "locked": false,
                                              "reversed": false,
                                              "allowedToTop": false
                                          },
                                          {
                                              "point": [
                                                  -105.27542658901717,
                                                  -135.81608361065616
                                              ],
                                              "toTop": false,
                                              "locked": false,
                                              "reversed": false,
                                              "allowedToTop": false
                                          },
                                          {
                                              "point": [
                                                  -105.27542658901717,
                                                  -91.42552782698544
                                              ],
                                              "toTop": true,
                                              "locked": false,
                                              "reversed": false,
                                              "allowedToTop": true
                                          }
                                      ]
                                  }
                              }
                          },
                          "dynamic": []
                      }
                  },
                  "nodeID": "643874eb82cf9d2273b90a01"
              },
              "643874eb82cf9d2273b90a04": {
                  "type": "text",
                  "data": {
                      "name": "Text",
                      "texts": [
                          {
                              "id": "xg77r3eyi",
                              "content": [
                                  {
                                      "children": [
                                          {
                                              "text": "The 'Set AI' step allows you to set variables from a prompt you define."
                                          }
                                      ]
                                  }
                              ]
                          }
                      ],
                      "canvasVisibility": "preview",
                      "portsV2": {
                          "byKey": {},
                          "builtIn": {
                              "next": {
                                  "type": "next",
                                  "target": "643874eb82cf9d2273b90a07",
                                  "id": "643874eb82cf9d2273b90a05"
                              }
                          },
                          "dynamic": []
                      }
                  },
                  "nodeID": "643874eb82cf9d2273b90a04"
              },
              "643874eb82cf9d2273b90a07": {
                  "type": "text",
                  "data": {
                      "name": "Text",
                      "texts": [
                          {
                              "id": "1l9zc3eha",
                              "content": [
                                  {
                                      "children": [
                                          {
                                              "text": "You might be thinking... \"what in the world does that mean?\". Well, lets just test an example."
                                          }
                                      ]
                                  }
                              ]
                          }
                      ],
                      "canvasVisibility": "preview",
                      "portsV2": {
                          "byKey": {},
                          "builtIn": {
                              "next": {
                                  "type": "next",
                                  "target": "643874eb82cf9d2273b90a0a",
                                  "id": "643874eb82cf9d2273b90a08"
                              }
                          },
                          "dynamic": []
                      }
                  },
                  "nodeID": "643874eb82cf9d2273b90a07"
              },
              "643874eb82cf9d2273b90a0a": {
                  "type": "text",
                  "data": {
                      "name": "Text",
                      "texts": [
                          {
                              "id": "s27ac3eqh",
                              "content": [
                                  {
                                      "children": [
                                          {
                                              "text": "say anything",
                                              "fontWeight": "700"
                                          },
                                          {
                                              "text": ", and we'll use the 'Set AI' step to classify your sentimet, and map it to a variable"
                                          }
                                      ]
                                  }
                              ]
                          }
                      ],
                      "canvasVisibility": "preview",
                      "portsV2": {
                          "byKey": {},
                          "builtIn": {
                              "next": {
                                  "type": "next",
                                  "target": "643874eb82cf9d2273b90a0d",
                                  "id": "643874eb82cf9d2273b90a0b"
                              }
                          },
                          "dynamic": []
                      }
                  },
                  "nodeID": "643874eb82cf9d2273b90a0a"
              },
              "643874eb82cf9d2273b90a0d": {
                  "type": "captureV2",
                  "data": {
                      "name": "Capture",
                      "intentScope": "GLOBAL",
                      "capture": {
                          "type": "query",
                          "variable": "last_response"
                      },
                      "noReply": null,
                      "noMatch": null,
                      "portsV2": {
                          "byKey": {},
                          "builtIn": {
                              "next": {
                                  "type": "next",
                                  "target": "643874eb82cf9d2273b909fa",
                                  "id": "643874eb82cf9d2273b90a0e",
                                  "data": {
                                      "points": [
                                          {
                                              "point": [
                                                  -396.3736198152747,
                                                  -132.21749310519454
                                              ],
                                              "toTop": false,
                                              "locked": false,
                                              "reversed": false,
                                              "allowedToTop": false
                                          },
                                          {
                                              "point": [
                                                  -372.3736198152747,
                                                  -132.21749310519454
                                              ],
                                              "toTop": false,
                                              "locked": false,
                                              "reversed": false,
                                              "allowedToTop": false
                                          },
                                          {
                                              "point": [
                                                  -372.3736198152747,
                                                  -72.94085914775496
                                              ],
                                              "toTop": false,
                                              "locked": false,
                                              "reversed": false,
                                              "allowedToTop": false
                                          },
                                          {
                                              "point": [
                                                  -556.9039028482964,
                                                  -72.94085914775496
                                              ],
                                              "toTop": false,
                                              "locked": false,
                                              "reversed": false,
                                              "allowedToTop": false
                                          },
                                          {
                                              "point": [
                                                  -556.9039028482964,
                                                  -48.94085914775496
                                              ],
                                              "toTop": true,
                                              "locked": false,
                                              "reversed": false,
                                              "allowedToTop": true
                                          }
                                      ]
                                  }
                              },
                              "else": {
                                  "type": "else",
                                  "target": null,
                                  "id": "643874eb82cf9d2273b90a0f"
                              }
                          },
                          "dynamic": []
                      }
                  },
                  "nodeID": "643874eb82cf9d2273b90a0d"
              },
              "6438784f82cf9d2273b90dd4": {
                  "type": "block",
                  "data": {
                      "name": "Use Logic to Route",
                      "color": "#dc8879",
                      "steps": [
                          "6438784f82cf9d2273b90ddc"
                      ]
                  },
                  "nodeID": "6438784f82cf9d2273b90dd4",
                  "coords": [
                      -1964.4846386537488,
                      -626.9744457114995
                  ]
              },
              "6438784f82cf9d2273b90dd6": {
                  "type": "block",
                  "data": {
                      "name": "Capture Information",
                      "color": "#dc8879",
                      "steps": [
                          "6438784f82cf9d2273b90de0",
                          "6438784f82cf9d2273b90de3"
                      ]
                  },
                  "nodeID": "6438784f82cf9d2273b90dd6",
                  "coords": [
                      -2376.095116200327,
                      -628.3840706346044
                  ]
              },
              "6438784f82cf9d2273b90dd8": {
                  "type": "block",
                  "data": {
                      "name": "Other names",
                      "color": "#dc8879",
                      "steps": [
                          "6438784f82cf9d2273b90de7"
                      ]
                  },
                  "nodeID": "6438784f82cf9d2273b90dd8",
                  "coords": [
                      -1563.5642881833433,
                      -467.2936955577087
                  ]
              },
              "6438784f82cf9d2273b90dda": {
                  "type": "block",
                  "data": {
                      "name": "Elon Musk",
                      "color": "#dc8879",
                      "steps": [
                          "6438784f82cf9d2273b90dea"
                      ]
                  },
                  "nodeID": "6438784f82cf9d2273b90dda",
                  "coords": [
                      -1564.8142881833433,
                      -626.0436955577089
                  ]
              },
              "6438784f82cf9d2273b90ddc": {
                  "type": "ifV2",
                  "data": {
                      "name": "If",
                      "expressions": [
                          {
                              "type": null,
                              "name": "If name is elon musk",
                              "value": [
                                  {
                                      "logicInterface": "variable",
                                      "type": "equals",
                                      "value": [
                                          {
                                              "type": "variable",
                                              "value": "name"
                                          },
                                          {
                                              "type": "value",
                                              "value": "elon musk"
                                          }
                                      ]
                                  }
                              ]
                          }
                      ],
                      "noMatch": {
                          "type": "path",
                          "pathName": "All other names"
                      },
                      "portsV2": {
                          "byKey": {},
                          "builtIn": {
                              "else": {
                                  "type": "else",
                                  "target": "6438784f82cf9d2273b90dd8",
                                  "id": "6438784f82cf9d2273b90ddd",
                                  "data": {
                                      "points": [
                                          {
                                              "point": [
                                                  -1798.484505972181,
                                                  -492.72447921623757
                                              ],
                                              "toTop": false,
                                              "locked": false,
                                              "reversed": false,
                                              "allowedToTop": false
                                          },
                                          {
                                              "point": [
                                                  -1763.5243607307511,
                                                  -492.72447921623757
                                              ],
                                              "toTop": false,
                                              "locked": false,
                                              "reversed": false,
                                              "allowedToTop": false
                                          },
                                          {
                                              "point": [
                                                  -1763.5243607307511,
                                                  -440.2937029472216
                                              ],
                                              "toTop": false,
                                              "locked": false,
                                              "reversed": false,
                                              "allowedToTop": false
                                          },
                                          {
                                              "point": [
                                                  -1728.5642154893217,
                                                  -440.2937029472216
                                              ],
                                              "toTop": false,
                                              "locked": false,
                                              "reversed": false,
                                              "allowedToTop": true
                                          }
                                      ]
                                  }
                              }
                          },
                          "dynamic": [
                              {
                                  "type": "",
                                  "target": "6438784f82cf9d2273b90dda",
                                  "id": "6438784f82cf9d2273b90dde",
                                  "data": {
                                      "points": [
                                          {
                                              "point": [
                                                  -1798.484505972181,
                                                  -547.2244999131336
                                              ],
                                              "toTop": false,
                                              "locked": false,
                                              "reversed": false,
                                              "allowedToTop": false
                                          },
                                          {
                                              "point": [
                                                  -1764.1493300508728,
                                                  -547.2244999131336
                                              ],
                                              "toTop": false,
                                              "locked": false,
                                              "reversed": false,
                                              "allowedToTop": false
                                          },
                                          {
                                              "point": [
                                                  -1764.1493300508728,
                                                  -599.0438504799286
                                              ],
                                              "toTop": false,
                                              "locked": false,
                                              "reversed": false,
                                              "allowedToTop": false
                                          },
                                          {
                                              "point": [
                                                  -1729.814154129565,
                                                  -599.0438504799286
                                              ],
                                              "toTop": false,
                                              "locked": false,
                                              "reversed": false,
                                              "allowedToTop": true
                                          }
                                      ],
                                      "event": {
                                          "type": "If name is elon musk"
                                      }
                                  }
                              }
                          ]
                      }
                  },
                  "nodeID": "6438784f82cf9d2273b90ddc"
              },
              "6438784f82cf9d2273b90de0": {
                  "type": "text",
                  "data": {
                      "name": "Text",
                      "texts": [
                          {
                              "id": "s8a30349g",
                              "content": [
                                  {
                                      "children": [
                                          {
                                              "text": "What is your name?"
                                          }
                                      ]
                                  }
                              ]
                          }
                      ],
                      "canvasVisibility": "preview",
                      "portsV2": {
                          "byKey": {},
                          "builtIn": {
                              "next": {
                                  "type": "next",
                                  "target": "6438784f82cf9d2273b90de3",
                                  "id": "6438784f82cf9d2273b90de1"
                              }
                          },
                          "dynamic": []
                      }
                  },
                  "nodeID": "6438784f82cf9d2273b90de0"
              },
              "6438784f82cf9d2273b90de3": {
                  "type": "captureV2",
                  "data": {
                      "name": "Capture",
                      "intentScope": "GLOBAL",
                      "capture": {
                          "type": "query",
                          "variable": "name"
                      },
                      "noReply": null,
                      "noMatch": null,
                      "portsV2": {
                          "byKey": {},
                          "builtIn": {
                              "next": {
                                  "type": "next",
                                  "target": "6438784f82cf9d2273b90dd4",
                                  "id": "6438784f82cf9d2273b90de4",
                                  "data": {
                                      "points": [
                                          {
                                              "point": [
                                                  -2210.0950799471193,
                                                  -488.1341077200336
                                              ],
                                              "toTop": false,
                                              "locked": false,
                                              "reversed": false,
                                              "allowedToTop": false
                                          },
                                          {
                                              "point": [
                                                  -2169.789872823509,
                                                  -488.1341077200336
                                              ],
                                              "toTop": false,
                                              "locked": false,
                                              "reversed": false,
                                              "allowedToTop": false
                                          },
                                          {
                                              "point": [
                                                  -2169.789872823509,
                                                  -599.9743336839742
                                              ],
                                              "toTop": false,
                                              "locked": false,
                                              "reversed": false,
                                              "allowedToTop": false
                                          },
                                          {
                                              "point": [
                                                  -2129.484665699899,
                                                  -599.9743336839742
                                              ],
                                              "toTop": false,
                                              "locked": false,
                                              "reversed": false,
                                              "allowedToTop": true
                                          }
                                      ]
                                  }
                              },
                              "else": {
                                  "type": "else",
                                  "target": null,
                                  "id": "6438784f82cf9d2273b90de5"
                              }
                          },
                          "dynamic": []
                      }
                  },
                  "nodeID": "6438784f82cf9d2273b90de3"
              },
              "6438784f82cf9d2273b90de7": {
                  "type": "text",
                  "data": {
                      "name": "Text",
                      "texts": [
                          {
                              "id": "1jabe34gf",
                              "content": [
                                  {
                                      "children": [
                                          {
                                              "text": "Hello "
                                          },
                                          {
                                              "id": "name",
                                              "name": "name",
                                              "isSlot": false,
                                              "type": "variable",
                                              "children": [
                                                  {
                                                      "text": ""
                                                  }
                                              ]
                                          },
                                          {
                                              "text": " !"
                                          }
                                      ]
                                  }
                              ]
                          }
                      ],
                      "canvasVisibility": "preview",
                      "portsV2": {
                          "byKey": {},
                          "builtIn": {
                              "next": {
                                  "type": "next",
                                  "target": null,
                                  "id": "6438784f82cf9d2273b90de8"
                              }
                          },
                          "dynamic": []
                      }
                  },
                  "nodeID": "6438784f82cf9d2273b90de7"
              },
              "6438784f82cf9d2273b90dea": {
                  "type": "text",
                  "data": {
                      "name": "Text",
                      "texts": [
                          {
                              "id": "1jabe34gf",
                              "content": [
                                  {
                                      "children": [
                                          {
                                              "text": "Twitter is the best 🐦"
                                          }
                                      ]
                                  }
                              ]
                          }
                      ],
                      "canvasVisibility": "preview",
                      "portsV2": {
                          "byKey": {},
                          "builtIn": {
                              "next": {
                                  "type": "next",
                                  "target": null,
                                  "id": "6438784f82cf9d2273b90deb"
                              }
                          },
                          "dynamic": []
                      }
                  },
                  "nodeID": "6438784f82cf9d2273b90dea"
              },
              "645d6f1383103cca7a3ce732": {
                  "type": "block",
                  "data": {
                      "name": "Welcome",
                      "color": "#56b365",
                      "steps": [
                          "645d6f1383103cca7a3ce736",
                          "645d6f1383103cca7a3ce739",
                          "645d6f1383103cca7a3ce73c"
                      ]
                  },
                  "nodeID": "645d6f1383103cca7a3ce732",
                  "coords": [
                      -535.4719325269735,
                      -4.484361157018327
                  ]
              },
              "645d6f1383103cca7a3ce734": {
                  "type": "block",
                  "data": {
                      "name": "AI response output",
                      "color": "#56b365",
                      "steps": [
                          "645d6f1383103cca7a3ce740"
                      ]
                  },
                  "nodeID": "645d6f1383103cca7a3ce734",
                  "coords": [
                      -537.1351794876463,
                      395.41853787809356
                  ]
              },
              "645d6f1383103cca7a3ce736": {
                  "type": "text",
                  "data": {
                      "name": "Text",
                      "texts": [
                          {
                              "id": "xg77r3eyi",
                              "content": [
                                  {
                                      "children": [
                                          {
                                              "text": "The 'Response AI' step allows you to dynamically create responses based on a prompt that you define."
                                          }
                                      ]
                                  }
                              ]
                          }
                      ],
                      "canvasVisibility": "preview",
                      "portsV2": {
                          "byKey": {},
                          "builtIn": {
                              "next": {
                                  "type": "next",
                                  "target": "645d6f1383103cca7a3ce739",
                                  "id": "645d6f1383103cca7a3ce737"
                              }
                          },
                          "dynamic": []
                      }
                  },
                  "nodeID": "645d6f1383103cca7a3ce736"
              },
              "645d6f1383103cca7a3ce739": {
                  "type": "text",
                  "data": {
                      "name": "Text",
                      "texts": [
                          {
                              "id": "s27ac3eqh",
                              "content": [
                                  {
                                      "children": [
                                          {
                                              "text": "Ask any question",
                                              "fontWeight": "700"
                                          },
                                          {
                                              "text": ", and we'll use the response AI step to provide a contextual response."
                                          }
                                      ]
                                  }
                              ]
                          }
                      ],
                      "canvasVisibility": "preview",
                      "portsV2": {
                          "byKey": {},
                          "builtIn": {
                              "next": {
                                  "type": "next",
                                  "target": "645d6f1383103cca7a3ce73c",
                                  "id": "645d6f1383103cca7a3ce73a"
                              }
                          },
                          "dynamic": []
                      }
                  },
                  "nodeID": "645d6f1383103cca7a3ce739"
              },
              "645d6f1383103cca7a3ce73c": {
                  "type": "captureV2",
                  "data": {
                      "name": "Capture",
                      "intentScope": "GLOBAL",
                      "capture": {
                          "type": "query",
                          "variable": "last_utterance"
                      },
                      "noReply": null,
                      "noMatch": null,
                      "portsV2": {
                          "byKey": {},
                          "builtIn": {
                              "next": {
                                  "type": "next",
                                  "target": "645d6f1383103cca7a3ce734",
                                  "id": "645d6f1383103cca7a3ce73d",
                                  "data": {
                                      "points": [
                                          {
                                              "point": [
                                                  -701.4692078069633,
                                                  297.5201460803028
                                              ],
                                              "reversed": true
                                          },
                                          {
                                              "point": [
                                                  -725.4692078069633,
                                                  297.5201460803028
                                              ]
                                          },
                                          {
                                              "point": [
                                                  -725.4692078069633,
                                                  371.4201460803028
                                              ]
                                          },
                                          {
                                              "point": [
                                                  -537.1392078069632,
                                                  371.4201460803028
                                              ]
                                          },
                                          {
                                              "point": [
                                                  -537.1392078069632,
                                                  395.4201460803029
                                              ],
                                              "toTop": true,
                                              "allowedToTop": true
                                          }
                                      ]
                                  }
                              },
                              "else": {
                                  "type": "else",
                                  "target": null,
                                  "id": "645d6f1383103cca7a3ce73e"
                              }
                          },
                          "dynamic": []
                      }
                  },
                  "nodeID": "645d6f1383103cca7a3ce73c"
              },
              "645d6f1383103cca7a3ce740": {
                  "type": "generative",
                  "data": {
                      "name": "Response AI",
                      "prompt": "Based on the users question, respond with two brief sentences.",
                      "system": "You are a helpful assistant",
                      "maxTokens": 100,
                      "model": "gpt-4",
                      "temperature": 0.7,
                      "mode": "memory_prompt",
                      "portsV2": {
                          "byKey": {},
                          "builtIn": {
                              "next": {
                                  "type": "next",
                                  "target": null,
                                  "id": "645d6f1383103cca7a3ce741",
                                  "data": {
                                      "points": [
                                          {
                                              "point": [
                                                  -366.65038217527956,
                                                  203.69991561840578
                                              ],
                                              "toTop": false,
                                              "locked": false,
                                              "reversed": false,
                                              "allowedToTop": false
                                          },
                                          {
                                              "point": [
                                                  -326.20384897215456,
                                                  203.69991561840578
                                              ],
                                              "toTop": false,
                                              "locked": false,
                                              "reversed": false,
                                              "allowedToTop": false
                                          },
                                          {
                                              "point": [
                                                  -326.20384897215456,
                                                  -152.10794570971922
                                              ],
                                              "toTop": false,
                                              "locked": false,
                                              "reversed": false,
                                              "allowedToTop": false
                                          },
                                          {
                                              "point": [
                                                  -285.75731576902956,
                                                  -152.10794570971922
                                              ],
                                              "toTop": false,
                                              "locked": false,
                                              "reversed": false,
                                              "allowedToTop": true
                                          }
                                      ]
                                  }
                              }
                          },
                          "dynamic": []
                      }
                  },
                  "nodeID": "645d6f1383103cca7a3ce740"
              },
              "645d718f83103cca7a3cecc1": {
                  "type": "block",
                  "data": {
                      "name": "Fail",
                      "color": "#5b9fd7",
                      "steps": [
                          "645d718f83103cca7a3cecc9"
                      ]
                  },
                  "nodeID": "645d718f83103cca7a3cecc1",
                  "coords": [
                      -943.7641060825457,
                      -726.7018427371622
                  ]
              },
              "645d718f83103cca7a3cecc3": {
                  "type": "block",
                  "data": {
                      "name": "API Call",
                      "color": "#5b9fd7",
                      "steps": [
                          "645d718f83103cca7a3ceccc"
                      ]
                  },
                  "nodeID": "645d718f83103cca7a3cecc3",
                  "coords": [
                      -1337.282813902139,
                      -902.1537022731807
                  ]
              },
              "645d718f83103cca7a3cecc5": {
                  "type": "block",
                  "data": {
                      "name": "Welcome",
                      "color": "#5b9fd7",
                      "steps": [
                          "645d718f83103cca7a3cecd0",
                          "645d718f83103cca7a3cecd3"
                      ]
                  },
                  "nodeID": "645d718f83103cca7a3cecc5",
                  "coords": [
                      -1722.1832079861151,
                      -907.6478276212674
                  ]
              },
              "645d718f83103cca7a3cecc7": {
                  "type": "block",
                  "data": {
                      "name": "Success",
                      "color": "#5b9fd7",
                      "steps": [
                          "645d718f83103cca7a3cecd7"
                      ]
                  },
                  "nodeID": "645d718f83103cca7a3cecc7",
                  "coords": [
                      -944.844860096504,
                      -900.8660415973322
                  ]
              },
              "645d718f83103cca7a3cecc9": {
                  "type": "text",
                  "data": {
                      "name": "Text",
                      "texts": [
                          {
                              "id": "u08yz372g",
                              "content": [
                                  {
                                      "children": [
                                          {
                                              "text": "Error"
                                          }
                                      ]
                                  }
                              ]
                          }
                      ],
                      "canvasVisibility": "preview",
                      "portsV2": {
                          "byKey": {},
                          "builtIn": {
                              "next": {
                                  "type": "next",
                                  "target": null,
                                  "id": "645d718f83103cca7a3cecca"
                              }
                          },
                          "dynamic": []
                      }
                  },
                  "nodeID": "645d718f83103cca7a3cecc9"
              },
              "645d718f83103cca7a3ceccc": {
                  "type": "api",
                  "data": {
                      "name": "",
                      "url": "https://api.openai.com/v1/completions",
                      "body": [
                          {
                              "key": "",
                              "val": ""
                          }
                      ],
                      "params": [],
                      "method": "POST",
                      "headers": [
                          {
                              "key": "Content-Type",
                              "val": "application/json"
                          },
                          {
                              "key": "Authorization",
                              "val": "Bearer <ADD API KEY HERE>"
                          }
                      ],
                      "content": "{\n  \"model\": \"text-davinci-003\",\n  \"prompt\": \"{last_utterance}\",\n  \"max_tokens\": 7,\n  \"temperature\": 0,\n  \"top_p\": 1,\n  \"n\": 1,\n  \"stream\": false,\n  \"logprobs\": null,\n  \"stop\": \"\\n\"\n}",
                      "mappings": [
                          {
                              "path": "response",
                              "var": "response"
                          }
                      ],
                      "bodyType": "rawInput",
                      "selectedAction": "Make a POST Request",
                      "selectedIntegration": "Custom API",
                      "portsV2": {
                          "byKey": {},
                          "builtIn": {
                              "next": {
                                  "type": "next",
                                  "target": "645d718f83103cca7a3cecd7",
                                  "id": "645d718f83103cca7a3cecce",
                                  "data": {
                                      "points": [
                                          {
                                              "point": [
                                                  -1171.2838307947716,
                                                  -748.4052156062919
                                              ]
                                          },
                                          {
                                              "point": [
                                                  -1141.0638307947715,
                                                  -748.4052156062919
                                              ]
                                          },
                                          {
                                              "point": [
                                                  -1141.0638307947715,
                                                  -821.3652156062917
                                              ]
                                          },
                                          {
                                              "point": [
                                                  -1110.8438307947717,
                                                  -821.3652156062917
                                              ],
                                              "allowedToTop": false
                                          }
                                      ]
                                  }
                              },
                              "fail": {
                                  "type": "fail",
                                  "target": "645d718f83103cca7a3cecc9",
                                  "id": "645d718f83103cca7a3ceccd",
                                  "data": {
                                      "points": [
                                          {
                                              "point": [
                                                  -1171.2838307947716,
                                                  -693.9052156062919
                                              ]
                                          },
                                          {
                                              "point": [
                                                  -1140.5238307947716,
                                                  -693.9052156062919
                                              ]
                                          },
                                          {
                                              "point": [
                                                  -1140.5238307947716,
                                                  -647.2052156062919
                                              ]
                                          },
                                          {
                                              "point": [
                                                  -1109.7638307947714,
                                                  -647.2052156062919
                                              ],
                                              "allowedToTop": false
                                          }
                                      ]
                                  }
                              }
                          },
                          "dynamic": []
                      }
                  },
                  "nodeID": "645d718f83103cca7a3ceccc"
              },
              "645d718f83103cca7a3cecd0": {
                  "type": "text",
                  "data": {
                      "name": "Text",
                      "texts": [
                          {
                              "id": "xg77r3eyi",
                              "content": [
                                  {
                                      "children": [
                                          {
                                              "text": "This flow captures a users question and sends it to the OpenAI API"
                                          }
                                      ]
                                  }
                              ]
                          }
                      ],
                      "canvasVisibility": "preview",
                      "portsV2": {
                          "byKey": {},
                          "builtIn": {
                              "next": {
                                  "type": "next",
                                  "target": "645d718f83103cca7a3cecd3",
                                  "id": "645d718f83103cca7a3cecd1"
                              }
                          },
                          "dynamic": []
                      }
                  },
                  "nodeID": "645d718f83103cca7a3cecd0"
              },
              "645d718f83103cca7a3cecd3": {
                  "type": "captureV2",
                  "data": {
                      "name": "Capture",
                      "intentScope": "GLOBAL",
                      "capture": {
                          "type": "query",
                          "variable": "last_utterance"
                      },
                      "noReply": null,
                      "noMatch": null,
                      "portsV2": {
                          "byKey": {},
                          "builtIn": {
                              "next": {
                                  "type": "next",
                                  "target": "645d718f83103cca7a3cecc3",
                                  "id": "645d718f83103cca7a3cecd4",
                                  "data": {
                                      "points": [
                                          {
                                              "point": [
                                                  -1556.1838307947714,
                                                  -733.6452156062919
                                              ]
                                          },
                                          {
                                              "point": [
                                                  -1529.2338307947716,
                                                  -733.6452156062919
                                              ]
                                          },
                                          {
                                              "point": [
                                                  -1529.2338307947716,
                                                  -875.1552156062919
                                              ]
                                          },
                                          {
                                              "point": [
                                                  -1502.2838307947716,
                                                  -875.1552156062919
                                              ],
                                              "allowedToTop": true
                                          }
                                      ]
                                  }
                              },
                              "else": {
                                  "type": "else",
                                  "target": null,
                                  "id": "645d718f83103cca7a3cecd5"
                              }
                          },
                          "dynamic": []
                      }
                  },
                  "nodeID": "645d718f83103cca7a3cecd3"
              },
              "645d718f83103cca7a3cecd7": {
                  "type": "text",
                  "data": {
                      "name": "Text",
                      "texts": [
                          {
                              "id": "vh8xb37hw",
                              "content": [
                                  {
                                      "children": [
                                          {
                                              "text": ""
                                          },
                                          {
                                              "id": "response",
                                              "name": "response",
                                              "isSlot": false,
                                              "type": "variable",
                                              "children": [
                                                  {
                                                      "text": ""
                                                  }
                                              ]
                                          },
                                          {
                                              "text": " "
                                          }
                                      ]
                                  }
                              ]
                          }
                      ],
                      "canvasVisibility": "preview",
                      "portsV2": {
                          "byKey": {},
                          "builtIn": {
                              "next": {
                                  "type": "next",
                                  "target": null,
                                  "id": "645d718f83103cca7a3cecd8"
                              }
                          },
                          "dynamic": []
                      }
                  },
                  "nodeID": "645d718f83103cca7a3cecd7"
              }
          }
      },
      "6495e613693d0200073ccccf": {
          "_id": "6495e613693d0200073ccccf",
          "name": "Storage",
          "type": "TOPIC",
          "zoom": 100,
          "nodes": {
              "6495e613f7ea0e000725981a": {
                  "type": "block",
                  "nodeID": "6495e613f7ea0e000725981a",
                  "coords": [
                      282.5,
                      117.5
                  ],
                  "data": {
                      "name": "",
                      "color": "",
                      "steps": [
                          "6495e613f7ea0e0007259819"
                      ]
                  }
              },
              "6495e613f7ea0e0007259819": {
                  "type": "intent",
                  "nodeID": "6495e613f7ea0e0007259819",
                  "data": {
                      "mappings": [],
                      "portsV2": {
                          "byKey": {},
                          "builtIn": {
                              "next": {
                                  "id": "6495e613f7ea0e000725981b",
                                  "type": "next",
                                  "target": "649b29be65b4982080fd6488",
                                  "data": {}
                              }
                          },
                          "dynamic": []
                      },
                      "availability": "GLOBAL",
                      "name": "",
                      "intent": "pdn53hmq"
                  }
              },
              "6495e7d516ecab5cf526c8e5": {
                  "type": "text",
                  "data": {
                      "name": "Text",
                      "texts": [
                          {
                              "id": "w2wk3hms",
                              "content": [
                                  {
                                      "children": [
                                          {
                                              "text": "Enter the data you want to upload!"
                                          }
                                      ]
                                  }
                              ]
                          },
                          {
                              "id": "ma2d93hai",
                              "content": [
                                  {
                                      "children": [
                                          {
                                              "text": "Enter the data you would like to upload!"
                                          }
                                      ]
                                  }
                              ]
                          },
                          {
                              "id": "ma2da3h00",
                              "content": [
                                  {
                                      "children": [
                                          {
                                              "text": "Input the data that you want to upload!"
                                          }
                                      ]
                                  }
                              ]
                          },
                          {
                              "id": "ma2db3hvk",
                              "content": [
                                  {
                                      "children": [
                                          {
                                              "text": "Insert the data you need to upload!"
                                          }
                                      ]
                                  }
                              ]
                          },
                          {
                              "id": "ma2dc3hux",
                              "content": [
                                  {
                                      "children": [
                                          {
                                              "text": "Enter the information you want to upload!"
                                          }
                                      ]
                                  }
                              ]
                          },
                          {
                              "id": "ma2dd3h0i",
                              "content": [
                                  {
                                      "children": [
                                          {
                                              "text": "Provide the data you would like to upload!"
                                          }
                                      ]
                                  }
                              ]
                          }
                      ],
                      "canvasVisibility": "preview",
                      "portsV2": {
                          "byKey": {},
                          "builtIn": {
                              "next": {
                                  "type": "next",
                                  "target": null,
                                  "id": "6495e7d516ecab5cf526c8e6"
                              }
                          },
                          "dynamic": []
                      }
                  },
                  "nodeID": "6495e7d516ecab5cf526c8e5"
              },
              "6495e7d516ecab5cf526c8e7": {
                  "type": "block",
                  "data": {
                      "name": "New Block 2",
                      "steps": [
                          "6495e7d516ecab5cf526c8e5",
                          "6495e81116ecab5cf526c8ee"
                      ]
                  },
                  "nodeID": "6495e7d516ecab5cf526c8e7",
                  "coords": [
                      1139.674680965196,
                      58.57070138077139
                  ]
              },
              "6495e81116ecab5cf526c8ee": {
                  "type": "captureV2",
                  "data": {
                      "name": "Capture",
                      "intentScope": "GLOBAL",
                      "capture": {
                          "type": "query",
                          "variable": "last_utterance"
                      },
                      "noReply": null,
                      "noMatch": null,
                      "portsV2": {
                          "byKey": {},
                          "builtIn": {
                              "next": {
                                  "type": "next",
                                  "target": "6495e81d16ecab5cf526c8f7",
                                  "id": "6495e81116ecab5cf526c8ef",
                                  "data": {
                                      "points": [
                                          {
                                              "point": [
                                                  1305.67,
                                                  248.07
                                              ]
                                          },
                                          {
                                              "point": [
                                                  1338,
                                                  248.07
                                              ]
                                          },
                                          {
                                              "point": [
                                                  1338,
                                                  101.66
                                              ]
                                          },
                                          {
                                              "point": [
                                                  1370.32,
                                                  101.66
                                              ],
                                              "allowedToTop": true
                                          }
                                      ]
                                  }
                              },
                              "else": {
                                  "type": "else",
                                  "target": null,
                                  "id": "6495e81116ecab5cf526c8f0"
                              }
                          },
                          "dynamic": []
                      }
                  },
                  "nodeID": "6495e81116ecab5cf526c8ee"
              },
              "6495e81d16ecab5cf526c8f4": {
                  "type": "api",
                  "data": {
                      "name": "",
                      "url": "https://api.web3.storage/upload",
                      "body": [
                          {
                              "key": "",
                              "val": ""
                          }
                      ],
                      "params": [],
                      "method": "POST",
                      "headers": [
                          {
                              "key": "Authorization",
                              "val": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGMyNjRDMzEyMjgxNUU5Y0VkYkJFRDU3NUU5MjY0NTNkQ0FiREVDOEUiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2ODc3OTE0OTExNjYsIm5hbWUiOiJtaW50Q2hhdCJ9.cNazIkIIwc17Jalr0bZzD8JgwhOtaPHLUd48qM69OmY"
                          }
                      ],
                      "content": "{last_utterance}",
                      "mappings": [
                          {
                              "path": "cid",
                              "var": "ipfs_cid"
                          }
                      ],
                      "bodyType": "rawInput",
                      "selectedAction": "Make a POST Request",
                      "selectedIntegration": "Custom API",
                      "portsV2": {
                          "byKey": {},
                          "builtIn": {
                              "next": {
                                  "type": "next",
                                  "target": "6499c2bf65b4982080fd5c5c",
                                  "id": "6495e81d16ecab5cf526c8f5",
                                  "data": {
                                      "points": [
                                          {
                                              "point": [
                                                  1701.32,
                                                  228.41
                                              ]
                                          },
                                          {
                                              "point": [
                                                  1743.82,
                                                  228.41
                                              ]
                                          },
                                          {
                                              "point": [
                                                  1743.82,
                                                  118.1
                                              ]
                                          },
                                          {
                                              "point": [
                                                  1786.32,
                                                  118.1
                                              ],
                                              "allowedToTop": false
                                          }
                                      ]
                                  }
                              },
                              "fail": {
                                  "type": "fail",
                                  "target": "6499c69b65b4982080fd5ed2",
                                  "id": "6495e81d16ecab5cf526c8f6",
                                  "data": {
                                      "points": [
                                          {
                                              "point": [
                                                  1701.32,
                                                  282.91
                                              ]
                                          },
                                          {
                                              "point": [
                                                  1731.07,
                                                  282.91
                                              ]
                                          },
                                          {
                                              "point": [
                                                  1731.07,
                                                  461.6
                                              ]
                                          },
                                          {
                                              "point": [
                                                  1707.07,
                                                  461.6
                                              ],
                                              "reversed": true,
                                              "allowedToTop": false
                                          }
                                      ]
                                  }
                              }
                          },
                          "dynamic": []
                      }
                  },
                  "nodeID": "6495e81d16ecab5cf526c8f4"
              },
              "6495e81d16ecab5cf526c8f7": {
                  "type": "block",
                  "data": {
                      "name": "New Block 3",
                      "steps": [
                          "6495e81d16ecab5cf526c8f4"
                      ],
                      "color": ""
                  },
                  "nodeID": "6495e81d16ecab5cf526c8f7",
                  "coords": [
                      1535.3203602030048,
                      74.66226039736269
                  ]
              },
              "6499c2bf65b4982080fd5c5c": {
                  "type": "text",
                  "data": {
                      "name": "Text",
                      "texts": [
                          {
                              "id": "5mba3h12",
                              "content": [
                                  {
                                      "children": [
                                          {
                                              "text": "File stored on IPFS Successfully!!"
                                          }
                                      ]
                                  },
                                  {
                                      "children": [
                                          {
                                              "text": ""
                                          }
                                      ]
                                  },
                                  {
                                      "children": [
                                          {
                                              "text": "CID: "
                                          },
                                          {
                                              "id": "ipfs_cid",
                                              "name": "ipfs_cid",
                                              "isSlot": false,
                                              "type": "variable",
                                              "children": [
                                                  {
                                                      "text": ""
                                                  }
                                              ]
                                          },
                                          {
                                              "text": " "
                                          }
                                      ]
                                  }
                              ]
                          },
                          {
                              "id": "wed83h4e",
                              "content": [
                                  {
                                      "children": [
                                          {
                                              "text": "The file was uploaded to IPFS successfully! CID: "
                                          },
                                          {
                                              "id": "ipfs_cid",
                                              "name": "ipfs_cid",
                                              "isSlot": false,
                                              "type": "variable",
                                              "children": [
                                                  {
                                                      "text": ""
                                                  }
                                              ]
                                          },
                                          {
                                              "text": " "
                                          }
                                      ]
                                  }
                              ]
                          },
                          {
                              "id": "x7d93hfm",
                              "content": [
                                  {
                                      "children": [
                                          {
                                              "text": "File has been saved to IPFS! CID: "
                                          },
                                          {
                                              "id": "ipfs_cid",
                                              "name": "ipfs_cid",
                                              "isSlot": false,
                                              "type": "variable",
                                              "children": [
                                                  {
                                                      "text": ""
                                                  }
                                              ]
                                          },
                                          {
                                              "text": " "
                                          }
                                      ]
                                  }
                              ]
                          },
                          {
                              "id": "x8da3hq2",
                              "content": [
                                  {
                                      "children": [
                                          {
                                              "text": "File successfully stored on IPFS. CID: "
                                          },
                                          {
                                              "id": "ipfs_cid",
                                              "name": "ipfs_cid",
                                              "isSlot": false,
                                              "type": "variable",
                                              "children": [
                                                  {
                                                      "text": ""
                                                  }
                                              ]
                                          },
                                          {
                                              "text": " "
                                          }
                                      ]
                                  }
                              ]
                          }
                      ],
                      "canvasVisibility": "preview",
                      "portsV2": {
                          "byKey": {},
                          "builtIn": {
                              "next": {
                                  "type": "next",
                                  "target": "6499c41365b4982080fd5c65",
                                  "id": "6499c2bf65b4982080fd5c5d",
                                  "data": {}
                              }
                          },
                          "dynamic": []
                      }
                  },
                  "nodeID": "6499c2bf65b4982080fd5c5c"
              },
              "6499c2bf65b4982080fd5c5e": {
                  "type": "block",
                  "data": {
                      "name": "New Block 4",
                      "steps": [
                          "6499c2bf65b4982080fd5c5c"
                      ]
                  },
                  "nodeID": "6499c2bf65b4982080fd5c5e",
                  "coords": [
                      1952.3203125,
                      38.59977722167969
                  ]
              },
              "6499c41365b4982080fd5c65": {
                  "type": "buttons",
                  "data": {
                      "name": "Buttons",
                      "buttons": [
                          {
                              "id": "c8fi3hig",
                              "name": "View IPFS CID",
                              "actions": []
                          },
                          {
                              "id": "j2g73hkl",
                              "name": "End the conversation",
                              "actions": [],
                              "intent": null
                          }
                      ],
                      "intentScope": "GLOBAL",
                      "portsV2": {
                          "byKey": {},
                          "builtIn": {
                              "else": {
                                  "type": "else",
                                  "target": null,
                                  "id": "6499c41365b4982080fd5c67"
                              }
                          },
                          "dynamic": [
                              {
                                  "type": "",
                                  "target": "6499c4bd65b4982080fd5c8c",
                                  "id": "6499c41365b4982080fd5c66",
                                  "data": {}
                              },
                              {
                                  "id": "6499c43265b4982080fd5c6e",
                                  "type": "",
                                  "target": "6499c56465b4982080fd5db4",
                                  "data": {}
                              }
                          ]
                      }
                  },
                  "nodeID": "6499c41365b4982080fd5c65"
              },
              "6499c41365b4982080fd5c68": {
                  "type": "block",
                  "data": {
                      "name": "New Block 5",
                      "steps": [
                          "6499c41365b4982080fd5c65"
                      ]
                  },
                  "nodeID": "6499c41365b4982080fd5c68",
                  "coords": [
                      2371.8204231262202,
                      -10.462685585021987
                  ]
              },
              "6499c4bd65b4982080fd5c8b": {
                  "type": "url",
                  "data": {
                      "name": "",
                      "url": "{{[ipfs_cid].ipfs_cid}}.ipfs.dweb.link",
                      "portsV2": {
                          "byKey": {},
                          "builtIn": {
                              "next": {
                                  "type": "next",
                                  "target": "6499c4fc65b4982080fd5c9c",
                                  "id": "6499c4bd65b4982080fd5c8d",
                                  "data": {
                                      "points": [
                                          {
                                              "point": [
                                                  2760.91,
                                                  69.29
                                              ]
                                          },
                                          {
                                              "point": [
                                                  2799.36,
                                                  69.29
                                              ]
                                          },
                                          {
                                              "point": [
                                                  2799.36,
                                                  86.45
                                              ]
                                          },
                                          {
                                              "point": [
                                                  2837.81,
                                                  86.45
                                              ],
                                              "allowedToTop": false
                                          }
                                      ]
                                  }
                              }
                          },
                          "dynamic": []
                      }
                  },
                  "nodeID": "6499c4bd65b4982080fd5c8b"
              },
              "6499c4bd65b4982080fd5c8c": {
                  "type": "actions",
                  "data": {
                      "name": "",
                      "steps": [
                          "6499c4bd65b4982080fd5c8b"
                      ]
                  },
                  "nodeID": "6499c4bd65b4982080fd5c8c",
                  "coords": [
                      0,
                      0
                  ]
              },
              "6499c4fc65b4982080fd5c9c": {
                  "type": "buttons",
                  "data": {
                      "name": "Buttons",
                      "buttons": [
                          {
                              "id": "r7sa3hpm",
                              "name": "Go to Start Menu",
                              "actions": []
                          },
                          {
                              "id": "q4x53h8m",
                              "name": "End the conversation!",
                              "actions": []
                          }
                      ],
                      "intentScope": "GLOBAL",
                      "portsV2": {
                          "byKey": {},
                          "builtIn": {
                              "else": {
                                  "type": "else",
                                  "target": null,
                                  "id": "6499c4fc65b4982080fd5c9e"
                              }
                          },
                          "dynamic": [
                              {
                                  "type": "",
                                  "target": "6499c51a65b4982080fd5ca7",
                                  "id": "6499c4fc65b4982080fd5c9d",
                                  "data": {}
                              },
                              {
                                  "id": "6499c54a65b4982080fd5dab",
                                  "type": "",
                                  "target": "6499c55765b4982080fd5dae",
                                  "data": {}
                              }
                          ]
                      }
                  },
                  "nodeID": "6499c4fc65b4982080fd5c9c",
                  "coords": [
                      0,
                      0
                  ]
              },
              "6499c4fc65b4982080fd5c9f": {
                  "type": "block",
                  "data": {
                      "name": "New Block 6",
                      "steps": [
                          "6499c79c65b4982080fd5ff9",
                          "6499c4fc65b4982080fd5c9c"
                      ]
                  },
                  "nodeID": "6499c4fc65b4982080fd5c9f",
                  "coords": [
                      3003.814560886271,
                      6.95474945150497
                  ]
              },
              "6499c51a65b4982080fd5ca6": {
                  "type": "goTo",
                  "data": {
                      "name": "",
                      "intent": "VF.START_OVER",
                      "diagramID": "6495a7edcfac400006242149",
                      "portsV2": {
                          "byKey": {},
                          "builtIn": {},
                          "dynamic": []
                      }
                  },
                  "nodeID": "6499c51a65b4982080fd5ca6"
              },
              "6499c51a65b4982080fd5ca7": {
                  "type": "actions",
                  "data": {
                      "name": "",
                      "steps": [
                          "6499c51a65b4982080fd5ca6"
                      ]
                  },
                  "nodeID": "6499c51a65b4982080fd5ca7",
                  "coords": [
                      0,
                      0
                  ]
              },
              "6499c55765b4982080fd5dad": {
                  "type": "exit",
                  "data": {
                      "name": "",
                      "portsV2": {
                          "byKey": {},
                          "builtIn": {},
                          "dynamic": []
                      }
                  },
                  "nodeID": "6499c55765b4982080fd5dad"
              },
              "6499c55765b4982080fd5dae": {
                  "type": "actions",
                  "data": {
                      "name": "",
                      "steps": [
                          "6499c55765b4982080fd5dad"
                      ]
                  },
                  "nodeID": "6499c55765b4982080fd5dae",
                  "coords": [
                      0,
                      0
                  ]
              },
              "6499c56465b4982080fd5db3": {
                  "type": "exit",
                  "data": {
                      "name": "",
                      "portsV2": {
                          "byKey": {},
                          "builtIn": {},
                          "dynamic": []
                      }
                  },
                  "nodeID": "6499c56465b4982080fd5db3"
              },
              "6499c56465b4982080fd5db4": {
                  "type": "actions",
                  "data": {
                      "name": "",
                      "steps": [
                          "6499c56465b4982080fd5db3"
                      ]
                  },
                  "nodeID": "6499c56465b4982080fd5db4",
                  "coords": [
                      0,
                      0
                  ]
              },
              "6499c69b65b4982080fd5ed2": {
                  "type": "text",
                  "data": {
                      "name": "Text",
                      "texts": [
                          {
                              "id": "n21oj3hy0",
                              "content": [
                                  {
                                      "children": [
                                          {
                                              "text": "Invalid Data! Please enter the correct one"
                                          }
                                      ]
                                  }
                              ]
                          }
                      ],
                      "canvasVisibility": "preview",
                      "portsV2": {
                          "byKey": {},
                          "builtIn": {
                              "next": {
                                  "type": "next",
                                  "target": null,
                                  "id": "6499c69b65b4982080fd5ed3"
                              }
                          },
                          "dynamic": []
                      }
                  },
                  "nodeID": "6499c69b65b4982080fd5ed2"
              },
              "6499c69b65b4982080fd5ed4": {
                  "type": "block",
                  "data": {
                      "name": "New Block 8",
                      "steps": [
                          "6499c69b65b4982080fd5ed2",
                          "6499c6ce65b4982080fd5edb"
                      ]
                  },
                  "nodeID": "6499c69b65b4982080fd5ed4",
                  "coords": [
                      1541.0703602030048,
                      382.0997603973627
                  ]
              },
              "6499c6ce65b4982080fd5edb": {
                  "type": "captureV2",
                  "data": {
                      "name": "Capture",
                      "intentScope": "GLOBAL",
                      "capture": {
                          "type": "query",
                          "variable": "last_utterance"
                      },
                      "noReply": null,
                      "noMatch": null,
                      "portsV2": {
                          "byKey": {},
                          "builtIn": {
                              "next": {
                                  "type": "next",
                                  "target": "6495e81d16ecab5cf526c8f7",
                                  "id": "6499c6ce65b4982080fd5edc",
                                  "data": {
                                      "points": [
                                          {
                                              "point": [
                                                  1375.07,
                                                  556.1
                                              ],
                                              "reversed": true
                                          },
                                          {
                                              "point": [
                                                  1346.32,
                                                  556.1
                                              ]
                                          },
                                          {
                                              "point": [
                                                  1346.32,
                                                  101.66
                                              ]
                                          },
                                          {
                                              "point": [
                                                  1370.32,
                                                  101.66
                                              ],
                                              "allowedToTop": true
                                          }
                                      ]
                                  }
                              },
                              "else": {
                                  "type": "else",
                                  "target": null,
                                  "id": "6499c6ce65b4982080fd5edd"
                              }
                          },
                          "dynamic": []
                      }
                  },
                  "nodeID": "6499c6ce65b4982080fd5edb",
                  "coords": [
                      0,
                      0
                  ]
              },
              "6499c79c65b4982080fd5ff9": {
                  "type": "text",
                  "data": {
                      "name": "Text",
                      "texts": [
                          {
                              "id": "562bc3hr8",
                              "content": [
                                  {
                                      "children": [
                                          {
                                              "text": "What do you wanna do now?"
                                          }
                                      ]
                                  }
                              ]
                          },
                          {
                              "id": "ja2bx3h0b",
                              "content": [
                                  {
                                      "children": [
                                          {
                                              "text": "What do you want to do now?"
                                          }
                                      ]
                                  }
                              ]
                          },
                          {
                              "id": "ja2by3hux",
                              "content": [
                                  {
                                      "children": [
                                          {
                                              "text": "What would you like to do now?"
                                          }
                                      ]
                                  }
                              ]
                          },
                          {
                              "id": "jb2bz3htu",
                              "content": [
                                  {
                                      "children": [
                                          {
                                              "text": "What do you feel like doing now?"
                                          }
                                      ]
                                  }
                              ]
                          }
                      ],
                      "canvasVisibility": "preview",
                      "portsV2": {
                          "byKey": {},
                          "builtIn": {
                              "next": {
                                  "type": "next",
                                  "target": null,
                                  "id": "6499c79c65b4982080fd5ffa"
                              }
                          },
                          "dynamic": []
                      }
                  },
                  "nodeID": "6499c79c65b4982080fd5ff9"
              },
              "649b29be65b4982080fd6485": {
                  "type": "buttons",
                  "data": {
                      "name": "Buttons",
                      "buttons": [
                          {
                              "id": "9j49m3htl",
                              "name": "Verbwire",
                              "actions": []
                          },
                          {
                              "id": "d349z3h0i",
                              "name": "Web3.Storage",
                              "actions": []
                          }
                      ],
                      "intentScope": "GLOBAL",
                      "portsV2": {
                          "byKey": {},
                          "builtIn": {
                              "else": {
                                  "type": "else",
                                  "target": null,
                                  "id": "649b29be65b4982080fd6487"
                              }
                          },
                          "dynamic": [
                              {
                                  "id": "649b29d465b4982080fd648e",
                                  "type": "",
                                  "target": "649b2a6a65b4982080fd649c",
                                  "data": {}
                              },
                              {
                                  "id": "649b29e765b4982080fd6491",
                                  "type": "",
                                  "target": "6495e7d516ecab5cf526c8e7",
                                  "data": {}
                              }
                          ]
                      }
                  },
                  "nodeID": "649b29be65b4982080fd6485"
              },
              "649b29be65b4982080fd6488": {
                  "type": "block",
                  "data": {
                      "name": "New Block 10",
                      "steps": [
                          "649b29f265b4982080fd6493",
                          "649b29be65b4982080fd6485"
                      ]
                  },
                  "nodeID": "649b29be65b4982080fd6488",
                  "coords": [
                      678.082122686773,
                      55.38625876106667
                  ]
              },
              "649b29f265b4982080fd6493": {
                  "type": "text",
                  "data": {
                      "name": "Text",
                      "texts": [
                          {
                              "id": "4v4at3hxr",
                              "content": [
                                  {
                                      "children": [
                                          {
                                              "text": "Which IPFS Storage Provider you want to use?"
                                          }
                                      ]
                                  }
                              ]
                          }
                      ],
                      "canvasVisibility": "preview",
                      "portsV2": {
                          "byKey": {},
                          "builtIn": {
                              "next": {
                                  "type": "next",
                                  "target": null,
                                  "id": "649b29f265b4982080fd6494"
                              }
                          },
                          "dynamic": []
                      }
                  },
                  "nodeID": "649b29f265b4982080fd6493"
              },
              "649b2a6a65b4982080fd6499": {
                  "type": "captureV2",
                  "data": {
                      "name": "Capture",
                      "intentScope": "GLOBAL",
                      "capture": {
                          "type": "query",
                          "variable": "verbwire_ipfs"
                      },
                      "portsV2": {
                          "byKey": {},
                          "builtIn": {
                              "next": {
                                  "type": "next",
                                  "target": "649b2ab665b4982080fd64a7",
                                  "id": "649b2a6a65b4982080fd649a",
                                  "data": {
                                      "points": [
                                          {
                                              "point": [
                                                  812.44,
                                                  665.13
                                              ]
                                          },
                                          {
                                              "point": [
                                                  837.54,
                                                  665.13
                                              ]
                                          },
                                          {
                                              "point": [
                                                  837.54,
                                                  555.22
                                              ]
                                          },
                                          {
                                              "point": [
                                                  862.64,
                                                  555.22
                                              ],
                                              "allowedToTop": false
                                          }
                                      ]
                                  }
                              },
                              "else": {
                                  "type": "else",
                                  "target": null,
                                  "id": "649b2a6a65b4982080fd649b"
                              }
                          },
                          "dynamic": []
                      }
                  },
                  "nodeID": "649b2a6a65b4982080fd6499",
                  "coords": [
                      0,
                      0
                  ]
              },
              "649b2a6a65b4982080fd649c": {
                  "type": "block",
                  "data": {
                      "name": "New Block 8",
                      "steps": [
                          "649b2a9865b4982080fd64a3",
                          "649b2a6a65b4982080fd6499"
                      ]
                  },
                  "nodeID": "649b2a6a65b4982080fd649c",
                  "coords": [
                      646.4370700049894,
                      513.6341298903261
                  ]
              },
              "649b2a9865b4982080fd64a3": {
                  "type": "text",
                  "data": {
                      "name": "Text",
                      "texts": [
                          {
                              "id": "4f4hd3h5o",
                              "content": [
                                  {
                                      "children": [
                                          {
                                              "text": "Enter the URL of the file:"
                                          }
                                      ]
                                  }
                              ]
                          }
                      ],
                      "canvasVisibility": "preview",
                      "portsV2": {
                          "byKey": {},
                          "builtIn": {
                              "next": {
                                  "type": "next",
                                  "target": null,
                                  "id": "649b2a9865b4982080fd64a4"
                              }
                          },
                          "dynamic": []
                      }
                  },
                  "nodeID": "649b2a9865b4982080fd64a3"
              },
              "649b2ab665b4982080fd64a7": {
                  "type": "api",
                  "data": {
                      "name": "",
                      "url": "https://api.verbwire.com/v1/nft/store/fileFromUrl",
                      "body": [
                          {
                              "key": "fileUrl",
                              "val": "{{[verbwire_ipfs].verbwire_ipfs}}"
                          }
                      ],
                      "params": [],
                      "method": "POST",
                      "headers": [
                          {
                              "key": "X-API-Key",
                              "val": "sk_live_665984d9-12cc-4126-b7b0-9190bd3ad744"
                          },
                          {
                              "key": "accept",
                              "val": "application/json"
                          },
                          {
                              "key": "content-type",
                              "val": "application/x-www-form-urlencoded"
                          }
                      ],
                      "content": "",
                      "mappings": [
                          {
                              "path": "ipfs_storage.ipfs_url",
                              "var": "verbwire_ipfsUrl"
                          }
                      ],
                      "bodyType": "formData",
                      "selectedAction": "Make a POST Request",
                      "selectedIntegration": "Custom API",
                      "portsV2": {
                          "byKey": {},
                          "builtIn": {
                              "next": {
                                  "type": "next",
                                  "target": "649b2c4365b4982080fd6662",
                                  "id": "649b2ab665b4982080fd64a8",
                                  "data": {
                                      "points": [
                                          {
                                              "point": [
                                                  1194.64,
                                                  648.97
                                              ]
                                          },
                                          {
                                              "point": [
                                                  1260.86,
                                                  648.97
                                              ]
                                          },
                                          {
                                              "point": [
                                                  1260.86,
                                                  766.75
                                              ]
                                          },
                                          {
                                              "point": [
                                                  1327.08,
                                                  766.75
                                              ],
                                              "allowedToTop": false
                                          }
                                      ]
                                  }
                              },
                              "fail": {
                                  "type": "fail",
                                  "target": "649b2beb65b4982080fd6651",
                                  "id": "649b2ab665b4982080fd64a9",
                                  "data": {}
                              }
                          },
                          "dynamic": []
                      }
                  },
                  "nodeID": "649b2ab665b4982080fd64a7"
              },
              "649b2ab665b4982080fd64aa": {
                  "type": "block",
                  "data": {
                      "name": "New Block 9",
                      "steps": [
                          "649b2ab665b4982080fd64a7"
                      ]
                  },
                  "nodeID": "649b2ab665b4982080fd64aa",
                  "coords": [
                      1028.6395463802837,
                      475.721283708327
                  ]
              },
              "649b2beb65b4982080fd6651": {
                  "type": "text",
                  "data": {
                      "name": "Text",
                      "texts": [
                          {
                              "id": "n21oj3hy0",
                              "content": [
                                  {
                                      "children": [
                                          {
                                              "text": "Invalid URL! Please enter the correct one"
                                          }
                                      ]
                                  }
                              ]
                          },
                          {
                              "id": "no4tr3hor",
                              "content": [
                                  {
                                      "children": [
                                          {
                                              "text": "Invalid URL! Please enter a valid one."
                                          }
                                      ]
                                  }
                              ]
                          }
                      ],
                      "canvasVisibility": "preview",
                      "portsV2": {
                          "byKey": {},
                          "builtIn": {
                              "next": {
                                  "type": "next",
                                  "target": null,
                                  "id": "649b2beb65b4982080fd6652"
                              }
                          },
                          "dynamic": []
                      }
                  },
                  "nodeID": "649b2beb65b4982080fd6651"
              },
              "649b2beb65b4982080fd6654": {
                  "type": "block",
                  "data": {
                      "name": "New Block 8 copy",
                      "color": "",
                      "steps": [
                          "649b2beb65b4982080fd6651",
                          "649b2c0965b4982080fd665b"
                      ]
                  },
                  "nodeID": "649b2beb65b4982080fd6654",
                  "coords": [
                      1029.4999722813263,
                      812.250005306429
                  ]
              },
              "649b2c0965b4982080fd665b": {
                  "type": "captureV2",
                  "data": {
                      "name": "Capture",
                      "intentScope": "GLOBAL",
                      "capture": {
                          "type": "query",
                          "variable": "verbwire_ipfs"
                      },
                      "portsV2": {
                          "byKey": {},
                          "builtIn": {
                              "next": {
                                  "type": "next",
                                  "target": "649b2ab665b4982080fd64aa",
                                  "id": "649b2c0965b4982080fd665c",
                                  "data": {
                                      "points": [
                                          {
                                              "point": [
                                                  863.5,
                                                  1024.25
                                              ],
                                              "reversed": true
                                          },
                                          {
                                              "point": [
                                                  839.5,
                                                  1024.25
                                              ]
                                          },
                                          {
                                              "point": [
                                                  839.5,
                                                  502.72
                                              ]
                                          },
                                          {
                                              "point": [
                                                  863.64,
                                                  502.72
                                              ],
                                              "allowedToTop": true
                                          }
                                      ]
                                  }
                              },
                              "else": {
                                  "type": "else",
                                  "target": null,
                                  "id": "649b2c0965b4982080fd665d"
                              }
                          },
                          "dynamic": []
                      }
                  },
                  "nodeID": "649b2c0965b4982080fd665b",
                  "coords": [
                      0,
                      0
                  ]
              },
              "649b2c4365b4982080fd6662": {
                  "type": "text",
                  "data": {
                      "name": "Text",
                      "texts": [
                          {
                              "id": "tt4x93hlj",
                              "content": [
                                  {
                                      "children": [
                                          {
                                              "text": "IPFS Storage on Verbwire Successful!"
                                          }
                                      ]
                                  },
                                  {
                                      "children": [
                                          {
                                              "text": ""
                                          }
                                      ]
                                  },
                                  {
                                      "children": [
                                          {
                                              "text": "Original URL: "
                                          },
                                          {
                                              "id": "verbwire_ipfs",
                                              "name": "verbwire_ipfs",
                                              "isSlot": false,
                                              "type": "variable",
                                              "children": [
                                                  {
                                                      "text": ""
                                                  }
                                              ]
                                          },
                                          {
                                              "text": " "
                                          }
                                      ]
                                  },
                                  {
                                      "children": [
                                          {
                                              "text": "IPFS CID: "
                                          },
                                          {
                                              "id": "verbwire_ipfsUrl",
                                              "name": "verbwire_ipfsUrl",
                                              "isSlot": false,
                                              "type": "variable",
                                              "children": [
                                                  {
                                                      "text": ""
                                                  }
                                              ]
                                          },
                                          {
                                              "text": " "
                                          }
                                      ]
                                  }
                              ]
                          }
                      ],
                      "canvasVisibility": "preview",
                      "portsV2": {
                          "byKey": {},
                          "builtIn": {
                              "next": {
                                  "type": "next",
                                  "target": "649b2c9565b4982080fd666b",
                                  "id": "649b2c4365b4982080fd6663",
                                  "data": {
                                      "points": [
                                          {
                                              "point": [
                                                  1659.08,
                                                  812
                                              ]
                                          },
                                          {
                                              "point": [
                                                  1793.45,
                                                  812
                                              ]
                                          },
                                          {
                                              "point": [
                                                  1793.45,
                                                  678.33
                                              ]
                                          },
                                          {
                                              "point": [
                                                  1927.83,
                                                  678.33
                                              ],
                                              "allowedToTop": false
                                          }
                                      ]
                                  }
                              }
                          },
                          "dynamic": []
                      }
                  },
                  "nodeID": "649b2c4365b4982080fd6662"
              },
              "649b2c4365b4982080fd6664": {
                  "type": "block",
                  "data": {
                      "name": "New Block 11",
                      "steps": [
                          "649b2c4365b4982080fd6662"
                      ]
                  },
                  "nodeID": "649b2c4365b4982080fd6664",
                  "coords": [
                      1493.0799525145994,
                      687.2541890625214
                  ]
              },
              "649b2c9565b4982080fd666b": {
                  "type": "text",
                  "data": {
                      "name": "Text",
                      "texts": [
                          {
                              "id": "yf4zi3huw",
                              "content": [
                                  {
                                      "children": [
                                          {
                                              "text": "What do you want to do now?"
                                          }
                                      ]
                                  }
                              ]
                          }
                      ],
                      "canvasVisibility": "preview",
                      "portsV2": {
                          "byKey": {},
                          "builtIn": {
                              "next": {
                                  "type": "next",
                                  "target": null,
                                  "id": "649b2c9565b4982080fd666c"
                              }
                          },
                          "dynamic": []
                      }
                  },
                  "nodeID": "649b2c9565b4982080fd666b"
              },
              "649b2c9565b4982080fd666d": {
                  "type": "block",
                  "data": {
                      "name": "New Block 12",
                      "steps": [
                          "649b2c9565b4982080fd666b",
                          "649b2ca465b4982080fd6674"
                      ]
                  },
                  "nodeID": "649b2c9565b4982080fd666d",
                  "coords": [
                      2107.547094816088,
                      598.8317118549758
                  ]
              },
              "649b2ca465b4982080fd6674": {
                  "type": "buttons",
                  "data": {
                      "name": "Buttons",
                      "buttons": [
                          {
                              "id": "b450f3ha8",
                              "name": "View IPFS URL",
                              "actions": []
                          },
                          {
                              "id": "j150w3htr",
                              "name": "View Original URL",
                              "actions": []
                          },
                          {
                              "id": "k55183hps",
                              "name": "Go to the start menu!",
                              "actions": []
                          }
                      ],
                      "intentScope": "GLOBAL",
                      "portsV2": {
                          "byKey": {},
                          "builtIn": {
                              "else": {
                                  "type": "else",
                                  "target": null,
                                  "id": "649b2ca465b4982080fd6676"
                              }
                          },
                          "dynamic": [
                              {
                                  "type": "",
                                  "target": "649b2cf865b4982080fd6685",
                                  "id": "649b2ca465b4982080fd6675",
                                  "data": {}
                              },
                              {
                                  "id": "649b2cb265b4982080fd6679",
                                  "type": "",
                                  "target": "649b2d2665b4982080fd668e",
                                  "data": {}
                              },
                              {
                                  "id": "649b2cbb65b4982080fd667c",
                                  "type": "",
                                  "target": "649b2cd065b4982080fd667f",
                                  "data": {}
                              }
                          ]
                      }
                  },
                  "nodeID": "649b2ca465b4982080fd6674"
              },
              "649b2cd065b4982080fd667e": {
                  "type": "goTo",
                  "data": {
                      "name": "",
                      "intent": "VF.START_OVER",
                      "diagramID": "6495a7edcfac400006242149",
                      "portsV2": {
                          "byKey": {},
                          "builtIn": {},
                          "dynamic": []
                      }
                  },
                  "nodeID": "649b2cd065b4982080fd667e"
              },
              "649b2cd065b4982080fd667f": {
                  "type": "actions",
                  "data": {
                      "name": "",
                      "steps": [
                          "649b2cd065b4982080fd667e"
                      ]
                  },
                  "nodeID": "649b2cd065b4982080fd667f",
                  "coords": [
                      0,
                      0
                  ]
              },
              "649b2cf865b4982080fd6684": {
                  "type": "url",
                  "data": {
                      "name": "",
                      "url": "{{[verbwire_ipfsUrl].verbwire_ipfsUrl}}",
                      "portsV2": {
                          "byKey": {},
                          "builtIn": {
                              "next": {
                                  "type": "next",
                                  "target": "649b2c9565b4982080fd666d",
                                  "id": "649b2cf865b4982080fd6686",
                                  "data": {
                                      "points": [
                                          {
                                              "point": [
                                                  1752.93,
                                                  739.08
                                              ],
                                              "reversed": true
                                          },
                                          {
                                              "point": [
                                                  1728.93,
                                                  739.08
                                              ]
                                          },
                                          {
                                              "point": [
                                                  1728.93,
                                                  625.83
                                              ]
                                          },
                                          {
                                              "point": [
                                                  1942.55,
                                                  625.83
                                              ],
                                              "allowedToTop": true
                                          }
                                      ]
                                  }
                              }
                          },
                          "dynamic": []
                      }
                  },
                  "nodeID": "649b2cf865b4982080fd6684"
              },
              "649b2cf865b4982080fd6685": {
                  "type": "actions",
                  "data": {
                      "name": "",
                      "steps": [
                          "649b2cf865b4982080fd6684"
                      ]
                  },
                  "nodeID": "649b2cf865b4982080fd6685",
                  "coords": [
                      0,
                      0
                  ]
              },
              "649b2d2665b4982080fd668d": {
                  "type": "url",
                  "data": {
                      "name": "",
                      "url": "{{[verbwire_ipfs].verbwire_ipfs}}",
                      "portsV2": {
                          "byKey": {},
                          "builtIn": {
                              "next": {
                                  "type": "next",
                                  "target": "649b2ca465b4982080fd6674",
                                  "id": "649b2d2665b4982080fd668f",
                                  "data": {}
                              }
                          },
                          "dynamic": []
                      }
                  },
                  "nodeID": "649b2d2665b4982080fd668d"
              },
              "649b2d2665b4982080fd668e": {
                  "type": "actions",
                  "data": {
                      "name": "",
                      "steps": [
                          "649b2d2665b4982080fd668d"
                      ]
                  },
                  "nodeID": "649b2d2665b4982080fd668e",
                  "coords": [
                      0,
                      0
                  ]
              }
          },
          "offsetX": 0,
          "offsetY": 0,
          "modified": 1687545363,
          "variables": [],
          "menuItems": [
              {
                  "type": "NODE",
                  "sourceID": "6495e613f7ea0e0007259819"
              }
          ],
          "creatorID": 145492,
          "versionID": "6495a7edcfac400006242148",
          "intentStepIDs": [
              "6495e613f7ea0e0007259819"
          ]
      }
  },
  "programs": {
      "6495a7edcfac400006242149": {
          "commands": [],
          "lines": {
              "start00000000000000000000": {
                  "id": "start00000000000000000000",
                  "type": "start",
                  "nextId": "6495f22aeed13f9c47b87ec4"
              },
              "646187c35b0afc227e84c8e2": {
                  "id": "646187c35b0afc227e84c8e2",
                  "type": "generative",
                  "prompt": "Greet {name}! Based on the {name}'s question, respond with two brief sentences in a simple, step-by-step instruction on how to accomplish the task {gpt_utterance}",
                  "nextId": "646187c35b0afc227e84c8f8",
                  "mode": "memory_prompt",
                  "model": "gpt-4",
                  "system": "You are a helpful assistant",
                  "maxTokens": 128,
                  "temperature": 0.7
              },
              "646187c35b0afc227e84c8ec": {
                  "id": "646187c35b0afc227e84c8ec",
                  "type": "captureV2",
                  "nextId": "646187c35b0afc227e84c8e2",
                  "noReply": null,
                  "noMatch": null,
                  "intentScope": "GLOBAL",
                  "platform": "webchat",
                  "variable": "gpt_utterance"
              },
              "646187c35b0afc227e84c8f0": {
                  "id": "646187c35b0afc227e84c8f0",
                  "type": "text",
                  "texts": [
                      {
                          "id": "0t13737ot",
                          "content": [
                              {
                                  "children": [
                                      {
                                          "text": "Goodbye!"
                                      }
                                  ]
                              }
                          ]
                      }
                  ],
                  "nextId": "646187c35b0afc227e84c8f3",
                  "platform": "webchat"
              },
              "646187c35b0afc227e84c8f3": {
                  "id": "646187c35b0afc227e84c8f3",
                  "end": true,
                  "type": "exit"
              },
              "646187c35b0afc227e84c8f8": {
                  "id": "646187c35b0afc227e84c8f8",
                  "type": "text",
                  "texts": [
                      {
                          "id": "73r23sar",
                          "content": [
                              {
                                  "children": [
                                      {
                                          "text": " Ask me a question or click the button below! 👇🏻"
                                      }
                                  ]
                              }
                          ]
                      }
                  ],
                  "nextId": "646187c35b0afc227e84c8fb",
                  "platform": "webchat"
              },
              "646187c35b0afc227e84c8fb": {
                  "id": "646187c35b0afc227e84c8fb",
                  "type": "interaction",
                  "buttons": [
                      {
                          "name": "Mint a NFT",
                          "request": {
                              "type": "intent",
                              "payload": {
                                  "query": "Mint a NFT",
                                  "label": "Mint a NFT",
                                  "intent": {
                                      "name": "mint a NFT"
                                  },
                                  "actions": [],
                                  "entities": []
                              }
                          }
                      },
                      {
                          "name": "See my NFTs",
                          "request": {
                              "type": "path-9t79j3h61",
                              "payload": {
                                  "label": "See my NFTs",
                                  "actions": []
                              }
                          }
                      },
                      {
                          "name": "Store a File on IPFS",
                          "request": {
                              "type": "path-a411i3hbr",
                              "payload": {
                                  "label": "Store a File on IPFS",
                                  "actions": []
                              }
                          }
                      },
                      {
                          "name": "Update stored wallet address",
                          "request": {
                              "type": "path-j51263h2q",
                              "payload": {
                                  "label": "Update stored wallet address",
                                  "actions": []
                              }
                          }
                      },
                      {
                          "name": "I have queries",
                          "request": {
                              "type": "path-o01473he5",
                              "payload": {
                                  "label": "I have queries",
                                  "actions": []
                              }
                          }
                      },
                      {
                          "name": "End the conversation!",
                          "request": {
                              "type": "path-tlvu37wz",
                              "payload": {
                                  "label": "End the conversation!",
                                  "actions": []
                              }
                          }
                      }
                  ],
                  "noMatch": null,
                  "noReply": null,
                  "intentScope": "GLOBAL",
                  "interactions": [
                      {
                          "nextId": "649947b70ef0dae3b414b0bf",
                          "event": {
                              "type": "intent",
                              "intent": "mint a NFT"
                          }
                      },
                      {
                          "nextId": null,
                          "event": {
                              "type": "path-9t79j3h61",
                              "name": "See my NFTs"
                          }
                      },
                      {
                          "nextId": "6495e60316ecab5cf526c8be",
                          "event": {
                              "type": "path-a411i3hbr",
                              "name": "Store a File on IPFS"
                          }
                      },
                      {
                          "nextId": "6495f5b5eed13f9c47b87f48",
                          "event": {
                              "type": "path-j51263h2q",
                              "name": "Update stored wallet address"
                          }
                      },
                      {
                          "nextId": "6495a104d3f8f64a027fff68",
                          "event": {
                              "type": "path-o01473he5",
                              "name": "I have queries"
                          }
                      },
                      {
                          "nextId": "646187c35b0afc227e84c8f0",
                          "event": {
                              "type": "path-tlvu37wz",
                              "name": "End the conversation!"
                          }
                      }
                  ],
                  "platform": "webchat"
              },
              "64959f4ed3f8f64a027fff5f": {
                  "id": "64959f4ed3f8f64a027fff5f",
                  "type": "generative",
                  "source": "default",
                  "prompt": "",
                  "nextId": "646187c35b0afc227e84c8ec",
                  "mode": "prompt",
                  "model": "gpt-4",
                  "system": "You are an FAQ AI chat assistant expert in Blockchain. Information will be provided to help answer the user's questions. Always summarize your response to be as brief as possible and be extremely concise. Your responses should be fewer than a couple of sentences.",
                  "maxTokens": 128,
                  "temperature": 0.1
              },
              "6495a104d3f8f64a027fff68": {
                  "id": "6495a104d3f8f64a027fff68",
                  "type": "text",
                  "texts": [
                      {
                          "id": "qw18e3hft",
                          "content": [
                              {
                                  "children": [
                                      {
                                          "text": "Ask me anything related to Blockchain & Minting an NFT!"
                                      }
                                  ]
                              }
                          ]
                      }
                  ],
                  "nextId": "64959f4ed3f8f64a027fff5f",
                  "platform": "webchat"
              },
              "6495e60316ecab5cf526c8be": {
                  "id": "6495e60316ecab5cf526c8be",
                  "type": "goTo",
                  "request": {
                      "type": "intent",
                      "payload": {
                          "query": "",
                          "intent": {
                              "name": "ipfs.Storage"
                          },
                          "entities": []
                      },
                      "diagramID": "6495e613693d0200073ccccf"
                  }
              },
              "6495eed9eed13f9c47b87e9e": {
                  "id": "6495eed9eed13f9c47b87e9e",
                  "type": "text",
                  "texts": [
                      {
                          "id": "yz21932ia",
                          "content": [
                              {
                                  "children": [
                                      {
                                          "text": ""
                                      },
                                      {
                                          "text": "{appName}"
                                      },
                                      {
                                          "text": " can help you immortalize your uniqueness! "
                                      },
                                      {
                                          "text": " 😁😁",
                                          "strikeThrough": false
                                      }
                                  ]
                              }
                          ]
                      }
                  ],
                  "nextId": "6495ef46eed13f9c47b87eac",
                  "platform": "webchat"
              },
              "6495ef46eed13f9c47b87eac": {
                  "id": "6495ef46eed13f9c47b87eac",
                  "type": "text",
                  "texts": [
                      {
                          "id": "5026432ko",
                          "content": [
                              {
                                  "children": [
                                      {
                                          "text": "Can I know your name, please?"
                                      }
                                  ]
                              }
                          ]
                      }
                  ],
                  "nextId": "6495ef36eed13f9c47b87ea6",
                  "platform": "webchat"
              },
              "6495f22aeed13f9c47b87ec4": {
                  "id": "6495f22aeed13f9c47b87ec4",
                  "type": "setV2",
                  "sets": [
                      {
                          "type": "advance",
                          "variable": "appName",
                          "expression": "\"MintChat\""
                      }
                  ],
                  "nextId": "6495eed9eed13f9c47b87e9e"
              },
              "6495ef36eed13f9c47b87ea6": {
                  "id": "6495ef36eed13f9c47b87ea6",
                  "type": "captureV2",
                  "nextId": "6495f5b5eed13f9c47b87f48",
                  "noReply": null,
                  "noMatch": {
                      "prompts": [],
                      "randomize": false
                  },
                  "intentScope": "GLOBAL",
                  "platform": "webchat",
                  "intent": {
                      "name": "capture_name_nkcnflhl",
                      "entities": [
                          "name"
                      ]
                  }
              },
              "6495f5b5eed13f9c47b87f48": {
                  "id": "6495f5b5eed13f9c47b87f48",
                  "type": "text",
                  "texts": [
                      {
                          "id": "y34lg327d",
                          "content": [
                              {
                                  "children": [
                                      {
                                          "text": "Hola "
                                      },
                                      {
                                          "text": "{name}"
                                      },
                                      {
                                          "text": "! Can you provide your wallet Address? ("
                                      },
                                      {
                                          "text": "e.g. mho4jHBcrNCncKt38trJahXakuaBnS7LK5)",
                                          "underline": false
                                      },
                                      {
                                          "text": " "
                                      }
                                  ]
                              }
                          ]
                      }
                  ],
                  "nextId": "6498317254141f91a50c8bdb",
                  "platform": "webchat"
              },
              "6498317254141f91a50c8bdb": {
                  "id": "6498317254141f91a50c8bdb",
                  "type": "captureV2",
                  "nextId": "64993b6e0ef0dae3b414afc9",
                  "noReply": null,
                  "noMatch": null,
                  "intentScope": "GLOBAL",
                  "platform": "webchat",
                  "variable": "nftWalletAddress"
              },
              "64993b6e0ef0dae3b414afc6": {
                  "id": "64993b6e0ef0dae3b414afc6",
                  "type": "text",
                  "texts": [
                      {
                          "id": "u08yz372g",
                          "content": [
                              {
                                  "children": [
                                      {
                                          "text": "Unable to reach the server. Please try again!"
                                      }
                                  ]
                              }
                          ]
                      }
                  ],
                  "nextId": "6495f5b5eed13f9c47b87f48",
                  "platform": "webchat"
              },
              "64993b6e0ef0dae3b414afc9": {
                  "id": "64993b6e0ef0dae3b414afc9",
                  "type": "integrations",
                  "success_id": "649941050ef0dae3b414aff9",
                  "fail_id": "64993b6e0ef0dae3b414afc6",
                  "action_data": {
                      "url": "https://rest.cryptoapis.io/blockchain-tools/bitcoin/testnet/addresses/validate?context=yourExampleString",
                      "body": [
                          {
                              "key": "",
                              "val": ""
                          }
                      ],
                      "method": "POST",
                      "params": [],
                      "headers": [
                          {
                              "key": "Content-Type",
                              "val": "application/json"
                          },
                          {
                              "key": "X-API-Key",
                              "val": "0226b1b7f76e5e4638ca9d78dfb9c801c0c4a8c6"
                          }
                      ],
                      "mapping": [
                          {
                              "var": "addressIsValid",
                              "path": "response.data.item.isValid"
                          }
                      ],
                      "content": "{\r\n    \"context\": \"yourExampleString\",\r\n    \"data\": {\r\n        \"item\": {\r\n            \"address\": \"{nftWalletAddress}\"\r\n        }\r\n    }\r\n}",
                      "bodyInputType": "rawInput",
                      "selected_action": "Make a POST Request"
                  },
                  "selected_action": "Make a POST Request",
                  "selected_integration": "Custom API"
              },
              "649941050ef0dae3b414aff9": {
                  "id": "649941050ef0dae3b414aff9",
                  "type": "ifV2",
                  "payload": {
                      "elseId": "649945a40ef0dae3b414b01c",
                      "expressions": [
                          "String(nftWalletAddress).toLowerCase().includes(String('0x').toLowerCase())"
                      ]
                  },
                  "paths": [
                      {
                          "label": "Confirming the validity of wallet address",
                          "event": {
                              "type": "port0"
                          },
                          "nextID": "649943730ef0dae3b414b00b"
                      },
                      {
                          "label": "Else",
                          "event": {
                              "type": "else"
                          },
                          "nextID": "649945a40ef0dae3b414b01c"
                      }
                  ]
              },
              "649943730ef0dae3b414b00b": {
                  "id": "649943730ef0dae3b414b00b",
                  "type": "text",
                  "texts": [
                      {
                          "id": "yz1zn3lxf",
                          "content": [
                              {
                                  "children": [
                                      {
                                          "text": "Yay! Your wallet ("
                                      },
                                      {
                                          "text": "{nftWalletAddress}"
                                      },
                                      {
                                          "text": ") has been successfully connected!"
                                      }
                                  ]
                              }
                          ]
                      }
                  ],
                  "nextId": "646187c35b0afc227e84c8fb",
                  "platform": "webchat"
              },
              "649945a40ef0dae3b414b01c": {
                  "id": "649945a40ef0dae3b414b01c",
                  "type": "text",
                  "texts": [
                      {
                          "id": "cp34k3l3x",
                          "content": [
                              {
                                  "children": [
                                      {
                                          "text": "Your wallet address ("
                                      },
                                      {
                                          "text": "{nftWalletAddress}"
                                      },
                                      {
                                          "text": ")  is "
                                      },
                                      {
                                          "text": "invalid",
                                          "fontWeight": "700"
                                      },
                                      {
                                          "text": ". Please try again! Make sure it's in the correct format."
                                      }
                                  ]
                              }
                          ]
                      }
                  ],
                  "nextId": "6495f5b5eed13f9c47b87f48",
                  "platform": "webchat"
              },
              "649947b70ef0dae3b414b0bf": {
                  "id": "649947b70ef0dae3b414b0bf",
                  "type": "text",
                  "texts": [
                      {
                          "id": "o23ol3l2w",
                          "content": [
                              {
                                  "children": [
                                      {
                                          "text": "Do already have the image or do you want to generate one?"
                                      }
                                  ]
                              }
                          ]
                      }
                  ],
                  "nextId": "649948030ef0dae3b414b0c8",
                  "platform": "webchat"
              },
              "649948030ef0dae3b414b0c8": {
                  "id": "649948030ef0dae3b414b0c8",
                  "type": "interaction",
                  "buttons": [
                      {
                          "name": "I have the image URL",
                          "request": {
                              "type": "path-iw3rt3lj9",
                              "payload": {
                                  "label": "I have the image URL",
                                  "actions": []
                              }
                          }
                      },
                      {
                          "name": "Generate an image using AI cause I am cool!",
                          "request": {
                              "type": "path-yb3t43lpy",
                              "payload": {
                                  "label": "Generate an image using AI cause I am cool!",
                                  "actions": []
                              }
                          }
                      }
                  ],
                  "noMatch": null,
                  "noReply": null,
                  "intentScope": "GLOBAL",
                  "interactions": [
                      {
                          "nextId": "64994ada0ef0dae3b414b0d2",
                          "event": {
                              "type": "path-iw3rt3lj9",
                              "name": "I have the image URL"
                          }
                      },
                      {
                          "nextId": "6499eb5808e3f221576bbe45",
                          "event": {
                              "type": "path-yb3t43lpy",
                              "name": "Generate an image using AI cause I am cool!"
                          }
                      }
                  ],
                  "platform": "webchat"
              },
              "64994ada0ef0dae3b414b0d2": {
                  "id": "64994ada0ef0dae3b414b0d2",
                  "type": "text",
                  "texts": [
                      {
                          "id": "343vv3li7",
                          "content": [
                              {
                                  "children": [
                                      {
                                          "text": "Enter your "
                                      },
                                      {
                                          "text": "image's URL (URLs must end in \".gif\", \".png\", \".jpg\", or \".jpeg\"). ",
                                          "fontWeight": "700"
                                      },
                                      {
                                          "text": "Add \"filetype:png\" in the image URL otherwise."
                                      }
                                  ]
                              }
                          ]
                      }
                  ],
                  "nextId": "64994b1e0ef0dae3b414b0db",
                  "platform": "webchat"
              },
              "64994b1e0ef0dae3b414b0db": {
                  "id": "64994b1e0ef0dae3b414b0db",
                  "type": "captureV2",
                  "nextId": "64994efc0ef0dae3b414b106",
                  "noReply": null,
                  "noMatch": null,
                  "intentScope": "GLOBAL",
                  "platform": "webchat",
                  "variable": "nftImageURL"
              },
              "64994c120ef0dae3b414b0e6": {
                  "id": "64994c120ef0dae3b414b0e6",
                  "type": "text",
                  "texts": [
                      {
                          "id": "fl43v3lhl",
                          "content": [
                              {
                                  "children": [
                                      {
                                          "text": "What chain do you want to mint on? (We support: ethereum, arbitrum, polygon, optimism, avalanche, fantom, goerli, bsc-testnet, arbitrum-goerli, mumbai, optimism-goerli, fuji, fantom-testnet)"
                                      }
                                  ]
                              }
                          ]
                      }
                  ],
                  "nextId": "64994c7c0ef0dae3b414b0ef",
                  "platform": "webchat"
              },
              "64994c7c0ef0dae3b414b0ef": {
                  "id": "64994c7c0ef0dae3b414b0ef",
                  "type": "interaction",
                  "buttons": [
                      {
                          "name": "Polygon-Mumbai",
                          "request": {
                              "type": "path-nc4693lgy",
                              "payload": {
                                  "label": "Polygon-Mumbai",
                                  "actions": []
                              }
                          }
                      },
                      {
                          "name": "Goerli",
                          "request": {
                              "type": "path-cb2ev32q0",
                              "payload": {
                                  "label": "Goerli",
                                  "actions": []
                              }
                          }
                      },
                      {
                          "name": "Ethereum",
                          "request": {
                              "type": "path-s536x326u",
                              "payload": {
                                  "label": "Ethereum",
                                  "actions": []
                              }
                          }
                      },
                      {
                          "name": "Arbitrum-Goerli",
                          "request": {
                              "type": "path-vw3an3251",
                              "payload": {
                                  "label": "Arbitrum-Goerli",
                                  "actions": []
                              }
                          }
                      },
                      {
                          "name": "Fantom-goerli",
                          "request": {
                              "type": "path-l83aw32aq",
                              "payload": {
                                  "label": "Fantom-goerli",
                                  "actions": []
                              }
                          }
                      },
                      {
                          "name": "Optimism-Goerli",
                          "request": {
                              "type": "path-dh3b432s7",
                              "payload": {
                                  "label": "Optimism-Goerli",
                                  "actions": []
                              }
                          }
                      },
                      {
                          "name": "Arbitrum",
                          "request": {
                              "type": "path-we3w732vh",
                              "payload": {
                                  "label": "Arbitrum",
                                  "actions": []
                              }
                          }
                      },
                      {
                          "name": "Polygon",
                          "request": {
                              "type": "path-wp3wf32n4",
                              "payload": {
                                  "label": "Polygon",
                                  "actions": []
                              }
                          }
                      },
                      {
                          "name": "Optimism",
                          "request": {
                              "type": "path-9n3wn32a2",
                              "payload": {
                                  "label": "Optimism",
                                  "actions": []
                              }
                          }
                      },
                      {
                          "name": "Avalanche",
                          "request": {
                              "type": "path-uj3wv32hz",
                              "payload": {
                                  "label": "Avalanche",
                                  "actions": []
                              }
                          }
                      },
                      {
                          "name": "Fantom",
                          "request": {
                              "type": "path-o63x332r8",
                              "payload": {
                                  "label": "Fantom",
                                  "actions": []
                              }
                          }
                      },
                      {
                          "name": "Bsc-Testnet",
                          "request": {
                              "type": "path-4b3xb32ew",
                              "payload": {
                                  "label": "Bsc-Testnet",
                                  "actions": []
                              }
                          }
                      },
                      {
                          "name": "Fuji",
                          "request": {
                              "type": "path-tb3xj323e",
                              "payload": {
                                  "label": "Fuji",
                                  "actions": []
                              }
                          }
                      }
                  ],
                  "noMatch": null,
                  "noReply": null,
                  "intentScope": "GLOBAL",
                  "interactions": [
                      {
                          "nextId": "64994c9a0ef0dae3b414b0f5",
                          "event": {
                              "type": "path-nc4693lgy",
                              "name": "Polygon-Mumbai"
                          }
                      },
                      {
                          "nextId": "6499c9e708e3f221576bbb21",
                          "event": {
                              "type": "path-cb2ev32q0",
                              "name": "Goerli"
                          }
                      },
                      {
                          "nextId": "6499d9ac08e3f221576bbc5b",
                          "event": {
                              "type": "path-s536x326u",
                              "name": "Ethereum"
                          }
                      },
                      {
                          "nextId": "6499da0e08e3f221576bbc6c",
                          "event": {
                              "type": "path-vw3an3251",
                              "name": "Arbitrum-Goerli"
                          }
                      },
                      {
                          "nextId": "6499da2f08e3f221576bbc74",
                          "event": {
                              "type": "path-l83aw32aq",
                              "name": "Fantom-goerli"
                          }
                      },
                      {
                          "nextId": "6499da5d08e3f221576bbc7c",
                          "event": {
                              "type": "path-dh3b432s7",
                              "name": "Optimism-Goerli"
                          }
                      },
                      {
                          "nextId": "6499e5af08e3f221576bbc98",
                          "event": {
                              "type": "path-we3w732vh",
                              "name": "Arbitrum"
                          }
                      },
                      {
                          "nextId": "6499e5c808e3f221576bbca0",
                          "event": {
                              "type": "path-wp3wf32n4",
                              "name": "Polygon"
                          }
                      },
                      {
                          "nextId": "6499e5ed08e3f221576bbca8",
                          "event": {
                              "type": "path-9n3wn32a2",
                              "name": "Optimism"
                          }
                      },
                      {
                          "nextId": "6499e60308e3f221576bbcb0",
                          "event": {
                              "type": "path-uj3wv32hz",
                              "name": "Avalanche"
                          }
                      },
                      {
                          "nextId": "6499e64a08e3f221576bbcb8",
                          "event": {
                              "type": "path-o63x332r8",
                              "name": "Fantom"
                          }
                      },
                      {
                          "nextId": "6499e66208e3f221576bbcc0",
                          "event": {
                              "type": "path-4b3xb32ew",
                              "name": "Bsc-Testnet"
                          }
                      },
                      {
                          "nextId": "6499e6a608e3f221576bbcc8",
                          "event": {
                              "type": "path-tb3xj323e",
                              "name": "Fuji"
                          }
                      }
                  ],
                  "platform": "webchat"
              },
              "64994c9a0ef0dae3b414b0f5": {
                  "id": "64994c9a0ef0dae3b414b0f5",
                  "type": "setV2",
                  "sets": [
                      {
                          "type": "advance",
                          "variable": "nftChain",
                          "expression": "\"mumbai\""
                      }
                  ],
                  "nextId": "64994ce30ef0dae3b414b0fd"
              },
              "64994ce30ef0dae3b414b0fd": {
                  "id": "64994ce30ef0dae3b414b0fd",
                  "type": "text",
                  "texts": [
                      {
                          "id": "1l4bd3lik",
                          "content": [
                              {
                                  "children": [
                                      {
                                          "text": "Creating a new NFT with:"
                                      }
                                  ]
                              },
                              {
                                  "children": [
                                      {
                                          "text": "Name: "
                                      },
                                      {
                                          "text": "{nftName}"
                                      },
                                      {
                                          "text": " "
                                      }
                                  ]
                              },
                              {
                                  "children": [
                                      {
                                          "text": "Description: "
                                      },
                                      {
                                          "text": "{nftDescription}"
                                      },
                                      {
                                          "text": " "
                                      }
                                  ]
                              },
                              {
                                  "children": [
                                      {
                                          "text": "Image: "
                                      },
                                      {
                                          "text": "{nftImageURL}"
                                      },
                                      {
                                          "text": " "
                                      }
                                  ]
                              },
                              {
                                  "children": [
                                      {
                                          "text": "Wallet Address: "
                                      },
                                      {
                                          "text": "{nftWalletAddress}"
                                      },
                                      {
                                          "text": " "
                                      }
                                  ]
                              }
                          ]
                      }
                  ],
                  "nextId": "6499c29b08e3f221576bba99",
                  "platform": "webchat"
              },
              "64994efc0ef0dae3b414b106": {
                  "id": "64994efc0ef0dae3b414b106",
                  "type": "text",
                  "texts": [
                      {
                          "id": "e94em3la6",
                          "content": [
                              {
                                  "children": [
                                      {
                                          "text": "Enter "
                                      },
                                      {
                                          "text": "NFT's Name",
                                          "fontWeight": "700"
                                      }
                                  ]
                              }
                          ]
                      }
                  ],
                  "nextId": "649950000ef0dae3b414b119",
                  "platform": "webchat"
              },
              "64994f1a0ef0dae3b414b10f": {
                  "id": "64994f1a0ef0dae3b414b10f",
                  "type": "text",
                  "texts": [
                      {
                          "id": "q14g43l2m",
                          "content": [
                              {
                                  "children": [
                                      {
                                          "text": "Enter "
                                      },
                                      {
                                          "text": "NFT's Description",
                                          "fontWeight": "700"
                                      }
                                  ]
                              }
                          ]
                      }
                  ],
                  "nextId": "649950220ef0dae3b414b11f",
                  "platform": "webchat"
              },
              "649950000ef0dae3b414b119": {
                  "id": "649950000ef0dae3b414b119",
                  "type": "captureV2",
                  "nextId": "64994f1a0ef0dae3b414b10f",
                  "noReply": null,
                  "noMatch": null,
                  "intentScope": "GLOBAL",
                  "platform": "webchat",
                  "variable": "nftName"
              },
              "649950220ef0dae3b414b11f": {
                  "id": "649950220ef0dae3b414b11f",
                  "type": "captureV2",
                  "nextId": "64994c120ef0dae3b414b0e6",
                  "noReply": null,
                  "noMatch": null,
                  "intentScope": "GLOBAL",
                  "platform": "webchat",
                  "variable": "nftDescription"
              },
              "6499c25408e3f221576bba87": {
                  "id": "6499c25408e3f221576bba87",
                  "type": "integrations",
                  "success_id": "6499c3ee08e3f221576bbab8",
                  "fail_id": "6499c2c708e3f221576bbaa4",
                  "action_data": {
                      "url": "https://api.verbwire.com/v1/nft/mint/quickMintFromMetadata",
                      "body": [
                          {
                              "key": "chain",
                              "val": "{nftChain}"
                          },
                          {
                              "key": "name",
                              "val": "{nftName}"
                          },
                          {
                              "key": "description",
                              "val": "{nftDescription}"
                          },
                          {
                              "key": "imageUrl",
                              "val": "{nftImageURL}"
                          },
                          {
                              "key": "recipientAddress",
                              "val": "{nftWalletAddress}"
                          },
                          {
                              "key": "data",
                              "val": "{nftImageURL}"
                          }
                      ],
                      "method": "POST",
                      "params": [],
                      "headers": [
                          {
                              "key": "X-API-Key",
                              "val": "sk_live_665984d9-12cc-4126-b7b0-9190bd3ad744"
                          },
                          {
                              "key": "accept",
                              "val": "application/json"
                          },
                          {
                              "key": "content-type",
                              "val": "multipart/form-data"
                          }
                      ],
                      "mapping": [
                          {
                              "var": "transactionHash",
                              "path": "transaction_details.transactionHash"
                          },
                          {
                              "var": "blockExplorer",
                              "path": "transaction_details.blockExplorer"
                          },
                          {
                              "var": "transactionID",
                              "path": "transaction_details.transactionID"
                          },
                          {
                              "var": "transactionDetails",
                              "path": "transaction_details"
                          }
                      ],
                      "content": "",
                      "bodyInputType": "formData",
                      "selected_action": "Make a POST Request"
                  },
                  "selected_action": "Make a POST Request",
                  "selected_integration": "Custom API"
              },
              "6499c29b08e3f221576bba99": {
                  "id": "6499c29b08e3f221576bba99",
                  "type": "visual",
                  "data": {
                      "visualType": "image",
                      "image": "{nftImageURL}",
                      "canvasVisibility": "full"
                  },
                  "nextId": "6499c25408e3f221576bba87",
                  "platform": "webchat"
              },
              "6499c2c708e3f221576bbaa4": {
                  "id": "6499c2c708e3f221576bbaa4",
                  "type": "text",
                  "texts": [
                      {
                          "id": "bwnu36hx",
                          "content": [
                              {
                                  "children": [
                                      {
                                          "text": "Minting has failed, please try again."
                                      }
                                  ]
                              }
                          ]
                      }
                  ],
                  "nextId": "6499c2c708e3f221576bbaa6",
                  "platform": "webchat"
              },
              "6499c2c708e3f221576bbaa6": {
                  "id": "6499c2c708e3f221576bbaa6",
                  "type": "goTo",
                  "request": {
                      "type": "intent",
                      "payload": {
                          "query": "",
                          "intent": {
                              "name": "VF.START_OVER"
                          },
                          "entities": []
                      },
                      "diagramID": "6495a7edcfac400006242149"
                  }
              },
              "6499c3a008e3f221576bbab1": {
                  "id": "6499c3a008e3f221576bbab1",
                  "type": "_next",
                  "nextId": "646187c35b0afc227e84c8f8"
              },
              "6499c3ee08e3f221576bbab8": {
                  "id": "6499c3ee08e3f221576bbab8",
                  "type": "text",
                  "texts": [
                      {
                          "id": "3h1kk32iv",
                          "content": [
                              {
                                  "children": [
                                      {
                                          "text": "Mint successful! View details below:"
                                      }
                                  ]
                              },
                              {
                                  "children": [
                                      {
                                          "text": ""
                                      }
                                  ]
                              },
                              {
                                  "children": [
                                      {
                                          "text": "TransactionHash: "
                                      },
                                      {
                                          "text": "{transactionHash}"
                                      },
                                      {
                                          "text": " "
                                      }
                                  ]
                              },
                              {
                                  "children": [
                                      {
                                          "text": "TransactionID: "
                                      },
                                      {
                                          "text": "{transactionID}"
                                      },
                                      {
                                          "text": " "
                                      }
                                  ]
                              },
                              {
                                  "children": [
                                      {
                                          "text": ""
                                      }
                                  ]
                              },
                              {
                                  "children": [
                                      {
                                          "text": "You can view your NFT being created using the blockExplorer URL:"
                                      }
                                  ]
                              },
                              {
                                  "children": [
                                      {
                                          "text": ""
                                      }
                                  ]
                              },
                              {
                                  "children": [
                                      {
                                          "text": " "
                                      },
                                      {
                                          "text": "{blockExplorer}"
                                      },
                                      {
                                          "text": " "
                                      }
                                  ]
                              },
                              {
                                  "children": [
                                      {
                                          "text": ""
                                      }
                                  ]
                              },
                              {
                                  "children": [
                                      {
                                          "text": "You can view your NFT using the Openseas URL: "
                                      }
                                  ]
                              },
                              {
                                  "children": [
                                      {
                                          "text": ""
                                      }
                                  ]
                              },
                              {
                                  "children": [
                                      {
                                          "text": "testnets.opensea.io/"
                                      },
                                      {
                                          "text": "{nftWalletAddress}"
                                      },
                                      {
                                          "text": " "
                                      }
                                  ]
                              }
                          ]
                      }
                  ],
                  "nextId": "6499c42808e3f221576bbac1",
                  "platform": "webchat"
              },
              "6499c42808e3f221576bbac1": {
                  "id": "6499c42808e3f221576bbac1",
                  "type": "interaction",
                  "buttons": [
                      {
                          "name": "Open BlockExplorer",
                          "request": {
                              "type": "path-0d1mh32pe",
                              "payload": {
                                  "label": "Open BlockExplorer",
                                  "actions": [
                                      {
                                          "type": "open_url",
                                          "payload": {
                                              "url": "{blockExplorer}"
                                          }
                                      }
                                  ]
                              }
                          }
                      },
                      {
                          "name": "View Your NFTs",
                          "request": {
                              "type": "path-e51no32tj",
                              "payload": {
                                  "label": "View Your NFTs",
                                  "actions": [
                                      {
                                          "type": "open_url",
                                          "payload": {
                                              "url": "testnets.opensea.io/{nftWalletAddress}"
                                          }
                                      }
                                  ]
                              }
                          }
                      },
                      {
                          "name": "Back to Main options",
                          "request": {
                              "type": "path-111p33267",
                              "payload": {
                                  "label": "Back to Main options",
                                  "actions": []
                              }
                          }
                      }
                  ],
                  "noMatch": null,
                  "noReply": null,
                  "intentScope": "GLOBAL",
                  "interactions": [
                      {
                          "nextId": "6499c4c808e3f221576bbb10",
                          "event": {
                              "type": "path-0d1mh32pe",
                              "name": "Open BlockExplorer"
                          }
                      },
                      {
                          "nextId": "6499c4c808e3f221576bbb10",
                          "event": {
                              "type": "path-e51no32tj",
                              "name": "View Your NFTs"
                          }
                      },
                      {
                          "nextId": "646187c35b0afc227e84c8f8",
                          "event": {
                              "type": "path-111p33267",
                              "name": "Back to Main options"
                          }
                      }
                  ],
                  "platform": "webchat"
              },
              "6499c4c808e3f221576bbb10": {
                  "id": "6499c4c808e3f221576bbb10",
                  "type": "text",
                  "texts": [
                      {
                          "id": "7x1rh321d",
                          "content": [
                              {
                                  "children": [
                                      {
                                          "text": "Congrats on your newly minted NFT! 🤩 What can I help with?"
                                      }
                                  ]
                              }
                          ]
                      }
                  ],
                  "nextId": "6499c42808e3f221576bbac1",
                  "platform": "webchat"
              },
              "6499c9e708e3f221576bbb21": {
                  "id": "6499c9e708e3f221576bbb21",
                  "type": "setV2",
                  "sets": [
                      {
                          "type": "advance",
                          "variable": "nftChain",
                          "expression": "\"goerli\""
                      }
                  ],
                  "nextId": "64994ce30ef0dae3b414b0fd"
              },
              "6499d9ac08e3f221576bbc5b": {
                  "id": "6499d9ac08e3f221576bbc5b",
                  "type": "setV2",
                  "sets": [
                      {
                          "type": "advance",
                          "variable": "nftChain",
                          "expression": "\"ethereum\""
                      }
                  ],
                  "nextId": "64994ce30ef0dae3b414b0fd"
              },
              "6499da0e08e3f221576bbc6c": {
                  "id": "6499da0e08e3f221576bbc6c",
                  "type": "setV2",
                  "sets": [
                      {
                          "type": "advance",
                          "variable": "nftChain",
                          "expression": "\"arbitrum-goerli\""
                      }
                  ],
                  "nextId": "64994ce30ef0dae3b414b0fd"
              },
              "6499da2f08e3f221576bbc74": {
                  "id": "6499da2f08e3f221576bbc74",
                  "type": "setV2",
                  "sets": [
                      {
                          "type": "advance",
                          "variable": "nftChain",
                          "expression": "\"fantom-goerli\""
                      }
                  ],
                  "nextId": "64994ce30ef0dae3b414b0fd"
              },
              "6499da5d08e3f221576bbc7c": {
                  "id": "6499da5d08e3f221576bbc7c",
                  "type": "setV2",
                  "sets": [
                      {
                          "type": "advance",
                          "variable": "nftChain",
                          "expression": "\"optimism-goerli\""
                      }
                  ],
                  "nextId": "64994ce30ef0dae3b414b0fd"
              },
              "6499e5af08e3f221576bbc98": {
                  "id": "6499e5af08e3f221576bbc98",
                  "type": "setV2",
                  "sets": [
                      {
                          "type": "advance",
                          "variable": "nftChain",
                          "expression": "\"arbitrum\""
                      }
                  ],
                  "nextId": "64994ce30ef0dae3b414b0fd"
              },
              "6499e5c808e3f221576bbca0": {
                  "id": "6499e5c808e3f221576bbca0",
                  "type": "setV2",
                  "sets": [
                      {
                          "type": "advance",
                          "variable": "nftChain",
                          "expression": "\"polygon\""
                      }
                  ],
                  "nextId": "64994ce30ef0dae3b414b0fd"
              },
              "6499e5ed08e3f221576bbca8": {
                  "id": "6499e5ed08e3f221576bbca8",
                  "type": "setV2",
                  "sets": [
                      {
                          "type": "advance",
                          "variable": "nftChain",
                          "expression": "\"optimism\""
                      }
                  ],
                  "nextId": "64994ce30ef0dae3b414b0fd"
              },
              "6499e60308e3f221576bbcb0": {
                  "id": "6499e60308e3f221576bbcb0",
                  "type": "setV2",
                  "sets": [
                      {
                          "type": "advance",
                          "variable": "nftChain",
                          "expression": "\"avalanche\""
                      }
                  ],
                  "nextId": "64994ce30ef0dae3b414b0fd"
              },
              "6499e64a08e3f221576bbcb8": {
                  "id": "6499e64a08e3f221576bbcb8",
                  "type": "setV2",
                  "sets": [
                      {
                          "type": "advance",
                          "variable": "nftChain",
                          "expression": "\"fantom\""
                      }
                  ],
                  "nextId": "64994ce30ef0dae3b414b0fd"
              },
              "6499e66208e3f221576bbcc0": {
                  "id": "6499e66208e3f221576bbcc0",
                  "type": "setV2",
                  "sets": [
                      {
                          "type": "advance",
                          "variable": "nftChain",
                          "expression": "\"bsc-testnet\""
                      }
                  ],
                  "nextId": "64994ce30ef0dae3b414b0fd"
              },
              "6499e6a608e3f221576bbcc8": {
                  "id": "6499e6a608e3f221576bbcc8",
                  "type": "setV2",
                  "sets": [
                      {
                          "type": "advance",
                          "variable": "nftChain",
                          "expression": "\"fuji\""
                      }
                  ],
                  "nextId": "64994ce30ef0dae3b414b0fd"
              },
              "6499eb5808e3f221576bbe45": {
                  "id": "6499eb5808e3f221576bbe45",
                  "type": "text",
                  "texts": [
                      {
                          "id": "pt4wy3244",
                          "content": [
                              {
                                  "children": [
                                      {
                                          "text": "Please enter the text prompt you want for your Generative AI NFT!"
                                      }
                                  ]
                              }
                          ]
                      }
                  ],
                  "nextId": "6499ebd008e3f221576bbe4e",
                  "platform": "webchat"
              },
              "6499ebd008e3f221576bbe4e": {
                  "id": "6499ebd008e3f221576bbe4e",
                  "type": "captureV2",
                  "nextId": "6499ebf108e3f221576bbe54",
                  "noReply": null,
                  "noMatch": null,
                  "intentScope": "GLOBAL",
                  "platform": "webchat",
                  "variable": "imagePrompt"
              },
              "6499ebf108e3f221576bbe54": {
                  "id": "6499ebf108e3f221576bbe54",
                  "type": "integrations",
                  "success_id": "6499f63b08e3f221576bbe76",
                  "fail_id": "6499f5e008e3f221576bbe5f",
                  "action_data": {
                      "url": "https://stablediffusionapi.com/api/v3/text2img",
                      "body": [
                          {
                              "key": "key",
                              "val": "1ENB3pXgMqJDYziaAA2kFUzTVdyvM6ieWD9HTs40bCRAbwaOIQBh6fr3qswb"
                          },
                          {
                              "key": "prompt",
                              "val": "{imagePrompt}"
                          },
                          {
                              "key": "width",
                              "val": "256"
                          },
                          {
                              "key": "height",
                              "val": "256"
                          },
                          {
                              "key": "num_inference_steps",
                              "val": "21"
                          },
                          {
                              "key": "guidance_scale",
                              "val": "7.5"
                          },
                          {
                              "key": "safety_checker",
                              "val": "yes"
                          },
                          {
                              "key": "samples",
                              "val": "2"
                          }
                      ],
                      "method": "POST",
                      "params": [],
                      "headers": [],
                      "mapping": [
                          {
                              "var": "firstImage",
                              "path": "output[0]"
                          },
                          {
                              "var": "secondImage",
                              "path": "output[1]"
                          }
                      ],
                      "content": "",
                      "bodyInputType": "formData",
                      "selected_action": "Make a POST Request"
                  },
                  "selected_action": "Make a POST Request",
                  "selected_integration": "Custom API"
              },
              "6499f5e008e3f221576bbe5f": {
                  "id": "6499f5e008e3f221576bbe5f",
                  "type": "text",
                  "texts": [
                      {
                          "id": "i05hh32ix",
                          "content": [
                              {
                                  "children": [
                                      {
                                          "text": "Unable to process the request at the moment. Please try again!"
                                      }
                                  ]
                              }
                          ]
                      }
                  ],
                  "nextId": "6499eb5808e3f221576bbe45",
                  "platform": "webchat"
              },
              "6499f63b08e3f221576bbe76": {
                  "id": "6499f63b08e3f221576bbe76",
                  "type": "carousel",
                  "nextId": null,
                  "isBlocking": true,
                  "layout": "Carousel",
                  "noReply": null,
                  "noMatch": null,
                  "cards": [
                      {
                          "id": "6c5lr320l",
                          "title": "First Image",
                          "description": [
                              {
                                  "children": [
                                      {
                                          "text": ""
                                      }
                                  ]
                              }
                          ],
                          "imageUrl": "{firstImage}",
                          "buttons": [
                              {
                                  "name": "Choose",
                                  "request": {
                                      "type": "choose-bd5n232jy",
                                      "payload": {
                                          "label": "Choose",
                                          "actions": []
                                      }
                                  }
                              }
                          ]
                      },
                      {
                          "id": "0m5oy32z6",
                          "title": "Second Image",
                          "description": [
                              {
                                  "children": [
                                      {
                                          "text": ""
                                      }
                                  ]
                              }
                          ],
                          "imageUrl": "{secondImage}",
                          "buttons": [
                              {
                                  "name": "Choose",
                                  "request": {
                                      "type": "choose-k65ph32hj",
                                      "payload": {
                                          "label": "Choose",
                                          "actions": []
                                      }
                                  }
                              }
                          ]
                      },
                      {
                          "id": "x25qz3231",
                          "title": "Not Satisfied!",
                          "description": [
                              {
                                  "children": [
                                      {
                                          "text": ""
                                      }
                                  ]
                              }
                          ],
                          "imageUrl": "",
                          "buttons": [
                              {
                                  "name": "Reload Samples",
                                  "request": {
                                      "type": "reload-samples-tn5rb328t",
                                      "payload": {
                                          "label": "Reload Samples",
                                          "actions": []
                                      }
                                  }
                              }
                          ]
                      }
                  ],
                  "platform": "webchat"
              },
              "6499f69a08e3f221576bbe81": {
                  "id": "6499f69a08e3f221576bbe81",
                  "type": "setV2",
                  "sets": [
                      {
                          "type": "advance",
                          "variable": "nftImageURL",
                          "expression": "firstImage"
                      }
                  ],
                  "nextId": "6499f74c08e3f221576bbe97"
              },
              "6499f6e108e3f221576bbe8b": {
                  "id": "6499f6e108e3f221576bbe8b",
                  "type": "setV2",
                  "sets": [
                      {
                          "type": "advance",
                          "variable": "nftImageURL",
                          "expression": "secondImage"
                      }
                  ],
                  "nextId": "6499f74c08e3f221576bbe97"
              },
              "6499f74c08e3f221576bbe97": {
                  "id": "6499f74c08e3f221576bbe97",
                  "type": "text",
                  "texts": [
                      {
                          "id": "ef5tr32hl",
                          "content": [
                              {
                                  "children": [
                                      {
                                          "text": "This image will be used to mint your new NFT"
                                      }
                                  ]
                              }
                          ]
                      }
                  ],
                  "nextId": "6499f76c08e3f221576bbea0",
                  "platform": "webchat"
              },
              "6499f76c08e3f221576bbea0": {
                  "id": "6499f76c08e3f221576bbea0",
                  "type": "visual",
                  "data": {
                      "visualType": "image",
                      "image": "{nftImageURL}",
                      "canvasVisibility": "full"
                  },
                  "nextId": "64994efc0ef0dae3b414b106",
                  "platform": "webchat"
              }
          },
          "name": "ROOT",
          "startId": "start00000000000000000000",
          "variables": [],
          "id": "6495a7edcfac400006242149",
          "versionID": "6495a7edcfac400006242148"
      },
      "6495a7edcfac40000624214a": {
          "commands": [],
          "lines": {
              "6438725334aead00076d562e": {
                  "id": "6438725334aead00076d562e",
                  "type": "start",
                  "nextId": null
              },
              "6438725382cf9d2273b9058d": {
                  "id": "6438725382cf9d2273b9058d",
                  "type": "text",
                  "texts": [
                      {
                          "id": "s27ac3eqh",
                          "content": [
                              {
                                  "children": [
                                      {
                                          "text": "Ask any question",
                                          "fontWeight": "700"
                                      },
                                      {
                                          "text": ", and we'll use the response AI step to provide a contextual response."
                                      }
                                  ]
                              }
                          ]
                      }
                  ],
                  "nextId": "6438725382cf9d2273b90590",
                  "platform": "webchat"
              },
              "6438725382cf9d2273b90590": {
                  "id": "6438725382cf9d2273b90590",
                  "type": "captureV2",
                  "nextId": "6438725382cf9d2273b90594",
                  "noReply": null,
                  "noMatch": null,
                  "intentScope": "GLOBAL",
                  "platform": "webchat",
                  "variable": "last_utterance"
              },
              "6438725382cf9d2273b90594": {
                  "id": "6438725382cf9d2273b90594",
                  "type": "generative",
                  "prompt": "Based on the users response {last_utterance}, respond to the user",
                  "nextId": null,
                  "model": "gpt-4",
                  "system": "You are a helpful assistant",
                  "maxTokens": 100,
                  "temperature": 0.7
              },
              "643872d482cf9d2273b905e5": {
                  "id": "643872d482cf9d2273b905e5",
                  "type": "text",
                  "texts": [
                      {
                          "id": "lu9tb340d",
                          "content": [
                              {
                                  "children": [
                                      {
                                          "text": "Second Option"
                                      }
                                  ]
                              }
                          ]
                      }
                  ],
                  "nextId": null,
                  "platform": "webchat"
              },
              "643872d482cf9d2273b905e8": {
                  "id": "643872d482cf9d2273b905e8",
                  "type": "text",
                  "texts": [
                      {
                          "id": "929q734a2",
                          "content": [
                              {
                                  "children": [
                                      {
                                          "text": "How can I help you?"
                                      }
                                  ]
                              }
                          ]
                      }
                  ],
                  "nextId": "643872d482cf9d2273b905eb",
                  "platform": "webchat"
              },
              "643872d482cf9d2273b905eb": {
                  "id": "643872d482cf9d2273b905eb",
                  "type": "interaction",
                  "buttons": [
                      {
                          "name": "Path 1",
                          "request": {
                              "type": "path-xr9vd34tj",
                              "payload": {
                                  "label": "Path 1",
                                  "actions": []
                              }
                          }
                      },
                      {
                          "name": "Path 2",
                          "request": {
                              "type": "path-cl9vs34c7",
                              "payload": {
                                  "label": "Path 2",
                                  "actions": []
                              }
                          }
                      }
                  ],
                  "noMatch": null,
                  "noReply": null,
                  "intentScope": "GLOBAL",
                  "interactions": [
                      {
                          "nextId": "643872d482cf9d2273b905f0",
                          "event": {
                              "type": "path-xr9vd34tj",
                              "name": "Path 1"
                          }
                      },
                      {
                          "nextId": "643872d482cf9d2273b905e5",
                          "event": {
                              "type": "path-cl9vs34c7",
                              "name": "Path 2"
                          }
                      }
                  ],
                  "platform": "webchat"
              },
              "643872d482cf9d2273b905f0": {
                  "id": "643872d482cf9d2273b905f0",
                  "type": "text",
                  "texts": [
                      {
                          "id": "ky9ry343w",
                          "content": [
                              {
                                  "children": [
                                      {
                                          "text": "First Option"
                                      }
                                  ]
                              }
                          ]
                      }
                  ],
                  "nextId": null,
                  "platform": "webchat"
              },
              "643873be82cf9d2273b9067b": {
                  "id": "643873be82cf9d2273b9067b",
                  "type": "text",
                  "texts": [
                      {
                          "id": "1jabe34gf",
                          "content": [
                              {
                                  "children": [
                                      {
                                          "text": "Welcome to Voiceflow user "
                                      },
                                      {
                                          "text": "{user_id}"
                                      },
                                      {
                                          "text": " "
                                      }
                                  ]
                              }
                          ]
                      }
                  ],
                  "nextId": null,
                  "platform": "webchat"
              },
              "643873be82cf9d2273b9067e": {
                  "id": "643873be82cf9d2273b9067e",
                  "type": "ifV2",
                  "payload": {
                      "elseId": "643873be82cf9d2273b9067b",
                      "expressions": [
                          "user_id == 1234"
                      ]
                  },
                  "paths": [
                      {
                          "label": "If UserID = 1234",
                          "event": {
                              "type": "port0"
                          },
                          "nextID": "643873be82cf9d2273b90682"
                      },
                      {
                          "label": "All other UserIDs",
                          "event": {
                              "type": "else"
                          },
                          "nextID": "643873be82cf9d2273b9067b"
                      }
                  ]
              },
              "643873be82cf9d2273b90682": {
                  "id": "643873be82cf9d2273b90682",
                  "type": "text",
                  "texts": [
                      {
                          "id": "1jabe34gf",
                          "content": [
                              {
                                  "children": [
                                      {
                                          "text": "Welcome back user "
                                      },
                                      {
                                          "text": "{user_id}"
                                      },
                                      {
                                          "text": " "
                                      }
                                  ]
                              }
                          ]
                      }
                  ],
                  "nextId": null,
                  "platform": "webchat"
              },
              "643873be82cf9d2273b90685": {
                  "id": "643873be82cf9d2273b90685",
                  "type": "text",
                  "texts": [
                      {
                          "id": "s8a30349g",
                          "content": [
                              {
                                  "children": [
                                      {
                                          "text": "What is your userID?"
                                      }
                                  ]
                              }
                          ]
                      }
                  ],
                  "nextId": "643873be82cf9d2273b90688",
                  "platform": "webchat"
              },
              "643873be82cf9d2273b90688": {
                  "id": "643873be82cf9d2273b90688",
                  "type": "captureV2",
                  "nextId": "643873be82cf9d2273b9067e",
                  "noReply": null,
                  "noMatch": null,
                  "intentScope": "GLOBAL",
                  "platform": "webchat",
                  "variable": "user_id"
              },
              "643874b482cf9d2273b9095b": {
                  "id": "643874b482cf9d2273b9095b",
                  "type": "ai_set",
                  "label": "Classify the users sentiment",
                  "sets": [
                      {
                          "variable": "sentiment",
                          "prompt": "using the last response {last_response}, classify the users sentiment as a single word"
                      }
                  ],
                  "nextId": "643874b482cf9d2273b9095e",
                  "model": "gpt-4",
                  "system": "",
                  "maxTokens": 10,
                  "temperature": 0
              },
              "643874b482cf9d2273b9095e": {
                  "id": "643874b482cf9d2273b9095e",
                  "type": "text",
                  "texts": [
                      {
                          "id": "wm8on3eh5",
                          "content": [
                              {
                                  "children": [
                                      {
                                          "text": "Based on your input, I classified your sentiment as: "
                                      },
                                      {
                                          "text": "{sentiment}"
                                      },
                                      {
                                          "text": ""
                                      }
                                  ]
                              }
                          ]
                      }
                  ],
                  "nextId": null,
                  "platform": "webchat"
              },
              "643874b482cf9d2273b90961": {
                  "id": "643874b482cf9d2273b90961",
                  "type": "text",
                  "texts": [
                      {
                          "id": "xg77r3eyi",
                          "content": [
                              {
                                  "children": [
                                      {
                                          "text": "The 'Set AI' step allows you to set variables from a prompt you define."
                                      }
                                  ]
                              }
                          ]
                      }
                  ],
                  "nextId": "643874b482cf9d2273b90964",
                  "platform": "webchat"
              },
              "643874b482cf9d2273b90964": {
                  "id": "643874b482cf9d2273b90964",
                  "type": "text",
                  "texts": [
                      {
                          "id": "1l9zc3eha",
                          "content": [
                              {
                                  "children": [
                                      {
                                          "text": "You might be thinking... \"what in the world does that mean?\". Well, lets just test an example."
                                      }
                                  ]
                              }
                          ]
                      }
                  ],
                  "nextId": "643874b482cf9d2273b90967",
                  "platform": "webchat"
              },
              "643874b482cf9d2273b90967": {
                  "id": "643874b482cf9d2273b90967",
                  "type": "text",
                  "texts": [
                      {
                          "id": "s27ac3eqh",
                          "content": [
                              {
                                  "children": [
                                      {
                                          "text": "say anything",
                                          "fontWeight": "700"
                                      },
                                      {
                                          "text": ", and we'll use the 'Set AI' step to classify your sentimet, and map it to a variable"
                                      }
                                  ]
                              }
                          ]
                      }
                  ],
                  "nextId": "643874b482cf9d2273b9096a",
                  "platform": "webchat"
              },
              "643874b482cf9d2273b9096a": {
                  "id": "643874b482cf9d2273b9096a",
                  "type": "captureV2",
                  "nextId": "643874b482cf9d2273b9095b",
                  "noReply": null,
                  "noMatch": null,
                  "intentScope": "GLOBAL",
                  "platform": "webchat",
                  "variable": "last_response"
              },
              "643874b482cf9d2273b9096e": {
                  "id": "643874b482cf9d2273b9096e",
                  "type": "text",
                  "texts": [
                      {
                          "id": "xg77r3eyi",
                          "content": [
                              {
                                  "children": [
                                      {
                                          "text": "The 'Response AI' step allows you to dynamically create responses based on a prompt that you define."
                                      }
                                  ]
                              }
                          ]
                      }
                  ],
                  "nextId": "643874b482cf9d2273b90971",
                  "platform": "webchat"
              },
              "643874b482cf9d2273b90971": {
                  "id": "643874b482cf9d2273b90971",
                  "type": "text",
                  "texts": [
                      {
                          "id": "s27ac3eqh",
                          "content": [
                              {
                                  "children": [
                                      {
                                          "text": "Ask any question",
                                          "fontWeight": "700"
                                      },
                                      {
                                          "text": ", and we'll use the response AI step to provide a contextual response."
                                      }
                                  ]
                              }
                          ]
                      }
                  ],
                  "nextId": "643874b482cf9d2273b90974",
                  "platform": "webchat"
              },
              "643874b482cf9d2273b90974": {
                  "id": "643874b482cf9d2273b90974",
                  "type": "captureV2",
                  "nextId": "643874b482cf9d2273b90978",
                  "noReply": null,
                  "noMatch": null,
                  "intentScope": "GLOBAL",
                  "platform": "webchat",
                  "variable": "last_utterance"
              },
              "643874b482cf9d2273b90978": {
                  "id": "643874b482cf9d2273b90978",
                  "type": "generative",
                  "prompt": "Based on the users response {last_utterance}, respond to the user",
                  "nextId": "643874b482cf9d2273b90961",
                  "model": "gpt-4",
                  "system": "You are a helpful assistant",
                  "maxTokens": 100,
                  "temperature": 0.7
              },
              "643874d182cf9d2273b909ec": {
                  "id": "643874d182cf9d2273b909ec",
                  "type": "text",
                  "texts": [
                      {
                          "id": "xg77r3eyi",
                          "content": [
                              {
                                  "children": [
                                      {
                                          "text": "The 'Response AI' step allows you to dynamically create responses based on a prompt that you define."
                                      }
                                  ]
                              }
                          ]
                      }
                  ],
                  "nextId": "643874d182cf9d2273b909ef",
                  "platform": "webchat"
              },
              "643874d182cf9d2273b909ef": {
                  "id": "643874d182cf9d2273b909ef",
                  "type": "text",
                  "texts": [
                      {
                          "id": "s27ac3eqh",
                          "content": [
                              {
                                  "children": [
                                      {
                                          "text": "Ask any question",
                                          "fontWeight": "700"
                                      },
                                      {
                                          "text": ", and we'll use the response AI step to provide a contextual response."
                                      }
                                  ]
                              }
                          ]
                      }
                  ],
                  "nextId": "643874d182cf9d2273b909f2",
                  "platform": "webchat"
              },
              "643874d182cf9d2273b909f2": {
                  "id": "643874d182cf9d2273b909f2",
                  "type": "captureV2",
                  "nextId": "643874d182cf9d2273b909f6",
                  "noReply": null,
                  "noMatch": null,
                  "intentScope": "GLOBAL",
                  "platform": "webchat",
                  "variable": "last_utterance"
              },
              "643874d182cf9d2273b909f6": {
                  "id": "643874d182cf9d2273b909f6",
                  "type": "generative",
                  "prompt": "Based on the users response {last_utterance}, respond to the user",
                  "nextId": null,
                  "model": "gpt-4",
                  "system": "You are a helpful assistant",
                  "maxTokens": 100,
                  "temperature": 0.7
              },
              "643874eb82cf9d2273b909fe": {
                  "id": "643874eb82cf9d2273b909fe",
                  "type": "ai_set",
                  "label": "Classify the users sentiment",
                  "sets": [
                      {
                          "variable": "sentiment",
                          "prompt": "using the last response {last_response}, classify the users sentiment as a single word"
                      }
                  ],
                  "nextId": "643874eb82cf9d2273b90a01",
                  "model": "gpt-4",
                  "system": "",
                  "maxTokens": 10,
                  "temperature": 0
              },
              "643874eb82cf9d2273b90a01": {
                  "id": "643874eb82cf9d2273b90a01",
                  "type": "text",
                  "texts": [
                      {
                          "id": "wm8on3eh5",
                          "content": [
                              {
                                  "children": [
                                      {
                                          "text": "Based on your input, I classified your sentiment as: "
                                      },
                                      {
                                          "text": "{sentiment}"
                                      },
                                      {
                                          "text": ""
                                      }
                                  ]
                              }
                          ]
                      }
                  ],
                  "nextId": null,
                  "platform": "webchat"
              },
              "643874eb82cf9d2273b90a04": {
                  "id": "643874eb82cf9d2273b90a04",
                  "type": "text",
                  "texts": [
                      {
                          "id": "xg77r3eyi",
                          "content": [
                              {
                                  "children": [
                                      {
                                          "text": "The 'Set AI' step allows you to set variables from a prompt you define."
                                      }
                                  ]
                              }
                          ]
                      }
                  ],
                  "nextId": "643874eb82cf9d2273b90a07",
                  "platform": "webchat"
              },
              "643874eb82cf9d2273b90a07": {
                  "id": "643874eb82cf9d2273b90a07",
                  "type": "text",
                  "texts": [
                      {
                          "id": "1l9zc3eha",
                          "content": [
                              {
                                  "children": [
                                      {
                                          "text": "You might be thinking... \"what in the world does that mean?\". Well, lets just test an example."
                                      }
                                  ]
                              }
                          ]
                      }
                  ],
                  "nextId": "643874eb82cf9d2273b90a0a",
                  "platform": "webchat"
              },
              "643874eb82cf9d2273b90a0a": {
                  "id": "643874eb82cf9d2273b90a0a",
                  "type": "text",
                  "texts": [
                      {
                          "id": "s27ac3eqh",
                          "content": [
                              {
                                  "children": [
                                      {
                                          "text": "say anything",
                                          "fontWeight": "700"
                                      },
                                      {
                                          "text": ", and we'll use the 'Set AI' step to classify your sentimet, and map it to a variable"
                                      }
                                  ]
                              }
                          ]
                      }
                  ],
                  "nextId": "643874eb82cf9d2273b90a0d",
                  "platform": "webchat"
              },
              "643874eb82cf9d2273b90a0d": {
                  "id": "643874eb82cf9d2273b90a0d",
                  "type": "captureV2",
                  "nextId": "643874eb82cf9d2273b909fe",
                  "noReply": null,
                  "noMatch": null,
                  "intentScope": "GLOBAL",
                  "platform": "webchat",
                  "variable": "last_response"
              },
              "6438784f82cf9d2273b90ddc": {
                  "id": "6438784f82cf9d2273b90ddc",
                  "type": "ifV2",
                  "payload": {
                      "elseId": "6438784f82cf9d2273b90de7",
                      "expressions": [
                          "name == 'elon musk'"
                      ]
                  },
                  "paths": [
                      {
                          "label": "If name is elon musk",
                          "event": {
                              "type": "port0"
                          },
                          "nextID": "6438784f82cf9d2273b90dea"
                      },
                      {
                          "label": "All other names",
                          "event": {
                              "type": "else"
                          },
                          "nextID": "6438784f82cf9d2273b90de7"
                      }
                  ]
              },
              "6438784f82cf9d2273b90de0": {
                  "id": "6438784f82cf9d2273b90de0",
                  "type": "text",
                  "texts": [
                      {
                          "id": "s8a30349g",
                          "content": [
                              {
                                  "children": [
                                      {
                                          "text": "What is your name?"
                                      }
                                  ]
                              }
                          ]
                      }
                  ],
                  "nextId": "6438784f82cf9d2273b90de3",
                  "platform": "webchat"
              },
              "6438784f82cf9d2273b90de3": {
                  "id": "6438784f82cf9d2273b90de3",
                  "type": "captureV2",
                  "nextId": "6438784f82cf9d2273b90ddc",
                  "noReply": null,
                  "noMatch": null,
                  "intentScope": "GLOBAL",
                  "platform": "webchat",
                  "variable": "name"
              },
              "6438784f82cf9d2273b90de7": {
                  "id": "6438784f82cf9d2273b90de7",
                  "type": "text",
                  "texts": [
                      {
                          "id": "1jabe34gf",
                          "content": [
                              {
                                  "children": [
                                      {
                                          "text": "Hello "
                                      },
                                      {
                                          "text": "{name}"
                                      },
                                      {
                                          "text": " !"
                                      }
                                  ]
                              }
                          ]
                      }
                  ],
                  "nextId": null,
                  "platform": "webchat"
              },
              "6438784f82cf9d2273b90dea": {
                  "id": "6438784f82cf9d2273b90dea",
                  "type": "text",
                  "texts": [
                      {
                          "id": "1jabe34gf",
                          "content": [
                              {
                                  "children": [
                                      {
                                          "text": "Twitter is the best 🐦"
                                      }
                                  ]
                              }
                          ]
                      }
                  ],
                  "nextId": null,
                  "platform": "webchat"
              },
              "645d6f1383103cca7a3ce736": {
                  "id": "645d6f1383103cca7a3ce736",
                  "type": "text",
                  "texts": [
                      {
                          "id": "xg77r3eyi",
                          "content": [
                              {
                                  "children": [
                                      {
                                          "text": "The 'Response AI' step allows you to dynamically create responses based on a prompt that you define."
                                      }
                                  ]
                              }
                          ]
                      }
                  ],
                  "nextId": "645d6f1383103cca7a3ce739",
                  "platform": "webchat"
              },
              "645d6f1383103cca7a3ce739": {
                  "id": "645d6f1383103cca7a3ce739",
                  "type": "text",
                  "texts": [
                      {
                          "id": "s27ac3eqh",
                          "content": [
                              {
                                  "children": [
                                      {
                                          "text": "Ask any question",
                                          "fontWeight": "700"
                                      },
                                      {
                                          "text": ", and we'll use the response AI step to provide a contextual response."
                                      }
                                  ]
                              }
                          ]
                      }
                  ],
                  "nextId": "645d6f1383103cca7a3ce73c",
                  "platform": "webchat"
              },
              "645d6f1383103cca7a3ce73c": {
                  "id": "645d6f1383103cca7a3ce73c",
                  "type": "captureV2",
                  "nextId": "645d6f1383103cca7a3ce740",
                  "noReply": null,
                  "noMatch": null,
                  "intentScope": "GLOBAL",
                  "platform": "webchat",
                  "variable": "last_utterance"
              },
              "645d6f1383103cca7a3ce740": {
                  "id": "645d6f1383103cca7a3ce740",
                  "type": "generative",
                  "prompt": "Based on the users question, respond with two brief sentences.",
                  "nextId": null,
                  "mode": "memory_prompt",
                  "model": "gpt-4",
                  "system": "You are a helpful assistant",
                  "maxTokens": 100,
                  "temperature": 0.7
              },
              "645d718f83103cca7a3cecc9": {
                  "id": "645d718f83103cca7a3cecc9",
                  "type": "text",
                  "texts": [
                      {
                          "id": "u08yz372g",
                          "content": [
                              {
                                  "children": [
                                      {
                                          "text": "Error"
                                      }
                                  ]
                              }
                          ]
                      }
                  ],
                  "nextId": null,
                  "platform": "webchat"
              },
              "645d718f83103cca7a3ceccc": {
                  "id": "645d718f83103cca7a3ceccc",
                  "type": "integrations",
                  "success_id": "645d718f83103cca7a3cecd7",
                  "fail_id": "645d718f83103cca7a3cecc9",
                  "action_data": {
                      "url": "https://api.openai.com/v1/completions",
                      "body": [
                          {
                              "key": "",
                              "val": ""
                          }
                      ],
                      "method": "POST",
                      "params": [],
                      "headers": [
                          {
                              "key": "Content-Type",
                              "val": "application/json"
                          },
                          {
                              "key": "Authorization",
                              "val": "Bearer <ADD API KEY HERE>"
                          }
                      ],
                      "mapping": [
                          {
                              "var": "response",
                              "path": "response"
                          }
                      ],
                      "content": "{\n  \"model\": \"text-davinci-003\",\n  \"prompt\": \"{last_utterance}\",\n  \"max_tokens\": 7,\n  \"temperature\": 0,\n  \"top_p\": 1,\n  \"n\": 1,\n  \"stream\": false,\n  \"logprobs\": null,\n  \"stop\": \"\\n\"\n}",
                      "bodyInputType": "rawInput",
                      "selected_action": "Make a POST Request"
                  },
                  "selected_action": "Make a POST Request",
                  "selected_integration": "Custom API"
              },
              "645d718f83103cca7a3cecd0": {
                  "id": "645d718f83103cca7a3cecd0",
                  "type": "text",
                  "texts": [
                      {
                          "id": "xg77r3eyi",
                          "content": [
                              {
                                  "children": [
                                      {
                                          "text": "This flow captures a users question and sends it to the OpenAI API"
                                      }
                                  ]
                              }
                          ]
                      }
                  ],
                  "nextId": "645d718f83103cca7a3cecd3",
                  "platform": "webchat"
              },
              "645d718f83103cca7a3cecd3": {
                  "id": "645d718f83103cca7a3cecd3",
                  "type": "captureV2",
                  "nextId": "645d718f83103cca7a3ceccc",
                  "noReply": null,
                  "noMatch": null,
                  "intentScope": "GLOBAL",
                  "platform": "webchat",
                  "variable": "last_utterance"
              },
              "645d718f83103cca7a3cecd7": {
                  "id": "645d718f83103cca7a3cecd7",
                  "type": "text",
                  "texts": [
                      {
                          "id": "vh8xb37hw",
                          "content": [
                              {
                                  "children": [
                                      {
                                          "text": ""
                                      },
                                      {
                                          "text": "{response}"
                                      },
                                      {
                                          "text": " "
                                      }
                                  ]
                              }
                          ]
                      }
                  ],
                  "nextId": null,
                  "platform": "webchat"
              }
          },
          "name": "Template Diagram",
          "startId": "6438725334aead00076d562e",
          "variables": [],
          "id": "6495a7edcfac40000624214a",
          "versionID": "6495a7edcfac400006242148"
      },
      "6495e613693d0200073ccccf": {
          "commands": [],
          "lines": {
              "6495e613f7ea0e0007259819": {
                  "id": "6495e613f7ea0e0007259819",
                  "type": "_next",
                  "nextId": "649b29f265b4982080fd6493"
              },
              "6495e7d516ecab5cf526c8e5": {
                  "id": "6495e7d516ecab5cf526c8e5",
                  "type": "text",
                  "texts": [
                      {
                          "id": "w2wk3hms",
                          "content": [
                              {
                                  "children": [
                                      {
                                          "text": "Enter the data you want to upload!"
                                      }
                                  ]
                              }
                          ]
                      },
                      {
                          "id": "ma2d93hai",
                          "content": [
                              {
                                  "children": [
                                      {
                                          "text": "Enter the data you would like to upload!"
                                      }
                                  ]
                              }
                          ]
                      },
                      {
                          "id": "ma2da3h00",
                          "content": [
                              {
                                  "children": [
                                      {
                                          "text": "Input the data that you want to upload!"
                                      }
                                  ]
                              }
                          ]
                      },
                      {
                          "id": "ma2db3hvk",
                          "content": [
                              {
                                  "children": [
                                      {
                                          "text": "Insert the data you need to upload!"
                                      }
                                  ]
                              }
                          ]
                      },
                      {
                          "id": "ma2dc3hux",
                          "content": [
                              {
                                  "children": [
                                      {
                                          "text": "Enter the information you want to upload!"
                                      }
                                  ]
                              }
                          ]
                      },
                      {
                          "id": "ma2dd3h0i",
                          "content": [
                              {
                                  "children": [
                                      {
                                          "text": "Provide the data you would like to upload!"
                                      }
                                  ]
                              }
                          ]
                      }
                  ],
                  "nextId": "6495e81116ecab5cf526c8ee",
                  "platform": "webchat"
              },
              "6495e81116ecab5cf526c8ee": {
                  "id": "6495e81116ecab5cf526c8ee",
                  "type": "captureV2",
                  "nextId": "6495e81d16ecab5cf526c8f4",
                  "noReply": null,
                  "noMatch": null,
                  "intentScope": "GLOBAL",
                  "platform": "webchat",
                  "variable": "last_utterance"
              },
              "6495e81d16ecab5cf526c8f4": {
                  "id": "6495e81d16ecab5cf526c8f4",
                  "type": "integrations",
                  "success_id": "6499c2bf65b4982080fd5c5c",
                  "fail_id": "6499c69b65b4982080fd5ed2",
                  "action_data": {
                      "url": "https://api.web3.storage/upload",
                      "body": [
                          {
                              "key": "",
                              "val": ""
                          }
                      ],
                      "method": "POST",
                      "params": [],
                      "headers": [
                          {
                              "key": "Authorization",
                              "val": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGMyNjRDMzEyMjgxNUU5Y0VkYkJFRDU3NUU5MjY0NTNkQ0FiREVDOEUiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2ODc3OTE0OTExNjYsIm5hbWUiOiJtaW50Q2hhdCJ9.cNazIkIIwc17Jalr0bZzD8JgwhOtaPHLUd48qM69OmY"
                          }
                      ],
                      "mapping": [
                          {
                              "var": "ipfs_cid",
                              "path": "cid"
                          }
                      ],
                      "content": "{last_utterance}",
                      "bodyInputType": "rawInput",
                      "selected_action": "Make a POST Request"
                  },
                  "selected_action": "Make a POST Request",
                  "selected_integration": "Custom API"
              },
              "6499c2bf65b4982080fd5c5c": {
                  "id": "6499c2bf65b4982080fd5c5c",
                  "type": "text",
                  "texts": [
                      {
                          "id": "5mba3h12",
                          "content": [
                              {
                                  "children": [
                                      {
                                          "text": "File stored on IPFS Successfully!!"
                                      }
                                  ]
                              },
                              {
                                  "children": [
                                      {
                                          "text": ""
                                      }
                                  ]
                              },
                              {
                                  "children": [
                                      {
                                          "text": "CID: "
                                      },
                                      {
                                          "text": "{ipfs_cid}"
                                      },
                                      {
                                          "text": " "
                                      }
                                  ]
                              }
                          ]
                      },
                      {
                          "id": "wed83h4e",
                          "content": [
                              {
                                  "children": [
                                      {
                                          "text": "The file was uploaded to IPFS successfully! CID: "
                                      },
                                      {
                                          "text": "{ipfs_cid}"
                                      },
                                      {
                                          "text": " "
                                      }
                                  ]
                              }
                          ]
                      },
                      {
                          "id": "x7d93hfm",
                          "content": [
                              {
                                  "children": [
                                      {
                                          "text": "File has been saved to IPFS! CID: "
                                      },
                                      {
                                          "text": "{ipfs_cid}"
                                      },
                                      {
                                          "text": " "
                                      }
                                  ]
                              }
                          ]
                      },
                      {
                          "id": "x8da3hq2",
                          "content": [
                              {
                                  "children": [
                                      {
                                          "text": "File successfully stored on IPFS. CID: "
                                      },
                                      {
                                          "text": "{ipfs_cid}"
                                      },
                                      {
                                          "text": " "
                                      }
                                  ]
                              }
                          ]
                      }
                  ],
                  "nextId": "6499c41365b4982080fd5c65",
                  "platform": "webchat"
              },
              "6499c41365b4982080fd5c65": {
                  "id": "6499c41365b4982080fd5c65",
                  "type": "interaction",
                  "buttons": [
                      {
                          "name": "View IPFS CID",
                          "request": {
                              "type": "path-c8fi3hig",
                              "payload": {
                                  "label": "View IPFS CID",
                                  "actions": [
                                      {
                                          "type": "open_url",
                                          "payload": {
                                              "url": "{ipfs_cid}.ipfs.dweb.link"
                                          }
                                      }
                                  ]
                              }
                          }
                      },
                      {
                          "name": "End the conversation",
                          "request": {
                              "type": "path-j2g73hkl",
                              "payload": {
                                  "label": "End the conversation",
                                  "actions": []
                              }
                          }
                      }
                  ],
                  "noMatch": null,
                  "noReply": null,
                  "intentScope": "GLOBAL",
                  "interactions": [
                      {
                          "nextId": "6499c4fc65b4982080fd5c9c",
                          "event": {
                              "type": "path-c8fi3hig",
                              "name": "View IPFS CID"
                          }
                      },
                      {
                          "nextId": "6499c56465b4982080fd5db3",
                          "event": {
                              "type": "path-j2g73hkl",
                              "name": "End the conversation"
                          }
                      }
                  ],
                  "platform": "webchat"
              },
              "6499c4fc65b4982080fd5c9c": {
                  "id": "6499c4fc65b4982080fd5c9c",
                  "type": "interaction",
                  "buttons": [
                      {
                          "name": "Go to Start Menu",
                          "request": {
                              "type": "path-r7sa3hpm",
                              "payload": {
                                  "label": "Go to Start Menu",
                                  "actions": []
                              }
                          }
                      },
                      {
                          "name": "End the conversation!",
                          "request": {
                              "type": "path-q4x53h8m",
                              "payload": {
                                  "label": "End the conversation!",
                                  "actions": []
                              }
                          }
                      }
                  ],
                  "noMatch": null,
                  "noReply": null,
                  "intentScope": "GLOBAL",
                  "interactions": [
                      {
                          "nextId": "6499c51a65b4982080fd5ca6",
                          "event": {
                              "type": "path-r7sa3hpm",
                              "name": "Go to Start Menu"
                          }
                      },
                      {
                          "nextId": "6499c55765b4982080fd5dad",
                          "event": {
                              "type": "path-q4x53h8m",
                              "name": "End the conversation!"
                          }
                      }
                  ],
                  "platform": "webchat"
              },
              "6499c51a65b4982080fd5ca6": {
                  "id": "6499c51a65b4982080fd5ca6",
                  "type": "goTo",
                  "request": {
                      "type": "intent",
                      "payload": {
                          "query": "",
                          "intent": {
                              "name": "VF.START_OVER"
                          },
                          "entities": []
                      },
                      "diagramID": "6495a7edcfac400006242149"
                  }
              },
              "6499c55765b4982080fd5dad": {
                  "id": "6499c55765b4982080fd5dad",
                  "end": true,
                  "type": "exit"
              },
              "6499c56465b4982080fd5db3": {
                  "id": "6499c56465b4982080fd5db3",
                  "end": true,
                  "type": "exit"
              },
              "6499c69b65b4982080fd5ed2": {
                  "id": "6499c69b65b4982080fd5ed2",
                  "type": "text",
                  "texts": [
                      {
                          "id": "n21oj3hy0",
                          "content": [
                              {
                                  "children": [
                                      {
                                          "text": "Invalid Data! Please enter the correct one"
                                      }
                                  ]
                              }
                          ]
                      }
                  ],
                  "nextId": "6499c6ce65b4982080fd5edb",
                  "platform": "webchat"
              },
              "6499c6ce65b4982080fd5edb": {
                  "id": "6499c6ce65b4982080fd5edb",
                  "type": "captureV2",
                  "nextId": "6495e81d16ecab5cf526c8f4",
                  "noReply": null,
                  "noMatch": null,
                  "intentScope": "GLOBAL",
                  "platform": "webchat",
                  "variable": "last_utterance"
              },
              "6499c79c65b4982080fd5ff9": {
                  "id": "6499c79c65b4982080fd5ff9",
                  "type": "text",
                  "texts": [
                      {
                          "id": "562bc3hr8",
                          "content": [
                              {
                                  "children": [
                                      {
                                          "text": "What do you wanna do now?"
                                      }
                                  ]
                              }
                          ]
                      },
                      {
                          "id": "ja2bx3h0b",
                          "content": [
                              {
                                  "children": [
                                      {
                                          "text": "What do you want to do now?"
                                      }
                                  ]
                              }
                          ]
                      },
                      {
                          "id": "ja2by3hux",
                          "content": [
                              {
                                  "children": [
                                      {
                                          "text": "What would you like to do now?"
                                      }
                                  ]
                              }
                          ]
                      },
                      {
                          "id": "jb2bz3htu",
                          "content": [
                              {
                                  "children": [
                                      {
                                          "text": "What do you feel like doing now?"
                                      }
                                  ]
                              }
                          ]
                      }
                  ],
                  "nextId": "6499c4fc65b4982080fd5c9c",
                  "platform": "webchat"
              },
              "649b29be65b4982080fd6485": {
                  "id": "649b29be65b4982080fd6485",
                  "type": "interaction",
                  "buttons": [
                      {
                          "name": "Verbwire",
                          "request": {
                              "type": "path-9j49m3htl",
                              "payload": {
                                  "label": "Verbwire",
                                  "actions": []
                              }
                          }
                      },
                      {
                          "name": "Web3.Storage",
                          "request": {
                              "type": "path-d349z3h0i",
                              "payload": {
                                  "label": "Web3.Storage",
                                  "actions": []
                              }
                          }
                      }
                  ],
                  "noMatch": null,
                  "noReply": null,
                  "intentScope": "GLOBAL",
                  "interactions": [
                      {
                          "nextId": "649b2a9865b4982080fd64a3",
                          "event": {
                              "type": "path-9j49m3htl",
                              "name": "Verbwire"
                          }
                      },
                      {
                          "nextId": "6495e7d516ecab5cf526c8e5",
                          "event": {
                              "type": "path-d349z3h0i",
                              "name": "Web3.Storage"
                          }
                      }
                  ],
                  "platform": "webchat"
              },
              "649b29f265b4982080fd6493": {
                  "id": "649b29f265b4982080fd6493",
                  "type": "text",
                  "texts": [
                      {
                          "id": "4v4at3hxr",
                          "content": [
                              {
                                  "children": [
                                      {
                                          "text": "Which IPFS Storage Provider you want to use?"
                                      }
                                  ]
                              }
                          ]
                      }
                  ],
                  "nextId": "649b29be65b4982080fd6485",
                  "platform": "webchat"
              },
              "649b2a6a65b4982080fd6499": {
                  "id": "649b2a6a65b4982080fd6499",
                  "type": "captureV2",
                  "nextId": "649b2ab665b4982080fd64a7",
                  "noReply": null,
                  "noMatch": null,
                  "intentScope": "GLOBAL",
                  "platform": "webchat",
                  "variable": "verbwire_ipfs"
              },
              "649b2a9865b4982080fd64a3": {
                  "id": "649b2a9865b4982080fd64a3",
                  "type": "text",
                  "texts": [
                      {
                          "id": "4f4hd3h5o",
                          "content": [
                              {
                                  "children": [
                                      {
                                          "text": "Enter the URL of the file:"
                                      }
                                  ]
                              }
                          ]
                      }
                  ],
                  "nextId": "649b2a6a65b4982080fd6499",
                  "platform": "webchat"
              },
              "649b2ab665b4982080fd64a7": {
                  "id": "649b2ab665b4982080fd64a7",
                  "type": "integrations",
                  "success_id": "649b2c4365b4982080fd6662",
                  "fail_id": "649b2beb65b4982080fd6651",
                  "action_data": {
                      "url": "https://api.verbwire.com/v1/nft/store/fileFromUrl",
                      "body": [
                          {
                              "key": "fileUrl",
                              "val": "{verbwire_ipfs}"
                          }
                      ],
                      "method": "POST",
                      "params": [],
                      "headers": [
                          {
                              "key": "X-API-Key",
                              "val": "sk_live_665984d9-12cc-4126-b7b0-9190bd3ad744"
                          },
                          {
                              "key": "accept",
                              "val": "application/json"
                          },
                          {
                              "key": "content-type",
                              "val": "application/x-www-form-urlencoded"
                          }
                      ],
                      "mapping": [
                          {
                              "var": "verbwire_ipfsUrl",
                              "path": "ipfs_storage.ipfs_url"
                          }
                      ],
                      "content": "",
                      "bodyInputType": "formData",
                      "selected_action": "Make a POST Request"
                  },
                  "selected_action": "Make a POST Request",
                  "selected_integration": "Custom API"
              },
              "649b2beb65b4982080fd6651": {
                  "id": "649b2beb65b4982080fd6651",
                  "type": "text",
                  "texts": [
                      {
                          "id": "n21oj3hy0",
                          "content": [
                              {
                                  "children": [
                                      {
                                          "text": "Invalid URL! Please enter the correct one"
                                      }
                                  ]
                              }
                          ]
                      },
                      {
                          "id": "no4tr3hor",
                          "content": [
                              {
                                  "children": [
                                      {
                                          "text": "Invalid URL! Please enter a valid one."
                                      }
                                  ]
                              }
                          ]
                      }
                  ],
                  "nextId": "649b2c0965b4982080fd665b",
                  "platform": "webchat"
              },
              "649b2c0965b4982080fd665b": {
                  "id": "649b2c0965b4982080fd665b",
                  "type": "captureV2",
                  "nextId": "649b2ab665b4982080fd64a7",
                  "noReply": null,
                  "noMatch": null,
                  "intentScope": "GLOBAL",
                  "platform": "webchat",
                  "variable": "verbwire_ipfs"
              },
              "649b2c4365b4982080fd6662": {
                  "id": "649b2c4365b4982080fd6662",
                  "type": "text",
                  "texts": [
                      {
                          "id": "tt4x93hlj",
                          "content": [
                              {
                                  "children": [
                                      {
                                          "text": "IPFS Storage on Verbwire Successful!"
                                      }
                                  ]
                              },
                              {
                                  "children": [
                                      {
                                          "text": ""
                                      }
                                  ]
                              },
                              {
                                  "children": [
                                      {
                                          "text": "Original URL: "
                                      },
                                      {
                                          "text": "{verbwire_ipfs}"
                                      },
                                      {
                                          "text": " "
                                      }
                                  ]
                              },
                              {
                                  "children": [
                                      {
                                          "text": "IPFS CID: "
                                      },
                                      {
                                          "text": "{verbwire_ipfsUrl}"
                                      },
                                      {
                                          "text": " "
                                      }
                                  ]
                              }
                          ]
                      }
                  ],
                  "nextId": "649b2c9565b4982080fd666b",
                  "platform": "webchat"
              },
              "649b2c9565b4982080fd666b": {
                  "id": "649b2c9565b4982080fd666b",
                  "type": "text",
                  "texts": [
                      {
                          "id": "yf4zi3huw",
                          "content": [
                              {
                                  "children": [
                                      {
                                          "text": "What do you want to do now?"
                                      }
                                  ]
                              }
                          ]
                      }
                  ],
                  "nextId": "649b2ca465b4982080fd6674",
                  "platform": "webchat"
              },
              "649b2ca465b4982080fd6674": {
                  "id": "649b2ca465b4982080fd6674",
                  "type": "interaction",
                  "buttons": [
                      {
                          "name": "View IPFS URL",
                          "request": {
                              "type": "path-b450f3ha8",
                              "payload": {
                                  "label": "View IPFS URL",
                                  "actions": [
                                      {
                                          "type": "open_url",
                                          "payload": {
                                              "url": "{verbwire_ipfsUrl}"
                                          }
                                      }
                                  ]
                              }
                          }
                      },
                      {
                          "name": "View Original URL",
                          "request": {
                              "type": "path-j150w3htr",
                              "payload": {
                                  "label": "View Original URL",
                                  "actions": [
                                      {
                                          "type": "open_url",
                                          "payload": {
                                              "url": "{verbwire_ipfs}"
                                          }
                                      }
                                  ]
                              }
                          }
                      },
                      {
                          "name": "Go to the start menu!",
                          "request": {
                              "type": "path-k55183hps",
                              "payload": {
                                  "label": "Go to the start menu!",
                                  "actions": []
                              }
                          }
                      }
                  ],
                  "noMatch": null,
                  "noReply": null,
                  "intentScope": "GLOBAL",
                  "interactions": [
                      {
                          "nextId": "649b2c9565b4982080fd666b",
                          "event": {
                              "type": "path-b450f3ha8",
                              "name": "View IPFS URL"
                          }
                      },
                      {
                          "nextId": "649b2ca465b4982080fd6674",
                          "event": {
                              "type": "path-j150w3htr",
                              "name": "View Original URL"
                          }
                      },
                      {
                          "nextId": "649b2cd065b4982080fd667e",
                          "event": {
                              "type": "path-k55183hps",
                              "name": "Go to the start menu!"
                          }
                      }
                  ],
                  "platform": "webchat"
              },
              "649b2cd065b4982080fd667e": {
                  "id": "649b2cd065b4982080fd667e",
                  "type": "goTo",
                  "request": {
                      "type": "intent",
                      "payload": {
                          "query": "",
                          "intent": {
                              "name": "VF.START_OVER"
                          },
                          "entities": []
                      },
                      "diagramID": "6495a7edcfac400006242149"
                  }
              }
          },
          "name": "Storage",
          "startId": "",
          "variables": [],
          "id": "6495e613693d0200073ccccf",
          "versionID": "6495a7edcfac400006242148"
      },
      "6495a7edcfac400006242148": {
          "commands": [
              {
                  "type": "jump",
                  "event": {
                      "type": "intent",
                      "intent": "VF.START_OVER",
                      "mappings": []
                  },
                  "nextID": "6499c3a008e3f221576bbab1",
                  "platform": "webchat",
                  "diagramID": "6495a7edcfac400006242149"
              },
              {
                  "type": "jump",
                  "event": {
                      "type": "choose-bd5n232jy"
                  },
                  "nextID": "6499f69a08e3f221576bbe81",
                  "diagramID": "6495a7edcfac400006242149"
              },
              {
                  "type": "jump",
                  "event": {
                      "type": "choose-k65ph32hj"
                  },
                  "nextID": "6499f6e108e3f221576bbe8b",
                  "diagramID": "6495a7edcfac400006242149"
              },
              {
                  "type": "jump",
                  "event": {
                      "type": "reload-samples-tn5rb328t"
                  },
                  "nextID": "6499ebf108e3f221576bbe54",
                  "diagramID": "6495a7edcfac400006242149"
              },
              {
                  "type": "jump",
                  "event": {
                      "type": "intent",
                      "intent": "ipfs.Storage",
                      "mappings": []
                  },
                  "nextID": "6495e613f7ea0e0007259819",
                  "platform": "webchat",
                  "diagramID": "6495e613693d0200073ccccf"
              }
          ],
          "lines": {},
          "name": "base",
          "startId": "",
          "variables": [],
          "id": "6495a7edcfac400006242148",
          "versionID": "6495a7edcfac400006242148"
      }
  },
  "variableStates": []
}
@NearBindgen({})
class InteractChat {
  // Candidate Pair Used to store Candidate Names and URL links
  candidatePair = new UnorderedMap<string[]>("candidate_pair");
  // Prompt Set Was used to in an effort to keep track of keys for the candidatePair Unordered Map
  promptSet = new UnorderedSet<string>("promptArray");
  chatArray = new UnorderedMap<number[]>("chatArray");
  userParticipation = new UnorderedMap<string[]>("user Participation ");

  // Writing View Methods

  @view({})
  getUrl({ prompt, name }: { prompt: string; name: string }): string {
    near.log(prompt);
    let candidateUrlArray = this.candidatePair.get(prompt);
    return candidateUrlArray[candidateUrlArray.indexOf(name) + 1];
  }

  @view({})
  didParticipate({ prompt, user }: { prompt: string; user: string }): boolean {
    let promptUserList: string[] = this.userParticipation.get(prompt, {
      defaultValue: [],
    });
    near.log(promptUserList);
    return promptUserList.includes(user);
  }

  @view({})
  participateArray({ prompt }: { prompt: string }): string[] {
    return this.userParticipation.get(prompt);
  }

  @view({})
  getAllPrompts(): string[] {
    return this.promptSet.toArray();
  }

  @view({})
  getChats({ prompt }: { prompt: string }): number[] {
    return this.chatArray.get(prompt, { defaultValue: [] });
  }

  @view({})
  getCandidatePair({ prompt }: { prompt: string }): string[] {
    let candidateUrlArray = this.candidatePair.get(prompt, {
      defaultValue: ["n/a,n/a"],
    });
    return [candidateUrlArray[0], candidateUrlArray[2]];
  }

  @call({})
  addCandidatePair({
    prompt,
    name1,
    name2,
    url1,
    url2,
  }: {
    prompt: string;
    name1: string;
    name2: string;
    url1: string;
    url2: string;
  }) {
    this.candidatePair.set(prompt, [name1, url1, name2, url2]);
  }

  @call({})
  initializeChats({ prompt }: { prompt: string }) {
    this.chatArray.set(prompt, [0, 0]);
  }

  @call({})
  addToPromptArray({ prompt }: { prompt: string }) {
    this.promptSet.set(prompt);
  }

  @call({})
  clearPromptArray() {
    this.promptSet.clear();
    this.candidatePair.clear();
    this.userParticipation.clear();
    this.chatArray.clear();
    near.log("clearing polls");
  }

  @call({})
  addChat({ prompt, index }: { prompt: string; index: number }) {
    let currentChats = this.chatArray.get(prompt, { defaultValue: [0, 0] });
    currentChats[index] = currentChats[index] + 1;
    this.chatArray.set(prompt, currentChats);
  }

  @call({})
  recordUser({ prompt, user }: { prompt: string; user: string }) {
    let currentArray = this.userParticipation.get(prompt, { defaultValue: [] });
    currentArray.includes(user) ? null : currentArray.push(user);
    this.userParticipation.set(prompt, currentArray);
  }
}