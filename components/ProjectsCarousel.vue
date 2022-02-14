<template>
  <div class="center">
    <div class="wrapper">
      <div ref="inner" class="inner">
        <project-card v-for="(item, index) in Object.values(data)" :key="index" :title="item.title" :project-data="item" />
      </div>
    </div>

    <div ref="map" class="map" @click="handleClick">
      <button class="active first" />
      <button class="second" />
      <button class="third" />
    </div>
  </div>
</template>

<script>

export default {
  name: 'ProjectsCarousel',
  props: {
    data: {
      type: {},
      required: true
    }
  },
  methods: {
    handleClick (e) {
      if (e.target.nodeName === 'BUTTON') {
        Array.from(this.$refs.map.children).forEach(item =>
          item.classList.remove('active')
        )
        if (e.target.classList.contains('first')) {
          this.$refs.inner.style.transform = 'translateX(-0%)'
          e.target.classList.add('active')
        } else if (e.target.classList.contains('second')) {
          this.$refs.inner.style.transform = 'translateX(-33.33333333333333%)'
          e.target.classList.add('active')
        } else if (e.target.classList.contains('third')) {
          this.$refs.inner.style.transform = 'translatex(-66.6666666667%)'
          e.target.classList.add('active')
        }
      }
    }
  }

}
</script>

<style scoped lang="scss">
@mixin circle($i) {
  border-radius: 100%;
  height: $i;
  width: $i;
}

$bgBlue: #001d38;
$cardBlue: #0a2640;
$font: "Poppins";

html,
body {
  height: 100%;
}

body {
  background: $bgBlue;
  font-family: $font, sans-serif;
  overflow: hidden;
}

.center {
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  width: 100%;
}

.wrapper {
  display: flex;
  grid-gap: 1em;
  overflow: hidden;
  max-width: 1440px;

  & > .inner {
    display: flex;
    grid-gap: 1em;
    transition: all 1s ease-in-out;
  }
}

.card {
  border-radius: 0.5em;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.5);

  & > img {
    border-top-right-radius: inherit;
    border-top-left-radius: inherit;
    display: block;
    width: 17.5em;
  }

  & > .content {
    background: $cardBlue;
    border-bottom-left-radius: inherit;
    border-bottom-right-radius: inherit;
    padding: 1em;
    text-align: center;

    & > h1,
    & > h3 {
      margin: 0.35em 0;
    }

    & > h1 {
      color: #fff;
      font-size: 1.25rem;
      line-height: 1;
    }

    & > h3 {
      color: #ccc;
      font-size: 0.9rem;
      font-weight: 300;
    }
  }
}

.map {
  margin-top: 1em;
  & > button {
    all: unset;
    background: lighten($cardBlue, 10);
    cursor: pointer;
    margin: 0 0.125em;
    position: relative;
    user-select: none;
    @include circle(1em);

    &.active {
      &:after {
        background: $bgBlue;
        content: "";
        left: 50%;
        position: absolute;
        transform: translate(-50%, -50%);
        top: 50%;
        @include circle(0.5em);
      }
    }
  }
}

</style>
