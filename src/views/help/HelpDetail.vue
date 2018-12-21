<template>
  <div>
    <YsHeader>信息详情</YsHeader>
    <div class="ys-article">
      <h1>用户协议</h1>
      <p>
        获取到的数据项为{{id}}，数据正在拉取中...
      </p>
      <p>
        Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。
      </p>
      <p>
        如果你想在深入学习 Vue 之前对它有更多了解，我们制作了一个视频，带您了解其核心概念和一个示例工程。
      </p>
      <p>
        如果你已经是有经验的前端开发者，想知道 Vue 与其它库/框架有哪些区别，请查看对比其它框架。
      </p>
    </div>

  </div>
</template>

<script>
  import YsHeader from "../../components/Header";
  export default {
    name: "HelpDetail",
    components: {YsHeader},
    props:['id']
  }
</script>

<style lang="less" scoped>
  .ys-article{
    padding: 30px;

    h1{
      padding: 20px 0;
    }
    p{
      padding: 10px 0;
      color: #161616;
      font-size: 3.5vw;
    }
  }
</style>
