<template>
  <h1>Adresy na internetu</h1>
  <div class="item-wrapper" v-for="website in websites">
    <div v-if="website.headerLevel === 1">
      <h2>{{ website.title }}</h2>
    </div>
    <div v-else-if="website.headerLevel === 2">
      <h3>{{ website.title }}</h3>
    </div>
    <a v-else-if="website.headerLevel === ''" :href="website.link" class="block-portal_link">
      <div>
        <h4>{{ website.title }}</h4>
        <div class="item-description" v-if="website.description">{{ website.description }}</div>
        <div class="link">{{ website.link }}</div>
      </div>
    </a>
  </div>
</template>

<style scoped>
div.link {
  display: inline;
  color: blue;
}

div.item-description {
  margin-top: 1em;
  margin-bottom: 1em;
}

.item-wrapper h2 {
  padding: 0.5em;
  color: #fff;
  background-color: #22f;
}

.item-wrapper h3 {
  padding: 0.5em;
  color: #000;
  background-color: #ccf;
}

.block-portal_link {
  width: 290px;
  margin: 10px auto;
  padding: 10px;
  display: block;
  background-color: #eef;
  border: 1px solid black;
  color: black;
  text-decoration: none;
}

.block-portal_link h4 {
  margin: 1em;
}

.block-portal_link > div {
}

.block-portal_link:hover {
  background-color: #efe;
}
</style>

<script>
import axios from "axios";

export default {
  data() {
    return {
      websites: null,
    };
  },
  created() {
    this.load();
  },
  methods: {
    load() {
      axios({method: "GET", "url": "/websiteSections.tsv"}).then(result => {
        let rows = result.data.split("\n");
        rows.shift();
        this.websites = [];
        for (let row of rows) {
          //console.info(row);
          let cols = row.split("\t");
          let website = {
            headerLevel: !isNaN(parseInt(cols[0])) ? parseInt(cols[0]) : cols[0],
            title: cols[1],
            link: cols[2],
            description: cols[3],
          };
          this.websites.push(website);
        }
        //console.info(this.websites);
      }, error => {
        console.error(error);
      });
    },
  },
};
</script>
