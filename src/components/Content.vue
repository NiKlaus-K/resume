<template>
    <section class="col-md-9 card-wrapper float-right">
        <div class="card content">
            <hr>
            <div class="detail" id="introduction">
                <div class="icon"><i class="far fa-id-card"></i><span>自我描述</span></div>
                <div class="info">
                    <h4>自我描述</h4>
                    <ul class="info-list">
                        <li class="info-item">
                            <div class="item-title">
                                <a class="item-title-one" href="#"></a>
                                <span class="item-title-two"></span>
                            </div>
                            <div class="item-subtitle"></div>
                            <div class="item-describe"></div>
                            <ul class="item-list">
                                <li class="item-item">大学期间学习计算机相关课程，有一定的的开发基础；</li>
                                <li class="item-item">工作期间独立负责OA项目，经历从项目立项启动到项目上线验收全过程；</li>
                                <li class="item-item">在项目执行过程中，熟练使用jQuery实现客户对流程的个性需求； </li>
                                <li class="item-item">掌握Html、Css、JavaScript、Vue等前端知识。</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="detail" id="work">
                <div class="icon"><i class="fas fa-mail-bulk"></i><span>工作经历</span></div>
                <div class="info">
                    <h4>工作经历</h4>
                    <ul class="info-list">
                        <li class="info-item"  v-for="item in works" v-bind:key="item.id">
                            <div class="item-title">
                                <a class="item-title-one" href="#">{{item.company}}</a>
                                <span class="item-title-two">————{{item.position}}</span>
                            </div>
                            <div class="item-subtitle">{{item.startDate}}-{{item.endDate}}</div>
                            <div class="item-describe">主要工作内容：</div>
                            <ul class="item-list">
                                <li class="item-item" v-for="task in item.highlights" v-bind:key="task.id">{{task}}</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="detail" id="education">
                <div class="icon"><i class="fas fa-graduation-cap"></i><span>教育经历</span></div>
                <div class="info">
                    <h4>教育经历</h4>
                    <ul class="info-list">
                        <li class="info-item" v-for="item in education" v-bind:key="item.id">
                            <div class="item-title">
                                <a class="item-title-one" href="#">{{item.school}}&nbsp; {{item.studyType}}</a>
                                <span class="item-title-two">——{{item.major}}</span>
                            </div>
                            <div class="item-subtitle">{{item.startDate}}-{{item.endDate}}</div>
                            <div class="item-describe"></div>
                            <div class="tag"><span v-for="course in item.courses" v-bind:key="course.id">{{course}}</span></div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="detail" id="project">
                 <div class="icon"><i class="fas fa-sitemap"></i><span>项目经验</span></div>
                <div class="info">
                    <h4>项目经验</h4>
                    <ul class="info-list">
                        <li class="info-item" v-for="item in projects" v-bind:key="item.id">
                            <div class="item-title">
                                <a class="item-title-one" href="#">{{item.name}}</a>
                                <span class="item-title-two"></span>
                            </div>
                            <div class="item-subtitle">{{item.startDate}}-{{item.endDate}}</div>
                                <div class="item-describe">{{item.summary}} <a :href="item.website" v-show="item.website" target="_Blank">{{item.website}}</a></div>
                            <ul class="item-list">
                                <li class="item-item" v-for="task in item.tasks" v-bind:key="task.id">{{task}}</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="detail" id="production">
                <div class="icon"><i class="fas fa-book"></i><span>作品展示</span></div>
                <div class="info">
                    <h4>作品展示</h4>
                    <ul class="info-list">
                        <li class="info-item" v-for="item in productions" v-bind:key="item.id">
                            <div class="item-title">
                                <a class="item-title-one" :href=item.href target="_blank">{{item.name}}</a>
                                <span class="item-title-two"></span>
                            </div>
                            <div class="item-subtitle"></div>
                            <div class="item-describe">{{item.describe}}</div>
                            <div class="tag">
                                <span v-for="tag in item.tag" v-bind:key="tag.id">{{tag}}</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="detail" id="skills">
                <div class="icon"><i class="fas fa-tools"></i><span>技能评价</span></div>
                <div class="info">
                    <h4>技能评价</h4>
                    <ul class="info-list">
                        <li class="info-item" v-for="item in skills" v-bind:key="item.id">
                            <div class="item-title">
                                <a class="item-title-one" href="#"></a>
                                <span class="item-title-two"></span>
                                <span class="item-title-three">{{item.name}}</span>
                            </div>
                            <div class="item-subtitle"></div>
                            <div class="item-describe"></div>
                            <div class="tag">
                                <span v-for="keyword in item.keywords" v-bind:key="keyword.id">{{keyword}}</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
/* eslint-disable */
export default {
  name: 'Content',
  props: {
      contents: Object,
  },
  computed: {
    works() {
        return this.contents.works;
    },
    education() {
        return this.contents.education;
    },
    projects() {
        return this.contents.projects;
    },
    productions() {
        return this.contents.productions;
    },
    skills() {
        return this.contents.skills;
    },
    languages() {
        return this.contents.languages;
    }
  }
}
</script>

<style scoped>
.card-wrapper {
  padding: 5px;
  margin-left: auto;
}
hr {
  margin: 20px 0;
}
.card {
  border-color: #ccc;
}
.content {
  padding: 10px 20px;
}
.detail {
  display: table;
  padding: 10px;
}
.icon {
  display: table-cell;
  padding: 0 10px;
  width: 56px;
  font-size: 20px;
}
.info {
  text-align: left;
  display: table-cell;
}
.info h4 {
  color: #707070;
  font-size: 18px;
}
.info-list {
    margin: 0;
}
.info-item {
  padding: 10px 0;
  list-style: none;
  border-top: #e6e6e6 1px solid;
}
.item-title {
  color: #337ab7;
  font-size: 18px;
  font-weight: bold;
}
.item-title .item-title-one {
  color: #337ab7;
  text-decoration: none;
}
.item-title .item-title-one:hover {
  color: #2b8fff;
}
.item-title .item-title-two {
  color: #888;
  font-size: 16px;
  font-weight: normal;
}
.item-title .item-title-three{
    font-size: 14px;
    font-weight: 700;
    color: #333;
    margin-bottom:5px; 
}
.item-subtitle {
  color: #777;
  font-size: 85%;
  margin: 0 0 10px;
}
.item-describe {
  margin-bottom: 10px;
}
.item-describe a{
  color: #337ab7;
  text-decoration: none;
}
.item-describe a:hover{
  color: #2b8fff;
}
.item-list {
  margin-left: 20px;
}
.tag span {
  background-color: #5bc0de;
  font-size: 10px;
  font-weight: 700;
  color: #fff;
  line-height: 1;
  margin-right: 6px;
  padding: 3px 6px;
  border-radius: 3px;
  /* span标签不换行 */
  display:inline-block;
}
@media (max-width: 768px) {
  .icon {
    display: block;
    padding: 10px 0;
    width: 100%;
    text-align: left;
  }
  /* 显示副标题 */
  .icon span {
    color: #707070;
    font-size: 18px;
    line-height: 1.2;
    font-weight: 500;
    margin-bottom: 0.5rem;
    padding-left: 1rem;
  }
  .info h4,
  hr {
    display: none !important;
  }
  .info {
    display: block;
  }
 .info-list {
    width: 100%;
  }
}
@media (min-width: 768px) {
  /* 取消副标题显示 */
  .icon span {
    display: none !important;
  }
}
</style>