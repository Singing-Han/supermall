<template>
  <div class="detail-comment-info" v-if="Object.keys(commentInfo).length !== 0">
    <div class="user-comment">
      <div>用户评价</div>
      <div class="more">更多</div>
    </div>
    <div class="comment-info">
      <div class="user-info">
        <div class="user-avatar">
          <img :src="commentInfo.list[0].user.avatar" alt="">
        </div>
        <div class="user-name"> {{commentInfo.list[0].user.uname}} </div>
      </div>
      <div class="comment-content">
        {{commentInfo.list[0].content}}
      </div>
      <div class="goods-info">
        <div class="commit_info">
          <span>{{ commentInfo.list[0].created | createdTime}}</span>
          <span> {{ commentInfo.list[0].style }} </span>
        </div>
        <div v-if="commentInfo.list[0].images" class="goods-image">
          <div v-for="(image , index) in commentInfo.list[0].images" :key="index">
            <img :src="image" alt="" >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {formatDate} from 'common/utils'
export default {
  name: 'DetailCommentInfo',
  props: {
    commentInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  filters: {
    createdTime(time) {
      let date = new Date(time * 1000);
      return formatDate(date,'yyyy-MM-dd');
    }
  }
}
</script>

<style scoped>
.detail-comment-info {
  border-top: 4px solid #eee;
  padding: 0 12px 20px 12px;
  border-bottom: 4px solid #eee;
}

.user-comment {
  display: flex;
  justify-content: space-between;
  padding: 15px 0;
  border-bottom: 2px solid #eee;
  color: #666;
}

.more {
  padding-right: 10px;
  color: #333;
}

.comment-info  {
  padding: 10px 0;
}

.user-info {
  display: flex;
  align-items: center;
  padding: 10px 0;
}

.user-info>div {
  margin-right: 15px;
}

.comment-info .user-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.user-avatar img {
  width: 100%;
  border-radius: 50%;
}

.comment-content {
  font-size: 15px;
  line-height: 20px;
}

.commit_info {
  color: #aaa;
  font-size: 15px;
  margin: 5px 0;
}

.commit_info span {
  margin-right: 5px;
}

.goods-image {
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
}

.goods-image div {
  width: 70px;
  height: 70px;
  margin-right: 5px;
}

.goods-image img {
  width: 100%;
  height: 100%;
}
</style>
