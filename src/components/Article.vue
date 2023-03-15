<template>
  <div class="wrapper" :class="{published: article.published}">
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
import store from '@/store/index'
export default {
  name: 'ArticleComp',
  props: {
    article: {
      type: Object,

      id: Number,
      author: String,
      title: String,
      body: String,
      published: Boolean
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
      store.changePublic(this.article.id)
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
  width: 600px;
  border: 3px solid #cc1711;
  padding: 20px;
  margin: 30px 20px;
  border-radius: 20px;
	background-color: rgba(254,240,204, .6);
  display: flex;
  justify-content: space-between;
}

.published {
  border: 3px solid #43c691;
}

.btn {
  height: 50px;
  width: 80px;
  border-radius: 15px;
  margin-top: 20px;
  cursor: pointer;
	background-color: #989da0;
  color: #fff;
  border-color: #c8dff2;
}
.btn:hover {
	scale: 1.05;
}
</style>