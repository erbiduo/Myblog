<div class="copyright" >
  {% set current = date(Date.now(), "YYYY") %}
  &copy; {% if theme.since and theme.since != current %} {{ theme.since }} - {% endif %}
  <span itemprop="copyrightYear">{{ current }}</span>
  <span class="with-love">
    <i class="fa fa-{{ theme.authoricon }}"></i>
  </span>
  <span class="author" itemprop="copyrightHolder">{{ config.author }}</span>
</div>

{% if theme.copyright %}
<div class="powered-by">
  {{ __('footer.powered', '<a class="theme-link" href="https://hexo.io">Hexo</a>') }}
</div>

<div class="theme-info">
  {{ __('footer.theme') }} -
  <a class="theme-link" href="https://github.com/iissnan/hexo-theme-next">
    NexT.{{ theme.scheme }}
  </a>
</div>
{% endif %}

<!-- MusicPlayer 尾部引入 -->
<script src="https://api.i-meto.com/music/player.js"></script>

<!-- 输入特效 -->
<script type="text/javascript" src="{{ url_for(theme.js) }}/src/activate-power-mode.js"></script>
<script>
  POWERMODE.colorful = true; // 控制开启/开启礼花特效  
  POWERMODE.shake = true; // 控制开启/关闭屏幕震动特效  
  document.body.addEventListener('input', POWERMODE);
</script>

