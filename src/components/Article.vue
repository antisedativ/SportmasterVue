<template>
  <div class="wrapper" :class="{published: published}">
    <div>
      <div class="header">
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
      </div>
      <div class="body">
        <p>
          {{body}}
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
      console.log(this.id)
      store.changePublic(this.id)
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

.title{
  color: #fff;
  text-decoration: none;
}

.title:hover {
  color: #d4407d;
}


</style>