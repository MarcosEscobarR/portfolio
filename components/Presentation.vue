<template>
  <div class="blue-container primary">
    <div class="container">
      <div class="title-container">
        <span class="presentation-title">{{ $t('presentationTitle') }}</span>
      </div>
      <div>
        <p class="presentation-subtitle">
          {{ $t('presentationSubtitle') }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Presentation'
}
</script>
<style scoped>
.blue-container {
  width: 100%;
  height: 400px;
}

.container {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 100px;
}

.title-container {
  padding-bottom: 20px;
}

.presentation-title {
  color: white;
  font-size: 40px;
  font-weight: bold;
}

.presentation-subtitle {
  color: white;
  font-size: 20px;
  text-align: center;
}

@media (max-width: 800px) {
  .presentation-title {
    font-size: 30px;
  }

  .presentation-subtitle {
    font-size: 18px;
  }

  .blue-container {
    height: 300px;
  }

  .container {
    padding: 50px 100px;
  }
}
</style>
