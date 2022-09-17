<template>
  <div>
    <Header />
    <Spacer :size="50" />
    <VStack
      as="main"
      class="about"
      space="1.5rem"
    >
      <Heading
        as="h1"
        size="1.75rem"
      >
        自己紹介
      </Heading>
      <Text font="verdana">
        こんにちわ、poteboyです
      </Text>
      <Text>
        つい先日、自己紹介の場で<strong>自身の価値観に影響を与えた出来事トップ３</strong>を聞かれました。
        確かにこれは自分がどういった思想の持ち主かを表明するのにとても良い題材だなと思ったので、こちらでも踏襲させて頂くことにしました。
      </Text>
      <Heading
        as="h2"
        size="1.5rem"
      >
        1位 高校アメリカ留学
      </Heading>  
      <Image
        :src="Atkins"
        alt="現地のアメフト部に混ざるpoteboy"
        :width="250"
        :height="250"
        border-radius="50%"
        class="img"
      />
      <Text>
        高校生の頃にアメリカのアーカンソーという南部にある州で１年間現地の高校に通う機会がありました。
      </Text>
      <Text>
        アーカンソーはアメリカ南部に位置する保守的な州で、市民の多くが赤く日焼けした白人労働者層で構成されていました。
        通っていた高校も９割以上の生徒は白人で、覚えている限りで黒人が６人、アジア人は僕を含め４人程度だったと記憶しています。
      </Text>
      <Text>
        僕を受け入れてくれたホストファミリーも定職に就かずフードスタンプを受給している家庭で、
        高校に通えば虐められ、家に帰れば食事がでない毎日を過ごしていました。<br>
        人種差別や貧困を経験するのはこの時が生まれて初めてでした。
      </Text>
      <Text>
        僕は日本では私立の高校に通っていて、周りの生徒もそれなりに裕福な家庭の出身ばかりだったので大学進学は当たり前の感覚でしたが、
        留学先の高校は大学進学率がとても低く、殆どの生徒が高校を卒業したら家業を継いでいました。
      </Text>
      <Text>
        そこで僕は初めて、<strong>自分がただ運が良かっただけ</strong>だった事に気づきました。<br>
        大学に進学できるほど金銭的に恵まれていたのは勿論のこと、勉強をして大学に行くのが当たり前という価値観、
        幼い頃から学習塾に通わせてくれた両親の文化的資本、どれをとっても自分の実力ではありません。
      </Text>
      <Text>
        よく、才能という言葉が「生まれ持って備わった先天的なセンス」のような文脈で語られることがありますが、
        僕は才能と呼ばれる類の殆どは、幼少期の環境や両親の文化・金銭的資本によって形成されていると考えています。
      </Text>
      <Heading
        as="h2"
        size="1.5rem"
      >
        2位 仕事でソフトウェア開発を始めたこと
      </Heading>
      <Image
        :src="devCamp"
        alt="何かの方程式"
        :width="250"
        :height="250"
        border-radius="50%"
        class="img"
      />
      <Text>
        自分がプログラミングに触れたのは大学生の頃で、その頃から趣味でWEBサイトやWEBアプリを作ったりしていましたが、
        それはあくまで趣味の範疇の話で、金銭という報酬を対価に仕事としてプログラムを書くようになったのは大学４年生になってからが初めてでした。
      </Text>
      <Text>
        趣味で作るソフトウェアであればプログラマーが１人いれば事足りるかもしれませんが、仕事はそうではありません。
      </Text>
      <Text>
        普段自分が何気なく使っているアプリも、ディレクターやPM,デザイナー、QAテスター、CS、営業、法務
        など色々な方の努力に支えられていた事を知りました。
      </Text>
      <Text>
        それ以来コンビニに入っても、ここに並んでいる商品その1つ1つの裏には色々な人の努力があり、店頭に並ぶまでに様々なストーリーがあったのだろう
        と考えるようになり、涙なしではコンビニに入れない身体になってしまいました。さすがにそれは大袈裟ですが。
      </Text>
      <Heading
        as="h2"
        size="1.5rem"
      >
        3位 半年で18kg太った事
      </Heading>
      <Text>人は食べると太る（真理）。</Text>
    </VStack>
    <Spacer :size="100" />
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
import { Header } from '@src/components';
import { VStack, Spacer, Text, Heading, Image } from '@core';
import Atkins from './atkins.jpg'
import devCamp from './devCamp.webp'
import { useMeta, useHead } from '#imports';
import {meta} from '@src/constants'

</script>

<style scoped>
.about {
  white-space: pre-line;
  line-height: 2;
  font-size: 1rem;
}

.img {
  margin: 0 auto;
  object-fit: cover;
}
</style>
