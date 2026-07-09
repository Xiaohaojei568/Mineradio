<template>
<!-- 空场 Home -->
<section id="empty-home" aria-label="Mineradio home">
  <div class="empty-home-shell">
    <div class="home-hero home-dashboard-shell">
      <div class="home-hero-inner home-dashboard-inner">
        <section class="home-dashboard-section home-weather-board" aria-label="天气概览">
          <div class="home-dashboard-row home-weather-head">
            <button id="home-dashboard-location" class="home-location-chip" type="button" onclick="changeWeatherCity()" title="切换省市区">当前位置</button>
            <button class="home-location-pin" type="button" onclick="locateWeatherRadio()" title="自动定位">定位</button>
            <div id="home-dashboard-weather-tag" class="home-board-label">WEATHER TODAY</div>
          </div>
          <div class="home-weather-main">
            <div class="home-weather-copy">
              <div id="home-dashboard-temp" class="home-weather-temp">--°C</div>
              <div id="home-dashboard-weather-desc" class="home-weather-desc">正在整理天气</div>
            </div>
            <div class="home-weather-mark" aria-hidden="true">
              <span id="home-dashboard-weather-icon">☁</span>
            </div>
          </div>
          <div class="home-weather-stats">
            <div><span>HUMIDITY</span><strong id="home-dashboard-humidity">--</strong></div>
            <div><span>WIND SPEED</span><strong id="home-dashboard-wind">--</strong></div>
            <div><span>FEELS LIKE</span><strong id="home-dashboard-feels">--</strong></div>
          </div>
        </section>

        <section class="home-dashboard-section home-greeting-board" aria-label="今日入口">
          <div>
            <div id="home-dashboard-greeting" class="home-greeting-title">下午好</div>
            <div id="home-dashboard-greeting-sub" class="home-greeting-sub">选一首歌，让今天慢慢亮起来。</div>
          </div>
          <div class="home-dashboard-note" aria-hidden="true">♪</div>
        </section>

        <section class="home-dashboard-section home-lyric-board" aria-label="实时歌词">
          <div class="home-lyric-head">
            <span>LYRICS REAL-TIME</span>
            <b id="home-dashboard-lyric-status">STANDBY</b>
          </div>
          <div id="home-dashboard-lyric" class="home-lyric-scroll" aria-live="polite">
            <div class="home-lyric-stack">
              <div class="home-lyric-line active">欢迎来到你的私人视觉电台</div>
              <div class="home-lyric-line">播放歌曲后，这里会显示实时歌词。</div>
            </div>
          </div>
        </section>
      </div>
    </div>

    <div class="home-grid">
      <button class="home-card" data-home-tone="library" type="button" onclick="openHomeLibrary()">
        <div class="home-card-label" id="home-card-label-library">Library</div>
        <div class="home-card-title" id="home-weather-card-title">我的歌单</div>
        <div class="home-card-sub" id="home-weather-card-sub">打开左侧歌单库</div>
        <div class="home-card-art" id="home-weather-art"></div>
      </button>
      <button class="home-card" data-home-tone="mix" type="button" onclick="openHomeDailyCard()">
        <div class="home-card-label" id="home-card-label-daily">Daily</div>
        <div class="home-card-title" id="home-daily-title">每日推荐</div>
        <div class="home-card-sub" id="home-daily-sub">登录后同步你的今日歌曲</div>
        <div class="home-card-art" id="home-daily-art"></div>
      </button>
      <button class="home-card" data-home-tone="playlist" type="button" onclick="openHomeRadarCard()">
        <div class="home-card-label" id="home-card-label-radar">Song</div>
        <div class="home-card-title" id="home-private-title">私人电台</div>
        <div class="home-card-sub" id="home-private-sub">从你的推荐和歌单里开播</div>
        <div class="home-card-art" id="home-private-art"></div>
      </button>
      <button class="home-card" data-home-tone="mix" type="button" onclick="playHomeNewSongs()">
        <div class="home-card-label" id="home-card-label-new">Continue</div>
        <div class="home-card-title" id="home-continue-title">继续听</div>
        <div class="home-card-sub" id="home-continue-sub">最近播放会出现在这里</div>
        <div class="home-card-art" id="home-continue-art"></div>
      </button>
      <button class="home-card" data-home-tone="local" type="button" onclick="playHomeHeartMode()">
        <div class="home-card-label" id="home-card-label-heart">Profile</div>
        <div class="home-card-title" id="home-profile-title">听歌画像</div>
        <div class="home-card-sub" id="home-profile-sub">播放几首后生成偏好</div>
        <div class="home-card-art" id="home-profile-art"></div>
      </button>
      <button class="home-card" data-home-tone="local" type="button" onclick="playHomeSimilarSongs()">
        <div class="home-card-label" id="home-card-label-similar">Song</div>
        <div class="home-card-title" id="home-library-title">常听歌手</div>
        <div class="home-card-sub" id="home-library-sub">你的偏好会在这里汇总</div>
        <div class="home-card-art" id="home-library-art"></div>
      </button>
    </div>

    <div class="home-rail">
      <div class="home-section-head">
        <div class="home-section-title" id="home-rail-title">为你准备</div>
        <div class="home-section-note" id="home-rail-note">正在整理推荐</div>
      </div>
      <div id="home-tile-row" class="home-tile-row"></div>
    </div>
  </div>
</section>
</template>
