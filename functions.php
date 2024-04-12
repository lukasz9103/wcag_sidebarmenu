<?php
// register nav menu positions
  function register_my_menus()
  {
    register_nav_menus(
      array(
        'bip-menu' => __('Menu BIP')
      )
    );
  }
  
  add_action('init', 'register_my_menus');
  
  class Sidebar_Menu_Walker extends Walker_Nav_Menu
  {
    function start_el(&$output, $item, $depth = 0, $args = [], $id = 0)
    {
      $output .= "<li class='" . implode(" ", $item->classes) . "'>";
      
      if ($item->url && $item->url != '#') {
        $output .= '<a class="" href="' . $item->url . '" tabindex="0">';
      } else {
        $output .= '<button class="separator" aria-expanded="false" tabindex="0">';
      }
      $output .= '<span>' . $item->title . '</span>';
      
      if ($item->url && $item->url != '#') {
        $output .= '</a>';
      } else {
        $output .= '</button>';
      }
    }
  }