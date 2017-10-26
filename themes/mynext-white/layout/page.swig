{% extends '_layout.swig' %}
{% import '_macro/sidebar.swig' as sidebar_template %}

{% block title %}
{% set page_title_suffix = ' | ' + config.title %}
{% if page.type === "categories" and not page.title %}
{{ __('title.category') + page_title_suffix }}
{% elif page.type === "tags" and not page.title %}
{{ __('title.tag') + page_title_suffix }}
{% else %}
{{ page.title + page_title_suffix }}
{% endif %}
{% endblock %}

{% block content %}

  <div id="posts" class="posts-expand">
  {% include '_partials/page-header.swig' %}
    {# tagcloud page support #}
    {% if page.type === "tags" %}
    <article>
      <div class="tag-cloud">
        <div class="tag-cloud-title">
            {{ _p('counter.tag_cloud', site.tags.length) }}
        </div>
        <div class="tag-cloud-tags">
          {{ tagcloud({min_font: 16, max_font: 35, amount: 999, color: true, start_color: 'gray', end_color: 'black'}) }}
        </div>
      </div>
    </article> 
    {% elif page.type === 'categories' %}
    <article>
      <div class="category-all-page">
        <div class="category-all-title">
            {{ _p('counter.categories', site.categories.length) }}
        </div>
        <div class="category-all">
          {{ list_categories() }}
        </div>
      </div>
    </article>
    {% else %}      
      <article>
        {{ page.content }}
      </article>      
    {% endif %}
  </div>

{% endblock %}

{% block sidebar %}
  {{ sidebar_template.render(false) }}
{% endblock %}
