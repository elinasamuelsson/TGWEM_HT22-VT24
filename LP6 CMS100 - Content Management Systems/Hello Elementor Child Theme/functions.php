<?php
function helloElementor_child_styles()
{
    wp_enqueue_style('parent', get_template_directory_uri() . '/style.css');
    wp_enqueue_style('child', get_stylesheet_directory_uri() . '/style.css');
    wp_enqueue_style('font', 'https://fonts.googleapis.com/css2?family=Ubuntu+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap');
}
add_action('wp_enqueue_scripts', 'helloElementor_child_styles');

register_sidebar(
    array(
        'name' => 'Footer Middle',
        'id' => 'footer-middle',
        'description' => 'Middle footer widget',
        'before_widget' => '<section class="widget-container">',
        'after_widget' => '</section>',
        'before_title' => '<div class=widget-title><h3>',
        'after_title' => '</h3></div>'
    )
);

register_sidebar(
    array(
        'name' => 'Footer Left',
        'id' => 'footer-left',
        'description' => 'Left footer widget',
        'before_widget' => '<section class="widget-container">',
        'after_widget' => '</section>',
        'before_title' => '<div class=widget-title><h3>',
        'after_title' => '</h3></div>'
    )
);

register_sidebar(
    array(
        'name' => 'Footer Right',
        'id' => 'footer-right',
        'description' => 'Right footer widget',
        'before_widget' => '<section class="widget-container">',
        'after_widget' => '</section>',
        'before_title' => '<div class=widget-title><h3>',
        'after_title' => '</h3></div>'
    )
);
?>