<template>
  <div id="word-cloud"></div>

  <!-- <div v-for="skill in skillMap">
      <h2>{{ skill[0] }}</h2>
      <div v-for="version in skill[1].versions">
        <span>{{ version }}</span>
      </div>
    </div> -->
</template>

<script>
export default {
  data() {
    return {
      skillMap: null,
      words: [],
    };
  },
  methods: {
    draw(words) {
      /*  ======================= SETUP ======================= */
      var config = {
        trace: true,
        spiralResolution: 1, //Lower = better resolution
        spiralLimit: 360 * 5,
        lineHeight: 0.8,
        xWordPadding: 0,
        yWordPadding: 3,
        font: "sans-serif",
      };

      words = words.map(function (word) {
        return {
          word: word,
          freq: Math.floor(Math.random() * 50) + 10,
        };
      });

      words.sort(function (a, b) {
        return -1 * (a.freq - b.freq);
      });

      var cloud = document.getElementById("word-cloud");
      cloud.style.position = "relative";
      cloud.style.fontFamily = config.font;

      var traceCanvas = document.createElement("canvas");
      traceCanvas.width = cloud.offsetWidth;
      traceCanvas.height = cloud.offsetHeight;
      var traceCanvasCtx = traceCanvas.getContext("2d");
      cloud.appendChild(traceCanvas);

      var startPoint = {
        x: cloud.offsetWidth / 2,
        y: cloud.offsetHeight / 2,
      };

      var wordsDown = [];
      /* ======================= END SETUP ======================= */

      /* =======================  PLACEMENT FUNCTIONS =======================  */
      function createWordObject(word, freq) {
        var wordContainer = document.createElement("div");
        wordContainer.style.position = "absolute";
        wordContainer.style.fontSize = freq + "px";
        wordContainer.style.lineHeight = config.lineHeight;
        /*    wordContainer.style.transform = "translateX(-50%) translateY(-50%)";*/
        wordContainer.appendChild(document.createTextNode(word));

        return wordContainer;
      }

      function placeWord(word, x, y) {
        cloud.appendChild(word);
        word.style.left = x - word.offsetWidth / 2 + "px";
        word.style.top = y - word.offsetHeight / 2 + "px";

        wordsDown.push(word.getBoundingClientRect());
      }

      function trace(x, y) {
        //     traceCanvasCtx.lineTo(x, y);
        //     traceCanvasCtx.stroke();
        traceCanvasCtx.fillRect(x, y, 1, 1);
      }

      function spiral(i, callback) {
        const angle = config.spiralResolution * i;
        let x = (1 + angle) * Math.cos(angle);
        let y = (1 + angle) * Math.sin(angle);
        return callback ? callback(x, y) : null;
      }

      function intersect(word, x, y) {
        cloud.appendChild(word);

        word.style.left = x - word.offsetWidth / 2 + "px";
        word.style.top = y - word.offsetHeight / 2 + "px";

        var currentWord = word.getBoundingClientRect();

        cloud.removeChild(word);

        for (var i = 0; i < wordsDown.length; i += 1) {
          var comparisonWord = wordsDown[i];

          if (
            !(
              currentWord.right + config.xWordPadding <
                comparisonWord.left - config.xWordPadding ||
              currentWord.left - config.xWordPadding >
                comparisonWord.right + config.wXordPadding ||
              currentWord.bottom + config.yWordPadding <
                comparisonWord.top - config.yWordPadding ||
              currentWord.top - config.yWordPadding >
                comparisonWord.bottom + config.yWordPadding
            )
          ) {
            return true;
          }
        }

        return false;
      }
      /* =======================  END PLACEMENT FUNCTIONS =======================  */

      /* =======================  LETS GO! =======================  */
      (function placeWords() {
        for (var i = 0; i < words.length; i += 1) {
          var word = createWordObject(words[i].word, words[i].freq);

          for (var j = 0; j < config.spiralLimit; j++) {
            //If the spiral function returns true, we've placed the word down and can break from the j loop
            if (
              spiral(j, function (x, y) {
                if (!intersect(word, startPoint.x + x, startPoint.y + y)) {
                  placeWord(word, startPoint.x + x, startPoint.y + y);
                  return true;
                }
              })
            ) {
              break;
            }
          }
        }
      })();
    },
  },
  async mounted() {
    try {
      const skillMap = new Map();
      const edges = JSON.parse(
        JSON.stringify(this.$static.allExperience.edges)
      );
      edges.forEach((e) => {
        const keywords = e.node.keywords;
        keywords.forEach((k) => {
          if (k.skill && k.skill.id) {
            if (skillMap.get(k.skill.name)) {
              let oldskill = skillMap.get(k.skill.name);
              let oldversions = oldskill.versions;
              let newVersions = [
                ...new Set(oldversions.concat(k.versions)),
              ].sort();
              skillMap.set(k.skill.name, {
                path: k.skill.path,
                versions: newVersions,
              });
            } else {
              skillMap.set(k.skill.name, {
                path: k.skill.path,
                versions: k.versions.sort(),
              });
            }
          }
        });
      });
      console.log(skillMap.keys(), "skillMap");
      this.skillMap = skillMap;
      this.draw([...skillMap.keys()]);
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<static-query>
  query {
    allExperience{
      edges{
        node{
          keywords{
            skill{id name path}
            versions
          }
        }
      }
    }
  }
  </static-query>

<style scoped>
#word-cloud {
  margin-top: 15em;
  margin-bottom: 10em;
  width: 100%;
}
</style>
