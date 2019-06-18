export function getNewSlide() {
    try {
        const newSlide = {
            "image": {
              "uniqueId": 14482874649,
              "wwVersion": 3,
              "content": {
                "type": "ww-image",
                "data": {
                  "url": "https://wewebapp.s3.eu-west-3.amazonaws.com/designs/61/sections/yB9F3KDOESCslOISDndEoWK2pmz8iNlV.jpg",
                  "alt": "",
                  "position": {
                    "x": 0,
                    "y": 0
                  },
                  "pos": {
                    "left": "0%",
                    "top": "0%",
                    "width": "100%",
                    "height": "100%"
                  },
                  "zoom": 1,
                  "style": {
                    "borderRadius": 0,
                    "borderWidth": 0,
                    "borderColor": null,
                    "borderStyle": null,
                    "overlay": null,
                    "filter": null,
                    "boxShadow": {
                      "x": 0,
                      "y": 0,
                      "b": 0,
                      "s": 0,
                      "c": ""
                    }
                  },
                  "animation": {
                    "duration": 0,
                    "delay": 0,
                    "fn": null,
                    "opacity": 1,
                    "scale": 1,
                    "translateX": 0,
                    "translateY": 0,
                    "rotate": 0
                  },
                  "imgSize": {
                    "w": 1920,
                    "h": 1080
                  },
                  "hover": {
                    "name": "",
                    "options": {}
                  },
                  "focusPoint": [50, 50],
                  "ratio": "100",
                  "crop": "100px100p@0px0p"
                }
              },
              "link": {
                "type": "none",
                "data": {}
              },
              "ratio": 100,
              "paddings": {
                "xs": {
                  "top": 0,
                  "left": 0,
                  "right": 0,
                  "bottom": 0
                },
                "md": {
                  "top": 0,
                  "left": 0,
                  "right": 0,
                  "bottom": 0
                }
              },
              "hidden": false,
              "tags": [],
              "children": {},
              "data": {},
              "anim": {}
            },
            "items": [{
              "uniqueId": 13866779887,
              "wwVersion": 3,
              "content": {
                "type": "ww-text",
                "data": {
                  "text": {
                    "fr": "Nouveau texte",
                    "en": "<span style=\"font-size:1.2rem\"><div style=\"text-align: center;\"><span style=\"text-align: initial;\"><font face=\"Vollkorn, serif\"><i><span style=\"font-size:1.5rem\"><font color=\"#ffffff\"><span style=\"font-size:3rem\">\"Lorem ipsum dolor\"</span></font></span></i></font></span></div></span>"
                  },
                  "tag": "div",
                  "align": "",
                  "font": "",
                  "size": "",
                  "color": "",
                  "classes": [],
                  "children": []
                }
              },
              "link": {
                "type": "none",
                "data": {}
              },
              "ratio": -1,
              "paddings": {
                "xs": {
                  "top": 0,
                  "left": 0,
                  "right": 0,
                  "bottom": 0
                },
                "md": {
                  "top": 0,
                  "left": 0,
                  "right": 0,
                  "bottom": 44
                }
              },
              "hidden": false,
              "tags": [],
              "children": {},
              "data": {},
              "anim": {}
            }, {
              "uniqueId": 4995425276,
              "wwVersion": 3,
              "content": {
                "type": "ww-text",
                "data": {
                  "text": {
                    "fr": "Nouveau texte",
                    "en": "<span style=\"font-size:1.2rem\"><span style=\"font-size:1.2rem\"><span style=\"font-size:1.5rem\"><span style=\"font-size:1.5rem\"><span style=\"font-size:2rem\"><div style=\"text-align: center;\"><span style=\"text-align: initial;\"><span style=\"font-size:1.2rem\"><font face=\"Vollkorn, serif\"><i><span style=\"font-size:1.5rem\"><font color=\"#ffffff\"><span style=\"font-size:1.5rem\">rnare quam viverra orci sagittis eu. At volutpat diam ut venenatis tellus in. Semper viverra nam libero justo laoreet sit amet cursus. Vulputate eu scelerisque felis imperdiet proin fermentum leo vel.</span></font></span></i></font></span></span></div></span></span></span></span></span>"
                  },
                  "tag": "div",
                  "align": "",
                  "font": "",
                  "size": "",
                  "color": "",
                  "classes": [],
                  "children": []
                }
              },
              "link": {
                "type": "none",
                "data": {}
              },
              "ratio": -1,
              "paddings": {
                "xs": {
                  "top": 0,
                  "left": 0,
                  "right": 0,
                  "bottom": 0
                },
                "md": {
                  "top": 0,
                  "left": 0,
                  "right": 0,
                  "bottom": 65
                }
              },
              "hidden": false,
              "tags": [],
              "children": {},
              "data": {},
              "anim": {}
            }, {
              "uniqueId": 11075519266,
              "wwVersion": 3,
              "content": {
                "type": "ww-text",
                "data": {
                  "text": {
                    "fr": "Nouveau texte",
                    "en": "<div style=\"text-align: right;\"><span style=\"color: rgb(255, 255, 255); font-family: Karla, sans-serif; text-align: initial;\"><b>－ John Doe</b></span></div>"
                  },
                  "tag": "div",
                  "align": "",
                  "font": "",
                  "size": "",
                  "color": "",
                  "classes": [],
                  "children": []
                }
              },
              "link": {
                "type": "none",
                "data": {}
              },
              "ratio": -1,
              "paddings": {
                "xs": {
                  "top": 0,
                  "left": 0,
                  "right": 0,
                  "bottom": 0
                },
                "md": {
                  "top": 33,
                  "left": 0,
                  "right": 0,
                  "bottom": 0
                }
              },
              "hidden": false,
              "tags": [],
              "children": {},
              "data": {},
              "anim": {}
            }]
          }
        wwLib.wwUtils.changeUniqueIds(newSlide)
        return newSlide
    } catch (error) {
        console.error("Error: ", error)
    }
}
