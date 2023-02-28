<template>
  <div class="wrapper" :class="{published: published}">
    <div>
      <div class="title">
        <span :style="{fontWeight: 'bold'}">
          {{article.id}}.
        </span>
        <span class="author" :style="{fontStyle: isPublic}">
          {{upperAuthor}}
        </span>
        <div>
          {{article.title}}
        </div>
      </div>
      <div class="body">
        <p>
          {{article.body}}
        </p>
      </div>
    </div>
    <button @click="publish" class="btn">Publish</button>
  </div>
</template>

<script>
export default {
  name: 'ArticleComp',
  props: {
    article: {
      type: Object,

      id: Number,
      author: String,
      title: String,
      body: String
    },

    published: Boolean
  },
  computed: {
    upperAuthor() {
      return this.article.author.toUpperCase()
    },
    isPublic() {
      return this.article.published ? 'italic' : 'normal'
    }
  },
  methods: {
    publish() {
      this.$emit('changePublic', this.article.id)
    }
  },
  watch: {
    published(newValue) {
      console.log(`Статью ${this.article.title} - ${newValue ? 'Опубликовали!' : 'Сняли с публикации!'} `)
    }  
  }
}
</script>


<style scoped>

.wrapper {
  width: 470px;
  border: 2px solid red;
  padding: 20px;
  margin: 20px;
  border-radius: 20px;

  display: flex;
  justify-content: space-between;
}

.published {
  border: 2px solid green;
}

.btn {
  height: 50px;
  width: 80px;
  border-radius: 15px;
  margin-top: 20px;
  cursor: pointer;
  color: #fff;
  border-color: pink;
}
</style>