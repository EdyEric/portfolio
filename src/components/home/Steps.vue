<template>
  <div>
    <div class="columns">
      <div class="column is-3" />
      <div class="column is-6 buttons">
        <b-button size="is-large" type="is-danger" outlined @click="prevStep">Prev</b-button>
        <b-button size="is-large" type="is-info" outlined @click="nextStep">Next</b-button>
      </div>
      <div class="column is-3" />
    </div>

    <b-steps class="steps" v-model="activeStep" :animated="true" :has-navigation="false">
      <b-step-item label="Profile" :clickable="true">
        <h1 class="title has-text-centered">
          <router-link to="/profile">Profile ( Click here )</router-link>
        </h1>
        <h2>23歳 MENS です。渋谷の IT 企業で日々成長している途中であります。</h2>
        <h2>覚えることが多い今日この頃に感謝しつつ、なんだかんだ言ってゲームに明け暮れています。</h2>
      </b-step-item>

      <b-step-item label="Skill" :clickable="true">
        <h1 class="title has-text-centered">
          <router-link to="/skill">Skill ( Click here )</router-link>
        </h1>
        <h2>新卒入社から幸運なことに、たくさんの技術を学ぶことができました。</h2>
        <h2>覚えている限りで自己評価を行います。</h2>
      </b-step-item>

      <b-step-item label="Work" :clickable="true">
        <h1 class="title has-text-centered">
          <router-link to="/work">Work ( Click here )</router-link>
        </h1>
        <h2>個人的に作成した成果物を取りあげます。</h2>
        <h2>成果物については GitHub にて公開しています。</h2>
      </b-step-item>

      <b-step-item label="Finish" :clickable="true">
        <h1 class="title has-text-centered">Finish</h1>
        <h2>一読ありがとうございました。</h2>
        <h2>Twitter, Qiita など利用していますのでもし良ければお声かけていただけると幸いです。</h2>
      </b-step-item>
    </b-steps>
  </div>
</template>

<script lang="ts">
import { createComponent, ref } from "@vue/composition-api";

export default createComponent({
  setup() {
    const activeStep = ref<number>(0);
    const nextStep = () =>
      (activeStep.value = Math.abs((activeStep.value + 1) % 4));
    const prevStep = () =>
      (activeStep.value = Math.abs((activeStep.value - 1) % 4));

    setInterval(() => (activeStep.value = (activeStep.value + 1) % 4), 8000);

    return { activeStep, prevStep, nextStep };
  }
});
</script>

<style lang="sass" scoped>
h1, h2
    color: white;
    text-align: center
    padding: 16px 0px

.buttons
  text-align: center;

  .is-large
    padding: 0px 30px;
    margin: 0px 4px;
</style>