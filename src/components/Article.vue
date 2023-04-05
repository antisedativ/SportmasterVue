<template>
  <v-container>
    <v-col cols="8" :class="{published: published}">
      <v-card>
        <v-card-title>
          <span :style="{fontWeight: 'bold'}">
            {{id}}.
          </span>
          <span class="author" :style="{fontStyle: isPublic}">
            {{upperAuthor}}
          </span>
          <div>
            <router-link :to="'/article/' + id" class="title">
              {{title}}
            </router-link>
          </div>
        </v-card-title>
        <v-card-text>
          <p>
            {{body}}
          </p>
        </v-card-text>
        <v-btn @click="publish">Publish</v-btn>
      </v-card>
      
    </v-col>
  </v-container>
</template>

<script>
export default {
  name: 'ArticleComp',
  props: {
    id: Number,
    author: String,
    title: String,
    body: String,
    published: Boolean
  },
  computed: {
    upperAuthor() {
      return this.author.toUpperCase()
    },
    isPublic() {
      return this.published ? 'italic' : 'normal'
    }
  },
  methods: {
    publish() {
      this.$store.commit('changePublic', this.id)
    }
  },
  watch: {
    published(newValue) {
      console.log(`Статью ${this.title} - ${newValue ? 'Опубликовали!' : 'Сняли с публикации!'} `)
    }  
  }
}
</script>

<style scoped>

.published {
  border: 2px solid #43c691;
}

.title{
  color: #000;
  margin-left: 20px;
  text-decoration: none;
}

.title:hover {
  color: #d4407d;
}


</style>