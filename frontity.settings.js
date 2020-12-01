const settings = {
  "name": "psych-funk",
  "state": {
    "frontity": {
      "url": "http://psychfunk.com",
      "title": "Psych Funk",
      "description": "Rare records from around the world"
    }
  },
  "packages": [
    {
      "name": "psychfunk-theme",
      "state": {
        "theme": {
          "menu": [
            ["Home", "/"],
            ["Crate", "/crate/"],
            ["Features", "/features/"],
            ["Mixes", "/mixes"],
            ["About Us", "/about-us/"]
          ],
          "featured": {
            "showOnList": true,
            "showOnPost": true
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "http://psychfunk.loc",
          "categoryBase": "categories",
          "params": {
            "per_page": 12,
            "type": [
              "post", 
              "page", 
              "crate",
              "features", 
              "artists", 
              "mixes"
            ]
          },
          "postTypes": [
            {
              "type": "crate",
              "endpoint": "crate",
              "archive": "/crate"
            },
            {
              "type": "artists",
              "endpoint": "artist",
              "archive": "/artists"
            }
          ],
          "taxonomies": [
            {
              "taxonomy": "label",
              "endpoint": "label",
              "postTypeEndpoint": "crate",
              "params": {
                "per_page": 12,
                "_embed": true
              }
            },
            {
              "taxonomy": "location",
              "endpoint": "location",
              "postTypeEndpoint": "crate",
              "params": {
                "per_page": 12,
                "_embed": true
              }
            },
            {
              "taxonomy": "language",
              "endpoint": "language",
              "postTypeEndpoint": "crate",
              "params": {
                "per_page": 12,
                "_embed": true
              }
            }
          ]
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
