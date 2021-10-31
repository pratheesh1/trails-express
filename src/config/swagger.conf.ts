const swaggerDoc = {
  openapi: "3.0.0",
  info: {
    title: "Project - 2 API",
    description:
      "API for Trent Global DWAD TGC-14 Project 2 (@Pratheesh Soman)",
    version: "1.0",
    contact: {
      name: "Pratheesh Soman",
      url: "https://github.com/pratheesh1/",
      email: "pratheesh1269@gmail.com",
    },
    license: {
      name: "Apache 2.0",
      url: "https://www.apache.org/licenses/LICENSE-2.0.html",
    },
  },
  servers: [
    {
      url: "https://ps-project02-express.herokuapp.com/",
      description: "Production Server",
    },
  ],
  components: {
    schemas: {
      Trail: {
        type: "object",
        properties: {
          _id: {
            type: "string",
            description: "the auto-generated id of trail",
            example: "6164209817a451ca58ebb51e",
          },
          trailName: {
            type: "string",
            description: "the name of the trail",
            example: "Southern Ridges and Labrador Park Loop",
          },
          description: {
            type: "string",
            description: "detailed text on trail",
            example:
              "Southern Ridges and Labrador Park Loop is a 9.0 kilometer lightly trafficked loop trail located near Singapore, Central, Singapore that features beautiful wild flowers and is rated as moderate. The trail is primarily used for hiking, walking, trail running, and nature trips.",
          },
          country: {
            type: "object",
            properties: {
              id: {
                type: "integer",
                description: "id of country",
                example: 3041565,
              },
              name: {
                type: "string",
                description: "name of the country the trail is located at",
                example: "Singapore",
              },
              description: {
                type: "string",
                description: "description for the country",
                example: "An island country in SEA",
              },
            },
            required: ["id", "name"],
          },
          tags: {
            type: "array",
            items: {
              type: "object",
              properties: {
                description: {
                  type: "string",
                  description:
                    "description of the tag (e.g. wheelchair access)",
                  example: "wheelchair access",
                },
                detail: {
                  type: "string",
                  description:
                    "details on the tag (e.g. wheelchair access only until car park)",
                  example: "wheelchair access only until car park",
                },
                specialFlags: {
                  type: "string",
                  description:
                    "special flags attached to the tag (e.g. closed, open)",
                  example: "closed",
                },
              },
              required: ["description", "detail"],
            },
          },
          review: {
            type: "array",
            items: {
              type: "object",
              properties: {
                reviewText: {
                  type: "string",
                  description: "review text",
                  example: "Sunny and warm",
                },
                userid: {
                  type: "string",
                  description: "autogenerated user id",
                  example: "T6164209817a451ca58ebb51e",
                },
                username: {
                  type: "string",
                  description: "user name",
                  example: "johnsmith1",
                },
                rating: {
                  type: "integer",
                  description:
                    "a rating assigned with the review (int from 1-5)",
                  example: 3,
                },
                email: {
                  type: "string",
                  description: "email id",
                  example: "johnsmith@gemail.com",
                },
                datetime: {
                  type: "string",
                  description: "date-time when the review was created",
                  example: "2015-03-25T12:00:00Z",
                },
              },
              required: [
                "reviewText",
                "username",
                "rating",
                "email",
                "datetime",
              ],
            },
          },
          accessibility: {
            type: "array",
            items: {
              type: "string",
              description:
                "accessibility options for the trail (e.g. no vehicle access)",
            },
            example: ["whellchair", "bike", "stairs"],
          },
          difficulty: {
            type: "integer",
            description:
              "difficulty level of the trail (1-easy, 2-medium, 3-hard, 4-challenging)",
            example: 3,
          },
          distance: {
            type: "number",
            description: "distance in km",
            example: 5.2,
          },
          timeToComplete: {
            type: "integer",
            description: "average time to complete the trail in milliseconds",
            example: 500000,
          },
          resourcesInRoute: {
            type: "array",
            items: {
              type: "object",
              properties: {
                resourceName: {
                  type: "string",
                  description:
                    "description of resource on trail (e.g. cafe at trail checkpoint)",
                  example: "Public toilet",
                },
                type: {
                  type: "string",
                  description: "type of resource (e.g. food)",
                  example: "toilet",
                },
              },
              required: ["resourceName"],
            },
          },
          describeTrail: {
            type: "string",
            description: "detailed article on the trail",
            example:
              "Spanning over 56 hectares of land is Singapore’s largest freshwater marshland. The Kranji Marshes is home to a vast range of green habitats and a myriad of bird and butterfly species, making it a great hiking destination for wildlife enthusiasts and nature lovers. For a birds-eye view of the marsh, make your way up to the Raptor Tower and bask in the insane view from 10 metres up. While visitors are free to explore the area on their own by foot, NParks organises monthly guided walks that give visitors a closer look at the conservation area that’s close to the public. Spanning over 56 hectares of land is Singapore’s largest freshwater marshland. The Kranji Marshes is home to a vast range of green habitats and a myriad of bird and butterfly species, making it a great hiking destination for wildlife enthusiasts and nature lovers. For a birds-eye view of the marsh, make your way up to the Raptor Tower and bask in the insane view from 10 metres up. While visitors are free to explore the area on their own by foot, NParks organises monthly guided walks that give visitors a closer look at the conservation area that’s close to the public. Spanning over 56 hectares of land is Singapore’s largest freshwater marshland. The Kranji Marshes is home to a vast range of green habitats and a myriad of bird and butterfly species, making it a great hiking destination for wildlife enthusiasts and nature lovers. For a birds-eye view of the marsh, make your way up to the Raptor Tower and bask in the insane view from 10 metres up. While visitors are free to explore the area on their own by foot, NParks organises monthly guided walks that give visitors a closer look at the conservation area that’s close to the public.",
          },
          images: {
            type: "array",
            items: {
              type: "string",
              description: "array of image url",
            },
            example: [
              "https://images.unsplash.com/photo-1635449586099-3ecb7ef8374d",
              "https://images.unsplash.com/photo-1546839959-e26ee101cd9b",
            ],
          },
          createdBy: {
            type: "object",
            properties: {
              firstName: {
                type: "string",
                description: "first name of the user who created the trail",
                example: "John",
              },
              lastName: {
                type: "string",
                description: "last name of the user who created the trail",
                example: "Smith",
              },
              email: {
                type: "string",
                description: "email of the user who created the trail",
                example: "johnsmith@gemail.com",
              },
              aboutYou: {
                type: "string",
                description:
                  "about you description of the user who created the trail",
                example: "I am very into hiking ab=nd trail running",
              },
            },
            required: ["firstName", "lastName", "email"],
          },
          createdAt: {
            type: "string",
            format: "date-time",
            description: "datetime at which the object was created",
            example: "2021-10-16T07:58:26.862+00:00",
          },
          updatedAt: {
            type: "string",
            format: "date-time",
            description: "datetime at which the object was last modified",
            example: "2021-10-16T07:58:26.862+00:00",
          },
          __v: {
            type: "integer",
            description: "version of the document",
            example: 5,
          },
        },
        required: [
          "trailName",
          "description",
          "country",
          "difficulty",
          "distance",
          "timeToComplete",
          "images",
          "createdBy",
        ],
      },
      Country: {
        type: "object",
        properties: {
          _id: {
            type: "string",
            description: "the auto-generated id of the country",
            example: "6164209817a451ca58ebb51e",
          },
          iso: {
            type: "string",
            description: "ISO code of the country",
            example: "IN",
          },
          country: {
            type: "string",
            description: "name of the country",
            example: "India",
          },
          capital: {
            type: "string",
            description: "capital of the country",
            example: "New Delhi",
          },
          currency_code: {
            type: "string",
            description: "ISO currency code",
            example: "INR",
          },
          currency_name: {
            type: "string",
            description: "name of the currency",
            example: "Rupee",
          },
          currency_symbol: {
            type: "string",
            description: "symbol of the currency",
            example: "€",
          },
          phone: {
            type: "string",
            description: "ISO international dialing code",
            example: "91",
          },
          postal_code_format: {
            type: "string",
            description: "postal code format of the country",
            example: "@####@@@",
          },
          postal_code_regex: {
            type: "string",
            description: "postal code regex of the country",
            example: "^(?:AZ)*(\\d{4})$",
          },
          languages: {
            type: "array",
            items: {
              type: "string",
              description: "array of languages spoken in the country",
            },
            example: ["es-AR", "en", "it", "de", "fr"],
          },
          country_id: {
            type: "integer",
            description: "application-wide unique id of the country",
            example: 3865483,
          },
          cities: {
            type: "array",
            items: {
              type: "object",
              properties: {
                city_id: {
                  type: "integer",
                  description: "application-wide unique id of the city",
                  example: 3427213,
                },
                name: {
                  type: "string",
                  description: "name of the city",
                  example: "Zárate",
                },
              },
              required: ["city_id", "name"],
            },
          },
        },
        required: ["iso", "country", "country_id"],
      },
    },
  },
  tags: [
    {
      name: "Trails",
      description: "trails end point",
    },
    {
      name: "Countries",
      description: "countries end point",
    },
  ],
  paths: {
    "/trails": {
      get: {
        summary: "returns an array of trails",
        description:
          "The `q` query searches in fields: trailName, description, country.name and describeTrail (refer schema)\n",
        tags: ["Trails"],
        parameters: [
          {
            name: "q",
            in: "query",
            schema: {
              type: "string",
            },
            required: false,
            description: "search query",
            example: "Hiking Trail",
          },
          {
            name: "difficulty",
            in: "query",
            schema: {
              type: "array",
              items: {
                type: "integer",
                minimum: 1,
                maximum: 4,
                example: 1,
              },
            },
            required: false,
            style: "form",
            explode: true,
            example: 1,
            description: "difficulty level from 1 to 4",
          },
          {
            name: "distance",
            in: "query",
            schema: {
              type: "array",
              items: {
                type: "string",
                pattern: "[0-9]+,[0-9]+",
                example: "2,8",
              },
            },
            required: false,
            style: "form",
            explode: true,
            example: "2,8",
            description:
              "distance filter from-to search (e.g. 2,3 , 4,5) searches for trails with distance in range 2-3km and 4-5km\n",
          },
        ],
        responses: {
          "200": {
            description: "OK",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    $ref: "#/components/schemas/Trail",
                  },
                },
              },
            },
          },
          "400": {
            description: "Bad Request!",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    message: {
                      type: "string",
                      example:
                        "difficulty must be a number in range >=1 and <=4",
                    },
                  },
                },
              },
            },
          },
          "404": {
            description: "Requested resource not found!",
          },
          "500": {
            description: "Server encountered and internal error!",
          },
        },
      },
      post: {
        summary: "add a new trail",
        tags: ["Trails"],
        requestBody: {
          description: "a JSON object containing trail information",
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Trail",
              },
            },
          },
        },
        responses: {
          "201": {
            description: "Created",
          },
          "400": {
            description: "Bad Request!",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    message: {
                      type: "string",
                      example:
                        "form data not valid/required fields missing, refer schema",
                    },
                  },
                },
              },
            },
          },
          "404": {
            description: "Requested resource not found!",
          },
          "500": {
            description: "Server encountered and internal error!",
          },
        },
      },
    },
    "/trails/count": {
      get: {
        summary: "returns number of trail records in database",
        tags: ["Trails"],
        responses: {
          "200": {
            description: "OK",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    trailCount: {
                      type: "integer",
                      description: "number of records in database",
                      example: 526,
                    },
                  },
                },
              },
            },
          },
          "404": {
            description: "Requested resource not found!",
          },
          "500": {
            description: "Server encountered and internal error!",
          },
        },
      },
    },
    "/trails/{_id}": {
      get: {
        summary: "get trail by id",
        tags: ["Trails"],
        parameters: [
          {
            in: "path",
            name: "_id",
            schema: {
              type: "string",
            },
            required: true,
            description: "object id of trail",
            example: "616c286b39fa9419c9bed001",
          },
        ],
        responses: {
          "200": {
            description: "OK",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Trail",
                },
              },
            },
          },
          "400": {
            description: "Bad Request!",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    message: {
                      type: "string",
                      example: "_id must be a string",
                    },
                  },
                },
              },
            },
          },
          "404": {
            description: "Requested resource not found!",
          },
          "500": {
            description: "Server encountered and internal error!",
          },
        },
      },
      delete: {
        summary: "delete trail by id",
        tags: ["Trails"],
        parameters: [
          {
            in: "path",
            name: "_id",
            schema: {
              type: "string",
            },
            required: true,
            description: "object id of trail",
            example: "616c286b39fa9419c9bed589",
          },
        ],
        responses: {
          "204": {
            description: "Deleted",
          },
          "400": {
            description: "Bad Request!",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    message: {
                      type: "string",
                      example: "_id must be a string",
                    },
                  },
                },
              },
            },
          },
          "404": {
            description: "Requested resource not found!",
          },
          "500": {
            description: "Server encountered and internal error!",
          },
        },
      },
      put: {
        summary: "edit an existing trail, returns updated document",
        tags: ["Trails"],
        parameters: [
          {
            in: "path",
            name: "_id",
            schema: {
              type: "string",
            },
            required: true,
            description: "object id of trail",
          },
        ],
        requestBody: {
          description: "a JSON object containing fileds to be updated",
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  trailName: {
                    type: "string",
                    description: "the name of the trail",
                    example: "Southern Ridges and Labrador Park Loop",
                  },
                },
              },
            },
          },
        },
        responses: {
          "200": {
            description: "OK",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Trail",
                },
              },
            },
          },
          "400": {
            description: "Bad Request!",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    message: {
                      type: "string",
                      example: "form data not valid, refer schema",
                    },
                  },
                },
              },
            },
          },
          "404": {
            description: "Requested resource not found!",
          },
          "500": {
            description: "Server encountered and internal error!",
          },
        },
      },
    },
    "/countries": {
      get: {
        summary: "returns an array of all countries",
        tags: ["Countries"],
        responses: {
          "200": {
            description: "OK",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    type: "object",
                    properties: {
                      country: {
                        type: "string",
                        description: "name of the country",
                        example: "India",
                      },
                      country_id: {
                        type: "integer",
                        description:
                          "application-wide unique id of the country",
                        example: 3865483,
                      },
                    },
                  },
                },
              },
            },
          },
          "404": {
            description: "Requested resource not found!",
          },
          "500": {
            description: "Server encountered and internal error!",
          },
        },
      },
    },
    "/countries/detailed": {
      get: {
        summary: "returns an array of all countries with all available details",
        tags: ["Countries"],
        responses: {
          "200": {
            description: "OK",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    $ref: "#/components/schemas/Country",
                  },
                },
              },
            },
          },
          "404": {
            description: "Requested resource not found!",
          },
          "500": {
            description: "Server encountered and internal error!",
          },
        },
      },
    },
    "/countries/{id}": {
      get: {
        summary: "get country by id",
        tags: ["Countries"],
        parameters: [
          {
            in: "path",
            name: "id",
            schema: {
              type: "integer",
            },
            required: true,
            description: "id of the country",
          },
        ],
        responses: {
          "200": {
            description: "OK",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    type: "object",
                    properties: {
                      country: {
                        type: "string",
                        description: "name of the country",
                        example: "India",
                      },
                      country_id: {
                        type: "integer",
                        description:
                          "application-wide unique id of the country",
                        example: 3865483,
                      },
                    },
                  },
                },
              },
            },
          },
          "400": {
            description: "Bad Request!",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    message: {
                      type: "integer",
                      example: "id must be an integer",
                    },
                  },
                },
              },
            },
          },
          "404": {
            description: "Requested resource not found!",
          },
          "500": {
            description: "Server encountered and internal error!",
          },
        },
      },
    },
  },
};

export default swaggerDoc;
