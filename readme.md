# WCAG - sidebar accordion menu

#### Use:

```php
<?php $mainMenu = wp_get_nav_menu_name('bip-menu'); ?>
<?php wp_nav_menu([
  'container' => 'nav',
  'container_id' => 'main-menuBip',
  'container_class' => 'sidebarMenu',
  'container_aria_label' => $mainMenu,
  'depth' => 0,
  'theme_location' => 'bip-menu',
  'items_wrap' => '<h2 class="visually-hidden">' . $mainMenu . '</h2><ul class="%2$s">%3$s</ul>',
  'walker' => new Sidebar_Menu_Walker()
]);
?>
```

Created by: [@lukasz9103](https://github.com/lukasz9103)