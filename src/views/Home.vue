<template>
  <div class="home">
    <div class="card auth-card">
      <div class="card-content">
        <span class="card-title"><b>Vue</b>ниверситет</span>

          <button class="btn waves-effect waves-light auth-submit" @click="$router.push('/subjects')">
            Войти
          </button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'home'
}
</script>
